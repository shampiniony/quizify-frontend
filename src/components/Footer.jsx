import React from "react";
import classes from "./UI/Footer.module.css";
import styles from "./UI/Footer.module.css";
import TwoLinesHeading from "./TwoLinesHeading";

const Footer = () => {
  const handleButtonClick = () => {
    window.open("https://t.me/kvizikru", "_blank");
  };
  return (
    <footer className={styles.footer}>
      <div className={classes.container}>
        <a href="#QHeader">
          <div className={classes.logo}>
            <img
              src="images/Logo.svg"
              alt="Kvizik Logo"
              className={classes.logo_img}
            />
            <span>Kvizik</span>
          </div>
        </a>
        <div className={classes.center_content}>
          <TwoLinesHeading as="p">
            Подпишитесь на наш Telegram-канал,
            <br />
            чтобы следить за новостями разработки
          </TwoLinesHeading>
          <button
            className={classes.subscribe_button}
            onClick={handleButtonClick}
          >
            Подписаться
          </button>
        </div>
        <div className="links">
          <a href="#HowWorks" className={classes.link}>
            Как работает
          </a>
          <a href="#ForWhom" className={classes.link}>
            Для кого
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
