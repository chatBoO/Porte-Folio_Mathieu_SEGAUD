import React from "react";

const ProjectCard = ({ id, title, content, cover }) => {

	const modalPreview = () => {
		const modal = document.createElement("article");
		const modalContainer = document.createElement("div");

		modal.classList.add("modal");
		modalContainer.classList.add("modal__container");

		document.body.appendChild(modal);
		modal.appendChild(modalContainer);
	};

	return (
		<article className="projects-container__projectCard">
			<div className="projects-container__projectCard__text">
				<h4>{title}</h4>
				<p>{content}</p>
			</div>
			<div
				className="projects-container__projectCard__cover"
				onClick={modalPreview}
			>
				<img src={cover} alt={title} />
			</div>
		</article>
	);
};

export default ProjectCard;
