if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

      /* if your site is a single page app, hou can yse NavigationRoute 
      to return a specific response for all navigation requests... */
      workbox.routing.registerNavigationRoute('/index.html');
  
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