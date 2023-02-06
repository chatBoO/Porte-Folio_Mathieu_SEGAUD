import React, { useEffect, useState } from "react";
import LogoSite from "../assets/img/logo.webp";
import SocialNetworks from "./SocialNetworks";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const headerNav = document.querySelector("#header-nav");
		let lastScroll = 0;

		window.addEventListener("scroll", () => {
			if (window.scrollY < lastScroll) {
				headerNav.style.top = 0 + "px";
			} else {
				headerNav.style.top = -110 + "px";
			}
			lastScroll = window.scrollY;
		});
	}, []);

	const toogle = () => {
		const responsiveNavToggle =
			document.querySelectorAll(".responsiveNav div");
		const navContent = document.querySelector(".navContent");

		if (isOpen === false) {
			navContent.style.transform = "translateX(-800px)";
			responsiveNavToggle.forEach((bar) => bar.classList.add("active"));
		} else {
			navContent.style.transform = "none";
			responsiveNavToggle.forEach((bar) =>
				bar.classList.remove("active")
			);
		}
	};

	return (
		<header>
			<div id="header-nav">
				<div className="header-nav__logo">
					<a href="/">
						<img src={LogoSite} alt="Photo-logo-accueil" />
					</a>
				</div>

				<h2 className="header-nav__menu">MENU</h2>

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
								<a href="#myProjects">Projets</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
						<div className="cv">
							<a href="#cv">
								<i className="fa-solid fa-download"></i>
								Télécharger mon CV
							</a>
						</div>
					</div>
				</nav>
			</div>

			<section>
				<div>
					<h1>Développeur web junior Front-end</h1>
					<h2>En constante évolution pour vos projets...</h2>
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
