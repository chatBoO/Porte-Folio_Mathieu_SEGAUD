import React from 'react'
import photoMS from "../assets/img/ms-color-resized.webp";
const About = () => {

	// Calcul la différence entre deux dates
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

		<section id="about">
			<h3>Présentation :</h3>
			<div className="content">
				<p>
					Bonjour, je suis Mathieu SEGAUD, {myAge} ans, en couple, et
					passionné de code. Après plus de {carrefourDuration} ans en
					tant que conseiller commercial au sein de l'espace
					multimédia Carrefour®, j'ai pu aquérir de nombreuses
					compétences professionnelles et relationnelles, telles que
					l'écoute, le respect des consignes, le travaille en équipe,
					l'autonomie... j'ai décidé de reprendre ma vie en main en
					2022 et de me lancer dans le développement.
				</p>
				<img src={photoMS} alt="Mathieu SEGAUD" />
			</div>
		</section>
  );
}

export default About