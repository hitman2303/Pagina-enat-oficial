import React, { useState } from 'react';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí podrías integrar con EmailJS, Formspree, etc.
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

return (
  <section className="contacto-section">
    <form className="formulario-contacto" onSubmit={handleSubmit}>
      <h1>Contactanos</h1>

      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>

      <div className="botones">
        <button type="submit" className="enviar">Enviar</button>
        <button type="button" className="eliminar" onClick={handleReset}>
          Eliminar
        </button>
      </div>
    </form>
  </section>
);

};

export default FormularioContacto;
