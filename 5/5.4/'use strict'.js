'use strict'

function camelize(str) {
    let arrStr = str.split('-');
    mapArr = arrStr.map(item => item.at(0).toUpperCase()+item.slice(1));
    return mapArr.join('');
}

console.log(camelize("background-color"),camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image"),camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition"),camelize("-webkit-transition") == 'WebkitTransition');
