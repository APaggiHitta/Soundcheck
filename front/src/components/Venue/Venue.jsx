import React from "react";
import styles from "./Venue.module.css";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Venue = ({ image, title, date, place }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.info}>
        <FaCalendarAlt className={styles.icon} />
        <span className={styles.text}>{date}</span>
      </div>

      <div className={styles.info}>
        <FaMapMarkerAlt className={styles.icon} />
        <span className={styles.text}>{place}</span>
      </div>
    </div>
  );
};

export default Venue;
