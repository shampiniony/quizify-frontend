import React from "react";
import TwoLinesHeading from "./TwoLinesHeading";
import classes from "./UI/ForWhom.module.css";
import Category from "./Category";

const ForWhom = () => {
  return (
    <div className={classes.main_cont}>
      <h1 id="ForWhom">Для кого</h1>
      <TwoLinesHeading as="h2">
        Предназначено для различных категорий пользователей, помогая им
        экономить <br />
        время и повышать эффективность
      </TwoLinesHeading>

      <Category
        imageUrl={"./images/TeachIcon.svg"}
        title="Учителям"
        description="Быстрая генерация тестов по тексту с возможностью разослать ученикам тест"
        bgColor="rgba(205, 241, 105, 1)"
      />

      <Category
        imageUrl={"./images/StudIcon.svg"}
        title="Студентам"
        description="Самоподготовка по любым материалам быстрее, используя ИИ-инструменты"
        bgColor="rgba(196, 187, 254, 1)"
      />
      <Category
        imageUrl={"./images/DevIcon.svg"}
        title="Разработчикам"
        description="Интеграция генератора тестов в их сервисы с помощью API"
        bgColor="rgba(255, 227, 126, 1)"
      />
    </div>
  );
};

export default ForWhom;
