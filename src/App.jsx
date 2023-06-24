import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./pages/IndexPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* without layout */}
				<Route index element={<IndexPage />} />
				{/* with layout */}
				<Route path="layout/*" element={<Layout />}>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
