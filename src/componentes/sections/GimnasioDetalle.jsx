import Carousel from "react-bootstrap/Carousel";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import SocialLinks from "../SocialLinks";
import Horarios from "../Horarios";
export default function GimnasioDetalle({ gimnasio }) {
  return (
    <section className="gym-detail-container">
      <article className="gym-detail-card" itemScope
itemType="https://schema.org/SportsActivityLocation" data-aos="fade-up">
  <meta
itemProp="name"
content={gimnasio.nombre}
/>

<meta
itemProp="image"
content={gimnasio.logo}
/>

<meta
itemProp="url"
content={`https://escuelaenat.netlify.app/gimnasios/${gimnasio.slug}`}
/>

<meta
itemProp="description"
content={`Escuela oficial de Taekwon-Do ITF ${gimnasio.nombre}`}
/>

        {/* COLUMNA IZQUIERDA – CAROUSEL */}
        <div className="gym-detail-media"  data-aos="fade-right"
    data-aos-delay="150">
    <Carousel fade interval={4500}
        pause={false}
        touch
        keyboard
        >

      {gimnasio.imagenes.map((img, i) => (
        <Carousel.Item key={img}>
          <img src={img}  className="imgsCarrousel"alt={`Imagen ${i + 1} de ${gimnasio.nombre}` } 
            loading={i === 0 ? "eager" : "lazy"}
fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>

        {/* COLUMNA DERECHA – INFO */}
        <div className="gym-detail-body"   data-aos="fade-left"
    data-aos-delay="250">
          <h2 className="gym-detail-title">{gimnasio.nombre}</h2>
          <p className="gym-detail-text">
            Nuestro gimnasio <strong>{gimnasio.nombre}</strong> está ubicado en{" "}
            <strong>{gimnasio.direccion}</strong> y forma parte de la Escuela
            Nacional de Taekwon-Do ITF.
          </p>
          <ul className="gym-detail-inst">
            <strong>Instructores:</strong>{" "}
            {gimnasio.instructores.join(", ")}
          </ul>

          {/* HORARIOS */}
          <div className="gym-detail-schedule">
            <h4 className="gym-detail-schedule-title">Días y horarios</h4>

           <Horarios horarios={gimnasio.horarios} />
          </div>

          {/* REDES */}
          <div className="gym-detail-socials">
          <h4>Visitá nuestras redes sociales</h4>
          <SocialLinks redes={gimnasio.redes} />

          </div>
           <section className="gym-map"    data-aos="zoom-in"
    data-aos-delay="300">
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
