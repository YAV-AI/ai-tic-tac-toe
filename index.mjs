import readline from "readline";
import { animateWin, animateDraw, animateLose } from "./animations.mjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let currentPlayer = "X";

function printBoard() {
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(board[i].join(" | "));
    if (i < 2) {
      console.log("---------");
    }
  }
  console.log("\n");
}

function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        return false;
      }
    }
  }
  return true;
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function computerMove() {
  let bestScore = -Infinity;
  let move;

  // Check if computer can win in the next move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        board[i][j] = "O";
        if (checkWin("O")) {
          board[i][j] = "O"; // Complete the winning move
          return;
        }
        board[i][j] = " ";
      }
    }
  }

  // If no immediate win, use minimax to find the best move
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === " ") {
        board[i][j] = "O";
        let score = minimax(board, 0, false);
        board[i][j] = " ";
        if (score > bestScore) {
          bestScore = score;
          move = { row: i, col: j };
        }
      }
    }
  }

  board[move.row][move.col] = "O";
}

const scores = {
  X: -1,
  O: 1,
  tie: 0,
};

function minimax(board, depth, isMaximizing) {
  if (checkWin("X")) {
    return scores.X - depth;
  }
  if (checkWin("O")) {
    return scores.O + depth;
  }
  if (isBoardFull()) {
    return scores.tie;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === " ") {
          board[i][j] = "O";
          let score = minimax(board, depth + 1, false);
          board[i][j] = " ";
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === " ") {
          board[i][j] = "X";
          let score = minimax(board, depth + 1, true);
          board[i][j] = " ";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}

function playGame() {
  printBoard();
  if (currentPlayer === "X") {
    rl.question(
      `Player X, enter row (0-2) and column (0-2) separated by a space: `,
      (input) => {
        const [row, col] = input.split(" ").map(Number);
        if (
          row >= 0 &&
          row < 3 &&
          col >= 0 &&
          col < 3 &&
          board[row][col] === " "
        ) {
          board[row][col] = currentPlayer;
          if (checkWin(currentPlayer)) {
            printBoard();
            animateWin();
            rl.close();
          } else if (isBoardFull()) {
            printBoard();
            animateDraw();
            rl.close();
          } else {
            switchPlayer();
            playGame();
          }
        } else {
          console.log("Invalid move. Try again.");
          playGame();
        }
      }
    );
  } else {
    setTimeout(() => {
      computerMove();
      if (checkWin("O")) {
        printBoard();
        animateLose();
        rl.close();
      } else if (isBoardFull()) {
        printBoard();
        animateDraw();
        rl.close();
      } else {
        switchPlayer();
        playGame();
      }
    }, 1000);
  }
}

playGame();
