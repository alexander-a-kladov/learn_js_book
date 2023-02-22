'use script'

let result = "";

process.stdin.on('data', data => {
    str = String(data).split('\n').join('');
    if (str.length==0) {
        result = null;
        process.stdout.write(`result = ${result}\n`)
        process.exit();
    }
    if (isNaN(str)) {
        process.stdout.write('This is NaN, please enter a number\n');
    } else {
        result = +data;
        process.stdout.write(`result = ${result}\n`);
        process.exit();
    }
});

process.stdout.write('Please enter a number?\n')
