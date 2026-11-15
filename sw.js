// Sztukfilm – działanie bez internetu.
// Po każdej zmianie plików zwiększ numer wersji, żeby telefony pobrały nową wersję.
const VERSION = "sztukfilm-v3";
const FILES = [
  "./",
  "index.html",
  "polityka.html",
  "manifest.webmanifest",
  "filmy.json",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png",
  "favicon-32.png",
  "inter-latin-400-normal.woff2",
  "inter-latin-500-normal.woff2",
  "inter-latin-600-normal.woff2",
  "inter-latin-ext-400-normal.woff2",
  "inter-latin-ext-500-normal.woff2",
  "inter-latin-ext-600-normal.woff2",
  "fraunces-latin-600-normal.woff2",
  "fraunces-latin-800-normal.woff2",
  "fraunces-latin-ext-600-normal.woff2",
  "fraunces-latin-ext-800-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Najpierw sieć (żeby od razu widzieć nowe wersje), a bez internetu – kopia z pamięci.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
