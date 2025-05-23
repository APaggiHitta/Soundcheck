import React, { useState, useEffect } from "react";
import styles from "./ImgCarrousel.module.css";

import img1 from "../../assets/img/home-cafres.jpg";
import img2 from "../../assets/img/home-dread.jpg";
// import img3 from "../../assets/img/home-iracundos.jpeg";
import img4 from "../../assets/img/home-laferte.jpg";
import img5 from "../../assets/img/home-panchos.jpg";

const images = [img1, img2, img4, img5];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setCurrent(index);
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[current]}
        alt={`Imagen ${current + 1}`}
        className={styles.image}
      />

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
