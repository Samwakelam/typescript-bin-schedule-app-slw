// styles
import "./my-bin.style.css";
import { BinImage, StyledMain } from "./my-bin.style";
// types
import { MyBinInterface } from "../types";

export const MyBin = ({
  week,
  binColour,
}: MyBinInterface): JSX.Element | null => {
  if (!week || !binColour) return null;

  return (
    <StyledMain
      mainColour={binColour === "Green" ? "papayawhip" : "palevioletred"}
    >
      <BinImage
        className="bin"
        src={`${process.env.PUBLIC_URL}/assets/${
          binColour === "Green" ? "Green" : "Black"
        }-bin.png`}
        alt={binColour === "Green" ? "Green Bin" : "Black Bin"}
      />
    </StyledMain>
  );
};
