import { useState } from "react";
import CowSay from "../components/Home/Cowsay";
import "../components/Home/Home.css";
import Terminal from "../components/Home/Terminal";
import { greetings, quotes } from "../components/Home/Data";
import { useTypingEffect } from "../hooks/TypingEffect";

const Home = () => {
	// State to track the active tab
	const [activeTab, setActiveTab] = useState<string>("User 1");

	// Event handler to change the active tab
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	const displayGreeting = useTypingEffect(greetings);
	const displayQuote = useTypingEffect(quotes);

	return (
		<div id="home" className="terminal">
			<Terminal activeTab={activeTab} onTabClick={handleTabClick} />
			<div className="flex flex-col justify-center items-center text-1xl">
				<h1 className="greeting-border">{displayGreeting}</h1>
				<CowSay />
				<p>
					I'm a recent Computer Science graduate skilled in C++, Python,
					JavaScript, and TypeScript. Whether debugging code or designing a
					new feature, I approach each challenge with the same
					determination and strategic thinking you'd find in a well-planned
					mission. Explore my projects and see what I've been working on.
				</p>
				<div className="quote-border">
					<h1>{displayQuote}</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
