(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{6902:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/statistics/deaths",function(){return t(6979)}])},6979:function(e,s,t){"use strict";t.r(s);var n=t(5893),c=t(7294);let l=()=>{let[e,s]=(0,c.useState)(null),[t,l]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{l(!0),fetch("//encryptsl.cekuj.net/api/minecraft/stats/deaths",{method:"GET",headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{s(e),l(!1)})},[]),t)?(0,n.jsx)("p",{children:"Loading..."}):e?(0,n.jsxs)("div",{className:"col-md-3",children:[(0,n.jsx)("h2",{children:"Největš\xed smolaři"}),(0,n.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"#"}),(0,n.jsx)("th",{scope:"col",children:"Jm\xe9no"}),(0,n.jsx)("th",{scope:"col",children:"Zemřel"})]})}),(0,n.jsx)("tbody",{children:e&&e.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"row",children:e.id}),(0,n.jsxs)("td",{children:[(0,n.jsx)("img",{src:"https://minotar.net/avatar/"+e.uuid+"/32"})," ",e.username]}),(0,n.jsx)("td",{children:e.deaths})]},e.username))})]})]}):(0,n.jsx)("p",{children:"No profile data"})};s.default=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6902)}),_N_E=e.O()}]);