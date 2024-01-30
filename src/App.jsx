import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
