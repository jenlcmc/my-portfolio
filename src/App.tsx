import { useEffect, useState } from "react";
import Navigation from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import Spinner from "./hooks/Spinner";

import "./index.css";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time (for example, 2 seconds)
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer); // Cleanup timeout when the component unmounts
	}, []);

	return (
		<div className="min-h-screen flex flex-col">
			{loading ? (
				<Spinner />
			) : (
				<div>
					{" "}
					{/* Replaced <> with <div> */}
					<Navigation />
					<main className="flex-grow container mx-auto p-4">
						<div id="home">
							<Home />
						</div>
						<div id="about">
							<About />
						</div>
						<div id="education">
							<Education />
						</div>
						<div id="work">
							<Work />
						</div>
						<div id="projects">
							<Projects />
						</div>
					</main>
					<Footer />
				</div>
			)}
		</div>
	);
};

export default App;
