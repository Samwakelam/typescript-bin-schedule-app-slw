// styles
import "./my-bin.style.css";
// types
import { MyBinInterface } from "../types";

export const MyBin = ({
  week,
  binColour,
}: MyBinInterface): JSX.Element | null => {
  if (!week || !binColour) return null;

  return <h2> {binColour} </h2>;
};
