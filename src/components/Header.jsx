import React, { useState } from "react";
import classes from "./UI/Header.module.css";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="/images/Logo.svg" alt="Logo" />
        <span>Kvizik</span>
      </div>
      <nav className={`${classes.navLinks} ${IsOpen ? "open" : ""}`}>
        <a href="#">Как работает</a>
        <a href="#">Для кого</a>
      </nav>
      <div
        className={`${classes.burger} ${IsOpen ? "open" : ""}`}
        role="button"
        tabIndex="0"
        onClick={toggleMenu}
      >
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </header>
  );
};

export default Header;
