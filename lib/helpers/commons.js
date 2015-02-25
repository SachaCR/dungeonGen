'use strict';

function randElement(tab) {
  return tab[Math.floor((Math.random() * (tab.length - 1)))];
}

module.exports = {
  randElement: randElement,
};
