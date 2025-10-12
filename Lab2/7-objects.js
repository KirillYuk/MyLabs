"use strict";

const fn = () => {
  const obj1 = { name: "CONSTantin" };
  let obj2 = { name: "lETray" };

  obj1.name = "Ivan";
  obj2.name = "Sonya";

  // obj1 = { name: 'Sannya' };

  obj2 = { name: "Andrey" };

  return { obj1, obj2 };
};

module.exports = { fn };
