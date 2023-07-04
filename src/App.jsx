import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<IndexPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
