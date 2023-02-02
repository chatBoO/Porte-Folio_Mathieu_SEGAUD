import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
				import.meta.env.VITE_USERID
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
					formMessage.innerHTML =
						"<p class='success'>Message envoyé !</p>";

					setTimeout(() => {
						formMessage.innerHTML = "";
					}, 2500);
				},
				(error) => {
					console.log(error.text);
					formMessage.innerHTML =
						"<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

					setTimeout(() => {
						formMessage.innerHTML = "";
					}, 2500);
				}
			);
	};

	return (
		<div className="form-container">
			<form ref={form} onSubmit={sendEmail}>
				<label for="name">Nom, prénom / société</label>
				<input
					type="text"
					name="name"
					id="name"
					required
					autoComplete="off"
				/>
				<label for="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					required
					autoComplete="off"
				/>
				<label for="object">Objet</label>
				<input
					type="text"
					name="object"
					id="object"
					required
					autoComplete="off"
				/>
				<label for="message">Message</label>
				<textarea name="message" id="message" required />
				<input type="submit" value="Envoyer" />
			</form>
			<div className="form-message"></div>
		</div>
	);
};

export default FormTemplate;
