'use strict';

function create(params) {
  let door = {
    targetRoomId: 0,
    locked: false,
  };

  Object.assign(door, params);
  return door;
}

module.exports = {
  create: create,
};
