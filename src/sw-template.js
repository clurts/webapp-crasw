if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

      workbox.routing.registerRoute(
        // Return false to exempt requests from being fulfilled by index.html.
        ({ request, url }) => {
          // If this isn't a navigation, skip.
          if (request.mode !== 'navigate') {
            return false;
          } 
      
          return true;
        },
        workbox.precaching.createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
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