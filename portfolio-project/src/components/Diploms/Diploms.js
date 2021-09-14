import React from "react";
import { Carousel } from "react-bootstrap";
import diplom1 from "./diplom1.jpg";
import diplom2 from "./diplom2.jpg";
import diplom3 from "./diplom3.jpg";
import diplom4 from "./diplom4.jpg";
import diplom5 from "./diplom5.jpg";
import diplom6 from "./diplom6.jpg";
import styles from "./diploms.module.css";

export default function Diploms() {
  return (
    <div className={styles.diploms}>
      <a name="slider">
        <h1 className={styles.title}>Сертификаты об обучении</h1>
        <Carousel className={styles.carousel}>
          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom1} alt="photo1" />
          </Carousel.Item>

          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom2} alt="photo2" />
          </Carousel.Item>

          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom3} alt="photo3" />
          </Carousel.Item>

          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom4} alt="photo4" />
          </Carousel.Item>

          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom5} alt="photo5" />
          </Carousel.Item>

          <Carousel.Item>
            <img className={styles.imgDiploms} src={diplom6} alt="photo6" />
          </Carousel.Item>
        </Carousel>
      </a>
    </div>
  );
}
