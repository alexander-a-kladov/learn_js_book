'use strict'

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let avg = 0;
    for (let el of arr) {
        avg += el.age;
    }
    return (arr.length)?(avg/arr.length):0;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28