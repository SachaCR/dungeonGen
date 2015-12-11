'use strict';

let test = require('tape');

let roomFactory = require('../../../lib/factories/roomFactory');

test('roomFactory.create() : should create 1 room with default values', function(t) {
  let room = roomFactory.create();
  t.plan(11);
  t.equal(room.id, 0, 'Default room id is 0');
  t.equal(room.x, 0, 'Default room x is 0');
  t.equal(room.y, 0, 'Default room y is 0');
  t.equal(room.populate, false, 'Default populate is false');
  t.equal(room.exit, false, 'Default exit is false');
  t.equal(room.north, null, 'Default north is null');
  t.equal(room.south, null, 'Default south is null');
  t.equal(room.east, null, 'Default east is null');
  t.equal(room.west, null, 'Default west is null');
  t.equal(room.ennemyList.length, 0, 'Default ennemyList length is 0');
  t.equal(room.objectList.length, 0, 'Default objectList length is 0');
  t.end();
});

test('roomFactory.create({ id: 10, x: 5, y: 6 }) : should override default values', function(t) {
  let room = roomFactory.create({ id: 10, x: 5, y: 6 });
  t.plan(3);
  t.equal(room.id, 10, 'Default room id is 10');
  t.equal(room.x, 5, 'Default room x is 5');
  t.equal(room.y, 6, 'Default room y is 6');
  t.end();
});
