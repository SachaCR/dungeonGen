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