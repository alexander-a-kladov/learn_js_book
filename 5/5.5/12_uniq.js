'use strict'

function unique(arr) {
    let uniq = [];
    for (let el of arr) {
        if (!uniq.includes(el)) {
            uniq.push(el);
        }
    }
    return uniq;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O