'use strict'

function randomInteger(min, max) {
    return Math.floor(Number(min) + (Number(max) + 1 - Number(min))*Math.random());
}

console.log(`randomInteger(1,5) = ${randomInteger(1,5)}`);
console.log(`randomInteger(1,5) = ${randomInteger(1,5)}`);
console.log(`randomInteger(1,5) = ${randomInteger(1,5)}`);
