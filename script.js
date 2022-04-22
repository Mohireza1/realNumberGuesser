'use strict';
let score = 20;
const random = Math.floor(Math.random() * 99) + 1;
document.querySelector('.guessButton').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('div.square p').textContent = 'Enter a number!';
  } else if (guess > random) {
    document.querySelector('div.square p').textContent = 'TOO HIGH';
    score--;
    document.querySelector('.Score').textContent = `Score: ${score}`;
  } else if (guess < random) {
    document.querySelector('div.square p').textContent = 'TOO LOW';
    score--;
    document.querySelector('.Score').textContent = `Score: ${score}`;
  } else if (guess === random) {
    document.querySelector('div.square p').textContent = 'BINGO!';
    document.querySelector('.Score').textContent = `Score: ${score}`;
  }
});
console.log(score);
