import React from "react";
import { AlohomoraTypes } from "../Alohomora.types";

const Alohomora = (props: AlohomoraTypes.Props) => {
  return <>{props.children}</>;
};

export default Alohomora;
