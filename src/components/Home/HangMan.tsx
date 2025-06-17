import { useState } from "react";
import "../Home/Home.css";

interface HangmanProps {
	word?: string;
	guessedLetters?: string[];
	onGuess?: (letter: string) => void;
	disabled?: boolean;
	wrongGuesses?: number;
}

const words = [
	"react",
	"typescript",
	"hangman",
	"programming",
	"javascript",
	"developer",
	"software",
	"engineering",
	"computer",
	"science",
	"technology",
	"web",
	"application",
	"development",
	"GitHub",
	"Gaming",
];

const Word = ({ word = "", guessedLetters = [] }: HangmanProps) => (
	<div className="word">
		{word.split("").map((letter, index) => (
			<span key={index} className="letter">
				{guessedLetters.includes(letter) ? letter : "_"}
			</span>
		))}
	</div>
);

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = ({ onGuess = () => {}, disabled = false }: HangmanProps) => (
	<div className="keyboard">
		{letters.map((letter) => (
			<button
				key={letter}
				onClick={() => onGuess(letter)}
				disabled={disabled}
				className="letter-button"
			>
				{letter}
			</button>
		))}
	</div>
);

const HangmanFigure = ({ wrongGuesses = 0 }: HangmanProps) => {
	const parts = [
		<circle
			key="head"
			cx="160"
			cy="100"
			r="20"
			stroke="#00d9ff"
			strokeWidth="3"
			fill="none"
		/>,
		<line
			key="body"
			x1="160"
			y1="120"
			x2="160"
			y2="180"
			stroke="#00d9ff"
			strokeWidth="3"
		/>,
		<line
			key="left-arm"
			x1="160"
			y1="150"
			x2="130"
			y2="130"
			stroke="#00d9ff"
			strokeWidth="3"
		/>,
		<line
			key="right-arm"
			x1="160"
			y1="150"
			x2="190"
			y2="130"
			stroke="#00d9ff"
			strokeWidth="3"
		/>,
		<line
			key="left-leg"
			x1="160"
			y1="180"
			x2="140"
			y2="210"
			stroke="#00d9ff"
			strokeWidth="3"
		/>,
		<line
			key="right-leg"
			x1="160"
			y1="180"
			x2="180"
			y2="210"
			stroke="#00d9ff"
			strokeWidth="3"
		/>,
	];

	return (
		<div className="hangman-figure">
			<svg
				height="300"
				width="240"
				className="figure-container"
				viewBox="0 0 240 300"
				preserveAspectRatio="xMidYMid meet"
			>
				{/* Gallows */}
				<line
					x1="80"
					y1="50"
					x2="160"
					y2="50"
					stroke="#00d9ff"
					strokeWidth="3"
				/>
				<line
					x1="160"
					y1="50"
					x2="160"
					y2="80"
					stroke="#00d9ff"
					strokeWidth="3"
				/>
				<line
					x1="80"
					y1="50"
					x2="80"
					y2="260"
					stroke="#00d9ff"
					strokeWidth="3"
				/>
				<line
					x1="40"
					y1="260"
					x2="120"
					y2="260"
					stroke="#00d9ff"
					strokeWidth="3"
				/>
				{/* Body parts based on wrong guesses */}
				{parts.slice(0, wrongGuesses)}
			</svg>
		</div>
	);
};

const Hangman = ({
	onReturnToSelection,
}: {
	onReturnToSelection?: () => void;
}) => {
	const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

	const [word, setWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const [wrongGuesses, setWrongGuesses] = useState<number>(0);

	const handleGuess = (letter: string) => {
		if (guessedLetters.includes(letter)) return;

		setGuessedLetters([...guessedLetters, letter]);

		if (!word.includes(letter)) {
			setWrongGuesses(wrongGuesses + 1);
		}
	};

	const resetGame = () => {
		setWord(getRandomWord());
		setGuessedLetters([]);
		setWrongGuesses(0);
	};

	const isGameOver = wrongGuesses >= 6;
	const isGameWon = word
		.split("")
		.every((letter) => guessedLetters.includes(letter));
	const wrongLetters = guessedLetters.filter(
		(letter) => !word.includes(letter)
	);

	return (
		<div className="hangman">
			<h1>Hangman Game</h1>
			<HangmanFigure wrongGuesses={wrongGuesses} />
			<Word word={word} guessedLetters={guessedLetters} />
			<Keyboard onGuess={handleGuess} disabled={isGameOver || isGameWon} />

			<p>Wrong guesses: {wrongLetters.join(", ")}</p>

			{isGameOver && <p>You lost! The word was {word}</p>}
			{isGameWon && <p>Congratulations! You won!</p>}
			<div className="button-container">
				<button className="retro-button" onClick={resetGame}>
					Reset Game
				</button>
				{onReturnToSelection && (
					<button className="retro-button" onClick={onReturnToSelection}>
						Return to Game Selection
					</button>
				)}
			</div>
		</div>
	);
};

export default Hangman;
