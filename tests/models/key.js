'use strict';

var expect = require('chai').expect;

var Key = require('../../lib/models/key');

describe('Key', function() {
  describe(':constructor()', function() {
    it('should return an exception', function() {
      expect(Key).to.throw(Error);
    });

    it('should return a key with the good targetRoomId params', function() {
      var key = new Key(5);
      expect(key.name).to.be.equal('Key');
      expect(key.targetRoomId).to.be.equal(5);
    });
  });
});
