System.register(["./mobile-legacy.a735c414.js","./vendor-legacy.c1dd93a9.js","./index-legacy.0fc3d9a1.js"],(function(t){"use strict";var e,n,s,i,o,c,a;return{setters:[function(t){e=t.c,n=t.T},function(t){s=t.r,i=t.o,o=t.e,c=t.j,a=t.g},function(){}],execute:function(){const{createDemo:l}=e("toast"),r=t("default",l({setup:()=>({textToast:t=>{n.text(t)},successToast:t=>{n.success(t)},errorToast:t=>{n.fail(t)},warningToast:t=>{n.warn(t)},loadingToast:t=>{n.loading(t)}})})),u={class:"demo"},d=a("h2",null,"基本用法",-1);r.render=function(t,e,n,a,l,r){const g=s("nut-cell");return i(),o("div",u,[d,c(g,{title:"Text 文字提示","is-link":"",onClick:e[0]||(e[0]=e=>t.textToast("网络失败，请稍后再试~"))}),c(g,{title:"Success 成功提示","is-link":"",onClick:e[1]||(e[1]=e=>t.successToast("成功提示"))}),c(g,{title:"Error 失败提示","is-link":"",onClick:e[2]||(e[2]=e=>t.errorToast("失败提示"))}),c(g,{title:"Warning 警告提示","is-link":"",onClick:e[3]||(e[3]=e=>t.warningToast("警告提示"))}),c(g,{title:"Loading 加载提示","is-link":"",onClick:e[4]||(e[4]=e=>t.loadingToast("加载中"))})])}}}}));
