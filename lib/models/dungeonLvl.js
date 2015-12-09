'use strict';

var Key = require('../models/key');

var commons = require('../helpers/commons');

function DungeonLvl(params) {

  if (!params) {
    params = {};
  }

  this.map = params.map || [];
  this.nbRoom = params.nbRoom || 0;
  this.lvl = params.lvl || 0;
}

DungeonLvl.prototype.getRoomById = function getRoomById(id) {
  return this.map[id];
};

DungeonLvl.prototype.lockRoom = function lockRoom(roomId) {

  var roomToLock = this.getRoomById(roomId);
  var doors = roomToLock.getDoorsList();
  var nextRoomId = -1;

  doors.forEach(function(door) {
    if (door && door.targetRoomId < roomId) {
      nextRoomId = door.targetRoomId;
    }
  });

  var nextRoom = this.getRoomById(nextRoomId);
  doors = nextRoom.getDoorsList();

  doors.forEach(function(door) {
    if (door && door.targetRoomId === roomId) {
      door.locked = true;
    }
  });

  var roomWithKeyId = Math.floor(Math.random() * roomId);
  var roomWithKey = this.getRoomById(roomWithKeyId);
  roomWithKey.objectList.push(new Key(roomId));
  return roomWithKeyId;
};

DungeonLvl.prototype.setExit = function setExit() {

  var randRoomExit = commons.randElement(this.map);

  randRoomExit.exit = true;
  return randRoomExit.id;
};

module.exports = DungeonLvl;
