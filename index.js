'use strict';

var _ = require('lodash');

var Room = require('./lib/models/room');
var Door = require('./lib/models/door');

var internals = {
  directions: ['north', 'south', 'east', 'west'];
};

function generate(nbRoom) {
  dungeonMap = [];

  var room = new Room(0);
  dungeonMap.push(room);

  for(var i = 0 ; i < nbRoom ; i++) {

  }

  return dungeonMap;
}

module.exports = {
  generate: generate,
};
