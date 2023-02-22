'use strict'

function checkSpam(str) {
    let lc_str = str.toLowerCase();
    return lc_str.includes('viagra') || lc_str.includes('xxx') || false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));