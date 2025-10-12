"use strict";

const phonebook = [
  { name: "Ivan", phone: "+380441112233" },
  { name: "Sergiy", phone: "+380774445566" },
  { name: "Sonya", phone: "+380885556677" },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

console.log(findPhoneByName("Sonya"));

module.exports = { phonebook, findPhoneByName };
