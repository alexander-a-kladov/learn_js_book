'use strict'

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let uniq = new Map();
    for (let el of arr) {
        let key = el.toLowerCase().split('').sort().join('');
        uniq.set(key,el);
    }
    return Array.from(uniq.values());
}

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"