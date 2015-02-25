'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');

var DungeonLvl = require('../../lib/models/dungeonLvl');
var directions = require('../../lib/helpers/directions');

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

  describe(':lockRoom()', function() {
    it('Check if the door east of room 3 is locked and if the key is created and valid', function() {
      var mockDungeonFact = rewire('../../lib/services/dungeonFactory');
      var dungeonPath = [0, 2, 1, 3, 2];
      var i = 0;
      var originalFunc = mockDungeonFact.__get__('commons.randElement');
      mockDungeonFact.__set__('commons.randElement', function() {
        var result = dungeonPath[i];
        i++;
        return directions[result];
      });

      var dungeonLvl = mockDungeonFact.generateLvl(5);
      mockDungeonFact.__set__('commons.randElement', originalFunc);

      expect(dungeonLvl.map.length).to.equal(5);

      var roomWithKeyId = dungeonLvl.lockRoom(4);
      expect(dungeonLvl.map[3].east.locked).to.equal(true);
      expect(dungeonLvl.map[roomWithKeyId].objectList.length).to.equal(1);
      expect(dungeonLvl.map[roomWithKeyId].objectList[0].name).to.equal('Key');
      expect(dungeonLvl.map[roomWithKeyId].objectList[0].targetRoomId).to.equal(4);

    });
  });

  describe(':setExit()', function() {
    it('Check if the exit of the dungeon level is setted', function() {
      var mockDungeonFact = rewire('../../lib/services/dungeonFactory');
      var dungeonPath = [0, 2, 1, 3, 2];
      var i = 0;
      var originalFunc = mockDungeonFact.__get__('commons.randElement');
      mockDungeonFact.__set__('commons.randElement', function() {
        var result = dungeonPath[i];
        i++;
        return directions[result];
      });

      var dungeonLvl = mockDungeonFact.generateLvl(5);
      mockDungeonFact.__set__('commons.randElement', originalFunc);

      expect(dungeonLvl.map.length).to.equal(5);

      var exitingRoomId = dungeonLvl.setExit();
      expect(dungeonLvl.map[exitingRoomId].exit).to.equal(true);

    });
  });
});
