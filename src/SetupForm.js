import React from "react";
import { useGlobalContext } from "./context";
import LanguageSelector from "./utils/LanguageSelector";
import { Text } from "./components/Language";

const SetupForm = (props) => {
	const { name, handleChange } = useGlobalContext();

	return (
		<main className="setup-form">
			<form>
				<LanguageSelector />
				<p>
					<Text tid="experience" />
				</p>
				<h1>
					<Text tid="name" />
				</h1>
				<input type="text" name="name" id="name" value={name} onChange={handleChange}></input>
				<button type="submit" onClick={props.submit} className="main-btn">
					<Text tid="lets-go" />
				</button>
			</form>
		</main>
	);
};

export default SetupForm;
