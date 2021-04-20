var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
var optionBox = document.querySelector('.options')
var penalty = 10;
var score = 0;
var questionPosition = 0;
var questions = document.getElementById('questions')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var intro = document.getElementById('intro')

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

    startButton.addEventListener('click', function() {
        console.log(startButton);
        document.getElementById('intro').hidden=true;
        document.getElementById('startButton').hidden=true;
        questions.removeAttribute('hidden');
        setTime();
        intro();
    })

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent= "Time:" + secondsLeft;
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    }
    }, 1000)
}

optionBox[0].addEventListener('click', function() {
    console.log(optionBox);
    if (questions) [questionPosition].option1 == questions(questionPosition).answer; {
        console.log ("correct!")
    }

    questionPosition ++;
    questions()
     
})

