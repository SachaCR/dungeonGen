'use strict';

var expect = require('chai').expect;

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
  });
});