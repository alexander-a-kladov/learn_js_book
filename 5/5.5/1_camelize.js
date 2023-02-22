'use strict'

function camelize(str) {
    let arrStr = str.split('-');
    let mapArr = [];
    for (let i=0;i<arrStr.length;i++) {
        if (i) {
            mapArr.push(arrStr[i].charAt(0).toUpperCase()+arrStr[i].slice(1));
        } else {
            mapArr.push(arrStr[i]);
        }
    }
    return mapArr.join('');
}

console.log(camelize("background-color"),camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image"),camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition"),camelize("-webkit-transition") == 'WebkitTransition');
