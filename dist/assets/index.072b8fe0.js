(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function G7(e,c){const a=Object.create(null),s=e.split(",");for(let t=0;t<s.length;t++)a[s[t]]=!0;return c?t=>!!a[t.toLowerCase()]:t=>!!a[t]}function W7(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++){const s=e[a],t=R1(s)?fp(s):W7(s);if(t)for(const r in t)c[r]=t[r]}return c}else{if(R1(e))return e;if(b1(e))return e}}const ip=/;(?![^(]*\))/g,op=/:([^]+)/,lp=/\/\*.*?\*\//gs;function fp(e){const c={};return e.replace(lp,"").split(ip).forEach(a=>{if(a){const s=a.split(op);s.length>1&&(c[s[0].trim()]=s[1].trim())}}),c}function j7(e){let c="";if(R1(e))c=e;else if(Q(e))for(let a=0;a<e.length;a++){const s=j7(e[a]);s&&(c+=s+" ")}else if(b1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",up=G7(hp);function Bs(e){return!!e||e===""}const s8=e=>R1(e)?e:e==null?"":Q(e)||b1(e)&&(e.toString===$s||!Y(e.toString))?JSON.stringify(e,Os,2):String(e),Os=(e,c)=>c&&c.__v_isRef?Os(e,c.value):t4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[s,t])=>(a[`${s} =>`]=t,a),{})}:qs(c)?{[`Set(${c.size})`]:[...c.values()]}:b1(c)&&!Q(c)&&!Gs(c)?String(c):c,d1={},s4=[],y2=()=>{},mp=()=>!1,vp=/^on[^a-z]/,i5=e=>vp.test(e),K7=e=>e.startsWith("onUpdate:"),s2=Object.assign,Z7=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},Cp=Object.prototype.hasOwnProperty,s1=(e,c)=>Cp.call(e,c),Q=Array.isArray,t4=e=>o5(e)==="[object Map]",qs=e=>o5(e)==="[object Set]",Y=e=>typeof e=="function",R1=e=>typeof e=="string",Q7=e=>typeof e=="symbol",b1=e=>e!==null&&typeof e=="object",Us=e=>b1(e)&&Y(e.then)&&Y(e.catch),$s=Object.prototype.toString,o5=e=>$s.call(e),zp=e=>o5(e).slice(8,-1),Gs=e=>o5(e)==="[object Object]",Y7=e=>R1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,y8=G7(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),l5=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},pp=/-(\w)/g,I2=l5(e=>e.replace(pp,(c,a)=>a?a.toUpperCase():"")),dp=/\B([A-Z])/g,y4=l5(e=>e.replace(dp,"-$1").toLowerCase()),f5=l5(e=>e.charAt(0).toUpperCase()+e.slice(1)),m0=l5(e=>e?`on${f5(e)}`:""),i6=(e,c)=>!Object.is(e,c),v0=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},D8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},Ws=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Le;const Hp=()=>Le||(Le=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let A2;class js{constructor(c=!1){this.detached=c,this.active=!0,this.effects=[],this.cleanups=[],this.parent=A2,!c&&A2&&(this.index=(A2.scopes||(A2.scopes=[])).push(this)-1)}run(c){if(this.active){const a=A2;try{return A2=this,c()}finally{A2=a}}}on(){A2=this}off(){A2=this.parent}stop(c){if(this.active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function Ks(e){return new js(e)}function Mp(e,c=A2){c&&c.active&&c.effects.push(e)}const X7=e=>{const c=new Set(e);return c.w=0,c.n=0,c},Zs=e=>(e.w&h3)>0,Qs=e=>(e.n&h3)>0,Vp=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=h3},gp=e=>{const{deps:c}=e;if(c.length){let a=0;for(let s=0;s<c.length;s++){const t=c[s];Zs(t)&&!Qs(t)?t.delete(e):c[a++]=t,t.w&=~h3,t.n&=~h3}c.length=a}},B0=new WeakMap;let q4=0,h3=1;const O0=30;let V2;const E3=Symbol(""),q0=Symbol("");class J7{constructor(c,a=null,s){this.fn=c,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Mp(this,s)}run(){if(!this.active)return this.fn();let c=V2,a=n3;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=V2,V2=this,n3=!0,h3=1<<++q4,q4<=O0?Vp(this):be(this),this.fn()}finally{q4<=O0&&gp(this),h3=1<<--q4,V2=this.parent,n3=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){V2===this?this.deferStop=!0:this.active&&(be(this),this.onStop&&this.onStop(),this.active=!1)}}function be(e){const{deps:c}=e;if(c.length){for(let a=0;a<c.length;a++)c[a].delete(e);c.length=0}}let n3=!0;const Ys=[];function S4(){Ys.push(n3),n3=!1}function N4(){const e=Ys.pop();n3=e===void 0?!0:e}function m2(e,c,a){if(n3&&V2){let s=B0.get(e);s||B0.set(e,s=new Map);let t=s.get(a);t||s.set(a,t=X7()),Xs(t)}}function Xs(e,c){let a=!1;q4<=O0?Qs(e)||(e.n|=h3,a=!Zs(e)):a=!e.has(V2),a&&(e.add(V2),V2.deps.push(e))}function U2(e,c,a,s,t,r){const n=B0.get(e);if(!n)return;let i=[];if(c==="clear")i=[...n.values()];else if(a==="length"&&Q(e)){const o=Ws(s);n.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(a!==void 0&&i.push(n.get(a)),c){case"add":Q(e)?Y7(a)&&i.push(n.get("length")):(i.push(n.get(E3)),t4(e)&&i.push(n.get(q0)));break;case"delete":Q(e)||(i.push(n.get(E3)),t4(e)&&i.push(n.get(q0)));break;case"set":t4(e)&&i.push(n.get(E3));break}if(i.length===1)i[0]&&U0(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);U0(X7(o))}}function U0(e,c){const a=Q(e)?e:[...e];for(const s of a)s.computed&&xe(s);for(const s of a)s.computed||xe(s)}function xe(e,c){(e!==V2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lp=G7("__proto__,__v_isRef,__isVue"),Js=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Q7)),bp=c9(),xp=c9(!1,!0),yp=c9(!0),ye=Sp();function Sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const s=l1(this);for(let r=0,n=this.length;r<n;r++)m2(s,"get",r+"");const t=s[c](...a);return t===-1||t===!1?s[c](...a.map(l1)):t}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){S4();const s=l1(this)[c].apply(this,a);return N4(),s}}),e}function c9(e=!1,c=!1){return function(s,t,r){if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return c;if(t==="__v_raw"&&r===(e?c?Up:tt:c?st:at).get(s))return s;const n=Q(s);if(!e&&n&&s1(ye,t))return Reflect.get(ye,t,r);const i=Reflect.get(s,t,r);return(Q7(t)?Js.has(t):Lp(t))||(e||m2(s,"get",t),c)?i:k1(i)?n&&Y7(t)?i:i.value:b1(i)?e?rt(i):w4(i):i}}const Np=ct(),wp=ct(!0);function ct(e=!1){return function(a,s,t,r){let n=a[s];if(m4(n)&&k1(n)&&!k1(t))return!1;if(!e&&(!R8(t)&&!m4(t)&&(n=l1(n),t=l1(t)),!Q(a)&&k1(n)&&!k1(t)))return n.value=t,!0;const i=Q(a)&&Y7(s)?Number(s)<a.length:s1(a,s),o=Reflect.set(a,s,t,r);return a===l1(r)&&(i?i6(t,n)&&U2(a,"set",s,t):U2(a,"add",s,t)),o}}function kp(e,c){const a=s1(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&U2(e,"delete",c,void 0),s}function Ap(e,c){const a=Reflect.has(e,c);return(!Q7(c)||!Js.has(c))&&m2(e,"has",c),a}function Tp(e){return m2(e,"iterate",Q(e)?"length":E3),Reflect.ownKeys(e)}const et={get:bp,set:Np,deleteProperty:kp,has:Ap,ownKeys:Tp},Ep={get:yp,set(e,c){return!0},deleteProperty(e,c){return!0}},Pp=s2({},et,{get:xp,set:wp}),e9=e=>e,h5=e=>Reflect.getPrototypeOf(e);function t8(e,c,a=!1,s=!1){e=e.__v_raw;const t=l1(e),r=l1(c);a||(c!==r&&m2(t,"get",c),m2(t,"get",r));const{has:n}=h5(t),i=s?e9:a?t9:o6;if(n.call(t,c))return i(e.get(c));if(n.call(t,r))return i(e.get(r));e!==t&&e.get(c)}function r8(e,c=!1){const a=this.__v_raw,s=l1(a),t=l1(e);return c||(e!==t&&m2(s,"has",e),m2(s,"has",t)),e===t?a.has(e):a.has(e)||a.has(t)}function n8(e,c=!1){return e=e.__v_raw,!c&&m2(l1(e),"iterate",E3),Reflect.get(e,"size",e)}function Se(e){e=l1(e);const c=l1(this);return h5(c).has.call(c,e)||(c.add(e),U2(c,"add",e,e)),this}function Ne(e,c){c=l1(c);const a=l1(this),{has:s,get:t}=h5(a);let r=s.call(a,e);r||(e=l1(e),r=s.call(a,e));const n=t.call(a,e);return a.set(e,c),r?i6(c,n)&&U2(a,"set",e,c):U2(a,"add",e,c),this}function we(e){const c=l1(this),{has:a,get:s}=h5(c);let t=a.call(c,e);t||(e=l1(e),t=a.call(c,e)),s&&s.call(c,e);const r=c.delete(e);return t&&U2(c,"delete",e,void 0),r}function ke(){const e=l1(this),c=e.size!==0,a=e.clear();return c&&U2(e,"clear",void 0,void 0),a}function i8(e,c){return function(s,t){const r=this,n=r.__v_raw,i=l1(n),o=c?e9:e?t9:o6;return!e&&m2(i,"iterate",E3),n.forEach((l,f)=>s.call(t,o(l),o(f),r))}}function o8(e,c,a){return function(...s){const t=this.__v_raw,r=l1(t),n=t4(r),i=e==="entries"||e===Symbol.iterator&&n,o=e==="keys"&&n,l=t[e](...s),f=a?e9:c?t9:o6;return!c&&m2(r,"iterate",o?q0:E3),{next(){const{value:h,done:m}=l.next();return m?{value:h,done:m}:{value:i?[f(h[0]),f(h[1])]:f(h),done:m}},[Symbol.iterator](){return this}}}}function J2(e){return function(...c){return e==="delete"?!1:this}}function Dp(){const e={get(r){return t8(this,r)},get size(){return n8(this)},has:r8,add:Se,set:Ne,delete:we,clear:ke,forEach:i8(!1,!1)},c={get(r){return t8(this,r,!1,!0)},get size(){return n8(this)},has:r8,add:Se,set:Ne,delete:we,clear:ke,forEach:i8(!1,!0)},a={get(r){return t8(this,r,!0)},get size(){return n8(this,!0)},has(r){return r8.call(this,r,!0)},add:J2("add"),set:J2("set"),delete:J2("delete"),clear:J2("clear"),forEach:i8(!0,!1)},s={get(r){return t8(this,r,!0,!0)},get size(){return n8(this,!0)},has(r){return r8.call(this,r,!0)},add:J2("add"),set:J2("set"),delete:J2("delete"),clear:J2("clear"),forEach:i8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=o8(r,!1,!1),a[r]=o8(r,!0,!1),c[r]=o8(r,!1,!0),s[r]=o8(r,!0,!0)}),[e,a,c,s]}const[Rp,Fp,Ip,_p]=Dp();function a9(e,c){const a=c?e?_p:Ip:e?Fp:Rp;return(s,t,r)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?s:Reflect.get(s1(a,t)&&t in s?a:s,t,r)}const Bp={get:a9(!1,!1)},Op={get:a9(!1,!0)},qp={get:a9(!0,!1)},at=new WeakMap,st=new WeakMap,tt=new WeakMap,Up=new WeakMap;function $p(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(e){return e.__v_skip||!Object.isExtensible(e)?0:$p(zp(e))}function w4(e){return m4(e)?e:s9(e,!1,et,Bp,at)}function Wp(e){return s9(e,!1,Pp,Op,st)}function rt(e){return s9(e,!0,Ep,qp,tt)}function s9(e,c,a,s,t){if(!b1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const r=t.get(e);if(r)return r;const n=Gp(e);if(n===0)return e;const i=new Proxy(e,n===2?s:a);return t.set(e,i),i}function i3(e){return m4(e)?i3(e.__v_raw):!!(e&&e.__v_isReactive)}function m4(e){return!!(e&&e.__v_isReadonly)}function R8(e){return!!(e&&e.__v_isShallow)}function nt(e){return i3(e)||m4(e)}function l1(e){const c=e&&e.__v_raw;return c?l1(c):e}function v4(e){return D8(e,"__v_skip",!0),e}const o6=e=>b1(e)?w4(e):e,t9=e=>b1(e)?rt(e):e;function it(e){n3&&V2&&(e=l1(e),Xs(e.dep||(e.dep=X7())))}function ot(e,c){e=l1(e),e.dep&&U0(e.dep)}function k1(e){return!!(e&&e.__v_isRef===!0)}function r9(e){return lt(e,!1)}function jp(e){return lt(e,!0)}function lt(e,c){return k1(e)?e:new Kp(e,c)}class Kp{constructor(c,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?c:l1(c),this._value=a?c:o6(c)}get value(){return it(this),this._value}set value(c){const a=this.__v_isShallow||R8(c)||m4(c);c=a?c:l1(c),i6(c,this._rawValue)&&(this._rawValue=c,this._value=a?c:o6(c),ot(this))}}function r4(e){return k1(e)?e.value:e}const Zp={get:(e,c,a)=>r4(Reflect.get(e,c,a)),set:(e,c,a,s)=>{const t=e[c];return k1(t)&&!k1(a)?(t.value=a,!0):Reflect.set(e,c,a,s)}};function ft(e){return i3(e)?e:new Proxy(e,Zp)}function Qp(e){const c=Q(e)?new Array(e.length):{};for(const a in e)c[a]=Xp(e,a);return c}class Yp{constructor(c,a,s){this._object=c,this._key=a,this._defaultValue=s,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}}function Xp(e,c,a){const s=e[c];return k1(s)?s:new Yp(e,c,a)}var ht;class Jp{constructor(c,a,s,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[ht]=!1,this._dirty=!0,this.effect=new J7(c,()=>{this._dirty||(this._dirty=!0,ot(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=s}get value(){const c=l1(this);return it(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}ht="__v_isReadonly";function cd(e,c,a=!1){let s,t;const r=Y(e);return r?(s=e,t=y2):(s=e.get,t=e.set),new Jp(s,t,r||!t,a)}function o3(e,c,a,s){let t;try{t=s?e(...s):e()}catch(r){u5(r,c,a)}return t}function S2(e,c,a,s){if(Y(e)){const r=o3(e,c,a,s);return r&&Us(r)&&r.catch(n=>{u5(n,c,a)}),r}const t=[];for(let r=0;r<e.length;r++)t.push(S2(e[r],c,a,s));return t}function u5(e,c,a,s=!0){const t=c?c.vnode:null;if(c){let r=c.parent;const n=c.proxy,i=a;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,n,i)===!1)return}r=r.parent}const o=c.appContext.config.errorHandler;if(o){o3(o,null,10,[e,n,i]);return}}ed(e,a,t,s)}function ed(e,c,a,s=!0){console.error(e)}let l6=!1,$0=!1;const Q1=[];let E2=0;const n4=[];let O2=null,y3=0;const ut=Promise.resolve();let n9=null;function i9(e){const c=n9||ut;return e?c.then(this?e.bind(this):e):c}function ad(e){let c=E2+1,a=Q1.length;for(;c<a;){const s=c+a>>>1;f6(Q1[s])<e?c=s+1:a=s}return c}function o9(e){(!Q1.length||!Q1.includes(e,l6&&e.allowRecurse?E2+1:E2))&&(e.id==null?Q1.push(e):Q1.splice(ad(e.id),0,e),mt())}function mt(){!l6&&!$0&&($0=!0,n9=ut.then(Ct))}function sd(e){const c=Q1.indexOf(e);c>E2&&Q1.splice(c,1)}function td(e){Q(e)?n4.push(...e):(!O2||!O2.includes(e,e.allowRecurse?y3+1:y3))&&n4.push(e),mt()}function Ae(e,c=l6?E2+1:0){for(;c<Q1.length;c++){const a=Q1[c];a&&a.pre&&(Q1.splice(c,1),c--,a())}}function vt(e){if(n4.length){const c=[...new Set(n4)];if(n4.length=0,O2){O2.push(...c);return}for(O2=c,O2.sort((a,s)=>f6(a)-f6(s)),y3=0;y3<O2.length;y3++)O2[y3]();O2=null,y3=0}}const f6=e=>e.id==null?1/0:e.id,rd=(e,c)=>{const a=f6(e)-f6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function Ct(e){$0=!1,l6=!0,Q1.sort(rd);const c=y2;try{for(E2=0;E2<Q1.length;E2++){const a=Q1[E2];a&&a.active!==!1&&o3(a,null,14)}}finally{E2=0,Q1.length=0,vt(),l6=!1,n9=null,(Q1.length||n4.length)&&Ct()}}function nd(e,c,...a){if(e.isUnmounted)return;const s=e.vnode.props||d1;let t=a;const r=c.startsWith("update:"),n=r&&c.slice(7);if(n&&n in s){const f=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:m}=s[f]||d1;m&&(t=a.map(C=>R1(C)?C.trim():C)),h&&(t=a.map(Ws))}let i,o=s[i=m0(c)]||s[i=m0(I2(c))];!o&&r&&(o=s[i=m0(y4(c))]),o&&S2(o,e,6,t);const l=s[i+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,S2(l,e,6,t)}}function zt(e,c,a=!1){const s=c.emitsCache,t=s.get(e);if(t!==void 0)return t;const r=e.emits;let n={},i=!1;if(!Y(e)){const o=l=>{const f=zt(l,c,!0);f&&(i=!0,s2(n,f))};!a&&c.mixins.length&&c.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!i?(b1(e)&&s.set(e,null),null):(Q(r)?r.forEach(o=>n[o]=null):s2(n,r),b1(e)&&s.set(e,n),n)}function m5(e,c){return!e||!i5(c)?!1:(c=c.slice(2).replace(/Once$/,""),s1(e,c[0].toLowerCase()+c.slice(1))||s1(e,y4(c))||s1(e,c))}let e2=null,pt=null;function F8(e){const c=e2;return e2=e,pt=e&&e.type.__scopeId||null,c}function v5(e,c=e2,a){if(!c||e._n)return e;const s=(...t)=>{s._d&&Be(-1);const r=F8(c);let n;try{n=e(...t)}finally{F8(r),s._d&&Be(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function C0(e){const{type:c,vnode:a,proxy:s,withProxy:t,props:r,propsOptions:[n],slots:i,attrs:o,emit:l,render:f,renderCache:h,data:m,setupState:C,ctx:d,inheritAttrs:L}=e;let w,p;const M=F8(e);try{if(a.shapeFlag&4){const _=t||s;w=T2(f.call(_,_,h,r,C,m,d)),p=o}else{const _=c;w=T2(_.length>1?_(r,{attrs:o,slots:i,emit:l}):_(r,null)),p=c.props?o:id(o)}}catch(_){Z4.length=0,u5(_,e,1),w=N1(u3)}let y=w;if(p&&L!==!1){const _=Object.keys(p),{shapeFlag:$}=y;_.length&&$&7&&(n&&_.some(K7)&&(p=od(p,n)),y=C4(y,p))}return a.dirs&&(y=C4(y),y.dirs=y.dirs?y.dirs.concat(a.dirs):a.dirs),a.transition&&(y.transition=a.transition),w=y,F8(M),w}const id=e=>{let c;for(const a in e)(a==="class"||a==="style"||i5(a))&&((c||(c={}))[a]=e[a]);return c},od=(e,c)=>{const a={};for(const s in e)(!K7(s)||!(s.slice(9)in c))&&(a[s]=e[s]);return a};function ld(e,c,a){const{props:s,children:t,component:r}=e,{props:n,children:i,patchFlag:o}=c,l=r.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return s?Te(s,n,l):!!n;if(o&8){const f=c.dynamicProps;for(let h=0;h<f.length;h++){const m=f[h];if(n[m]!==s[m]&&!m5(l,m))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:s===n?!1:s?n?Te(s,n,l):!0:!!n;return!1}function Te(e,c,a){const s=Object.keys(c);if(s.length!==Object.keys(e).length)return!0;for(let t=0;t<s.length;t++){const r=s[t];if(c[r]!==e[r]&&!m5(a,r))return!0}return!1}function fd({vnode:e,parent:c},a){for(;c&&c.subTree===e;)(e=c.vnode).el=a,c=c.parent}const hd=e=>e.__isSuspense;function ud(e,c){c&&c.pendingBranch?Q(e)?c.effects.push(...e):c.effects.push(e):td(e)}function S8(e,c){if(q1){let a=q1.provides;const s=q1.parent&&q1.parent.provides;s===a&&(a=q1.provides=Object.create(s)),a[e]=c}}function F2(e,c,a=!1){const s=q1||e2;if(s){const t=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(t&&e in t)return t[e];if(arguments.length>1)return a&&Y(c)?c.call(s.proxy):c}}const l8={};function i4(e,c,a){return dt(e,c,a)}function dt(e,c,{immediate:a,deep:s,flush:t,onTrack:r,onTrigger:n}=d1){const i=q1;let o,l=!1,f=!1;if(k1(e)?(o=()=>e.value,l=R8(e)):i3(e)?(o=()=>e,s=!0):Q(e)?(f=!0,l=e.some(y=>i3(y)||R8(y)),o=()=>e.map(y=>{if(k1(y))return y.value;if(i3(y))return X3(y);if(Y(y))return o3(y,i,2)})):Y(e)?c?o=()=>o3(e,i,2):o=()=>{if(!(i&&i.isUnmounted))return h&&h(),S2(e,i,3,[m])}:o=y2,c&&s){const y=o;o=()=>X3(y())}let h,m=y=>{h=p.onStop=()=>{o3(y,i,4)}},C;if(u6)if(m=y2,c?a&&S2(c,i,3,[o(),f?[]:void 0,m]):o(),t==="sync"){const y=iH();C=y.__watcherHandles||(y.__watcherHandles=[])}else return y2;let d=f?new Array(e.length).fill(l8):l8;const L=()=>{if(!!p.active)if(c){const y=p.run();(s||l||(f?y.some((_,$)=>i6(_,d[$])):i6(y,d)))&&(h&&h(),S2(c,i,3,[y,d===l8?void 0:f&&d[0]===l8?[]:d,m]),d=y)}else p.run()};L.allowRecurse=!!c;let w;t==="sync"?w=L:t==="post"?w=()=>i2(L,i&&i.suspense):(L.pre=!0,i&&(L.id=i.uid),w=()=>o9(L));const p=new J7(o,w);c?a?L():d=p.run():t==="post"?i2(p.run.bind(p),i&&i.suspense):p.run();const M=()=>{p.stop(),i&&i.scope&&Z7(i.scope.effects,p)};return C&&C.push(M),M}function md(e,c,a){const s=this.proxy,t=R1(e)?e.includes(".")?Ht(s,e):()=>s[e]:e.bind(s,s);let r;Y(c)?r=c:(r=c.handler,a=c);const n=q1;z4(this);const i=dt(t,r.bind(s),a);return n?z4(n):P3(),i}function Ht(e,c){const a=c.split(".");return()=>{let s=e;for(let t=0;t<a.length&&s;t++)s=s[a[t]];return s}}function X3(e,c){if(!b1(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),k1(e))X3(e.value,c);else if(Q(e))for(let a=0;a<e.length;a++)X3(e[a],c);else if(qs(e)||t4(e))e.forEach(a=>{X3(a,c)});else if(Gs(e))for(const a in e)X3(e[a],c);return e}function T6(e){return Y(e)?{setup:e,name:e.name}:e}const j4=e=>!!e.type.__asyncLoader,Mt=e=>e.type.__isKeepAlive;function vd(e,c){Vt(e,"a",c)}function Cd(e,c){Vt(e,"da",c)}function Vt(e,c,a=q1){const s=e.__wdc||(e.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(C5(c,s,a),a){let t=a.parent;for(;t&&t.parent;)Mt(t.parent.vnode)&&zd(s,c,a,t),t=t.parent}}function zd(e,c,a,s){const t=C5(c,e,s,!0);l9(()=>{Z7(s[c],t)},a)}function C5(e,c,a=q1,s=!1){if(a){const t=a[e]||(a[e]=[]),r=c.__weh||(c.__weh=(...n)=>{if(a.isUnmounted)return;S4(),z4(a);const i=S2(c,a,e,n);return P3(),N4(),i});return s?t.unshift(r):t.push(r),r}}const Q2=e=>(c,a=q1)=>(!u6||e==="sp")&&C5(e,(...s)=>c(...s),a),pd=Q2("bm"),dd=Q2("m"),Hd=Q2("bu"),Md=Q2("u"),Vd=Q2("bum"),l9=Q2("um"),gd=Q2("sp"),Ld=Q2("rtg"),bd=Q2("rtc");function xd(e,c=q1){C5("ec",e,c)}function g3(e,c,a,s){const t=e.dirs,r=c&&c.dirs;for(let n=0;n<t.length;n++){const i=t[n];r&&(i.oldValue=r[n].value);let o=i.dir[s];o&&(S4(),S2(o,a,8,[e.el,i,e,c]),N4())}}const f9="components";function E6(e,c){return Lt(f9,e,!0,c)||e}const gt=Symbol();function yd(e){return R1(e)?Lt(f9,e,!1)||e:e||gt}function Lt(e,c,a=!0,s=!1){const t=e2||q1;if(t){const r=t.type;if(e===f9){const i=tH(r,!1);if(i&&(i===c||i===I2(c)||i===f5(I2(c))))return r}const n=Ee(t[e]||r[e],c)||Ee(t.appContext[e],c);return!n&&s?r:n}}function Ee(e,c){return e&&(e[c]||e[I2(c)]||e[f5(I2(c))])}function Sd(e,c,a,s){let t;const r=a&&a[s];if(Q(e)||R1(e)){t=new Array(e.length);for(let n=0,i=e.length;n<i;n++)t[n]=c(e[n],n,void 0,r&&r[n])}else if(typeof e=="number"){t=new Array(e);for(let n=0;n<e;n++)t[n]=c(n+1,n,void 0,r&&r[n])}else if(b1(e))if(e[Symbol.iterator])t=Array.from(e,(n,i)=>c(n,i,void 0,r&&r[i]));else{const n=Object.keys(e);t=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const l=n[i];t[i]=c(e[l],l,i,r&&r[i])}}else t=[];return a&&(a[s]=t),t}function bt(e,c,a={},s,t){if(e2.isCE||e2.parent&&j4(e2.parent)&&e2.parent.isCE)return N1("slot",c==="default"?null:{name:c},s&&s());let r=e[c];r&&r._c&&(r._d=!1),g2();const n=r&&xt(r(a)),i=v9(p2,{key:a.key||n&&n.key||`_${c}`},n||(s?s():[]),n&&e._===1?64:-2);return!t&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function xt(e){return e.some(c=>_8(c)?!(c.type===u3||c.type===p2&&!xt(c.children)):!0)?e:null}const G0=e=>e?Ft(e)?z9(e)||e.proxy:G0(e.parent):null,K4=s2(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>G0(e.parent),$root:e=>G0(e.root),$emit:e=>e.emit,$options:e=>h9(e),$forceUpdate:e=>e.f||(e.f=()=>o9(e.update)),$nextTick:e=>e.n||(e.n=i9.bind(e.proxy)),$watch:e=>md.bind(e)}),Nd={get({_:e},c){const{ctx:a,setupState:s,data:t,props:r,accessCache:n,type:i,appContext:o}=e;let l;if(c[0]!=="$"){const C=n[c];if(C!==void 0)switch(C){case 1:return s[c];case 2:return t[c];case 4:return a[c];case 3:return r[c]}else{if(s!==d1&&s1(s,c))return n[c]=1,s[c];if(t!==d1&&s1(t,c))return n[c]=2,t[c];if((l=e.propsOptions[0])&&s1(l,c))return n[c]=3,r[c];if(a!==d1&&s1(a,c))return n[c]=4,a[c];W0&&(n[c]=0)}}const f=K4[c];let h,m;if(f)return c==="$attrs"&&m2(e,"get",c),f(e);if((h=i.__cssModules)&&(h=h[c]))return h;if(a!==d1&&s1(a,c))return n[c]=4,a[c];if(m=o.config.globalProperties,s1(m,c))return m[c]},set({_:e},c,a){const{data:s,setupState:t,ctx:r}=e;return t!==d1&&s1(t,c)?(t[c]=a,!0):s!==d1&&s1(s,c)?(s[c]=a,!0):s1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(r[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:s,appContext:t,propsOptions:r}},n){let i;return!!a[n]||e!==d1&&s1(e,n)||c!==d1&&s1(c,n)||(i=r[0])&&s1(i,n)||s1(s,n)||s1(K4,n)||s1(t.config.globalProperties,n)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:s1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};let W0=!0;function wd(e){const c=h9(e),a=e.proxy,s=e.ctx;W0=!1,c.beforeCreate&&Pe(c.beforeCreate,e,"bc");const{data:t,computed:r,methods:n,watch:i,provide:o,inject:l,created:f,beforeMount:h,mounted:m,beforeUpdate:C,updated:d,activated:L,deactivated:w,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:_,render:$,renderTracked:i1,renderTriggered:W,errorCaptured:c1,serverPrefetch:V1,expose:_1,inheritAttrs:t2,components:z2,directives:X2,filters:h2}=c;if(l&&kd(l,s,null,e.appContext.config.unwrapInjectedRef),n)for(const z1 in n){const m1=n[z1];Y(m1)&&(s[z1]=m1.bind(a))}if(t){const z1=t.call(a,a);b1(z1)&&(e.data=w4(z1))}if(W0=!0,r)for(const z1 in r){const m1=r[z1],d2=Y(m1)?m1.bind(a,a):Y(m1.get)?m1.get.bind(a,a):y2,V3=!Y(m1)&&Y(m1.set)?m1.set.bind(a):y2,H2=g1({get:d2,set:V3});Object.defineProperty(s,z1,{enumerable:!0,configurable:!0,get:()=>H2.value,set:r2=>H2.value=r2})}if(i)for(const z1 in i)yt(i[z1],s,a,z1);if(o){const z1=Y(o)?o.call(a):o;Reflect.ownKeys(z1).forEach(m1=>{S8(m1,z1[m1])})}f&&Pe(f,e,"c");function A1(z1,m1){Q(m1)?m1.forEach(d2=>z1(d2.bind(a))):m1&&z1(m1.bind(a))}if(A1(pd,h),A1(dd,m),A1(Hd,C),A1(Md,d),A1(vd,L),A1(Cd,w),A1(xd,c1),A1(bd,i1),A1(Ld,W),A1(Vd,M),A1(l9,_),A1(gd,V1),Q(_1))if(_1.length){const z1=e.exposed||(e.exposed={});_1.forEach(m1=>{Object.defineProperty(z1,m1,{get:()=>a[m1],set:d2=>a[m1]=d2})})}else e.exposed||(e.exposed={});$&&e.render===y2&&(e.render=$),t2!=null&&(e.inheritAttrs=t2),z2&&(e.components=z2),X2&&(e.directives=X2)}function kd(e,c,a=y2,s=!1){Q(e)&&(e=j0(e));for(const t in e){const r=e[t];let n;b1(r)?"default"in r?n=F2(r.from||t,r.default,!0):n=F2(r.from||t):n=F2(r),k1(n)&&s?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function Pe(e,c,a){S2(Q(e)?e.map(s=>s.bind(c.proxy)):e.bind(c.proxy),c,a)}function yt(e,c,a,s){const t=s.includes(".")?Ht(a,s):()=>a[s];if(R1(e)){const r=c[e];Y(r)&&i4(t,r)}else if(Y(e))i4(t,e.bind(a));else if(b1(e))if(Q(e))e.forEach(r=>yt(r,c,a,s));else{const r=Y(e.handler)?e.handler.bind(a):c[e.handler];Y(r)&&i4(t,r,e)}}function h9(e){const c=e.type,{mixins:a,extends:s}=c,{mixins:t,optionsCache:r,config:{optionMergeStrategies:n}}=e.appContext,i=r.get(c);let o;return i?o=i:!t.length&&!a&&!s?o=c:(o={},t.length&&t.forEach(l=>I8(o,l,n,!0)),I8(o,c,n)),b1(c)&&r.set(c,o),o}function I8(e,c,a,s=!1){const{mixins:t,extends:r}=c;r&&I8(e,r,a,!0),t&&t.forEach(n=>I8(e,n,a,!0));for(const n in c)if(!(s&&n==="expose")){const i=Ad[n]||a&&a[n];e[n]=i?i(e[n],c[n]):c[n]}return e}const Ad={data:De,props:b3,emits:b3,methods:b3,computed:b3,beforeCreate:c2,created:c2,beforeMount:c2,mounted:c2,beforeUpdate:c2,updated:c2,beforeDestroy:c2,beforeUnmount:c2,destroyed:c2,unmounted:c2,activated:c2,deactivated:c2,errorCaptured:c2,serverPrefetch:c2,components:b3,directives:b3,watch:Ed,provide:De,inject:Td};function De(e,c){return c?e?function(){return s2(Y(e)?e.call(this,this):e,Y(c)?c.call(this,this):c)}:c:e}function Td(e,c){return b3(j0(e),j0(c))}function j0(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function c2(e,c){return e?[...new Set([].concat(e,c))]:c}function b3(e,c){return e?s2(s2(Object.create(null),e),c):c}function Ed(e,c){if(!e)return c;if(!c)return e;const a=s2(Object.create(null),e);for(const s in c)a[s]=c2(e[s],c[s]);return a}function Pd(e,c,a,s=!1){const t={},r={};D8(r,z5,1),e.propsDefaults=Object.create(null),St(e,c,t,r);for(const n in e.propsOptions[0])n in t||(t[n]=void 0);a?e.props=s?t:Wp(t):e.type.props?e.props=t:e.props=r,e.attrs=r}function Dd(e,c,a,s){const{props:t,attrs:r,vnode:{patchFlag:n}}=e,i=l1(t),[o]=e.propsOptions;let l=!1;if((s||n>0)&&!(n&16)){if(n&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let m=f[h];if(m5(e.emitsOptions,m))continue;const C=c[m];if(o)if(s1(r,m))C!==r[m]&&(r[m]=C,l=!0);else{const d=I2(m);t[d]=K0(o,i,d,C,e,!1)}else C!==r[m]&&(r[m]=C,l=!0)}}}else{St(e,c,t,r)&&(l=!0);let f;for(const h in i)(!c||!s1(c,h)&&((f=y4(h))===h||!s1(c,f)))&&(o?a&&(a[h]!==void 0||a[f]!==void 0)&&(t[h]=K0(o,i,h,void 0,e,!0)):delete t[h]);if(r!==i)for(const h in r)(!c||!s1(c,h)&&!0)&&(delete r[h],l=!0)}l&&U2(e,"set","$attrs")}function St(e,c,a,s){const[t,r]=e.propsOptions;let n=!1,i;if(c)for(let o in c){if(y8(o))continue;const l=c[o];let f;t&&s1(t,f=I2(o))?!r||!r.includes(f)?a[f]=l:(i||(i={}))[f]=l:m5(e.emitsOptions,o)||(!(o in s)||l!==s[o])&&(s[o]=l,n=!0)}if(r){const o=l1(a),l=i||d1;for(let f=0;f<r.length;f++){const h=r[f];a[h]=K0(t,o,h,l[h],e,!s1(l,h))}}return n}function K0(e,c,a,s,t,r){const n=e[a];if(n!=null){const i=s1(n,"default");if(i&&s===void 0){const o=n.default;if(n.type!==Function&&Y(o)){const{propsDefaults:l}=t;a in l?s=l[a]:(z4(t),s=l[a]=o.call(null,c),P3())}else s=o}n[0]&&(r&&!i?s=!1:n[1]&&(s===""||s===y4(a))&&(s=!0))}return s}function Nt(e,c,a=!1){const s=c.propsCache,t=s.get(e);if(t)return t;const r=e.props,n={},i=[];let o=!1;if(!Y(e)){const f=h=>{o=!0;const[m,C]=Nt(h,c,!0);s2(n,m),C&&i.push(...C)};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!o)return b1(e)&&s.set(e,s4),s4;if(Q(r))for(let f=0;f<r.length;f++){const h=I2(r[f]);Re(h)&&(n[h]=d1)}else if(r)for(const f in r){const h=I2(f);if(Re(h)){const m=r[f],C=n[h]=Q(m)||Y(m)?{type:m}:Object.assign({},m);if(C){const d=_e(Boolean,C.type),L=_e(String,C.type);C[0]=d>-1,C[1]=L<0||d<L,(d>-1||s1(C,"default"))&&i.push(h)}}}const l=[n,i];return b1(e)&&s.set(e,l),l}function Re(e){return e[0]!=="$"}function Fe(e){const c=e&&e.toString().match(/^\s*function (\w+)/);return c?c[1]:e===null?"null":""}function Ie(e,c){return Fe(e)===Fe(c)}function _e(e,c){return Q(c)?c.findIndex(a=>Ie(a,e)):Y(c)&&Ie(c,e)?0:-1}const wt=e=>e[0]==="_"||e==="$stable",u9=e=>Q(e)?e.map(T2):[T2(e)],Rd=(e,c,a)=>{if(c._n)return c;const s=v5((...t)=>u9(c(...t)),a);return s._c=!1,s},kt=(e,c,a)=>{const s=e._ctx;for(const t in e){if(wt(t))continue;const r=e[t];if(Y(r))c[t]=Rd(t,r,s);else if(r!=null){const n=u9(r);c[t]=()=>n}}},At=(e,c)=>{const a=u9(c);e.slots.default=()=>a},Fd=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=l1(c),D8(c,"_",a)):kt(c,e.slots={})}else e.slots={},c&&At(e,c);D8(e.slots,z5,1)},Id=(e,c,a)=>{const{vnode:s,slots:t}=e;let r=!0,n=d1;if(s.shapeFlag&32){const i=c._;i?a&&i===1?r=!1:(s2(t,c),!a&&i===1&&delete t._):(r=!c.$stable,kt(c,t)),n=c}else c&&(At(e,c),n={default:1});if(r)for(const i in t)!wt(i)&&!(i in n)&&delete t[i]};function Tt(){return{app:null,config:{isNativeTag:mp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _d=0;function Bd(e,c){return function(s,t=null){Y(s)||(s=Object.assign({},s)),t!=null&&!b1(t)&&(t=null);const r=Tt(),n=new Set;let i=!1;const o=r.app={_uid:_d++,_component:s,_props:t,_container:null,_context:r,_instance:null,version:oH,get config(){return r.config},set config(l){},use(l,...f){return n.has(l)||(l&&Y(l.install)?(n.add(l),l.install(o,...f)):Y(l)&&(n.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,h){if(!i){const m=N1(s,t);return m.appContext=r,f&&c?c(m,l):e(m,l,h),i=!0,o._container=l,l.__vue_app__=o,z9(m.component)||m.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o}};return o}}function Z0(e,c,a,s,t=!1){if(Q(e)){e.forEach((m,C)=>Z0(m,c&&(Q(c)?c[C]:c),a,s,t));return}if(j4(s)&&!t)return;const r=s.shapeFlag&4?z9(s.component)||s.component.proxy:s.el,n=t?null:r,{i,r:o}=e,l=c&&c.r,f=i.refs===d1?i.refs={}:i.refs,h=i.setupState;if(l!=null&&l!==o&&(R1(l)?(f[l]=null,s1(h,l)&&(h[l]=null)):k1(l)&&(l.value=null)),Y(o))o3(o,i,12,[n,f]);else{const m=R1(o),C=k1(o);if(m||C){const d=()=>{if(e.f){const L=m?s1(h,o)?h[o]:f[o]:o.value;t?Q(L)&&Z7(L,r):Q(L)?L.includes(r)||L.push(r):m?(f[o]=[r],s1(h,o)&&(h[o]=f[o])):(o.value=[r],e.k&&(f[e.k]=o.value))}else m?(f[o]=n,s1(h,o)&&(h[o]=n)):C&&(o.value=n,e.k&&(f[e.k]=n))};n?(d.id=-1,i2(d,a)):d()}}}const i2=ud;function Od(e){return qd(e)}function qd(e,c){const a=Hp();a.__VUE__=!0;const{insert:s,remove:t,patchProp:r,createElement:n,createText:i,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:m,setScopeId:C=y2,insertStaticContent:d}=e,L=(u,v,z,H=null,g=null,N=null,E=!1,S=null,k=!!v.dynamicChildren)=>{if(u===v)return;u&&!_4(u,v)&&(H=A(u),r2(u,g,N,!0),u=null),v.patchFlag===-2&&(k=!1,v.dynamicChildren=null);const{type:b,ref:q,shapeFlag:R}=v;switch(b){case m9:w(u,v,z,H);break;case u3:p(u,v,z,H);break;case N8:u==null&&M(v,z,H,E);break;case p2:z2(u,v,z,H,g,N,E,S,k);break;default:R&1?$(u,v,z,H,g,N,E,S,k):R&6?X2(u,v,z,H,g,N,E,S,k):(R&64||R&128)&&b.process(u,v,z,H,g,N,E,S,k,r1)}q!=null&&g&&Z0(q,u&&u.ref,N,v||u,!v)},w=(u,v,z,H)=>{if(u==null)s(v.el=i(v.children),z,H);else{const g=v.el=u.el;v.children!==u.children&&l(g,v.children)}},p=(u,v,z,H)=>{u==null?s(v.el=o(v.children||""),z,H):v.el=u.el},M=(u,v,z,H)=>{[u.el,u.anchor]=d(u.children,v,z,H,u.el,u.anchor)},y=({el:u,anchor:v},z,H)=>{let g;for(;u&&u!==v;)g=m(u),s(u,z,H),u=g;s(v,z,H)},_=({el:u,anchor:v})=>{let z;for(;u&&u!==v;)z=m(u),t(u),u=z;t(v)},$=(u,v,z,H,g,N,E,S,k)=>{E=E||v.type==="svg",u==null?i1(v,z,H,g,N,E,S,k):V1(u,v,g,N,E,S,k)},i1=(u,v,z,H,g,N,E,S)=>{let k,b;const{type:q,props:R,shapeFlag:U,transition:Z,dirs:a1}=u;if(k=u.el=n(u.type,N,R&&R.is,R),U&8?f(k,u.children):U&16&&c1(u.children,k,null,H,g,N&&q!=="foreignObject",E,S),a1&&g3(u,null,H,"created"),R){for(const v1 in R)v1!=="value"&&!y8(v1)&&r(k,v1,null,R[v1],N,u.children,H,g,P);"value"in R&&r(k,"value",null,R.value),(b=R.onVnodeBeforeMount)&&k2(b,H,u)}W(k,u,u.scopeId,E,H),a1&&g3(u,null,H,"beforeMount");const p1=(!g||g&&!g.pendingBranch)&&Z&&!Z.persisted;p1&&Z.beforeEnter(k),s(k,v,z),((b=R&&R.onVnodeMounted)||p1||a1)&&i2(()=>{b&&k2(b,H,u),p1&&Z.enter(k),a1&&g3(u,null,H,"mounted")},g)},W=(u,v,z,H,g)=>{if(z&&C(u,z),H)for(let N=0;N<H.length;N++)C(u,H[N]);if(g){let N=g.subTree;if(v===N){const E=g.vnode;W(u,E,E.scopeId,E.slotScopeIds,g.parent)}}},c1=(u,v,z,H,g,N,E,S,k=0)=>{for(let b=k;b<u.length;b++){const q=u[b]=S?a3(u[b]):T2(u[b]);L(null,q,v,z,H,g,N,E,S)}},V1=(u,v,z,H,g,N,E)=>{const S=v.el=u.el;let{patchFlag:k,dynamicChildren:b,dirs:q}=v;k|=u.patchFlag&16;const R=u.props||d1,U=v.props||d1;let Z;z&&L3(z,!1),(Z=U.onVnodeBeforeUpdate)&&k2(Z,z,v,u),q&&g3(v,u,z,"beforeUpdate"),z&&L3(z,!0);const a1=g&&v.type!=="foreignObject";if(b?_1(u.dynamicChildren,b,S,z,H,a1,N):E||m1(u,v,S,null,z,H,a1,N,!1),k>0){if(k&16)t2(S,v,R,U,z,H,g);else if(k&2&&R.class!==U.class&&r(S,"class",null,U.class,g),k&4&&r(S,"style",R.style,U.style,g),k&8){const p1=v.dynamicProps;for(let v1=0;v1<p1.length;v1++){const T1=p1[v1],M2=R[T1],j3=U[T1];(j3!==M2||T1==="value")&&r(S,T1,M2,j3,g,u.children,z,H,P)}}k&1&&u.children!==v.children&&f(S,v.children)}else!E&&b==null&&t2(S,v,R,U,z,H,g);((Z=U.onVnodeUpdated)||q)&&i2(()=>{Z&&k2(Z,z,v,u),q&&g3(v,u,z,"updated")},H)},_1=(u,v,z,H,g,N,E)=>{for(let S=0;S<v.length;S++){const k=u[S],b=v[S],q=k.el&&(k.type===p2||!_4(k,b)||k.shapeFlag&70)?h(k.el):z;L(k,b,q,null,H,g,N,E,!0)}},t2=(u,v,z,H,g,N,E)=>{if(z!==H){if(z!==d1)for(const S in z)!y8(S)&&!(S in H)&&r(u,S,z[S],null,E,v.children,g,N,P);for(const S in H){if(y8(S))continue;const k=H[S],b=z[S];k!==b&&S!=="value"&&r(u,S,b,k,E,v.children,g,N,P)}"value"in H&&r(u,"value",z.value,H.value)}},z2=(u,v,z,H,g,N,E,S,k)=>{const b=v.el=u?u.el:i(""),q=v.anchor=u?u.anchor:i("");let{patchFlag:R,dynamicChildren:U,slotScopeIds:Z}=v;Z&&(S=S?S.concat(Z):Z),u==null?(s(b,z,H),s(q,z,H),c1(v.children,z,q,g,N,E,S,k)):R>0&&R&64&&U&&u.dynamicChildren?(_1(u.dynamicChildren,U,z,g,N,E,S),(v.key!=null||g&&v===g.subTree)&&Et(u,v,!0)):m1(u,v,z,q,g,N,E,S,k)},X2=(u,v,z,H,g,N,E,S,k)=>{v.slotScopeIds=S,u==null?v.shapeFlag&512?g.ctx.activate(v,z,H,E,k):h2(v,z,H,g,N,E,k):B1(u,v,k)},h2=(u,v,z,H,g,N,E)=>{const S=u.component=Jd(u,H,g);if(Mt(u)&&(S.ctx.renderer=r1),cH(S),S.asyncDep){if(g&&g.registerDep(S,A1),!u.el){const k=S.subTree=N1(u3);p(null,k,v,z)}return}A1(S,u,v,z,g,N,E)},B1=(u,v,z)=>{const H=v.component=u.component;if(ld(u,v,z))if(H.asyncDep&&!H.asyncResolved){z1(H,v,z);return}else H.next=v,sd(H.update),H.update();else v.el=u.el,H.vnode=v},A1=(u,v,z,H,g,N,E)=>{const S=()=>{if(u.isMounted){let{next:q,bu:R,u:U,parent:Z,vnode:a1}=u,p1=q,v1;L3(u,!1),q?(q.el=a1.el,z1(u,q,E)):q=a1,R&&v0(R),(v1=q.props&&q.props.onVnodeBeforeUpdate)&&k2(v1,Z,q,a1),L3(u,!0);const T1=C0(u),M2=u.subTree;u.subTree=T1,L(M2,T1,h(M2.el),A(M2),u,g,N),q.el=T1.el,p1===null&&fd(u,T1.el),U&&i2(U,g),(v1=q.props&&q.props.onVnodeUpdated)&&i2(()=>k2(v1,Z,q,a1),g)}else{let q;const{el:R,props:U}=v,{bm:Z,m:a1,parent:p1}=u,v1=j4(v);if(L3(u,!1),Z&&v0(Z),!v1&&(q=U&&U.onVnodeBeforeMount)&&k2(q,p1,v),L3(u,!0),R&&X){const T1=()=>{u.subTree=C0(u),X(R,u.subTree,u,g,null)};v1?v.type.__asyncLoader().then(()=>!u.isUnmounted&&T1()):T1()}else{const T1=u.subTree=C0(u);L(null,T1,z,H,u,g,N),v.el=T1.el}if(a1&&i2(a1,g),!v1&&(q=U&&U.onVnodeMounted)){const T1=v;i2(()=>k2(q,p1,T1),g)}(v.shapeFlag&256||p1&&j4(p1.vnode)&&p1.vnode.shapeFlag&256)&&u.a&&i2(u.a,g),u.isMounted=!0,v=z=H=null}},k=u.effect=new J7(S,()=>o9(b),u.scope),b=u.update=()=>k.run();b.id=u.uid,L3(u,!0),b()},z1=(u,v,z)=>{v.component=u;const H=u.vnode.props;u.vnode=v,u.next=null,Dd(u,v.props,H,z),Id(u,v.children,z),S4(),Ae(),N4()},m1=(u,v,z,H,g,N,E,S,k=!1)=>{const b=u&&u.children,q=u?u.shapeFlag:0,R=v.children,{patchFlag:U,shapeFlag:Z}=v;if(U>0){if(U&128){V3(b,R,z,H,g,N,E,S,k);return}else if(U&256){d2(b,R,z,H,g,N,E,S,k);return}}Z&8?(q&16&&P(b,g,N),R!==b&&f(z,R)):q&16?Z&16?V3(b,R,z,H,g,N,E,S,k):P(b,g,N,!0):(q&8&&f(z,""),Z&16&&c1(R,z,H,g,N,E,S,k))},d2=(u,v,z,H,g,N,E,S,k)=>{u=u||s4,v=v||s4;const b=u.length,q=v.length,R=Math.min(b,q);let U;for(U=0;U<R;U++){const Z=v[U]=k?a3(v[U]):T2(v[U]);L(u[U],Z,z,null,g,N,E,S,k)}b>q?P(u,g,N,!0,!1,R):c1(v,z,H,g,N,E,S,k,R)},V3=(u,v,z,H,g,N,E,S,k)=>{let b=0;const q=v.length;let R=u.length-1,U=q-1;for(;b<=R&&b<=U;){const Z=u[b],a1=v[b]=k?a3(v[b]):T2(v[b]);if(_4(Z,a1))L(Z,a1,z,null,g,N,E,S,k);else break;b++}for(;b<=R&&b<=U;){const Z=u[R],a1=v[U]=k?a3(v[U]):T2(v[U]);if(_4(Z,a1))L(Z,a1,z,null,g,N,E,S,k);else break;R--,U--}if(b>R){if(b<=U){const Z=U+1,a1=Z<q?v[Z].el:H;for(;b<=U;)L(null,v[b]=k?a3(v[b]):T2(v[b]),z,a1,g,N,E,S,k),b++}}else if(b>U)for(;b<=R;)r2(u[b],g,N,!0),b++;else{const Z=b,a1=b,p1=new Map;for(b=a1;b<=U;b++){const u2=v[b]=k?a3(v[b]):T2(v[b]);u2.key!=null&&p1.set(u2.key,b)}let v1,T1=0;const M2=U-a1+1;let j3=!1,Me=0;const I4=new Array(M2);for(b=0;b<M2;b++)I4[b]=0;for(b=Z;b<=R;b++){const u2=u[b];if(T1>=M2){r2(u2,g,N,!0);continue}let w2;if(u2.key!=null)w2=p1.get(u2.key);else for(v1=a1;v1<=U;v1++)if(I4[v1-a1]===0&&_4(u2,v[v1])){w2=v1;break}w2===void 0?r2(u2,g,N,!0):(I4[w2-a1]=b+1,w2>=Me?Me=w2:j3=!0,L(u2,v[w2],z,null,g,N,E,S,k),T1++)}const Ve=j3?Ud(I4):s4;for(v1=Ve.length-1,b=M2-1;b>=0;b--){const u2=a1+b,w2=v[u2],ge=u2+1<q?v[u2+1].el:H;I4[b]===0?L(null,w2,z,ge,g,N,E,S,k):j3&&(v1<0||b!==Ve[v1]?H2(w2,z,ge,2):v1--)}}},H2=(u,v,z,H,g=null)=>{const{el:N,type:E,transition:S,children:k,shapeFlag:b}=u;if(b&6){H2(u.component.subTree,v,z,H);return}if(b&128){u.suspense.move(v,z,H);return}if(b&64){E.move(u,v,z,r1);return}if(E===p2){s(N,v,z);for(let R=0;R<k.length;R++)H2(k[R],v,z,H);s(u.anchor,v,z);return}if(E===N8){y(u,v,z);return}if(H!==2&&b&1&&S)if(H===0)S.beforeEnter(N),s(N,v,z),i2(()=>S.enter(N),g);else{const{leave:R,delayLeave:U,afterLeave:Z}=S,a1=()=>s(N,v,z),p1=()=>{R(N,()=>{a1(),Z&&Z()})};U?U(N,a1,p1):p1()}else s(N,v,z)},r2=(u,v,z,H=!1,g=!1)=>{const{type:N,props:E,ref:S,children:k,dynamicChildren:b,shapeFlag:q,patchFlag:R,dirs:U}=u;if(S!=null&&Z0(S,null,z,u,!0),q&256){v.ctx.deactivate(u);return}const Z=q&1&&U,a1=!j4(u);let p1;if(a1&&(p1=E&&E.onVnodeBeforeUnmount)&&k2(p1,v,u),q&6)V(u.component,z,H);else{if(q&128){u.suspense.unmount(z,H);return}Z&&g3(u,null,v,"beforeUnmount"),q&64?u.type.remove(u,v,z,g,r1,H):b&&(N!==p2||R>0&&R&64)?P(b,v,z,!1,!0):(N===p2&&R&384||!g&&q&16)&&P(k,v,z),H&&W3(u)}(a1&&(p1=E&&E.onVnodeUnmounted)||Z)&&i2(()=>{p1&&k2(p1,v,u),Z&&g3(u,null,v,"unmounted")},z)},W3=u=>{const{type:v,el:z,anchor:H,transition:g}=u;if(v===p2){a8(z,H);return}if(v===N8){_(u);return}const N=()=>{t(z),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:S}=g,k=()=>E(z,N);S?S(u.el,N,k):k()}else N()},a8=(u,v)=>{let z;for(;u!==v;)z=m(u),t(u),u=z;t(v)},V=(u,v,z)=>{const{bum:H,scope:g,update:N,subTree:E,um:S}=u;H&&v0(H),g.stop(),N&&(N.active=!1,r2(E,u,v,z)),S&&i2(S,v),i2(()=>{u.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},P=(u,v,z,H=!1,g=!1,N=0)=>{for(let E=N;E<u.length;E++)r2(u[E],v,z,H,g)},A=u=>u.shapeFlag&6?A(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),O=(u,v,z)=>{u==null?v._vnode&&r2(v._vnode,null,null,!0):L(v._vnode||null,u,v,null,null,null,z),Ae(),vt(),v._vnode=u},r1={p:L,um:r2,m:H2,r:W3,mt:h2,mc:c1,pc:m1,pbc:_1,n:A,o:e};let x1,X;return c&&([x1,X]=c(r1)),{render:O,hydrate:x1,createApp:Bd(O,x1)}}function L3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function Et(e,c,a=!1){const s=e.children,t=c.children;if(Q(s)&&Q(t))for(let r=0;r<s.length;r++){const n=s[r];let i=t[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[r]=a3(t[r]),i.el=n.el),a||Et(n,i))}}function Ud(e){const c=e.slice(),a=[0];let s,t,r,n,i;const o=e.length;for(s=0;s<o;s++){const l=e[s];if(l!==0){if(t=a[a.length-1],e[t]<l){c[s]=t,a.push(s);continue}for(r=0,n=a.length-1;r<n;)i=r+n>>1,e[a[i]]<l?r=i+1:n=i;l<e[a[r]]&&(r>0&&(c[s]=a[r-1]),a[r]=s)}}for(r=a.length,n=a[r-1];r-- >0;)a[r]=n,n=c[n];return a}const $d=e=>e.__isTeleport,p2=Symbol(void 0),m9=Symbol(void 0),u3=Symbol(void 0),N8=Symbol(void 0),Z4=[];let b2=null;function g2(e=!1){Z4.push(b2=e?null:[])}function Gd(){Z4.pop(),b2=Z4[Z4.length-1]||null}let h6=1;function Be(e){h6+=e}function Pt(e){return e.dynamicChildren=h6>0?b2||s4:null,Gd(),h6>0&&b2&&b2.push(e),e}function r3(e,c,a,s,t,r){return Pt(C1(e,c,a,s,t,r,!0))}function v9(e,c,a,s,t){return Pt(N1(e,c,a,s,t,!0))}function _8(e){return e?e.__v_isVNode===!0:!1}function _4(e,c){return e.type===c.type&&e.key===c.key}const z5="__vInternal",Dt=({key:e})=>e!=null?e:null,w8=({ref:e,ref_key:c,ref_for:a})=>e!=null?R1(e)||k1(e)||Y(e)?{i:e2,r:e,k:c,f:!!a}:e:null;function C1(e,c=null,a=null,s=0,t=null,r=e===p2?0:1,n=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&Dt(c),ref:c&&w8(c),scopeId:pt,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:t,dynamicChildren:null,appContext:null};return i?(C9(o,a),r&128&&e.normalize(o)):a&&(o.shapeFlag|=R1(a)?8:16),h6>0&&!n&&b2&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&b2.push(o),o}const N1=Wd;function Wd(e,c=null,a=null,s=0,t=null,r=!1){if((!e||e===gt)&&(e=u3),_8(e)){const i=C4(e,c,!0);return a&&C9(i,a),h6>0&&!r&&b2&&(i.shapeFlag&6?b2[b2.indexOf(e)]=i:b2.push(i)),i.patchFlag|=-2,i}if(rH(e)&&(e=e.__vccOpts),c){c=jd(c);let{class:i,style:o}=c;i&&!R1(i)&&(c.class=j7(i)),b1(o)&&(nt(o)&&!Q(o)&&(o=s2({},o)),c.style=W7(o))}const n=R1(e)?1:hd(e)?128:$d(e)?64:b1(e)?4:Y(e)?2:0;return C1(e,c,a,s,t,n,r,!0)}function jd(e){return e?nt(e)||z5 in e?s2({},e):e:null}function C4(e,c,a=!1){const{props:s,ref:t,patchFlag:r,children:n}=e,i=c?Qd(s||{},c):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Dt(i),ref:c&&c.ref?a&&t?Q(t)?t.concat(w8(c)):[t,w8(c)]:w8(c):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==p2?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&C4(e.ssContent),ssFallback:e.ssFallback&&C4(e.ssFallback),el:e.el,anchor:e.anchor}}function p5(e=" ",c=0){return N1(m9,null,e,c)}function Kd(e,c){const a=N1(N8,null,e);return a.staticCount=c,a}function Zd(e="",c=!1){return c?(g2(),v9(u3,null,e)):N1(u3,null,e)}function T2(e){return e==null||typeof e=="boolean"?N1(u3):Q(e)?N1(p2,null,e.slice()):typeof e=="object"?a3(e):N1(m9,null,String(e))}function a3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:C4(e)}function C9(e,c){let a=0;const{shapeFlag:s}=e;if(c==null)c=null;else if(Q(c))a=16;else if(typeof c=="object")if(s&65){const t=c.default;t&&(t._c&&(t._d=!1),C9(e,t()),t._c&&(t._d=!0));return}else{a=32;const t=c._;!t&&!(z5 in c)?c._ctx=e2:t===3&&e2&&(e2.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else Y(c)?(c={default:c,_ctx:e2},a=32):(c=String(c),s&64?(a=16,c=[p5(c)]):a=8);e.children=c,e.shapeFlag|=a}function Qd(...e){const c={};for(let a=0;a<e.length;a++){const s=e[a];for(const t in s)if(t==="class")c.class!==s.class&&(c.class=j7([c.class,s.class]));else if(t==="style")c.style=W7([c.style,s.style]);else if(i5(t)){const r=c[t],n=s[t];n&&r!==n&&!(Q(r)&&r.includes(n))&&(c[t]=r?[].concat(r,n):n)}else t!==""&&(c[t]=s[t])}return c}function k2(e,c,a,s=null){S2(e,c,7,[a,s])}const Yd=Tt();let Xd=0;function Jd(e,c,a){const s=e.type,t=(c?c.appContext:e.appContext)||Yd,r={uid:Xd++,vnode:e,type:s,parent:c,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new js(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nt(s,t),emitsOptions:zt(s,t),emit:null,emitted:null,propsDefaults:d1,inheritAttrs:s.inheritAttrs,ctx:d1,data:d1,props:d1,attrs:d1,slots:d1,refs:d1,setupState:d1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=nd.bind(null,r),e.ce&&e.ce(r),r}let q1=null;const Rt=()=>q1||e2,z4=e=>{q1=e,e.scope.on()},P3=()=>{q1&&q1.scope.off(),q1=null};function Ft(e){return e.vnode.shapeFlag&4}let u6=!1;function cH(e,c=!1){u6=c;const{props:a,children:s}=e.vnode,t=Ft(e);Pd(e,a,t,c),Fd(e,s);const r=t?eH(e,c):void 0;return u6=!1,r}function eH(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=v4(new Proxy(e.ctx,Nd));const{setup:s}=a;if(s){const t=e.setupContext=s.length>1?sH(e):null;z4(e),S4();const r=o3(s,e,0,[e.props,t]);if(N4(),P3(),Us(r)){if(r.then(P3,P3),c)return r.then(n=>{Oe(e,n,c)}).catch(n=>{u5(n,e,0)});e.asyncDep=r}else Oe(e,r,c)}else It(e,c)}function Oe(e,c,a){Y(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:b1(c)&&(e.setupState=ft(c)),It(e,a)}let qe;function It(e,c,a){const s=e.type;if(!e.render){if(!c&&qe&&!s.render){const t=s.template||h9(e).template;if(t){const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,l=s2(s2({isCustomElement:r,delimiters:i},n),o);s.render=qe(t,l)}}e.render=s.render||y2}z4(e),S4(),wd(e),N4(),P3()}function aH(e){return new Proxy(e.attrs,{get(c,a){return m2(e,"get","$attrs"),c[a]}})}function sH(e){const c=s=>{e.exposed=s||{}};let a;return{get attrs(){return a||(a=aH(e))},slots:e.slots,emit:e.emit,expose:c}}function z9(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ft(v4(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in K4)return K4[a](e)},has(c,a){return a in c||a in K4}}))}function tH(e,c=!0){return Y(e)?e.displayName||e.name:e.name||c&&e.__name}function rH(e){return Y(e)&&"__vccOpts"in e}const g1=(e,c)=>cd(e,c,u6);function d5(e,c,a){const s=arguments.length;return s===2?b1(c)&&!Q(c)?_8(c)?N1(e,null,[c]):N1(e,c):N1(e,null,c):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&_8(a)&&(a=[a]),N1(e,c,a))}const nH=Symbol(""),iH=()=>F2(nH),oH="3.2.44",lH="http://www.w3.org/2000/svg",S3=typeof document<"u"?document:null,Ue=S3&&S3.createElement("template"),fH={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,s)=>{const t=c?S3.createElementNS(lH,e):S3.createElement(e,a?{is:a}:void 0);return e==="select"&&s&&s.multiple!=null&&t.setAttribute("multiple",s.multiple),t},createText:e=>S3.createTextNode(e),createComment:e=>S3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>S3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,s,t,r){const n=a?a.previousSibling:c.lastChild;if(t&&(t===r||t.nextSibling))for(;c.insertBefore(t.cloneNode(!0),a),!(t===r||!(t=t.nextSibling)););else{Ue.innerHTML=s?`<svg>${e}</svg>`:e;const i=Ue.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}c.insertBefore(i,a)}return[n?n.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}};function hH(e,c,a){const s=e._vtc;s&&(c=(c?[c,...s]:[...s]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}function uH(e,c,a){const s=e.style,t=R1(a);if(a&&!t){for(const r in a)Q0(s,r,a[r]);if(c&&!R1(c))for(const r in c)a[r]==null&&Q0(s,r,"")}else{const r=s.display;t?c!==a&&(s.cssText=a):c&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const $e=/\s*!important$/;function Q0(e,c,a){if(Q(a))a.forEach(s=>Q0(e,c,s));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const s=mH(e,c);$e.test(a)?e.setProperty(y4(s),a.replace($e,""),"important"):e[s]=a}}const Ge=["Webkit","Moz","ms"],z0={};function mH(e,c){const a=z0[c];if(a)return a;let s=I2(c);if(s!=="filter"&&s in e)return z0[c]=s;s=f5(s);for(let t=0;t<Ge.length;t++){const r=Ge[t]+s;if(r in e)return z0[c]=r}return c}const We="http://www.w3.org/1999/xlink";function vH(e,c,a,s,t){if(s&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(We,c.slice(6,c.length)):e.setAttributeNS(We,c,a);else{const r=up(c);a==null||r&&!Bs(a)?e.removeAttribute(c):e.setAttribute(c,r?"":a)}}function CH(e,c,a,s,t,r,n){if(c==="innerHTML"||c==="textContent"){s&&n(s,t,r),e[c]=a==null?"":a;return}if(c==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const o=a==null?"":a;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),a==null&&e.removeAttribute(c);return}let i=!1;if(a===""||a==null){const o=typeof e[c];o==="boolean"?a=Bs(a):a==null&&o==="string"?(a="",i=!0):o==="number"&&(a=0,i=!0)}try{e[c]=a}catch{}i&&e.removeAttribute(c)}function zH(e,c,a,s){e.addEventListener(c,a,s)}function pH(e,c,a,s){e.removeEventListener(c,a,s)}function dH(e,c,a,s,t=null){const r=e._vei||(e._vei={}),n=r[c];if(s&&n)n.value=s;else{const[i,o]=HH(c);if(s){const l=r[c]=gH(s,t);zH(e,i,l,o)}else n&&(pH(e,i,n,o),r[c]=void 0)}}const je=/(?:Once|Passive|Capture)$/;function HH(e){let c;if(je.test(e)){c={};let s;for(;s=e.match(je);)e=e.slice(0,e.length-s[0].length),c[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):y4(e.slice(2)),c]}let p0=0;const MH=Promise.resolve(),VH=()=>p0||(MH.then(()=>p0=0),p0=Date.now());function gH(e,c){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;S2(LH(s,a.value),c,5,[s])};return a.value=e,a.attached=VH(),a}function LH(e,c){if(Q(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(s=>t=>!t._stopped&&s&&s(t))}else return c}const Ke=/^on[a-z]/,bH=(e,c,a,s,t=!1,r,n,i,o)=>{c==="class"?hH(e,s,t):c==="style"?uH(e,a,s):i5(c)?K7(c)||dH(e,c,a,s,n):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):xH(e,c,s,t))?CH(e,c,s,r,n,i,o):(c==="true-value"?e._trueValue=s:c==="false-value"&&(e._falseValue=s),vH(e,c,s,t))};function xH(e,c,a,s){return s?!!(c==="innerHTML"||c==="textContent"||c in e&&Ke.test(c)&&Y(a)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA"||Ke.test(c)&&R1(a)?!1:c in e}const yH=s2({patchProp:bH},fH);let Ze;function SH(){return Ze||(Ze=Od(yH))}const NH=(...e)=>{const c=SH().createApp(...e),{mount:a}=c;return c.mount=s=>{const t=wH(s);if(!t)return;const r=c._component;!Y(r)&&!r.render&&!r.template&&(r.template=t.innerHTML),t.innerHTML="";const n=a(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),n},c};function wH(e){return R1(e)?document.querySelector(e):e}var kH=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let _t;const H5=e=>_t=e,Bt=Symbol();function Y0(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Q4;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Q4||(Q4={}));function AH(){const e=Ks(!0),c=e.run(()=>r9({}));let a=[],s=[];const t=v4({install(r){H5(t),t._a=r,r.provide(Bt,t),r.config.globalProperties.$pinia=t,s.forEach(n=>a.push(n)),s=[]},use(r){return!this._a&&!kH?s.push(r):a.push(r),this},_p:a,_a:null,_e:e,_s:new Map,state:c});return t}const Ot=()=>{};function Qe(e,c,a,s=Ot){e.push(c);const t=()=>{const r=e.indexOf(c);r>-1&&(e.splice(r,1),s())};return!a&&Rt()&&l9(t),t}function K3(e,...c){e.slice().forEach(a=>{a(...c)})}function X0(e,c){e instanceof Map&&c instanceof Map&&c.forEach((a,s)=>e.set(s,a)),e instanceof Set&&c instanceof Set&&c.forEach(e.add,e);for(const a in c){if(!c.hasOwnProperty(a))continue;const s=c[a],t=e[a];Y0(t)&&Y0(s)&&e.hasOwnProperty(a)&&!k1(s)&&!i3(s)?e[a]=X0(t,s):e[a]=s}return e}const TH=Symbol();function EH(e){return!Y0(e)||!e.hasOwnProperty(TH)}const{assign:s3}=Object;function PH(e){return!!(k1(e)&&e.effect)}function DH(e,c,a,s){const{state:t,actions:r,getters:n}=c,i=a.state.value[e];let o;function l(){i||(a.state.value[e]=t?t():{});const f=Qp(a.state.value[e]);return s3(f,r,Object.keys(n||{}).reduce((h,m)=>(h[m]=v4(g1(()=>{H5(a);const C=a._s.get(e);return n[m].call(C,C)})),h),{}))}return o=qt(e,l,c,a,s,!0),o.$reset=function(){const h=t?t():{};this.$patch(m=>{s3(m,h)})},o}function qt(e,c,a={},s,t,r){let n;const i=s3({actions:{}},a),o={deep:!0};let l,f,h=v4([]),m=v4([]),C;const d=s.state.value[e];!r&&!d&&(s.state.value[e]={}),r9({});let L;function w(W){let c1;l=f=!1,typeof W=="function"?(W(s.state.value[e]),c1={type:Q4.patchFunction,storeId:e,events:C}):(X0(s.state.value[e],W),c1={type:Q4.patchObject,payload:W,storeId:e,events:C});const V1=L=Symbol();i9().then(()=>{L===V1&&(l=!0)}),f=!0,K3(h,c1,s.state.value[e])}const p=Ot;function M(){n.stop(),h=[],m=[],s._s.delete(e)}function y(W,c1){return function(){H5(s);const V1=Array.from(arguments),_1=[],t2=[];function z2(B1){_1.push(B1)}function X2(B1){t2.push(B1)}K3(m,{args:V1,name:W,store:$,after:z2,onError:X2});let h2;try{h2=c1.apply(this&&this.$id===e?this:$,V1)}catch(B1){throw K3(t2,B1),B1}return h2 instanceof Promise?h2.then(B1=>(K3(_1,B1),B1)).catch(B1=>(K3(t2,B1),Promise.reject(B1))):(K3(_1,h2),h2)}}const _={_p:s,$id:e,$onAction:Qe.bind(null,m),$patch:w,$reset:p,$subscribe(W,c1={}){const V1=Qe(h,W,c1.detached,()=>_1()),_1=n.run(()=>i4(()=>s.state.value[e],t2=>{(c1.flush==="sync"?f:l)&&W({storeId:e,type:Q4.direct,events:C},t2)},s3({},o,c1)));return V1},$dispose:M},$=w4(_);s._s.set(e,$);const i1=s._e.run(()=>(n=Ks(),n.run(()=>c())));for(const W in i1){const c1=i1[W];if(k1(c1)&&!PH(c1)||i3(c1))r||(d&&EH(c1)&&(k1(c1)?c1.value=d[W]:X0(c1,d[W])),s.state.value[e][W]=c1);else if(typeof c1=="function"){const V1=y(W,c1);i1[W]=V1,i.actions[W]=c1}}return s3($,i1),s3(l1($),i1),Object.defineProperty($,"$state",{get:()=>s.state.value[e],set:W=>{w(c1=>{s3(c1,W)})}}),s._p.forEach(W=>{s3($,n.run(()=>W({store:$,app:s._a,pinia:s,options:i})))}),d&&r&&a.hydrate&&a.hydrate($.$state,d),l=!0,f=!0,$}function RH(e,c,a){let s,t;const r=typeof c=="function";typeof e=="string"?(s=e,t=r?a:c):(t=e,s=e.id);function n(i,o){const l=Rt();return i=i||l&&F2(Bt),i&&H5(i),i=_t,i._s.has(s)||(r?qt(s,c,t,i):DH(s,t,i)),i._s.get(s)}return n.$id=s,n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Y3=typeof window<"u";function FH(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const h1=Object.assign;function d0(e,c){const a={};for(const s in c){const t=c[s];a[s]=N2(t)?t.map(e):e(t)}return a}const Y4=()=>{},N2=Array.isArray,IH=/\/$/,_H=e=>e.replace(IH,"");function H0(e,c,a="/"){let s,t={},r="",n="";const i=c.indexOf("#");let o=c.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=c.slice(0,o),r=c.slice(o+1,i>-1?i:c.length),t=e(r)),i>-1&&(s=s||c.slice(0,i),n=c.slice(i,c.length)),s=UH(s!=null?s:c,a),{fullPath:s+(r&&"?")+r+n,path:s,query:t,hash:n}}function BH(e,c){const a=c.query?e(c.query):"";return c.path+(a&&"?")+a+(c.hash||"")}function Ye(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function OH(e,c,a){const s=c.matched.length-1,t=a.matched.length-1;return s>-1&&s===t&&p4(c.matched[s],a.matched[t])&&Ut(c.params,a.params)&&e(c.query)===e(a.query)&&c.hash===a.hash}function p4(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function Ut(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const a in e)if(!qH(e[a],c[a]))return!1;return!0}function qH(e,c){return N2(e)?Xe(e,c):N2(c)?Xe(c,e):e===c}function Xe(e,c){return N2(c)?e.length===c.length&&e.every((a,s)=>a===c[s]):e.length===1&&e[0]===c}function UH(e,c){if(e.startsWith("/"))return e;if(!e)return c;const a=c.split("/"),s=e.split("/");let t=a.length-1,r,n;for(r=0;r<s.length;r++)if(n=s[r],n!==".")if(n==="..")t>1&&t--;else break;return a.slice(0,t).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var m6;(function(e){e.pop="pop",e.push="push"})(m6||(m6={}));var X4;(function(e){e.back="back",e.forward="forward",e.unknown=""})(X4||(X4={}));function $H(e){if(!e)if(Y3){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_H(e)}const GH=/^[^#]+#/;function WH(e,c){return e.replace(GH,"#")+c}function jH(e,c){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:c.behavior,left:s.left-a.left-(c.left||0),top:s.top-a.top-(c.top||0)}}const M5=()=>({left:window.pageXOffset,top:window.pageYOffset});function KH(e){let c;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;c=jH(t,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function Je(e,c){return(history.state?history.state.position-c:-1)+e}const J0=new Map;function ZH(e,c){J0.set(e,c)}function QH(e){const c=J0.get(e);return J0.delete(e),c}let YH=()=>location.protocol+"//"+location.host;function $t(e,c){const{pathname:a,search:s,hash:t}=c,r=e.indexOf("#");if(r>-1){let i=t.includes(e.slice(r))?e.slice(r).length:1,o=t.slice(i);return o[0]!=="/"&&(o="/"+o),Ye(o,"")}return Ye(a,e)+s+t}function XH(e,c,a,s){let t=[],r=[],n=null;const i=({state:m})=>{const C=$t(e,location),d=a.value,L=c.value;let w=0;if(m){if(a.value=C,c.value=m,n&&n===d){n=null;return}w=L?m.position-L.position:0}else s(C);t.forEach(p=>{p(a.value,d,{delta:w,type:m6.pop,direction:w?w>0?X4.forward:X4.back:X4.unknown})})};function o(){n=a.value}function l(m){t.push(m);const C=()=>{const d=t.indexOf(m);d>-1&&t.splice(d,1)};return r.push(C),C}function f(){const{history:m}=window;!m.state||m.replaceState(h1({},m.state,{scroll:M5()}),"")}function h(){for(const m of r)m();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:l,destroy:h}}function ca(e,c,a,s=!1,t=!1){return{back:e,current:c,forward:a,replaced:s,position:window.history.length,scroll:t?M5():null}}function JH(e){const{history:c,location:a}=window,s={value:$t(e,a)},t={value:c.state};t.value||r(s.value,{back:null,current:s.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const h=e.indexOf("#"),m=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+o:YH()+e+o;try{c[f?"replaceState":"pushState"](l,"",m),t.value=l}catch(C){console.error(C),a[f?"replace":"assign"](m)}}function n(o,l){const f=h1({},c.state,ca(t.value.back,o,t.value.forward,!0),l,{position:t.value.position});r(o,f,!0),s.value=o}function i(o,l){const f=h1({},t.value,c.state,{forward:o,scroll:M5()});r(f.current,f,!0);const h=h1({},ca(s.value,o,null),{position:f.position+1},l);r(o,h,!1),s.value=o}return{location:s,state:t,push:i,replace:n}}function cM(e){e=$H(e);const c=JH(e),a=XH(e,c.state,c.location,c.replace);function s(r,n=!0){n||a.pauseListeners(),history.go(r)}const t=h1({location:"",base:e,go:s,createHref:WH.bind(null,e)},c,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>c.state.value}),t}function eM(e){return typeof e=="string"||e&&typeof e=="object"}function Gt(e){return typeof e=="string"||typeof e=="symbol"}const c3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wt=Symbol("");var ea;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ea||(ea={}));function d4(e,c){return h1(new Error,{type:e,[Wt]:!0},c)}function B2(e,c){return e instanceof Error&&Wt in e&&(c==null||!!(e.type&c))}const aa="[^/]+?",aM={sensitive:!1,strict:!1,start:!0,end:!0},sM=/[.+*?^${}()[\]/\\]/g;function tM(e,c){const a=h1({},aM,c),s=[];let t=a.start?"^":"";const r=[];for(const l of e){const f=l.length?[]:[90];a.strict&&!l.length&&(t+="/");for(let h=0;h<l.length;h++){const m=l[h];let C=40+(a.sensitive?.25:0);if(m.type===0)h||(t+="/"),t+=m.value.replace(sM,"\\$&"),C+=40;else if(m.type===1){const{value:d,repeatable:L,optional:w,regexp:p}=m;r.push({name:d,repeatable:L,optional:w});const M=p||aa;if(M!==aa){C+=10;try{new RegExp(`(${M})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${d}" (${M}): `+_.message)}}let y=L?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(y=w&&l.length<2?`(?:/${y})`:"/"+y),w&&(y+="?"),t+=y,C+=20,w&&(C+=-8),L&&(C+=-20),M===".*"&&(C+=-50)}f.push(C)}s.push(f)}if(a.strict&&a.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const n=new RegExp(t,a.sensitive?"":"i");function i(l){const f=l.match(n),h={};if(!f)return null;for(let m=1;m<f.length;m++){const C=f[m]||"",d=r[m-1];h[d.name]=C&&d.repeatable?C.split("/"):C}return h}function o(l){let f="",h=!1;for(const m of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const C of m)if(C.type===0)f+=C.value;else if(C.type===1){const{value:d,repeatable:L,optional:w}=C,p=d in l?l[d]:"";if(N2(p)&&!L)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const M=N2(p)?p.join("/"):p;if(!M)if(w)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${d}"`);f+=M}}return f||"/"}return{re:n,score:s,keys:r,parse:i,stringify:o}}function rM(e,c){let a=0;for(;a<e.length&&a<c.length;){const s=c[a]-e[a];if(s)return s;a++}return e.length<c.length?e.length===1&&e[0]===40+40?-1:1:e.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function nM(e,c){let a=0;const s=e.score,t=c.score;for(;a<s.length&&a<t.length;){const r=rM(s[a],t[a]);if(r)return r;a++}if(Math.abs(t.length-s.length)===1){if(sa(s))return 1;if(sa(t))return-1}return t.length-s.length}function sa(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const iM={type:0,value:""},oM=/[a-zA-Z0-9_]/;function lM(e){if(!e)return[[]];if(e==="/")return[[iM]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(C){throw new Error(`ERR (${a})/"${l}": ${C}`)}let a=0,s=a;const t=[];let r;function n(){r&&t.push(r),r=[]}let i=0,o,l="",f="";function h(){!l||(a===0?r.push({type:0,value:l}):a===1||a===2||a===3?(r.length>1&&(o==="*"||o==="+")&&c(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):c("Invalid state to consume buffer"),l="")}function m(){l+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:o==="/"?(l&&h(),n()):o===":"?(h(),a=1):m();break;case 4:m(),a=s;break;case 1:o==="("?a=2:oM.test(o)?m():(h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:c("Unknown state");break}}return a===2&&c(`Unfinished custom RegExp for param "${l}"`),h(),n(),t}function fM(e,c,a){const s=tM(lM(e.path),a),t=h1(s,{record:e,parent:c,children:[],alias:[]});return c&&!t.record.aliasOf==!c.record.aliasOf&&c.children.push(t),t}function hM(e,c){const a=[],s=new Map;c=na({strict:!1,end:!0,sensitive:!1},c);function t(f){return s.get(f)}function r(f,h,m){const C=!m,d=uM(f);d.aliasOf=m&&m.record;const L=na(c,f),w=[d];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const _ of y)w.push(h1({},d,{components:m?m.record.components:d.components,path:_,aliasOf:m?m.record:d}))}let p,M;for(const y of w){const{path:_}=y;if(h&&_[0]!=="/"){const $=h.record.path,i1=$[$.length-1]==="/"?"":"/";y.path=h.record.path+(_&&i1+_)}if(p=fM(y,h,L),m?m.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),C&&f.name&&!ra(p)&&n(f.name)),d.children){const $=d.children;for(let i1=0;i1<$.length;i1++)r($[i1],p,m&&m.children[i1])}m=m||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&o(p)}return M?()=>{n(M)}:Y4}function n(f){if(Gt(f)){const h=s.get(f);h&&(s.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(n),h.alias.forEach(n))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(n),f.alias.forEach(n))}}function i(){return a}function o(f){let h=0;for(;h<a.length&&nM(f,a[h])>=0&&(f.record.path!==a[h].record.path||!jt(f,a[h]));)h++;a.splice(h,0,f),f.record.name&&!ra(f)&&s.set(f.record.name,f)}function l(f,h){let m,C={},d,L;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw d4(1,{location:f});L=m.record.name,C=h1(ta(h.params,m.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&ta(f.params,m.keys.map(M=>M.name))),d=m.stringify(C)}else if("path"in f)d=f.path,m=a.find(M=>M.re.test(d)),m&&(C=m.parse(d),L=m.record.name);else{if(m=h.name?s.get(h.name):a.find(M=>M.re.test(h.path)),!m)throw d4(1,{location:f,currentLocation:h});L=m.record.name,C=h1({},h.params,f.params),d=m.stringify(C)}const w=[];let p=m;for(;p;)w.unshift(p.record),p=p.parent;return{name:L,path:d,params:C,matched:w,meta:vM(w)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:n,getRoutes:i,getRecordMatcher:t}}function ta(e,c){const a={};for(const s of c)s in e&&(a[s]=e[s]);return a}function uM(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:mM(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function mM(e){const c={},a=e.props||!1;if("component"in e)c.default=a;else for(const s in e.components)c[s]=typeof a=="boolean"?a:a[s];return c}function ra(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vM(e){return e.reduce((c,a)=>h1(c,a.meta),{})}function na(e,c){const a={};for(const s in e)a[s]=s in c?c[s]:e[s];return a}function jt(e,c){return c.children.some(a=>a===e||jt(e,a))}const Kt=/#/g,CM=/&/g,zM=/\//g,pM=/=/g,dM=/\?/g,Zt=/\+/g,HM=/%5B/g,MM=/%5D/g,Qt=/%5E/g,VM=/%60/g,Yt=/%7B/g,gM=/%7C/g,Xt=/%7D/g,LM=/%20/g;function p9(e){return encodeURI(""+e).replace(gM,"|").replace(HM,"[").replace(MM,"]")}function bM(e){return p9(e).replace(Yt,"{").replace(Xt,"}").replace(Qt,"^")}function c7(e){return p9(e).replace(Zt,"%2B").replace(LM,"+").replace(Kt,"%23").replace(CM,"%26").replace(VM,"`").replace(Yt,"{").replace(Xt,"}").replace(Qt,"^")}function xM(e){return c7(e).replace(pM,"%3D")}function yM(e){return p9(e).replace(Kt,"%23").replace(dM,"%3F")}function SM(e){return e==null?"":yM(e).replace(zM,"%2F")}function B8(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function NM(e){const c={};if(e===""||e==="?")return c;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<s.length;++t){const r=s[t].replace(Zt," "),n=r.indexOf("="),i=B8(n<0?r:r.slice(0,n)),o=n<0?null:B8(r.slice(n+1));if(i in c){let l=c[i];N2(l)||(l=c[i]=[l]),l.push(o)}else c[i]=o}return c}function ia(e){let c="";for(let a in e){const s=e[a];if(a=xM(a),s==null){s!==void 0&&(c+=(c.length?"&":"")+a);continue}(N2(s)?s.map(r=>r&&c7(r)):[s&&c7(s)]).forEach(r=>{r!==void 0&&(c+=(c.length?"&":"")+a,r!=null&&(c+="="+r))})}return c}function wM(e){const c={};for(const a in e){const s=e[a];s!==void 0&&(c[a]=N2(s)?s.map(t=>t==null?null:""+t):s==null?s:""+s)}return c}const kM=Symbol(""),oa=Symbol(""),d9=Symbol(""),Jt=Symbol(""),e7=Symbol("");function B4(){let e=[];function c(s){return e.push(s),()=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)}}function a(){e=[]}return{add:c,list:()=>e,reset:a}}function t3(e,c,a,s,t){const r=s&&(s.enterCallbacks[t]=s.enterCallbacks[t]||[]);return()=>new Promise((n,i)=>{const o=h=>{h===!1?i(d4(4,{from:a,to:c})):h instanceof Error?i(h):eM(h)?i(d4(2,{from:c,to:h})):(r&&s.enterCallbacks[t]===r&&typeof h=="function"&&r.push(h),n())},l=e.call(s&&s.instances[t],c,a,o);let f=Promise.resolve(l);e.length<3&&(f=f.then(o)),f.catch(h=>i(h))})}function M0(e,c,a,s){const t=[];for(const r of e)for(const n in r.components){let i=r.components[n];if(!(c!=="beforeRouteEnter"&&!r.instances[n]))if(AM(i)){const l=(i.__vccOpts||i)[c];l&&t.push(t3(l,a,s,r,n))}else{let o=i();t.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${r.path}"`));const f=FH(l)?l.default:l;r.components[n]=f;const m=(f.__vccOpts||f)[c];return m&&t3(m,a,s,r,n)()}))}}return t}function AM(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function la(e){const c=F2(d9),a=F2(Jt),s=g1(()=>c.resolve(r4(e.to))),t=g1(()=>{const{matched:o}=s.value,{length:l}=o,f=o[l-1],h=a.matched;if(!f||!h.length)return-1;const m=h.findIndex(p4.bind(null,f));if(m>-1)return m;const C=fa(o[l-2]);return l>1&&fa(f)===C&&h[h.length-1].path!==C?h.findIndex(p4.bind(null,o[l-2])):m}),r=g1(()=>t.value>-1&&PM(a.params,s.value.params)),n=g1(()=>t.value>-1&&t.value===a.matched.length-1&&Ut(a.params,s.value.params));function i(o={}){return EM(o)?c[r4(e.replace)?"replace":"push"](r4(e.to)).catch(Y4):Promise.resolve()}return{route:s,href:g1(()=>s.value.href),isActive:r,isExactActive:n,navigate:i}}const TM=T6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:la,setup(e,{slots:c}){const a=w4(la(e)),{options:s}=F2(d9),t=g1(()=>({[ha(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[ha(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=c.default&&c.default(a);return e.custom?r:d5("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},r)}}}),cr=TM;function EM(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function PM(e,c){for(const a in c){const s=c[a],t=e[a];if(typeof s=="string"){if(s!==t)return!1}else if(!N2(t)||t.length!==s.length||s.some((r,n)=>r!==t[n]))return!1}return!0}function fa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ha=(e,c,a)=>e!=null?e:c!=null?c:a,DM=T6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:a}){const s=F2(e7),t=g1(()=>e.route||s.value),r=F2(oa,0),n=g1(()=>{let l=r4(r);const{matched:f}=t.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),i=g1(()=>t.value.matched[n.value]);S8(oa,g1(()=>n.value+1)),S8(kM,i),S8(e7,t);const o=r9();return i4(()=>[o.value,i.value,e.name],([l,f,h],[m,C,d])=>{f&&(f.instances[h]=l,C&&C!==f&&l&&l===m&&(f.leaveGuards.size||(f.leaveGuards=C.leaveGuards),f.updateGuards.size||(f.updateGuards=C.updateGuards))),l&&f&&(!C||!p4(f,C)||!m)&&(f.enterCallbacks[h]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=t.value,f=e.name,h=i.value,m=h&&h.components[f];if(!m)return ua(a.default,{Component:m,route:l});const C=h.props[f],d=C?C===!0?l.params:typeof C=="function"?C(l):C:null,w=d5(m,h1({},d,c,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return ua(a.default,{Component:w,route:l})||w}}});function ua(e,c){if(!e)return null;const a=e(c);return a.length===1?a[0]:a}const RM=DM;function FM(e){const c=hM(e.routes,e),a=e.parseQuery||NM,s=e.stringifyQuery||ia,t=e.history,r=B4(),n=B4(),i=B4(),o=jp(c3);let l=c3;Y3&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=d0.bind(null,V=>""+V),h=d0.bind(null,SM),m=d0.bind(null,B8);function C(V,P){let A,O;return Gt(V)?(A=c.getRecordMatcher(V),O=P):O=V,c.addRoute(O,A)}function d(V){const P=c.getRecordMatcher(V);P&&c.removeRoute(P)}function L(){return c.getRoutes().map(V=>V.record)}function w(V){return!!c.getRecordMatcher(V)}function p(V,P){if(P=h1({},P||o.value),typeof V=="string"){const u=H0(a,V,P.path),v=c.resolve({path:u.path},P),z=t.createHref(u.fullPath);return h1(u,v,{params:m(v.params),hash:B8(u.hash),redirectedFrom:void 0,href:z})}let A;if("path"in V)A=h1({},V,{path:H0(a,V.path,P.path).path});else{const u=h1({},V.params);for(const v in u)u[v]==null&&delete u[v];A=h1({},V,{params:h(V.params)}),P.params=h(P.params)}const O=c.resolve(A,P),r1=V.hash||"";O.params=f(m(O.params));const x1=BH(s,h1({},V,{hash:bM(r1),path:O.path})),X=t.createHref(x1);return h1({fullPath:x1,hash:r1,query:s===ia?wM(V.query):V.query||{}},O,{redirectedFrom:void 0,href:X})}function M(V){return typeof V=="string"?H0(a,V,o.value.path):h1({},V)}function y(V,P){if(l!==V)return d4(8,{from:P,to:V})}function _(V){return W(V)}function $(V){return _(h1(M(V),{replace:!0}))}function i1(V){const P=V.matched[V.matched.length-1];if(P&&P.redirect){const{redirect:A}=P;let O=typeof A=="function"?A(V):A;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=M(O):{path:O},O.params={}),h1({query:V.query,hash:V.hash,params:"path"in O?{}:V.params},O)}}function W(V,P){const A=l=p(V),O=o.value,r1=V.state,x1=V.force,X=V.replace===!0,u=i1(A);if(u)return W(h1(M(u),{state:typeof u=="object"?h1({},r1,u.state):r1,force:x1,replace:X}),P||A);const v=A;v.redirectedFrom=P;let z;return!x1&&OH(s,O,A)&&(z=d4(16,{to:v,from:O}),V3(O,O,!0,!1)),(z?Promise.resolve(z):V1(v,O)).catch(H=>B2(H)?B2(H,2)?H:d2(H):z1(H,v,O)).then(H=>{if(H){if(B2(H,2))return W(h1({replace:X},M(H.to),{state:typeof H.to=="object"?h1({},r1,H.to.state):r1,force:x1}),P||v)}else H=t2(v,O,!0,X,r1);return _1(v,O,H),H})}function c1(V,P){const A=y(V,P);return A?Promise.reject(A):Promise.resolve()}function V1(V,P){let A;const[O,r1,x1]=IM(V,P);A=M0(O.reverse(),"beforeRouteLeave",V,P);for(const u of O)u.leaveGuards.forEach(v=>{A.push(t3(v,V,P))});const X=c1.bind(null,V,P);return A.push(X),Z3(A).then(()=>{A=[];for(const u of r.list())A.push(t3(u,V,P));return A.push(X),Z3(A)}).then(()=>{A=M0(r1,"beforeRouteUpdate",V,P);for(const u of r1)u.updateGuards.forEach(v=>{A.push(t3(v,V,P))});return A.push(X),Z3(A)}).then(()=>{A=[];for(const u of V.matched)if(u.beforeEnter&&!P.matched.includes(u))if(N2(u.beforeEnter))for(const v of u.beforeEnter)A.push(t3(v,V,P));else A.push(t3(u.beforeEnter,V,P));return A.push(X),Z3(A)}).then(()=>(V.matched.forEach(u=>u.enterCallbacks={}),A=M0(x1,"beforeRouteEnter",V,P),A.push(X),Z3(A))).then(()=>{A=[];for(const u of n.list())A.push(t3(u,V,P));return A.push(X),Z3(A)}).catch(u=>B2(u,8)?u:Promise.reject(u))}function _1(V,P,A){for(const O of i.list())O(V,P,A)}function t2(V,P,A,O,r1){const x1=y(V,P);if(x1)return x1;const X=P===c3,u=Y3?history.state:{};A&&(O||X?t.replace(V.fullPath,h1({scroll:X&&u&&u.scroll},r1)):t.push(V.fullPath,r1)),o.value=V,V3(V,P,A,X),d2()}let z2;function X2(){z2||(z2=t.listen((V,P,A)=>{if(!a8.listening)return;const O=p(V),r1=i1(O);if(r1){W(h1(r1,{replace:!0}),O).catch(Y4);return}l=O;const x1=o.value;Y3&&ZH(Je(x1.fullPath,A.delta),M5()),V1(O,x1).catch(X=>B2(X,12)?X:B2(X,2)?(W(X.to,O).then(u=>{B2(u,20)&&!A.delta&&A.type===m6.pop&&t.go(-1,!1)}).catch(Y4),Promise.reject()):(A.delta&&t.go(-A.delta,!1),z1(X,O,x1))).then(X=>{X=X||t2(O,x1,!1),X&&(A.delta&&!B2(X,8)?t.go(-A.delta,!1):A.type===m6.pop&&B2(X,20)&&t.go(-1,!1)),_1(O,x1,X)}).catch(Y4)}))}let h2=B4(),B1=B4(),A1;function z1(V,P,A){d2(V);const O=B1.list();return O.length?O.forEach(r1=>r1(V,P,A)):console.error(V),Promise.reject(V)}function m1(){return A1&&o.value!==c3?Promise.resolve():new Promise((V,P)=>{h2.add([V,P])})}function d2(V){return A1||(A1=!V,X2(),h2.list().forEach(([P,A])=>V?A(V):P()),h2.reset()),V}function V3(V,P,A,O){const{scrollBehavior:r1}=e;if(!Y3||!r1)return Promise.resolve();const x1=!A&&QH(Je(V.fullPath,0))||(O||!A)&&history.state&&history.state.scroll||null;return i9().then(()=>r1(V,P,x1)).then(X=>X&&KH(X)).catch(X=>z1(X,V,P))}const H2=V=>t.go(V);let r2;const W3=new Set,a8={currentRoute:o,listening:!0,addRoute:C,removeRoute:d,hasRoute:w,getRoutes:L,resolve:p,options:e,push:_,replace:$,go:H2,back:()=>H2(-1),forward:()=>H2(1),beforeEach:r.add,beforeResolve:n.add,afterEach:i.add,onError:B1.add,isReady:m1,install(V){const P=this;V.component("RouterLink",cr),V.component("RouterView",RM),V.config.globalProperties.$router=P,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>r4(o)}),Y3&&!r2&&o.value===c3&&(r2=!0,_(t.location).catch(r1=>{}));const A={};for(const r1 in c3)A[r1]=g1(()=>o.value[r1]);V.provide(d9,P),V.provide(Jt,w4(A)),V.provide(e7,o);const O=V.unmount;W3.add(V),V.unmount=function(){W3.delete(V),W3.size<1&&(l=c3,z2&&z2(),z2=null,o.value=c3,r2=!1,A1=!1),O()}}};return a8}function Z3(e){return e.reduce((c,a)=>c.then(()=>a()),Promise.resolve())}function IM(e,c){const a=[],s=[],t=[],r=Math.max(c.matched.length,e.matched.length);for(let n=0;n<r;n++){const i=c.matched[n];i&&(e.matched.find(l=>p4(l,i))?s.push(i):a.push(i));const o=e.matched[n];o&&(c.matched.find(l=>p4(l,o))||t.push(o))}return[a,s,t]}const P6=(e,c)=>{const a=e.__vccOpts||e;for(const[s,t]of c)a[s]=t;return a},_M={components:{RouterLink:cr}},BM={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},OM={class:"flex flex-wrap -mb-px"},qM={class:"mr-2"};function UM(e,c,a,s,t,r){const n=E6("router-link");return g2(),r3("div",null,[C1("div",BM,[C1("ul",OM,[C1("li",qM,[N1(n,{to:"about",class:"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"},{default:v5(()=>[p5("About Us")]),_:1})])])]),C1("div",null,[bt(e.$slots,"default")])])}const $M=P6(_M,[["render",UM]]),GM={},WM={class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},jM={class:"flex flex-wrap -mb-px"},KM={class:"mr-2"};function ZM(e,c){const a=E6("router-link");return g2(),r3("div",null,[C1("div",WM,[C1("ul",jM,[C1("li",KM,[N1(a,{to:"/",class:"inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"},{default:v5(()=>[p5("Home")]),_:1})])])]),C1("div",null,[bt(e.$slots,"default")])])}const ma=P6(GM,[["render",ZM]]),QM={components:{Main:$M,Default:ma},computed:{layout(){return this.$route.meta.layout||ma}}};function YM(e,c,a,s,t,r){const n=E6("RouterView");return g2(),v9(yd(r.layout),null,{default:v5(()=>[N1(n)]),_:1})}const XM=P6(QM,[["render",YM]]),JM="/web-project/assets/logoVue.d7fe1132.png",cV="/web-project/assets/logoCSS.d2e9f9dd.png",eV="/web-project/assets/logoHTML.e32b3336.png",aV="/web-project/assets/logoJavascript.a53447f4.png",sV={},tV=C1("link",{rel:"stylesheet",href:"src/assets/style.css"},null,-1),rV={class:"ml-20 mt-20"},nV=C1("i",{class:"text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-green-500"},"KU81 CS36",-1),iV=Kd('<h1><strong class="inline-block text-4xl ml-18 text-center font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Team Start</strong></h1><h1><i class="text-white"> \u0E40\u0E27\u0E47\u0E1A\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E08\u0E31\u0E14\u0E17\u0E33\u0E02\u0E36\u0E49\u0E19\u0E42\u0E14\u0E22\u0E21\u0E35\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E02\u0E35\u0E22\u0E19 website \u0E08\u0E32\u0E01\u0E04\u0E48\u0E32\u0E22 PreDevCamp </i></h1><h1><i class="text-white"> \u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 \u0E20\u0E32\u0E29\u0E32 HTML, JavaScript, CSS \u0E40\u0E40\u0E25\u0E30\u0E43\u0E0A\u0E49 framework \u0E40\u0E1B\u0E47\u0E19 vue \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E07\u0E48\u0E32\u0E22\u0E22\u0E34\u0E48\u0E07\u0E02\u0E36\u0E49\u0E19 </i></h1><h1><i class="text-white">\u0E2A\u0E42\u0E25\u0E41\u0E01\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E25\u0E38\u0E48\u0E21\u0E04\u0E37\u0E2D : <q> \u0E40\u0E23\u0E35\u0E22\u0E19\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E40\u0E40\u0E2A\u0E19\u0E40\u0E28\u0E23\u0E49\u0E32 \u0E40\u0E40\u0E25\u0E30\u0E40\u0E2B\u0E07\u0E32\u0E19\u0E31\u0E01 \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E19\u0E2B\u0E32\u0E22 \u0E40\u0E04\u0E22\u0E21\u0E35\u0E04\u0E33\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E27\u0E48\u0E32\u0E08\u0E30\u0E23\u0E31\u0E01\u0E08\u0E19\u0E27\u0E31\u0E19\u0E15\u0E32\u0E22 \u0E40\u0E40\u0E15\u0E48\u0E01\u0E25\u0E31\u0E1A\u0E01\u0E25\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19 \u0E04\u0E33\u0E2D\u0E33\u0E25\u0E32 </q></i></h1><a href="https://vuejs.org/"><img class="my-16 ml-10 inline-block hover:scale-105 hover:shadow-black outline-double ; block ; p-6 ; max-w-sm ; bg-white ; rounded-lg ; border ; border-gray-900 ; shadow-md ; hover:bg-gray-500 ; dark:bg-gray-800 ; dark:border-gray-700 ; dark:hover:bg-gray-700" src="'+JM+'" alt="logoVue" width="141"></a><a href="https://www.w3schools.com/html/"><img class="ml-5 inline-block hover:scale-105 hover:shadow-black outline-double ; block ; p-6 ; max-w-sm ; bg-white ; rounded-lg ; border ; border-gray-900 ; shadow-md ; hover:bg-gray-500 ; dark:bg-gray-800 ; dark:border-gray-700 ; dark:hover:bg-gray-700" src="'+cV+'" alt="logoHTML" width="128"></a><a href="https://www.w3schools.com/css/default.asp"><img class="ml-5 inline-block hover:scale-105 hover:shadow-black outline-double ; block ; p-6 ; max-w-sm ; bg-white ; rounded-lg ; border ; border-gray-900 ; shadow-md ; hover:bg-gray-500 ; dark:bg-gray-800 ; dark:border-gray-700 ; dark:hover:bg-gray-700" src="'+eV+'" alt="logoCSS" width="128"></a><a href="https://horn-typhoon-d0f.notion.site/Javascript-6d3937143e2741c28ece17df3397de6d"><img class="ml-5 inline-block hover:scale-105 hover:shadow-black outline-double ; block ; p-6 ; max-w-sm ; bg-white ; rounded-lg ; border ; border-gray-900 ; shadow-md ; hover:bg-gray-500 ; dark:bg-gray-800 ; dark:border-gray-700 ; dark:hover:bg-gray-700" src="'+aV+'" alt="logoJavaScript" width="128"></a>',8),oV=C1("div",null,null,-1);function lV(e,c){const a=E6("font-awesome-icon");return g2(),r3("div",null,[tV,C1("div",rV,[C1("div",null,[C1("h1",null,[N1(a,{icon:"fa-solid fa-location-dot",class:"mb-0.5 text-red-500 text-xl"}),p5(),nV]),iV]),oV])])}const fV=P6(sV,[["render",lV]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=function(e){const c=[];let a=0;for(let s=0;s<e.length;s++){let t=e.charCodeAt(s);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++s)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},hV=function(e){const c=[];let a=0,s=0;for(;a<e.length;){const t=e[a++];if(t<128)c[s++]=String.fromCharCode(t);else if(t>191&&t<224){const r=e[a++];c[s++]=String.fromCharCode((t&31)<<6|r&63)}else if(t>239&&t<365){const r=e[a++],n=e[a++],i=e[a++],o=((t&7)<<18|(r&63)<<12|(n&63)<<6|i&63)-65536;c[s++]=String.fromCharCode(55296+(o>>10)),c[s++]=String.fromCharCode(56320+(o&1023))}else{const r=e[a++],n=e[a++];c[s++]=String.fromCharCode((t&15)<<12|(r&63)<<6|n&63)}}return c.join("")},ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],n=t+1<e.length,i=n?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,f=r>>2,h=(r&3)<<4|i>>4;let m=(i&15)<<2|l>>6,C=l&63;o||(C=64,n||(m=64)),s.push(a[f],a[h],a[m],a[C])}return s.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(er(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):hV(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=a[e.charAt(t++)],i=t<e.length?a[e.charAt(t)]:0;++t;const l=t<e.length?a[e.charAt(t)]:64;++t;const h=t<e.length?a[e.charAt(t)]:64;if(++t,r==null||i==null||l==null||h==null)throw Error();const m=r<<2|i>>4;if(s.push(m),l!==64){const C=i<<4&240|l>>2;if(s.push(C),h!==64){const d=l<<6&192|h;s.push(d)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},uV=function(e){const c=er(e);return ar.encodeByteArray(c,!0)},O8=function(e){return uV(e).replace(/\./g,"")},mV=function(e){try{return ar.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};function vV(){return typeof indexedDB=="object"}function CV(){return new Promise((e,c)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(s);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(s),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var r;c(((r=t.error)===null||r===void 0?void 0:r.message)||"")}}catch(a){c(a)}})}function zV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=()=>zV().__FIREBASE_DEFAULTS__,dV=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},HV=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&mV(e[1]);return c&&JSON.parse(c)},sr=()=>{try{return pV()||dV()||HV()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},MV=e=>{var c,a;return(a=(c=sr())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},VV=e=>{const c=MV(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const s=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),s]:[c.substring(0,a),s]},gV=()=>{var e;return(e=sr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},s=c||"demo-project",t=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const n=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:t,exp:t+3600,auth_time:t,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),i="";return[O8(JSON.stringify(a)),O8(JSON.stringify(n)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xV="FirebaseError";class k4 extends Error{constructor(c,a,s){super(a),this.code=c,this.customData=s,this.name=xV,Object.setPrototypeOf(this,k4.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(c,a,s){this.service=c,this.serviceName=a,this.errors=s}create(c,...a){const s=a[0]||{},t=`${this.service}/${c}`,r=this.errors[c],n=r?yV(r,s):"Error",i=`${this.serviceName}: ${n} (${t}).`;return new k4(t,i,s)}}function yV(e,c){return e.replace(SV,(a,s)=>{const t=c[s];return t!=null?String(t):`<${s}?>`})}const SV=/\{\$([^}]+)}/g;function a7(e,c){if(e===c)return!0;const a=Object.keys(e),s=Object.keys(c);for(const t of a){if(!s.includes(t))return!1;const r=e[t],n=c[t];if(va(r)&&va(n)){if(!a7(r,n))return!1}else if(r!==n)return!1}for(const t of s)if(!a.includes(t))return!1;return!0}function va(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(e){return e&&e._delegate?e._delegate:e}class v6{constructor(c,a,s){this.name=c,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x3="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const s=new LV;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&s.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const s=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(t)return null;throw r}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(AV(c))try{this.getOrInitializeService({instanceIdentifier:x3})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:t});s.resolve(r)}catch{}}}}clearInstance(c=x3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=x3){return this.instances.has(c)}getOptions(c=x3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);s===i&&n.resolve(t)}return t}onInit(c,a){var s;const t=this.normalizeInstanceIdentifier(a),r=(s=this.onInitCallbacks.get(t))!==null&&s!==void 0?s:new Set;r.add(c),this.onInitCallbacks.set(t,r);const n=this.instances.get(t);return n&&c(n,t),()=>{r.delete(c)}}invokeOnInitCallbacks(c,a){const s=this.onInitCallbacks.get(a);if(!!s)for(const t of s)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let s=this.instances.get(c);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kV(c),options:a}),this.instances.set(c,s),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(s,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,s)}catch{}return s||null}normalizeInstanceIdentifier(c=x3){return this.component?this.component.multipleInstances?c:x3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kV(e){return e===x3?void 0:e}function AV(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new wV(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f1||(f1={}));const EV={debug:f1.DEBUG,verbose:f1.VERBOSE,info:f1.INFO,warn:f1.WARN,error:f1.ERROR,silent:f1.SILENT},PV=f1.INFO,DV={[f1.DEBUG]:"log",[f1.VERBOSE]:"log",[f1.INFO]:"info",[f1.WARN]:"warn",[f1.ERROR]:"error"},RV=(e,c,...a)=>{if(c<e.logLevel)return;const s=new Date().toISOString(),t=DV[c];if(t)console[t](`[${s}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class rr{constructor(c){this.name=c,this._logLevel=PV,this._logHandler=RV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in f1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?EV[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,f1.DEBUG,...c),this._logHandler(this,f1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,f1.VERBOSE,...c),this._logHandler(this,f1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,f1.INFO,...c),this._logHandler(this,f1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,f1.WARN,...c),this._logHandler(this,f1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,f1.ERROR,...c),this._logHandler(this,f1.ERROR,...c)}}const FV=(e,c)=>c.some(a=>e instanceof a);let Ca,za;function IV(){return Ca||(Ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _V(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nr=new WeakMap,s7=new WeakMap,ir=new WeakMap,V0=new WeakMap,H9=new WeakMap;function BV(e){const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("success",r),e.removeEventListener("error",n)},r=()=>{a(l3(e.result)),t()},n=()=>{s(e.error),t()};e.addEventListener("success",r),e.addEventListener("error",n)});return c.then(a=>{a instanceof IDBCursor&&nr.set(a,e)}).catch(()=>{}),H9.set(c,e),c}function OV(e){if(s7.has(e))return;const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",n),e.removeEventListener("abort",n)},r=()=>{a(),t()},n=()=>{s(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",r),e.addEventListener("error",n),e.addEventListener("abort",n)});s7.set(e,c)}let t7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return s7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||ir.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return l3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function qV(e){t7=e(t7)}function UV(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const s=e.call(g0(this),c,...a);return ir.set(s,c.sort?c.sort():[c]),l3(s)}:_V().includes(e)?function(...c){return e.apply(g0(this),c),l3(nr.get(this))}:function(...c){return l3(e.apply(g0(this),c))}}function $V(e){return typeof e=="function"?UV(e):(e instanceof IDBTransaction&&OV(e),FV(e,IV())?new Proxy(e,t7):e)}function l3(e){if(e instanceof IDBRequest)return BV(e);if(V0.has(e))return V0.get(e);const c=$V(e);return c!==e&&(V0.set(e,c),H9.set(c,e)),c}const g0=e=>H9.get(e);function GV(e,c,{blocked:a,upgrade:s,blocking:t,terminated:r}={}){const n=indexedDB.open(e,c),i=l3(n);return s&&n.addEventListener("upgradeneeded",o=>{s(l3(n.result),o.oldVersion,o.newVersion,l3(n.transaction))}),a&&n.addEventListener("blocked",()=>a()),i.then(o=>{r&&o.addEventListener("close",()=>r()),t&&o.addEventListener("versionchange",()=>t())}).catch(()=>{}),i}const WV=["get","getKey","getAll","getAllKeys","count"],jV=["put","add","delete","clear"],L0=new Map;function pa(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(L0.get(c))return L0.get(c);const a=c.replace(/FromIndex$/,""),s=c!==a,t=jV.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(t||WV.includes(a)))return;const r=async function(n,...i){const o=this.transaction(n,t?"readwrite":"readonly");let l=o.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[a](...i),t&&o.done]))[0]};return L0.set(c,r),r}qV(e=>({...e,get:(c,a,s)=>pa(c,a)||e.get(c,a,s),has:(c,a)=>!!pa(c,a)||e.has(c,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(ZV(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function ZV(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const r7="@firebase/app",da="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B3=new rr("@firebase/app"),QV="@firebase/app-compat",YV="@firebase/analytics-compat",XV="@firebase/analytics",JV="@firebase/app-check-compat",cg="@firebase/app-check",eg="@firebase/auth",ag="@firebase/auth-compat",sg="@firebase/database",tg="@firebase/database-compat",rg="@firebase/functions",ng="@firebase/functions-compat",ig="@firebase/installations",og="@firebase/installations-compat",lg="@firebase/messaging",fg="@firebase/messaging-compat",hg="@firebase/performance",ug="@firebase/performance-compat",mg="@firebase/remote-config",vg="@firebase/remote-config-compat",Cg="@firebase/storage",zg="@firebase/storage-compat",pg="@firebase/firestore",dg="@firebase/firestore-compat",Hg="firebase",Mg="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n7="[DEFAULT]",Vg={[r7]:"fire-core",[QV]:"fire-core-compat",[XV]:"fire-analytics",[YV]:"fire-analytics-compat",[cg]:"fire-app-check",[JV]:"fire-app-check-compat",[eg]:"fire-auth",[ag]:"fire-auth-compat",[sg]:"fire-rtdb",[tg]:"fire-rtdb-compat",[rg]:"fire-fn",[ng]:"fire-fn-compat",[ig]:"fire-iid",[og]:"fire-iid-compat",[lg]:"fire-fcm",[fg]:"fire-fcm-compat",[hg]:"fire-perf",[ug]:"fire-perf-compat",[mg]:"fire-rc",[vg]:"fire-rc-compat",[Cg]:"fire-gcs",[zg]:"fire-gcs-compat",[pg]:"fire-fst",[dg]:"fire-fst-compat","fire-js":"fire-js",[Hg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q8=new Map,i7=new Map;function gg(e,c){try{e.container.addComponent(c)}catch(a){B3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function U8(e){const c=e.name;if(i7.has(c))return B3.debug(`There were multiple attempts to register component ${c}.`),!1;i7.set(c,e);for(const a of q8.values())gg(a,e);return!0}function Lg(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},f3=new tr("app","Firebase",bg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(c,a,s){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new v6("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw f3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=Mg;function or(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const s=Object.assign({name:n7,automaticDataCollectionEnabled:!1},c),t=s.name;if(typeof t!="string"||!t)throw f3.create("bad-app-name",{appName:String(t)});if(a||(a=gV()),!a)throw f3.create("no-options");const r=q8.get(t);if(r){if(a7(a,r.options)&&a7(s,r.config))return r;throw f3.create("duplicate-app",{appName:t})}const n=new TV(t);for(const o of i7.values())n.addComponent(o);const i=new xg(a,s,n);return q8.set(t,i),i}function Sg(e=n7){const c=q8.get(e);if(!c&&e===n7)return or();if(!c)throw f3.create("no-app",{appName:e});return c}function o4(e,c,a){var s;let t=(s=Vg[e])!==null&&s!==void 0?s:e;a&&(t+=`-${a}`);const r=t.match(/\s|\//),n=c.match(/\s|\//);if(r||n){const i=[`Unable to register library "${t}" with version "${c}":`];r&&i.push(`library name "${t}" contains illegal characters (whitespace or "/")`),r&&n&&i.push("and"),n&&i.push(`version name "${c}" contains illegal characters (whitespace or "/")`),B3.warn(i.join(" "));return}U8(new v6(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="firebase-heartbeat-database",wg=1,C6="firebase-heartbeat-store";let b0=null;function lr(){return b0||(b0=GV(Ng,wg,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(C6)}}}).catch(e=>{throw f3.create("idb-open",{originalErrorMessage:e.message})})),b0}async function kg(e){var c;try{return(await lr()).transaction(C6).objectStore(C6).get(fr(e))}catch(a){if(a instanceof k4)B3.warn(a.message);else{const s=f3.create("idb-get",{originalErrorMessage:(c=a)===null||c===void 0?void 0:c.message});B3.warn(s.message)}}}async function Ha(e,c){var a;try{const t=(await lr()).transaction(C6,"readwrite");return await t.objectStore(C6).put(c,fr(e)),t.done}catch(s){if(s instanceof k4)B3.warn(s.message);else{const t=f3.create("idb-set",{originalErrorMessage:(a=s)===null||a===void 0?void 0:a.message});B3.warn(t.message)}}}function fr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=1024,Tg=30*24*60*60*1e3;class Eg{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new Dg(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ma();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(t=>t.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const r=new Date(t.date).valueOf();return Date.now()-r<=Tg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Ma(),{heartbeatsToSend:a,unsentEntries:s}=Pg(this._heartbeatsCache.heartbeats),t=O8(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function Ma(){return new Date().toISOString().substring(0,10)}function Pg(e,c=Ag){const a=[];let s=e.slice();for(const t of e){const r=a.find(n=>n.agent===t.agent);if(r){if(r.dates.push(t.date),Va(a)>c){r.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),Va(a)>c){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class Dg{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vV()?CV().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Ha(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function Va(e){return O8(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(e){U8(new v6("platform-logger",c=>new KV(c),"PRIVATE")),U8(new v6("heartbeat",c=>new Eg(c),"PRIVATE")),o4(r7,da,e),o4(r7,da,"esm2017"),o4("fire-js","")}Rg("");var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,M9=M9||{},K=Fg||self;function $8(){}function V5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function D6(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function Ig(e){return Object.prototype.hasOwnProperty.call(e,x0)&&e[x0]||(e[x0]=++_g)}var x0="closure_uid_"+(1e9*Math.random()>>>0),_g=0;function Bg(e,c,a){return e.call.apply(e.bind,arguments)}function Og(e,c,a){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,s),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function Y1(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y1=Bg:Y1=Og,Y1.apply(null,arguments)}function f8(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var s=a.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function K1(e,c){function a(){}a.prototype=c.prototype,e.X=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.Wb=function(s,t,r){for(var n=Array(arguments.length-2),i=2;i<arguments.length;i++)n[i-2]=arguments[i];return c.prototype[t].apply(s,n)}}function H3(){this.s=this.s,this.o=this.o}var qg=0;H3.prototype.s=!1;H3.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qg!=0)&&Ig(this)};H3.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hr=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function V9(e){const c=e.length;if(0<c){const a=Array(c);for(let s=0;s<c;s++)a[s]=e[s];return a}return[]}function ga(e,c){for(let a=1;a<arguments.length;a++){const s=arguments[a];if(V5(s)){const t=e.length||0,r=s.length||0;e.length=t+r;for(let n=0;n<r;n++)e[t+n]=s[n]}else e.push(s)}}function X1(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}X1.prototype.h=function(){this.defaultPrevented=!0};var Ug=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{K.addEventListener("test",$8,c),K.removeEventListener("test",$8,c)}catch{}return e}();function G8(e){return/^[\s\xa0]*$/.test(e)}var La=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function y0(e,c){return e<c?-1:e>c?1:0}function g5(){var e=K.navigator;return e&&(e=e.userAgent)?e:""}function P2(e){return g5().indexOf(e)!=-1}function g9(e){return g9[" "](e),e}g9[" "]=$8;function $g(e){var c=jg;return Object.prototype.hasOwnProperty.call(c,9)?c[9]:c[9]=e(9)}var Gg=P2("Opera"),H4=P2("Trident")||P2("MSIE"),ur=P2("Edge"),o7=ur||H4,mr=P2("Gecko")&&!(g5().toLowerCase().indexOf("webkit")!=-1&&!P2("Edge"))&&!(P2("Trident")||P2("MSIE"))&&!P2("Edge"),Wg=g5().toLowerCase().indexOf("webkit")!=-1&&!P2("Edge");function vr(){var e=K.document;return e?e.documentMode:void 0}var W8;c:{var S0="",N0=function(){var e=g5();if(mr)return/rv:([^\);]+)(\)|;)/.exec(e);if(ur)return/Edge\/([\d\.]+)/.exec(e);if(H4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Wg)return/WebKit\/(\S+)/.exec(e);if(Gg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(N0&&(S0=N0?N0[1]:""),H4){var w0=vr();if(w0!=null&&w0>parseFloat(S0)){W8=String(w0);break c}}W8=S0}var jg={};function Kg(){return $g(function(){let e=0;const c=La(String(W8)).split("."),a=La("9").split("."),s=Math.max(c.length,a.length);for(let n=0;e==0&&n<s;n++){var t=c[n]||"",r=a[n]||"";do{if(t=/(\d*)(\D*)(.*)/.exec(t)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],t[0].length==0&&r[0].length==0)break;e=y0(t[1].length==0?0:parseInt(t[1],10),r[1].length==0?0:parseInt(r[1],10))||y0(t[2].length==0,r[2].length==0)||y0(t[2],r[2]),t=t[3],r=r[3]}while(e==0)}return 0<=e})}var l7;if(K.document&&H4){var ba=vr();l7=ba||parseInt(W8,10)||void 0}else l7=void 0;var Zg=l7;function z6(e,c){if(X1.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(mr){c:{try{g9(c.nodeName);var t=!0;break c}catch{}t=!1}t||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Qg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&z6.X.h.call(this)}}K1(z6,X1);var Qg={2:"touch",3:"pen",4:"mouse"};z6.prototype.h=function(){z6.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var R6="closure_listenable_"+(1e6*Math.random()|0),Yg=0;function Xg(e,c,a,s,t){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!s,this.ha=t,this.key=++Yg,this.ba=this.ea=!1}function L5(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function L9(e,c,a){for(const s in e)c.call(a,e[s],s,e)}function Cr(e){const c={};for(const a in e)c[a]=e[a];return c}const xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zr(e,c){let a,s;for(let t=1;t<arguments.length;t++){s=arguments[t];for(a in s)e[a]=s[a];for(let r=0;r<xa.length;r++)a=xa[r],Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}}function b5(e){this.src=e,this.g={},this.h=0}b5.prototype.add=function(e,c,a,s,t){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var n=h7(e,c,s,t);return-1<n?(c=e[n],a||(c.ea=!1)):(c=new Xg(c,this.src,r,!!s,t),c.ea=a,e.push(c)),c};function f7(e,c){var a=c.type;if(a in e.g){var s=e.g[a],t=hr(s,c),r;(r=0<=t)&&Array.prototype.splice.call(s,t,1),r&&(L5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function h7(e,c,a,s){for(var t=0;t<e.length;++t){var r=e[t];if(!r.ba&&r.listener==c&&r.capture==!!a&&r.ha==s)return t}return-1}var b9="closure_lm_"+(1e6*Math.random()|0),k0={};function pr(e,c,a,s,t){if(s&&s.once)return Hr(e,c,a,s,t);if(Array.isArray(c)){for(var r=0;r<c.length;r++)pr(e,c[r],a,s,t);return null}return a=S9(a),e&&e[R6]?e.N(c,a,D6(s)?!!s.capture:!!s,t):dr(e,c,a,!1,s,t)}function dr(e,c,a,s,t,r){if(!c)throw Error("Invalid event type");var n=D6(t)?!!t.capture:!!t,i=y9(e);if(i||(e[b9]=i=new b5(e)),a=i.add(c,a,s,n,r),a.proxy)return a;if(s=Jg(),a.proxy=s,s.src=e,s.listener=a,e.addEventListener)Ug||(t=n),t===void 0&&(t=!1),e.addEventListener(c.toString(),s,t);else if(e.attachEvent)e.attachEvent(Vr(c.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Jg(){function e(a){return c.call(e.src,e.listener,a)}const c=cL;return e}function Hr(e,c,a,s,t){if(Array.isArray(c)){for(var r=0;r<c.length;r++)Hr(e,c[r],a,s,t);return null}return a=S9(a),e&&e[R6]?e.O(c,a,D6(s)?!!s.capture:!!s,t):dr(e,c,a,!0,s,t)}function Mr(e,c,a,s,t){if(Array.isArray(c))for(var r=0;r<c.length;r++)Mr(e,c[r],a,s,t);else s=D6(s)?!!s.capture:!!s,a=S9(a),e&&e[R6]?(e=e.i,c=String(c).toString(),c in e.g&&(r=e.g[c],a=h7(r,a,s,t),-1<a&&(L5(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[c],e.h--)))):e&&(e=y9(e))&&(c=e.g[c.toString()],e=-1,c&&(e=h7(c,a,s,t)),(a=-1<e?c[e]:null)&&x9(a))}function x9(e){if(typeof e!="number"&&e&&!e.ba){var c=e.src;if(c&&c[R6])f7(c.i,e);else{var a=e.type,s=e.proxy;c.removeEventListener?c.removeEventListener(a,s,e.capture):c.detachEvent?c.detachEvent(Vr(a),s):c.addListener&&c.removeListener&&c.removeListener(s),(a=y9(c))?(f7(a,e),a.h==0&&(a.src=null,c[b9]=null)):L5(e)}}}function Vr(e){return e in k0?k0[e]:k0[e]="on"+e}function cL(e,c){if(e.ba)e=!0;else{c=new z6(c,this);var a=e.listener,s=e.ha||e.src;e.ea&&x9(e),e=a.call(s,c)}return e}function y9(e){return e=e[b9],e instanceof b5?e:null}var A0="__closure_events_fn_"+(1e9*Math.random()>>>0);function S9(e){return typeof e=="function"?e:(e[A0]||(e[A0]=function(c){return e.handleEvent(c)}),e[A0])}function U1(){H3.call(this),this.i=new b5(this),this.P=this,this.I=null}K1(U1,H3);U1.prototype[R6]=!0;U1.prototype.removeEventListener=function(e,c,a,s){Mr(this,e,c,a,s)};function j1(e,c){var a,s=e.I;if(s)for(a=[];s;s=s.I)a.push(s);if(e=e.P,s=c.type||c,typeof c=="string")c=new X1(c,e);else if(c instanceof X1)c.target=c.target||e;else{var t=c;c=new X1(s,e),zr(c,t)}if(t=!0,a)for(var r=a.length-1;0<=r;r--){var n=c.g=a[r];t=h8(n,s,!0,c)&&t}if(n=c.g=e,t=h8(n,s,!0,c)&&t,t=h8(n,s,!1,c)&&t,a)for(r=0;r<a.length;r++)n=c.g=a[r],t=h8(n,s,!1,c)&&t}U1.prototype.M=function(){if(U1.X.M.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],s=0;s<a.length;s++)L5(a[s]);delete e.g[c],e.h--}}this.I=null};U1.prototype.N=function(e,c,a,s){return this.i.add(String(e),c,!1,a,s)};U1.prototype.O=function(e,c,a,s){return this.i.add(String(e),c,!0,a,s)};function h8(e,c,a,s){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var t=!0,r=0;r<c.length;++r){var n=c[r];if(n&&!n.ba&&n.capture==a){var i=n.listener,o=n.ha||n.src;n.ea&&f7(e.i,n),t=i.call(o,s)!==!1&&t}}return t&&!s.defaultPrevented}var N9=K.JSON.stringify;function eL(){var e=br;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class aL{constructor(){this.h=this.g=null}add(c,a){const s=gr.get();s.set(c,a),this.h?this.h.next=s:this.g=s,this.h=s}}var gr=new class{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new sL,e=>e.reset());class sL{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function tL(e){K.setTimeout(()=>{throw e},0)}function Lr(e,c){u7||rL(),m7||(u7(),m7=!0),br.add(e,c)}var u7;function rL(){var e=K.Promise.resolve(void 0);u7=function(){e.then(nL)}}var m7=!1,br=new aL;function nL(){for(var e;e=eL();){try{e.h.call(e.g)}catch(a){tL(a)}var c=gr;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}m7=!1}function x5(e,c){U1.call(this),this.h=e||1,this.g=c||K,this.j=Y1(this.lb,this),this.l=Date.now()}K1(x5,U1);I=x5.prototype;I.ca=!1;I.R=null;I.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),j1(this,"tick"),this.ca&&(w9(this),this.start()))}};I.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function w9(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}I.M=function(){x5.X.M.call(this),w9(this),delete this.g};function k9(e,c,a){if(typeof e=="function")a&&(e=Y1(e,a));else if(e&&typeof e.handleEvent=="function")e=Y1(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:K.setTimeout(e,c||0)}function xr(e){e.g=k9(()=>{e.g=null,e.i&&(e.i=!1,xr(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class iL extends H3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:xr(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function p6(e){H3.call(this),this.h=e,this.g={}}K1(p6,H3);var ya=[];function yr(e,c,a,s){Array.isArray(a)||(a&&(ya[0]=a.toString()),a=ya);for(var t=0;t<a.length;t++){var r=pr(c,a[t],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Sr(e){L9(e.g,function(c,a){this.g.hasOwnProperty(a)&&x9(c)},e),e.g={}}p6.prototype.M=function(){p6.X.M.call(this),Sr(this)};p6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function y5(){this.g=!0}y5.prototype.Aa=function(){this.g=!1};function oL(e,c,a,s,t,r){e.info(function(){if(e.g)if(r)for(var n="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var h=f.split("_");n=2<=h.length&&h[1]=="type"?n+(f+"="+l+"&"):n+(f+"=redacted&")}}else n=null;else n=r;return"XMLHTTP REQ ("+s+") [attempt "+t+"]: "+c+`
`+a+`
`+n})}function lL(e,c,a,s,t,r,n){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+t+"]: "+c+`
`+a+`
`+r+" "+n})}function J3(e,c,a,s){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+hL(e,a)+(s?" "+s:"")})}function fL(e,c){e.info(function(){return"TIMEOUT: "+c})}y5.prototype.info=function(){};function hL(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var s=a[e];if(!(2>s.length)){var t=s[1];if(Array.isArray(t)&&!(1>t.length)){var r=t[0];if(r!="noop"&&r!="stop"&&r!="close")for(var n=1;n<t.length;n++)t[n]=""}}}}return N9(a)}catch{return c}}var G3={},Sa=null;function S5(){return Sa=Sa||new U1}G3.Pa="serverreachability";function Nr(e){X1.call(this,G3.Pa,e)}K1(Nr,X1);function d6(e){const c=S5();j1(c,new Nr(c))}G3.STAT_EVENT="statevent";function wr(e,c){X1.call(this,G3.STAT_EVENT,e),this.stat=c}K1(wr,X1);function a2(e){const c=S5();j1(c,new wr(c,e))}G3.Qa="timingevent";function kr(e,c){X1.call(this,G3.Qa,e),this.size=c}K1(kr,X1);function F6(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){e()},c)}var N5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ar={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function A9(){}A9.prototype.h=null;function Na(e){return e.h||(e.h=e.i())}function Tr(){}var I6={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function T9(){X1.call(this,"d")}K1(T9,X1);function E9(){X1.call(this,"c")}K1(E9,X1);var v7;function w5(){}K1(w5,A9);w5.prototype.g=function(){return new XMLHttpRequest};w5.prototype.i=function(){return{}};v7=new w5;function _6(e,c,a,s){this.l=e,this.j=c,this.m=a,this.U=s||1,this.S=new p6(this),this.O=uL,e=o7?125:void 0,this.T=new x5(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Er}function Er(){this.i=null,this.g="",this.h=!1}var uL=45e3,C7={},j8={};I=_6.prototype;I.setTimeout=function(e){this.O=e};function z7(e,c,a){e.K=1,e.v=A5($2(c)),e.s=a,e.P=!0,Pr(e,null)}function Pr(e,c){e.F=Date.now(),B6(e),e.A=$2(e.v);var a=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),qr(a.i,"t",s),e.C=0,a=e.l.H,e.h=new Er,e.g=fn(e.l,a?c:null,!e.s),0<e.N&&(e.L=new iL(Y1(e.La,e,e.g),e.N)),yr(e.S,e.g,"readystatechange",e.ib),c=e.H?Cr(e.H):{},e.s?(e.u||(e.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,c)):(e.u="GET",e.g.da(e.A,e.u,null,c)),d6(),oL(e.j,e.u,e.A,e.m,e.U,e.s)}I.ib=function(e){e=e.target;const c=this.L;c&&q2(e)==3?c.l():this.La(e)};I.La=function(e){try{if(e==this.g)c:{const f=q2(this.g);var c=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||o7||this.g&&(this.h.h||this.g.fa()||Ta(this.g)))){this.I||f!=4||c==7||(c==8||0>=h?d6(3):d6(2)),k5(this);var a=this.g.aa();this.Y=a;e:if(Dr(this)){var s=Ta(this.g);e="";var t=s.length,r=q2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){N3(this),J4(this);var n="";break e}this.h.i=new K.TextDecoder}for(c=0;c<t;c++)this.h.h=!0,e+=this.h.i.decode(s[c],{stream:r&&c==t-1});s.splice(0,t),this.h.g+=e,this.C=0,n=this.h.g}else n=this.g.fa();if(this.i=a==200,lL(this.j,this.u,this.A,this.m,this.U,f,a),this.i){if(this.Z&&!this.J){e:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G8(i)){var l=i;break e}}l=null}if(a=l)J3(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,p7(this,a);else{this.i=!1,this.o=3,a2(12),N3(this),J4(this);break c}}this.P?(Rr(this,f,n),o7&&this.i&&f==3&&(yr(this.S,this.T,"tick",this.hb),this.T.start())):(J3(this.j,this.m,n,null),p7(this,n)),f==4&&N3(this),this.i&&!this.I&&(f==4?rn(this.l,this):(this.i=!1,B6(this)))}else a==400&&0<n.indexOf("Unknown SID")?(this.o=3,a2(12)):(this.o=0,a2(13)),N3(this),J4(this)}}}catch{}finally{}};function Dr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Rr(e,c,a){let s=!0,t;for(;!e.I&&e.C<a.length;)if(t=mL(e,a),t==j8){c==4&&(e.o=4,a2(14),s=!1),J3(e.j,e.m,null,"[Incomplete Response]");break}else if(t==C7){e.o=4,a2(15),J3(e.j,e.m,a,"[Invalid Chunk]"),s=!1;break}else J3(e.j,e.m,t,null),p7(e,t);Dr(e)&&t!=j8&&t!=C7&&(e.h.g="",e.C=0),c!=4||a.length!=0||e.h.h||(e.o=1,a2(16),s=!1),e.i=e.i&&s,s?0<a.length&&!e.$&&(e.$=!0,c=e.l,c.g==e&&c.$&&!c.K&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),B9(c),c.K=!0,a2(11))):(J3(e.j,e.m,a,"[Invalid Chunked Response]"),N3(e),J4(e))}I.hb=function(){if(this.g){var e=q2(this.g),c=this.g.fa();this.C<c.length&&(k5(this),Rr(this,e,c),this.i&&e!=4&&B6(this))}};function mL(e,c){var a=e.C,s=c.indexOf(`
`,a);return s==-1?j8:(a=Number(c.substring(a,s)),isNaN(a)?C7:(s+=1,s+a>c.length?j8:(c=c.substr(s,a),e.C=s+a,c)))}I.cancel=function(){this.I=!0,N3(this)};function B6(e){e.V=Date.now()+e.O,Fr(e,e.O)}function Fr(e,c){if(e.B!=null)throw Error("WatchDog timer not null");e.B=F6(Y1(e.gb,e),c)}function k5(e){e.B&&(K.clearTimeout(e.B),e.B=null)}I.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(fL(this.j,this.A),this.K!=2&&(d6(),a2(17)),N3(this),this.o=2,J4(this)):Fr(this,this.V-e)};function J4(e){e.l.G==0||e.I||rn(e.l,e)}function N3(e){k5(e);var c=e.L;c&&typeof c.na=="function"&&c.na(),e.L=null,w9(e.T),Sr(e.S),e.g&&(c=e.g,e.g=null,c.abort(),c.na())}function p7(e,c){try{var a=e.l;if(a.G!=0&&(a.g==e||d7(a.h,e))){if(!e.J&&d7(a.h,e)&&a.G==3){try{var s=a.Fa.g.parse(c)}catch{s=null}if(Array.isArray(s)&&s.length==3){var t=s;if(t[0]==0){c:if(!a.u){if(a.g)if(a.g.F+3e3<e.F)Q8(a),P5(a);else break c;_9(a),a2(18)}}else a.Ba=t[1],0<a.Ba-a.T&&37500>t[2]&&a.L&&a.A==0&&!a.v&&(a.v=F6(Y1(a.cb,a),6e3));if(1>=Gr(a.h)&&a.ja){try{a.ja()}catch{}a.ja=void 0}}else w3(a,11)}else if((e.J||a.g==e)&&Q8(a),!G8(c))for(t=a.Fa.g.parse(c),c=0;c<t.length;c++){let l=t[c];if(a.T=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.I=l[1],a.ka=l[2];const f=l[3];f!=null&&(a.ma=f,a.j.info("VER="+a.ma));const h=l[4];h!=null&&(a.Ca=h,a.j.info("SVER="+a.Ca));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,a.J=s,a.j.info("backChannelRequestTimeoutMs_="+s)),s=a;const C=e.g;if(C){const d=C.g?C.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var r=s.h;r.g||d.indexOf("spdy")==-1&&d.indexOf("quic")==-1&&d.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(P9(r,r.h),r.h=null))}if(s.D){const L=C.g?C.g.getResponseHeader("X-HTTP-Session-Id"):null;L&&(s.za=L,L1(s.F,s.D,L))}}a.G=3,a.l&&a.l.xa(),a.$&&(a.P=Date.now()-e.F,a.j.info("Handshake RTT: "+a.P+"ms")),s=a;var n=e;if(s.sa=ln(s,s.H?s.ka:null,s.V),n.J){Wr(s.h,n);var i=n,o=s.J;o&&i.setTimeout(o),i.B&&(k5(i),B6(i)),s.g=n}else sn(s);0<a.i.length&&D5(a)}else l[0]!="stop"&&l[0]!="close"||w3(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?w3(a,7):I9(a):l[0]!="noop"&&a.l&&a.l.wa(l),a.A=0)}}d6(4)}catch{}}function vL(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(V5(e)){for(var c=[],a=e.length,s=0;s<a;s++)c.push(e[s]);return c}c=[],a=0;for(s in e)c[a++]=e[s];return c}function CL(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(V5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const s in e)c[a++]=s;return c}}}function Ir(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(V5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=CL(e),s=vL(e),t=s.length,r=0;r<t;r++)c.call(void 0,s[r],a&&a[r],e)}var _r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zL(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var s=e[a].indexOf("="),t=null;if(0<=s){var r=e[a].substring(0,s);t=e[a].substring(s+1)}else r=e[a];c(r,t?decodeURIComponent(t.replace(/\+/g," ")):"")}}}function D3(e,c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof D3){this.h=c!==void 0?c:e.h,K8(this,e.j),this.s=e.s,this.g=e.g,Z8(this,e.m),this.l=e.l,c=e.i;var a=new H6;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),wa(this,a),this.o=e.o}else e&&(a=String(e).match(_r))?(this.h=!!c,K8(this,a[1]||"",!0),this.s=U4(a[2]||""),this.g=U4(a[3]||"",!0),Z8(this,a[4]),this.l=U4(a[5]||"",!0),wa(this,a[6]||"",!0),this.o=U4(a[7]||"")):(this.h=!!c,this.i=new H6(null,this.h))}D3.prototype.toString=function(){var e=[],c=this.j;c&&e.push($4(c,ka,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push($4(c,ka,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push($4(a,a.charAt(0)=="/"?HL:dL,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",$4(a,VL)),e.join("")};function $2(e){return new D3(e)}function K8(e,c,a){e.j=a?U4(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function Z8(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function wa(e,c,a){c instanceof H6?(e.i=c,gL(e.i,e.h)):(a||(c=$4(c,ML)),e.i=new H6(c,e.h))}function L1(e,c,a){e.i.set(c,a)}function A5(e){return L1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function U4(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function $4(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,pL),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function pL(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ka=/[#\/\?@]/g,dL=/[#\?:]/g,HL=/[#\?]/g,ML=/[#\?@]/g,VL=/#/g;function H6(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function M3(e){e.g||(e.g=new Map,e.h=0,e.i&&zL(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}I=H6.prototype;I.add=function(e,c){M3(this),this.i=null,e=A4(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function Br(e,c){M3(e),c=A4(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function Or(e,c){return M3(e),c=A4(e,c),e.g.has(c)}I.forEach=function(e,c){M3(this),this.g.forEach(function(a,s){a.forEach(function(t){e.call(c,t,s,this)},this)},this)};I.oa=function(){M3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let s=0;s<c.length;s++){const t=e[s];for(let r=0;r<t.length;r++)a.push(c[s])}return a};I.W=function(e){M3(this);let c=[];if(typeof e=="string")Or(this,e)&&(c=c.concat(this.g.get(A4(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};I.set=function(e,c){return M3(this),this.i=null,e=A4(this,e),Or(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};I.get=function(e,c){return e?(e=this.W(e),0<e.length?String(e[0]):c):c};function qr(e,c,a){Br(e,c),0<a.length&&(e.i=null,e.g.set(A4(e,c),V9(a)),e.h+=a.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var s=c[a];const r=encodeURIComponent(String(s)),n=this.W(s);for(s=0;s<n.length;s++){var t=r;n[s]!==""&&(t+="="+encodeURIComponent(String(n[s]))),e.push(t)}}return this.i=e.join("&")};function A4(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function gL(e,c){c&&!e.j&&(M3(e),e.i=null,e.g.forEach(function(a,s){var t=s.toLowerCase();s!=t&&(Br(this,s),qr(this,t,a))},e)),e.j=c}var LL=class{constructor(e,c){this.h=e,this.g=c}};function Ur(e){this.l=e||bL,K.PerformanceNavigationTiming?(e=K.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bL=10;function $r(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Gr(e){return e.h?1:e.g?e.g.size:0}function d7(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function P9(e,c){e.g?e.g.add(c):e.h=c}function Wr(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}Ur.prototype.cancel=function(){if(this.i=jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function jr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.D);return c}return V9(e.i)}function D9(){}D9.prototype.stringify=function(e){return K.JSON.stringify(e,void 0)};D9.prototype.parse=function(e){return K.JSON.parse(e,void 0)};function xL(){this.g=new D9}function yL(e,c,a){const s=a||"";try{Ir(e,function(t,r){let n=t;D6(t)&&(n=N9(t)),c.push(s+r+"="+encodeURIComponent(n))})}catch(t){throw c.push(s+"type="+encodeURIComponent("_badmap")),t}}function SL(e,c){const a=new y5;if(K.Image){const s=new Image;s.onload=f8(u8,a,s,"TestLoadImage: loaded",!0,c),s.onerror=f8(u8,a,s,"TestLoadImage: error",!1,c),s.onabort=f8(u8,a,s,"TestLoadImage: abort",!1,c),s.ontimeout=f8(u8,a,s,"TestLoadImage: timeout",!1,c),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else c(!1)}function u8(e,c,a,s,t){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,t(s)}catch{}}function O6(e){this.l=e.ac||null,this.j=e.jb||!1}K1(O6,A9);O6.prototype.g=function(){return new T5(this.l,this.j)};O6.prototype.i=function(e){return function(){return e}}({});function T5(e,c){U1.call(this),this.D=e,this.u=c,this.m=void 0,this.readyState=R9,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K1(T5,U1);var R9=0;I=T5.prototype;I.open=function(e,c){if(this.readyState!=R9)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,M6(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.D||K).fetch(new Request(this.B,c)).then(this.Wa.bind(this),this.ga.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,q6(this)),this.readyState=R9};I.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,M6(this)),this.g&&(this.readyState=3,M6(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Kr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}I.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?q6(this):M6(this),this.readyState==3&&Kr(this)}};I.Va=function(e){this.g&&(this.response=this.responseText=e,q6(this))};I.Ua=function(e){this.g&&(this.response=e,q6(this))};I.ga=function(){this.g&&q6(this)};function q6(e){e.readyState=4,e.l=null,e.j=null,e.A=null,M6(e)}I.setRequestHeader=function(e,c){this.v.append(e,c)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function M6(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(T5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var NL=K.JSON.parse;function w1(e){U1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zr,this.K=this.L=!1}K1(w1,U1);var Zr="",wL=/^https?$/i,kL=["POST","PUT"];I=w1.prototype;I.Ka=function(e){this.L=e};I.da=function(e,c,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);c=c?c.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():v7.g(),this.C=this.u?Na(this.u):Na(v7),this.g.onreadystatechange=Y1(this.Ha,this);try{this.F=!0,this.g.open(c,String(e),!0),this.F=!1}catch(r){Aa(this,r);return}if(e=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var t in s)a.set(t,s[t]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())a.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(a.keys()).find(r=>r.toLowerCase()=="content-type"),t=K.FormData&&e instanceof K.FormData,!(0<=hr(kL,c))||s||t||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,n]of a)this.g.setRequestHeader(r,n);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xr(this),0<this.B&&((this.K=AL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y1(this.qa,this)):this.A=k9(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Aa(this,r)}};function AL(e){return H4&&Kg()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.qa=function(){typeof M9<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j1(this,"timeout"),this.abort(8))};function Aa(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,Qr(e),E5(e)}function Qr(e){e.D||(e.D=!0,j1(e,"complete"),j1(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j1(this,"complete"),j1(this,"abort"),E5(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),E5(this,!0)),w1.X.M.call(this)};I.Ha=function(){this.s||(this.F||this.v||this.l?Yr(this):this.fb())};I.fb=function(){Yr(this)};function Yr(e){if(e.h&&typeof M9<"u"&&(!e.C[1]||q2(e)!=4||e.aa()!=2)){if(e.v&&q2(e)==4)k9(e.Ha,0,e);else if(j1(e,"readystatechange"),q2(e)==4){e.h=!1;try{const i=e.aa();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var s;if(s=i===0){var t=String(e.H).match(_r)[1]||null;if(!t&&K.self&&K.self.location){var r=K.self.location.protocol;t=r.substr(0,r.length-1)}s=!wL.test(t?t.toLowerCase():"")}a=s}if(a)j1(e,"complete"),j1(e,"success");else{e.m=6;try{var n=2<q2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.aa()+"]",Qr(e)}}finally{E5(e)}}}}function E5(e,c){if(e.g){Xr(e);const a=e.g,s=e.C[0]?$8:null;e.g=null,e.C=null,c||j1(e,"ready");try{a.onreadystatechange=s}catch{}}}function Xr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(K.clearTimeout(e.A),e.A=null)}function q2(e){return e.g?e.g.readyState:0}I.aa=function(){try{return 2<q2(this)?this.g.status:-1}catch{return-1}};I.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Sa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),NL(c)}};function Ta(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Zr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}I.Ea=function(){return this.m};I.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jr(e){let c="";return L9(e,function(a,s){c+=s,c+=":",c+=a,c+=`\r
`}),c}function F9(e,c,a){c:{for(s in a){var s=!1;break c}s=!0}s||(a=Jr(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):L1(e,c,a))}function O4(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function cn(e){this.Ca=0,this.i=[],this.j=new y5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=O4("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=O4("baseRetryDelayMs",5e3,e),this.bb=O4("retryDelaySeedMs",1e4,e),this.$a=O4("forwardChannelMaxRetries",2,e),this.ta=O4("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ur(e&&e.concurrentRequestLimit),this.Fa=new xL,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}I=cn.prototype;I.ma=8;I.G=1;function I9(e){if(en(e),e.G==3){var c=e.U++,a=$2(e.F);L1(a,"SID",e.I),L1(a,"RID",c),L1(a,"TYPE","terminate"),U6(e,a),c=new _6(e,e.j,c,void 0),c.K=2,c.v=A5($2(a)),a=!1,K.navigator&&K.navigator.sendBeacon&&(a=K.navigator.sendBeacon(c.v.toString(),"")),!a&&K.Image&&(new Image().src=c.v,a=!0),a||(c.g=fn(c.l,null),c.g.da(c.v)),c.F=Date.now(),B6(c)}on(e)}function P5(e){e.g&&(B9(e),e.g.cancel(),e.g=null)}function en(e){P5(e),e.u&&(K.clearTimeout(e.u),e.u=null),Q8(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&K.clearTimeout(e.m),e.m=null)}function D5(e){$r(e.h)||e.m||(e.m=!0,Lr(e.Ja,e),e.C=0)}function TL(e,c){return Gr(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=c.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=F6(Y1(e.Ja,e,c),nn(e,e.C)),e.C++,!0)}I.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const t=new _6(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Cr(r),zr(r,this.S)):r=this.S),this.o!==null||this.N||(t.H=r,r=null),this.O)c:{for(var c=0,a=0;a<this.i.length;a++){e:{var s=this.i[a];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(c+=s,4096<c){c=a;break c}if(c===4096||a===this.i.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=an(this,t,c),a=$2(this.F),L1(a,"RID",e),L1(a,"CVER",22),this.D&&L1(a,"X-HTTP-Session-Id",this.D),U6(this,a),r&&(this.N?c="headers="+encodeURIComponent(String(Jr(r)))+"&"+c:this.o&&F9(a,this.o,r)),P9(this.h,t),this.Ya&&L1(a,"TYPE","init"),this.O?(L1(a,"$req",c),L1(a,"SID","null"),t.Z=!0,z7(t,a,null)):z7(t,a,c),this.G=2}}else this.G==3&&(e?Ea(this,e):this.i.length==0||$r(this.h)||Ea(this))};function Ea(e,c){var a;c?a=c.m:a=e.U++;const s=$2(e.F);L1(s,"SID",e.I),L1(s,"RID",a),L1(s,"AID",e.T),U6(e,s),e.o&&e.s&&F9(s,e.o,e.s),a=new _6(e,e.j,a,e.C+1),e.o===null&&(a.H=e.s),c&&(e.i=c.D.concat(e.i)),c=an(e,a,1e3),a.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),P9(e.h,a),z7(a,s,c)}function U6(e,c){e.ia&&L9(e.ia,function(a,s){L1(c,s,a)}),e.l&&Ir({},function(a,s){L1(c,s,a)})}function an(e,c,a){a=Math.min(e.i.length,a);var s=e.l?Y1(e.l.Ra,e.l,e):null;c:{var t=e.i;let r=-1;for(;;){const n=["count="+a];r==-1?0<a?(r=t[0].h,n.push("ofs="+r)):r=0:n.push("ofs="+r);let i=!0;for(let o=0;o<a;o++){let l=t[o].h;const f=t[o].g;if(l-=r,0>l)r=Math.max(0,t[o].h-100),i=!1;else try{yL(f,n,"req"+l+"_")}catch{s&&s(f)}}if(i){s=n.join("&");break c}}}return e=e.i.splice(0,a),c.D=e,s}function sn(e){e.g||e.u||(e.Z=1,Lr(e.Ia,e),e.A=0)}function _9(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=F6(Y1(e.Ia,e),nn(e,e.A)),e.A++,!0)}I.Ia=function(){if(this.u=null,tn(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=F6(Y1(this.eb,this),e)}};I.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,a2(10),P5(this),tn(this))};function B9(e){e.B!=null&&(K.clearTimeout(e.B),e.B=null)}function tn(e){e.g=new _6(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var c=$2(e.sa);L1(c,"RID","rpc"),L1(c,"SID",e.I),L1(c,"CI",e.L?"0":"1"),L1(c,"AID",e.T),L1(c,"TYPE","xmlhttp"),U6(e,c),e.o&&e.s&&F9(c,e.o,e.s),e.J&&e.g.setTimeout(e.J);var a=e.g;e=e.ka,a.K=1,a.v=A5($2(c)),a.s=null,a.P=!0,Pr(a,e)}I.cb=function(){this.v!=null&&(this.v=null,P5(this),_9(this),a2(19))};function Q8(e){e.v!=null&&(K.clearTimeout(e.v),e.v=null)}function rn(e,c){var a=null;if(e.g==c){Q8(e),B9(e),e.g=null;var s=2}else if(d7(e.h,c))a=c.D,Wr(e.h,c),s=1;else return;if(e.G!=0){if(e.pa=c.Y,c.i)if(s==1){a=c.s?c.s.length:0,c=Date.now()-c.F;var t=e.C;s=S5(),j1(s,new kr(s,a)),D5(e)}else sn(e);else if(t=c.o,t==3||t==0&&0<e.pa||!(s==1&&TL(e,c)||s==2&&_9(e)))switch(a&&0<a.length&&(c=e.h,c.i=c.i.concat(a)),t){case 1:w3(e,5);break;case 4:w3(e,10);break;case 3:w3(e,6);break;default:w3(e,2)}}}function nn(e,c){let a=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(a*=2),a*c}function w3(e,c){if(e.j.info("Error code "+c),c==2){var a=null;e.l&&(a=null);var s=Y1(e.kb,e);a||(a=new D3("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||K8(a,"https"),A5(a)),SL(a.toString(),s)}else a2(2);e.G=0,e.l&&e.l.va(c),on(e),en(e)}I.kb=function(e){e?(this.j.info("Successfully pinged google.com"),a2(2)):(this.j.info("Failed to ping google.com"),a2(1))};function on(e){if(e.G=0,e.la=[],e.l){const c=jr(e.h);(c.length!=0||e.i.length!=0)&&(ga(e.la,c),ga(e.la,e.i),e.h.i.length=0,V9(e.i),e.i.length=0),e.l.ua()}}function ln(e,c,a){var s=a instanceof D3?$2(a):new D3(a,void 0);if(s.g!="")c&&(s.g=c+"."+s.g),Z8(s,s.m);else{var t=K.location;s=t.protocol,c=c?c+"."+t.hostname:t.hostname,t=+t.port;var r=new D3(null,void 0);s&&K8(r,s),c&&(r.g=c),t&&Z8(r,t),a&&(r.l=a),s=r}return a=e.D,c=e.za,a&&c&&L1(s,a,c),L1(s,"VER",e.ma),U6(e,s),s}function fn(e,c,a){if(c&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return c=a&&e.Da&&!e.ra?new w1(new O6({jb:!0})):new w1(e.ra),c.Ka(e.H),c}function hn(){}I=hn.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Ra=function(){};function Y8(){if(H4&&!(10<=Number(Zg)))throw Error("Environmental error: no available transport.")}Y8.prototype.g=function(e,c){return new v2(e,c)};function v2(e,c){U1.call(this),this.g=new cn(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.ya&&(e?e["X-WebChannel-Client-Profile"]=c.ya:e={"X-WebChannel-Client-Profile":c.ya}),this.g.S=e,(e=c&&c.Yb)&&!G8(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G8(c)&&(this.g.D=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new T4(this)}K1(v2,U1);v2.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,c=this.l,a=this.h||void 0;a2(0),e.V=c,e.ia=a||{},e.L=e.Y,e.F=ln(e,null,e.V),D5(e)};v2.prototype.close=function(){I9(this.g)};v2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=N9(e),e=a);c.i.push(new LL(c.ab++,e)),c.G==3&&D5(c)};v2.prototype.M=function(){this.g.l=null,delete this.j,I9(this.g),delete this.g,v2.X.M.call(this)};function un(e){T9.call(this);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}K1(un,T9);function mn(){E9.call(this),this.status=1}K1(mn,E9);function T4(e){this.g=e}K1(T4,hn);T4.prototype.xa=function(){j1(this.g,"a")};T4.prototype.wa=function(e){j1(this.g,new un(e))};T4.prototype.va=function(e){j1(this.g,new mn)};T4.prototype.ua=function(){j1(this.g,"b")};Y8.prototype.createWebChannel=Y8.prototype.g;v2.prototype.send=v2.prototype.u;v2.prototype.open=v2.prototype.m;v2.prototype.close=v2.prototype.close;N5.NO_ERROR=0;N5.TIMEOUT=8;N5.HTTP_ERROR=6;Ar.COMPLETE="complete";Tr.EventType=I6;I6.OPEN="a";I6.CLOSE="b";I6.ERROR="c";I6.MESSAGE="d";U1.prototype.listen=U1.prototype.N;w1.prototype.listenOnce=w1.prototype.O;w1.prototype.getLastError=w1.prototype.Oa;w1.prototype.getLastErrorCode=w1.prototype.Ea;w1.prototype.getStatus=w1.prototype.aa;w1.prototype.getResponseJson=w1.prototype.Sa;w1.prototype.getResponseText=w1.prototype.fa;w1.prototype.send=w1.prototype.da;w1.prototype.setWithCredentials=w1.prototype.Ka;var EL=function(){return new Y8},PL=function(){return S5()},T0=N5,DL=Ar,RL=G3,Pa={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},FL=O6,m8=Tr,IL=w1;const Da="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}Z1.UNAUTHENTICATED=new Z1(null),Z1.GOOGLE_CREDENTIALS=new Z1("google-credentials-uid"),Z1.FIRST_PARTY=new Z1("first-party-uid"),Z1.MOCK_USER=new Z1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E4="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=new rr("@firebase/firestore");function Ra(){return O3.logLevel}function B(e,...c){if(O3.logLevel<=f1.DEBUG){const a=c.map(O9);O3.debug(`Firestore (${E4}): ${e}`,...a)}}function G2(e,...c){if(O3.logLevel<=f1.ERROR){const a=c.map(O9);O3.error(`Firestore (${E4}): ${e}`,...a)}}function H7(e,...c){if(O3.logLevel<=f1.WARN){const a=c.map(O9);O3.warn(`Firestore (${E4}): ${e}`,...a)}}function O9(e){if(typeof e=="string")return e;try{return c=e,JSON.stringify(c)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e="Unexpected state"){const c=`FIRESTORE (${E4}) INTERNAL ASSERTION FAILED: `+e;throw G2(c),new Error(c)}function D1(e,c){e||J()}function o1(e,c){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends k4{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class _L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(Z1.UNAUTHENTICATED))}shutdown(){}}class BL{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class OL{constructor(c){this.t=c,this.currentUser=Z1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let s=this.i;const t=o=>this.i!==s?(s=this.i,a(o)):Promise.resolve();let r=new R3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new R3,c.enqueueRetryable(()=>t(this.currentUser))};const n=()=>{const o=r;c.enqueueRetryable(async()=>{await o.promise,await t(this.currentUser)})},i=o=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new R3)}},0),n()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(s=>this.i!==c?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D1(typeof s.accessToken=="string"),new vn(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return D1(c===null||typeof c=="string"),new Z1(c)}}class qL{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t,this.type="FirstParty",this.user=Z1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(D1(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const c=this.I();return c&&this.p.set("Authorization",c),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class UL{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t}getToken(){return Promise.resolve(new qL(this.h,this.l,this.m,this.g))}start(c,a){c.enqueueRetryable(()=>a(Z1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $L{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GL{constructor(c){this.T=c,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(c,a){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const n=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?a(r.token):Promise.resolve()};this.o=r=>{c.enqueueRetryable(()=>s(r))};const t=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>t(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?t(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(D1(typeof a.token=="string"),this.A=a.token,new $L(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let s=0;s<e;s++)a[s]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{static R(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let s="";for(;s.length<20;){const t=WL(40);for(let r=0;r<t.length;++r)s.length<20&&t[r]<a&&(s+=c.charAt(t[r]%c.length))}return s}}function u1(e,c){return e<c?-1:e>c?1:0}function M4(e,c,a){return e.length===c.length&&e.every((s,t)=>a(s,c[t]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return f2.fromMillis(Date.now())}static fromDate(c){return f2.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),s=Math.floor(1e6*(c-1e3*a));return new f2(a,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?u1(this.nanoseconds,c.nanoseconds):u1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new e1(c)}static min(){return new e1(new f2(0,0))}static max(){return new e1(new f2(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(c,a,s){a===void 0?a=0:a>c.length&&J(),s===void 0?s=c.length-a:s>c.length-a&&J(),this.segments=c,this.offset=a,this.len=s}get length(){return this.len}isEqual(c){return V6.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof V6?c.forEach(s=>{a.push(s)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,s=this.limit();a<s;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const s=Math.min(c.length,a.length);for(let t=0;t<s;t++){const r=c.get(t),n=a.get(t);if(r<n)return-1;if(r>n)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class S1 extends V6{construct(c,a,s){return new S1(c,a,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){const a=[];for(const s of c){if(s.indexOf("//")>=0)throw new j(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);a.push(...s.split("/").filter(t=>t.length>0))}return new S1(a)}static emptyPath(){return new S1([])}}const KL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class o2 extends V6{construct(c,a,s){return new o2(c,a,s)}static isValidIdentifier(c){return KL.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),o2.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new o2(["__name__"])}static fromServerFormat(c){const a=[];let s="",t=0;const r=()=>{if(s.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(s),s=""};let n=!1;for(;t<c.length;){const i=c[t];if(i==="\\"){if(t+1===c.length)throw new j(T.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const o=c[t+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new j(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);s+=o,t+=2}else i==="`"?(n=!n,t++):i!=="."||n?(s+=i,t++):(r(),t++)}if(r(),n)throw new j(T.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new o2(a)}static emptyPath(){return new o2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(c){this.path=c}static fromPath(c){return new G(S1.fromString(c))}static fromName(c){return new G(S1.fromString(c).popFirst(5))}static empty(){return new G(S1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&S1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return S1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new G(new S1(c.slice()))}}function ZL(e,c){const a=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,t=e1.fromTimestamp(s===1e9?new f2(a+1,0):new f2(a,s));return new m3(t,G.empty(),c)}function QL(e){return new m3(e.readTime,e.key,-1)}class m3{constructor(c,a,s){this.readTime=c,this.documentKey=a,this.largestBatchId=s}static min(){return new m3(e1.min(),G.empty(),-1)}static max(){return new m3(e1.max(),G.empty(),-1)}}function YL(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=G.comparator(e.documentKey,c.documentKey),a!==0?a:u1(e.largestBatchId,c.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q9(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==XL)throw e;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new x((s,t)=>{this.nextCallback=r=>{this.wrapSuccess(c,r).next(s,t)},this.catchCallback=r=>{this.wrapFailure(a,r).next(s,t)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof x?a:x.resolve(a)}catch(a){return x.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):x.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):x.reject(a)}static resolve(c){return new x((a,s)=>{a(c)})}static reject(c){return new x((a,s)=>{s(c)})}static waitFor(c){return new x((a,s)=>{let t=0,r=0,n=!1;c.forEach(i=>{++t,i.next(()=>{++r,n&&r===t&&a()},o=>s(o))}),n=!0,r===t&&a()})}static or(c){let a=x.resolve(!1);for(const s of c)a=a.next(t=>t?x.resolve(t):s());return a}static forEach(c,a){const s=[];return c.forEach((t,r)=>{s.push(a.call(this,t,r))}),this.waitFor(s)}static mapArray(c,a){return new x((s,t)=>{const r=c.length,n=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;a(c[l]).next(f=>{n[l]=f,++i,i===r&&s(n)},f=>t(f))}})}static doWhile(c,a){return new x((s,t)=>{const r=()=>{c()===!0?a().next(()=>{r()},t):s()};r()})}}function $6(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>a.writeSequenceNumber(s))}ut(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.ct&&this.ct(c),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function R5(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function cb(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */U9.at=-1;class $1{constructor(c,a){this.comparator=c,this.root=a||G1.EMPTY}insert(c,a){return new $1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,G1.BLACK,null,null))}remove(c){return new $1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,G1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const s=this.comparator(c,a.key);if(s===0)return a.value;s<0?a=a.left:s>0&&(a=a.right)}return null}indexOf(c){let a=0,s=this.root;for(;!s.isEmpty();){const t=this.comparator(c,s.key);if(t===0)return a+s.left.size;t<0?s=s.left:(a+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,s)=>(c(a,s),!1))}toString(){const c=[];return this.inorderTraversal((a,s)=>(c.push(`${a}:${s}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new v8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new v8(this.root,c,this.comparator,!1)}getReverseIterator(){return new v8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new v8(this.root,c,this.comparator,!0)}}class v8{constructor(c,a,s,t){this.isReverse=t,this.nodeStack=[];let r=1;for(;!c.isEmpty();)if(r=a?s(c.key,a):1,a&&t&&(r*=-1),r<0)c=this.isReverse?c.left:c.right;else{if(r===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class G1{constructor(c,a,s,t,r){this.key=c,this.value=a,this.color=s!=null?s:G1.RED,this.left=t!=null?t:G1.EMPTY,this.right=r!=null?r:G1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,s,t,r){return new G1(c!=null?c:this.key,a!=null?a:this.value,s!=null?s:this.color,t!=null?t:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,s){let t=this;const r=s(c,t.key);return t=r<0?t.copy(null,null,null,t.left.insert(c,a,s),null):r===0?t.copy(null,a,null,null,null):t.copy(null,null,null,null,t.right.insert(c,a,s)),t.fixUp()}removeMin(){if(this.left.isEmpty())return G1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let s,t=this;if(a(c,t.key)<0)t.left.isEmpty()||t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.remove(c,a),null);else{if(t.left.isRed()&&(t=t.rotateRight()),t.right.isEmpty()||t.right.isRed()||t.right.left.isRed()||(t=t.moveRedRight()),a(c,t.key)===0){if(t.right.isEmpty())return G1.EMPTY;s=t.right.min(),t=t.copy(s.key,s.value,null,null,t.right.removeMin())}t=t.copy(null,null,null,null,t.right.remove(c,a))}return t.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,G1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,G1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const c=this.left.check();if(c!==this.right.check())throw J();return c+(this.isRed()?0:1)}}G1.EMPTY=null,G1.RED=!0,G1.BLACK=!1;G1.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,c,a,s,t){return this}insert(e,c,a){return new G1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(c){this.comparator=c,this.data=new $1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,s)=>(c(a),!1))}forEachInRange(c,a){const s=this.data.getIteratorFrom(c[0]);for(;s.hasNext();){const t=s.getNext();if(this.comparator(t.key,c[1])>=0)return;a(t.key)}}forEachWhile(c,a){let s;for(s=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();s.hasNext();)if(!c(s.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new Ia(this.data.getIterator())}getIteratorFrom(c){return new Ia(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(s=>{a=a.add(s)}),a}isEqual(c){if(!(c instanceof F1)||this.size!==c.size)return!1;const a=this.data.getIterator(),s=c.data.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(this.comparator(t,r)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new F1(this.comparator);return a.data=c,a}}class Ia{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(c){this.fields=c,c.sort(o2.comparator)}static empty(){return new F3([])}unionWith(c){let a=new F1(o2.comparator);for(const s of this.fields)a=a.add(s);for(const s of c)a=a.add(s);return new F3(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return M4(this.fields,c.fields,(a,s)=>a.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(c){this.binaryString=c}static fromBase64String(c){const a=atob(c);return new J1(a)}static fromUint8Array(c){const a=function(s){let t="";for(let r=0;r<s.length;++r)t+=String.fromCharCode(s[r]);return t}(c);return new J1(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return c=this.binaryString,btoa(c);var c}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let s=0;s<c.length;s++)a[s]=c.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return u1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}J1.EMPTY_BYTE_STRING=new J1("");const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function v3(e){if(D1(!!e),typeof e=="string"){let c=0;const a=eb.exec(e);if(D1(!!a),a[1]){let t=a[1];t=(t+"000000000").substr(0,9),c=Number(t)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:c}}return{seconds:P1(e.seconds),nanos:P1(e.nanos)}}function P1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function V4(e){return typeof e=="string"?J1.fromBase64String(e):J1.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(e){var c,a;return((a=(((c=e==null?void 0:e.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function zn(e){const c=e.mapValue.fields.__previous_value__;return Cn(c)?zn(c):c}function g6(e){const c=v3(e.mapValue.fields.__local_write_time__.timestampValue);return new f2(c.seconds,c.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(c,a,s,t,r,n,i,o){this.databaseId=c,this.appId=a,this.persistenceKey=s,this.host=t,this.ssl=r,this.forceLongPolling=n,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class L6{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new L6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof L6&&c.projectId===this.projectId&&c.database===this.database}}function F5(e){return e==null}function M7(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function q3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cn(e)?4:sb(e)?9007199254740991:10:J()}function _2(e,c){if(e===c)return!0;const a=q3(e);if(a!==q3(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return g6(e).isEqual(g6(c));case 3:return function(s,t){if(typeof s.timestampValue=="string"&&typeof t.timestampValue=="string"&&s.timestampValue.length===t.timestampValue.length)return s.timestampValue===t.timestampValue;const r=v3(s.timestampValue),n=v3(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(s,t){return V4(s.bytesValue).isEqual(V4(t.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(s,t){return P1(s.geoPointValue.latitude)===P1(t.geoPointValue.latitude)&&P1(s.geoPointValue.longitude)===P1(t.geoPointValue.longitude)}(e,c);case 2:return function(s,t){if("integerValue"in s&&"integerValue"in t)return P1(s.integerValue)===P1(t.integerValue);if("doubleValue"in s&&"doubleValue"in t){const r=P1(s.doubleValue),n=P1(t.doubleValue);return r===n?M7(r)===M7(n):isNaN(r)&&isNaN(n)}return!1}(e,c);case 9:return M4(e.arrayValue.values||[],c.arrayValue.values||[],_2);case 10:return function(s,t){const r=s.mapValue.fields||{},n=t.mapValue.fields||{};if(Fa(r)!==Fa(n))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(n[i]===void 0||!_2(r[i],n[i])))return!1;return!0}(e,c);default:return J()}}function b6(e,c){return(e.values||[]).find(a=>_2(a,c))!==void 0}function g4(e,c){if(e===c)return 0;const a=q3(e),s=q3(c);if(a!==s)return u1(a,s);switch(a){case 0:case 9007199254740991:return 0;case 1:return u1(e.booleanValue,c.booleanValue);case 2:return function(t,r){const n=P1(t.integerValue||t.doubleValue),i=P1(r.integerValue||r.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,c);case 3:return _a(e.timestampValue,c.timestampValue);case 4:return _a(g6(e),g6(c));case 5:return u1(e.stringValue,c.stringValue);case 6:return function(t,r){const n=V4(t),i=V4(r);return n.compareTo(i)}(e.bytesValue,c.bytesValue);case 7:return function(t,r){const n=t.split("/"),i=r.split("/");for(let o=0;o<n.length&&o<i.length;o++){const l=u1(n[o],i[o]);if(l!==0)return l}return u1(n.length,i.length)}(e.referenceValue,c.referenceValue);case 8:return function(t,r){const n=u1(P1(t.latitude),P1(r.latitude));return n!==0?n:u1(P1(t.longitude),P1(r.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(t,r){const n=t.values||[],i=r.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=g4(n[o],i[o]);if(l)return l}return u1(n.length,i.length)}(e.arrayValue,c.arrayValue);case 10:return function(t,r){if(t===C8.mapValue&&r===C8.mapValue)return 0;if(t===C8.mapValue)return 1;if(r===C8.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let f=0;f<i.length&&f<l.length;++f){const h=u1(i[f],l[f]);if(h!==0)return h;const m=g4(n[i[f]],o[l[f]]);if(m!==0)return m}return u1(i.length,l.length)}(e.mapValue,c.mapValue);default:throw J()}}function _a(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return u1(e,c);const a=v3(e),s=v3(c),t=u1(a.seconds,s.seconds);return t!==0?t:u1(a.nanos,s.nanos)}function l4(e){return V7(e)}function V7(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const t=v3(s);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?V4(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,G.fromName(a).toString()):"geoPointValue"in e?`geo(${(c=e.geoPointValue).latitude},${c.longitude})`:"arrayValue"in e?function(s){let t="[",r=!0;for(const n of s.values||[])r?r=!1:t+=",",t+=V7(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(s){const t=Object.keys(s.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${V7(s.fields[i])}`;return r+"}"}(e.mapValue):J();var c,a}function g7(e){return!!e&&"integerValue"in e}function $9(e){return!!e&&"arrayValue"in e}function Ba(e){return!!e&&"nullValue"in e}function Oa(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function E0(e){return!!e&&"mapValue"in e}function c6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return R5(e.mapValue.fields,(a,s)=>c.mapValue.fields[a]=c6(s)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=c6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function sb(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(c){this.value=c}static empty(){return new D2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let s=0;s<c.length-1;++s)if(a=(a.mapValue.fields||{})[c.get(s)],!E0(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=c6(a)}setAll(c){let a=o2.emptyPath(),s={},t=[];c.forEach((n,i)=>{if(!a.isImmediateParentOf(i)){const o=this.getFieldsMap(a);this.applyChanges(o,s,t),s={},t=[],a=i.popLast()}n?s[i.lastSegment()]=c6(n):t.push(i.lastSegment())});const r=this.getFieldsMap(a);this.applyChanges(r,s,t)}delete(c){const a=this.field(c.popLast());E0(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return _2(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let s=0;s<c.length;++s){let t=a.mapValue.fields[c.get(s)];E0(t)&&t.mapValue.fields||(t={mapValue:{fields:{}}},a.mapValue.fields[c.get(s)]=t),a=t}return a.mapValue.fields}applyChanges(c,a,s){R5(a,(t,r)=>c[t]=r);for(const t of s)delete c[t]}clone(){return new D2(c6(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(c,a,s,t,r,n){this.key=c,this.documentType=a,this.version=s,this.readTime=t,this.data=r,this.documentState=n}static newInvalidDocument(c){return new W1(c,0,e1.min(),e1.min(),D2.empty(),0)}static newFoundDocument(c,a,s){return new W1(c,1,a,e1.min(),s,0)}static newNoDocument(c,a){return new W1(c,2,a,e1.min(),D2.empty(),0)}static newUnknownDocument(c,a){return new W1(c,3,a,e1.min(),D2.empty(),2)}convertToFoundDocument(c,a){return this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=D2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=D2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=e1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof W1&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new W1(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(c,a=null,s=[],t=[],r=null,n=null,i=null){this.path=c,this.collectionGroup=a,this.orderBy=s,this.filters=t,this.limit=r,this.startAt=n,this.endAt=i,this.ht=null}}function qa(e,c=null,a=[],s=[],t=null,r=null,n=null){return new tb(e,c,a,s,t,r,n)}function G9(e){const c=o1(e);if(c.ht===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(s=>{return(t=s).field.canonicalString()+t.op.toString()+l4(t.value);var t}).join(","),a+="|ob:",a+=c.orderBy.map(s=>function(t){return t.field.canonicalString()+t.dir}(s)).join(","),F5(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(s=>l4(s)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(s=>l4(s)).join(",")),c.ht=a}return c.ht}function rb(e){let c=e.path.canonicalString();return e.collectionGroup!==null&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map(a=>{return`${(s=a).field.canonicalString()} ${s.op} ${l4(s.value)}`;var s}).join(", ")}]`),F5(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map(a=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(a)).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>l4(a)).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>l4(a)).join(",")),`Target(${c})`}function W9(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let t=0;t<e.orderBy.length;t++)if(!mb(e.orderBy[t],c.orderBy[t]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let t=0;t<e.filters.length;t++)if(a=e.filters[t],s=c.filters[t],a.op!==s.op||!a.field.isEqual(s.field)||!_2(a.value,s.value))return!1;var a,s;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!$a(e.startAt,c.startAt)&&$a(e.endAt,c.endAt)}function L7(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class l2 extends class{}{constructor(c,a,s){super(),this.field=c,this.op=a,this.value=s}static create(c,a,s){return c.isKeyField()?a==="in"||a==="not-in"?this.lt(c,a,s):new nb(c,a,s):a==="array-contains"?new lb(c,s):a==="in"?new fb(c,s):a==="not-in"?new hb(c,s):a==="array-contains-any"?new ub(c,s):new l2(c,a,s)}static lt(c,a,s){return a==="in"?new ib(c,s):new ob(c,s)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.ft(g4(a,this.value)):a!==null&&q3(this.value)===q3(a)&&this.ft(g4(a,this.value))}ft(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return J()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nb extends l2{constructor(c,a,s){super(c,a,s),this.key=G.fromName(s.referenceValue)}matches(c){const a=G.comparator(c.key,this.key);return this.ft(a)}}class ib extends l2{constructor(c,a){super(c,"in",a),this.keys=pn("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class ob extends l2{constructor(c,a){super(c,"not-in",a),this.keys=pn("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function pn(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(s=>G.fromName(s.referenceValue))}class lb extends l2{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return $9(a)&&b6(a.arrayValue,this.value)}}class fb extends l2{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&b6(this.value.arrayValue,a)}}class hb extends l2{constructor(c,a){super(c,"not-in",a)}matches(c){if(b6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!b6(this.value.arrayValue,a)}}class ub extends l2{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!$9(a)||!a.arrayValue.values)&&a.arrayValue.values.some(s=>b6(this.value.arrayValue,s))}}class X8{constructor(c,a){this.position=c,this.inclusive=a}}class e6{constructor(c,a="asc"){this.field=c,this.dir=a}}function mb(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}function Ua(e,c,a){let s=0;for(let t=0;t<e.position.length;t++){const r=c[t],n=e.position[t];if(r.field.isKeyField()?s=G.comparator(G.fromName(n.referenceValue),a.key):s=g4(n,a.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function $a(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!_2(e.position[a],c.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(c,a=null,s=[],t=[],r=null,n="F",i=null,o=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=s,this.filters=t,this.limit=r,this.limitType=n,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function vb(e,c,a,s,t,r,n,i){return new I5(e,c,a,s,t,r,n,i)}function dn(e){return new I5(e)}function Ga(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Cb(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zb(e){for(const c of e.filters)if(c.dt())return c.field;return null}function pb(e){return e.collectionGroup!==null}function x6(e){const c=o1(e);if(c._t===null){c._t=[];const a=zb(c),s=Cb(c);if(a!==null&&s===null)a.isKeyField()||c._t.push(new e6(a)),c._t.push(new e6(o2.keyField(),"asc"));else{let t=!1;for(const r of c.explicitOrderBy)c._t.push(r),r.field.isKeyField()&&(t=!0);if(!t){const r=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new e6(o2.keyField(),r))}}}return c._t}function W2(e){const c=o1(e);if(!c.wt)if(c.limitType==="F")c.wt=qa(c.path,c.collectionGroup,x6(c),c.filters,c.limit,c.startAt,c.endAt);else{const a=[];for(const r of x6(c)){const n=r.dir==="desc"?"asc":"desc";a.push(new e6(r.field,n))}const s=c.endAt?new X8(c.endAt.position,c.endAt.inclusive):null,t=c.startAt?new X8(c.startAt.position,c.startAt.inclusive):null;c.wt=qa(c.path,c.collectionGroup,a,c.filters,c.limit,s,t)}return c.wt}function b7(e,c,a){return new I5(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function _5(e,c){return W9(W2(e),W2(c))&&e.limitType===c.limitType}function Hn(e){return`${G9(W2(e))}|lt:${e.limitType}`}function x7(e){return`Query(target=${rb(W2(e))}; limitType=${e.limitType})`}function j9(e,c){return c.isFoundDocument()&&function(a,s){const t=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(t):G.isDocumentKey(a.path)?a.path.isEqual(t):a.path.isImmediateParentOf(t)}(e,c)&&function(a,s){for(const t of a.explicitOrderBy)if(!t.field.isKeyField()&&s.data.field(t.field)===null)return!1;return!0}(e,c)&&function(a,s){for(const t of a.filters)if(!t.matches(s))return!1;return!0}(e,c)&&function(a,s){return!(a.startAt&&!function(t,r,n){const i=Ua(t,r,n);return t.inclusive?i<=0:i<0}(a.startAt,x6(a),s)||a.endAt&&!function(t,r,n){const i=Ua(t,r,n);return t.inclusive?i>=0:i>0}(a.endAt,x6(a),s))}(e,c)}function db(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mn(e){return(c,a)=>{let s=!1;for(const t of x6(e)){const r=Hb(t,c,a);if(r!==0)return r;s=s||t.field.isKeyField()}return 0}}function Hb(e,c,a){const s=e.field.isKeyField()?G.comparator(c.key,a.key):function(t,r,n){const i=r.data.field(t),o=n.data.field(t);return i!==null&&o!==null?g4(i,o):J()}(e.field,c,a);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(e,c){if(e.gt){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:M7(c)?"-0":c}}function Vb(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(){this._=void 0}}function gb(e,c,a){return e instanceof y7?function(s,t){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(a,c):e instanceof J8?Vn(e,c):e instanceof c5?gn(e,c):function(s,t){const r=bb(s,t),n=Wa(r)+Wa(s.yt);return g7(r)&&g7(s.yt)?Vb(n):Mb(s.It,n)}(e,c)}function Lb(e,c,a){return e instanceof J8?Vn(e,c):e instanceof c5?gn(e,c):a}function bb(e,c){return e instanceof S7?g7(a=c)||function(s){return!!s&&"doubleValue"in s}(a)?c:{integerValue:0}:null;var a}class y7 extends B5{}class J8 extends B5{constructor(c){super(),this.elements=c}}function Vn(e,c){const a=Ln(c);for(const s of e.elements)a.some(t=>_2(t,s))||a.push(s);return{arrayValue:{values:a}}}class c5 extends B5{constructor(c){super(),this.elements=c}}function gn(e,c){let a=Ln(c);for(const s of e.elements)a=a.filter(t=>!_2(t,s));return{arrayValue:{values:a}}}class S7 extends B5{constructor(c,a){super(),this.It=c,this.yt=a}}function Wa(e){return P1(e.integerValue||e.doubleValue)}function Ln(e){return $9(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function xb(e,c){return e.field.isEqual(c.field)&&function(a,s){return a instanceof J8&&s instanceof J8||a instanceof c5&&s instanceof c5?M4(a.elements,s.elements,_2):a instanceof S7&&s instanceof S7?_2(a.yt,s.yt):a instanceof y7&&s instanceof y7}(e.transform,c.transform)}class I3{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new I3}static exists(c){return new I3(void 0,c)}static updateTime(c){return new I3(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function k8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class K9{}function bn(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new Sb(e.key,I3.none()):new Z9(e.key,e.data,I3.none());{const a=e.data,s=D2.empty();let t=new F1(o2.comparator);for(let r of c.fields)if(!t.has(r)){let n=a.field(r);n===null&&r.length>1&&(r=r.popLast(),n=a.field(r)),n===null?s.delete(r):s.set(r,n),t=t.add(r)}return new O5(e.key,s,new F3(t.toArray()),I3.none())}}function yb(e,c,a){e instanceof Z9?function(s,t,r){const n=s.value.clone(),i=Ka(s.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,c,a):e instanceof O5?function(s,t,r){if(!k8(s.precondition,t))return void t.convertToUnknownDocument(r.version);const n=Ka(s.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(xn(s)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,c,a):function(s,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,c,a)}function a6(e,c,a,s){return e instanceof Z9?function(t,r,n,i){if(!k8(t.precondition,r))return n;const o=t.value.clone(),l=Za(t.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(e,c,a,s):e instanceof O5?function(t,r,n,i){if(!k8(t.precondition,r))return n;const o=Za(t.fieldTransforms,i,r),l=r.data;return l.setAll(xn(t)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),n===null?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(f=>f.field))}(e,c,a,s):function(t,r,n){return k8(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):n}(e,c,a)}function ja(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&M4(a,s,(t,r)=>xb(t,r))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class Z9 extends K9{constructor(c,a,s,t=[]){super(),this.key=c,this.value=a,this.precondition=s,this.fieldTransforms=t,this.type=0}getFieldMask(){return null}}class O5 extends K9{constructor(c,a,s,t,r=[]){super(),this.key=c,this.data=a,this.fieldMask=s,this.precondition=t,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function xn(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const s=e.data.field(a);c.set(a,s)}}),c}function Ka(e,c,a){const s=new Map;D1(e.length===a.length);for(let t=0;t<a.length;t++){const r=e[t],n=r.transform,i=c.data.field(r.field);s.set(r.field,Lb(n,i,a[t]))}return s}function Za(e,c,a){const s=new Map;for(const t of e){const r=t.transform,n=a.data.field(t.field);s.set(t.field,gb(r,n,c))}return s}class Sb extends K9{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(c){this.count=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E1,t1;function yn(e){if(e===void 0)return G2("GRPC error has no .code"),T.UNKNOWN;switch(e){case E1.OK:return T.OK;case E1.CANCELLED:return T.CANCELLED;case E1.UNKNOWN:return T.UNKNOWN;case E1.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case E1.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case E1.INTERNAL:return T.INTERNAL;case E1.UNAVAILABLE:return T.UNAVAILABLE;case E1.UNAUTHENTICATED:return T.UNAUTHENTICATED;case E1.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case E1.NOT_FOUND:return T.NOT_FOUND;case E1.ALREADY_EXISTS:return T.ALREADY_EXISTS;case E1.PERMISSION_DENIED:return T.PERMISSION_DENIED;case E1.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case E1.ABORTED:return T.ABORTED;case E1.OUT_OF_RANGE:return T.OUT_OF_RANGE;case E1.UNIMPLEMENTED:return T.UNIMPLEMENTED;case E1.DATA_LOSS:return T.DATA_LOSS;default:return J()}}(t1=E1||(E1={}))[t1.OK=0]="OK",t1[t1.CANCELLED=1]="CANCELLED",t1[t1.UNKNOWN=2]="UNKNOWN",t1[t1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",t1[t1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",t1[t1.NOT_FOUND=5]="NOT_FOUND",t1[t1.ALREADY_EXISTS=6]="ALREADY_EXISTS",t1[t1.PERMISSION_DENIED=7]="PERMISSION_DENIED",t1[t1.UNAUTHENTICATED=16]="UNAUTHENTICATED",t1[t1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",t1[t1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",t1[t1.ABORTED=10]="ABORTED",t1[t1.OUT_OF_RANGE=11]="OUT_OF_RANGE",t1[t1.UNIMPLEMENTED=12]="UNIMPLEMENTED",t1[t1.INTERNAL=13]="INTERNAL",t1[t1.UNAVAILABLE=14]="UNAVAILABLE",t1[t1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s!==void 0){for(const[t,r]of s)if(this.equalsFn(t,c))return r}}has(c){return this.get(c)!==void 0}set(c,a){const s=this.mapKeyFn(c),t=this.inner[s];if(t===void 0)return this.inner[s]=[[c,a]],void this.innerSize++;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return void(t[r]=[c,a]);t.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s===void 0)return!1;for(let t=0;t<s.length;t++)if(this.equalsFn(s[t][0],c))return s.length===1?delete this.inner[a]:s.splice(t,1),this.innerSize--,!0;return!1}forEach(c){R5(this.inner,(a,s)=>{for(const[t,r]of s)c(t,r)})}isEmpty(){return cb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new $1(G.comparator);function C3(){return wb}const Sn=new $1(G.comparator);function G4(...e){let c=Sn;for(const a of e)c=c.insert(a.key,a);return c}function kb(e){let c=Sn;return e.forEach((a,s)=>c=c.insert(a,s.overlayedDocument)),c}function k3(){return s6()}function Nn(){return s6()}function s6(){return new P4(e=>e.toString(),(e,c)=>e.isEqual(c))}new $1(G.comparator);const Ab=new F1(G.comparator);function n1(...e){let c=Ab;for(const a of e)c=c.add(a);return c}const Tb=new F1(u1);function wn(){return Tb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(c,a,s,t,r){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=s,this.documentUpdates=t,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(c,a,s){const t=new Map;return t.set(c,G6.createSynthesizedTargetChangeForCurrentChange(c,a,s)),new q5(e1.min(),t,wn(),C3(),n1())}}class G6{constructor(c,a,s,t,r){this.resumeToken=c,this.current=a,this.addedDocuments=s,this.modifiedDocuments=t,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(c,a,s){return new G6(s,a,n1(),n1(),n1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A8{constructor(c,a,s,t){this.Tt=c,this.removedTargetIds=a,this.key=s,this.Et=t}}class kn{constructor(c,a){this.targetId=c,this.At=a}}class An{constructor(c,a,s=J1.EMPTY_BYTE_STRING,t=null){this.state=c,this.targetIds=a,this.resumeToken=s,this.cause=t}}class Qa{constructor(){this.Rt=0,this.bt=Xa(),this.Pt=J1.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(c){c.approximateByteSize()>0&&(this.Vt=!0,this.Pt=c)}xt(){let c=n1(),a=n1(),s=n1();return this.bt.forEach((t,r)=>{switch(r){case 0:c=c.add(t);break;case 2:a=a.add(t);break;case 1:s=s.add(t);break;default:J()}}),new G6(this.Pt,this.vt,c,a,s)}Nt(){this.Vt=!1,this.bt=Xa()}kt(c,a){this.Vt=!0,this.bt=this.bt.insert(c,a)}Ot(c){this.Vt=!0,this.bt=this.bt.remove(c)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Eb{constructor(c){this.Bt=c,this.Lt=new Map,this.Ut=C3(),this.qt=Ya(),this.Kt=new F1(u1)}Gt(c){for(const a of c.Tt)c.Et&&c.Et.isFoundDocument()?this.Qt(a,c.Et):this.jt(a,c.key,c.Et);for(const a of c.removedTargetIds)this.jt(a,c.key,c.Et)}Wt(c){this.forEachTarget(c,a=>{const s=this.zt(a);switch(c.state){case 0:this.Ht(a)&&s.Ct(c.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(c.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(a);break;case 3:this.Ht(a)&&(s.$t(),s.Ct(c.resumeToken));break;case 4:this.Ht(a)&&(this.Jt(a),s.Ct(c.resumeToken));break;default:J()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.Lt.forEach((s,t)=>{this.Ht(t)&&a(t)})}Yt(c){const a=c.targetId,s=c.At.count,t=this.Xt(a);if(t){const r=t.target;if(L7(r))if(s===0){const n=new G(r.path);this.jt(a,n,W1.newNoDocument(n,e1.min()))}else D1(s===1);else this.Zt(a)!==s&&(this.Jt(a),this.Kt=this.Kt.add(a))}}te(c){const a=new Map;this.Lt.forEach((r,n)=>{const i=this.Xt(n);if(i){if(r.current&&L7(i.target)){const o=new G(i.target.path);this.Ut.get(o)!==null||this.ee(n,o)||this.jt(n,o,W1.newNoDocument(o,c))}r.Dt&&(a.set(n,r.xt()),r.Nt())}});let s=n1();this.qt.forEach((r,n)=>{let i=!0;n.forEachWhile(o=>{const l=this.Xt(o);return!l||l.purpose===2||(i=!1,!1)}),i&&(s=s.add(r))}),this.Ut.forEach((r,n)=>n.setReadTime(c));const t=new q5(c,a,this.Kt,this.Ut,s);return this.Ut=C3(),this.qt=Ya(),this.Kt=new F1(u1),t}Qt(c,a){if(!this.Ht(c))return;const s=this.ee(c,a.key)?2:0;this.zt(c).kt(a.key,s),this.Ut=this.Ut.insert(a.key,a),this.qt=this.qt.insert(a.key,this.ne(a.key).add(c))}jt(c,a,s){if(!this.Ht(c))return;const t=this.zt(c);this.ee(c,a)?t.kt(a,1):t.Ot(a),this.qt=this.qt.insert(a,this.ne(a).delete(c)),s&&(this.Ut=this.Ut.insert(a,s))}removeTarget(c){this.Lt.delete(c)}Zt(c){const a=this.zt(c).xt();return this.Bt.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Mt(c){this.zt(c).Mt()}zt(c){let a=this.Lt.get(c);return a||(a=new Qa,this.Lt.set(c,a)),a}ne(c){let a=this.qt.get(c);return a||(a=new F1(u1),this.qt=this.qt.insert(c,a)),a}Ht(c){const a=this.Xt(c)!==null;return a||B("WatchChangeAggregator","Detected inactive target",c),a}Xt(c){const a=this.Lt.get(c);return a&&a.St?null:this.Bt.se(c)}Jt(c){this.Lt.set(c,new Qa),this.Bt.getRemoteKeysForTarget(c).forEach(a=>{this.jt(c,a,null)})}ee(c,a){return this.Bt.getRemoteKeysForTarget(c).has(a)}}function Ya(){return new $1(G.comparator)}function Xa(){return new $1(G.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Db=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Rb{constructor(c,a){this.databaseId=c,this.gt=a}}function Fb(e,c){return e.gt?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Ib(e,c){return e.gt?c.toBase64():c.toUint8Array()}function y6(e){return D1(!!e),e1.fromTimestamp(function(c){const a=v3(c);return new f2(a.seconds,a.nanos)}(e))}function _b(e,c){return function(a){return new S1(["projects",a.projectId,"databases",a.database])}(e).child("documents").child(c).canonicalString()}function Tn(e){const c=S1.fromString(e);return D1(Dn(c)),c}function P0(e,c){const a=Tn(c);if(a.get(1)!==e.databaseId.projectId)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new G(En(a))}function N7(e,c){return _b(e.databaseId,c)}function Bb(e){const c=Tn(e);return c.length===4?S1.emptyPath():En(c)}function Ja(e){return new S1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function En(e){return D1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ob(e,c){let a;if("targetChange"in c){c.targetChange;const s=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:J()}(c.targetChange.targetChangeType||"NO_CHANGE"),t=c.targetChange.targetIds||[],r=function(o,l){return o.gt?(D1(l===void 0||typeof l=="string"),J1.fromBase64String(l||"")):(D1(l===void 0||l instanceof Uint8Array),J1.fromUint8Array(l||new Uint8Array))}(e,c.targetChange.resumeToken),n=c.targetChange.cause,i=n&&function(o){const l=o.code===void 0?T.UNKNOWN:yn(o.code);return new j(l,o.message||"")}(n);a=new An(s,t,r,i||null)}else if("documentChange"in c){c.documentChange;const s=c.documentChange;s.document,s.document.name,s.document.updateTime;const t=P0(e,s.document.name),r=y6(s.document.updateTime),n=new D2({mapValue:{fields:s.document.fields}}),i=W1.newFoundDocument(t,r,n),o=s.targetIds||[],l=s.removedTargetIds||[];a=new A8(o,l,i.key,i)}else if("documentDelete"in c){c.documentDelete;const s=c.documentDelete;s.document;const t=P0(e,s.document),r=s.readTime?y6(s.readTime):e1.min(),n=W1.newNoDocument(t,r),i=s.removedTargetIds||[];a=new A8([],i,n.key,n)}else if("documentRemove"in c){c.documentRemove;const s=c.documentRemove;s.document;const t=P0(e,s.document),r=s.removedTargetIds||[];a=new A8([],r,t,null)}else{if(!("filter"in c))return J();{c.filter;const s=c.filter;s.targetId;const t=s.count||0,r=new Nb(t),n=s.targetId;a=new kn(n,r)}}return a}function qb(e,c){return{documents:[N7(e,c.path)]}}function Ub(e,c){const a={structuredQuery:{}},s=c.path;c.collectionGroup!==null?(a.parent=N7(e,s),a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(a.parent=N7(e,s.popLast()),a.structuredQuery.from=[{collectionId:s.lastSegment()}]);const t=function(o){if(o.length===0)return;const l=o.map(f=>function(h){if(h.op==="=="){if(Oa(h.value))return{unaryFilter:{field:Q3(h.field),op:"IS_NAN"}};if(Ba(h.value))return{unaryFilter:{field:Q3(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Oa(h.value))return{unaryFilter:{field:Q3(h.field),op:"IS_NOT_NAN"}};if(Ba(h.value))return{unaryFilter:{field:Q3(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Q3(h.field),op:jb(h.op),value:h.value}}}(f));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(c.filters);t&&(a.structuredQuery.where=t);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:Q3(f.field),direction:Wb(f.dir)}}(l))}(c.orderBy);r&&(a.structuredQuery.orderBy=r);const n=function(o,l){return o.gt||F5(l)?l:{value:l}}(e,c.limit);var i;return n!==null&&(a.structuredQuery.limit=n),c.startAt&&(a.structuredQuery.startAt={before:(i=c.startAt).inclusive,values:i.position}),c.endAt&&(a.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(c.endAt)),a}function $b(e){let c=Bb(e.parent);const a=e.structuredQuery,s=a.from?a.from.length:0;let t=null;if(s>0){D1(s===1);const f=a.from[0];f.allDescendants?t=f.collectionId:c=c.child(f.collectionId)}let r=[];a.where&&(r=Pn(a.where));let n=[];a.orderBy&&(n=a.orderBy.map(f=>function(h){return new e6(c4(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let i=null;a.limit&&(i=function(f){let h;return h=typeof f=="object"?f.value:f,F5(h)?null:h}(a.limit));let o=null;a.startAt&&(o=function(f){const h=!!f.before,m=f.values||[];return new X8(m,h)}(a.startAt));let l=null;return a.endAt&&(l=function(f){const h=!f.before,m=f.values||[];return new X8(m,h)}(a.endAt)),vb(c,t,n,r,i,"F",o,l)}function Gb(e,c){const a=function(s,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,c.purpose);return a==null?null:{"goog-listen-tags":a}}function Pn(e){return e?e.unaryFilter!==void 0?[Zb(e)]:e.fieldFilter!==void 0?[Kb(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(c=>Pn(c)).reduce((c,a)=>c.concat(a)):J():[]}function Wb(e){return Pb[e]}function jb(e){return Db[e]}function Q3(e){return{fieldPath:e.canonicalString()}}function c4(e){return o2.fromServerFormat(e.fieldPath)}function Kb(e){return l2.create(c4(e.fieldFilter.field),function(c){switch(c){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zb(e){switch(e.unaryFilter.op){case"IS_NAN":const c=c4(e.unaryFilter.field);return l2.create(c,"==",{doubleValue:NaN});case"IS_NULL":const a=c4(e.unaryFilter.field);return l2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=c4(e.unaryFilter.field);return l2.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const t=c4(e.unaryFilter.field);return l2.create(t,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function Dn(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(c,a,s,t){this.batchId=c,this.localWriteTime=a,this.baseMutations=s,this.mutations=t}applyToRemoteDocument(c,a){const s=a.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(c.key)&&yb(r,c,s[t])}}applyToLocalView(c,a){for(const s of this.baseMutations)s.key.isEqual(c.key)&&(a=a6(s,c,a,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(c.key)&&(a=a6(s,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const s=Nn();return this.mutations.forEach(t=>{const r=c.get(t.key),n=r.overlayedDocument;let i=this.applyToLocalView(n,r.mutatedFields);i=a.has(t.key)?null:i;const o=bn(n,i);o!==null&&s.set(t.key,o),n.isValidDocument()||n.convertToNoDocument(e1.min())}),s}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),n1())}isEqual(c){return this.batchId===c.batchId&&M4(this.mutations,c.mutations,(a,s)=>ja(a,s))&&M4(this.baseMutations,c.baseMutations,(a,s)=>ja(a,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(c,a,s,t,r=e1.min(),n=e1.min(),i=J1.EMPTY_BYTE_STRING){this.target=c,this.targetId=a,this.purpose=s,this.sequenceNumber=t,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=n,this.resumeToken=i}withSequenceNumber(c){return new _3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(c,a){return new _3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c)}withLastLimboFreeSnapshotVersion(c){return new _3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(c){this.re=c}}function Jb(e){const c=$b({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?b7(c,c.limit,"L"):c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.Ye=new ex}addToCollectionParentIndex(c,a){return this.Ye.add(a),x.resolve()}getCollectionParents(c,a){return x.resolve(this.Ye.getEntries(a))}addFieldIndex(c,a){return x.resolve()}deleteFieldIndex(c,a){return x.resolve()}getDocumentsMatchingTarget(c,a){return x.resolve(null)}getIndexType(c,a){return x.resolve(0)}getFieldIndexes(c,a){return x.resolve([])}getNextCollectionGroupToUpdate(c){return x.resolve(null)}getMinOffset(c,a){return x.resolve(m3.min())}getMinOffsetFromCollectionGroup(c,a){return x.resolve(m3.min())}updateCollectionGroup(c,a,s){return x.resolve()}updateIndexEntries(c,a){return x.resolve()}}class ex{constructor(){this.index={}}add(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a]||new F1(S1.comparator),r=!t.has(s);return this.index[a]=t.add(s),r}has(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a];return t&&t.has(s)}getEntries(c){return(this.index[c]||new F1(S1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(c){this.bn=c}next(){return this.bn+=2,this.bn}static Pn(){return new L4(0)}static vn(){return new L4(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changes=new P4(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,W1.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const s=this.changes.get(a);return s!==void 0?x.resolve(s):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(c,a,s,t){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=s,this.indexManager=t}getDocument(c,a){let s=null;return this.documentOverlayCache.getOverlay(c,a).next(t=>(s=t,this.getBaseDocument(c,a,s))).next(t=>(s!==null&&a6(s.mutation,t,F3.empty(),f2.now()),t))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.getLocalViewOfDocuments(c,s,n1()).next(()=>s))}getLocalViewOfDocuments(c,a,s=n1()){const t=k3();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,s).next(r=>{let n=G4();return r.forEach((i,o)=>{n=n.insert(i,o.overlayedDocument)}),n}))}getOverlayedDocuments(c,a){const s=k3();return this.populateOverlays(c,s,a).next(()=>this.computeViews(c,a,s,n1()))}populateOverlays(c,a,s){const t=[];return s.forEach(r=>{a.has(r)||t.push(r)}),this.documentOverlayCache.getOverlays(c,t).next(r=>{r.forEach((n,i)=>{a.set(n,i)})})}computeViews(c,a,s,t){let r=C3();const n=s6(),i=s6();return a.forEach((o,l)=>{const f=s.get(l.key);t.has(l.key)&&(f===void 0||f.mutation instanceof O5)?r=r.insert(l.key,l):f!==void 0&&(n.set(l.key,f.mutation.getFieldMask()),a6(f.mutation,l,f.mutation.getFieldMask(),f2.now()))}),this.recalculateAndSaveOverlays(c,r).next(o=>(o.forEach((l,f)=>n.set(l,f)),a.forEach((l,f)=>{var h;return i.set(l,new sx(f,(h=n.get(l))!==null&&h!==void 0?h:null))}),i))}recalculateAndSaveOverlays(c,a){const s=s6();let t=new $1((n,i)=>n-i),r=n1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(n=>{for(const i of n)i.keys().forEach(o=>{const l=a.get(o);if(l===null)return;let f=s.get(o)||F3.empty();f=i.applyToLocalView(l,f),s.set(o,f);const h=(t.get(i.batchId)||n1()).add(o);t=t.insert(i.batchId,h)})}).next(()=>{const n=[],i=t.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,h=Nn();f.forEach(m=>{if(!r.has(m)){const C=bn(a.get(m),s.get(m));C!==null&&h.set(m,C),r=r.add(m)}}),n.push(this.documentOverlayCache.saveOverlays(c,l,h))}return x.waitFor(n)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.recalculateAndSaveOverlays(c,s))}getDocumentsMatchingQuery(c,a,s){return function(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):pb(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,s):this.getDocumentsMatchingCollectionQuery(c,a,s)}getNextDocuments(c,a,s,t){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,s,t).next(r=>{const n=t-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,s.largestBatchId,t-r.size):x.resolve(k3());let i=-1,o=r;return n.next(l=>x.forEach(l,(f,h)=>(i<h.largestBatchId&&(i=h.largestBatchId),r.get(f)?x.resolve():this.getBaseDocument(c,f,h).next(m=>{o=o.insert(f,m)}))).next(()=>this.populateOverlays(c,l,r)).next(()=>this.computeViews(c,o,l,n1())).next(f=>({batchId:i,changes:kb(f)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new G(a)).next(s=>{let t=G4();return s.isFoundDocument()&&(t=t.insert(s.key,s)),t})}getDocumentsMatchingCollectionGroupQuery(c,a,s){const t=a.collectionGroup;let r=G4();return this.indexManager.getCollectionParents(c,t).next(n=>x.forEach(n,i=>{const o=function(l,f){return new I5(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(a,i.child(t));return this.getDocumentsMatchingCollectionQuery(c,o,s).next(l=>{l.forEach((f,h)=>{r=r.insert(f,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(c,a,s){let t;return this.remoteDocumentCache.getAllFromCollection(c,a.path,s).next(r=>(t=r,this.documentOverlayCache.getOverlaysForCollection(c,a.path,s.largestBatchId))).next(r=>{r.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,W1.newInvalidDocument(l)))});let n=G4();return t.forEach((i,o)=>{const l=r.get(i);l!==void 0&&a6(l.mutation,o,F3.empty(),f2.now()),j9(a,o)&&(n=n.insert(i,o))}),n})}getBaseDocument(c,a,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(c,a):x.resolve(W1.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(c){this.It=c,this.Zn=new Map,this.ts=new Map}getBundleMetadata(c,a){return x.resolve(this.Zn.get(a))}saveBundleMetadata(c,a){var s;return this.Zn.set(a.id,{id:(s=a).id,version:s.version,createTime:y6(s.createTime)}),x.resolve()}getNamedQuery(c,a){return x.resolve(this.ts.get(a))}saveNamedQuery(c,a){return this.ts.set(a.name,function(s){return{name:s.name,query:Jb(s.bundledQuery),readTime:y6(s.readTime)}}(a)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.overlays=new $1(G.comparator),this.es=new Map}getOverlay(c,a){return x.resolve(this.overlays.get(a))}getOverlays(c,a){const s=k3();return x.forEach(a,t=>this.getOverlay(c,t).next(r=>{r!==null&&s.set(t,r)})).next(()=>s)}saveOverlays(c,a,s){return s.forEach((t,r)=>{this.ue(c,a,r)}),x.resolve()}removeOverlaysForBatchId(c,a,s){const t=this.es.get(s);return t!==void 0&&(t.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),x.resolve()}getOverlaysForCollection(c,a,s){const t=k3(),r=a.length+1,n=new G(a.child("")),i=this.overlays.getIteratorFrom(n);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!a.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>s&&t.set(o.getKey(),o)}return x.resolve(t)}getOverlaysForCollectionGroup(c,a,s,t){let r=new $1((l,f)=>l-f);const n=this.overlays.getIterator();for(;n.hasNext();){const l=n.getNext().value;if(l.getKey().getCollectionGroup()===a&&l.largestBatchId>s){let f=r.get(l.largestBatchId);f===null&&(f=k3(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=k3(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=t)););return x.resolve(i)}ue(c,a,s){const t=this.overlays.get(s.key);if(t!==null){const n=this.es.get(t.largestBatchId).delete(s.key);this.es.set(t.largestBatchId,n)}this.overlays=this.overlays.insert(s.key,new Yb(a,s));let r=this.es.get(a);r===void 0&&(r=n1(),this.es.set(a,r)),this.es.set(a,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(){this.ns=new F1(O1.ss),this.rs=new F1(O1.os)}isEmpty(){return this.ns.isEmpty()}addReference(c,a){const s=new O1(c,a);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(c,a){c.forEach(s=>this.addReference(s,a))}removeReference(c,a){this.cs(new O1(c,a))}hs(c,a){c.forEach(s=>this.removeReference(s,a))}ls(c){const a=new G(new S1([])),s=new O1(a,c),t=new O1(a,c+1),r=[];return this.rs.forEachInRange([s,t],n=>{this.cs(n),r.push(n.key)}),r}fs(){this.ns.forEach(c=>this.cs(c))}cs(c){this.ns=this.ns.delete(c),this.rs=this.rs.delete(c)}ds(c){const a=new G(new S1([])),s=new O1(a,c),t=new O1(a,c+1);let r=n1();return this.rs.forEachInRange([s,t],n=>{r=r.add(n.key)}),r}containsKey(c){const a=new O1(c,0),s=this.ns.firstAfterOrEqual(a);return s!==null&&c.isEqual(s.key)}}class O1{constructor(c,a){this.key=c,this._s=a}static ss(c,a){return G.comparator(c.key,a.key)||u1(c._s,a._s)}static os(c,a){return u1(c._s,a._s)||G.comparator(c.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.ws=1,this.gs=new F1(O1.ss)}checkEmpty(c){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,s,t){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const n=new Qb(r,a,s,t);this.mutationQueue.push(n);for(const i of t)this.gs=this.gs.add(new O1(i.key,r)),this.indexManager.addToCollectionParentIndex(c,i.key.path.popLast());return x.resolve(n)}lookupMutationBatch(c,a){return x.resolve(this.ys(a))}getNextMutationBatchAfterBatchId(c,a){const s=a+1,t=this.ps(s),r=t<0?0:t;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(c){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const s=new O1(a,0),t=new O1(a,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,t],n=>{const i=this.ys(n._s);r.push(i)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(c,a){let s=new F1(u1);return a.forEach(t=>{const r=new O1(t,0),n=new O1(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,n],i=>{s=s.add(i._s)})}),x.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(c,a){const s=a.path,t=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const n=new O1(new G(r),0);let i=new F1(u1);return this.gs.forEachWhile(o=>{const l=o.key.path;return!!s.isPrefixOf(l)&&(l.length===t&&(i=i.add(o._s)),!0)},n),x.resolve(this.Is(i))}Is(c){const a=[];return c.forEach(s=>{const t=this.ys(s);t!==null&&a.push(t)}),a}removeMutationBatch(c,a){D1(this.Ts(a.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return x.forEach(a.mutations,t=>{const r=new O1(t.key,a.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(c,t.key)}).next(()=>{this.gs=s})}An(c){}containsKey(c,a){const s=new O1(a,0),t=this.gs.firstAfterOrEqual(s);return x.resolve(a.isEqual(t&&t.key))}performConsistencyCheck(c){return this.mutationQueue.length,x.resolve()}Ts(c,a){return this.ps(c)}ps(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}ys(c){const a=this.ps(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(c){this.Es=c,this.docs=new $1(G.comparator),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const s=a.key,t=this.docs.get(s),r=t?t.size:0,n=this.Es(a);return this.docs=this.docs.insert(s,{document:a.mutableCopy(),size:n}),this.size+=n-r,this.indexManager.addToCollectionParentIndex(c,s.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const s=this.docs.get(a);return x.resolve(s?s.document.mutableCopy():W1.newInvalidDocument(a))}getEntries(c,a){let s=C3();return a.forEach(t=>{const r=this.docs.get(t);s=s.insert(t,r?r.document.mutableCopy():W1.newInvalidDocument(t))}),x.resolve(s)}getAllFromCollection(c,a,s){let t=C3();const r=new G(a.child("")),n=this.docs.getIteratorFrom(r);for(;n.hasNext();){const{key:i,value:{document:o}}=n.getNext();if(!a.isPrefixOf(i.path))break;i.path.length>a.length+1||YL(QL(o),s)<=0||(t=t.insert(o.key,o.mutableCopy()))}return x.resolve(t)}getAllFromCollectionGroup(c,a,s,t){J()}As(c,a){return x.forEach(this.docs,s=>a(s))}newChangeBuffer(c){return new lx(this)}getSize(c){return x.resolve(this.size)}}class lx extends ax{constructor(c){super(),this.Yn=c}applyChanges(c){const a=[];return this.changes.forEach((s,t)=>{t.isValidDocument()?a.push(this.Yn.addEntry(c,t)):this.Yn.removeEntry(s)}),x.waitFor(a)}getFromCache(c,a){return this.Yn.getEntry(c,a)}getAllFromCache(c,a){return this.Yn.getEntries(c,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(c){this.persistence=c,this.Rs=new P4(a=>G9(a),W9),this.lastRemoteSnapshotVersion=e1.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Q9,this.targetCount=0,this.vs=L4.Pn()}forEachTarget(c,a){return this.Rs.forEach((s,t)=>a(t)),x.resolve()}getLastRemoteSnapshotVersion(c){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return x.resolve(this.bs)}allocateTargetId(c){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(c,a,s){return s&&(this.lastRemoteSnapshotVersion=s),a>this.bs&&(this.bs=a),x.resolve()}Dn(c){this.Rs.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.vs=new L4(a),this.highestTargetId=a),c.sequenceNumber>this.bs&&(this.bs=c.sequenceNumber)}addTargetData(c,a){return this.Dn(a),this.targetCount+=1,x.resolve()}updateTargetData(c,a){return this.Dn(a),x.resolve()}removeTargetData(c,a){return this.Rs.delete(a.target),this.Ps.ls(a.targetId),this.targetCount-=1,x.resolve()}removeTargets(c,a,s){let t=0;const r=[];return this.Rs.forEach((n,i)=>{i.sequenceNumber<=a&&s.get(i.targetId)===null&&(this.Rs.delete(n),r.push(this.removeMatchingKeysForTargetId(c,i.targetId)),t++)}),x.waitFor(r).next(()=>t)}getTargetCount(c){return x.resolve(this.targetCount)}getTargetData(c,a){const s=this.Rs.get(a)||null;return x.resolve(s)}addMatchingKeys(c,a,s){return this.Ps.us(a,s),x.resolve()}removeMatchingKeys(c,a,s){this.Ps.hs(a,s);const t=this.persistence.referenceDelegate,r=[];return t&&a.forEach(n=>{r.push(t.markPotentiallyOrphaned(c,n))}),x.waitFor(r)}removeMatchingKeysForTargetId(c,a){return this.Ps.ls(a),x.resolve()}getMatchingKeysForTargetId(c,a){const s=this.Ps.ds(a);return x.resolve(s)}containsKey(c,a){return x.resolve(this.Ps.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(c,a){this.Vs={},this.overlays={},this.Ss=new U9(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=c(this),this.Cs=new fx(this),this.indexManager=new cx,this.remoteDocumentCache=function(s){return new ox(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Xb(a),this.Ns=new rx(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new nx,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let s=this.Vs[c.toKey()];return s||(s=new ix(a,this.referenceDelegate),this.Vs[c.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(c,a,s){B("MemoryPersistence","Starting transaction:",c);const t=new ux(this.Ss.next());return this.referenceDelegate.ks(),s(t).next(r=>this.referenceDelegate.Os(t).next(()=>r)).toPromise().then(r=>(t.raiseOnCommittedEvent(),r))}Ms(c,a){return x.or(Object.values(this.Vs).map(s=>()=>s.containsKey(c,a)))}}class ux extends JL{constructor(c){super(),this.currentSequenceNumber=c}}class Y9{constructor(c){this.persistence=c,this.Fs=new Q9,this.$s=null}static Bs(c){return new Y9(c)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(c,a,s){return this.Fs.addReference(s,a),this.Ls.delete(s.toString()),x.resolve()}removeReference(c,a,s){return this.Fs.removeReference(s,a),this.Ls.add(s.toString()),x.resolve()}markPotentiallyOrphaned(c,a){return this.Ls.add(a.toString()),x.resolve()}removeTarget(c,a){this.Fs.ls(a.targetId).forEach(t=>this.Ls.add(t.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(c,a.targetId).next(t=>{t.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(c,a))}ks(){this.$s=new Set}Os(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,s=>{const t=G.fromPath(s);return this.Us(c,t).next(r=>{r||a.removeEntry(t,e1.min())})}).next(()=>(this.$s=null,a.apply(c)))}updateLimboDocument(c,a){return this.Us(c,a).next(s=>{s?this.Ls.delete(a.toString()):this.Ls.add(a.toString())})}xs(c){return 0}Us(c,a){return x.or([()=>x.resolve(this.Fs.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Ms(c,a)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(c,a,s,t){this.targetId=c,this.fromCache=a,this.Si=s,this.Di=t}static Ci(c,a){let s=n1(),t=n1();for(const r of a.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:t=t.add(r.doc.key)}return new X9(c,a.fromCache,s,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(){this.xi=!1}initialize(c,a){this.Ni=c,this.indexManager=a,this.xi=!0}getDocumentsMatchingQuery(c,a,s,t){return this.ki(c,a).next(r=>r||this.Oi(c,a,t,s)).next(r=>r||this.Mi(c,a))}ki(c,a){if(Ga(a))return x.resolve(null);let s=W2(a);return this.indexManager.getIndexType(c,s).next(t=>t===0?null:(a.limit!==null&&t===1&&(a=b7(a,null,"F"),s=W2(a)),this.indexManager.getDocumentsMatchingTarget(c,s).next(r=>{const n=n1(...r);return this.Ni.getDocuments(c,n).next(i=>this.indexManager.getMinOffset(c,s).next(o=>{const l=this.Fi(a,i);return this.$i(a,l,n,o.readTime)?this.ki(c,b7(a,null,"F")):this.Bi(c,l,a,o)}))})))}Oi(c,a,s,t){return Ga(a)||t.isEqual(e1.min())?this.Mi(c,a):this.Ni.getDocuments(c,s).next(r=>{const n=this.Fi(a,r);return this.$i(a,n,s,t)?this.Mi(c,a):(Ra()<=f1.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",t.toString(),x7(a)),this.Bi(c,n,a,ZL(t,-1)))})}Fi(c,a){let s=new F1(Mn(c));return a.forEach((t,r)=>{j9(c,r)&&(s=s.add(r))}),s}$i(c,a,s,t){if(c.limit===null)return!1;if(s.size!==a.size)return!0;const r=c.limitType==="F"?a.last():a.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(t)>0)}Mi(c,a){return Ra()<=f1.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",x7(a)),this.Ni.getDocumentsMatchingQuery(c,a,m3.min())}Bi(c,a,s,t){return this.Ni.getDocumentsMatchingQuery(c,s,t).next(r=>(a.forEach(n=>{r=r.insert(n.key,n)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(c,a,s,t){this.persistence=c,this.Li=a,this.It=t,this.Ui=new $1(u1),this.qi=new P4(r=>G9(r),W9),this.Ki=new Map,this.Gi=c.getRemoteDocumentCache(),this.Cs=c.getTargetCache(),this.Ns=c.getBundleCache(),this.Qi(s)}Qi(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new tx(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.Ui))}}function Cx(e,c,a,s){return new vx(e,c,a,s)}async function Rn(e,c){const a=o1(e);return await a.persistence.runTransaction("Handle user change","readonly",s=>{let t;return a.mutationQueue.getAllMutationBatches(s).next(r=>(t=r,a.Qi(c),a.mutationQueue.getAllMutationBatches(s))).next(r=>{const n=[],i=[];let o=n1();for(const l of t){n.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return a.localDocuments.getDocuments(s,o).next(l=>({ji:l,removedBatchIds:n,addedBatchIds:i}))})})}function Fn(e){const c=o1(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function zx(e,c){const a=o1(e),s=c.snapshotVersion;let t=a.Ui;return a.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const n=a.Gi.newChangeBuffer({trackRemovals:!0});t=a.Ui;const i=[];c.targetChanges.forEach((f,h)=>{const m=t.get(h);if(!m)return;i.push(a.Cs.removeMatchingKeys(r,f.removedDocuments,h).next(()=>a.Cs.addMatchingKeys(r,f.addedDocuments,h)));let C=m.withSequenceNumber(r.currentSequenceNumber);c.targetMismatches.has(h)?C=C.withResumeToken(J1.EMPTY_BYTE_STRING,e1.min()).withLastLimboFreeSnapshotVersion(e1.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,s)),t=t.insert(h,C),function(d,L,w){return d.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,C,f)&&i.push(a.Cs.updateTargetData(r,C))});let o=C3(),l=n1();if(c.documentUpdates.forEach(f=>{c.resolvedLimboDocuments.has(f)&&i.push(a.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(px(r,n,c.documentUpdates).next(f=>{o=f.Wi,l=f.zi})),!s.isEqual(e1.min())){const f=a.Cs.getLastRemoteSnapshotVersion(r).next(h=>a.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));i.push(f)}return x.waitFor(i).next(()=>n.apply(r)).next(()=>a.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(a.Ui=t,r))}function px(e,c,a){let s=n1(),t=n1();return a.forEach(r=>s=s.add(r)),c.getEntries(e,s).next(r=>{let n=C3();return a.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(t=t.add(i)),o.isNoDocument()&&o.version.isEqual(e1.min())?(c.removeEntry(i,o.readTime),n=n.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(c.addEntry(o),n=n.insert(i,o)):B("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{Wi:n,zi:t}})}function dx(e,c){const a=o1(e);return a.persistence.runTransaction("Allocate target","readwrite",s=>{let t;return a.Cs.getTargetData(s,c).next(r=>r?(t=r,x.resolve(t)):a.Cs.allocateTargetId(s).next(n=>(t=new _3(c,n,0,s.currentSequenceNumber),a.Cs.addTargetData(s,t).next(()=>t))))}).then(s=>{const t=a.Ui.get(s.targetId);return(t===null||s.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(a.Ui=a.Ui.insert(s.targetId,s),a.qi.set(c,s.targetId)),s})}async function w7(e,c,a){const s=o1(e),t=s.Ui.get(c),r=a?"readwrite":"readwrite-primary";try{a||await s.persistence.runTransaction("Release target",r,n=>s.persistence.referenceDelegate.removeTarget(n,t))}catch(n){if(!$6(n))throw n;B("LocalStore",`Failed to update sequence numbers for target ${c}: ${n}`)}s.Ui=s.Ui.remove(c),s.qi.delete(t.target)}function cs(e,c,a){const s=o1(e);let t=e1.min(),r=n1();return s.persistence.runTransaction("Execute query","readonly",n=>function(i,o,l){const f=o1(i),h=f.qi.get(l);return h!==void 0?x.resolve(f.Ui.get(h)):f.Cs.getTargetData(o,l)}(s,n,W2(c)).next(i=>{if(i)return t=i.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(n,i.targetId).next(o=>{r=o})}).next(()=>s.Li.getDocumentsMatchingQuery(n,c,a?t:e1.min(),a?r:n1())).next(i=>(Hx(s,db(c),i),{documents:i,Hi:r})))}function Hx(e,c,a){let s=e.Ki.get(c)||e1.min();a.forEach((t,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(c,s)}class es{constructor(){this.activeTargetIds=wn()}er(c){this.activeTargetIds=this.activeTargetIds.add(c)}nr(c){this.activeTargetIds=this.activeTargetIds.delete(c)}tr(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class Mx{constructor(){this.Lr=new es,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,s){}addLocalQueryTarget(c){return this.Lr.er(c),this.Ur[c]||"not-current"}updateQueryState(c,a,s){this.Ur[c]=a}removeLocalQueryTarget(c){this.Lr.nr(c)}isLocalQueryTarget(c){return this.Lr.activeTargetIds.has(c)}clearQueryState(c){delete this.Ur[c]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(c){return this.Lr.activeTargetIds.has(c)}start(){return this.Lr=new es,Promise.resolve()}handleUserChange(c,a,s){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{qr(c){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(c){this.Wr.push(c)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.Wr)c(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.Wr)c(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(c){this.Hr=c.Hr,this.Jr=c.Jr}Yr(c){this.Xr=c}Zr(c){this.eo=c}onMessage(c){this.no=c}close(){this.Jr()}send(c){this.Hr(c)}so(){this.Xr()}io(c){this.eo(c)}ro(c){this.no(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http";this.oo=a+"://"+c.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(c,a,s,t,r){const n=this.ho(c,a);B("RestConnection","Sending: ",n,s);const i={};return this.lo(i,t,r),this.fo(c,n,i,s).then(o=>(B("RestConnection","Received: ",o),o),o=>{throw H7("RestConnection",`${c} failed with error: `,o,"url: ",n,"request:",s),o})}_o(c,a,s,t,r,n){return this.ao(c,a,s,t,r)}lo(c,a,s){c["X-Goog-Api-Client"]="gl-js/ fire/"+E4,c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((t,r)=>c[r]=t),s&&s.headers.forEach((t,r)=>c[r]=t)}ho(c,a){const s=gx[c];return`${this.oo}/v1/${a}:${s}`}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams}fo(c,a,s,t){return new Promise((r,n)=>{const i=new IL;i.setWithCredentials(!0),i.listenOnce(DL.COMPLETE,()=>{var l;try{switch(i.getLastErrorCode()){case T0.NO_ERROR:const f=i.getResponseJson();B("Connection","XHR received:",JSON.stringify(f)),r(f);break;case T0.TIMEOUT:B("Connection",'RPC "'+c+'" timed out'),n(new j(T.DEADLINE_EXCEEDED,"Request time out"));break;case T0.HTTP_ERROR:const h=i.getStatus();if(B("Connection",'RPC "'+c+'" failed with status:',h,"response text:",i.getResponseText()),h>0){let m=i.getResponseJson();Array.isArray(m)&&(m=m[0]);const C=(l=m)===null||l===void 0?void 0:l.error;if(C&&C.status&&C.message){const d=function(L){const w=L.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(w)>=0?w:T.UNKNOWN}(C.status);n(new j(d,C.message))}else n(new j(T.UNKNOWN,"Server responded with status "+i.getStatus()))}else n(new j(T.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{B("Connection",'RPC "'+c+'" completed.')}});const o=JSON.stringify(t);i.send(a,"POST",o,s,15)})}wo(c,a,s){const t=[this.oo,"/","google.firestore.v1.Firestore","/",c,"/channel"],r=EL(),n=PL(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new FL({})),this.lo(i.initMessageHeaders,a,s),i.encodeInitMessageHeaders=!0;const o=t.join("");B("Connection","Creating WebChannel: "+o,i);const l=r.createWebChannel(o,i);let f=!1,h=!1;const m=new Lx({Hr:d=>{h?B("Connection","Not sending because WebChannel is closed:",d):(f||(B("Connection","Opening WebChannel transport."),l.open(),f=!0),B("Connection","WebChannel sending:",d),l.send(d))},Jr:()=>l.close()}),C=(d,L,w)=>{d.listen(L,p=>{try{w(p)}catch(M){setTimeout(()=>{throw M},0)}})};return C(l,m8.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),C(l,m8.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),m.io())}),C(l,m8.EventType.ERROR,d=>{h||(h=!0,H7("Connection","WebChannel transport errored:",d),m.io(new j(T.UNAVAILABLE,"The operation could not be completed")))}),C(l,m8.EventType.MESSAGE,d=>{var L;if(!h){const w=d.data[0];D1(!!w);const p=w,M=p.error||((L=p[0])===null||L===void 0?void 0:L.error);if(M){B("Connection","WebChannel received error:",M);const y=M.status;let _=function(i1){const W=E1[i1];if(W!==void 0)return yn(W)}(y),$=M.message;_===void 0&&(_=T.INTERNAL,$="Unknown error status: "+y+" with message "+M.message),h=!0,m.io(new j(_,$)),l.close()}else B("Connection","WebChannel received:",w),m.ro(w)}}),C(n,RL.STAT_EVENT,d=>{d.stat===Pa.PROXY?B("Connection","Detected buffering proxy"):d.stat===Pa.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.so()},0),m}}function D0(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){return new Rb(e,!0)}class _n{constructor(c,a,s=1e3,t=1.5,r=6e4){this.Hs=c,this.timerId=a,this.mo=s,this.yo=t,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(c){this.cancel();const a=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),t=Math.max(0,a-s);t>0&&B("ExponentialBackoff",`Backing off for ${t} ms (base delay: ${this.Io} ms, delay with jitter: ${a} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,t,()=>(this.Eo=Date.now(),c())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(c,a,s,t,r,n,i,o){this.Hs=c,this.vo=s,this.Vo=t,this.connection=r,this.authCredentialsProvider=n,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new _n(c,a)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(c){this.Lo(),this.stream.send(c)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(c,a){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,c!==4?this.xo.reset():a&&a.code===T.RESOURCE_EXHAUSTED?(G2(a.toString()),G2("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):a&&a.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=c,await this.listener.Zr(a)}qo(){}auth(){this.state=1;const c=this.Ko(this.So),a=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,t])=>{this.So===a&&this.Go(s,t)},s=>{c(()=>{const t=new j(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(t)})})}Go(c,a){const s=this.Ko(this.So);this.stream=this.jo(c,a),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{s(()=>this.Qo(t))}),this.stream.onMessage(t=>{s(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(c){return B("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}Ko(c){return a=>{this.Hs.enqueueAndForget(()=>this.So===c?a():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yx extends xx{constructor(c,a,s,t,r,n){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,s,t,n),this.It=r}jo(c,a){return this.connection.wo("Listen",c,a)}onMessage(c){this.xo.reset();const a=Ob(this.It,c),s=function(t){if(!("targetChange"in t))return e1.min();const r=t.targetChange;return r.targetIds&&r.targetIds.length?e1.min():r.readTime?y6(r.readTime):e1.min()}(c);return this.listener.Wo(a,s)}zo(c){const a={};a.database=Ja(this.It),a.addTarget=function(t,r){let n;const i=r.target;return n=L7(i)?{documents:qb(t,i)}:{query:Ub(t,i)},n.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?n.resumeToken=Ib(t,r.resumeToken):r.snapshotVersion.compareTo(e1.min())>0&&(n.readTime=Fb(t,r.snapshotVersion.toTimestamp())),n}(this.It,c);const s=Gb(this.It,c);s&&(a.labels=s),this.Bo(a)}Ho(c){const a={};a.database=Ja(this.It),a.removeTarget=c,this.Bo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx extends class{}{constructor(c,a,s,t){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=s,this.It=t,this.nu=!1}su(){if(this.nu)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(c,a,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([t,r])=>this.connection.ao(c,a,s,t,r)).catch(t=>{throw t.name==="FirebaseError"?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new j(T.UNKNOWN,t.toString())})}_o(c,a,s,t){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,n])=>this.connection._o(c,a,s,r,n,t)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(T.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Nx{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(c){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.cu("Offline")))}set(c){this.lu(),this.iu=0,c==="Online"&&(this.ou=!1),this.cu(c)}cu(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}au(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(G2(a),this.ou=!1):B("OnlineStateTracker",a)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(c,a,s,t,r){this.localStore=c,this.datastore=a,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(n=>{s.enqueueAndForget(async()=>{j6(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=o1(i);o._u.add(4),await W6(o),o.gu.set("Unknown"),o._u.delete(4),await U5(o)}(this))})}),this.gu=new Nx(s,t)}}async function U5(e){if(j6(e))for(const c of e.wu)await c(!0)}async function W6(e){for(const c of e.wu)await c(!1)}function Bn(e,c){const a=o1(e);a.du.has(c.targetId)||(a.du.set(c.targetId,c),ec(a)?cc(a):D4(a).ko()&&J9(a,c))}function On(e,c){const a=o1(e),s=D4(a);a.du.delete(c),s.ko()&&qn(a,c),a.du.size===0&&(s.ko()?s.Fo():j6(a)&&a.gu.set("Unknown"))}function J9(e,c){e.yu.Mt(c.targetId),D4(e).zo(c)}function qn(e,c){e.yu.Mt(c),D4(e).Ho(c)}function cc(e){e.yu=new Eb({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),se:c=>e.du.get(c)||null}),D4(e).start(),e.gu.uu()}function ec(e){return j6(e)&&!D4(e).No()&&e.du.size>0}function j6(e){return o1(e)._u.size===0}function Un(e){e.yu=void 0}async function kx(e){e.du.forEach((c,a)=>{J9(e,c)})}async function Ax(e,c){Un(e),ec(e)?(e.gu.hu(c),cc(e)):e.gu.set("Unknown")}async function Tx(e,c,a){if(e.gu.set("Online"),c instanceof An&&c.state===2&&c.cause)try{await async function(s,t){const r=t.cause;for(const n of t.targetIds)s.du.has(n)&&(await s.remoteSyncer.rejectListen(n,r),s.du.delete(n),s.yu.removeTarget(n))}(e,c)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),s),await ss(e,s)}else if(c instanceof A8?e.yu.Gt(c):c instanceof kn?e.yu.Yt(c):e.yu.Wt(c),!a.isEqual(e1.min()))try{const s=await Fn(e.localStore);a.compareTo(s)>=0&&await function(t,r){const n=t.yu.te(r);return n.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=t.du.get(o);l&&t.du.set(o,l.withResumeToken(i.resumeToken,r))}}),n.targetMismatches.forEach(i=>{const o=t.du.get(i);if(!o)return;t.du.set(i,o.withResumeToken(J1.EMPTY_BYTE_STRING,o.snapshotVersion)),qn(t,i);const l=new _3(o.target,i,1,o.sequenceNumber);J9(t,l)}),t.remoteSyncer.applyRemoteEvent(n)}(e,a)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await ss(e,s)}}async function ss(e,c,a){if(!$6(c))throw c;e._u.add(1),await W6(e),e.gu.set("Offline"),a||(a=()=>Fn(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await a(),e._u.delete(1),await U5(e)})}async function ts(e,c){const a=o1(e);a.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=j6(a);a._u.add(3),await W6(a),s&&a.gu.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a._u.delete(3),await U5(a)}async function Ex(e,c){const a=o1(e);c?(a._u.delete(2),await U5(a)):c||(a._u.add(2),await W6(a),a.gu.set("Unknown"))}function D4(e){return e.pu||(e.pu=function(c,a,s){const t=o1(c);return t.su(),new yx(a,t.connection,t.authCredentials,t.appCheckCredentials,t.It,s)}(e.datastore,e.asyncQueue,{Yr:kx.bind(null,e),Zr:Ax.bind(null,e),Wo:Tx.bind(null,e)}),e.wu.push(async c=>{c?(e.pu.Mo(),ec(e)?cc(e):e.gu.set("Unknown")):(await e.pu.stop(),Un(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(c,a,s,t,r){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=s,this.op=t,this.removalCallback=r,this.deferred=new R3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}static createAndSchedule(c,a,s,t,r){const n=Date.now()+s,i=new ac(c,a,n,t,r);return i.start(s),i}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(T.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $n(e,c){if(G2("AsyncQueue",`${c}: ${e}`),$6(e))return new j(T.UNAVAILABLE,`${c}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(c){this.comparator=c?(a,s)=>c(a,s)||G.comparator(a.key,s.key):(a,s)=>G.comparator(a.key,s.key),this.keyedMap=G4(),this.sortedSet=new $1(this.comparator)}static emptySet(c){return new f4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,s)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof f4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),s=c.sortedSet.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const s=new f4;return s.comparator=this.comparator,s.keyedMap=c,s.sortedSet=a,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Tu=new $1(G.comparator)}track(c){const a=c.doc.key,s=this.Tu.get(a);s?c.type!==0&&s.type===3?this.Tu=this.Tu.insert(a,c):c.type===3&&s.type!==1?this.Tu=this.Tu.insert(a,{type:s.type,doc:c.doc}):c.type===2&&s.type===2?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c.type===2&&s.type===0?this.Tu=this.Tu.insert(a,{type:0,doc:c.doc}):c.type===1&&s.type===0?this.Tu=this.Tu.remove(a):c.type===1&&s.type===2?this.Tu=this.Tu.insert(a,{type:1,doc:s.doc}):c.type===0&&s.type===1?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):J():this.Tu=this.Tu.insert(a,c)}Eu(){const c=[];return this.Tu.inorderTraversal((a,s)=>{c.push(s)}),c}}class b4{constructor(c,a,s,t,r,n,i,o,l){this.query=c,this.docs=a,this.oldDocs=s,this.docChanges=t,this.mutatedKeys=r,this.fromCache=n,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(c,a,s,t,r){const n=[];return a.forEach(i=>{n.push({type:0,doc:i})}),new b4(c,a,f4.emptySet(a),n,s,t,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&_5(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,s=c.docChanges;if(a.length!==s.length)return!1;for(let t=0;t<a.length;t++)if(a[t].type!==s[t].type||!a[t].doc.isEqual(s[t].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.Au=void 0,this.listeners=[]}}class Dx{constructor(){this.queries=new P4(c=>Hn(c),_5),this.onlineState="Unknown",this.Ru=new Set}}async function Rx(e,c){const a=o1(e),s=c.query;let t=!1,r=a.queries.get(s);if(r||(t=!0,r=new Px),t)try{r.Au=await a.onListen(s)}catch(n){const i=$n(n,`Initialization of query '${x7(c.query)}' failed`);return void c.onError(i)}a.queries.set(s,r),r.listeners.push(c),c.bu(a.onlineState),r.Au&&c.Pu(r.Au)&&sc(a)}async function Fx(e,c){const a=o1(e),s=c.query;let t=!1;const r=a.queries.get(s);if(r){const n=r.listeners.indexOf(c);n>=0&&(r.listeners.splice(n,1),t=r.listeners.length===0)}if(t)return a.queries.delete(s),a.onUnlisten(s)}function Ix(e,c){const a=o1(e);let s=!1;for(const t of c){const r=t.query,n=a.queries.get(r);if(n){for(const i of n.listeners)i.Pu(t)&&(s=!0);n.Au=t}}s&&sc(a)}function _x(e,c,a){const s=o1(e),t=s.queries.get(c);if(t)for(const r of t.listeners)r.onError(a);s.queries.delete(c)}function sc(e){e.Ru.forEach(c=>{c.next()})}class Bx{constructor(c,a,s){this.query=c,this.vu=a,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(c){if(!this.options.includeMetadataChanges){const s=[];for(const t of c.docChanges)t.type!==3&&s.push(t);c=new b4(c.query,c.docs,c.oldDocs,s,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.Vu?this.Du(c)&&(this.vu.next(c),a=!0):this.Cu(c,this.onlineState)&&(this.xu(c),a=!0),this.Su=c,a}onError(c){this.vu.error(c)}bu(c){this.onlineState=c;let a=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,c)&&(this.xu(this.Su),a=!0),a}Cu(c,a){if(!c.fromCache)return!0;const s=a!=="Offline";return(!this.options.Nu||!s)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Du(c){if(c.docChanges.length>0)return!0;const a=this.Su&&this.Su.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}xu(c){c=b4.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.Vu=!0,this.vu.next(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(c){this.key=c}}class Wn{constructor(c){this.key=c}}class Ox{constructor(c,a){this.query=c,this.Uu=a,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=n1(),this.mutatedKeys=n1(),this.Gu=Mn(c),this.Qu=new f4(this.Gu)}get ju(){return this.Uu}Wu(c,a){const s=a?a.zu:new rs,t=a?a.Qu:this.Qu;let r=a?a.mutatedKeys:this.mutatedKeys,n=t,i=!1;const o=this.query.limitType==="F"&&t.size===this.query.limit?t.last():null,l=this.query.limitType==="L"&&t.size===this.query.limit?t.first():null;if(c.inorderTraversal((f,h)=>{const m=t.get(f),C=j9(this.query,h)?h:null,d=!!m&&this.mutatedKeys.has(m.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let w=!1;m&&C?m.data.isEqual(C.data)?d!==L&&(s.track({type:3,doc:C}),w=!0):this.Hu(m,C)||(s.track({type:2,doc:C}),w=!0,(o&&this.Gu(C,o)>0||l&&this.Gu(C,l)<0)&&(i=!0)):!m&&C?(s.track({type:0,doc:C}),w=!0):m&&!C&&(s.track({type:1,doc:m}),w=!0,(o||l)&&(i=!0)),w&&(C?(n=n.add(C),r=L?r.add(f):r.delete(f)):(n=n.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;n.size>this.query.limit;){const f=this.query.limitType==="F"?n.last():n.first();n=n.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Qu:n,zu:s,$i:i,mutatedKeys:r}}Hu(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,s){const t=this.Qu;this.Qu=c.Qu,this.mutatedKeys=c.mutatedKeys;const r=c.zu.Eu();r.sort((l,f)=>function(h,m){const C=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return C(h)-C(m)}(l.type,f.type)||this.Gu(l.doc,f.doc)),this.Ju(s);const n=a?this.Yu():[],i=this.Ku.size===0&&this.current?1:0,o=i!==this.qu;return this.qu=i,r.length!==0||o?{snapshot:new b4(this.query,c.Qu,t,r,c.mutatedKeys,i===0,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:n}:{Xu:n}}bu(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rs,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(c){return!this.Uu.has(c)&&!!this.Qu.has(c)&&!this.Qu.get(c).hasLocalMutations}Ju(c){c&&(c.addedDocuments.forEach(a=>this.Uu=this.Uu.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.Uu=this.Uu.delete(a)),this.current=c.current)}Yu(){if(!this.current)return[];const c=this.Ku;this.Ku=n1(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const a=[];return c.forEach(s=>{this.Ku.has(s)||a.push(new Wn(s))}),this.Ku.forEach(s=>{c.has(s)||a.push(new Gn(s))}),a}tc(c){this.Uu=c.Hi,this.Ku=n1();const a=this.Wu(c.documents);return this.applyChanges(a,!0)}ec(){return b4.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class qx{constructor(c,a,s){this.query=c,this.targetId=a,this.view=s}}class Ux{constructor(c){this.key=c,this.nc=!1}}class $x{constructor(c,a,s,t,r,n){this.localStore=c,this.remoteStore=a,this.eventManager=s,this.sharedClientState=t,this.currentUser=r,this.maxConcurrentLimboResolutions=n,this.sc={},this.ic=new P4(i=>Hn(i),_5),this.rc=new Map,this.oc=new Set,this.uc=new $1(G.comparator),this.cc=new Map,this.ac=new Q9,this.hc={},this.lc=new Map,this.fc=L4.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Gx(e,c){const a=Xx(e);let s,t;const r=a.ic.get(c);if(r)s=r.targetId,a.sharedClientState.addLocalQueryTarget(s),t=r.view.ec();else{const n=await dx(a.localStore,W2(c));a.isPrimaryClient&&Bn(a.remoteStore,n);const i=a.sharedClientState.addLocalQueryTarget(n.targetId);s=n.targetId,t=await Wx(a,c,s,i==="current",n.resumeToken)}return t}async function Wx(e,c,a,s,t){e._c=(h,m,C)=>async function(d,L,w,p){let M=L.view.Wu(w);M.$i&&(M=await cs(d.localStore,L.query,!1).then(({documents:$})=>L.view.Wu($,M)));const y=p&&p.targetChanges.get(L.targetId),_=L.view.applyChanges(M,d.isPrimaryClient,y);return is(d,L.targetId,_.Xu),_.snapshot}(e,h,m,C);const r=await cs(e.localStore,c,!0),n=new Ox(c,r.Hi),i=n.Wu(r.documents),o=G6.createSynthesizedTargetChangeForCurrentChange(a,s&&e.onlineState!=="Offline",t),l=n.applyChanges(i,e.isPrimaryClient,o);is(e,a,l.Xu);const f=new qx(c,a,n);return e.ic.set(c,f),e.rc.has(a)?e.rc.get(a).push(c):e.rc.set(a,[c]),l.snapshot}async function jx(e,c){const a=o1(e),s=a.ic.get(c),t=a.rc.get(s.targetId);if(t.length>1)return a.rc.set(s.targetId,t.filter(r=>!_5(r,c))),void a.ic.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await w7(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),On(a.remoteStore,s.targetId),k7(a,s.targetId)}).catch(q9)):(k7(a,s.targetId),await w7(a.localStore,s.targetId,!0))}async function jn(e,c){const a=o1(e);try{const s=await zx(a.localStore,c);c.targetChanges.forEach((t,r)=>{const n=a.cc.get(r);n&&(D1(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.nc=!0:t.modifiedDocuments.size>0?D1(n.nc):t.removedDocuments.size>0&&(D1(n.nc),n.nc=!1))}),await Zn(a,s,c)}catch(s){await q9(s)}}function ns(e,c,a){const s=o1(e);if(s.isPrimaryClient&&a===0||!s.isPrimaryClient&&a===1){const t=[];s.ic.forEach((r,n)=>{const i=n.view.bu(c);i.snapshot&&t.push(i.snapshot)}),function(r,n){const i=o1(r);i.onlineState=n;let o=!1;i.queries.forEach((l,f)=>{for(const h of f.listeners)h.bu(n)&&(o=!0)}),o&&sc(i)}(s.eventManager,c),t.length&&s.sc.Wo(t),s.onlineState=c,s.isPrimaryClient&&s.sharedClientState.setOnlineState(c)}}async function Kx(e,c,a){const s=o1(e);s.sharedClientState.updateQueryState(c,"rejected",a);const t=s.cc.get(c),r=t&&t.key;if(r){let n=new $1(G.comparator);n=n.insert(r,W1.newNoDocument(r,e1.min()));const i=n1().add(r),o=new q5(e1.min(),new Map,new F1(u1),n,i);await jn(s,o),s.uc=s.uc.remove(r),s.cc.delete(c),tc(s)}else await w7(s.localStore,c,!1).then(()=>k7(s,c,a)).catch(q9)}function k7(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const s of e.rc.get(c))e.ic.delete(s),a&&e.sc.wc(s,a);e.rc.delete(c),e.isPrimaryClient&&e.ac.ls(c).forEach(s=>{e.ac.containsKey(s)||Kn(e,s)})}function Kn(e,c){e.oc.delete(c.path.canonicalString());const a=e.uc.get(c);a!==null&&(On(e.remoteStore,a),e.uc=e.uc.remove(c),e.cc.delete(a),tc(e))}function is(e,c,a){for(const s of a)s instanceof Gn?(e.ac.addReference(s.key,c),Zx(e,s)):s instanceof Wn?(B("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,c),e.ac.containsKey(s.key)||Kn(e,s.key)):J()}function Zx(e,c){const a=c.key,s=a.path.canonicalString();e.uc.get(a)||e.oc.has(s)||(B("SyncEngine","New document in limbo: "+a),e.oc.add(s),tc(e))}function tc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const c=e.oc.values().next().value;e.oc.delete(c);const a=new G(S1.fromString(c)),s=e.fc.next();e.cc.set(s,new Ux(a)),e.uc=e.uc.insert(a,s),Bn(e.remoteStore,new _3(W2(dn(a.path)),s,2,U9.at))}}async function Zn(e,c,a){const s=o1(e),t=[],r=[],n=[];s.ic.isEmpty()||(s.ic.forEach((i,o)=>{n.push(s._c(o,c,a).then(l=>{if((l||a)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){t.push(l);const f=X9.Ci(o.targetId,l);r.push(f)}}))}),await Promise.all(n),s.sc.Wo(t),await async function(i,o){const l=o1(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(o,h=>x.forEach(h.Si,m=>l.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>x.forEach(h.Di,m=>l.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!$6(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const h=f.targetId;if(!f.fromCache){const m=l.Ui.get(h),C=m.snapshotVersion,d=m.withLastLimboFreeSnapshotVersion(C);l.Ui=l.Ui.insert(h,d)}}}(s.localStore,r))}async function Qx(e,c){const a=o1(e);if(!a.currentUser.isEqual(c)){B("SyncEngine","User change. New user:",c.toKey());const s=await Rn(a.localStore,c);a.currentUser=c,function(t,r){t.lc.forEach(n=>{n.forEach(i=>{i.reject(new j(T.CANCELLED,r))})}),t.lc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,s.removedBatchIds,s.addedBatchIds),await Zn(a,s.ji)}}function Yx(e,c){const a=o1(e),s=a.cc.get(c);if(s&&s.nc)return n1().add(s.key);{let t=n1();const r=a.rc.get(c);if(!r)return t;for(const n of r){const i=a.ic.get(n);t=t.unionWith(i.view.ju)}return t}}function Xx(e){const c=o1(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=jn.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=Kx.bind(null,c),c.sc.Wo=Ix.bind(null,c.eventManager),c.sc.wc=_x.bind(null,c.eventManager),c}class Jx{constructor(){this.synchronizeTabs=!1}async initialize(c){this.It=In(c.databaseInfo.databaseId),this.sharedClientState=this.gc(c),this.persistence=this.yc(c),await this.persistence.start(),this.localStore=this.Ic(c),this.gcScheduler=this.Tc(c,this.localStore),this.indexBackfillerScheduler=this.Ec(c,this.localStore)}Tc(c,a){return null}Ec(c,a){return null}Ic(c){return Cx(this.persistence,new mx,c.initialUser,this.It)}yc(c){return new hx(Y9.Bs,this.It)}gc(c){return new Mx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cy{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ns(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qx.bind(null,this.syncEngine),await Ex(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return new Dx}createDatastore(c){const a=In(c.databaseInfo.databaseId),s=(t=c.databaseInfo,new bx(t));var t;return function(r,n,i,o){return new Sx(r,n,i,o)}(c.authCredentials,c.appCheckCredentials,s,a)}createRemoteStore(c){return a=this.localStore,s=this.datastore,t=c.asyncQueue,r=i=>ns(this.syncEngine,i,0),n=as.C()?new as:new Vx,new wx(a,s,t,r,n);var a,s,t,r,n}createSyncEngine(c,a){return function(s,t,r,n,i,o,l){const f=new $x(s,t,r,n,i,o);return l&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}terminate(){return async function(c){const a=o1(c);B("RemoteStore","RemoteStore shutting down."),a._u.add(5),await W6(a),a.mu.shutdown(),a.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(e,c,a){if(!a)throw new j(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function ay(e,c,a,s){if(c===!0&&s===!0)throw new j(T.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function os(e){if(G.isDocumentKey(e))throw new j(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function sy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(a){return a.constructor?a.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":J()}function A7(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new j(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=sy(e);throw new j(T.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;class fs{constructor(c){var a;if(c.host===void 0){if(c.ssl!==void 0)throw new j(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new j(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.useFetchStreams=!!c.useFetchStreams,ay("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling)}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(c,a,s,t){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=s,this._app=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new j(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fs(c),c.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new _L;switch(a.type){case"gapi":const s=a.client;return new UL(s,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new j(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=ls.get(c);a&&(B("ComponentProvider","Removing Datastore"),ls.delete(c),a.terminate())}(this),Promise.resolve()}}function ty(e,c,a,s={}){var t;const r=(e=A7(e,rc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==c&&H7("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${c}:${a}`,ssl:!1})),s.mockUserToken){let n,i;if(typeof s.mockUserToken=="string")n=s.mockUserToken,i=Z1.MOCK_USER;else{n=bV(s.mockUserToken,(t=e._app)===null||t===void 0?void 0:t.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new j(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Z1(o)}e._authCredentials=new BL(new vn(n,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(c,a,s){this.converter=a,this._key=s,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new h4(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new R4(this.firestore,c,this._key)}}class $5{constructor(c,a,s){this.converter=a,this._query=s,this.type="query",this.firestore=c}withConverter(c){return new $5(this.firestore,c,this._query)}}class h4 extends $5{constructor(c,a,s){super(c,a,dn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new R4(this.firestore,null,new G(c))}withConverter(c){return new h4(this.firestore,c,this._path)}}function ry(e,c,...a){if(e=NV(e),ey("collection","path",c),e instanceof rc){const s=S1.fromString(c,...a);return os(s),new h4(e,null,s)}{if(!(e instanceof R4||e instanceof h4))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(S1.fromString(c,...a));return os(s),new h4(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.Rc(this.observer.next,c)}error(c){this.observer.error?this.Rc(this.observer.error,c):G2("Uncaught Error in snapshot listener:",c.toString())}bc(){this.muted=!0}Rc(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(c,a,s,t){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=s,this.databaseInfo=t,this.user=Z1.UNAUTHENTICATED,this.clientId=jL.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new R3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const s=$n(a,"Failed to shutdown persistence");c.reject(s)}}),c.promise}}async function oy(e,c){e.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await c.initialize(a);let s=a.initialUser;e.setCredentialChangeListener(async t=>{s.isEqual(t)||(await Rn(c.localStore,t),s=t)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=c}async function ly(e,c){e.asyncQueue.verifyOperationInProgress();const a=await fy(e);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await c.initialize(a,s),e.setCredentialChangeListener(t=>ts(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>ts(c.remoteStore,r)),e.onlineComponents=c}async function fy(e){return e.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await oy(e,new Jx)),e.offlineComponents}async function hy(e){return e.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await ly(e,new cy)),e.onlineComponents}async function uy(e){const c=await hy(e),a=c.eventManager;return a.onListen=Gx.bind(null,c.syncEngine),a.onUnlisten=jx.bind(null,c.syncEngine),a}function my(e,c,a={}){const s=new R3;return e.asyncQueue.enqueueAndForget(async()=>function(t,r,n,i,o){const l=new ny({next:h=>{r.enqueueAndForget(()=>Fx(t,f)),h.fromCache&&i.source==="server"?o.reject(new j(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(h)},error:h=>o.reject(h)}),f=new Bx(n,l,{includeMetadataChanges:!0,Nu:!0});return Rx(t,f)}(await uy(e),e.asyncQueue,c,a,s)),s.promise}class vy{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new _n(this,"async_queue_retry"),this.Wc=()=>{const a=D0();a&&B("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};const c=D0();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.zc(),this.Hc(c)}enterRestrictedMode(c){if(!this.Uc){this.Uc=!0,this.Qc=c||!1;const a=D0();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Wc)}}enqueue(c){if(this.zc(),this.Uc)return new Promise(()=>{});const a=new R3;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.Lc.push(c),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(c){if(!$6(c))throw c;B("AsyncQueue","Operation failed with retryable error: "+c)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(c){const a=this.Bc.then(()=>(this.Gc=!0,c().catch(s=>{this.Kc=s,this.Gc=!1;const t=function(r){let n=r.message||"";return r.stack&&(n=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),n}(s);throw G2("INTERNAL UNHANDLED ERROR: ",t),s}).then(s=>(this.Gc=!1,s))));return this.Bc=a,a}enqueueAfterDelay(c,a,s){this.zc(),this.jc.indexOf(c)>-1&&(a=0);const t=ac.createAndSchedule(this,c,a,s,r=>this.Yc(r));return this.qc.push(t),t}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let c;do c=this.Bc,await c;while(c!==this.Bc)}Zc(c){for(const a of this.qc)if(a.timerId===c)return!0;return!1}ta(c){return this.Xc().then(()=>{this.qc.sort((a,s)=>a.targetTimeMs-s.targetTimeMs);for(const a of this.qc)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Xc()})}ea(c){this.jc.push(c)}Yc(c){const a=this.qc.indexOf(c);this.qc.splice(a,1)}}class Qn extends rc{constructor(c,a,s,t){super(c,a,s,t),this.type="firestore",this._queue=new vy,this._persistenceKey=(t==null?void 0:t.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yn(this),this._firestoreClient.terminate()}}function Cy(e,c){const a=typeof e=="object"?e:Sg(),s=typeof e=="string"?e:c||"(default)",t=Lg(a,"firestore").getImmediate({identifier:s});if(!t._initialized){const r=VV("firestore");r&&ty(t,...r)}return t}function zy(e){return e._firestoreClient||Yn(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yn(e){var c;const a=e._freezeSettings(),s=function(t,r,n,i){return new ab(t,r,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new iy(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(c){this._byteString=c}static fromBase64String(c){try{return new e5(J1.fromBase64String(c))}catch(a){throw new j(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new e5(J1.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new j(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new o2(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new j(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new j(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return u1(this._lat,c._lat)||u1(this._long,c._long)}}const dy=new RegExp("[~\\*/\\[\\]]");function Hy(e,c,a){if(c.search(dy)>=0)throw hs(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Xn(...c.split("."))._internalPath}catch{throw hs(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function hs(e,c,a,s,t){const r=s&&!s.isEmpty(),n=t!==void 0;let i=`Function ${c}() called with invalid data`;a&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||n)&&(o+=" (found",r&&(o+=` in field ${s}`),n&&(o+=` in document ${t}`),o+=")"),new j(T.INVALID_ARGUMENT,i+e+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(c,a,s,t,r){this._firestore=c,this._userDataWriter=a,this._key=s,this._document=t,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new R4(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new My(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(ci("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class My extends Jn{data(){return super.data()}}function ci(e,c){return typeof c=="string"?Hy(e,c):c instanceof Xn?c._internalPath:c._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new j(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{convertValue(c,a="none"){switch(q3(c)){case 0:return null;case 1:return c.booleanValue;case 2:return P1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(V4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw J()}}convertObject(c,a){const s={};return R5(c.fields,(t,r)=>{s[t]=this.convertValue(r,a)}),s}convertGeoPoint(c){return new py(P1(c.latitude),P1(c.longitude))}convertArray(c,a){return(c.values||[]).map(s=>this.convertValue(s,a))}convertServerTimestamp(c,a){switch(a){case"previous":const s=zn(c);return s==null?null:this.convertValue(s,a);case"estimate":return this.convertTimestamp(g6(c));default:return null}}convertTimestamp(c){const a=v3(c);return new f2(a.seconds,a.nanos)}convertDocumentKey(c,a){const s=S1.fromString(c);D1(Dn(s));const t=new L6(s.get(1),s.get(3)),r=new G(s.popFirst(5));return t.isEqual(a)||G2(`Document ${r} contains a document reference within a different database (${t.projectId}/${t.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z8{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class Ly extends Jn{constructor(c,a,s,t,r,n){super(c,a,s,t,n),this._firestore=c,this._firestoreImpl=c,this.metadata=r}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new T8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const s=this._document.data.field(ci("DocumentSnapshot.get",c));if(s!==null)return this._userDataWriter.convertValue(s,a.serverTimestamps)}}}class T8 extends Ly{data(c={}){return super.data(c)}}class by{constructor(c,a,s,t){this._firestore=c,this._userDataWriter=a,this._snapshot=t,this.metadata=new z8(t.hasPendingWrites,t.fromCache),this.query=s}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(s=>{c.call(a,new T8(this._firestore,this._userDataWriter,s.key,s,new z8(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new j(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(s,t){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(n=>{const i=new T8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new z8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(n=>t||n.type!==3).map(n=>{const i=new T8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new z8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);let o=-1,l=-1;return n.type!==0&&(o=r.indexOf(n.doc.key),r=r.delete(n.doc.key)),n.type!==1&&(r=r.add(n.doc),l=r.indexOf(n.doc.key)),{type:xy(n.type),doc:i,oldIndex:o,newIndex:l}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function xy(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class yy extends gy{constructor(c){super(),this.firestore=c}convertBytes(c){return new e5(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new R4(this.firestore,null,a)}}function Sy(e){e=A7(e,$5);const c=A7(e.firestore,Qn),a=zy(c),s=new yy(c);return Vy(e._query),my(a,e._query).then(t=>new by(c,s,e,t))}(function(e,c=!0){(function(a){E4=a})(yg),U8(new v6("firestore",(a,{instanceIdentifier:s,options:t})=>{const r=a.getProvider("app").getImmediate(),n=new Qn(new OL(a.getProvider("auth-internal")),new GL(a.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new L6(i.options.projectId,o)}(r,s),r);return t=Object.assign({useFetchStreams:c},t),n._setSettings(t),n},"PUBLIC").setMultipleInstances(!0)),o4(Da,"3.7.3",e),o4(Da,"3.7.3","esm2017")})();var Ny="firebase",wy="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */o4(Ny,wy,"app");const ky={apiKey:"AIzaSyDT4i6v6Tpn1FLtPMZEKF4ZQdVG6SsjgAw",authDomain:"web-firebase-7cf1e.firebaseapp.com",projectId:"web-firebase-7cf1e",storageBucket:"web-firebase-7cf1e.appspot.com",messagingSenderId:"270734211264",appId:"1:270734211264:web:bd85ae77336b69261a9525",measurementId:"G-RGC2S9M6KZ"},Ay=or(ky),Ty=Cy(Ay),us=RH("profiles",{state:()=>({profiles:[]}),getters:{getProfiles:e=>e.profiles},actions:{async fetchProfile(){const e=await Sy(ry(Ty,"profiles"));this.profiles=e.docs.map(c=>c.data())}}}),Ey={name:"AboutView",data(){return{profiles:[]}},async mounted(){await us().fetchProfile(),this.profiles=us().getProfiles}},Py=C1("link",{rel:"stylesheet",href:"src/assets/style.css"},null,-1),Dy=["href"],Ry={class:"flex flex-col justify-center"},Fy=["src"],Iy={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},_y={class:"font-normal text-gray-700 dark:text-gray-400"},By={class:"font-normal text-gray-700 dark:text-gray-400"},Oy={key:0,class:"font-normal text-gray-700 dark:text-gray-400"},qy={key:1,class:"font-normal text-gray-700 dark:text-gray-400"},Uy={class:"mt-4 border-t-4 border-black border-solid"},$y=["href"],Gy=["href"],Wy=["href"];function jy(e,c,a,s,t,r){const n=E6("font-awesome-icon");return g2(),r3("body",null,[Py,(g2(!0),r3(p2,null,Sd(t.profiles,i=>(g2(),r3("div",{key:i,class:"inline-block w-1/4 mx-12 my-6"},[C1("div",null,[C1("a",{href:i.img,class:"block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"},[C1("div",Ry,[C1("img",{src:i.img,alt:"profile",class:"rounded-full w-auto h-72"},null,8,Fy)]),C1("h5",Iy,s8(i.name),1),C1("p",_y,"\u0E19\u0E32\u0E22"+s8(i.surname)+". ",1),C1("p",By,"\u0E2D\u0E32\u0E22\u0E38 : "+s8(i.age)+". \u0E28\u0E36\u0E01\u0E29\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48 "+s8(i.education)+".",1),i.isStudy?(g2(),r3("p",Oy,"\u0E2A\u0E16\u0E32\u0E19\u0E30 : \u0E01\u0E33\u0E25\u0E31\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32.")):i.isStudy==!1?(g2(),r3("p",qy,"\u0E2A\u0E16\u0E32\u0E19\u0E30 : \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E40\u0E25\u0E49\u0E27.")):Zd("",!0),C1("div",Uy,[C1("a",{href:i.facebook},[N1(n,{icon:"fa-brands fa-facebook",class:"mt-3 ml-36 mr-3 text-3xl"})],8,$y),C1("a",{href:i.ig},[N1(n,{icon:"fa-brands fa-instagram",class:"mr-3 text-3xl"})],8,Gy),C1("a",{href:i.song},[N1(n,{icon:"fa-solid fa-music",class:"text-3xl"})],8,Wy)])],8,Dy)])]))),128))])}const Ky=P6(Ey,[["render",jy]]),Zy=FM({history:cM("/web-project/"),routes:[{path:"/",name:"home",component:fV,meta:{layout:"Main"}},{path:"/about",name:"about",component:Ky,meta:{layout:"Default"}}]});function ms(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function D(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?ms(Object(a),!0).forEach(function(s){I1(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ms(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function a5(e){return a5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a5(e)}function Qy(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function vs(e,c){for(var a=0;a<c.length;a++){var s=c[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function Yy(e,c,a){return c&&vs(e.prototype,c),a&&vs(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function I1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function nc(e,c){return Jy(e)||eS(e,c)||ei(e,c)||sS()}function K6(e){return Xy(e)||cS(e)||ei(e)||aS()}function Xy(e){if(Array.isArray(e))return T7(e)}function Jy(e){if(Array.isArray(e))return e}function cS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eS(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var s=[],t=!0,r=!1,n,i;try{for(a=a.call(e);!(t=(n=a.next()).done)&&(s.push(n.value),!(c&&s.length===c));t=!0);}catch(o){r=!0,i=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}return s}}function ei(e,c){if(!!e){if(typeof e=="string")return T7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T7(e,c)}}function T7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function aS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cs=function(){},ic={},ai={},si=null,ti={mark:Cs,measure:Cs};try{typeof window<"u"&&(ic=window),typeof document<"u"&&(ai=document),typeof MutationObserver<"u"&&(si=MutationObserver),typeof performance<"u"&&(ti=performance)}catch{}var tS=ic.navigator||{},zs=tS.userAgent,ps=zs===void 0?"":zs,z3=ic,M1=ai,ds=si,p8=ti;z3.document;var Y2=!!M1.documentElement&&!!M1.head&&typeof M1.addEventListener=="function"&&typeof M1.createElement=="function",ri=~ps.indexOf("MSIE")||~ps.indexOf("Trident/"),d8,H8,M8,V8,g8,j2="___FONT_AWESOME___",E7=16,ni="fa",ii="svg-inline--fa",U3="data-fa-i2svg",P7="data-fa-pseudo-element",rS="data-fa-pseudo-element-pending",oc="data-prefix",lc="data-icon",Hs="fontawesome-i2svg",nS="async",iS=["HTML","HEAD","STYLE","SCRIPT"],oi=function(){try{return!0}catch{return!1}}(),H1="classic",y1="sharp",fc=[H1,y1];function Z6(e){return new Proxy(e,{get:function(a,s){return s in a?a[s]:a[H1]}})}var S6=Z6((d8={},I1(d8,H1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),I1(d8,y1,{fa:"solid",fass:"solid","fa-solid":"solid"}),d8)),N6=Z6((H8={},I1(H8,H1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I1(H8,y1,{solid:"fass"}),H8)),w6=Z6((M8={},I1(M8,H1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I1(M8,y1,{fass:"fa-solid"}),M8)),oS=Z6((V8={},I1(V8,H1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I1(V8,y1,{"fa-solid":"fass"}),V8)),lS=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,li="fa-layers-text",fS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hS=Z6((g8={},I1(g8,H1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I1(g8,y1,{900:"fass"}),g8)),fi=[1,2,3,4,5,6,7,8,9,10],uS=fi.concat([11,12,13,14,15,16,17,18,19,20]),mS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],A3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k6=new Set;Object.keys(N6[H1]).map(k6.add.bind(k6));Object.keys(N6[y1]).map(k6.add.bind(k6));var vS=[].concat(fc,K6(k6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A3.GROUP,A3.SWAP_OPACITY,A3.PRIMARY,A3.SECONDARY]).concat(fi.map(function(e){return"".concat(e,"x")})).concat(uS.map(function(e){return"w-".concat(e)})),t6=z3.FontAwesomeConfig||{};function CS(e){var c=M1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function zS(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(M1&&typeof M1.querySelector=="function"){var pS=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pS.forEach(function(e){var c=nc(e,2),a=c[0],s=c[1],t=zS(CS(a));t!=null&&(t6[s]=t)})}var hi={styleDefault:"solid",familyDefault:"classic",cssPrefix:ni,replacementClass:ii,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};t6.familyPrefix&&(t6.cssPrefix=t6.familyPrefix);var x4=D(D({},hi),t6);x4.autoReplaceSvg||(x4.observeMutations=!1);var F={};Object.keys(hi).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(a){x4[e]=a,r6.forEach(function(s){return s(F)})},get:function(){return x4[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(c){x4.cssPrefix=c,r6.forEach(function(a){return a(F)})},get:function(){return x4.cssPrefix}});z3.FontAwesomeConfig=F;var r6=[];function dS(e){return r6.push(e),function(){r6.splice(r6.indexOf(e),1)}}var e3=E7,R2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HS(e){if(!(!e||!Y2)){var c=M1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=M1.head.childNodes,s=null,t=a.length-1;t>-1;t--){var r=a[t],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=r)}return M1.head.insertBefore(c,s),e}}var MS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A6(){for(var e=12,c="";e-- >0;)c+=MS[Math.random()*62|0];return c}function F4(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function hc(e){return e.classList?F4(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function ui(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function VS(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(ui(e[a]),'" ')},"").trim()}function G5(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function uc(e){return e.size!==R2.size||e.x!==R2.x||e.y!==R2.y||e.rotate!==R2.rotate||e.flipX||e.flipY}function gS(e){var c=e.transform,a=e.containerWidth,s=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(n," ").concat(i)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:t,inner:o,path:l}}function LS(e){var c=e.transform,a=e.width,s=a===void 0?E7:a,t=e.height,r=t===void 0?E7:t,n=e.startCentered,i=n===void 0?!1:n,o="";return i&&ri?o+="translate(".concat(c.x/e3-s/2,"em, ").concat(c.y/e3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(c.x/e3,"em), calc(-50% + ").concat(c.y/e3,"em)) "):o+="translate(".concat(c.x/e3,"em, ").concat(c.y/e3,"em) "),o+="scale(".concat(c.size/e3*(c.flipX?-1:1),", ").concat(c.size/e3*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var bS=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
    transition-delay: 0s;
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
}`;function mi(){var e=ni,c=ii,a=F.cssPrefix,s=F.replacementClass,t=bS;if(a!==e||s!==c){var r=new RegExp("\\.".concat(e,"\\-"),"g"),n=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");t=t.replace(r,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(i,".".concat(s))}return t}var Ms=!1;function R0(){F.autoAddCss&&!Ms&&(HS(mi()),Ms=!0)}var xS={mixout:function(){return{dom:{css:mi,insertCss:R0}}},hooks:function(){return{beforeDOMElementCreation:function(){R0()},beforeI2svg:function(){R0()}}}},K2=z3||{};K2[j2]||(K2[j2]={});K2[j2].styles||(K2[j2].styles={});K2[j2].hooks||(K2[j2].hooks={});K2[j2].shims||(K2[j2].shims=[]);var x2=K2[j2],vi=[],yS=function e(){M1.removeEventListener("DOMContentLoaded",e),s5=1,vi.map(function(c){return c()})},s5=!1;Y2&&(s5=(M1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M1.readyState),s5||M1.addEventListener("DOMContentLoaded",yS));function SS(e){!Y2||(s5?setTimeout(e,0):vi.push(e))}function Q6(e){var c=e.tag,a=e.attributes,s=a===void 0?{}:a,t=e.children,r=t===void 0?[]:t;return typeof e=="string"?ui(e):"<".concat(c," ").concat(VS(s),">").concat(r.map(Q6).join(""),"</").concat(c,">")}function Vs(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var NS=function(c,a){return function(s,t,r,n){return c.call(a,s,t,r,n)}},F0=function(c,a,s,t){var r=Object.keys(c),n=r.length,i=t!==void 0?NS(a,t):a,o,l,f;for(s===void 0?(o=1,f=c[r[0]]):(o=0,f=s);o<n;o++)l=r[o],f=i(f,c[l],l,c);return f};function wS(e){for(var c=[],a=0,s=e.length;a<s;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<s){var r=e.charCodeAt(a++);(r&64512)==56320?c.push(((t&1023)<<10)+(r&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function D7(e){var c=wS(e);return c.length===1?c[0].toString(16):null}function kS(e,c){var a=e.length,s=e.charCodeAt(c),t;return s>=55296&&s<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(s-55296)*1024+t-56320+65536:s}function gs(e){return Object.keys(e).reduce(function(c,a){var s=e[a],t=!!s.icon;return t?c[s.iconName]=s.icon:c[a]=s,c},{})}function R7(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,t=s===void 0?!1:s,r=gs(c);typeof x2.hooks.addPack=="function"&&!t?x2.hooks.addPack(e,gs(c)):x2.styles[e]=D(D({},x2.styles[e]||{}),r),e==="fas"&&R7("fa",c)}var L8,b8,x8,e4=x2.styles,AS=x2.shims,TS=(L8={},I1(L8,H1,Object.values(w6[H1])),I1(L8,y1,Object.values(w6[y1])),L8),mc=null,Ci={},zi={},pi={},di={},Hi={},ES=(b8={},I1(b8,H1,Object.keys(S6[H1])),I1(b8,y1,Object.keys(S6[y1])),b8);function PS(e){return~vS.indexOf(e)}function DS(e,c){var a=c.split("-"),s=a[0],t=a.slice(1).join("-");return s===e&&t!==""&&!PS(t)?t:null}var Mi=function(){var c=function(r){return F0(e4,function(n,i,o){return n[o]=F0(i,r,{}),n},{})};Ci=c(function(t,r,n){if(r[3]&&(t[r[3]]=n),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){t[o.toString(16)]=n})}return t}),zi=c(function(t,r,n){if(t[n]=n,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){t[o]=n})}return t}),Hi=c(function(t,r,n){var i=r[2];return t[n]=n,i.forEach(function(o){t[o]=n}),t});var a="far"in e4||F.autoFetchSvg,s=F0(AS,function(t,r){var n=r[0],i=r[1],o=r[2];return i==="far"&&!a&&(i="fas"),typeof n=="string"&&(t.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(t.unicodes[n.toString(16)]={prefix:i,iconName:o}),t},{names:{},unicodes:{}});pi=s.names,di=s.unicodes,mc=W5(F.styleDefault,{family:F.familyDefault})};dS(function(e){mc=W5(e.styleDefault,{family:F.familyDefault})});Mi();function vc(e,c){return(Ci[e]||{})[c]}function RS(e,c){return(zi[e]||{})[c]}function T3(e,c){return(Hi[e]||{})[c]}function Vi(e){return pi[e]||{prefix:null,iconName:null}}function FS(e){var c=di[e],a=vc("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function p3(){return mc}var Cc=function(){return{prefix:null,iconName:null,rest:[]}};function W5(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,s=a===void 0?H1:a,t=S6[s][e],r=N6[s][e]||N6[s][t],n=e in x2.styles?e:null;return r||n||null}var Ls=(x8={},I1(x8,H1,Object.keys(w6[H1])),I1(x8,y1,Object.keys(w6[y1])),x8);function j5(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,t=s===void 0?!1:s,r=(c={},I1(c,H1,"".concat(F.cssPrefix,"-").concat(H1)),I1(c,y1,"".concat(F.cssPrefix,"-").concat(y1)),c),n=null,i=H1;(e.includes(r[H1])||e.some(function(l){return Ls[H1].includes(l)}))&&(i=H1),(e.includes(r[y1])||e.some(function(l){return Ls[y1].includes(l)}))&&(i=y1);var o=e.reduce(function(l,f){var h=DS(F.cssPrefix,f);if(e4[f]?(f=TS[i].includes(f)?oS[i][f]:f,n=f,l.prefix=f):ES[i].indexOf(f)>-1?(n=f,l.prefix=W5(f,{family:i})):h?l.iconName=h:f!==F.replacementClass&&f!==r[H1]&&f!==r[y1]&&l.rest.push(f),!t&&l.prefix&&l.iconName){var m=n==="fa"?Vi(l.iconName):{},C=T3(l.prefix,l.iconName);m.prefix&&(n=null),l.iconName=m.iconName||C||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!e4.far&&e4.fas&&!F.autoFetchSvg&&(l.prefix="fas")}return l},Cc());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===y1&&(e4.fass||F.autoFetchSvg)&&(o.prefix="fass",o.iconName=T3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=p3()||"fas"),o}var IS=function(){function e(){Qy(this,e),this.definitions={}}return Yy(e,[{key:"add",value:function(){for(var a=this,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];var n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(i){a.definitions[i]=D(D({},a.definitions[i]||{}),n[i]),R7(i,n[i]);var o=w6[H1][i];o&&R7(o,n[i]),Mi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var t=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(t).map(function(r){var n=t[r],i=n.prefix,o=n.iconName,l=n.icon,f=l[2];a[i]||(a[i]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(a[i][h]=l)}),a[i][o]=l}),a}}]),e}(),bs=[],a4={},u4={},_S=Object.keys(u4);function BS(e,c){var a=c.mixoutsTo;return bs=e,a4={},Object.keys(u4).forEach(function(s){_S.indexOf(s)===-1&&delete u4[s]}),bs.forEach(function(s){var t=s.mixout?s.mixout():{};if(Object.keys(t).forEach(function(n){typeof t[n]=="function"&&(a[n]=t[n]),a5(t[n])==="object"&&Object.keys(t[n]).forEach(function(i){a[n]||(a[n]={}),a[n][i]=t[n][i]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(n){a4[n]||(a4[n]=[]),a4[n].push(r[n])})}s.provides&&s.provides(u4)}),a}function F7(e,c){for(var a=arguments.length,s=new Array(a>2?a-2:0),t=2;t<a;t++)s[t-2]=arguments[t];var r=a4[e]||[];return r.forEach(function(n){c=n.apply(null,[c].concat(s))}),c}function $3(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),s=1;s<c;s++)a[s-1]=arguments[s];var t=a4[e]||[];t.forEach(function(r){r.apply(null,a)})}function Z2(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return u4[e]?u4[e].apply(null,c):void 0}function I7(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||p3();if(!!c)return c=T3(a,c)||c,Vs(gi.definitions,a,c)||Vs(x2.styles,a,c)}var gi=new IS,OS=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,$3("noAuto")},qS={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y2?($3("beforeI2svg",c),Z2("pseudoElements2svg",c),Z2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,SS(function(){$S({autoReplaceSvgRoot:a}),$3("watch",c)})}},US={icon:function(c){if(c===null)return null;if(a5(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:T3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=W5(c[0]);return{prefix:s,iconName:T3(s,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(F.cssPrefix,"-"))>-1||c.match(lS))){var t=j5(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||p3(),iconName:T3(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var r=p3();return{prefix:r,iconName:T3(r,c)||c}}}},C2={noAuto:OS,config:F,dom:qS,parse:US,library:gi,findIconDefinition:I7,toHtml:Q6},$S=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,s=a===void 0?M1:a;(Object.keys(x2.styles).length>0||F.autoFetchSvg)&&Y2&&F.autoReplaceSvg&&C2.dom.i2svg({node:s})};function K5(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(s){return Q6(s)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Y2){var s=M1.createElement("div");return s.innerHTML=e.html,s.children}}}),e}function GS(e){var c=e.children,a=e.main,s=e.mask,t=e.attributes,r=e.styles,n=e.transform;if(uc(n)&&a.found&&!s.found){var i=a.width,o=a.height,l={x:i/o/2,y:.5};t.style=G5(D(D({},r),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function WS(e){var c=e.prefix,a=e.iconName,s=e.children,t=e.attributes,r=e.symbol,n=r===!0?"".concat(c,"-").concat(F.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},t),{},{id:n}),children:s}]}]}function zc(e){var c=e.icons,a=c.main,s=c.mask,t=e.prefix,r=e.iconName,n=e.transform,i=e.symbol,o=e.title,l=e.maskId,f=e.titleId,h=e.extra,m=e.watchable,C=m===void 0?!1:m,d=s.found?s:a,L=d.width,w=d.height,p=t==="fak",M=[F.replacementClass,r?"".concat(F.cssPrefix,"-").concat(r):""].filter(function(V1){return h.classes.indexOf(V1)===-1}).filter(function(V1){return V1!==""||!!V1}).concat(h.classes).join(" "),y={children:[],attributes:D(D({},h.attributes),{},{"data-prefix":t,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(w)})},_=p&&!~h.classes.indexOf("fa-fw")?{width:"".concat(L/w*16*.0625,"em")}:{};C&&(y.attributes[U3]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||A6())},children:[o]}),delete y.attributes.title);var $=D(D({},y),{},{prefix:t,iconName:r,main:a,mask:s,maskId:l,transform:n,symbol:i,styles:D(D({},_),h.styles)}),i1=s.found&&a.found?Z2("generateAbstractMask",$)||{children:[],attributes:{}}:Z2("generateAbstractIcon",$)||{children:[],attributes:{}},W=i1.children,c1=i1.attributes;return $.children=W,$.attributes=c1,i?WS($):GS($)}function xs(e){var c=e.content,a=e.width,s=e.height,t=e.transform,r=e.title,n=e.extra,i=e.watchable,o=i===void 0?!1:i,l=D(D(D({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});o&&(l[U3]="");var f=D({},n.styles);uc(t)&&(f.transform=LS({transform:t,startCentered:!0,width:a,height:s}),f["-webkit-transform"]=f.transform);var h=G5(f);h.length>0&&(l.style=h);var m=[];return m.push({tag:"span",attributes:l,children:[c]}),r&&m.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),m}function jS(e){var c=e.content,a=e.title,s=e.extra,t=D(D(D({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=G5(s.styles);r.length>0&&(t.style=r);var n=[];return n.push({tag:"span",attributes:t,children:[c]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var I0=x2.styles;function _7(e){var c=e[0],a=e[1],s=e.slice(4),t=nc(s,1),r=t[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(A3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(A3.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(A3.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:a,icon:n}}var KS={found:!1,width:512,height:512};function ZS(e,c){!oi&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function B7(e,c){var a=c;return c==="fa"&&F.styleDefault!==null&&(c=p3()),new Promise(function(s,t){if(Z2("missingIconAbstract"),a==="fa"){var r=Vi(e)||{};e=r.iconName||e,c=r.prefix||c}if(e&&c&&I0[c]&&I0[c][e]){var n=I0[c][e];return s(_7(n))}ZS(e,c),s(D(D({},KS),{},{icon:F.showMissingIcons&&e?Z2("missingIconAbstract")||{}:{}}))})}var ys=function(){},O7=F.measurePerformance&&p8&&p8.mark&&p8.measure?p8:{mark:ys,measure:ys},W4='FA "6.2.0"',QS=function(c){return O7.mark("".concat(W4," ").concat(c," begins")),function(){return Li(c)}},Li=function(c){O7.mark("".concat(W4," ").concat(c," ends")),O7.measure("".concat(W4," ").concat(c),"".concat(W4," ").concat(c," begins"),"".concat(W4," ").concat(c," ends"))},pc={begin:QS,end:Li},E8=function(){};function Ss(e){var c=e.getAttribute?e.getAttribute(U3):null;return typeof c=="string"}function YS(e){var c=e.getAttribute?e.getAttribute(oc):null,a=e.getAttribute?e.getAttribute(lc):null;return c&&a}function XS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function JS(){if(F.autoReplaceSvg===!0)return P8.replace;var e=P8[F.autoReplaceSvg];return e||P8.replace}function cN(e){return M1.createElementNS("http://www.w3.org/2000/svg",e)}function eN(e){return M1.createElement(e)}function bi(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,s=a===void 0?e.tag==="svg"?cN:eN:a;if(typeof e=="string")return M1.createTextNode(e);var t=s(e.tag);Object.keys(e.attributes||[]).forEach(function(n){t.setAttribute(n,e.attributes[n])});var r=e.children||[];return r.forEach(function(n){t.appendChild(bi(n,{ceFn:s}))}),t}function aN(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var P8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(bi(t),a)}),a.getAttribute(U3)===null&&F.keepOriginalSource){var s=M1.createComment(aN(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(c){var a=c[0],s=c[1];if(~hc(a).indexOf(F.replacementClass))return P8.replace(c);var t=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(i,o){return o===F.replacementClass||o.match(t)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var n=s.map(function(i){return Q6(i)}).join(`
`);a.setAttribute(U3,""),a.innerHTML=n}};function Ns(e){e()}function xi(e,c){var a=typeof c=="function"?c:E8;if(e.length===0)a();else{var s=Ns;F.mutateApproach===nS&&(s=z3.requestAnimationFrame||Ns),s(function(){var t=JS(),r=pc.begin("mutate");e.map(t),r(),a()})}}var dc=!1;function yi(){dc=!0}function q7(){dc=!1}var t5=null;function ws(e){if(!!ds&&!!F.observeMutations){var c=e.treeCallback,a=c===void 0?E8:c,s=e.nodeCallback,t=s===void 0?E8:s,r=e.pseudoElementsCallback,n=r===void 0?E8:r,i=e.observeMutationsRoot,o=i===void 0?M1:i;t5=new ds(function(l){if(!dc){var f=p3();F4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ss(h.addedNodes[0])&&(F.searchPseudoElements&&n(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&F.searchPseudoElements&&n(h.target.parentNode),h.type==="attributes"&&Ss(h.target)&&~mS.indexOf(h.attributeName))if(h.attributeName==="class"&&YS(h.target)){var m=j5(hc(h.target)),C=m.prefix,d=m.iconName;h.target.setAttribute(oc,C||f),d&&h.target.setAttribute(lc,d)}else XS(h.target)&&t(h.target)})}}),Y2&&t5.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sN(){!t5||t5.disconnect()}function tN(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(s,t){var r=t.split(":"),n=r[0],i=r.slice(1);return n&&i.length>0&&(s[n]=i.join(":").trim()),s},{})),a}function rN(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",t=j5(hc(e));return t.prefix||(t.prefix=p3()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&s.length>0&&(t.iconName=RS(t.prefix,e.innerText)||vc(t.prefix,D7(e.innerText))),!t.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function nN(e){var c=F4(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{}),a=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return F.autoA11y&&(a?c["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(s||A6()):(c["aria-hidden"]="true",c.focusable="false")),c}function iN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ks(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=rN(e),s=a.iconName,t=a.prefix,r=a.rest,n=nN(e),i=F7("parseNodeAttributes",{},e),o=c.styleParser?tN(e):[];return D({iconName:s,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:R2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:n}},i)}var oN=x2.styles;function Si(e){var c=F.autoReplaceSvg==="nest"?ks(e,{styleParser:!1}):ks(e);return~c.extra.classes.indexOf(li)?Z2("generateLayersText",e,c):Z2("generateSvgReplacementMutation",e,c)}var d3=new Set;fc.map(function(e){d3.add("fa-".concat(e))});Object.keys(S6[H1]).map(d3.add.bind(d3));Object.keys(S6[y1]).map(d3.add.bind(d3));d3=K6(d3);function As(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y2)return Promise.resolve();var a=M1.documentElement.classList,s=function(h){return a.add("".concat(Hs,"-").concat(h))},t=function(h){return a.remove("".concat(Hs,"-").concat(h))},r=F.autoFetchSvg?d3:fc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(oN));r.includes("fa")||r.push("fa");var n=[".".concat(li,":not([").concat(U3,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(U3,"])")})).join(", ");if(n.length===0)return Promise.resolve();var i=[];try{i=F4(e.querySelectorAll(n))}catch{}if(i.length>0)s("pending"),t("complete");else return Promise.resolve();var o=pc.begin("onTree"),l=i.reduce(function(f,h){try{var m=Si(h);m&&f.push(m)}catch(C){oi||C.name==="MissingIcon"&&console.error(C)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(m){xi(m,function(){s("active"),s("complete"),t("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(m){o(),h(m)})})}function lN(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Si(e).then(function(a){a&&xi([a],c)})}function fN(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:I7(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:I7(t||{})),e(s,D(D({},a),{},{mask:t}))}}var hN=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,t=s===void 0?R2:s,r=a.symbol,n=r===void 0?!1:r,i=a.mask,o=i===void 0?null:i,l=a.maskId,f=l===void 0?null:l,h=a.title,m=h===void 0?null:h,C=a.titleId,d=C===void 0?null:C,L=a.classes,w=L===void 0?[]:L,p=a.attributes,M=p===void 0?{}:p,y=a.styles,_=y===void 0?{}:y;if(!!c){var $=c.prefix,i1=c.iconName,W=c.icon;return K5(D({type:"icon"},c),function(){return $3("beforeDOMElementCreation",{iconDefinition:c,params:a}),F.autoA11y&&(m?M["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(d||A6()):(M["aria-hidden"]="true",M.focusable="false")),zc({icons:{main:_7(W),mask:o?_7(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:i1,transform:D(D({},R2),t),symbol:n,title:m,maskId:f,titleId:d,extra:{attributes:M,styles:_,classes:w}})})}},uN={mixout:function(){return{icon:fN(hN)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=As,a.nodeCallback=lN,a}}},provides:function(c){c.i2svg=function(a){var s=a.node,t=s===void 0?M1:s,r=a.callback,n=r===void 0?function(){}:r;return As(t,n)},c.generateSvgReplacementMutation=function(a,s){var t=s.iconName,r=s.title,n=s.titleId,i=s.prefix,o=s.transform,l=s.symbol,f=s.mask,h=s.maskId,m=s.extra;return new Promise(function(C,d){Promise.all([B7(t,i),f.iconName?B7(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var w=nc(L,2),p=w[0],M=w[1];C([a,zc({icons:{main:p,mask:M},prefix:i,iconName:t,transform:o,symbol:l,maskId:h,title:r,titleId:n,extra:m,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.transform,i=a.styles,o=G5(i);o.length>0&&(t.style=o);var l;return uc(n)&&(l=Z2("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:t}}}},mN={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.classes,r=t===void 0?[]:t;return K5({type:"layer"},function(){$3("beforeDOMElementCreation",{assembler:a,params:s});var n=[];return a(function(i){Array.isArray(i)?i.map(function(o){n=n.concat(o.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(K6(r)).join(" ")},children:n}]})}}}},vN={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.title,r=t===void 0?null:t,n=s.classes,i=n===void 0?[]:n,o=s.attributes,l=o===void 0?{}:o,f=s.styles,h=f===void 0?{}:f;return K5({type:"counter",content:a},function(){return $3("beforeDOMElementCreation",{content:a,params:s}),jS({content:a.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(K6(i))}})})}}}},CN={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.transform,r=t===void 0?R2:t,n=s.title,i=n===void 0?null:n,o=s.classes,l=o===void 0?[]:o,f=s.attributes,h=f===void 0?{}:f,m=s.styles,C=m===void 0?{}:m;return K5({type:"text",content:a},function(){return $3("beforeDOMElementCreation",{content:a,params:s}),xs({content:a,transform:D(D({},R2),r),title:i,extra:{attributes:h,styles:C,classes:["".concat(F.cssPrefix,"-layers-text")].concat(K6(l))}})})}}},provides:function(c){c.generateLayersText=function(a,s){var t=s.title,r=s.transform,n=s.extra,i=null,o=null;if(ri){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,o=f.height/l}return F.autoA11y&&!t&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,xs({content:a.innerHTML,width:i,height:o,transform:r,title:t,extra:n,watchable:!0})])}}},zN=new RegExp('"',"ug"),Ts=[1105920,1112319];function pN(e){var c=e.replace(zN,""),a=kS(c,0),s=a>=Ts[0]&&a<=Ts[1],t=c.length===2?c[0]===c[1]:!1;return{value:D7(t?c[0]:c),isSecondary:s||t}}function Es(e,c){var a="".concat(rS).concat(c.replace(":","-"));return new Promise(function(s,t){if(e.getAttribute(a)!==null)return s();var r=F4(e.children),n=r.filter(function(W){return W.getAttribute(P7)===c})[0],i=z3.getComputedStyle(e,c),o=i.getPropertyValue("font-family").match(fS),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(n&&!o)return e.removeChild(n),s();if(o&&f!=="none"&&f!==""){var h=i.getPropertyValue("content"),m=~["Sharp"].indexOf(o[2])?y1:H1,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?N6[m][o[2].toLowerCase()]:hS[m][l],d=pN(h),L=d.value,w=d.isSecondary,p=o[0].startsWith("FontAwesome"),M=vc(C,L),y=M;if(p){var _=FS(L);_.iconName&&_.prefix&&(M=_.iconName,C=_.prefix)}if(M&&!w&&(!n||n.getAttribute(oc)!==C||n.getAttribute(lc)!==y)){e.setAttribute(a,y),n&&e.removeChild(n);var $=iN(),i1=$.extra;i1.attributes[P7]=c,B7(M,C).then(function(W){var c1=zc(D(D({},$),{},{icons:{main:W,mask:Cc()},prefix:C,iconName:y,extra:i1,watchable:!0})),V1=M1.createElement("svg");c==="::before"?e.insertBefore(V1,e.firstChild):e.appendChild(V1),V1.outerHTML=c1.map(function(_1){return Q6(_1)}).join(`
`),e.removeAttribute(a),s()}).catch(t)}else s()}else s()})}function dN(e){return Promise.all([Es(e,"::before"),Es(e,"::after")])}function HN(e){return e.parentNode!==document.head&&!~iS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(P7)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ps(e){if(!!Y2)return new Promise(function(c,a){var s=F4(e.querySelectorAll("*")).filter(HN).map(dN),t=pc.begin("searchPseudoElements");yi(),Promise.all(s).then(function(){t(),q7(),c()}).catch(function(){t(),q7(),a()})})}var MN={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ps,a}}},provides:function(c){c.pseudoElements2svg=function(a){var s=a.node,t=s===void 0?M1:s;F.searchPseudoElements&&Ps(t)}}},Ds=!1,VN={mixout:function(){return{dom:{unwatch:function(){yi(),Ds=!0}}}},hooks:function(){return{bootstrap:function(){ws(F7("mutationObserverCallbacks",{}))},noAuto:function(){sN()},watch:function(a){var s=a.observeMutationsRoot;Ds?q7():ws(F7("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Rs=function(c){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(s,t){var r=t.toLowerCase().split("-"),n=r[0],i=r.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},a)},gN={mixout:function(){return{parse:{transform:function(a){return Rs(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-transform");return t&&(a.transform=Rs(t)),a}}},provides:function(c){c.generateAbstractTransformGrouping=function(a){var s=a.main,t=a.transform,r=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),l="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},m={transform:"translate(".concat(n/2*-1," -256)")},C={outer:i,inner:h,path:m};return{tag:"g",attributes:D({},C.outer),children:[{tag:"g",attributes:D({},C.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:D(D({},s.icon.attributes),C.path)}]}]}}}},_0={x:0,y:0,width:"100%",height:"100%"};function Fs(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function LN(e){return e.tag==="g"?e.children:[e]}var bN={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-mask"),r=t?j5(t.split(" ").map(function(n){return n.trim()})):Cc();return r.prefix||(r.prefix=p3()),a.mask=r,a.maskId=s.getAttribute("data-fa-mask-id"),a}}},provides:function(c){c.generateAbstractMask=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.mask,i=a.maskId,o=a.transform,l=r.width,f=r.icon,h=n.width,m=n.icon,C=gS({transform:o,containerWidth:h,iconWidth:l}),d={tag:"rect",attributes:D(D({},_0),{},{fill:"white"})},L=f.children?{children:f.children.map(Fs)}:{},w={tag:"g",attributes:D({},C.inner),children:[Fs(D({tag:f.tag,attributes:D(D({},f.attributes),C.path)},L))]},p={tag:"g",attributes:D({},C.outer),children:[w]},M="mask-".concat(i||A6()),y="clip-".concat(i||A6()),_={tag:"mask",attributes:D(D({},_0),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,p]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:LN(m)},_]};return s.push($,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(M,")")},_0)}),{children:s,attributes:t}}}},xN={provides:function(c){var a=!1;z3.matchMedia&&(a=z3.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var s=[],t={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:D(D({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=D(D({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:D(D({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||i.children.push({tag:"animate",attributes:D(D({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:D(D({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:D(D({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||s.push({tag:"path",attributes:D(D({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},yN={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return a.symbol=r,a}}}},SN=[xS,uN,mN,vN,CN,MN,VN,gN,bN,xN,yN];BS(SN,{mixoutsTo:C2});C2.noAuto;var Ni=C2.config,Hc=C2.library;C2.dom;var r5=C2.parse;C2.findIconDefinition;C2.toHtml;var NN=C2.icon;C2.layer;var wN=C2.text;C2.counter;function Is(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function L2(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?Is(Object(a),!0).forEach(function(s){n2(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Is(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function n5(e){return n5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},n5(e)}function n2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function kN(e,c){if(e==null)return{};var a={},s=Object.keys(e),t,r;for(r=0;r<s.length;r++)t=s[r],!(c.indexOf(t)>=0)&&(a[t]=e[t]);return a}function AN(e,c){if(e==null)return{};var a=kN(e,c),s,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],!(c.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(a[s]=e[s]))}return a}function U7(e){return TN(e)||EN(e)||PN(e)||DN()}function TN(e){if(Array.isArray(e))return $7(e)}function EN(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function PN(e,c){if(!!e){if(typeof e=="string")return $7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $7(e,c)}}function $7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function DN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.