'use strict';

function Room(params) { 
	this.id =	params.id;
	this.populate = params.populate || false;
	this.ennemyList = params.ennemyList || [];
	this.objectList =	params.objectList || [];
	this.north = null;
	this.south = null;
	this.east = null;
	this.west = null;
};

module.exports = Room;
