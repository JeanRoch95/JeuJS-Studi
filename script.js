var scores;
var currentScore;
var activePlayer;
var gameTrue;

var btnNew = document.getElementById('new-game')
var btnRoll = document.getElementById('roll-dice')
var btnHold = document.getElementById('hold')
var current1 = document.getElementById('current-score-0')
var current2 = document.getElementById('current-score-1')
var total1 = document.getElementById('total-score-0')
var total2 = document.getElementById('total-score-1')
var player1 = document.querySelector('.player1-content-section')
var player2 = document.querySelector('.player2-content-section')

function initialisation() {
    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    gameTrue = true

    current1.textContent = '0';
    current2.textContent = '0';
    total1.textContent ='0';
    total2.textContent = '0'
}

initialisation()

btnRoll.addEventListener('click', () => {
    if (gameTrue){
        var resultat = Math.trunc(Math.random () * 6 + 1)
        var image = document.querySelector('.image')
        image.style.display = 'block'
        image.src = 'd-' + resultat + '.jpg';

    
        if (resultat > 1){
            currentScore += resultat;
            var current = document.getElementById('current-score-' + activePlayer);
            current.textContent = currentScore
        } else {
            next()
        }
    }
});


btnHold.addEventListener('click', () => {
    if (gameTrue){
        scores[activePlayer] += currentScore;

        var total = document.getElementById('total-score-' + activePlayer)
        total.textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            document.getElementById("total-score-" + activePlayer).textContent = "WINNER!!!!!!"
            gameTrue = false;
        } else {
            next()
        }
    }
})


function next() {
    if (activePlayer === 0){
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    currentScore = 0

    document.getElementById('current-score-0').textContent = '0';
    document.getElementById('current-score-1').textContent = '0';

    player1.classList.toggle('opacity');
    player2.classList.toggle('opacity');

    document.querySelector('.image').src = 'd-1.jpg'
}





btnNew.addEventListener('click', initialisation)