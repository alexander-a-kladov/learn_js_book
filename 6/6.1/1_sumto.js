'use strict'

function sumTo(number) {
    let summ = 0;
    for (let i = 1; i < number; i++) {
        summ+=i;
    }
    return summ;
}

function sumToRecursive(number) {
    if (number==0) return 0;
    return --number+sumToRecursive(number);
}

function sumFormula(number) {
    if (number==0) return 0;
    return Math.floor((number)*(number-1)/2);
}

console.log(sumTo(0));
console.log(sumTo(10));
console.log(sumToRecursive(0));
console.log(sumToRecursive(10));
console.log(sumFormula(0));
console.log(sumFormula(10));
