'use strict'

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(`'sTRing' -> ${ucFirst('sTRing')}`);
console.log(`'' -> '${ucFirst('')}'`);