import { createContext } from "react";
import { AlohomoraContextTypes } from "./AlohomoraContext.types";

const AlohomoraContext = createContext<AlohomoraContextTypes.Model>(
  {} as AlohomoraContextTypes.Model
);

export default AlohomoraContext;