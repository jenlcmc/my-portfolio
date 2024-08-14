//import React from "react";
import "../index.css";
import "../components/About/About.css";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center m-10">
			<h1 className="text-3xl text-white custom-hover-underline ">
				About Me
			</h1>
			<div className="flex-container">
				<div className="image-container">
					<img
						src="/public/vite.svg"
						alt="placeholder"
						className="rounded-full"
					/>
				</div>
				<div className="text-container">
					<div className="mt-4">
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
		</div>
	);
};

export default About;
