'use strict';

function processActions(actions, player, dungeon) {
  let results = actions.map(function (action) {
    if (action.owner === 'player' && player.health > 0) {
      return player.do(action, dungeon);
    } else if (player.health <= 0) {
      return 'You are dead';
    } else {
      let ennemy = dungeon.currentRoom.ennemies[action.owner];
      if (ennemy.health > 0) {
        return ennemy.do(action, player);
      } else {
        return ennemy.name + 'died';
      }
    }
  });

  return results;
}

module.exports = processActions;