import React from "react";
import { projects } from "../data/projects";
import Carrousel from "./Carrousel";

const Modal = ({ projectId }) => {
	const modalPreview = () => {
		document.querySelector(".modal-container").classList.toggle("active");
	};

	const currentProject = projects.find((projet) => projet.id == projectId);

	if (currentProject) {
		const { id, title, text, cover, pictures, languages } = currentProject;

		return (
			<article className="modal-container">
				<div
					className="modal-container__overlay"
					onClick={modalPreview}
				></div>

				<div className="modal-container__modal">
					<button className="close-modal" onClick={modalPreview}>
						<i className="fa-regular fa-circle-xmark"></i>
					</button>

					<h3>{title.split("-")[0]}</h3>

					<div className="languages-container">
						{languages.map(({ nom, logo }) => (
							<span key={nom} className="languages">
								<img src={logo} alt={nom} /> {nom}
							</span>
						))}
					</div>

					<Carrousel pictures={pictures} title={title} id={id} />
				</div>
			</article>
		);
	}
};

export default Modal;
