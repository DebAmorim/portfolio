"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7250],{7250:(O,s,e)=>{e.r(s),e.d(s,{mdTransitionAnimation:()=>T});var t=e(962),c=e(191);const T=(P,o)=>{var a,l,r;const d="40px",u="back"===o.direction,E=o.leavingEl,f=(0,c.g)(o.enteringEl),g=f.querySelector("ion-toolbar"),n=(0,t.c)();if(n.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible"),u?n.duration((null!==(a=o.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(l=o.duration)&&void 0!==l?l:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${d})`,"translateY(0px)").fromTo("opacity",.01,1),g){const i=(0,t.c)();i.addElement(g),n.addAnimation(i)}if(E&&u){n.duration((null!==(r=o.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const i=(0,t.c)();i.addElement((0,c.g)(E)).onFinish(v=>{1===v&&i.elements.length>0&&i.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${d})`).fromTo("opacity",1,0),n.addAnimation(i)}return n}}}]);