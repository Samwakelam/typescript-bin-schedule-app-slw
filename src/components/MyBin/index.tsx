// styles
import "./MyBin.css";
// types
import { MyBinInterface } from "../../types";

export const MyBin = ({
  week,
  binColour,
}: MyBinInterface): JSX.Element | null => {
  if (!week || !binColour) return null;

  return <h2>Blue {week} </h2>;
};
