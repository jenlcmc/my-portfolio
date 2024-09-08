//import React from "react";
import "../components/Home/Home.css";
import "../components/Education/Education.css";

const Education = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline">
				Education
			</h1>
			<div className="flex flex-col w-full mt-10">
				<div className="mb-10 text-center">
					<p className="text-gray-200">
						Bachelor of Science in Computer Science with Minor in
						Mathematics (GPA 3.90)
					</p>
					<p className="text-gray-200">Magna Cum Laude Distinction</p>
					<p className="text-gray-200">University of Nevada, Las Vegas</p>
				</div>
				{/* Timeline */}
				<div className="flex flex-row justify-between w-full overflow-x-auto">
					{/* Year 1 */}
					<div className="timeline-item flex flex-col items-center">
						<h3 className=" item-header mb-4">
							Year 1: Fall 2020 / Spring 2021
						</h3>
						<ul className="list-disc text-gray-200">
							<li>CS 135: Computer Science I</li>
							<li>EGG 101: Intro Engineering Experience</li>
							<li>MATH 181: Calculus I</li>
							<li>CPE 100: Digital Logic Design I</li>
							<li>CS 202: Computer Science II</li>
							<li>MATH 182: Calculus II</li>
						</ul>
					</div>
					{/* Year 2 */}
					<div className="timeline-item flex flex-col items-center">
						<h3 className="item-header mb-4">
							Year 2: Fall 2021 / Spring 2022
						</h3>
						<ul className="list-disc text-gray-200">
							<li>CS 218: Intro to System Programming</li>
							<li>EGG 202: 2nd Year Design Experience</li>
							<li>MATH 251: Discrete Mathematics I</li>
							<li>CS 219: Computer Organization</li>
							<li>CS 302: Data Structures</li>
							<li>MATH 351: Discrete Mathematics II</li>
							<li>CS 443: Information Assurance</li>
							<li>MATH 365: Computer Linear Algebra</li>
						</ul>
					</div>
					{/* Year 3 */}
					<div className="timeline-item flex flex-col items-center">
						<h3 className=" item-header mb-4">
							Year 3: Fall 2022 / Spring 2023
						</h3>
						<ul className="list-disc text-gray-200">
							<li>CS 301: Social Implement of Computer</li>
							<li>CS 326: Programming Language, Con/Implement</li>
							<li>CS 370: Operating Systems</li>
							<li>STAT 411: Statistical Methods I</li>
							<li>CS 442: Cloud Computing</li>
							<li>CS 456: Automata and Formal Language</li>
							<li>PHYS 180: Physics Scientists/Engineer I</li>
						</ul>
					</div>
					{/* Year 4 */}
					<div className="timeline-item flex flex-col items-center">
						<h3 className="item-header  mb-4">
							Year 4: Fall 2023 / Spring 2024
						</h3>
						<ul className="list-disc text-gray-200">
							<li>CS 460: Compiler Construction</li>
							<li>CS 477: Analysis of Algorithms</li>
							<li>CS 489: Analysis and Presentation (Data Science)</li>
							<li>CS 469: Intro to Digital Img Processing</li>
							<li>CS 472: Software Product Design I</li>
							<li>PHYS 196: Engineering Physics B</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
