const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Hoorondiin zai: ', (distance) => {
    distance = parseFloat(distance);

    const wolfS = 25;
    const rabbitS = 18;

    const diffSpeed = wolfS - rabbitS;

    var timeInHours = distance / diffSpeed;
    var timeInMinutes = Math.floor(timeInHours * 60);
    var timeInSeconds = Math.floor((timeInHours * 3600) % 60);

    console.log(`${timeInMinutes} min ${timeInSeconds} sec iin daraa chono tuulaig guitsne.`);

    rl.close();
});