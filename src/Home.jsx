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

			<section className="contact-form" id="contact">
				<h3>Me contacter</h3>
				<FormTemplate />
			</section>
		</main>
	);
};

export default Home;
