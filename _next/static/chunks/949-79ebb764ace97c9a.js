(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{5235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7913:function(e,t,r){"use strict";var o=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,a=r(7273).Z,l=n(r(7294)),u=r(2199),c=r(7389),i=r(1630),f=r(9541),s=r(6163),d=r(7215),p=r(5235),v=r(729),h=new Set;function y(e,t,r,o){if(u.isLocalURL(t)){if(!o.bypassPrefetchedCheck){var n=t+"%"+r+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(h.has(n))return;h.add(n)}Promise.resolve(e.prefetch(t,r,o)).catch(function(e){})}}function b(e){return"string"==typeof e?e:c.formatUrl(e)}var m=l.default.forwardRef(function(e,t){var r,n,c=e.href,h=e.as,m=e.children,g=e.prefetch,C=e.passHref,O=e.replace,_=e.shallow,j=e.scroll,w=e.locale,E=e.onClick,M=e.onMouseEnter,k=e.onTouchStart,P=e.legacyBehavior,x=void 0===P?!0!==Boolean(!0):P,N=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,x&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var S=!1!==g,L=l.default.useContext(f.RouterContext),I=l.default.useContext(s.AppRouterContext),R=null!=L?L:I,T=!L,z=l.default.useMemo(function(){if(!L){var e=b(c);return{href:e,as:h?b(h):e}}var t=o(u.resolveHref(L,c,!0),2),r=t[0],n=t[1];return{href:r,as:h?u.resolveHref(L,h):n||r}},[L,c,h]),B=z.href,D=z.as,H=l.default.useRef(B),K=l.default.useRef(D);x&&(n=l.default.Children.only(r));var U=x?n&&"object"==typeof n&&n.ref:t,A=o(d.useIntersection({rootMargin:"200px"}),3),Z=A[0],q=A[1],W=A[2],F=l.default.useCallback(function(e){(K.current!==D||H.current!==B)&&(W(),K.current=D,H.current=B),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,B,W,Z]);l.default.useEffect(function(){R&&q&&S&&y(R,B,D,{locale:w})},[D,B,q,w,S,null==L?void 0:L.locale,R]);var G={ref:F,onClick:function(e){x||"function"!=typeof E||E(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,o,n,a,c,i,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(r)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:a,locale:i,scroll:c}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}}(e,R,B,D,O,_,j,w,T,S)},onMouseEnter:function(e){x||"function"!=typeof M||M(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(S||!T)&&y(R,B,D,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof k||k(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(S||!T)&&y(R,B,D,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!x||C||"a"===n.type&&!("href"in n.props)){var J=void 0!==w?w:null==L?void 0:L.locale,Q=(null==L?void 0:L.isLocaleDomain)&&p.getDomainLocale(D,J,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);G.href=Q||v.addBasePath(i.addLocale(D,J,null==L?void 0:L.defaultLocale))}return x?l.default.cloneElement(n,G):l.default.createElement("a",Object.assign({},N,G),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,r){"use strict";var o=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!l,f=o(n.useState(!1),2),s=f[0],d=f[1],p=o(n.useState(null),2),v=p[0],h=p[1];return n.useEffect(function(){if(l){if(!i&&!s&&v&&v.tagName){var e,o,n,f,p;return e=function(e){return e&&d(e)},n=(o=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},o=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(o&&(t=u.get(o)))return t;var n=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},c.push(r),u.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,f=o.observer,(p=o.elements).set(v,e),f.observe(v),function(){if(p.delete(v),f.unobserve(v),0===p.size){f.disconnect(),u.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[v,i,r,t,s]),[h,s,n.useCallback(function(){d(!1)},[])]};var n=r(7294),a=r(8065),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(7913)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function c(e){return function(t){return o.createElement(i,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,n=e.attr,a=e.size,c=e.title,i=u(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==a?o.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}}}]);