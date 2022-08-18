let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
    
}


function getPlayerSelection() {
    let p1Choice = prompt("Please choose one: rock, paper, or scissors");
    let playerSelection = p1Choice.toLowerCase();
    return playerSelection;
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(),getPlayerSelection()));
     } 
}

function playRound(computerSelection, playerSelection){
    let message = "";
    if (computerSelection === "rock" && playerSelection === "rock") {
        message += "It's a Tie!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        message += "Its a tie!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        message += "Its a Tie!";
    } else {
        message += "Everyone loses!";
    }
    return [computerSelection, playerSelection, message, computerWins, playerWins];

}

function winner() {
    let champion = "";
    if (computerWins > playerWins){
        champion += "Computer is the Champion!";
    } else if (computerWins < playerWins) {
        champion += "The Human is the Champion!";
    } else {
        champion += "Wow, it's a tie!";
    }
    return champion;
}

game();
console.log(winner());
