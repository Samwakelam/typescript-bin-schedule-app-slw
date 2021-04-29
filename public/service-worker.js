/* eslint-disable no-restricted-globals */
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "manifest.json",

  "/assets/manifest/144-bin.png",
  "/assets/manifest/192-bin.png",
  "/assets/manifest/256-bin.png",
  "/assets/manifest/384-bin.png",
  "/assets/manifest/512-bin.png",

  "/assets/bin-icon.png",
  "/assets/Black-bin.png",
  "/assets/Green-bin.png",
];
// install
self.addEventListener("install", function (evt) {
  // pre cache image data
  // evt.waitUntil(
  //   caches.open(DATA_CACHE_NAME).then((cache) => cache.add('/api/images'))
  // );
  // pre cache all static assets
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log({ cache });
        cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => {
        console.log({ err });
      })
  );
  // tell the browser to activate this service worker immediately once it
  // has finished installing
  self.skipWaiting();
});
// activate
self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});
// fetch
self.addEventListener("fetch", function (evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) => {
          return fetch(evt.request)
            .then((response) => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }
              return response;
            })
            .catch((err) => {
              /* eslint-disable-line no-unused-vars */
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        })
        .catch((err) => console.log(err))
    );
    return;
  }
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
