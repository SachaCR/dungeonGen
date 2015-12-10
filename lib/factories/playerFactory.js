'use strict';

let mover = require('../behaviors/mover');
let getState = require('../behaviors/getState');
let leveler = require('../behaviors/leveler');

const classes = ['barbar', 'wizard', 'rogue'];
const races = ['human', 'elve', 'orc'];

const classesStats = {
  barbar: {
    str: 10,
    int: 3,
    agi: 2,
    spd: 5,
    def: 7,
  },
  wizard: {
    str: 3,
    int: 10,
    agi: 4,
    spd: 5,
    def: 3,
  },
  rogue: {
    str: 6,
    int: 5,
    agi: 7,
    spd: 7,
    def: 5,
  }
};

const racesStats = {
  orc: {
    str: 5,
    int: 2,
    agi: 1,
    spd: 1,
    def: 5,
  },
  human: {
    str: 3,
    int: 5,
    agi: 3,
    spd: 2,
    def: 2,
  },
  elve: {
    str: 2,
    int: 3,
    agi: 5,
    spd: 4,
    def: 2,
  }
};

function validateArgs(name, race, classe) {
  if (typeof name !== 'string') {
    throw new TypeError('Name should be a string');
  }

  if (typeof race !== 'string' || races.indexOf(race) === -1) {
    throw new RangeError('Race name should be : "human", "elve" or "orc"');
  }

  if (typeof classe !== 'string' || classes.indexOf(classe) === -1) {
    throw new RangeError('Classe name should be : "barbar", "wizard" or "rogue"');
  }
}

function create(name, race, classe) {
  validateArgs(name, race, classe);

  // create the state
  let state = {
    name: name,
    level: 0,
    race: race,
    classe: classe,
    inventory: [],
    health: 0,
    maxHealth: 0,
    mana: 0,
    maxMana: 0,
    stats: {
      str: racesStats[race].str + classesStats[classe].str,
      int: racesStats[race].int + classesStats[classe].int,
      agi: racesStats[race].agi + classesStats[classe].agi,
      spd: racesStats[race].spd + classesStats[classe].spd,
      def: racesStats[race].def + classesStats[classe].def,
    },
  };

  // Add methods to our state to create the player object
  let player = Object.assign({},
    leveler(state),
    mover(state),
    getState(state)
  );

  player.levelUp(); // up the player to level 1 to setup his stats

  return player;
}

module.exports = {
  create: create,
};
