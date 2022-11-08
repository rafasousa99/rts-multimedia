import React from "react";
import { Text } from "../components/Language";
import profileImage from "../images/profile/RafaelSousa.jpg";
import Contacts from "./Contacts";
const About = () => {
	return (
		<div className="container">
			<div className="about-me">
				<div className="col photo">
					<img src={profileImage} alt="Rafael Teixeira de Sousa" width="300px" heigth="auto" />
				</div>
				<div className="col text-me">
					<h2>
						<Text tid="this-is-me" />
					</h2>
					<p>
						<Text tid="me-profile1" />
					</p>
					<p>
						<Text tid="me-profile2" />
					</p>
					<p>
						<Text tid="questions" />
					</p>
				</div>
			</div>
			<Contacts />
			{/* 			<Link to="/" className="btn">
				Back Home
			</Link> */}
		</div>
	);
};

export default About;
