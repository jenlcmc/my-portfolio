import { useState } from "react";

// A Square component that displays a button
function Square({ value, onClick }: { value: string; onClick: () => void }) {
	return (
		<button className="square" onClick={onClick}>
			{value}
		</button>
	);
}

// The main Game component that holds the state and logic
function Game() {
	// State to keep track of each square's value ('X', 'O', or null)
	const [squares, setSquares] = useState(Array(9).fill(null));
	// State to determine which player's turn it is
	const [isXNext, setIsXNext] = useState(true);

	// Function to handle a square click
	const handleClick = (index: number) => {
		// If the game is won or the square is already filled, return early
		if (calculateWinner(squares) || squares[index]) {
			return;
		}
		// Otherwise, update the square
		const newSquares = squares.slice();
		newSquares[index] = isXNext ? "X" : "O";
		setSquares(newSquares);
		setIsXNext(!isXNext); // Switch turns
	};

	// Function to render a Square component
	const renderSquare = (index: number) => {
		return (
			<Square value={squares[index]} onClick={() => handleClick(index)} />
		);
	};

	// Calculate the winner
	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${isXNext ? "X" : "O"}`;

	// The render method returns the UI for the game
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
		</div>
	);
}

// Helper function to calculate the winner
function calculateWinner(squares: any[]) {
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

export default Game;
