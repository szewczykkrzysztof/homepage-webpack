!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){"use strict";function r(e){if(e);else var t=new Date;return Intl.DateTimeFormat("pl-PL",{day:"numeric",year:"numeric",weekday:"long",month:"long"}).format(t)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.r(t);n(0);var r=n(1);console.log("HELLO 🚀"),document.querySelector(".burger--js").addEventListener("click",(function(){var e=document.querySelector(".navigation--js");console.log(e),e.classList.toggle("navigation--mobile")})),document.querySelector(".actionHeading--js").innerHTML="Witam cię na mojej stronie o godzinie ".concat((new Date).getHours(),":").concat((new Date).getMinutes());var o=document.querySelector(".action--js");console.log(o),o.innerHTML="Dzisiaj jest ".concat(Object(r.a)())}]);