var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent= "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

startButton.addEventListener('click', setTime)

function Quiz(questions) {
    score = 75;
    questions = questions;
    questionIndex = 0;
}

var questions = [
    new question ("What is my name?", ["Kyle", "Taylor", "Emmett", "Brandon"], "Emmett"),
    new question ("What is my name?", ["Kyle", "Taylor", "Emmett", "Brandon"], "Emmett"),
    new question ("What is my name?", ["Kyle", "Taylor", "Emmett", "Brandon"], "Emmett"),
    new question ("What is my name?", ["Kyle", "Taylor", "Emmett", "Brandon"], "Emmett")
]