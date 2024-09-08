import { useState } from "react";

// Define types for the square values and the square props
type SquareValue = "X" | "O" | null;
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
		[0, 1, 2],
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
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

const Game = () => {
	const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState<boolean>(true);

	const handleClick = (i: number) => {
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		const squaresCopy = squares.slice();
		squaresCopy[i] = isXNext ? "X" : "O";
		setSquares(squaresCopy);
		setIsXNext(!isXNext);
	};

	const resetGame = () => {
		setSquares(Array(9).fill(null));
		setIsXNext(true);
	};

	const renderSquare = (i: number) => (
		<Square value={squares[i]} onClick={() => handleClick(i)} />
	);

	const winner = calculateWinner(squares);
	const isDraw = squares.every((square) => square !== null) && !winner;
	const status = winner
		? `Winner: ${winner}`
		: isDraw
		? "Draw Sadge"
		: `Next player: ${isXNext ? "X" : "O"}`;

	return (
		<div>
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
			<button onClick={resetGame}>Reset Game</button>
		</div>
	);
};

export default Game;
