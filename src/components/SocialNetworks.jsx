import React from 'react'

const SocialNetworks = () => {
  return (
		<article className="social-networks">
			<p>Retrouvez moi...</p>
			<ul>
				<li>
					<a href="https://github.com/chatBoO">
						<i className="fa-brands fa-github"></i>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/mathieu.segaud/">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/chatBoO_03">
						<i className="fa-brands fa-twitter"></i>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/mathieu-segaud-272492165/">
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</li>
			</ul>
		</article>
  );
}

export default SocialNetworks