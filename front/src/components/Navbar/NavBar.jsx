import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu/Menu";

import styles from "./NavBar.module.css";
import logoSC from "../../assets/img/Logo-White.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null); // ref para el icono hamburguesa

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Cierra el menú al hacer click en un ítem
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.mainContainer}>
      <img className={styles.logoSC} src={logoSC} alt="Logo" />

      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        ref={hamburgerRef} // asignamos la ref aquí
      >
        <GiHamburgerMenu size={30} />
      </div>

      <div
        className={`${styles.menuContainer} ${menuOpen ? styles.menuOpen : ""}`}
        ref={menuRef}
      >
        <Menu name="Home" to="/home" onClick={handleLinkClick} />
        <Menu name="Eventos" to="/events" onClick={handleLinkClick} />
        <Menu name="Acerca de" to="/about" onClick={handleLinkClick} />
        <Menu name="Contacto" to="/contact" onClick={handleLinkClick} />
        <Menu name={"Ingreso"} onClick={handleLinkClick} />
      </div>
    </div>
  );
};

export default NavBar;
