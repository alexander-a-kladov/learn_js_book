'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {
    let max_salary = null;
    for (let [key, value] of Object.entries(salaries)) {
        if (!max_salary || value > max_salary['max']) {
            max_salary = {'name': key, 'max': value};
        }
    }
    return (max_salary)?max_salary.name:null;
  }

  console.log(topSalary(salaries));
  console.log(topSalary({}));