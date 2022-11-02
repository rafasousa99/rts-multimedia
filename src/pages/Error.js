import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Error = () => {
	return (
		<div className="container">
			<h2>Error Page</h2>
			<Link to="/" className="btn">
				Back Home
			</Link>
		</div>
	);
};

export default Error;
