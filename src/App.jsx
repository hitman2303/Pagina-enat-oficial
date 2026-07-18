import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GimnasioPage from "./pages/GimnasioPage";
import SeccionInfoPage from "./pages/SeccionInfoPage";
import "./styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gimnasios/:slug" element={<GimnasioPage />} />
        <Route path="/nuestra-historia" element={<SeccionInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;