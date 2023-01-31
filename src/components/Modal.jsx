import React from "react";

const Modal = () => {

    const modalPreview = () => {
		document.querySelector(".modal-container").classList.toggle("active");
	};

	return (
		<article className="modal-container">
			<div className="modal-container__overlay" onClick={modalPreview}></div>
			<div className="modal-container__modal">
				<button className="close-modal" onClick={modalPreview}>
					X
				</button>
				<h1>Test</h1>
			</div>
		</article>
	);
};

export default Modal;
