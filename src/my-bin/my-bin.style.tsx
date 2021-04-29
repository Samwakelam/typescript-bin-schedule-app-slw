import styled from "styled-components";

export const BinImage = styled.img`
  width: 100%;
  max-width: 562px;
  max-height: 100vh;
`;

export const StyledMain = styled.main<{ mainColour: string }>`
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  background-color: ${(props) => props.mainColour || "rebeccapurple"};
`;
