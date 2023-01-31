import React from 'react'
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const MyProjects = () => {

  return (
		<section id="myProjects">
			<h3>Mes projets :</h3>
			<div className="projects-container">
				{projects.map(({ id, title, content, cover }) => (
					<ProjectCard
						key={id}
						title={title}
						content={content}
						cover={cover}
					/>
				))}
			</div>
		</section>
  );
}

export default MyProjects