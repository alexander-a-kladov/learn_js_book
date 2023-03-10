'use strict';

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true
Rabbit.prototype = {};
console.log(rabbit.eats);
Rabbit.prototype.eats = false;
console.log(rabbit.eats);
delete rabbit.eats;
console.log(rabbit.eats);
delete Rabbit.prototype.eats;
console.log(rabbit.eats);