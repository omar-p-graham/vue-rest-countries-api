(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ka(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const te={},Bt=[],Le=()=>{},vl=()=>!1,bl=/^on[^a-z]/,hr=e=>bl.test(e),Aa=e=>e.startsWith("onUpdate:"),de=Object.assign,Oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yl=Object.prototype.hasOwnProperty,K=(e,t)=>yl.call(e,t),D=Array.isArray,Ht=e=>gr(e)==="[object Map]",Mo=e=>gr(e)==="[object Set]",B=e=>typeof e=="function",fe=e=>typeof e=="string",Pa=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Lo=e=>ae(e)&&B(e.then)&&B(e.catch),Fo=Object.prototype.toString,gr=e=>Fo.call(e),xl=e=>gr(e).slice(8,-1),$o=e=>gr(e)==="[object Object]",Ca=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wl=/-(\w)/g,qe=vr(e=>e.replace(wl,(t,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,tn=vr(e=>e.replace(_l,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=vr(e=>e?`on${br(e)}`:""),wn=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ci;const Xr=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sa(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=fe(r)?Ol(r):Sa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(fe(e))return e;if(ae(e))return e}}const El=/;(?![^(]*\))/g,kl=/:([^]+)/,Al=/\/\*[^]*?\*\//g;function Ol(e){const t={};return e.replace(Al,"").split(El).forEach(n=>{if(n){const r=n.split(kl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yr(e){let t="";if(fe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=yr(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cl=ka(Pl);function jo(e){return!!e||e===""}const zt=e=>fe(e)?e:e==null?"":D(e)||ae(e)&&(e.toString===Fo||!B(e.toString))?JSON.stringify(e,zo,2):String(e),zo=(e,t)=>t&&t.__v_isRef?zo(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mo(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!D(t)&&!$o(t)?String(t):t;let Ie;class Sl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Rl(e,t=Ie){t&&t.active&&t.effects.push(e)}function Il(){return Ie}const Ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Do=e=>(e.w&ht)>0,Uo=e=>(e.n&ht)>0,Tl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Nl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Do(a)&&!Uo(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Gr=new WeakMap;let un=0,ht=1;const Qr=30;let Te;const Pt=Symbol(""),Jr=Symbol("");class Ia{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ut=!0,ht=1<<++un,un<=Qr?Tl(this):ui(this),this.fn()}finally{un<=Qr&&Nl(this),ht=1<<--un,Te=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ui(this),this.onStop&&this.onStop(),this.active=!1)}}function ui(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Bo=[];function nn(){Bo.push(ut),ut=!1}function rn(){const e=Bo.pop();ut=e===void 0?!0:e}function Ee(e,t,n){if(ut&&Te){let r=Gr.get(e);r||Gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ra()),Ho(a)}}function Ho(e,t){let n=!1;un<=Qr?Uo(e)||(e.n|=ht,n=!Do(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Je(e,t,n,r,a,i){const o=Gr.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&D(e)){const s=Number(r);o.forEach((f,c)=>{(c==="length"||c>=s)&&l.push(f)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":D(e)?Ca(n)&&l.push(o.get("length")):(l.push(o.get(Pt)),Ht(e)&&l.push(o.get(Jr)));break;case"delete":D(e)||(l.push(o.get(Pt)),Ht(e)&&l.push(o.get(Jr)));break;case"set":Ht(e)&&l.push(o.get(Pt));break}if(l.length===1)l[0]&&Zr(l[0]);else{const s=[];for(const f of l)f&&s.push(...f);Zr(Ra(s))}}function Zr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&di(r);for(const r of n)r.computed||di(r)}function di(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ml=ka("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pa)),Ll=Ta(),Fl=Ta(!1,!0),$l=Ta(!0),mi=jl();function jl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=q(this)[t].apply(this,n);return rn(),r}}),e}function zl(e){const t=q(this);return Ee(t,"has",e),t.hasOwnProperty(e)}function Ta(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?tf:Xo:t?Vo:qo).get(r))return r;const o=D(r);if(!e){if(o&&K(mi,a))return Reflect.get(mi,a,i);if(a==="hasOwnProperty")return zl}const l=Reflect.get(r,a,i);return(Pa(a)?Wo.has(a):Ml(a))||(e||Ee(r,"get",a),t)?l:ve(l)?o&&Ca(a)?l:l.value:ae(l)?e?Qo(l):wr(l):l}}const Dl=Yo(),Ul=Yo(!0);function Yo(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!or(a)&&!Vt(a)&&(o=q(o),a=q(a)),!D(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const l=D(n)&&Ca(r)?Number(r)<n.length:K(n,r),s=Reflect.set(n,r,a,i);return n===q(i)&&(l?wn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),s}}function Bl(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Hl(e,t){const n=Reflect.has(e,t);return(!Pa(t)||!Wo.has(t))&&Ee(e,"has",t),n}function Wl(e){return Ee(e,"iterate",D(e)?"length":Pt),Reflect.ownKeys(e)}const Ko={get:Ll,set:Dl,deleteProperty:Bl,has:Hl,ownKeys:Wl},Yl={get:$l,set(e,t){return!0},deleteProperty(e,t){return!0}},Kl=de({},Ko,{get:Fl,set:Ul}),Na=e=>e,xr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=xr(a),l=r?Na:n?Fa:_n;if(o.call(a,t))return l(e.get(t));if(o.call(a,i))return l(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Ee(q(e),"iterate",Pt),Reflect.get(e,"size",e)}function pi(e){e=q(e);const t=q(this);return xr(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function hi(e,t){t=q(t);const n=q(this),{has:r,get:a}=xr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?wn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function gi(e){const t=q(this),{has:n,get:r}=xr(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function vi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,l=q(o),s=t?Na:e?Fa:_n;return!e&&Ee(l,"iterate",Pt),o.forEach((f,c)=>r.call(a,s(f),s(c),i))}}function Un(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Ht(i),l=e==="entries"||e===Symbol.iterator&&o,s=e==="keys"&&o,f=a[e](...r),c=n?Na:t?Fa:_n;return!t&&Ee(i,"iterate",s?Jr:Pt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:l?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function ql(){const e={get(i){return $n(this,i)},get size(){return zn(this)},has:jn,add:pi,set:hi,delete:gi,clear:vi,forEach:Dn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return zn(this)},has:jn,add:pi,set:hi,delete:gi,clear:vi,forEach:Dn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Dn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),t[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[e,n,t,r]}const[Vl,Xl,Gl,Ql]=ql();function Ma(e,t){const n=t?e?Ql:Gl:e?Xl:Vl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const Jl={get:Ma(!1,!1)},Zl={get:Ma(!1,!0)},ef={get:Ma(!0,!1)},qo=new WeakMap,Vo=new WeakMap,Xo=new WeakMap,tf=new WeakMap;function nf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(e){return e.__v_skip||!Object.isExtensible(e)?0:nf(xl(e))}function wr(e){return Vt(e)?e:La(e,!1,Ko,Jl,qo)}function Go(e){return La(e,!1,Kl,Zl,Vo)}function Qo(e){return La(e,!0,Yl,ef,Xo)}function La(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=rf(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return a.set(e,l),l}function Wt(e){return Vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Jo(e){return Wt(e)||Vt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Zo(e){return ir(e,"__v_skip",!0),e}const _n=e=>ae(e)?wr(e):e,Fa=e=>ae(e)?Qo(e):e;function es(e){ut&&Te&&(e=q(e),Ho(e.dep||(e.dep=Ra())))}function ts(e,t){e=q(e);const n=e.dep;n&&Zr(n)}function ve(e){return!!(e&&e.__v_isRef===!0)}function dt(e){return ns(e,!1)}function af(e){return ns(e,!0)}function ns(e,t){return ve(e)?e:new of(e,t)}class of{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:_n(t)}get value(){return es(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Vt(t);t=n?t:q(t),wn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:_n(t),ts(this))}}function Ke(e){return ve(e)?e.value:e}const sf={get:(e,t,n)=>Ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function rs(e){return Wt(e)?e:new Proxy(e,sf)}class lf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ia(t,()=>{this._dirty||(this._dirty=!0,ts(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return es(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ff(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new lf(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function Fe(e,t,n,r){if(B(e)){const i=mt(e,t,n,r);return i&&Lo(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Fe(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,l)===!1)return}i=i.parent}const s=t.appContext.config.errorHandler;if(s){mt(s,null,10,[e,o,l]);return}}cf(e,n,a,r)}function cf(e,t,n,r=!0){console.error(e)}let En=!1,ea=!1;const ge=[];let We=0;const Yt=[];let Ge=null,_t=0;const as=Promise.resolve();let $a=null;function is(e){const t=$a||as;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=We+1,n=ge.length;for(;t<n;){const r=t+n>>>1;kn(ge[r])<e?t=r+1:n=r}return t}function ja(e){(!ge.length||!ge.includes(e,En&&e.allowRecurse?We+1:We))&&(e.id==null?ge.push(e):ge.splice(uf(e.id),0,e),os())}function os(){!En&&!ea&&(ea=!0,$a=as.then(ls))}function df(e){const t=ge.indexOf(e);t>We&&ge.splice(t,1)}function mf(e){D(e)?Yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?_t+1:_t))&&Yt.push(e),os()}function bi(e,t=En?We+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function ss(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>kn(n)-kn(r)),_t=0;_t<Ge.length;_t++)Ge[_t]();Ge=null,_t=0}}const kn=e=>e.id==null?1/0:e.id,pf=(e,t)=>{const n=kn(e)-kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ls(e){ea=!1,En=!0,ge.sort(pf);const t=Le;try{for(We=0;We<ge.length;We++){const n=ge[We];n&&n.active!==!1&&mt(n,null,14)}}finally{We=0,ge.length=0,ss(),En=!1,$a=null,(ge.length||Yt.length)&&ls()}}function hf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||te;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||te;p&&(a=n.map(g=>fe(g)?g.trim():g)),d&&(a=n.map(Vr))}let l,s=r[l=Mr(t)]||r[l=Mr(qe(t))];!s&&i&&(s=r[l=Mr(tn(t))]),s&&Fe(s,e,6,a);const f=r[l+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Fe(f,e,6,a)}}function fs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},l=!1;if(!B(e)){const s=f=>{const c=fs(f,t,!0);c&&(l=!0,de(o,c))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return!i&&!l?(ae(e)&&r.set(e,null),null):(D(i)?i.forEach(s=>o[s]=null):de(o,i),ae(e)&&r.set(e,o),o)}function Er(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,tn(t))||K(e,t))}let Se=null,cs=null;function sr(e){const t=Se;return Se=e,cs=e&&e.type.__scopeId||null,t}function gf(e,t=Se,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ri(-1);const i=sr(t);let o;try{o=e(...a)}finally{sr(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:l,attrs:s,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:C}=e;let F,x;const w=sr(e);try{if(n.shapeFlag&4){const S=a||r;F=He(c.call(S,S,d,i,g,p,P)),x=s}else{const S=t;F=He(S.length>1?S(i,{attrs:s,slots:l,emit:f}):S(i,null)),x=t.props?s:vf(s)}}catch(S){gn.length=0,_r(S,e,1),F=le(St)}let L=F;if(x&&C!==!1){const S=Object.keys(x),{shapeFlag:H}=L;S.length&&H&7&&(o&&S.some(Aa)&&(x=bf(x,o)),L=Gt(L,x))}return n.dirs&&(L=Gt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),F=L,sr(w),F}const vf=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},bf=(e,t)=>{const n={};for(const r in e)(!Aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function yf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:l,patchFlag:s}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&s>=0){if(s&1024)return!0;if(s&16)return r?yi(r,o,f):!!o;if(s&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!Er(f,p))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?yi(r,o,f):!0:!!o;return!1}function yi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function xf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wf=e=>e.__isSuspense;function _f(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):mf(e)}const Bn={};function pn(e,t,n){return us(e,t,n)}function us(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=te){var l;const s=Il()===((l=pe)==null?void 0:l.scope)?pe:null;let f,c=!1,d=!1;if(ve(e)?(f=()=>e.value,c=or(e)):Wt(e)?(f=()=>e,r=!0):D(e)?(d=!0,c=e.some(S=>Wt(S)||or(S)),f=()=>e.map(S=>{if(ve(S))return S.value;if(Wt(S))return kt(S);if(B(S))return mt(S,s,2)})):B(e)?t?f=()=>mt(e,s,2):f=()=>{if(!(s&&s.isUnmounted))return p&&p(),Fe(e,s,3,[g])}:f=Le,t&&r){const S=f;f=()=>kt(S())}let p,g=S=>{p=w.onStop=()=>{mt(S,s,4)}},P;if(On)if(g=Le,t?n&&Fe(t,s,3,[f(),d?[]:void 0,g]):f(),a==="sync"){const S=vc();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Le;let C=d?new Array(e.length).fill(Bn):Bn;const F=()=>{if(w.active)if(t){const S=w.run();(r||c||(d?S.some((H,Z)=>wn(H,C[Z])):wn(S,C)))&&(p&&p(),Fe(t,s,3,[S,C===Bn?void 0:d&&C[0]===Bn?[]:C,g]),C=S)}else w.run()};F.allowRecurse=!!t;let x;a==="sync"?x=F:a==="post"?x=()=>_e(F,s&&s.suspense):(F.pre=!0,s&&(F.id=s.uid),x=()=>ja(F));const w=new Ia(f,x);t?n?F():C=w.run():a==="post"?_e(w.run.bind(w),s&&s.suspense):w.run();const L=()=>{w.stop(),s&&s.scope&&Oa(s.scope.effects,w)};return P&&P.push(L),L}function Ef(e,t,n){const r=this.proxy,a=fe(e)?e.includes(".")?ds(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=pe;Qt(this);const l=us(a,i.bind(r),n);return o?Qt(o):Ct(),l}function ds(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))kt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(Mo(e)||Ht(e))e.forEach(n=>{kt(n,t)});else if($o(e))for(const n in e)kt(e[n],t);return e}function xi(e,t){const n=Se;if(n===null)return e;const r=Pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,l,s,f=te]=t[i];o&&(B(o)&&(o={mounted:o,updated:o}),o.deep&&kt(l),a.push({dir:o,instance:r,value:l,oldValue:void 0,arg:s,modifiers:f}))}return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const l=a[o];i&&(l.oldValue=i[o].value);let s=l.dir[r];s&&(nn(),Fe(s,n,8,[e.el,l,e,t]),rn())}}function za(e,t){return B(e)?(()=>de({name:e.name},t,{setup:e}))():e}const er=e=>!!e.type.__asyncLoader,ms=e=>e.type.__isKeepAlive;function kf(e,t){ps(e,"a",t)}function Af(e,t){ps(e,"da",t)}function ps(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ms(a.parent.vnode)&&Of(r,t,n,a),a=a.parent}}function Of(e,t,n,r){const a=kr(t,e,r,!0);hs(()=>{Oa(r[t],a)},n)}function kr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Qt(n);const l=Fe(t,n,e,o);return Ct(),rn(),l});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=pe)=>(!On||e==="sp")&&kr(e,(...r)=>t(...r),n),Pf=nt("bm"),Cf=nt("m"),Sf=nt("bu"),Rf=nt("u"),If=nt("bum"),hs=nt("um"),Tf=nt("sp"),Nf=nt("rtg"),Mf=nt("rtc");function Lf(e,t=pe){kr("ec",e,t)}const gs="components";function Ff(e,t){return jf(gs,e,!0,t)||e}const $f=Symbol.for("v-ndc");function jf(e,t,n=!0,r=!1){const a=Se||pe;if(a){const i=a.type;if(e===gs){const l=pc(i,!1);if(l&&(l===t||l===qe(t)||l===br(qe(t))))return i}const o=wi(a[e]||i[e],t)||wi(a.appContext[e],t);return!o&&r?i:o}}function wi(e,t){return e&&(e[t]||e[qe(t)]||e[br(qe(t))])}function zf(e,t,n,r){let a;const i=n&&n[r];if(D(e)||fe(e)){a=new Array(e.length);for(let o=0,l=e.length;o<l;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])a=Array.from(e,(o,l)=>t(o,l,void 0,i&&i[l]));else{const o=Object.keys(e);a=new Array(o.length);for(let l=0,s=o.length;l<s;l++){const f=o[l];a[l]=t(e[f],f,l,i&&i[l])}}else a=[];return n&&(n[r]=a),a}const ta=e=>e?Cs(e)?Pr(e)||e.proxy:ta(e.parent):null,hn=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ta(e.parent),$root:e=>ta(e.root),$emit:e=>e.emit,$options:e=>Da(e),$forceUpdate:e=>e.f||(e.f=()=>ja(e.update)),$nextTick:e=>e.n||(e.n=is.bind(e.proxy)),$watch:e=>Ef.bind(e)}),Fr=(e,t)=>e!==te&&!e.__isScriptSetup&&K(e,t),Df={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:l,appContext:s}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Fr(r,t))return o[t]=1,r[t];if(a!==te&&K(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&K(f,t))return o[t]=3,i[t];if(n!==te&&K(n,t))return o[t]=4,n[t];na&&(o[t]=0)}}const c=hn[t];let d,p;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==te&&K(n,t))return o[t]=4,n[t];if(p=s.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Fr(a,t)?(a[t]=n,!0):r!==te&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let l;return!!n[o]||e!==te&&K(e,o)||Fr(t,o)||(l=i[0])&&K(l,o)||K(r,o)||K(hn,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function _i(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let na=!0;function Uf(e){const t=Da(e),n=e.proxy,r=e.ctx;na=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:l,provide:s,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:C,deactivated:F,beforeDestroy:x,beforeUnmount:w,destroyed:L,unmounted:S,render:H,renderTracked:Z,renderTriggered:ie,errorCaptured:ke,serverPrefetch:be,expose:Pe,inheritAttrs:at,components:yt,directives:ze,filters:on}=t;if(f&&Bf(f,r,null),o)for(const J in o){const V=o[J];B(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);ae(J)&&(e.data=wr(J))}if(na=!0,i)for(const J in i){const V=i[J],Ve=B(V)?V.bind(n,n):B(V.get)?V.get.bind(n,n):Le,it=!B(V)&&B(V.set)?V.set.bind(n):Le,De=me({get:Ve,set:it});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:xe=>De.value=xe})}if(l)for(const J in l)vs(l[J],r,n,J);if(s){const J=B(s)?s.call(n):s;Reflect.ownKeys(J).forEach(V=>{tr(V,J[V])})}c&&Ei(c,e,"c");function ue(J,V){D(V)?V.forEach(Ve=>J(Ve.bind(n))):V&&J(V.bind(n))}if(ue(Pf,d),ue(Cf,p),ue(Sf,g),ue(Rf,P),ue(kf,C),ue(Af,F),ue(Lf,ke),ue(Mf,Z),ue(Nf,ie),ue(If,w),ue(hs,S),ue(Tf,be),D(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Ve=>n[V]=Ve})})}else e.exposed||(e.exposed={});H&&e.render===Le&&(e.render=H),at!=null&&(e.inheritAttrs=at),yt&&(e.components=yt),ze&&(e.directives=ze)}function Bf(e,t,n=Le){D(e)&&(e=ra(e));for(const r in e){const a=e[r];let i;ae(a)?"default"in a?i=$e(a.from||r,a.default,!0):i=$e(a.from||r):i=$e(a),ve(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ei(e,t,n){Fe(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vs(e,t,n,r){const a=r.includes(".")?ds(n,r):()=>n[r];if(fe(e)){const i=t[e];B(i)&&pn(a,i)}else if(B(e))pn(a,e.bind(n));else if(ae(e))if(D(e))e.forEach(i=>vs(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&pn(a,i,e)}}function Da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let s;return l?s=l:!a.length&&!n&&!r?s=t:(s={},a.length&&a.forEach(f=>lr(s,f,o,!0)),lr(s,t,o)),ae(t)&&i.set(t,s),s}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=Hf[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Hf={data:ki,props:Ai,emits:Ai,methods:dn,computed:dn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:dn,directives:dn,watch:Yf,provide:ki,inject:Wf};function ki(e,t){return t?e?function(){return de(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Wf(e,t){return dn(ra(e),ra(t))}function ra(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?de(Object.create(null),e,t):t}function Ai(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:de(Object.create(null),_i(e),_i(t??{})):t}function Yf(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function bs(){return{app:null,config:{isNativeTag:vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kf=0;function qf(e,t){return function(r,a=null){B(r)||(r=de({},r)),a!=null&&!ae(a)&&(a=null);const i=bs(),o=new Set;let l=!1;const s=i.app={_uid:Kf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bc,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(s,...c)):B(f)&&(o.add(f),f(s,...c))),s},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),s},component(f,c){return c?(i.components[f]=c,s):i.components[f]},directive(f,c){return c?(i.directives[f]=c,s):i.directives[f]},mount(f,c,d){if(!l){const p=le(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),l=!0,s._container=f,f.__vue_app__=s,Pr(p.component)||p.component.proxy}},unmount(){l&&(e(null,s._container),delete s._container.__vue_app__)},provide(f,c){return i.provides[f]=c,s},runWithContext(f){fr=s;try{return f()}finally{fr=null}}};return s}}let fr=null;function tr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=pe||Se;if(r||fr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Vf(e,t,n,r=!1){const a={},i={};ir(i,Or,1),e.propsDefaults=Object.create(null),ys(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Go(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Xf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,l=q(a),[s]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Er(e.emitsOptions,p))continue;const g=t[p];if(s)if(K(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const P=qe(p);a[P]=aa(s,l,P,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{ys(e,t,a,i)&&(f=!0);let c;for(const d in l)(!t||!K(t,d)&&((c=tn(d))===d||!K(t,c)))&&(s?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=aa(s,l,d,void 0,e,!0)):delete a[d]);if(i!==l)for(const d in i)(!t||!K(t,d))&&(delete i[d],f=!0)}f&&Je(e,"set","$attrs")}function ys(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,l;if(t)for(let s in t){if(Jn(s))continue;const f=t[s];let c;a&&K(a,c=qe(s))?!i||!i.includes(c)?n[c]=f:(l||(l={}))[c]=f:Er(e.emitsOptions,s)||(!(s in r)||f!==r[s])&&(r[s]=f,o=!0)}if(i){const s=q(n),f=l||te;for(let c=0;c<i.length;c++){const d=i[c];n[d]=aa(a,s,d,f[d],e,!K(f,d))}}return o}function aa(e,t,n,r,a,i){const o=e[n];if(o!=null){const l=K(o,"default");if(l&&r===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&B(s)){const{propsDefaults:f}=a;n in f?r=f[n]:(Qt(a),r=f[n]=s.call(null,t),Ct())}else r=s}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function xs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},l=[];let s=!1;if(!B(e)){const c=d=>{s=!0;const[p,g]=xs(d,t,!0);de(o,p),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!s)return ae(e)&&r.set(e,Bt),Bt;if(D(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);Oi(d)&&(o[d]=te)}else if(i)for(const c in i){const d=qe(c);if(Oi(d)){const p=i[c],g=o[d]=D(p)||B(p)?{type:p}:de({},p);if(g){const P=Si(Boolean,g.type),C=Si(String,g.type);g[0]=P>-1,g[1]=C<0||P<C,(P>-1||K(g,"default"))&&l.push(d)}}}const f=[o,l];return ae(e)&&r.set(e,f),f}function Oi(e){return e[0]!=="$"}function Pi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ci(e,t){return Pi(e)===Pi(t)}function Si(e,t){return D(t)?t.findIndex(n=>Ci(n,e)):B(t)&&Ci(t,e)?0:-1}const ws=e=>e[0]==="_"||e==="$stable",Ua=e=>D(e)?e.map(He):[He(e)],Gf=(e,t,n)=>{if(t._n)return t;const r=gf((...a)=>Ua(t(...a)),n);return r._c=!1,r},_s=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ws(a))continue;const i=e[a];if(B(i))t[a]=Gf(a,i,r);else if(i!=null){const o=Ua(i);t[a]=()=>o}}},Es=(e,t)=>{const n=Ua(t);e.slots.default=()=>n},Qf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),ir(t,"_",n)):_s(t,e.slots={})}else e.slots={},t&&Es(e,t);ir(e.slots,Or,1)},Jf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=te;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(de(a,t),!n&&l===1&&delete a._):(i=!t.$stable,_s(t,a)),o=t}else t&&(Es(e,t),o={default:1});if(i)for(const l in a)!ws(l)&&!(l in o)&&delete a[l]};function ia(e,t,n,r,a=!1){if(D(e)){e.forEach((p,g)=>ia(p,t&&(D(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?Pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:l,r:s}=e,f=t&&t.r,c=l.refs===te?l.refs={}:l.refs,d=l.setupState;if(f!=null&&f!==s&&(fe(f)?(c[f]=null,K(d,f)&&(d[f]=null)):ve(f)&&(f.value=null)),B(s))mt(s,l,12,[o,c]);else{const p=fe(s),g=ve(s);if(p||g){const P=()=>{if(e.f){const C=p?K(d,s)?d[s]:c[s]:s.value;a?D(C)&&Oa(C,i):D(C)?C.includes(i)||C.push(i):p?(c[s]=[i],K(d,s)&&(d[s]=c[s])):(s.value=[i],e.k&&(c[e.k]=s.value))}else p?(c[s]=o,K(d,s)&&(d[s]=o)):g&&(s.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,_e(P,n)):P()}}}const _e=_f;function Zf(e){return ec(e)}function ec(e,t){const n=Xr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:l,createComment:s,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=Le,insertStaticContent:P}=e,C=(u,m,h,v=null,y=null,_=null,R=!1,k=null,A=!!m.dynamicChildren)=>{if(u===m)return;u&&!ln(u,m)&&(v=b(u),xe(u,y,_,!0),u=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:E,ref:j,shapeFlag:N}=m;switch(E){case Ar:F(u,m,h,v);break;case St:x(u,m,h,v);break;case $r:u==null&&w(m,h,v,R);break;case Ce:yt(u,m,h,v,y,_,R,k,A);break;default:N&1?H(u,m,h,v,y,_,R,k,A):N&6?ze(u,m,h,v,y,_,R,k,A):(N&64||N&128)&&E.process(u,m,h,v,y,_,R,k,A,O)}j!=null&&y&&ia(j,u&&u.ref,_,m||u,!m)},F=(u,m,h,v)=>{if(u==null)r(m.el=l(m.children),h,v);else{const y=m.el=u.el;m.children!==u.children&&f(y,m.children)}},x=(u,m,h,v)=>{u==null?r(m.el=s(m.children||""),h,v):m.el=u.el},w=(u,m,h,v)=>{[u.el,u.anchor]=P(u.children,m,h,v,u.el,u.anchor)},L=({el:u,anchor:m},h,v)=>{let y;for(;u&&u!==m;)y=p(u),r(u,h,v),u=y;r(m,h,v)},S=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},H=(u,m,h,v,y,_,R,k,A)=>{R=R||m.type==="svg",u==null?Z(m,h,v,y,_,R,k,A):be(u,m,y,_,R,k,A)},Z=(u,m,h,v,y,_,R,k)=>{let A,E;const{type:j,props:N,shapeFlag:z,transition:U,dirs:W}=u;if(A=u.el=o(u.type,_,N&&N.is,N),z&8?c(A,u.children):z&16&&ke(u.children,A,null,v,y,_&&j!=="foreignObject",R,k),W&&xt(u,null,v,"created"),ie(A,u,u.scopeId,R,v),N){for(const Q in N)Q!=="value"&&!Jn(Q)&&i(A,Q,null,N[Q],_,u.children,v,y,he);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&Be(E,v,u)}W&&xt(u,null,v,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;ee&&U.beforeEnter(A),r(A,m,h),((E=N&&N.onVnodeMounted)||ee||W)&&_e(()=>{E&&Be(E,v,u),ee&&U.enter(A),W&&xt(u,null,v,"mounted")},y)},ie=(u,m,h,v,y)=>{if(h&&g(u,h),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(y){let _=y.subTree;if(m===_){const R=y.vnode;ie(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},ke=(u,m,h,v,y,_,R,k,A=0)=>{for(let E=A;E<u.length;E++){const j=u[E]=k?ft(u[E]):He(u[E]);C(null,j,m,h,v,y,_,R,k)}},be=(u,m,h,v,y,_,R)=>{const k=m.el=u.el;let{patchFlag:A,dynamicChildren:E,dirs:j}=m;A|=u.patchFlag&16;const N=u.props||te,z=m.props||te;let U;h&&wt(h,!1),(U=z.onVnodeBeforeUpdate)&&Be(U,h,m,u),j&&xt(m,u,h,"beforeUpdate"),h&&wt(h,!0);const W=y&&m.type!=="foreignObject";if(E?Pe(u.dynamicChildren,E,k,h,v,W,_):R||V(u,m,k,null,h,v,W,_,!1),A>0){if(A&16)at(k,m,N,z,h,v,y);else if(A&2&&N.class!==z.class&&i(k,"class",null,z.class,y),A&4&&i(k,"style",N.style,z.style,y),A&8){const ee=m.dynamicProps;for(let Q=0;Q<ee.length;Q++){const se=ee[Q],Re=N[se],Lt=z[se];(Lt!==Re||se==="value")&&i(k,se,Re,Lt,y,u.children,h,v,he)}}A&1&&u.children!==m.children&&c(k,m.children)}else!R&&E==null&&at(k,m,N,z,h,v,y);((U=z.onVnodeUpdated)||j)&&_e(()=>{U&&Be(U,h,m,u),j&&xt(m,u,h,"updated")},v)},Pe=(u,m,h,v,y,_,R)=>{for(let k=0;k<m.length;k++){const A=u[k],E=m[k],j=A.el&&(A.type===Ce||!ln(A,E)||A.shapeFlag&70)?d(A.el):h;C(A,E,j,null,v,y,_,R,!0)}},at=(u,m,h,v,y,_,R)=>{if(h!==v){if(h!==te)for(const k in h)!Jn(k)&&!(k in v)&&i(u,k,h[k],null,R,m.children,y,_,he);for(const k in v){if(Jn(k))continue;const A=v[k],E=h[k];A!==E&&k!=="value"&&i(u,k,E,A,R,m.children,y,_,he)}"value"in v&&i(u,"value",h.value,v.value)}},yt=(u,m,h,v,y,_,R,k,A)=>{const E=m.el=u?u.el:l(""),j=m.anchor=u?u.anchor:l("");let{patchFlag:N,dynamicChildren:z,slotScopeIds:U}=m;U&&(k=k?k.concat(U):U),u==null?(r(E,h,v),r(j,h,v),ke(m.children,h,j,y,_,R,k,A)):N>0&&N&64&&z&&u.dynamicChildren?(Pe(u.dynamicChildren,z,h,y,_,R,k),(m.key!=null||y&&m===y.subTree)&&ks(u,m,!0)):V(u,m,h,j,y,_,R,k,A)},ze=(u,m,h,v,y,_,R,k,A)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,h,v,R,A):on(m,h,v,y,_,R,A):Tt(u,m,A)},on=(u,m,h,v,y,_,R)=>{const k=u.component=fc(u,v,y);if(ms(u)&&(k.ctx.renderer=O),cc(k),k.asyncDep){if(y&&y.registerDep(k,ue),!u.el){const A=k.subTree=le(St);x(null,A,m,h)}return}ue(k,u,m,h,y,_,R)},Tt=(u,m,h)=>{const v=m.component=u.component;if(yf(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,df(v.update),v.update();else m.el=u.el,v.vnode=m},ue=(u,m,h,v,y,_,R)=>{const k=()=>{if(u.isMounted){let{next:j,bu:N,u:z,parent:U,vnode:W}=u,ee=j,Q;wt(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,N&&Zn(N),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&Be(Q,U,j,W),wt(u,!0);const se=Lr(u),Re=u.subTree;u.subTree=se,C(Re,se,d(Re.el),b(Re),u,y,_),j.el=se.el,ee===null&&xf(u,se.el),z&&_e(z,y),(Q=j.props&&j.props.onVnodeUpdated)&&_e(()=>Be(Q,U,j,W),y)}else{let j;const{el:N,props:z}=m,{bm:U,m:W,parent:ee}=u,Q=er(m);if(wt(u,!1),U&&Zn(U),!Q&&(j=z&&z.onVnodeBeforeMount)&&Be(j,ee,m),wt(u,!0),N&&X){const se=()=>{u.subTree=Lr(u),X(N,u.subTree,u,y,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=Lr(u);C(null,se,h,v,u,y,_),m.el=se.el}if(W&&_e(W,y),!Q&&(j=z&&z.onVnodeMounted)){const se=m;_e(()=>Be(j,ee,se),y)}(m.shapeFlag&256||ee&&er(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&_e(u.a,y),u.isMounted=!0,m=h=v=null}},A=u.effect=new Ia(k,()=>ja(E),u.scope),E=u.update=()=>A.run();E.id=u.uid,wt(u,!0),E()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Xf(u,m.props,v,h),Jf(u,m.children,h),nn(),bi(),rn()},V=(u,m,h,v,y,_,R,k,A=!1)=>{const E=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:z,shapeFlag:U}=m;if(z>0){if(z&128){it(E,N,h,v,y,_,R,k,A);return}else if(z&256){Ve(E,N,h,v,y,_,R,k,A);return}}U&8?(j&16&&he(E,y,_),N!==E&&c(h,N)):j&16?U&16?it(E,N,h,v,y,_,R,k,A):he(E,y,_,!0):(j&8&&c(h,""),U&16&&ke(N,h,v,y,_,R,k,A))},Ve=(u,m,h,v,y,_,R,k,A)=>{u=u||Bt,m=m||Bt;const E=u.length,j=m.length,N=Math.min(E,j);let z;for(z=0;z<N;z++){const U=m[z]=A?ft(m[z]):He(m[z]);C(u[z],U,h,null,y,_,R,k,A)}E>j?he(u,y,_,!0,!1,N):ke(m,h,v,y,_,R,k,A,N)},it=(u,m,h,v,y,_,R,k,A)=>{let E=0;const j=m.length;let N=u.length-1,z=j-1;for(;E<=N&&E<=z;){const U=u[E],W=m[E]=A?ft(m[E]):He(m[E]);if(ln(U,W))C(U,W,h,null,y,_,R,k,A);else break;E++}for(;E<=N&&E<=z;){const U=u[N],W=m[z]=A?ft(m[z]):He(m[z]);if(ln(U,W))C(U,W,h,null,y,_,R,k,A);else break;N--,z--}if(E>N){if(E<=z){const U=z+1,W=U<j?m[U].el:v;for(;E<=z;)C(null,m[E]=A?ft(m[E]):He(m[E]),h,W,y,_,R,k,A),E++}}else if(E>z)for(;E<=N;)xe(u[E],y,_,!0),E++;else{const U=E,W=E,ee=new Map;for(E=W;E<=z;E++){const Ae=m[E]=A?ft(m[E]):He(m[E]);Ae.key!=null&&ee.set(Ae.key,E)}let Q,se=0;const Re=z-W+1;let Lt=!1,si=0;const sn=new Array(Re);for(E=0;E<Re;E++)sn[E]=0;for(E=U;E<=N;E++){const Ae=u[E];if(se>=Re){xe(Ae,y,_,!0);continue}let Ue;if(Ae.key!=null)Ue=ee.get(Ae.key);else for(Q=W;Q<=z;Q++)if(sn[Q-W]===0&&ln(Ae,m[Q])){Ue=Q;break}Ue===void 0?xe(Ae,y,_,!0):(sn[Ue-W]=E+1,Ue>=si?si=Ue:Lt=!0,C(Ae,m[Ue],h,null,y,_,R,k,A),se++)}const li=Lt?tc(sn):Bt;for(Q=li.length-1,E=Re-1;E>=0;E--){const Ae=W+E,Ue=m[Ae],fi=Ae+1<j?m[Ae+1].el:v;sn[E]===0?C(null,Ue,h,fi,y,_,R,k,A):Lt&&(Q<0||E!==li[Q]?De(Ue,h,fi,2):Q--)}}},De=(u,m,h,v,y=null)=>{const{el:_,type:R,transition:k,children:A,shapeFlag:E}=u;if(E&6){De(u.component.subTree,m,h,v);return}if(E&128){u.suspense.move(m,h,v);return}if(E&64){R.move(u,m,h,O);return}if(R===Ce){r(_,m,h);for(let N=0;N<A.length;N++)De(A[N],m,h,v);r(u.anchor,m,h);return}if(R===$r){L(u,m,h);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(_),r(_,m,h),_e(()=>k.enter(_),y);else{const{leave:N,delayLeave:z,afterLeave:U}=k,W=()=>r(_,m,h),ee=()=>{N(_,()=>{W(),U&&U()})};z?z(_,W,ee):ee()}else r(_,m,h)},xe=(u,m,h,v=!1,y=!1)=>{const{type:_,props:R,ref:k,children:A,dynamicChildren:E,shapeFlag:j,patchFlag:N,dirs:z}=u;if(k!=null&&ia(k,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const U=j&1&&z,W=!er(u);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&Be(ee,m,u),j&6)Fn(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}U&&xt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,y,O,v):E&&(_!==Ce||N>0&&N&64)?he(E,m,h,!1,!0):(_===Ce&&N&384||!y&&j&16)&&he(A,m,h),v&&Nt(u)}(W&&(ee=R&&R.onVnodeUnmounted)||U)&&_e(()=>{ee&&Be(ee,m,u),U&&xt(u,null,m,"unmounted")},h)},Nt=u=>{const{type:m,el:h,anchor:v,transition:y}=u;if(m===Ce){Mt(h,v);return}if(m===$r){S(u);return}const _=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:k}=y,A=()=>R(h,_);k?k(u.el,_,A):A()}else _()},Mt=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},Fn=(u,m,h)=>{const{bum:v,scope:y,update:_,subTree:R,um:k}=u;v&&Zn(v),y.stop(),_&&(_.active=!1,xe(R,u,m,h)),k&&_e(k,m),_e(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},he=(u,m,h,v=!1,y=!1,_=0)=>{for(let R=_;R<u.length;R++)xe(u[R],m,h,v,y)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),T=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,h),bi(),ss(),m._vnode=u},O={p:C,um:xe,m:De,r:Nt,mt:on,mc:ke,pc:V,pbc:Pe,n:b,o:e};let $,X;return t&&([$,X]=t(O)),{render:T,hydrate:$,createApp:qf(T,$)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ks(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let l=a[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[i]=ft(a[i]),l.el=o.el),n||ks(o,l)),l.type===Ar&&(l.el=o.el)}}function tc(e){const t=e.slice(),n=[0];let r,a,i,o,l;const s=e.length;for(r=0;r<s;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<f?i=l+1:o=l;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const nc=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),gn=[];let Ne=null;function pt(e=!1){gn.push(Ne=e?null:[])}function rc(){gn.pop(),Ne=gn[gn.length-1]||null}let An=1;function Ri(e){An+=e}function As(e){return e.dynamicChildren=An>0?Ne||Bt:null,rc(),An>0&&Ne&&Ne.push(e),e}function Xt(e,t,n,r,a,i){return As(Y(e,t,n,r,a,i,!0))}function Os(e,t,n,r,a){return As(le(e,t,n,r,a,!0))}function oa(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const Or="__vInternal",Ps=({key:e})=>e??null,nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||ve(e)||B(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,a=null,i=e===Ce?0:1,o=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ps(t),ref:t&&nr(t),scopeId:cs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Se};return l?(Ba(s,n),i&128&&e.normalize(s)):n&&(s.shapeFlag|=fe(n)?8:16),An>0&&!o&&Ne&&(s.patchFlag>0||i&6)&&s.patchFlag!==32&&Ne.push(s),s}const le=ac;function ac(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===$f)&&(e=St),oa(e)){const l=Gt(e,t,!0);return n&&Ba(l,n),An>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag|=-2,l}if(hc(e)&&(e=e.__vccOpts),t){t=ic(t);let{class:l,style:s}=t;l&&!fe(l)&&(t.class=yr(l)),ae(s)&&(Jo(s)&&!D(s)&&(s=de({},s)),t.style=Sa(s))}const o=fe(e)?1:wf(e)?128:nc(e)?64:ae(e)?4:B(e)?2:0;return Y(e,t,n,r,a,o,i,!0)}function ic(e){return e?Jo(e)||Or in e?de({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,l=t?oc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ps(l),ref:t&&t.ref?n&&a?D(a)?a.concat(nr(t)):[a,nr(t)]:nr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Kt(e=" ",t=0){return le(Ar,null,e,t)}function cp(e="",t=!1){return t?(pt(),Os(St,null,e)):le(St,null,e)}function He(e){return e==null||typeof e=="boolean"?le(St):D(e)?le(Ce,null,e.slice()):typeof e=="object"?ft(e):le(Ar,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ba(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Or in t)?t._ctx=Se:a===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[Kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function oc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=yr([t.class,r.class]));else if(a==="style")t.style=Sa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){Fe(e,t,7,[n,r])}const sc=bs();let lc=0;function fc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||sc,i={uid:lc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xs(r,a),emitsOptions:fs(r,a),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hf.bind(null,i),e.ce&&e.ce(i),i}let pe=null,Ha,Ft,Ii="__VUE_INSTANCE_SETTERS__";(Ft=Xr()[Ii])||(Ft=Xr()[Ii]=[]),Ft.push(e=>pe=e),Ha=e=>{Ft.length>1?Ft.forEach(t=>t(e)):Ft[0](e)};const Qt=e=>{Ha(e),e.scope.on()},Ct=()=>{pe&&pe.scope.off(),Ha(null)};function Cs(e){return e.vnode.shapeFlag&4}let On=!1;function cc(e,t=!1){On=t;const{props:n,children:r}=e.vnode,a=Cs(e);Vf(e,n,a,t),Qf(e,r);const i=a?uc(e,t):void 0;return On=!1,i}function uc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zo(new Proxy(e.ctx,Df));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?mc(e):null;Qt(e),nn();const i=mt(r,e,0,[e.props,a]);if(rn(),Ct(),Lo(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Ti(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Ti(e,i,t)}else Ss(e,t)}function Ti(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=rs(t)),Ss(e,n)}let Ni;function Ss(e,t,n){const r=e.type;if(!e.render){if(!t&&Ni&&!r.render){const a=r.template||Da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:s}=r,f=de(de({isCustomElement:i,delimiters:l},o),s);r.render=Ni(a,f)}}e.render=r.render||Le}Qt(e),nn(),Uf(e),rn(),Ct()}function dc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}}))}function mc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return dc(e)},slots:e.slots,emit:e.emit,expose:t}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rs(Zo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hn)return hn[n](e)},has(t,n){return n in t||n in hn}}))}function pc(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function hc(e){return B(e)&&"__vccOpts"in e}const me=(e,t)=>ff(e,t,On);function Wa(e,t,n){const r=arguments.length;return r===2?ae(t)&&!D(t)?oa(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&oa(n)&&(n=[n]),le(e,t,n))}const gc=Symbol.for("v-scx"),vc=()=>$e(gc),bc="3.3.4",yc="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Mi=Et&&Et.createElement("template"),xc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(yc,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Mi.innerHTML=r?`<svg>${e}</svg>`:e;const l=Mi.content;if(r){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function _c(e,t,n){const r=e.style,a=fe(n);if(n&&!a){if(t&&!fe(t))for(const i in t)n[i]==null&&sa(r,i,"");for(const i in n)sa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Li=/\s*!important$/;function sa(e,t,n){if(D(n))n.forEach(r=>sa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ec(e,t);Li.test(n)?e.setProperty(tn(r),n.replace(Li,""),"important"):e[r]=n}}const Fi=["Webkit","Moz","ms"],jr={};function Ec(e,t){const n=jr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return jr[t]=r;r=br(r);for(let a=0;a<Fi.length;a++){const i=Fi[a]+r;if(i in e)return jr[t]=i}return t}const $i="http://www.w3.org/1999/xlink";function kc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($i,t.slice(6,t.length)):e.setAttributeNS($i,t,n);else{const i=Cl(t);n==null||i&&!jo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ac(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const f=l==="OPTION"?e.getAttribute("value"):e.value,c=n??"";f!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=jo(n):n==null&&f==="string"?(n="",s=!0):f==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function $t(e,t,n,r){e.addEventListener(t,n,r)}function Oc(e,t,n,r){e.removeEventListener(t,n,r)}function Pc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[l,s]=Cc(t);if(r){const f=i[t]=Ic(r,a);$t(e,l,f,s)}else o&&(Oc(e,l,o,s),i[t]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function Cc(e){let t;if(ji.test(e)){t={};let r;for(;r=e.match(ji);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let zr=0;const Sc=Promise.resolve(),Rc=()=>zr||(Sc.then(()=>zr=0),zr=Date.now());function Ic(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Tc(r,n.value),t,5,[r])};return n.value=e,n.attached=Rc(),n}function Tc(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const zi=/^on[a-z]/,Nc=(e,t,n,r,a=!1,i,o,l,s)=>{t==="class"?wc(e,r,a):t==="style"?_c(e,n,r):hr(t)?Aa(t)||Pc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mc(e,t,r,a))?Ac(e,t,r,i,o,l,s):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kc(e,t,r,a))};function Mc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&zi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||zi.test(t)&&fe(n)?!1:t in e}const Di=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Zn(t,n):t};function Lc(e){e.target.composing=!0}function Ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Fc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Di(a);const i=r||a.props&&a.props.type==="number";$t(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Vr(l)),e._assign(l)}),n&&$t(e,"change",()=>{e.value=e.value.trim()}),t||($t(e,"compositionstart",Lc),$t(e,"compositionend",Ui),$t(e,"change",Ui))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Di(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Vr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},$c={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),fn(e,!0),r.enter(e)):r.leave(e,()=>{fn(e,!1)}):fn(e,t))},beforeUnmount(e,{value:t}){fn(e,t)}};function fn(e,t){e.style.display=t?e._vod:"none"}const jc=de({patchProp:Nc},xc);let Bi;function zc(){return Bi||(Bi=Zf(jc))}const Dc=(...e)=>{const t=zc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Uc(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Uc(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Bc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const G=Object.assign;function Dr(e,t){const n={};for(const r in t){const a=t[r];n[r]=je(a)?a.map(e):e(a)}return n}const vn=()=>{},je=Array.isArray,Hc=/\/$/,Wc=e=>e.replace(Hc,"");function Ur(e,t,n="/"){let r,a={},i="",o="";const l=t.indexOf("#");let s=t.indexOf("?");return l<s&&l>=0&&(s=-1),s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Vc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Yc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&Rs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!qc(e[n],t[n]))return!1;return!0}function qc(e,t){return je(e)?Wi(e,t):je(t)?Wi(t,e):e===t}function Wi(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Vc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var bn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(bn||(bn={}));function Xc(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wc(e)}const Gc=/^[^#]+#/;function Qc(e,t){return e.replace(Gc,"#")+t}function Jc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Zc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Jc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Yi(e,t){return(history.state?history.state.position-t:-1)+e}const la=new Map;function eu(e,t){la.set(e,t)}function tu(e){const t=la.get(e);return la.delete(e),t}let nu=()=>location.protocol+"//"+location.host;function Is(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let l=a.includes(e.slice(i))?e.slice(i).length:1,s=a.slice(l);return s[0]!=="/"&&(s="/"+s),Hi(s,"")}return Hi(n,e)+r+a}function ru(e,t,n,r){let a=[],i=[],o=null;const l=({state:p})=>{const g=Is(e,location),P=n.value,C=t.value;let F=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}F=C?p.position-C.position:0}else r(g);a.forEach(x=>{x(n.value,P,{delta:F,type:Pn.pop,direction:F?F>0?bn.forward:bn.back:bn.unknown})})};function s(){o=n.value}function f(p){a.push(p);const g=()=>{const P=a.indexOf(p);P>-1&&a.splice(P,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(G({},p.state,{scroll:Cr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:s,listen:f,destroy:d}}function Ki(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function au(e){const{history:t,location:n}=window,r={value:Is(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+s:nu()+e+s;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(s,f){const c=G({},t.state,Ki(a.value.back,s,a.value.forward,!0),f,{position:a.value.position});i(s,c,!0),r.value=s}function l(s,f){const c=G({},a.value,t.state,{forward:s,scroll:Cr()});i(c.current,c,!0);const d=G({},Ki(r.value,s,null),{position:c.position+1},f);i(s,d,!1),r.value=s}return{location:r,state:a,push:l,replace:o}}function iu(e){e=Xc(e);const t=au(e),n=ru(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=G({location:"",base:e,go:r,createHref:Qc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ou(e){return typeof e=="string"||e&&typeof e=="object"}function Ts(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ns=Symbol("");var qi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qi||(qi={}));function Zt(e,t){return G(new Error,{type:e,[Ns]:!0},t)}function Xe(e,t){return e instanceof Error&&Ns in e&&(t==null||!!(e.type&t))}const Vi="[^/]+?",su={sensitive:!1,strict:!1,start:!0,end:!0},lu=/[.+*?^${}()[\]/\\]/g;function fu(e,t){const n=G({},su,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(lu,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:C,optional:F,regexp:x}=p;i.push({name:P,repeatable:C,optional:F});const w=x||Vi;if(w!==Vi){g+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+S.message)}}let L=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=F&&f.length<2?`(?:/${L})`:"/"+L),F&&(L+="?"),a+=L,g+=20,F&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function l(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",P=i[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function s(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:F}=g,x=P in f?f[P]:"";if(je(x)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=je(x)?x.join("/"):x;if(!w)if(F)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:l,stringify:s}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function uu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=cu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Xi(r))return 1;if(Xi(a))return-1}return a.length-r.length}function Xi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const du={type:0,value:""},mu=/[a-zA-Z0-9_]/;function pu(e){if(!e)return[[]];if(e==="/")return[[du]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let l=0,s,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=s}for(;l<e.length;){if(s=e[l++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(f&&d(),o()):s===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:s==="("?n=2:mu.test(s)?p():(d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:n=3:c+=s;break;case 3:d(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function hu(e,t,n){const r=fu(pu(e.path),n),a=G(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function gu(e,t){const n=[],r=new Map;t=Ji({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,P=vu(c);P.aliasOf=p&&p.record;const C=Ji(t,c),F=[P];if("alias"in c){const L=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of L)F.push(G({},P,{components:p?p.record.components:P.components,path:S,aliasOf:p?p.record:P}))}let x,w;for(const L of F){const{path:S}=L;if(d&&S[0]!=="/"){const H=d.record.path,Z=H[H.length-1]==="/"?"":"/";L.path=d.record.path+(S&&Z+S)}if(x=hu(L,d,C),p?p.alias.push(x):(w=w||x,w!==x&&w.alias.push(x),g&&c.name&&!Qi(x)&&o(c.name)),P.children){const H=P.children;for(let Z=0;Z<H.length;Z++)i(H[Z],x,p&&p.children[Z])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&s(x)}return w?()=>{o(w)}:vn}function o(c){if(Ts(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function l(){return n}function s(c){let d=0;for(;d<n.length&&uu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Ms(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Qi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},P,C;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Zt(1,{location:c});C=p.record.name,g=G(Gi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Gi(c.params,p.keys.map(w=>w.name))),P=p.stringify(g)}else if("path"in c)P=c.path,p=n.find(w=>w.re.test(P)),p&&(g=p.parse(P),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Zt(1,{location:c,currentLocation:d});C=p.record.name,g=G({},d.params,c.params),P=p.stringify(g)}const F=[];let x=p;for(;x;)F.unshift(x.record),x=x.parent;return{name:C,path:P,params:g,matched:F,meta:yu(F)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:l,getRecordMatcher:a}}function Gi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function vu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:bu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function bu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Qi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yu(e){return e.reduce((t,n)=>G(t,n.meta),{})}function Ji(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ms(e,t){return t.children.some(n=>n===e||Ms(e,n))}const Ls=/#/g,xu=/&/g,wu=/\//g,_u=/=/g,Eu=/\?/g,Fs=/\+/g,ku=/%5B/g,Au=/%5D/g,$s=/%5E/g,Ou=/%60/g,js=/%7B/g,Pu=/%7C/g,zs=/%7D/g,Cu=/%20/g;function Ya(e){return encodeURI(""+e).replace(Pu,"|").replace(ku,"[").replace(Au,"]")}function Su(e){return Ya(e).replace(js,"{").replace(zs,"}").replace($s,"^")}function fa(e){return Ya(e).replace(Fs,"%2B").replace(Cu,"+").replace(Ls,"%23").replace(xu,"%26").replace(Ou,"`").replace(js,"{").replace(zs,"}").replace($s,"^")}function Ru(e){return fa(e).replace(_u,"%3D")}function Iu(e){return Ya(e).replace(Ls,"%23").replace(Eu,"%3F")}function Tu(e){return e==null?"":Iu(e).replace(wu,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Nu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Fs," "),o=i.indexOf("="),l=cr(o<0?i:i.slice(0,o)),s=o<0?null:cr(i.slice(o+1));if(l in t){let f=t[l];je(f)||(f=t[l]=[f]),f.push(s)}else t[l]=s}return t}function Zi(e){let t="";for(let n in e){const r=e[n];if(n=Ru(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&fa(i)):[r&&fa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Mu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Lu=Symbol(""),eo=Symbol(""),Sr=Symbol(""),Ka=Symbol(""),ca=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const s=d=>{d===!1?l(Zt(4,{from:n,to:t})):d instanceof Error?l(d):ou(d)?l(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,s);let c=Promise.resolve(f);e.length<3&&(c=c.then(s)),c.catch(d=>l(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let l=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Fu(l)){const f=(l.__vccOpts||l)[t];f&&a.push(ct(f,n,r,i,o))}else{let s=l();a.push(()=>s.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Bc(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ct(p,n,r,i,o)()}))}}return a}function Fu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function to(e){const t=$e(Sr),n=$e(Ka),r=me(()=>t.resolve(Ke(e.to))),a=me(()=>{const{matched:s}=r.value,{length:f}=s,c=s[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Jt.bind(null,c));if(p>-1)return p;const g=no(s[f-2]);return f>1&&no(c)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,s[f-2])):p}),i=me(()=>a.value>-1&&Du(n.params,r.value.params)),o=me(()=>a.value>-1&&a.value===n.matched.length-1&&Rs(n.params,r.value.params));function l(s={}){return zu(s)?t[Ke(e.replace)?"replace":"push"](Ke(e.to)).catch(vn):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const $u=za({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(e,{slots:t}){const n=wr(to(e)),{options:r}=$e(Sr),a=me(()=>({[ro(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ro(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Wa("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ju=$u;function zu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Du(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!je(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function no(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ro=(e,t,n)=>e??t??n,Uu=za({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(ca),a=me(()=>e.route||r.value),i=$e(eo,0),o=me(()=>{let f=Ke(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),l=me(()=>a.value.matched[o.value]);tr(eo,me(()=>o.value+1)),tr(Lu,l),tr(ca,a);const s=dt();return pn(()=>[s.value,l.value,e.name],([f,c,d],[p,g,P])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Jt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=l.value,p=d&&d.components[c];if(!p)return ao(n.default,{Component:p,route:f});const g=d.props[c],P=g?g===!0?f.params:typeof g=="function"?g(f):g:null,F=Wa(p,G({},P,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[c]=null)},ref:s}));return ao(n.default,{Component:F,route:f})||F}}});function ao(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ds=Uu;function Bu(e){const t=gu(e.routes,e),n=e.parseQuery||Nu,r=e.stringifyQuery||Zi,a=e.history,i=cn(),o=cn(),l=cn(),s=af(st);let f=st;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Dr.bind(null,b=>""+b),d=Dr.bind(null,Tu),p=Dr.bind(null,cr);function g(b,T){let O,$;return Ts(b)?(O=t.getRecordMatcher(b),$=T):$=b,t.addRoute($,O)}function P(b){const T=t.getRecordMatcher(b);T&&t.removeRoute(T)}function C(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function x(b,T){if(T=G({},T||s.value),typeof b=="string"){const h=Ur(n,b,T.path),v=t.resolve({path:h.path},T),y=a.createHref(h.fullPath);return G(h,v,{params:p(v.params),hash:cr(h.hash),redirectedFrom:void 0,href:y})}let O;if("path"in b)O=G({},b,{path:Ur(n,b.path,T.path).path});else{const h=G({},b.params);for(const v in h)h[v]==null&&delete h[v];O=G({},b,{params:d(h)}),T.params=d(T.params)}const $=t.resolve(O,T),X=b.hash||"";$.params=c(p($.params));const u=Yc(r,G({},b,{hash:Su(X),path:$.path})),m=a.createHref(u);return G({fullPath:u,hash:X,query:r===Zi?Mu(b.query):b.query||{}},$,{redirectedFrom:void 0,href:m})}function w(b){return typeof b=="string"?Ur(n,b,s.value.path):G({},b)}function L(b,T){if(f!==b)return Zt(8,{from:T,to:b})}function S(b){return ie(b)}function H(b){return S(G(w(b),{replace:!0}))}function Z(b){const T=b.matched[b.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let $=typeof O=="function"?O(b):O;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=w($):{path:$},$.params={}),G({query:b.query,hash:b.hash,params:"path"in $?{}:b.params},$)}}function ie(b,T){const O=f=x(b),$=s.value,X=b.state,u=b.force,m=b.replace===!0,h=Z(O);if(h)return ie(G(w(h),{state:typeof h=="object"?G({},X,h.state):X,force:u,replace:m}),T||O);const v=O;v.redirectedFrom=T;let y;return!u&&Kc(r,$,O)&&(y=Zt(16,{to:v,from:$}),De($,$,!0,!1)),(y?Promise.resolve(y):Pe(v,$)).catch(_=>Xe(_)?Xe(_,2)?_:it(_):V(_,v,$)).then(_=>{if(_){if(Xe(_,2))return ie(G({replace:m},w(_.to),{state:typeof _.to=="object"?G({},X,_.to.state):X,force:u}),T||v)}else _=yt(v,$,!0,m,X);return at(v,$,_),_})}function ke(b,T){const O=L(b,T);return O?Promise.reject(O):Promise.resolve()}function be(b){const T=Mt.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(b):b()}function Pe(b,T){let O;const[$,X,u]=Hu(b,T);O=Br($.reverse(),"beforeRouteLeave",b,T);for(const h of $)h.leaveGuards.forEach(v=>{O.push(ct(v,b,T))});const m=ke.bind(null,b,T);return O.push(m),he(O).then(()=>{O=[];for(const h of i.list())O.push(ct(h,b,T));return O.push(m),he(O)}).then(()=>{O=Br(X,"beforeRouteUpdate",b,T);for(const h of X)h.updateGuards.forEach(v=>{O.push(ct(v,b,T))});return O.push(m),he(O)}).then(()=>{O=[];for(const h of u)if(h.beforeEnter)if(je(h.beforeEnter))for(const v of h.beforeEnter)O.push(ct(v,b,T));else O.push(ct(h.beforeEnter,b,T));return O.push(m),he(O)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),O=Br(u,"beforeRouteEnter",b,T),O.push(m),he(O))).then(()=>{O=[];for(const h of o.list())O.push(ct(h,b,T));return O.push(m),he(O)}).catch(h=>Xe(h,8)?h:Promise.reject(h))}function at(b,T,O){l.list().forEach($=>be(()=>$(b,T,O)))}function yt(b,T,O,$,X){const u=L(b,T);if(u)return u;const m=T===st,h=jt?history.state:{};O&&($||m?a.replace(b.fullPath,G({scroll:m&&h&&h.scroll},X)):a.push(b.fullPath,X)),s.value=b,De(b,T,O,m),it()}let ze;function on(){ze||(ze=a.listen((b,T,O)=>{if(!Fn.listening)return;const $=x(b),X=Z($);if(X){ie(G(X,{replace:!0}),$).catch(vn);return}f=$;const u=s.value;jt&&eu(Yi(u.fullPath,O.delta),Cr()),Pe($,u).catch(m=>Xe(m,12)?m:Xe(m,2)?(ie(m.to,$).then(h=>{Xe(h,20)&&!O.delta&&O.type===Pn.pop&&a.go(-1,!1)}).catch(vn),Promise.reject()):(O.delta&&a.go(-O.delta,!1),V(m,$,u))).then(m=>{m=m||yt($,u,!1),m&&(O.delta&&!Xe(m,8)?a.go(-O.delta,!1):O.type===Pn.pop&&Xe(m,20)&&a.go(-1,!1)),at($,u,m)}).catch(vn)}))}let Tt=cn(),ue=cn(),J;function V(b,T,O){it(b);const $=ue.list();return $.length?$.forEach(X=>X(b,T,O)):console.error(b),Promise.reject(b)}function Ve(){return J&&s.value!==st?Promise.resolve():new Promise((b,T)=>{Tt.add([b,T])})}function it(b){return J||(J=!b,on(),Tt.list().forEach(([T,O])=>b?O(b):T()),Tt.reset()),b}function De(b,T,O,$){const{scrollBehavior:X}=e;if(!jt||!X)return Promise.resolve();const u=!O&&tu(Yi(b.fullPath,0))||($||!O)&&history.state&&history.state.scroll||null;return is().then(()=>X(b,T,u)).then(m=>m&&Zc(m)).catch(m=>V(m,b,T))}const xe=b=>a.go(b);let Nt;const Mt=new Set,Fn={currentRoute:s,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:C,resolve:x,options:e,push:S,replace:H,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ue.add,isReady:Ve,install(b){const T=this;b.component("RouterLink",ju),b.component("RouterView",Ds),b.config.globalProperties.$router=T,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(s)}),jt&&!Nt&&s.value===st&&(Nt=!0,S(a.location).catch(X=>{}));const O={};for(const X in st)Object.defineProperty(O,X,{get:()=>s.value[X],enumerable:!0});b.provide(Sr,T),b.provide(Ka,Go(O)),b.provide(ca,s);const $=b.unmount;Mt.add(b),b.unmount=function(){Mt.delete(b),Mt.size<1&&(f=st,ze&&ze(),ze=null,s.value=st,Nt=!1,J=!1),$()}}};function he(b){return b.reduce((T,O)=>T.then(()=>be(O)),Promise.resolve())}return Fn}function Hu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(f=>Jt(f,l))?r.push(l):n.push(l));const s=e.matched[o];s&&(t.matched.find(f=>Jt(f,s))||a.push(s))}return[n,r,a]}function Wu(){return $e(Sr)}function up(){return $e(Ka)}const Yu={class:"shadow"},Ku={class:"container"},qu=Y("h1",null,"Where in the world?",-1),Vu={__name:"Navbar",setup(e){const t=dt(!1),n=dt("Light Mode"),r=dt("fa-regular fa-sun"),a=()=>{t.value=!t.value,n.value=t.value?"Dark Mode":"Light Mode",r.value=t.value?"fa-solid fa-moon":"fa-regular fa-sun",t.value?document.querySelector("body").classList.add("dark"):document.querySelector("body").classList.remove("dark")};return(i,o)=>{const l=Ff("font-awesome-icon");return pt(),Xt("header",null,[Y("nav",Yu,[Y("div",Ku,[qu,Y("div",{class:"mode",onClick:a},[le(l,{icon:r.value},null,8,["icon"]),Kt(" "+zt(n.value),1)])])])])}}},Xu={__name:"App",setup(e){return(t,n)=>(pt(),Xt(Ce,null,[le(Vu),le(Ke(Ds))],64))}},Gu="modulepreload",Qu=function(e){return"/"+e},io={},Ju=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Qu(i),i in io)return;io[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Gu,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const Zu={class:"flag"},ed=["src","alt"],td={class:"overview"},nd=Y("span",null,"Population: ",-1),rd=Y("span",null,"Region: ",-1),ad=Y("span",null,"Capital: ",-1),id={__name:"Card",props:["country"],setup(e){const t=Wu();return(n,r)=>(pt(),Xt("div",{class:"card",onClick:r[0]||(r[0]=a=>Ke(t).push(`/details/${e.country.cca3}`))},[Y("div",Zu,[Y("img",{src:e.country.flags.svg,alt:e.country.flags.alt},null,8,ed)]),Y("div",td,[Y("h3",null,zt(e.country.name.common),1),Y("p",null,[nd,Kt(zt(e.country.population.toLocaleString("en-US")),1)]),Y("p",null,[rd,Kt(zt(e.country.region),1)]),Y("p",null,[ad,Kt(zt(e.country.capital?e.country.capital[0]:"Unnown"),1)])])]))}};function oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oo(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function od(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function so(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sd(e,t,n){return t&&so(e.prototype,t),n&&so(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return fd(e)||ud(e,t)||Us(e,t)||md()}function Nn(e){return ld(e)||cd(e)||Us(e)||dd()}function ld(e){if(Array.isArray(e))return ua(e)}function fd(e){if(Array.isArray(e))return e}function cd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ud(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Us(e,t){if(e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function md(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lo=function(){},Va={},Bs={},Hs=null,Ws={mark:lo,measure:lo};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(Bs=document),typeof MutationObserver<"u"&&(Hs=MutationObserver),typeof performance<"u"&&(Ws=performance)}catch{}var pd=Va.navigator||{},fo=pd.userAgent,co=fo===void 0?"":fo,gt=Va,re=Bs,uo=Hs,Hn=Ws;gt.document;var rt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Ys=~co.indexOf("MSIE")||~co.indexOf("Trident/"),Wn,Yn,Kn,qn,Vn,Ze="___FONT_AWESOME___",da=16,Ks="fa",qs="svg-inline--fa",Rt="data-fa-i2svg",ma="data-fa-pseudo-element",hd="data-fa-pseudo-element-pending",Xa="data-prefix",Ga="data-icon",mo="fontawesome-i2svg",gd="async",vd=["HTML","HEAD","STYLE","SCRIPT"],Vs=function(){try{return!0}catch{return!1}}(),ne="classic",oe="sharp",Qa=[ne,oe];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var Cn=Mn((Wn={},ce(Wn,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ce(Wn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Wn)),Sn=Mn((Yn={},ce(Yn,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Yn,oe,{solid:"fass",regular:"fasr",light:"fasl"}),Yn)),Rn=Mn((Kn={},ce(Kn,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Kn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Kn)),bd=Mn((qn={},ce(qn,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(qn,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),qn)),yd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Xs="fa-layers-text",xd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wd=Mn((Vn={},ce(Vn,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Vn,oe,{900:"fass",400:"fasr",300:"fasl"}),Vn)),Gs=[1,2,3,4,5,6,7,8,9,10],_d=Gs.concat([11,12,13,14,15,16,17,18,19,20]),Ed=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Sn[ne]).map(In.add.bind(In));Object.keys(Sn[oe]).map(In.add.bind(In));var kd=[].concat(Qa,Nn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Gs.map(function(e){return"".concat(e,"x")})).concat(_d.map(function(e){return"w-".concat(e)})),yn=gt.FontAwesomeConfig||{};function Ad(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Od(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Pd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pd.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=Od(Ad(n));a!=null&&(yn[r]=a)})}var Qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ks,replacementClass:qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yn.familyPrefix&&(yn.cssPrefix=yn.familyPrefix);var en=I(I({},Qs),yn);en.autoReplaceSvg||(en.observeMutations=!1);var M={};Object.keys(Qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){en[e]=n,xn.forEach(function(r){return r(M)})},get:function(){return en[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,xn.forEach(function(n){return n(M)})},get:function(){return en.cssPrefix}});gt.FontAwesomeConfig=M;var xn=[];function Cd(e){return xn.push(e),function(){xn.splice(xn.indexOf(e),1)}}var lt=da,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sd(e){if(!(!e||!rt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var Rd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tn(){for(var e=12,t="";e-- >0;)t+=Rd[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ja(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Js(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Id(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Js(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Za(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function Td(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:f}}function Nd(e){var t=e.transform,n=e.width,r=n===void 0?da:n,a=e.height,i=a===void 0?da:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Ys?s+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):s+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),s+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Md=`:root, :host {
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
}`;function Zs(){var e=Ks,t=qs,n=M.cssPrefix,r=M.replacementClass,a=Md;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var po=!1;function Hr(){M.autoAddCss&&!po&&(Sd(Zs()),po=!0)}var Ld={mixout:function(){return{dom:{css:Zs,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},et=gt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Me=et[Ze],el=[],Fd=function e(){re.removeEventListener("DOMContentLoaded",e),dr=1,el.map(function(t){return t()})},dr=!1;rt&&(dr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),dr||re.addEventListener("DOMContentLoaded",Fd));function $d(e){rt&&(dr?setTimeout(e,0):el.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Js(e):"<".concat(t," ").concat(Id(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function ho(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?jd(n,a):n,s,f,c;for(r===void 0?(s=1,c=t[i[0]]):(s=0,c=r);s<o;s++)f=i[s],c=l(c,t[f],f,t);return c};function zd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function pa(e){var t=zd(e);return t.length===1?t[0].toString(16):null}function Dd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function go(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=go(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,go(t)):Me.styles[e]=I(I({},Me.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Xn,Gn,Qn,Dt=Me.styles,Ud=Me.shims,Bd=(Xn={},ce(Xn,ne,Object.values(Rn[ne])),ce(Xn,oe,Object.values(Rn[oe])),Xn),ei=null,tl={},nl={},rl={},al={},il={},Hd=(Gn={},ce(Gn,ne,Object.keys(Cn[ne])),ce(Gn,oe,Object.keys(Cn[oe])),Gn);function Wd(e){return~kd.indexOf(e)}function Yd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Wd(a)?a:null}var ol=function(){var t=function(i){return Wr(Dt,function(o,l,s){return o[s]=Wr(l,i,{}),o},{})};tl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),nl=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),il=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Dt||M.autoFetchSvg,r=Wr(Ud,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});rl=r.names,al=r.unicodes,ei=Ir(M.styleDefault,{family:M.familyDefault})};Cd(function(e){ei=Ir(e.styleDefault,{family:M.familyDefault})});ol();function ti(e,t){return(tl[e]||{})[t]}function Kd(e,t){return(nl[e]||{})[t]}function Ot(e,t){return(il[e]||{})[t]}function sl(e){return rl[e]||{prefix:null,iconName:null}}function qd(e){var t=al[e],n=ti("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return ei}var ni=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,a=Cn[r][e],i=Sn[r][e]||Sn[r][a],o=e in Me.styles?e:null;return i||o||null}var vo=(Qn={},ce(Qn,ne,Object.keys(Rn[ne])),ce(Qn,oe,Object.keys(Rn[oe])),Qn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ce(t,ne,"".concat(M.cssPrefix,"-").concat(ne)),ce(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,l=ne;(e.includes(i[ne])||e.some(function(f){return vo[ne].includes(f)}))&&(l=ne),(e.includes(i[oe])||e.some(function(f){return vo[oe].includes(f)}))&&(l=oe);var s=e.reduce(function(f,c){var d=Yd(M.cssPrefix,c);if(Dt[c]?(c=Bd[l].includes(c)?bd[l][c]:c,o=c,f.prefix=c):Hd[l].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:l})):d?f.iconName=d:c!==M.replacementClass&&c!==i[ne]&&c!==i[oe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?sl(f.iconName):{},g=Ot(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Dt.far&&Dt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ni());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===oe&&(Dt.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=Ot(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=vt()||"fas"),s}var Vd=function(){function e(){od(this,e),this.definitions={}}return sd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),o[l]),ha(l,o[l]);var s=Rn[ne][l];s&&ha(s,o[l]),ol()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,f=o.icon,c=f[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=f)}),n[l][s]=f}),n}}]),e}(),bo=[],Ut={},qt={},Xd=Object.keys(qt);function Gd(e,t){var n=t.mixoutsTo;return bo=e,Ut={},Object.keys(qt).forEach(function(r){Xd.indexOf(r)===-1&&delete qt[r]}),bo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ur(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ut[o]||(Ut[o]=[]),Ut[o].push(i[o])})}r.provides&&r.provides(qt)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qt[e]?qt[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=Ot(n,t)||t,ho(ll.definitions,n,t)||ho(Me.styles,n,t)}var ll=new Vd,Qd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},Jd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(It("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,$d(function(){em({autoReplaceSvgRoot:n}),It("watch",t)})}},Zd={icon:function(t){if(t===null)return null;if(ur(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(yd))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ot(i,t)||t}}}},Oe={noAuto:Qd,config:M,dom:Jd,parse:Zd,library:ll,findIconDefinition:va,toHtml:Ln},em=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Me.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Za(o)&&n.found&&!r.found){var l=n.width,s=n.height,f={x:l/s/2,y:.5};a.style=Rr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function nm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ri(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,P=r.found?r:n,C=P.width,F=P.height,x=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),L={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(F)})},S=x&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/F*16*.0625,"em")}:{};g&&(L.attributes[Rt]=""),s&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(c||Tn())},children:[s]}),delete L.attributes.title);var H=I(I({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:l,styles:I(I({},S),d.styles)}),Z=r.found&&n.found?tt("generateAbstractMask",H)||{children:[],attributes:{}}:tt("generateAbstractIcon",H)||{children:[],attributes:{}},ie=Z.children,ke=Z.attributes;return H.children=ie,H.attributes=ke,l?nm(H):tm(H)}function yo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[Rt]="");var c=I({},o.styles);Za(a)&&(c.transform=Nd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function rm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yr=Me.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var am={found:!1,width:512,height:512};function im(e,t){!Vs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=sl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yr[t]&&Yr[t][e]){var o=Yr[t][e];return r(ba(o))}im(e,t),r(I(I({},am),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var xo=function(){},xa=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:xo,measure:xo},mn='FA "6.4.2"',om=function(t){return xa.mark("".concat(mn," ").concat(t," begins")),function(){return fl(t)}},fl=function(t){xa.mark("".concat(mn," ").concat(t," ends")),xa.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},ai={begin:om,end:fl},rr=function(){};function wo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function sm(e){var t=e.getAttribute?e.getAttribute(Xa):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function lm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function fm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function cm(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function um(e){return re.createElement(e)}function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?cm:um:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cl(o,{ceFn:r}))}),a}function dm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cl(a),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=re.createComment(dm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ja(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Ln(l)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function _o(e){e()}function ul(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=_o;M.mutateApproach===gd&&(r=gt.requestAnimationFrame||_o),r(function(){var a=fm(),i=ai.begin("mutate");e.map(a),i(),n()})}}var ii=!1;function dl(){ii=!0}function wa(){ii=!1}var mr=null;function Eo(e){if(uo&&M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,l=e.observeMutationsRoot,s=l===void 0?re:l;mr=new uo(function(f){if(!ii){var c=vt();an(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&wo(d.target)&&~Ed.indexOf(d.attributeName))if(d.attributeName==="class"&&sm(d.target)){var p=Tr(Ja(d.target)),g=p.prefix,P=p.iconName;d.target.setAttribute(Xa,g||c),P&&d.target.setAttribute(Ga,P)}else lm(d.target)&&a(d.target)})}}),rt&&mr.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mm(){mr&&mr.disconnect()}function pm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function hm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Ja(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kd(a.prefix,e.innerText)||ti(a.prefix,pa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function gm(e){var t=an(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function vm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hm(e),r=n.iconName,a=n.prefix,i=n.rest,o=gm(e),l=ga("parseNodeAttributes",{},e),s=t.styleParser?pm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var bm=Me.styles;function ml(e){var t=M.autoReplaceSvg==="nest"?ko(e,{styleParser:!1}):ko(e);return~t.extra.classes.indexOf(Xs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var bt=new Set;Qa.map(function(e){bt.add("fa-".concat(e))});Object.keys(Cn[ne]).map(bt.add.bind(bt));Object.keys(Cn[oe]).map(bt.add.bind(bt));bt=Nn(bt);function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(mo,"-").concat(d))},a=function(d){return n.remove("".concat(mo,"-").concat(d))},i=M.autoFetchSvg?bt:Qa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(bm));i.includes("fa")||i.push("fa");var o=[".".concat(Xs,":not([").concat(Rt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=an(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=ai.begin("onTree"),f=l.reduce(function(c,d){try{var p=ml(d);p&&c.push(p)}catch(g){Vs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){ul(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(p){s(),d(p)})})}function ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ml(e).then(function(n){n&&ul([n],t)})}function xm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:va(a||{})),e(r,I(I({},n),{},{mask:a}))}}var wm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,P=g===void 0?null:g,C=n.classes,F=C===void 0?[]:C,x=n.attributes,w=x===void 0?{}:x,L=n.styles,S=L===void 0?{}:L;if(t){var H=t.prefix,Z=t.iconName,ie=t.icon;return Nr(I({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Tn()):(w["aria-hidden"]="true",w.focusable="false")),ri({icons:{main:ba(ie),mask:s?ba(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:Z,transform:I(I({},Ye),a),symbol:o,title:p,maskId:c,titleId:P,extra:{attributes:w,styles:S,classes:F}})})}},_m={mixout:function(){return{icon:xm(wm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ao,n.nodeCallback=ym,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return Ao(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,P){Promise.all([ya(a,l),c.iconName?ya(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var F=qa(C,2),x=F[0],w=F[1];g([n,ri({icons:{main:x,mask:w},prefix:l,iconName:a,transform:s,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Rr(l);s.length>0&&(a.style=s);var f;return Za(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Em={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},km={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,f=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return Nr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),rm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Nn(l))}})})}}}},Am={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,l=o===void 0?null:o,s=r.classes,f=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Nr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),yo({content:n,transform:I(I({},Ye),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Nn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Ys){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/f,s=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,yo({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},Om=new RegExp('"',"ug"),Oo=[1105920,1112319];function Pm(e){var t=e.replace(Om,""),n=Dd(t,0),r=n>=Oo[0]&&n<=Oo[1],a=t.length===2?t[0]===t[1]:!1;return{value:pa(a?t[0]:t),isSecondary:r||a}}function Po(e,t){var n="".concat(hd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=an(e.children),o=i.filter(function(ie){return ie.getAttribute(ma)===t})[0],l=gt.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(xd),f=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(s[2])?oe:ne,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Sn[p][s[2].toLowerCase()]:wd[p][f],P=Pm(d),C=P.value,F=P.isSecondary,x=s[0].startsWith("FontAwesome"),w=ti(g,C),L=w;if(x){var S=qd(C);S.iconName&&S.prefix&&(w=S.iconName,g=S.prefix)}if(w&&!F&&(!o||o.getAttribute(Xa)!==g||o.getAttribute(Ga)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var H=vm(),Z=H.extra;Z.attributes[ma]=t,ya(w,g).then(function(ie){var ke=ri(I(I({},H),{},{icons:{main:ie,mask:ni()},prefix:g,iconName:L,extra:Z,watchable:!0})),be=re.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=ke.map(function(Pe){return Ln(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cm(e){return Promise.all([Po(e,"::before"),Po(e,"::after")])}function Sm(e){return e.parentNode!==document.head&&!~vd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Co(e){if(rt)return new Promise(function(t,n){var r=an(e.querySelectorAll("*")).filter(Sm).map(Cm),a=ai.begin("searchPseudoElements");dl(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var Rm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Co,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&Co(a)}}},So=!1,Im={mixout:function(){return{dom:{unwatch:function(){dl(),So=!0}}}},hooks:function(){return{bootstrap:function(){Eo(ga("mutationObserverCallbacks",{}))},noAuto:function(){mm()},watch:function(n){var r=n.observeMutationsRoot;So?wa():Eo(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ro=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Tm={mixout:function(){return{parse:{transform:function(n){return Ro(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ro(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Kr={x:0,y:0,width:"100%",height:"100%"};function Io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nm(e){return e.tag==="g"?e.children:[e]}var Mm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ni();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Td({transform:s,containerWidth:d,iconWidth:f}),P={tag:"rect",attributes:I(I({},Kr),{},{fill:"white"})},C=c.children?{children:c.children.map(Io)}:{},F={tag:"g",attributes:I({},g.inner),children:[Io(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},C))]},x={tag:"g",attributes:I({},g.outer),children:[F]},w="mask-".concat(l||Tn()),L="clip-".concat(l||Tn()),S={tag:"mask",attributes:I(I({},Kr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Nm(p)},S]};return r.push(H,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(w,")")},Kr)}),{children:r,attributes:a}}}},Lm={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Fm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},$m=[Ld,_m,Em,km,Am,Rm,Im,Tm,Mm,Lm,Fm];Gd($m,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var jm=Oe.library;Oe.dom;var _a=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var zm=Oe.icon;Oe.layer;Oe.text;Oe.counter;function To(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?To(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):To(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Um(e,t){if(e==null)return{};var n=Dm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pl={exports:{}};(function(e){(function(t){var n=function(x,w,L){if(!f(w)||d(w)||p(w)||g(w)||s(w))return w;var S,H=0,Z=0;if(c(w))for(S=[],Z=w.length;H<Z;H++)S.push(n(x,w[H],L));else{S={};for(var ie in w)Object.prototype.hasOwnProperty.call(w,ie)&&(S[x(ie,L)]=n(x,w[ie],L))}return S},r=function(x,w){w=w||{};var L=w.separator||"_",S=w.split||/(?=[A-Z])/;return x.split(S).join(L)},a=function(x){return P(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(w,L){return L?L.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var w=a(x);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(x,w){return r(x,w).toLowerCase()},l=Object.prototype.toString,s=function(x){return typeof x=="function"},f=function(x){return x===Object(x)},c=function(x){return l.call(x)=="[object Array]"},d=function(x){return l.call(x)=="[object Date]"},p=function(x){return l.call(x)=="[object RegExp]"},g=function(x){return l.call(x)=="[object Boolean]"},P=function(x){return x=x-0,x===x},C=function(x,w){var L=w&&"process"in w?w.process:w;return typeof L!="function"?x:function(S,H){return L(S,x,H)}},F={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,w){return n(C(a,w),x)},decamelizeKeys:function(x,w){return n(C(o,w),x,w)},pascalizeKeys:function(x,w){return n(C(i,w),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(Bm)})(pl);var Hm=pl.exports,Wm=["class","style"];function Ym(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Hm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Km(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function hl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(s){return hl(s)}),a=Object.keys(e.attributes||{}).reduce(function(s,f){var c=e.attributes[f];switch(f){case"class":s.class=Km(c);break;case"style":s.style=Ym(c);break;default:s.attrs[f]=c}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=Um(n,Wm);return Wa(e.tag,Qe(Qe(Qe({},t),{},{class:a.class,style:Qe(Qe({},a.style),o)},a.attrs),l),r)}var gl=!1;try{gl=!0}catch{}function qm(){if(!gl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Vm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function No(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_a.icon)return _a.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ea=za({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return No(t.icon)}),i=me(function(){return qr("classes",Vm(t))}),o=me(function(){return qr("transform",typeof t.transform=="string"?_a.transform(t.transform):t.transform)}),l=me(function(){return qr("mask",No(t.mask))}),s=me(function(){return zm(a.value,Qe(Qe(Qe(Qe({},i.value),o.value),l.value),{},{symbol:t.symbol,title:t.title}))});pn(s,function(c){if(!c)return qm("Could not find one or more icon(s)",a.value,l.value)},{immediate:!0});var f=me(function(){return s.value?hl(s.value.abstract[0],{},r):null});return function(){return f.value}}});const Xm={class:"search-nav"},Gm={class:"container"},Qm={class:"dropdown shadow"},Jm={class:"default-option"},Zm={__name:"Search",emits:["filterSearch"],setup(e,{emit:t}){const n=dt(!1),r=dt(""),a=dt("Filter by Region"),i=()=>{document.querySelector("input").focus()},o=(l,s)=>{t("filterSearch",l,s=="Filter by Region"?"All":s)};return(l,s)=>(pt(),Xt("div",Xm,[Y("div",Gm,[Y("div",{class:"input shadow",onClick:i},[Y("span",null,[le(Ke(Ea),{icon:"fa-solid fa-magnifying-glass"})]),xi(Y("input",{type:"text",name:"input-field",id:"input-field",placeholder:"Search for a country...","onUpdate:modelValue":s[0]||(s[0]=f=>r.value=f),onInput:s[1]||(s[1]=f=>{o("Name",r.value),a.value="Filter by Region"}),onFocus:s[2]||(s[2]=f=>n.value=!1)},null,544),[[Fc,r.value,void 0,{trim:!0}]])]),Y("div",Qm,[Y("ul",{class:"selection",onClick:s[9]||(s[9]=f=>n.value=!n.value),onFocusout:s[10]||(s[10]=f=>n.value=!1)},[Y("li",Jm,[Kt(zt(a.value)+" ",1),Y("span",null,[le(Ke(Ea),{icon:n.value?"fa-solid fa-angle-up":"fa-solid fa-angle-down"},null,8,["icon"])])]),Y("ul",{class:yr(["options shadow",n.value?"show":""])},[xi(Y("li",{class:"option",onClick:s[3]||(s[3]=f=>{a.value="Filter by Region",o("Region",a.value)})},"All",512),[[$c,a.value!="Filter by Region"]]),Y("li",{class:"option",onClick:s[4]||(s[4]=f=>{a.value="Africa",o("Region",a.value)})},"Africa"),Y("li",{class:"option",onClick:s[5]||(s[5]=f=>{a.value="America",o("Region",a.value)})},"America"),Y("li",{class:"option",onClick:s[6]||(s[6]=f=>{a.value="Asia",o("Region",a.value)})},"Asia"),Y("li",{class:"option",onClick:s[7]||(s[7]=f=>{a.value="Europe",o("Region",a.value)})},"Europe"),Y("li",{class:"option",onClick:s[8]||(s[8]=f=>{a.value="Oceania",o("Region",a.value)})},"Oceania")],2)],32)])])]))}};const ep={class:"contents"},tp={class:"container"},np={__name:"HomeView",setup(e){const t=(a,i,o=!0)=>a.sort((l,s)=>{let f=l[i],c=s[i];return o?f<c?-1:f>c?1:0:f>c?-1:f<c?1:0}),n=dt(null),r=(a=null,i="All")=>{let o="https://restcountries.com/v3.1/";i==""&&(i="All"),i=="All"?o=o+"all":a=="Region"?o=o+"region/"+i:o=o+"name/"+i,fetch(o).then(l=>l.json()).then(l=>n.value=t(l,"cca3"))};return r(),(a,i)=>(pt(),Xt(Ce,null,[le(Zm,{onFilterSearch:r}),Y("main",ep,[Y("div",tp,[(pt(!0),Xt(Ce,null,zf(n.value,o=>(pt(),Os(id,{key:o.cca3,country:o},null,8,["country"]))),128))])])],64))}},rp=Bu({history:iu("/"),routes:[{path:"/",name:"home",component:np},{path:"/home",redirect:"/"},{path:"/details/:id",name:"details",component:()=>Ju(()=>import("./DetailsView-71343dde.js"),["assets/DetailsView-71343dde.js","assets/DetailsView-b00fddb0.css"])}]});var ap={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},ip={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},op={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},sp={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},lp={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},fp={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]};jm.add(ap,op,fp,lp,ip,sp);const oi=Dc(Xu);oi.use(rp);oi.component("font-awesome-icon",Ea);oi.mount("#app");export{Ce as F,Wu as a,Y as b,Xt as c,Ke as d,le as e,Kt as f,zf as g,Ea as h,cp as i,pt as o,dt as r,zt as t,up as u};
