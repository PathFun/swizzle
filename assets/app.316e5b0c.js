import{r as Z,m as ce,a as ye,n as Fe,i as Ve,d as b,h as I,_ as m,o as u,c as _,b as l,e as p,u as d,t as q,f as R,g as L,w as P,j as x,k as O,v as F,l as S,p as f,q as M,s as ee,x as U,y as W,z as je,A as w,B as te,C as Le,D as Se,E as ne,F as D,G,H as qe,I as Ce,J as le,K as We}from"./plugin-vue_export-helper.5bd3d2d8.js";import"./style.09f88939.js";const Ge="modulepreload",ue={},Je="/swizzle/",X=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Je}${s}`,s in ue)return;ue[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ge,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},A=typeof window!="undefined";function Ee(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function Pe(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),A){const n="/swizzle/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Ae=Symbol(),de="http://a.com",Ke=()=>({path:"/",component:null,data:null});function Ye(e,t){const n=Z(Ke()),s=typeof window!="undefined";function o(i=s?location.href:"/"){const c=new URL(i,de);return!c.pathname.endsWith("/")&&!c.pathname.endsWith(".html")&&(c.pathname+=".html",i=c.pathname+c.search+c.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",i)),a(i)}let r=null;async function a(i,c=0){const h=new URL(i,de),g=r=h.pathname;try{let $=e(g);if("then"in $&&typeof $.then=="function"&&($=await $),r===g){r=null;const{default:y,__pageData:k}=$;if(!y)throw new Error(`Invalid route component: ${y}`);n.path=g,n.component=ce(y),n.data=ye(JSON.parse(k)),s&&Fe(()=>{if(h.hash&&!c){const C=document.querySelector(decodeURIComponent(h.hash));if(C){_e(C,h.hash);return}}window.scrollTo(0,c)})}}catch($){$.message.match(/fetch/)||console.error($),r===g&&(r=null,n.path=g,n.component=t?ce(t):null)}}return s&&(window.addEventListener("click",i=>{const c=i.target.closest("a");if(c){const{href:h,protocol:g,hostname:$,pathname:y,hash:k,target:C}=c,B=window.location,z=y.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&C!=="_blank"&&g===B.protocol&&$===B.hostname&&!(z&&z[0]!==".html")&&(i.preventDefault(),y===B.pathname?k&&k!==B.hash&&(history.pushState(null,"",k),_e(c,k,c.classList.contains("header-anchor"))):o(h))}},{capture:!0}),window.addEventListener("popstate",i=>{a(location.href,i.state&&i.state.scrollPosition||0)}),window.addEventListener("hashchange",i=>{i.preventDefault()})),{route:n,go:o}}function Xe(){const e=Ve(Ae);if(!e)throw new Error("useRouter() is called without provider.");return e}function E(){return Xe().route}function _e(e,t,n=!1){const s=document.querySelector(".nav-bar").offsetHeight,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const r=o.offsetTop-s-15;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}const Qe=b({name:"VitePressContent",setup(){const e=E();return()=>e.component?I(e.component):null}});const Ze={setup(){return{}}},et={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},tt=l("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),nt=l("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),st=[tt,nt];function ot(e,t,n,s,o,r){return u(),_("svg",et,st)}var rt=m(Ze,[["render",ot]]);const at={setup(){return{}}},it={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},ct=l("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),lt=[ct];function ut(e,t,n,s,o,r){return u(),_("svg",it,lt)}var dt=m(at,[["render",ut]]);const _t=["href"],ht=l("div",{style:{width:"16px","margin-left":"6px"}},[l("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[l("g",null,[l("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),pt=[ht],ft=b({__name:"OnlineEdit",props:{content:null,importMap:null},setup(e){const t=e,n="https://sfc.vuejs.org/",s=p(()=>{const o={"App.vue":t.content};if(t.importMap)try{o["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(t.importMap))})}catch{}return`${n}#${btoa(unescape(encodeURIComponent(JSON.stringify(o))))}`});return(o,r)=>(u(),_("a",{href:d(s),style:{display:"flex","align-items":"center"},target:"_blank"},pt,8,_t))}});function vt(e){const t=Z({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return{...q(t),copyCode:n}}const he=/<script.*>([\s\S]+)<\/script>/,pe=/<style>([\s\S]+)<\/style>/,fe=/<template>([\s\S]+)<\/template>/,K=e=>t=>{const n=t.match(e);return n&&n[1].trim()},ve=e=>JSON.parse(decodeURIComponent(e));function mt(e,t,n){const s=Z({expand:!1}),o=()=>s.expand=!s.expand,r=p(()=>{const a=K(he)(e)||"",i=K(pe)(e)||"",c=K(fe)(e)||e.replace(he,"").replace(pe,"").replace(fe,"").trim(),h=ve(t),g=ve(n);return{js:a,css:i,html:c,jsLibs:h,cssLibs:g}});return{...q(s),toggleExpand:o,parsedCode:r}}const gt={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:rt,codeSvg:dt,OnlineEdit:ft},setup(e){const t=p(()=>{var c;return decodeURIComponent((c=e.htmlStr)!=null?c:"")}),n=p(()=>{var c;return decodeURIComponent((c=e.codeStr)!=null?c:"")}),{showTip:s,copyCode:o}=vt(n.value),{expand:r,toggleExpand:a,parsedCode:i}=mt(n.value,e.jsLibsStr,e.cssLibsStr);return{expand:r,toggleExpand:a,decodedHtmlStr:t,parsedCode:i,showTip:s,copyCode:o,decodedCodeStr:n}}},$t={class:"demo-slot"},kt={class:"demo-title-desc"},wt={class:"demo-title"},bt={class:"demo-desc"},xt={class:"demo-actions"},yt={class:"demo-platforms"},Lt={class:"demo-buttons"},St={class:"demo-actions-copy"},Ct={class:"demo-actions-tip"},Et=["innerHTML"];function Pt(e,t,n,s,o,r){const a=R("OnlineEdit"),i=R("copySvg"),c=R("codeSvg"),h=R("ClientOnly");return u(),L(h,null,{default:P(()=>[l("article",ee(e.$attrs,{class:"demo"}),[l("div",$t,[x(e.$slots,"default")]),O(l("div",kt,[l("span",wt,S(n.title),1),l("span",bt,S(n.desc),1)],512),[[F,n.title||n.desc]]),l("div",xt,[l("div",yt,[f(a,{content:s.decodedCodeStr,importMap:n.importMap},null,8,["content","importMap"])]),l("div",Lt,[l("div",St,[O(l("span",Ct,"\u590D\u5236\u6210\u529F!",512),[[F,s.showTip]]),O(f(i,{onClick:s.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[F,!s.showTip]])]),f(c,{class:"demo-actions-expand",onClick:t[0]||(t[0]=g=>s.toggleExpand()),title:"\u5C55\u5F00"})])]),O(l("div",{innerHTML:s.decodedHtmlStr,class:M(`language-${n.language} extra-class`)},null,10,Et),[[F,s.expand]])],16)]),_:3})}var At=m(gt,[["render",Pt]]);const Tt=b({setup(e,{slots:t}){const n=U(!1);return W(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}});function Rt(e,t,n,s){Object.defineProperties(e.config.globalProperties,{$site:{get(){return t.value}},$siteByRoute:{get(){return n.value}},$themeConfig:{get(){return n.value.themeConfig}},$page:{get(){return s.value}},$frontmatter:{get(){return s.value.frontmatter}},$lang:{get(){return n.value.lang}},$localePath:{get(){const{locales:o}=t.value,{lang:r}=n.value,a=Object.keys(o).find(i=>o[i].lang===r);return o&&a||"/"}},$title:{get(){return s.value.title?s.value.title+" | "+n.value.title:n.value.title}},$description:{get(){return s.value.description||n.value.description}},$withBase:{value(o){return Ee(t.value.base,o)}}})}function Bt(e){e.component("Content",Qe),e.component("ClientOnly",Tt),e.component("Demo",At),e.component("Debug",()=>null)}var zt='{"lang":"en-US","title":"swizzle","description":"A VitePress site","base":"/swizzle/","head":[["meta",{"name":"keywords","content":"vue swizzle design components"}],["meta",{"name":"description","content":"\u57FA\u4E8Evue3.0\u5F00\u53D1\u7684swizzle\u7EC4\u4EF6\u5E93"}]],"themeConfig":{"lang":"zh-CN","locales":{"/":{"lang":"zh-CN","title":"swizzle","description":"_description","label":"\u4E2D\u6587","selectText":"\u8BED\u8A00","nav":[{"text":"FormRenderVue","link":"/form-render-vue/start/","activeMatch":"^/form-render-vue/"},{"text":"\u8868\u5355\u8BBE\u8BA1\u5668","link":"/form-generrator/start/","activeMatch":"^/form-generrator/"},{"text":"GitHub","link":"https://github.com/PathFun/swizzle.git"}],"sidebar":{"/form-render-vue/":[{"text":"\u5F00\u59CB\u4F7F\u7528","link":"/form-render-vue/start/"},{"text":"\u534F\u8BAE(schema)","children":[{"text":"schema \u89C4\u8303","link":"/form-render-vue/agree/schema/"},{"text":"rules(\u6821\u9A8C)","link":"/form-render-vue/agree/rules/"},{"text":"props","link":"/form-render-vue/agree/props/"},{"text":"\u5185\u7F6E\u7EC4\u4EF6","link":"/form-render-vue/agree/inner-widget/"}]},{"text":"\u9AD8\u7EA7\u7528\u6CD5","children":[{"text":"\u8868\u5355\u8054\u52A8","link":"/form-render-vue/advanced/linkage/"},{"text":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","link":"/form-render-vue/advanced/widget/"},{"text":"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09","link":"/form-render-vue/advanced/methods/"},{"text":"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","link":"/form-render-vue/advanced/watch/"},{"text":"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","link":"/form-render-vue/advanced/display/"}]},{"text":"\u5E38\u89C1\u95EE\u9898","link":"/form-render-vue/faq/"}],"/parse-chart/":[{"text":"\u5F00\u59CB\u4F7F\u7528","link":"/parse-chart/start/"}]},"lastUpdated":"\u4E0A\u6B21\u66F4\u65B0"},"/en/":{"lang":"en-US","title":"swizzle","description":"_description","label":"English","selectText":"Languages","nav":[{"text":"FormRenderVue","link":"/en/form-render-vue/start/","activeMatch":"^/en/form-render-vue/"},{"text":"FormGenerrator","link":"/en/form-generrator/start/","activeMatch":"^/en/form-generrator/"},{"text":"GitHub","link":"https://github.com/PathFun/swizzle.git"}],"sidebar":{"/en/form-render-vue/":[{"text":"get started","link":"/en/form-render-vue/start/"},{"text":"agree(schema)","children":[{"text":"schema standard","link":"/en/form-render-vue/agree/schema/"}]}],"/en/parse-chart/":[{"text":"get started","link":"/en/parse-chart/start/"}]},"lastUpdated":true}},"algolia":{"appId":"5QY7ROJNH7","apiKey":"617406dd57df997e4d24fd3814a08603","indexName":"swizzle"},"prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const se=U(Nt(zt));function J(){return se}function Nt(e){return ye(JSON.parse(e))}const It=typeof window!="undefined";function Mt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function me(e,t){const n=Mt(t,Object.keys(e));return n?e[n]:void 0}function Dt(e,t){t=Ut(e,t);const n=me(e.locales||{},t)||{},s=me(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...s,locales:{}},locales:{}}}function Ut(e,t){if(!It)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}function T(e){const t=e||E();return p(()=>Dt(se.value,t.path))}function H(e){const t=e||E();return p(()=>t.data)}function Ht(e,t){const n=Array.from(document.querySelectorAll("meta"));let s=!0;const o=r=>{if(s){s=!1;return}n.forEach(a=>document.head.removeChild(a)),n.length=0,r&&r.length&&r.forEach(a=>{const i=Ot(a);document.head.appendChild(i),n.push(i)})};je(()=>{const r=e.data,a=t.value,i=r&&r.title,c=r&&r.description,h=r&&r.frontmatter.head;document.title=(i?i+" | ":"")+a.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:c||a.description}],...a.head,...h&&Vt(h)||[]])})}function Ot([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function Ft(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Vt(e){return e.filter(t=>!Ft(t))}const jt=/#.*$/,qt=/(index)?\.(md|html)$/,j=/\/$/,Wt=/^[a-z]+:/i;function Gt(e){return e==null}function oe(e){return Array.isArray(e)}function re(e){return Wt.test(e)}function Jt(e,t){if(t===void 0)return!1;const n=ge(`/${e.data.relativePath}`),s=ge(t);return n===s}function ge(e){return decodeURI(e).replace(jt,"").replace(qt,"")}function Kt(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function Q(e){return/^\//.test(e)?e:`/${e}`}function Te(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Yt(e){return e===!1||e==="auto"||oe(e)}function Xt(e){return e.children!==void 0}function Qt(e){return oe(e)?e.length===0:!e}function ae(e,t){if(Yt(e))return e;t=Q(t);for(const n in e)if(t.startsWith(Q(n)))return e[n];return"auto"}function Re(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Te(n.link)}),Xt(n)&&(t=[...t,...Re(n.children)]),t),[])}const Zt={},en=["href","aria-label"],tn=["src"];function nn(e,t){return u(),_("a",{class:"nav-bar-title",href:e.$withBase(e.$localePath),"aria-label":`${e.$siteByRoute.title}, back to home`},[e.$themeConfig.logo?(u(),_("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,tn)):w("",!0),te(" "+S(e.$site.title),1)],8,en)}var sn=m(Zt,[["render",nn],["__scopeId","data-v-74be2d57"]]);function on(){const e=E(),t=J();return p(()=>{const s=t.value.themeConfig.locales;if(!s)return null;const o=Object.keys(s);if(o.length<=1)return null;const r=A?t.value.base:"/",a=r.endsWith("/")?r.slice(0,-1):r,i=e.path.slice(a.length),c=o.find(k=>k==="/"?!1:i.startsWith(k)),h=c?i.substring(c.length-1):i,g=o.map(k=>{const C=k.endsWith("/")?k.slice(0,-1):k;return{text:s[k].label,link:`${C}${h}`}}),$=c||"/";return{text:s[$].selectText?s[$].selectText:"Languages",items:g}})}const rn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function an(){const e=T();return p(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=cn(n);return{text:ln(s,t.repoLabel),link:s}})}function cn(e){return/^https?:/.test(e)?e:`https://github.com/${e}`}function ln(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=rn.find(([o,r])=>r.test(n[0]));return s&&s[0]?s[0]:"Source"}function un(){const e=J();function t(n){return Ee(e.value.base,n)}return{withBase:t}}function Be(e){const t=E(),{withBase:n}=un(),s=re(e.value.link);return{props:p(()=>{const r=$e(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(r);else{const i=$e(n(e.value.link));a=i==="/"?i===r:r.startsWith(i)}return{class:{active:a,isExternal:s},href:s?e.value.link:n(e.value.link),target:e.value.target||s?"_blank":null,rel:e.value.rel||s?"noopener noreferrer":null,"aria-label":e.value.ariaLabel}}),isExternal:s}}function $e(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const dn={},_n={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},hn=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),pn=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),fn=[hn,pn];function vn(e,t){return u(),_("svg",_n,fn)}var ie=m(dn,[["render",vn]]);const mn={class:"nav-link"},gn=b({__name:"NavLink",props:{item:null},setup(e){const n=q(e),{props:s,isExternal:o}=Be(n.item);return(r,a)=>(u(),_("div",mn,[l("a",ee({class:"item"},d(s)),[te(S(e.item.text)+" ",1),d(o)?(u(),L(ie,{key:0})):w("",!0)],16)]))}});var ke=m(gn,[["__scopeId","data-v-f6252dde"]]);const $n=e=>(Le("data-v-230bcec6"),e=e(),Se(),e),kn={class:"nav-dropdown-link-item"},wn=$n(()=>l("span",{class:"arrow"},null,-1)),bn={class:"text"},xn={class:"icon"},yn=b({__name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=q(e),{props:s,isExternal:o}=Be(n.item);return(r,a)=>(u(),_("div",kn,[l("a",ee({class:"item"},d(s)),[wn,l("span",bn,S(e.item.text),1),l("span",xn,[d(o)?(u(),L(ie,{key:0})):w("",!0)])],16)]))}});var Ln=m(yn,[["__scopeId","data-v-230bcec6"]]);const Sn=["aria-label"],Cn={class:"button-text"},En={class:"dialog"},Pn=b({__name:"NavDropdownLink",props:{item:null},setup(e){const t=E(),n=U(!1);ne(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,r)=>(u(),_("div",{class:M(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[l("span",Cn,S(e.item.text),1),l("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Sn),l("ul",En,[(u(!0),_(D,null,G(e.item.items,a=>(u(),_("li",{key:a.text,class:"dialog-item"},[f(Ln,{item:a},null,8,["item"])]))),128))])],2))}});var we=m(Pn,[["__scopeId","data-v-09ac5408"]]);const An={key:0,class:"nav-links"},Tn={key:1,class:"item"},Rn={key:2,class:"item"},Bn=b({__name:"NavLinks",setup(e){const t=T(),n=on(),s=an(),o=p(()=>r.value||s.value),r=p(()=>t.value.themeConfig.nav);return(a,i)=>d(o)?(u(),_("nav",An,[d(r)?(u(!0),_(D,{key:0},G(d(r),c=>(u(),_("div",{key:c.text,class:"item"},[c.items?(u(),L(we,{key:0,item:c},null,8,["item"])):(u(),L(ke,{key:1,item:c},null,8,["item"]))]))),128)):w("",!0),d(n)?(u(),_("div",Tn,[f(we,{item:d(n)},null,8,["item"])])):w("",!0),d(s)?(u(),_("div",Rn,[f(ke,{item:d(s)},null,8,["item"])])):w("",!0)])):w("",!0)}});var ze=m(Bn,[["__scopeId","data-v-46905c02"]]);const zn={emits:["toggle"]},Nn=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),In=[Nn];function Mn(e,t,n,s,o,r){return u(),_("div",{class:"sidebar-button",onClick:t[0]||(t[0]=a=>e.$emit("toggle"))},In)}var Dn=m(zn,[["render",Mn]]);const Un=e=>(Le("data-v-33b2da5a"),e=e(),Se(),e),Hn={class:"nav-bar"},On=Un(()=>l("div",{class:"flex-grow"},null,-1)),Fn={class:"nav"},Vn=b({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(u(),_("header",Hn,[f(Dn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(sn),On,l("div",Fn,[f(ze)]),x(t.$slots,"search",{},void 0,!0)]))}});var jn=m(Vn,[["__scopeId","data-v-33b2da5a"]]);function qn(){let e=null,t=null;const n=Yn(s,300);function s(){const a=Wn(),i=Gn(a);for(let c=0;c<i.length;c++){const h=i[c],g=i[c+1],[$,y]=Kn(c,h,g);if($){history.replaceState(null,document.title,y||" "),o(y);return}}}function o(a){if(r(t),r(e),t=document.querySelector(`.sidebar a[href="${a}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function r(a){a&&a.classList.remove("active")}W(()=>{s(),window.addEventListener("scroll",n)}),qe(()=>{o(decodeURIComponent(location.hash))}),Ce(()=>{window.removeEventListener("scroll",n)})}function Wn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Gn(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Jn(){return document.querySelector(".nav-bar").offsetHeight}function be(e){const t=Jn();return e.parentElement.offsetTop-t-15}function Kn(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<be(t)?[!1,null]:!n||s<be(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Yn(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function Xn(){const e=E(),t=T();return qn(),p(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return xe(n,o);const r=ae(t.value.themeConfig.sidebar,e.data.relativePath);return r===!1?[]:r==="auto"?xe(n,o):r})}function xe(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:r,slug:a})=>{if(o-1>t)return;const i={text:r,link:`#${a}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ne=e=>{const t=E(),n=J();t.data.headers;const s=e.item.text,o=Qn(n.value.base,e.item.link),r=e.item.children,a=Jt(t,e.item.link),i=Zn(a,r);return I("li",{class:"sidebar-link"},[I(o?"a":"p",{class:{"sidebar-link-item":!0,active:a},href:o},s),i])};function Qn(e,t){return t===void 0||t.startsWith("#")?t:Kt(e,t)}function Zn(e,t,n){return t&&t.length>0?I("ul",{class:"sidebar-links"},t.map(s=>I(Ne,{item:s}))):null}const es={key:0,class:"sidebar-links"},ts=b({__name:"SideBarLinks",setup(e){const t=Xn();return(n,s)=>d(t).length>0?(u(),_("ul",es,[(u(!0),_(D,null,G(d(t),o=>(u(),L(d(Ne),{key:o.text,item:o},null,8,["item"]))),128))])):w("",!0)}});const ns={setup(){const e=E();return{slugs:p(()=>{var o;const n=((o=e.data.headers)!=null?o:[]).filter(r=>r.level>1);let s=10;for(const{level:r}of n)s>r&&(s=r);return n.filter(r=>r.level<s+2).map(r=>({...r,link:`#${r.slug}`,level:r.level===s?1:2}))})}}},ss={class:"right-slug"},os=["href"];function rs(e,t,n,s,o,r){return u(),_("ul",ss,[(u(!0),_(D,null,G(s.slugs,({level:a,link:i,title:c})=>(u(),_("li",{class:M(`slug-item level-${a}`),key:i},[l("a",{href:i,class:"link"},S(c),9,os)],2))),128))])}var as=m(ns,[["render",rs],["__scopeId","data-v-1336cdc6"]]);const is=b({__name:"SideBar",props:{open:{type:Boolean,required:!0}},setup(e){return(t,n)=>(u(),_(D,null,[l("aside",{class:M(["sidebar hover-scrollbar",{open:e.open}])},[f(ze,{class:"nav"}),x(t.$slots,"sidebar-top",{},void 0,!0),f(ts),x(t.$slots,"sidebar-bottom",{},void 0,!0)],2),f(as)],64))}});var cs=m(is,[["__scopeId","data-v-509f3b00"]]);const ls=/bitbucket.org/;function us(){const e=T(),t=H(),n=p(()=>{const o=Gt(t.value.frontmatter.editLink)?e.value.themeConfig.editLinks:t.value.frontmatter.editLink,{repo:r,docsDir:a="",docsBranch:i="master",docsRepo:c=r}=e.value.themeConfig,{relativePath:h}=t.value;return!o||!h||!r?null:ds(r,c,a,i,h)}),s=p(()=>e.value.themeConfig.editLinkText||"Edit this page");return{url:n,text:s}}function ds(e,t,n,s,o){return ls.test(e)?hs(e,t,n,s,o):_s(e,t,n,s,o)}function _s(e,t,n,s,o){return(re(t)?t:`https://github.com/${t}`).replace(j,"")+`/edit/${s}/`+(n?n.replace(j,"")+"/":"")+o}function hs(e,t,n,s,o){return(re(t)?t:e).replace(j,"")+`/src/${s}/`+(n?n.replace(j,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const ps={class:"edit-link"},fs=["href"],vs=b({__name:"EditLink",setup(e){const{url:t,text:n}=us();return(s,o)=>(u(),_("div",ps,[d(t)?(u(),_("a",{key:0,class:"link",href:d(t),target:"_blank",rel:"noopener noreferrer"},[te(S(d(n))+" ",1),f(ie,{class:"icon"})],8,fs)):w("",!0)]))}});var ms=m(vs,[["__scopeId","data-v-4e0cf990"]]);const gs={key:0,class:"last-updated"},$s={class:"prefix"},ks={class:"datetime"},ws=b({__name:"LastUpdated",setup(e){const t=T(),n=H(),s=p(()=>{const a=t.value.themeConfig.lastUpdated;return a!==void 0&&a!==!1}),o=p(()=>{const a=t.value.themeConfig.lastUpdated;return a===!0?"Last Updated":a}),r=U("");return W(()=>{r.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(a,i)=>d(s)?(u(),_("p",gs,[l("span",$s,S(d(o))+":",1),l("span",ks,S(r.value),1)])):w("",!0)}});var bs=m(ws,[["__scopeId","data-v-62bdcaad"]]);const xs={class:"page-footer"},ys={class:"edit"},Ls={class:"updated"},Ss=b({__name:"PageFooter",setup(e){return(t,n)=>(u(),_("footer",xs,[l("div",ys,[f(ms)]),l("div",Ls,[f(bs)])]))}});var Cs=m(Ss,[["__scopeId","data-v-79d80dc0"]]);function Es(){const e=T(),t=H(),n=p(()=>Te(Q(t.value.relativePath))),s=p(()=>{const c=ae(e.value.themeConfig.sidebar,n.value);return oe(c)?Re(c):[]}),o=p(()=>s.value.findIndex(c=>c.link===n.value)),r=p(()=>{if(e.value.themeConfig.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),a=p(()=>{if(e.value.themeConfig.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=p(()=>!!r.value||!!a.value);return{next:r,prev:a,hasLinks:i}}const Ps={},As={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ts=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Rs=[Ts];function Bs(e,t){return u(),_("svg",As,Rs)}var zs=m(Ps,[["render",Bs]]);const Ns={},Is={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ms=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Ds=[Ms];function Us(e,t){return u(),_("svg",Is,Ds)}var Hs=m(Ns,[["render",Us]]);const Os={key:0,class:"next-and-prev-link"},Fs={class:"container"},Vs={class:"prev"},js=["href"],qs={class:"text"},Ws={class:"next"},Gs=["href"],Js={class:"text"},Ks=b({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Es();return(o,r)=>d(t)?(u(),_("div",Os,[l("div",Fs,[l("div",Vs,[d(n)?(u(),_("a",{key:0,class:"link",href:o.$withBase(d(n).link)},[f(zs,{class:"icon icon-prev"}),l("span",qs,S(d(n).text),1)],8,js)):w("",!0)]),l("div",Ws,[d(s)?(u(),_("a",{key:0,class:"link",href:o.$withBase(d(s).link)},[l("span",Js,S(d(s).text),1),f(Hs,{class:"icon icon-next"})],8,Gs)):w("",!0)])])])):w("",!0)}});var Ys=m(Ks,[["__scopeId","data-v-6ea49ff3"]]);const Xs={class:"page"},Qs={class:"container hover-scrollbar"},Zs={class:"content"},eo=b({__name:"Page",setup(e){return(t,n)=>{const s=R("Content");return u(),_("main",Xs,[l("div",Qs,[x(t.$slots,"top",{},void 0,!0),l("div",Zs,[f(s)]),f(Cs),f(Ys),x(t.$slots,"bottom",{},void 0,!0)])])}}});var to=m(eo,[["__scopeId","data-v-a901e69a"]]);const no={key:0,id:"ads-container"},so=b({__name:"Layout",setup(e){const t=le(()=>X(()=>import("./Home.20747259.js"),["assets/Home.20747259.js","assets/plugin-vue_export-helper.5bd3d2d8.js","assets/style.09f88939.js"])),n=()=>null,s=n,o=n,r=le(()=>X(()=>import("./AlgoliaSearchBox.72f54441.js"),["assets/AlgoliaSearchBox.72f54441.js","assets/plugin-vue_export-helper.5bd3d2d8.js","assets/style.09f88939.js"])),a=E(),i=J(),c=T(),h=p(()=>i.value.themeConfig),g=H(),$=p(()=>!!a.data.frontmatter.customLayout),y=p(()=>!!a.data.frontmatter.home),k=p(()=>{const{themeConfig:v}=c.value,{frontmatter:N}=a.data;return N.navbar===!1||v.navbar===!1?!1:i.value.title||v.logo||v.repo||v.nav}),C=U(!1),B=p(()=>{const{frontmatter:v}=a.data;if(v.home||v.sidebar===!1)return!1;const{themeConfig:N}=c.value;return!Qt(ae(N.sidebar,a.data.relativePath))}),z=v=>{C.value=typeof v=="boolean"?v:!C.value},De=z.bind(null,!1);ne(a,De);const Ue=p(()=>[{"no-navbar":!k.value,"sidebar-open":C.value,"no-sidebar":!B.value}]);return(v,N)=>{const He=R("Content"),Oe=R("Debug");return u(),_(D,null,[l("div",{class:M(["theme",d(Ue)])},[d(k)?(u(),L(jn,{key:0,onToggle:z},{search:P(()=>[x(v.$slots,"navbar-search",{},()=>[d(h).algolia?(u(),L(d(r),{key:0,options:d(h).algolia},null,8,["options"])):w("",!0)])]),_:3})):w("",!0),f(cs,{open:C.value},{"sidebar-top":P(()=>[x(v.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[x(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:N[0]||(N[0]=$o=>z(!1))}),d($)?(u(),L(He,{key:1})):d(y)?(u(),L(d(t),{key:2},{hero:P(()=>[x(v.$slots,"home-hero")]),features:P(()=>[x(v.$slots,"home-features")]),footer:P(()=>[x(v.$slots,"home-footer")]),_:3})):(u(),L(to,{key:3},{top:P(()=>[x(v.$slots,"page-top-ads",{},()=>[d(h).carbonAds&&d(h).carbonAds.carbon?(u(),_("div",no,[(u(),L(d(s),{key:"carbon"+d(g).relativePath,code:d(h).carbonAds.carbon,placement:d(h).carbonAds.placement},null,8,["code","placement"]))])):w("",!0)]),x(v.$slots,"page-top")]),bottom:P(()=>[x(v.$slots,"page-bottom"),x(v.$slots,"page-bottom-ads",{},()=>[d(h).carbonAds&&d(h).carbonAds.custom?(u(),L(d(o),{key:"custom"+d(g).relativePath,code:d(h).carbonAds.custom,placement:d(h).carbonAds.placement},null,8,["code","placement"])):w("",!0)])]),_:3}))],2),f(Oe)],64)}}}),oo={class:"theme"},ro=l("h1",null,"404",-1),ao=["href"],io=b({__name:"NotFound",setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function n(){return t[Math.floor(Math.random()*t.length)]}return(s,o)=>(u(),_("div",oo,[ro,l("blockquote",null,S(n()),1),l("a",{href:s.$site.base,"aria-label":"go to home"},"Take me home.",8,ao)]))}}),co={Layout:so,NotFound:io};var Ie={...co,enhanceApp({app:e}){}};const Y=new Set,Me=()=>document.createElement("link"),lo=e=>{const t=Me();t.rel="prefetch",t.href=e,document.head.appendChild(t)},uo=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let V;const _o=A&&(V=Me())&&V.relList&&V.relList.supports&&V.relList.supports("prefetch")?lo:uo;function ho(){if(!A||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(r=>{r.forEach(a=>{if(a.isIntersecting){const i=a.target;n.unobserve(i);const{pathname:c}=i;if(!Y.has(c)){Y.add(c);const h=Pe(c);_o(h)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(r=>{const{target:a,hostname:i,pathname:c}=r,h=c.match(/\.\w+$/);h&&h[0]!==".html"||a!=="_blank"&&i===location.hostname&&(c!==location.pathname?n.observe(r):Y.add(c))})})};W(s);const o=E();ne(()=>o.path,s),Ce(()=>{n&&n.disconnect()})}const po=Ie.NotFound||(()=>"404 Not Found"),fo={name:"VitePressApp",setup(){return ho(),()=>I(Ie.Layout)}};function vo(){const e=go(),t=mo();t.provide(Ae,e);const n=T(e.route),s=H(e.route);return A&&Ht(e.route,n),Rt(t,se,n,s),Bt(t),{app:t,router:e}}function mo(){return We(fo)}function go(){let e=A,t;return Ye(n=>{let s=Pe(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),A?(e=!1,X(()=>import(s),[])):require(s)},po)}if(A){const{app:e,router:t}=vo();t.go().then(()=>{e.mount("#app")})}export{ke as N,T as a,E as b,Xe as c,vo as createApp,H as u};
