(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{481:function(e,t,i){(function(t){var i="Expected a function",r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,h=l||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return h.Date.now()};function v(e,t,r){var s,n,o,a,l,c,h=0,u=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function x(t){var i=s,r=n;return s=n=void 0,h=t,a=e.apply(r,i)}function y(e){return h=e,l=setTimeout(w,t),u?x(e):a}function E(e){var i=e-c;return void 0===c||i>=t||i<0||v&&e-h>=o}function w(){var e=p();if(E(e))return O(e);l=setTimeout(w,function(e){var i=t-(e-c);return v?d(i,o-(e-h)):i}(e))}function O(e){return l=void 0,g&&s?x(e):(s=n=void 0,a)}function S(){var e=p(),i=E(e);if(s=arguments,n=this,c=e,i){if(void 0===l)return y(c);if(v)return l=setTimeout(w,t),x(c)}return void 0===l&&(l=setTimeout(w,t)),a}return t=m(t)||0,b(r)&&(u=!!r.leading,o=(v="maxWait"in r)?f(m(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g),S.cancel=function(){void 0!==l&&clearTimeout(l),h=0,s=c=n=l=void 0},S.flush=function(){return void 0===l?a:O(p())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=n.test(e);return i||o.test(e)?a(e.slice(2),i?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,r){var s=!0,n=!0;if("function"!=typeof e)throw new TypeError(i);return b(r)&&(s="leading"in r?!!r.leading:s,n="trailing"in r?!!r.trailing:n),v(e,t,{leading:s,maxWait:t,trailing:n})}}).call(this,i(110))},482:function(e,t,i){(function(t){var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,n=/^0o[0-7]+$/i,o=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),h=Object.prototype.toString,u=Math.max,f=Math.min,d=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=s.test(e);return a||n.test(e)?o(e.slice(2),a?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,i){var r,s,n,o,a,l,c=0,h=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var i=r,n=s;return r=s=void 0,c=t,o=e.apply(n,i)}function x(e){return c=e,a=setTimeout(E,t),h?g(e):o}function y(e){var i=e-l;return void 0===l||i>=t||i<0||b&&e-c>=n}function E(){var e=d();if(y(e))return w(e);a=setTimeout(E,function(e){var i=t-(e-l);return b?f(i,n-(e-c)):i}(e))}function w(e){return a=void 0,m&&r?g(e):(r=s=void 0,o)}function O(){var e=d(),i=y(e);if(r=arguments,s=this,l=e,i){if(void 0===a)return x(l);if(b)return a=setTimeout(E,t),g(l)}return void 0===a&&(a=setTimeout(E,t)),o}return t=v(t)||0,p(i)&&(h=!!i.leading,n=(b="maxWait"in i)?u(v(i.maxWait)||0,t):n,m="trailing"in i?!!i.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=s=a=void 0},O.flush=function(){return void 0===a?o:w(d())},O}}).call(this,i(110))},483:function(e,t,i){(function(t){var i="__lodash_hash_undefined__",r="[object Function]",s="[object GeneratorFunction]",n=/^\[object .+?Constructor\]$/,o="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,l=o||a||Function("return this")();var c=Array.prototype,h=Function.prototype,u=Object.prototype,f=l["__core-js_shared__"],d=function(){var e=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),p=h.toString,v=u.hasOwnProperty,b=u.toString,m=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=c.splice,x=z(l,"Map"),y=z(Object,"create");function E(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function w(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function O(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var r=e[t];this.set(r[0],r[1])}}function S(e,t){for(var i,r,s=e.length;s--;)if((i=e[s][0])===(r=t)||i!==i&&r!==r)return s;return-1}function k(e){return!(!A(e)||(t=e,d&&d in t))&&(function(e){var t=A(e)?b.call(e):"";return t==r||t==s}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(i){}return t}(e)?m:n).test(function(e){if(null!=e){try{return p.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function N(e,t){var i=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?i["string"==typeof t?"string":"hash"]:i.map}function z(e,t){var i=function(e,t){return null==e?void 0:e[t]}(e,t);return k(i)?i:void 0}function T(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var i=function(){var r=arguments,s=t?t.apply(this,r):r[0],n=i.cache;if(n.has(s))return n.get(s);var o=e.apply(this,r);return i.cache=n.set(s,o),o};return i.cache=new(T.Cache||O),i}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}E.prototype.clear=function(){this.__data__=y?y(null):{}},E.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},E.prototype.get=function(e){var t=this.__data__;if(y){var r=t[e];return r===i?void 0:r}return v.call(t,e)?t[e]:void 0},E.prototype.has=function(e){var t=this.__data__;return y?void 0!==t[e]:v.call(t,e)},E.prototype.set=function(e,t){return this.__data__[e]=y&&void 0===t?i:t,this},w.prototype.clear=function(){this.__data__=[]},w.prototype.delete=function(e){var t=this.__data__,i=S(t,e);return!(i<0)&&(i==t.length-1?t.pop():g.call(t,i,1),!0)},w.prototype.get=function(e){var t=this.__data__,i=S(t,e);return i<0?void 0:t[i][1]},w.prototype.has=function(e){return S(this.__data__,e)>-1},w.prototype.set=function(e,t){var i=this.__data__,r=S(i,e);return r<0?i.push([e,t]):i[r][1]=t,this},O.prototype.clear=function(){this.__data__={hash:new E,map:new(x||w),string:new E}},O.prototype.delete=function(e){return N(this,e).delete(e)},O.prototype.get=function(e){return N(this,e).get(e)},O.prototype.has=function(e){return N(this,e).has(e)},O.prototype.set=function(e,t){return N(this,e).set(e,t),this},T.Cache=O,e.exports=T}).call(this,i(110))},484:function(e,t){var i=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=i},485:function(e,t,i){},520:function(e,t,i){"use strict";var r,s=i(0),n=i.n(s),o=i(42),a=i.n(o),l=(i(61),i(115),i(481)),c=i.n(l),h=i(482),u=i.n(h),f=i(483),d=i.n(f),p=[],v="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var b,m=function(e){return Object.freeze(e)},g=function(e,t){this.inlineSize=e,this.blockSize=t,m(this)},x=function(){function e(e,t,i,r){return this.x=e,this.y=t,this.width=i,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,m(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),y=function(e){return e instanceof SVGElement&&"getBBox"in e},E=function(e){if(y(e)){var t=e.getBBox(),i=t.width,r=t.height;return!i&&!r}var s=e,n=s.offsetWidth,o=s.offsetHeight;return!(n||o||e.getClientRects().length)},w=function(e){var t,i;if(e instanceof Element)return!0;var r=null===(i=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===i?void 0:i.defaultView;return!!(r&&e instanceof r.Element)},O="undefined"!==typeof window?window:{},S=new WeakMap,k=/auto|scroll/,N=/^tb|vertical/,z=/msie|trident/i.test(O.navigator&&O.navigator.userAgent),T=function(e){return parseFloat(e||"0")},A=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=!1),new g((i?t:e)||0,(i?e:t)||0)},W=m({devicePixelContentBoxSize:A(),borderBoxSize:A(),contentBoxSize:A(),contentRect:new x(0,0,0,0)}),L=function(e,t){if(void 0===t&&(t=!1),S.has(e)&&!t)return S.get(e);if(E(e))return S.set(e,W),W;var i=getComputedStyle(e),r=y(e)&&e.ownerSVGElement&&e.getBBox(),s=!z&&"border-box"===i.boxSizing,n=N.test(i.writingMode||""),o=!r&&k.test(i.overflowY||""),a=!r&&k.test(i.overflowX||""),l=r?0:T(i.paddingTop),c=r?0:T(i.paddingRight),h=r?0:T(i.paddingBottom),u=r?0:T(i.paddingLeft),f=r?0:T(i.borderTopWidth),d=r?0:T(i.borderRightWidth),p=r?0:T(i.borderBottomWidth),v=u+c,b=l+h,g=(r?0:T(i.borderLeftWidth))+d,w=f+p,O=a?e.offsetHeight-w-e.clientHeight:0,L=o?e.offsetWidth-g-e.clientWidth:0,R=s?v+g:0,_=s?b+w:0,C=r?r.width:T(i.width)-R-L,M=r?r.height:T(i.height)-_-O,j=C+v+L+g,B=M+b+O+w,P=m({devicePixelContentBoxSize:A(Math.round(C*devicePixelRatio),Math.round(M*devicePixelRatio),n),borderBoxSize:A(j,B,n),contentBoxSize:A(C,M,n),contentRect:new x(u,l,C,M)});return S.set(e,P),P},R=function(e,t,i){var s=L(e,i),n=s.borderBoxSize,o=s.contentBoxSize,a=s.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return n;default:return o}},_=function(e){var t=L(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=m([t.borderBoxSize]),this.contentBoxSize=m([t.contentBoxSize]),this.devicePixelContentBoxSize=m([t.devicePixelContentBoxSize])},C=function(e){if(E(e))return 1/0;for(var t=0,i=e.parentNode;i;)t+=1,i=i.parentNode;return t},M=function(){var e=1/0,t=[];p.forEach((function(i){if(0!==i.activeTargets.length){var r=[];i.activeTargets.forEach((function(t){var i=new _(t.target),s=C(t.target);r.push(i),t.lastReportedSize=R(t.target,t.observedBox),s<e&&(e=s)})),t.push((function(){i.callback.call(i.observer,r,i.observer)})),i.activeTargets.splice(0,i.activeTargets.length)}}));for(var i=0,r=t;i<r.length;i++){(0,r[i])()}return e},j=function(e){p.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(i){i.isActive()&&(C(i.target)>e?t.activeTargets.push(i):t.skippedTargets.push(i))}))}))},B=function(){var e=0;for(j(e);p.some((function(e){return e.activeTargets.length>0}));)e=M(),j(e);return p.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:v}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=v),window.dispatchEvent(e)}(),e>0},P=[],D=function(e){if(!b){var t=0,i=document.createTextNode("");new MutationObserver((function(){return P.splice(0).forEach((function(e){return e()}))})).observe(i,{characterData:!0}),b=function(){i.textContent=""+(t?t--:t++)}}P.push(e),b()},V=0,I={attributes:!0,characterData:!0,childList:!0,subtree:!0},F=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],X=function(e){return void 0===e&&(e=0),Date.now()+e},H=!1,q=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!H){H=!0;var i,r=X(e);i=function(){var i=!1;try{i=B()}finally{if(H=!1,e=r-X(),!V)return;i?t.run(1e3):e>0?t.run(e):t.start()}},D((function(){requestAnimationFrame(i)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,I)};document.body?t():O.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),F.forEach((function(t){return O.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),F.forEach((function(t){return O.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),Y=function(e){!V&&e>0&&q.start(),!(V+=e)&&q.stop()},$=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=R(this.target,this.observedBox,!0);return e=this.target,y(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),G=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},J=new WeakMap,U=function(e,t){for(var i=0;i<e.length;i+=1)if(e[i].target===t)return i;return-1},K=function(){function e(){}return e.connect=function(e,t){var i=new G(e,t);J.set(e,i)},e.observe=function(e,t,i){var r=J.get(e),s=0===r.observationTargets.length;U(r.observationTargets,t)<0&&(s&&p.push(r),r.observationTargets.push(new $(t,i&&i.box)),Y(1),q.schedule())},e.unobserve=function(e,t){var i=J.get(e),r=U(i.observationTargets,t),s=1===i.observationTargets.length;r>=0&&(s&&p.splice(p.indexOf(i),1),i.observationTargets.splice(r,1),Y(-1))},e.disconnect=function(e){var t=this,i=J.get(e);i.observationTargets.slice().forEach((function(i){return t.unobserve(e,i.target)})),i.activeTargets.splice(0,i.activeTargets.length)},e}(),Q=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");K.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!w(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");K.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!w(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");K.unobserve(this,e)},e.prototype.disconnect=function(){K.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),Z=i(484),ee=i.n(Z);i(113),i(79),i(114);function te(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function ie(e){return e&&e.ownerDocument?e.ownerDocument:document}var re=null,se=null;function ne(e){if(null===re){var t=ie(e);if("undefined"===typeof t)return re=0;var i=t.body,r=t.createElement("div");r.classList.add("simplebar-hide-scrollbar"),i.appendChild(r);var s=r.getBoundingClientRect().right;i.removeChild(r),re=s}return re}ee.a&&window.addEventListener("resize",(function(){se!==window.devicePixelRatio&&(se=window.devicePixelRatio,re=null)}));var oe=function(){function e(t,i){var r=this;this.onScroll=function(){var e=te(r.el);r.scrollXTicking||(e.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(e.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0)},this.scrollX=function(){r.axis.x.isOverflowing&&(r.showScrollbar("x"),r.positionScrollbar("x")),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&(r.showScrollbar("y"),r.positionScrollbar("y")),r.scrollYTicking=!1},this.onMouseEnter=function(){r.showScrollbar("x"),r.showScrollbar("y")},this.onMouseMove=function(e){r.mouseX=e.clientX,r.mouseY=e.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this.onWindowResize=function(){r.scrollbarWidth=r.getScrollbarWidth(),r.hideNativeScrollbar()},this.hideScrollbars=function(){r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.track.rect)||(r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),r.axis.y.isVisible=!1),r.isWithinBounds(r.axis.x.track.rect)||(r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),r.axis.x.isVisible=!1)},this.onPointerEvent=function(e){var t,i;r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(t=r.isWithinBounds(r.axis.x.track.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(i=r.isWithinBounds(r.axis.y.track.rect)),(t||i)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(t&&(r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.x.scrollbar.rect)?r.onDragStart(e,"x"):r.onTrackClick(e,"x")),i&&(r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.scrollbar.rect)?r.onDragStart(e,"y"):r.onTrackClick(e,"y"))))},this.drag=function(t){var i=r.axis[r.draggedAxis].track,s=i.rect[r.axis[r.draggedAxis].sizeAttr],n=r.axis[r.draggedAxis].scrollbar,o=r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],a=parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr],10);t.preventDefault(),t.stopPropagation();var l=(("y"===r.draggedAxis?t.pageY:t.pageX)-i.rect[r.axis[r.draggedAxis].offsetAttr]-r.axis[r.draggedAxis].dragOffset)/(s-n.size)*(o-a);"x"===r.draggedAxis&&(l=r.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l-(s+n.size):l,l=r.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-l:l),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=l},this.onEndDrag=function(e){var t=ie(r.el),i=te(r.el);e.preventDefault(),e.stopPropagation(),r.el.classList.remove(r.classNames.dragging),t.removeEventListener("mousemove",r.drag,!0),t.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",r.preventClick,!0),t.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.minScrollbarWidth=20,this.options=Object.assign({},e.defaultOptions,{},i),this.classNames=Object.assign({},e.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,e.instances.has(this.el)||(this.recalculate=c()(this.recalculate.bind(this),64),this.onMouseMove=c()(this.onMouseMove.bind(this),64),this.hideScrollbars=u()(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=u()(this.onWindowResize.bind(this),64,{leading:!0}),e.getRtlHelpers=d()(e.getRtlHelpers),this.init())}e.getRtlHelpers=function(){var t=document.createElement("div");t.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=t.firstElementChild;document.body.appendChild(i);var r=i.firstElementChild;i.scrollLeft=0;var s=e.getOffset(i),n=e.getOffset(r);i.scrollLeft=999;var o=e.getOffset(r);return{isRtlScrollingInverted:s.left!==n.left&&n.left-o.left!==0,isRtlScrollbarInverted:s.left!==n.left}},e.getOffset=function(e){var t=e.getBoundingClientRect(),i=ie(e),r=te(e);return{top:t.top+(r.pageYOffset||i.documentElement.scrollTop),left:t.left+(r.pageXOffset||i.documentElement.scrollLeft)}};var t=e.prototype;return t.init=function(){e.instances.set(this.el,this),ee.a&&(this.initDOM(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.initDOM=function(){var e=this;if(Array.prototype.filter.call(this.el.children,(function(t){return t.classList.contains(e.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var t=document.createElement("div"),i=document.createElement("div");t.classList.add(this.classNames.track),i.classList.add(this.classNames.scrollbar),t.appendChild(i),this.axis.x.track.el=t.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=t.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},t.initListeners=function(){var e=this,t=te(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.addEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),t.addEventListener("resize",this.onWindowResize);var i=!1,r=t.ResizeObserver||Q;this.resizeObserver=new r((function(){i&&e.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),t.requestAnimationFrame((function(){i=!0})),this.mutationObserver=new t.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},t.recalculate=function(){var e=te(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.heightAutoObserverEl.offsetHeight<=1,i=this.heightAutoObserverEl.offsetWidth<=1,r=this.contentEl.offsetWidth,s=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,l=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=t?"auto":"100%",this.placeholderEl.style.width=i?r+"px":"auto",this.placeholderEl.style.height=a+"px";var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=l>r,this.axis.y.isOverflowing=a>c,this.axis.x.isOverflowing="hidden"!==n&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&l>s-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},t.getScrollbarSize=function(e){if(void 0===e&&(e="y"),!this.axis[e].isOverflowing)return 0;var t,i=this.contentEl[this.axis[e].scrollSizeAttr],r=this.axis[e].track.el[this.axis[e].offsetSizeAttr],s=r/i;return t=Math.max(~~(s*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(t=Math.min(t,this.options.scrollbarMaxSize)),t},t.positionScrollbar=function(t){if(void 0===t&&(t="y"),this.axis[t].isOverflowing){var i=this.contentWrapperEl[this.axis[t].scrollSizeAttr],r=this.axis[t].track.el[this.axis[t].offsetSizeAttr],s=parseInt(this.elStyles[this.axis[t].sizeAttr],10),n=this.axis[t].scrollbar,o=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=(o="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollingInverted?-o:o)/(i-s),l=~~((r-n.size)*a);l="x"===t&&this.isRtl&&e.getRtlHelpers().isRtlScrollbarInverted?l+(r-n.size):l,n.el.style.transform="x"===t?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"}},t.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll"):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden"),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none"},t.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},t.onMouseMoveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.rect=this.axis[e].track.el.getBoundingClientRect(),this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[e].scrollbar.rect)?this.axis[e].scrollbar.el.classList.add(this.classNames.hover):this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[e].track.rect)?(this.showScrollbar(e),this.axis[e].track.el.classList.add(this.classNames.hover)):this.axis[e].track.el.classList.remove(this.classNames.hover)},t.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),this.axis[e].track.el.classList.remove(this.classNames.hover),this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)},t.showScrollbar=function(e){void 0===e&&(e="y");var t=this.axis[e].scrollbar.el;this.axis[e].isVisible||(t.classList.add(this.classNames.visible),this.axis[e].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},t.onDragStart=function(e,t){void 0===t&&(t="y");var i=ie(this.el),r=te(this.el),s=this.axis[t].scrollbar,n="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=n-s.rect[this.axis[t].offsetAttr],this.draggedAxis=t,this.el.classList.add(this.classNames.dragging),i.addEventListener("mousemove",this.drag,!0),i.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(i.addEventListener("click",this.preventClick,!0),i.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.onTrackClick=function(e,t){var i=this;if(void 0===t&&(t="y"),this.options.clickOnTrack){var r=te(this.el);this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect();var s=this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],n=parseInt(this.elStyles[this.axis[t].sizeAttr],10),o=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],a=("y"===t?this.mouseY-s:this.mouseX-s)<0?-1:1,l=-1===a?o-n:o+n;!function e(){var s,n;-1===a?o>l&&(o-=i.options.clickOnTrackSpeed,i.contentWrapperEl.scrollTo(((s={})[i.axis[t].offsetAttr]=o,s)),r.requestAnimationFrame(e)):o<l&&(o+=i.options.clickOnTrackSpeed,i.contentWrapperEl.scrollTo(((n={})[i.axis[t].offsetAttr]=o,n)),r.requestAnimationFrame(e))}()}},t.getContentElement=function(){return this.contentEl},t.getScrollElement=function(){return this.contentWrapperEl},t.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:ne(this.el)}catch(e){return ne(this.el)}},t.removeListeners=function(){var e=this,t=te(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(t){e.el.removeEventListener(t,e.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},t.unMount=function(){this.removeListeners(),e.instances.delete(this.el)},t.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},t.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},e}();oe.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},oe.instances=new WeakMap;var ae=oe;function le(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function he(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function ue(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var fe=n.a.forwardRef((function(e,t){var i,r=e.children,o=e.scrollableNodeProps,a=void 0===o?{}:o,l=ue(e,["children","scrollableNodeProps"]),c=Object(s.useRef)(),h=Object(s.useRef)(),u=Object(s.useRef)(),f={},d={},p=[];return Object.keys(l).forEach((function(e){Object.prototype.hasOwnProperty.call(ae.defaultOptions,e)?f[e]=l[e]:e.match(/data-simplebar-(.+)/)&&"data-simplebar-direction"!==e?p.push({name:e,value:l[e]}):d[e]=l[e]})),p.length&&console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      "),Object(s.useEffect)((function(){var e;return c=a.ref||c,h.current&&(i=new ae(h.current,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?he(i,!0).forEach((function(t){le(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):he(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},(e=p,Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var r=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[r]=!0;break;case"false":e[r]=!1;break;case void 0:e[r]=!0;break;default:e[r]=t.value}}return e}),{})),{},f,{},c&&{scrollableNode:c.current},{},u.current&&{contentNode:u.current})),t&&(t.current=i)),function(){i.unMount(),i=null}}),[]),n.a.createElement("div",ce({ref:h,"data-simplebar":!0},d),n.a.createElement("div",{className:"simplebar-wrapper"},n.a.createElement("div",{className:"simplebar-height-auto-observer-wrapper"},n.a.createElement("div",{className:"simplebar-height-auto-observer"})),n.a.createElement("div",{className:"simplebar-mask"},n.a.createElement("div",{className:"simplebar-offset"},"function"===typeof r?r({scrollableNodeRef:c,contentNodeRef:u}):n.a.createElement("div",ce({},a,{className:"simplebar-content-wrapper".concat(a.className?" ".concat(a.className):"")}),n.a.createElement("div",{className:"simplebar-content"},r)))),n.a.createElement("div",{className:"simplebar-placeholder"})),n.a.createElement("div",{className:"simplebar-track simplebar-horizontal"},n.a.createElement("div",{className:"simplebar-scrollbar"})),n.a.createElement("div",{className:"simplebar-track simplebar-vertical"},n.a.createElement("div",{className:"simplebar-scrollbar"})))}));fe.displayName="SimpleBar",fe.propTypes={children:a.a.oneOfType([a.a.node,a.a.func]),scrollableNodeProps:a.a.object};t.a=fe}}]);
//# sourceMappingURL=8.226c2e62.chunk.js.map