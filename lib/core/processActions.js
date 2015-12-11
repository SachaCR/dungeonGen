'use strict';

function processActions(actions, player, dungeon) {
  let results = actions.map(function (action) {
    if (player.health <= 0) {
      return 'You are dead';
    } else if (action.owner === 'player' && player.health > 0) {
      if (!player[action.type]) {
        return 'You can not do that';
      }
      return player[action.type](action, dungeon);
    } else {
      let ennemy = dungeon.currentRoom.ennemies[action.owner];
      if (ennemy.health > 0) {
        if (!ennemy[action.type]) {
          throw new RangeError('This ennemy can not do that : ', action.type);
        }
        return ennemy[action.type](action, player);
      } else {
        return ennemy.name + 'died';
      }
    }
  });

  return results;
}

module.exports = processActions;