self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll(['/JS/tpServiceWorkers.html,style.css']);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("fetch event fired and catch : " + event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
