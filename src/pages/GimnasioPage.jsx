import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Gimnasios from "../data/gimnasios";
import GimnasioDetalle from "../componentes/sections/GimnasioDetalle";
import Navtae from "@/componentes/layout/Nav";
import Footer from "@/componentes/layout/Footer";
import "../styles/GimnasioPage.css";
export default function GimnasioPage() {
  const { slug } = useParams();

  const gimnasio = Gimnasios.find(
    (g) => g && g.slug === slug
  );

  if (!gimnasio) {
    return <p>Gimnasio no encontrado</p>;
  }

  const pageTitle = `${gimnasio.nombre} | Escuela Nacional de Taekwon-Do ITF`;

  return (
    <>
      {/* SEO */}
      <Helmet>
    <meta
name="description"
content={`Conocé horarios, instructores y ubicación del gimnasio ${gimnasio.nombre}.`}
/>

<link
rel="canonical"
href={`https://escuelaenat.netlify.app/gimnasios/${gimnasio.slug}`}
/>

<meta
property="og:title"
content={gimnasio.nombre}
/>

<meta
property="og:description"
content={`Escuela Oficial de Taekwon-Do ITF ${gimnasio.nombre}`}
/>

<meta
property="og:image"
content={`https://escuelaenat.netlify.app${gimnasio.logo}`}
/>

<meta
property="og:type"
content="website"
/>

      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": gimnasio.nombre,
  "description": `Clases de Taekwondo ITF en ${gimnasio.nombre}`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": gimnasio.direccion,
    "addressLocality": gimnasio.localidad,
    "addressCountry": "AR"
  },
  "geo": gimnasio.geo && {
    "@type": "GeoCoordinates",
    "latitude": gimnasio.geo.lat,
    "longitude": gimnasio.geo.lng
  },
  "openingHoursSpecification": Object.entries(gimnasio.horarios).map(
    ([dia, clases]) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": dia,
      "opens": clases[0]?.split(" ")[0],
      "closes": clases[clases.length - 1]?.split(" ")[0]
    })
  ),
  "employee": gimnasio.instructores.map(nombre => ({
    "@type": "Person",
    "name": nombre
  })),
  "sameAs": Object.values(gimnasio.redes || {}),
  "url": `https://tusitio.com/gimnasios/${gimnasio.slug}`
})}
</script>
      <title>{pageTitle}</title>
      <meta name="description" content={`Descubrí ${gimnasio.nombre}, un gimnasio de Taekwon-Do ITF ubicado en ${gimnasio.direccion}. Conocé a nuestros instructores y horarios de clases.`} />
      </Helmet>

      {/* NAVBAR */}
      <Navtae
        items={[
          { nombre: "Inicio", href: "/" },
          { nombre: "Gimnasios", href: "/#gimnasios" },
        ]}
      />

      {/* CONTENIDO */}
      <main>
        <GimnasioDetalle gimnasio={gimnasio} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
