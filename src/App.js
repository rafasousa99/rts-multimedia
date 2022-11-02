import React from "react";
import { useGlobalContext } from "./context";
import { LanguageProvider } from "./components/Language";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LanguageSelector from "./utils/LanguageSelector";
import { Text } from "./components/Language";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import TestPage from "./pages/TestPage";
import Error from "./pages/Error";
import SetupForm from "./SetupForm";

function App() {
	const { waiting, error } = useGlobalContext();
	if (waiting) {
		return <SetupForm />;
	}
	return (
		<LanguageProvider>
			<BrowserRouter className="navbar container">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="services" element={<Services />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="test" element={<TestPage />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</LanguageProvider>
	);
}

export default App;
