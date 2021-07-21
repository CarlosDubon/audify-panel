(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9,37],{457:function(e){e.exports=JSON.parse('{"name":"@coreui/coreui-free-react-admin-template","description":"CoreUI Free React Admin Template","version":"4.0.0-beta.0","config":{"coreui_library_short_version":"4.0"},"author":{"name":"CoreUI","url":"https://coreui.io","github":"https://github.com/coreui","twitter":"https://twitter.com/core_ui"},"contributors":[{"name":"CoreUI Team","url":"https://github.com/orgs/coreui/people"}],"homepage":"http://CarlosDubon.github.io/sraag-panel","copyright":"Copyright 2017-2021 creativeLabs \u0141ukasz Holeczek","license":"MIT","private":true,"repository":{"type":"git","url":"git@github.com:coreui/coreui-free-react-admin-template.git"},"dependencies":{"@coreui/chartjs":"3.0.0","@coreui/coreui":"4.0.0","@coreui/icons":"^2.0.1","@coreui/icons-react":"^2.0.0-rc.0","@coreui/react":"4.0.0-beta.2","@coreui/react-chartjs":"2.0.0-rc.0","@coreui/utils":"^1.3.1","@wojtekmaj/enzyme-adapter-react-17":"^0.6.2","axios":"^0.21.1","chart.js":"^3.4.1","classnames":"^2.3.1","core-js":"^3.15.2","enzyme":"^3.11.0","gh-pages":"^3.2.3","google-maps-react":"^2.0.6","jdenticon":"^3.1.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-bootstrap-sweetalert":"^5.2.0","react-confirm-alert":"^2.7.0","react-dom":"^17.0.2","react-dropzone":"^11.3.4","react-hot-toast":"^2.0.0","react-redux":"^7.2.4","react-router-dom":"^5.2.0","redux":"4.1.0","redux-persist":"^6.0.0","simplebar-react":"^2.3.4"},"devDependencies":{"auto-changelog":"~2.3.0","eslint":"^7.30.0","react-scripts":"^4.0.3","sass":"^1.35.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","lint":"eslint \\"src/**/*.js\\"","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject","changelog":"auto-changelog --starting-version 3.0.0 --commit-limit false --hide-credit","predeploy":"yarn run build","deploy":"gh-pages -d build"},"bugs":{"url":"https://github.com/coreui/coreui-free-react-admin-template/issues"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=10","npm":">=6"}}')},458:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return h}));var c=r(0),s=r.n(c),a=r(456),i=r(457),o=r(9);const n=e=>{const{href:t,name:r}=e,c="s"===r.slice(-1),s="https://coreui.io/react/docs/".concat(i.config.coreui_library_short_version,"/").concat(t);return Object(o.jsxs)(a.q,{color:"info",className:"bg-white",children:["A React ",r," component ",c?"have":"has"," been created as a native React.js version of Bootstrap ",r,". ",r," ",c?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"For more information please visit our official"," ",Object(o.jsx)(a.eb,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};var l=s.a.memo(n);const u=e=>{const{href:t,name:r,text:c,...s}=e,i=r?"https://coreui.io/react/docs/components/".concat(r):t;return Object(o.jsx)("div",{className:"float-end",children:Object(o.jsx)(a.eb,{...s,href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-medium-emphasis",children:c||"docs"})})})};var b=s.a.memo(u),m=r(459);const d=e=>{const{children:t,href:r}=e,c="https://coreui.io/react/docs/".concat(i.config.coreui_library_short_version,"/").concat(r);return Object(o.jsxs)("div",{className:"example",children:[Object(o.jsxs)(a.mb,{variant:"tabs",children:[Object(o.jsx)(a.nb,{children:Object(o.jsxs)(a.ob,{href:"#",active:!0,children:[Object(o.jsx)(m.a,{name:"cil-media-play",className:"me-2"}),"Preview"]})}),Object(o.jsx)(a.nb,{children:Object(o.jsxs)(a.ob,{href:c,target:"_blank",children:[Object(o.jsx)(m.a,{name:"cil-code",className:"me-2"}),"Code"]})})]}),Object(o.jsx)(a.Ab,{className:"rounded-bottom",children:Object(o.jsx)(a.Bb,{className:"p-3 preview",visible:!0,children:t})})]})};var h=s.a.memo(d)},465:function(e,t,r){"use strict";r.r(t),r.d(t,"getIconsView",(function(){return n}));r(0);var c=r(456),s=r(459),a=r(551),i=r(458),o=r(9);const n=e=>Object.entries(e).map((([e,t])=>{return Object(o.jsxs)(c.E,{className:"mb-5",xs:"6",sm:"4",md:"3",xl:"2",children:[Object(o.jsx)(s.a,{content:t,size:"2xl"}),Object(o.jsx)("div",{children:(r=e,r.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase())})]},e);var r}));t.default=()=>Object(o.jsxs)(c.r,{className:"mb-4",children:[Object(o.jsxs)(c.v,{children:["Brand Icons",Object(o.jsx)(i.b,{href:"https://github.com/coreui/coreui-icons",text:"GitHub"})]}),Object(o.jsx)(c.s,{children:Object(o.jsx)(c.ub,{className:"text-center",children:n(a.a)})})]})},550:function(e,t,r){"use strict";r.r(t);r(0);var c=r(456),s=r(552),a=r(465),i=r(458),o=r(9);t.default=()=>Object(o.jsxs)(c.r,{className:"mb-4",children:[Object(o.jsxs)(c.v,{children:["Free Icons / as CIcon"," ",Object(o.jsx)(i.b,{href:"https://github.com/coreui/coreui-icons",text:"GitHub"})]}),Object(o.jsx)(c.s,{children:Object(o.jsx)(c.ub,{className:"text-center",children:Object(a.getIconsView)(s.a)})})]})}}]);
//# sourceMappingURL=9.45655a56.chunk.js.map