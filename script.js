"use strict";

const player1 = document.querySelector(".player--1"),
  player2 = document.querySelector(".player--2"),
  player1CurrScore = document.querySelector("#current--1"),
  player2CurrScore = document.querySelector("#current--2"),
  player1Score = document.querySelector("#score--1"),
  player2Score = document.querySelector("#score--2"),
  diceImg = document.querySelector(".dice"),
  newGame = document.querySelector(".btn--new"),
  roll = document.querySelector(".btn--roll"),
  endTurnBtn = document.querySelector(".btn--hold");

let num = 0,
  currPlayer = player1,
  currentScore1 = 0,
  currentScore2 = 0,
  score1 = 0,
  score2 = 0;

function endTurn() {
  addScore();

  if (score1 >= 100) {
    alert("Player 1 win!");
  } else if (score2 >= 100) {
    alert("Player 2 win!");
  }

  if (currPlayer === player1) {
    currPlayer = player2;
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
  } else {
    currPlayer = player1;
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
  }
}

function addCurrentScore(arg) {
  if (arg != 1) {
    if (currPlayer === player1) {
      player1CurrScore.textContent = currentScore1 += arg;
    } else {
      player2CurrScore.textContent = currentScore2 += arg;
    }
  } else {
    if (currPlayer === player1) {
      player1CurrScore.textContent = currentScore1 = 0;
    } else {
      player2CurrScore.textContent = currentScore2 = 0;
    }
  }
}

function addScore() {
  if (currPlayer === player1) {
    player1Score.textContent = score1 += currentScore1;
    player1CurrScore.textContent = currentScore1 = 0;
  } else {
    player2Score.textContent = score2 += currentScore2;
    player2CurrScore.textContent = currentScore2 = 0;
  }
}

function rollDice() {
  num = Math.round(Math.random() * 6) + 1;
  console.log(num);
  switch (num) {
    case 1:
      diceImg.src = "dice1.png";
      addCurrentScore(1);
      endTurn();
      break;
    case 2:
      diceImg.src = "dice2.png";
      addCurrentScore(2);
      break;
    case 3:
      diceImg.src = "dice3.png";
      addCurrentScore(3);
      break;
    case 4:
      diceImg.src = "dice4.png";
      addCurrentScore(4);
      break;
    case 5:
      diceImg.src = "dice5.png";
      addCurrentScore(5);
      break;
    case 6:
      diceImg.src = "dice6.png";
      addCurrentScore(6);
      break;
  }
}

roll.addEventListener("click", rollDice);
endTurnBtn.addEventListener("click", endTurn);
newGame.addEventListener("click", function () {
  currPlayer = player1;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1CurrScore.textContent = currentScore1 = 0;
  player2CurrScore.textContent = currentScore2 = 0;
  player1Score.textContent = score1 = 0;
  player2Score.textContent = score2 = 0;
});
