import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [error, setError] = useState(false);
	const [name, setName] = useState("");

	const getStorageTheme = () => {
		let theme = "light-theme";
		if (localStorage.getItem("theme")) {
			theme = localStorage.getItem("theme");
		}
		return theme;
	};

	const [theme, setTheme] = useState(getStorageTheme());

	const handleChange = (e) => {
		const targetValue = e.target.value;
		setName(targetValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setWaiting(false);
	};

	function toggleTheme() {
		if (theme === "light-theme") {
			setTheme("dark-theme");
			console.log(theme);
		} else {
			setTheme("light-theme");
			console.log(theme);
		}
	}

	return (
		<AppContext.Provider value={{ waiting, error, name, handleChange, handleSubmit, theme, setTheme, toggleTheme }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
