'use strict'

let calculator = {
  x: 0,
  y: 0,
  read(x, y) {
    this.x = x;
    this.y = y;
  },
  sum() {
    return this.x+this.y;
  },
  mul() {
    return this.x*this.y;
  }
};

calculator.read(10, 20);
console.log( calculator.sum() );
console.log( calculator.mul() );