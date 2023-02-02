import React from "react";

const ProjectCard = ({ id, title, text, cover, setProjectId, site, code }) => {
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
			<div className="projects-container__projectCard__links">
				<a href={code} className="code-link">
					<i className="fa-solid fa-circle-chevron-left"></i>voir le code
				</a>
				<a href={site} className="site-link">
					voir le site<i className="fa-solid fa-circle-chevron-right"></i>
				</a>
			</div>
		</article>
	);
};

export default ProjectCard;
