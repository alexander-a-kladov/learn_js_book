'use strict';

Function.prototype.defer = function(delay) {
    let f = this;
    return function(...args) {
    setTimeout(() => f.apply(this, args), delay);
    }
};

function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.