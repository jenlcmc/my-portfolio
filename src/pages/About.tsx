//import React from "react";
import "../index.css";
import "../components/About/About.css";

const LinkedInIconURL =
	"https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/linkedin-box-icon.png";
const GitHubIconURL =
	"https://icons.iconarchive.com/icons/simpleicons-team/simple/256/github-icon.png";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline ">
				About Me
			</h1>
			<div className="flex-container">
				<div className="image-container">
					<img
						src="https://github.com/jenlcmc/my-portfolio/raw/main/public/UT_Draw.png"
						alt="Drawing of myself"
						className="profile-image"
					/>
				</div>

				<div className="text-container">
					<div className="my-1 mr-1">
						<p className="text-gray-200">
							{
								"> Welcome to my page, I’m Uyen Tran, a recent CS new grad and currently MSCS student at UNLV with a passion for tackling complex problems and bringing creative solutions to life. My studies span courses in Data Science, Algorithms, Database, Machine Learning to AWS, Digital Images Processing, and Software Product Design, providing me with a strong foundation in both theoretical and practical aspects of computer science. As a TA for nearly two years, I helped students master C++ while also serving as a bridge between students and faculty. My experience with a DOE contractor, working on vital national projects, has deepened my interest in real-world applications of technology. I’m always looking for new challenges that push the boundaries of what tech can do."
							}
						</p>
						<p className="mt-10 mb-10 text-gray-200">
							{
								"> If you want to contact me, you can do it by go to my Github page and make an issue or pull request in any of the public repo. You can also message me on Linkedin"
							}
						</p>
					</div>
				</div>
			</div>
			<div className="flex space-x-2">
				<a
					href="https://www.linkedin.com/in/uyen-tran-b174a61ab/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 retro-button"
				>
					<img
						src={LinkedInIconURL}
						alt="LinkedIn"
						className="w-8 h-8 filter invert"
					/>
				</a>
				<a
					href="https://github.com/jenlcmc"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 retro-button"
				>
					<img
						src={GitHubIconURL}
						alt="GitHub"
						className="w-8 h-8 filter invert"
					/>
				</a>
			</div>
		</div>
	);
};

export default About;
