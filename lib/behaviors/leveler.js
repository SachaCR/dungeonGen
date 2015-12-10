'use strict';

function leveler(state) {
  return {
    levelUp: () => {
      state.level++;
      state.maxHealth = 100 + (2 * state.stats.def);
      state.health = state.maxHealth;
      state.maxMana = 50 + (2 * state.stats.int);
      state.mana = state.maxMana;
    }
  };
}

module.exports = leveler;