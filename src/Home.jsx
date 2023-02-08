import React from "react";
import FormTemplate from "./components/FormTemplate";
import MyProjects from "./components/MyProjects";
import About from "./components/About";
import Formations from "./components/Formations";

const Home = () => {

	return (
		<main>
			<About />

			<Formations />

			<MyProjects />

			<FormTemplate />
		</main>
	);
};

export default Home;
