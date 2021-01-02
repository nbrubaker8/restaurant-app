import React from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

export default class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    this.setState((previousState) => ({
      ingredients: {
        ...previousState.ingredients,
        [type]: previousState.ingredients[type] + 1,
      },
      totalPrice: previousState.totalPrice + INGREDIENT_PRICES[type],
    }));
  };
  subtractIngredientHandler = (type) => {
    this.setState((previousState) => ({
      ingredients: {
        ...previousState.ingredients,
        [type]:
          previousState.ingredients[type] > 0
            ? previousState.ingredients[type] - 1
            : 0,
      },
      totalPrice: previousState.totalPrice - INGREDIENT_PRICES[type],
    }));
  };

  render() {
    const disabledControls = Object.entries(this.state.ingredients).reduce(
      (listOfDisabled, ingredient) => {
        ingredient[1] === 0 && listOfDisabled.push(ingredient[0]);
        return listOfDisabled;
      },
      []
    );
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          subtractIngredient={this.subtractIngredientHandler}
          disabledControls={disabledControls}
        />
      </React.Fragment>
    );
  }
}
