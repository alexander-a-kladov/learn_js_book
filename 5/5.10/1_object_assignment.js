'use strict';

let user = {
    name: "John",
    years: 30
  };

  let {name, years: age, isAdmin: isAdmin = false} = user;

  console.log('name = '+name);
  console.log('age = '+age);
  console.log('isAdmin = '+isAdmin);