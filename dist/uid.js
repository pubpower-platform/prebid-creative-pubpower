/* v1.14.0-pre
Updated : 2022-04-12 */
!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBuyerUids=s,e.loadData=c;var n=function(t){if(t&&t.__esModule)return t;var e=u();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}}r.default=t,e&&e.set(t,r);return r}(r(1));function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}window.pbs=window.pbs||{},window.pbs.getBuyerUids=s;var o="https://prebid.adnxs.com/pbs/v1/getuids",a="ssp-buyeruids",i=14;function s(e){var t=n.getDataFromLocalStorage(a);if(l(t))c(e);else{try{t=JSON.parse(t)}catch(t){return void e(t,null)}delete t.lastUpdated,e(null,t)}}function c(e){l(n.getDataFromLocalStorage(a))&&n.ajax(o,function(t){try{(t=JSON.parse(t)).lastUpdated=n.timestamp(),n.setDataInLocalStorage(a,JSON.stringify(t)),delete t.lastUpdated,e(null,t)}catch(t){e(t,null)}},null,{withCredentials:!0})}function l(t){return!t||n.timestamp()>t.lastUpdated+24*i*60*60*1e3}c(function(){})},function(t,e,r){"use strict";function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){try{return!!window.localStorage}catch(t){console.log("Local storage api disabled")}}Object.defineProperty(e,"__esModule",{value:!0}),e.setDataInLocalStorage=function(t,e){n()&&window.localStorage.setItem(t,e)},e.getDataFromLocalStorage=function(t){if(n())return window.localStorage.getItem(t)},e.hasLocalStorage=n,e.timestamp=function(){return(new Date).getTime()},e.ajax=function(t,e,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var o,a=n.method||(r?"POST":"GET"),u="object"===c(e)?e:{success:function(){console.log("xhr success")},error:function(t){console.log("xhr error",null,t)}};if("function"==typeof e&&(u.success=e),(o=new window.XMLHttpRequest).onreadystatechange=function(){if(4===o.readyState){var t=o.status;200<=t&&t<300||304===t?u.success(o.responseText,o):u.error(o.statusText,o)}},o.ontimeout=function(){console.log("xhr timeout after ",o.timeout,"ms")},"GET"===a&&r){var i=parseURL(t,n);s(i.search,r),t=formatURL(i)}o.open(a,t),o.timeout=3e3,n.withCredentials&&(o.withCredentials=!0),n.preflight&&o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("Content-Type",n.contentType||"text/plain"),"POST"===a&&r?o.send(r):o.send()}catch(t){console.log("xhr construction",t)}}}]);