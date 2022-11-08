import React from "react";
import ServiceGalery from "../components/ServiceGalery";
import { useState, useEffect, useRef } from "react";
import { Text } from "../components/Language";
import mainImage from "../images/logos/RTS-big.png";
import { useGlobalContext } from "../context";

const Home = () => {
	const { name } = useGlobalContext();
	const [userName, setUserName] = useState("");
	const photography = useRef();
	const video = useRef();
	const design = useRef();

	useEffect(() => {
		if (name) {
			setUserName(`, ${name}!`);
		} else if (!name) {
			setUserName("!");
		}
	}, []);

	function handleClickBtn(e) {
		let target = e.target.title;
		console.log(target);
		if (target == "photography") {
			photography.current.scrollIntoView({ behavior: "smooth" });
		} else if (target == "video") {
			video.current.scrollIntoView({ behavior: "smooth" });
		} else if (target == "design") {
			design.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<>
			<div className="container">
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
							<button className="main-btn" onClick={handleClickBtn} title="photography">
								<Text tid="photography" />
							</button>
							<button className="main-btn" onClick={handleClickBtn} title="video">
								<Text tid="video" />
							</button>
							<button className="main-btn" onClick={handleClickBtn} title="design">
								<Text tid="design" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div ref={photography}>
				<ServiceGalery service="photography" />
			</div>
			<div ref={video}>
				<ServiceGalery service="video" />
			</div>
			<div ref={design}>
				<ServiceGalery service="design" />
			</div>
		</>
	);
};

export default Home;
