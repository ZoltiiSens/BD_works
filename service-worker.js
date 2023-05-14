/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd43c7bc89b33bda6b80489901e9b093"
  },
  {
    "url": "assets/css/0.styles.0b12a3cc.css",
    "revision": "12115ffb3c187db235d7f4fbb86383e8"
  },
  {
    "url": "assets/img/1.d10d7615.png",
    "revision": "d10d7615711af89cac7090fa68301c29"
  },
  {
    "url": "assets/img/10.c089d2cc.png",
    "revision": "c089d2cccd3048c36ce59d66d3caf0a1"
  },
  {
    "url": "assets/img/11.b986ea14.png",
    "revision": "b986ea14b47bf4d4a53bda9edafc41a9"
  },
  {
    "url": "assets/img/2.27a6c38f.png",
    "revision": "27a6c38f624b76401d377dedffb8cfbc"
  },
  {
    "url": "assets/img/3.df7815ce.png",
    "revision": "df7815ce79a696b080e2669b69cd68be"
  },
  {
    "url": "assets/img/4.2ff198dd.png",
    "revision": "2ff198dd02d9401c720cb18c09d28ead"
  },
  {
    "url": "assets/img/5.4032b536.png",
    "revision": "4032b5363c81bdd7fca3239206f61427"
  },
  {
    "url": "assets/img/6.2ef1d56c.png",
    "revision": "2ef1d56cd3031d2d8e1b65fc33a7c9d7"
  },
  {
    "url": "assets/img/7.7316d453.png",
    "revision": "7316d4533a3d07871d5af456fbcf5ce6"
  },
  {
    "url": "assets/img/8.ae7d9307.png",
    "revision": "ae7d9307c194d62bce83a58a8a3af115"
  },
  {
    "url": "assets/img/9.becfcb9c.png",
    "revision": "becfcb9cd1ff0ea17f15821682640ed7"
  },
  {
    "url": "assets/img/img.0b7b8bbd.png",
    "revision": "0b7b8bbd9dc5bd2b8fdd1d3627caeeb1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eac57dfe.js",
    "revision": "0b41935bdb1f3c3bd64238d13ab9686b"
  },
  {
    "url": "assets/js/11.fce56113.js",
    "revision": "cf6724619d311cce5dd576835eb7ace3"
  },
  {
    "url": "assets/js/12.1183a11d.js",
    "revision": "47e61702fed39a2ef0a5800dd2a3da6f"
  },
  {
    "url": "assets/js/13.9ec96c11.js",
    "revision": "c3098009a0eebf47afbe9da70bb728f3"
  },
  {
    "url": "assets/js/14.77bf6617.js",
    "revision": "feac47906dc5e857ea5e7547d3932e05"
  },
  {
    "url": "assets/js/15.76f3ea39.js",
    "revision": "6933003113a8f7a4bd128b2d2fe85075"
  },
  {
    "url": "assets/js/16.b51686ce.js",
    "revision": "48416cae296e49971f5432bad6abdea9"
  },
  {
    "url": "assets/js/17.0578cd4a.js",
    "revision": "fcb7649130950bc9b6f72ae77a269097"
  },
  {
    "url": "assets/js/18.b86da22f.js",
    "revision": "108c6d8167b17abb768a18e76a5fcac2"
  },
  {
    "url": "assets/js/19.01f0169c.js",
    "revision": "a0c4ec0dbc4354df326d3adda0d2ac13"
  },
  {
    "url": "assets/js/2.3205284a.js",
    "revision": "4825743a67a3d5032da0f6a148eacaef"
  },
  {
    "url": "assets/js/20.99ac5c46.js",
    "revision": "a9fc87b54a4482a32a68c274ade910b5"
  },
  {
    "url": "assets/js/21.fa0217fe.js",
    "revision": "78b17d97324c4d6a74a1677c6681f36a"
  },
  {
    "url": "assets/js/22.0fedb578.js",
    "revision": "eef0efad508d5521799e833c0fab9a80"
  },
  {
    "url": "assets/js/23.d52b08e3.js",
    "revision": "3beb63f67691297c015b581140093ad9"
  },
  {
    "url": "assets/js/24.4ce5be5f.js",
    "revision": "89daa7ddb282be41a756b63eb1726655"
  },
  {
    "url": "assets/js/26.035f2080.js",
    "revision": "e16cad710e8aa294d4356e2f3dbf211a"
  },
  {
    "url": "assets/js/3.17ca8910.js",
    "revision": "be1e463aa47ae4cd82b0463ca63ae7a7"
  },
  {
    "url": "assets/js/4.f87a805a.js",
    "revision": "d09baef990eae8e501f283e5591cf17e"
  },
  {
    "url": "assets/js/5.478a3daf.js",
    "revision": "77554ce519a8dae38e14489e0ef6edf3"
  },
  {
    "url": "assets/js/6.53bd333b.js",
    "revision": "b93b186b92a92fd5527bacc991d0560d"
  },
  {
    "url": "assets/js/7.e284800a.js",
    "revision": "704ce28d66bceb9f76f2197940e21fca"
  },
  {
    "url": "assets/js/8.e512d643.js",
    "revision": "b357fdf61c42c6e1b9c3d482b1d62b0f"
  },
  {
    "url": "assets/js/9.0a5c95ae.js",
    "revision": "cf68af695748590220926035dc1ee1b1"
  },
  {
    "url": "assets/js/app.d3109603.js",
    "revision": "e504bd177f0d707ee463157c2c394767"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a18a1e1a5dd09c3a148d5449fcd254b7"
  },
  {
    "url": "design/index.html",
    "revision": "e102dc121d820f170767641d7f18662c"
  },
  {
    "url": "index.html",
    "revision": "dc3b4bd0636d600ce19a20dd64319fcf"
  },
  {
    "url": "intro/index.html",
    "revision": "88bd74f05a8e1f42fd1508e39b1abe88"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c723fff3493c09b7d3cfa5f12eac5129"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "212aff55b27e51e1752f4e6905b5a0f9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "48caf96183ede498994c358f4c35743b"
  },
  {
    "url": "software/index.html",
    "revision": "6777e6456174d6eee580ccc8de931a2f"
  },
  {
    "url": "test/index.html",
    "revision": "c2a84f8a3dffaeb03e1ce059b9b49bfc"
  },
  {
    "url": "use cases/index.html",
    "revision": "6f5e521e5528ca6ee643cb7c0e5bedf6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
