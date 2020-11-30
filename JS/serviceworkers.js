const cacheName = 'tpJsSw';

let cors_url = 'https://cors-anywhere.herokuapp.com/';
let url = 'https://planning.univ-rennes1.fr/jsp/custom/modules/plannings/9EYlGR3a.shu'


let cacheResources = [
    '/JS/','/JS/tpServiceWorkers.html',
    cors_url + url
];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheResources);
        })
    );
});

this.addEventListener("fetch", (event) => {
    console.log('fetched');
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
