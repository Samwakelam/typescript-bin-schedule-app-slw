(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,n,r){},18:function(e,n,r){},19:function(e,n,r){},25:function(e,n,r){"use strict";r.r(n);var t,o,a,c,i,l,s,u=r(0),d=r.n(u),p=r(8),b=r.n(p),h=(r(17),r(18),r(19),r(2)),j=r(3),f=j.a.img(t||(t=Object(h.a)(["\n  width: 100%;\n  max-width: 562px;\n  max-height: 100vh;\n"]))),v=j.a.main(o||(o=Object(h.a)(["\n  flex-grow: 1;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n  background-color: ",";\n"])),(function(e){return e.mainColour||"rebeccapurple"})),x=r(1),g=function(e){var n=e.week,r=e.binColour;return n&&r?Object(x.jsx)(v,{mainColour:"Green"===r?"papayawhip":"palevioletred",children:Object(x.jsx)(f,{className:"bin",src:"".concat("/typescript-bin-schedule-app-slw","/assets/").concat("Green"===r?"Green":"Black","-bin.png"),alt:"Green Bin"})}):null},k=j.a.header(a||(a=Object(h.a)(["\n  padding: 12px;\n\n  background-color: ",";\n  color: var(--lightGrey);\n"])),(function(e){return e.headerColour||"var(--darkestGrey"})),w=j.a.p(c||(c=Object(h.a)(["\n  color: ",";\n"])),(function(e){return e.textColour||"var(--lightGrey)"})),y=j.a.h1(i||(i=Object(h.a)(["\n  color: ",";\n"])),(function(e){return e.textColour||"var(--lightGrey)"})),O=j.a.span(l||(l=Object(h.a)(["\n  color: ",";\n"])),(function(e){return e.textColour||"var(--lightGrey)"})),G=function(e){var n=e.week,r=e.binColour;return Object(x.jsxs)(k,{headerColour:"Green"===r?"var(--darkestGreen)":"var(--darkestGrey)",children:[Object(x.jsxs)(w,{textColour:"Green"===r?"papayawhip":"var(--lightGrey)",children:["Week: ",n]}),Object(x.jsxs)(y,{textColour:"Green"===r?"papayawhip":"var(--lightGrey)",children:["This Week's Bin Colour Is:"," ",Object(x.jsx)(O,{textColour:"Green"===r?"var(--midGreen)":"palevioletred",children:r})]})]})},C=j.a.footer(s||(s=Object(h.a)(["\n  padding: 12px;\n\n  background-color: ",";\n"])),(function(e){return e.footerColour||"var(--darkestGrey"})),m=function(e){var n=e.binColour;return Object(x.jsx)(C,{footerColour:"Green"===n?"var(--darkestGreen)":"var(--darkestGrey)"})},B=r(12);function D(){var e=function(e){var n=new Date(e),r=new Date(n.getFullYear(),0,1),t=Math.floor((n-r)/864e5);return Math.ceil((n.getDay()+1+t)/7)}(new Date),n=function(e){var n=Object(u.useState)("Black"),r=Object(B.a)(n,2),t=r[0],o=r[1];return Object(u.useEffect)((function(){var n=Number.isInteger(e/2);o(n?"Black":"Green")}),[e]),e?t:null}(e);return Object(u.useEffect)((function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("".concat("/typescript-bin-schedule-app-slw","/service-worker.js"),{scope:"".concat("/typescript-bin-schedule-app-slw","/")}).then((function(e){console.log("Service worker has loaded successfully.",e)})).catch((function(e){console.log("service worker has not loaded successfully.",e)}))}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(G,{week:e,binColour:n}),Object(x.jsx)(g,{week:e,binColour:n}),Object(x.jsx)(m,{binColour:n})]})}b.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.611b597a.chunk.js.map