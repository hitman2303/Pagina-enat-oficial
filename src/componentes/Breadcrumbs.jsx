import { Link } from "react-router-dom";
import "../styles/Breadcrumbs.css";
export default function Breadcrumbs({ gimnasio }) {
  return (
   <nav className="breadcrumbs" aria-label="Breadcrumb">
  <Link to="/">Inicio</Link>
  <span>/</span>
  <Link to="/#gimnasios">Gimnasios</Link>
  <span>/</span>
  <span>{gimnasio.nombre}</span>
</nav>

  );
}
