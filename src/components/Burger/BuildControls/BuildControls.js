import React from "react";

import { BuildControls, OrderButton } from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={BuildControls}>
    <p>
      The Current Price: <strong>${props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((control) => {
      return (
        <BuildControl
          key={control.label}
          label={control.label}
          less={() => {
            props.subtractIngredient(control.type);
          }}
          more={() => {
            props.addIngredient(control.type);
          }}
          disabled={!!props.disabledControls.includes(control.type)}
        />
      );
    })}
    <button
      className={OrderButton}
      disabled={!!(props.totalPrice === 4)}
      onClick={props.onOrder}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
