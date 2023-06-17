import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./layouts/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* without layout */}
				<Route exact path='/' element={<Index />} />
				{/* with layout */}
				<Route path="layout/*" element={<Layout />}>

				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
