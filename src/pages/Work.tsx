//import React from "react";
import "../components/Home/Home.css";
import "../components/Works/Works.css";
import WorkExperience from "../components/Works/WorkExp";
import SectionWrapper from "../components/SectionWrapper";

const Work = () => {
	return (
		<SectionWrapper
			id="work"
			title="Work Experience"
			subtitle="~/professional-journey"
		>
			<div className="w-full">
				<WorkExperience />
			</div>
		</SectionWrapper>
	);
};

export default Work;
