import React from "react";
import MainHome from "../components/MainHome";
import ServiceGalery from "../components/ServiceGalery";

const Home = () => {
	return (
		<>
			<div className="container">
				<MainHome />
			</div>
			<ServiceGalery service="photography" />
			<ServiceGalery service="video" />
			<ServiceGalery service="design" />
		</>
	);
};

export default Home;
