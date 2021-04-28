import styled from "styled-components";

export const BinImage = styled.img`
  width: 100%;
`;

export const StyledMain = styled.main<{ mainColour: string }>`
  flex-grow: 1;

  display: flex;
  align-items: center;

  overflow: hidden;
  background-color: ${(props) => props.mainColour || "rebeccapurple"};
`;
