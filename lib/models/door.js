'use strict';

function Door(params) {
	this.targetRoomId =	params.targetRoomId;
	this.locked = params.locked || false;
};

module.exports = Door;
