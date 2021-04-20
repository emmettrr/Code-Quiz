var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var startQuiz = document.getElementById('quiz')
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
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    quest: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    quest: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    quest: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },
]

    startButton.addEventListener("click", function(run) {
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