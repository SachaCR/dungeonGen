'use strict';

function create(params) {
  let room = {
    id: 0,
    x: 0,
    y: 0,
    populate: false,
    exit: false,
    north: null,
    south: null,
    east: null,
    west: null,
    ennemyList: [],
    objectList: [],
  };

  Object.assign(room, params);
  return room;
}

module.exports = {
  create: create,
};
