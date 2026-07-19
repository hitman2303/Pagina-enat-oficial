import { Link } from "react-router-dom";
import "../../styles/SeccionInfoHome.css";

const SeccionInfoHome = () => {
  return (
    <section className="info-home-section">
      <div className="info-home-container">
        
        <div className="info-home-image" data-aos="fade-right">
          <Link to="/nuestra-historia">
            <img
              src="/imgs/seccion/Imagen1.WebP"
              alt="Nuestra historia"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="info-home-content"  data-aos="fade-left"
data-aos-delay="200">
          <h2 className="info-title">Mas allá de la técnica</h2>
          <p className="info-text">
            {/** TU TEXTO ACÁ */}
           Esta sección está pensada para vos. Sí, para vos que decidiste dar el paso de entrenar, de superarte y de buscar tu mejor versión. 
          </p>

          <Link to="/nuestra-historia" className="info-home-btn">
            Ver más
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SeccionInfoHome;
