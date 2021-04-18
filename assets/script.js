var quiz = document.getElementById('quiz')
var startButton = document.getElementById('startButton')
var timer = document.getElementById('timer')
var secondsLeft = 75; 

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent= "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }, 75000)
}