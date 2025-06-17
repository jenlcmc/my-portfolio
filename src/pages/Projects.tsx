import Project from "../components/Prjs/Projects";
import SectionWrapper from "../components/SectionWrapper";

const Projects = () => {
	return (
		<SectionWrapper
			id="projects"
			title="Project Repository"
			subtitle="$ git clone --recursive projects/*"
		>
			{/* Terminal Header */}
			<div className="mb-8">
				<div className="bg-gray-900/50 backdrop-blur-sm border border-terminal-accent/30 rounded-lg p-6">
					<div className="flex items-center space-x-2 mb-4">
						<div className="flex space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<span className="text-terminal-accent font-mono text-sm">
							github-repos.sh
						</span>
					</div>

					<div className="space-y-3">
						<div className="flex items-center space-x-2">
							<span className="text-terminal-accent font-mono">$</span>
							<span className="text-white font-mono">
								ls -la ~/projects/ | grep -E "\.git$"
							</span>
						</div>
						<div className="text-gray-400 font-mono text-sm">
							<span className="text-green-400">*</span> Scanning local
							repository collection...
						</div>
						<div className="text-gray-400 font-mono text-sm">
							<span className="text-blue-400">*</span> Loading project
							metadata and commit history...
						</div>
						<div className="text-terminal-accent font-mono text-sm">
							<span className="text-yellow-400">✓</span> Found 11 active
							repositories
						</div>
					</div>
				</div>
			</div>

			<Project />
		</SectionWrapper>
	);
};

export default Projects;
