'use strict'

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(value) {
        this.value += value;
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(5); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(6); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений