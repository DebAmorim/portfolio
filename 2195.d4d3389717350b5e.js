"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[2195],{2195:(q,p,m)=>{m.r(p),m.d(p,{startInputShims:()=>X});var w=m(5861),l=m(1848),T=m(3145),y=m(2831),R=m(3920);m(1836);const M=new WeakMap,P=(e,t,o,r=0,s=!1)=>{M.has(e)!==o&&(o?k(e,t,r,s):Z(e,t))},k=(e,t,o,r=!1)=>{const s=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),s.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${o}px,0) scale(0)`},Z=(e,t)=>{const o=M.get(e);o&&(M.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",B=(e,t,o)=>{const r=e[U];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()},120)},F=(e,t,o)=>{e.addEventListener("focusout",()=>{t&&B(t,0,o)},{once:!0})};let g=0;const x="data-ionic-skip-scroll-assist",Q=(e,t,o,r,s,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?W(e,t,o,r,S.detail.keyboardHeight,_,a,u,!1):L=!0},c=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)},h=function(){var S=(0,w.Z)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(W(e,t,o,r,s,_,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c,!0))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h,!0),()=>{e.removeEventListener("focusin",h,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)}},K=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},W=function(){var e=(0,w.Z)(function*(t,o,r,s,n,i,a=!1,_=0,L=!0){if(!r&&!s)return;const u=((e,t,o,r)=>{var s;return((e,t,o,r)=>{const s=e.top,n=e.bottom,i=t.top,_=i+15,u=Math.min(t.bottom,r-o)-50-n,f=_-s,c=Math.round(u<0?-u:f>0?-f:0),h=Math.min(c,s-i),b=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,b)),scrollPadding:o,inputSafeY:4-(s-_)}})((null!==(s=e.closest("ion-item,[ion-item]"))&&void 0!==s?s:e).getBoundingClientRect(),t.getBoundingClientRect(),o,r)})(t,r||s,n,_);if(r&&Math.abs(u.scrollAmount)<4)return K(o),void(i&&null!==r&&(B(r,g),F(o,r,()=>g=0)));if(P(t,o,!0,u.inputSafeY,a),K(o),(0,y.r)(()=>t.click()),i&&r&&(g=u.scrollPadding,B(r,g)),typeof window<"u"){let f;const c=function(){var S=(0,w.Z)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,T.c)(r,0,u.scrollAmount,u.scrollDuration)),P(t,o,!1,u.inputSafeY),K(o),i&&F(o,r,()=>g=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",c)};if(r){const S=yield(0,T.g)(r);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===o.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(o,r,s,n,i,a){return e.apply(this,arguments)}}(),X=function(){var e=(0,w.Z)(function*(t,o){if(void 0===l.d)return;const r="ios"===o,s="android"===o,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),_=t.getBoolean("inputBlurring",r),L=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,w.Z)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const O=d.shadowRoot||d,D=O.querySelector("input")||O.querySelector("textarea"),A=(0,T.f)(d),j=A?null:d.closest("ion-footer");if(D){if(A&&a&&!f.has(d)){const I=((e,t,o)=>{if(!o||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},s=()=>P(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,y.a)(o,"ionScrollStart",n),(0,y.a)(o,"ionScrollEnd",i),t.addEventListener("blur",s),()=>{(0,y.b)(o,"ionScrollStart",n),(0,y.b)(o,"ionScrollEnd",i),t.removeEventListener("blur",s)}})(d,D,A);f.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||j)&&i&&!c.has(d)){const I=Q(d,D,A,j,n,L,h,s);c.set(d,I)}}});return function(O){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const o=document;(0,y.a)(o,"ionScrollStart",()=>{t=!0}),o.addEventListener("focusin",()=>{e=!0},!0),o.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=o.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(o,r){return e.apply(this,arguments)}}()}}]);