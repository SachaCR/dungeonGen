'use strict';

const actionsTypes = ['attack', 'move', 'use', 'pick', 'equip', 'unequip', 'drop', 'look', 'cast'];

const targetByTypes = {
  move: ['north', 'south', 'east', 'west'],
  attack: ['ennemy1', 'ennemy2', 'ennemy3'],
  cast: ['player', 'ennemy', 'ennemies'],
  use: ['player', 'ennemy', 'ennemies'],
  pick: ['player'],
  equip: ['player'],
  unequip: ['player'],
  drop: ['player'],
  look: ['room'],
};

const ownerByTypes = {
  move: ['player'],
  attack: ['player', 'ennemy'],
  cast: ['player', 'ennemy'],
  use: ['player', 'ennemy'],
  pick: ['player'],
  equip: ['player'],
  unequip: ['player'],
  drop: ['player'],
  look: ['player'],
};

function validateArgs(owner, type, target, using, priority) {
  return;
}

function create(owner, type, target, using, priority) {
  validateArgs(owner, type, target, priority);

  return {
    owner: owner,
    type: type,
    target: target,
    using: using,
    priority: priority,
  };
}

module.exports = {
  create: create
};