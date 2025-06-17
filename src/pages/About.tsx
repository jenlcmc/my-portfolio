//import React from "react";
import "../index.css";
import "../components/About/About.css";
import SectionWrapper from "../components/SectionWrapper";

const LinkedInIconURL =
	"https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/linkedin-box-icon.png";
const GitHubIconURL =
	"https://icons.iconarchive.com/icons/simpleicons-team/simple/256/github-icon.png";

const About = () => {
	return (
		<SectionWrapper id="about" title="About Me" subtitle="~/whoami">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="image-container order-2 lg:order-1">
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-r from-terminal-accent to-terminal-purple rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
						<img
							src="https://github.com/jenlcmc/my-portfolio/raw/main/public/UT_Draw.png"
							alt="Drawing of myself"
							className="relative profile-image w-full max-w-md mx-auto rounded-full border-4 border-terminal-accent/50 hover:border-terminal-accent transition-all duration-300 hover:scale-105"
						/>
					</div>
				</div>

				<div className="text-container order-1 lg:order-2 space-y-6">
					<div className="space-y-6">
						<div className="bg-terminal-surface/30 border border-terminal-border/50 rounded-lg p-6 hover:border-terminal-accent/50 transition-all duration-300">
							<p className="text-terminal-text leading-relaxed font-mono text-sm md:text-base">
								<span className="text-terminal-accent">$</span> cat
								about.txt
							</p>
							<p className="text-terminal-text leading-relaxed mt-4">
								Welcome to my page, I'm Uyen Tran, a recent CS new grad
								and currently MSCS student at UNLV with a passion for
								tackling complex problems and bringing creative
								solutions to life. My studies span courses in Data
								Science, Algorithms, Database, Machine Learning to AWS,
								Digital Images Processing, and Software Product Design,
								providing me with a strong foundation in both
								theoretical and practical aspects of computer science.
							</p>
						</div>

						<div className="bg-terminal-surface/30 border border-terminal-border/50 rounded-lg p-6 hover:border-terminal-purple/50 transition-all duration-300">
							<p className="text-terminal-text leading-relaxed font-mono text-sm md:text-base">
								<span className="text-terminal-purple">$</span> cat
								experience.txt
							</p>
							<p className="text-terminal-text leading-relaxed mt-4">
								As a TA for nearly two years, I helped students master
								C++ while also serving as a bridge between students and
								faculty. My experience with a DOE contractor, working on
								vital national projects, has deepened my interest in
								real-world applications of technology. I'm always
								looking for new challenges that push the boundaries of
								what tech can do.
							</p>
						</div>

						<div className="bg-terminal-surface/30 border border-terminal-border/50 rounded-lg p-6 hover:border-terminal-green/50 transition-all duration-300">
							<p className="text-terminal-text leading-relaxed font-mono text-sm md:text-base">
								<span className="text-terminal-green">$</span> cat
								contact.txt
							</p>
							<p className="text-terminal-text leading-relaxed mt-4">
								If you want to contact me, you can do it by going to my
								Github page and making an issue or pull request in any
								of the public repo. You can also message me on LinkedIn.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center space-x-6 mt-12">
				<a
					href="https://www.linkedin.com/in/uyen-tran-b174a61ab/"
					target="_blank"
					rel="noopener noreferrer"
					className="retro-button flex items-center gap-3 group"
				>
					<img
						src={LinkedInIconURL}
						alt="LinkedIn"
						className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
					/>
					<span>LinkedIn</span>
				</a>
				<a
					href="https://github.com/jenlcmc"
					target="_blank"
					rel="noopener noreferrer"
					className="retro-button flex items-center gap-3 group"
				>
					<img
						src={GitHubIconURL}
						alt="GitHub"
						className="w-6 h-6 filter brightness-0 invert group-hover:scale-110 transition-transform duration-200"
					/>
					<span>GitHub</span>
				</a>
			</div>
		</SectionWrapper>
	);
};

export default About;
