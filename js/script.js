buttons = document.querySelectorAll("button.play");
buttons.forEach((button) => {
    button.addEventListener("click", (clickEvent) => {
        let playEvent = new CustomEvent("playEvent", {
            bubbles: true,
            cancelable: false,
            detail: {
                playerChoice: clickEvent.target.textContent.toLowerCase(),
                computerChoice: getComputerChoice()
            }
        });
        button.dispatchEvent(playEvent);
    });
});

playArea = document.querySelector(".play-area");
playArea.addEventListener('playEvent', (event) => {
    const detail = event.detail;
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    let roundTracker = document.querySelector(".round-tracker");
    let playerScoreTracker = document.querySelector(".player-score-tracker");
    let computerScoreTracker = document.querySelector(".computer-score-tracker");
    let resultsDisplay = document.querySelector(".results-display");

    if (!resultsDisplay) {
        resultsDisplay = document.createElement("ul");
        resultsDisplay.classList.add("results-display");
    }

    let playerScoreText = playerScoreTracker.textContent;
    let computerScoreText = computerScoreTracker.textContent;

    let playerScore = parseInt(playerScoreText.match(/\d+/)[0]);
    let computerScore = parseInt(computerScoreText.match(/\d+/)[0]);

    debugger;
    if (winConditions[detail.playerChoice] === detail.computerChoice) {
        playerScoreTracker.textContent = `Player score: ${playerScore + 1}`;
    } else if (winConditions[detail.computerChoice] === detail.playerChoice) {
        computerScoreTracker.textContent = `Computer score: ${computerScore + 1}`;
    }

    round = parseInt(roundTracker.textContent.match(/\d+/)[0]);
    roundTracker.textContent = `Round: ${round + 1}`;
})

function announceWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("Better luck next time.");
    }
}

function announceWinnerBeatsLoser(choice1, choice2, notTied = true) {
    if (notTied) {
        console.log(`${choice1} beats ${choice2}`);
    } else {
        console.log(`${choice1} does not beat ${choice2}`);
    }
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