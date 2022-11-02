import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [error, setError] = useState(false);
	const [name, setName] = useState("");

	const handleChange = (e) => {
		const targetValue = e.target.value;
		setName(targetValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setWaiting(false);
	};

	return (
		<AppContext.Provider value={{ waiting, error, name, handleChange, handleSubmit }}>{children}</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
