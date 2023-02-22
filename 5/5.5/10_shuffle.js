'use strict'

let arr = [1, 2, 3];

function shuffle(arr) {
    let swap;
    let k,j;
    for (let i=0;i<arr.length;i++) {
        k = Math.floor(Math.random()*arr.length);
        j = Math.floor(Math.random()*arr.length);
        swap = arr[k];
        arr[k] = arr[j];
        arr[j] = swap;
    }
}

shuffle(arr);
// arr = [3, 2, 1]
console.log(arr);

shuffle(arr);
// arr = [2, 1, 3]
console.log(arr);

shuffle(arr);
// arr = [3, 1, 2]
console.log(arr);
// ...