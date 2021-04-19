var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
var penalty = 10;
var score = 0;
var questionPosition = 0;
var quiz = getElementById("quiz")
var questions = getElementById('questions')
var options = getElementById('options')

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent= "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
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