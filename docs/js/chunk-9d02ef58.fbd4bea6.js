(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d02ef58"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"0ccb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"issues"},[r("h1",{staticClass:"issues__heading"},[t._v("ISSUES")]),r("ul",{staticClass:"issue-list"},t._l(t.issues,(function(e,n){return r("li",{key:n,staticClass:"issue-list__item"},[r("router-link",{staticClass:"issue-list__item-link",attrs:{to:{path:"/issues/"+e.number}}},[r("h2",{staticClass:"issue-list__item-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"issue-list__item-number"},[t._v("#"+t._s(e.number))])])],1)})),0),r("Pagination")],1)},i=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=r("2f62"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination"},[r("li",{staticClass:"pagination__item",on:{click:function(e){return t.pageTransitionTo(1)}}},[t._v("First")]),r("li",{staticClass:"pagination__item",on:{click:function(e){t.pageTransitionTo(Number(t.currentIssuesPageNumber)-1)}}},[t._v("Prev")]),r("li",{staticClass:"pagination__item",on:{click:function(e){t.pageTransitionTo(Number(t.currentIssuesPageNumber)+1)}}},[t._v("Next")]),r("li",{staticClass:"pagination__item",on:{click:function(e){return t.pageTransitionTo(t.lastIssuesPageNumber)}}},[t._v("Last")])])},a=[];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={computed:f({},Object(s["b"])(["currentIssuesPageNumber","lastIssuesPageNumber"])),methods:{pageTransitionTo:function(t){console.log(t,"page_number"),this.$router.push({path:"issues",query:{page:t}}),this.$store.dispatch("fetchIssues",t)}}},b=l,p=(r("51b9"),r("2877")),d=Object(p["a"])(b,c,a,!1,null,"7b350025",null),h=d.exports;function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y={components:{Pagination:h},mounted:function(){this.renderInitialIssues()},computed:v({},Object(s["b"])(["issues","currentIssuesPageNumber","lastIssuesPageNumber"])),methods:{renderInitialIssues:function(){this.$store.dispatch("fetchIssues",this.$route.query.page),this.$store.dispatch("fetchIssuesLastPageNumber")}}},m=y,O=(r("8176"),Object(p["a"])(m,n,i,!1,null,null,null));e["default"]=O.exports},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),s=r("9112");for(var c in i){var a=n[c],u=a&&a.prototype;if(u&&u.forEach!==o)try{s(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),s=i("forEach"),c=o("forEach");t.exports=s&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),s=r("ae40"),c=o("filter"),a=s("filter");n({target:"Array",proto:!0,forced:!c||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"51b9":function(t,e,r){"use strict";var n=r("dc0f"),i=r.n(n);i.a},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||s(e,t,{value:o.f(t)})}},"7d4a":function(t,e,r){},8176:function(t,e,r){"use strict";var n=r("7d4a"),i=r.n(n);i.a},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("c430"),c=r("83ab"),a=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),b=r("e8b5"),p=r("861d"),d=r("825a"),h=r("7b0b"),g=r("fc6a"),v=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),S=r("241c"),P=r("057f"),j=r("7418"),w=r("06cf"),_=r("9bf2"),L=r("d1e7"),E=r("9112"),T=r("6eeb"),C=r("5692"),N=r("f772"),k=r("d012"),I=r("90e3"),D=r("b622"),x=r("e538"),M=r("746f"),A=r("d44e"),V=r("69f3"),$=r("b727").forEach,G=N("hidden"),R="Symbol",F="prototype",H=D("toPrimitive"),J=V.set,q=V.getterFor(R),B=Object[F],Q=i.Symbol,U=o("JSON","stringify"),W=w.f,z=_.f,K=P.f,X=L.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=c&&f((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(B,e);n&&delete B[e],z(t,e,r),n&&t!==B&&z(B,e,n)}:z,st=function(t,e){var r=Y[t]=m(Q[F]);return J(r,{type:R,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,r){t===B&&at(Z,e,r),d(t);var n=v(e,!0);return d(r),l(Y,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,G)||z(t,G,y(1,{})),t[G][n]=!0),ot(t,n,r)):z(t,n,r)},ut=function(t,e){d(t);var r=g(e),n=O(r).concat(dt(r));return $(n,(function(e){c&&!lt.call(r,e)||at(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,G)&&this[G][e])||r)},bt=function(t,e){var r=g(t),n=v(e,!0);if(r!==B||!l(Y,n)||l(Z,n)){var i=W(r,n);return!i||!l(Y,n)||l(r,G)&&r[G][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(g(t)),r=[];return $(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},dt=function(t){var e=t===B,r=K(e?Z:g(t)),n=[];return $(r,(function(t){!l(Y,t)||e&&!l(B,t)||n.push(Y[t])})),n};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===B&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot(B,e,{configurable:!0,set:r}),st(e,t)},T(Q[F],"toString",(function(){return q(this).tag})),T(Q,"withoutSetter",(function(t){return st(I(t),t)})),L.f=lt,_.f=at,w.f=bt,S.f=P.f=pt,j.f=dt,x.f=function(t){return st(D(t),t)},c&&(z(Q[F],"description",{configurable:!0,get:function(){return q(this).description}}),s||T(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),$(O(rt),(function(t){M(t)})),n({target:R,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!c},{create:ft,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:dt}),n({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(h(t))}}),U){var ht=!a||f((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,U.apply(null,i)}})}Q[F][H]||E(Q[F],H,Q[F].valueOf),A(Q,R),k[G]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),s=Object.defineProperty,c=function(t){throw t};t.exports=function(t,e){e||(e={});var r=[][t],a=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return!!r&&!i((function(){if(a&&!n)return!0;var t={length:-1},e=function(e){a?s(t,e,{enumerable:!0,get:c}):t[e]=1};e(1),e(2147483646),e(4294967294),r.call(t,u,f)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),s=r("d039"),c=s((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),s=r("50c4"),c=r("65f0"),a=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,b=5==t||l;return function(p,d,h,g){for(var v,y,m=o(p),O=i(m),S=n(d,h,3),P=s(O.length),j=0,w=g||c,_=e?w(p,P):r?w(p,0):void 0;P>j;j++)if((b||j in O)&&(v=O[j],y=S(v,j,m),t))if(e)_[j]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return j;case 2:a.call(_,v)}else if(f)return!1;return l?-1:u||f?f:_}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),s=r("fc6a"),c=r("06cf"),a=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),i=c.f,u=o(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&a(f,e,r);return f}})},dc0f:function(t,e,r){},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),s=r("06cf").f,c=r("83ab"),a=i((function(){s(1)})),u=!c||a;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-9d02ef58.fbd4bea6.js.map