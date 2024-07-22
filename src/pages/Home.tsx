import { useState } from "react";
import CowSay from "../components/Home/Cowsay";
import "../components/Home/Home.css";
import Terminal from "../components/Home/Terminal";
import { greetings, quotes } from "../components/Home/Data";
import { useTypingEffect } from "../hooks/TypingEffect";
import TicTacToe from "../components/Home/MiniGame";

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
					<div className="flex flex-col justify-center items-center text-1xl">
						<h1 className="greeting-border">{displayGreeting}</h1>
						<CowSay />
						<p
							style={{
								fontSize: "35px",
								justifyContent: "center",
								justifyItems: "center",
							}}
						>
							Welcome to my page, fellow adventurer! Step into a realm
							where code meets creativity. Check out my latest projects
							and let's level up together!
						</p>
					</div>
				);
			case "User 2":
				return (
					<div className="flex flex-col justify-center items-center text-2xl m-28">
						<h1
							style={{
								fontSize: "35px",
								justifyContent: "center",
								justifyItems: "center",
							}}
						>
							Random Quote from Video Games that I love
						</h1>
						<div className="quote-border">
							<h1 style={{ fontSize: "30px" }}>{displayQuote}</h1>
						</div>
					</div>
				);
			case "User 3":
				return (
					<div className="flex flex-col justify-center items-center text-2xl m-4">
						<TicTacToe />
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div id="home" className="terminal">
			<Terminal activeTab={activeTab} onTabClick={handleTabClick} />
			<div className="content-container">{renderContent()}</div>
		</div>
	);
};

export default Home;
