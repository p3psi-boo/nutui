import{c as s}from"./mobile.8468c139.js";import{a as e,B as t,C as a,r as l,o,e as i,j as n,k as d,g as r,l as u}from"./vendor.e1f99099.js";import"./index.84d39d93.js";const{createDemo:c}=s("overlay");var p=c({props:{},setup:()=>({state:e({show:!1,show2:!1})})});t("data-v-3325d30e");const v={class:"demo"},f=r("h2",null,"基础用法",-1),h=u("显示遮罩层"),m=r("h2",null,"嵌套内容",-1),w=u("嵌套内容"),b=r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1);a(),p.render=function(s,e,t,a,r,u){const c=l("nut-button"),p=l("nut-overlay"),_=l("nut-cell");return o(),i("div",v,[f,n(_,null,{default:d((()=>[n(c,{type:"primary",onClick:e[0]||(e[0]=e=>s.state.show=!0)},{default:d((()=>[h])),_:1}),n(p,{visible:s.state.show,"onUpdate:visible":e[1]||(e[1]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),m,n(_,null,{default:d((()=>[n(c,{type:"success",onClick:e[2]||(e[2]=e=>s.state.show2=!0)},{default:d((()=>[w])),_:1}),n(p,{visible:s.state.show2,"onUpdate:visible":e[3]||(e[3]=e=>s.state.show2=e),"z-index":2e3},{default:d((()=>[b])),_:1},8,["visible"])])),_:1})])},p.__scopeId="data-v-3325d30e";export{p as default};
