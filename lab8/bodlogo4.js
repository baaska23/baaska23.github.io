function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findGCD(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }
    return result;
}

const numbers = [2, 2, 2, 2, 2];

let res = findGCD(numbers);
console.log(`HBEH: ${res}`);