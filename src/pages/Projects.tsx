//import React from "react";

interface Project {
	name: string;
	description: string;
	githubUrl: string;
}

const projects: Project[] = [
	{
		name: "Project One",
		description: "A brief description of Project One.",
		githubUrl: "https://github.com/your-username/project-one",
	},
	{
		name: "Project Two",
		description: "A brief description of Project Two.",
		githubUrl: "https://github.com/your-username/project-two",
	},
];

const Projects = () => {
	return (
		<div className="p-4">
			<h2 className="text-xl mb-4">My Projects</h2>
			<ul>
				{projects.map((project) => (
					<li key={project.githubUrl} className="mb-4">
						<h3 className="text-lg font-bold">{project.name}</h3>
						<p>{project.description}</p>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500"
						>
							View on GitHub
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Projects;
