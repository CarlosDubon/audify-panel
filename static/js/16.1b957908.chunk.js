(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{457:function(e){e.exports=JSON.parse('{"name":"@coreui/coreui-free-react-admin-template","description":"CoreUI Free React Admin Template","version":"4.0.0-beta.0","config":{"coreui_library_short_version":"4.0"},"author":{"name":"CoreUI","url":"https://coreui.io","github":"https://github.com/coreui","twitter":"https://twitter.com/core_ui"},"contributors":[{"name":"CoreUI Team","url":"https://github.com/orgs/coreui/people"}],"homepage":"http://CarlosDubon.github.io/sraag-panel","copyright":"Copyright 2017-2021 creativeLabs \u0141ukasz Holeczek","license":"MIT","private":true,"repository":{"type":"git","url":"git@github.com:coreui/coreui-free-react-admin-template.git"},"dependencies":{"@coreui/chartjs":"3.0.0","@coreui/coreui":"4.0.0","@coreui/icons":"^2.0.1","@coreui/icons-react":"^2.0.0-rc.0","@coreui/react":"4.0.0-beta.2","@coreui/react-chartjs":"2.0.0-rc.0","@coreui/utils":"^1.3.1","@wojtekmaj/enzyme-adapter-react-17":"^0.6.2","axios":"^0.21.1","chart.js":"^3.4.1","classnames":"^2.3.1","core-js":"^3.15.2","enzyme":"^3.11.0","gh-pages":"^3.2.3","google-maps-react":"^2.0.6","jdenticon":"^3.1.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-bootstrap-sweetalert":"^5.2.0","react-confirm-alert":"^2.7.0","react-dom":"^17.0.2","react-dropzone":"^11.3.4","react-hot-toast":"^2.0.0","react-redux":"^7.2.4","react-router-dom":"^5.2.0","redux":"4.1.0","redux-persist":"^6.0.0","simplebar-react":"^2.3.4"},"devDependencies":{"auto-changelog":"~2.3.0","eslint":"^7.30.0","react-scripts":"^4.0.3","sass":"^1.35.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","lint":"eslint \\"src/**/*.js\\"","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject","changelog":"auto-changelog --starting-version 3.0.0 --commit-limit false --hide-credit","predeploy":"yarn run build","deploy":"gh-pages -d build"},"bugs":{"url":"https://github.com/coreui/coreui-free-react-admin-template/issues"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=10","npm":">=6"}}')},458:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return h})),c.d(t,"c",(function(){return u}));var r=c(0),s=c.n(r),i=c(456),a=c(457),n=c(9);const o=e=>{const{href:t,name:c}=e,r="s"===c.slice(-1),s="https://coreui.io/react/docs/".concat(a.config.coreui_library_short_version,"/").concat(t);return Object(n.jsxs)(i.q,{color:"info",className:"bg-white",children:["A React ",c," component ",r?"have":"has"," been created as a native React.js version of Bootstrap ",c,". ",c," ",r?"are":"is"," delivered with some new features, variants, and unique design that matches CoreUI Design System requirements.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"For more information please visit our official"," ",Object(n.jsx)(i.eb,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};var l=s.a.memo(o);const d=e=>{const{href:t,name:c,text:r,...s}=e,a=c?"https://coreui.io/react/docs/components/".concat(c):t;return Object(n.jsx)("div",{className:"float-end",children:Object(n.jsx)(i.eb,{...s,href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(n.jsx)("small",{className:"text-medium-emphasis",children:r||"docs"})})})};var h=s.a.memo(d),j=c(459);const m=e=>{const{children:t,href:c}=e,r="https://coreui.io/react/docs/".concat(a.config.coreui_library_short_version,"/").concat(c);return Object(n.jsxs)("div",{className:"example",children:[Object(n.jsxs)(i.mb,{variant:"tabs",children:[Object(n.jsx)(i.nb,{children:Object(n.jsxs)(i.ob,{href:"#",active:!0,children:[Object(n.jsx)(j.a,{name:"cil-media-play",className:"me-2"}),"Preview"]})}),Object(n.jsx)(i.nb,{children:Object(n.jsxs)(i.ob,{href:r,target:"_blank",children:[Object(n.jsx)(j.a,{name:"cil-code",className:"me-2"}),"Code"]})})]}),Object(n.jsx)(i.Ab,{className:"rounded-bottom",children:Object(n.jsx)(i.Bb,{className:"p-3 preview",visible:!0,children:t})})]})};var u=s.a.memo(m)},530:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(456),i=c(458),a=c(9);t.default=()=>{const[e,t]=Object(r.useState)(!1),[c,n]=Object(r.useState)(!1),[o,l]=Object(r.useState)(!1);return Object(a.jsxs)(s.ub,{children:[Object(a.jsx)(s.E,{xs:12,children:Object(a.jsx)(i.a,{name:"Collapse",href:"components/collapse"})}),Object(a.jsx)(s.E,{xs:12,children:Object(a.jsxs)(s.r,{className:"mb-4",children:[Object(a.jsx)(s.v,{children:Object(a.jsx)("strong",{children:"React Collapse"})}),Object(a.jsxs)(s.s,{children:[Object(a.jsx)("p",{className:"text-medium-emphasis small",children:"You can use a link or a button component."}),Object(a.jsxs)(i.c,{href:"components/collapse",children:[Object(a.jsx)(s.n,{href:"#",onClick:c=>{c.preventDefault(),t(!e)},children:"Link"}),Object(a.jsx)(s.n,{onClick:()=>t(!e),children:"Button"}),Object(a.jsx)(s.F,{visible:e,children:Object(a.jsx)(s.r,{className:"mt-3",children:Object(a.jsx)(s.s,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})]})]})]})}),Object(a.jsx)(s.E,{xs:12,children:Object(a.jsxs)(s.r,{className:"mb-4",children:[Object(a.jsxs)(s.v,{children:[Object(a.jsx)("strong",{children:"React Collapse"})," ",Object(a.jsx)("small",{children:" multi target"})]}),Object(a.jsxs)(s.s,{children:[Object(a.jsxs)("p",{className:"text-medium-emphasis small",children:["A ",Object(a.jsx)("code",{children:"<CButton>"})," can show and hide multiple elements."]}),Object(a.jsxs)(i.c,{href:"components/collapse#multiple-targets",children:[Object(a.jsx)(s.n,{onClick:()=>n(!c),children:"Toggle first element"}),Object(a.jsx)(s.n,{onClick:()=>l(!o),children:"Toggle second element"}),Object(a.jsx)(s.n,{onClick:()=>{n(!c),l(!o)},children:"Toggle both elements"}),Object(a.jsxs)(s.ub,{children:[Object(a.jsx)(s.E,{xs:"6",children:Object(a.jsx)(s.F,{visible:c,children:Object(a.jsx)(s.r,{className:"mt-3",children:Object(a.jsx)(s.s,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})}),Object(a.jsx)(s.E,{xs:"6",children:Object(a.jsx)(s.F,{visible:o,children:Object(a.jsx)(s.r,{className:"mt-3",children:Object(a.jsx)(s.s,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})})]})]})]})]})})]})}}}]);
//# sourceMappingURL=16.1b957908.chunk.js.map