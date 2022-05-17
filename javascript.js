
const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerscorenumber');
const computerScore = document.querySelector('.computerscorenumber');
const tieScore = document.querySelector('.tienumber');
buttons.forEach(button => button.addEventListener('click', play));
let gameChoices = ["ROCK", "PAPER", "SCISSORS"];
let winningCount = 0;
let losingCount = 0;
function computerPlay() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function updateScore(result) {
  currentPlayerScore = Number(playerScore.textContent);
  currentComputerScore = Number(computerScore.textContent);
  currentTieScore = Number(tieScore.textContent);
  if(result === "winner") {
    playerScore.textContent = `${currentPlayerScore + 1}`

  } else if(result === "loser") {
    computerScore.textContent = `${currentComputerScore + 1}`
  } else {
    tieScore.textContent = `${currentTieScore + 1}`

  }
  checkWinner();
}

function checkWinner() {
  if (Number(playerScore.textContent) === 5) {
    alert("player wins!")
} else if (Number(computerScore.textContent) === 5) {
alert("computer wins!")
} else if (Number(tieScore.textContent) === 5) {
  alert("nobody wins!")
}
}

function playRound(playerSelection, computerSelection) {
  let choice = playerSelection.toUpperCase();
  console.log(choice);
  console.log(computerSelection);
  if (
    (choice === "ROCK" && computerSelection === "SCISSORS") ||
    (choice === "SCISSORS" && computerSelection === "PAPER") ||
    (choice === "PAPER" && computerSelection === "ROCK")
  ) {
    updateScore("winner");
  } else if (choice === computerSelection) {
    updateScore("tie");
  } else {
    updateScore("loser");
  }
}
function play(e) {
  const playerChoice = String(this.classList.value)
  console.log(playerChoice)
  playRound(playerChoice, computerPlay());
}

// function game() {
//   let weapon = prompt("enter your weapon", "");
//   for (let i = 1; i < 6; i++) {
//     let result = playRound(weapon, computerPlay());
//     if (result === "winner") {
//       winningCount++;
//     } else if (result === "loser") {
//       losingCount++;
//     }
//   }
//   if (winningCount >= 3) {
//     return "you won!";
//   } else if (losingCount >= 3) {
//     return "you lost!";
//   } else {
//     return "tie!";
//   }
// }
