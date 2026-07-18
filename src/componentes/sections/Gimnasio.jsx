import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Gimnasio({ gimnasio }) {
  const [open, setOpen] = useState(false);

  const articleId = `gimnasio-${gimnasio.nombre
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <article
      className="gym-card"
      id={articleId}
      itemScope
      itemType="https://schema.org/SportsActivityLocation"
    >
      {/* HEADER DEL GIMNASIO */}
      <header className="gym-header">
        <img
          src={gimnasio.logo}
          alt={`Logo del gimnasio ${gimnasio.nombre} de Taekwon-Do ITF`}
          loading="lazy"
          itemProp="logo"
        />

        <div>
          {/* H3 porque el H2 ya está en la sección "Gimnasios" */}
          <h3 itemProp="name">{gimnasio.nombre}</h3>

          <p className="gym-zone" itemProp="address">
            {gimnasio.zona}
          </p>
        </div>
      </header>

      {/* INFORMACIÓN PRINCIPAL */}
      <section className="gym-info">
        <p>
          <strong>Dirección:</strong>{" "}
          <span itemProp="streetAddress">{gimnasio.direccion}</span>
        </p>

       <div>
            <h4>Profesores</h4>
            <ul>
              {gimnasio.instructores.map((p, index) => (
                <li key={index} itemProp="employee">
                  {p}
                </li>
              ))}
            </ul>
          </div>
      </section>

      {/* ACCIONES */}
      <section className="gym-actions">
        {gimnasio.maps && (
          <a
            href={gimnasio.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
            aria-label={`Ver ubicación de ${gimnasio.nombre} en Google Maps`}
            itemProp="hasMap"
          >
            Ver ubicación
          </a>
        )}

        <button
          className="btn primary"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`${articleId}-detalles`}
        >
          {open ? "Ocultar información" : "Ver horarios y redes"}
        </button>
      </section>

      {/* DETALLES EXPANDIBLES */}
      {open && (
        <section
          id={`${articleId}-detalles`}
          className="gym-extra"
        >
          <div>
            <div>
  <h4>Horarios de clases</h4>

  {Object.entries(gimnasio.horarios).map(([dia, clases]) => (
    <div key={dia} className="gym-day">
      <strong>{dia}</strong>
      <ul>
        {clases.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

          </div>
          <h4 className="social-title">Visitá nuestras redes</h4>
<nav className="gym-socials" aria-label="Redes sociales del gimnasio">
  {gimnasio.redes?.whatsapp && (
    <a href={gimnasio.redes.whatsapp} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp /> 
    </a>
  )}

  {gimnasio.redes?.instagram && (
    <a href={gimnasio.redes.instagram} target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  )}

  {gimnasio.redes?.facebook && (
    <a href={gimnasio.redes.facebook} target="_blank" rel="noopener noreferrer">
      <FaFacebook />
    </a>
  )}

  {gimnasio.redes?.tiktok && (
    <a href={gimnasio.redes.tiktok} target="_blank" rel="noopener noreferrer">
      <FaTiktok />
    </a>
  )}
</nav>


          <Link
  to={`/gimnasios/${gimnasio.slug}`}
  className="btn primary"
>
  Ver ficha completa
</Link>

        </section>
      )}
    </article>
  );
}