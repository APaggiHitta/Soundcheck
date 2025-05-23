// import styles from "./Menu.module.css";

// const Menu = ({ name }) => {
//   return (
//     <>
//       <span className={styles.menu}>{name}</span>
//     </>
//   );
// };

// export default Menu;

import React from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = ({ name, to = "#", onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={styles.menuItem}
      // estilos o clases para el link
    >
      {name}
    </Link>
  );
};

export default Menu;
