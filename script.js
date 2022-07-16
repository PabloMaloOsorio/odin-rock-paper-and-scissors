const playerSelection = prompt("Please insert rock, paper or scissors");

const computerOptions = ["rock", "paper", "scissors"];

function computerPlay(computerOptions) {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!"
    }
}

function game(playRound) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound == "You win") {
            x++;
        }
        else if (playRound == "You lose!") {
            y++;
        }
    }
    if (x > y) {
        return "You win the entire game!"
    }
    else if (y > x) {
        return "You lose the entire game!"
    }
    else {
        return "It's a tie!"
    }
}