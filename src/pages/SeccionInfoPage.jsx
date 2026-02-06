import Footer from "../componentes/Footer";
import "../styles/seccionInfoPage.css";

import Navtae from "../componentes/Nav";

const SeccionInfoPage = () => {
  return (
    <>
        <Navtae
        items={[
          { nombre: "Inicio", href: "/" },
          { nombre: "Gimnasios", href: "/#gimnasios" },
        ]}
      />

      <main className="info-page-main">
        <section className="info-page-card">
            <div className="info-page-image">
          <img
            src="/imgs/seccion/Imagen.jpg"
            alt="Nuestra historia"
            loading="lazy"
          />
          </div>
        <div className="info-page-content">
          <p className="info-text">
  Esta sección está pensada para vos. Sí, para vos que decidiste dar el paso de
  entrenar, de superarte y de buscar tu mejor versión. El Taekwon-do no es solo
  un arte marcial: es un camino que te invita a descubrir tu fuerza interior, a
  enfrentar tus miedos y a transformar cada reto en una oportunidad para crecer.
  <br /><br />
  Aquí vas a encontrar palabras que te acompañen cuando la perseverancia parezca
  difícil, cuando la actitud positiva se ponga a prueba y cuando las ganas de
  progresar necesiten un empujón.
  <br /><br />
  Porque todos atravesamos momentos complicados, y lo importante no es cuántas
  veces caemos, sino cuántas veces decidimos levantarnos.
  <br /><br />
  Quiero que recuerdes algo importante: cada entrenamiento, cada esfuerzo y cada
  paso que das te acerca a tu mejor versión. El Taekwon-do te enseña que el
  verdadero triunfo está en superarte a vos mismo, en no rendirte y en mantener
  viva la pasión por seguir adelante.
  <br /><br />
  Este espacio es tuyo, para inspirarte, para motivarte y para recordarte que
  siempre podés más. Bienvenido al lugar donde el espíritu del Taekwon-do se
  convierte en tu motor de vida, dentro y fuera del tatami. ®
</p>

<span className="info-italic">
  <i>“El éxito y el fracaso recorren el mismo camino, la única diferencia es quién
  llega hasta el final.”</i>
</span>

<span className="info-signature">
  <em> G.M. Roberto J. Fernández </em>
</span>

<span className="info-signature">
 <em> Escuela Nacional de Taekwon-do (ENAT) </em>
</span>
</div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SeccionInfoPage;
