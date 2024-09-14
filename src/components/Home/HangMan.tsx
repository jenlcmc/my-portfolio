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
		<circle key="head" cx="140" cy="70" r="20" className="figure-part" />,
		<line
			key="body"
			x1="140"
			y1="90"
			x2="140"
			y2="150"
			className="figure-part"
		/>,
		<line
			key="left-arm"
			x1="140"
			y1="120"
			x2="110"
			y2="100"
			className="figure-part"
		/>,
		<line
			key="right-arm"
			x1="140"
			y1="120"
			x2="170"
			y2="100"
			className="figure-part"
		/>,
		<line
			key="left-leg"
			x1="140"
			y1="150"
			x2="120"
			y2="180"
			className="figure-part"
		/>,
		<line
			key="right-leg"
			x1="140"
			y1="150"
			x2="160"
			y2="180"
			className="figure-part"
		/>,
	];

	return (
		<div className="hangman">
			<svg height="250" width="200" className="figure-container">
				<line x1="60" y1="20" x2="140" y2="20" className="figure-part" />
				<line x1="140" y1="20" x2="140" y2="50" className="figure-part" />
				<line x1="60" y1="20" x2="60" y2="230" className="figure-part" />
				<line x1="20" y1="230" x2="100" y2="230" className="figure-part" />
				{parts.slice(0, wrongGuesses)}
			</svg>
		</div>
	);
};

const Hangman = () => {
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
			</div>
		</div>
	);
};

export default Hangman;
