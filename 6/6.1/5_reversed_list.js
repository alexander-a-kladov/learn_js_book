'use strict'

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function reversedListRecursive(list) {
    if (!list) {console.log('null');return;}
    reversedListRecursive(list.next);
    console.log('<-'+list.value);
}

function reversedList(list) {
    let arr = [];
    for (let tmp = list;tmp;tmp=tmp.next)
    {
        arr.push(tmp.value);
    }
    arr.push(null);
    for (let el of arr.reverse()) {
        if (el) console.log('<-'+el);
        else console.log(el);
    }
}

reversedList(list);
reversedListRecursive(list);