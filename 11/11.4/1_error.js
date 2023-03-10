'use strict';

fetch('https://no-such-server.blabla') // ошибка
  .then(response => response.json())
  .catch(err => console.log(err)) 

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(err => console.log("Catch", err));