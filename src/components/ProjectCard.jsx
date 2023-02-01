import React from "react";
import Carrousel from "./Carrousel";

const ProjectCard = ({ id, title, text, cover, setProjectId }) => {
	const modalPreview = () => {
		document.querySelector(".modal-container").classList.toggle("active");
	};

	return (
		<article className="projects-container__projectCard">
			<div className="projects-container__projectCard__text">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
			<div
				className="projects-container__projectCard__cover"
				onClick={() => {
					modalPreview();
					setProjectId(id);
				}}
			>
				<img src={cover} alt={title} />
			</div>
		</article>
	);
};

export default ProjectCard;
