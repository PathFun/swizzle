var Ht=Object.defineProperty,Wt=Object.defineProperties;var Jt=Object.getOwnPropertyDescriptors;var pt=Object.getOwnPropertySymbols;var Vt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable;var dt=(t,n,e)=>n in t?Ht(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,A=(t,n)=>{for(var e in n||(n={}))Vt.call(n,e)&&dt(t,e,n[e]);if(pt)for(var e of pt(n))Xt.call(n,e)&&dt(t,e,n[e]);return t},M=(t,n)=>Wt(t,Jt(n));import{r as nt,m as mt,a as Lt,n as Gt,i as Kt,d as y,h as U,_ as h,o as p,c as m,b as c,e as f,u as d,t as W,f as R,g as j,w as C,j as z,k as F,v as P,l as S,p as b,q as N,s as et,x as Y,y as J,z as Qt,A as v,B as at,C as At,D as Ct,E as ot,F as Z,G as V,H as tn,I as Ot,J as ut,K as nn}from"./plugin-vue_export-helper.3a7fc118.js";const en="modulepreload",ft={},an="/swizzle/",Q=function(n,e){return!e||e.length===0?n():Promise.all(e.map(a=>{if(a=`${an}${a}`,a in ft)return;ft[a]=!0;const o=a.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":en,o||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),o)return new Promise((l,s)=>{i.addEventListener("load",l),i.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())},O=typeof window!="undefined";function $t(t,n){return`${t}${n}`.replace(/\/+/g,"/")}function Mt(t){let n=t.replace(/\.html$/,"");if(n.endsWith("/")&&(n+="index"),O){const e="/swizzle/";n=n.slice(e.length).replace(/\//g,"_")+".md";const a=__VP_HASH_MAP__[n.toLowerCase()];n=`${e}assets/${n}.${a}.js`}else n=`./${n.slice(1).replace(/\//g,"_")}.md.js`;return n}const Rt=Symbol(),bt="http://a.com",on=()=>({path:"/",component:null,data:null});function rn(t,n){const e=nt(on()),a=typeof window!="undefined";function o(l=a?location.href:"/"){const s=new URL(l,bt);return!s.pathname.endsWith("/")&&!s.pathname.endsWith(".html")&&(s.pathname+=".html",l=s.pathname+s.search+s.hash),a&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",l)),i(l)}let r=null;async function i(l,s=0){const u=new URL(l,bt),x=r=u.pathname;try{let w=t(x);if("then"in w&&typeof w.then=="function"&&(w=await w),r===x){r=null;const{default:_,__pageData:k}=w;if(!_)throw new Error(`Invalid route component: ${_}`);e.path=x,e.component=mt(_),e.data=Lt(JSON.parse(k)),a&&Gt(()=>{if(u.hash&&!s){const I=document.querySelector(decodeURIComponent(u.hash));if(I){gt(I,u.hash);return}}window.scrollTo(0,s)})}}catch(w){w.message.match(/fetch/)||console.error(w),r===x&&(r=null,e.path=x,e.component=n?mt(n):null)}}return a&&(window.addEventListener("click",l=>{const s=l.target.closest("a");if(s){const{href:u,protocol:x,hostname:w,pathname:_,hash:k,target:I}=s,E=window.location,D=_.match(/\.\w+$/);!l.ctrlKey&&!l.shiftKey&&!l.altKey&&!l.metaKey&&I!=="_blank"&&x===E.protocol&&w===E.hostname&&!(D&&D[0]!==".html")&&(l.preventDefault(),_===E.pathname?k&&k!==E.hash&&(history.pushState(null,"",k),gt(s,k,s.classList.contains("header-anchor"))):o(u))}},{capture:!0}),window.addEventListener("popstate",l=>{i(location.href,l.state&&l.state.scrollPosition||0)}),window.addEventListener("hashchange",l=>{l.preventDefault()})),{route:e,go:o}}function ln(){const t=Kt(Rt);if(!t)throw new Error("useRouter() is called without provider.");return t}function L(){return ln().route}function gt(t,n,e=!1){const a=document.querySelector(".nav-bar").offsetHeight,o=t.classList.contains(".header-anchor")?t:document.querySelector(decodeURIComponent(n));if(o){const r=o.offsetTop-a-15;!e||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}const sn=y({name:"VitePressContent",setup(){const t=L();return()=>t.component?U(t.component):null}});const cn={setup(){return{}}},pn={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},dn=c("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),mn=c("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),un=[dn,mn];function fn(t,n,e,a,o,r){return p(),m("svg",pn,un)}var bn=h(cn,[["render",fn]]);const gn={setup(){return{}}},hn={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},xn=c("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),wn=[xn];function kn(t,n,e,a,o,r){return p(),m("svg",hn,wn)}var vn=h(gn,[["render",kn]]);const yn=["href"],zn=c("div",{style:{width:"16px","margin-left":"6px"}},[c("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[c("g",null,[c("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),_n=[zn],jn=y({__name:"OnlineEdit",props:{content:null,importMap:null},setup(t){const n=t,e="https://sfc.vuejs.org/",a=f(()=>{const o={"App.vue":n.content};if(n.importMap)try{o["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(n.importMap))})}catch{}return`${e}#${btoa(unescape(encodeURIComponent(JSON.stringify(o))))}`});return(o,r)=>(p(),m("a",{href:d(a),style:{display:"flex","align-items":"center"},target:"_blank"},_n,8,yn))}});function Sn(t){const n=nt({showTip:!1});function e(){navigator.clipboard.writeText(t),n.showTip=!0,setTimeout(()=>{n.showTip=!1},5*1e3)}return M(A({},W(n)),{copyCode:e})}const ht=/<script.*>([\s\S]+)<\/script>/,xt=/<style>([\s\S]+)<\/style>/,wt=/<template>([\s\S]+)<\/template>/,G=t=>n=>{const e=n.match(t);return e&&e[1].trim()},kt=t=>JSON.parse(decodeURIComponent(t));function In(t,n,e){const a=nt({expand:!1}),o=()=>a.expand=!a.expand,r=f(()=>{const i=G(ht)(t)||"",l=G(xt)(t)||"",s=G(wt)(t)||t.replace(ht,"").replace(xt,"").replace(wt,"").trim(),u=kt(n),x=kt(e);return{js:i,css:l,html:s,jsLibs:u,cssLibs:x}});return M(A({},W(a)),{toggleExpand:o,parsedCode:r})}const Ln={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:bn,codeSvg:vn,OnlineEdit:jn},setup(t){const n=f(()=>{var s;return decodeURIComponent((s=t.htmlStr)!=null?s:"")}),e=f(()=>{var s;return decodeURIComponent((s=t.codeStr)!=null?s:"")}),{showTip:a,copyCode:o}=Sn(e.value),{expand:r,toggleExpand:i,parsedCode:l}=In(e.value,t.jsLibsStr,t.cssLibsStr);return{expand:r,toggleExpand:i,decodedHtmlStr:n,parsedCode:l,showTip:a,copyCode:o,decodedCodeStr:e}}},An={class:"demo-slot"},Cn={class:"demo-title-desc"},On={class:"demo-title"},$n={class:"demo-desc"},Mn={class:"demo-actions"},Rn={class:"demo-platforms"},En={class:"demo-buttons"},Dn={class:"demo-actions-copy"},Bn={class:"demo-actions-tip"},Un=["innerHTML"];function Nn(t,n,e,a,o,r){const i=R("OnlineEdit"),l=R("copySvg"),s=R("codeSvg"),u=R("ClientOnly");return p(),j(u,null,{default:C(()=>[c("article",et(t.$attrs,{class:"demo"}),[c("div",An,[z(t.$slots,"default")]),F(c("div",Cn,[c("span",On,S(e.title),1),c("span",$n,S(e.desc),1)],512),[[P,e.title||e.desc]]),c("div",Mn,[c("div",Rn,[b(i,{content:a.decodedCodeStr,importMap:e.importMap},null,8,["content","importMap"])]),c("div",En,[c("div",Dn,[F(c("span",Bn,"\u590D\u5236\u6210\u529F!",512),[[P,a.showTip]]),F(b(l,{onClick:a.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[P,!a.showTip]])]),b(s,{class:"demo-actions-expand",onClick:n[0]||(n[0]=x=>a.toggleExpand()),title:"\u5C55\u5F00"})])]),F(c("div",{innerHTML:a.decodedHtmlStr,class:N(`language-${e.language} extra-class`)},null,10,Un),[[P,a.expand]])],16)]),_:3})}var Zn=h(Ln,[["render",Nn]]);const Yn=y({setup(t,{slots:n}){const e=Y(!1);return J(()=>{e.value=!0}),()=>e.value&&n.default?n.default():null}});function Tn(t,n,e,a){Object.defineProperties(t.config.globalProperties,{$site:{get(){return n.value}},$siteByRoute:{get(){return e.value}},$themeConfig:{get(){return e.value.themeConfig}},$page:{get(){return a.value}},$frontmatter:{get(){return a.value.frontmatter}},$lang:{get(){return e.value.lang}},$localePath:{get(){const{locales:o}=n.value,{lang:r}=e.value,i=Object.keys(o).find(l=>o[l].lang===r);return o&&i||"/"}},$title:{get(){return a.value.title?a.value.title+" | "+e.value.title:e.value.title}},$description:{get(){return a.value.description||e.value.description}},$withBase:{value(o){return $t(n.value.base,o)}}})}function Fn(t){t.component("Content",sn),t.component("ClientOnly",Yn),t.component("Demo",Zn),t.component("Debug",()=>null)}var Pn='{"lang":"en-US","title":"swizzle","description":"A VitePress site","base":"/swizzle/","head":[["meta",{"name":"keywords","content":"vue swizzle design components"}],["meta",{"name":"description","content":"\u57FA\u4E8Evue3.0\u5F00\u53D1\u7684swizzle\u7EC4\u4EF6\u5E93"}]],"themeConfig":{"lang":"zh-CN","locales":{"/":{"lang":"zh-CN","title":"swizzle","description":"_description","label":"\u4E2D\u6587","selectText":"\u8BED\u8A00","nav":[{"text":"FormRenderVue","link":"/form-render-vue/start/","activeMatch":"^/form-render-vue/"},{"text":"ParseChart","link":"/parse-chart/start/","activeMatch":"^/parse-chart/"},{"text":"GitHub","link":"https://github.com/PathFun/swizzle.git"}],"sidebar":{"/form-render-vue/":[{"text":"\u5F00\u59CB\u4F7F\u7528","link":"/form-render-vue/start/"},{"text":"\u534F\u8BAE(schema)","children":[{"text":"schema \u89C4\u8303","link":"/form-render-vue/agree/schema/"},{"text":"rules(\u6821\u9A8C)","link":"/form-render-vue/agree/rules/"},{"text":"props","link":"/form-render-vue/agree/props/"},{"text":"\u5185\u7F6E\u7EC4\u4EF6","link":"/form-render-vue/agree/inner-widget/"}]},{"text":"\u9AD8\u7EA7\u7528\u6CD5","children":[{"text":"\u8868\u5355\u8054\u52A8","link":"/form-render-vue/advanced/linkage/"},{"text":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","link":"/form-render-vue/advanced/widget/"},{"text":"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09","link":"/form-render-vue/advanced/methods/"},{"text":"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","link":"/form-render-vue/advanced/watch/"},{"text":"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","link":"/form-render-vue/advanced/display/"}]},{"text":"\u5E38\u89C1\u95EE\u9898","link":"/form-render-vue/faq/"}],"/parse-chart/":[{"text":"\u5F00\u59CB\u4F7F\u7528","link":"/parse-chart/start/"}]},"lastUpdated":"\u4E0A\u6B21\u66F4\u65B0"},"/en/":{"lang":"en-US","title":"swizzle","description":"_description","label":"English","selectText":"Languages","nav":[{"text":"FormRenderVue","link":"/en/form-render-vue/start/","activeMatch":"^/en/form-render-vue/"},{"text":"ParseChart","link":"/en/parse-chart/start/","activeMatch":"^/en/parse-chart/"},{"text":"GitHub","link":"https://github.com/PathFun/swizzle.git"}],"sidebar":{"/en/form-render-vue/":[{"text":"get started","link":"/en/form-render-vue/start/"},{"text":"agree(schema)","children":[{"text":"schema standard","link":"/en/form-render-vue/agree/schema/"}]}],"/en/parse-chart/":[{"text":"get started","link":"/en/parse-chart/start/"}]},"lastUpdated":true}},"algolia":{"appId":"5QY7ROJNH7","apiKey":"617406dd57df997e4d24fd3814a08603","indexName":"swizzle"},"prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const rt=Y(qn(Pn));function X(){return rt}function qn(t){return Lt(JSON.parse(t))}const Hn=typeof window!="undefined";function Wn(t,n){n.sort((e,a)=>{const o=a.split("/").length-e.split("/").length;return o!==0?o:a.length-e.length});for(const e of n)if(t.startsWith(e))return e}function vt(t,n){const e=Wn(n,Object.keys(t));return e?t[e]:void 0}function Jn(t,n){n=Vn(t,n);const e=vt(t.locales||{},n)||{},a=vt(t.themeConfig&&t.themeConfig.locales||{},n)||{};return M(A(A({},t),e),{themeConfig:M(A(A({},t.themeConfig),a),{locales:{}}),locales:{}})}function Vn(t,n){if(!Hn)return n;const e=t.base,a=e.endsWith("/")?e.slice(0,-1):e;return n.slice(a.length)}function $(t){const n=t||L();return f(()=>Jn(rt.value,n.path))}function T(t){const n=t||L();return f(()=>n.data)}function Xn(t,n){const e=Array.from(document.querySelectorAll("meta"));let a=!0;const o=r=>{if(a){a=!1;return}e.forEach(i=>document.head.removeChild(i)),e.length=0,r&&r.length&&r.forEach(i=>{const l=Gn(i);document.head.appendChild(l),e.push(l)})};Qt(()=>{const r=t.data,i=n.value,l=r&&r.title,s=r&&r.description,u=r&&r.frontmatter.head;document.title=(l?l+" | ":"")+i.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:s||i.description}],...i.head,...u&&Qn(u)||[]])})}function Gn([t,n,e]){const a=document.createElement(t);for(const o in n)a.setAttribute(o,n[o]);return e&&(a.innerHTML=e),a}function Kn(t){return t[0]==="meta"&&t[1]&&t[1].name==="description"}function Qn(t){return t.filter(n=>!Kn(n))}const te=/#.*$/,ne=/(index)?\.(md|html)$/,H=/\/$/,ee=/^[a-z]+:/i;function ae(t){return t==null}function it(t){return Array.isArray(t)}function lt(t){return ee.test(t)}function oe(t,n){if(n===void 0)return!1;const e=yt(`/${t.data.relativePath}`),a=yt(n);return e===a}function yt(t){return decodeURI(t).replace(te,"").replace(ne,"")}function re(t,n){const e=t.endsWith("/"),a=n.startsWith("/");return e&&a?t.slice(0,-1)+n:!e&&!a?`${t}/${n}`:t+n}function tt(t){return/^\//.test(t)?t:`/${t}`}function Et(t){return t.replace(/(index)?(\.(md|html))?$/,"")||"/"}function ie(t){return t===!1||t==="auto"||it(t)}function le(t){return t.children!==void 0}function se(t){return it(t)?t.length===0:!t}function st(t,n){if(ie(t))return t;n=tt(n);for(const e in t)if(n.startsWith(tt(e)))return t[e];return"auto"}function Dt(t){return t.reduce((n,e)=>(e.link&&n.push({text:e.text,link:Et(e.link)}),le(e)&&(n=[...n,...Dt(e.children)]),n),[])}const ce={},pe=["href","aria-label"],de=["src"];function me(t,n){return p(),m("a",{class:"nav-bar-title",href:t.$withBase(t.$localePath),"aria-label":`${t.$siteByRoute.title}, back to home`},[t.$themeConfig.logo?(p(),m("img",{key:0,class:"logo",src:t.$withBase(t.$themeConfig.logo),alt:"Logo"},null,8,de)):v("",!0),at(" "+S(t.$site.title),1)],8,pe)}var ue=h(ce,[["render",me],["__scopeId","data-v-74be2d57"]]);function fe(){const t=L(),n=X();return f(()=>{const a=n.value.themeConfig.locales;if(!a)return null;const o=Object.keys(a);if(o.length<=1)return null;const r=O?n.value.base:"/",i=r.endsWith("/")?r.slice(0,-1):r,l=t.path.slice(i.length),s=o.find(k=>k==="/"?!1:l.startsWith(k)),u=s?l.substring(s.length-1):l,x=o.map(k=>{const I=k.endsWith("/")?k.slice(0,-1):k;return{text:a[k].label,link:`${I}${u}`}}),w=s||"/";return{text:a[w].selectText?a[w].selectText:"Languages",items:x}})}const be=["GitHub","GitLab","Bitbucket"].map(t=>[t,new RegExp(t,"i")]);function ge(){const t=$();return f(()=>{const n=t.value.themeConfig,e=n.docsRepo||n.repo;if(!e)return null;const a=he(e);return{text:xe(a,n.repoLabel),link:a}})}function he(t){return/^https?:/.test(t)?t:`https://github.com/${t}`}function xe(t,n){if(n)return n;const e=t.match(/^https?:\/\/[^/]+/);if(!e)return"Source";const a=be.find(([o,r])=>r.test(e[0]));return a&&a[0]?a[0]:"Source"}function we(){const t=X();function n(e){return $t(t.value.base,e)}return{withBase:n}}function Bt(t){const n=L(),{withBase:e}=we(),a=lt(t.value.link);return{props:f(()=>{const r=zt(`/${n.data.relativePath}`);let i=!1;if(t.value.activeMatch)i=new RegExp(t.value.activeMatch).test(r);else{const l=zt(e(t.value.link));i=l==="/"?l===r:r.startsWith(l)}return{class:{active:i,isExternal:a},href:a?t.value.link:e(t.value.link),target:t.value.target||a?"_blank":null,rel:t.value.rel||a?"noopener noreferrer":null,"aria-label":t.value.ariaLabel}}),isExternal:a}}function zt(t){return t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const ke={},ve={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},ye=c("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),ze=c("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),_e=[ye,ze];function je(t,n){return p(),m("svg",ve,_e)}var ct=h(ke,[["render",je]]);const Se={class:"nav-link"},Ie=y({__name:"NavLink",props:{item:null},setup(t){const e=W(t),{props:a,isExternal:o}=Bt(e.item);return(r,i)=>(p(),m("div",Se,[c("a",et({class:"item"},d(a)),[at(S(t.item.text)+" ",1),d(o)?(p(),j(ct,{key:0})):v("",!0)],16)]))}});var _t=h(Ie,[["__scopeId","data-v-f6252dde"]]);const Le=t=>(At("data-v-230bcec6"),t=t(),Ct(),t),Ae={class:"nav-dropdown-link-item"},Ce=Le(()=>c("span",{class:"arrow"},null,-1)),Oe={class:"text"},$e={class:"icon"},Me=y({__name:"NavDropdownLinkItem",props:{item:null},setup(t){const e=W(t),{props:a,isExternal:o}=Bt(e.item);return(r,i)=>(p(),m("div",Ae,[c("a",et({class:"item"},d(a)),[Ce,c("span",Oe,S(t.item.text),1),c("span",$e,[d(o)?(p(),j(ct,{key:0})):v("",!0)])],16)]))}});var Re=h(Me,[["__scopeId","data-v-230bcec6"]]);const Ee=["aria-label"],De={class:"button-text"},Be={class:"dialog"},Ue=y({__name:"NavDropdownLink",props:{item:null},setup(t){const n=L(),e=Y(!1);ot(()=>n.path,()=>{e.value=!1});function a(){e.value=!e.value}return(o,r)=>(p(),m("div",{class:N(["nav-dropdown-link",{open:e.value}])},[c("button",{class:"button","aria-label":t.item.ariaLabel,onClick:a},[c("span",De,S(t.item.text),1),c("span",{class:N(["button-arrow",e.value?"down":"right"])},null,2)],8,Ee),c("ul",Be,[(p(!0),m(Z,null,V(t.item.items,i=>(p(),m("li",{key:i.text,class:"dialog-item"},[b(Re,{item:i},null,8,["item"])]))),128))])],2))}});var jt=h(Ue,[["__scopeId","data-v-09ac5408"]]);const Ne={key:0,class:"nav-links"},Ze={key:1,class:"item"},Ye={key:2,class:"item"},Te=y({__name:"NavLinks",setup(t){const n=$(),e=fe(),a=ge(),o=f(()=>r.value||a.value),r=f(()=>n.value.themeConfig.nav);return(i,l)=>d(o)?(p(),m("nav",Ne,[d(r)?(p(!0),m(Z,{key:0},V(d(r),s=>(p(),m("div",{key:s.text,class:"item"},[s.items?(p(),j(jt,{key:0,item:s},null,8,["item"])):(p(),j(_t,{key:1,item:s},null,8,["item"]))]))),128)):v("",!0),d(e)?(p(),m("div",Ze,[b(jt,{item:d(e)},null,8,["item"])])):v("",!0),d(a)?(p(),m("div",Ye,[b(_t,{item:d(a)},null,8,["item"])])):v("",!0)])):v("",!0)}});var Ut=h(Te,[["__scopeId","data-v-46905c02"]]);const Fe={emits:["toggle"]},Pe=c("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[c("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),qe=[Pe];function He(t,n,e,a,o,r){return p(),m("div",{class:"sidebar-button",onClick:n[0]||(n[0]=i=>t.$emit("toggle"))},qe)}var We=h(Fe,[["render",He]]);const Je=t=>(At("data-v-33b2da5a"),t=t(),Ct(),t),Ve={class:"nav-bar"},Xe=Je(()=>c("div",{class:"flex-grow"},null,-1)),Ge={class:"nav"},Ke=y({__name:"NavBar",emits:["toggle"],setup(t){return(n,e)=>(p(),m("header",Ve,[b(We,{onToggle:e[0]||(e[0]=a=>n.$emit("toggle"))}),b(ue),Xe,c("div",Ge,[b(Ut)]),z(n.$slots,"search",{},void 0,!0)]))}});var Qe=h(Ke,[["__scopeId","data-v-33b2da5a"]]);function ta(){let t=null,n=null;const e=ra(a,300);function a(){const i=na(),l=ea(i);for(let s=0;s<l.length;s++){const u=l[s],x=l[s+1],[w,_]=oa(s,u,x);if(w){history.replaceState(null,document.title,_||" "),o(_);return}}}function o(i){if(r(n),r(t),n=document.querySelector(`.sidebar a[href="${i}"]`),!n)return;n.classList.add("active");const l=n.closest(".sidebar-links > ul > li");l&&l!==n.parentElement?(t=l.querySelector("a"),t&&t.classList.add("active")):t=null}function r(i){i&&i.classList.remove("active")}J(()=>{a(),window.addEventListener("scroll",e)}),tn(()=>{o(decodeURIComponent(location.hash))}),Ot(()=>{window.removeEventListener("scroll",e)})}function na(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function ea(t){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(n=>t.some(e=>e.hash===n.hash))}function aa(){return document.querySelector(".nav-bar").offsetHeight}function St(t){const n=aa();return t.parentElement.offsetTop-n-15}function oa(t,n,e){const a=window.scrollY;return t===0&&a===0?[!0,null]:a<St(n)?[!1,null]:!e||a<St(e)?[!0,decodeURIComponent(n.hash)]:[!1,null]}function ra(t,n){let e,a=!1;return()=>{e&&clearTimeout(e),a?e=setTimeout(t,n):(t(),a=!0,setTimeout(()=>{a=!1},n))}}function ia(){const t=L(),n=$();return ta(),f(()=>{const e=t.data.headers,a=t.data.frontmatter.sidebar,o=t.data.frontmatter.sidebarDepth;if(a===!1)return[];if(a==="auto")return It(e,o);const r=st(n.value.themeConfig.sidebar,t.data.relativePath);return r===!1?[]:r==="auto"?It(e,o):r})}function It(t,n){const e=[];if(t===void 0)return[];let a;return t.forEach(({level:o,title:r,slug:i})=>{if(o-1>n)return;const l={text:r,link:`#${i}`};o===2?(a=l,e.push(l)):a&&(a.children||(a.children=[])).push(l)}),e}const Nt=t=>{const n=L(),e=X();n.data.headers;const a=t.item.text,o=la(e.value.base,t.item.link),r=t.item.children,i=oe(n,t.item.link),l=sa(i,r);return U("li",{class:"sidebar-link"},[U(o?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:o},a),l])};function la(t,n){return n===void 0||n.startsWith("#")?n:re(t,n)}function sa(t,n,e){return n&&n.length>0?U("ul",{class:"sidebar-links"},n.map(a=>U(Nt,{item:a}))):null}const ca={key:0,class:"sidebar-links"},pa=y({__name:"SideBarLinks",setup(t){const n=ia();return(e,a)=>d(n).length>0?(p(),m("ul",ca,[(p(!0),m(Z,null,V(d(n),o=>(p(),j(d(Nt),{key:o.text,item:o},null,8,["item"]))),128))])):v("",!0)}});const da={setup(){const t=L();return{slugs:f(()=>{var o;const e=((o=t.data.headers)!=null?o:[]).filter(r=>r.level>1);let a=10;for(const{level:r}of e)a>r&&(a=r);return e.filter(r=>r.level<a+2).map(r=>M(A({},r),{link:`#${r.slug}`,level:r.level===a?1:2}))})}}},ma={class:"right-slug"},ua=["href"];function fa(t,n,e,a,o,r){return p(),m("ul",ma,[(p(!0),m(Z,null,V(a.slugs,({level:i,link:l,title:s})=>(p(),m("li",{class:N(`slug-item level-${i}`),key:l},[c("a",{href:l,class:"link"},S(s),9,ua)],2))),128))])}var ba=h(da,[["render",fa],["__scopeId","data-v-1336cdc6"]]);const ga=y({__name:"SideBar",props:{open:{type:Boolean,required:!0}},setup(t){return(n,e)=>(p(),m(Z,null,[c("aside",{class:N(["sidebar hover-scrollbar",{open:t.open}])},[b(Ut,{class:"nav"}),z(n.$slots,"sidebar-top",{},void 0,!0),b(pa),z(n.$slots,"sidebar-bottom",{},void 0,!0)],2),b(ba)],64))}});var ha=h(ga,[["__scopeId","data-v-509f3b00"]]);const xa=/bitbucket.org/;function wa(){const t=$(),n=T(),e=f(()=>{const o=ae(n.value.frontmatter.editLink)?t.value.themeConfig.editLinks:n.value.frontmatter.editLink,{repo:r,docsDir:i="",docsBranch:l="master",docsRepo:s=r}=t.value.themeConfig,{relativePath:u}=n.value;return!o||!u||!r?null:ka(r,s,i,l,u)}),a=f(()=>t.value.themeConfig.editLinkText||"Edit this page");return{url:e,text:a}}function ka(t,n,e,a,o){return xa.test(t)?ya(t,n,e,a,o):va(t,n,e,a,o)}function va(t,n,e,a,o){return(lt(n)?n:`https://github.com/${n}`).replace(H,"")+`/edit/${a}/`+(e?e.replace(H,"")+"/":"")+o}function ya(t,n,e,a,o){return(lt(n)?n:t).replace(H,"")+`/src/${a}/`+(e?e.replace(H,"")+"/":"")+o+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}const za={class:"edit-link"},_a=["href"],ja=y({__name:"EditLink",setup(t){const{url:n,text:e}=wa();return(a,o)=>(p(),m("div",za,[d(n)?(p(),m("a",{key:0,class:"link",href:d(n),target:"_blank",rel:"noopener noreferrer"},[at(S(d(e))+" ",1),b(ct,{class:"icon"})],8,_a)):v("",!0)]))}});var Sa=h(ja,[["__scopeId","data-v-4e0cf990"]]);const Ia={key:0,class:"last-updated"},La={class:"prefix"},Aa={class:"datetime"},Ca=y({__name:"LastUpdated",setup(t){const n=$(),e=T(),a=f(()=>{const i=n.value.themeConfig.lastUpdated;return i!==void 0&&i!==!1}),o=f(()=>{const i=n.value.themeConfig.lastUpdated;return i===!0?"Last Updated":i}),r=Y("");return J(()=>{r.value=new Date(e.value.lastUpdated).toLocaleString("en-US")}),(i,l)=>d(a)?(p(),m("p",Ia,[c("span",La,S(d(o))+":",1),c("span",Aa,S(r.value),1)])):v("",!0)}});var Oa=h(Ca,[["__scopeId","data-v-62bdcaad"]]);const $a={class:"page-footer"},Ma={class:"edit"},Ra={class:"updated"},Ea=y({__name:"PageFooter",setup(t){return(n,e)=>(p(),m("footer",$a,[c("div",Ma,[b(Sa)]),c("div",Ra,[b(Oa)])]))}});var Da=h(Ea,[["__scopeId","data-v-79d80dc0"]]);function Ba(){const t=$(),n=T(),e=f(()=>Et(tt(n.value.relativePath))),a=f(()=>{const s=st(t.value.themeConfig.sidebar,e.value);return it(s)?Dt(s):[]}),o=f(()=>a.value.findIndex(s=>s.link===e.value)),r=f(()=>{if(t.value.themeConfig.nextLinks!==!1&&o.value>-1&&o.value<a.value.length-1)return a.value[o.value+1]}),i=f(()=>{if(t.value.themeConfig.prevLinks!==!1&&o.value>0)return a.value[o.value-1]}),l=f(()=>!!r.value||!!i.value);return{next:r,prev:i,hasLinks:l}}const Ua={},Na={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Za=c("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Ya=[Za];function Ta(t,n){return p(),m("svg",Na,Ya)}var Fa=h(Ua,[["render",Ta]]);const Pa={},qa={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ha=c("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Wa=[Ha];function Ja(t,n){return p(),m("svg",qa,Wa)}var Va=h(Pa,[["render",Ja]]);const Xa={key:0,class:"next-and-prev-link"},Ga={class:"container"},Ka={class:"prev"},Qa=["href"],to={class:"text"},no={class:"next"},eo=["href"],ao={class:"text"},oo=y({__name:"NextAndPrevLinks",setup(t){const{hasLinks:n,prev:e,next:a}=Ba();return(o,r)=>d(n)?(p(),m("div",Xa,[c("div",Ga,[c("div",Ka,[d(e)?(p(),m("a",{key:0,class:"link",href:o.$withBase(d(e).link)},[b(Fa,{class:"icon icon-prev"}),c("span",to,S(d(e).text),1)],8,Qa)):v("",!0)]),c("div",no,[d(a)?(p(),m("a",{key:0,class:"link",href:o.$withBase(d(a).link)},[c("span",ao,S(d(a).text),1),b(Va,{class:"icon icon-next"})],8,eo)):v("",!0)])])])):v("",!0)}});var ro=h(oo,[["__scopeId","data-v-6ea49ff3"]]);const io={class:"page"},lo={class:"container hover-scrollbar"},so={class:"content"},co=y({__name:"Page",setup(t){return(n,e)=>{const a=R("Content");return p(),m("main",io,[c("div",lo,[z(n.$slots,"top",{},void 0,!0),c("div",so,[b(a)]),b(Da),b(ro),z(n.$slots,"bottom",{},void 0,!0)])])}}});var po=h(co,[["__scopeId","data-v-a901e69a"]]);const mo={key:0,id:"ads-container"},uo=y({__name:"Layout",setup(t){const n=ut(()=>Q(()=>import("./Home.e01b723a.js"),["assets/Home.e01b723a.js","assets/plugin-vue_export-helper.3a7fc118.js"])),e=()=>null,a=e,o=e,r=ut(()=>Q(()=>import("./AlgoliaSearchBox.b14000ac.js"),["assets/AlgoliaSearchBox.b14000ac.js","assets/plugin-vue_export-helper.3a7fc118.js"])),i=L(),l=X(),s=$(),u=f(()=>l.value.themeConfig),x=T(),w=f(()=>!!i.data.frontmatter.customLayout),_=f(()=>!!i.data.frontmatter.home),k=f(()=>{const{themeConfig:g}=s.value,{frontmatter:B}=i.data;return B.navbar===!1||g.navbar===!1?!1:l.value.title||g.logo||g.repo||g.nav}),I=Y(!1),E=f(()=>{const{frontmatter:g}=i.data;if(g.home||g.sidebar===!1)return!1;const{themeConfig:B}=s.value;return!se(st(B.sidebar,i.data.relativePath))}),D=g=>{I.value=typeof g=="boolean"?g:!I.value},Tt=D.bind(null,!1);ot(i,Tt);const Ft=f(()=>[{"no-navbar":!k.value,"sidebar-open":I.value,"no-sidebar":!E.value}]);return(g,B)=>{const Pt=R("Content"),qt=R("Debug");return p(),m(Z,null,[c("div",{class:N(["theme",d(Ft)])},[d(k)?(p(),j(Qe,{key:0,onToggle:D},{search:C(()=>[z(g.$slots,"navbar-search",{},()=>[d(u).algolia?(p(),j(d(r),{key:0,options:d(u).algolia},null,8,["options"])):v("",!0)])]),_:3})):v("",!0),b(ha,{open:I.value},{"sidebar-top":C(()=>[z(g.$slots,"sidebar-top")]),"sidebar-bottom":C(()=>[z(g.$slots,"sidebar-bottom")]),_:3},8,["open"]),c("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=Lo=>D(!1))}),d(w)?(p(),j(Pt,{key:1})):d(_)?(p(),j(d(n),{key:2},{hero:C(()=>[z(g.$slots,"home-hero")]),features:C(()=>[z(g.$slots,"home-features")]),footer:C(()=>[z(g.$slots,"home-footer")]),_:3})):(p(),j(po,{key:3},{top:C(()=>[z(g.$slots,"page-top-ads",{},()=>[d(u).carbonAds&&d(u).carbonAds.carbon?(p(),m("div",mo,[(p(),j(d(a),{key:"carbon"+d(x).relativePath,code:d(u).carbonAds.carbon,placement:d(u).carbonAds.placement},null,8,["code","placement"]))])):v("",!0)]),z(g.$slots,"page-top")]),bottom:C(()=>[z(g.$slots,"page-bottom"),z(g.$slots,"page-bottom-ads",{},()=>[d(u).carbonAds&&d(u).carbonAds.custom?(p(),j(d(o),{key:"custom"+d(x).relativePath,code:d(u).carbonAds.custom,placement:d(u).carbonAds.placement},null,8,["code","placement"])):v("",!0)])]),_:3}))],2),b(qt)],64)}}}),fo={class:"theme"},bo=c("h1",null,"404",-1),go=["href"],ho=y({__name:"NotFound",setup(t){const n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function e(){return n[Math.floor(Math.random()*n.length)]}return(a,o)=>(p(),m("div",fo,[bo,c("blockquote",null,S(e()),1),c("a",{href:a.$site.base,"aria-label":"go to home"},"Take me home.",8,go)]))}}),xo={Layout:uo,NotFound:ho};var Zt=M(A({},xo),{enhanceApp({app:t}){}});const K=new Set,Yt=()=>document.createElement("link"),wo=t=>{const n=Yt();n.rel="prefetch",n.href=t,document.head.appendChild(n)},ko=t=>{const n=new XMLHttpRequest;n.open("GET",t,n.withCredentials=!0),n.send()};let q;const vo=O&&(q=Yt())&&q.relList&&q.relList.supports&&q.relList.supports("prefetch")?wo:ko;function yo(){if(!O||!window.IntersectionObserver)return;let t;if((t=navigator.connection)&&(t.saveData||/2g/.test(t.effectiveType)))return;const n=window.requestIdleCallback||setTimeout;let e=null;const a=()=>{e&&e.disconnect(),e=new IntersectionObserver(r=>{r.forEach(i=>{if(i.isIntersecting){const l=i.target;e.unobserve(l);const{pathname:s}=l;if(!K.has(s)){K.add(s);const u=Mt(s);vo(u)}}})}),n(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:i,hostname:l,pathname:s}=r,u=s.match(/\.\w+$/);u&&u[0]!==".html"||i!=="_blank"&&l===location.hostname&&(s!==location.pathname?e.observe(r):K.add(s))})})};J(a);const o=L();ot(()=>o.path,a),Ot(()=>{e&&e.disconnect()})}const zo=Zt.NotFound||(()=>"404 Not Found"),_o={name:"VitePressApp",setup(){return yo(),()=>U(Zt.Layout)}};function jo(){const t=Io(),n=So();n.provide(Rt,t);const e=$(t.route),a=T(t.route);return O&&Xn(t.route,e),Tn(n,rt,e,a),Fn(n),{app:n,router:t}}function So(){return nn(_o)}function Io(){let t=O,n;return rn(e=>{let a=Mt(e);return t&&(n=a),(t||n===a)&&(a=a.replace(/\.js$/,".lean.js")),O?(t=!1,Q(()=>import(a),[])):require(a)},zo)}if(O){const{app:t,router:n}=jo();n.go().then(()=>{t.mount("#app")})}export{_t as N,$ as a,L as b,ln as c,jo as createApp,T as u};
