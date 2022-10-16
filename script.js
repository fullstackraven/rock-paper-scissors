// This will execute a randomly generated game choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

// This allows user to define the game selection
function userInput() {
    const ask = prompt("Start game, select: Rock, Paper or Scissors!");
    return ask.toLowerCase();
}

// This creates the parameters to determine gameplay result
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors"; 
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == computerSelection){
        return "It's a tie! Play again";
    } else {
        return "Try again!";
    }
}

const playerSelection = userInput();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));