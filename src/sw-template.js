if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

      


      const FALLBACK_URL = '/offline';

      const urlHandler = workbox.strategies.networkFirst({
          cacheName: 'page-cache'
      });

      workbox.routing.registerRoute(
          /\/.+\//,
          ({event}) => {
              return urlHandler.handle({event})
                  .then((response) => {
                      return response || caches.match(FALLBACK_URL);
                  })
                  .catch(() => caches.match(FALLBACK_URL));
          });





  
      /* custom cache rules */
       workbox.routing.registerRoute(
        '/page',
          workbox.strategies.CacheFirst({
            cacheName: 'PRODUCTION',
          })
        );
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }