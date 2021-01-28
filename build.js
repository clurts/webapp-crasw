const workboxBuild = require('workbox-build');

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: 'build',
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: 'build/custom-service-worker.js',

    // Define runtime caching rules.
    runtimeCaching: [{
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'fulstaendigtobskurt',

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    }],
  });
};

buildSW();
