var highScore = document.getElementById('highScore')
var userScore = localStorage.getItem('userScore')
var initials = localStorage.getItem('initials')

document.getElementById('highScore').textContent = (userScore + initials)