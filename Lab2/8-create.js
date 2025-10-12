"use strict";

const createUser = (name, city) => ({ name, city });

console.log(createUser("Kyrylo", "Kyiv"));

module.exports = { createUser };
