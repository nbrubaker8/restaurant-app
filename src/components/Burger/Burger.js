import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Burger } from "./Burger.css";

const burger = (props) => {
  let ingredientsOrdered = [];
  Object.entries(props.ingredients).forEach(([ingredient, quantity]) => {
    [...Array(quantity)].forEach((entry) => {
      ingredientsOrdered.push(ingredient);
    });
  });

  return (
    <div className={Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsOrdered.map((ingredient, ndx) => (
        <BurgerIngredient type={ingredient} key={ndx} />
      ))}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
