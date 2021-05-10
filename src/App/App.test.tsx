import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { App } from "./app.component";

test("App has rendered", () => {
  const result = render(<App />);
  expect(result.getByText("This Week's Bin Colour Is:")).toBeInTheDocument();
});
