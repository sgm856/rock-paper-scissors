console.log("Hi. Fuck die Post.");

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    announceWinner();
}

function announceWinner() {
    if (humanScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("Better luck next time.");
    }
}

function playRound(humanChoice, computerChoice) {
    if (!(humanChoice === computerChoice)) {
        if (humanChoice === "scissors") {
            if (computerChoice === 'paper') {
                playerWin();
                announceWinnerBeatsLoser(humanChoice, computerChoice);
            } else {
                playerLose();
                announceWinnerBeatsLoser(computerChoice, humanChoice);
            }
        }
        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                playerWin();
                announceWinnerBeatsLoser(humanChoice, computerChoice);
            } else {
                playerLose();
                announceWinnerBeatsLoser(computerChoice, humanChoice);
            }
        }
        if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                playerWin();
                announceWinnerBeatsLoser(humanChoice, computerChoice);
            } else {
                playerLose();
                announceWinnerBeatsLoser(computerChoice, humanChoice);
            }
        }
    } else {
        console.log(`${humanChoice} does not beat ${computerChoice}`);
    }
}

function announceWinnerBeatsLoser(choice1, choice2) {
    console.log(`${choice1} beats ${choice2}`);
    console.log(`Player score: ${humanScore}\nComputer Score:${computerScore}`);
}

function playerWin() {
    humanScore += 1;
}

function playerLose() {
    computerScore += 1;
}

function getHumanChoice() {
    let userChoice = prompt("Please enter rock, paper, or scissors");
    return userChoice.toLowerCase();
}

function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "scissors";
    } else if (randNum > 0.33 && randNum < 0.66) {
        return "paper";
    } else {
        return "rock";
    }
}