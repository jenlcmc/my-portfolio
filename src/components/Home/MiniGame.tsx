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
					<div>
						<Hangman />
						<div className="button-container">
							<button
								className="retro-button m-4"
								onClick={handleReturnClick}
							>
								Return to Game Selection
							</button>
						</div>
					</div>
				);
			case "TicTacToe":
				return (
					<div>
						<TicTacToe />
						<div className="button-container">
							<button
								className="retro-button m-4"
								onClick={handleReturnClick}
							>
								Return to Game Selection
							</button>
						</div>
					</div>
				);
			default:
				return (
					<div className="flex flex-col justify-center items-center text-2xl m-28 content-container">
						<h1
							style={{
								fontSize: "35px",
								justifyContent: "center",
								justifyItems: "center",
							}}
						>
							Select a game to play
						</h1>
						<div className="justify-center mr-4">
							<button
								className="retro-button m-4"
								onClick={() => handleGameClick("Hangman")}
							>
								Hangman
							</button>
							<button
								className="retro-button ml-4"
								onClick={() => handleGameClick("TicTacToe")}
							>
								Tic Tac Toe
							</button>
						</div>
					</div>
				);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center text-2xl m-4 content-container">
			{renderGame()}
		</div>
	);
};

export default Game;
