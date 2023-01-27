import React, { useEffect, useState } from "react";
import photoMSColor from "../assets/img/logo.png";
import SocialNetworks from "./SocialNetworks";

const Header = () => {

	const [isOpen, setIsOpen] = useState();

	useEffect(() => {
		setIsOpen(false);

		const headerNav = document.querySelector("#header-nav");

		let lastScroll = 0;

		window.addEventListener("scroll", () => {
			if (window.scrollY < lastScroll) {
				headerNav.style.top = 0 + "px";
			} else {
				headerNav.style.top = -100 + "px";
			}
			lastScroll = window.scrollY;
		});
	}, []);

	
	const toogle = () => {
		
		const navContent = document.querySelector(".navContent");
		const responsiveNavToggle =
			document.querySelectorAll(".responsiveNav div");

		if (isOpen === false) {
			navContent.style.transform = "translateX(-800px)";
			responsiveNavToggle.forEach((bar) => bar.classList.add("active"));

		} else {
			navContent.style.transform = "none";
			responsiveNavToggle.forEach((bar) => bar.classList.remove("active"));
		}
	};

	window.addEventListener("scroll", () => {
		if (isOpen === true && window.innerWidth <= 768) {
			navContent.style.transform = "none";
			setIsOpen(false);
		} else {
			null;
		}
	});

	return (
		<header>
			<div id="header-nav">
				<div className="header-nav__logo">
					<a href="/">
						<img src={photoMSColor} alt="Photo-logo-accueil" />
					</a>
				</div>
				<div
					className="responsiveNav"
					onClick={() => {
						setIsOpen(!isOpen);
						toogle();
					}}
				>
					<div id="div1"></div>
					<div id="div2"></div>
					<div id="div3"></div>
				</div>
				<nav>
					<div className="navContent">
						<ul>
							<li>
								<a href="/#about">Présentation</a>
							</li>
							<li>
								<a href="#formation">Formation</a>
							</li>
							<li>
								<a href="#projets">Projets</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
						<div className="cv">
							<a href="#cv">Télécharger mon CV</a>
						</div>
					</div>
				</nav>
			</div>

			<section>
				<div>
					<h1>Développeur Front-end </h1>
					<h2>
						Jeune développeur en constante évolution pour vos
						projets...
					</h2>
					<a href="#contact" className="btn">
						Contactez moi
					</a>
				</div>
				<span>
					<a href="#about">
						<i className="fa-solid fa-arrow-down"></i>
					</a>
				</span>
			</section>

			<SocialNetworks />
		</header>
	);
};

export default Header;
