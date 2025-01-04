import React, { FC } from "react";
import { useContext } from "react";
import AlohomoraContext from "../contexts/AlohomoraContext";

const alohomora = <TProps extends object>(
  Component: FC<TProps>,
  keys: string[]
) => {
  return (props: TProps) => {
    const context = useContext(AlohomoraContext);

    if (context.keys.some((key) => keys.includes(key))) {
      return <Component {...props} />;
    } else {
      return <></>;
    }
  };
};

export default alohomora;
