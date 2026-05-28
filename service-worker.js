const CACHE = "wordcards-v2";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-180.png"];

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

// кэш сначала (быстрый запуск офлайн), а в фоне обновляем из сети — stale-while-revalidate
self.addEventListener("fetch", (e) => {
  const req = e.request;
  // запросы к Supabase и переводу — всегда из сети, не кэшируем
  if (req.method !== "GET" || req.url.includes("supabase.co") || req.url.includes("mymemory")) return;
  e.respondWith(
    caches.match(req).then((cached) => {
      const fromNet = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fromNet;
    })
  );
});
