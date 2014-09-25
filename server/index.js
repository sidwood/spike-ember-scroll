'use strict';

var Hapi = require('hapi');
var itemsHandler = require('./lib/items-handler');


var server = new Hapi.Server(3000, {
  cors: true
});

server.route({
  method: 'GET',
  path: '/api/items',
  config: itemsHandler
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
