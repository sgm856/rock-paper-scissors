function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let playerWon = playRoundAndReportPlayerWin(humanChoice, computerChoice) ?? 0;
        if (playerWon > 0) {
            humanScore++;
            announceWinnerBeatsLoser(humanChoice, computerChoice);
        } else if (playerWon < 0) {
            computerScore++;
            announceWinnerBeatsLoser(computerChoice, humanChoice);
        } else {
            announceWinnerBeatsLoser(humanChoice, humanChoice, false);
        }
        console.log(`Player score: ${humanScore}\nComputer Score:${computerScore}`);
    }
    announceWinner(humanScore, computerScore);
}

function announceWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("Better luck next time.");
    }
}

function playRoundAndReportPlayerWin(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    winConditions = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    }
    if (computerChoice === winConditions[humanChoice]) {
        return 1;
    } else {
        return -1;
    }
}

function announceWinnerBeatsLoser(choice1, choice2, notTied = true) {
    if (notTied) {
        console.log(`${choice1} beats ${choice2}`);
    } else {
        console.log(`${choice1} does not beat ${choice2}`);
    }
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