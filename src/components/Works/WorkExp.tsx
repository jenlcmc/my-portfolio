import { useState } from "react";
import { workExperienceData } from "./WorkData";

function WorkExperience() {
	const [selectedWork, setSelectedWork] = useState<number>(0);
	const [showDetails, setShowDetails] = useState<boolean>(false);

	// Calculate career stats - simplified approach
	const totalYears = 4; // From 2021 (AT&T) to 2025 (current positions)

	const techStack = new Set<string>();
	workExperienceData.forEach((work) => {
		work.techStack?.forEach((tech) => techStack.add(tech));
	});

	return (
		<div className="space-y-6">
			{/* Terminal Header */}
			<div className="bg-gray-900 rounded-lg border border-terminal-accent/30 p-4">
				<div className="flex items-center space-x-2 mb-4">
					<div className="flex space-x-2">
						<div className="w-3 h-3 rounded-full bg-red-500"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
						<div className="w-3 h-3 rounded-full bg-green-500"></div>
					</div>
					<span className="text-terminal-accent font-mono text-sm">
						career-log.sh
					</span>
				</div>

				<div className="font-mono text-sm space-y-2">
					<div className="text-terminal-accent">
						$ git log --oneline --graph career
					</div>
					<div className="text-gray-400">
						<span className="text-green-400">*</span> Displaying
						professional journey timeline...
					</div>
				</div>
			</div>

			{/* Career Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="bg-gray-900/50 border border-terminal-accent/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-terminal-accent">
						{totalYears}+
					</div>
					<div className="text-sm text-gray-400 font-mono">
						Years Experience
					</div>
				</div>
				<div className="bg-gray-900/50 border border-terminal-accent/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-terminal-accent">
						{workExperienceData.length}
					</div>
					<div className="text-sm text-gray-400 font-mono">Positions</div>
				</div>
				<div className="bg-gray-900/50 border border-terminal-accent/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-terminal-accent">
						{new Set(workExperienceData.map((w) => w.companyName)).size}
					</div>
					<div className="text-sm text-gray-400 font-mono">Companies</div>
				</div>
				<div className="bg-gray-900/50 border border-terminal-accent/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-terminal-accent">
						{techStack.size}+
					</div>
					<div className="text-sm text-gray-400 font-mono">
						Technologies
					</div>
				</div>
			</div>

			{/* Career Timeline as Git Commits */}
			<div className="bg-gray-900/30 backdrop-blur-sm border border-terminal-accent/20 rounded-lg p-6">
				<div className="flex items-center space-x-2 mb-6">
					<div className="text-terminal-accent font-mono">├── career/</div>
				</div>

				<div className="space-y-4">
					{workExperienceData.map((work, index) => (
						<div key={index} className="group">
							<div
								className={`flex items-start space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${
									selectedWork === index
										? "bg-terminal-accent/10 border-terminal-accent/50"
										: "bg-gray-900/30 border-gray-700/30 hover:border-terminal-accent/30"
								}`}
								onClick={() => {
									setSelectedWork(index);
									setShowDetails(true);
								}}
							>
								{/* Git Graph */}
								<div className="flex flex-col items-center">
									<div className="w-3 h-3 rounded-full bg-terminal-accent border-2 border-gray-900"></div>
									{index < workExperienceData.length - 1 && (
										<div className="w-0.5 h-12 bg-terminal-accent/30 mt-2"></div>
									)}
								</div>

								{/* Commit Info */}
								<div className="flex-1 min-w-0">
									<div className="flex items-center space-x-3 mb-2">
										<span className="text-yellow-400 font-mono text-sm">
											feat:
										</span>
										<span className="text-white font-semibold">
											{work.jobTitle}
										</span>
										<span className="text-terminal-accent">
											@{work.companyName}
										</span>
									</div>

									<div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
										<span className="font-mono">
											{work.yearsWorked}
										</span>
										<span className="flex items-center space-x-1">
											<span className="w-2 h-2 rounded-full bg-green-400"></span>
											<span>Active contribution</span>
										</span>
									</div>

									{work.techStack && (
										<div className="flex flex-wrap gap-2">
											{work.techStack
												.slice(0, 4)
												.map((tech, techIndex) => (
													<span
														key={techIndex}
														className="px-2 py-1 bg-terminal-accent/20 text-terminal-accent text-xs rounded font-mono"
													>
														{tech}
													</span>
												))}
											{work.techStack.length > 4 && (
												<span className="text-gray-500 text-xs">
													+{work.techStack.length - 4} more
												</span>
											)}
										</div>
									)}
								</div>

								{/* Expand Icon */}
								<div className="text-gray-500 group-hover:text-terminal-accent transition-colors">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>

							{/* Detailed View */}
							{showDetails && selectedWork === index && (
								<div className="mt-4 p-6 bg-gray-900/50 rounded-lg border border-terminal-accent/30 ml-8">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center space-x-2">
											<span className="text-terminal-accent font-mono">
												└──
											</span>
											<span className="text-white font-semibold">
												Position Details
											</span>
										</div>
										<button
											onClick={(e) => {
												e.stopPropagation();
												setShowDetails(false);
											}}
											className="text-gray-500 hover:text-red-400 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>

									<div className="space-y-4">
										<div className="space-y-2">
											{work.jobDescription.map((desc, descIndex) => (
												<div
													key={descIndex}
													className="flex items-start space-x-2"
												>
													<span className="text-terminal-accent font-mono text-sm mt-1">
														▸
													</span>
													<span className="text-gray-300 text-sm leading-relaxed">
														{desc}
													</span>
												</div>
											))}
										</div>

										{work.techStack && (
											<div>
												<div className="text-terminal-accent font-mono text-sm mb-2">
													Tech Stack:
												</div>
												<div className="flex flex-wrap gap-2">
													{work.techStack.map(
														(tech, techIndex) => (
															<span
																key={techIndex}
																className="px-3 py-1 bg-terminal-accent/20 text-terminal-accent text-sm rounded-full font-mono hover:bg-terminal-accent/30 transition-colors"
															>
																{tech}
															</span>
														)
													)}
												</div>
											</div>
										)}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WorkExperience;
