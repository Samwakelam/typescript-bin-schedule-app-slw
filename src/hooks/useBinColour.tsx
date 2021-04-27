// packages
import { useState, useEffect } from "react";
// types
import { MyBinInterface } from "../types";

export const useBinColour = ({ week }: MyBinInterface) => {
  const [binColour, setBinColour] = useState<string>("black");

  useEffect(() => {
    const isEvenWeek = Number.isInteger(week / 2);
    console.log("isEvenWeek =", isEvenWeek);
    if (isEvenWeek) {
      setBinColour("black");
    } else {
      setBinColour("green");
    }
  }, [week]);

  console.log("binColour =", binColour);

  if (!week) return null;
  return binColour;
};
