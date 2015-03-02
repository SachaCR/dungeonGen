'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');

var ennemyFact = require('../../lib/services/ennemyFactory');

describe('ennemyFactory', function() {
  describe(':generate()', function() {

    it('should return a random ennemy', function() {
      var ennemy = ennemyFact.generate(0);
      expect(ennemy).to.exist;
      expect(ennemy.name).to.exist;
      expect(ennemy.hp).to.exist;
      expect(ennemy.spd).to.exist;
      expect(ennemy.def).to.exist;
      expect(ennemy.str).to.exist;
      expect(ennemy.mag).to.exist;
    });

    it('should return a Gobelin ennemy', function() {

      var mockEnnemyFact = rewire('../../lib/services/ennemyFactory');
      var originalFunc = mockEnnemyFact.__get__('commons.randElement');
      mockEnnemyFact.__set__('commons.randElement', function(tab) {
        return tab[2];
      });

      var ennemy = mockEnnemyFact.generate(0);
      expect(ennemy).to.exist;
      expect(ennemy.name).to.be.equal('Gobelin');
      expect(ennemy.hp).to.be.equal(20);
      expect(ennemy.spd).to.be.equal(1);
      expect(ennemy.def).to.be.equal(4);
      expect(ennemy.str).to.be.equal(6);
      expect(ennemy.mag).to.be.equal(0);

      mockEnnemyFact.__set__('commons.randElement', originalFunc);
    });

  });
});
