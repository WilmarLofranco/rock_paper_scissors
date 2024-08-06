// Create function "getComputerChoice" which will randomly return one of the following string values: “rock”, “paper” or “scissors”.
let computerChoice;
function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "rock"
    } else if (randomNum === 1) {
        computerChoice = "paper"
    } else if (randomNum === 2) {
        computerChoice = "scissors"
    };
    return (computerChoice);
};

//  Create function "getHumanChoice" w/c will return one of the valid choices depending on what the user inputs.

const buttons = document.querySelectorAll("button");
let humanChoice;

function getHumanChoice (event) {
    humanChoice = event.target.id;
    getComputerChoice();
    roundsPlayed++;
    round.textContent = `ROUND: ${roundsPlayed}`;
    playRound(humanChoice, computerChoice);
    };

buttons.forEach(function(button) {
    button.addEventListener("click", getHumanChoice);
});

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

// write a function "playRound" that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

const result = document.querySelector("#results");
const userScore = document.querySelector("#userScore");
const comScore= document.querySelector("#comScore");
const round = document.querySelector("#round");

function playRound (humanChoice, computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent= "Round Result: You lose! Paper beats rock!"
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent="Round Result: You lose! Scissors beats paper!"
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent="Round Result: You lose! Rock beats scissors!"
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        result.textContent="Round Result: You win! Paper beats rock!"
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        result.textContent="Round Result: You win! Scissors beats paper!"
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        result.textContent="Round Result: You win! Rock beats scissors!"
        humanScore++
    } else if (computerChoice === humanChoice) {
        result.textContent="Round Result: Draw! You have the same choice with the computer!"
    } else {
        result.textContent="Round Result: You have entered an invalid input!";
        computerScore++
    };
    userScore.textContent=`Human Score: ${humanScore}`;
    comScore.textContent=`Computer Score: ${computerScore}`;
    if (roundsPlayed > 5) {
    endGame();
};
}

// write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end
const finalResult = document.querySelector("#finalResult")

function endGame() {
    round.textContent = "GAME OVER!";
    if (humanScore > computerScore) {
        finalResult.textContent = "Final Result: Congratulations! You won!".toUpperCase();
    } else if (humanScore < computerScore) {
        finalResult.textContent = "Final Result: You lose! Try Again!".toUpperCase();
    } else {
        finalResult.textContent = "Final Result: Match draw! Try Again!".toUpperCase();
    };
    userScore.textContent = `Final Human Score: ${humanScore}`;
    comScore.textContent = `Final Computer Score: ${computerScore}`;
    buttons.forEach(function(button) {
    button.removeEventListener("click", getHumanChoice);
    })
};

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetGame)

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 1;
    userScore.textContent = `Human Score: ${humanScore}`;
    comScore.textContent = `Computer Score: ${computerScore}`;
    result.textContent = "Waiting for you to pick...";
    finalResult.textContent = "";
    round.textContent = `ROUND: ${roundsPlayed}`;
    buttons.forEach(function(button) {
    button.addEventListener("click", getHumanChoice);
    })
};