import React from "react";
import Venue from "../../components/Venue/Venue";
import styles from "../../components/Venue/Venue.module.css";

import venueDP from "../../assets/img/venue-deeppurple.webp";
import venueLF from "../../assets/img/venue-larvafecal.jpg";
import venueM from "../../assets/img/venue-metallica.jpg";
import venueIM from "../../assets/img/venue-ironmaiden.jpg";
import venueMA from "../../assets/img/venue-marcanthony.webp";

const venues = [
  {
    image: venueDP,
    title: "Deep Purple",
    date: "25 Mayo 2025",
    place: "Ciudad de Guatemala",
  },
  {
    image: venueLF,
    title: "Larva Fecal",
    date: "1 Junio 2025",
    place: "Antigua Guatemala",
  },
  {
    image: venueM,
    title: "Metallica",
    date: "30 Julio 2025",
    place: "Flores",
  },
  {
    image: venueIM,
    title: "Iron Maiden",
    date: "15 Julio 2025",
    place: "Quetzaltenango",
  },
  {
    image: venueMA,
    title: "Marc Anthony",
    date: "5 Agosto 2025",
    place: "Chimaltenango",
  },
];

const Events = () => {
  return (
    <div className={styles.container}>
      {venues.map((venue, i) => (
        <Venue
          key={i}
          image={venue.image}
          title={venue.title}
          date={venue.date}
          place={venue.place}
        />
      ))}
    </div>
  );
};

export default Events;
