import React from "react";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { Text } from "../components/Language";

const Footer = () => {
	return (
		<div className="footer">
			<div className="social-icons">
				<a href="https://www.instagram.com/rafael_tsousa/" target="_blank">
					<FaInstagram />
				</a>
				<a href="https://www.behance.net/rafaelsousa38" target="_blank">
					<FaBehance />
				</a>
				<a href="https://www.linkedin.com/in/rts-multimedia/" target="_blank">
					<FaLinkedinIn />
				</a>
			</div>
			<p className="footer-text">
				© 2022 Rafael Sousa. <Text tid="copyright" />
			</p>
		</div>
	);
};

export default Footer;
