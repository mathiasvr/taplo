if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e329188f.css",revision:"5cf80e706e99c6e18595c9c173d7bfab"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/23.cfea3e4c.js",revision:"88e7047b9de8788933db02f99d796ede"},{url:"assets/js/24.28ba7a21.js",revision:"5e2a178d2bff5eb8af817308e681bd50"},{url:"assets/js/app.e4680a1d.js",revision:"734a5d2d7f97009c3ae36447012cbd8e"},{url:"assets/js/layout-Blog.d9ac5648.js",revision:"e4620acd2390549644007724ebeeadf3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.ce89727d.js",revision:"407c769962d7c3bd7a2d1dca44541079"},{url:"assets/js/layout-Layout.3e3b72c9.js",revision:"44b669bc22cc00b1afca69e414c688ff"},{url:"assets/js/layout-NotFound.ee15398d.js",revision:"d95f27ac0c5fce333a8d962dea9a2810"},{url:"assets/js/page--1b684565.13aa3311.js",revision:"c0bbd6df8719f67dcad806ef44cd1d7c"},{url:"assets/js/page--1bb59a95.13ddc413.js",revision:"3199b6688ce085a5c060a7147bc93574"},{url:"assets/js/page--299bf1d6.3600cad4.js",revision:"75a25f66fbcb20a613b93b902512d9a8"},{url:"assets/js/page--2b395795.fa92eae1.js",revision:"31702b4fd7c8bc1011df9eabd52b7c01"},{url:"assets/js/page--47f3cd45.98644e1c.js",revision:"072d9d7e75642bc05f6557a0385f2065"},{url:"assets/js/page--643aca55.03335f76.js",revision:"db68b25c70fdfb5e20c50fbcece1058a"},{url:"assets/js/page--88e4c9d6.558781f1.js",revision:"95379a14e7c5995de2852c135b2d3677"},{url:"assets/js/page--92b0901a.2c7c6d05.js",revision:"dde3d5bd6a9ac7badd8f05f16fb1098e"},{url:"assets/js/page--acb6e866.9e555955.js",revision:"a64953f8e1716a6140866cf18ca4fba7"},{url:"assets/js/page--e6087d4a.ac84287d.js",revision:"b0b8d49846e7e5b666f79a385ffad2fa"},{url:"assets/js/page-CommandLine--7e486d04.4f799411.js",revision:"a029305234b607a42bbb6ca192964f5d"},{url:"assets/js/page-Configuration--0d2ffd18.547625ed.js",revision:"2cdd863bc014dc5a831b14974328da4d"},{url:"assets/js/page-Home--99ebf2a4.f1f9e5ab.js",revision:"4b9c257517b2f73aa47be2c59a7e589d"},{url:"assets/js/page-Library--4a72c03a.a4a3461c.js",revision:"02823dbe0690c6eb6b9b677537466646"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.8435b144.js",revision:"3128acf7d09f9e7763626982b4e2f9f3"},{url:"assets/js/vendors~photo-swipe.968f7795.js",revision:"cb7f6d3f75f0b2667f26571f6b338377"},{url:"safari-pinned-tab.svg",revision:"01f01e8b72515de9c375f6101d3c0428"},{url:"taplo-icon.svg",revision:"e51572177da96056e8ce111602642097"},{url:"assets/fonts/materialdesignicons-webfont.3d1f8fa2.eot",revision:"3d1f8fa2f06249540889a7bbe69cf5bb"},{url:"assets/fonts/materialdesignicons-webfont.3e722fd5.ttf",revision:"3e722fd57a6db80ee119f0e2c230ccff"},{url:"assets/fonts/materialdesignicons-webfont.4187121a.woff2",revision:"4187121a4353440c2a865dbf1bc1901b"},{url:"assets/fonts/materialdesignicons-webfont.fec1b66a.woff",revision:"fec1b66adcf131415a2511bd77e747cc"},{url:"404.html",revision:"e6e2bb8c90a22290acd36d3daa123d51"},{url:"api/javaScript/classes/_index_.taplo/index.html",revision:"53a75ed7f17ab7436fc1ab6f2153a44a"},{url:"api/javaScript/globals/index.html",revision:"8e7b0e5d11ba398404d52f8a07f2f1ae"},{url:"api/javaScript/index.html",revision:"d70ec13fee2b9b249796004c3a1d10a0"},{url:"api/javaScript/interfaces/_index_.formatoptions/index.html",revision:"f3ae13cc0b328cde5eb722b3515b71bc"},{url:"api/javaScript/interfaces/_index_.formatteroptions/index.html",revision:"8ecdec70d2379ea9da2d744fcfdc608b"},{url:"api/javaScript/interfaces/_index_.linterror/index.html",revision:"cb76eac4a92965c0c4d343f00c44aaaf"},{url:"api/javaScript/interfaces/_index_.lintoptions/index.html",revision:"04112a85cfee438fa1f8b85d183c9b31"},{url:"api/javaScript/interfaces/_index_.lintresult/index.html",revision:"1effd76324f0f5e49fac5717f36703f2"},{url:"api/javaScript/interfaces/_index_.range/index.html",revision:"b449dd1642f2dbe8003ed24effe2d16e"},{url:"api/javaScript/modules/_index_/index.html",revision:"cc5c0ba271a9fe004a08b3760e97c5dd"},{url:"cli/index.html",revision:"b7ec8f8d82a84de47191925ec06b81e0"},{url:"configuration/index.html",revision:"529022bc31d5cfaee79255f9f286827e"},{url:"index.html",revision:"439c14e1c7e93ef5726d79c18c3ab9a9"},{url:"lib/index.html",revision:"112d36c9415b9450db3691a9ad0d25e4"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});