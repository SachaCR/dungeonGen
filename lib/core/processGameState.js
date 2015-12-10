'use strict';

let _ = require('lodash');

let processActions = require('./processActions');

function processGameState(player, dungeon, playerAction) {
  let currentRoom = dungeon.currentRoom;
  let actions = currentRoom.ennemies.map((ennemy) => ennemy.getAction()); // Add all ennemies actions
  if (playerAction) {
    actions.push(playerAction); // Add the player actions in the list
  }
  _.sortBy(actions, (item) => item.priority); // Sort by priority
  actions.reverse(); // to get biggest priority first

  let actionsResults = processActions(playerAction, player, dungeon); // Execute actions in priority order

  // Return the new game state
  return {
    player: player,
    dungeon: dungeon,
    actionsResults: actionsResults,
  };
}

module.exports = processGameState;