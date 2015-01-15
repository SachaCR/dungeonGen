'use strict';

var expect = require('chai').expect;

var Door = require('../../lib/models/door');

describe('Door', function() {
  describe(':constructor()', function() {
    it('should return a door with default params', function() {
      var door = new Door();
      expect(door.targetRoomId).to.be.equal(0);
      expect(door.locked).to.be.equal(false);
    });

    it('should return a door with override default params', function() {
      var door = new Door({ targetRoomId: 2, locked: true });
      expect(door.targetRoomId).to.be.equal(2);
      expect(door.locked).to.be.equal(true);
    });
  });
});
