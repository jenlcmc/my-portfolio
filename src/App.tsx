//import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Headers";
import Footer from "./components/Footer";

const App = () => (
	<div className="min-h-screen bg-gray-100">
		<Header />
		<Navigation />
		<main className="container mx-auto p-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</main>
		<Footer />
	</div>
);

export default App;
