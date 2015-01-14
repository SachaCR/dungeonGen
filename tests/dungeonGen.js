'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');

var dungeonGen = require('../lib/dungeonGen');

describe('dungeonGen', function() {
  describe(':generate(5)', function() {

    it('should return a dungeon Map with 5 rooms', function() {
    	var dungeonMap = dungeonGen.generate(5);
      expect(dungeonMap.length).to.be.equal(5);
      expect(dungeonMap[0].id).to.be.equal(0);
      expect(dungeonMap[1].id).to.be.equal(1);
      expect(dungeonMap[2].id).to.be.equal(2);
      expect(dungeonMap[3].id).to.be.equal(3);
      expect(dungeonMap[4].id).to.be.equal(4);
    });

    it('Check if doors and rooms are consistent', function() {
      var mockDungeonGen = rewire('../lib/dungeonGen');
      var dungeonPath = ['north', 'east', 'south', 'west'];
      var i = 0;
      mockDungeonGen.__set__('internals.randDirection', function(){
        var result = dungeonPath[i];
        i++;
        return result; 
      });

      var dungeonMap = mockDungeonGen.generate(5);
      expect(dungeonMap.length).to.equal(5);
      expect(dungeonMap[0].north).to.exist;
      expect(dungeonMap[0].north.targetRoomId).to.equal(1);
      expect(dungeonMap[1].south).to.exist;
      expect(dungeonMap[1].south.targetRoomId).to.equal(0);

      expect(dungeonMap[1].east).to.exist;
      expect(dungeonMap[1].east.targetRoomId).to.equal(2);
      expect(dungeonMap[2].west).to.exist;
      expect(dungeonMap[2].west.targetRoomId).to.equal(1);
    });

  });
});
