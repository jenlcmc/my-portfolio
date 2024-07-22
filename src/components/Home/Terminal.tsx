//import React from "react";

const TerminalBar = ({
	activeTab,
	onTabClick,
}: {
	activeTab: string;
	onTabClick: (tab: string) => void;
}) => (
	<div className="terminal-bar">
		<span className="window-controls close"></span>
		<span className="window-controls minimize"></span>
		<span className="window-controls maximize"></span>
		<div className="tabs">
			<div
				className={`tab ${activeTab === "User 1" ? "active" : ""}`}
				onClick={() => onTabClick("User 1")}
			>
				User 1
			</div>
		</div>
	</div>
);

const CommandPrompt = () => (
	<div className="command-prompt">
		<div className="command-text">user@hostname: ~/Welcome/To/My/Page</div>
		<div className="command-text">$ cat about_me.txt</div>
	</div>
);

const Terminal = ({
	activeTab,
	onTabClick,
}: {
	activeTab: string;
	onTabClick: (tab: string) => void;
}) => (
	<>
		<TerminalBar activeTab={activeTab} onTabClick={onTabClick} />
		<CommandPrompt />
	</>
);

export default Terminal;
