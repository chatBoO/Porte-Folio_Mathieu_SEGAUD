import React from "react";

const ProjectCard = ({ title, content, cover }) => {
	return (
		<article className="projects-container__projectCard">
			<div className="projects-container__projectCard__text">
				<h4>{title}</h4>
				<p>{content}</p>
			</div>
			<div className="projects-container__projectCard__cover">
				<img src={cover} alt={title} />
			</div>
		</article>
	);
};

export default ProjectCard;
