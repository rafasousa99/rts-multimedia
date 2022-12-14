import React from "react";
import { useGlobalContext } from "../context";
import LanguageSelector from "../utils/LanguageSelector";
import navIcon from "../images/logos/RTS-icon-small.png";
import { Link } from "react-router-dom";
import { Text } from "../components/Language";
import Switch from "react-switch";
import { useState } from "react";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
	const { toggleTheme, theme } = useGlobalContext();

	useEffect(() => {
		if (theme === "light-theme") {
			setChecked(false);
		} else {
			setChecked(true);
		}
	}, []);

	const [checked, setChecked] = useState(false);

	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
		toggleTheme();
	};

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

				<Switch
					onChange={handleChange}
					onClick={toggleTheme}
					checked={checked}
					className="react-switch"
					onColor="#00aee3"
					offColor="#004054"
					checkedIcon={<FaMoon className="icons-toggle" />}
					uncheckedIcon={<FaSun className="icons-toggle" />}
				/>

				<LanguageSelector />
			</div>
		</nav>
	);
};

export default Navbar;
