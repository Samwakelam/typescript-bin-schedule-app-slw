// packages
import { useState, useEffect } from "react";

export const useBinColour = (week: number) => {
  // console.log("week =", week);
  const [binColour, setBinColour] = useState<string>("Black");

  useEffect(() => {
    const isEvenWeek = Number.isInteger(week / 2);

    if (isEvenWeek) {
      setBinColour("Black");
    } else {
      setBinColour("Green");
    }
  }, [week]);

  if (!week) return null;
  return binColour;
};
