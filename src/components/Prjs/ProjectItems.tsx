import "../Prjs/Prj.css";

interface ProjectItemsProps {
	title: string;
	description: string;
	technologies: string[];
	github: string;
}

const ProjectItems = ({
	title,
	description,
	technologies,
	github,
}: ProjectItemsProps) => {
	return (
		<div className="flex flex-col h-full">
			<h2 className="text-xl text-white">{title}</h2>
			<p className="mt-2" style={{ color: "white" }}>
				{" "}
				- {description}
			</p>

			<ul className="mt-2 text-yellow-400">
				- Technologies:
				{technologies.map((tech, index) => (
					<li key={index} className="inline-block mr-2">
						{tech + ","}
					</li>
				))}
			</ul>

			<div className="flex-grow"></div>

			<div className="flex justify-center mt-4">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="retro-button"
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
};

export default ProjectItems;
