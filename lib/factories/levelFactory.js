'use strict';

let _ = require('lodash');

let directions = require('../helpers/directions');
let roomFactory = require('./roomFactory');
let doorFactory = require('./doorFactory');

function validateArgs(difficulty, nbRoom) {
  if (!Number.isInteger(difficulty) || difficulty < 0) {
    throw new RangeError('difficulty must be Integer and >= 0');
  }

  if (!Number.isInteger(nbRoom) || nbRoom <= 0) {
    throw new RangeError('nbRoom must be Integer and > 0');
  }
}

function create(difficulty, nbRoom, randElement) {
  validateArgs(difficulty, nbRoom);

  let level = {
    nbRoom: nbRoom,
    difficulty: difficulty,
    rooms: [],
  };

  let currentRoom = roomFactory.create({ id: 0 });
  level.rooms.push(currentRoom);
  let index = 1;

  while (index < nbRoom ) {

    let direction = randElement(directions);
    let newCoord = { x: currentRoom.x + direction.dX, y: currentRoom.y + direction.dY };
    let roomExist = _.find(level.rooms, newCoord);

    if (currentRoom[direction.name]) { // If there is already a door for this direction.
      let targetRoom = currentRoom[direction.name].targetRoomId; // We go through this door to set a door in this targetted room.
      currentRoom = level.rooms[targetRoom];
    } else if (!roomExist) {
      //Setting the door to the nextRoom in the current room.
      var door = doorFactory.create({ targetRoomId: index });
      currentRoom[direction.name] = door;

      // Creating the new Room.
      var nextRoom = roomFactory.create({
        id: index,
        x: newCoord.x,
        y: newCoord.y,
      });

      var reverseDir = direction.reverse; // Reverse the direction ex : south become north.
      var nextDoor = doorFactory.create({ targetRoomId: currentRoom.id }); // Creating the reverse door.
      nextRoom[reverseDir] = nextDoor;
      level.rooms.push(nextRoom); // Add the new room to the map.

      index++; // Increase created room Number.

      currentRoom = nextRoom; // The new room become current.
    }
  }

  return level;
}

module.exports = {
  create: create,
};