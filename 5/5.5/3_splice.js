'use strict';

function filterRangeInPlace(arr, a, b) {
    let i = 0;
    while (i<arr.length) {
        if (arr[i] < a || arr[i] > b) arr.splice(i,1);
        i++;
    }
}

let arr = [5, 3, 8, 1];
console.log(`arr = [${arr}]`);
filterRangeInPlace(arr,1,4);
console.log(`filterRangeInPlace(arr,1,4)=${arr}`);