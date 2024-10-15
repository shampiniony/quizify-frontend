import React from "react";
import classes from "./UI/MainBody.module.css";
import TwoLinesHeading from "./TwoLinesHeading";

const MainBody = () => {
  return (
    <div className={classes.mainBody}>
      <img className={classes.image} src="/images/Cat.svg" alt="CuteCat" />
      <TwoLinesHeading as="h1">
        Учитесь быстрее: <br />
        ИИ инструменты для освоения тем
      </TwoLinesHeading>
      <TwoLinesHeading as="h2">
        Тесты по текстам, заметки по темам для подготовки к экзаменам!
        <br />
        Оставьте заявку на ранний доступ
      </TwoLinesHeading>
    </div>
  );
};

export default MainBody;
