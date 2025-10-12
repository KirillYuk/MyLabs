"use strict";

const phonebook = {
  Ivan: "+380441112233",
  Sergiy: "+380774445566",
  Sonya: "+380885556677",
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName("Sergiy"))

module.exports = { phonebook, findPhoneByName };
