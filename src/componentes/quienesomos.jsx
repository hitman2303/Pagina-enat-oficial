import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/quienes.css";

function Quienes() {
  return (
    <section className="quienes-container">
     <section className="quienes-wrapper">


      <article className="card-quienes">

        {/* IMAGEN */}
        <div className="quienes-media">
          <Carousel fade interval={3500} controls indicators={false}>
            <Carousel.Item>
              <img src="/imgs/foto.jpeg" alt="Escuela ENAT" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/2.jpeg" alt="Clase de Taekwon-Do" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/imgs/3.jpeg" alt="Alumnos ENAT" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* TEXTO */}
        <div className="quienes-body">
          <h2 className="quienes-title">¿Quiénes Somos?</h2>

          <p className="quienes-text">
            Somos la <strong>Escuela Nacional de Taekwon-do</strong>, miembros de la
            Asociación Enrique Eiriz y de ITF Unión.
            <br /><br />
            Promovemos los valores del Taekwon-Do tradicional con disciplina,
            respeto y compromiso, formando artistas marciales íntegros.
            <br /><br />
            <strong>Te invitamos a ser parte de nuestra familia.</strong>
          </p>
        </div>

      </article>
</section>
    </section>
  );
}

export default Quienes;
