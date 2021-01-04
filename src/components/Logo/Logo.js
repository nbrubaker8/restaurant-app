import React from "react";

import burgerLogo from "../../assets/images/burgerLogo.png";
import { Logo } from "./Logo.css";

const logo = (props) => {
  return (
    <div className={Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="My Burger" />
    </div>
  );
};

export default logo;
