// packages
import React from "react";
import { MyBinInterface } from "../types";
// styles
import { StyledFooter } from "./footer.style";

export const Footer = ({ binColour }: MyBinInterface) => {
  // console.log("styledFooter =", StyledFooter);
  return (
    <StyledFooter
      footerColour={
        binColour === "Green" ? "var(--darkestGreen)" : "var(--darkestGrey)"
      }
    ></StyledFooter>
  );
};
