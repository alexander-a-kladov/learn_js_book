'use strict';

function getWeekDay(date) {
    const DAYNAMES=['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return DAYNAMES[date.getDay()];
}

console.log(getWeekDay(new Date(2014, 0 , 3)));
