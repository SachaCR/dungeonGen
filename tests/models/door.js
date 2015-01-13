'use strict';

var expect = require('chai').expect;

var Door = require('../../lib/models/door');

describe('dungeonGen', function(){
  describe(':generate(5)', function(){
    it('should return a dungeon Map with 5 rooms', function(){
    	var door = new Door({targetRoomId: 2});
      expect(door.targetRoomId).to.be.equal(2);
      expect(door.locked).to.be.equal(false);
    });
  });
});