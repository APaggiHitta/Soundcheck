import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    evento: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí luego conectarás con tu backend o email
    alert("Gracias por contactarnos. Pronto te responderemos.");
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      evento: "",
      fecha: "",
      mensaje: "",
    });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.description}>
        ¿Tienes un evento en mente? Completa el siguiente formulario y nos
        pondremos en contacto contigo lo antes posible.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Tipo de evento</label>
          <select
            name="evento"
            value={formData.evento}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="concierto">Concierto</option>
            <option value="boda">Boda</option>
            <option value="cumpleaños">Cumpleaños de 15</option>
            <option value="corporativo">Evento corporativo</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Fecha estimada del evento</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
