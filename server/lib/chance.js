'use strict';

var Chance = require('chance');
var chance = module.exports = new Chance();

chance.mixin({
  items: function() {
    var results = [];
    for (var i = 0; i < 587; i++) {
      results.push({
        id: chance.guid(),
        title: chance.sentence({words: chance.integer({min: 2, max: 5})}),
        blurb: chance.sentence(),
        twitter: chance.twitter(),
        likes: chance.integer({min: 0, max: 100})
      });
    };
    return results;
  }
});
