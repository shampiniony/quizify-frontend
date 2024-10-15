import classes from "./UI/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header} id="QHeader">
      <a href="#Qheader">
        <div className={classes.logo}>
          <img src="/images/Logo.svg" alt="Logo" />
          <span>Kvizik</span>
        </div>
      </a>
      <nav className={classes.navLinks}>
        <a href="#HowWorks">Как работает</a>
        <a href="#ForWhom">Для кого</a>
      </nav>
    </header>
  );
};

export default Header;
