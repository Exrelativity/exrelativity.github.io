(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5636:function(e,t,n){Promise.resolve().then(n.bind(n,9530)),Promise.resolve().then(n.t.bind(n,54,23)),Promise.resolve().then(n.t.bind(n,7158,23))},9530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(9268),o=n(6006);function a(e,t){let n=(0,o.useRef)();(0,o.useEffect)(()=>{n.current=t},[t]),(0,o.useEffect)(()=>{let t=document,r=t&&t.addEventListener;if(!r)return;let o=e=>n.current(e);return t.addEventListener(e,o),()=>{t.removeEventListener(e,o)}},[e])}n(5270);let i=(()=>{if("undefined"==typeof navigator)return;let e=navigator.userAgent;return{info:e,Android:()=>e.match(/Android/i),BlackBerry:()=>e.match(/BlackBerry/i),IEMobile:()=>e.match(/IEMobile/i),iOS:()=>e.match(/iPhone|iPad|iPod/i),iPad:()=>e.match(/Mac/)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,OperaMini:()=>e.match(/Opera Mini/i),any:()=>i.Android()||i.BlackBerry()||i.iOS()||i.iPad()||i.OperaMini()||i.IEMobile()}})();function s(e){let{animationKeyFrameInner:t="rainbow-bg-inner",animationKeyFrameOuter:n="rainbow-bg-outer",outerStyle:i,innerStyle:s,innerSize:u=8,outerSize:c=8,outerScale:l=6,innerScale:f=.6,trailingSpeed:m=8,clickables:d=["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]}=e,y=(0,o.useRef)(),p=(0,o.useRef)(),v=(0,o.useRef)(),E=(0,o.useRef)(),[b,_]=(0,o.useState)({x:0,y:0}),[h,x]=(0,o.useState)(!1),[k,S]=(0,o.useState)(!1),[g,O]=(0,o.useState)(!1),L=(0,o.useRef)(0),w=(0,o.useRef)(0),I=(0,o.useCallback)(e=>{let{clientX:t,clientY:n}=e;_({x:t,y:n}),p.current.style.top="".concat(n,"px"),p.current.style.left="".concat(t,"px"),L.current=t,w.current=n},[]),P=(0,o.useCallback)(e=>{void 0!==E.current&&(b.x+=(L.current-b.x)/m,b.y+=(w.current-b.y)/m,y.current.style.top="".concat(b.y,"px"),y.current.style.left="".concat(b.x,"px")),E.current=e,v.current=requestAnimationFrame(P)},[v]);(0,o.useEffect)(()=>(v.current=requestAnimationFrame(P),()=>cancelAnimationFrame(v.current)),[P]);let R=(0,o.useCallback)(()=>S(!0),[]),C=(0,o.useCallback)(()=>S(!1),[]),A=(0,o.useCallback)(()=>x(!0),[]),j=(0,o.useCallback)(()=>x(!1),[]);a("mousemove",I),a("mousedown",R),a("mouseup",C),a("mouseover",A),a("mouseout",j),(0,o.useEffect)(()=>{k?(p.current.style.transform="translate(-50%, -50%) scale(".concat(f,")"),y.current.style.transform="translate(-50%, -50%) scale(".concat(l,")")):(p.current.style.transform="translate(-50%, -50%) scale(1)",y.current.style.transform="translate(-50%, -50%) scale(1)")},[f,l,k]),(0,o.useEffect)(()=>{g&&(p.current.style.transform="translate(-50%, -50%) scale(".concat(1.2*f,")"),y.current.style.transform="translate(-50%, -50%) scale(".concat(1.4*l,")"))},[f,l,g]),(0,o.useEffect)(()=>{h?(p.current.style.opacity=1,y.current.style.opacity=1):(p.current.style.opacity=0,y.current.style.opacity=0)},[h]),(0,o.useEffect)(()=>{document.body.style.cursor="none";let e=document.querySelectorAll(d.join(","));return e.forEach(e=>{e.style.cursor="none",e.addEventListener("mouseover",()=>{S(!0)}),e.addEventListener("click",()=>{S(!0),O(!1)}),e.addEventListener("mousedown",()=>{O(!0)}),e.addEventListener("mouseup",()=>{S(!0)}),e.addEventListener("mouseout",()=>{S(!1),O(!1)})}),()=>{e.forEach(e=>{e.removeEventListener("mouseover",()=>{S(!0)}),e.removeEventListener("click",()=>{S(!0),O(!1)}),e.removeEventListener("mousedown",()=>{O(!0)}),e.removeEventListener("mouseup",()=>{S(!0)}),e.removeEventListener("mouseout",()=>{S(!1),O(!1)})})}},[k,d]);let F={cursorInner:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",width:u,height:u,pointerEvents:"none",animation:"".concat(t," 2.5s linear"),animationIterationCount:"infinite",...s&&s,transition:"opacity 0.15s ease-in-out, transform 0.25s ease-in-out"},cursorOuter:{zIndex:999,display:"block",position:"fixed",borderRadius:"50%",pointerEvents:"none",width:c,height:c,animation:"".concat(n," 2.5s linear"),animationIterationCount:"infinite",transition:"opacity 0.15s ease-in-out, transform 0.15s ease-in-out",willChange:"transform",...i&&i}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:y,style:F.cursorOuter}),(0,r.jsx)("div",{ref:p,style:F.cursorInner})]})}var u=function(e){let{outerStyle:t,innerStyle:n,color:o,outerAlpha:a,innerSize:u,innerScale:c,outerSize:l,outerScale:f,trailingSpeed:m,clickables:d}=e;return"undefined"!=typeof navigator&&i.any()?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(s,{outerStyle:t,innerStyle:n,color:o,outerAlpha:a,innerSize:u,innerScale:c,outerSize:l,outerScale:f,trailingSpeed:m,clickables:d})}},54:function(){},5270:function(){},7158:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[253,961,744],function(){return e(e.s=5636)}),_N_E=e.O()}]);