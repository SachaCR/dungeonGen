'use strict';

var expect = require('chai').expect;

var Room = require('../../lib/models/room');

describe('Room', function() {
  describe(':constructor()', function() {
    it('should return a room with default params', function() {
    	var room = new Room();
      expect(room.id).to.be.equal(0);
      expect(room.populate).to.be.equal(false);
      expect(room.north).to.be.equal(null);
      expect(room.south).to.be.equal(null);
      expect(room.east).to.be.equal(null);
      expect(room.west).to.be.equal(null);
      expect(room.ennemyList.length).to.be.equal(0);
      expect(room.objectList.length).to.be.equal(0);
    });

    it('should return a room with override default params', function() {
      var room = new Room({
        id: 5,
        populate: true,
        north: 'north',
        south: 'south',
        east: 'east',
        west: 'west',
        ennemyList: ['hey'],
        objectList: ['ho'],
      });
      expect(room.id).to.be.equal(5);
      expect(room.populate).to.be.equal(true);
      expect(room.north).to.be.equal('north');
      expect(room.south).to.be.equal('south');
      expect(room.east).to.be.equal('east');
      expect(room.west).to.be.equal('west');
      expect(room.ennemyList.length).to.be.equal(1);
      expect(room.objectList.length).to.be.equal(1);
    });
  });
});
