import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.menu}>
      <a>
        {" "}
        <ButtonGroup disableElevation="true" variant="contained">
          <Button className={styles.button}>
            <a href="#aboutme">Обо мне</a>
          </Button>
          <Button>
            <a href="#slider">Сертификаты об обучении</a>
          </Button>
          <Button>
            <a href="#examples">Примеры работ</a>
          </Button>
          <Button>
            <a href="#contacts">Контакты</a>
          </Button>
        </ButtonGroup>
      </a>
    </div>
  );
}
