import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Home";

const App = () => {
	return (
		<BrowserRouter>
    <Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
	<Footer />
		</BrowserRouter>
	);
};

export default App;
