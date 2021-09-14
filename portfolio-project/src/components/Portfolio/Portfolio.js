import React from "react";
import Aboutme from "../Aboutme/Aboutme";
import Example from "../Diploms/Diploms";
import Examples from "../Examples/Examples";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./portfolio.header.module.css";

export function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <Header />
      <Aboutme />
      <Example />
      <Examples />
      <Feedback />
    </div>
  );
}
