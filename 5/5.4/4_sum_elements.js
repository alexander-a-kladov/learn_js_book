'use strict';

let digits=[]

process.stdout.write('Please enter number, to sum and stop enter empty string?');
process.stdin.on('data', data => {
    let dataStr = String(data).split('\n').join('');
    if (!dataStr.length || !isFinite(dataStr)) {
        let sum = 0;
        for (let el of digits) {
            sum += el;
        }
        process.stdout.write(`sum of ${digits} = ${sum}`);
        process.exit();
    }
    if (isFinite(dataStr)) {
        digits.push(+dataStr);
    } else {
        process.stdout.write('Ошибка! Введено не число');
    }
    process.stdout.write('Please enter number, to sum and stop enter empty string?');
});
