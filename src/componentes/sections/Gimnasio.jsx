import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import SocialLinks from "../SocialLinks";
import Horarios from "../Horarios";
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
      <meta
  itemProp="name"
  content={gimnasio.nombre}
/>

<meta
  itemProp="description"
  content={`Escuela oficial de Taekwon-Do ITF ${gimnasio.nombre}`}
/>

<meta
  itemProp="image"
  content={gimnasio.logo}
/>

<meta
  itemProp="url"
  content={`https://escuelaenat.netlify.app/gimnasios/${gimnasio.slug}`}
/>
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
      <section className="gym-info"
      itemProp="address"
    itemScope
    itemType="https://schema.org/PostalAddress"
      >
        <p itemProp="streetAddress"> 
          <strong>Dirección:</strong>{" "}
          <span itemProp="streetAddress">{gimnasio.direccion}</span>
        </p>

       <div>
            <h4>Profesores</h4>
            <ul>
              {gimnasio.instructores.map((p, index) => (
                <li key={p} itemProp="employee">
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
         onClick={() => setOpen(prev => !prev)}
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
        <Horarios horarios={gimnasio.horarios} />
          </div>

          </div>
          <h4 className="social-title">Visitá nuestras redes</h4>
          <SocialLinks redes={gimnasio.redes} />


          <Link aria-label={`Ver información completa de ${gimnasio.nombre}`}
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