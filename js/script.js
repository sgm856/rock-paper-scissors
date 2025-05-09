const buttons = document.querySelectorAll("button.play");
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

const playArea = document.querySelector(".play-area");
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
    let announcementDisplay = document.querySelector(".results-display");

    if (!announcementDisplay) {
        announcementDisplay = document.createElement("li");
        announcementDisplay.classList.add("results-display");
    }

    let playerScoreText = playerScoreTracker.textContent;
    let computerScoreText = computerScoreTracker.textContent;

    let playerScore = parseInt(playerScoreText.match(/\d+/)[0]);
    let computerScore = parseInt(computerScoreText.match(/\d+/)[0]);

    if (winConditions[detail.playerChoice] === detail.computerChoice) {
        playerScoreTracker.textContent = `Player score: ${playerScore + 1}`;
    } else if (winConditions[detail.computerChoice] === detail.playerChoice) {
        computerScoreTracker.textContent = `Computer score: ${computerScore + 1}`;
    }

    round = parseInt(roundTracker.textContent.match(/\d+/)[0]);
    roundTracker.textContent = `Round: ${round + 1}`;
    list = document.querySelector("ul");
    if (parseElement(roundTracker) % 5 === 0) {
        announcementDisplay.textContent = announceWinner(parseElement(playerScoreTracker), parseElement(computerScoreTracker));
        list.appendChild(announcementDisplay);
    } else {
        list.removeChild(announcementDisplay);
    }
})

function parseElement(element) {
    return parseInt(element.textContent.match(/\d+/)[0]);
}

function announceWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "You won!";
    } else if (humanScore < computerScore) {
        return "Better luck next time.";
    } else {
        return "You tied!";
    }
}

function announceWinnerBeatsLoser(choice1, choice2, notTied = true) {
    if (notTied) {
        return `${choice1} beats ${choice2}`;
    } else {
        return `${choice1} does not beat ${choice2}`;
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