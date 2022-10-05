const cacheName = "cache-students";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(["/", "/json-student", "index.html", "mystyle.css", "javascript.js", "members.json", "morten.png", "nina.png", "olivia.png"]);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});