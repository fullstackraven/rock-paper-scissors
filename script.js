//Game
let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;
let roundCount = 0; 

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "May the best win!";

const reset = document.querySelector('#roundReset');
reset.textContent = "Click Rock, Paper or Scissors to play!";

const round = document.querySelector('#roundCount');
round.textContent = ' ';

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
}


buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissors")
    {
        playerChoiceInt = 2;
    }
    compChoiceInt = computerPlay(compChoice);
    const click = document.querySelector(`button[id="${playerChoice}"]`);
    click.classList.add('clicked');
    const clicks = Array.from(document.querySelectorAll('.btn'));
    clicks.forEach(click => click.addEventListener('transitionend', removeTransition));
    playGame();
    })

})




function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if(choiceNum == 2){
        compChoice.Value = "scissors";
    }
    return choiceNum;
}

function playRound(){
        let win_array = [[0, 2, 1], 
                        [1, 0, 2], 
                        [2, 1, 0]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
    output.textContent = `Its a tie! You chose ${playerChoice} and the computer chose ${compChoice.Value}`;
    roundCount++;
    }
    else if (result == 1){
    output.textContent = `You won! You chose ${playerChoice} and the computer chose ${compChoice.Value}`;
    playerScore++;
    roundCount++;

    }
    else if (result == 2){
    output.textContent = `You lost! You chose ${playerChoice} and the computer chose ${compChoice.Value}`;
    compScore++;
    roundCount++;
    }
}

function playGame(){
        reset.textContent = " ";
        playRound();
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
        round.textContent = `Round: ${roundCount}`;

        if (playerScore == 5){
            output.textContent = "You Won the Game!";
            playerScore = 0;
            compScore = 0;
            roundCount = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
            reset.textContent = "Congrats on the win! Press your luck and try again!";
            round.textContent = '';
        }
        else if (compScore == 5){
            output.textContent = "You Lost the game";
            playerScore = 0;
            compScore = 0;
            roundCount = 0;
            player.textContent = `Player Score: ${playerScore}`;
            computer.textContent = `Computer Score: ${compScore}`;
            reset.textContent = "The computer was just too good this time! Enact your revenge!";
            round.textContent = '';
        }
}
