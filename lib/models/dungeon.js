'use strict';

var _ = require('lodash');

function Dungeon(params) {

  this.lvlList = [];
  this.finished = false;

  _.merge(this, params);
}

module.exports = Dungeon;
