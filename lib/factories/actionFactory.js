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

function validateArgs(owner, type, target) {

}

function action(owner, type, target) {
  validateArgs(owner, type, target);

  return {
    owner: '',
    type: '',
    target: '',
    using: '',
  };
}

module.exports = action;