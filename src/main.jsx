import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
