import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";
AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);