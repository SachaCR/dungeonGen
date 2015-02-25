'use strict';

var _ = require('lodash');
var validator = require('validator');

var Room = require('../models/room');
var Door = require('../models/door');
var DungeonLvl = require('../models/dungeonLvl');
var Dungeon = require('../models/dungeon');

var directions = require('../helpers/directions');
var commons = require('../helpers/commons');

function generateLvl(nbRoom, lvl) {

  if ( !validator.isInt(nbRoom)  ) {
    throw new TypeError('nbRoom must be Integer');
  }

  if ( lvl && !validator.isInt(lvl)  ) {
    throw new TypeError('lvl must be Integer');
  }

  var dungeonLvl = new DungeonLvl({ nbRoom: nbRoom, lvl: lvl });

  var currentRoom = new Room({ id: 0 });
  dungeonLvl.map.push(currentRoom);
  var index = 1;

  while (index < dungeonLvl.nbRoom ) {

    var direction = commons.randElement(directions);
    var newCoord =  { x: currentRoom.x + direction.dX, y: currentRoom.y + direction.dY };
    var roomExist = _.find(dungeonLvl.map, newCoord);

    if (currentRoom[direction.name]) { // If there is already a door for this direction.
      var targetRoom = currentRoom[direction.name].targetRoomId; // We go through this door to set a door in this targetted room.
      currentRoom = dungeonLvl.map[targetRoom];
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
      dungeonLvl.map.push(nextRoom); // Add the new room to the map.

      index++; // Increase created room Number.

      currentRoom = nextRoom; // The new room become current.
    }
  }

  return dungeonLvl;
}

function generateDungeon(lvlNbRoomList) {

  var lvlList = [];

  _.forEach(lvlNbRoomList, function(lvlNbRoom, index) {
      lvlList.push(generateLvl(lvlNbRoom, index));
  });

  var dungeon = new Dungeon({
    lvlList: lvlList
  });

  return dungeon;
}

module.exports = {
  generateLvl: generateLvl,
  generateDungeon: generateDungeon,
};
