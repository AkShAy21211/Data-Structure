// Simple Tic-Tac-Toe AI using Minimax
class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.human = 'X';
    this.ai = 'O';
  }

  // Check for winner
  checkWinner(board) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'tie';
  }

  // Minimax algorithm
  minimax(board, depth, isMaximizing) {
    const winner = this.checkWinner(board);
    if (winner === this.ai) return 10 - depth;
    if (winner === this.human) return depth - 10;
    if (winner === 'tie') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = this.ai;
          const score = this.minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (board[i] === null) {
          board[i] = this.human;
          const score = this.minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }

  // AI makes a move
  aiMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
      if (this.board[i] === null) {
        this.board[i] = this.ai;
        const score = this.minimax(this.board, 0, false);
        this.board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    this.board[move] = this.ai;
    return move;
  }

  // Print board
  printBoard() {
    for (let i = 0; i < 9; i += 3) {
      console.log(this.board.slice(i, i + 3).join(' | '));
      if (i < 6) console.log('---------');
    }
  }

  // Play a game
  play() {
    console.log("Let's play Tic-Tac-Toe! You are X, AI is O.");
    this.printBoard();
    while (!this.checkWinner(this.board)) {
      // Human move
      const readline = require('readline-sync');
      let move = readline.questionInt('Enter your move (0-8): ');
      if (this.board[move] !== null) {
        console.log('Invalid move!');
        continue;
      }
      this.board[move] = this.human;
      this.printBoard();
      if (this.checkWinner(this.board)) break;

      // AI move
      console.log('AI is thinking...');
      const aiMove = this.aiMove();
      console.log(`AI plays at position ${aiMove}`);
      this.printBoard();
    }
    const winner = this.checkWinner(this.board);
    if (winner === 'tie') console.log('It\'s a tie!');
    else console.log(`${winner} wins!`);
  }
}

// Start the game
const game = new TicTacToe();
game.play();