var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
var penalty = 10;
var score = 0;
var questionPosition = 0;
var quiz = getElementById("quiz")
var questions = getElementById('questions')
var option1 = getElementById('option1')
var option2 = getElementById('option2')
var option3 = getElementById('option3')
var option4 = getElementById('option4')
var intro = getElementById('intro')

var questions = [
    {
    quest: "What is my name?",
    choice,
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