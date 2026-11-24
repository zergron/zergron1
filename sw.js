/* 나대신 구독케어 V3 — minimal service worker (installable PWA) */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* network only: no offline cache for the demo */ });
