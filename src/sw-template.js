if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
        '/',
        '/offline'
      ]);

  
      self.addEventListener("fetch", evt => {
        evt.respondWith(caches.match(evt.request)
            .then(response => { 
                return response || fetch(evt.request)
            })
            .catch(err => caches.match('/offline'))
            )
    })



  
      /* custom cache rules */
      /* workbox.routing.registerRoute(
        '/page',
          workbox.strategies.CacheFirst({
            cacheName: 'PRODUCTION',
          })
        );*/
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }