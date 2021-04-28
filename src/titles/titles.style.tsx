import styled from "styled-components";

export const StyledHeader = styled.header<{ headerColour: string }>`
  padding: 12px;

  background-color: ${(props) => props.headerColour || "var(--darkestGrey"};
  color: var(--lightGrey);
`;

export const WeekParagraph = styled.p<{ textColour: string }>`
  color: ${(props) => props.textColour || "var(--lightGrey)"};
`;

export const TitleH1 = styled.h1<{ textColour: string }>`
  color: ${(props) => props.textColour || "var(--lightGrey)"};
`;

export const StyledSpan = styled.span<{ textColour: string }>`
  color: ${(props) => props.textColour || "var(--lightGrey)"};
`;
