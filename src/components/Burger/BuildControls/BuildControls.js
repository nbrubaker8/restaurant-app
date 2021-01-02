import React from "react";

import { BuildControls } from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={BuildControls}>
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
  </div>
);

export default buildControls;
