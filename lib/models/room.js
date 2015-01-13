'use strict';

function Room(params) {
	if (!params) {
		params = {};
	}

	this.id =	params.id || 0;
	this.populate = params.populate || false;
	this.north = null;
	this.south = null;
	this.east = null;
	this.west = null;
	this.ennemyList = params.ennemyList || [];
	this.objectList =	params.objectList || [];
};

module.exports = Room;
