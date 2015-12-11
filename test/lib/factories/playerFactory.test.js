'use strict';

let test = require('tape');

let playerFactory = require('../../../lib/factories/playerFactory');

test('playerFactory.create("Conan", "barbar", "human") : should return a player', function(t) {
  let player = playerFactory.create('Conan', 'human', 'barbar');
  let playerState = player.state();
  t.plan(14);
  t.equal(playerState.name, 'Conan', 'Name is correct');
  t.equal(playerState.level, 1, 'Level is correct');
  t.deepEqual(playerState.inventory, [], 'Inventory is empty');
  t.equal(playerState.race, 'human', 'Race is correct');
  t.equal(playerState.classe, 'barbar', 'Classe is correct');
  t.equal(playerState.health, 118, 'health is correct');
  t.equal(playerState.maxHealth, 118, 'maxHealth is correct');
  t.equal(playerState.mana, 66, 'mana is correct');
  t.equal(playerState.maxMana, 66, 'maxMana is correct');
  t.equal(playerState.stats.str, 13, 'Strength is correct');
  t.equal(playerState.stats.int, 8, 'Intelligence is correct');
  t.equal(playerState.stats.agi, 5, 'Agility is correct');
  t.equal(playerState.stats.spd, 7, 'Speed is correct');
  t.equal(playerState.stats.def, 9, 'Defense is correct');
  t.end();
});

test('playerFactory.create(Infinity, "human", "invalid") : should return an error', function(t) {
  t.plan(1);
  t.throws(function() {
    playerFactory.create(Infinity, 'human', 'invalid');
  }, TypeError, 'This is a TypeError');
  t.end();
});

test('playerFactory.create("Conan", "invalid", "human") : should return an error', function(t) {
  t.plan(1);
  t.throws(function() {
    playerFactory.create('Conan', 'invalid', 'barbar');
  }, RangeError, 'This is a RangeError');
  t.end();
});

test('playerFactory.create("Conan", "human", "invalid") : should return an error', function(t) {
  t.plan(1);
  t.throws(function() {
    playerFactory.create('Conan', 'human', 'invalid');
  }, RangeError, 'This is a RangeError');
  t.end();
});