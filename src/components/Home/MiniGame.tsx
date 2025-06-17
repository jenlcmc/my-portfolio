import { useState } from "react";
import Hangman from "./HangMan";
import TicTacToe from "./TicTacToe";
import "../Home/Home.css";

const Game = () => {
	const [game, setGame] = useState<string | null>(null);

	const handleGameClick = (gameName: string) => {
		setGame(gameName);
	};

	const handleReturnClick = () => {
		setGame(null);
	};

	const renderGame = () => {
		switch (game) {
			case "Hangman":
				return (
					<div className="w-full max-w-6xl">
						<Hangman onReturnToSelection={handleReturnClick} />
					</div>
				);
			case "TicTacToe":
				return (
					<div className="w-full max-w-4xl">
						<TicTacToe />
						<div className="button-container mt-2">
							<button
								className="retro-button"
								onClick={handleReturnClick}
							>
								Return to Game Selection
							</button>
						</div>
					</div>
				);
			default:
				return (
					<div className="flex flex-col justify-center items-center w-full max-w-4xl space-y-compact">
						<h1 className="text-xl md:text-2xl text-center holo-text font-bold">
							Select a game to play
						</h1>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								className="retro-button text-base px-6 py-3"
								onClick={() => handleGameClick("Hangman")}
							>
								🎯 Hangman
							</button>
							<button
								className="retro-button text-base px-6 py-3"
								onClick={() => handleGameClick("TicTacToe")}
							>
								⭕ Tic Tac Toe
							</button>
						</div>
					</div>
				);
		}
	};

	return (
		<div className="w-full h-full flex justify-center items-center">
			{renderGame()}
		</div>
	);
};

export default Game;
