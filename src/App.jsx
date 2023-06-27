import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import IndexPage from "./pages/IndexPage";
import Table from "./examples/Table";
import PieChart from "./examples/PieChart";
import TestForm from "./examples/TestForm";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* without layout */}
				<Route index element={<IndexPage />} />
				{/* with layout */}
				<Route path="example/*" element={<Layout />}>
					<Route path="table" element={<Table />} />
					<Route path="pie" element={<PieChart />} />
					<Route path="form" element={<TestForm />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
