import React, { useEffect, useState } from "react";
import LogoSite from "../assets/img/logo.webp";
import SocialNetworks from "./SocialNetworks";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const headerNav = document.querySelector("#header-nav");
		const navResponsive = document.querySelector(".nav-responsive");
		const toggleButtonBars = document.querySelectorAll(".toggleButton div");
		let lastScroll = 0;

		window.addEventListener("scroll", () => {

			if (window.scrollY < lastScroll) {
				headerNav.style.top = 0 + "px";
				
			} else {
				headerNav.style.top = -110 + "px";
				navResponsive.style.transform = "translateX(800px)";
				toggleButtonBars.forEach((bar) =>
					bar.classList.remove("active")
				);
				setIsOpen(false);
			}
			lastScroll = window.scrollY;
		});
	}, []);

	const toogle = () => {
		const toggleButtonBars = document.querySelectorAll(".toggleButton div");
		const navResponsive = document.querySelector(".nav-responsive");

		if (isOpen === false) {
			navResponsive.style.transform = "none";
			toggleButtonBars.forEach((bar) => bar.classList.add("active"));
		} else {
			navResponsive.style.transform = "translateX(800px)";
			toggleButtonBars.forEach((bar) => bar.classList.remove("active"));
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

				<nav className="nav">
					<div className="nav__content">
						<ul>
							<li>
								<a href="../#about">Présentation</a>
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
							<a
								href="./src/assets/cv.pdf"
								// download="CV-Mathieu_SEGAUD"
							>
								<i className="fa-solid fa-download"></i>
								mon CV
							</a>
						</div>
					</div>
				</nav>

				<div
					className="toggleButton"
					onClick={() => {
						setIsOpen(!isOpen);
						toogle();
					}}
				>
					<div id="div1"></div>
					<div id="div2"></div>
					<div id="div3"></div>
				</div>

				<nav className="nav-responsive">
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
						<div className="cv">
							<a
								href="./src/assets/cv.pdf"
							>
								<i className="fa-solid fa-download"></i>
								Télécharger mon CV
							</a>
						</div>
					</ul>
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
					<i className="fa-solid fa-arrow-down"></i>
				</span>
			</section>

			<SocialNetworks />
		</header>
	);
};

export default Header;
