'use strict';

var dungeonGen =  require('./lib/service/dungeonGen');
var ennemyFactory =  require('./lib/service/ennemyFactory');

module.exports = {
  dungeonGen: dungeonGen,
  ennemyFactory: ennemyFactory,
};
