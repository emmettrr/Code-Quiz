var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75;
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

var questions = [
    {
    questions: "What is my name?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "option2"
    },{
    questions: "What is my namee?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "option2"
    },{
    questions: "What is my nameee?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "option2"
    },{
    questions: "What is my nameeee?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "option2"
    },
]

    startButton.addEventListener('click', function() {
        console.log(startButton);
        document.getElementById('quiz').hidden=true;
        document.getElementById('startButton').hidden=true;
        document.getElementsByTagName("div")[0].style.display= "block";
        setTime();
        showQuestions();
    })

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

var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0

function showQuestions() {
    if(runningQuestionIndex > lastQuestionIndex){
        quiz.style.display = "none"
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