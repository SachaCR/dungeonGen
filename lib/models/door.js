'use strict';

function Door(params) {
	this.direction =	params.direction;
	this.locked = params.locked || false;
};

module.exports = Door;
