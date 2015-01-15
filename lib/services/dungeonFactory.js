'use strict';

var _ = require('lodash');

var Room = require('../models/room');
var Door = require('../models/door');

var directions = require('../helpers/directions');

var internals = {
  randDirection: function randDirection(directions) {
    return directions[Math.floor((Math.random()*(directions.length - 1)) + 0)];
  },
};

function generate(nbRoom) {
  var dungeonMap = [];

  var currentRoom = new Room({ id: 0 });
  dungeonMap.push(currentRoom);
  var index = 1;

  while (index < nbRoom ) {
    
    var direction = internals.randDirection(directions);
    var newCoord =  { x: currentRoom.x + direction.dX, y: currentRoom.y + direction.dY };
    var roomExist = _.find(dungeonMap, newCoord);

    if (currentRoom[direction.name]) { // If there is already a door for this direction.
      var targetRoom = currentRoom[direction.name].targetRoomId; // We go through this door to set a door in this targetted room.
      currentRoom = dungeonMap[targetRoom];
    } else if (!roomExist) {
      //Setting the door to the nextRoom in the current room.
      var door = new Door({ targetRoomId: index });
      currentRoom[direction.name] = door;

      // Creating the new room.
      var nextDoor = new Door({ targetRoomId: currentRoom.id });

      var nextRoom = new Room({
        id: index,
        x: newCoord.x,
        y: newCoord.y,
      });
      var reverseDir = direction.reverse; // Reverse the direction ex : south become north.
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
