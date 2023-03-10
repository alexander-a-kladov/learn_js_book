'use strict';

function makeCounter() {

  function counter() {
    return counter.count++;

  };

  counter.count = 0;

  counter.setValue = function(value) {
    this.count = value;
  }

  counter.decrease = function() {
    this.count--;
  }

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log( counter() ); // 10
counter.setValue(5);
console.log(counter());
counter.decrease();
counter.decrease();
console.log(counter());