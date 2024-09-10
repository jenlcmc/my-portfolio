import ProjectData from "./ProjectData";
import ProjectItems from "./ProjectItems";
import "./Prj.css";

const Project = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline">
				Projects
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
				{ProjectData.map((project, index) => (
					<div key={index} className="project-card border p-4 bg-black">
						<ProjectItems
							title={project.title}
							description={project.description}
							technologies={project.techStack}
							github={project.githubLink}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
