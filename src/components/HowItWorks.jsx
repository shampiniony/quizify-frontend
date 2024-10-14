import React from "react";
import classes from "./UI/HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={classes.main_cont}>
      <h1>Как работает</h1>
      <h2>
        Мы поможем ускорить ваше обучение и подготовку, используя наши
        инструменты
      </h2>
      <div className={classes.row_cont}>
        <div className={classes.block}>
          <div className={classes.container}>
            <div className={classes.headerPurple}>
              <p className={classes.header}>Квизы (тесты)</p>
            </div>

            <div className={classes.card}>
              <p className={classes.text}>
                Загружайте ваши учебные материалы и генерируйте тесты для
                проверки знаний. Наши алгоритмы анализируют текст и создают
                вопросы, которые помогут вам лучше усвоить информацию.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.block}>
          <div className={classes.container}>
            <div className={classes.headerYellow}>
              <p>Заметки</p>
            </div>
            <div className={classes.card}>
              <p className={classes.text}>
                Генерируйте заметки, чтобы обобщить учебные материалы и понять
                ключевые темы. ИИ-инструменты выделяют главные идеи и создают
                структурированные заметки, облегчая процесс изучения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
