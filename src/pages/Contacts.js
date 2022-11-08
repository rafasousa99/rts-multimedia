import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, StringOfText } from "../components/Language";

const Contacts = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [service, setService] = useState("");

	// const [changeName, setChangeName] = useState("");

	// setChangeName(languageContext.dictionary);
	// console.log(changeName);

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
		setName("");
		setEmail("");
		setMessage("");
		setService("");
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
							placeholder={StringOfText("form-y-name")}
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
							placeholder={StringOfText("form-y-email")}
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
							placeholder={StringOfText("form-optional")}
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
								{StringOfText("select")}
							</option>
							<option value="photography">{StringOfText("photography")}</option>
							<option value="video">{StringOfText("video")}</option>
							<option value="design">{StringOfText("design")}</option>
							<option value="other">{StringOfText("other")}</option>
						</select>
					</div>
					<input
						type="submit"
						value={StringOfText("form-submit")}
						className="main-btn form-btn"
						onClick={clickSubmit}
					/>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
