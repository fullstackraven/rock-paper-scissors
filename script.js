// This will execute a randomly generated game choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
    }
}
console.log(getComputerChoice());