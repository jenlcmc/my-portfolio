//import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Work from "./pages/Work";
//import Header from "./components/Headers";
import Footer from "./components/Footer";

const App = () => (
	<div className="min-h-screen bg-gray-100 flex flex-col">
		{/*<Header />*/}
		<Navigation />
		<main className="flex-grow container mx-auto p-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/education" element={<Education />} />
				<Route path="/work" element={<Work />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</main>
		<Footer />
	</div>
);

export default App;
