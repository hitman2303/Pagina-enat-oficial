const Footer = () => {
  return (
<footer className="footer d-flex justify-content-between align-items-center flex-wrap px-4 py-3" data-aos="fade-up" aria-label="Pie de pagina">
  <div className="footer-column">
    <h4>Secciones</h4>
    <ul>
      <li><a href="#quienes-somos">¿Quiénes Somos?</a></li>
      <li><a href="#gimnasios">Gimnasios</a></li>
      <li><a href="#contacto">Contáctanos</a></li>

    </ul>
  </div>

  <div className="footer-column text-center">
    <img src="/imgs/logos/escudo de la enat.WebP" alt="Logo ENAT" className="footer-logo" loading="lazy" />
  </div>

  <div className="footer-column text-end text-md-end w-100 w-md-auto mt-3 mt-md-0">
    <p className="mb-0">© {new Date().getFullYear()} Escuela Nacional de Taekwon-Do</p>
  </div>
</footer>
  );
};

export default Footer;
