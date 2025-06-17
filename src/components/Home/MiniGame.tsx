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
						<div className="button-container mt-4">
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
					<div className="flex flex-col justify-center items-center w-full max-w-4xl space-y-8">
						<h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-terminal-accent font-bold">
							Select a game to play
						</h1>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<button
								className="retro-button text-lg px-8 py-4"
								onClick={() => handleGameClick("Hangman")}
							>
								🎯 Hangman
							</button>
							<button
								className="retro-button text-lg px-8 py-4"
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
