'use strict';

var _ = require('lodash');

function Dungeon(params) {

  this.map = [];
  this.nbRoom = 0;

  _.merge(this, params);
}

Dungeon.prototype.getRoomById = function getRoomById(id) {
  return this.map[id];
};

module.exports = Dungeon;
