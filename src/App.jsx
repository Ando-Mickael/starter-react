import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Index />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
