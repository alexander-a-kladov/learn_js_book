'use strict'

function truncate(str, maxlength) {
    return (maxlength >= 0 && str.length>maxlength)?str.substr(0, maxlength-1)+'...':str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
console.log(truncate("Ничего",0));
console.log(truncate("Кое что",-1));

