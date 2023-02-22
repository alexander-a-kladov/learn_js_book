'use strict'

function isPrime(number) {
    if (number<2) {
        return false;
    }
    let div = 2
    let divs_checked=1
    while (div <= Math.floor(Math.sqrt(number))) {
        if (number%div == 0) {
            return false;
        }
        divs_checked*=div;
        div = divs_checked + 1;
    }
    return true;
}

let result='';
let lb=1,rb=10;
let addcomma = false;
for (let i=lb;i<=rb;i++) {
    if (isPrime(i)) {
        result+=(addcomma)?', ':(addcomma=true,'');
        result+=i;
    }
}
console.log(`Prime number of [${lb}..${rb}] is ${result}`);