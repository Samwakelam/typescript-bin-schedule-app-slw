// packages
import React from "react";
import { MyBinInterface } from "../types";
import {
  StyledHeader,
  WeekParagraph,
  TitleH1,
  StyledSpan,
} from "./titles.style";

export const Titles = ({ week, binColour }: MyBinInterface) => {
  // console.log("styledHeader=", StyledHeader);
  return (
    <StyledHeader
      headerColour={
        binColour === "Green" ? "var(--darkestGreen)" : "var(--darkestGrey)"
      }
    >
      <WeekParagraph
        textColour={binColour === "Green" ? "papayawhip" : "var(--lightGrey)"}
      >
        Week: {week}
      </WeekParagraph>
      <TitleH1
        textColour={binColour === "Green" ? "papayawhip" : "var(--lightGrey)"}
      >
        This Week's Bin Colour Is:{" "}
        <StyledSpan
          textColour={
            binColour === "Green" ? "var(--midGreen)" : "palevioletred"
          }
        >
          {binColour}
        </StyledSpan>
      </TitleH1>
    </StyledHeader>
  );
};
