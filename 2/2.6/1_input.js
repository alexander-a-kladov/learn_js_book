'use script'

process.stdin.on('data', data => {
    process.stdout.write('You name is '+data);
    process.exit();
});

process.stdout.write('Please enter your name?\n')
