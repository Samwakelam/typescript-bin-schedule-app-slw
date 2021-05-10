import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Titles } from "./titles.component";

test("does it render?", () => {
  const result = render(<Titles />);
  expect(result.getByText(`This Week's Bin Colour Is:`)).toBeInTheDocument();
});

test("does it render the bin colour Green", () => {
  const result = render(<Titles week={19} binColour={"Green"} />);
  expect(result.getByText("Green")).toBeInTheDocument();
  expect(result.getByText(19, { exact: false })).toBeInTheDocument();
});

test("does it render the bin colour Black", () => {
  const result = render(<Titles week={20} binColour={"Black"} />);
  expect(result.getByText("Black")).toBeInTheDocument();
  expect(result.getByText(20, { exact: false })).toBeInTheDocument();
});
