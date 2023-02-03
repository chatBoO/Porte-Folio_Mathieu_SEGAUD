import React, { useState } from "react";
import { projects } from "../data/projects";
import Carrousel from "./Carrousel";

const Modal = ({ projectId }) => {
	const [currentPicture, setCurrentPicture] = useState(0);

	const modalPreview = () => {
		const body = document.querySelector("body");
		const modalContainer = document.querySelector(".modal-container");

		modalContainer.classList.toggle("active");

		if (modalContainer.classList.contains("active")) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "";
		}
	};

	const currentProject = projects.find((projet) => projet.id === projectId);

	if (currentProject) {
		const { id, title, text, cover, pictures, languages } = currentProject;

		return (
			<article className="modal-container">
				<div
					className="modal-container__overlay"
					onClick={() => {
						modalPreview();
						setTimeout(() => setCurrentPicture(0), "600");
					}}
				></div>

				<div
					className="modal-container__modal"
					role="dialog"
					aria-labelledby="modalTitle"
				>
					<button
						className="close-modal"
						aria-label="close modal"
						onClick={() => {
							modalPreview();
							setTimeout(() => setCurrentPicture(0), "600");
						}}
					>
						<i className="fa-regular fa-circle-xmark"></i>
					</button>

					<h3 id="modalTitle">{title.split("-")[0]}</h3>

					<div className="languages-container">
						{languages.map(({ nom, logo }) => (
							<span
								key={nom}
								className="languages-container__languages"
							>
								<img src={logo} alt={nom} /> {nom}
							</span>
						))}
					</div>

					<Carrousel
						pictures={pictures}
						title={title}
						id={id}
						setCurrentPicture={setCurrentPicture}
						currentPicture={currentPicture}
					/>
				</div>
			</article>
		);
	} else {
		return <article className="modal-container"></article>;
	}
};

export default Modal;
