(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Oa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const te={},Bt=[],Le=()=>{},wl=()=>!1,_l=/^on[^a-z]/,hr=e=>_l.test(e),Pa=e=>e.startsWith("onUpdate:"),de=Object.assign,Ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},El=Object.prototype.hasOwnProperty,K=(e,t)=>El.call(e,t),D=Array.isArray,Ht=e=>gr(e)==="[object Map]",$o=e=>gr(e)==="[object Set]",B=e=>typeof e=="function",ce=e=>typeof e=="string",Sa=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",jo=e=>ae(e)&&B(e.then)&&B(e.catch),zo=Object.prototype.toString,gr=e=>zo.call(e),kl=e=>gr(e).slice(8,-1),Do=e=>gr(e)==="[object Object]",Ra=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Al=/-(\w)/g,qe=vr(e=>e.replace(Al,(t,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,tn=vr(e=>e.replace(Ol,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=vr(e=>e?`on${br(e)}`:""),wn=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mi;const Qr=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ia(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Rl(r):Ia(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(ae(e))return e}}const Pl=/;(?![^(]*\))/g,Cl=/:([^]+)/,Sl=/\/\*[^]*?\*\//g;function Rl(e){const t={};return e.replace(Sl,"").split(Pl).forEach(n=>{if(n){const r=n.split(Cl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yr(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=yr(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=Oa(Il);function Uo(e){return!!e||e===""}const zt=e=>ce(e)?e:e==null?"":D(e)||ae(e)&&(e.toString===zo||!B(e.toString))?JSON.stringify(e,Bo,2):String(e),Bo=(e,t)=>t&&t.__v_isRef?Bo(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:$o(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!D(t)&&!Do(t)?String(t):t;let Ie;class Nl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ml(e,t=Ie){t&&t.active&&t.effects.push(e)}function Ll(){return Ie}const Ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ho=e=>(e.w&ht)>0,Wo=e=>(e.n&ht)>0,Fl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},$l=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ho(a)&&!Wo(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Jr=new WeakMap;let un=0,ht=1;const Zr=30;let Te;const Pt=Symbol(""),ea=Symbol("");class Na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ml(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ut=!0,ht=1<<++un,un<=Zr?Fl(this):pi(this),this.fn()}finally{un<=Zr&&$l(this),ht=1<<--un,Te=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(pi(this),this.onStop&&this.onStop(),this.active=!1)}}function pi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Yo=[];function nn(){Yo.push(ut),ut=!1}function rn(){const e=Yo.pop();ut=e===void 0?!0:e}function Ee(e,t,n){if(ut&&Te){let r=Jr.get(e);r||Jr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ta()),Ko(a)}}function Ko(e,t){let n=!1;un<=Zr?Wo(e)||(e.n|=ht,n=!Ho(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Je(e,t,n,r,a,i){const o=Jr.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&D(e)){const s=Number(r);o.forEach((c,f)=>{(f==="length"||f>=s)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":D(e)?Ra(n)&&l.push(o.get("length")):(l.push(o.get(Pt)),Ht(e)&&l.push(o.get(ea)));break;case"delete":D(e)||(l.push(o.get(Pt)),Ht(e)&&l.push(o.get(ea)));break;case"set":Ht(e)&&l.push(o.get(Pt));break}if(l.length===1)l[0]&&ta(l[0]);else{const s=[];for(const c of l)c&&s.push(...c);ta(Ta(s))}}function ta(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&hi(r);for(const r of n)r.computed||hi(r)}function hi(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const jl=Oa("__proto__,__v_isRef,__isVue"),qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sa)),zl=Ma(),Dl=Ma(!1,!0),Ul=Ma(!0),gi=Bl();function Bl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=q(this)[t].apply(this,n);return rn(),r}}),e}function Hl(e){const t=q(this);return Ee(t,"has",e),t.hasOwnProperty(e)}function Ma(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ic:Jo:t?Qo:Go).get(r))return r;const o=D(r);if(!e){if(o&&K(gi,a))return Reflect.get(gi,a,i);if(a==="hasOwnProperty")return Hl}const l=Reflect.get(r,a,i);return(Sa(a)?qo.has(a):jl(a))||(e||Ee(r,"get",a),t)?l:ve(l)?o&&Ra(a)?l:l.value:ae(l)?e?es(l):wr(l):l}}const Wl=Vo(),Yl=Vo(!0);function Vo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=q(o),a=q(a)),!D(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const l=D(n)&&Ra(r)?Number(r)<n.length:K(n,r),s=Reflect.set(n,r,a,i);return n===q(i)&&(l?wn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),s}}function Kl(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function ql(e,t){const n=Reflect.has(e,t);return(!Sa(t)||!qo.has(t))&&Ee(e,"has",t),n}function Vl(e){return Ee(e,"iterate",D(e)?"length":Pt),Reflect.ownKeys(e)}const Xo={get:zl,set:Wl,deleteProperty:Kl,has:ql,ownKeys:Vl},Xl={get:Ul,set(e,t){return!0},deleteProperty(e,t){return!0}},Gl=de({},Xo,{get:Dl,set:Yl}),La=e=>e,xr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=xr(a),l=r?La:n?ja:_n;if(o.call(a,t))return l(e.get(t));if(o.call(a,i))return l(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Ee(q(e),"iterate",Pt),Reflect.get(e,"size",e)}function vi(e){e=q(e);const t=q(this);return xr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function bi(e,t){t=q(t);const n=q(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?wn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function yi(e){const t=q(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function xi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,l=q(o),s=t?La:e?ja:_n;return!e&&Ee(l,"iterate",Pt),o.forEach((c,f)=>r.call(a,s(c),s(f),i))}}function Un(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Ht(i),l=e==="entries"||e===Symbol.iterator&&o,s=e==="keys"&&o,c=a[e](...r),f=n?La:t?ja:_n;return!t&&Ee(i,"iterate",s?ea:Pt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:l?[f(d[0]),f(d[1])]:f(d),done:p}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function Ql(){const e={get(i){return $n(this,i)},get size(){return zn(this)},has:jn,add:vi,set:bi,delete:yi,clear:xi,forEach:Dn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return zn(this)},has:jn,add:vi,set:bi,delete:yi,clear:xi,forEach:Dn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Dn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),t[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[e,n,t,r]}const[Jl,Zl,ec,tc]=Ql();function Fa(e,t){const n=t?e?tc:ec:e?Zl:Jl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const nc={get:Fa(!1,!1)},rc={get:Fa(!1,!0)},ac={get:Fa(!0,!1)},Go=new WeakMap,Qo=new WeakMap,Jo=new WeakMap,ic=new WeakMap;function oc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(e){return e.__v_skip||!Object.isExtensible(e)?0:oc(kl(e))}function wr(e){return Vt(e)?e:$a(e,!1,Xo,nc,Go)}function Zo(e){return $a(e,!1,Gl,rc,Qo)}function es(e){return $a(e,!0,Xl,ac,Jo)}function $a(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=sc(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return a.set(e,l),l}function Wt(e){return Vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function ts(e){return Wt(e)||Vt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function ns(e){return ir(e,"__v_skip",!0),e}const _n=e=>ae(e)?wr(e):e,ja=e=>ae(e)?es(e):e;function rs(e){ut&&Te&&(e=q(e),Ko(e.dep||(e.dep=Ta())))}function as(e,t){e=q(e);const n=e.dep;n&&ta(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function dt(e){return is(e,!1)}function lc(e){return is(e,!0)}function is(e,t){return ve(e)?e:new cc(e,t)}class cc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:_n(t)}get value(){return rs(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:q(t),wn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),as(this))}}function Ke(e){return ve(e)?e.value:e}const fc={get:(e,t,n)=>Ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function os(e){return Wt(e)?e:new Proxy(e,fc)}class uc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Na(t,()=>{this._dirty||(this._dirty=!0,as(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return rs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function dc(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new uc(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function Fe(e,t,n,r){if(B(e)){const i=mt(e,t,n,r);return i&&jo(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Fe(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,l)===!1)return}i=i.parent}const s=t.appContext.config.errorHandler;if(s){mt(s,null,10,[e,o,l]);return}}mc(e,n,a,r)}function mc(e,t,n,r=!0){console.error(e)}let En=!1,na=!1;const ge=[];let We=0;const Yt=[];let Ge=null,_t=0;const ss=Promise.resolve();let za=null;function ls(e){const t=za||ss;return e?t.then(this?e.bind(this):e):t}function pc(e){let t=We+1,n=ge.length;for(;t<n;){const r=t+n>>>1;kn(ge[r])<e?t=r+1:n=r}return t}function Da(e){(!ge.length||!ge.includes(e,En&&e.allowRecurse?We+1:We))&&(e.id==null?ge.push(e):ge.splice(pc(e.id),0,e),cs())}function cs(){!En&&!na&&(na=!0,za=ss.then(us))}function hc(e){const t=ge.indexOf(e);t>We&&ge.splice(t,1)}function gc(e){D(e)?Yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?_t+1:_t))&&Yt.push(e),cs()}function wi(e,t=En?We+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function fs(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>kn(n)-kn(r)),_t=0;_t<Ge.length;_t++)Ge[_t]();Ge=null,_t=0}}const kn=e=>e.id==null?1/0:e.id,vc=(e,t)=>{const n=kn(e)-kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function us(e){na=!1,En=!0,ge.sort(vc);const t=Le;try{for(We=0;We<ge.length;We++){const n=ge[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,ge.length=0,fs(),En=!1,za=null,(ge.length||Yt.length)&&us()}}function bc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[f]||te;p&&(a=n.map(g=>ce(g)?g.trim():g)),d&&(a=n.map(Gr))}let l,s=r[l=Fr(t)]||r[l=Fr(qe(t))];!s&&i&&(s=r[l=Fr(tn(t))]),s&&Fe(s,e,6,a);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Fe(c,e,6,a)}}function ds(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},l=!1;if(!B(e)){const s=c=>{const f=ds(c,t,!0);f&&(l=!0,de(o,f))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!l?(ae(e)&&r.set(e,null),null):(D(i)?i.forEach(s=>o[s]=null):de(o,i),ae(e)&&r.set(e,o),o)}function Er(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,tn(t))||K(e,t))}let Se=null,kr=null;function sr(e){const t=Se;return Se=e,kr=e&&e.type.__scopeId||null,t}function ms(e){kr=e}function ps(){kr=null}function yc(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ni(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Ni(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:l,attrs:s,emit:c,render:f,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let F,x;const w=sr(e);try{if(n.shapeFlag&4){const S=a||r;F=He(f.call(S,S,d,i,g,p,P)),x=s}else{const S=t;F=He(S.length>1?S(i,{attrs:s,slots:l,emit:c}):S(i,null)),x=t.props?s:xc(s)}}catch(S){gn.length=0,_r(S,e,1),F=le(St)}let L=F;if(x&&C!==!1){const S=Object.keys(x),{shapeFlag:H}=L;S.length&&H&7&&(o&&S.some(Pa)&&(x=wc(x,o)),L=Gt(L,x))}return n.dirs&&(L=Gt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,sr(w),F}const xc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},wc=(e,t)=>{const n={};for(const r in e)(!Pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function _c(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:l,patchFlag:s}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return r?_i(r,o,c):!!o;if(s&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const p=f[d];if(o[p]!==r[p]&&!Er(c,p))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?_i(r,o,c):!0:!!o;return!1}function _i(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function Ec({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kc=e=>e.__isSuspense;function Ac(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):gc(e)}const Bn={};function pn(e,t,n){return hs(e,t,n)}function hs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){var l;const s=Ll()===((l=pe)==null?void 0:l.scope)?pe:null;let c,f=!1,d=!1;if(ve(e)?(c=()=>e.value,f=or(e)):Wt(e)?(c=()=>e,r=!0):D(e)?(d=!0,f=e.some(S=>Wt(S)||or(S)),c=()=>e.map(S=>{if(ve(S))return S.value;if(Wt(S))return kt(S);if(B(S))return mt(S,s,2)})):B(e)?t?c=()=>mt(e,s,2):c=()=>{if(!(s&&s.isUnmounted))return p&&p(),Fe(e,s,3,[g])}:c=Le,t&&r){const S=c;c=()=>kt(S())}let p,g=S=>{p=w.onStop=()=>{mt(S,s,4)}},P;if(On)if(g=Le,t?n&&Fe(t,s,3,[c(),d?[]:void 0,g]):c(),a==="sync"){const S=wf();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Le;let C=d?new Array(e.length).fill(Bn):Bn;const F=()=>{if(w.active)if(t){const S=w.run();(r||f||(d?S.some((H,Z)=>wn(H,C[Z])):wn(S,C)))&&(p&&p(),Fe(t,s,3,[S,C===Bn?void 0:d&&C[0]===Bn?[]:C,g]),C=S)}else w.run()};F.allowRecurse=!!t;let x;a==="sync"?x=F:a==="post"?x=()=>_e(F,s&&s.suspense):(F.pre=!0,s&&(F.id=s.uid),x=()=>Da(F));const w=new Na(c,x);t?n?F():C=w.run():a==="post"?_e(w.run.bind(w),s&&s.suspense):w.run();const L=()=>{w.stop(),s&&s.scope&&Ca(s.scope.effects,w)};return P&&P.push(L),L}function Oc(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?gs(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=pe;Qt(this);const l=hs(a,i.bind(r),n);return o?Qt(o):Ct(),l}function gs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))kt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if($o(e)||Ht(e))e.forEach(n=>{kt(n,t)});else if(Do(e))for(const n in e)kt(e[n],t);return e}function Ei(e,t){const n=Se;if(n===null)return e;const r=Cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,l,s,c=te]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(l),a.push({dir:o,instance:r,value:l,oldValue:void 0,arg:s,modifiers:c}))}return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const l=a[o];i&&(l.oldValue=i[o].value);let s=l.dir[r];s&&(nn(),Fe(s,n,8,[e.el,l,e,t]),rn())}}function Ua(e,t){return B(e)?(()=>de({name:e.name},t,{setup:e}))():e}const er=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function Pc(e,t){bs(e,"a",t)}function Cc(e,t){bs(e,"da",t)}function bs(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)vs(a.parent.vnode)&&Sc(r,t,n,a),a=a.parent}}function Sc(e,t,n,r){const a=Ar(t,e,r,!0);ys(()=>{Ca(r[t],a)},n)}function Ar(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Qt(n);const l=Fe(t,n,e,o);return Ct(),rn(),l});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=pe)=>(!On||e==="sp")&&Ar(e,(...r)=>t(...r),n),Rc=nt("bm"),Ic=nt("m"),Tc=nt("bu"),Nc=nt("u"),Mc=nt("bum"),ys=nt("um"),Lc=nt("sp"),Fc=nt("rtg"),$c=nt("rtc");function jc(e,t=pe){Ar("ec",e,t)}const xs="components";function zc(e,t){return Uc(xs,e,!0,t)||e}const Dc=Symbol.for("v-ndc");function Uc(e,t,n=!0,r=!1){const a=Se||pe;if(a){const i=a.type;if(e===xs){const l=bf(i,!1);if(l&&(l===t||l===qe(t)||l===br(qe(t))))return i}const o=ki(a[e]||i[e],t)||ki(a.appContext[e],t);return!o&&r?i:o}}function ki(e,t){return e&&(e[t]||e[qe(t)]||e[br(qe(t))])}function Bc(e,t,n,r){let a;const i=n&&n[r];if(D(e)||ce(e)){a=new Array(e.length);for(let o=0,l=e.length;o<l;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,l)=>t(o,l,void 0,i&&i[l]));else{const o=Object.keys(e);a=new Array(o.length);for(let l=0,s=o.length;l<s;l++){const c=o[l];a[l]=t(e[c],c,l,i&&i[l])}}else a=[];return n&&(n[r]=a),a}const ra=e=>e?Ts(e)?Cr(e)||e.proxy:ra(e.parent):null,hn=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ra(e.parent),$root:e=>ra(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>Da(e.update)),$nextTick:e=>e.n||(e.n=ls.bind(e.proxy)),$watch:e=>Oc.bind(e)}),jr=(e,t)=>e!==te&&!e.__isScriptSetup&&K(e,t),Hc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:l,appContext:s}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(jr(r,t))return o[t]=1,r[t];if(a!==te&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==te&&K(n,t))return o[t]=4,n[t];aa&&(o[t]=0)}}const f=hn[t];let d,p;if(f)return t==="$attrs"&&Ee(e,"get",t),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==te&&K(n,t))return o[t]=4,n[t];if(p=s.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return jr(a,t)?(a[t]=n,!0):r!==te&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let l;return!!n[o]||e!==te&&K(e,o)||jr(t,o)||(l=i[0])&&K(l,o)||K(r,o)||K(hn,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ai(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let aa=!0;function Wc(e){const t=Ba(e),n=e.proxy,r=e.ctx;aa=!1,t.beforeCreate&&Oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:l,provide:s,inject:c,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:F,beforeDestroy:x,beforeUnmount:w,destroyed:L,unmounted:S,render:H,renderTracked:Z,renderTriggered:ie,errorCaptured:ke,serverPrefetch:be,expose:Pe,inheritAttrs:at,components:yt,directives:ze,filters:on}=t;if(c&&Yc(c,r,null),o)for(const J in o){const V=o[J];B(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=wr(J))}if(aa=!0,i)for(const J in i){const V=i[J],Ve=B(V)?V.bind(n,n):B(V.get)?V.get.bind(n,n):Le,it=!B(V)&&B(V.set)?V.set.bind(n):Le,De=me({get:Ve,set:it});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:xe=>De.value=xe})}if(l)for(const J in l)ws(l[J],r,n,J);if(s){const J=B(s)?s.call(n):s;Reflect.ownKeys(J).forEach(V=>{tr(V,J[V])})}f&&Oi(f,e,"c");function ue(J,V){D(V)?V.forEach(Ve=>J(Ve.bind(n))):V&&J(V.bind(n))}if(ue(Rc,d),ue(Ic,p),ue(Tc,g),ue(Nc,P),ue(Pc,C),ue(Cc,F),ue(jc,ke),ue($c,Z),ue(Fc,ie),ue(Mc,w),ue(ys,S),ue(Lc,be),D(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Ve=>n[V]=Ve})})}else e.exposed||(e.exposed={});H&&e.render===Le&&(e.render=H),at!=null&&(e.inheritAttrs=at),yt&&(e.components=yt),ze&&(e.directives=ze)}function Yc(e,t,n=Le){D(e)&&(e=ia(e));for(const r in e){const a=e[r];let i;ae(a)?"default"in a?i=$e(a.from||r,a.default,!0):i=$e(a.from||r):i=$e(a),ve(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Oi(e,t,n){Fe(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ws(e,t,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(ce(e)){const i=t[e];B(i)&&pn(a,i)}else if(B(e))pn(a,e.bind(n));else if(ae(e))if(D(e))e.forEach(i=>ws(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&pn(a,i,e)}}function Ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let s;return l?s=l:!a.length&&!n&&!r?s=t:(s={},a.length&&a.forEach(c=>lr(s,c,o,!0)),lr(s,t,o)),ae(t)&&i.set(t,s),s}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Kc[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Kc={data:Pi,props:Ci,emits:Ci,methods:dn,computed:dn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:dn,directives:dn,watch:Vc,provide:Pi,inject:qc};function Pi(e,t){return t?e?function(){return de(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function qc(e,t){return dn(ia(e),ia(t))}function ia(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?de(Object.create(null),e,t):t}function Ci(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:de(Object.create(null),Ai(e),Ai(t??{})):t}function Vc(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function _s(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xc=0;function Gc(e,t){return function(r,a=null){B(r)||(r=de({},r)),a!=null&&!ae(a)&&(a=null);const i=_s(),o=new Set;let l=!1;const s=i.app={_uid:Xc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(s,...f)):B(c)&&(o.add(c),c(s,...f))),s},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),s},component(c,f){return f?(i.components[c]=f,s):i.components[c]},directive(c,f){return f?(i.directives[c]=f,s):i.directives[c]},mount(c,f,d){if(!l){const p=le(r,a);return p.appContext=i,f&&t?t(p,c):e(p,c,d),l=!0,s._container=c,c.__vue_app__=s,Cr(p.component)||p.component.proxy}},unmount(){l&&(e(null,s._container),delete s._container.__vue_app__)},provide(c,f){return i.provides[c]=f,s},runWithContext(c){cr=s;try{return c()}finally{cr=null}}};return s}}let cr=null;function tr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=pe||Se;if(r||cr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:cr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Qc(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),Es(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Zo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,l=q(a),[s]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let p=f[d];if(Er(e.emitsOptions,p))continue;const g=t[p];if(s)if(K(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const P=qe(p);a[P]=oa(s,l,P,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{Es(e,t,a,i)&&(c=!0);let f;for(const d in l)(!t||!K(t,d)&&((f=tn(d))===d||!K(t,f)))&&(s?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=oa(s,l,d,void 0,e,!0)):delete a[d]);if(i!==l)for(const d in i)(!t||!K(t,d))&&(delete i[d],c=!0)}c&&Je(e,"set","$attrs")}function Es(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,l;if(t)for(let s in t){if(Jn(s))continue;const c=t[s];let f;a&&K(a,f=qe(s))?!i||!i.includes(f)?n[f]=c:(l||(l={}))[f]=c:Er(e.emitsOptions,s)||(!(s in r)||c!==r[s])&&(r[s]=c,o=!0)}if(i){const s=q(n),c=l||te;for(let f=0;f<i.length;f++){const d=i[f];n[d]=oa(a,s,d,c[d],e,!K(c,d))}}return o}function oa(e,t,n,r,a,i){const o=e[n];if(o!=null){const l=K(o,"default");if(l&&r===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&B(s)){const{propsDefaults:c}=a;n in c?r=c[n]:(Qt(a),r=c[n]=s.call(null,t),Ct())}else r=s}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function ks(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},l=[];let s=!1;if(!B(e)){const f=d=>{s=!0;const[p,g]=ks(d,t,!0);de(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!s)return ae(e)&&r.set(e,Bt),Bt;if(D(i))for(let f=0;f<i.length;f++){const d=qe(i[f]);Si(d)&&(o[d]=te)}else if(i)for(const f in i){const d=qe(f);if(Si(d)){const p=i[f],g=o[d]=D(p)||B(p)?{type:p}:de({},p);if(g){const P=Ti(Boolean,g.type),C=Ti(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||K(g,"default"))&&l.push(d)}}}const c=[o,l];return ae(e)&&r.set(e,c),c}function Si(e){return e[0]!=="$"}function Ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ii(e,t){return Ri(e)===Ri(t)}function Ti(e,t){return D(t)?t.findIndex(n=>Ii(n,e)):B(t)&&Ii(t,e)?0:-1}const As=e=>e[0]==="_"||e==="$stable",Ha=e=>D(e)?e.map(He):[He(e)],Zc=(e,t,n)=>{if(t._n)return t;const r=yc((...a)=>Ha(t(...a)),n);return r._c=!1,r},Os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(As(a))continue;const i=e[a];if(B(i))t[a]=Zc(a,i,r);else if(i!=null){const o=Ha(i);t[a]=()=>o}}},Ps=(e,t)=>{const n=Ha(t);e.slots.default=()=>n},ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),ir(t,"_",n)):Os(t,e.slots={})}else e.slots={},t&&Ps(e,t);ir(e.slots,Pr,1)},tf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(de(a,t),!n&&l===1&&delete a._):(i=!t.$stable,Os(t,a)),o=t}else t&&(Ps(e,t),o={default:1});if(i)for(const l in a)!As(l)&&!(l in o)&&delete a[l]};function sa(e,t,n,r,a=!1){if(D(e)){e.forEach((p,g)=>sa(p,t&&(D(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?Cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:l,r:s}=e,c=t&&t.r,f=l.refs===te?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==s&&(ce(c)?(f[c]=null,K(d,c)&&(d[c]=null)):ve(c)&&(c.value=null)),B(s))mt(s,l,12,[o,f]);else{const p=ce(s),g=ve(s);if(p||g){const P=()=>{if(e.f){const C=p?K(d,s)?d[s]:f[s]:s.value;a?D(C)&&Ca(C,i):D(C)?C.includes(i)||C.push(i):p?(f[s]=[i],K(d,s)&&(d[s]=f[s])):(s.value=[i],e.k&&(f[e.k]=s.value))}else p?(f[s]=o,K(d,s)&&(d[s]=o)):g&&(s.value=o,e.k&&(f[e.k]=o))};o?(P.id=-1,_e(P,n)):P()}}}const _e=Ac;function nf(e){return rf(e)}function rf(e,t){const n=Qr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:l,createComment:s,setText:c,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=Le,insertStaticContent:P}=e,C=(u,m,h,v=null,y=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!ln(u,m)&&(v=b(u),xe(u,y,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:j,shapeFlag:N}=m;switch(E){case Or:F(u,m,h,v);break;case St:x(u,m,h,v);break;case zr:u==null&&w(m,h,v,R);break;case Ce:yt(u,m,h,v,y,_,R,k,A);break;default:N&1?H(u,m,h,v,y,_,R,k,A):N&6?ze(u,m,h,v,y,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,y,_,R,k,A,O)}j!=null&&y&&sa(j,u&&u.ref,_,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=l(m.children),h,v);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},x=(u,m,h,v)=>{u==null?r(m.el=s(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},L=({el:u,anchor:m},h,v)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,v),u=y;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,y,_,R,k,A)=>{R=R||m.type==="svg",u==null?Z(m,h,v,y,_,R,k,A):be(u,m,y,_,R,k,A)},Z=(u,m,h,v,y,_,R,k)=>{let A,E;const{type:j,props:N,shapeFlag:z,transition:U,dirs:W}=u;if(A=u.el=o(u.type,_,N&&N.is,N),z&8?f(A,u.children):z&16&&ke(u.children,A,null,v,y,_&&j!=="foreignObject",R,k),W&&xt(u,null,v,"created"),ie(A,u,u.scopeId,R,v),N){for(const Q in N)Q!=="value"&&!Jn(Q)&&i(A,Q,null,N[Q],_,u.children,v,y,he);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&Be(E,v,u)}W&&xt(u,null,v,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;ee&&U.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||ee||W)&&_e(()=>{E&&Be(E,v,u),ee&&U.enter(A),W&&xt(u,null,v,"mounted")},y)},ie=(u,m,h,v,y)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(y){let _=y.subTree;if(m===_){const R=y.vnode;ie(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},ke=(u,m,h,v,y,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const j=u[E]=k?ct(u[E]):He(u[E]);C(null,j,m,h,v,y,_,R,k)}},be=(u,m,h,v,y,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:j}=m;A|=u.patchFlag&16;const N=u.props||te,z=m.props||te;let U;h&&wt(h,!1),(U=z.onVnodeBeforeUpdate)&&Be(U,h,m,u),j&&xt(m,u,h,"beforeUpdate"),h&&wt(h,!0);const W=y&&m.type!=="foreignObject";if(E?Pe(u.dynamicChildren,E,k,h,v,W,_):R||V(u,m,k,null,h,v,W,_,!1),A>0){if(A&16)at(k,m,N,z,h,v,y);else if(A&2&&N.class!==z.class&&i(k,"class",null,z.class,y),A&4&&i(k,"style",N.style,z.style,y),A&8){const ee=m.dynamicProps;for(let Q=0;Q<ee.length;Q++){const se=ee[Q],Re=N[se],Lt=z[se];(Lt!==Re||se==="value")&&i(k,se,Re,Lt,y,u.children,h,v,he)}}A&1&&u.children!==m.children&&f(k,m.children)}else!R&&E==null&&at(k,m,N,z,h,v,y);((U=z.onVnodeUpdated)||j)&&_e(()=>{U&&Be(U,h,m,u),j&&xt(m,u,h,"updated")},v)},Pe=(u,m,h,v,y,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],j=A.el&&(A.type===Ce||!ln(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,j,null,v,y,_,R,!0)}},at=(u,m,h,v,y,_,R)=>{if(h!==v){if(h!==te)for(const k in h)!Jn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,y,_,he);for(const k in v){if(Jn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,y,_,he)}"value"in v&&i(u,"value",h.value,v.value)}},yt=(u,m,h,v,y,_,R,k,A)=>{const E=m.el=u?u.el:l(""),j=m.anchor=u?u.anchor:l("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:U}=m;U&&(k=k?k.concat(U):U),u==null?(r(E,h,v),r(j,h,v),ke(m.children,h,j,y,_,R,k,A)):N>0&&N&64&&z&&u.dynamicChildren?(Pe(u.dynamicChildren,z,h,y,_,R,k),(m.key!=null||y&&m===y.subTree)&&Cs(u,m,!0)):V(u,m,h,j,y,_,R,k,A)},ze=(u,m,h,v,y,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,h,v,R,A):on(m,h,v,y,_,R,A):Tt(u,m,A)},on=(u,m,h,v,y,_,R)=>{const k=u.component=mf(u,v,y);if(vs(u)&&(k.ctx.renderer=O),pf(k),k.asyncDep){if(y&&y.registerDep(k,ue),!u.el){const A=k.subTree=le(St);x(null,A,m,h)}return}ue(k,u,m,h,y,_,R)},Tt=(u,m,h)=>{const v=m.component=u.component;if(_c(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,hc(v.update),v.update();else m.el=u.el,v.vnode=m},ue=(u,m,h,v,y,_,R)=>{const k=()=>{if(u.isMounted){let{next:j,bu:N,u:z,parent:U,vnode:W}=u,ee=j,Q;wt(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,N&&Zn(N),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&Be(Q,U,j,W),wt(u,!0);const se=$r(u),Re=u.subTree;u.subTree=se,C(Re,se,d(Re.el),b(Re),u,y,_),j.el=se.el,ee===null&&Ec(u,se.el),z&&_e(z,y),(Q=j.props&&j.props.onVnodeUpdated)&&_e(()=>Be(Q,U,j,W),y)}else{let j;const{el:N,props:z}=m,{bm:U,m:W,parent:ee}=u,Q=er(m);if(wt(u,!1),U&&Zn(U),!Q&&(j=z&&z.onVnodeBeforeMount)&&Be(j,ee,m),wt(u,!0),N&&X){const se=()=>{u.subTree=$r(u),X(N,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=$r(u);C(null,se,h,v,u,y,_),m.el=se.el}if(W&&_e(W,y),!Q&&(j=z&&z.onVnodeMounted)){const se=m;_e(()=>Be(j,ee,se),y)}(m.shapeFlag&256||ee&&er(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&_e(u.a,y),u.isMounted=!0,m=h=v=null}},A=u.effect=new Na(k,()=>Da(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,wt(u,!0),E()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Jc(u,m.props,v,h),tf(u,m.children,h),nn(),wi(),rn()},V=(u,m,h,v,y,_,R,k,A=!1)=>{const E=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:z,shapeFlag:U}=m;if(z>0){if(z&128){it(E,N,h,v,y,_,R,k,A);return}else if(z&256){Ve(E,N,h,v,y,_,R,k,A);return}}U&8?(j&16&&he(E,y,_),N!==E&&f(h,N)):j&16?U&16?it(E,N,h,v,y,_,R,k,A):he(E,y,_,!0):(j&8&&f(h,""),U&16&&ke(N,h,v,y,_,R,k,A))},Ve=(u,m,h,v,y,_,R,k,A)=>{u=u||Bt,m=m||Bt;const E=u.length,j=m.length,N=Math.min(E,j);let z;for(z=0;z<N;z++){const U=m[z]=A?ct(m[z]):He(m[z]);C(u[z],U,h,null,y,_,R,k,A)}E>j?he(u,y,_,!0,!1,N):ke(m,h,v,y,_,R,k,A,N)},it=(u,m,h,v,y,_,R,k,A)=>{let E=0;const j=m.length;let N=u.length-1,z=j-1;for(;E<=N&&E<=z;){const U=u[E],W=m[E]=A?ct(m[E]):He(m[E]);if(ln(U,W))C(U,W,h,null,y,_,R,k,A);else break;E++}for(;E<=N&&E<=z;){const U=u[N],W=m[z]=A?ct(m[z]):He(m[z]);if(ln(U,W))C(U,W,h,null,y,_,R,k,A);else break;N--,z--}if(E>N){if(E<=z){const U=z+1,W=U<j?m[U].el:v;for(;E<=z;)C(null,m[E]=A?ct(m[E]):He(m[E]),h,W,y,_,R,k,A),E++}}else if(E>z)for(;E<=N;)xe(u[E],y,_,!0),E++;else{const U=E,W=E,ee=new Map;for(E=W;E<=z;E++){const Ae=m[E]=A?ct(m[E]):He(m[E]);Ae.key!=null&&ee.set(Ae.key,E)}let Q,se=0;const Re=z-W+1;let Lt=!1,fi=0;const sn=new Array(Re);for(E=0;E<Re;E++)sn[E]=0;for(E=U;E<=N;E++){const Ae=u[E];if(se>=Re){xe(Ae,y,_,!0);continue}let Ue;if(Ae.key!=null)Ue=ee.get(Ae.key);else for(Q=W;Q<=z;Q++)if(sn[Q-W]===0&&ln(Ae,m[Q])){Ue=Q;break}Ue===void 0?xe(Ae,y,_,!0):(sn[Ue-W]=E+1,Ue>=fi?fi=Ue:Lt=!0,C(Ae,m[Ue],h,null,y,_,R,k,A),se++)}const ui=Lt?af(sn):Bt;for(Q=ui.length-1,E=Re-1;E>=0;E--){const Ae=W+E,Ue=m[Ae],di=Ae+1<j?m[Ae+1].el:v;sn[E]===0?C(null,Ue,h,di,y,_,R,k,A):Lt&&(Q<0||E!==ui[Q]?De(Ue,h,di,2):Q--)}}},De=(u,m,h,v,y=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){De(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===Ce){r(_,m,h);for(let N=0;N<A.length;N++)De(A[N],m,h,v);r(u.anchor,m,h);return}if(R===zr){L(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),_e(()=>k.enter(_),y);else{const{leave:N,delayLeave:z,afterLeave:U}=k,W=()=>r(_,m,h),ee=()=>{N(_,()=>{W(),U&&U()})};z?z(_,W,ee):ee()}else r(_,m,h)},xe=(u,m,h,v=!1,y=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:j,patchFlag:N,dirs:z}=u;if(k!=null&&sa(k,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const U=j&1&&z,W=!er(u);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&Be(ee,m,u),j&6)Fn(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}U&&xt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,y,O,v):E&&(_!==Ce||N>0&&N&64)?he(E,m,h,!1,!0):(_===Ce&&N&384||!y&&j&16)&&he(A,m,h),v&&Nt(u)}(W&&(ee=R&&R.onVnodeUnmounted)||U)&&_e(()=>{ee&&Be(ee,m,u),U&&xt(u,null,m,"unmounted")},h)},Nt=u=>{const{type:m,el:h,anchor:v,transition:y}=u;if(m===Ce){Mt(h,v);return}if(m===zr){S(u);return}const _=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:k}=y,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},Mt=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Fn=(u,m,h)=>{const{bum:v,scope:y,update:_,subTree:R,um:k}=u;v&&Zn(v),y.stop(),_&&(_.active=!1,xe(R,u,m,h)),k&&_e(k,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},he=(u,m,h,v=!1,y=!1,_=0)=>{for(let R=_;R<u.length;R++)xe(u[R],m,h,v,y)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),wi(),fs(),m._vnode=u},O={p:C,um:xe,m:De,r:Nt,mt:on,mc:ke,pc:V,pbc:Pe,n:b,o:e};let $,X;return t&&([$,X]=t(O)),{render:T,hydrate:$,createApp:Gc(T,$)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cs(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=ct(a[i]),l.el=o.el),n||Cs(o,l)),l.type===Or&&(l.el=o.el)}}function af(e){const t=e.slice(),n=[0];let r,a,i,o,l;const s=e.length;for(r=0;r<s;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<c?i=l+1:o=l;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const of=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),gn=[];let Ne=null;function pt(e=!1){gn.push(Ne=e?null:[])}function sf(){gn.pop(),Ne=gn[gn.length-1]||null}let An=1;function Ni(e){An+=e}function Ss(e){return e.dynamicChildren=An>0?Ne||Bt:null,sf(),An>0&&Ne&&Ne.push(e),e}function Xt(e,t,n,r,a,i){return Ss(Y(e,t,n,r,a,i,!0))}function Rs(e,t,n,r,a){return Ss(le(e,t,n,r,a,!0))}function la(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",Is=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||ve(e)||B(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Is(t),ref:t&&nr(t),scopeId:kr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Se};return l?(Wa(s,n),i&128&&e.normalize(s)):n&&(s.shapeFlag|=ce(n)?8:16),An>0&&!o&&Ne&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&Ne.push(s),s}const le=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Dc)&&(e=St),la(e)){const l=Gt(e,t,!0);return n&&Wa(l,n),An>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag|=-2,l}if(yf(e)&&(e=e.__vccOpts),t){t=cf(t);let{class:l,style:s}=t;l&&!ce(l)&&(t.class=yr(l)),ae(s)&&(ts(s)&&!D(s)&&(s=de({},s)),t.style=Ia(s))}const o=ce(e)?1:kc(e)?128:of(e)?64:ae(e)?4:B(e)?2:0;return Y(e,t,n,r,a,o,i,!0)}function cf(e){return e?ts(e)||Pr in e?de({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,l=t?ff(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Is(l),ref:t&&t.ref?n&&a?D(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Kt(e=" ",t=0){return le(Or,null,e,t)}function yp(e="",t=!1){return t?(pt(),Rs(St,null,e)):le(St,null,e)}function He(e){return e==null||typeof e=="boolean"?le(St):D(e)?le(Ce,null,e.slice()):typeof e=="object"?ct(e):le(Or,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Wa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function ff(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=yr([t.class,r.class]));else if(a==="style")t.style=Ia([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){Fe(e,t,7,[n,r])}const uf=_s();let df=0;function mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||uf,i={uid:df++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ks(r,a),emitsOptions:ds(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bc.bind(null,i),e.ce&&e.ce(i),i}let pe=null,Ya,Ft,Mi="__VUE_INSTANCE_SETTERS__";(Ft=Qr()[Mi])||(Ft=Qr()[Mi]=[]),Ft.push(e=>pe=e),Ya=e=>{Ft.length>1?Ft.forEach(t=>t(e)):Ft[0](e)};const Qt=e=>{Ya(e),e.scope.on()},Ct=()=>{pe&&pe.scope.off(),Ya(null)};function Ts(e){return e.vnode.shapeFlag&4}let On=!1;function pf(e,t=!1){On=t;const{props:n,children:r}=e.vnode,a=Ts(e);Qc(e,n,a,t),ef(e,r);const i=a?hf(e,t):void 0;return On=!1,i}function hf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ns(new Proxy(e.ctx,Hc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?vf(e):null;Qt(e),nn();const i=mt(r,e,0,[e.props,a]);if(rn(),Ct(),jo(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Li(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Li(e,i,t)}else Ns(e,t)}function Li(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=os(t)),Ns(e,n)}let Fi;function Ns(e,t,n){const r=e.type;if(!e.render){if(!t&&Fi&&!r.render){const a=r.template||Ba(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,c=de(de({isCustomElement:i,delimiters:l},o),s);r.render=Fi(a,c)}}e.render=r.render||Le}Qt(e),nn(),Wc(e),rn(),Ct()}function gf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}}))}function vf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return gf(e)},slots:e.slots,emit:e.emit,expose:t}}function Cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(os(ns(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}}))}function bf(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function yf(e){return B(e)&&"__vccOpts"in e}const me=(e,t)=>dc(e,t,On);function Ka(e,t,n){const r=arguments.length;return r===2?ae(t)&&!D(t)?la(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&la(n)&&(n=[n]),le(e,t,n))}const xf=Symbol.for("v-scx"),wf=()=>$e(xf),_f="3.3.4",Ef="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,$i=Et&&Et.createElement("template"),kf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(Ef,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{$i.innerHTML=r?`<svg>${e}</svg>`:e;const l=$i.content;if(r){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Af(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Of(e,t,n){const r=e.style,a=ce(n);if(n&&!a){if(t&&!ce(t))for(const i in t)n[i]==null&&ca(r,i,"");for(const i in n)ca(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ji=/\s*!important$/;function ca(e,t,n){if(D(n))n.forEach(r=>ca(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pf(e,t);ji.test(n)?e.setProperty(tn(r),n.replace(ji,""),"important"):e[r]=n}}const zi=["Webkit","Moz","ms"],Dr={};function Pf(e,t){const n=Dr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=br(r);for(let a=0;a<zi.length;a++){const i=zi[a]+r;if(i in e)return Dr[t]=i}return t}const Di="http://www.w3.org/1999/xlink";function Cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Di,t.slice(6,t.length)):e.setAttributeNS(Di,t,n);else{const i=Tl(t);n==null||i&&!Uo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Sf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Uo(n):n==null&&c==="string"?(n="",s=!0):c==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function $t(e,t,n,r){e.addEventListener(t,n,r)}function Rf(e,t,n,r){e.removeEventListener(t,n,r)}function If(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[l,s]=Tf(t);if(r){const c=i[t]=Lf(r,a);$t(e,l,c,s)}else o&&(Rf(e,l,o,s),i[t]=void 0)}}const Ui=/(?:Once|Passive|Capture)$/;function Tf(e){let t;if(Ui.test(e)){t={};let r;for(;r=e.match(Ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Ur=0;const Nf=Promise.resolve(),Mf=()=>Ur||(Nf.then(()=>Ur=0),Ur=Date.now());function Lf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Ff(r,n.value),t,5,[r])};return n.value=e,n.attached=Mf(),n}function Ff(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Bi=/^on[a-z]/,$f=(e,t,n,r,a=!1,i,o,l,s)=>{t==="class"?Af(e,r,a):t==="style"?Of(e,n,r):hr(t)?Pa(t)||If(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,a))?Sf(e,t,r,i,o,l,s):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cf(e,t,r,a))};function jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Bi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Bi.test(t)&&ce(n)?!1:t in e}const Hi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Zn(t,n):t};function zf(e){e.target.composing=!0}function Wi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Df={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Hi(a);const i=r||a.props&&a.props.type==="number";$t(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Gr(l)),e._assign(l)}),n&&$t(e,"change",()=>{e.value=e.value.trim()}),t||($t(e,"compositionstart",zf),$t(e,"compositionend",Wi),$t(e,"change",Wi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Hi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Gr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Uf={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):cn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),cn(e,!0),r.enter(e)):r.leave(e,()=>{cn(e,!1)}):cn(e,t))},beforeUnmount(e,{value:t}){cn(e,t)}};function cn(e,t){e.style.display=t?e._vod:"none"}const Bf=de({patchProp:$f},kf);let Yi;function Hf(){return Yi||(Yi=nf(Bf))}const Wf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Yf(e){return ce(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Kf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Br(e,t){const n={};for(const r in t){const a=t[r];n[r]=je(a)?a.map(e):e(a)}return n}const vn=()=>{},je=Array.isArray,qf=/\/$/,Vf=e=>e.replace(qf,"");function Hr(e,t,n="/"){let r,a={},i="",o="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Jf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Xf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ki(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&Ms(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ms(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Qf(e[n],t[n]))return!1;return!0}function Qf(e,t){return je(e)?qi(e,t):je(t)?qi(t,e):e===t}function qi(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function Zf(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vf(e)}const eu=/^[^#]+#/;function tu(e,t){return e.replace(eu,"#")+t}function nu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ru(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=nu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Vi(e,t){return(history.state?history.state.position-t:-1)+e}const fa=new Map;function au(e,t){fa.set(e,t)}function iu(e){const t=fa.get(e);return fa.delete(e),t}let ou=()=>location.protocol+"//"+location.host;function Ls(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let l=a.includes(e.slice(i))?e.slice(i).length:1,s=a.slice(l);return s[0]!=="/"&&(s="/"+s),Ki(s,"")}return Ki(n,e)+r+a}function su(e,t,n,r){let a=[],i=[],o=null;const l=({state:p})=>{const g=Ls(e,location),P=n.value,C=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}F=C?p.position-C.position:0}else r(g);a.forEach(x=>{x(n.value,P,{delta:F,type:Pn.pop,direction:F?F>0?bn.forward:bn.back:bn.unknown})})};function s(){o=n.value}function c(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:s,listen:c,destroy:d}}function Xi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function lu(e){const{history:t,location:n}=window,r={value:Ls(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,c,f){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:ou()+e+s;try{t[f?"replaceState":"pushState"](c,"",p),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(s,c){const f=G({},t.state,Xi(a.value.back,s,a.value.forward,!0),c,{position:a.value.position});i(s,f,!0),r.value=s}function l(s,c){const f=G({},a.value,t.state,{forward:s,scroll:Sr()});i(f.current,f,!0);const d=G({},Xi(r.value,s,null),{position:f.position+1},c);i(s,d,!1),r.value=s}return{location:r,state:a,push:l,replace:o}}function cu(e){e=Zf(e);const t=lu(e),n=su(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:tu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function fu(e){return typeof e=="string"||e&&typeof e=="object"}function Fs(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$s=Symbol("");var Gi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Gi||(Gi={}));function Zt(e,t){return G(new Error,{type:e,[$s]:!0},t)}function Xe(e,t){return e instanceof Error&&$s in e&&(t==null||!!(e.type&t))}const Qi="[^/]+?",uu={sensitive:!1,strict:!1,start:!0,end:!0},du=/[.+*?^${}()[\]/\\]/g;function mu(e,t){const n=G({},uu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(du,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:F,regexp:x}=p;i.push({name:P,repeatable:C,optional:F});const w=x||Qi;if(w!==Qi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let L=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=F&&c.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),a+=L,g+=20,F&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function l(c){const f=c.match(o),d={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function s(c){let f="",d=!1;for(const p of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:F}=g,x=P in c?c[P]:"";if(je(x)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=je(x)?x.join("/"):x;if(!w)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);f+=w}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:s}}function pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=pu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ji(r))return 1;if(Ji(a))return-1}return a.length-r.length}function Ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gu={type:0,value:""},vu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let l=0,s,c="",f="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(c&&d(),o()):s===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:s==="("?n=2:vu.test(s)?p():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+s:n=3:f+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function yu(e,t,n){const r=mu(bu(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function xu(e,t){const n=[],r=new Map;t=to({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,p){const g=!p,P=wu(f);P.aliasOf=p&&p.record;const C=to(t,f),F=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const S of L)F.push(G({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let x,w;for(const L of F){const{path:S}=L;if(d&&S[0]!=="/"){const H=d.record.path,Z=H[H.length-1]==="/"?"":"/";L.path=d.record.path+(S&&Z+S)}if(x=yu(L,d,C),p?p.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),g&&f.name&&!eo(x)&&o(f.name)),P.children){const H=P.children;for(let Z=0;Z<H.length;Z++)i(H[Z],x,p&&p.children[Z])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&s(x)}return w?()=>{o(w)}:vn}function o(f){if(Fs(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function s(f){let d=0;for(;d<n.length&&hu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!js(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!eo(f)&&r.set(f.record.name,f)}function c(f,d){let p,g={},P,C;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Zt(1,{location:f});C=p.record.name,g=G(Zi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),f.params&&Zi(f.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in f)P=f.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Zt(1,{location:f,currentLocation:d});C=p.record.name,g=G({},d.params,f.params),P=p.stringify(g)}const F=[];let x=p;for(;x;)F.unshift(x.record),x=x.parent;return{name:C,path:P,params:g,matched:F,meta:Eu(F)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:a}}function Zi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_u(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _u(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function to(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function js(e,t){return t.children.some(n=>n===e||js(e,n))}const zs=/#/g,ku=/&/g,Au=/\//g,Ou=/=/g,Pu=/\?/g,Ds=/\+/g,Cu=/%5B/g,Su=/%5D/g,Us=/%5E/g,Ru=/%60/g,Bs=/%7B/g,Iu=/%7C/g,Hs=/%7D/g,Tu=/%20/g;function qa(e){return encodeURI(""+e).replace(Iu,"|").replace(Cu,"[").replace(Su,"]")}function Nu(e){return qa(e).replace(Bs,"{").replace(Hs,"}").replace(Us,"^")}function ua(e){return qa(e).replace(Ds,"%2B").replace(Tu,"+").replace(zs,"%23").replace(ku,"%26").replace(Ru,"`").replace(Bs,"{").replace(Hs,"}").replace(Us,"^")}function Mu(e){return ua(e).replace(Ou,"%3D")}function Lu(e){return qa(e).replace(zs,"%23").replace(Pu,"%3F")}function Fu(e){return e==null?"":Lu(e).replace(Au,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function $u(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ds," "),o=i.indexOf("="),l=fr(o<0?i:i.slice(0,o)),s=o<0?null:fr(i.slice(o+1));if(l in t){let c=t[l];je(c)||(c=t[l]=[c]),c.push(s)}else t[l]=s}return t}function no(e){let t="";for(let n in e){const r=e[n];if(n=Mu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&ua(i)):[r&&ua(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ju(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const zu=Symbol(""),ro=Symbol(""),Rr=Symbol(""),Va=Symbol(""),da=Symbol("");function fn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const s=d=>{d===!1?l(Zt(4,{from:n,to:t})):d instanceof Error?l(d):fu(d)?l(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,s);let f=Promise.resolve(c);e.length<3&&(f=f.then(s)),f.catch(d=>l(d))})}function Wr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let l=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Du(l)){const c=(l.__vccOpts||l)[t];c&&a.push(ft(c,n,r,i,o))}else{let s=l();a.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Kf(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[t];return p&&ft(p,n,r,i,o)()}))}}return a}function Du(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ao(e){const t=$e(Rr),n=$e(Va),r=me(()=>t.resolve(Ke(e.to))),a=me(()=>{const{matched:s}=r.value,{length:c}=s,f=s[c-1],d=n.matched;if(!f||!d.length)return-1;const p=d.findIndex(Jt.bind(null,f));if(p>-1)return p;const g=io(s[c-2]);return c>1&&io(f)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,s[c-2])):p}),i=me(()=>a.value>-1&&Wu(n.params,r.value.params)),o=me(()=>a.value>-1&&a.value===n.matched.length-1&&Ms(n.params,r.value.params));function l(s={}){return Hu(s)?t[Ke(e.replace)?"replace":"push"](Ke(e.to)).catch(vn):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const Uu=Ua({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(e,{slots:t}){const n=wr(ao(e)),{options:r}=$e(Rr),a=me(()=>({[oo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ka("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Bu=Uu;function Hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!je(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function io(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const oo=(e,t,n)=>e??t??n,Yu=Ua({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(da),a=me(()=>e.route||r.value),i=$e(ro,0),o=me(()=>{let c=Ke(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),l=me(()=>a.value.matched[o.value]);tr(ro,me(()=>o.value+1)),tr(zu,l),tr(da,a);const s=dt();return pn(()=>[s.value,l.value,e.name],([c,f,d],[p,g,P])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Jt(f,g)||!p)&&(f.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,d=l.value,p=d&&d.components[f];if(!p)return so(n.default,{Component:p,route:c});const g=d.props[f],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,F=Ka(p,G({},P,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[f]=null)},ref:s}));return so(n.default,{Component:F,route:c})||F}}});function so(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ws=Yu;function Ku(e){const t=xu(e.routes,e),n=e.parseQuery||$u,r=e.stringifyQuery||no,a=e.history,i=fn(),o=fn(),l=fn(),s=lc(st);let c=st;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Br.bind(null,b=>""+b),d=Br.bind(null,Fu),p=Br.bind(null,fr);function g(b,T){let O,$;return Fs(b)?(O=t.getRecordMatcher(b),$=T):$=b,t.addRoute($,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=G({},T||s.value),typeof b=="string"){const h=Hr(n,b,T.path),v=t.resolve({path:h.path},T),y=a.createHref(h.fullPath);return G(h,v,{params:p(v.params),hash:fr(h.hash),redirectedFrom:void 0,href:y})}let O;if("path"in b)O=G({},b,{path:Hr(n,b.path,T.path).path});else{const h=G({},b.params);for(const v in h)h[v]==null&&delete h[v];O=G({},b,{params:d(h)}),T.params=d(T.params)}const $=t.resolve(O,T),X=b.hash||"";$.params=f(p($.params));const u=Xf(r,G({},b,{hash:Nu(X),path:$.path})),m=a.createHref(u);return G({fullPath:u,hash:X,query:r===no?ju(b.query):b.query||{}},$,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?Hr(n,b,s.value.path):G({},b)}function L(b,T){if(c!==b)return Zt(8,{from:T,to:b})}function S(b){return ie(b)}function H(b){return S(G(w(b),{replace:!0}))}function Z(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let $=typeof O=="function"?O(b):O;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=w($):{path:$},$.params={}),G({query:b.query,hash:b.hash,params:"path"in $?{}:b.params},$)}}function ie(b,T){const O=c=x(b),$=s.value,X=b.state,u=b.force,m=b.replace===!0,h=Z(O);if(h)return ie(G(w(h),{state:typeof h=="object"?G({},X,h.state):X,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let y;return!u&&Gf(r,$,O)&&(y=Zt(16,{to:v,from:$}),De($,$,!0,!1)),(y?Promise.resolve(y):Pe(v,$)).catch(_=>Xe(_)?Xe(_,2)?_:it(_):V(_,v,$)).then(_=>{if(_){if(Xe(_,2))return ie(G({replace:m},w(_.to),{state:typeof _.to=="object"?G({},X,_.to.state):X,force:u}),T||v)}else _=yt(v,$,!0,m,X);return at(v,$,_),_})}function ke(b,T){const O=L(b,T);return O?Promise.reject(O):Promise.resolve()}function be(b){const T=Mt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Pe(b,T){let O;const[$,X,u]=qu(b,T);O=Wr($.reverse(),"beforeRouteLeave",b,T);for(const h of $)h.leaveGuards.forEach(v=>{O.push(ft(v,b,T))});const m=ke.bind(null,b,T);return O.push(m),he(O).then(()=>{O=[];for(const h of i.list())O.push(ft(h,b,T));return O.push(m),he(O)}).then(()=>{O=Wr(X,"beforeRouteUpdate",b,T);for(const h of X)h.updateGuards.forEach(v=>{O.push(ft(v,b,T))});return O.push(m),he(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(je(h.beforeEnter))for(const v of h.beforeEnter)O.push(ft(v,b,T));else O.push(ft(h.beforeEnter,b,T));return O.push(m),he(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Wr(u,"beforeRouteEnter",b,T),O.push(m),he(O))).then(()=>{O=[];for(const h of o.list())O.push(ft(h,b,T));return O.push(m),he(O)}).catch(h=>Xe(h,8)?h:Promise.reject(h))}function at(b,T,O){l.list().forEach($=>be(()=>$(b,T,O)))}function yt(b,T,O,$,X){const u=L(b,T);if(u)return u;const m=T===st,h=jt?history.state:{};O&&($||m?a.replace(b.fullPath,G({scroll:m&&h&&h.scroll},X)):a.push(b.fullPath,X)),s.value=b,De(b,T,O,m),it()}let ze;function on(){ze||(ze=a.listen((b,T,O)=>{if(!Fn.listening)return;const $=x(b),X=Z($);if(X){ie(G(X,{replace:!0}),$).catch(vn);return}c=$;const u=s.value;jt&&au(Vi(u.fullPath,O.delta),Sr()),Pe($,u).catch(m=>Xe(m,12)?m:Xe(m,2)?(ie(m.to,$).then(h=>{Xe(h,20)&&!O.delta&&O.type===Pn.pop&&a.go(-1,!1)}).catch(vn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),V(m,$,u))).then(m=>{m=m||yt($,u,!1),m&&(O.delta&&!Xe(m,8)?a.go(-O.delta,!1):O.type===Pn.pop&&Xe(m,20)&&a.go(-1,!1)),at($,u,m)}).catch(vn)}))}let Tt=fn(),ue=fn(),J;function V(b,T,O){it(b);const $=ue.list();return $.length?$.forEach(X=>X(b,T,O)):console.error(b),Promise.reject(b)}function Ve(){return J&&s.value!==st?Promise.resolve():new Promise((b,T)=>{Tt.add([b,T])})}function it(b){return J||(J=!b,on(),Tt.list().forEach(([T,O])=>b?O(b):T()),Tt.reset()),b}function De(b,T,O,$){const{scrollBehavior:X}=e;if(!jt||!X)return Promise.resolve();const u=!O&&iu(Vi(b.fullPath,0))||($||!O)&&history.state&&history.state.scroll||null;return ls().then(()=>X(b,T,u)).then(m=>m&&ru(m)).catch(m=>V(m,b,T))}const xe=b=>a.go(b);let Nt;const Mt=new Set,Fn={currentRoute:s,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:C,resolve:x,options:e,push:S,replace:H,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ue.add,isReady:Ve,install(b){const T=this;b.component("RouterLink",Bu),b.component("RouterView",Ws),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(s)}),jt&&!Nt&&s.value===st&&(Nt=!0,S(a.location).catch(X=>{}));const O={};for(const X in st)Object.defineProperty(O,X,{get:()=>s.value[X],enumerable:!0});b.provide(Rr,T),b.provide(Va,Zo(O)),b.provide(da,s);const $=b.unmount;Mt.add(b),b.unmount=function(){Mt.delete(b),Mt.size<1&&(c=st,ze&&ze(),ze=null,s.value=st,Nt=!1,J=!1),$()}}};function he(b){return b.reduce((T,O)=>T.then(()=>be(O)),Promise.resolve())}return Fn}function qu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(c=>Jt(c,l))?r.push(l):n.push(l));const s=e.matched[o];s&&(t.matched.find(c=>Jt(c,s))||a.push(s))}return[n,r,a]}function Vu(){return $e(Rr)}function xp(){return $e(Va)}const Ir=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Xu=e=>(ms("data-v-92ffbca1"),e=e(),ps(),e),Gu={class:"shadow"},Qu={class:"container"},Ju=Xu(()=>Y("h1",null,"Where in the world?",-1)),Zu={__name:"Navbar",setup(e){const t=dt(!1),n=dt("Light Mode"),r=dt("fa-regular fa-sun"),a=()=>{t.value=!t.value,n.value=t.value?"Dark Mode":"Light Mode",r.value=t.value?"fa-solid fa-moon":"fa-regular fa-sun",t.value?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")};return(i,o)=>{const l=zc("font-awesome-icon");return pt(),Xt("header",null,[Y("nav",Gu,[Y("div",Qu,[Ju,Y("div",{class:"mode",onClick:a},[le(l,{icon:r.value},null,8,["icon"]),Kt(" "+zt(n.value),1)])])])])}}},ed=Ir(Zu,[["__scopeId","data-v-92ffbca1"]]),td={__name:"App",setup(e){return(t,n)=>(pt(),Xt(Ce,null,[le(ed),le(Ke(Ws))],64))}},nd="modulepreload",rd=function(e){return"/"+e},lo={},ad=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=rd(i),i in lo)return;lo[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let f=a.length-1;f>=0;f--){const d=a[f];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":nd,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const Xa=e=>(ms("data-v-5af9c8dc"),e=e(),ps(),e),id={class:"flag"},od=["src","alt"],sd={class:"overview"},ld=Xa(()=>Y("span",null,"Population: ",-1)),cd=Xa(()=>Y("span",null,"Region: ",-1)),fd=Xa(()=>Y("span",null,"Capital: ",-1)),ud={__name:"Card",props:["country"],setup(e){const t=Vu();return(n,r)=>(pt(),Xt("div",{class:"card",onClick:r[0]||(r[0]=a=>Ke(t).push(`/details/${e.country.cca3}`))},[Y("div",id,[Y("img",{src:e.country.flags.svg,alt:e.country.flags.alt},null,8,od)]),Y("div",sd,[Y("h3",null,zt(e.country.name.common),1),Y("p",null,[ld,Kt(zt(e.country.population.toLocaleString("en-US")),1)]),Y("p",null,[cd,Kt(zt(e.country.region),1)]),Y("p",null,[fd,Kt(zt(e.country.capital?e.country.capital[0]:"Unnown"),1)])])]))}},dd=Ir(ud,[["__scopeId","data-v-5af9c8dc"]]);function co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?co(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):co(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function md(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pd(e,t,n){return t&&fo(e.prototype,t),n&&fo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ga(e,t){return gd(e)||bd(e,t)||Ys(e,t)||xd()}function Nn(e){return hd(e)||vd(e)||Ys(e)||yd()}function hd(e){if(Array.isArray(e))return ma(e)}function gd(e){if(Array.isArray(e))return e}function vd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Ys(e,t){if(e){if(typeof e=="string")return ma(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ma(e,t)}}function ma(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var uo=function(){},Qa={},Ks={},qs=null,Vs={mark:uo,measure:uo};try{typeof window<"u"&&(Qa=window),typeof document<"u"&&(Ks=document),typeof MutationObserver<"u"&&(qs=MutationObserver),typeof performance<"u"&&(Vs=performance)}catch{}var wd=Qa.navigator||{},mo=wd.userAgent,po=mo===void 0?"":mo,gt=Qa,re=Ks,ho=qs,Hn=Vs;gt.document;var rt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Xs=~po.indexOf("MSIE")||~po.indexOf("Trident/"),Wn,Yn,Kn,qn,Vn,Ze="___FONT_AWESOME___",pa=16,Gs="fa",Qs="svg-inline--fa",Rt="data-fa-i2svg",ha="data-fa-pseudo-element",_d="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",go="fontawesome-i2svg",Ed="async",kd=["HTML","HEAD","STYLE","SCRIPT"],Js=function(){try{return!0}catch{return!1}}(),ne="classic",oe="sharp",ei=[ne,oe];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var Cn=Mn((Wn={},fe(Wn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(Wn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Wn)),Sn=Mn((Yn={},fe(Yn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Yn,oe,{solid:"fass",regular:"fasr",light:"fasl"}),Yn)),Rn=Mn((Kn={},fe(Kn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Kn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Kn)),Ad=Mn((qn={},fe(qn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(qn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qn)),Od=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Zs="fa-layers-text",Pd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Cd=Mn((Vn={},fe(Vn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Vn,oe,{900:"fass",400:"fasr",300:"fasl"}),Vn)),el=[1,2,3,4,5,6,7,8,9,10],Sd=el.concat([11,12,13,14,15,16,17,18,19,20]),Rd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Sn[ne]).map(In.add.bind(In));Object.keys(Sn[oe]).map(In.add.bind(In));var Id=[].concat(ei,Nn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(el.map(function(e){return"".concat(e,"x")})).concat(Sd.map(function(e){return"w-".concat(e)})),yn=gt.FontAwesomeConfig||{};function Td(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Nd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Md=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Md.forEach(function(e){var t=Ga(e,2),n=t[0],r=t[1],a=Nd(Td(n));a!=null&&(yn[r]=a)})}var tl={styleDefault:"solid",familyDefault:"classic",cssPrefix:Gs,replacementClass:Qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yn.familyPrefix&&(yn.cssPrefix=yn.familyPrefix);var en=I(I({},tl),yn);en.autoReplaceSvg||(en.observeMutations=!1);var M={};Object.keys(tl).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){en[e]=n,xn.forEach(function(r){return r(M)})},get:function(){return en[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,xn.forEach(function(n){return n(M)})},get:function(){return en.cssPrefix}});gt.FontAwesomeConfig=M;var xn=[];function Ld(e){return xn.push(e),function(){xn.splice(xn.indexOf(e),1)}}var lt=pa,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fd(e){if(!(!e||!rt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var $d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tn(){for(var e=12,t="";e-- >0;)t+=$d[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ti(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function nl(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(nl(e[n]),'" ')},"").trim()}function Tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ni(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function zd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:c}}function Dd(e){var t=e.transform,n=e.width,r=n===void 0?pa:n,a=e.height,i=a===void 0?pa:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Xs?s+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):s+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),s+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ud=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rl(){var e=Gs,t=Qs,n=M.cssPrefix,r=M.replacementClass,a=Ud;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var vo=!1;function Yr(){M.autoAddCss&&!vo&&(Fd(rl()),vo=!0)}var Bd={mixout:function(){return{dom:{css:rl,insertCss:Yr}}},hooks:function(){return{beforeDOMElementCreation:function(){Yr()},beforeI2svg:function(){Yr()}}}},et=gt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Me=et[Ze],al=[],Hd=function e(){re.removeEventListener("DOMContentLoaded",e),dr=1,al.map(function(t){return t()})},dr=!1;rt&&(dr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),dr||re.addEventListener("DOMContentLoaded",Hd));function Wd(e){rt&&(dr?setTimeout(e,0):al.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?nl(e):"<".concat(t," ").concat(jd(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function bo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Yd(n,a):n,s,c,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)c=i[s],f=l(f,t[c],c,t);return f};function Kd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ga(e){var t=Kd(e);return t.length===1?t[0].toString(16):null}function qd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function va(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yo(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,yo(t)):Me.styles[e]=I(I({},Me.styles[e]||{}),i),e==="fas"&&va("fa",t)}var Xn,Gn,Qn,Dt=Me.styles,Vd=Me.shims,Xd=(Xn={},fe(Xn,ne,Object.values(Rn[ne])),fe(Xn,oe,Object.values(Rn[oe])),Xn),ri=null,il={},ol={},sl={},ll={},cl={},Gd=(Gn={},fe(Gn,ne,Object.keys(Cn[ne])),fe(Gn,oe,Object.keys(Cn[oe])),Gn);function Qd(e){return~Id.indexOf(e)}function Jd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qd(a)?a:null}var fl=function(){var t=function(i){return Kr(Dt,function(o,l,s){return o[s]=Kr(l,i,{}),o},{})};il=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),ol=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),cl=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Kr(Vd,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});sl=r.names,ll=r.unicodes,ri=Nr(M.styleDefault,{family:M.familyDefault})};Ld(function(e){ri=Nr(e.styleDefault,{family:M.familyDefault})});fl();function ai(e,t){return(il[e]||{})[t]}function Zd(e,t){return(ol[e]||{})[t]}function Ot(e,t){return(cl[e]||{})[t]}function ul(e){return sl[e]||{prefix:null,iconName:null}}function em(e){var t=ll[e],n=ai("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return ri}var ii=function(){return{prefix:null,iconName:null,rest:[]}};function Nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=Cn[r][e],i=Sn[r][e]||Sn[r][a],o=e in Me.styles?e:null;return i||o||null}var xo=(Qn={},fe(Qn,ne,Object.keys(Rn[ne])),fe(Qn,oe,Object.keys(Rn[oe])),Qn);function Mr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),fe(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,l=ne;(e.includes(i[ne])||e.some(function(c){return xo[ne].includes(c)}))&&(l=ne),(e.includes(i[oe])||e.some(function(c){return xo[oe].includes(c)}))&&(l=oe);var s=e.reduce(function(c,f){var d=Jd(M.cssPrefix,f);if(Dt[f]?(f=Xd[l].includes(f)?Ad[l][f]:f,o=f,c.prefix=f):Gd[l].indexOf(f)>-1?(o=f,c.prefix=Nr(f,{family:l})):d?c.iconName=d:f!==M.replacementClass&&f!==i[ne]&&f!==i[oe]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var p=o==="fa"?ul(c.iconName):{},g=Ot(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},ii());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===oe&&(Dt.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Ot(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=vt()||"fas"),s}var tm=function(){function e(){md(this,e),this.definitions={}}return pd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),o[l]),va(l,o[l]);var s=Rn[ne][l];s&&va(s,o[l]),fl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,c=o.icon,f=c[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=c)}),n[l][s]=c}),n}}]),e}(),wo=[],Ut={},qt={},nm=Object.keys(qt);function rm(e,t){var n=t.mixoutsTo;return wo=e,Ut={},Object.keys(qt).forEach(function(r){nm.indexOf(r)===-1&&delete qt[r]}),wo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ur(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ut[o]||(Ut[o]=[]),Ut[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function ba(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function ya(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=Ot(n,t)||t,bo(dl.definitions,n,t)||bo(Me.styles,n,t)}var dl=new tm,am=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},im={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(It("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Wd(function(){sm({autoReplaceSvgRoot:n}),It("watch",t)})}},om={icon:function(t){if(t===null)return null;if(ur(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Nr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Od))){var a=Mr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Oe={noAuto:am,config:M,dom:im,parse:om,library:dl,findIconDefinition:ya,toHtml:Ln},sm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function lm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ni(o)&&n.found&&!r.found){var l=n.width,s=n.height,c={x:l/s/2,y:.5};a.style=Tr(I(I({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function cm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function oi(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,c=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,F=P.height,x=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),L={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},S=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[Rt]=""),s&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(f||Tn())},children:[s]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:I(I({},S),d.styles)}),Z=r.found&&n.found?tt("generateAbstractMask",H)||{children:[],attributes:{}}:tt("generateAbstractIcon",H)||{children:[],attributes:{}},ie=Z.children,ke=Z.attributes;return H.children=ie,H.attributes=ke,l?cm(H):lm(H)}function _o(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,c=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[Rt]="");var f=I({},o.styles);ni(a)&&(f.transform=Dd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Tr(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function fm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qr=Me.styles;function xa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var um={found:!1,width:512,height:512};function dm(e,t){!Js&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wa(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=ul(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&qr[t]&&qr[t][e]){var o=qr[t][e];return r(xa(o))}dm(e,t),r(I(I({},um),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var Eo=function(){},_a=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:Eo,measure:Eo},mn='FA "6.4.2"',mm=function(t){return _a.mark("".concat(mn," ").concat(t," begins")),function(){return ml(t)}},ml=function(t){_a.mark("".concat(mn," ").concat(t," ends")),_a.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},si={begin:mm,end:ml},rr=function(){};function ko(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function pm(e){var t=e.getAttribute?e.getAttribute(Ja):null,n=e.getAttribute?e.getAttribute(Za):null;return t&&n}function hm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function gm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function vm(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function bm(e){return re.createElement(e)}function pl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?vm:bm:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(pl(o,{ceFn:r}))}),a}function ym(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(pl(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=re.createComment(ym(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ti(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Ln(l)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function Ao(e){e()}function hl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=Ao;M.mutateApproach===Ed&&(r=gt.requestAnimationFrame||Ao),r(function(){var a=gm(),i=si.begin("mutate");e.map(a),i(),n()})}}var li=!1;function gl(){li=!0}function Ea(){li=!1}var mr=null;function Oo(e){if(ho&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,l=e.observeMutationsRoot,s=l===void 0?re:l;mr=new ho(function(c){if(!li){var f=vt();an(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ko(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ko(d.target)&&~Rd.indexOf(d.attributeName))if(d.attributeName==="class"&&pm(d.target)){var p=Mr(ti(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Ja,g||f),P&&d.target.setAttribute(Za,P)}else hm(d.target)&&a(d.target)})}}),rt&&mr.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xm(){mr&&mr.disconnect()}function wm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function _m(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Mr(ti(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Zd(a.prefix,e.innerText)||ai(a.prefix,ga(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Em(e){var t=an(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function km(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_m(e),r=n.iconName,a=n.prefix,i=n.rest,o=Em(e),l=ba("parseNodeAttributes",{},e),s=t.styleParser?wm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Am=Me.styles;function vl(e){var t=M.autoReplaceSvg==="nest"?Po(e,{styleParser:!1}):Po(e);return~t.extra.classes.indexOf(Zs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var bt=new Set;ei.map(function(e){bt.add("fa-".concat(e))});Object.keys(Cn[ne]).map(bt.add.bind(bt));Object.keys(Cn[oe]).map(bt.add.bind(bt));bt=Nn(bt);function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(go,"-").concat(d))},a=function(d){return n.remove("".concat(go,"-").concat(d))},i=M.autoFetchSvg?bt:ei.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Am));i.includes("fa")||i.push("fa");var o=[".".concat(Zs,":not([").concat(Rt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=an(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=si.begin("onTree"),c=l.reduce(function(f,d){try{var p=vl(d);p&&f.push(p)}catch(g){Js||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(p){hl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(p){s(),d(p)})})}function Om(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vl(e).then(function(n){n&&hl([n],t)})}function Pm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ya(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ya(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Cm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,c=n.maskId,f=c===void 0?null:c,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,x=n.attributes,w=x===void 0?{}:x,L=n.styles,S=L===void 0?{}:L;if(t){var H=t.prefix,Z=t.iconName,ie=t.icon;return Lr(I({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Tn()):(w["aria-hidden"]="true",w.focusable="false")),oi({icons:{main:xa(ie),mask:s?xa(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:Z,transform:I(I({},Ye),a),symbol:o,title:p,maskId:f,titleId:P,extra:{attributes:w,styles:S,classes:F}})})}},Sm={mixout:function(){return{icon:Pm(Cm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Co,n.nodeCallback=Om,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return Co(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,c=r.symbol,f=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([wa(a,l),f.iconName?wa(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=Ga(C,2),x=F[0],w=F[1];g([n,oi({icons:{main:x,mask:w},prefix:l,iconName:a,transform:s,symbol:c,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Tr(l);s.length>0&&(a.style=s);var c;return ni(o)&&(c=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Rm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Lr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},Im={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,c=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Lr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),fm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Nn(l))}})})}}}},Tm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,l=o===void 0?null:o,s=r.classes,c=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return Lr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),_o({content:n,transform:I(I({},Ye),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Xs){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/c,s=f.height/c}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_o({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},Nm=new RegExp('"',"ug"),So=[1105920,1112319];function Mm(e){var t=e.replace(Nm,""),n=qd(t,0),r=n>=So[0]&&n<=So[1],a=t.length===2?t[0]===t[1]:!1;return{value:ga(a?t[0]:t),isSecondary:r||a}}function Ro(e,t){var n="".concat(_d).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=an(e.children),o=i.filter(function(ie){return ie.getAttribute(ha)===t})[0],l=gt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Pd),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?oe:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Sn[p][s[2].toLowerCase()]:Cd[p][c],P=Mm(d),C=P.value,F=P.isSecondary,x=s[0].startsWith("FontAwesome"),w=ai(g,C),L=w;if(x){var S=em(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!F&&(!o||o.getAttribute(Ja)!==g||o.getAttribute(Za)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=km(),Z=H.extra;Z.attributes[ha]=t,wa(w,g).then(function(ie){var ke=oi(I(I({},H),{},{icons:{main:ie,mask:ii()},prefix:g,iconName:L,extra:Z,watchable:!0})),be=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ke.map(function(Pe){return Ln(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Lm(e){return Promise.all([Ro(e,"::before"),Ro(e,"::after")])}function Fm(e){return e.parentNode!==document.head&&!~kd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ha)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Io(e){if(rt)return new Promise(function(t,n){var r=an(e.querySelectorAll("*")).filter(Fm).map(Lm),a=si.begin("searchPseudoElements");gl(),Promise.all(r).then(function(){a(),Ea(),t()}).catch(function(){a(),Ea(),n()})})}var $m={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Io,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&Io(a)}}},To=!1,jm={mixout:function(){return{dom:{unwatch:function(){gl(),To=!0}}}},hooks:function(){return{bootstrap:function(){Oo(ba("mutationObserverCallbacks",{}))},noAuto:function(){xm()},watch:function(n){var r=n.observeMutationsRoot;To?Ea():Oo(ba("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},No=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},zm={mixout:function(){return{parse:{transform:function(n){return No(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=No(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Vr={x:0,y:0,width:"100%",height:"100%"};function Mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Dm(e){return e.tag==="g"?e.children:[e]}var Um={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Mr(a.split(" ").map(function(o){return o.trim()})):ii();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,c=i.width,f=i.icon,d=o.width,p=o.icon,g=zd({transform:s,containerWidth:d,iconWidth:c}),P={tag:"rect",attributes:I(I({},Vr),{},{fill:"white"})},C=f.children?{children:f.children.map(Mo)}:{},F={tag:"g",attributes:I({},g.inner),children:[Mo(I({tag:f.tag,attributes:I(I({},f.attributes),g.path)},C))]},x={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(l||Tn()),L="clip-".concat(l||Tn()),S={tag:"mask",attributes:I(I({},Vr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Dm(p)},S]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},Vr)}),{children:r,attributes:a}}}},Bm={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Hm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Wm=[Bd,Sm,Rm,Im,Tm,$m,jm,zm,Um,Bm,Hm];rm(Wm,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Ym=Oe.library;Oe.dom;var ka=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Km=Oe.icon;Oe.layer;Oe.text;Oe.counter;function Lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Vm(e,t){if(e==null)return{};var n=qm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bl={exports:{}};(function(e){(function(t){var n=function(x,w,L){if(!c(w)||d(w)||p(w)||g(w)||s(w))return w;var S,H=0,Z=0;if(f(w))for(S=[],Z=w.length;H<Z;H++)S.push(n(x,w[H],L));else{S={};for(var ie in w)Object.prototype.hasOwnProperty.call(w,ie)&&(S[x(ie,L)]=n(x,w[ie],L))}return S},r=function(x,w){w=w||{};var L=w.separator||"_",S=w.split||/(?=[A-Z])/;return x.split(S).join(L)},a=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var w=a(x);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(x,w){return r(x,w).toLowerCase()},l=Object.prototype.toString,s=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},d=function(x){return l.call(x)=="[object Date]"},p=function(x){return l.call(x)=="[object RegExp]"},g=function(x){return l.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},C=function(x,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?x:function(S,H){return L(S,x,H)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,w){return n(C(a,w),x)},decamelizeKeys:function(x,w){return n(C(o,w),x,w)},pascalizeKeys:function(x,w){return n(C(i,w),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Xm)})(bl);var Gm=bl.exports,Qm=["class","style"];function Jm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Gm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Zm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(s){return yl(s)}),a=Object.keys(e.attributes||{}).reduce(function(s,c){var f=e.attributes[c];switch(c){case"class":s.class=Zm(f);break;case"style":s.style=Jm(f);break;default:s.attrs[c]=f}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=Vm(n,Qm);return Ka(e.tag,Qe(Qe(Qe({},t),{},{class:a.class,style:Qe(Qe({},a.style),o)},a.attrs),l),r)}var xl=!1;try{xl=!0}catch{}function ep(){if(!xl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function tp(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fo(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ka.icon)return ka.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Aa=Ua({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return Fo(t.icon)}),i=me(function(){return Xr("classes",tp(t))}),o=me(function(){return Xr("transform",typeof t.transform=="string"?ka.transform(t.transform):t.transform)}),l=me(function(){return Xr("mask",Fo(t.mask))}),s=me(function(){return Km(a.value,Qe(Qe(Qe(Qe({},i.value),o.value),l.value),{},{symbol:t.symbol,title:t.title}))});pn(s,function(f){if(!f)return ep("Could not find one or more icon(s)",a.value,l.value)},{immediate:!0});var c=me(function(){return s.value?yl(s.value.abstract[0],{},r):null});return function(){return c.value}}});const np={class:"search-nav"},rp={class:"container"},ap={class:"dropdown shadow"},ip={class:"default-option"},op={__name:"Search",emits:["filterSearch"],setup(e,{emit:t}){const n=dt(!1),r=dt(""),a=dt("Filter by Region"),i=()=>{document.querySelector("input").focus()},o=(l,s)=>{t("filterSearch",l,s=="Filter by Region"?"All":s)};return(l,s)=>(pt(),Xt("div",np,[Y("div",rp,[Y("div",{class:"input shadow",onClick:i},[Y("span",null,[le(Ke(Aa),{icon:"fa-solid fa-magnifying-glass"})]),Ei(Y("input",{type:"text",name:"input-field",id:"input-field",placeholder:"Search for a country...","onUpdate:modelValue":s[0]||(s[0]=c=>r.value=c),onInput:s[1]||(s[1]=c=>{o("Name",r.value),a.value="Filter by Region"}),onFocus:s[2]||(s[2]=c=>n.value=!1)},null,544),[[Df,r.value,void 0,{trim:!0}]])]),Y("div",ap,[Y("ul",{class:"selection",onClick:s[9]||(s[9]=c=>n.value=!n.value),onFocusout:s[10]||(s[10]=c=>n.value=!1)},[Y("li",ip,[Kt(zt(a.value)+" ",1),Y("span",null,[le(Ke(Aa),{icon:n.value?"fa-solid fa-angle-up":"fa-solid fa-angle-down"},null,8,["icon"])])]),Y("ul",{class:yr(["options shadow",n.value?"show":""])},[Ei(Y("li",{class:"option",onClick:s[3]||(s[3]=c=>{a.value="Filter by Region",o("Region",a.value)})},"All",512),[[Uf,a.value!="Filter by Region"]]),Y("li",{class:"option",onClick:s[4]||(s[4]=c=>{a.value="Africa",o("Region",a.value)})},"Africa"),Y("li",{class:"option",onClick:s[5]||(s[5]=c=>{a.value="America",o("Region",a.value)})},"America"),Y("li",{class:"option",onClick:s[6]||(s[6]=c=>{a.value="Asia",o("Region",a.value)})},"Asia"),Y("li",{class:"option",onClick:s[7]||(s[7]=c=>{a.value="Europe",o("Region",a.value)})},"Europe"),Y("li",{class:"option",onClick:s[8]||(s[8]=c=>{a.value="Oceania",o("Region",a.value)})},"Oceania")],2)],32)])])]))}},sp=Ir(op,[["__scopeId","data-v-0f6636d0"]]);const lp={class:"contents"},cp={class:"container"},fp={__name:"HomeView",setup(e){const t=(a,i,o=!0)=>a.sort((l,s)=>{let c=l[i],f=s[i];return o?c<f?-1:c>f?1:0:c>f?-1:c<f?1:0}),n=dt(null),r=(a=null,i="All")=>{let o="https://restcountries.com/v3.1/";i==""&&(i="All"),i=="All"?o=o+"all":a=="Region"?o=o+"region/"+i:o=o+"name/"+i,fetch(o).then(l=>l.json()).then(l=>n.value=t(l,"cca3"))};return r(),(a,i)=>(pt(),Xt(Ce,null,[le(sp,{onFilterSearch:r}),Y("main",lp,[Y("div",cp,[(pt(!0),Xt(Ce,null,Bc(n.value,o=>(pt(),Rs(dd,{key:o.cca3,country:o},null,8,["country"]))),128))])])],64))}},up=Ir(fp,[["__scopeId","data-v-53198959"]]),dp=Ku({history:cu("/"),routes:[{path:"/",name:"home",component:up},{path:"/home",redirect:"/"},{path:"/details/:id",name:"details",component:()=>ad(()=>import("./DetailsView-a10f253a.js"),["assets/DetailsView-a10f253a.js","assets/DetailsView-27baeef6.css"])}]});var mp={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},pp={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},hp={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},gp={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},vp={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},bp={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]};Ym.add(mp,hp,bp,vp,pp,gp);const ci=Wf(td);ci.use(dp);ci.component("font-awesome-icon",Aa);ci.mount("#app");export{Ce as F,Ir as _,Vu as a,Y as b,Xt as c,Ke as d,le as e,Kt as f,Bc as g,Aa as h,yp as i,ps as j,pt as o,ms as p,dt as r,zt as t,xp as u};
