// src/components/WhatsappButton.jsx
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  const phoneNumber = "+50242096512";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
