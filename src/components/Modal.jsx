import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Carrousel from "./Carrousel";

const Modal = ({ projectId }) => {
	const [currentPicture, setCurrentPicture] = useState(0); // Affiche la première image du projet dans le carrousel (index 0)
	const [projets, setProjets] = useState([]); // Récupère la liste de tous les projets dans la bases de données FireStore

	// Récupère les projets dans Firestore Database et se lance toute seule au lancement de la page dans le useEffect
	const fetchPost = async () => {
		await getDocs(collection(db, "projets")).then((querySnapshot) => {
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

	// Ajouter ou Retire la classe "active" au modal-container au clic sur le bouton "close" ou sur "l'overlay"
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

	const findProject = projets.find((projet) => projet.id === projectId);
	const currentProject = findProject === undefined ? projets[0] : findProject;

	if (currentProject) {
		const { id, title, text, cover, pictures, languages } = currentProject;

		const pictureActive = pictures[currentPicture];

		return (
			<article className="modal-container">
				<div
					className="modal-container__overlay"
					onClick={() => {
						modalPreview();
						setTimeout(() => setCurrentPicture(0), "250");
					}}
				></div>

				<div
					className="modal-container__modal"
					role="dialog"
					aria-labelledby="modalTitle"
				>
					<button
						className="close-modal"
						aria-label="close modal"
						onClick={() => {
							modalPreview();
							setTimeout(() => setCurrentPicture(0), "300");
						}}
					>
						<i className="fa-regular fa-circle-xmark"></i>
					</button>

					<h3 id="modalTitle">{title.split("-")[0]}</h3>

					<div className="languages-container">
						{languages.map(({ nom, logo }) => (
							<span
								key={nom}
								className="languages-container__languages"
							>
								<img src={logo} alt={nom} /> {nom}
							</span>
						))}
					</div>

					<Carrousel
						pictures={pictures}
						title={title}
						id={id}
						setCurrentPicture={setCurrentPicture}
						currentPicture={currentPicture}
						pictureActive={pictureActive}
					/>
				</div>
			</article>
		);
	} else {
		return <article className="modal-container"></article>;
	}
};

export default Modal;
