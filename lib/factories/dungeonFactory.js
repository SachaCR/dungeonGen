'use strict';

let levelFactory = require('./levelFactory');

function validateArgs(nbLvl, nbRoom) {
  if (!Number.isInteger(nbLvl) || nbLvl < 0) {
    throw new RangeError('nbLvl must be Integer and >= 0');
  }

  if (!Number.isInteger(nbRoom) || nbRoom < 0) {
    throw new RangeError('minRoom must be Integer and > 0');
  }
}

function create(nbLvl, nbRoom) {
  validateArgs(nbLvl, nbRoom);

  let levels = [];

  for (let i = 0; i < nbLvl; i++) {
    levels.push(levelFactory.create(i, nbRoom)); // i represent level difficulty
  }

  return {
    currentRoom: levels[0].rooms[0],
    levels: levels,
  };
}

module.exports = {
  create: create,
};