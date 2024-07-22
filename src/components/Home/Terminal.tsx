//import React from "react";

// Terminal component for the Home page
const TerminalBar = ({
	activeTab,
	onTabClick,
}: {
	// Define the type of the props
	activeTab: string;
	onTabClick: (tab: string) => void;
}) => (
	// Define the TerminalBar component
	<div className="terminal-bar">
		<span className="window-controls close"></span>
		<span className="window-controls minimize"></span>
		<span className="window-controls maximize"></span>
		<div className="tabs">
			<div
				className={`tab ${activeTab === "User 1" ? "active" : ""}`}
				onClick={() => onTabClick("User 1")}
			>
				Main
			</div>
			<div
				className={`tab ${activeTab === "User 2" ? "active" : ""}`}
				onClick={() => onTabClick("User 2")}
			>
				Quote
			</div>
			<div
				className={`tab ${activeTab === "User 3" ? "active" : ""}`}
				onClick={() => onTabClick("User 3")}
			>
				Tic Tac Toe
			</div>
		</div>
	</div>
);

interface CommandPromptProps {
	userType: string;
}

// CommandPrompt component for the Home page
const CommandPrompt = ({ userType }: CommandPromptProps) => {
	let command;
	if (userType === "user 1") {
		command = "$ cat Intro.txt";
	} else if (userType === "user 2") {
		command = "$ cat Quote.txt";
	} else if (userType === "user 3") {
		command = "$ chnod +x TicTacToe.sh && ./TicTacToe.sh";
	} else {
		command = "$"; // Default or unknown user type
	}

	return (
		<div className="command-prompt">
			<div className="command-text">user@hostname: ~/Welcome/To/My/Page</div>
			<div className="command-text">{command}</div>
		</div>
	);
};

// Terminal component for the Home page
const Terminal = ({
	activeTab,
	onTabClick,
}: {
	activeTab: string;
	onTabClick: (tab: string) => void;
}) => (
	<>
		<TerminalBar activeTab={activeTab} onTabClick={onTabClick} />
		<CommandPrompt userType={activeTab.toLowerCase()} />
	</>
);

export default Terminal;
