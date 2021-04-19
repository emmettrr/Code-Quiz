var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
var penalty = 10;
var score = 0;
var questionPosition = 0;
var quiz = getElementById("quiz")
var questions = getElementById('questions')
var options = getElementById('options')
var intro = getElementById('intro')

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

function startQuiz () {
    startButton.addEventListener("click")
    document.getElementById('intro').hidden=true;
    startButton.hidden = true;
    setTime();
    startQuiz();
}

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent= "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}