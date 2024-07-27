// Create function "getComputerChoice" which will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    if (randomNum === 1) {
        computerChoice = "rock"
    } else if (randomNum === 2) {
        computerChoice = "paper"
    } else if (randomNum === 3) {
        computerChoice = "scissors"
    }
    return computerChoice;   
}

let computerChoice = getComputerChoice();

//  Create function "getHumanChoice" w/c will return one of the valid choices depending on what the user inputs.

function getHumanChoice () {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    return humanChoice;
};

let humanChoice = getHumanChoice();

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;


// write a function "playRound" that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playGame() {
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else { console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
playRound(humanChoice, computerChoice);

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else { console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
playRound(humanChoice, computerChoice);

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else { console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
playRound(humanChoice, computerChoice);

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else { console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
playRound(humanChoice, computerChoice);

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else { console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
playRound(humanChoice, computerChoice);
}


playGame();