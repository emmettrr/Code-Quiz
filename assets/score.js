var highScore = document.getElementById('highScore')
var userScore = localStorage.getItem('userScore')
var initials = localStorage.getItem('initials')
var scores = document.createElement('li');
// var hs = localStorage.setItem(highScore)

document.getElementById('highScore').textContent = (userScore + initials)
score.appendChild(document.createTextNode(userScore + initials));
document.querySelector('ol').appendChild(scores);
