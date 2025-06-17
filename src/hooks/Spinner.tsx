//loading spinner
import "../index.css";

const Spinner = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-terminal-bg to-terminal-surface">
			<div className="relative">
				<div className="loader ease-linear rounded-full border-4 border-terminal-border border-t-terminal-accent h-16 w-16 mb-6"></div>
				<div
					className="absolute inset-0 rounded-full border-4 border-transparent border-t-terminal-purple h-16 w-16 animate-spin"
					style={{
						animationDirection: "reverse",
						animationDuration: "2s",
					}}
				></div>
			</div>
			<div className="text-terminal-text font-mono text-lg animate-pulse">
				Initializing Terminal...
			</div>
			<div className="mt-2 text-terminal-muted font-mono text-sm">
				Loading portfolio system
			</div>
		</div>
	);
};

export default Spinner;
