import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import services from "../utils/services.json";
import { StringOfText } from "../components/Language";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ServiceGalery(service) {
	const itemsPerPage = 3;

	const [index, setIndex] = useState(0);
	const [endOfSlice, setEndOfSlice] = useState(itemsPerPage);

	const serviceName = service.service;

	const newService = services.filter((typeOfService) => {
		return typeOfService.service === serviceName;
	});

	const lengthOfService = newService.length - 1;

	const prevBtn = () => {
		if (index === 0) {
			setIndex(lengthOfService);
			setEndOfSlice(lengthOfService + itemsPerPage);
		} else {
			setIndex(index - 1);
			setEndOfSlice(endOfSlice - 1);
		}
	};

	const nextBtn = () => {
		if (index === lengthOfService) {
			setIndex(0);
			setEndOfSlice(itemsPerPage);
		} else {
			setIndex(index + 1);
			setEndOfSlice(endOfSlice + 1);
		}
	};

	const showServiceCaroussel = newService.slice(index, endOfSlice);

	if (showServiceCaroussel.length == 2) {
		showServiceCaroussel.push(newService[0]);
	}
	if (showServiceCaroussel.length == 1) {
		showServiceCaroussel.push(newService[0], newService[1]);
	}

	return (
		<>
			<h3 className="title">{StringOfText(serviceName)}</h3>
			<div className="galery">
				<div className="galery-btn" id="align-right">
					<button className="arrow-btn" onClick={prevBtn}>
						<MdKeyboardArrowLeft />
					</button>
				</div>

				<div className="container" id="align-center">
					{showServiceCaroussel.map((design) => {
						return <ServiceItem key={design.id} {...design} />;
					})}
				</div>

				<div className="galery-btn">
					<button className="arrow-btn" onClick={nextBtn}>
						<MdKeyboardArrowRight />
					</button>
				</div>
			</div>
		</>
	);
}

export default ServiceGalery;
