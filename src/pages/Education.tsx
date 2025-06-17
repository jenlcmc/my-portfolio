//import React from "react";
import "../components/Home/Home.css";
import "../components/Education/Education.css";
import TimeLineItems from "../components/Education/TimeLineItems";
import SectionWrapper from "../components/SectionWrapper";
import {
	TimeLineData,
	TimelineDataGrad,
} from "../components/Education/TimelineData";

const Education = () => {
	return (
		<SectionWrapper
			id="education"
			title="Education"
			subtitle="~/academic-journey"
		>
			<div className="space-y-16">
				{/* Graduate Education */}
				<div className="text-center space-y-6">
					<div className="bg-terminal-surface/30 border border-terminal-border/50 rounded-lg p-6 hover:border-terminal-accent/50 transition-all duration-300">
						<p className="text-terminal-accent font-mono text-xl font-semibold mb-2">
							Master of Science in Computer Science (Current)
						</p>
						<p className="text-terminal-text">
							University of Nevada, Las Vegas
						</p>
					</div>

					<div className="flex flex-row justify-center items-center w-full overflow-x-auto space-x-4 py-6">
						{TimelineDataGrad.map((timeLine, index) => (
							<div
								key={index}
								className="bg-terminal-surface/20 border border-terminal-border/30 rounded-lg p-4 hover:border-terminal-purple/50 transition-all duration-300"
							>
								<TimeLineItems
									year={timeLine.year}
									courses={timeLine.courses}
								/>
							</div>
						))}
					</div>
				</div>

				{/* Divider */}
				<div className="flex flex-row justify-center items-center w-full">
					<div className="w-1/2 h-1 bg-gradient-to-r from-terminal-accent to-terminal-purple"></div>
					<div className="w-1/2 h-1 bg-gradient-to-r from-terminal-purple to-terminal-accent"></div>
				</div>

				{/* Undergraduate Education */}
				<div className="space-y-6">
					<div className="text-center">
						<div className="bg-terminal-surface/30 border border-terminal-border/50 rounded-lg p-6 hover:border-terminal-green/50 transition-all duration-300">
							<p className="text-terminal-green font-mono text-xl font-semibold mb-2">
								Bachelor of Science in Computer Science with Minor in
								Mathematics (GPA 3.90)
							</p>
							<p className="text-terminal-yellow font-mono font-semibold mb-1">
								Magna Cum Laude Distinction
							</p>
							<p className="text-terminal-text">
								University of Nevada, Las Vegas
							</p>
						</div>
					</div>

					<div className="flex flex-row justify-between w-full overflow-x-auto space-x-4 py-6">
						{TimeLineData.map((timeLine, index) => (
							<div
								key={index}
								className="bg-terminal-surface/20 border border-terminal-border/30 rounded-lg p-4 hover:border-terminal-green/50 transition-all duration-300"
							>
								<TimeLineItems
									year={timeLine.year}
									courses={timeLine.courses}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Education;
