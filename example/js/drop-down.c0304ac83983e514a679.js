!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=7)}([function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){function r(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=v[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],n))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(c(r.parts[i],n));v[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],s=n.base?i[0]+n.base:i[0],a=i[1],u=i[2],l=i[3],c={css:a,media:u,sourceMap:l};r[s]?r[s].parts.push(c):e.push(r[s]={id:s,parts:[c]})}return e}function i(t,n){var e=g(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),y.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=y.indexOf(t);n>=0&&y.splice(n,1)}function a(t){var n=document.createElement("style");return t.attrs.type="text/css",l(n,t.attrs),i(t,n),n}function u(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(n,t.attrs),i(t,n),n}function l(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function c(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var l=b++;e=m||(m=a(n)),r=f.bind(null,e,l,!1),o=f.bind(null,e,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=u(n),r=d.bind(null,e,n),o=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(n),r=p.bind(null,e),o=function(){s(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}function f(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(i,s[n]):t.appendChild(i)}}function p(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var v={},h=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var n={};return function(e){return void 0===n[e]&&(n[e]=t.call(this,e)),n[e]}}(function(t){return document.querySelector(t)}),m=null,b=0,y=[],w=e(11);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||(n.singleton=h()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=o(t,n);return r(e,n),function(t){for(var i=[],s=0;s<e.length;s++){var a=e[s],u=v[a.id];u.refs--,i.push(u)}if(t){r(o(t,n),n)}for(var s=0;s<i.length;s++){var u=i[s];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete v[u.id]}}}};var x=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(6),o=e(8),i=e(5);$.fn.initDropDown=function(t){var n=t.staticElementId,s=t.cssParams,a=void 0===s?{}:s;e.i(i.a)(r.a);var u="fontground-"+(new Date).getTime();this.wrap('<div id="'+u+'"></div>');var l=$("#"+u);r.a.dropDown=this.get(0),r.a.parentOrigin=l.get(0),r.a.staticElement=$("#"+n),r.a.dropDown.addEventListener("touchstart",i.b),r.a.dropDown.addEventListener("touchmove",i.c),r.a.dropDown.addEventListener("touchend",i.d),r.a.staticElement.on("touchstart",i.e),r.a.staticElement.on("touchstart",i.f),r.a.staticElement.on("touchstart",i.g),e.i(o.a)(l,this,a)}},function(t,n,e){var r=e(9);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insertAt:"top"};o.transform=void 0;e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){var r=e(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insertAt:"top"};o.transform=void 0;e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){"use strict";function r(t){c=t}function o(t){var n=t.targetTouches[0];c.globalYPosition=n.pageY,$(c.dropDown).removeClass("slideInUp")}function i(t){var n=t.targetTouches[0],e=n.pageY-c.globalYPosition;c.globalYPosition=n.pageY;var r=c.dropDown.style.top,o=r.substring(0,r.length-2),i=0;e>0?0===c.dropDown.scrollTop&&(t.preventDefault(),c.flag=!0,i=o<100?e:Math.log(o)-Math.log(o-90),i>15&&(i=15),c.dropDown.style.top=1*o+i+"px",c.parentOrigin.style.top=1*o+i+"px"):c.parentOrigin.style.top.substring(0,r.length-2)>0&&(t.preventDefault(),o<1.5?(c.dropDown.style.top="0px",c.parentOrigin.style.top="0px"):(i=Math.log(o),c.dropDown.style.top=1*o-i+"px",c.parentOrigin.style.top=1*o-i+"px"))}function s(t){if(c.flag){c.flag=!1,c.globalYPosition=0;var n=c.dropDown.style.top;document.styleSheets[0].cssRules[0]&&(document.styleSheets[0].cssRules[0].cssRules[0].style.cssText="transform: translate3d(0px, "+n+", 0px); visibility: visible;"),document.styleSheets[0].cssRules[1]&&(document.styleSheets[0].cssRules[1].cssRules[0].style.cssText="transform: translate3d(0px, "+n+", 0px); visibility: visible;"),$(c.dropDown).attr("class","slideInUp"),c.dropDown.style.top="0px",c.parentOrigin.style.top="0px"}}function a(t){t.preventDefault()}function u(t){t.preventDefault()}function l(t){}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return u}),e.d(n,"g",function(){return l});var c=null},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={globalYPosition:0,timer:null,flag:!1,staticElement:null,dropDown:null,parentOrigin:null}},function(t,n,e){e(4),e(3),e(2),console.log(document.styleSheets[0])},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t,n,e){var r={position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:19920219},o={width:"100%",height:"100%",overflow:"auto"},i=["position","top","left"],s=["overflow"];e.parent||(e.parent={}),e.dropDown||(e.dropDown={});for(var a in e.parent)-1!==i.indexOf(a)&&delete e.parent[a];for(var u in e.dropDown)-1!==s.indexOf(u)&&delete e.dropDown[u];r=$.extend(r,e.parent),o=$.extend(o,e.dropDown),t.css(r),n.css(o)}},function(t,n,e){n=t.exports=e(0)(void 0),n.push([t.i,".slideInUp {\r\n    position: relative;\r\n    -webkit-animation: slideInUp 0.6s cubic-bezier(0.55, 1.04, 1, 1);\r\n    animation: slideInUp 0.6s cubic-bezier(0.55, 1.04, 1, 1);\r\n}",""])},function(t,n,e){n=t.exports=e(0)(void 0),n.push([t.i,"@-webkit-keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n",""])},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);
//# sourceMappingURL=drop-down.c0304ac83983e514a679.js.map