const CACHE = "wordcards-v1";
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

// сеть сначала, кэш — запасной (чтобы приложение обновлялось, но работало офлайн)
self.addEventListener("fetch", (e) => {
  const req = e.request;
  // запросы к Supabase (вход, данные) — всегда из сети, не кэшируем
  if (req.method !== "GET" || req.url.includes("supabase.co")) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
