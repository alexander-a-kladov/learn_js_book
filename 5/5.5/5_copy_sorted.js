'use strict';

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let sortedArr = arr.slice();
    sortedArr.sort();
    return sortedArr;
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)