import React from "react";
import styles from "./aboutme.module.css";
import photo from "./photo.png";

export default function Aboutme() {
  return (
    <div className={styles.aboutMe}>
      <a name="aboutme">
        <h1 className={styles.title}>Обо мне</h1>
        <div className={styles.block}>
          <img className={styles.img} src={photo} alt="photo" />
          <ul className={styles.list}>
            <li>Проживаю в городе Перми</li>
            <li>
              Получила высшее образование, но решила переучиться на более востребованную профессию
            </li>
            <li>Окончила онлайн-курсы Geekbrains по профессии Frontend-разработчик</li>
            <li>Изучила основы HTML5, CSS3, JavaScript</li>
            <li>Получила опыт разработки веб-приложений с помощью библиотеки React.js</li>
            <li>Имею опыт работы с bootstrap5, material-ui, препроцессорами SCSS,LESS</li>
            <li>Знакома с системой контроля версий GIT</li>
            <li>
              Использую такие сервисы для работы с макетами, как figma, psdetch.com, marcupeasy.ru
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}
