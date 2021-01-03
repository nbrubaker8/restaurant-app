import React from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientList = props.ingredients.map((ingredient, index) => (
    <li key={index}>
      <span style={{ textTransform: "capitalize" }}>{ingredient[0]}</span>:{" "}
      {ingredient[1]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientList}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total Price:</strong> ${props.totalPrice.toFixed(2)}
      </p>
      <Button clicked={props.purchaseCancel} btnType={"Danger"}>
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType={"Success"}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
