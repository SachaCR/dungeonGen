'use strict';

let tap = require('tap');

let dungeonFactory = require('../../../lib/factories/dungeonFactory');

tap.test('dungeonFactory.create(3, 5) : should create a dungeon with 3 level with 5 rooms each', function (t) {
  t.plan(4);
  let dungeon = dungeonFactory.create(3, 5);
  t.equal(dungeon.levels.length, 3, '3 levels are created');
  t.equal(dungeon.levels[0].rooms.length, 5, '5 rooms are created');
  t.equal(dungeon.levels[1].rooms.length, 5, '5 rooms are created');
  t.equal(dungeon.levels[2].rooms.length, 5, '5 rooms are created');
  t.end();
});

tap.test('dungeonFactory.create(0, 0) : should return an error 0 is not valid', function (t) {
  t.plan(1);
  t.throws(function () {
    dungeonFactory.create(0, 0, function(){});
  }, { message: 'nbLvl must be Integer and > 0' });
  t.end();
});

tap.test('dungeonFactory.create("A", 0) : should return an error "A" is not valid', function (t) {
  t.plan(1);
  t.throws(function () {
    dungeonFactory.create('A', 0, function(){});
  }, { message: 'nbLvl must be Integer and > 0' });
  t.end();
});

tap.test('dungeonFactory.create(1, 0) : should return an error 0 is not valid', function (t) {
  t.plan(1);
  t.throws(function () {
    dungeonFactory.create(1, 0, function(){});
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});

tap.test('dungeonFactory.create(1, "A") : should return an error "A" is not valid', function (t) {
  t.plan(1);
  t.throws(function () {
    dungeonFactory.create(1, 'A', function(){});
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});
