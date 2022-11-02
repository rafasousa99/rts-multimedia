import React from "react";
import LanguageSelector from "../utils/LanguageSelector";
import navIcon from "../images/logos/RTS-icon-small.png";
import { Link } from "react-router-dom";
import { Text } from "../components/Language";

const Navbar = () => {
	return (
		<nav className="navbar container">
			<Link to="/">
				<img src={navIcon} width="50px" height="auto" />
			</Link>
			<div className="action-btns">
				<Link to="/about">
					<Text tid="about" />
				</Link>

				<Link to="/services">
					<Text tid="services" />
				</Link>

				<Link to="/contacts">
					<Text tid="contacts" />
				</Link>

				<LanguageSelector />
			</div>
		</nav>
	);
};

export default Navbar;
