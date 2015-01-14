'use strict';

var _ = require('lodash');

function Room(params) {

	this.id =  0;
	this.populate = false;
	this.north = null;
	this.south = null;
	this.east = null;
	this.west = null;
	this.ennemyList = [];
	this.objectList = [];

	_.merge(this, params);
}

module.exports = Room;
