'use strict'

let stage;

process.stdin.on('data', data => {
    let dataStr = String(data).split('\n').join('');
    if (dataStr == 'Esc') {
        process.stdout.write('Отменено');
        process.exit();
    }
    if (stage == 'login') {
        if (dataStr == 'Админ') {
            stage = 'password';
            process.stdout.write('Please enter password [or Esc for cancel]?');
        } else {
            process.stdout.write('Я вас не знаю');
            process.exit();
        }
    } else if (stage == 'password') {
        if (dataStr == 'Я Главный') {
            process.stdout.write('Здравствуйте!');
        } else {
            process.stdout.write('Неверный пароль');
        }
        process.exit();
    }
});

stage = 'login';
process.stdout.write('Please enter your name [or Esc for cancel]?\n')