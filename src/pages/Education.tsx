//import React from "react";
import "../components/Home/Home.css";
import "../components/Education/Education.css";
import TimeLineItems from "../components/Education/TimeLineItems";
import {
	TimeLineData,
	TimelineDataGrad,
} from "../components/Education/TimelineData";

const Education = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline">
				Education
			</h1>
			<div className="mb-10 mt-10 text-center">
				<p className="text-gray-200">
					Master of Science in Computer Science (Current)
				</p>
				<p className="text-gray-200">University of Nevada, Las Vegas</p>
			</div>

			<div className="flex flex-row justify-center items-center w-full overflow-x-auto space-x-2">
				{TimelineDataGrad.map((timeLine, index) => (
					<TimeLineItems
						key={index}
						year={timeLine.year}
						courses={timeLine.courses}
					/>
				))}
			</div>
			<div className="flex flex-row justify-center items-center w-full">
				<div className="w-1/2 h-1 bg-green-500"></div>
				<div className="w-1/2 h-1 bg-green-500 "></div>
			</div>
			<div className="flex flex-col w-full mt-10">
				<div className="mb-10 text-center">
					<p className="text-gray-200">
						Bachelor of Science in Computer Science with Minor in
						Mathematics (GPA 3.90)
					</p>
					<p className="text-gray-200">Magna Cum Laude Distinction</p>
					<p className="text-gray-200">University of Nevada, Las Vegas</p>
				</div>
				<div className="flex flex-row justify-between w-full overflow-x-auto space-x-2">
					{TimeLineData.map((timeLine, index) => (
						<TimeLineItems
							key={index}
							year={timeLine.year}
							courses={timeLine.courses}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Education;
