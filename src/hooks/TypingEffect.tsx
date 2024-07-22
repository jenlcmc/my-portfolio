import { useState, useEffect } from "react";

// Custom hook to handle typing effect for both greetings and quotes
export const useTypingEffect = (texts: string[]) => {
	const [text, setText] = useState("");
	const [displayText, setDisplayText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	const selectRandomText = () => {
		const randomIndex = Math.floor(Math.random() * texts.length);
		setText(texts[randomIndex]);
	};

	useEffect(() => {
		selectRandomText();
	}, [texts]);

	useEffect(() => {
		let typingTimeout: number | undefined;

		if (isTyping) {
			if (displayText.length < text.length) {
				typingTimeout = setTimeout(() => {
					setDisplayText(text.substring(0, displayText.length + 1));
				}, 100);
			} else {
				typingTimeout = setTimeout(() => setIsTyping(false), 15000);
			}
		} else {
			if (displayText.length > 0) {
				typingTimeout = setTimeout(() => {
					setDisplayText(text.substring(0, displayText.length - 1));
				}, 100);
			} else {
				selectRandomText();
				setIsTyping(true);
			}
		}

		return () => clearTimeout(typingTimeout);
	}, [displayText, isTyping, text]);

	return displayText;
};
