"use strict";

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(100, 999));
console.log(random(9999));

module.exports = { random };
