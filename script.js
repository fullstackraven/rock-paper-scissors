//Game & UI: Rock, Paper, Scissors 

//Variables
let computerSelection = {Value: ""};
let playerSelection;
let computerSelectionInt = 0;
let playerSelectionInt = 0;

let playerScore = 0;
let computerScore = 0;
let roundCount = 0; 

//Selectors - Targeting nodes - output to UI
const buttons = document.querySelectorAll('.btn');

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "Best of Luck!";

const reset = document.querySelector('#roundReset');
reset.textContent = "Click Rock, Paper or Scissors to play!";

const round = document.querySelector('#roundCount');
round.textContent = ' ';

//Removes the class that transforms the button on-click
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //Allows transform to transpire
    e.target.classList.remove('clicked'); //Removes class when transition period closes (0.07s)
}

//Listens for buttons based on players choice
buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerSelection = button.id;
    if (playerSelection == "rock"){
        playerSelectionInt = 0; //output for playGame function
    }
    else if (playerSelection == "paper"){
        playerSelectionInt = 1; //output for playGame function
    }
    else if (playerSelection == "scissors")
    {
        playerSelectionInt = 2; //output for playGame function
    }
    computerSelectionInt = getRandomSelection(computerSelection);

    //Selector that inserts the class that transforms the button display
    const click = document.querySelector(`button[id="${playerSelection}"]`);
    click.classList.add('clicked');
    //Selector & listener that stops the transition property on class btn
    const clicks = Array.from(document.querySelectorAll('.btn'));
    clicks.forEach(click => click.addEventListener('transitionend', removeTransition));
    
    playGame();
    })

})

//Computer logic - Random choice generator
function getRandomSelection(computerSelection){
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0){
        computerSelection.Value = "rock";
    }
    else if (randomNum == 1){
        computerSelection.Value = "paper";
    }
    else if(randomNum == 2){
        computerSelection.Value = "scissors";
    }
    return randomNum;
}

//Handles the incrementation of player & computer score, round count & generates text output in the UI
function playRound(){
        let gameArray = [[0, 2, 1], 
                        [1, 0, 2], 
                        [2, 1, 0]];
    let result = gameArray[playerSelectionInt][computerSelectionInt];
    if (result == 0){
    output.textContent = `Its a tie! You chose ${playerSelection} and the computer chose ${computerSelection.Value}`;
    roundCount++;
    }
    else if (result == 1){
    output.textContent = `You won! You chose ${playerSelection} and the computer chose ${computerSelection.Value}`;
    playerScore++;
    roundCount++;

    }
    else if (result == 2){
    output.textContent = `You lost! You chose ${playerSelection} and the computer chose ${computerSelection.Value}`;
    computerScore++;
    roundCount++;
    }
}

//Gameplay logic - determines winner of fifth round - resets game & generates text output in UI
function playGame(){
        reset.textContent = " ";
        playRound();
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        round.textContent = `Round: ${roundCount}`;

        if (playerScore == 5){
            output.textContent = "You Won the Game!";
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
            reset.textContent = "Congrats on the win! Press your luck and try again!";
            round.textContent = '';
        }
        else if (computerScore == 5){
            output.textContent = "You Lost the game";
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${computerScore}`;
            reset.textContent = "The computer was just too good this time! Enact your revenge!";
            round.textContent = '';
        }
}
