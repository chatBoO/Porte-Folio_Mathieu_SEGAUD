import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Modal from "./Modal";

const MyProjects = () => {
	return (
		<section id="myProjects">
			<h3>Mes projets :</h3>
			<div className="projects-container">
				{projects.map(({ id, title, text, cover }) => (
					<ProjectCard
						key={id}
						title={title}
						text={text}
						cover={cover}
					/>
				))}
			</div>
				<Modal />
		</section>
	);
};

export default MyProjects;
