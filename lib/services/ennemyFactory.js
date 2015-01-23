'use strict';

var ennemysList = require('../../datas/ennemys/index');
var Ennemy = require('../../lib/models/ennemy');

var commons = require('../helpers/commons');

function generate(lvl) {
  var ennemyDatas = commons.randElement(ennemysList[lvl]);

  return new Ennemy(ennemyDatas);
}

module.exports = {
  generate: generate,
};
