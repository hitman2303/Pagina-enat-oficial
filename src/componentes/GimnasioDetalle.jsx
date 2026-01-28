import Carousel from "react-bootstrap/Carousel";
import "../styles/GimnasioPage.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function GimnasioDetalle({ gimnasio }) {
  return (
    <section className="gym-detail-container">
      <article className="gym-detail-card">

        {/* COLUMNA IZQUIERDA – CAROUSEL */}
        <div className="gym-detail-media">
    <Carousel fade>
      {gimnasio.imagenes.map((img, i) => (
        <Carousel.Item key={i}>
          <img src={img}  className="imgsCarrousel"alt={`Imagen ${i + 1} de ${gimnasio.nombre}`} 
            loading="lazy"
            decoding="async"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>

        {/* COLUMNA DERECHA – INFO */}
        <div className="gym-detail-body">
          <h2 className="gym-detail-title">{gimnasio.nombre}</h2>
          <p className="gym-detail-text">
            Nuestro gimnasio <strong>{gimnasio.nombre}</strong> está ubicado en{" "}
            <strong>{gimnasio.direccion}</strong> y forma parte de la Escuela
            Nacional de Taekwon-Do ITF.
          </p>
          <p className="gym-detail-inst">
            <strong>Instructores:</strong>{" "}
            {gimnasio.instructores.join(", ")}
          </p>

          {/* HORARIOS */}
          <div className="gym-detail-schedule">
            <h4 className="gym-detail-schedule-title">Días y horarios</h4>

            {Object.entries(gimnasio.horarios).map(([dia, clases]) => (
              <div className="gym-detail-schedule-day" key={dia}>
                <strong>{dia}</strong>
                <ul>
                  {clases.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* REDES */}
          <div className="gym-detail-socials">
          <h4>Visitá nuestras redes sociales</h4>
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

          </div>
           <section className="gym-map">
            <h4>¿Dónde estamos?</h4>

            <iframe
              src={gimnasio.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`Mapa de ${gimnasio.nombre}`}
            />
          </section>                
        </div>
      </article>
    </section>
  );
}
