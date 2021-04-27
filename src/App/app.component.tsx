import React from "react";
import "./app.style.css";

//components
import { MyBin } from "../my-bin/my-bin.component";
// functions
import { getWeekNumber } from "../helpers/getWeekNumber";
// hooks
import { useBinColour } from "../hooks/useBinColour";

export function App() {
  const weekNumber: number = getWeekNumber(new Date());
  const binColour = useBinColour(weekNumber);
  // console.log("binColour =", binColour);
  // console.log("weekNumber =", weekNumber);

  return (
    <div className="App">
      <header>
        <p>Week: {weekNumber}</p>
        <h1>This Week's Bin Colour Is: </h1>
      </header>
      <main>
        <MyBin week={weekNumber} binColour={binColour} />
      </main>
      <footer></footer>
    </div>
  );
}
