'use strict';

let test = require('tape');

let levelFactory = require('../../../lib/factories/levelFactory');

test('levelfactory.create(1, 5) : should create 1 level with 5 rooms', function (t) {
  function mockRandElement() { // We are mocking the random direction of the rooms.
    let index = 0;
    let directionsIndexes = [0, 2, 0, 3]; // Directions will be chosen in this order instead of randomly.
    return function (directions) {
      let direction = directions[directionsIndexes[index]];
      index++;
      return direction;
    };
  }

  let level = levelFactory.create(1, 5, mockRandElement());
  t.plan(9);
  t.equal(level.rooms.length, 5, '5 rooms are created');
  t.ok(level.rooms[0].north, 'first room has a door to the north');
  t.ok(level.rooms[1].east, 'second room has a door to the east');
  t.ok(level.rooms[1].south, 'second room has a door to the south');
  t.ok(level.rooms[2].north, 'third room has a door to the north');
  t.ok(level.rooms[2].west, 'third room has a door to the west');
  t.ok(level.rooms[3].west, 'fourth room has a door to the west');
  t.ok(level.rooms[3].south, 'fourth room has a door to the south');
  t.ok(level.rooms[4].east, 'fifth room has a door to the east');
  t.end();
});

test('levelfactory.create(1, 5) : should create 1 level with 5 rooms with repassing inside already created room whit door', function (t) {
  function mockRandElement() { // We are mocking the random direction of the rooms.
    let index = 0;
    let directionsIndexes = [0, 1, 2, 0, 2]; // Directions will be chosen in this order instead of randomly.
    return function (directions) {
      let direction = directions[directionsIndexes[index]];
      index++;
      return direction;
    };
  }

  let level = levelFactory.create(1, 5, mockRandElement());
  t.plan(9);
  t.equal(level.rooms.length, 5, '5 rooms are created');
  t.ok(level.rooms[0].north, 'first room has a door to the north');
  t.ok(level.rooms[0].east, 'first room has a door to the east');
  t.ok(level.rooms[1].south, 'second room has a door to the south');
  t.ok(level.rooms[2].west, 'third room has a door to the west');
  t.ok(level.rooms[2].north, 'third room has a door to the north');
  t.ok(level.rooms[3].east, 'fourth room has a door to the east');
  t.ok(level.rooms[3].south, 'fourth room has a door to the south');
  t.ok(level.rooms[4].west, 'fifth room has a door to the west');
  t.end();
});

test('levelfactory.create(1, 5) : should create 1 level with 5 rooms with repassing inside already created room whitout door', function (t) {
  function mockRandElement() { // We are mocking the random direction of the rooms.
    let index = 0;
    let directionsIndexes = [0, 2, 1, 3, 1]; // Directions will be chosen in this order instead of randomly.
    return function (directions) {
      let direction = directions[directionsIndexes[index]];
      index++;
      return direction;
    };
  }

  let level = levelFactory.create(1, 5, mockRandElement());
  t.plan(6);
  t.equal(level.rooms.length, 5, '5 rooms are created');
  t.ok(level.rooms[0].north, 'first room has a door to the north');
  t.ok(level.rooms[1].east, 'second room has a door to the east');
  t.ok(level.rooms[2].south, 'thrid room has a door to the south');
  t.equal(level.rooms[3].west, null, 'fourth room has no door to the west');
  t.ok(level.rooms[3].south, 'fourth room has a door to the south');
  t.end();
});

test('levelfactory.create(-1, 5) : should return an error cause 0 is not a valid argument', function (t) {
  t.plan(1);
  t.throws(function () {
    levelFactory.create(-1, 5, function(){});
  }, { message: 'difficulty must be Integer and >= 0' });
  t.end();
});

test('levelfactory.create("a", 5) : should return an error cause "a" is not a valid argument', function (t) {
  t.plan(1);
  t.throws(function () {
    levelFactory.create('a', 5, function(){});
  }, { message: 'difficulty must be Integer and >= 0' });
  t.end();
});

test('levelfactory.create(1, 0) : should return an error cause 0 is not a valid argument', function (t) {
  t.plan(1);
  t.throws(function () {
    levelFactory.create(1, 0, function(){});
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});

test('levelfactory.create(1, "a") : should return an error cause "a" is not a valid argument', function (t) {
  t.plan(1);
  t.throws(function () {
    levelFactory.create(1, 'a', function(){});
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});