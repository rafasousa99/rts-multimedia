import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
		<AppContext.Provider value={{ name, handleChange, theme, setTheme, toggleTheme }}>{children}</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
