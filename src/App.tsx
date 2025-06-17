import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Teaching from "./pages/Teaching";
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
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-terminal-bg to-terminal-surface text-terminal-text relative">
			<div className="animated-bg"></div>
			{loading ? (
				<Spinner />
			) : (
				<div className="animate-fade-in relative z-10">
					<Navigation />
					<Routes>
						<Route
							path="/"
							element={
								<div className="relative">
									<main className="flex-grow container mx-auto px-4 py-8 space-y-12">
										<div id="home" className="animate-slide-up">
											<Home />
										</div>
										<div
											id="about"
											className="animate-slide-up"
											style={{ animationDelay: "0.1s" }}
										>
											<About />
										</div>
										<div
											id="education"
											className="animate-slide-up"
											style={{ animationDelay: "0.2s" }}
										>
											<Education />
										</div>
										<div
											id="work"
											className="animate-slide-up"
											style={{ animationDelay: "0.3s" }}
										>
											<Work />
										</div>
										<div
											id="projects"
											className="animate-slide-up"
											style={{ animationDelay: "0.4s" }}
										>
											<Projects />
										</div>
									</main>
									<Footer />
								</div>
							}
						/>
						<Route path="/teaching" element={<Teaching />} />
					</Routes>
				</div>
			)}
		</div>
	);
};

export default App;
