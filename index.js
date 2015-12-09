'use strict';

var _ = require('lodash');

var dungeonFactory = require('./lib/service/dungeonFactory');
var ennemyFactory = require('./lib/service/ennemyFactory');

module.exports = {
  dungeonFactory: dungeonFactory,
  ennemyFactory: ennemyFactory,
};

/*
// Pseudo code :

function processActions(actions, player, room) {
  let results = actions.map(function (action) {
    if (action.owner === 'player' && player.health > 0) {
      return player.do(action, room);
    } else if (player.health <= 0) {
      return 'You are dead';
    } else {
      var ennemy = room.ennemies[action.owner];
      if (ennemy.health > 0) {
        return ennemy.do(action, player);
      } else {
        return ennemy.name + 'died';
      }
    }
  });

  return results;
}

function processGameState(player, room, playerAction) {

  let actions = room.ennemies.map((ennemy) => ennemy.getAction()); // Add all ennemies actions
  if (playerAction) {
    actions.push(playerAction); // Add the player actions in the list
  }
  _.sortBy(actions, (item) => item.priority); // Sort by priority
  actions.reverse(); // to get biggest priority first

  let actionsResults = processActions(playerAction, player, room); // Execute actions in priotity order

  // Return the new game state
  return {
    player: player,
    room: room,
    actionsResults: actionsResults,
  };
}


function initGame(name, race, classe) {
  let dungeon = generateDungeon.lvl(3).minRoom(10).maxRoom(15);
  let player = generatePlayer(name, race, classe);
  let currentRoom = dungeon.lvl(0).room(0);
  return processGameState(player, currentRoom);
}
//*/