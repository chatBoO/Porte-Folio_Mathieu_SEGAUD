import React, { useEffect, useState } from "react";
import LeftArrow from "../assets/img/left_arrow.png";
import RightArrow from "../assets/img/right_arrow.png";

const Carrousel = () => {
	const [currentPicture, setCurrentPicture] = useState(0);

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
				<img
					src={LeftArrow}
					alt="Flèche gauche"
					className="carrousel__left-arrow"
					onClick={goToLeft}
				/>
			)}

			{pictures.length > 1 && (
				<img
					src={RightArrow}
					alt="flèche droite"
					className="carrousel__right-arrow"
					onClick={goToRight}
				/>
			)}

			<span className="carrousel__image-number">
				{currentPicture + 1} / {pictures.length}{" "}
				{/* Affichage du numéro de l'image courante ainsi que du nombre total d'images */}
			</span>
		</section>
	);
};

export default Carrousel;
