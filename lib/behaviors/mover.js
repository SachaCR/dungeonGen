'use strict';

function mover() {
  return {
    move: (action, dungeon) => {
      let door = dungeon.CurrentRoom[action.target];
      if (!door) {
        return 'There is no door in this direction';
      }

      if (door.locked) {
        return 'The door is locked';
      }

      dungeon.currentRoom = dungeon.rooms[door.targetRoomId];
      return 'You open the door and go to the ${action.target}';
    }
  };
}

module.exports = mover;