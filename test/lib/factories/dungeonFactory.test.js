'use strict';

let test = require('tape');

let commons = require('../../../lib/helpers/commons');
let dungeonFactory = require('../../../lib/factories/dungeonFactory');

test('dungeonFactory.create(3, 5) : should create a dungeon with 3 level with 5 rooms each', function(t) {
  let dungeon = dungeonFactory.create(3, 5, commons);
  t.plan(4);
  t.equal(dungeon.levels.length, 3, '3 levels are created');
  t.equal(dungeon.levels[0].rooms.length, 5, '5 rooms are created');
  t.equal(dungeon.levels[1].rooms.length, 5, '5 rooms are created');
  t.equal(dungeon.levels[2].rooms.length, 5, '5 rooms are created');
  t.end();
});

test('dungeonFactory.create(0, 0) : should return an error 0 is not valid', function(t) {
  t.plan(1);
  t.throws(function() {
    dungeonFactory.create(0, 0, commons);
  }, { message: 'nbLvl must be Integer and > 0' });
  t.end();
});

test('dungeonFactory.create("A", 0) : should return an error "A" is not valid', function(t) {
  t.plan(1);
  t.throws(function() {
    dungeonFactory.create('A', 0, commons);
  }, { message: 'nbLvl must be Integer and > 0' });
  t.end();
});

test('dungeonFactory.create(1, 0) : should return an error 0 is not valid', function(t) {
  t.plan(1);
  t.throws(function() {
    dungeonFactory.create(1, 0, commons);
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});

test('dungeonFactory.create(1, "A") : should return an error "A" is not valid', function(t) {
  t.plan(1);
  t.throws(function() {
    dungeonFactory.create(1, 'A', commons);
  }, { message: 'nbRoom must be Integer and > 0' });
  t.end();
});
