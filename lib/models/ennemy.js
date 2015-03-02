'use strict';

var _ = require('lodash');

function Ennemy(params) {
  this.name = 'Slime';
  this.lvl = 0;

  this.hp = 10;
  this.spd = 1;
  this.def = 0;
  this.str = 2;
  this.mag = 0;

  this.actions = [];

  _.merge(this, params);
}

module.exports = Ennemy;
