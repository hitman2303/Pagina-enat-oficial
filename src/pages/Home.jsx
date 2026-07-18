import { Helmet } from "react-helmet-async";
import Navtae from "@/componentes/Nav";
import Header from "@/componentes/Header";
import Quienes from "../componentes/sections/Quienesomos";
import Gimnasio from "../componentes/sections/Gimnasio";
import FormularioContacto from "../componentes/sections/Contactanos";
import Footer from "@/componentes/Footer";
import SeccionInfoHome from "../componentes/sections/SeccionInfoHome";
import Gimnasios from "../data/gimnasios";

export default function Home() {

 const navItems = [
  { nombre: "¿Quiénes somos?", href: "#quienes-somos" },
  { nombre: "Nuestra historia", href: "#nuestra-historia" },
  { nombre: "Gimnasios", href: "#gimnasios" },
  { nombre: "Contáctanos", href: "#contacto" },
];
  return (
    <>
      <Helmet>
        <title>
          Escuela Nacional de Taekwon-Do ITF | Gimnasios y Clases en Buenos Aires
        </title>

        <meta
          name="keywords"
          content="
          Taekwon-Do ITF,
          ENAT,
          Escuela Nacional,
          Taekwondo Buenos Aires,
          clases de Taekwondo,
          gimnasios Taekwondo"
        />

        <meta
          property="og:title"
          content="Escuela Nacional de Taekwon-Do ITF"
        />

        <meta
          property="og:description"
          content="Encontrá tu gimnasio oficial ENAT más cercano."
        />
      </Helmet>

      <header>
      <Navtae items={navItems} />
        <Header />
      </header>

      <main>
        <section id="quienes-somos">
          <Quienes />
        </section>
        <section id="nuestra-historia">
          <SeccionInfoHome />
        </section>
        <section id="gimnasios">
          <h2 id="h2Gim">Nuestros gimnasios</h2>

          <div className="gimnasio-grid">
            {Gimnasios.map((g, index) => (
              <div
                key={g.slug}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Gimnasio gimnasio={g} />
              </div>
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
