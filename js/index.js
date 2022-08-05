'use strict';
//guess my number game
let number = document.querySelector('.number')
let randomNumber = Math.trunc((Math.random() * 20) + 1)
// number.textContent = randomNumber
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let score = 20;
let highScore = 0;
let scoreText = document.querySelector('.score');
let highScoreText = document.querySelector('.highscore');

check.addEventListener('click', myNumber)
function myNumber() {
    let guess = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message');
    
    if (!guess) {
        message.textContent  = 'no number chosen'
    }
    else if (guess > randomNumber) {
        if (score > 1 ) {
        message.textContent  = 'number too high';
        score--;
        scoreText.textContent = score;
        } 
        else {
            message.textContent  = 'you lost the game';
        }   
    }
    else if (guess < randomNumber) {
        if (score > 1 ) {
            message.textContent  = 'number too low ';
            score--;
            scoreText.textContent = score;
        } 
        else {
            message.textContent  = 'you lost the game';
        }   
    }
    else {
        message.textContent  = 'you won';
        highScoreText.textContent = guess;
        scoreText.textContent = guess;
        number.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor  = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if (highScore > score) {
            highScore = score
            highScoreText.textContent = highScore
        }
    }
}

again.addEventListener('click', reset)
function reset() {
    window.location.reload()
}