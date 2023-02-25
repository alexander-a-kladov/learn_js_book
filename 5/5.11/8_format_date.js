'use strict';

function formatDate(date) {
    let now = new Date();
    let diffSec = Math.round((now-date)/1000);
    return (diffSec == 0)?'прямо сейчас':(diffSec<60)?`${diffSec} сек. назад`:
    (diffSec<3600)?`${Math.round(diffSec/60)} мин. назад`:
    `${("0"+date.getDate()).slice(-2)}.${("0"+date.getMonth()+1).slice(-2)}.${date.getFullYear()%100} ${("0"+date.getHours()).slice(-2)}:${("0"+date.getMinutes()).slice(-2)}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)));