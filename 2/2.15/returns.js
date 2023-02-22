'use strict'

function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return console.log('Родители разрешили?');
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return console.log('Родители разрешили?');
}

checkAge1(18);
checkAge2(18);