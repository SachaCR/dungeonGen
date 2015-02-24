'use strict';

var expect = require('chai').expect;

var Dungeon = require('../../lib/models/dungeon');

describe('Dungeon', function() {
  describe(':constructor()', function() {
    it('should return a dungeon with default params', function() {
      var dungeon = new Dungeon();
      expect(dungeon.nbRoom).to.be.equal(0);
      expect(dungeon.map.length).to.be.equal(0);
    });

    it('should return a dungeon with override default params', function() {
      var dungeon = new Dungeon({ nbRoom: 2 });
      expect(dungeon.nbRoom).to.be.equal(2);
      expect(dungeon.map.length).to.be.equal(0);
    });
  });
});
