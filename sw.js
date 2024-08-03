/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3b6963d6'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/app-0b91b4cd.js",
    "revision": null
  }, {
    "url": "assets/banner-logo-6d7e2a97.js",
    "revision": null
  }, {
    "url": "assets/Community-202dc8ea.css",
    "revision": null
  }, {
    "url": "assets/community-24f11c66.js",
    "revision": null
  }, {
    "url": "assets/Community-733fd63b.js",
    "revision": null
  }, {
    "url": "assets/Fringe-a02dd071.js",
    "revision": null
  }, {
    "url": "assets/Fringe-d4cb7907.css",
    "revision": null
  }, {
    "url": "assets/Guide-5d38c1cd.css",
    "revision": null
  }, {
    "url": "assets/Guide-a8cecbc6.js",
    "revision": null
  }, {
    "url": "assets/Home-c082a3e2.js",
    "revision": null
  }, {
    "url": "assets/Home-c788c6f6.css",
    "revision": null
  }, {
    "url": "assets/index-d5613d85.css",
    "revision": null
  }, {
    "url": "assets/Landing-597f0281.js",
    "revision": null
  }, {
    "url": "assets/Landing-95486dc0.css",
    "revision": null
  }, {
    "url": "assets/Map-1b934424.js",
    "revision": null
  }, {
    "url": "assets/Map-bedb3288.css",
    "revision": null
  }, {
    "url": "assets/Room-075a2a31.js",
    "revision": null
  }, {
    "url": "assets/Room-49d52900.css",
    "revision": null
  }, {
    "url": "assets/Session-42a79214.css",
    "revision": null
  }, {
    "url": "assets/Session-b781ecec.js",
    "revision": null
  }, {
    "url": "assets/session-d515444c.js",
    "revision": null
  }, {
    "url": "assets/Sponsor-a8b1b3ff.css",
    "revision": null
  }, {
    "url": "assets/Sponsor-c78ce4e6.js",
    "revision": null
  }, {
    "url": "assets/Sponsorship-005fcf13.css",
    "revision": null
  }, {
    "url": "assets/Sponsorship-43578a58.js",
    "revision": null
  }, {
    "url": "assets/Staff-252382ca.js",
    "revision": null
  }, {
    "url": "assets/Staff-6697bdfd.css",
    "revision": null
  }, {
    "url": "assets/Topics-34ac06ed.css",
    "revision": null
  }, {
    "url": "assets/Topics-91c9db1f.js",
    "revision": null
  }, {
    "url": "assets/Venue-d9dd2134.js",
    "revision": null
  }, {
    "url": "assets/Venue-da55703e.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-49a7379c.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "en/community.html",
    "revision": "e4d4271106467744d1e0e75e996ca03c"
  }, {
    "url": "en/community/index.html",
    "revision": "eacfe0e62f7a8723f9608c68ec513590"
  }, {
    "url": "en/fringe.html",
    "revision": "6e240f88cafb7f6f46c64075e9ead6c1"
  }, {
    "url": "en/fringe/index.html",
    "revision": "6e240f88cafb7f6f46c64075e9ead6c1"
  }, {
    "url": "en/index.html",
    "revision": "7d92cf8123b7493d5189b01a02166352"
  }, {
    "url": "en/landing.html",
    "revision": "af16df8518ec384c0663708a70ac8ab5"
  }, {
    "url": "en/landing/index.html",
    "revision": "af16df8518ec384c0663708a70ac8ab5"
  }, {
    "url": "en/map.html",
    "revision": "7c9eb2b5f21f015490491df137b3587f"
  }, {
    "url": "en/map/index.html",
    "revision": "7c9eb2b5f21f015490491df137b3587f"
  }, {
    "url": "en/room.html",
    "revision": "0e3c7930b5b8796a063694aac82fe170"
  }, {
    "url": "en/room/index.html",
    "revision": "0e3c7930b5b8796a063694aac82fe170"
  }, {
    "url": "en/session.html",
    "revision": "2827c2ba5c6826a949a44f1e870ad639"
  }, {
    "url": "en/sponsor.html",
    "revision": "c06c033191e924bc5caa4de1105b0d2e"
  }, {
    "url": "en/sponsor/index.html",
    "revision": "c06c033191e924bc5caa4de1105b0d2e"
  }, {
    "url": "en/sponsorship.html",
    "revision": "03380f5056dba0f5d95bc5b73c4ab529"
  }, {
    "url": "en/sponsorship/index.html",
    "revision": "03380f5056dba0f5d95bc5b73c4ab529"
  }, {
    "url": "en/staff.html",
    "revision": "894ae6d37e2ca8454381e212a5b6591c"
  }, {
    "url": "en/staff/index.html",
    "revision": "894ae6d37e2ca8454381e212a5b6591c"
  }, {
    "url": "en/venue.html",
    "revision": "f6b76fbfdfd8786e80ac25f26a75cd8b"
  }, {
    "url": "en/venue/index.html",
    "revision": "f6b76fbfdfd8786e80ac25f26a75cd8b"
  }, {
    "url": "index.html",
    "revision": "2a60a1aea21a05c4c07d698af8489e37"
  }, {
    "url": "zh-TW/community.html",
    "revision": "1bfbff6bd23db44ebe46b9219b2ca1b9"
  }, {
    "url": "zh-TW/community/index.html",
    "revision": "27cbeb136d115223ccf8ae9935489b63"
  }, {
    "url": "zh-TW/fringe.html",
    "revision": "3e2f578dc9b9e151f9d9cf02c0b4ac81"
  }, {
    "url": "zh-TW/fringe/index.html",
    "revision": "3e2f578dc9b9e151f9d9cf02c0b4ac81"
  }, {
    "url": "zh-TW/index.html",
    "revision": "9cbc505270efce1d9bdebaf721234a54"
  }, {
    "url": "zh-TW/landing.html",
    "revision": "d379615d8fc16afa58f217cb64eff672"
  }, {
    "url": "zh-TW/landing/index.html",
    "revision": "d379615d8fc16afa58f217cb64eff672"
  }, {
    "url": "zh-TW/map.html",
    "revision": "b0d5e0e6348393640f05b2fb7fa8951b"
  }, {
    "url": "zh-TW/map/index.html",
    "revision": "b0d5e0e6348393640f05b2fb7fa8951b"
  }, {
    "url": "zh-TW/room.html",
    "revision": "d182abe1458e6b7786d7475f20d5d93d"
  }, {
    "url": "zh-TW/room/index.html",
    "revision": "d182abe1458e6b7786d7475f20d5d93d"
  }, {
    "url": "zh-TW/session.html",
    "revision": "da91eba2501dac6da33e202a1d1dfed6"
  }, {
    "url": "zh-TW/sponsor.html",
    "revision": "97b0ef6147917b21c5725309a5643e83"
  }, {
    "url": "zh-TW/sponsor/index.html",
    "revision": "97b0ef6147917b21c5725309a5643e83"
  }, {
    "url": "zh-TW/sponsorship.html",
    "revision": "d50cfeddf5a42b5b07e29c68012c8949"
  }, {
    "url": "zh-TW/sponsorship/index.html",
    "revision": "d50cfeddf5a42b5b07e29c68012c8949"
  }, {
    "url": "zh-TW/staff.html",
    "revision": "344fe0f0fefd2d0872a6357fdd350189"
  }, {
    "url": "zh-TW/staff/index.html",
    "revision": "344fe0f0fefd2d0872a6357fdd350189"
  }, {
    "url": "zh-TW/venue.html",
    "revision": "5a5ad60c86e99804248c83531f82906d"
  }, {
    "url": "zh-TW/venue/index.html",
    "revision": "5a5ad60c86e99804248c83531f82906d"
  }, {
    "url": "favicon.svg",
    "revision": "481a70df0b95472a1f4b2223c1a6b8f5"
  }, {
    "url": "manifest.webmanifest",
    "revision": "17caa39038465cd3c2f42cf70eccd808"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/.*\.(jpg|png|svg|json|js|xml|pdf)$/]
  }));
  workbox.registerRoute(/^https:\/\/script\.google\.com\/.*/i, new workbox.NetworkFirst({
    "cacheName": "room-status-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 2,
      maxAgeSeconds: 2592000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200, 301]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/coscup\.org\/2024\/json\/.*/i, new workbox.NetworkFirst({
    "cacheName": "json-data-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 432000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200, 301]
    })]
  }), 'GET');
  workbox.initialize({});

}));
