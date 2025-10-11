'use strict';

const countTypesInArray = (ar) => {
  const counters = {};
  for (const element of ar) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };