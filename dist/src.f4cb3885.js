parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ANro":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=exports.h=exports.text=exports.memo=void 0;var e={},r=[],n=e=>e,t=r.map,o=Array.isArray,l="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,i=e=>{var r="";if("string"==typeof e)return e;if(o(e))for(var n,t=0;t<e.length;t++)(n=i(e[t]))&&(r+=(r&&" ")+n);else for(var t in e)e[t]&&(r+=(r&&" ")+t);return r},s=(e,r)=>{for(var n in{...e,...r})if("function"==typeof(o(r[n]=e[n])?r[n][0]:r[n]));else if(e[n]!==r[n])return!0},a=e=>null==e?e:e.key,u=(e,r,n,t,o,l)=>{if("key"===r);else if("style"===r)for(var s in{...n,...t})n=null==t||null==t[s]?"":t[s],"-"===s[0]?e[r].setProperty(s,n):e[r][s]=n;else"o"===r[0]&&"n"===r[1]?((e.tag||(e.tag={}))[r=r.slice(2)]=t)?n||e.addEventListener(r,o):e.removeEventListener(r,o):!l&&"list"!==r&&"form"!==r&&r in e?e[r]=null==t?"":t:null==t||!1===t||"class"===r&&!(t=i(t))?e.removeAttribute(r):e.setAttribute(r,t)},d=(e,r,n)=>{var t=e.props,o=3===e.tag?document.createTextNode(e.type):(n=n||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type,{is:t.is}):document.createElement(e.type,{is:t.is});for(var l in t)u(o,l,null,t[l],r,n);for(var i=0;i<e.children.length;i++)o.appendChild(d(e.children[i]=f(e.children[i]),r,n));return e.node=o},p=(e,r,n,t,o,l)=>{if(n===t);else if(null!=n&&3===n.tag&&3===t.tag)n.type!==t.type&&(r.nodeValue=t.type);else if(null==n||n.type!==t.type)r=e.insertBefore(d(t=f(t),o,l),r),null!=n&&e.removeChild(n.node);else{var i,s,m,v,y=n.props,c=t.props,h=n.children,g=t.children,x=0,w=0,C=h.length-1,k=g.length-1;for(var A in l=l||"svg"===t.type,{...y,...c})("value"===A||"selected"===A||"checked"===A?r[A]:y[A])!==c[A]&&u(r,A,y[A],c[A],o,l);for(;w<=k&&x<=C&&null!=(m=a(h[x]))&&m===a(g[w]);)p(r,h[x].node,h[x],g[w]=f(g[w++],h[x++]),o,l);for(;w<=k&&x<=C&&null!=(m=a(h[C]))&&m===a(g[k]);)p(r,h[C].node,h[C],g[k]=f(g[k--],h[C--]),o,l);if(x>C)for(;w<=k;)r.insertBefore(d(g[w]=f(g[w++]),o,l),(s=h[x])&&s.node);else if(w>k)for(;x<=C;)r.removeChild(h[x++].node);else{var N={},b={};for(A=x;A<=C;A++)null!=(m=h[A].key)&&(N[m]=h[A]);for(;w<=k;)m=a(s=h[x]),v=a(g[w]=f(g[w],s)),b[m]||null!=v&&v===a(h[x+1])?(null==m&&r.removeChild(s.node),x++):null==v||1===n.tag?(null==m&&(p(r,s&&s.node,s,g[w],o,l),w++),x++):(m===v?(p(r,s.node,s,g[w],o,l),b[v]=!0,x++):null!=(i=N[v])?(p(r,r.insertBefore(i.node,s&&s.node),i,g[w],o,l),b[v]=!0):p(r,s&&s.node,null,g[w],o,l),w++);for(;x<=C;)null==a(s=h[x++])&&r.removeChild(s.node);for(var A in N)null==b[A]&&r.removeChild(N[A].node)}}return t.node=r},f=(e,r)=>!0!==e&&!1!==e&&e?"function"==typeof e.tag?((!r||null==r.memo||((e,r)=>{for(var n in e)if(e[n]!==r[n])return!0;for(var n in r)if(e[n]!==r[n])return!0})(r.memo,e.memo))&&((r=e.tag(e.memo)).memo=e.memo),r):e:c(""),m=r=>3===r.nodeType?c(r.nodeValue,r):v(r.nodeName.toLowerCase(),e,t.call(r.childNodes,m),r,null,1),v=(e,r,n,t,o,l)=>({type:e,props:r,children:n,node:t,key:o,tag:l}),y=(e,r)=>({tag:e,memo:r});exports.memo=y;var c=(n,t)=>v(n,e,r,t,null,3);exports.text=c;var h=(e,n,t)=>v(e,n,o(t)?t:null==t?r:[t],null,n.key);exports.h=h;var g=e=>{var r,t,i=e.view,a=e.node,u=e.subscriptions,d=a&&m(a),f=[],v=e=>{t!==e&&(t=e,u&&(f=((e,r,n)=>{for(var t,o,l=[],i=0;i<e.length||i<r.length;i++)t=e[i],o=r[i],l.push(o&&!0!==o?!t||o[0]!==t[0]||s(o[1],t[1])?[o[0],o[1],o[0](n,o[1]),t&&t[2]()]:t:t&&t[2]());return l})(f,u(t),y)),i&&!r&&l(h,r=!0))},y=(e.middleware||n)((e,r)=>"function"==typeof e?y(e(t,r)):o(e)?"function"==typeof e[0]?y(e[0],e[1]):e.slice(1).map(e=>e&&!0!==e&&e[0](y,e[1]),v(e[0])):v(e)),c=function(e){y(this.tag[e.type],e)},h=()=>a=p(a.parentNode,a,d,d=i(t),c,r=!1);y(e.init)};exports.app=g;
},{}],"yj7J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("hyperapp"),t=function(t,r){for(var n,o=arguments.length,p=new Array(o>2?o-2:0),u=2;u<o;u++)p[u-2]=arguments[u];return"function"==typeof t?t(r,p):(0,e.h)(t,r||{},(n=[]).concat.apply(n,p).map(function(t){return"string"==typeof t||"number"==typeof t?(0,e.text)(t):t}))};exports.default=t;
},{"hyperapp":"ANro"}],"yCDU":[function(require,module,exports) {

},{}],"V8il":[function(require,module,exports) {
module.exports=" ____  _        _                ____          _      \n/ ___|| |_ __ _| |_ _   _ ___   / ___|___   __| | ___\n\\___ \\| __/ _` | __| | | / __| | |   / _ \\ / _` |/ _ \\ \n ___) | || (_| | |_| |_| \\__ \\ | |__| (_) | (_| |  __/\n|____/ \\__\\__,_|\\__|\\__,_|___/  \\____\\___/ \\__,_|\\___|";
},{}],"OQrV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("../hyperapp-jsx")),t=u(require("../../assets/title.txt"));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(){return(0,e.default)("main",null,(0,e.default)("pre",null,t.default),(0,e.default)("p",null,"Press any key to continue..."," ",(0,e.default)("span",{class:"flash animated infinite"},"|")))},l=a;exports.default=l;
},{"../hyperapp-jsx":"yj7J","../../assets/title.txt":"V8il"}],"LX7S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../hyperapp-jsx"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach(function(t){n(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e,t,r){var n=e.intro.step+1;return a(a({},e),{},n===r?{view:"map"}:{intro:{step:Math.min(n,r)}})},o=function(t){var r=t.intro.step,a=[(0,e.default)("p",{className:"animated flash",style:{opacity:0}},"Your machine is connected to The Cloud, a system of interconnected servers that speak with each other."),(0,e.default)("p",{className:"animated flash",style:{opacity:0}},"Normally, users of The Cloud are free to visit any server they wish but something has gone wrong."),(0,e.default)("p",{className:"animated flash",style:{opacity:0}},"Many of the servers that should be working are responding with 404 Not Found."),(0,e.default)("p",{className:"animated flash",style:{opacity:0}},"Attempt to establish a connection to these servers and return them to the network (200 OK).")];return(0,e.default)("main",{onclick:function(e,t){return s(e,t,a.length)}},a.slice(0,r+1),(0,e.default)("p",{className:"",style:{opacity:1}},"Press any key to"," ",r===a.length-1?(0,e.default)("span",{class:"flash animated",style:{animationDelay:"750ms"}},"START"):"continue","... ",(0,e.default)("span",{class:"flash animated infinite"},"|")))},i=o;exports.default=i;
},{"../hyperapp-jsx":"yj7J"}],"Tb1R":[function(require,module,exports) {
module.exports="/tiles.90832e41.png";
},{}],"jWsf":[function(require,module,exports) {
"use strict";function t(t,o){return e(t)||n(t,o)||a(t,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(s){o=!0,i=s}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return n}}function e(t){if(Array.isArray(t))return t}function o(t){return s(t)||u(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,r){if(t){if("string"==typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,r):void 0}}function u(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return c(t)}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.findAllIndices=L,exports.pickRandomlyFromArray=S,exports.getAllLocations=U,exports.getLocationsInSquare=exports.getLocationsInDiamond=exports.getLocationsInArea=exports.manhattanDistance=exports.getNeighborLocations=exports.getNeighbors=exports.isLocationInBounds=exports.findUnitIndexAtLocation=exports.findUnitAtLocation=exports.isUnitAtLocation=exports.isUnitHeadAtLocation=exports.updateArray=exports.deepClone=void 0;var f=function(t){return JSON.parse(JSON.stringify(t))};exports.deepClone=f;var p=function(t,r,n){return[].concat(o(t.slice(0,r)),[n(t[r])],o(t.slice(r+1)))};exports.updateArray=p;var l=function(r,n){var e=t(n,2),o=e[0],i=e[1];return r.tiles[0][0]===o&&r.tiles[0][1]===i};exports.isUnitHeadAtLocation=l;var d=function(r,n){var e=t(n,2),o=e[0],i=e[1];return r.tiles.some(function(t){return t[0]===o&&t[1]===i})};exports.isUnitAtLocation=d;var h=function(t,r){return t.find(function(t){return d(t,r)})};exports.findUnitAtLocation=h;var v=function(t,r){return t.findIndex(function(t){return d(t,r)})};exports.findUnitIndexAtLocation=v;var x=function(t,r){return r[0]>=0&&r[1]>=0&&r[0]<t.length&&r[1]<t[0].length};exports.isLocationInBounds=x;var y=function(t,r){return[[r[0]-1,r[1]],[r[0]+1,r[1]],[r[0],r[1]-1],[r[0],r[1]+1]].filter(function(r){return x(t,r)})};exports.getNeighborLocations=y;var b=y;exports.getNeighbors=b;var g=function(t,r,n){for(var e=[],o=1;o<=n;o++)e.push([r[0]-o,r[1]],[r[0]+o,r[1]],[r[0],r[1]-o],[r[0],r[1]+o]);return e.filter(function(r){return x(t,r)})};exports.getLocationsInArea=g;var m=function(t,r,n){for(var e=[],o=0;o<=n;o++)if(e.push([r[0]+(-n+o),r[1]]),e.push([r[0]+(n-o),r[1]]),0!==o)for(var i=1;i<=o;i++)e.push([r[0]+(-n+o),r[1]+i],[r[0]+(-n+o),r[1]-i]),e.push([r[0]+(n-o),r[1]+i],[r[0]+(n-o),r[1]-i]);return e.filter(function(r){return x(t,r)})};exports.getLocationsInDiamond=m;var A=function(t,r,n){for(var e=[],o=0;o<=n;o++)for(var i=0;i<=n;i++)e.push([r[0]-o,r[1]+i],[r[0]+o,r[1]+i],[r[0]+o,r[1]-i],[r[0]-o,r[1]-i]);return e.filter(function(r){return x(t,r)})};function L(t,r){for(var n=0;n<t.length;n=1)r(t[n],n,t)&&indexes.push(n);return[]}exports.getLocationsInSquare=A;var I=function(t,r){return Math.abs(t[0]-r[0])+Math.abs(t[1]-r[1])};function S(t){return t[Math.floor(Math.random()*t.length)]}function U(t){var r=[];return t.forEach(function(t,n){return t.forEach(function(t,e){r.push([n,e])})}),r}exports.manhattanDistance=I;
},{}],"iA92":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Grid=exports.Server=exports.Sprite=void 0;var t=n(require("../hyperapp-jsx")),e=require("../utils");function n(t){return t&&t.__esModule?t:{default:t}}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return c(t)||i(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return d(t)}function s(t,e){return f(t)||p(t,e)||u(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}function f(t){if(Array.isArray(t))return t}var m=16,v=function(e){var n=e.sheet,r=e.icon,o=s(r=void 0===r?[]:r,2),a=o[0],i=o[1],c=e.color,l=void 0===c?"white":c,u=e.bg,d=void 0===u?"transparent":u,p=e.scale,f=void 0===p?1:p,v=e.onclick,b=e.selected,y=e.moveTarget,h=e.attackTarget,g=e.neighbors,x=void 0===g?[]:g,k=e.animation,w=void 0===k?{}:k,A=e.onanimationend;return(0,t.default)("div",{class:"sprite".concat(b?" selected":"").concat(y?" move-target":"").concat(h?" attack-target":"").concat("UNSTARTED"===w.state?" animated ".concat("ADDED"===w.type?"scale-in":"scale-out"," fast"):""),style:{width:"".concat(m*f,"px"),height:"".concat(m*f,"px"),backgroundColor:"UNSTARTED"===w.state&&"REMOVED"===w.type?w.bg:d,borderTop:!x.some(function(t){return-1===t[0]})||b||y||h?"":"2px solid transparent",borderBottom:!x.some(function(t){return 1===t[0]})||b||y||h?"":"2px solid transparent",borderRight:!x.some(function(t){return 1===t[1]})||b||y||h?"":"2px solid transparent",borderLeft:!x.some(function(t){return-1===t[1]})||b||y||h?"":"2px solid transparent"},onclick:v,onanimationend:A},void 0!==a&&(0,t.default)("div",{style:{width:"".concat(m,"px"),height:"".concat(m,"px"),transform:"scale(".concat(f,")"),transformOrigin:"top left",backgroundColor:l,webkitMaskImage:"url(".concat(n,")"),webkitMaskPosition:"-".concat(i*m,"px -").concat(a*m,"px"),position:"absolute"}}),y&&(0,t.default)("div",{style:{width:"".concat(m,"px"),height:"".concat(m,"px"),transform:"scale(".concat(f,")"),transformOrigin:"top left",backgroundColor:"cyan",webkitMaskImage:"url(".concat(n,")"),webkitMaskPosition:"-".concat(4*m,"px -").concat(0*m,"px"),position:"absolute"}}),h&&(0,t.default)("div",{style:{width:"".concat(m,"px"),height:"".concat(m,"px"),transform:"scale(".concat(f,")"),transformOrigin:"top left",backgroundColor:"red",webkitMaskImage:"url(".concat(n,")"),webkitMaskPosition:"-".concat(5*m,"px -").concat(0*m,"px"),position:"absolute"}}))};exports.Sprite=v;var b=function(e){var n=e.sheet,r=e.icon,o=e.label,a=e.statusCode,i=e.onclick,c=2===Math.floor(a/100)?"green":"red";return(0,t.default)("div",{class:"server",onclick:i},(0,t.default)(v,{sheet:n,icon:r,scale:3}),(0,t.default)("p",null,o),(0,t.default)("p",{class:"statusCode"},(0,t.default)("span",{class:"flash animated infinite",style:{color:c}},"●"," ")," ",a))};exports.Server=b;var y=function(n){var a,i=n.sheet,c=n.tiles,s=n.onTileClick,l=n.onAnimationEnd,u=n.selected;return(0,t.default)("div",{class:"grid",style:{display:"grid",gridTemplateColumns:"".concat(3*m+16,"px ").repeat(c[0].length),gridTemplateRows:"".concat(3*m+16,"px ").repeat(c.length)}},(a=[]).concat.apply(a,o(c.map(function(n,o){return n.map(function(n,a){var d,p,f=n.animation;"REMOVED"===(null===(d=n.animation)||void 0===d?void 0:d.type)&&(n.animation.removedTiles.some(function(t){return t[0]===o&&t[1]===a})||(f={}));"ADDED"===(null===(p=n.animation)||void 0===p?void 0:p.type)&&(n.animation.movedTiles.some(function(t){return t[0]===o&&t[1]===a})||(f={}));return(0,t.default)(v,r({onclick:function(t){return s(t,[o,a])},onanimationend:function(t){return l(t,[o,a])},sheet:i,scale:3,selected:u[0]===o&&u[1]===a,neighbors:(0,e.getNeighborLocations)(c,[o,a]).filter(function(t){return(0,e.isUnitAtLocation)(n,t)}).map(function(t){return[t[0]-o,t[1]-a]})},n,{animation:f}))})}))))};exports.Grid=y;
},{"../hyperapp-jsx":"yj7J","../utils":"jWsf"}],"KaCa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../hyperapp-jsx")),t=n(require("../../assets/tiles.png")),r=require("../components");function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e,t){return u(u({},e),{},{connection:u(u({},e.connection),{},{serverIndex:t}),view:"connection"})},a=function(n){var o=n.map.servers;return(0,e.default)("main",null,(0,e.default)("p",null,"--- The Cloud -----------------------[x]---"),(0,e.default)("div",{class:"map"},o.map(function(n,o){return(0,e.default)(r.Server,{sheet:t.default,icon:n.icon,label:n.name,statusCode:n.statusCode,onclick:function(e){return i(e,o)}})})),(0,e.default)("p",null,"Click a server to attempt to establish a connection..."))},l=a;exports.default=l;
},{"../hyperapp-jsx":"yj7J","../../assets/tiles.png":"Tb1R","../components":"iA92"}],"tUWO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("../hyperapp-jsx")),t=require("../utils");function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,n){return o(o({},e),{},{connection:o(o({},e.connection),{},{step:0}),map:o(o({},e.map),{},{selected:n}),battle:o(o({},e.battle),{},{tiles:(0,t.deepClone)(e.map.servers[n].tiles),units:(0,t.deepClone)(e.map.servers[n].units)}),view:"battle"})},a=function(e,t,n){var r=e.connection.step+1;return r===n?i(e,e.connection.serverIndex):o(o({},e),{},{connection:o(o({},e.connection),{},{step:Math.min(r,n)})})},s=function(t){var n=t.map.servers,r=t.connection,o=r.step,c=n[r.serverIndex].name,i=[(0,e.default)("p",{className:"animated flash",style:{opacity:0}},"Establishing connection to ",c,"...."),(0,e.default)("p",{className:"animated flash",style:{opacity:0,color:"red"}},"WARNING - Shield OS has detected hostile connection attempt. Deploying virus control programs.")];return(0,e.default)("main",{onclick:function(e,t){return a(e,t,i.length)}},i.slice(0,o+1),(0,e.default)("p",{className:"",style:{opacity:1}},"Press any key to"," ",o===i.length-1?"HACK past the rogue virus control programs":"continue","... ",(0,e.default)("span",{class:"flash animated infinite"},"|")))},l=s;exports.default=l;
},{"../hyperapp-jsx":"yj7J","../utils":"jWsf"}],"Vouv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("../hyperapp-jsx")),e=i(require("../../assets/tiles.png")),n=require("../components/index"),r=require("../utils");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return u(t)||l(t,e)||f(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){i=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}function u(t){if(Array.isArray(t))return t}function c(t){return b(t)||d(t)||f(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function d(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function b(t){if(Array.isArray(t))return v(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t,e){return m(m({},t),{},{battle:m(m({},t.battle),{},{selectedAction:e})})},g=function(t){return m(m({},t),{},{battle:m(m({},t.battle),{},{selectedAction:-1})})},A=function(t,e){return t.battle.selectedAction===e?g(t):h(t,e)},w=function(t,e){return m(m({},t),{},{battle:m(m({},t.battle),{},{selected:e})})},O=function(t){return m(m({},t),{},{battle:m(m({},t.battle),{},{selected:[]})})},E=function(t,e){var n=t.units,i=t.tiles,a=t.selected,o=t.selectedAction,l=(0,r.getNeighbors)(i,e),u=n.find(function(t){return(0,r.isUnitHeadAtLocation)(t,a)});return l.some(function(t){return a[0]===t[0]&&a[1]===t[1]&&u&&!n.some(function(t){return(0,r.isUnitAtLocation)(t,e)})&&u.moves[0]>0})&&-1===o},T=function(t,e,n){var i=t.units,a=t.tiles,o=t.selected,l=t.selectedAction;if(-1===l)return!1;var u=n[(0,r.findUnitAtLocation)(i,o).abilities[l]],c=[];switch(!0){case u.area.includes("cross"):var s=parseInt(u.area.match(/cross(\d+)/)[1]);c=(0,r.getLocationsInArea)(a,e,s);break;case u.area.includes("diamond"):var f=parseInt(u.area.match(/diamond(\d+)/)[1]);c=(0,r.getLocationsInDiamond)(a,e,f);break;case u.area.includes("square"):var d=parseInt(u.area.match(/square(\d+)/)[1]);c=(0,r.getLocationsInSquare)(a,e,d)}return c.some(function(t){return o[0]===t[0]&&o[1]===t[1]&&i.some(function(t){return(0,r.isUnitHeadAtLocation)(t,o)})})},j=function(t,e,n){return m(m({},t),{},{battle:m(m({},t.battle),{},{units:(0,r.updateArray)(t.battle.units,e,function(t){if(0===t.moves[0])return t;var e=[n].concat(c(t.tiles));return e.length>t.size&&e.pop(),m(m({},t),{},{moves:[t.moves[0]-1,t.moves[1]],animation:{type:"ADDED",state:"UNSTARTED",movedTiles:[n]},tiles:e})}),selected:n})})},D=function(t,e,n){var i=t.battle.units[e],a=t.moves[i.abilities[t.battle.selectedAction]];if(0===i.ap[0])return t;var o=t.battle.units.findIndex(function(t){return(0,r.isUnitAtLocation)(t,n)});if(-1===o)return t;var l=(0,r.updateArray)(t.battle.units,e,function(t){return m(m({},t),{},{ap:[t.ap[0]-1,t.ap[1]]})}),u=(0,r.updateArray)(l,o,function(t){return m(m({},t),{},{animation:{type:"REMOVED",state:"UNSTARTED",bg:t.bg,removedTiles:t.tiles.slice(t.tiles.length-a.power)}})});return m(m({},t),{},{battle:m(m({},t.battle),{},{units:u,selectedAction:-1})})},L=function(t,e){var n=g(t),i=t.battle.units.findIndex(function(e){return(0,r.isUnitHeadAtLocation)(e,t.battle.selected)}),a=t.battle.units[i];return t.battle.selected[0]===e[0]&&t.battle.selected[1]===e[1]?O(n):2===t.battle.selected.length&&-1===t.battle.selectedAction&&E(t.battle,e)&&0===a.owner?j(t,i,e):2===t.battle.selected.length&&-1!==t.battle.selectedAction&&T(t.battle,e,t.moves)&&0===a.owner?D(t,i,e):w(n,e)},S=function(t,e){var n=(0,r.findUnitIndexAtLocation)(t.battle.units,e);return m(m({},t),{},{battle:m(m({},t.battle),{},{units:(0,r.updateArray)(t.battle.units,n,function(t){var n,r=null===(n=t.animation.removedTiles)||void 0===n?void 0:n.some(function(t){return t[0]===e[0]&&t[1]===e[1]}),i=t.tiles.findIndex(function(t){return t[0]===e[0]&&t[1]===e[1]}),a="REMOVED"===t.animation.type&&r?[].concat(c(t.tiles.slice(0,i)),c(t.tiles.slice(i+1))):t.tiles;return m(m({},t),{},{tiles:a.length>0?a:[[]],animation:m(m({},t.animation),{},{state:"COMPLETED"})})})})})},I=function(t){if(t.battle.units.every(function(t){return 0===t.owner||0===t.tiles[0].length}))return m(m({},t),{},{view:"map",map:m(m({},t.map),{},{servers:(0,r.updateArray)(t.map.servers,t.map.selected,function(t){return m(m({},t),{},{statusCode:200})})})});var e=(0,r.deepClone)(t);if(t.battle.units.forEach(function(t){var n=e.battle.units.findIndex(function(e){return e.tiles[0][0]===t.tiles[0][0]&&e.tiles[0][1]===t.tiles[0][1]});if(function(t){return!t.acted&&0!==t.owner}(t)){e=w(e,e.battle.units[n].tiles[0]);for(var i=function(){e=w(e,e.battle.units[n].tiles[0]);var t=(0,r.getNeighbors)(e.battle.tiles,e.battle.units[n].tiles[0]).filter(function(t){return E(e.battle,t)}),i=e.battle.units.filter(function(t){return 0===t.owner}).map(function(t){return t.tiles}).reduce(function(t,e){return[].concat(c(t),c(e))},[]),o=1/0,l=[];if(t.forEach(function(t){var e=a(function(t,e){var n=1/0,i=[];return e.forEach(function(e){var a=(0,r.manhattanDistance)(t,e);a<n&&(n=a,i=e)}),[n,i]}(t,i),2),n=e[0];e[1];n<o&&(o=n,l=t)}),!(t.length>0))return"break";e=j(e,n,l)};e.battle.units[n].moves[0]>0;){if("break"===i())break}e=h(e,0);var o=(0,r.getAllLocations)(e.battle.tiles).filter(function(t){return e.battle.units.some(function(e){return(0,r.isUnitAtLocation)(e,t)})}).filter(function(t){return T(e.battle,t,e.moves)}).filter(function(t){return 0===e.battle.units.find(function(e){return e.tiles.some(function(e){return e[0]===t[0]&&e[1]===t[1]})}).owner});o.length>0&&(e=D(e,n,(0,r.pickRandomlyFromArray)(o))),e=g(e),e=O(e)}}),t.battle.units.every(function(t){return 0!==t.owner||0===t.tiles[0].length}))return m(m({},t),{},{view:"map"});var n=e.battle.units.map(function(t){return m(m({},t),{},{moves:[t.moves[1],t.moves[1]],ap:[t.ap[1],t.ap[1]],acted:!1})});return m(m({},t),{},{battle:m(m({},t.battle),{},{turn:t.battle.turn+1,units:n})})},k=function(r){var i,a,o,l,u,c=r.unit,s=c.name,f=void 0===s?"NONE SELECTED":s,d=c.icon,b=void 0===d?[0,3]:d,v=c.size,p=void 0===v?void 0:v,m=c.ap,y=void 0===m?[]:m,h=c.abilities,g=void 0===h?[]:h,w=c.moves,O=void 0===w?[]:w,E=c.tiles,T=void 0===E?[]:E,j="--[ ".concat(f," ]--"),D=function(){return(0,t.default)("p",null,"-".repeat(j.length))};return(0,t.default)("div",{class:"unit-info"},(0,t.default)("p",null,j),(0,t.default)(n.Sprite,{sheet:e.default,icon:b,scale:3}),(0,t.default)("p",null,"Size: ".concat(null!==(i=T.length)&&void 0!==i?i:"?","/").concat(null!=p?p:"?")),(0,t.default)("p",null,"Moves: ".concat(null!==(a=O[0])&&void 0!==a?a:"?","/").concat(null!==(o=O[1])&&void 0!==o?o:"?")),(0,t.default)("p",null,"Actions: ".concat(null!==(l=y[0])&&void 0!==l?l:"?","/").concat(null!==(u=y[1])&&void 0!==u?u:"?")),(0,t.default)(D,null),(0,t.default)("ul",null,g.map(function(e,n){return(0,t.default)("li",{onclick:function(t){return A(t,n)},class:e.selected&&"selected"},"".concat(e.key," - ").concat(e.power))})),(0,t.default)(D,null))},U=function(i){var a=i.battle,o=a.tiles,l=a.selected,u=a.units,c=a.selectedAction,s=a.turn,f=i.moves,d=o[l[0]]&&u.find(function(t){return(0,r.isUnitHeadAtLocation)(t,l)});return(0,t.default)("main",null,(0,t.default)("div",{class:"battle-map"},(0,t.default)(n.Grid,{sheet:e.default,tiles:o.map(function(t,e){return t.map(function(t,n){null===t&&(t={name:void 0,icon:void 0,size:void 0,abilities:[],moves:[],tiles:[]});var i=E({tiles:o,selected:l,units:u,selectedAction:c},[e,n]),a=T({tiles:o,selected:l,units:u,selectedAction:c},[e,n],f),s=u.find(function(t){return(0,r.isUnitHeadAtLocation)(t,[e,n])});if(s)return m(m({},s),{},{attackTarget:a});var d=u.find(function(t){return(0,r.isUnitAtLocation)(t,[e,n])});return d?m(m({},d),{},{icon:[],attackTarget:a}):m(m({},t),{},{moveTarget:i,attackTarget:a})})}),onTileClick:L,onAnimationEnd:S,selected:l})),(0,t.default)(k,{unit:d?m(m({},d),{},{abilities:d.abilities.map(function(t,e){return m(m({},f[t]),{},{selected:c===e})})}):{}}),(0,t.default)("p",null,"Turn: ",s+1),(0,t.default)("button",{onclick:I},"End Turn"),u.every(function(t){return 0!==t.owner||0===t.tiles[0].length})?(0,t.default)("p",null,(0,t.default)("span",{style:{color:"red"}},"Connection attempt FAILED!")," This server is still ",(0,t.default)("span",{style:{color:"red"}},"404 Not Found"),". Try hacking again to retry hack battle."):u.every(function(t){return 0===t.owner||0===t.tiles[0].length})?(0,t.default)("p",null,(0,t.default)("span",{style:{color:"green"}},"Connection attempt SUCCEEDED!")," ","This server is now ",(0,t.default)("span",{style:{color:"green"}},"200 OK"),". Connection to The Cloud has been re-established."):(0,t.default)("p",null,"Destroy the enemy programs to re-establish connection between this server and The Cloud."))},C=U;exports.default=C;
},{"../hyperapp-jsx":"yj7J","../../assets/tiles.png":"Tb1R","../components/index":"iA92","../utils":"jWsf"}],"YiFH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.views=void 0;var e=n(require("../hyperapp-jsx")),r=n(require("./main")),t=n(require("./intro")),i=n(require("./map")),u=n(require("./connection")),a=n(require("./battle"));function n(e){return e&&e.__esModule?e:{default:e}}var o={main:r.default,intro:t.default,map:i.default,connection:u.default,battle:a.default};exports.views=o;
},{"../hyperapp-jsx":"yj7J","./main":"OQrV","./intro":"LX7S","./map":"KaCa","./connection":"tUWO","./battle":"Vouv"}],"RW17":[function(require,module,exports) {
module.exports="127.0.0.1\n0 0\n. . . . . . .\n. s h p . . .\n. . . . . f .\n. . . . . . .\n. t . x e . .\n. . . . . . .";
},{}],"AV48":[function(require,module,exports) {
module.exports="com.google\n0 0\n. . . . .\n. . h . .\n. . . . .\n. . . . .\n. x . x .\n. . . . .";
},{}],"B6nK":[function(require,module,exports) {
module.exports="127.0.0.1\n0 0\n. . . . .\n. h . . .\n. . . . .\n. . . . .\n. . . d .\n. . . . .";
},{}],"mUCE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("../assets/level1.txt")),i=a(require("../assets/level2.txt")),s=a(require("../assets/level3.txt"));function a(e){return e&&e.__esModule?e:{default:e}}var t=function(e){var i=e.split("\n"),s=i[1].split(" "),a=[],t=i.slice(2).map(function(e,i){return e.split(" ").map(function(e,s){switch(e){case"h":a.push({icon:[0,1],bg:"#5454ff",name:"HACK.slsh",size:4,abilities:["hack"],moves:[2,2],ap:[1,1],owner:0,tiles:[[i,s]],animation:{}});break;case"x":a.push({icon:[0,2],bg:"#ff5454",name:"GUARD_AV",size:3,abilities:["bash"],moves:[1,1],ap:[1,1],owner:1,tiles:[[i,s]],animation:{}});break;case"f":a.push({icon:[0,6],bg:"#ff5454",name:"FIREWALL",size:10,abilities:["bash"],moves:[3,3],ap:[1,1],owner:1,tiles:[[i,s]],animation:{}});break;case"t":a.push({icon:[1,0],bg:"#ff5454",name:"TRASH",size:3,abilities:["empty"],moves:[2,2],ap:[1,1],owner:1,tiles:[[i,s]],animation:{}});break;case"p":a.push({icon:[0,9],bg:"#5454ff",name:"PING",size:3,abilities:["ping"],moves:[1,1],ap:[1,1],owner:0,tiles:[[i,s]],animation:{}});break;case"s":a.push({icon:[1,4],bg:"#5454ff",name:"SLING",size:3,abilities:["sling"],moves:[1,1],ap:[1,1],owner:0,tiles:[[i,s]],animation:{}});break;case"e":a.push({icon:[1,6],bg:"#ff5454",name:"SENTRY",size:1,abilities:["peek"],moves:[0,0],ap:[1,1],owner:1,tiles:[[i,s]],animation:{}});break;case"d":a.push({icon:[1,7],bg:"#ff5454",name:"DUD",size:1,abilities:["sputter"],moves:[0,0],ap:[1,1],owner:1,tiles:[[i,s]],animation:{}})}})});return{name:i[0],icon:s,tiles:t,units:a}},n=[t(s.default),t(e.default),t(i.default)];exports.default=n;
},{"../assets/level1.txt":"RW17","../assets/level2.txt":"AV48","../assets/level3.txt":"B6nK"}],"qcfO":[function(require,module,exports) {
module.exports="hack 2 cross1\nbash 1 cross1\nempty 2 cross1\nsling 2 cross3\nping 1 diamond2\npeek 1 diamond3\nsputter 0 cross1";
},{}],"E7NK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("../assets/moves.txt"));function r(t){return t&&t.__esModule?t:{default:t}}function e(t,r){return u(t)||i(t,r)||o(t,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function u(t){if(Array.isArray(t))return t}var l={};t.default.split("\n").forEach(function(t){var r=e(t.split(" "),3),n=r[0],o=r[1],a=r[2];l[n]={key:n,power:o,area:a}});var f=l;exports.default=f;
},{"../assets/moves.txt":"qcfO"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("hyperapp"),t=o(require("./hyperapp-jsx"));require("./main.scss");var r=require("./views"),n=o(require("./levels")),i=o(require("./moves"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,i=c(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function c(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return t=function(t,r){var n=function(e){t(r.action,e)};return document.addEventListener(e,n),function(){return document.removeEventListener(e,n)}},function(e){return[t,{action:e}]};var t},p=l("click"),v=l("keydown"),b=function(e,t){if("main"===e.view)return s(s({},e),{},{view:"intro"})},O=function(e){var n=e.view,i=void 0===n?"main":n,o=u(e,["view"]);console.log(e);var c=r.views[i];return(0,t.default)(c,o)};(0,e.app)({init:{view:"main",map:{servers:n.default.map(function(e){return s(s({},e),{},{statusCode:404})}),selected:-1},battle:{tiles:[[]],selected:[],units:[],selectedAction:-1,turn:0},intro:{step:0},connection:{step:0},moves:i.default},view:O,node:document.getElementById("app"),subscriptions:function(e){return["main"===e.view&&p(b),"main"===e.view&&v(b)]}});
},{"hyperapp":"ANro","./hyperapp-jsx":"yj7J","./main.scss":"yCDU","./views":"YiFH","./levels":"mUCE","./moves":"E7NK"}]},{},["Focm"], null)
//# sourceMappingURL=/src.f4cb3885.js.map