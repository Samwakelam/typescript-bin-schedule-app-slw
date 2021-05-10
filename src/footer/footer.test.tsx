import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Footer } from "./footer.component";
// import { StyledFooter } from './footer.style';

test("Footer has Rendered", () => {
  const result = render(<Footer />);
  expect(result.getByTestId("footer")).toBeInTheDocument();
});
