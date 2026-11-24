// Service worker mínimo: no guarda nada en caché, solo deja pasar los pedidos a la red.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
