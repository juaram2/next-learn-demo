(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Hq7":function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("YFqc"),a=n.n(o),s=i.a.createElement,u={marginRight:15};function f(){return s("div",null,s(a.a,{href:"/"},s("a",{style:u},"Home")),s(a.a,{href:"/about"},s("a",{style:u},"About")))}n.d(e,"a",(function(){return p}));var c=i.a.createElement,l={margin:20,padding:20,border:"1px solid #DDD"};function p(t){return c("div",{style:l},c(f,null),t.children)}},"7bm4":function(t,e,n){"use strict";var r=n("B4CS"),i=n("H8ru");t.exports=n("8vat")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(i(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(i(this,"Map"),0===t?0:t,e)}},r,!0)},A0wl:function(t,e,n){var r=n("fYqa"),i=n("rfP5");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B4CS:function(t,e,n){"use strict";var r=n("OtwA").f,i=n("cQhG"),o=n("OQSD"),a=n("vCXk"),s=n("sLxe"),u=n("VgtN"),f=n("5Kld"),c=n("JFuE"),l=n("G+Sp"),p=n("fZVS"),h=n("YndH").fastKey,v=n("H8ru"),d=p?"_s":"size",_=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var c=t((function(t,r){s(t,c,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,n,t[f],t)}));return o(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,e)[d]}}),c},def:function(t,e,n){var r,i,o=_(t,e);return o?o.v=n:(t._l=o={i:i=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:_,setStrong:function(t,e,n){f(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),l(e)}}},Jh6M:function(t,e,n){n("AS96")("Map")},LX0d:function(t,e,n){t.exports=n("s0dr")},QEfL:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("ln6h"),i=n.n(r);function o(){var t;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(Promise.all([n.e(12),n.e(19)]).then(n.t.bind(null,"Wcq6",7)));case 2:return t=e.sent,e.next=5,i.a.awrap(Promise.all([n.e(3),n.e(12),n.e(18)]).then(n.bind(null,"Zs65")));case 5:try{t.initializeApp({databaseURL:"https://hacker-news.firebaseio.com"})}catch(r){/already exists/.test(r.message)||console.error("Firebase initialization error",r.stack)}return e.abrupt("return",t.database().ref("v0"));case 7:case"end":return e.stop()}}))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),u=n("LX0d"),f=n("KI45"),c=n("5Uuq");e.__esModule=!0,e.default=void 0;var l,p=n("CxY0"),h=c(n("q1tI")),v=f(n("nOHt")),d=n("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new u,w=window.IntersectionObserver,y={};function m(){return l||(w?l=new w((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return r(this,e),(n=o(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(i,o){if(r&&i===e&&o===n)return r;var a=t(i,o);return e=i,n=o,r=a,a}}((function(t,e){return{href:_(t),as:e?_(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,i=e.target;if("A"!==r||!(i&&"_self"!==i||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),a=o.href,s=o.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,t.preventDefault();var f=n.props.scroll;null==f&&(f=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return s(e,t),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=y[this.getHref()];this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=m();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),y[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var o=h.Children.only(e),a={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),h.default.cloneElement(o,a)}}]),e}(h.Component);e.default=k},d5Yn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return n("nOj+")}])},h0es:function(t,e,n){var r=n("0T/a");r(r.P+r.R,"Map",{toJSON:n("A0wl")("Map")})},ineT:function(t,e,n){n("ER9p")("Map")},"nOj+":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),i=n.n(r),o=n("q1tI"),a=n.n(o),s=n("3Hq7"),u=n("QEfL"),f=a.a.createElement;function c(t){var e=t.item;return f(s.a,null,f("h1",null,e.title),f("p",null,"URL:"," ",f("a",{target:"_blank",href:e.url},e.url)))}c.getInitialProps=function(t){var e,n,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.query,o.next=3,i.a.awrap(Object(u.a)());case 3:return n=o.sent,o.next=6,i.a.awrap(n.child("item").child(e.id).once("value"));case 6:return r=(r=o.sent).val(),o.abrupt("return",{item:r});case 9:case"end":return o.stop()}}))},e.default=c},rfP5:function(t,e,n){var r=n("VgtN");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},s0dr:function(t,e,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("7bm4"),n("h0es"),n("ineT"),n("Jh6M"),t.exports=n("p9MR").Map}},[["d5Yn",1,2,0]]]);