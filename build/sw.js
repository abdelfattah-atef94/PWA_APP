importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// Custom Adjustments

// To cache api data using cache first startegy
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/styles.css",
    "revision": "3acfe255d52fcc09ef609cf617312eff"
  },
  {
    "url": "index.html",
    "revision": "30918b4a0ddcfb9f18d5a31bc20f6b30"
  },
  {
    "url": "js/main.js",
    "revision": "cb9675b6cc04b38be2cecbf562369f26"
  }
]);