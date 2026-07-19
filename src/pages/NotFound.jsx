import { Link } from "react-router-dom";
import Navtae from "../componentes/layout/Nav";
import Footer from "../componentes/layout/Footer";
import "../styles/NotFound.css";
export default function NotFound() {

  const items = [
    { nombre: "Inicio", href: "/" }
  ];

  return (
    <>
      <Navtae items={items} />

      <main className="not-found">

        <h1>404</h1>

        <h2>Página no encontrada</h2>

        <p>
          La página que intentás visitar no existe o fue movida.
        </p>

        <Link to="/" className="btn primary">
          Volver al inicio
        </Link>

      </main>

      <Footer />
    </>
  );
}