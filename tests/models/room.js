'use strict';

var expect = require('chai').expect;

var Room = require('../../lib/models/room');

describe('dungeonGen', function(){
  describe(':generate(5)', function(){
    it('should return a dungeon Map with 5 rooms', function(){
    	var room = new Room({});
      expect(room.id).to.be.equal(0);
      expect(room.populate).to.be.equal(false);
      expect(room.north).to.be.equal(null);
      expect(room.south).to.be.equal(null);
      expect(room.east).to.be.equal(null);
      expect(room.west).to.be.equal(null);
      expect(room.ennemyList.length).to.be.equal(0);
      expect(room.objectList.length).to.be.equal(0);
    });
  });
});