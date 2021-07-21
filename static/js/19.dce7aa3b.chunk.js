(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{457:function(e){e.exports=JSON.parse('{"name":"@coreui/coreui-free-react-admin-template","description":"CoreUI Free React Admin Template","version":"4.0.0-beta.0","config":{"coreui_library_short_version":"4.0"},"author":{"name":"CoreUI","url":"https://coreui.io","github":"https://github.com/coreui","twitter":"https://twitter.com/core_ui"},"contributors":[{"name":"CoreUI Team","url":"https://github.com/orgs/coreui/people"}],"homepage":"http://CarlosDubon.github.io/sraag-panel","copyright":"Copyright 2017-2021 creativeLabs \u0141ukasz Holeczek","license":"MIT","private":true,"repository":{"type":"git","url":"git@github.com:coreui/coreui-free-react-admin-template.git"},"dependencies":{"@coreui/chartjs":"3.0.0","@coreui/coreui":"4.0.0","@coreui/icons":"^2.0.1","@coreui/icons-react":"^2.0.0-rc.0","@coreui/react":"4.0.0-beta.2","@coreui/react-chartjs":"2.0.0-rc.0","@coreui/utils":"^1.3.1","@wojtekmaj/enzyme-adapter-react-17":"^0.6.2","axios":"^0.21.1","chart.js":"^3.4.1","classnames":"^2.3.1","core-js":"^3.15.2","enzyme":"^3.11.0","gh-pages":"^3.2.3","google-maps-react":"^2.0.6","jdenticon":"^3.1.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-bootstrap-sweetalert":"^5.2.0","react-confirm-alert":"^2.7.0","react-dom":"^17.0.2","react-dropzone":"^11.3.4","react-hot-toast":"^2.0.0","react-redux":"^7.2.4","react-router-dom":"^5.2.0","redux":"4.1.0","redux-persist":"^6.0.0","simplebar-react":"^2.3.4"},"devDependencies":{"auto-changelog":"~2.3.0","eslint":"^7.30.0","react-scripts":"^4.0.3","sass":"^1.35.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","lint":"eslint \\"src/**/*.js\\"","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject","changelog":"auto-changelog --starting-version 3.0.0 --commit-limit false --hide-credit","predeploy":"yarn run build","deploy":"gh-pages -d build"},"bugs":{"url":"https://github.com/coreui/coreui-free-react-admin-template/issues"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=10","npm":">=6"}}')},458:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return x}));var c=s(0),i=s.n(c),a=s(456),r=s(457),n=s(9);const l=e=>{const{href:t,name:s}=e,c="s"===s.slice(-1),i="https://coreui.io/react/docs/".concat(r.config.coreui_library_short_version,"/").concat(t);return Object(n.jsxs)(a.q,{color:"info",className:"bg-white",children:["A React ",s," component ",c?"have":"has"," been created as a native React.js version of Bootstrap ",s,". ",s," ",c?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"For more information please visit our official"," ",Object(n.jsx)(a.eb,{href:i,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};var o=i.a.memo(l);const j=e=>{const{href:t,name:s,text:c,...i}=e,r=s?"https://coreui.io/react/docs/components/".concat(s):t;return Object(n.jsx)("div",{className:"float-end",children:Object(n.jsx)(a.eb,{...i,href:r,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(n.jsx)("small",{className:"text-medium-emphasis",children:c||"docs"})})})};var d=i.a.memo(j),b=s(459);const h=e=>{const{children:t,href:s}=e,c="https://coreui.io/react/docs/".concat(r.config.coreui_library_short_version,"/").concat(s);return Object(n.jsxs)("div",{className:"example",children:[Object(n.jsxs)(a.mb,{variant:"tabs",children:[Object(n.jsx)(a.nb,{children:Object(n.jsxs)(a.ob,{href:"#",active:!0,children:[Object(n.jsx)(b.a,{name:"cil-media-play",className:"me-2"}),"Preview"]})}),Object(n.jsx)(a.nb,{children:Object(n.jsxs)(a.ob,{href:c,target:"_blank",children:[Object(n.jsx)(b.a,{name:"cil-code",className:"me-2"}),"Code"]})})]}),Object(n.jsx)(a.Ab,{className:"rounded-bottom",children:Object(n.jsx)(a.Bb,{className:"p-3 preview",visible:!0,children:t})})]})};var x=i.a.memo(h)},533:function(e,t,s){"use strict";s.r(t);s(0);var c=s(456),i=s(458),a=s(9);t.default=()=>Object(a.jsxs)(c.ub,{children:[Object(a.jsx)(c.E,{xs:12,children:Object(a.jsx)(i.a,{name:"Pagination",href:"components/pagination"})}),Object(a.jsx)(c.E,{xs:12,children:Object(a.jsxs)(c.r,{className:"mb-4",children:[Object(a.jsx)(c.v,{children:Object(a.jsx)("strong",{children:"React Pagination"})}),Object(a.jsxs)(c.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["We use a large block of connected links for our pagination, making links hard to miss and easily scalable\u2014all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",Object(a.jsx)("code",{children:"<nav>"})," element to identify it as a navigation section to screen readers and other assistive technologies."]}),Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",Object(a.jsx)("code",{children:"aria-label"})," for the"," ",Object(a.jsx)("code",{children:"<nav>"})," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",Object(a.jsx)("code",{children:'aria-label="Search results pages"'}),"."]}),Object(a.jsx)(i.c,{href:"components/pagination",children:Object(a.jsxs)(c.pb,{"aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{children:"Previous"}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{children:"Next"})]})})]})]})}),Object(a.jsx)(c.E,{xs:12,children:Object(a.jsxs)(c.r,{className:"mb-4",children:[Object(a.jsxs)(c.v,{children:[Object(a.jsx)("strong",{children:"React Pagination"})," ",Object(a.jsx)("small",{children:"Working with icons"})]}),Object(a.jsxs)(c.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",Object(a.jsx)("code",{children:"aria"})," attributes."]}),Object(a.jsx)(i.c,{href:"components/pagination#working-with-icons",children:Object(a.jsxs)(c.pb,{"aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{"aria-label":"Previous",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{"aria-label":"Next",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})})]})]})}),Object(a.jsx)(c.E,{xs:12,children:Object(a.jsxs)(c.r,{className:"mb-4",children:[Object(a.jsxs)(c.v,{children:[Object(a.jsx)("strong",{children:"React Pagination"})," ",Object(a.jsx)("small",{children:"Disabled and active states"})]}),Object(a.jsxs)(c.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["Pagination links are customizable for different circumstances. Use"," ",Object(a.jsx)("code",{children:"disabled"})," for links that appear un-clickable and ",Object(a.jsx)("code",{children:".active"})," to indicate the current page."]}),Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["While the ",Object(a.jsx)("code",{children:"disabled"})," prop uses ",Object(a.jsx)("code",{children:"pointer-events: none"})," to"," ",Object(a.jsx)("em",{children:"try"})," to disable the link functionality of ",Object(a.jsx)("code",{children:"<a>"}),"s, that CSS property is not yet standardized and doesn'taccount for keyboard navigation. As such, we always add ",Object(a.jsx)("code",{children:'tabindex="-1"'})," on disabled links and use custom JavaScript to fully disable their functionality."]}),Object(a.jsx)(i.c,{href:"components/pagination#disabled-and-active-states",children:Object(a.jsxs)(c.pb,{"aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{"aria-label":"Previous",disabled:!0,children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),Object(a.jsx)(c.qb,{active:!0,children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{"aria-label":"Next",children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})]})})]})]})}),Object(a.jsx)(c.E,{xs:12,children:Object(a.jsxs)(c.r,{className:"mb-4",children:[Object(a.jsxs)(c.v,{children:[Object(a.jsx)("strong",{children:"React Pagination"})," ",Object(a.jsx)("small",{children:"Sizing"})]}),Object(a.jsxs)(c.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["Fancy larger or smaller pagination? Add ",Object(a.jsx)("code",{children:'size="lg"'})," or"," ",Object(a.jsx)("code",{children:'size="sm"'})," for additional sizes."]}),Object(a.jsx)(i.c,{href:"components/pagination#sizing",children:Object(a.jsxs)(c.pb,{size:"lg","aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{children:"Previous"}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{children:"Next"})]})}),Object(a.jsx)(i.c,{href:"components/pagination#sizing",children:Object(a.jsxs)(c.pb,{size:"sm","aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{children:"Previous"}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{children:"Next"})]})})]})]})}),Object(a.jsx)(c.E,{xs:12,children:Object(a.jsxs)(c.r,{className:"mb-4",children:[Object(a.jsxs)(c.v,{children:[Object(a.jsx)("strong",{children:"React Pagination"})," ",Object(a.jsx)("small",{children:"Alignment"})]}),Object(a.jsxs)(c.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["Change the alignment of pagination components with"," ",Object(a.jsx)("a",{href:"https://coreui.io/docs/utilities/flex/",children:"flexbox utilities"}),"."]}),Object(a.jsx)(i.c,{href:"components/pagination#aligment",children:Object(a.jsxs)(c.pb,{className:"justify-content-center","aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{disabled:!0,children:"Previous"}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{children:"Next"})]})}),Object(a.jsx)(i.c,{href:"components/pagination#aligment",children:Object(a.jsxs)(c.pb,{className:"justify-content-end","aria-label":"Page navigation example",children:[Object(a.jsx)(c.qb,{disabled:!0,children:"Previous"}),Object(a.jsx)(c.qb,{children:"1"}),Object(a.jsx)(c.qb,{children:"2"}),Object(a.jsx)(c.qb,{children:"3"}),Object(a.jsx)(c.qb,{children:"Next"})]})})]})]})})]})}}]);
//# sourceMappingURL=19.dce7aa3b.chunk.js.map