import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GimnasioPage from "./pages/GimnasioPage";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/gimnasios/:slug" element={<GimnasioPage />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
