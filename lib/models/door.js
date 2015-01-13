'use strict';

function Door(params) {
	if (!params) {
		params = {};
	}

	this.targetRoomId =	params.targetRoomId;
	this.locked = params.locked || false;
};

module.exports = Door;
