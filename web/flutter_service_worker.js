'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e7133d6159ff9a5a5e2658cbee8d5cee",
"index.html": "da0e58fb2bd7954e160121a70a13448b",
"/": "da0e58fb2bd7954e160121a70a13448b",
"main.dart.js": "3723edda717a428932928933972f5cbb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82e879d17b9e8aa1d7d0058a3f4cfdf5",
"assets/AssetManifest.json": "9726213db5d2a5a2eb6e07807e88b173",
"assets/NOTICES": "4590928fa7c0609d7a0c31083a9755ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "904a160fe3ea5867d3daf2cd3d6acae9",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/loading/result_loading.gif": "8bb59bc0c54dc212fb97128db9b3592a",
"assets/assets/loading/loading.gif": "fa119db4a80367744d35698f509e2faf",
"assets/assets/loading/result_loading.png": "926e49b8703f350354c79e1dfb649bd1",
"assets/assets/loading/transparent.png": "d4d6dafea9e7488ce9c790ae221487e5",
"assets/assets/loading/intro_loading.png": "bd066027ec9b94ca187b4b8fcd025261",
"assets/assets/intro_page/intro_image1.png": "a71d8bda40d54a17598a3c8ba866ee99",
"assets/assets/intro_page/intro_image2.png": "fde2158c715b1d7f7cd025c2b9f599f3",
"assets/assets/question_page/icon_9.png": "4d28907680e0cd82fdc0560a3079e94b",
"assets/assets/question_page/icon_8.png": "4d8345cb336dfb5fbb60084383c1fee1",
"assets/assets/question_page/icon_10.png": "64129242fe18a2d083128ee8a786642f",
"assets/assets/question_page/icon_1.png": "bfade3ed809b597c85bf4e4b1fbd5724",
"assets/assets/question_page/icon_3.png": "64b1a503eef280d5b4c46ac633035c9e",
"assets/assets/question_page/icon_2.png": "bcc89a93e747c89fd41163d5e9e3c967",
"assets/assets/question_page/icon_6.png": "c78f26a081c2d2bff93eb4d661ffcd22",
"assets/assets/question_page/icon_7.png": "970c64d0f229dbd4ec91ae99352a8f80",
"assets/assets/question_page/icon_5.png": "9551c776552b3fd83e19aeb41b4b934c",
"assets/assets/question_page/icon_4.png": "a1f3cca665f4aeb033361fcbc945c8ab",
"assets/assets/result_page/Type_F_pg2.png": "a16c3f8ca1f2af8247347d21cc24cd6a",
"assets/assets/result_page/Type_F_pg3.png": "95ec68d117dde01715887aad6ca420a2",
"assets/assets/result_page/Type_F_pg1.png": "8f26048dbe092fb4a6518d3eb2d0f65a",
"assets/assets/result_page/Type_E_pg1.png": "8764e946c06ab37664f3049909b2b279",
"assets/assets/result_page/Type_E_pg2.png": "c6910eb76ddb069e55a1f8b82b87b1ea",
"assets/assets/result_page/Type_E_pg3.png": "15fcb9f69cb502b8fac899915bf0be09",
"assets/assets/result_page/Type_D_pg2.png": "bca93be2275e612958ea50caadbd419c",
"assets/assets/result_page/Type_D_pg3.png": "4b6d032a644bcca3cd6c10b079a4a3c8",
"assets/assets/result_page/Type_D_pg1.png": "5ea1b303962ed3e325e3d9a565b78d7f",
"assets/assets/result_page/Type_C.png": "c67d49cb3e798b5011a506625ba32c5d",
"assets/assets/result_page/Type_B.png": "5e623c745b0a8319f3da81ffda5553b3",
"assets/assets/result_page/Type_A_pg1.png": "9ae78e88f19c9e21076429dc2eff8e25",
"assets/assets/result_page/Type_A_pg3.png": "97a88eb27ae69b12631e7e72a315540b",
"assets/assets/result_page/Type_A.png": "45934cac5c26fdbe8f7fa4bc12527b4d",
"assets/assets/result_page/Type_A_pg2.png": "aeca9ee2777c3570ae9bc8e72dd8d3e9",
"assets/assets/result_page/Type_E.png": "fe2bf5c95e3ff86ce324b9f7e12204c0",
"assets/assets/result_page/Type_D.png": "7ffb6f50dcad6b1e447ea7a677e0222f",
"assets/assets/result_page/Type_F.png": "34cb8c7fee929f4ad8d9b77f3c012500",
"assets/assets/result_page/Type_B_pg3.png": "c3e7b8a41225f21b1325b3491b61c173",
"assets/assets/result_page/Type_B_pg2.png": "9d8aa0e9f2a6926917679beb55e6cc8a",
"assets/assets/result_page/Type_B_pg1.png": "e2ee4048f85f48321cb4ad8fdbcfb3f2",
"assets/assets/result_page/Type_C_pg1.png": "ead570b35ee1d55b309515284b6006b4",
"assets/assets/result_page/Type_C_pg3.png": "19da21be242cbc959f3358147fd025ba",
"assets/assets/result_page/Type_C_pg2.png": "890f466cac13b0ff91bf23e96c294712",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
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
