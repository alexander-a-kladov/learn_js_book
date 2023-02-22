'use strict'

let login = 'Сотрудник';
let message = (login == 'Сотрудник')?'Привет':
              (login == 'Директор')?'Здравствуйте':
              (login == '')?'Нет логина':'';
console.log(message);
