import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const About = () => {
	return (
		<div className="container">
			<h2>About Page</h2>
			<Link to="/" className="btn">
				Back Home
			</Link>
		</div>
	);
};

export default About;
