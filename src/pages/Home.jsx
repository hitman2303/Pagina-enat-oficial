import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

import Navtae from "../componentes/Nav";
import Header from "../componentes/header";
import Quienes from "../componentes/Quienesomos";
import Gimnasio from "../componentes/Gimnasio";
import FormularioContacto from "../componentes/contactanos";
import Footer from "../componentes/Footer";

import Gimnasios from "../data/gimnasios";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const items = [
    { nombre: "¿Quiénes somos?", href: "#quienes-somos" },
    { nombre: "Gimnasios", href: "#gimnasios" },
    { nombre: "Contáctanos", href: "#contacto" }
  ];

  return (
    <>
      <Helmet>
        <title>
          Escuela Nacional de Taekwon-Do ITF | Gimnasios y Clases en Buenos Aires
        </title>

        <meta
          name="description"
          content="Encontrá gimnasios oficiales de Taekwon-Do ITF de la Escuela Nacional ENAT."
        />
      </Helmet>

      <header>
        <Navtae items={items} />
        <Header />
      </header>

      <main>
        <section id="quienes-somos">
          <Quienes />
        </section>

        <section id="gimnasios">
          <h2 id="h2Gim">Nuestros gimnasios</h2>

          <div className="gimnasio-grid">
            {Gimnasios.map((g) => (
              <Gimnasio key={g.slug} gimnasio={g} />
            ))}
          </div>
        </section>

        <section id="contacto">
          <FormularioContacto />
        </section>
      </main>

      <Footer />
    </>
  );
}
