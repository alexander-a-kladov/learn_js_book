'use strict';

function getSecondsToday() {
    let date = new Date();
    return Math.round(((new Date())-(new Date(date.getFullYear(), date.getMonth(), date.getDate())))/1000);
}

console.log(getSecondsToday());