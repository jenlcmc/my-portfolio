import { useState, useEffect } from "react";

// Static system info component (no real-time updates)
const SystemInfo = () => {
	return (
		<div className="system-info-simple">
			<div className="info-items">
				<div className="info-item">
					<span className="info-label">SYS:</span>
					<span className="info-value">PORTFOLIO-OS v2.5</span>
				</div>
				<div className="info-item">
					<span className="info-label">TIME:</span>
					<span className="info-value">ONLINE</span>
				</div>
				<div className="info-item">
					<span className="info-label">MEM:</span>
					<span className="info-value">67%</span>
				</div>
			</div>
		</div>
	);
};

// Terminal Bar
const TerminalBar = ({
	activeTab,
	onTabClick,
}: {
	activeTab: string;
	onTabClick: (tab: string) => void;
}) => {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsConnected(true), 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="terminal-bar-simple">
			<div className="window-controls-group">
				<span className="window-controls close"></span>
				<span className="window-controls minimize"></span>
				<span className="window-controls maximize"></span>
				<div className="connection-status">
					<div
						className={`status-indicator ${
							isConnected ? "connected" : "disconnected"
						}`}
					></div>
					<span className="status-text">
						{isConnected ? "SECURE" : "CONNECTING..."}
					</span>
				</div>
			</div>

			<div className="tabs-container">
				<div className="tabs">
					<div
						className={`tab ${activeTab === "User 1" ? "active" : ""}`}
						onClick={() => onTabClick("User 1")}
					>
						<span className="tab-icon">🏠</span>
						<span>~/home</span>
					</div>
					<div
						className={`tab ${activeTab === "User 2" ? "active" : ""}`}
						onClick={() => onTabClick("User 2")}
					>
						<span className="tab-icon">💭</span>
						<span>~/wisdom</span>
					</div>
					<div
						className={`tab ${activeTab === "User 3" ? "active" : ""}`}
						onClick={() => onTabClick("User 3")}
					>
						<span className="tab-icon">🎮</span>
						<span>~/games</span>
					</div>
				</div>
			</div>

			<SystemInfo />
		</div>
	);
};

// HUD Corner Elements (non-intrusive)
const HUDCorners = () => {
	return (
		<div className="hud-corners">
			<div className="hud-corner top-left"></div>
			<div className="hud-corner top-right"></div>
			<div className="hud-corner bottom-left"></div>
			<div className="hud-corner bottom-right"></div>
		</div>
	);
};

// Enhanced HUD Status Panels (positioned outside content area)
const HUDStatusPanels = () => {
	return (
		<>
			{/* Top HUD Bar */}
			<div className="hud-top-bar">
				<div className="hud-segment">
					<div className="hud-indicator-dot online"></div>
					<span className="hud-text">SYSTEM ONLINE</span>
				</div>
				<div className="hud-segment">
					<div className="hud-indicator-dot secure"></div>
					<span className="hud-text">SECURE CONNECTION</span>
				</div>
				<div className="hud-segment">
					<div className="hud-indicator-dot active"></div>
					<span className="hud-text">INTERACTIVE MODE</span>
				</div>
			</div>

			{/* Bottom HUD Bar */}
			<div className="hud-bottom-bar">
				<div className="hud-stats">
					<span className="hud-stat">
						<span className="hud-label">USER:</span>
						<span className="hud-value">GUEST</span>
					</span>
					<span className="hud-stat">
						<span className="hud-label">SESSION:</span>
						<span className="hud-value">ACTIVE</span>
					</span>
					<span className="hud-stat">
						<span className="hud-label">UPTIME:</span>
						<span className="hud-value">24:7</span>
					</span>
				</div>
				<div className="hud-activity">
					<div className="activity-bars">
						<div className="activity-bar" style={{ height: "4px" }}></div>
						<div className="activity-bar" style={{ height: "8px" }}></div>
						<div className="activity-bar" style={{ height: "6px" }}></div>
						<div
							className="activity-bar"
							style={{ height: "10px" }}
						></div>
						<div className="activity-bar" style={{ height: "5px" }}></div>
					</div>
				</div>
			</div>

			{/* Side HUD Elements */}
			<div className="hud-side-left">
				<div className="hud-scanner"></div>
			</div>
			<div className="hud-side-right">
				<div className="hud-scanner"></div>
			</div>
		</>
	);
};

// Main Terminal component
const Terminal = ({
	activeTab,
	onTabClick,
	children,
}: {
	activeTab: string;
	onTabClick: (tab: string) => void;
	children?: React.ReactNode;
}) => (
	<div className="terminal">
		<TerminalBar activeTab={activeTab} onTabClick={onTabClick} />
		<HUDCorners />
		<HUDStatusPanels />
		{children && <div className="content-container">{children}</div>}
	</div>
);

export default Terminal;
