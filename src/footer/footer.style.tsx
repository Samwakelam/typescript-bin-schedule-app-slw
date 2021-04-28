import styled from "styled-components";

export const StyledFooter = styled.footer<{ footerColour: string }>`
  padding: 12px;

  background-color: ${(props) => props.footerColour || "var(--darkestGrey"};
`;
