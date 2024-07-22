import { useState, useEffect } from "react";

// Custom hook to handle typing effect with additional features
export const useTypingEffect = (
	texts: string[],
	typingSpeed: number = 100,
	eraseSpeed: number = 100,
	delayBeforeErase: number = 1500,
	loop: boolean = true
) => {
	const [text, setText] = useState("");
	const [displayText, setDisplayText] = useState("");
	const [isTyping, setIsTyping] = useState(true);
	const [cursorVisible, setCursorVisible] = useState(true);

	// Function to select a random text from the provided array
	const selectRandomText = () => {
		const randomIndex = Math.floor(Math.random() * texts.length);
		setText(texts[randomIndex]);
	};

	// Select a random text when the component mounts
	useEffect(() => {
		selectRandomText();
	}, [texts]);

	// Effect to handle typing and erasing text
	useEffect(() => {
		let typingTimeout: number | undefined;
		let cursorBlinkInterval: number | undefined;

		// Check if the text is still being typed or erased
		if (isTyping) {
			if (displayText.length < text.length) {
				// Check if the text is still being typed
				typingTimeout = setTimeout(() => {
					// Set a timeout to type the next character
					setDisplayText(text.substring(0, displayText.length + 1));
				}, typingSpeed);
			} else {
				// Check if the text is still being erased
				typingTimeout = setTimeout(
					// Set a timeout to erase the last character
					() => setIsTyping(false),
					delayBeforeErase
				);
			}
		} else {
			// Check if the text is still being erased
			if (displayText.length > 0) {
				// Set a timeout to erase the last character
				typingTimeout = setTimeout(() => {
					setDisplayText(text.substring(0, displayText.length - 1));
				}, eraseSpeed);
			} else {
				// Check if the text should loop
				if (loop) {
					selectRandomText();
					setIsTyping(true);
				}
			}
		}

		// Set an interval to blink the cursor
		cursorBlinkInterval = setInterval(() => {
			setCursorVisible((visible) => !visible);
		}, 800);

		// Clear the timeouts and intervals when the component unmounts
		return () => {
			clearTimeout(typingTimeout);
			clearInterval(cursorBlinkInterval);
		};
	}, [
		displayText,
		isTyping,
		text,
		typingSpeed,
		eraseSpeed,
		delayBeforeErase,
		loop,
	]);

	return `${displayText}${cursorVisible ? "|" : ""}`;
};
