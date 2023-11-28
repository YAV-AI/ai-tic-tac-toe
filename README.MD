# Tic Tac Toe Game

This is a command-line Tic Tac Toe game with a computer opponent that uses the minimax algorithm for strategic
moves.

```
O | X | X
---------
O | O | O
---------
X |   | X



Sorry, You Lose!
 ________
< Loser! >
 --------
        \   ^__^
         \  (xx)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

## Game Features

- Play against a computer opponent.
- The computer uses the minimax algorithm to make optimal moves.
- Simple text-based animation for win, lose, and draw scenarios.

## Install the game

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

   ```bash
   cd <repository-folder>
   ```

3. Install Dependencies:

   ```bash
   yarn
   ```

   or

   ```bash
   npm install
   ```

## How to play

1. Start the game:

   ```bash
   yarn play
   ```

   or

   ```bash
   npm run play
   ```

   or

   ```
   node index.mjs
   ```

### User Input

You will play as "X," and the computer will play as "O." The game board is a 3x3 grid.

To make a move, enter your desired row (0-2) and column (0-2) separated by a space. For example, to place your "X" in the top-right corner, you can enter "0 2."

The computer will respond with its move, and the game will continue until one player wins, or it's a draw.

The game will display a text-based animation for win, lose, or draw scenarios.

Make the first move

```
  |   |
---------
  |   |
---------
  |   |


Player X, enter row (0-2) and column (0-2) separated by a space:
```

### Input position reference

Each cell is labeled with its corresponding row and column position.

```
  0 0 | 0 1 | 0 2
-------------------
  1 0 | 1 1 | 1 2
-------------------
  2 0 | 2 1 | 2 2
```

## License

This project is licensed under the MIT License
