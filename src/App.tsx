//import React from "react";
import Navigation from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
	<div className="min-h-screen flex flex-col">
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
);

export default App;
