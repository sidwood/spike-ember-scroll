'use strict';

var Joi = require('joi');
var chance = require('./chance');
var items = chance.items();

module.exports = {
  validate: {
    query: {
      skip: Joi.number().integer().min(0),
      limit: Joi.number().integer().min(1).max(100)
    }
  },
  handler: function (request, reply) {
    var skip = request.query.skip || 0;
    var limit = request.query.limit || 50;
    var results = items.slice(skip, limit + skip);
    reply({
      items: results,
      meta: {
        count: results.length,
        total: items.length
      }
    });
  }
};
