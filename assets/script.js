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
    this.score = 75;
    this.questions = questions;
    this.questionPosition = 0;
}



var questions = [
    {
    quest: "What is my name?",
    choices: ["Brandon", "Kyle", "Timmy", "Emmett"],
    answer: "Emmett"
    },
    {
    quest: "What is my name?",
    choices: ["Brandon", "Kyle", "Timmy", "Emmett"],
    answer: "Emmett"
    },
    {
    quest: "What is my name?",
    choices: ["Brandon", "Kyle", "Timmy", "Emmett"],
    answer: "Emmett"
    },
    {
    quest: "What is my name?",
    choices: ["Brandon", "Kyle", "Timmy", "Emmett"],
    answer: "Emmett"
    }
]

var score = 0;
var questionPosition = 0;
var quiz = getElementById("quiz")
var questions = getElementById('questions')
var options = getElementById('options')