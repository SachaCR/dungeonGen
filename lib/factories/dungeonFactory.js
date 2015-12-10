'use strict';

let levelFactory = require('./levelFactory');

function validateArgs(nbLvl, nbRoom) {
  if (!Number.isInteger(nbLvl) || nbLvl <= 0) {
    throw new RangeError('nbLvl must be Integer and > 0');
  }

  if (!Number.isInteger(nbRoom) || nbRoom <= 0) {
    throw new RangeError('nbRoom must be Integer and > 0');
  }
}

function create(nbLvl, nbRoom, commons) {
  validateArgs(nbLvl, nbRoom, commons);

  let levels = [];

  for (let i = 0; i < nbLvl; i++) {
    levels.push(levelFactory.create(i, nbRoom, commons.randElement)); // i represent level difficulty
  }

  return {
    currentRoom: levels[0].rooms[0],
    currentLevel: 0,
    levels: levels,
  };
}

module.exports = {
  create: create,
};