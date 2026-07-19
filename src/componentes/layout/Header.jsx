
function Header(){
 return (
  <header className="headerimg" data-aos="fade">
    <div className="header-content">
      <img
        src="/imgs/logos/escudo de la enat.WebP"
        alt="Escuela Nacional de Taekwon-Do ITF"
        className="header-logo"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width="70"
        height="84.609"
      />

      <h1>Escuela Nacional de Taekwon-Do</h1>
      <p className="header-subtitle">
        Pasión por la excelencia
      </p>
    </div>
  </header>
);


}
export default Header;