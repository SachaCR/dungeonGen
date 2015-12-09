'use strict';

let dungeonFactory = require('./lib/factories/dungeonFactory');
let playerFactory = require('./lib/factories/playerFactory');
let processGameState = require('./lib/core/processGameState');

function initGame(name, race, classe) {
  let dungeon = dungeonFactory.create(3, 10, 15);
  let player = playerFactory.create(name, race, classe);
  return processGameState(player, dungeon);
}

module.exports = {
  initGame: initGame,
};