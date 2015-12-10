'use strict';

function getState(state) {
  return {
    state: () => {
      return state;
    }
  };
}

module.exports = getState;