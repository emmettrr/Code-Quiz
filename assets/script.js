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
    answer: "Emmett"
    },{
    questions: "What is my nameee?",
    option1: "Kyle",
    option2: "Emmett",
    option3: "Brandon",
    option4: "Kent",
    answer: "Emmett"
    },{
    questions: "What is my nameeee?",
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
        document.getElementsByTagName("div")[0].style.display= "block";
        setTime();
        showQuestions();
    })

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent= "Time:" + secondsLeft;
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
        finalScore.style.display = "block"
        finalScore.innerHTML = "Your final score" + " " + secondsLeft
        submit.addEventListener("click", save)
        function save(){
        localStorage.setItem("playerScore", counter)
        localStorage.setItem("playerInitials", initials)
        location.reload()
        }
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
    console.log (runningQuestionIndex)
    console.log('answer', answer)
    console.log(questions[runningQuestionIndex])
    if(questions[runningQuestionIndex].answer === answer){
        console.log('answer', answer)
        runningQuestionIndex++
        showQuestions()
    } else {
     counter = secondsLeft - 10
     runningQuestionIndex++
     showQuestions()
    }
}