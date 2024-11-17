const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Haalganii toog oruul : ', (apartmentNumber) => {
    apartmentNumber = parseInt(apartmentNumber);

    const floors = 9;
    const entrances = 3;
    const apartments = 4;

    var apartmentsPerEntrance = floors * apartments; 

    var entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
    var floorNumber = Math.ceil((apartmentNumber % apartmentsPerEntrance) / apartments);
    var doorNumber = apartmentNumber % apartments


    console.log(`${apartmentNumber} toot  ni ${entranceNumber}-r ortsnii ${floorNumber}-r davhriin, ${doorNumber}-r toot bn.`);

    rl.close();
});