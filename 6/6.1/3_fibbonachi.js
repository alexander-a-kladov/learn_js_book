'use strict'

function fibr(number) {
    return (number>1)?fibr(number-1)+fibr(number-2):number;
}


function fibbonachi(number) {
    if (number == 0) return 0;
    if (number == 1) return 1;
    let num1 = 0, num2 = 1, result = 0;
    for (let i=0;i<number-1;i++) {
        result = num1 + num2;
        [num1, num2] = [num2, result];
    }
    return result;
}


console.log(fibbonachi(1));
console.log(fibbonachi(7));
console.log(fibbonachi(77));

console.log('recursive');
console.log(fibr(7));