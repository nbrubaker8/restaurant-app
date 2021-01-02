import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Burger } from "./Burger.css";

const burger = (props) => {
  let ingredientsOrdered = [];
  const ingredients = Object.entries(props.ingredients);
  ingredients.forEach(([ingredient, quantity]) => {
    [...Array(quantity)].forEach((entry) => {
      ingredientsOrdered.push(ingredient);
    });
  });
  return (
    <div className={Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.some((ingredient) => ingredient[1] > 0) ? (
        ingredientsOrdered.map((ingredient, ndx) => (
          <BurgerIngredient type={ingredient} key={ndx} />
        ))
      ) : (
        <h2>Please begin adding ingredients!</h2>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
