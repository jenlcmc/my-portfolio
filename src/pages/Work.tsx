//import React from "react";
import "../components/Home/Home.css";
import "../components/Works/Works.css";
import WorkExperience from "../components/Works/WorkExp";

const Work = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline bottom-10">
				Work Experiences
			</h1>
			<div className="flex flex-col w-full mt-10">
				<WorkExperience />
			</div>
		</div>
	);
};

export default Work;
