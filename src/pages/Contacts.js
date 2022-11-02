import React from "react";
import { useState } from "react";
import { Text } from "../components/Language";

const Contacts = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");

	const handleChange = (e) => {
		const targetValue = e.target.value;
		if (e.target.id == "name") {
			setName(targetValue);
		} else if (e.target.id == "email") {
			setEmail(targetValue);
		} else if (e.target.id == "message") {
			setMessage(targetValue);
		} else if (e.target.id == "services") {
			setService(targetValue);
		}
	};

	const clickSubmit = (e) => {
		alert(`Name: ${name} | Email: ${email} | Service: ${service} | Message: "${message}"`);
	};

	return (
		<div className="container">
			<h1>
				<Text tid="contact-me" />
			</h1>
			<p>
				<Text tid="more-info" />
			</p>
			<div className="contact-form">
				<div className="row-form">
					<div className="col-form">
						<label for="name">
							<h2>
								<Text tid="form-name" />
							</h2>
						</label>
						<input
							type="text"
							id="name"
							name="firstname"
							onChange={handleChange}
							placeholder="Your name..."
							value={name}
						/>
					</div>
					<div className="col-form">
						<label for="email">
							<h2>
								<Text tid="form-email" />
							</h2>
						</label>
						<input
							type="text"
							id="email"
							name="email"
							onChange={handleChange}
							placeholder="Your email.."
							value={email}
						/>
					</div>
				</div>

				<div className="row-form">
					<div className="col-form">
						<label for="message">
							<h2>
								<Text tid="form-message" />
							</h2>
						</label>
						<textarea
							className="message-form"
							id="message"
							onChange={handleChange}
							placeholder="/ Optional /"
							value={message}
						></textarea>
					</div>
					<div className="col-form">
						<label for="service">
							<h2>
								<Text tid="form-service" />
							</h2>
						</label>
						<select id="services" name="services" onChange={handleChange} className="btn-main">
							<option value="" disabled selected>
								/ Select /
							</option>
							<option value="photography">photography</option>
							<option value="video">Video</option>
							<option value="design">Design</option>
							<option value="other">Other</option>
						</select>
					</div>
					<input type="submit" value="Submit" className="main-btn form-btn" onClick={clickSubmit} />
				</div>
			</div>
		</div>
	);
};

export default Contacts;
