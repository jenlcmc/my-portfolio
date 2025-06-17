import { useState } from "react";
import CowSay from "../components/Home/Cowsay";
import "../components/Home/Home.css";
import Terminal from "../components/Home/Terminal";
import { greetings, quotes } from "../components/Home/Data";
import { useTypingEffect } from "../hooks/TypingEffect";
import Game from "../components/Home/MiniGame";

const Home = () => {
	// State to track the active tab
	const [activeTab, setActiveTab] = useState<string>("User 1");

	// Event handler to change the active tab
	const handleTabClick = (tabName: string) => {
		setActiveTab(tabName);
	};

	// Adjusted calls to useTypingEffect with new parameters for customization
	// Example: typing speed = 100ms, erase speed = 50ms, delay before erase = 1500ms, loop = true
	const displayGreeting = useTypingEffect(greetings, 50, 50, 15000, true);
	const displayQuote = useTypingEffect(quotes, 50, 50, 15000, true);

	// Function to render content based on the active tab
	const renderContent = () => {
		switch (activeTab) {
			case "User 1":
				return (
					<div className="flex flex-col justify-center items-center content-container">
						<h1 className="greeting-border text-lg md:text-xl lg:text-2xl leading-relaxed">
							{displayGreeting}
						</h1>
						<CowSay />
						<p className="text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-4xl mt-8 text-terminal-text">
							Welcome to my page, fellow adventurer! Step into a realm
							where code meets creativity. Check out my latest projects
							and let's level up together!
						</p>
					</div>
				);
			case "User 2":
				return (
					<div className="flex flex-col justify-center items-center content-container p-8">
						<h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-8 text-terminal-accent font-semibold">
							Random Quote from Video Games that I love
						</h1>
						<div className="quote-border max-w-4xl">
							<h1 className="text-lg md:text-xl lg:text-2xl leading-relaxed">
								{displayQuote}
							</h1>
						</div>
					</div>
				);
			case "User 3":
				return (
					<div className="w-full h-full flex justify-center items-start pt-8">
						<Game />
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div
			id="home"
			className={`terminal ${activeTab === "User 3" ? "game-active" : ""}`}
		>
			<Terminal activeTab={activeTab} onTabClick={handleTabClick} />
			<div className="content-container">{renderContent()}</div>
		</div>
	);
};

export default Home;
