const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Toog oruul: ', (input) => {
    const number = parseFloat(input);
    var currentHour = new Date().getHours();
    var currentMin = new Date().getMinutes();

    if (currentHour < 12) {
        var square = number * number;
        console.log(`${currentHour}:${currentMin} bolj bn`)
        console.log(`Toonii kvadrat: ${square}`);
    } else {
        var root = Math.sqrt(number);
        console.log(`${currentHour}:${currentMin} bolj bn`)
        console.log(`Toonii yzguur: ${root}`);
    }

    rl.close();
});