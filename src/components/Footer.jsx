import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
		<footer>
			<div className="footer-container">
				<div className="footer-container__copyright">
					<p>
						<i className="fa-regular fa-copyright"></i> {currentYear} Mathieu
						Segaud
					</p>
				</div>
				<div className="footer-container__social-network">
					<ul>
						<li>
							<a href="https://github.com/chatBoO">
								<i className="fa-brands fa-github"></i>
								<p>github</p>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/mathieu.segaud/">
								<i className="fa-brands fa-instagram"></i>
								<p>instagram</p>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/chatBoO_03">
								<i className="fa-brands fa-twitter"></i>
								<p>tweeter</p>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/mathieu-segaud-272492165/">
								<i className="fa-brands fa-linkedin"></i>
								<p>linkedin</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
  );
}

export default Footer