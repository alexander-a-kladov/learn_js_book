'use strict'

process.stdin.on('data', data => {
    if (String(data).split('\n').join('') == 'ECMAScript') {
        process.stdout.write('Верно!\n');
    } else {
        process.stdout.write('Не знаете?\n"ECMAScript!"\n')
    }
    process.exit();
});

process.stdout.write('Какое официальное названия языка JavaScript?\n')