'use strict'

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let isread = new WeakSet();
for (let message of messages) {
    isread.add(message);
}

console.log(isread.has(messages[2]));

messages.shift();