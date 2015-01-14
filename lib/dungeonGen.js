'use strict';

var Room = require('./models/room');
var Door = require('./models/door');

var internals = {
  randDirection: function randDirection() {
    var directions = ['north', 'south', 'east', 'west'];
    return directions[Math.floor((Math.random()*3) + 0)];
  },

  reverseDir: function reverseDirection(direction) {
    var reverseDir = {
      north: 'south',
      south: 'north',
      east: 'west',
      west: 'east'
    };
    return reverseDir[direction];
  },
};

function generate(nbRoom) {
  var dungeonMap = [];

  var currentRoom = new Room({ id: 0 });
  dungeonMap.push(currentRoom);
  var index = 1;

  while (index < nbRoom ) {
    var direction = internals.randDirection();

    if (currentRoom[direction]) { // If there is already a door for this direction.
      var targetRoom = currentRoom[direction].targetRoomId; // We go through this door to set a door in this targetted room.
      currentRoom = dungeonMap[targetRoom];
    } else {
      //Setting the door to the nextRoom in the current room.
      var door = new Door({ targetRoomId: index });
      currentRoom[direction] = door;

      // Creating the new room.
      var nextDoor = new Door({ targetRoomId: currentRoom.id });
      var nextRoom = new Room({ id: index });
      var reverseDir = internals.reverseDir(direction); // Reverse the direction ex : south become north.
      nextRoom[reverseDir] = nextDoor;
      dungeonMap.push(nextRoom); // Add the new room to the map.

      index++; // Increase created room Number.

      currentRoom = nextRoom; // The new room become current.
    }
  }

  return dungeonMap;
}

module.exports = {
  generate: generate,
};
