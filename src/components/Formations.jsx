import React from "react";
import sassLogo from "../assets/img/sass.webp";
import reactLogo from "../assets/img/react.png";
import pc from "../assets/img/pc.webp";
import logos from "../assets/img/logos.webp";

const Formations = () => {
	return (
		<section id="formation">
			<h3>Ma formation :</h3>
			<div className="content">
				<img src={pc} alt="developpeur web" />
				<div className="content__text">
					<p>
						Diplômé d'une formation développeur-web et de plusieurs
						projets, je dispose des compétences nécessaires à la
						réalisation de projets demandant l'utilisation de
						langages front-end tels que HTML, CSS, Sass, Javascript
						ou encore... React ! Ainsi que MongoDB, Express,
						Firebase pour le back-end.
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
	);
};

export default Formations;
