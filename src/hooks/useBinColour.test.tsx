import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";

import { useBinColour } from "./useBinColour.hook";

test("Should use binColour", () => {
  const { result } = renderHook(() => useBinColour(19));

  expect(result.current).toBe("Green");
  // expect(result.current.isEvenWeek).toBe(false);
  // expect(typeof result.current.isEvenWeek).toBe("boolean");
});
