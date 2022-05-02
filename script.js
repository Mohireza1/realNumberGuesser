'use strict';
let score = 20;
let highScore = 0;
const scoreReducer = () => {
  if (score > 1) {
    score--;
    document.querySelector('.Score').textContent = `Score: ${score}`;
  } else {
    score = 0;
    document.querySelector('div.square p').textContent = 'YOU LOST';
    document.querySelector('.guessButton').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
  }
};
const messanger = msg => {
  document.querySelector('div.square p').textContent = msg;
};
let random = Math.floor(Math.random() * 99) + 1;
document.querySelector('.guessButton').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messanger('Enter a number!');
  } else if (guess > random) {
    messanger('TOO HIGH');
    scoreReducer();
  } else if (guess < random) {
    messanger('TOO LOW');
    scoreReducer();
  } else if (guess === random && score > 0) {
    messanger('BINGO');
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.highScore'
      ).textContent = `High Score: ${highScore}`;
    }
    document.querySelector('body').style.backgroundColor = 'rgb(36, 159, 56)';
    document.querySelector('.guessButton').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
  }
});
document.querySelector('.again').addEventListener('click', () => {
  random = Math.floor(Math.random() * 99) + 1;
  score = 20;
  document.querySelector('.Score').textContent = `Score: ${score}`;
  messanger('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.guessButton').style.display = 'block';
  document.querySelector('.again').style.display = 'none';
  if (
    document.querySelector('body').style.backgroundColor === 'rgb(36, 159, 56)'
  ) {
    document.querySelector('body').style.backgroundColor = 'var(--bg-clr)';
  }
});
