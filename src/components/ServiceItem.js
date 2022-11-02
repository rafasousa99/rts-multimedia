import React from "react";

const ServiceItem = ({ link, service }) => {
	return (
		<div className="service-container">
			<img src={link} alt={service}></img>
		</div>
	);
};

export default ServiceItem;
