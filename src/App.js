import React from "react";
// Components
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tech from "./components/Tech/Tech";
import Contact from "./components/Contact/Contact";
// Style
import "./style/style.scss";

function App() {
	return (
		<div className="main">
			<Navbar />
			<Hero />
			<About />
			<Project />
			<Tech />
			<Contact />
		</div>
	);
}

export default App;
