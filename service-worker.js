"use strict";var precacheConfig=[["index.html","b2419eb3e6bb130359dad1215c9d1a9b"],["service-worker.js","c2580066ab4973530438ad01ca407741"],["static/css/app.8a751b5652e490ef5b657ab734b58589.css","2484a4e3e9d953994bc42d1b15482642"],["static/img/Mask.jpg","9dbccd6b05ba7bced7db45c239aaf210"],["static/img/Mask.png","9c49938d333e89c6c247505bc51c30a0"],["static/img/arrow.png","81ca7b3bf0f60d7103a6981cfbbfbe9a"],["static/img/badminton.png","0bd0b6615c081ab3f5f1768bc88cae47"],["static/img/bowling.png","540bd2bcaa3884890763bb12e50e9952"],["static/img/darts.png","ef9cbdd2e9569e767d5bc150fef5cc0e"],["static/img/icon.jpg","857913358f1935492a51dfee08c908c8"],["static/img/icon.png","b09d7c326ecde1d9913eb259b3423a24"],["static/img/lg__waka1.c7ed1c5.jpg","c7ed1c566e86f1090a15c3d4c053611e"],["static/img/lg__waka2.49b7539.jpg","49b75397ea213d600be71c58b8ec4776"],["static/img/lg__waka3.fa6c789.jpg","fa6c78936c326d860b1230a882d9ce78"],["static/img/lg_eno2.997891c.jpg","997891cf52b94a26b3e8e7da4fea2c93"],["static/img/lg_goen1.382d597.jpg","382d597e1d4e5dd725e642d6c73d880e"],["static/img/lg_italy1.89dd0e5.jpg","89dd0e55b2d0c8ee2fbfb07f5b1734a7"],["static/img/lg_italy2.834662a.jpg","834662ac32fe20fcf4547a2b8733c572"],["static/img/lg_italy3.edee174.jpg","edee17437b4ed14bd2d112551ba70cc3"],["static/img/lg_italy4.d3b1c53.jpg","d3b1c532d7254b60f17b128c60f48ba7"],["static/img/lg_italy5.502ee2e.jpg","502ee2e51283507cea3a366b61779d9a"],["static/img/lg_italy6.29be3f5.jpg","29be3f5ec62e631de08bee0681a47cc8"],["static/img/lg_italy7.51e3199.jpg","51e319900be8bc35d9e2c1b55f281353"],["static/img/lg_italy8.9edfd0f.jpg","9edfd0fef79ed44aa1a7ffc2fefe3231"],["static/img/lg_italy9.001dd2d.jpg","001dd2d3b14d5ff3ee41ec6b0f838f54"],["static/img/lg_kino1.7a55f0b.jpg","7a55f0b91c59643536d57e9882954237"],["static/img/mizu.gif","ee86d28212b7cb662200137bf06e2db2"],["static/img/mizu_cursor.png","a22d7c8e2ebaad0e7e51cbf591eea712"],["static/img/mizu_cursor_hover.png","0ec40e6b941e8fe93bfdce79513280b2"],["static/img/release1.a613ce3.png","a613ce318c1d7483d8788cb0b95cb59f"],["static/img/sm__eno1.496b186.jpg","496b1867ea016a54844e49a74d2143ab"],["static/img/sm__italy1.869931b.jpg","869931b60f4d93f01535ec8aa70e0ff7"],["static/img/sm__italy2.6c6f574.jpg","6c6f574aa140ac33be41e291c90e63a8"],["static/img/sm__italy3.0199a8c.jpg","0199a8c2464bba320f45b6aa82b497b3"],["static/img/sm__kino1.7125787.jpg","7125787f3d25b497bc93b6a9855733a4"],["static/img/sm__kino2.6328f53.jpg","6328f53459db5ef5cbc753bc6941b087"],["static/img/sm__waka1.68ccf30.jpg","68ccf30b32a4cacc7703d24150d7c0c3"],["static/img/sm__waka2.eed2415.jpg","eed241531c81cbfba823f66c14b09cdd"],["static/img/sm__waka3.fd17e9c.jpg","fd17e9c844bbf0b050fde407943fab39"],["static/img/sm_eno1.4a82e5a.jpg","4a82e5a813a4fce3b053f5ab2b7fa60e"],["static/img/sm_eno2.91871d3.jpg","91871d3bc7290ff5be6e96a8712f7427"],["static/img/sm_goen1.30215e3.jpg","30215e3c1895faa3a3fa9ee0d21bd348"],["static/img/sm_italy1.d33f060.jpg","d33f0609b9a3d60fe6dde9e9f58020ed"],["static/img/sm_italy2.e783278.jpg","e7832786a0efe1ee06f31911af40ade6"],["static/img/sm_italy3.c898123.jpg","c898123e956677bacca0f51d6e3f7a78"],["static/img/sm_italy4.c20c89e.jpg","c20c89ed0c257fe7a5f69d4c40f8bb54"],["static/img/sm_italy5.f2c0aab.jpg","f2c0aab066ca9b0ea1124cdb9603f68b"],["static/img/sm_italy6.599057b.jpg","599057b2d55dcda40ad27224bdb4f4d6"],["static/img/sm_italy7.4037ad8.jpg","4037ad83296b0cda79da0e252ad6bcc1"],["static/img/sm_italy8.baed441.jpg","baed44165b55ba8c7747b885b6372a5c"],["static/img/sm_italy9.eba3e8b.jpg","eba3e8bf5c9fbe106029c3489e252ddd"],["static/img/sm_kino1.434c58e.jpg","434c58ea6c9b8bbe7bdf278ea0af5749"],["static/img/tsuruemon.jpg","9add06bffc907076461065286c2690c9"],["static/img/tsuruemon_circle.png","24fadf3f99ee98e5c56f2bb352b0e5cc"],["static/img/tsuruemon_circle_512.jpg","3499c6062aa1b7963b716e1fdd9962d8"],["static/img/tsuruemon_circle_512.png","9c3a19b41a183dd11e969f4c6bbd9c90"],["static/js/app.fe415248da6f4ca97e81.js","62b2ae1cd85cead147e887a875549ece"],["static/js/manifest.2ae2e69a05c33dfc65f8.js","40dcfff9d09d402daf38b8a86518deeb"],["static/js/vendor.d61c780ae08e8bb4a15b.js","165a616539d7d1563b2427245d168d04"]],cacheName="sw-precache-v3-tsuruemon-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,!1);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});