'use strict';

var _ = require('lodash');

function Door(params) {

  this.targetRoomId = 0;
  this.locked = false;

  _.merge(this, params);
}

module.exports = Door;
