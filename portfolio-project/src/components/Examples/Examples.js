import React from "react";
import styles from "./examples.module.css";
import html1 from "./html1.jpg";
import html2 from "./html2.jpg";
import html3 from "./html3.jpg";
import html4 from "./html4.jpg";
import html5 from "./html5.jpg";
import html6 from "./html6.jpg";
import html7 from "./html7.jpg";
import html8 from "./html8.jpg";

export default function Examples() {
  return (
    <section>
      <a name="examples" className={styles.section}>
        <h1 className={styles.title}>Примеры моих работ</h1>
        <a href="https://mikhalevayulia-site.000webhostapp.com/" className={styles.card}>
          <img src={html1} alt="example1" width="300" height="295" />
          <span className={styles.cardText}>Вёрcтка макета</span>
          <ul className={styles.listUl}>
            <li>2 страницы: главная и контакты</li>
            <li>адаптивная гибкая вёрстка (компьютер/планшет/телефон)</li>
            <li>использование flexbox,background-image, позиционирование и тд.</li>
          </ul>
        </a>

        <a
          href="https://yuliyamikhaleva.github.io/home-projects_HTML5_CSS3/"
          className={styles.card}
        >
          <img src={html2} alt="example2" width="300" height="295" />
          <span className={styles.cardText}>Вёрстка макета</span>
          <ul className={styles.listUl}>
            <li>landing</li>
            <li>неадаптивная вёрстка</li>
            <li>использование flexbox, details-summary, видео, формы и тд. </li>
          </ul>
        </a>

        <a href="https://yuliyamikhaleva.github.io/final_site_Mikhaleva/" className={styles.card}>
          <img src={html3} alt="example3" width="300" height="295" />
          <span className={styles.cardText}>Вёрcтка макета</span>
          <ul className={styles.listUl}>
            <li>landing</li>
            <li>адаптивная вёрстка (компьютер/телефон)</li>
            <li>
              flexbox, псевдоклассы, псевдоэлементы, вёрска карточек, иконки, трансформация и т.д.
            </li>
          </ul>
        </a>

        <a href="https://yuliyamikhaleva.github.io/openmining/" className={styles.card}>
          <img src={html4} alt="example4" width="300" height="295" />
          <span className={styles.cardText}>Вёрcтка макета</span>
          <ul className={styles.listUl}>
            <li>landing</li>
            <li>неадаптивная вёрстка</li>
            <li>flexbox, details-summary, background-image, forms и т.д. </li>
          </ul>
        </a>

        <a href="https://yuliyamikhaleva.github.io/html_shop/" className={styles.card}>
          <img src={html5} alt="example5" width="300" height="295" />
          <span className={styles.cardText}>Добавление корзины в интернет-магазине</span>
          <ul className={styles.listUl}>
            {" "}
            <li>добавление товаров в корзину</li>
            <li>посчет общего количества товаров в корзине</li>
            <li>подсчет количества товаров конкретного вида в корзине</li>
            <li>подсчёт итоговой суммы корзины</li>
          </ul>
        </a>

        <a href="https://yuliyamikhaleva.github.io/hamburgers/" className={styles.card}>
          <img src={html6} alt="example6" width="300" height="295" />
          <span className={styles.cardText}>Разработка меню</span>
          <ul className={styles.listUl}>
            <li>автоматический просчёт цены заказа в кафе</li>
          </ul>
        </a>
        <a href="https://yuliyamikhaleva.github.io/vueshopjs2/" className={styles.card}>
          <img src={html7} alt="example7" width="300" height="295" />
          <span className={styles.cardText}>Разработка интернет-магазина</span>
          <ul className={styles.listUl}>
            <li>знакомство с vueJS, vuex</li>
            <li>добавление товаров в корзину/удаление из корзины</li>
            <li>посчет общего количества товаров в корзине</li>
            <li>подсчет количества товаров конкретного вида в корзине</li>
            <li>подсчёт итоговой суммы корзины</li>
            <li>Форма обрабатной связи (проверка через регулярные выражения)</li>
            <li>Информация о товарах берется через fetch с созданного сервера на github</li>
          </ul>
        </a>
        <a href=" https://yuliyamikhaleva.github.io/chat" className={styles.card}>
          <img src={html8} alt="example2" width="300" height="295" />
          <span className={styles.cardText}>Разработка чата</span>
          <ul className={styles.listUl}>
            <li>знакомство с reactJS, redux</li>
            <li>отправление\редактирование сообщения</li>
            <li>ответ бота как реакция на сообщение</li>
            <li>добавление/удаление/редактирование название беседы</li>
            <li>оформление тем</li>
            <li>редактирование личного кабинета</li>
            <li>создание страницы регистрации и авториции</li>
            <li>использование в качестве базы данных firebase</li>
          </ul>
        </a>
      </a>
    </section>
  );
}

//https://habr.com/ru/post/318148/
