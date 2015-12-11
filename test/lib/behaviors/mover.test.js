'use strict';

let test = require('tape');

let commons = {
  randElement: function (tab) {
    return tab[0]; // north
  },
};

let dungeonFactory = require('../../../lib/factories/dungeonFactory');
let actionFactory = require('../../../lib/factories/actionFactory');
let mover = require('../../../lib/behaviors/mover');

test('Behavior : move', function (t) {
  let dungeon = dungeonFactory.create(1, 5, commons);
  let action = actionFactory.create('player', 'move', 'north', 'player', 5);
  let moverObject = mover();
  moverObject.move(action, dungeon);
  t.plan(1);
  t.equal(dungeon.currentRoom.id, 1, 'The current room has changed');
  t.end();
});

test('Behavior : move should return an error because there is no door to south', function (t) {
  let dungeon = dungeonFactory.create(1, 5, commons);
  let action = actionFactory.create('player', 'move', 'south', 'player', 5);
  let moverObject = mover();
  let result = moverObject.move(action, dungeon);
  t.plan(1);
  t.equal(result, 'There is no door in this direction', 'Ok this is the good message ');
  t.end();
});

test('Behavior : move should return an error because the door is locked', function (t) {
  let dungeon = dungeonFactory.create(1, 5, commons);
  dungeon.currentRoom.north.locked = true;
  let action = actionFactory.create('player', 'move', 'north', 'player', 5);
  let moverObject = mover();
  let result = moverObject.move(action, dungeon);
  t.plan(1);
  t.equal(result, 'The door is locked', 'Ok this is the good message ');
  t.end();
});