'use strict'

process.stdin.on('data', data => {
    if (Number(data)>0) {
        process.stdout.write('1\n');
    } else if (Number(data)<0) {
        process.stdout.write('-1\n');
    } else {
        process.stdout.write('0\n');
    }
    process.exit();
});

process.stdout.write('Введите число?\n')