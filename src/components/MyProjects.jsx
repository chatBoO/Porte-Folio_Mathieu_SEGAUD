import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";

const MyProjects = () => {
	const [projectId, setProjectId] = useState(""); // Récupère l'id du projet pour l'afficher dans la modal
	const [projets, setProjets] = useState([]); // Récupère la liste de tous les projets dans la bases de données FireStore

	// Récupère les projets dans Firestore Database et se lance toute seule au lancement de la page dans le useEffect
	const fetchPost = async () => {
		await getDocs (query(collection(db, "projets"), orderBy("id"))).then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProjets(newData);
		});
	};

	useEffect(() => {
		fetchPost();
	}, []);

	// Ajoute ou enlève la classe "hide"  sur la div "projects-container"
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
					<i className="fa-solid fa-caret-down"></i>
				</span>
				Mes projets :
			</h3>

			<div className="projects-container">
				{projets.map(({ id, title, text, cover, site, code }) => (
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
