const CACHE = "wordcards-v6";
const ASSETS = [
  "./", "./index.html", "./app.js", "./packs.js", "./stories.js", "./dialogues.js", "./books.js",
  "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-180.png",
];

// при установке — кладём оболочку приложения в кэш
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

// при активации — удаляем старые версии кэша
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  // запросы к Supabase и переводу — всегда из сети, не кэшируем
  if (req.method !== "GET" || req.url.includes("supabase.co") || req.url.includes("mymemory")) return;

  const isCode = req.mode === "navigate" || req.destination === "script" || req.destination === "document" || req.url.endsWith(".json");
  if (isCode) {
    // HTML / JS: сеть сначала (обновления видны сразу), кэш — только если оффлайн
    e.respondWith(
      fetch(req, { cache: "no-cache" })
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((c) => c || caches.match("./index.html")))
    );
    return;
  }
  // картинки и прочее: кэш сначала, обновляем фоном
  e.respondWith(
    caches.match(req).then((cached) => {
      const fromNet = fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })
        .catch(() => cached);
      return cached || fromNet;
    })
  );
});
