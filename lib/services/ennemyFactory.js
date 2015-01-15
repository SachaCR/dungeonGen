'use strict';

var ennemysList = require('../../datas/ennemys/index');

var commons = require('../helpers/commons');

function generate(lvl) {
	return commons.randElement(ennemysList[lvl]);
}

module.exports = {
  generate: generate,
};
