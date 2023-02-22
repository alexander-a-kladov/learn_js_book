'use strict'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log('Родители разрешили?');
  }
}

function checkAge2(age) {
    return (age>18)?true:console.log('Родители разрешили?');
}

function checkAge3(age) {
    return (age>18) || console.log('Родители разрешили?');
}

console.log(checkAge(18));
console.log(checkAge(19));
console.log(checkAge2(18));
console.log(checkAge2(19));
console.log(checkAge3(18));
console.log(checkAge3(19));