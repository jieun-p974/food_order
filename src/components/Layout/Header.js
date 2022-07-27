import React, { Fragment } from "react";
import mealsImage from "../../assets/vegetables.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Cart</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="vegetables" />
      </div>
    </Fragment>
  );
};

export default Header;
