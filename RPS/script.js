// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

let playerImg = document.getElementById("player-choice");
let compImg = document.getElementById("computer-choice");

function displayChoice(choice, image) {
  if (choice == "player-choice") {
    playerImg.src = image;
    console.log("EE");
  } else if (choice == "computer-choice") {
    compImg.src = image;
    console.log("work");
  }
}

function getCompChoice() {
  let num = Math.floor(Math.random());

  if (num >= 66) {
    displayChoice("computer-choice", "images/rock.png");
    return "rock";
  } else if (num >= 33) {
    displayChoice("computer-choice", "images/paper.png");
    return "paper";
  } else {
    displayChoice("computer-choice", "images/scissors.png");
    return "scissors";
  }
}

function getResult(pChoice, cChoice) {
  if (pChoice == cChoice) {
    return "tie";
  } else if (pChoice == "scissors" && cChoice == "rock") {
    return "computer";
  } else if (pChoice == "scissors" && cChoice == "paper") {
    return "player";
  } else if (pChoice == "rock" && cChoice == "paper") {
    return "computer";
  } else if (pChoice == "rock" && cChoice == "scissors") {
    return "player";
  } else if (pChoice == "paper" && cChoice == "scissors") {
    return "computer";
  } else if (pChoice == "paper" && cChoice == "rock") {
    return "player";
  }
}

function showResult() {}

function updateScore(winner) {}
