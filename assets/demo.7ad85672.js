import{c as e}from"./mobile.2dba7f21.js";import{k as l,N as a,r as n,o as c,c as u,f as d,i as o}from"./index.d870aa4d.js";const{createDemo:t}=e("switch");var h=t({setup(){let{proxy:e}=a();const n=l(!0),c=l(!0);return{checked:n,checkedAsync:c,change:(l,a)=>{e.$toast.text(`触发了change事件，开关状态：${l}`)},changeAsync:(l,a)=>{e.$toast.text(`2秒后异步触发 ${l}`),setTimeout((()=>{c.value=l}),2e3)}}}});const s={class:"demo"},m=d("h2",null,"基础用法",-1),i=d("h2",null,"禁用状态",-1),g=d("h2",null,"change事件",-1),r=d("h2",null,"异步控制",-1),V=d("h2",null,"自定义颜色",-1),k=d("h2",null,"支持文字",-1);h.render=function(e,l,a,t,h,f){const p=n("nut-switch"),C=n("nut-cell");return c(),u("div",s,[m,d(C,null,{default:o((()=>[d(p,{modelValue:e.checked,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked=l)},null,8,["modelValue"])])),_:1}),i,d(C,null,{default:o((()=>[d(p,{modelValue:e.checked,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked=l),disable:""},null,8,["modelValue"])])),_:1}),g,d(C,null,{default:o((()=>[d(p,{modelValue:e.checked,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checked=l),onChange:e.change},null,8,["modelValue","onChange"])])),_:1}),r,d(C,null,{default:o((()=>[d(p,{"model-value":e.checkedAsync,onChange:e.changeAsync},null,8,["model-value","onChange"])])),_:1}),V,d(C,null,{default:o((()=>[d(p,{modelValue:e.checked,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checked=l),onChange:e.switchChange,"active-color":"blue"},null,8,["modelValue","onChange"])])),_:1}),k,d(C,null,{default:o((()=>[d(p,{modelValue:e.checked,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checked=l),onChange:e.switchChange,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])};export default h;
