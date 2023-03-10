'use strict'

function f(a) {
  console.log(a)
}

function throttle(f, ms) {

    let isCooldown = false;
    let callArgs = null;
    let callThis = null;

    return function() {
      if (isCooldown) {
        callArgs = arguments;
        callThis = this;
        return;
      }
      f.apply(this, arguments);
      isCooldown = true;
  
      setTimeout(() => {isCooldown = false; if (callArgs) f.apply(callThis, callArgs); callArgs=callThis=null;}, ms);
    };
  
  }


// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано