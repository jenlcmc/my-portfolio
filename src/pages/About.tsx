//import React from "react";
import "../index.css";
import "../components/About/About.css";

const LinkedInIconURL =
	"https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/linkedin-box-icon.png";
const GitHubIconURL =
	"https://icons.iconarchive.com/icons/simpleicons-team/simple/256/github-icon.png";
const ResumeIconURL =
	"https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/paper-icon.png";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-green-500 custom-hover-underline ">
				About Me
			</h1>
			<div className="flex-container">
				<div className="image-container">
					<img
						src="https://raw.githubusercontent.com/jenlcmc/my-portfolio/a86c1d4f54e66886b122d084fdd411a7a68a98b5/public/UT_Draw.png"
						alt="Drawing of myself"
						className="profile-image"
					/>
				</div>

				<div className="text-container">
					<div className="my-1 mr-1">
						<p className="text-gray-200">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed non risus. Suspendisse lectus tortor, dignissim sit
							amet, adipiscing nec, ultricies sed, dolor. Cras elementum
							ultrices diam. Maecenas ligula massa, varius a, semper
							congue, euismod non, mi.
						</p>
						<p className="text-gray-200">
							Proin porttitor, orci nec nonummy molestie, enim est
							eleifend mi, non fermentum diam nisl sit amet erat. Duis
							semper. Duis arcu massa, scelerisque vitae, consequat in,
							pretium a, enim. Pellentesque congue. Ut in risus volutpat
							libero pharetra tempor. Cras vestibulum bibendum augue.
							Praesent egestas leo in pede. Praesent blandit odio eu
							enim. Pellentesque sed dui ut augue blandit sodales.
							Vestibulum ante ipsum primis in faucibus orci luctus et
							ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac
							mauris sed pede pellentesque fermentum. Maecenas adipiscing
							ante non diam sodales hendrerit.
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
				<a
					href="https://drive.google.com/file/d/1RpE-dPwDJj5cI9VhunMk05D-ak9JcRnZ/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 retro-button"
				>
					<img
						src={ResumeIconURL}
						alt="Resume"
						className="w-8 h-8 filter invert"
					/>
				</a>
			</div>
		</div>
	);
};

export default About;
