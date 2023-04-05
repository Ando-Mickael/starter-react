import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views/Index'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
