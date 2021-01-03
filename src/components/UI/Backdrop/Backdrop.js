import React from "react";

import { Backdrop } from "./Backdrop.css";

const backdrop = (props) =>
  props.show ? (
    <div className={Backdrop} onClick={props.onBackdropClick} />
  ) : null;

export default backdrop;
