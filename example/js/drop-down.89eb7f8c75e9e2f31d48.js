!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=9)}([function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={position:"absolute",width:"100%",height:"100%",overflow:"auto","padding-top":"300px"},r=["overflow"];t.dropDown||(t.dropDown={});for(var i in t.dropDown)-1!==r.indexOf(i)&&delete t.dropDown[i];o=e?$.extend(e,t.dropDown):$.extend(o,t.dropDown),n.css(o)}},function(n,t){function e(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=o(r);return[e].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[e].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var o=e(t,n);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];"number"==typeof s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){function o(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=v[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],t))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(u(o.parts[i],t));v[o.id]={id:o.id,refs:1,parts:s}}}}function r(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],a=i[1],l=i[2],c=i[3],u={css:a,media:l,sourceMap:c};o[s]?o[s].parts.push(u):e.push(o[s]={id:s,parts:[u]})}return e}function i(n,t){var e=g(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),b.push(t);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function s(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=b.indexOf(n);t>=0&&b.splice(t,1)}function a(n){var t=document.createElement("style");return n.attrs.type="text/css",c(t,n.attrs),i(n,t),t}function l(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",c(t,n.attrs),i(n,t),t}function c(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function u(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var c=w++;e=m||(m=a(t)),o=p.bind(null,e,c,!1),r=p.bind(null,e,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=l(t),o=d.bind(null,e,t),r=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=a(t),o=f.bind(null,e),r=function(){s(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}function p(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function f(n,t){var e=t.css,o=t.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function d(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=D(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var v={},h=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),g=function(n){var t={};return function(e){return void 0===t[e]&&(t[e]=n.call(this,e)),t[e]}}(function(n){return document.querySelector(n)}),m=null,w=0,b=[],D=e(12);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=r(n,t);return o(e,t),function(n){for(var i=[],s=0;s<e.length;s++){var a=e[s],l=v[a.id];l.refs--,i.push(l)}if(n){o(r(n,t),t)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete v[l.id]}}}};var y=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t,e){"use strict";function o(){$("#header p").html("reset"),r.a.dropDown.style.paddingTop="300px",r.a.dropDown.scrollTop+=300,r.a.reset=!1,e.i(s.c)(),e.i(s.d)()}Object.defineProperty(t,"__esModule",{value:!0});var r=e(8),i=e(0),s=e(7);$.fn.initDropDown=function(n){var t=n.staticElementId,o=n.cssParams,a=void 0===o?{}:o;e.i(s.a)(r.a),r.a.dropDown=this.get(0),r.a.staticElement=$("#"+t),e.i(s.b)(),e.i(s.c)(),e.i(s.d)(),r.a.dropDown.addEventListener("touchmove",s.e),r.a.dropDown.addEventListener("touchend",s.f),r.a.staticElement.on("touchstart",s.g),r.a.staticElement.on("touchmove",s.h),r.a.staticElement.on("touchend",s.i),r.a.cssParams=a,e.i(i.a)(this,a)},$(function(){r.a.dropDown.scrollTop=300,$(r.a.dropDown).scroll(function(n){var t=r.a.dropDown.scrollTop;r.a.scrollIntervel||(r.a.scrollIntervel=t);var i=t-r.a.scrollIntervel;if(r.a.scrollIntervel=t,0===t&&"0px"===r.a.dropDown.style.paddingTop&&setTimeout(o,100),t<=300&&"0px"!==r.a.dropDown.style.paddingTop&&!r.a.upDownFlag){console.log("scroll down");var a=0;a=e.i(s.j)(t,100),r.a.dropDown.scrollTop+=a}t<=100&&"0px"!==r.a.dropDown.style.paddingTop&&(r.a.dropDown.scrollTop=100),i<0&&t>300&&!r.a.touching&&!r.a.reset&&($("#header p").html("delete padding"),console.log("delete padding"),r.a.reset=!0,r.a.dropDown.scrollTop-=300,r.a.dropDown.style.paddingTop="0px")})})},function(n,t){$("#header").click(function(){$("#header p").html("Drop Down")})},function(n,t,e){var o=e(10);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;e(2)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){var o=e(11);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;e(2)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){"use strict";function o(n){D=n}function r(n){console.log("start"),D.firstScroll=D.dropDown.scrollTop;var t=n.targetTouches[0];D.globalYPosition=t.pageY,$(D.dropDown).removeClass("slideInUp")}function i(n){console.log("moving"),D.scrollTop=D.dropDown.scrollTop;var t=n.targetTouches[0],e=t.pageY-D.globalYPosition;D.globalYPosition=t.pageY;var o=0;e>0?(D.flag=!0,(300===D.scrollTop||D.flag||D.upDownMoving)&&(D.upDownMoving&&(D.upDownFlag=!1),D.upDownFlag&&300===D.firstScroll&&(n.preventDefault(),o=b(D.scrollTop,70),D.dropDown.scrollTop-=o))):e<0&&D.scrollTop<300?(n.preventDefault(),D.dropDown.scrollTop-=e):e<0&&D.scrollTop>300&&(D.upDownMoving=!0),e>0&&D.scrollTop<=100&&(D.dropDown.scrollTop=100)}function s(n){console.log("end");var t=D.dropDown.scrollTop;if(D.flag&&t<300){D.flag=!1,D.globalYPosition=0,D.dropDown.style.paddingTop="300px";f(300-D.scrollTop+"px"),setTimeout(d,410)}t>300&&(console.log("end unbind"),g(),w())}function a(n){D.touching=!0,D.dropDown.scrollTop<=300&&(h(),m())}function l(n){D.touching=!1,D.upDownMoving=!1,D.upDownFlag=!0,D.reset=!1,D.count=0,D.lastIntervel=0}function c(n){n.preventDefault()}function u(n){n.preventDefault()}function p(n){}function f(n){document.styleSheets[0].cssRules[0]&&(document.styleSheets[0].cssRules[0].cssRules[0].style.cssText="transform: translate3d(0px, "+n+", 0px); visibility: visible;"),document.styleSheets[0].cssRules[1]&&(document.styleSheets[0].cssRules[1].cssRules[0].style.cssText="transform: translate3d(0px, "+n+", 0px); visibility: visible;"),$(D.dropDown).attr("class","slideInUp"),D.dropDown.scrollTop=300}function d(){var n=D.dropDown.scrollTop;300!==n&&f(n+"px")}function v(){D.dropDown.addEventListener("touchstart",r)}function h(){D.dropDown.addEventListener("touchmove",i)}function g(){D.dropDown.removeEventListener("touchmove",i)}function m(){D.dropDown.addEventListener("touchend",s)}function w(){D.dropDown.removeEventListener("touchend",s)}function b(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,e=0;return D.lastIntervel||(D.lastIntervel=Math.log(301-n)-.1),301-n==1?e=.1:(e=Math.log(301-n)-D.lastIntervel,D.lastIntervel=Math.log(301-n)),e||(e=0),e>.1&&(e=.01),e=Math.abs(e)*t,e>5&&(e=5),e}e.d(t,"a",function(){return o}),e.d(t,"e",function(){return a}),e.d(t,"f",function(){return l}),e.d(t,"b",function(){return v}),e.d(t,"c",function(){return h}),e.d(t,"d",function(){return m}),e.d(t,"g",function(){return c}),e.d(t,"h",function(){return u}),e.d(t,"i",function(){return p}),e.d(t,"j",function(){return b});var D=(e(0),null)},function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o={globalYPosition:0,flag:!0,staticElement:null,dropDown:null,parentOrigin:null,cssParams:null,scrollTop:0,touching:!1,reset:!1,upDownMoving:!1,count:0,upDownFlag:!0,lastIntervel:0,scrollIntervel:0,firstScroll:0}},function(n,t,e){e(6),e(5),e(3),e(4)},function(n,t,e){t=n.exports=e(1)(void 0),t.push([n.i,".slideInUp {\r\n    position: relative;\r\n    -webkit-animation: slideInUp 0.4s cubic-bezier(0.55, 1.04, 1, 1);\r\n    animation: slideInUp 0.4s cubic-bezier(0.55, 1.04, 1, 1);\r\n}",""])},function(n,t,e){t=n.exports=e(1)(void 0),t.push([n.i,"@-webkit-keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);
//# sourceMappingURL=drop-down.89eb7f8c75e9e2f31d48.js.map