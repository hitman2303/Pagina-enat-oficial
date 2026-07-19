import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GimnasioPage from "./pages/GimnasioPage";
import ScrollToTop from "./componentes/ScrollToTop";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gimnasios/:slug" element={<GimnasioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;