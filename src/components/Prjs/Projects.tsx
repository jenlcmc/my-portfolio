import { useState } from "react";
import ProjectData from "./ProjectData";
import "./Prj.css";

const Project = () => {
	const [selectedRepo, setSelectedRepo] = useState<number | null>(null);

	// Calculate project stats
	const totalProjects = ProjectData.length;
	const languages = new Set<string>();
	const frameworks = new Set<string>();

	ProjectData.forEach((project) => {
		project.techStack.forEach((tech) => {
			// Categorize technologies
			const langKeywords = [
				"Python",
				"JavaScript",
				"TypeScript",
				"C++",
				"C",
				"Java",
				"Go",
				"Assembly",
				"R",
			];
			const frameworkKeywords = [
				"React",
				"Node.js",
				"Express",
				"Angular",
				"Vue",
				"Django",
				"Flask",
			];

			if (langKeywords.some((lang) => tech.includes(lang))) {
				languages.add(tech);
			} else if (frameworkKeywords.some((fw) => tech.includes(fw))) {
				frameworks.add(tech);
			}
		});
	});

	return (
		<div className="space-y-6">
			{/* Repository Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="bg-gray-900/50 border border-terminal-accent/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-terminal-accent">
						{totalProjects}
					</div>
					<div className="text-sm text-gray-400 font-mono">
						Repositories
					</div>
				</div>
				<div className="bg-gray-900/50 border border-green-400/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-green-400">
						{languages.size}+
					</div>
					<div className="text-sm text-gray-400 font-mono">Languages</div>
				</div>
				<div className="bg-gray-900/50 border border-blue-400/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-blue-400">
						{frameworks.size}+
					</div>
					<div className="text-sm text-gray-400 font-mono">Frameworks</div>
				</div>
				<div className="bg-gray-900/50 border border-purple-400/20 rounded-lg p-4 text-center">
					<div className="text-2xl font-bold text-purple-400">100%</div>
					<div className="text-sm text-gray-400 font-mono">
						Open Source
					</div>
				</div>
			</div>

			{/* Project Repository Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{ProjectData.map((project, index) => (
					<div
						key={index}
						className="group bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-lg p-6 hover:border-terminal-accent/50 transition-all duration-300 cursor-pointer"
						onClick={() =>
							setSelectedRepo(selectedRepo === index ? null : index)
						}
					>
						{/* Repository Header */}
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-terminal-accent"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
										clipRule="evenodd"
									/>
								</svg>
								<h3 className="text-white font-mono font-semibold text-lg group-hover:text-terminal-accent transition-colors">
									{project.title}
								</h3>
							</div>
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

						{/* Project Description */}
						<p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
							{project.description}
						</p>

						{/* Technology Tags */}
						<div className="flex flex-wrap gap-2 mb-4">
							{project.techStack.slice(0, 4).map((tech, techIndex) => (
								<span
									key={techIndex}
									className="px-2 py-1 bg-terminal-accent/20 text-terminal-accent text-xs rounded font-mono hover:bg-terminal-accent/30 transition-colors"
								>
									{tech}
								</span>
							))}
							{project.techStack.length > 4 && (
								<span className="text-gray-500 text-xs font-mono">
									+{project.techStack.length - 4} more
								</span>
							)}
						</div>

						{/* Repository Actions */}
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-4 text-xs text-gray-500 font-mono">
								<span className="flex items-center space-x-1">
									<div className="w-2 h-2 rounded-full bg-terminal-accent"></div>
									<span>Active</span>
								</span>
								<span>Public</span>
							</div>
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-1 text-terminal-accent hover:text-white transition-colors text-sm font-mono"
								onClick={(e) => e.stopPropagation()}
							>
								<span>View Code</span>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>

						{/* Expanded Details */}
						{selectedRepo === index && (
							<div className="mt-6 pt-6 border-t border-gray-700/50">
								<div className="space-y-4">
									<div>
										<h4 className="text-terminal-accent font-mono text-sm mb-2">
											Repository Details:
										</h4>
										<p className="text-gray-300 text-sm leading-relaxed">
											{project.description}
										</p>
									</div>

									<div>
										<h4 className="text-terminal-accent font-mono text-sm mb-2">
											Tech Stack:
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.techStack.map((tech, techIndex) => (
												<span
													key={techIndex}
													className="px-3 py-1 bg-terminal-accent/20 text-terminal-accent text-sm rounded-full font-mono hover:bg-terminal-accent/30 transition-colors"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 bg-terminal-accent/20 text-terminal-accent px-4 py-2 rounded-lg hover:bg-terminal-accent/30 transition-colors font-mono text-sm"
										>
											<svg
												className="w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>GitHub Repository</span>
										</a>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
