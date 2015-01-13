'use strict';

function Room(params) { 
	this.roomId =	params.roomId;
	this.populate = params.populate || false;
	this.doors = params.doors || [],
	this.ennemyList = params.ennemyList || [];
	this.objectList =	params.objectList || [];
};

module.exports = Room;
