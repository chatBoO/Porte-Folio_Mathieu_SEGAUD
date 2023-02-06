import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Modal from "./Modal";

const MyProjects = () => {
	const [projectId, setProjectId] = useState("");

	const toggle = () => {
		const projectContainer = document.querySelector(".projects-container");
		const caret = document.querySelector(".caret");

		projectContainer.classList.toggle("hide");

		projectContainer.classList.contains("hide")
			? (caret.innerHTML = '<i class="fa-solid fa-caret-right"></i>')
			: (caret.innerHTML = '<i class="fa-solid fa-caret-down"></i>');
	};

	return (
		<section id="myProjects">
			<h3>
				<span className="caret" onClick={toggle}>
					<i class="fa-solid fa-caret-down"></i>
				</span>
				Mes projets :
			</h3>

			<div className="projects-container">
				{projects.map(({ id, title, text, cover, site, code }) => (
					<ProjectCard
						key={id}
						id={id}
						title={title}
						text={text}
						cover={cover}
						site={site}
						code={code}
						setProjectId={setProjectId}
					/>
				))}
			</div>
			<Modal projectId={projectId} />
		</section>
	);
};

export default MyProjects;
