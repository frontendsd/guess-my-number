'use strict';

const againBtn = document.querySelector('.again')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const checkBtn = document.querySelector('.check')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const bgColor = document.querySelector('.box')

let scoreGame = 20
let randomNumber = Math.floor(Math.random()*20+1)
// console.log(randomNumber);
checkBtn.addEventListener('click', function() {
    let checkValue = +guessInput.value
    if(checkValue) {
        if(randomNumber == checkValue) {
            message.textContent = "You are win!"
            bgColor.style.background = "green"
            number.textContent = randomNumber
            Math.floor(Math.random()*20+1)
         }
        else if(randomNumber > checkValue) {
            message.textContent = "Siz o'ylagan son katta"
        }
        else if(randomNumber < checkValue) {
            message.textContent = "Siz o'ylagan son kichik"
        }
        else {
            message.textContent = "You lose"
            scoreGame--
            bgColor.style.background = "#ec7063"
            setTimeout(()=> {bgColor.style.background = "#222"},300)
            highScore.textContent = 19
            score.textContent = scoreGame
        }

    }else {
        message.textContent = "No number!"
    }
})

againBtn.addEventListener('click', function() {
    window.location.reload();
})


