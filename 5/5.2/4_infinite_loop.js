'use strict'

let i = 0;
let c = 0;
while (i != 10) {
  i += 0.2;
  console.log(i.toFixed(20));
  if (c>50) break;
  c++;
}