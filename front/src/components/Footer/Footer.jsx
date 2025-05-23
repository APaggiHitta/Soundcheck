import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Derechos reservados © 2025 - Soundcheck Producciones
      </div>
      <div className={styles.right}>
        <a
          href="https://www.instagram.com/eventos_sc_s.a/"
          target="_blank"
          aria-label="Instagram"
          className={styles.icon}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/1EWCsDVGrw/?mibextid=wwXIfr"
          target="_blank"
          aria-label="Facebook"
          className={styles.icon}
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
