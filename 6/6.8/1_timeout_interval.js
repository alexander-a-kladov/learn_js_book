'use strict';

function printNumbers(from, to) {
  
    let timerId = setInterval(function() {
      console.log(from);
      if (from == to) {
        clearInterval(timerId);
      }
      from++;
    }, 1000);
  }
  
  function printNumbersTimeout(from, to) {
  
    setTimeout(function go() {
      console.log(from);
      if (from < to) {
        setTimeout(go, 1000);
      }
       from++;
    }, 1000);
  }
  
  // использование:
  printNumbers(5, 10);
  //printNumbersTimeout(10,20);