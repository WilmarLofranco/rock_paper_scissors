// Create function "getComputerChoice" which will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let computerInput;
    if (randomNum === 1) {
        computerInput = "rock"
    } else if (randomNum === 2) {
        computerInput = "paper"
    } else if (randomNum === 3) {
        computerInput = "scissors"
    }
    return computerInput;   
}

//  Create function "getHumanChoice" w/c will return one of the valid choices depending on what the user inputs.

function getHumanChoice () {
    let humanInput = prompt("Rock, paper, or scissors?").toLowerCase();
    return humanInput;
};

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// write a function "playRound" that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

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
    } else if (computerChoice === humanChoice) {
        console.log("Draw! You have the same choice with the computer!")}
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end

function playGame () {
    console.log("Round 1!");
    playRound (humanChoice, computerChoice);
    
    console.log("Round 2!");
    let humChoice2 = getHumanChoice();
    let comChoice2 = getComputerChoice();
    playRound (humChoice2, comChoice2);

    console.log("Round 3!");
    let humChoice3 = getHumanChoice();
    let comChoice3 = getComputerChoice();
    playRound (humChoice3, comChoice3);

    console.log("Round 4!");
    let humChoice4 = getHumanChoice();
    let comChoice4 = getComputerChoice();
    playRound (humChoice4, comChoice4);

    console.log("Round 5!");
    let humChoice5 = getHumanChoice();
    let comChoice5 = getComputerChoice();
    playRound (humChoice5, comChoice5);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won!")
    } else if (humanScore < computerScore) {
        console.log("You lose! Refresh page to play again.")
    } else if (humanScore === computerScore) {
        console.log("Match draw! Refresh page to play again.")
    }
}

playGame ();