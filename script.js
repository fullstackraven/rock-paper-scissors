// Game

// This will execute a randomly generated game choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// This allows user to define the game selection 
function userInput() {
    const ask = prompt("Start game, select: Rock, Paper or Scissors!");
    return ask.toLowerCase();
}

// This creates the parameters to determine gameplay result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tie;
        
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection ==='paper' && computerSelection === 'rock')
      ) {
        playerScore++;
        return win;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++;
        return lose;
      }
}

// Game over
function gameOver() {
    if (playerScore === 5 || computerScore === 5) {
        return "Game Over";
    } else {
        return '';
    } 
       
}

// Variables 
let win = "You won!";
let lose = "You lost!";
let tie = "It's a tie!";
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let n = gameOver();

// Loop through rounds
for (let n = 0; n <= n; n++) {
    const playerSelection = userInput();
    const computerSelection = getComputerChoice();
    console.log("Your Selection:" + " " + playerSelection);
    console.log("Computer Selection:" + " " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your Score:" + " " + playerScore);
    console.log("Computer's Score:" + " " + computerScore);
    console.log(gameOver());

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}

