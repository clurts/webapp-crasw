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
          cacheName: 'PRODUCTION'
      });

      const customHandler = async (args) => {
        try {
          const response = await urlHandler.handle(args);
          return response || await caches.match(FALLBACK_URL);
        } catch (error) {
          return await caches.match(FALLBACK_URL);
        }
      };

      workbox.routing.registerRoute(
        '/page', 
        customHandler
      );





  
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