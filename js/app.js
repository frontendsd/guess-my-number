'use strict';

const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const bgColor = document.querySelector('.box')


let randomNumber = Math.floor(Math.random()*20+1)
checkBtn.addEventListener('click', check)

let scoreNumber = 20
 function check() {
     const checkValue = +guessInput.value
    //  console.log(randomNumber);
     if(checkValue) {
         if(randomNumber == checkValue) {
            message.textContent = 'You are Win'
            bgColor.style.background = "green"
            number.textContent = randomNumber     
            randomNumber = Math.floor(Math.random()*20+1)
        }
        else {
            message.textContent = 'You Lose'
            scoreNumber--
            score.textContent = scoreNumber
            highScore.textContent = scoreNumber
        }
    }
    else {
        message.textContent = 'No number'
    }
    }

    againBtn.addEventListener('click' , again)

function again() {   
    window.location.reload();    
}