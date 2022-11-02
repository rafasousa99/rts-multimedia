import React from "react";
import Navbar from "../components/Navbar";
import { Text } from "../components/Language";

const TestPage = () => {
	return (
		<div className="container">
			<h1>
				<Text tid="title" />
			</h1>
			<h3>
				<Text tid="sub-title" />
			</h3>
			<br></br>
			<div style={{ maxWidth: "700px" }}>
				<h2>
					<Text tid="text-title" />
				</h2>
				<p className="text">
					<Text tid="text-content" />
				</p>
				<p className="legend">
					<Text tid="text-legend" />
				</p>
			</div>
		</div>
	);
};

export default TestPage;
