import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MyBin } from "./my-bin.component";

test("Should render green Bin image ", () => {
  const result = render(<MyBin week={19} binColour={"Green"} />);
  expect(result.getByAltText("Green Bin")).toBeInTheDocument();
});

test("Should render black Bin image ", () => {
  const result = render(<MyBin week={20} binColour={"Black"} />);
  expect(result.getByAltText("Black Bin")).toBeInTheDocument();
});
