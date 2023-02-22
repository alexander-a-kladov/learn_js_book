'use strict'

process.stdin.on('data', data => {
    let dataStr = String(data).split('\n').join('');
    if (!+dataStr) {
        process.exit();
    }
    if (+dataStr<=100) {
        process.stdout.write('Wrong number\n');
        process.stdout.write('Please enter number greater than 100?');
    } else {
        process.stdout.write('Well done!');
        process.exit();
    }
});

process.stdout.write('Please enter number greater than 100?')