let computerWins = 0;
let playerWins = 0;

const rock = document.querySelector("#p1Rock")
const paper = document.querySelector("#p1Paper")
const scissors = document.querySelector("#p1Scissors")
let poneW = document.querySelector("#poneW")
let alphaW = document.querySelector("#alphaW")
let roundWin = document.querySelector("#roundWin")


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];

    return computerSelection;
}

// function getPlayerSelection() {
//     let p1Choice = prompt("Please choose one: rock, paper, or scissors");
//     let playerSelection = p1Choice.toLowerCase();
//     return playerSelection;
// }


// function game(){
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(getComputerChoice(),getPlayerSelection()));
//      } 
// }

function playRound(computerSelection, playerSelection){
    let message = "";
    if (computerSelection === "rock" && playerSelection === "rock") {
        message += "It's a Tie!";
        roundWin.textContent = message
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
        alphaW.textContent = computerWins
        roundWin.textContent = message
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
        poneW.textContent = playerWins
        roundWin.textContent = message
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
        poneW.textContent = playerWins
        roundWin.textContent = message
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
        alphaW.textContent = computerWins
        roundWin.textContent = message
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        message += "Its a tie!";
        roundWin.textContent = message
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message += "Computer Wins!";
        computerWins = computerWins + 1;
        alphaW.textContent = computerWins
        roundWin.textContent = message
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        message += "Player Wins!";
        playerWins = playerWins + 1;
        poneW.textContent = playerWins
        roundWin.textContent = message
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        message += "Its a Tie!";
        roundWin.textContent = message
    } else {
        message += "Everyone loses!";
        roundWin.textContent = message
    }
    // console.log(computerSelection, playerSelection, message, computerWins, playerWins);

}

// function winner() {
//     let champion = "";
//     if (computerWins > playerWins){
//         champion += "Computer is the Champion!";
//     } else if (computerWins < playerWins) {
//         champion += "The Human is the Champion!";
//     } else {
//         champion += "Wow, it's a tie!";
//     }
//     return champion;
// }

rock.addEventListener("click", e =>{
    playRound(getComputerChoice(), "rock")
});

paper.addEventListener("click", e => {
    playRound(getComputerChoice(), "paper")
})

scissors.addEventListener("click", e => {
    playRound(getComputerChoice(), "scissors")
})


