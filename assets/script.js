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
var quiz = document.getElementById('quiz')

var questions = [
    {
    questions: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    questions: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    questions: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    questions: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },
]

    startButton.addEventListener('click', function() {
        console.log(startButton);
        document.getElementById('quiz').hidden=true;
        document.getElementById('startButton').hidden=true;
        document.getElementsByTagName("div")[0].removeAttribute('display: none');
        setTime();
        showQuestions();
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

var runningQuestionIndex = questions.length - 1
var runningQuestionIndex = 0

function showQuestions() {
    if(runningQuestionIndex > lastQuestionIndex){
        quiz.style.display = "none"
        finalScore.style.display = "block"
        finalScore.innerHTML = "Your final score" + " " + counter
    }else {
    var q = questions[runningQuestionIndex]
    question.innerHTML = "<p>" +q.question+ "</p>"
    option1.innerHTML = q.option1
    option2.innerHTML = q.option2
    option3.innerHTML = q.option3
    option4.innerHTML = q.option4
    }
}

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        runningQuestionIndex++
        showQuestions()
    } else {
     counter = counter - 10
     runningQuestionIndex++
     showQuestions()
    }
}