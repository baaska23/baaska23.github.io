const words = ['javascript', 'hangman', 'hello', 'node', 'bye'];
const selectedWord = words[Math.floor(Math.random() * words.length)];
let lives = 5;
let guessedLetters = [];
let correctGuesses = new Set();

const hangmanStages = [
  `
     -----
     |   |
         |
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

function displayWord() {
  let display = '';
  for (let letter of selectedWord) {
    if (correctGuesses.has(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  document.getElementById('word').innerText = display.trim();
}

function drawHangman() {
  document.getElementById('hangman').innerText = hangmanStages[5 - lives];
}

function handleGuess() {
  const guessInput = document.getElementById('guessInput');
  const letter = guessInput.value.toLowerCase();
  guessInput.value = '';

  if (guessedLetters.includes(letter)) {
    document.getElementById('message').innerText = 'You already guessed that letter.';
    return;
  }

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    correctGuesses.add(letter);
    document.getElementById('message').innerText = 'Congratulations! Correct guess.';
  } else {
    lives--;
    document.getElementById('message').innerText = `Wrong guess. You have ${lives} lives left.`;
    drawHangman();
  }

  displayWord();
  document.getElementById('lives').innerText = `Lives: ${lives}`;

  if (lives <= 0) {
    document.getElementById('message').innerText = `Game over! The word was: ${selectedWord}`;
    document.getElementById('guessButton').disabled = true;
    document.getElementById('guessInput').disabled = true;
  }

  if ([...selectedWord].every(letter => correctGuesses.has(letter))) {
    document.getElementById('message').innerText = `Congratulations! You've guessed the word: ${selectedWord}`;
    document.getElementById('guessButton').disabled = true;
    document.getElementById('guessInput').disabled = true;
  }
}

document.getElementById('guessButton').addEventListener('click', handleGuess);

displayWord();
drawHangman();