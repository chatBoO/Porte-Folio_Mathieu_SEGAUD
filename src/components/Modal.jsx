import React, { useState } from "react";
import { projects } from "../data/projects";
import Carrousel from "./Carrousel";

const Modal = ({ projectId }) => {
	const [currentPicture, setCurrentPicture] = useState(0);

	const modalPreview = () => {
		document.querySelector(".modal-container").classList.toggle("active");
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
						setCurrentPicture(0);
					}}
				></div>

				<div className="modal-container__modal">
					<button
						className="close-modal"
						onClick={() => {
							modalPreview();
							setCurrentPicture(0);
						}}
					>
						<i className="fa-regular fa-circle-xmark"></i>
					</button>

					<h3>{title.split("-")[0]}</h3>

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
