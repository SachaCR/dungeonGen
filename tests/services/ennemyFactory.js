'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');

describe('ennemyFactory', function() {
  describe(':generate()', function() {

    it('should return a Gobelin ennemy', function() {
      var mockEnnemyFact = rewire('../../lib/services/ennemyFactory');
      mockEnnemyFact.__set__('commons.randElement', function(tab) {
        return tab[2];
      });

      var ennemy = mockEnnemyFact.generate(0);
      expect(ennemy.name).to.be.equal('Gobelin');
      expect(ennemy.hp).to.be.equal(20);
      expect(ennemy.speed).to.be.equal(1);
      expect(ennemy.def).to.be.equal(4);
      expect(ennemy.strength).to.be.equal(6);
    });

  });
});
