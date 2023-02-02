import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Modal from "./Modal";

const MyProjects = () => {
	const [projectId, setProjectId] = useState(1);

	return (
		<section id="myProjects">
			<h3>Mes projets :</h3>
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
