'use strict'

let styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles, Math.floor(styles.length/2));
styles[Math.floor(styles.length/2)] = 'Классика';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Рэп','Рэгги');
console.log(styles);

