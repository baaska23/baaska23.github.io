const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Toog oruul: ', (userInput) => {
    var temp = parseInt(userInput);
    var reverse = 0;
    var digitSum = 0;

    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    function isPalindrome(num) {
        var original = num;
        while (num > 0) {
            let remainder = num % 10;
            reverse = reverse * 10 + remainder;
            num = Math.floor(num / 10);
        }
        return original === reverse;
    }

    isPalindrome(digitSum) ? console.log('Palindrom mun') : console.log('Palindrom bish');
    rl.close();
});