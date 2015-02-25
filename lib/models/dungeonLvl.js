'use strict';

var _ = require('lodash');

function DungeonLvl(params) {

  this.map = [];
  this.nbRoom = 0;
  this.lvl = 0;

  _.merge(this, params);
}

DungeonLvl.prototype.getRoomById = function getRoomById(id) {
  return this.map[id];
};

module.exports = DungeonLvl;
