import React, { useEffect } from "react";
import "./app.style.css";

//components
import { MyBin } from "../my-bin/my-bin.component";
import { Titles } from "../titles/titles.component";
import { Footer } from "../footer/footer.component";
// functions
import { getWeekNumber } from "../helpers/getWeekNumber.helper";
// hooks
import { useBinColour } from "../hooks/useBinColour.hook";

export function App() {
  const weekNumber: number = getWeekNumber(new Date());
  const binColour = useBinColour(weekNumber);

  useEffect(() => {
    // service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        // service worker container
        navigator.serviceWorker
          .register(`${process.env.PUBLIC_URL}/service-worker.js`, {
            scope: `${process.env.PUBLIC_URL}/`,
          })
          .then((registration) => {
            console.log(
              "Service worker has loaded successfully.",
              registration
            );
          })
          .catch((err) => {
            console.log("service worker has not loaded successfully.", err);
          });
      });
    }
  }, []);

  return (
    <div className="App">
      <Titles week={weekNumber} binColour={binColour} />
      <MyBin week={weekNumber} binColour={binColour} />
      <Footer binColour={binColour} />
    </div>
  );
}
