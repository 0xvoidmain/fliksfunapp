const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-mbU2Lb2f.js","assets/index-BAcLm86R.js","assets/index-Q7zLqut_.css"])))=>i.map(i=>d[i]);
import{_ as C}from"./index-BAcLm86R.js";function T(l,o={}){const{qrSize:s=280,showCloseButton:y=!0,closeButtonText:p="×",theme:n="light",container:m=document.body,onCancel:x}=o,t=document.createElement("div");t.style.cssText=`
    position: fixed;
    inset: 0;
    background-color: ${n==="dark"?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.5)"};
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 300ms ease-out;
  `,o.overlayStyles&&Object.assign(t.style,o.overlayStyles);const r=document.createElement("div");if(r.style.cssText=`
    background: ${n==="dark"?"#1f1f1f":"#ffffff"};
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 90vw;
    max-height: 90vh;
    position: relative;
    animation: scaleIn 300ms ease-out;
  `,o.modalStyles&&Object.assign(r.style,o.modalStyles),y){const e=document.createElement("button");e.textContent=p,e.style.cssText=`
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: ${n==="dark"?"#ffffff":"#000000"};
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      transition: background-color 0.2s;
    `,e.addEventListener("mouseenter",()=>{e.style.backgroundColor=n==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}),e.addEventListener("mouseleave",()=>{e.style.backgroundColor="transparent"}),e.addEventListener("click",()=>{f(!0)}),r.appendChild(e)}const i=document.createElement("div");i.style.cssText=`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `;const u=document.createElement("h3");u.textContent="Scan to Connect",u.style.cssText=`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${n==="dark"?"#ffffff":"#000000"};
    text-align: center;
  `;const c=document.createElement("canvas");c.width=s,c.height=s,c.style.cssText=`
    border: 1px solid ${n==="dark"?"#333333":"#e5e5e5"};
    border-radius: 12px;
  `,E(l,c,s).catch(console.error);const a=document.createElement("button");a.textContent="Copy URI",a.style.cssText=`
    background: ${n==="dark"?"#333333":"#f5f5f5"};
    border: 1px solid ${n==="dark"?"#444444":"#e5e5e5"};
    color: ${n==="dark"?"#ffffff":"#000000"};
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  `,a.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(l);const e=a.textContent;a.textContent="Copied!",setTimeout(()=>{a.textContent=e},2e3)}catch(e){console.error("Failed to copy URI:",e)}}),i.appendChild(u),i.appendChild(c),i.appendChild(a),r.appendChild(i),t.appendChild(r);const d=document.createElement("style");d.textContent=`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    @keyframes scaleOut {
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(0.9); opacity: 0; }
    }
  `,document.head.appendChild(d);const h=e=>{e.key==="Escape"&&f(!0)},g=e=>{e.target===t&&f(!0)};document.addEventListener("keydown",h),t.addEventListener("click",g),m.appendChild(t);function f(e=!1){document.removeEventListener("keydown",h),t.removeEventListener("click",g),e&&x&&x(),t.style.animation="fadeOut 200ms ease-in",r.style.animation="scaleOut 200ms ease-in";const v=()=>{t.parentNode&&t.parentNode.removeChild(t),d.parentNode&&d.parentNode.removeChild(d)};t.addEventListener("animationend",v,{once:!0}),setTimeout(v,250)}function b(){t.style.display="none"}function k(){t.style.display="flex"}return{destroy:()=>f(!1),hide:b,show:k}}async function E(l,o,s){if(!o.getContext("2d"))return;const{toCanvas:p}=await C(async()=>{const{toCanvas:n}=await import("./browser-mbU2Lb2f.js").then(m=>m.b);return{toCanvas:n}},__vite__mapDeps([0,1,2]));await p(o,l,{width:s,margin:2,color:{dark:"#000000",light:"#ffffff"}})}export{T as createQROverlay};
