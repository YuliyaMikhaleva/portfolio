import moment from "moment";
import React from "react";
import styles from "./feedback.module.css";
import "moment/locale/ru";

export default function Feedback() {
  const now = moment().locale("Ru").format("DD MMMM YYYY");
  // const now = moment();
  return (
    <div className={styles.feedback}>
      <a name="contacts">
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.links}>
          <a href="mailto:umihaleva93@mail.ru">
            <i
              className="fa fa-envelope"
              style={{ fontSize: "50px", margin: "0 auto", display: "block", textAlign: "center" }}
            ></i>
          </a>
          <a href="https://github.com/YuliyaMikhaleva">
            <i
              className="fab fa-github"
              style={{ fontSize: "50px", margin: "0 auto", display: "block", textAlign: "center" }}
            ></i>
          </a>
        </div>
        <span className={styles.date}>{now}</span>
        <span className={styles.date}>&copy; Михалева Юлия</span>
      </a>
    </div>
  );
}
