'use strict';

function getLocalDay(date) {
    const SUNDAY = 7;
    let dayOfWeek = date.getDay();
    return dayOfWeek || SUNDAY;
}

console.log(getLocalDay(new Date(2012, 0, 1)));