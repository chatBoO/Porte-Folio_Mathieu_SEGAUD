import React from "react";

const ProjectCard = ({ id, title, text, cover, setProjectId, site, code }) => {

	// Ajouter ou Retire la classe "active" au modal-container au clic sur la cover du projet
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

	return (
		<article className="projects-container__projectCard">
			<div className="projects-container__projectCard__text">
				<h4>{title}</h4>
				<p>{text}</p>
			</div>
			<div
				className="projects-container__projectCard__cover"
				aria-label="open modal"
				onClick={() => {
					modalPreview();
					setProjectId(id);
				}}
			>
				<img src={cover} alt={title} />
			</div>
			<div className="projects-container__projectCard__links">
				<a href={code} className="code-link">
					<i className="fa-solid fa-circle-chevron-left"></i>voir le
					code
				</a>
				{site ? (
					<a href={site} className="site-link">
						voir le site
						<i className="fa-solid fa-circle-chevron-right"></i>
					</a>
				) : null}
			</div>
		</article>
	);
};

export default ProjectCard;
