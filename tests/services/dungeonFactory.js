'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');

var dungeonFactory = require('../../lib/services/dungeonFactory');
var directions = require('../../lib/helpers/directions');

describe('dungeonFactory', function() {
  describe(':generate()', function() {

    it('should return a dungeon Map with 5 rooms', function() {
      var dungeonMap = dungeonFactory.generate(5);
      expect(dungeonMap.length).to.be.equal(5);
      expect(dungeonMap[0].id).to.be.equal(0);
      expect(dungeonMap[1].id).to.be.equal(1);
      expect(dungeonMap[2].id).to.be.equal(2);
      expect(dungeonMap[3].id).to.be.equal(3);
      expect(dungeonMap[4].id).to.be.equal(4);
    });

    it('Check if doors and rooms are consistent', function() {
      var mockDungeonFact = rewire('../../lib/services/dungeonFactory');
      var dungeonPath = [0, 2, 1, 3, 2];
      var i = 0;
      var originalFunc = mockDungeonFact.__get__('commons.randElement');
      mockDungeonFact.__set__('commons.randElement', function() {
        var result = dungeonPath[i];
        i++;
        return directions[result];
      });

      var dungeonMap = mockDungeonFact.generate(5);

      expect(dungeonMap.length).to.equal(5);
      expect(dungeonMap[0].north).to.exist;
      expect(dungeonMap[0].north.targetRoomId).to.equal(1);
      expect(dungeonMap[1].south).to.exist;
      expect(dungeonMap[1].south.targetRoomId).to.equal(0);

      expect(dungeonMap[1].east).to.exist;
      expect(dungeonMap[1].east.targetRoomId).to.equal(2);
      expect(dungeonMap[2].west).to.exist;
      expect(dungeonMap[2].west.targetRoomId).to.equal(1);

      expect(dungeonMap[2].south).to.exist;
      expect(dungeonMap[2].south.targetRoomId).to.equal(3);
      expect(dungeonMap[3].north).to.exist;
      expect(dungeonMap[3].north.targetRoomId).to.equal(2);

      expect(dungeonMap[3].east).to.exist;
      expect(dungeonMap[3].east.targetRoomId).to.equal(4);
      expect(dungeonMap[4].west).to.exist;
      expect(dungeonMap[4].west.targetRoomId).to.equal(3);

      mockDungeonFact.__set__('commons.randElement', originalFunc);
    });

  });
});
