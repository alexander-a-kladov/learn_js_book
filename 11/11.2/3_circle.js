'use strict';

  function go() {
    showCircle(150, 150, 100).then(div => {
      console.log('Hello, World!');
    });
  }

  function showCircle(cx, cy, radius) {
    console.log(`${cx} ${cy} ${radius}`);

    return new Promise(resolve => {
      setTimeout(() => {
        radius *= 2;
        console.log(`${radius}`);
        resolve(1);
      }, 0);
    })
  }

  go();