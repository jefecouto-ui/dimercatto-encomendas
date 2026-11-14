// Service worker mínimo: só existe para permitir "Adicionar à tela inicial". Não guarda nada em cache.
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(){});
