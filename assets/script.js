var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
var container = document.getElementById('container')
var optionBox = document.querySelector('.options')
var selectedQuestions = document.getElementById('question')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var quiz = document.getElementById('quiz')
var submitButton = document.getElementById('submit')
var localScores = []
var submitForm = document.getElementById('submit-form')

//questions array

var questions = [
    {
    questions: "How many infinity stones are there?",
    option1: "4",
    option2: "7",
    option3: "6",
    option4: "5",
    answer: "option3"
    },{
    questions: "Who is Tony Stark's Father?",
    option1: "Kenneth Stark",
    option2: "Howard Stark",
    option3: "Richard Stark",
    option4: "He didn't know his father",
    answer: "option2"
    },{
    questions: "What type of doctor is Doctor Strange?",
    option1: "Neurosurgeon",
    option2: "ER",
    option3: "Radiologist",
    option4: "Dentist",
    answer: "option1"
    },{
    questions: "On what planet was the Soul Stone in Infinity War?",
    option1: "It was found in a black hole",
    option2: "Mars",
    option3: "Earth",
    option4: "Vormir",
    answer: "option4"
    },
]
//listens for the users click and runs the functions

    startButton.addEventListener('click', function() {
        console.log(startButton);
        document.getElementById('quiz').hidden=true;
        document.getElementById('startButton').hidden=true;
        document.getElementsByTagName("div")[0].style.display= "block";
        setTime();
        showQuestions();
    })

//timer function

    var timerInterval
function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
     if (secondsLeft >= 0) {
         span = document.getElementById('timer')
         span.innerHTML = secondsLeft
     }
    if(secondsLeft === 0) {
        alert("Sorry, we are out of time!")
        clearInterval(timerInterval);
    }
    }, 1000)
}

//question function to show the questions in quiz

var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0

function showQuestions() {
    if(runningQuestionIndex > lastQuestionIndex){
        container.style.display = "none"
        submitForm.removeAttribute('hidden');
        finalScore.removeAttribute('hidden');
        finalScore.innerHTML = "Your final score" + " " + secondsLeft
        clearInterval(timerInterval);
    } else {
        var q = questions[runningQuestionIndex]
        selectedQuestions.innerHTML = q.questions
        option1.innerHTML = q.option1
        option2.innerHTML = q.option2
        option3.innerHTML = q.option3
        option4.innerHTML = q.option4
    }
}

//runs a function to check to see if answers are correct

function checkAnswer(answer){
    if(questions[runningQuestionIndex].answer === answer){
        runningQuestionIndex++
        showQuestions()
    } else {
        secondsLeft = secondsLeft - 10
        runningQuestionIndex++
        showQuestions()
    }
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    localStorageScores();
    alert("Check to see if you made the high scores!")
})

//adds user score and initials to local storage


function localStorageScores(){
    var initials = document.getElementById('initials').value;

    var checkLocal = JSON.parse(localStorage.getItem('scores'));

    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    if (checkLocal === null) {
        localScores = [{
            playerInitials: initials.trim(),
            userScore: secondsLeft}]
        
    }else {
        localScores = checkLocal.concat([{
            playerInitials: initials.trim(),
            userScore: secondsLeft}])
    }
    localStorage.setItem('scores', JSON.stringify(localScores))
}