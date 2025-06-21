//import React from "react";
import "../components/Home/Home.css";
import "../components/Education/Education.css";
import SectionWrapper from "../components/SectionWrapper";
import {
	TimeLineData,
	TimelineDataGrad,
} from "../components/Education/TimelineData";

const Education = () => {
	return (
		<SectionWrapper
			id="education"
			title="Academic Terminal"
			subtitle="~/education --verbose"
		>
			<div className="space-y-8">
				{/* Terminal Header */}
				<div className="bg-terminal-surface/40 border border-terminal-border rounded-lg p-4">
					<div className="flex items-center gap-3 mb-3">
						<div className="flex gap-2">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<span className="font-mono text-sm text-terminal-muted">
							education.exe
						</span>
					</div>
					<div className="font-mono text-sm">
						<div className="text-terminal-primary">
							$ ./show_academic_progress.sh
						</div>
						<div className="text-terminal-text mt-1">
							Loading academic achievements...
						</div>
					</div>
				</div>

				{/* Master's Degree - Current */}
				<div className="bg-terminal-surface/20 border border-terminal-primary/30 rounded-lg p-6">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-4 h-4 bg-terminal-primary rounded animate-pulse"></div>
						<h3 className="text-xl font-bold text-terminal-primary font-mono">
							CURRENT PROGRAM
						</h3>
						<div className="text-xs bg-terminal-primary/20 text-terminal-primary px-2 py-1 rounded font-mono">
							IN PROGRESS
						</div>
					</div>

					{/* Master's Progress Stats */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div className="bg-terminal-primary/10 border border-terminal-primary/30 rounded-lg p-3 text-center">
							<div className="text-xl font-bold text-terminal-primary font-mono">
								3.8
							</div>
							<div className="text-xs text-terminal-muted font-mono">
								CURRENT GPA
							</div>
						</div>
						<div className="bg-terminal-primary/10 border border-terminal-primary/30 rounded-lg p-3 text-center">
							<div className="text-xl font-bold text-terminal-primary font-mono">
								9
							</div>
							<div className="text-xs text-terminal-muted font-mono">
								CREDITS COMPLETED
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-terminal-text">
							Master of Science in Computer Science
						</h4>
						<p className="text-terminal-muted font-mono">
							University of Nevada, Las Vegas
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							{TimelineDataGrad.map((timeLine, index) => (
								<div
									key={index}
									className="bg-terminal-bg/50 border border-terminal-border/30 rounded p-3"
								>
									<div className="text-sm font-bold text-terminal-primary font-mono mb-2">
										{timeLine.year}
									</div>
									<div className="space-y-1">
										{timeLine.courses.map((course, courseIndex) => (
											<div
												key={courseIndex}
												className="flex items-center gap-2"
											>
												<div className="w-2 h-2 bg-terminal-primary rounded-full"></div>
												<span className="text-xs text-terminal-text font-mono">
													{course}
												</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Achievement Unlocked */}
				<div className="text-center">
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30 rounded-lg px-4 py-2">
						<span className="text-2xl">🏆</span>
						<span className="font-mono text-green-400 font-bold">
							ACHIEVEMENT UNLOCKED: BACHELOR'S DEGREE
						</span>
					</div>
				</div>

				{/* Bachelor's Degree Stats */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
						<div className="text-2xl font-bold text-green-400 font-mono">
							3.90
						</div>
						<div className="text-sm text-terminal-muted font-mono">
							FINAL GPA
						</div>
					</div>
					<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
						<div className="text-2xl font-bold text-green-400 font-mono">
							120+
						</div>
						<div className="text-sm text-terminal-muted font-mono">
							CREDITS
						</div>
					</div>
					<div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center">
						<div className="text-2xl font-bold text-yellow-400 font-mono">
							MAGNA
						</div>
						<div className="text-sm text-terminal-muted font-mono">
							CUM LAUDE
						</div>
					</div>
					<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
						<div className="text-2xl font-bold text-green-400 font-mono">
							2024
						</div>
						<div className="text-sm text-terminal-muted font-mono">
							GRADUATED
						</div>
					</div>
				</div>

				{/* Bachelor's Degree - Completed */}
				<div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/30 rounded-lg p-6">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-4 h-4 bg-green-500 rounded"></div>
						<h3 className="text-xl font-bold text-green-400 font-mono">
							COMPLETED ✓
						</h3>
						<div className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded font-mono">
							GRADUATED 2024
						</div>
					</div>
					<div className="space-y-3">
						<h4 className="text-lg font-semibold text-terminal-text">
							Bachelor of Science in Computer Science
						</h4>
						<p className="text-yellow-400 font-mono font-semibold">
							🎖️ Magna Cum Laude (GPA: 3.90)
						</p>
						<p className="text-terminal-muted font-mono">
							University of Nevada, Las Vegas + Mathematics Minor
						</p>

						{/* Course Timeline as Code Blocks */}
						<div className="mt-4">
							<div className="text-sm font-mono text-terminal-primary mb-3">
								// Academic Timeline
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								{TimeLineData.map((timeLine, index) => (
									<div
										key={index}
										className="bg-terminal-bg/50 border border-green-500/20 rounded p-4"
									>
										<div className="text-sm font-bold text-green-400 font-mono mb-3 flex items-center gap-2">
											<span className="text-yellow-400">const</span>{" "}
											{timeLine.year
												.split(":")[0]
												.toLowerCase()
												.replace(" ", "")}{" "}
											= {"{"}
										</div>
										<div className="ml-4 space-y-1">
											{timeLine.courses.map(
												(course, courseIndex) => (
													<div
														key={courseIndex}
														className="flex items-center gap-2"
													>
														<span className="text-terminal-secondary">
															"
														</span>
														<span className="text-xs text-terminal-text font-mono">
															{course}
														</span>
														<span className="text-terminal-secondary">
															",
														</span>
													</div>
												)
											)}
										</div>
										<div className="text-sm font-bold text-green-400 font-mono mt-2">
											{"}"}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Terminal Success Message */}
				<div className="bg-terminal-surface/40 border border-green-500/30 rounded-lg p-4">
					<div className="font-mono text-sm space-y-1">
						<div className="text-terminal-primary">
							$ education --summary
						</div>
						<div className="text-green-400">
							✓ Bachelor's degree completed successfully!
						</div>
						<div className="text-yellow-400">
							⚡ Master's degree in progress...
						</div>
						<div className="text-terminal-muted">
							🎯 Next milestone: Graduate degree completion
						</div>
						<div className="text-terminal-primary mt-2">
							$ echo "Ready for new challenges!"
						</div>
						<div className="text-terminal-text">
							Ready for new challenges!
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Education;
