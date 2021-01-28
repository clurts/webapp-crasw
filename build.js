const {injectManifest} = require('workbox-build');

const swSrc = 'src/custom-service-worker.js';
const swDest = 'build/service-worker.js';
injectManifest({
  swSrc,
  swDest,
  // Other configuration options...
}).then(({count, size}) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});
