var e=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(o,s,t)=>s in o?e(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,l=(e,l)=>{for(var i in l||(l={}))s.call(l,i)&&n(e,i,l[i]);if(o)for(var i of o(l))t.call(l,i)&&n(e,i,l[i]);return e};import{c as i}from"./mobile.8468c139.js";import{a,m as c,A as d,B as r,C as m,r as u,o as h,e as p,j as y,g as w}from"./vendor.e1f99099.js";import"./index.84d39d93.js";const{createDemo:v}=i("address");var b=v({props:{},setup(){const e=a({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"},{id:5,name:"浙江"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"},{id:3,name:"八里庄街道"},{id:9,name:"北苑"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),o=a({normal:!1,exist:!1,customImg:!1,other:!1}),s=a({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),t=c([{id:1,addressDetail:"",cityName:"次渠镇",countyName:"通州区",provinceName:"北京市",selectedAddress:!0,townName:"",name:"探探鱼",phone:"182****1718"},{id:2,addressDetail:"",cityName:"钓鱼岛全区",countyName:"",provinceName:"钓鱼岛",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"},{id:3,addressDetail:"京东大厦",cityName:"大兴区",countyName:"科创十一街18号院",provinceName:"北京市",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"}]),n=a({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址"});return l(l(l(l({showAddress:()=>{o.normal=!o.normal},showPopup:o,onChange:(s,t)=>{e[s.next].length<1&&(o[t]=!1)},close1:e=>{console.log(e),n.one=e.data.addressStr},showAddressExist:()=>{o.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.two=o+s+t+l+i}else n.two=e.data.addressStr},selected:(e,o,s)=>{console.log(e),console.log(o)},existAddress:t,showAddressOther:()=>{o.other=!0},showCustomImg:()=>{o.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.three=o+s+t+l+i}else n.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:i}=e.data;n.four=o+s+t+l+i}else n.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)}},d(s)),d(n)),d(o)),d(e))}});r("data-v-60b8ad77");const C={class:"demo"},g=w("h2",null,"选择自定义地址",-1),x=w("h2",null,"选择已有地址",-1),f=w("h2",null,"自定义图标",-1),N=w("h2",null,"自定义地址与已有地址切换",-1);m(),b.render=function(e,o,s,t,n,l){const i=u("nut-cell"),a=u("nut-address");return h(),p("div",C,[g,y(i,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),y(a,{visible:e.normal,"onUpdate:visible":o[0]||(o[0]=o=>e.normal=o),province:e.province,city:e.city,country:e.country,town:e.town,onChange:o[1]||(o[1]=o=>e.onChange(o,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),x,y(i,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),y(a,{visible:e.exist,"onUpdate:visible":o[2]||(o[2]=o=>e.exist=o),type:"exist","exist-address":e.existAddress,onChange:o[3]||(o[3]=o=>e.onChange(o,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),f,y(i,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),y(a,{visible:e.customImg,"onUpdate:visible":o[4]||(o[4]=o=>e.customImg=o),type:"exist","exist-address":e.existAddress,onChange:o[5]||(o[5]=o=>e.onChange(o,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),N,y(i,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),y(a,{visible:e.other,"onUpdate:visible":o[6]||(o[6]=o=>e.other=o),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:o[7]||(o[7]=o=>e.onChange(o,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])},b.__scopeId="data-v-60b8ad77";export{b as default};
