import React from "react";
import "./App.css";

//components
import { MyBin } from "../components/MyBin";
// functions
import { getWeekNumber } from "../functions/getWeekNumber";
// hooks
import { useBinColour } from "../hooks/useBinColour";

export function App() {
  const weekNumber: number = getWeekNumber(new Date());
  const binColour = useBinColour(weekNumber);
  console.log("binColour =", binColour);

  return (
    <div className="App">
      <header>
        <h1>This Week's Bin Colour Is: </h1>
        <p>Week: {weekNumber}</p>
      </header>
      <main>
        <MyBin week={weekNumber} binColour={binColour} />
      </main>
      <footer></footer>
    </div>
  );
}
