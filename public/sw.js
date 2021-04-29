// service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // service worker container
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service worker has loaded successfully.", registration);
      })
      .catch((err) => {
        console.log("service worker has not loaded successfully.", err);
      });
  });
}
