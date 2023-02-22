'use strict';

function Calculator() {
    this.read = function(x, y) {
        this.x = x;
        this.y = y;
      };
    this.sum = function() {
        return this.x+this.y;
      };
    this.mul = function() {
        return this.x*this.y;
      };
}

let calculator = new Calculator();
calculator.read(12,18);

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );