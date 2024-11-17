const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = ['javascript', 'hangman', 'hello', 'node', 'bye'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
let lives = 5;
let guessedLetters = [];
let correctGuesses = new Set();

function displayWord() {
  let display = '';
  for (let letter of selectedWord) {
    if (correctGuesses.has(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  console.log(display.trim());
}

function drawHangman() {
  const hangmanStages = [
    `
     -----
     |   |
     O   |
         |
         |
         |
    =========`,
    `
     -----
     |   |
     O   |
     |   |
         |
         |
    =========`,
    `
     -----
     |   |
     O   |
    /|   |
         |
         |
    =========`,
    `
     -----
     |   |
     O   |
    /|\\  |
         |
         |
    =========`,
    `
     -----
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========`,
    `
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========`
  ];
  console.log(hangmanStages[5 - lives]);
}

function handleGuess(letter) {
  if (selectedWord.includes(letter)) {
    correctGuesses.add(letter);
    console.log('Congratulations! Correct guess.');
  } else {
    lives--;
    console.log(`Wrong guess. You have ${lives} lives left.`);
    drawHangman();
  }
  guessedLetters.push(letter);
}

function checkGameStatus() {
  if (lives <= 0) {
    console.log(`Game over! The word was: ${selectedWord}`);
    rl.close();
    return true;
  }
  if ([...selectedWord].every(letter => correctGuesses.has(letter))) {
    console.log(`Congratulations! You've guessed the word: ${selectedWord}`);
    rl.close();
    return true;
  }
  return false;
}

function gameLoop() {
  displayWord();
  rl.question('Guess a letter: ', (answer) => {
    const letter = answer.toLowerCase();
    if (guessedLetters.includes(letter)) {
      console.log('You already guessed that letter.');
    } else {
      handleGuess(letter);
    }
    if (!checkGameStatus()) {
      gameLoop();
    }
  });
}

console.log('Welcome to Hangman!');
gameLoop();