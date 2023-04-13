function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    const options = ["Rock", "Paper", "Scissors"];
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if((playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")) {
        result = [`You lost! You chose ${playerSelection} and the computer chose ${computerSelection}.`, `-1`];
    }
    else if((computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Rock")) {
        result = [`You won! You chose ${playerSelection} and the computer chose ${computerSelection}.`, `1`];
    }
    else {
        result = [`Draw! You both chose ${computerSelection}`, `0`];
    }
    return result;
}   

function updatePlayerChoice() {
    playerChoiceElement.textContent = `You chose ${playerChoice}`;
}

function updateScore() {
    scoreElement.textContent = `YOU ${yourPoints} - ${computerPoints} COMPUTER`;
}

function letUserKnow(outcome, computerSelection) {
    if(outcome == 1) {
        outcomeElement.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}. You won.`
    }
    else if(outcome == 0) {
        outcomeElement.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}. Draw.`
    }
    else if(outcome == -1){
        outcomeElement.textContent = `You chose ${playerChoice} and the computer chose ${computerSelection}. You lost.`
    }
}


const rockButton = document.getElementsByClassName("rock")[0];
const paperButton = document.getElementsByClassName("paper")[0];
const scissorsButton = document.getElementsByClassName("scissors")[0];
const submitButton = document.querySelector(`button[type="submit"]`)
const playerChoiceElement = document.getElementById("player-choice");
const scoreElement = document.getElementById("score");
const outcomeElement = document.getElementById("outcome")

let yourPoints = 0;
let computerPoints = 0;

let playerChoice;
    
rockButton.addEventListener("click", () => {
    playerChoice = "Rock";
    updatePlayerChoice();
})
paperButton.addEventListener("click", () => {
    playerChoice = "Paper";
    updatePlayerChoice();
})
scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors";
    updatePlayerChoice();
})

submitButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    if(typeof(playerChoice) === "string") {
        let result = playRound(playerChoice, computerSelection)[1];
        if(result == 1) {
        yourPoints++;
        letUserKnow(1, computerSelection);
        }
        else if(result == -1) {
         computerPoints++;
         letUserKnow(-1, computerSelection);
        }
        else {
         letUserKnow(0, computerSelection);
        }
        updateScore();
    }
    else {
        window.alert("You must first select a value!");
    }
})


