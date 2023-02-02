import React from "react";

const Carrousel = ({
	pictures,
	title,
	id,
	setCurrentPicture,
	currentPicture,
}) => {

	const goToLeft = () => {
		// Si en cliquant le state currentPicture est à 0 alors on repasse currentPicture à "pictures.length - 1" sinon on descend le state de 1
		setCurrentPicture(
			currentPicture === 0 ? pictures.length - 1 : currentPicture - 1 // "pictures.length" -1 car l'index commence à 0
		);
	};

	const goToRight = () => {
		setCurrentPicture(
			// Si en cliquant le state de currentPicture est à "pictures.length - 1" alors on repasse à 0 sinon on monte le state de 1
			currentPicture === pictures.length - 1 ? 0 : currentPicture + 1
		);
	};

	return (
		<section className="carrousel">
			{pictures.map((picture, index) => (
				<div key={id + index}>
					{index === currentPicture && ( // currentPicture est initialisée à 0 sera donc affichée l'image avec index[0] (la première image)
						<img
							src={picture}
							alt={title}
							className="carrousel__image"
						/>
					)}
				</div>
			))}

			{pictures.length > 1 && ( // Affichage des flèches uniquement si le tableau "pictures" contient plus d'une image
				<i
					className="fa-solid fa-chevron-left carrousel__left-arrow"
					onClick={goToLeft}
				></i>
			)}

			{pictures.length > 1 && (
				<i
					className="fa-solid fa-chevron-right carrousel__right-arrow"
					onClick={goToRight}
				></i>
			)}

			<span className="carrousel__image-number">
				{currentPicture + 1} / {pictures.length}{" "}
				{/* Affichage du numéro de l'image courante ainsi que du nombre total d'images */}
			</span>
		</section>
	);
};

export default Carrousel;
