import React from "react";
import styles from "./About.module.css";

import photo1 from "../../assets/img/about-concert.avif";
import photo2 from "../../assets/img/about-business.jpg";
import photo3 from "../../assets/img/about-wedding.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Acerca de Soundcheck Producciones</h1>
      <p className={styles.description}>
        Soundcheck Producciones es una empresa guatemalteca con amplia
        trayectoria en la organización y producción de eventos. Nos
        especializamos en conciertos, bodas, cumpleaños de 15, convivios,
        eventos corporativos y más, trabajando con pasión y profesionalismo.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Misión</h2>
        <p className={styles.description}>
          Crear experiencias inolvidables mediante la producción de eventos de
          alta calidad, superando las expectativas de nuestros clientes en toda
          Centroamérica.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Valores</h2>
        <ul className={styles.list}>
          <li>Excelencia</li>
          <li>Compromiso</li>
          <li>Creatividad</li>
          <li>Trabajo en equipo</li>
          <li>Integridad</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Políticas</h2>
        <p className={styles.description}>
          Cumplimos con todas las normativas de seguridad y sonido, asegurando
          el bienestar de nuestros clientes, invitados y colaboradores.
          Promovemos la sostenibilidad en cada uno de nuestros montajes y
          servicios.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Cultura Organizacional</h2>
        <p className={styles.description}>
          Fomentamos un ambiente de colaboración, respeto y mejora continua.
          Nuestro equipo está conformado por profesionales apasionados por la
          música, el arte y la organización de eventos.
        </p>
      </section>

      <div className={styles.gallery}>
        <img src={photo1} alt="Evento musical" className={styles.image} />
        <img
          src={photo2}
          alt="Boda organizada por Soundcheck"
          className={styles.image}
        />
        <img src={photo3} alt="Evento empresarial" className={styles.image} />
      </div>
    </div>
  );
};

export default About;
