'use strict'

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let whenRead = new WeakMap();
whenRead.set(messages[0], Date.now());
console.log(`${Object.values(messages[0])} was read at ${whenRead.get(messages[0])}`);