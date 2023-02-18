const express = require('express');
const app = express();
const port = 5000;

const game = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  moves: [],
};

function calculateWinner(squares) {
  const lines = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

app.get('/api/game', (req, res) => {
  res.json(game);
});

app.post('/api/game/restart', (req, res) => {
  game.squares = Array(9).fill(null);
  game.xIsNext = true;
  game.winner = null;
  game.moves = [];
  res.json(game);
});

app.post('/api/game/move/:i', (req, res) => {
  const i = parseInt(req.params.i);
  const { squares, xIsNext, winner, moves } = game;
  if (winner || squares[i]) {
    res.status(400).send('Invalid move');
    return;
  }

  const newSquares = squares.slice();
  newSquares[i] = xIsNext ? 'X' : 'O';
  const newWinner = calculateWinner(newSquares);

  const newMoves = moves.concat([{ player: xIsNext ? 'X' : 'O', square: i }]);

  const newGame = {
    squares: newSquares,
    xIsNext: !xIsNext,
    winner: newWinner,
    moves: newMoves,
  };

  game.squares = newSquares;
  game.xIsNext = !xIsNext;
  game.winner = newWinner;
  game.moves = newMoves;

  res.json(newGame);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
