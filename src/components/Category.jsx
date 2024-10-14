import React from "react";
import classes from "./UI/Category.module.css";

const Category = ({ imageUrl, title, description, bgColor }) => {
  return (
    <div className={classes.card_container}>
      <div
        className={classes.image_container}
        style={{ backgroundColor: bgColor }}
      >
        <img src={imageUrl} alt="icon" />
      </div>
      <div className={classes.text_container}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Category;
