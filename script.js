const button = document.querySelectorAll("#player-buttons button");

button[0].addEventListener('click', function() {
    singleRound('rock');
})

button[1].addEventListener('click', function() {
    singleRound('paper');
})

button[2].addEventListener('click', function() {
    singleRound('scissors');
})

const info = document.querySelector("#game-info p");



//original game code below


let previous = 'rock';

function computerPlay() {
    document.getElementById(previous).classList.remove("compActive");
    let option = ['rock', 'paper', 'scissors'];
    let compChoice = option[Math.floor(Math.random() * option.length)];
    document.getElementById(compChoice).classList.add("compActive");
    previous = compChoice;
    return compChoice 
}

let playerCount = 0;
let compCount = 0;

const scores = document.querySelectorAll("#score p");



function singleRound(input) {
    if (playerCount === 5 || compCount === 5) {
        document.getElementById(previous).classList.remove("compActive");
        return info.innerHTML = "We already have a winner! Refresh for a new game.";
    }
    let playerSelection = input;
    let compSelection = computerPlay();
    if ( (playerSelection === 'rock' && compSelection === 'scissors') ||(playerSelection === 'scissors' && compSelection === 'paper') ||(playerSelection === 'paper' && compSelection === 'rock') ) {
        info.innerHTML = ( `You win! Computer chose ${compSelection}`);
        playerCount += 1;
        scores[0].innerHTML = (playerCount);
        if (playerCount === 5) {info.innerHTML = "Well done, you won!"}
    } else if (playerSelection === compSelection) {
        info.innerHTML = (`Draw! Computer chose ${compSelection}`);
    } else {
        info.innerHTML = (`You lose! Computer chose ${compSelection}`);
        compCount += 1;
        scores[1].innerHTML = (compCount);
        if (compCount === 5) {info.innerHTML = "Try again! You lost."}
    }
}
