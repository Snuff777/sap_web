'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "408e3fe39f7120562233e67cd2ca3584",
"index.html": "9882152904d62033000e4d9369252be3",
"/": "9882152904d62033000e4d9369252be3",
"main.dart.js": "6ce2066946acaba18da3f29b4bb75fde",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e1daf018ba18d1c93b66d9dbcb666dd",
"assets/AssetManifest.json": "ec160ec5605c542483340287a2e24a6b",
"assets/NOTICES": "c9d5e7b4cd6404c45d2bccded06bdb56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/Ibeacon.png": "744cb6fb2d981fa4a800d39c038c2d97",
"assets/assets/image/logo.png": "321ed67e9da0620187e560031eb45b26",
"assets/assets/image/scanner.png": "089f567b76c216770a6e026919cac84d",
"assets/assets/image/beacon_star.png": "5206d256e2d0157c06275c0730da61c6",
"assets/assets/mapData/Library/6F/1.json": "24648e93d41ed5553cf0ee7bfc035851",
"assets/assets/mapData/Library/6F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/6F/3.json": "9c6af95ab37f1cf38a453ae2e7cb92c5",
"assets/assets/mapData/Library/6F/4.json": "d6eba7f4351e253c62a39f1ebbc93d52",
"assets/assets/mapData/Library/5F/1.json": "e9aa4161d533cbf1474053078f6d3739",
"assets/assets/mapData/Library/5F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/5F/3.json": "b2076816999f520bcd041da8c22d8948",
"assets/assets/mapData/Library/5F/4.json": "8f38280208b599f3974a5dba60e37009",
"assets/assets/mapData/Library/GF/1.json": "2caa054b803436434d2865e2261ef786",
"assets/assets/mapData/Library/GF/2.json": "0866c37c9454e3cc01d8b010a2bf6344",
"assets/assets/mapData/Library/GF/3.json": "12c4f367e0cd463ccd858fd8164fc0b0",
"assets/assets/mapData/Library/GF/4.json": "be10d1e5cae9ebeb1421a26cbae00d2f",
"assets/assets/mapData/Library/1F/1.json": "684bb6964eab258529678a4ad10214a0",
"assets/assets/mapData/Library/1F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/1F/3.json": "29023c333c2d04b4ae8fe54a1470eee4",
"assets/assets/mapData/Library/1F/4.json": "ee5906b298b956fc35517a4546a8920f",
"assets/assets/mapData/Library/2F/1.json": "684bb6964eab258529678a4ad10214a0",
"assets/assets/mapData/Library/2F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/2F/3.json": "7563f1ca166acfc0e80a949fda1b0a07",
"assets/assets/mapData/Library/2F/4.json": "b16de53ff0929fde0ca0a5f42a33693e",
"assets/assets/mapData/Library/3F/1.json": "d5d90752d42824e071a9be78989ff78d",
"assets/assets/mapData/Library/3F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/3F/3.json": "ef2884f7c1b5db81b1fe78ec3a09296c",
"assets/assets/mapData/Library/3F/4.json": "05b5e6918a798e1b4b8bc50bb35b9706",
"assets/assets/mapData/Library/4F/1.json": "39c1403074a653750389e527bbe14964",
"assets/assets/mapData/Library/4F/2.json": "a752782fa89df91effb28adb412c9ffd",
"assets/assets/mapData/Library/4F/3.json": "573dccb7d61e3babc4f1c8812f70a841",
"assets/assets/mapData/Library/4F/4.json": "7a171bb70254253686f80e19783b79ec",
"assets/assets/mapData/Knowles/GF/1.json": "7a7ca81b86eac2475cdafe46c4d53c5c",
"assets/assets/mapData/Knowles/GF/2.json": "29fd5e8c412b21fa276698fcb4c7a7ea",
"assets/assets/mapData/Knowles/GF/3.json": "0eeb3f923324c1d925bb7f8092a21b1c",
"assets/assets/mapData/Knowles/GF/4.json": "db154d4f196af33b861485c4b4f7672a",
"assets/assets/mapData/Knowles/8F/1.json": "6ac60e8360edf26208355f2597228483",
"assets/assets/mapData/Knowles/8F/2.json": "afebb8e96a35b247ed9f5af67150f722",
"assets/assets/mapData/Knowles/8F/3.json": "a0c99eee84771d7fa9ff79d43e76bfe9",
"assets/assets/mapData/Knowles/8F/4.json": "c8ad3d6cb61111fb49697d0af09da820",
"assets/assets/mapData/Knowles/7F/1.json": "6ac60e8360edf26208355f2597228483",
"assets/assets/mapData/Knowles/7F/2.json": "f1f8fba21058bae59273e5c80ff9b0dd",
"assets/assets/mapData/Knowles/7F/3.json": "847a79d0372c07b8f18ac3bdacd917ea",
"assets/assets/mapData/Knowles/7F/4.json": "9b4e71281f798aa247ab038666242330",
"assets/assets/beaconData/Library/206.json": "4b420c0189adf6e67becc51fa5ada930",
"assets/assets/beaconData/Library/200.json": "0c45d752f26cdf8ebf064cad1a19b5e6",
"assets/assets/beaconData/Library/201.json": "42f9ca66fbe6491b05a572a561901866",
"assets/assets/beaconData/Library/202.json": "421a135249f9a39a1db5e8251b64594b",
"assets/assets/beaconData/Library/203.json": "8fa6a04f4ac687376c07967fac79b168",
"assets/assets/beaconData/Library/204.json": "eb701f50871ec26d3fc58725ee385a67",
"assets/assets/beaconData/Library/205.json": "173122ecde33dc06a28b47497e10b30e",
"assets/assets/beaconData/Knowles/108.json": "a6a81c70ac70ca040dbf1b47f09d4811",
"assets/assets/beaconData/Knowles/107.json": "ffe2162859cf880cbc38e81053089aff",
"assets/assets/beaconData/Knowles/100.json": "54773804848b2be17044d43cf0eda3c7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
