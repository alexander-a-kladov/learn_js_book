'use strict'

function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = (new Date(date.getFullYear(),date.getMonth(),date.getDate()+1));
    return Math.floor((tomorrow-date)/1000);
}

console.log(getSecondsToTomorrow());