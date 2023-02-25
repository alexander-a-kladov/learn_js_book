'use strict'

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
    return Object.keys(obj).reduce((quantity)=>++quantity,0);
}

console.log( count(user) );