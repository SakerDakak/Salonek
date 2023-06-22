'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a0a06339c49ddd3ef49e05f6dba17cb9",
"splash/img/light-2x.png": "22ad85232ba8f204774120385561eec2",
"splash/img/dark-4x.png": "dc13a5004db85b2988c54c1100c446ee",
"splash/img/light-3x.png": "477cf70d4e91f46570d5973c4a2707eb",
"splash/img/dark-3x.png": "477cf70d4e91f46570d5973c4a2707eb",
"splash/img/light-4x.png": "dc13a5004db85b2988c54c1100c446ee",
"splash/img/dark-2x.png": "22ad85232ba8f204774120385561eec2",
"splash/img/dark-1x.png": "ebf856a052e20f9db0b565b62f4de551",
"splash/img/light-1x.png": "ebf856a052e20f9db0b565b62f4de551",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "f9d145dbdf5bfa07f66c24bb43ef6222",
"index.html": "27c62e2b2419759bb1e8f3786ad3a71f",
"/": "27c62e2b2419759bb1e8f3786ad3a71f",
"main.dart.js": "27eb03cf2cfa2992db7672ae9642f827",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"Favicon/favicon-16x16.png": "3202c418883d66973f619c8b126159f7",
"Favicon/favicon.ico": "f0c1bd192573ed7c977ef87f028df941",
"Favicon/apple-icon.png": "8b5daa7a21ae9eaeef92a63e12dd4677",
"Favicon/apple-icon-144x144.png": "56bea13eaaeaff5b4526abd80775434b",
"Favicon/android-icon-192x192.png": "b7efe6bb8c6292744cbce33c7da41b5a",
"Favicon/apple-icon-precomposed.png": "8b5daa7a21ae9eaeef92a63e12dd4677",
"Favicon/apple-icon-114x114.png": "dc10546604e6f8ac0d339026a4575a2d",
"Favicon/ms-icon-310x310.png": "7adb2e6f6c51e500d4f0f58c15f39680",
"Favicon/ms-icon-144x144.png": "56bea13eaaeaff5b4526abd80775434b",
"Favicon/apple-icon-57x57.png": "fe24c64eeadfd66748b6b99629e21129",
"Favicon/apple-icon-152x152.png": "e7dac05e2d12fb00f91af9a16564c75a",
"Favicon/ms-icon-150x150.png": "fafea22e3a4587e5a7c335a664a0eac0",
"Favicon/android-icon-72x72.png": "1ce0b88cbced2f4da97a7b3a4c867724",
"Favicon/android-icon-96x96.png": "cfd602b4ec52f64421b44dcaa38db7e3",
"Favicon/android-icon-36x36.png": "8b6f79980cb62204932d6ec1ffdd4b8f",
"Favicon/apple-icon-180x180.png": "adafcc200c1eb1d4e5e903a14c937aa9",
"Favicon/favicon-96x96.png": "cfd602b4ec52f64421b44dcaa38db7e3",
"Favicon/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"Favicon/android-icon-48x48.png": "eb57a1f21a4f9b332a7d9b55263d078f",
"Favicon/apple-icon-76x76.png": "74c33483ced900330998c07fa6dc672c",
"Favicon/apple-icon-60x60.png": "40411013c45b2859fe2323aa2994dad4",
"Favicon/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"Favicon/android-icon-144x144.png": "56bea13eaaeaff5b4526abd80775434b",
"Favicon/apple-icon-72x72.png": "1ce0b88cbced2f4da97a7b3a4c867724",
"Favicon/apple-icon-120x120.png": "2c3074b8ead7ff4a08a54dfc12eef7ff",
"Favicon/favicon-32x32.png": "520e616ecd38bdbb924fedf587fbed87",
"Favicon/ms-icon-70x70.png": "d2c02540eccc05ec16bb91717882f835",
"icons/Icon-192.png": "fe815808fbe53c8e5a6c6b9ca97b3799",
"icons/Icon-512.png": "372bc279c16daf7b229c179b3e4afc0f",
"manifest.json": "5a949053bbb216bd00287eaeaa654398",
"assets/AssetManifest.json": "391f8fe0779a08b6fedc2603dc5c1e66",
"assets/NOTICES": "fd63ed0f96b17ce6fd7beff5149a3b7d",
"assets/FontManifest.json": "987aad2557c4916702b52c1fe3a97479",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5af430bf4a588beaef9bcca5c3c7bb7a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/splash/splash.png": "72eb13d506c6787f55c20e46bd34de38",
"assets/assets/images/404.png": "178280b43c4c573317e2ba159a9c148b",
"assets/assets/images/empty.png": "e0bc5cc092e97f131cb73a9be4f6e6f8",
"assets/assets/images/logo.png": "d656ed714c8bd81c150d6906ac162484",
"assets/assets/images/salon1.jpg": "cf6f86fc994442feb27bac753bbdf8d9",
"assets/assets/images/logo-png.png": "72eb13d506c6787f55c20e46bd34de38",
"assets/assets/images/product1.jpg": "dad4f63d4d3a29c5a10420940a627e48",
"assets/assets/images/onboard.jpg": "e26c5c3a48d1312b867bc2e685d023ce",
"assets/assets/images/personal1.jpg": "c0820a7d0c3bb7b5fbd0e9ad74584019",
"assets/assets/messages.json": "604f499ae5d89d18b8ad1aca586baa58",
"assets/assets/map/mapStyle.json": "23e1a425da19d2d94933e1e2e18b5392",
"assets/assets/fonts/Tajawal-ExtraBold.ttf": "066a37467c3af47d359507f7c7976071",
"assets/assets/fonts/Tajawal-Light.ttf": "b6f8ed4fd29cc11d562ce730712aeaae",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/GildaDisplay-Regular.ttf": "4f01bbae8e3e710232ead45b08076f02",
"assets/assets/fonts/Tajawal-ExtraLight.ttf": "cce1763b8395a41d57dfdf63a2e97e62",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/fonts/Tajawal-Black.ttf": "bc674767a78d2808b19a818d9742a4af",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
