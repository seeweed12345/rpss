let gameChoices = ["ROCK", "PAPER", "SCISSORS"];
let winningCount = 0;
let losingCount = 0;
function computerPlay() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
function playRound(playerSelection, computerSelection) {
  let choice = playerSelection.toUpperCase();
  if (
    (choice === "ROCK" && computerSelection === "SCISSORS") ||
    (choice === "SCISSORS" && computerSelection === "PAPER") ||
    (choice === "PAPER" && computerSelection === "ROCK")
  ) {
    return "winner";
  } else if (choice === computerSelection) {
    return "tie";
  } else {
    return "loser";
  }
}
function game() {
  let weapon = prompt("enter your weapon", "");
  for (let i = 1; i < 6; i++) {
    let result = playRound(weapon, computerPlay());
    if (result === "winner") {
      winningCount++;
    } else if (result === "loser") {
      losingCount++;
    }
  }
  if (winningCount >= 3) {
    return "you won!";
  } else if (losingCount >= 3) {
    return "you lost!";
  } else {
    return "tie!";
  }
}
