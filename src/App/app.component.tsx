import React from "react";
import "./app.style.css";

//components
import { MyBin } from "../my-bin/my-bin.component";
import { Titles } from "../titles/titles.component";
import { Footer } from "../footer/footer.component";
// functions
import { getWeekNumber } from "../helpers/getWeekNumber";
// hooks
import { useBinColour } from "../hooks/useBinColour";

export function App() {
  const weekNumber: number = getWeekNumber(new Date());
  const binColour = useBinColour(weekNumber);
  console.log("binColour =", binColour);
  console.log("weekNumber =", weekNumber);

  return (
    <div className="App">
      <Titles week={weekNumber} binColour={binColour} />
      <MyBin week={weekNumber} binColour={binColour} />
      <Footer binColour={binColour} />
    </div>
  );
}
