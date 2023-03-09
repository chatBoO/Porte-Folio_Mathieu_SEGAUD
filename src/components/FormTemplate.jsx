import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import punaise from "../assets/img/punaise.webp";
import personnage from "../assets/img/personnage3.webp";

const FormTemplate = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const formMessage = document.querySelector(".form-message");

		emailjs
			.sendForm(
				"service_iycpl2l",
				"template_tugt7ai",
				form.current,
				import.meta.env.VITE_USERID,
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
					formMessage.innerHTML =
						"<p className='success'>Message envoyé !</p>";

					setTimeout(() => {
						formMessage.innerHTML = "";
					}, 2500);
				},
				(error) => {
					console.log(error.text);
					formMessage.innerHTML =
						"<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

					setTimeout(() => {
						formMessage.innerHTML = "";
					}, 2500);
				}
			);
	};

	return (
		<section id="contact">
			<h3>Me contacter</h3>
			<div className="form-container">
				<div className="form">
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor="name">Nom, prénom / Société</label>
						<input
							type="text"
							name="name"
							id="name"
							required
							autoComplete="off"
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							autoComplete="off"
						/>
						<label htmlFor="object">Objet</label>
						<input
							type="text"
							name="object"
							id="object"
							required
							autoComplete="off"
						/>
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" required />
						<input type="submit" value="Envoyer" />
						<img
							src={punaise}
							alt="une punaise"
							className="punaise"
						/>
					</form>
					<div className="form-message"></div>
				</div>
				<img
					src={personnage}
					alt="personnage cartoon"
					className="personnage"
				/>
				<p className="phone-number">
					<i className="fa-solid fa-mobile-screen"></i> Ou par
					téléphone au : 07.81.57.70.28
				</p>
			</div>
		</section>
	);
};

export default FormTemplate;
