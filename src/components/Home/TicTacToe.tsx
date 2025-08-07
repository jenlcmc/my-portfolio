import React, { useState, useEffect, useCallback } from 'react';

// Define types for the square values and the square props
type SquareValue = 'X' | 'O' | null;
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const TicTacToe = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const makeCpuMove = useCallback(() => {
    const emptySquares = squares
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null) as number[];

    if (emptySquares.length === 0) {
      return;
    }

    // Check if CPU can win
    for (let i = 0; i < emptySquares.length; i++) {
      const squaresCopy = squares.slice();
      squaresCopy[emptySquares[i]] = 'O';
      if (calculateWinner(squaresCopy) === 'O') {
        setSquares(squaresCopy);
        setIsXNext(true);
        return;
      }
    }

    // Check if CPU needs to block player
    for (let i = 0; i < emptySquares.length; i++) {
      const squaresCopy = squares.slice();
      squaresCopy[emptySquares[i]] = 'X';
      if (calculateWinner(squaresCopy) === 'X') {
        squaresCopy[emptySquares[i]] = 'O';
        setSquares(squaresCopy);
        setIsXNext(true);
        return;
      }
    }

    // Make a random move
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const squaresCopy = squares.slice();
    squaresCopy[emptySquares[randomIndex]] = 'O';
    setSquares(squaresCopy);
    setIsXNext(true);
  }, [squares]);

  useEffect(() => {
    if (!isXNext) {
      const timer = setTimeout(() => {
        makeCpuMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [makeCpuMove, isXNext]);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const squaresCopy = squares.slice();
    squaresCopy[i] = 'X';
    setSquares(squaresCopy);
    setIsXNext(false);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const winner = calculateWinner(squares);
  const isDraw = squares.every((square) => square !== null) && !winner;
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Draw Sadge'
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <div>{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="button-container mt-5 -mb-5">
        <button className="retro-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
