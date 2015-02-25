'use strict';

var expect = require('chai').expect;

var DungeonLvl = require('../../lib/models/dungeonLvl');

describe('DungeonLvl', function() {
  describe(':constructor()', function() {
    it('should return a dungeon with default params', function() {
      var dungeonLvl = new DungeonLvl();
      expect(dungeonLvl.nbRoom).to.be.equal(0);
      expect(dungeonLvl.map.length).to.be.equal(0);
    });

    it('should return a dungeon with override default params', function() {
      var dungeonLvl = new DungeonLvl({ nbRoom: 2 });
      expect(dungeonLvl.nbRoom).to.be.equal(2);
      expect(dungeonLvl.map.length).to.be.equal(0);
    });
  });
});
