"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1154],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6889:function(e,t,n){n.d(t,{ZP:function(){return f}});var r=n(3117),i=n(102),a=n(7294),o=n(4137),u=n(2511),c=n(7130),s=function(e){var t="https://github.com/feature-sliced/documentation/issues/"+e.ticket;return a.createElement("div",null,a.createElement("p",null,(0,c.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,c.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,c.I)({id:"shared.wip.var.feedback.base"}),a.createElement(u.Z,{to:t},(0,c.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.material.base"}),a.createElement(u.Z,{to:"https://t.me/feature_sliced"},(0,c.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,c.I)({id:"shared.wip.var.contribute.base"}),a.createElement(u.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,c.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},l=["components"],d={toc:[]};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(s,{ticket:n.ticket,mdxType:"WIP"}))))}f.isMDXComponent=!0},2511:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),i=n(7294),a=n(3727),o=n(9962),u=n(2735),c=n(6136),s=(0,i.createContext)({collectLink:function(){}}),l=n(9524),d=n(3905),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,g=void 0===w||w,k=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,E=O.trailingSlash,P=O.baseUrl,j=(0,l.C)().withBaseUrl,C=(0,i.useContext)(s),N=m||v,x=(0,u.Z)(N),I=null==N?void 0:N.replace("pathname://",""),T=void 0!==I?(n=I,g&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;T&&x&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:E,baseUrl:P}));var Z=(0,i.useRef)(!1),U=p?a.OL:a.rU,_=c.Z.canUseIntersectionObserver,M=(0,i.useRef)();(0,i.useEffect)((function(){return!_&&x&&null!=T&&window.docusaurus.prefetch(T),function(){_&&M.current&&M.current.disconnect()}}),[M,T,_,x]);var S=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,D=!T||!x||S;return T&&x&&!S&&!y&&C.collectLink(T),D?i.createElement("a",Object.assign({href:T},N&&!x&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(U,Object.assign({},k,{onMouseEnter:function(){Z.current||null==T||(window.docusaurus.preload(T),Z.current=!0)},innerRef:function(e){var t,n;_&&e&&x&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:T||""},p&&{isActive:h,activeClassName:b}))}},2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},9524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(9962),i=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4136:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},3905:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},3509:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7017:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(4137)),o=n(6889),u=["components"],c={sidebar_class_name:"sidebar-item--wip"},s="History",l={unversionedId:"about/history",id:"about/history",isDocsHomePage:!1,title:"History",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/about/history.mdx",sourceDirName:"about",slug:"/about/history",permalink:"/en/docs/about/history",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/about/history.mdx",tags:[],version:"current",lastUpdatedAt:1635076520,formattedLastUpdatedAt:"10/24/2021",frontMatter:{sidebar_class_name:"sidebar-item--wip"},sidebar:"aboutSidebar",previous:{title:"Community",permalink:"/en/docs/about/community"},next:{title:"Team",permalink:"/en/docs/about/team"}},d=[],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"history"},"History"),(0,a.kt)(o.ZP,{ticket:"62",mdxType:"WIP"}))}p.isMDXComponent=!0}}]);