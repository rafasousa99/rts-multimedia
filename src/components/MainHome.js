import React from "react";
import { useState, useEffect } from "react";
import { Text } from "../components/Language";
import mainImage from "../images/logos/RTS-big.png";
import { useGlobalContext } from "../context";

const MainHome = () => {
	const { name } = useGlobalContext();
	const [userName, setUserName] = useState("");
	useEffect(() => {
		if (name) {
			setUserName(`, ${name}!`);
		} else if (!name) {
			setUserName("!");
		}
	}, name);

	return (
		<div className="main-home">
			<div className="col">
				<img src={mainImage} alt="Rafael Teixeira de Sousa" width="300px" heigth="auto" />
			</div>
			<div className="col">
				<h1>
					<Text tid="hi" />
					{userName}
				</h1>
				<h3>
					<Text tid="help" />
				</h3>
				<div className="row-services">
					<button className="main-btn">
						<Text tid="photography" />
					</button>
					<button className="main-btn">
						<Text tid="video" />
					</button>
					<button className="main-btn">
						<Text tid="design" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainHome;
