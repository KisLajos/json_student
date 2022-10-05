/* const cacheName = "cache-students";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(["/", "index.html", "mystyle.css", "javascript.js", "members.json", "morten.png", "nina.png", "olivia.png"]);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
}); */

const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/json_student/",
        "/json_student/index.html",
        "/json_student/mystyle.css",
        "/json_student/javascript.js",
        "/json_student/members.json",
        "/json_student/morten.png",
        "/json_student/nina.png",
        "/json_student/olivia.png",
      ])
    );
  });
  