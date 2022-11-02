import React from "react";
import { Link } from "react-router-dom";
import ServiceGalery from "../components/ServiceGalery";

const Services = () => {
	return (
		<div>
			<ServiceGalery service="photography" />
			<ServiceGalery service="video" />
			<ServiceGalery service="design" />
		</div>
	);
};

export default Services;
