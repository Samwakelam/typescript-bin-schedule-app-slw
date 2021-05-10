import { getWeekNumber } from "./getWeekNumber.helper";

test(" gets the week number returned", () => {
  const week1 = getWeekNumber(new Date(2021, 0, 1));
  const randomWeekInMay = getWeekNumber(new Date(2021, 4, 10));
  expect(week1).toBe(1);
  expect(randomWeekInMay).toBe(19);
});
