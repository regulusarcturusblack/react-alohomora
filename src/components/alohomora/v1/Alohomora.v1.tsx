import React, { useContext } from "react";
import { AlohomoraTypes } from "../Alohomora.types";
import alohomora from "../../../hocs/alohomora";

const Alohomora = (props: AlohomoraTypes.Props) => {
  let Component = alohomora(() => <>{props.children}</>, props.keys);
  return <Component />;
};

export default Alohomora;
