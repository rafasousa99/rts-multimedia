import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import services from "../utils/services.json";
import { Text } from "../components/Language";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ServiceGalery(service) {
	const [index, setIndex] = useState(0);
	const itemsPerPage = 3;
	const pages = Math.ceil(services.length / itemsPerPage);

	const serviceName = service.service;

	const prevBtn = () => {
		if (index === 0) {
			setIndex(pages - 1);
		} else {
			setIndex((index) => {
				let newIndex = index - 1;
				return newIndex;
			});
		}
	};
	const nextBtn = () => {
		if (index === pages - 1) {
			setIndex(0);
		} else {
			setIndex((index) => {
				let newIndex = index + 1;
				return newIndex;
			});
		}
	};

	const newService = Array.from({ length: pages }, (_, index) => {
		const start = index * itemsPerPage;
		return services
			.filter((typeOfService) => {
				return typeOfService.service === service.service;
			})
			.slice(start, start + itemsPerPage);
	});

	return (
		<>
			<h3 className="title">{serviceName}</h3>
			<div className="galery">
				<div className="galery-btn" id="align-right">
					<button className="arrow-btn" onClick={prevBtn}>
						<MdKeyboardArrowLeft />
					</button>
				</div>

				<div className="container" id="align-center">
					{newService[index].map((design) => {
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
