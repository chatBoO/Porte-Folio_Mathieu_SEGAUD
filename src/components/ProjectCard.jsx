import React from 'react'

const ProjectCard = ({ title, content, picture }) => {
  return (
		<article className="projects-container__project">
			<h4>{title}</h4>
			<p>{content}</p>
		</article>
  );
}

export default ProjectCard