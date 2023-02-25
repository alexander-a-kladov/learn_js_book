'use strict'

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
let copy_user = JSON.parse(json);
console.log(copy_user);