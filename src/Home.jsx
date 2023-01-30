import React, { useEffect } from "react";
import FormTemplate from "./components/FormTemplate";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import pc from "./assets/img/pc.webp";
import logos from "./assets/img/logos.webp";
import sassLogo from "./assets/img/sass.webp";
import reactLogo from "./assets/img/react.png";
import photoMS from "./assets/img/ms-color-resized.webp";
// import WindowSize from "./components/WindowSize";

const Home = () => {
	// let size = WindowSize();
	// console.log(size.width);

	// useEffect(() => {
	// 	// const userWidth =
	// 	// 	document.documentElement.clientWidth || window.innerWidth;
	// 	const aboutParagraph = document.querySelector(".content > p");
	// 	const aboutImg = document.querySelector("#about img");
	// 	const formationImg = document.querySelector(
	// 		"#formation .content > img"
	// 		);

	// 		window.addEventListener("scroll", () => {
	// 			const reactLogo = document.querySelector(".reactLogo");

	// 		let scrollValue =
	// 			(window.scrollY + window.innerHeight) /
	// 			document.body.offsetHeight;

	// 		if (scrollValue > 0.4) {
	// 			aboutParagraph.style.animation =
	// 				"aboutParagraph 1s ease-out forwards";
	// 			aboutImg.style.animation =
	// 				"aboutImg 1.5s ease-out 0.5s forwards";
	// 		}

	// 		if (scrollValue > 0.55) {
	// 			reactLogo.style.animation =
	// 				"reactLogo 1.5s ease-out 1.5s forwards";
	// 			formationImg.style.opacity = 1;
	// 			formationImg.style.transform = "none";
	// 		}
	// 	});
	// }, []);

	const yearsDiff = (date) => {
		const currentYear = new Date();
		const dateChoiced = new Date(date);

		let tmp = currentYear - dateChoiced;

		tmp = Math.floor(tmp / 31536000000).toFixed(0);

		return tmp;
	};
	const myAge = yearsDiff("1990-03-21");
	const carrefourDuration = yearsDiff("2014-05-02");

	return (
		<main>
			<section id="about">
				<h3>Présentation :</h3>
				<div className="content">
					<p>
						Bonjour, je suis Mathieu SEGAUD, {myAge} ans, en couple,
						et passionné de code. Après plus de {carrefourDuration}{" "}
						ans en tant que conseiller commercial au sein de
						l'espace multimédia Carrefour®, j'ai pu aquérir de
						nombreuses compétences professionnelles et
						relationnelles, telles que l'écoute, le respect des
						consignes, le travaille en équipe, l'autonomie... j'ai
						décidé de reprendre ma vie en main en 2022 et de me
						lancer dans le développement.
					</p>
					<img src={photoMS} alt="Mathieu SEGAUD" />
				</div>
			</section>

			<section id="formation">
				<h3>Ma formation :</h3>
				<div className="content">
					<img src={pc} alt="developpeur web" />
					<div className="content__text">
						<p>
							Diplômé d'une formation développeur-web et de
							plusieurs projets, je dispose des compétences
							nécessaires à la réalisation de projets demandant
							l'utilisation de langages front-end tels que HTML,
							CSS, Sass, Javascript ou encore... React ! Ainsi que
							MongoDB, Express, Firebase pour le back-end.
						</p>
						<div className="content__text__logos">
							<img src={logos} alt="logos" />
							<img src={sassLogo} alt="Sass logo" />
							<img
								src={reactLogo}
								alt="React Logo"
								className="reactLogo"
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="projects">
				<h3>Mes projets :</h3>
				<div className="projects-container">
					{projects.map(({ id, title, content, cover }) => (
						<ProjectCard
							key={id}
							title={title}
							content={content}
							cover={cover}
						/>
					))}
				</div>
			</section>

			<section className="contact-form" id="contact">
				<h3>Me contacter</h3>
				<FormTemplate />
			</section>
		</main>
	);
};

export default Home;
