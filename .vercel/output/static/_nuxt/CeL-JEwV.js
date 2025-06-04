const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CFWCl9um.js","./DNl96Xc8.js","./DU8Dtl3C.js","./index.J1nj716H.css","./VzOZKPrk.js","./nuxt-icon.BdpeBhx2.css","./CmKSuU79.js","./kd3IRPzc.js","./error-404.4oxyXxx0.css","./D_n6ivnH.js","./error-500.CZqNkBuR.css"])))=>i.map(i=>d[i]);
var e0=Object.defineProperty;var t0=(t,e,n)=>e in t?e0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ts=(t,e,n)=>t0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function If(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},li=[],Mn=()=>{},n0=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bf=t=>t.startsWith("onUpdate:"),gt=Object.assign,Cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},s0=Object.prototype.hasOwnProperty,Oe=(t,e)=>s0.call(t,e),ue=Array.isArray,ci=t=>ha(t)==="[object Map]",xy=t=>ha(t)==="[object Set]",r0=t=>ha(t)==="[object RegExp]",fe=t=>typeof t=="function",ze=t=>typeof t=="string",fs=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Af=t=>(Be(t)||fe(t))&&fe(t.then)&&fe(t.catch),Ly=Object.prototype.toString,ha=t=>Ly.call(t),i0=t=>ha(t).slice(8,-1),Vy=t=>ha(t)==="[object Object]",Rf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=If(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},o0=/-(\w)/g,hn=Ec(t=>t.replace(o0,(e,n)=>n?n.toUpperCase():"")),a0=/\B([A-Z])/g,xr=Ec(t=>t.replace(a0,"-$1").toLowerCase()),Tc=Ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),Iu=Ec(t=>t?`on${Tc(t)}`:""),Ls=(t,e)=>!Object.is(t,e),Io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fy=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},l0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Uy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let lg;const wc=()=>lg||(lg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?f0(s):Ic(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ze(t)||Be(t))return t}const c0=/;(?![^(]*\))/g,u0=/:([^]+)/,h0=/\/\*[^]*?\*\//g;function f0(t){const e={};return t.replace(h0,"").split(c0).forEach(n=>{if(n){const s=n.split(u0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bc(t){let e="";if(ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const s=bc(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function d0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=bc(e)),n&&(t.style=Ic(n)),t}const p0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g0=If(p0);function By(t){return!!t||t===""}const Hy=t=>!!(t&&t.__v_isRef===!0),m0=t=>ze(t)?t:t==null?"":ue(t)||Be(t)&&(t.toString===Ly||!fe(t.toString))?Hy(t)?m0(t.value):JSON.stringify(t,jy,2):String(t),jy=(t,e)=>Hy(e)?jy(t,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[bu(s,i)+" =>"]=r,n),{})}:xy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bu(n))}:fs(e)?bu(e):Be(e)&&!ue(e)&&!Vy(e)?String(e):e,bu=(t,e="")=>{var n;return fs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class $y{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Wy(t){return new $y(t)}function qy(){return Wt}let Ue;const Cu=new WeakSet;class Ky{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cu.has(this)&&(Cu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cg(this),Qy(this);const e=Ue,n=Tn;Ue=this,Tn=!0;try{return this.fn()}finally{Yy(this),Ue=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kf(e);this.deps=this.depsTail=void 0,cg(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lh(this)&&this.run()}get dirty(){return lh(this)}}let zy=0,bo,Co;function Gy(t,e=!1){if(t.flags|=8,e){t.next=Co,Co=t;return}t.next=bo,bo=t}function Sf(){zy++}function Pf(){if(--zy>0)return;if(Co){let e=Co;for(Co=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bo;){let e=bo;for(bo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yy(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),kf(s),_0(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function lh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$o)||(t.globalVersion=$o,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lh(t))))return;t.flags|=2;const e=t.dep,n=Ue,s=Tn;Ue=t,Tn=!0;try{Qy(t);const r=t.fn(t._value);(e.version===0||Ls(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ue=n,Tn=s,Yy(t),t.flags&=-3}}function kf(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)kf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const Xy=[];function ns(){Xy.push(Tn),Tn=!1}function ss(){const t=Xy.pop();Tn=t===void 0?!0:t}function cg(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let $o=0;class y0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!Tn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new y0(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Zy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=s)}return n}trigger(e){this.version++,$o++,this.notify(e)}notify(e){Sf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pf()}}}function Zy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Zy(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Al=new WeakMap,yr=Symbol(""),ch=Symbol(""),Wo=Symbol("");function Pt(t,e,n){if(Tn&&Ue){let s=Al.get(t);s||Al.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Nf),r.map=s,r.key=n),r.track()}}function Qn(t,e,n,s,r,i){const o=Al.get(t);if(!o){$o++;return}const a=c=>{c&&c.trigger()};if(Sf(),e==="clear")o.forEach(a);else{const c=ue(t),u=c&&Rf(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,p)=>{(p==="length"||p===Wo||!fs(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Wo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(yr)),ci(t)&&a(o.get(ch)));break;case"delete":c||(a(o.get(yr)),ci(t)&&a(o.get(ch)));break;case"set":ci(t)&&a(o.get(yr));break}}Pf()}function v0(t,e){const n=Al.get(t);return n&&n.get(e)}function Qr(t){const e=Pe(t);return e===t?e:(Pt(e,"iterate",Wo),cn(t)?e:e.map(vt))}function Cc(t){return Pt(t=Pe(t),"iterate",Wo),t}const E0={__proto__:null,[Symbol.iterator](){return Au(this,Symbol.iterator,vt)},concat(...t){return Qr(this).concat(...t.map(e=>ue(e)?Qr(e):e))},entries(){return Au(this,"entries",t=>(t[1]=vt(t[1]),t))},every(t,e){return Wn(this,"every",t,e,void 0,arguments)},filter(t,e){return Wn(this,"filter",t,e,n=>n.map(vt),arguments)},find(t,e){return Wn(this,"find",t,e,vt,arguments)},findIndex(t,e){return Wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wn(this,"findLast",t,e,vt,arguments)},findLastIndex(t,e){return Wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ru(this,"includes",t)},indexOf(...t){return Ru(this,"indexOf",t)},join(t){return Qr(this).join(t)},lastIndexOf(...t){return Ru(this,"lastIndexOf",t)},map(t,e){return Wn(this,"map",t,e,void 0,arguments)},pop(){return lo(this,"pop")},push(...t){return lo(this,"push",t)},reduce(t,...e){return ug(this,"reduce",t,e)},reduceRight(t,...e){return ug(this,"reduceRight",t,e)},shift(){return lo(this,"shift")},some(t,e){return Wn(this,"some",t,e,void 0,arguments)},splice(...t){return lo(this,"splice",t)},toReversed(){return Qr(this).toReversed()},toSorted(t){return Qr(this).toSorted(t)},toSpliced(...t){return Qr(this).toSpliced(...t)},unshift(...t){return lo(this,"unshift",t)},values(){return Au(this,"values",vt)}};function Au(t,e,n){const s=Cc(t),r=s[e]();return s!==t&&!cn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const T0=Array.prototype;function Wn(t,e,n,s,r,i){const o=Cc(t),a=o!==t&&!cn(t),c=o[e];if(c!==T0[e]){const f=c.apply(t,i);return a?vt(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,vt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function ug(t,e,n,s){const r=Cc(t);let i=n;return r!==t&&(cn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,vt(a),c,t)}),r[e](i,...s)}function Ru(t,e,n){const s=Pe(t);Pt(s,"iterate",Wo);const r=s[e](...n);return(r===-1||r===!1)&&Mf(n[0])?(n[0]=Pe(n[0]),s[e](...n)):r}function lo(t,e,n=[]){ns(),Sf();const s=Pe(t)[e].apply(t,n);return Pf(),ss(),s}const w0=If("__proto__,__v_isRef,__isVue"),ev=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fs));function I0(t){fs(t)||(t=String(t));const e=Pe(this);return Pt(e,"has",t),e.hasOwnProperty(t)}class tv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?D0:iv:i?rv:sv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ue(e);if(!r){let c;if(o&&(c=E0[n]))return c;if(n==="hasOwnProperty")return I0}const a=Reflect.get(e,n,ot(e)?e:s);return(fs(n)?ev.has(n):w0(n))||(r||Pt(e,"get",n),i)?a:ot(a)?o&&Rf(n)?a:a.value:Be(a)?r?ov(a):er(a):a}}class nv extends tv{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=rs(i);if(!cn(s)&&!rs(s)&&(i=Pe(i),s=Pe(s)),!ue(e)&&ot(i)&&!ot(s))return c?!1:(i.value=s,!0)}const o=ue(e)&&Rf(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,s,ot(e)?e:r);return e===Pe(r)&&(o?Ls(s,i)&&Qn(e,"set",n,s):Qn(e,"add",n,s)),a}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Qn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!fs(n)||!ev.has(n))&&Pt(e,"has",n),s}ownKeys(e){return Pt(e,"iterate",ue(e)?"length":yr),Reflect.ownKeys(e)}}class b0 extends tv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const C0=new nv,A0=new b0,R0=new nv(!0);const uh=t=>t,Ka=t=>Reflect.getPrototypeOf(t);function S0(t,e,n){return function(...s){const r=this.__v_raw,i=Pe(r),o=ci(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?uh:e?Rl:vt;return!e&&Pt(i,"iterate",c?ch:yr),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function za(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function P0(t,e){const n={get(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);t||(Ls(r,a)&&Pt(o,"get",r),Pt(o,"get",a));const{has:c}=Ka(o),u=e?uh:t?Rl:vt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Pt(Pe(r),"iterate",yr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);return t||(Ls(r,a)&&Pt(o,"has",r),Pt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Pe(a),u=e?uh:t?Rl:vt;return!t&&Pt(c,"iterate",yr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return gt(n,t?{add:za("add"),set:za("set"),delete:za("delete"),clear:za("clear")}:{add(r){!e&&!cn(r)&&!rs(r)&&(r=Pe(r));const i=Pe(this);return Ka(i).has.call(i,r)||(i.add(r),Qn(i,"add",r,r)),this},set(r,i){!e&&!cn(i)&&!rs(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:c}=Ka(o);let u=a.call(o,r);u||(r=Pe(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ls(i,h)&&Qn(o,"set",r,i):Qn(o,"add",r,i),this},delete(r){const i=Pe(this),{has:o,get:a}=Ka(i);let c=o.call(i,r);c||(r=Pe(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Qn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,o=r.clear();return i&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=S0(r,t,e)}),n}function Of(t,e){const n=P0(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const k0={get:Of(!1,!1)},N0={get:Of(!1,!0)},O0={get:Of(!0,!1)};const sv=new WeakMap,rv=new WeakMap,iv=new WeakMap,D0=new WeakMap;function M0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x0(t){return t.__v_skip||!Object.isExtensible(t)?0:M0(i0(t))}function er(t){return rs(t)?t:Df(t,!1,C0,k0,sv)}function Jn(t){return Df(t,!1,R0,N0,rv)}function ov(t){return Df(t,!0,A0,O0,iv)}function Df(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=x0(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function vr(t){return rs(t)?vr(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function Mf(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function av(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Fy(t,"__v_skip",!0),t}const vt=t=>Be(t)?er(t):t,Rl=t=>Be(t)?ov(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function wn(t){return lv(t,!1)}function qo(t){return lv(t,!0)}function lv(t,e){return ot(t)?t:new L0(t,e)}class L0{constructor(e,n){this.dep=new Nf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||cn(e)||rs(e);e=s?e:Pe(e),Ls(e,n)&&(this._rawValue=e,this._value=s?e:vt(e),this.dep.trigger())}}function $e(t){return ot(t)?t.value:t}function V0(t){return fe(t)?t():$e(t)}const F0={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ot(r)&&!ot(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function cv(t){return vr(t)?t:new Proxy(t,F0)}class U0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return v0(Pe(this._object),this._key)}}class B0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function H0(t,e,n){return ot(t)?t:fe(t)?new B0(t):Be(t)&&arguments.length>1?j0(t,e,n):wn(t)}function j0(t,e,n){const s=t[e];return ot(s)?s:new U0(t,e,n)}class $0{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Gy(this,!0),!0}get value(){const e=this.dep.track();return Jy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function W0(t,e,n=!1){let s,r;return fe(t)?s=t:(s=t.get,r=t.set),new $0(s,r,n)}const Ga={},Sl=new WeakMap;let fr;function q0(t,e=!1,n=fr){if(n){let s=Sl.get(n);s||Sl.set(n,s=[]),s.push(t)}}function K0(t,e,n=Fe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=N=>r?N:cn(N)||r===!1||r===0?Yn(N,1):Yn(N);let h,f,p,m,_=!1,T=!1;if(ot(t)?(f=()=>t.value,_=cn(t)):vr(t)?(f=()=>u(t),_=!0):ue(t)?(T=!0,_=t.some(N=>vr(N)||cn(N)),f=()=>t.map(N=>{if(ot(N))return N.value;if(vr(N))return u(N);if(fe(N))return c?c(N,2):N()})):fe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){ns();try{p()}finally{ss()}}const N=fr;fr=h;try{return c?c(t,3,[m]):t(m)}finally{fr=N}}:f=Mn,e&&r){const N=f,M=r===!0?1/0:r;f=()=>Yn(N(),M)}const k=qy(),D=()=>{h.stop(),k&&k.active&&Cf(k.effects,h)};if(i&&e){const N=e;e=(...M)=>{N(...M),D()}}let O=T?new Array(t.length).fill(Ga):Ga;const w=N=>{if(!(!(h.flags&1)||!h.dirty&&!N))if(e){const M=h.run();if(r||_||(T?M.some((F,I)=>Ls(F,O[I])):Ls(M,O))){p&&p();const F=fr;fr=h;try{const I=[M,O===Ga?void 0:T&&O[0]===Ga?[]:O,m];c?c(e,3,I):e(...I),O=M}finally{fr=F}}}else h.run()};return a&&a(w),h=new Ky(f),h.scheduler=o?()=>o(w,!1):w,m=N=>q0(N,!1,h),p=h.onStop=()=>{const N=Sl.get(h);if(N){if(c)c(N,4);else for(const M of N)M();Sl.delete(h)}},e?s?w(!0):O=h.run():o?o(w.bind(null,!0),!0):h.run(),D.pause=h.pause.bind(h),D.resume=h.resume.bind(h),D.stop=D,D}function Yn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ot(t))Yn(t.value,e,n);else if(ue(t))for(let s=0;s<t.length;s++)Yn(t[s],e,n);else if(xy(t)||ci(t))t.forEach(s=>{Yn(s,e,n)});else if(Vy(t)){for(const s in t)Yn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Yn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(t,e,n,s){try{return s?t(...s):t()}catch(r){Fi(r,e,n)}}function Cn(t,e,n,s){if(fe(t)){const r=fa(t,e,n,s);return r&&Af(r)&&r.catch(i=>{Fi(i,e,n)}),r}if(ue(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Cn(t[i],e,n,s));return r}}function Fi(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){ns(),fa(i,null,10,[t,c,u]),ss();return}}z0(t,n,r,s,o)}function z0(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ht=[];let Pn=-1;const hi=[];let bs=null,Xr=0;const uv=Promise.resolve();let Pl=null;function Ti(t){const e=Pl||uv;return t?e.then(this?t.bind(this):t):e}function G0(t){let e=Pn+1,n=Ht.length;for(;e<n;){const s=e+n>>>1,r=Ht[s],i=Ko(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function xf(t){if(!(t.flags&1)){const e=Ko(t),n=Ht[Ht.length-1];!n||!(t.flags&2)&&e>=Ko(n)?Ht.push(t):Ht.splice(G0(e),0,t),t.flags|=1,hv()}}function hv(){Pl||(Pl=uv.then(fv))}function hh(t){ue(t)?hi.push(...t):bs&&t.id===-1?bs.splice(Xr+1,0,t):t.flags&1||(hi.push(t),t.flags|=1),hv()}function hg(t,e,n=Pn+1){for(;n<Ht.length;n++){const s=Ht[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ht.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function kl(t){if(hi.length){const e=[...new Set(hi)].sort((n,s)=>Ko(n)-Ko(s));if(hi.length=0,bs){bs.push(...e);return}for(bs=e,Xr=0;Xr<bs.length;Xr++){const n=bs[Xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bs=null,Xr=0}}const Ko=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fv(t){try{for(Pn=0;Pn<Ht.length;Pn++){const e=Ht[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Ht.length;Pn++){const e=Ht[Pn];e&&(e.flags&=-2)}Pn=-1,Ht.length=0,kl(),Pl=null,(Ht.length||hi.length)&&fv()}}let it=null,dv=null;function Nl(t){const e=it;return it=t,dv=t&&t.type.__scopeId||null,e}function Lf(t,e=it,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ig(-1);const i=Nl(e);let o;try{o=t(...r)}finally{Nl(i),s._d&&Ig(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function z2(t,e){if(it===null)return t;const n=Pc(it),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Fe]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ns(),Cn(c,n,8,[t.el,a,t,e]),ss())}}const Q0=Symbol("_vte"),pv=t=>t.__isTeleport,Cs=Symbol("_leaveCb"),Qa=Symbol("_enterCb");function Y0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ff(()=>{t.isMounted=!0}),pa(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],gv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},mv=t=>{const e=t.subTree;return e.component?mv(e.component):e},J0={name:"BaseTransition",props:gv,setup(t,{slots:e}){const n=ga(),s=Y0();return()=>{const r=e.default&&vv(e.default(),!0);if(!r||!r.length)return;const i=_v(r),o=Pe(t),{mode:a}=o;if(s.isLeaving)return Su(i);const c=fg(i);if(!c)return Su(i);let u=fh(c,o,s,n,f=>u=f);c.type!==tt&&wi(c,u);let h=n.subTree&&fg(n.subTree);if(h&&h.type!==tt&&!mn(c,h)&&mv(n).type!==tt){let f=fh(h,o,s,n);if(wi(h,f),a==="out-in"&&c.type!==tt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Su(i);a==="in-out"&&c.type!==tt?f.delayLeave=(p,m,_)=>{const T=yv(s,h);T[String(h.key)]=h,p[Cs]=()=>{m(),p[Cs]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function _v(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==tt){e=n;break}}return e}const X0=J0;function yv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function fh(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:k,onAppear:D,onAfterAppear:O,onAppearCancelled:w}=e,N=String(t.key),M=yv(n,t),F=(v,b)=>{v&&Cn(v,s,9,b)},I=(v,b)=>{const P=b[1];F(v,b),ue(v)?v.every(R=>R.length<=1)&&P():v.length<=1&&P()},E={mode:o,persisted:a,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=k||c;else return;v[Cs]&&v[Cs](!0);const P=M[N];P&&mn(t,P)&&P.el[Cs]&&P.el[Cs](),F(b,[v])},enter(v){let b=u,P=h,R=f;if(!n.isMounted)if(i)b=D||u,P=O||h,R=w||f;else return;let C=!1;const me=v[Qa]=Ee=>{C||(C=!0,Ee?F(R,[v]):F(P,[v]),E.delayedLeave&&E.delayedLeave(),v[Qa]=void 0)};b?I(b,[v,me]):me()},leave(v,b){const P=String(t.key);if(v[Qa]&&v[Qa](!0),n.isUnmounting)return b();F(p,[v]);let R=!1;const C=v[Cs]=me=>{R||(R=!0,b(),me?F(T,[v]):F(_,[v]),v[Cs]=void 0,M[P]===t&&delete M[P])};M[P]=t,m?I(m,[v,C]):C()},clone(v){const b=fh(v,e,n,s,r);return r&&r(b),b}};return E}function Su(t){if(da(t))return t=is(t),t.children=null,t}function fg(t){if(!da(t))return pv(t.type)&&t.children?_v(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vv(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&r++,s=s.concat(vv(o.children,e,a))):(e||o.type!==tt)&&s.push(a!=null?is(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function tr(t,e){return fe(t)?gt({name:t.name},e,{setup:t}):t}function Vf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function zo(t,e,n,s,r=!1){if(ue(t)){t.forEach((_,T)=>zo(_,e&&(ue(e)?e[T]:e),n,s,r));return}if(Vs(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&zo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Pc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,f=a.setupState,p=Pe(f),m=f===Fe?()=>!1:_=>Oe(p,_);if(u!=null&&u!==c&&(ze(u)?(h[u]=null,m(u)&&(f[u]=null)):ot(u)&&(u.value=null)),fe(c))fa(c,a,12,[o,h]);else{const _=ze(c),T=ot(c);if(_||T){const k=()=>{if(t.f){const D=_?m(c)?f[c]:h[c]:c.value;r?ue(D)&&Cf(D,i):ue(D)?D.includes(i)||D.push(i):_?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else _?(h[c]=o,m(c)&&(f[c]=o)):T&&(c.value=o,t.k&&(h[t.k]=o))};o?(k.id=-1,yt(k,n)):k()}}}let dg=!1;const Yr=()=>{dg||(console.error("Hydration completed but contains mismatches."),dg=!0)},Z0=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",eC=t=>t.namespaceURI.includes("MathML"),Ya=t=>{if(t.nodeType===1){if(Z0(t))return"svg";if(eC(t))return"mathml"}},ri=t=>t.nodeType===8;function tC(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,h=(w,N)=>{if(!N.hasChildNodes()){n(null,w,N),kl(),N._vnode=w;return}f(N.firstChild,w,null,null,null),kl(),N._vnode=w},f=(w,N,M,F,I,E=!1)=>{E=E||!!N.dynamicChildren;const v=ri(w)&&w.data==="[",b=()=>T(w,N,M,F,I,v),{type:P,ref:R,shapeFlag:C,patchFlag:me}=N;let Ee=w.nodeType;N.el=w,me===-2&&(E=!1,N.dynamicChildren=null);let ne=null;switch(P){case wr:Ee!==3?N.children===""?(c(N.el=r(""),o(w),w),ne=w):ne=b():(w.data!==N.children&&(Yr(),w.data=N.children),ne=i(w));break;case tt:O(w)?(ne=i(w),D(N.el=w.content.firstChild,w,M)):Ee!==8||v?ne=b():ne=i(w);break;case Ro:if(v&&(w=i(w),Ee=w.nodeType),Ee===1||Ee===3){ne=w;const he=!N.children.length;for(let te=0;te<N.staticCount;te++)he&&(N.children+=ne.nodeType===1?ne.outerHTML:ne.data),te===N.staticCount-1&&(N.anchor=ne),ne=i(ne);return v?i(ne):ne}else b();break;case kt:v?ne=_(w,N,M,F,I,E):ne=b();break;default:if(C&1)(Ee!==1||N.type.toLowerCase()!==w.tagName.toLowerCase())&&!O(w)?ne=b():ne=p(w,N,M,F,I,E);else if(C&6){N.slotScopeIds=I;const he=o(w);if(v?ne=k(w):ri(w)&&w.data==="teleport start"?ne=k(w,w.data,"teleport end"):ne=i(w),e(N,he,null,M,F,Ya(he),E),Vs(N)&&!N.type.__asyncResolved){let te;v?(te=Je(kt),te.anchor=ne?ne.previousSibling:he.lastChild):te=w.nodeType===3?eE(""):Je("div"),te.el=w,N.component.subTree=te}}else C&64?Ee!==8?ne=b():ne=N.type.hydrate(w,N,M,F,I,E,t,m):C&128&&(ne=N.type.hydrate(w,N,M,F,Ya(o(w)),I,E,t,f))}return R!=null&&zo(R,null,F,N),ne},p=(w,N,M,F,I,E)=>{E=E||!!N.dynamicChildren;const{type:v,props:b,patchFlag:P,shapeFlag:R,dirs:C,transition:me}=N,Ee=v==="input"||v==="option";if(Ee||P!==-1){C&&kn(N,null,M,"created");let ne=!1;if(O(w)){ne=jv(null,me)&&M&&M.vnode.props&&M.vnode.props.appear;const te=w.content.firstChild;ne&&me.beforeEnter(te),D(te,w,M),N.el=w=te}if(R&16&&!(b&&(b.innerHTML||b.textContent))){let te=m(w.firstChild,N,w,M,F,I,E);for(;te;){Ja(w,1)||Yr();const Ge=te;te=te.nextSibling,a(Ge)}}else if(R&8){let te=N.children;te[0]===`
`&&(w.tagName==="PRE"||w.tagName==="TEXTAREA")&&(te=te.slice(1)),w.textContent!==te&&(Ja(w,0)||Yr(),w.textContent=N.children)}if(b){if(Ee||!E||P&48){const te=w.tagName.includes("-");for(const Ge in b)(Ee&&(Ge.endsWith("value")||Ge==="indeterminate")||ua(Ge)&&!ui(Ge)||Ge[0]==="."||te)&&s(w,Ge,null,b[Ge],void 0,M)}else if(b.onClick)s(w,"onClick",null,b.onClick,void 0,M);else if(P&4&&vr(b.style))for(const te in b.style)b.style[te]}let he;(he=b&&b.onVnodeBeforeMount)&&qt(he,M,N),C&&kn(N,null,M,"beforeMount"),((he=b&&b.onVnodeMounted)||C||ne)&&Gv(()=>{he&&qt(he,M,N),ne&&me.enter(w),C&&kn(N,null,M,"mounted")},F)}return w.nextSibling},m=(w,N,M,F,I,E,v)=>{v=v||!!N.dynamicChildren;const b=N.children,P=b.length;for(let R=0;R<P;R++){const C=v?b[R]:b[R]=Jt(b[R]),me=C.type===wr;w?(me&&!v&&R+1<P&&Jt(b[R+1]).type===wr&&(c(r(w.data.slice(C.children.length)),M,i(w)),w.data=C.children),w=f(w,C,F,I,E,v)):me&&!C.children?c(C.el=r(""),M):(Ja(M,1)||Yr(),n(null,C,M,null,F,I,Ya(M),E))}return w},_=(w,N,M,F,I,E)=>{const{slotScopeIds:v}=N;v&&(I=I?I.concat(v):v);const b=o(w),P=m(i(w),N,b,M,F,I,E);return P&&ri(P)&&P.data==="]"?i(N.anchor=P):(Yr(),c(N.anchor=u("]"),b,P),P)},T=(w,N,M,F,I,E)=>{if(Ja(w.parentElement,1)||Yr(),N.el=null,E){const P=k(w);for(;;){const R=i(w);if(R&&R!==P)a(R);else break}}const v=i(w),b=o(w);return a(w),n(null,N,b,v,M,F,Ya(b),I),M&&(M.vnode.el=N.el,Sc(M,N.el)),v},k=(w,N="[",M="]")=>{let F=0;for(;w;)if(w=i(w),w&&ri(w)&&(w.data===N&&F++,w.data===M)){if(F===0)return i(w);F--}return w},D=(w,N,M)=>{const F=N.parentNode;F&&F.replaceChild(w,N);let I=M;for(;I;)I.vnode.el===N&&(I.vnode.el=I.subTree.el=w),I=I.parent},O=w=>w.nodeType===1&&w.tagName==="TEMPLATE";return[h,f]}const pg="data-allow-mismatch",nC={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ja(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(pg);)t=t.parentElement;const n=t&&t.getAttribute(pg);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:n.split(",").includes(nC[e])}}wc().requestIdleCallback;wc().cancelIdleCallback;function sC(t,e){if(ri(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(ri(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const Vs=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ol(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,m()),m=()=>{let _;return u||(_=u=e().catch(T=>{if(T=T instanceof Error?T:new Error(String(T)),c)return new Promise((k,D)=>{c(T,()=>k(p()),()=>D(T),f+1)});throw T}).then(T=>_!==u&&u?u:(T&&(T.__esModule||T[Symbol.toStringTag]==="Module")&&(T=T.default),h=T,T)))};return tr({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(_,T,k){const D=i?()=>{const O=i(k,w=>sC(_,w));O&&(T.bum||(T.bum=[])).push(O)}:k;h?D():m().then(()=>!T.isUnmounted&&D())},get __asyncResolved(){return h},setup(){const _=st;if(Vf(_),h)return()=>Pu(h,_);const T=w=>{u=null,Fi(w,_,13,!s)};if(a&&_.suspense||bi)return m().then(w=>()=>Pu(w,_)).catch(w=>(T(w),()=>s?Je(s,{error:w}):null));const k=wn(!1),D=wn(),O=wn(!!r);return r&&setTimeout(()=>{O.value=!1},r),o!=null&&setTimeout(()=>{if(!k.value&&!D.value){const w=new Error(`Async component timed out after ${o}ms.`);T(w),D.value=w}},o),m().then(()=>{k.value=!0,_.parent&&da(_.parent.vnode)&&_.parent.update()}).catch(w=>{T(w),D.value=w}),()=>{if(k.value&&h)return Pu(h,_);if(D.value&&s)return Je(s,{error:D.value});if(n&&!O.value)return Je(n)}}})}function Pu(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=Je(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const da=t=>t.type.__isKeepAlive,rC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=ga(),s=n.ctx;if(!s.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:f}}}=s,p=f("div");s.activate=(O,w,N,M,F)=>{const I=O.component;u(O,w,N,0,a),c(I.vnode,O,w,N,I,a,M,O.slotScopeIds,F),yt(()=>{I.isDeactivated=!1,I.a&&Io(I.a);const E=O.props&&O.props.onVnodeMounted;E&&qt(E,I.parent,O)},a)},s.deactivate=O=>{const w=O.component;Ml(w.m),Ml(w.a),u(O,p,null,1,a),yt(()=>{w.da&&Io(w.da);const N=O.props&&O.props.onVnodeUnmounted;N&&qt(N,w.parent,O),w.isDeactivated=!0},a)};function m(O){ku(O),h(O,n,a,!0)}function _(O){r.forEach((w,N)=>{const M=Th(w.type);M&&!O(M)&&T(N)})}function T(O){const w=r.get(O);w&&(!o||!mn(w,o))?m(w):o&&ku(o),r.delete(O),i.delete(O)}fi(()=>[t.include,t.exclude],([O,w])=>{O&&_(N=>yo(O,N)),w&&_(N=>!yo(w,N))},{flush:"post",deep:!0});let k=null;const D=()=>{k!=null&&(xl(n.subTree.type)?yt(()=>{r.set(k,Xa(n.subTree))},n.subTree.suspense):r.set(k,Xa(n.subTree)))};return Ff(D),Iv(D),pa(()=>{r.forEach(O=>{const{subTree:w,suspense:N}=n,M=Xa(w);if(O.type===M.type&&O.key===M.key){ku(M);const F=M.component.da;F&&yt(F,N);return}m(O)})}),()=>{if(k=null,!e.default)return o=null;const O=e.default(),w=O[0];if(O.length>1)return o=null,O;if(!Cr(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return o=null,w;let N=Xa(w);if(N.type===tt)return o=null,N;const M=N.type,F=Th(Vs(N)?N.type.__asyncResolved||{}:M),{include:I,exclude:E,max:v}=t;if(I&&(!F||!yo(I,F))||E&&F&&yo(E,F))return N.shapeFlag&=-257,o=N,w;const b=N.key==null?M:N.key,P=r.get(b);return N.el&&(N=is(N),w.shapeFlag&128&&(w.ssContent=N)),k=b,P?(N.el=P.el,N.component=P.component,N.transition&&wi(N,N.transition),N.shapeFlag|=512,i.delete(b),i.add(b)):(i.add(b),v&&i.size>parseInt(v,10)&&T(i.values().next().value)),N.shapeFlag|=256,o=N,xl(w.type)?w:N}}},iC=rC;function yo(t,e){return ue(t)?t.some(n=>yo(n,e)):ze(t)?t.split(",").includes(e):r0(t)?(t.lastIndex=0,t.test(e)):!1}function Ev(t,e){wv(t,"a",e)}function Tv(t,e){wv(t,"da",e)}function wv(t,e,n=st){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ac(e,s,n),n){let r=n.parent;for(;r&&r.parent;)da(r.parent.vnode)&&oC(s,e,n,r),r=r.parent}}function oC(t,e,n,s){const r=Ac(e,t,s,!0);bv(()=>{Cf(s[e],r)},n)}function ku(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Xa(t){return t.shapeFlag&128?t.ssContent:t}function Ac(t,e,n=st,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ns();const a=Ar(n),c=Cn(e,n,t,o);return a(),ss(),c});return s?r.unshift(i):r.push(i),i}}const ds=t=>(e,n=st)=>{(!bi||t==="sp")&&Ac(t,(...s)=>e(...s),n)},aC=ds("bm"),Ff=ds("m"),lC=ds("bu"),Iv=ds("u"),pa=ds("bum"),bv=ds("um"),cC=ds("sp"),uC=ds("rtg"),hC=ds("rtc");function Cv(t,e=st){Ac("ec",t,e)}const Av="components";function G2(t,e){return Sv(Av,t,!0,e)||t}const Rv=Symbol.for("v-ndc");function fC(t){return ze(t)?Sv(Av,t,!1)||t:t||Rv}function Sv(t,e,n=!0,s=!1){const r=it||st;if(r){const i=r.type;{const a=Th(i,!1);if(a&&(a===e||a===hn(e)||a===Tc(hn(e))))return i}const o=gg(r[t]||i[t],e)||gg(r.appContext[t],e);return!o&&s?i:o}}function gg(t,e){return t&&(t[e]||t[hn(e)]||t[Tc(hn(e))])}function Q2(t,e,n,s){let r;const i=n,o=ue(t);if(o||ze(t)){const a=o&&vr(t);let c=!1,u=!1;a&&(c=!cn(t),u=rs(t),t=Cc(t)),r=new Array(t.length);for(let h=0,f=t.length;h<f;h++)r[h]=e(c?u?Rl(vt(t[h])):vt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Be(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}function Y2(t,e,n={},s,r){if(it.ce||it.parent&&Vs(it.parent)&&it.parent.ce)return e!=="default"&&(n.name=e),on(),On(kt,null,[Je("slot",n,s)],64);let i=t[e];i&&i._c&&(i._d=!1),on();const o=i&&Pv(i(n)),a=n.key||o&&o.key,c=On(kt,{key:(a&&!fs(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Pv(t){return t.some(e=>Cr(e)?!(e.type===tt||e.type===kt&&!Pv(e.children)):!0)?t:null}const dh=t=>t?nE(t)?Pc(t):dh(t.parent):null,Ao=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dh(t.parent),$root:t=>dh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nv(t),$forceUpdate:t=>t.f||(t.f=()=>{xf(t.update)}),$nextTick:t=>t.n||(t.n=Ti.bind(t.proxy)),$watch:t=>DC.bind(t)}),Nu=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),dC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Nu(s,e))return o[e]=1,s[e];if(r!==Fe&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];ph&&(o[e]=0)}}const h=Ao[e];let f,p;if(h)return e==="$attrs"&&Pt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Nu(r,e)?(r[e]=n,!0):s!==Fe&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&Oe(t,o)||Nu(e,o)||(a=i[0])&&Oe(a,o)||Oe(s,o)||Oe(Ao,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mg(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function J2(t){const e=ga();let n=t();return vh(),Af(n)&&(n=n.catch(s=>{throw Ar(e),s})),[n,()=>Ar(e)]}let ph=!0;function pC(t){const e=Nv(t),n=t.proxy,s=t.ctx;ph=!1,e.beforeCreate&&_g(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:_,activated:T,deactivated:k,beforeDestroy:D,beforeUnmount:O,destroyed:w,unmounted:N,render:M,renderTracked:F,renderTriggered:I,errorCaptured:E,serverPrefetch:v,expose:b,inheritAttrs:P,components:R,directives:C,filters:me}=e;if(u&&gC(u,s,null),o)for(const he in o){const te=o[he];fe(te)&&(s[he]=te.bind(n))}if(r){const he=r.call(n,n);Be(he)&&(t.data=er(he))}if(ph=!0,i)for(const he in i){const te=i[he],Ge=fe(te)?te.bind(n,n):fe(te.get)?te.get.bind(n,n):Mn,pn=!fe(te)&&fe(te.set)?te.set.bind(n):Mn,tn=an({get:Ge,set:pn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Qe=>tn.value=Qe})}if(a)for(const he in a)kv(a[he],s,n,he);if(c){const he=fe(c)?c.call(n):c;Reflect.ownKeys(he).forEach(te=>{Tr(te,he[te])})}h&&_g(h,t,"c");function ne(he,te){ue(te)?te.forEach(Ge=>he(Ge.bind(n))):te&&he(te.bind(n))}if(ne(aC,f),ne(Ff,p),ne(lC,m),ne(Iv,_),ne(Ev,T),ne(Tv,k),ne(Cv,E),ne(hC,F),ne(uC,I),ne(pa,O),ne(bv,N),ne(cC,v),ue(b))if(b.length){const he=t.exposed||(t.exposed={});b.forEach(te=>{Object.defineProperty(he,te,{get:()=>n[te],set:Ge=>n[te]=Ge})})}else t.exposed||(t.exposed={});M&&t.render===Mn&&(t.render=M),P!=null&&(t.inheritAttrs=P),R&&(t.components=R),C&&(t.directives=C),v&&Vf(t)}function gC(t,e,n=Mn){ue(t)&&(t=gh(t));for(const s in t){const r=t[s];let i;Be(r)?"default"in r?i=jt(r.from||s,r.default,!0):i=jt(r.from||s):i=jt(r),ot(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function _g(t,e,n){Cn(ue(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kv(t,e,n,s){let r=s.includes(".")?qv(n,s):()=>n[s];if(ze(t)){const i=e[t];fe(i)&&fi(r,i)}else if(fe(t))fi(r,t.bind(n));else if(Be(t))if(ue(t))t.forEach(i=>kv(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&fi(r,i,t)}}function Nv(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Dl(c,u,o,!0)),Dl(c,e,o)),Be(e)&&i.set(e,c),c}function Dl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Dl(t,i,n,!0),r&&r.forEach(o=>Dl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=mC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mC={data:yg,props:vg,emits:vg,methods:vo,computed:vo,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:vo,directives:vo,watch:yC,provide:yg,inject:_C};function yg(t,e){return e?t?function(){return gt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function _C(t,e){return vo(gh(t),gh(e))}function gh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function vo(t,e){return t?gt(Object.create(null),t,e):e}function vg(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),mg(t),mg(e??{})):e}function yC(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const s in e)n[s]=Bt(t[s],e[s]);return n}function Ov(){return{app:null,config:{isNativeTag:n0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vC=0;function EC(t,e){return function(s,r=null){fe(s)||(s=gt({},s)),r!=null&&!Be(r)&&(r=null);const i=Ov(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:vC++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:nA,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const m=u._ceVNode||Je(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),c=!0,u._container=h,h.__vue_app__=u,Pc(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Cn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Er;Er=u;try{return h()}finally{Er=f}}};return u}}let Er=null;function Tr(t,e){if(st){let n=st.provides;const s=st.parent&&st.parent.provides;s===n&&(n=st.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=st||it;if(s||Er){const r=Er?Er._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}function Uf(){return!!(st||it||Er)}const Dv={},Mv=()=>Object.create(Dv),xv=t=>Object.getPrototypeOf(t)===Dv;function TC(t,e,n,s=!1){const r={},i=Mv();t.propsDefaults=Object.create(null),Lv(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Jn(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function wC(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Pe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(Rc(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const _=hn(p);r[_]=mh(c,a,_,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Lv(t,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=xr(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=mh(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&Qn(t.attrs,"set","")}function Lv(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ui(c))continue;const u=e[c];let h;r&&Oe(r,h=hn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Rc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Pe(n),u=a||Fe;for(let h=0;h<i.length;h++){const f=i[h];n[f]=mh(r,c,f,u[f],t,!Oe(u,f))}}return o}function mh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Ar(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xr(n))&&(s=!0))}return s}const IC=new WeakMap;function Vv(t,e,n=!1){const s=n?IC:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!fe(t)){const h=f=>{c=!0;const[p,m]=Vv(f,e,!0);gt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Be(t)&&s.set(t,li),li;if(ue(i))for(let h=0;h<i.length;h++){const f=hn(i[h]);Eg(f)&&(o[f]=Fe)}else if(i)for(const h in i){const f=hn(h);if(Eg(f)){const p=i[h],m=o[f]=ue(p)||fe(p)?{type:p}:gt({},p),_=m.type;let T=!1,k=!0;if(ue(_))for(let D=0;D<_.length;++D){const O=_[D],w=fe(O)&&O.name;if(w==="Boolean"){T=!0;break}else w==="String"&&(k=!1)}else T=fe(_)&&_.name==="Boolean";m[0]=T,m[1]=k,(T||Oe(m,"default"))&&a.push(f)}}const u=[o,a];return Be(t)&&s.set(t,u),u}function Eg(t){return t[0]!=="$"&&!ui(t)}const Bf=t=>t[0]==="_"||t==="$stable",Hf=t=>ue(t)?t.map(Jt):[Jt(t)],bC=(t,e,n)=>{if(e._n)return e;const s=Lf((...r)=>Hf(e(...r)),n);return s._c=!1,s},Fv=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Bf(r))continue;const i=t[r];if(fe(i))e[r]=bC(r,i,s);else if(i!=null){const o=Hf(i);e[r]=()=>o}}},Uv=(t,e)=>{const n=Hf(e);t.slots.default=()=>n},Bv=(t,e,n)=>{for(const s in e)(n||!Bf(s))&&(t[s]=e[s])},CC=(t,e,n)=>{const s=t.slots=Mv();if(t.vnode.shapeFlag&32){const r=e._;r?(Bv(s,e,n),n&&Fy(s,"_",r,!0)):Fv(e,s)}else e&&Uv(t,e)},AC=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Bv(r,e,n):(i=!e.$stable,Fv(e,r)),o=e}else e&&(Uv(t,e),o={default:1});if(i)for(const a in r)!Bf(a)&&o[a]==null&&delete r[a]},yt=Gv;function RC(t){return Hv(t)}function SC(t){return Hv(t,tC)}function Hv(t,e){const n=wc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Mn,insertStaticContent:_}=t,T=(A,S,L,j=null,U=null,W=null,Q=void 0,z=null,K=!!S.dynamicChildren)=>{if(A===S)return;A&&!mn(A,S)&&(j=B(A),Qe(A,U,W,!0),A=null),S.patchFlag===-2&&(K=!1,S.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=S;switch(q){case wr:k(A,S,L,j);break;case tt:D(A,S,L,j);break;case Ro:A==null&&O(S,L,j,Q);break;case kt:R(A,S,L,j,U,W,Q,z,K);break;default:Y&1?M(A,S,L,j,U,W,Q,z,K):Y&6?C(A,S,L,j,U,W,Q,z,K):(Y&64||Y&128)&&q.process(A,S,L,j,U,W,Q,z,K,se)}oe!=null&&U&&zo(oe,A&&A.ref,W,S||A,!S)},k=(A,S,L,j)=>{if(A==null)s(S.el=a(S.children),L,j);else{const U=S.el=A.el;S.children!==A.children&&u(U,S.children)}},D=(A,S,L,j)=>{A==null?s(S.el=c(S.children||""),L,j):S.el=A.el},O=(A,S,L,j)=>{[A.el,A.anchor]=_(A.children,S,L,j,A.el,A.anchor)},w=({el:A,anchor:S},L,j)=>{let U;for(;A&&A!==S;)U=p(A),s(A,L,j),A=U;s(S,L,j)},N=({el:A,anchor:S})=>{let L;for(;A&&A!==S;)L=p(A),r(A),A=L;r(S)},M=(A,S,L,j,U,W,Q,z,K)=>{S.type==="svg"?Q="svg":S.type==="math"&&(Q="mathml"),A==null?F(S,L,j,U,W,Q,z,K):v(A,S,U,W,Q,z,K)},F=(A,S,L,j,U,W,Q,z)=>{let K,q;const{props:oe,shapeFlag:Y,transition:ie,dirs:re}=A;if(K=A.el=o(A.type,W,oe&&oe.is,oe),Y&8?h(K,A.children):Y&16&&E(A.children,K,null,j,U,Ou(A,W),Q,z),re&&kn(A,null,j,"created"),I(K,A,A.scopeId,Q,j),oe){for(const ke in oe)ke!=="value"&&!ui(ke)&&i(K,ke,null,oe[ke],W,j);"value"in oe&&i(K,"value",null,oe.value,W),(q=oe.onVnodeBeforeMount)&&qt(q,j,A)}re&&kn(A,null,j,"beforeMount");const ce=jv(U,ie);ce&&ie.beforeEnter(K),s(K,S,L),((q=oe&&oe.onVnodeMounted)||ce||re)&&yt(()=>{q&&qt(q,j,A),ce&&ie.enter(K),re&&kn(A,null,j,"mounted")},U)},I=(A,S,L,j,U)=>{if(L&&m(A,L),j)for(let W=0;W<j.length;W++)m(A,j[W]);if(U){let W=U.subTree;if(S===W||xl(W.type)&&(W.ssContent===S||W.ssFallback===S)){const Q=U.vnode;I(A,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},E=(A,S,L,j,U,W,Q,z,K=0)=>{for(let q=K;q<A.length;q++){const oe=A[q]=z?As(A[q]):Jt(A[q]);T(null,oe,S,L,j,U,W,Q,z)}},v=(A,S,L,j,U,W,Q)=>{const z=S.el=A.el;let{patchFlag:K,dynamicChildren:q,dirs:oe}=S;K|=A.patchFlag&16;const Y=A.props||Fe,ie=S.props||Fe;let re;if(L&&lr(L,!1),(re=ie.onVnodeBeforeUpdate)&&qt(re,L,S,A),oe&&kn(S,A,L,"beforeUpdate"),L&&lr(L,!0),(Y.innerHTML&&ie.innerHTML==null||Y.textContent&&ie.textContent==null)&&h(z,""),q?b(A.dynamicChildren,q,z,L,j,Ou(S,U),W):Q||te(A,S,z,null,L,j,Ou(S,U),W,!1),K>0){if(K&16)P(z,Y,ie,L,U);else if(K&2&&Y.class!==ie.class&&i(z,"class",null,ie.class,U),K&4&&i(z,"style",Y.style,ie.style,U),K&8){const ce=S.dynamicProps;for(let ke=0;ke<ce.length;ke++){const Re=ce[ke],It=Y[Re],ut=ie[Re];(ut!==It||Re==="value")&&i(z,Re,It,ut,U,L)}}K&1&&A.children!==S.children&&h(z,S.children)}else!Q&&q==null&&P(z,Y,ie,L,U);((re=ie.onVnodeUpdated)||oe)&&yt(()=>{re&&qt(re,L,S,A),oe&&kn(S,A,L,"updated")},j)},b=(A,S,L,j,U,W,Q)=>{for(let z=0;z<S.length;z++){const K=A[z],q=S[z],oe=K.el&&(K.type===kt||!mn(K,q)||K.shapeFlag&70)?f(K.el):L;T(K,q,oe,null,j,U,W,Q,!0)}},P=(A,S,L,j,U)=>{if(S!==L){if(S!==Fe)for(const W in S)!ui(W)&&!(W in L)&&i(A,W,S[W],null,U,j);for(const W in L){if(ui(W))continue;const Q=L[W],z=S[W];Q!==z&&W!=="value"&&i(A,W,z,Q,U,j)}"value"in L&&i(A,"value",S.value,L.value,U)}},R=(A,S,L,j,U,W,Q,z,K)=>{const q=S.el=A?A.el:a(""),oe=S.anchor=A?A.anchor:a("");let{patchFlag:Y,dynamicChildren:ie,slotScopeIds:re}=S;re&&(z=z?z.concat(re):re),A==null?(s(q,L,j),s(oe,L,j),E(S.children||[],L,oe,U,W,Q,z,K)):Y>0&&Y&64&&ie&&A.dynamicChildren?(b(A.dynamicChildren,ie,L,U,W,Q,z),(S.key!=null||U&&S===U.subTree)&&$v(A,S,!0)):te(A,S,L,oe,U,W,Q,z,K)},C=(A,S,L,j,U,W,Q,z,K)=>{S.slotScopeIds=z,A==null?S.shapeFlag&512?U.ctx.activate(S,L,j,Q,K):me(S,L,j,U,W,Q,K):Ee(A,S,K)},me=(A,S,L,j,U,W,Q)=>{const z=A.component=YC(A,j,U);if(da(A)&&(z.ctx.renderer=se),JC(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,ne,Q),!A.el){const K=z.subTree=Je(tt);D(null,K,S,L)}}else ne(z,A,S,L,U,W,Q)},Ee=(A,S,L)=>{const j=S.component=A.component;if(UC(A,S,L))if(j.asyncDep&&!j.asyncResolved){he(j,S,L);return}else j.next=S,j.update();else S.el=A.el,j.vnode=S},ne=(A,S,L,j,U,W,Q)=>{const z=()=>{if(A.isMounted){let{next:Y,bu:ie,u:re,parent:ce,vnode:ke}=A;{const bt=Wv(A);if(bt){Y&&(Y.el=ke.el,he(A,Y,Q)),bt.asyncDep.then(()=>{A.isUnmounted||z()});return}}let Re=Y,It;lr(A,!1),Y?(Y.el=ke.el,he(A,Y,Q)):Y=ke,ie&&Io(ie),(It=Y.props&&Y.props.onVnodeBeforeUpdate)&&qt(It,ce,Y,ke),lr(A,!0);const ut=Du(A),mt=A.subTree;A.subTree=ut,T(mt,ut,f(mt.el),B(mt),A,U,W),Y.el=ut.el,Re===null&&Sc(A,ut.el),re&&yt(re,U),(It=Y.props&&Y.props.onVnodeUpdated)&&yt(()=>qt(It,ce,Y,ke),U)}else{let Y;const{el:ie,props:re}=S,{bm:ce,m:ke,parent:Re,root:It,type:ut}=A,mt=Vs(S);if(lr(A,!1),ce&&Io(ce),!mt&&(Y=re&&re.onVnodeBeforeMount)&&qt(Y,Re,S),lr(A,!0),ie&&xe){const bt=()=>{A.subTree=Du(A),xe(ie,A.subTree,A,U,null)};mt&&ut.__asyncHydrate?ut.__asyncHydrate(ie,A,bt):bt()}else{It.ce&&It.ce._injectChildStyle(ut);const bt=A.subTree=Du(A);T(null,bt,L,j,A,U,W),S.el=bt.el}if(ke&&yt(ke,U),!mt&&(Y=re&&re.onVnodeMounted)){const bt=S;yt(()=>qt(Y,Re,bt),U)}(S.shapeFlag&256||Re&&Vs(Re.vnode)&&Re.vnode.shapeFlag&256)&&A.a&&yt(A.a,U),A.isMounted=!0,S=L=j=null}};A.scope.on();const K=A.effect=new Ky(z);A.scope.off();const q=A.update=K.run.bind(K),oe=A.job=K.runIfDirty.bind(K);oe.i=A,oe.id=A.uid,K.scheduler=()=>xf(oe),lr(A,!0),q()},he=(A,S,L)=>{S.component=A;const j=A.vnode.props;A.vnode=S,A.next=null,wC(A,S.props,j,L),AC(A,S.children,L),ns(),hg(A),ss()},te=(A,S,L,j,U,W,Q,z,K=!1)=>{const q=A&&A.children,oe=A?A.shapeFlag:0,Y=S.children,{patchFlag:ie,shapeFlag:re}=S;if(ie>0){if(ie&128){pn(q,Y,L,j,U,W,Q,z,K);return}else if(ie&256){Ge(q,Y,L,j,U,W,Q,z,K);return}}re&8?(oe&16&&$t(q,U,W),Y!==q&&h(L,Y)):oe&16?re&16?pn(q,Y,L,j,U,W,Q,z,K):$t(q,U,W,!0):(oe&8&&h(L,""),re&16&&E(Y,L,j,U,W,Q,z,K))},Ge=(A,S,L,j,U,W,Q,z,K)=>{A=A||li,S=S||li;const q=A.length,oe=S.length,Y=Math.min(q,oe);let ie;for(ie=0;ie<Y;ie++){const re=S[ie]=K?As(S[ie]):Jt(S[ie]);T(A[ie],re,L,null,U,W,Q,z,K)}q>oe?$t(A,U,W,!0,!1,Y):E(S,L,j,U,W,Q,z,K,Y)},pn=(A,S,L,j,U,W,Q,z,K)=>{let q=0;const oe=S.length;let Y=A.length-1,ie=oe-1;for(;q<=Y&&q<=ie;){const re=A[q],ce=S[q]=K?As(S[q]):Jt(S[q]);if(mn(re,ce))T(re,ce,L,null,U,W,Q,z,K);else break;q++}for(;q<=Y&&q<=ie;){const re=A[Y],ce=S[ie]=K?As(S[ie]):Jt(S[ie]);if(mn(re,ce))T(re,ce,L,null,U,W,Q,z,K);else break;Y--,ie--}if(q>Y){if(q<=ie){const re=ie+1,ce=re<oe?S[re].el:j;for(;q<=ie;)T(null,S[q]=K?As(S[q]):Jt(S[q]),L,ce,U,W,Q,z,K),q++}}else if(q>ie)for(;q<=Y;)Qe(A[q],U,W,!0),q++;else{const re=q,ce=q,ke=new Map;for(q=ce;q<=ie;q++){const Ft=S[q]=K?As(S[q]):Jt(S[q]);Ft.key!=null&&ke.set(Ft.key,q)}let Re,It=0;const ut=ie-ce+1;let mt=!1,bt=0;const _s=new Array(ut);for(q=0;q<ut;q++)_s[q]=0;for(q=re;q<=Y;q++){const Ft=A[q];if(It>=ut){Qe(Ft,U,W,!0);continue}let nn;if(Ft.key!=null)nn=ke.get(Ft.key);else for(Re=ce;Re<=ie;Re++)if(_s[Re-ce]===0&&mn(Ft,S[Re])){nn=Re;break}nn===void 0?Qe(Ft,U,W,!0):(_s[nn-ce]=q+1,nn>=bt?bt=nn:mt=!0,T(Ft,S[nn],L,null,U,W,Q,z,K),It++)}const $r=mt?PC(_s):li;for(Re=$r.length-1,q=ut-1;q>=0;q--){const Ft=ce+q,nn=S[Ft],Wr=Ft+1<oe?S[Ft+1].el:j;_s[q]===0?T(null,nn,L,Wr,U,W,Q,z,K):mt&&(Re<0||q!==$r[Re]?tn(nn,L,Wr,2):Re--)}}},tn=(A,S,L,j,U=null)=>{const{el:W,type:Q,transition:z,children:K,shapeFlag:q}=A;if(q&6){tn(A.component.subTree,S,L,j);return}if(q&128){A.suspense.move(S,L,j);return}if(q&64){Q.move(A,S,L,se);return}if(Q===kt){s(W,S,L);for(let Y=0;Y<K.length;Y++)tn(K[Y],S,L,j);s(A.anchor,S,L);return}if(Q===Ro){w(A,S,L);return}if(j!==2&&q&1&&z)if(j===0)z.beforeEnter(W),s(W,S,L),yt(()=>z.enter(W),U);else{const{leave:Y,delayLeave:ie,afterLeave:re}=z,ce=()=>{A.ctx.isUnmounted?r(W):s(W,S,L)},ke=()=>{Y(W,()=>{ce(),re&&re()})};ie?ie(W,ce,ke):ke()}else s(W,S,L)},Qe=(A,S,L,j=!1,U=!1)=>{const{type:W,props:Q,ref:z,children:K,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:ie,cacheIndex:re}=A;if(Y===-2&&(U=!1),z!=null&&(ns(),zo(z,null,L,A,!0),ss()),re!=null&&(S.renderCache[re]=void 0),oe&256){S.ctx.deactivate(A);return}const ce=oe&1&&ie,ke=!Vs(A);let Re;if(ke&&(Re=Q&&Q.onVnodeBeforeUnmount)&&qt(Re,S,A),oe&6)Rn(A.component,L,j);else{if(oe&128){A.suspense.unmount(L,j);return}ce&&kn(A,null,S,"beforeUnmount"),oe&64?A.type.remove(A,S,L,se,j):q&&!q.hasOnce&&(W!==kt||Y>0&&Y&64)?$t(q,S,L,!1,!0):(W===kt&&Y&384||!U&&oe&16)&&$t(K,S,L),j&&Ye(A)}(ke&&(Re=Q&&Q.onVnodeUnmounted)||ce)&&yt(()=>{Re&&qt(Re,S,A),ce&&kn(A,null,S,"unmounted")},L)},Ye=A=>{const{type:S,el:L,anchor:j,transition:U}=A;if(S===kt){ms(L,j);return}if(S===Ro){N(A);return}const W=()=>{r(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(L,W);z?z(A.el,W,K):K()}else W()},ms=(A,S)=>{let L;for(;A!==S;)L=p(A),r(A),A=L;r(S)},Rn=(A,S,L)=>{const{bum:j,scope:U,job:W,subTree:Q,um:z,m:K,a:q,parent:oe,slots:{__:Y}}=A;Ml(K),Ml(q),j&&Io(j),oe&&ue(Y)&&Y.forEach(ie=>{oe.renderCache[ie]=void 0}),U.stop(),W&&(W.flags|=8,Qe(Q,A,S,L)),z&&yt(z,S),yt(()=>{A.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},$t=(A,S,L,j=!1,U=!1,W=0)=>{for(let Q=W;Q<A.length;Q++)Qe(A[Q],S,L,j,U)},B=A=>{if(A.shapeFlag&6)return B(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=p(A.anchor||A.el),L=S&&S[Q0];return L?p(L):S};let Z=!1;const X=(A,S,L)=>{A==null?S._vnode&&Qe(S._vnode,null,null,!0):T(S._vnode||null,A,S,null,null,null,L),S._vnode=A,Z||(Z=!0,hg(),kl(),Z=!1)},se={p:T,um:Qe,m:tn,r:Ye,mt:me,mc:E,pc:te,pbc:b,n:B,o:t};let we,xe;return e&&([we,xe]=e(se)),{render:X,hydrate:we,createApp:EC(X,we)}}function Ou({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $v(t,e,n=!1){const s=t.children,r=e.children;if(ue(s)&&ue(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=As(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&$v(o,a)),a.type===wr&&(a.el=o.el),a.type===tt&&!a.el&&(a.el=o.el)}}function PC(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wv(e)}function Ml(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const kC=Symbol.for("v-scx"),NC=()=>jt(kC);function OC(t,e){return jf(t,null,e)}function fi(t,e,n){return jf(t,e,n)}function jf(t,e,n=Fe){const{immediate:s,deep:r,flush:i,once:o}=n,a=gt({},n),c=e&&s||!e&&i!=="post";let u;if(bi){if(i==="sync"){const m=NC();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Mn,m.resume=Mn,m.pause=Mn,m}}const h=st;a.call=(m,_,T)=>Cn(m,h,_,T);let f=!1;i==="post"?a.scheduler=m=>{yt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,_)=>{_?m():xf(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=K0(t,e,a);return bi&&(u?u.push(p):c&&p()),p}function DC(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?qv(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ar(this),a=jf(r,i.bind(s),n);return o(),a}function qv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const MC=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function xC(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let r=n;const i=e.startsWith("update:"),o=i&&MC(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>ze(h)?h.trim():h)),o.number&&(r=n.map(l0)));let a,c=s[a=Iu(e)]||s[a=Iu(hn(e))];!c&&i&&(c=s[a=Iu(xr(e))]),c&&Cn(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(u,t,6,r)}}function Kv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!fe(t)){const c=u=>{const h=Kv(u,e,!0);h&&(a=!0,gt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Be(t)&&s.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):gt(o,i),Be(t)&&s.set(t,o),o)}function Rc(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,xr(e))||Oe(t,e))}function Du(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:_,inheritAttrs:T}=t,k=Nl(t);let D,O;try{if(n.shapeFlag&4){const N=r||s,M=N;D=Jt(u.call(M,N,h,f,m,p,_)),O=a}else{const N=e;D=Jt(N.length>1?N(f,{attrs:a,slots:o,emit:c}):N(f,null)),O=e.props?a:VC(a)}}catch(N){So.length=0,Fi(N,t,1),D=Je(tt)}let w=D;if(O&&T!==!1){const N=Object.keys(O),{shapeFlag:M}=w;N.length&&M&7&&(i&&N.some(bf)&&(O=FC(O,i)),w=is(w,O,!1,!0))}return n.dirs&&(w=is(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&wi(w,n.transition),D=w,Nl(k),D}function LC(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(Cr(r)){if(r.type!==tt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const VC=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},FC=(t,e)=>{const n={};for(const s in t)(!bf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function UC(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Tg(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==s[p]&&!Rc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Tg(s,o,u):!0:!!o;return!1}function Tg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Rc(n,i))return!0}return!1}function Sc({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const xl=t=>t.__isSuspense;let _h=0;const BC={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){if(t==null)HC(e,n,s,r,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}jC(t,e,n,s,r,o,a,c,u)}},hydrate:$C,normalize:WC},$f=BC;function Go(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function HC(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:h}}=c,f=h("div"),p=t.suspense=zv(t,r,s,e,f,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,f,null,s,p,i,o),p.deps>0?(Go(t,"onPending"),Go(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),di(p,t.ssFallback)):p.resolve(!1,!0)}function jC(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:_,pendingBranch:T,isInFallback:k,isHydrating:D}=f;if(T)f.pendingBranch=p,mn(p,T)?(c(T,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():k&&(D||(c(_,m,n,s,r,null,i,o,a),di(f,m)))):(f.pendingId=_h++,D?(f.isHydrating=!1,f.activeBranch=T):u(T,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),k?(c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(c(_,m,n,s,r,null,i,o,a),di(f,m))):_&&mn(p,_)?(c(_,p,n,s,r,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&mn(p,_))c(_,p,n,s,r,f,i,o,a),di(f,p);else if(Go(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=_h++,c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:O,pendingId:w}=f;O>0?setTimeout(()=>{f.pendingId===w&&f.fallback(m)},O):O===0&&f.fallback(m)}}function zv(t,e,n,s,r,i,o,a,c,u,h=!1){const{p:f,m:p,um:m,n:_,o:{parentNode:T,remove:k}}=u;let D;const O=qC(t);O&&e&&e.pendingBranch&&(D=e.pendingId,e.deps++);const w=t.props?Uy(t.props.timeout):void 0,N=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:_h++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(F=!1,I=!1){const{vnode:E,activeBranch:v,pendingBranch:b,pendingId:P,effects:R,parentComponent:C,container:me}=M;let Ee=!1;M.isHydrating?M.isHydrating=!1:F||(Ee=v&&b.transition&&b.transition.mode==="out-in",Ee&&(v.transition.afterLeave=()=>{P===M.pendingId&&(p(b,me,i===N?_(v):i,0),hh(R))}),v&&(T(v.el)===me&&(i=_(v)),m(v,C,M,!0)),Ee||p(b,me,i,0)),di(M,b),M.pendingBranch=null,M.isInFallback=!1;let ne=M.parent,he=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...R),he=!0;break}ne=ne.parent}!he&&!Ee&&hh(R),M.effects=[],O&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),Go(E,"onResolve")},fallback(F){if(!M.pendingBranch)return;const{vnode:I,activeBranch:E,parentComponent:v,container:b,namespace:P}=M;Go(I,"onFallback");const R=_(E),C=()=>{M.isInFallback&&(f(null,F,b,R,v,null,P,a,c),di(M,F))},me=F.transition&&F.transition.mode==="out-in";me&&(E.transition.afterLeave=C),M.isInFallback=!0,m(E,v,null,!0),me||C()},move(F,I,E){M.activeBranch&&p(M.activeBranch,F,I,E),M.container=F},next(){return M.activeBranch&&_(M.activeBranch)},registerDep(F,I,E){const v=!!M.pendingBranch;v&&M.deps++;const b=F.vnode.el;F.asyncDep.catch(P=>{Fi(P,F,0)}).then(P=>{if(F.isUnmounted||M.isUnmounted||M.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:R}=F;Eh(F,P),b&&(R.el=b);const C=!b&&F.subTree.el;I(F,R,T(b||F.subTree.el),b?null:_(F.subTree),M,o,E),C&&k(C),Sc(F,R.el),v&&--M.deps===0&&M.resolve()})},unmount(F,I){M.isUnmounted=!0,M.activeBranch&&m(M.activeBranch,n,F,I),M.pendingBranch&&m(M.pendingBranch,n,F,I)}};return M}function $C(t,e,n,s,r,i,o,a,c){const u=e.suspense=zv(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function WC(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=wg(s?n.default:n),t.ssFallback=s?wg(n.fallback):Je(tt)}function wg(t){let e;if(fe(t)){const n=Ii&&t._c;n&&(t._d=!1,on()),t=t(),n&&(t._d=!0,e=Gt,Qv())}return ue(t)&&(t=LC(t)),t=Jt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Gv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):hh(t)}function di(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Sc(s,r))}function qC(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const kt=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),So=[];let Gt=null;function on(t=!1){So.push(Gt=t?null:[])}function Qv(){So.pop(),Gt=So[So.length-1]||null}let Ii=1;function Ig(t,e=!1){Ii+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Yv(t){return t.dynamicChildren=Ii>0?Gt||li:null,Qv(),Ii>0&&Gt&&Gt.push(t),t}function KC(t,e,n,s,r,i){return Yv(Xv(t,e,n,s,r,i,!0))}function On(t,e,n,s,r){return Yv(Je(t,e,n,s,r,!0))}function Cr(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const Jv=({key:t})=>t??null,hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||ot(t)||fe(t)?{i:it,r:t,k:e,f:!!n}:t:null);function Xv(t,e=null,n=null,s=0,r=null,i=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jv(e),ref:e&&hl(e),scopeId:dv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:it};return a?(Wf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Ii>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const Je=zC;function zC(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Rv)&&(t=tt),Cr(t)){const a=is(t,e,!0);return n&&Wf(a,n),Ii>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag=-2,a}if(tA(t)&&(t=t.__vccOpts),e){e=Zv(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=bc(a)),Be(c)&&(Mf(c)&&!ue(c)&&(c=gt({},c)),e.style=Ic(c))}const o=ze(t)?1:xl(t)?128:pv(t)?64:Be(t)?4:fe(t)?2:0;return Xv(t,e,n,s,r,o,i,!0)}function Zv(t){return t?Mf(t)||xv(t)?gt({},t):t:null}function is(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?tE(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Jv(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(hl(e)):[i,hl(e)]:hl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&is(t.ssContent),ssFallback:t.ssFallback&&is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&wi(h,c.clone(h)),h}function eE(t=" ",e=0){return Je(wr,null,t,e)}function X2(t,e){const n=Je(Ro,null,t);return n.staticCount=e,n}function Z2(t="",e=!1){return e?(on(),On(tt,null,t)):Je(tt,null,t)}function Jt(t){return t==null||typeof t=="boolean"?Je(tt):ue(t)?Je(kt,null,t.slice()):Cr(t)?As(t):Je(wr,null,String(t))}function As(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:is(t)}function Wf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Wf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!xv(e)?e._ctx=it:r===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:it},n=32):(e=String(e),s&64?(n=16,e=[eE(e)]):n=8);t.children=e,t.shapeFlag|=n}function tE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bc([e.class,s.class]));else if(r==="style")e.style=Ic([e.style,s.style]);else if(ua(r)){const i=e[r],o=s[r];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function qt(t,e,n,s=null){Cn(t,e,7,[n,s])}const GC=Ov();let QC=0;function YC(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||GC,i={uid:QC++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $y(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vv(s,r),emitsOptions:Kv(s,r),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xC.bind(null,i),t.ce&&t.ce(i),i}let st=null;const ga=()=>st||it;let Ll,yh;{const t=wc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ll=e("__VUE_INSTANCE_SETTERS__",n=>st=n),yh=e("__VUE_SSR_SETTERS__",n=>bi=n)}const Ar=t=>{const e=st;return Ll(t),t.scope.on(),()=>{t.scope.off(),Ll(e)}},vh=()=>{st&&st.scope.off(),Ll(null)};function nE(t){return t.vnode.shapeFlag&4}let bi=!1;function JC(t,e=!1,n=!1){e&&yh(e);const{props:s,children:r}=t.vnode,i=nE(t);TC(t,s,i,e),CC(t,r,n||e);const o=i?XC(t,e):void 0;return e&&yh(!1),o}function XC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dC);const{setup:s}=n;if(s){ns();const r=t.setupContext=s.length>1?eA(t):null,i=Ar(t),o=fa(s,t,0,[t.props,r]),a=Af(o);if(ss(),i(),(a||t.sp)&&!Vs(t)&&Vf(t),a){if(o.then(vh,vh),e)return o.then(c=>{Eh(t,c)}).catch(c=>{Fi(c,t,0)});t.asyncDep=o}else Eh(t,o)}else sE(t)}function Eh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=cv(e)),sE(t)}function sE(t,e,n){const s=t.type;t.render||(t.render=s.render||Mn);{const r=Ar(t);ns();try{pC(t)}finally{ss(),r()}}}const ZC={get(t,e){return Pt(t,"get",""),t[e]}};function eA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ZC),slots:t.slots,emit:t.emit,expose:e}}function Pc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cv(av(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ao)return Ao[n](t)},has(e,n){return n in e||n in Ao}})):t.proxy}function Th(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function tA(t){return fe(t)&&"__vccOpts"in t}const an=(t,e)=>W0(t,e,bi);function Mt(t,e,n){const s=arguments.length;return s===2?Be(e)&&!ue(e)?Cr(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Cr(n)&&(n=[n]),Je(t,e,n))}const nA="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wh;const bg=typeof window<"u"&&window.trustedTypes;if(bg)try{wh=bg.createPolicy("vue",{createHTML:t=>t})}catch{}const rE=wh?t=>wh.createHTML(t):t=>t,sA="http://www.w3.org/2000/svg",rA="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,Cg=Gn&&Gn.createElement("template"),iA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Gn.createElementNS(sA,t):e==="mathml"?Gn.createElementNS(rA,t):n?Gn.createElement(t,{is:n}):Gn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Cg.innerHTML=rE(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Cg.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ws="transition",co="animation",Qo=Symbol("_vtc"),iE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oA=gt({},gv,iE),aA=t=>(t.displayName="Transition",t.props=oA,t),lA=aA((t,{slots:e})=>Mt(X0,cA(t),e)),cr=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ag=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function cA(t){const e={};for(const R in t)R in iE||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=uA(r),T=_&&_[0],k=_&&_[1],{onBeforeEnter:D,onEnter:O,onEnterCancelled:w,onLeave:N,onLeaveCancelled:M,onBeforeAppear:F=D,onAppear:I=O,onAppearCancelled:E=w}=e,v=(R,C,me,Ee)=>{R._enterCancelled=Ee,ur(R,C?h:a),ur(R,C?u:o),me&&me()},b=(R,C)=>{R._isLeaving=!1,ur(R,f),ur(R,m),ur(R,p),C&&C()},P=R=>(C,me)=>{const Ee=R?I:O,ne=()=>v(C,R,me);cr(Ee,[C,ne]),Rg(()=>{ur(C,R?c:i),qn(C,R?h:a),Ag(Ee)||Sg(C,s,T,ne)})};return gt(e,{onBeforeEnter(R){cr(D,[R]),qn(R,i),qn(R,o)},onBeforeAppear(R){cr(F,[R]),qn(R,c),qn(R,u)},onEnter:P(!1),onAppear:P(!0),onLeave(R,C){R._isLeaving=!0;const me=()=>b(R,C);qn(R,f),R._enterCancelled?(qn(R,p),Ng()):(Ng(),qn(R,p)),Rg(()=>{R._isLeaving&&(ur(R,f),qn(R,m),Ag(N)||Sg(R,s,k,me))}),cr(N,[R,me])},onEnterCancelled(R){v(R,!1,void 0,!0),cr(w,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),cr(E,[R])},onLeaveCancelled(R){b(R),cr(M,[R])}})}function uA(t){if(t==null)return null;if(Be(t))return[Mu(t.enter),Mu(t.leave)];{const e=Mu(t);return[e,e]}}function Mu(t){return Uy(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qo]||(t[Qo]=new Set)).add(e)}function ur(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Qo];n&&(n.delete(e),n.size||(t[Qo]=void 0))}function Rg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hA=0;function Sg(t,e,n,s){const r=t._endId=++hA,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=fA(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function fA(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),r=s(`${ws}Delay`),i=s(`${ws}Duration`),o=Pg(r,i),a=s(`${co}Delay`),c=s(`${co}Duration`),u=Pg(a,c);let h=null,f=0,p=0;e===ws?o>0&&(h=ws,f=o,p=i.length):e===co?u>0&&(h=co,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?ws:co:null,p=h?h===ws?i.length:c.length:0);const m=h===ws&&/\b(transform|all)(,|$)/.test(s(`${ws}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:m}}function Pg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>kg(n)+kg(t[s])))}function kg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ng(){return document.body.offsetHeight}function dA(t,e,n){const s=t[Qo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Vl=Symbol("_vod"),oE=Symbol("_vsh"),eU={beforeMount(t,{value:e},{transition:n}){t[Vl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):uo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),uo(t,!0),s.enter(t)):s.leave(t,()=>{uo(t,!1)}):uo(t,e))},beforeUnmount(t,{value:e}){uo(t,e)}};function uo(t,e){t.style.display=e?t[Vl]:"none",t[oE]=!e}const pA=Symbol(""),gA=/(^|;)\s*display\s*:/;function mA(t,e,n){const s=t.style,r=ze(n);let i=!1;if(n&&!r){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fl(s,a,"")}else for(const o in e)n[o]==null&&fl(s,o,"");for(const o in n)o==="display"&&(i=!0),fl(s,o,n[o])}else if(r){if(e!==n){const o=s[pA];o&&(n+=";"+o),s.cssText=n,i=gA.test(n)}}else e&&t.removeAttribute("style");Vl in t&&(t[Vl]=i?s.display:"",t[oE]&&(s.display="none"))}const Og=/\s*!important$/;function fl(t,e,n){if(ue(n))n.forEach(s=>fl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_A(t,e);Og.test(n)?t.setProperty(xr(s),n.replace(Og,""),"important"):t[s]=n}}const Dg=["Webkit","Moz","ms"],xu={};function _A(t,e){const n=xu[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return xu[e]=s;s=Tc(s);for(let r=0;r<Dg.length;r++){const i=Dg[r]+s;if(i in t)return xu[e]=i}return e}const Mg="http://www.w3.org/1999/xlink";function xg(t,e,n,s,r,i=g0(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mg,e.slice(6,e.length)):t.setAttributeNS(Mg,e,n):n==null||i&&!By(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fs(n)?String(n):n)}function Lg(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=By(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function yA(t,e,n,s){t.addEventListener(e,n,s)}function vA(t,e,n,s){t.removeEventListener(e,n,s)}const Vg=Symbol("_vei");function EA(t,e,n,s,r=null){const i=t[Vg]||(t[Vg]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=TA(e);if(s){const u=i[e]=bA(s,r);yA(t,a,u,c)}else o&&(vA(t,a,o,c),i[e]=void 0)}}const Fg=/(?:Once|Passive|Capture)$/;function TA(t){let e;if(Fg.test(t)){e={};let s;for(;s=t.match(Fg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let Lu=0;const wA=Promise.resolve(),IA=()=>Lu||(wA.then(()=>Lu=0),Lu=Date.now());function bA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Cn(CA(s,n.value),e,5,[s])};return n.value=t,n.attached=IA(),n}function CA(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ug=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AA=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?dA(t,s,o):e==="style"?mA(t,n,s):ua(e)?bf(e)||EA(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RA(t,e,s,o))?(Lg(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xg(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(s))?Lg(t,hn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xg(t,e,s,o))};function RA(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ug(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ug(e)&&ze(n)?!1:e in t}const SA=["ctrl","shift","alt","meta"],PA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>SA.some(n=>t[`${n}Key`]&&!e.includes(n))},tU=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=PA[e[o]];if(a&&a(r,e))return}return t(r,...i)})},aE=gt({patchProp:AA},iA);let Po,Bg=!1;function kA(){return Po||(Po=RC(aE))}function NA(){return Po=Bg?Po:SC(aE),Bg=!0,Po}const OA=(...t)=>{const e=kA().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cE(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,lE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},DA=(...t)=>{const e=NA().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cE(s);if(r)return n(r,!0,lE(r))},e};function lE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cE(t){return ze(t)?document.querySelector(t):t}const MA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,xA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,LA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function VA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){FA(t);return}return e}function FA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Fl(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!LA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(MA.test(t)||xA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,VA)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const UA=/#/g,BA=/&/g,HA=/\//g,jA=/=/g,qf=/\+/g,$A=/%5e/gi,WA=/%60/gi,qA=/%7c/gi,KA=/%20/gi;function zA(t){return encodeURI(""+t).replace(qA,"|")}function Ih(t){return zA(typeof t=="string"?t:JSON.stringify(t)).replace(qf,"%2B").replace(KA,"+").replace(UA,"%23").replace(BA,"%26").replace(WA,"`").replace($A,"^").replace(HA,"%2F")}function Vu(t){return Ih(t).replace(jA,"%3D")}function Ul(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function GA(t){return Ul(t.replace(qf," "))}function QA(t){return Ul(t.replace(qf," "))}function uE(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=GA(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=QA(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function YA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Vu(t)}=${Ih(n)}`).join("&"):`${Vu(t)}=${Ih(e)}`:Vu(t)}function JA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>YA(e,t[e])).filter(Boolean).join("&")}const XA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,ZA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,eR=/^([/\\]\s*){2,}[^/\\]/,tR=/^[\s\0]*(blob|data|javascript|vbscript):$/i,nR=/\/$|\/\?|\/#/,sR=/^\.?\//;function Lr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?XA.test(t):ZA.test(t)||(e.acceptRelative?eR.test(t):!1)}function rR(t){return!!t&&tR.test(t)}function bh(t="",e){return e?nR.test(t):t.endsWith("/")}function Yo(t="",e){if(!e)return(bh(t)?t.slice(0,-1):t)||"/";if(!bh(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function iR(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(bh(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function oR(t,e){if(fE(e)||Lr(t))return t;const n=Yo(e);return t.startsWith(n)?t:Kf(n,t)}function Hg(t,e){if(fE(e))return t;const n=Yo(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function hE(t,e){const n=gE(t),s={...uE(n.search),...e};return n.search=JA(s),cR(n)}function fE(t){return!t||t==="/"}function aR(t){return t&&t!=="/"}function Kf(t,...e){let n=t||"";for(const s of e.filter(r=>aR(r)))if(n){const r=s.replace(sR,"");n=iR(n)+r}else n=s;return n}function dE(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(s.length===1&&Lr(s[0]))continue;s.pop(),r--;continue}if(f===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+p;continue}s.push(p),r++}}let i=s.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function lR(t,e){return Ul(Yo(t))===Ul(Yo(e))}const pE=Symbol.for("ufo:protocolRelative");function gE(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!Lr(t,{acceptRelative:!0}))return jg(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=jg(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:c,search:u,hash:h,[pE]:!s}}function jg(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function cR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[pE]?(t.protocol||"")+"//":"")+r+i+e+n+s}class uR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function hR(t){var c,u,h,f,p;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",s=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new uR(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[_]}});return a}const fR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function $g(t="GET"){return fR.has(t.toUpperCase())}function dR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const pR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),gR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return gR.test(e)?"json":pR.has(e)||e.startsWith("text/")?"text":"blob"}function _R(t,e,n,s){const r=yR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:r}}function yR(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function Za(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const vR=new Set([408,409,425,429,500,502,503,504]),ER=new Set([101,204,205,304]);function mE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let h;typeof a.options.retry=="number"?h=a.options.retry:h=$g(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):vR.has(f))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=hR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const h={request:c,options:_R(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Za(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=oR(h.request,h.options.baseURL)),h.options.query&&(h.request=hE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&$g(h.options.method)&&(dR(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const m=new s;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,m.abort(_)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await Za(h,h.options.onRequestError),await r(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!ER.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||mR(h.response.headers.get("content-type")||"");switch(m){case"json":{const _=await h.response.text(),T=h.options.parseResponse||Fl;h.response._data=T(_);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await Za(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Za(h,h.options.onResponseError),await r(h)):h.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>mE({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Bl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),TR=Bl.fetch?(...t)=>Bl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),wR=Bl.Headers,IR=Bl.AbortController,bR=mE({fetch:TR,Headers:wR,AbortController:IR}),CR=bR,AR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Hl=AR().app,RR=()=>Hl.baseURL,SR=()=>Hl.buildAssetsDir,zf=(...t)=>dE(_E(),SR(),...t),_E=(...t)=>{const e=Hl.cdnURL||Hl.baseURL;return t.length?dE(e,...t):e};globalThis.__buildAssetsURL=zf,globalThis.__publicAssetsURL=_E;globalThis.$fetch||(globalThis.$fetch=CR.create({baseURL:RR()}));function Ch(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Ch(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const PR={run:t=>t()},kR=()=>PR,yE=typeof console.createTask<"u"?console.createTask:kR;function NR(t,e){const n=e.shift(),s=yE(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function OR(t,e){const n=e.shift(),s=yE(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function Fu(t,e){for(const n of[...t])n(e)}class DR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ch(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Ch(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(NR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(OR,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Fu(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Fu(this._after,r)}):(this._after&&r&&Fu(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function vE(){return new DR}function MR(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Ah.add(u);try{const h=r?r.run(o,a):a();return n||(e=void 0),await h}finally{Ah.delete(u)}}}}function xR(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=MR({...t,...s})),e[n]}}}const jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Wg="__unctx__",LR=jl[Wg]||(jl[Wg]=xR()),VR=(t,e={})=>LR.get(t,e),qg="__unctx_async_handlers__",Ah=jl[qg]||(jl[qg]=new Set);function pi(t){const e=[];for(const r of Ah){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const FR=!1,Kg=!1,UR=!1,nU={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},BR=null,HR="#__nuxt",EE="nuxt-app",zg=36e5,jR="vite:preloadError";function TE(t=EE){return VR(t,{asyncContext:!1})}const $R="__nuxt_plugin";function WR(t){var r;let e=0;const n={_id:t.id||EE||"nuxt-app",_scope:Wy(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.17.3"},get vue(){return n.vueApp.version}},payload:Jn({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:Jn({}),state:er({}),once:new Set,_errors:Jn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!qy()?n._scope.run(()=>Gg(n,i)):Gg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Jn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=vE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;el(n,a,o),el(n.vueApp.config.globalProperties,a,o)},el(n.vueApp,"$nuxt",n),el(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(jR,o=>{n.callHook("app:chunkError",{error:o.payload}),o.payload.message.includes("Unable to preload CSS")&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=ct);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}function qR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function KR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function zR(t,e){const n=[],s=[],r=[],i=[];let o=0;async function a(c){var h;const u=((h=c.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)s.push([new Set(u),c]);else{const f=KR(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(s.map(async([p,m])=>{p.has(c._name)&&(p.delete(c._name),p.size===0&&(o++,await a(m)))})))});c.parallel?r.push(f.catch(p=>i.push(p))):await f}}for(const c of e)qR(t,c);for(const c of e)await a(c);if(await Promise.all(r),o)for(let c=0;c<o;c++)await Promise.all(r);if(i.length)throw i[0]}function dn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[$R]:!0,_name:e})}const GR=dn;function Gg(t,e,n){const s=()=>e();return TE(t._id).set(t),t.vueApp.runWithContext(s)}function QR(t){var n;let e;return Uf()&&(e=(n=ga())==null?void 0:n.appContext.app.$nuxt),e||(e=TE(t).tryUse()),e||null}function ct(t){const e=QR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function kc(t){return ct().$config}function el(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function YR(t,e){return{ctx:{table:t},matchAll:n=>IE(n,t)}}function wE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,wE(r)])):new Map(Object.entries(t[n]));return e}function JR(t){return YR(wE(t))}function IE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of Qg(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of Qg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...IE(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function Qg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Uu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Rh(t,e,n=".",s){if(!Uu(e))return Rh(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Uu(o)&&Uu(r[i])?r[i]=Rh(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function XR(t){return(...e)=>e.reduce((n,s)=>Rh(n,s,"",t),{})}const bE=XR();function ZR(t,e){try{return e in t}catch{return!1}}class Sh extends Error{constructor(n,s={}){super(n,s);Ts(this,"statusCode",500);Ts(this,"fatal",!1);Ts(this,"unhandled",!1);Ts(this,"statusMessage");Ts(this,"data");Ts(this,"cause");s.cause&&!this.cause&&(this.cause=s.cause)}toJSON(){const n={message:this.message,statusCode:Ph(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=CE(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Ts(Sh,"__h3_error__",!0);function eS(t){if(typeof t=="string")return new Sh(t);if(tS(t))return t;const e=new Sh(t.message??t.statusMessage??"",{cause:t.cause||t});if(ZR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Ph(t.statusCode,e.statusCode):t.status&&(e.statusCode=Ph(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;CE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function tS(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const nS=/[^\u0009\u0020-\u007E]/g;function CE(t=""){return t.replace(nS,"")}function Ph(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const AE=Symbol("layout-meta"),ma=Symbol("route"),en=()=>{var t;return(t=ct())==null?void 0:t.$router},Gf=()=>Uf()?jt(ma,ct()._route):ct()._route;const sS=()=>{try{if(ct()._processingMiddleware)return!0}catch{return!1}return!1},sU=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?rS(t):en().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,c,h),Promise.resolve()}const s=Lr(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||s;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&rR(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=sS();if(!r&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:c,search:u,hash:h}=gE(t);return{path:c,...u&&{query:uE(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=en(),a=ct();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function rS(t){return hE(t.path||"",t.query||{})+(t.hash||"")}const RE="__nuxt_error",Nc=()=>H0(ct().payload,"error"),dr=t=>{const e=Ir(t);try{const n=ct(),s=Nc();n.hooks.callHook("app:error",e),s.value||(s.value=e)}catch{throw e}return e},iS=async(t={})=>{const e=ct(),n=Nc();e.callHook("app:error:cleared",t),t.redirect&&await en().replace(t.redirect),n.value=BR},SE=t=>!!t&&typeof t=="object"&&RE in t,Ir=t=>{const e=eS(t);return Object.defineProperty(e,RE,{value:!0,configurable:!1,writable:!1}),e};/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const oS=Symbol();var Yg;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yg||(Yg={}));function aS(){const t=Wy(!0),e=t.run(()=>wn({}));let n=[],s=[];const r=av({install(i){r._a=i,i.provide(oS,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}function Jg(t){const e=cS(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const lS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function cS(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=lS.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const uS=-1,hS=-2,fS=-3,dS=-4,pS=-5,gS=-6;function mS(t,e){return _S(JSON.parse(t),e)}function _S(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===uS)return;if(i===fS)return NaN;if(i===dS)return 1/0;if(i===pS)return-1/0;if(i===gS)return-0;if(o)throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return s[i]=u(r(a[1]));switch(c){case"Date":s[i]=new Date(a[1]);break;case"Set":const h=new Set;s[i]=h;for(let m=1;m<a.length;m+=1)h.add(r(a[m]));break;case"Map":const f=new Map;s[i]=f;for(let m=1;m<a.length;m+=2)f.set(r(a[m]),r(a[m+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);s[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=r(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],_=a[1],T=Jg(_),k=new m(T);s[i]=k;break}case"ArrayBuffer":{const m=a[1],_=Jg(m);s[i]=_;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);s[i]=c;for(let u=0;u<a.length;u+=1){const h=a[u];h!==hS&&(c[u]=r(h))}}else{const c={};s[i]=c;for(const u in a){const h=a[u];c[u]=r(h)}}return s[i]}return r(0)}const yS=new Set(["link","style","script","noscript"]),vS=new Set(["title","titleTemplate","script","style","noscript"]),Xg=new Set(["base","meta","link","style","script","noscript"]),ES=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),TS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),wS=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),IS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),bS=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const CS=["name","property","http-equiv"];function PE(t){const e=t.split(":")[1];return bS.has(e)}function kh(t){const{props:e,tag:n}=t;if(TS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of CS)if(e[s]!==void 0)return`${n}:${e[s]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(vS.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Zg(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,r])=>`${s}:${String(r)}`).join(",")}`}function $l(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(i=>$l(i,e));if((r==null?void 0:r.constructor)===Object){const i={};for(const o of Object.keys(r))i[o]=$l(r[o],e,o);return i}return r}function AS(t,e){const n=t==="style"?new Map:new Set;function s(r){const i=r.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(c=>c.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(r=>s(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,i])=>{i&&i!=="false"&&(t==="style"?n.set(r.trim(),i):s(r))}),n}function kE(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=AS(n,s);return}if(wS.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const r=String(s),i=n.startsWith("data-");r==="true"||r===""?t.props[n]=i?r:!0:!s&&i&&r==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t}function RS(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=kE({tag:t,props:{}},n);return s.key&&yS.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function SS(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,i)=>{for(let o=0;o<e.length;o++)i=e[o](r,i);return i};t=n(void 0,t);const s=[];return t=$l(t,n),Object.entries(t||{}).forEach(([r,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])s.push(RS(r,o))}),s.flat()}const Nh=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,em={base:-10,title:10},PS={critical:-8,high:-1,low:2},tm={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},kS=/@import/,ho=t=>t===""||t===!0;function NS(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=PS[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:tm;if(e.tag in em)n=em[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=tm.meta[o])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?ho(e.props.async)?n=r.script.async:e.props.src&&!ho(e.props.defer)&&!ho(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=r.script.sync:ho(e.props.defer)&&e.props.src&&!ho(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&kS.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+s}function nm(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function OS(t={}){var a;const e=vE();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,r=new Map,i=[],o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:c=>nm(o,c),push(c,u){const h={...u||{}};delete h.head;const f=h._index??o._entryCount++,p={_i:f,input:c,options:h},m={_poll(_=!1){o.dirty=!0,!_&&i.push(f),e.callHook("entries:updated",o)},dispose(){s.delete(f)&&m._poll(!0)},patch(_){(!h.mode||h.mode==="server"&&n||h.mode==="client"&&!n)&&(p.input=_,s.set(f,p),m._poll())}};return m.patch(c),m},async resolveTags(){var m;const c={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",c);i.length;){const _=i.shift(),T=s.get(_);if(T){const k={tags:SS(T.input,t.propResolvers||[]).map(D=>Object.assign(D,T.options)),entry:T};await e.callHook("entries:normalize",k),T._tags=k.tags.map((D,O)=>(D._w=NS(o,D),D._p=(T._i<<10)+O,D._d=kh(D),D))}}let u=!1;c.entries.flatMap(_=>(_._tags||[]).map(T=>({...T,props:{...T.props}}))).sort(Nh).reduce((_,T)=>{const k=String(T._d||T._p);if(!_.has(k))return _.set(k,T);const D=_.get(k);if(((T==null?void 0:T.tagDuplicateStrategy)||(IS.has(T.tag)?"merge":null)||(T.key&&T.key===D.key?"merge":null))==="merge"){const w={...D.props};Object.entries(T.props).forEach(([N,M])=>w[N]=N==="style"?new Map([...D.props.style||new Map,...M]):N==="class"?new Set([...D.props.class||new Set,...M]):M),_.set(k,{...T,props:w})}else T._p>>10===D._p>>10&&PE(T._d)?(_.set(k,Object.assign([...Array.isArray(D)?D:[D],T],T)),u=!0):(T._w===D._w?T._p>D._p:(T==null?void 0:T._w)<(D==null?void 0:D._w))&&_.set(k,T);return _},c.tagMap);const h=c.tagMap.get("title"),f=c.tagMap.get("titleTemplate");if(o._title=h==null?void 0:h.textContent,f){const _=f==null?void 0:f.textContent;if(o._titleTemplate=_,_){let T=typeof _=="function"?_(h==null?void 0:h.textContent):_;typeof T=="string"&&!o.plugins.has("template-params")&&(T=T.replace("%s",(h==null?void 0:h.textContent)||"")),h?T===null?c.tagMap.delete("title"):c.tagMap.set("title",{...h,textContent:T}):(f.tag="title",f.textContent=T)}}c.tags=Array.from(c.tagMap.values()),u&&(c.tags=c.tags.flat().sort(Nh)),await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c);const p=[];for(const _ of c.tags){const{innerHTML:T,tag:k,props:D}=_;if(ES.has(k)&&!(Object.keys(D).length===0&&!_.innerHTML&&!_.textContent)&&!(k==="meta"&&!D.content&&!D["http-equiv"]&&!D.charset)){if(k==="script"&&T){if((m=D.type)!=null&&m.endsWith("json")){const O=typeof T=="string"?T:JSON.stringify(T);_.innerHTML=O.replace(/</g,"\\u003C")}else typeof T=="string"&&(_.innerHTML=T.replace(new RegExp(`</${k}`,"g"),`<\\/${k}`));_._d=kh(_)}p.push(_)}}return p}};return((t==null?void 0:t.plugins)||[]).forEach(c=>nm(o,c)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(c=>c&&o.push(c)),o}const Rs="%separator",DS=new RegExp(`${Rs}(?:\\s*${Rs})*`,"g");function MS(t,e,n=!1){var r;let s;if(e==="s"||e==="pageTitle")s=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");s=(r=t[e.substring(0,i)])==null?void 0:r[e.substring(i+1)]}else s=t[e];if(s!==void 0)return n?(s||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):s||""}function tl(t,e,n,s=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const i=r.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Rs);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Rs||!i.includes(a))return a;const c=MS(e,a.slice(1),s);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Rs)&&(t=t.slice(0,-Rs.length)),t.startsWith(Rs)&&(t=t.slice(Rs.length)),t=t.replace(DS,n||"").trim()),t}const sm=t=>t.includes(":key")?t:t.split(":").join(":key:"),xS={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const s=n.tagPriority;if(!s)continue;const r=String(s);if(r.startsWith("before:")){const i=sm(r.slice(7)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p-1,e=!0)}else if(r.startsWith("after:")){const i=sm(r.slice(6)),o=t.tagMap.get(i);o&&(typeof o.tagPriority=="number"&&(n.tagPriority=o.tagPriority),n._p=o._p+1,e=!0)}}e&&(t.tags=t.tags.sort(Nh))}}},LS={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function Oh(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>Oh(n)));if((t==null?void 0:t.constructor)===Object){const n={};for(const s of Object.keys(t))n[s]=await Oh(t[s]);return n}return t}const VS={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(Oh(t.entries[n].input).then(s=>{t.entries[n].input=s,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},FS={meta:"content",link:"href",htmlAttrs:"lang"},US=["innerHTML","textContent"],BS=t=>({key:"template-params",hooks:{"entries:normalize":e=>{var s,r,i;const n=((r=(s=e.tags.filter(o=>o.tag==="templateParams"&&o.mode==="server"))==null?void 0:s[0])==null?void 0:r.props)||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...((i=t._ssrPayload)==null?void 0:i.templateParams)||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{var i;const s=((i=e.get("templateParams"))==null?void 0:i.props)||{},r=s.separator||"|";delete s.separator,s.pageTitle=tl(s.pageTitle||t._title||"",s,r);for(const o of n){if(o.processTemplateParams===!1)continue;const a=FS[o.tag];if(a&&typeof o.props[a]=="string")o.props[a]=tl(o.props[a],s,r);else if(o.processTemplateParams||o.tag==="titleTemplate"||o.tag==="title")for(const c of US)typeof o[c]=="string"&&(o[c]=tl(o[c],s,r,o.tag==="script"&&o.props.type.endsWith("json")))}t._templateParams=s,t._separator=r},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n!=null&&n.textContent&&n.processTemplateParams!==!1&&(n.textContent=tl(n.textContent,t._templateParams,t._separator))}}}),HS=(t,e)=>ot(e)?V0(e):e,NE="usehead";function jS(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(NE,t)}}.install}function $S(){if(Uf()){const t=jt(NE);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function rU(t,e={}){const n=e.head||$S();return n.ssr?n.push(t||{},e):WS(n,t,e)}function WS(t,e,n={}){const s=wn(!1);let r;return OC(()=>{const o=s.value?{}:$l(e,HS);r?r.patch(o):r=t.push(o,n)}),ga()&&(pa(()=>{r.dispose()}),Tv(()=>{s.value=!0}),Ev(()=>{s.value=!1})),r}const qS="modulepreload",KS=function(t,e){return new URL(t,e).href},rm={},Ds=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=o(n.map(h=>{if(h=KS(h,s),h in rm)return;rm[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!s)for(let T=a.length-1;T>=0;T--){const k=a[T];if(k.href===h&&(!f||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":qS,f||(_.as="script"),_.crossOrigin="",_.href=h,u&&_.setAttribute("nonce",u),document.head.appendChild(_),f)return new Promise((T,k)=>{_.addEventListener("load",T),_.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let dl,pl;function zS(){return dl=$fetch(zf(`builds/meta/${kc().app.buildId}.json`),{responseType:"json"}),dl.then(t=>{pl=JR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),dl}function Oc(){return dl||zS()}async function Qf(t){const e=typeof t=="string"?t:t.path;if(await Oc(),!pl)return console.error("[nuxt] Error creating app manifest matcher.",pl),{};try{return bE({},...pl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function im(t,e={}){if(!await DE(t))return null;const s=await QS(t,e);return await OE(s)||null}const GS="_payload.json";async function QS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Lr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=kc(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await DE(t)?i:s.app.baseURL;return Kf(o,n.pathname,GS+(r?`?${r}`:""))}async function OE(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(ME));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function DE(t=Gf().path){const e=ct();return t=Yo(t),(await Oc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await Qf({path:t});return!!s.prerender&&!s.redirect})}let hr=null;async function YS(){var s;if(hr)return hr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await ME(t.textContent||""),n=t.dataset.src?await OE(t.dataset.src):void 0;return hr={...e,...n,...window.__NUXT__},(s=hr.config)!=null&&s.public&&(hr.config.public=er(hr.config.public)),hr}async function ME(t){return await mS(t,ct()._payloadRevivers)}function xE(t,e){ct()._payloadRevivers[t]=e}const JS=GR(()=>{xE("skipHydrate",t=>{})}),XS=[["NuxtError",t=>Ir(t)],["EmptyShallowRef",t=>qo(t==="_"?void 0:t==="0n"?BigInt(0):Fl(t))],["EmptyRef",t=>wn(t==="_"?void 0:t==="0n"?BigInt(0):Fl(t))],["ShallowRef",t=>qo(t)],["ShallowReactive",t=>Jn(t)],["Ref",t=>wn(t)],["Reactive",t=>er(t)]],ZS=dn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of XS)xE(s,r);Object.assign(t.payload,([e,n]=pi(()=>t.runWithContext(YS)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function Yf(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var m;const i=new Map,o=new Promise(_=>{t.resolveTags().then(T=>{_(T.map(k=>{const D=i.get(k._d)||0,O={tag:k,id:(D?`${k._d}:${D}`:k._d)||Zg(k),shouldRender:!0};return k._d&&PE(k._d)&&i.set(k._d,D+1),O}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const _ of["body","head"]){const T=(m=n[_])==null?void 0:m.children;for(const k of T){const D=k.tagName.toLowerCase();if(!Xg.has(D))continue;const O=kE({tag:D,props:{}},{innerHTML:k.innerHTML,...k.getAttributeNames().reduce((w,N)=>(w[N]=k.getAttribute(N),w),{})||{}});if(O.key=k.getAttribute("data-hid")||void 0,O._d=kh(O)||Zg(O),a.elMap.has(O._d)){let w=1,N=O._d;for(;a.elMap.has(N);)N=`${O._d}:${w++}`;a.elMap.set(N,k)}else a.elMap.set(O._d,k)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function c(_,T,k){const D=`${_}:${T}`;a.sideEffects[D]=k,delete a.pendingSideEffects[D]}function u({id:_,$el:T,tag:k}){const D=k.tag.endsWith("Attrs");a.elMap.set(_,T),D||(k.textContent&&k.textContent!==T.textContent&&(T.textContent=k.textContent),k.innerHTML&&k.innerHTML!==T.innerHTML&&(T.innerHTML=k.innerHTML),c(_,"el",()=>{T==null||T.remove(),a.elMap.delete(_)}));for(const O in k.props){if(!Object.prototype.hasOwnProperty.call(k.props,O))continue;const w=k.props[O];if(O.startsWith("on")&&typeof w=="function"){const M=T==null?void 0:T.dataset;if(M&&M[`${O}fired`]){const F=O.slice(0,-5);w.call(T,new Event(F.substring(2)))}T.getAttribute(`data-${O}`)!==""&&((k.tag==="bodyAttrs"?n.defaultView:T).addEventListener(O.substring(2),w.bind(T)),T.setAttribute(`data-${O}`,""));continue}const N=`attr:${O}`;if(O==="class"){if(!w)continue;for(const M of w)D&&c(_,`${N}:${M}`,()=>T.classList.remove(M)),!T.classList.contains(M)&&T.classList.add(M)}else if(O==="style"){if(!w)continue;for(const[M,F]of w)c(_,`${N}:${M}`,()=>{T.style.removeProperty(M)}),T.style.setProperty(M,F)}else w!==!1&&w!==null&&(T.getAttribute(O)!==w&&T.setAttribute(O,w===!0?"":String(w)),D&&c(_,N,()=>T.removeAttribute(O)))}}const h=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const _ of p){const{tag:T,shouldRender:k,id:D}=_;if(k){if(T.tag==="title"){n.title=T.textContent,c("title","",()=>n.title=a.title);continue}_.$el=_.$el||a.elMap.get(D),_.$el?u(_):Xg.has(T.tag)&&h.push(_)}}for(const _ of h){const T=_.tag.tagPosition||"head";_.$el=n.createElement(_.tag.tag),u(_),f[T]=f[T]||n.createDocumentFragment(),f[T].appendChild(_.$el)}for(const _ of p)await t.hooks.callHook("dom:renderTag",_,n,c);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const _ in a.pendingSideEffects)a.pendingSideEffects[_]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function eP(t={}){var s,r,i;const e=((s=t.domOptions)==null?void 0:s.render)||Yf;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(r=t.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return OS({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function tP(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function nP(t={}){const e=eP({domOptions:{render:tP(()=>Yf(e),n=>setTimeout(n,0))},...t});return e.install=jS(e),e}const sP={disableDefaults:!0,disableCapoSorting:!1,plugins:[LS,VS,BS,xS]},rP=dn({name:"nuxt:head",enforce:"pre",setup(t){const e=nP(sP);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await Yf(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Zr=typeof document<"u";function LE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&LE(t.default)}const Ne=Object.assign;function Bu(t,e){const n={};for(const s in e){const r=e[s];n[s]=An(r)?r.map(t):t(r)}return n}const ko=()=>{},An=Array.isArray,VE=/#/g,oP=/&/g,aP=/\//g,lP=/=/g,cP=/\?/g,FE=/\+/g,uP=/%5B/g,hP=/%5D/g,UE=/%5E/g,fP=/%60/g,BE=/%7B/g,dP=/%7C/g,HE=/%7D/g,pP=/%20/g;function Jf(t){return encodeURI(""+t).replace(dP,"|").replace(uP,"[").replace(hP,"]")}function gP(t){return Jf(t).replace(BE,"{").replace(HE,"}").replace(UE,"^")}function Dh(t){return Jf(t).replace(FE,"%2B").replace(pP,"+").replace(VE,"%23").replace(oP,"%26").replace(fP,"`").replace(BE,"{").replace(HE,"}").replace(UE,"^")}function mP(t){return Dh(t).replace(lP,"%3D")}function _P(t){return Jf(t).replace(VE,"%23").replace(cP,"%3F")}function yP(t){return t==null?"":_P(t).replace(aP,"%2F")}function Jo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vP=/\/$/,EP=t=>t.replace(vP,"");function Hu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=bP(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Jo(o)}}function TP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wP(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ci(e.matched[s],n.matched[r])&&jE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ci(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IP(t[n],e[n]))return!1;return!0}function IP(t,e){return An(t)?am(t,e):An(e)?am(e,t):t===e}function am(t,e){return An(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function bP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xo;(function(t){t.pop="pop",t.push="push"})(Xo||(Xo={}));var No;(function(t){t.back="back",t.forward="forward",t.unknown=""})(No||(No={}));function CP(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),EP(t)}const AP=/^[^#]+#/;function RP(t,e){return t.replace(AP,"#")+e}function SP(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Dc=()=>({left:window.scrollX,top:window.scrollY});function PP(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=SP(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lm(t,e){return(history.state?history.state.position-e:-1)+t}const Mh=new Map;function kP(t,e){Mh.set(t,e)}function NP(t){const e=Mh.get(t);return Mh.delete(t),e}let OP=()=>location.protocol+"//"+location.host;function $E(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),om(c,"")}return om(n,t)+s+r}function DP(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=$E(t,location),_=n.value,T=e.value;let k=0;if(p){if(n.value=m,e.value=p,o&&o===_){o=null;return}k=T?p.position-T.position:0}else s(m);r.forEach(D=>{D(n.value,_,{delta:k,type:Xo.pop,direction:k?k>0?No.forward:No.back:No.unknown})})};function c(){o=n.value}function u(p){r.push(p);const m=()=>{const _=r.indexOf(p);_>-1&&r.splice(_,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:Dc()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function cm(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Dc():null}}function MP(t){const{history:e,location:n}=window,s={value:$E(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:OP()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ne({},e.state,cm(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Ne({},r.value,e.state,{forward:c,scroll:Dc()});i(h.current,h,!0);const f=Ne({},cm(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function xP(t){t=CP(t);const e=MP(t),n=DP(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ne({location:"",base:t,go:s,createHref:RP.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function LP(t){return typeof t=="string"||t&&typeof t=="object"}function WE(t){return typeof t=="string"||typeof t=="symbol"}const qE=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function Ai(t,e){return Ne(new Error,{type:t,[qE]:!0},e)}function Kn(t,e){return t instanceof Error&&qE in t&&(e==null||!!(t.type&e))}const hm="[^/]+?",VP={sensitive:!1,strict:!1,start:!0,end:!0},FP=/[.+*?^${}()[\]/\\]/g;function UP(t,e){const n=Ne({},VP,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(FP,"\\$&"),m+=40;else if(p.type===1){const{value:_,repeatable:T,optional:k,regexp:D}=p;i.push({name:_,repeatable:T,optional:k});const O=D||hm;if(O!==hm){m+=10;try{new RegExp(`(${O})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+N.message)}}let w=T?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(w=k&&u.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),r+=w,m+=20,k&&(m+=-8),T&&(m+=-20),O===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",_=i[p-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:_,repeatable:T,optional:k}=m,D=_ in u?u[_]:"";if(An(D)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=An(D)?D.join("/"):D;if(!O)if(k)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=O}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function BP(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function KE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=BP(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(fm(s))return 1;if(fm(r))return-1}return r.length-s.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HP={type:0,value:""},jP=/[a-zA-Z0-9_]/;function $P(t){if(!t)return[[]];if(t==="/")return[[HP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:jP.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function WP(t,e,n){const s=UP($P(t.path),n),r=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qP(t,e){const n=[],s=new Map;e=mm({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,m){const _=!m,T=pm(f);T.aliasOf=m&&m.record;const k=mm(e,f),D=[T];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of N)D.push(pm(Ne({},T,{components:m?m.record.components:T.components,path:M,aliasOf:m?m.record:T})))}let O,w;for(const N of D){const{path:M}=N;if(p&&M[0]!=="/"){const F=p.record.path,I=F[F.length-1]==="/"?"":"/";N.path=p.record.path+(M&&I+M)}if(O=WP(N,p,k),m?m.alias.push(O):(w=w||O,w!==O&&w.alias.push(O),_&&f.name&&!gm(O)&&o(f.name)),zE(O)&&c(O),T.children){const F=T.children;for(let I=0;I<F.length;I++)i(F[I],O,m&&m.children[I])}m=m||O}return w?()=>{o(w)}:ko}function o(f){if(WE(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=GP(f,n);n.splice(p,0,f),f.record.name&&!gm(f)&&s.set(f.record.name,f)}function u(f,p){let m,_={},T,k;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw Ai(1,{location:f});k=m.record.name,_=Ne(dm(p.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&dm(f.params,m.keys.map(w=>w.name))),T=m.stringify(_)}else if(f.path!=null)T=f.path,m=n.find(w=>w.re.test(T)),m&&(_=m.parse(T),k=m.record.name);else{if(m=p.name?s.get(p.name):n.find(w=>w.re.test(p.path)),!m)throw Ai(1,{location:f,currentLocation:p});k=m.record.name,_=Ne({},p.params,f.params),T=m.stringify(_)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:k,path:T,params:_,matched:D,meta:zP(D)}}t.forEach(f=>i(f));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function dm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:KP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function KP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zP(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function mm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function GP(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;KE(t,e[i])<0?s=i:n=i+1}const r=QP(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function QP(t){let e=t;for(;e=e.parent;)if(zE(e)&&KE(t,e)===0)return e}function zE({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function YP(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(FE," "),o=i.indexOf("="),a=Jo(o<0?i:i.slice(0,o)),c=o<0?null:Jo(i.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function _m(t){let e="";for(let n in t){const s=t[n];if(n=mP(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(s)?s.map(i=>i&&Dh(i)):[s&&Dh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function JP(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=An(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const XP=Symbol(""),ym=Symbol(""),Xf=Symbol(""),Zf=Symbol(""),xh=Symbol("");function fo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ss(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Ai(4,{from:n,to:e})):p instanceof Error?c(p):LP(p)?c(Ai(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function ju(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(LE(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ss(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=iP(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Ss(m,n,s,o,a,r)()}))}}return i}function vm(t){const e=jt(Xf),n=jt(Zf),s=an(()=>{const c=$e(t.to);return e.resolve(c)}),r=an(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Ci.bind(null,h));if(p>-1)return p;const m=Em(c[u-2]);return u>1&&Em(h)===m&&f[f.length-1].path!==m?f.findIndex(Ci.bind(null,c[u-2])):p}),i=an(()=>r.value>-1&&sk(n.params,s.value.params)),o=an(()=>r.value>-1&&r.value===n.matched.length-1&&jE(n.params,s.value.params));function a(c={}){if(nk(c)){const u=e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(ko);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:an(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function ZP(t){return t.length===1?t[0]:t}const ek=tr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vm,setup(t,{slots:e}){const n=er(vm(t)),{options:s}=jt(Xf),r=an(()=>({[Tm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&ZP(e.default(n));return t.custom?i:Mt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tk=ek;function nk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!An(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tm=(t,e,n)=>t??e??n,rk=tr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(xh),r=an(()=>t.route||s.value),i=jt(ym,0),o=an(()=>{let u=$e(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=an(()=>r.value.matched[o.value]);Tr(ym,an(()=>o.value+1)),Tr(XP,a),Tr(xh,r);const c=wn();return fi(()=>[c.value,a.value,t.name],([u,h,f],[p,m,_])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Ci(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return wm(n.default,{Component:p,route:u});const m=f.props[h],_=m?m===!0?u.params:typeof m=="function"?m(u):m:null,k=Mt(p,Ne({},_,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return wm(n.default,{Component:k,route:u})||k}}});function wm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const GE=rk;function ik(t){const e=qP(t.routes,t),n=t.parseQuery||YP,s=t.stringifyQuery||_m,r=t.history,i=fo(),o=fo(),a=fo(),c=qo(rn);let u=rn;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Bu.bind(null,B=>""+B),f=Bu.bind(null,yP),p=Bu.bind(null,Jo);function m(B,Z){let X,se;return WE(B)?(X=e.getRecordMatcher(B),se=Z):se=B,e.addRoute(se,X)}function _(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function T(){return e.getRoutes().map(B=>B.record)}function k(B){return!!e.getRecordMatcher(B)}function D(B,Z){if(Z=Ne({},Z||c.value),typeof B=="string"){const S=Hu(n,B,Z.path),L=e.resolve({path:S.path},Z),j=r.createHref(S.fullPath);return Ne(S,L,{params:p(L.params),hash:Jo(S.hash),redirectedFrom:void 0,href:j})}let X;if(B.path!=null)X=Ne({},B,{path:Hu(n,B.path,Z.path).path});else{const S=Ne({},B.params);for(const L in S)S[L]==null&&delete S[L];X=Ne({},B,{params:f(S)}),Z.params=f(Z.params)}const se=e.resolve(X,Z),we=B.hash||"";se.params=h(p(se.params));const xe=TP(s,Ne({},B,{hash:gP(we),path:se.path})),A=r.createHref(xe);return Ne({fullPath:xe,hash:we,query:s===_m?JP(B.query):B.query||{}},se,{redirectedFrom:void 0,href:A})}function O(B){return typeof B=="string"?Hu(n,B,c.value.path):Ne({},B)}function w(B,Z){if(u!==B)return Ai(8,{from:Z,to:B})}function N(B){return I(B)}function M(B){return N(Ne(O(B),{replace:!0}))}function F(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(B):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),Ne({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function I(B,Z){const X=u=D(B),se=c.value,we=B.state,xe=B.force,A=B.replace===!0,S=F(X);if(S)return I(Ne(O(S),{state:typeof S=="object"?Ne({},we,S.state):we,force:xe,replace:A}),Z||X);const L=X;L.redirectedFrom=Z;let j;return!xe&&wP(s,se,X)&&(j=Ai(16,{to:L,from:se}),tn(se,se,!0,!1)),(j?Promise.resolve(j):b(L,se)).catch(U=>Kn(U)?Kn(U,2)?U:pn(U):te(U,L,se)).then(U=>{if(U){if(Kn(U,2))return I(Ne({replace:A},O(U.to),{state:typeof U.to=="object"?Ne({},we,U.to.state):we,force:xe}),Z||L)}else U=R(L,se,!0,A,we);return P(L,se,U),U})}function E(B,Z){const X=w(B,Z);return X?Promise.reject(X):Promise.resolve()}function v(B){const Z=ms.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function b(B,Z){let X;const[se,we,xe]=ok(B,Z);X=ju(se.reverse(),"beforeRouteLeave",B,Z);for(const S of se)S.leaveGuards.forEach(L=>{X.push(Ss(L,B,Z))});const A=E.bind(null,B,Z);return X.push(A),$t(X).then(()=>{X=[];for(const S of i.list())X.push(Ss(S,B,Z));return X.push(A),$t(X)}).then(()=>{X=ju(we,"beforeRouteUpdate",B,Z);for(const S of we)S.updateGuards.forEach(L=>{X.push(Ss(L,B,Z))});return X.push(A),$t(X)}).then(()=>{X=[];for(const S of xe)if(S.beforeEnter)if(An(S.beforeEnter))for(const L of S.beforeEnter)X.push(Ss(L,B,Z));else X.push(Ss(S.beforeEnter,B,Z));return X.push(A),$t(X)}).then(()=>(B.matched.forEach(S=>S.enterCallbacks={}),X=ju(xe,"beforeRouteEnter",B,Z,v),X.push(A),$t(X))).then(()=>{X=[];for(const S of o.list())X.push(Ss(S,B,Z));return X.push(A),$t(X)}).catch(S=>Kn(S,8)?S:Promise.reject(S))}function P(B,Z,X){a.list().forEach(se=>v(()=>se(B,Z,X)))}function R(B,Z,X,se,we){const xe=w(B,Z);if(xe)return xe;const A=Z===rn,S=Zr?history.state:{};X&&(se||A?r.replace(B.fullPath,Ne({scroll:A&&S&&S.scroll},we)):r.push(B.fullPath,we)),c.value=B,tn(B,Z,X,A),pn()}let C;function me(){C||(C=r.listen((B,Z,X)=>{if(!Rn.listening)return;const se=D(B),we=F(se);if(we){I(Ne(we,{replace:!0,force:!0}),se).catch(ko);return}u=se;const xe=c.value;Zr&&kP(lm(xe.fullPath,X.delta),Dc()),b(se,xe).catch(A=>Kn(A,12)?A:Kn(A,2)?(I(Ne(O(A.to),{force:!0}),se).then(S=>{Kn(S,20)&&!X.delta&&X.type===Xo.pop&&r.go(-1,!1)}).catch(ko),Promise.reject()):(X.delta&&r.go(-X.delta,!1),te(A,se,xe))).then(A=>{A=A||R(se,xe,!1),A&&(X.delta&&!Kn(A,8)?r.go(-X.delta,!1):X.type===Xo.pop&&Kn(A,20)&&r.go(-1,!1)),P(se,xe,A)}).catch(ko)}))}let Ee=fo(),ne=fo(),he;function te(B,Z,X){pn(B);const se=ne.list();return se.length?se.forEach(we=>we(B,Z,X)):console.error(B),Promise.reject(B)}function Ge(){return he&&c.value!==rn?Promise.resolve():new Promise((B,Z)=>{Ee.add([B,Z])})}function pn(B){return he||(he=!B,me(),Ee.list().forEach(([Z,X])=>B?X(B):Z()),Ee.reset()),B}function tn(B,Z,X,se){const{scrollBehavior:we}=t;if(!Zr||!we)return Promise.resolve();const xe=!X&&NP(lm(B.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Ti().then(()=>we(B,Z,xe)).then(A=>A&&PP(A)).catch(A=>te(A,B,Z))}const Qe=B=>r.go(B);let Ye;const ms=new Set,Rn={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:T,resolve:D,options:t,push:N,replace:M,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:Ge,install(B){const Z=this;B.component("RouterLink",tk),B.component("RouterView",GE),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),Zr&&!Ye&&c.value===rn&&(Ye=!0,N(r.location).catch(we=>{}));const X={};for(const we in rn)Object.defineProperty(X,we,{get:()=>c.value[we],enumerable:!0});B.provide(Xf,Z),B.provide(Zf,Jn(X)),B.provide(xh,c);const se=B.unmount;ms.add(B),B.unmount=function(){ms.delete(B),ms.size<1&&(u=rn,C&&C(),C=null,c.value=rn,Ye=!1,he=!1),se()}}};function $t(B){return B.reduce((Z,X)=>Z.then(()=>v(X)),Promise.resolve())}return Rn}function ok(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ci(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ci(u,c))||r.push(c))}return[n,s,r]}function ak(t){return jt(Zf)}const lk=/(:\w+)\([^)]+\)/g,ck=/(:\w+)[?+*]/g,uk=/:\w+/g,hk=(t,e)=>e.path.replace(lk,"$1").replace(ck,"$1").replace(uk,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),Lh=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&hk(t.route,n));return typeof s=="function"?s(t.route):s},fk=(t,e)=>({default:()=>t?Mt(iC,t===!0?{}:t,e):e});function ed(t){return Array.isArray(t)?t:[t]}const $u=[{name:"index",path:"/",component:()=>Ds(()=>import("./CFWCl9um.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"appeals",path:"/appeals",component:()=>Ds(()=>import("./dU3j-smO.js"),[],import.meta.url)},{name:"order-form-id",path:"/order-form/:id()",component:()=>Ds(()=>import("./DYzOGtvI.js"),[],import.meta.url)},{name:"order-form",path:"/order-form",component:()=>Ds(()=>import("./DU8Dtl3C.js"),__vite__mapDeps([2,1,3]),import.meta.url)}],QE=(t,e)=>({default:()=>{var n;return t?Mt(lA,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),dk=/(:\w+)\([^)]+\)/g,pk=/(:\w+)[?+*]/g,gk=/:\w+/g;function Im(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(dk,"$1").replace(pk,"$1").replace(gk,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function mk(t,e){return t===e||e===rn?!1:Im(t)!==Im(e)?!0:!t.matched.every((s,r)=>{var i,o;return s.components&&s.components.default===((o=(i=e.matched[r])==null?void 0:i.components)==null?void 0:o.default)})}const _k={scrollBehavior(t,e,n){var c;const s=ct(),r=((c=en().options)==null?void 0:c.scrollBehaviorType)??"auto";if(t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:YE(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;let o=n||void 0;!o&&mk(t,e)&&(o={left:0,top:0});const a=s._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(u=>{if(e===rn){u(bm(t,"instant",o));return}s.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>u(bm(t,"instant",o)))})})}};function YE(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function bm(t,e,n){return n||(t.hash?{el:t.hash,top:YE(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const yk={hashMode:!1,scrollBehaviorType:"auto"},Sn={...yk,..._k},vk=async(t,e)=>{var o;let n,s;if(!((o=t.meta)!=null&&o.validate))return;const r=([n,s]=pi(()=>Promise.resolve(t.meta.validate(t))),n=await n,s(),n);if(r===!0)return;const i=Ir({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),i},Ek=async t=>{let e,n;const s=([e,n]=pi(()=>Qf({path:t.path})),e=await e,n(),e);if(s.redirect)return Lr(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},Tk=[vk,Ek],Oo={};function wk(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Hg(h,"")}const a=Hg(s,t),c=!n||lR(a,n)?a:n;return c+(c.includes("?")?"":r)+i}const Ik=dn({name:"nuxt:router",enforce:"pre",async setup(t){var k;let e,n,s=kc().app.baseURL;const r=((k=Sn.history)==null?void 0:k.call(Sn,s))??xP(s),i=Sn.routes?([e,n]=pi(()=>Sn.routes($u)),e=await e,n(),e??$u):$u;let o;const a=ik({...Sn,scrollBehavior:(D,O,w)=>{if(O===rn){o=w;return}if(Sn.scrollBehavior){if(a.options.scrollBehavior=Sn.scrollBehavior,"scrollRestoration"in window.history){const N=a.beforeEach(()=>{N(),window.history.scrollRestoration="manual"})}return Sn.scrollBehavior(D,rn,o||w)}},history:r,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=qo(a.currentRoute.value);a.afterEach((D,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=wk(s,window.location,t.payload.path),h=qo(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((D,O)=>{var w,N,M,F;((N=(w=D.matched[0])==null?void 0:w.components)==null?void 0:N.default)===((F=(M=O.matched[0])==null?void 0:M.components)==null?void 0:F.default)&&f()});const p={};for(const D in h.value)Object.defineProperty(p,D,{get:()=>h.value[D],enumerable:!0});t._route=Jn(p),t._middleware||(t._middleware={global:[],named:{}});const m=Nc();a.afterEach(async(D,O,w)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(iS),w&&await t.callHook("page:loading:end")});try{[e,n]=pi(()=>a.isReady()),await e,n()}catch(D){[e,n]=pi(()=>t.runWithContext(()=>dr(D))),await e,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const T=t.payload.state._layout;return a.beforeEach(async(D,O)=>{var w;await t.callHook("page:loading:start"),D.meta=er(D.meta),t.isHydrating&&T&&!rs(D.meta.layout)&&(D.meta.layout=T),t._processingMiddleware=!0;{const N=new Set([...Tk,...t._middleware.global]);for(const M of D.matched){const F=M.meta.middleware;if(F)for(const I of ed(F))N.add(I)}{const M=await t.runWithContext(()=>Qf({path:D.path}));if(M.appMiddleware)for(const F in M.appMiddleware)M.appMiddleware[F]?N.add(F):N.delete(F)}for(const M of N){const F=typeof M=="string"?t._middleware.named[M]||await((w=Oo[M])==null?void 0:w.call(Oo).then(I=>I.default||I)):M;if(!F)throw new Error(`Unknown route middleware: '${M}'.`);try{const I=await t.runWithContext(()=>F(D,O));if(!t.payload.serverRendered&&t.isHydrating&&(I===!1||I instanceof Error)){const E=I||Ir({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>dr(E)),!1}if(I===!0)continue;if(I===!1)return I;if(I)return SE(I)&&I.fatal&&await t.runWithContext(()=>dr(I)),I}catch(I){const E=Ir(I);return E.fatal&&await t.runWithContext(()=>dr(E)),E}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(D,O)=>{D.matched.length===0&&await t.runWithContext(()=>dr(Ir({statusCode:404,fatal:!1,statusMessage:`Page not found: ${D.fullPath}`,data:{path:D.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=Sn.scrollBehavior}catch(D){await t.runWithContext(()=>dr(D))}}),{provide:{router:a}}}}),Cm=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),iU=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),td=t=>{const e=ct();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Cm(()=>t())}):Cm(()=>t())},bk=dn({name:"nuxt:payload",setup(t){const e=new Set;en().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const r=await im(n.path);if(r){for(const i of e)delete t.static.data[i];for(const i in r.data)i in t.static.data||e.add(i),t.static.data[i]=r.data[i]}}),td(()=>{var n;t.hooks.hook("link:prefetch",async s=>{const{hostname:r}=new URL(s,window.location.href);r===window.location.hostname&&await im(s).catch(()=>{console.warn("[nuxt] Error preloading payload for",s)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Oc,1e3)})}}),Ck=dn(()=>{const t=en();td(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),Ak=dn(t=>{let e;async function n(){const s=await Oc();e&&clearTimeout(e),e=setTimeout(n,zg);try{const r=await $fetch(zf("builds/latest.json")+`?${Date.now()}`);r.id!==s.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}td(()=>{e=setTimeout(n,zg)})});function Rk(t={}){const e=t.path||window.location.pathname;let n={};try{n=Fl(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ct().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Sk=dn({name:"nuxt:chunk-reload",setup(t){const e=en(),n=kc(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Kf(n.app.baseURL,i.fullPath);Rk({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}});function Pk(t){if(t!=null&&t.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function kk(t,e=en()){const{path:n,matched:s}=e.resolve(t);if(!s.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const r=e._preloadPromises||(e._preloadPromises=[]);if(r.length>4)return Promise.all(r).then(()=>kk(t,e));e._routePreloaded.add(n);const i=s.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const Nk=dn({name:"pinia",setup(t){const e=aS();return t.vueApp.use(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),Ok=Ol(()=>Ds(()=>import("./VzOZKPrk.js"),__vite__mapDeps([4,5]),import.meta.url).then(t=>t.default||t.default||t)),Dk=[["NuxtIcon",Ok]],Mk=dn({name:"nuxt:global-components",setup(t){for(const[e,n]of Dk)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),Ms={default:Ol(()=>Ds(()=>import("./C3LriqGm.js"),[],import.meta.url).then(t=>t.default||t))},xk=dn({name:"nuxt:prefetch",setup(t){const e=en();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof Ms[s]=="function"&&await Ms[s]()})}),t.hooks.hook("link:prefetch",n=>{if(Lr(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=ed(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Oo[o]=="function"&&Oo[o]();typeof r=="string"&&r in Ms&&Pk(Ms[r])})}}),Lk=()=>{};var Am={};/**
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
 */const JE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(t,e){if(!t)throw Ui(e)},Ui=function(t){return new Error("Firebase Database ("+JE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const XE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(n[h],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(XE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new Fk;const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const _=u<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZE=function(t){const e=XE(t);return nd.encodeByteArray(e,!0)},Wl=function(t){return ZE(t).replace(/\./g,"")},ql=function(t){try{return nd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uk(t){return eT(void 0,t)}function eT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bk(n)||(t[n]=eT(t[n],e[n]));return t}function Bk(t){return t!=="__proto__"}/**
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
 */function Hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jk=()=>Hk().__FIREBASE_DEFAULTS__,$k=()=>{if(typeof process>"u"||typeof Am>"u")return;const t=Am.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ql(t[1]);return e&&JSON.parse(e)},Mc=()=>{try{return Lk()||jk()||$k()||Wk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tT=t=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nT=t=>{const e=tT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sT=()=>{var t;return(t=Mc())===null||t===void 0?void 0:t.config},rT=t=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Vr(t){return t.endsWith(".cloudworkstations.dev")}async function rd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function iT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),""].join(".")}const Do={};function qk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?t.emulator.push(e):t.prod.push(e);return t}function Kk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Rm=!1;function Bi(t,e){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Do[t]===e||Do[t]||Rm)return;Do[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=qk().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Rm=!0,o()},p}function h(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=Kk(s),m=n("text"),_=document.getElementById(m)||document.createElement("span"),T=n("learnmore"),k=document.getElementById(T)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const w=p.element;a(w),h(k,T);const N=u();c(O,D),w.append(O,_,k,N),document.body.appendChild(w)}i?(_.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function zk(){var t;const e=(t=Mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Gk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yk(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jk(){return JE.NODE_ADMIN===!0}function Xk(){return!zk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zk(){try{return typeof indexedDB=="object"}catch{return!1}}function e1(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const t1="FirebaseError";class ps extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=t1,Object.setPrototypeOf(this,ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?n1(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ps(r,a,s)}}function n1(t,e){return t.replace(s1,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const s1=/\{\$([^}]+)}/g;/**
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
 */function Zo(t){return JSON.parse(t)}function Et(t){return JSON.stringify(t)}/**
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
 */const aT=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Zo(ql(i[0])||""),n=Zo(ql(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},r1=function(t){const e=aT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},i1=function(t){const e=aT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function qs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Sm(i)&&Sm(o)){if(!qs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Sm(t){return t!==null&&typeof t=="object"}/**
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
 */function Hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class o1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function a1(t,e){const n=new l1(t,e);return n.subscribe.bind(n)}class l1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");c1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Wu),r.error===void 0&&(r.error=Wu),r.complete===void 0&&(r.complete=Wu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}function u1(t,e){return`${t} failed: ${e} argument `}/**
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
 */const h1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,J(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Ks{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new sd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(p1(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:d1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function d1(t){return t===pr?void 0:t}function p1(t){return t.instantiationMode==="EAGER"}/**
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
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const m1={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},_1=ve.INFO,y1={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},v1=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=y1[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=_1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const E1=(t,e)=>e.some(n=>t instanceof n);let Pm,km;function T1(){return Pm||(Pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function w1(){return km||(km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lT=new WeakMap,Fh=new WeakMap,cT=new WeakMap,qu=new WeakMap,od=new WeakMap;function I1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lT.set(n,t)}).catch(()=>{}),od.set(e,t),e}function b1(t){if(Fh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C1(t){Uh=t(Uh)}function A1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ku(this),e,...n);return cT.set(s,e.sort?e.sort():[e]),Fs(s)}:w1().includes(t)?function(...e){return t.apply(Ku(this),e),Fs(lT.get(this))}:function(...e){return Fs(t.apply(Ku(this),e))}}function R1(t){return typeof t=="function"?A1(t):(t instanceof IDBTransaction&&b1(t),E1(t,T1())?new Proxy(t,Uh):t)}function Fs(t){if(t instanceof IDBRequest)return I1(t);if(qu.has(t))return qu.get(t);const e=R1(t);return e!==t&&(qu.set(t,e),od.set(e,t)),e}const Ku=t=>od.get(t);function S1(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Fs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Fs(o.result),c.oldVersion,c.newVersion,Fs(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const P1=["get","getKey","getAll","getAllKeys","count"],k1=["put","add","delete","clear"],zu=new Map;function Nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=k1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||P1.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return zu.set(e,i),i}C1(t=>({...t,get:(e,n,s)=>Nm(e,n)||t.get(e,n,s),has:(e,n)=>!!Nm(e,n)||t.has(e,n)}));/**
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
 */class N1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function O1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",Om="0.12.3";/**
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
 */const os=new Lc("@firebase/app"),D1="@firebase/app-compat",M1="@firebase/analytics-compat",x1="@firebase/analytics",L1="@firebase/app-check-compat",V1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",B1="@firebase/database",H1="@firebase/data-connect",j1="@firebase/database-compat",$1="@firebase/functions",W1="@firebase/functions-compat",q1="@firebase/installations",K1="@firebase/installations-compat",z1="@firebase/messaging",G1="@firebase/messaging-compat",Q1="@firebase/performance",Y1="@firebase/performance-compat",J1="@firebase/remote-config",X1="@firebase/remote-config-compat",Z1="@firebase/storage",eN="@firebase/storage-compat",tN="@firebase/firestore",nN="@firebase/vertexai",sN="@firebase/firestore-compat",rN="firebase",iN="11.7.3";/**
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
 */const Hh="[DEFAULT]",oN={[Bh]:"fire-core",[D1]:"fire-core-compat",[x1]:"fire-analytics",[M1]:"fire-analytics-compat",[V1]:"fire-app-check",[L1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[B1]:"fire-rtdb",[H1]:"fire-data-connect",[j1]:"fire-rtdb-compat",[$1]:"fire-fn",[W1]:"fire-fn-compat",[q1]:"fire-iid",[K1]:"fire-iid-compat",[z1]:"fire-fcm",[G1]:"fire-fcm-compat",[Q1]:"fire-perf",[Y1]:"fire-perf-compat",[J1]:"fire-rc",[X1]:"fire-rc-compat",[Z1]:"fire-gcs",[eN]:"fire-gcs-compat",[tN]:"fire-fst",[sN]:"fire-fst-compat",[nN]:"fire-vertex","fire-js":"fire-js",[rN]:"fire-js-all"};/**
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
 */const zl=new Map,aN=new Map,jh=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rr(t){const e=t.name;if(jh.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of zl.values())Dm(n,t);for(const n of aN.values())Dm(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t==null?!1:t.settings!==void 0}/**
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
 */const lN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Us=new _a("app","Firebase",lN);/**
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
 */class cN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Us.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=iN;function uT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Us.create("bad-app-name",{appName:String(r)});if(n||(n=sT()),!n)throw Us.create("no-options");const i=zl.get(r);if(i){if(qs(n,i.options)&&qs(s,i.config))return i;throw Us.create("duplicate-app",{appName:r})}const o=new g1(r);for(const c of jh.values())o.addComponent(c);const a=new cN(n,s,o);return zl.set(r,a),a}function ad(t=Hh){const e=zl.get(t);if(!e&&t===Hh&&sT())return uT();if(!e)throw Us.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let r=(s=oN[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}Rr(new Ks(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uN="firebase-heartbeat-database",hN=1,ea="firebase-heartbeat-store";let Gu=null;function hT(){return Gu||(Gu=S1(uN,hN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw Us.create("idb-open",{originalErrorMessage:t.message})})),Gu}async function fN(t){try{const n=(await hT()).transaction(ea),s=await n.objectStore(ea).get(fT(t));return await n.done,s}catch(e){if(e instanceof ps)os.warn(e.message);else{const n=Us.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Mm(t,e){try{const s=(await hT()).transaction(ea,"readwrite");await s.objectStore(ea).put(e,fT(t)),await s.done}catch(n){if(n instanceof ps)os.warn(n.message);else{const s=Us.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(s.message)}}}function fT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dN=1024,pN=30;class gN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _N(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>pN){const o=yN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){os.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xm(),{heartbeatsToSend:s,unsentEntries:r}=mN(this._heartbeatsCache.heartbeats),i=Wl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return os.warn(n),""}}}function xm(){return new Date().toISOString().substring(0,10)}function mN(t,e=dN){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Lm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Lm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zk()?e1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lm(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}function yN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function vN(t){Rr(new Ks("platform-logger",e=>new N1(e),"PRIVATE")),Rr(new Ks("heartbeat",e=>new gN(e),"PRIVATE")),xn(Bh,Om,t),xn(Bh,Om,"esm2017"),xn("fire-js","")}vN("");var EN="firebase",TN="11.7.3";/**
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
 */xn(EN,TN,"app");var Vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bs,dT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,E){function v(){}v.prototype=E.prototype,I.D=E.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(b,P,R){for(var C=Array(arguments.length-2),me=2;me<arguments.length;me++)C[me-2]=arguments[me];return E.prototype[P].apply(b,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,E,v){v||(v=0);var b=Array(16);if(typeof E=="string")for(var P=0;16>P;++P)b[P]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(P=0;16>P;++P)b[P]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=I.g[0],v=I.g[1],P=I.g[2];var R=I.g[3],C=E+(R^v&(P^R))+b[0]+3614090360&4294967295;E=v+(C<<7&4294967295|C>>>25),C=R+(P^E&(v^P))+b[1]+3905402710&4294967295,R=E+(C<<12&4294967295|C>>>20),C=P+(v^R&(E^v))+b[2]+606105819&4294967295,P=R+(C<<17&4294967295|C>>>15),C=v+(E^P&(R^E))+b[3]+3250441966&4294967295,v=P+(C<<22&4294967295|C>>>10),C=E+(R^v&(P^R))+b[4]+4118548399&4294967295,E=v+(C<<7&4294967295|C>>>25),C=R+(P^E&(v^P))+b[5]+1200080426&4294967295,R=E+(C<<12&4294967295|C>>>20),C=P+(v^R&(E^v))+b[6]+2821735955&4294967295,P=R+(C<<17&4294967295|C>>>15),C=v+(E^P&(R^E))+b[7]+4249261313&4294967295,v=P+(C<<22&4294967295|C>>>10),C=E+(R^v&(P^R))+b[8]+1770035416&4294967295,E=v+(C<<7&4294967295|C>>>25),C=R+(P^E&(v^P))+b[9]+2336552879&4294967295,R=E+(C<<12&4294967295|C>>>20),C=P+(v^R&(E^v))+b[10]+4294925233&4294967295,P=R+(C<<17&4294967295|C>>>15),C=v+(E^P&(R^E))+b[11]+2304563134&4294967295,v=P+(C<<22&4294967295|C>>>10),C=E+(R^v&(P^R))+b[12]+1804603682&4294967295,E=v+(C<<7&4294967295|C>>>25),C=R+(P^E&(v^P))+b[13]+4254626195&4294967295,R=E+(C<<12&4294967295|C>>>20),C=P+(v^R&(E^v))+b[14]+2792965006&4294967295,P=R+(C<<17&4294967295|C>>>15),C=v+(E^P&(R^E))+b[15]+1236535329&4294967295,v=P+(C<<22&4294967295|C>>>10),C=E+(P^R&(v^P))+b[1]+4129170786&4294967295,E=v+(C<<5&4294967295|C>>>27),C=R+(v^P&(E^v))+b[6]+3225465664&4294967295,R=E+(C<<9&4294967295|C>>>23),C=P+(E^v&(R^E))+b[11]+643717713&4294967295,P=R+(C<<14&4294967295|C>>>18),C=v+(R^E&(P^R))+b[0]+3921069994&4294967295,v=P+(C<<20&4294967295|C>>>12),C=E+(P^R&(v^P))+b[5]+3593408605&4294967295,E=v+(C<<5&4294967295|C>>>27),C=R+(v^P&(E^v))+b[10]+38016083&4294967295,R=E+(C<<9&4294967295|C>>>23),C=P+(E^v&(R^E))+b[15]+3634488961&4294967295,P=R+(C<<14&4294967295|C>>>18),C=v+(R^E&(P^R))+b[4]+3889429448&4294967295,v=P+(C<<20&4294967295|C>>>12),C=E+(P^R&(v^P))+b[9]+568446438&4294967295,E=v+(C<<5&4294967295|C>>>27),C=R+(v^P&(E^v))+b[14]+3275163606&4294967295,R=E+(C<<9&4294967295|C>>>23),C=P+(E^v&(R^E))+b[3]+4107603335&4294967295,P=R+(C<<14&4294967295|C>>>18),C=v+(R^E&(P^R))+b[8]+1163531501&4294967295,v=P+(C<<20&4294967295|C>>>12),C=E+(P^R&(v^P))+b[13]+2850285829&4294967295,E=v+(C<<5&4294967295|C>>>27),C=R+(v^P&(E^v))+b[2]+4243563512&4294967295,R=E+(C<<9&4294967295|C>>>23),C=P+(E^v&(R^E))+b[7]+1735328473&4294967295,P=R+(C<<14&4294967295|C>>>18),C=v+(R^E&(P^R))+b[12]+2368359562&4294967295,v=P+(C<<20&4294967295|C>>>12),C=E+(v^P^R)+b[5]+4294588738&4294967295,E=v+(C<<4&4294967295|C>>>28),C=R+(E^v^P)+b[8]+2272392833&4294967295,R=E+(C<<11&4294967295|C>>>21),C=P+(R^E^v)+b[11]+1839030562&4294967295,P=R+(C<<16&4294967295|C>>>16),C=v+(P^R^E)+b[14]+4259657740&4294967295,v=P+(C<<23&4294967295|C>>>9),C=E+(v^P^R)+b[1]+2763975236&4294967295,E=v+(C<<4&4294967295|C>>>28),C=R+(E^v^P)+b[4]+1272893353&4294967295,R=E+(C<<11&4294967295|C>>>21),C=P+(R^E^v)+b[7]+4139469664&4294967295,P=R+(C<<16&4294967295|C>>>16),C=v+(P^R^E)+b[10]+3200236656&4294967295,v=P+(C<<23&4294967295|C>>>9),C=E+(v^P^R)+b[13]+681279174&4294967295,E=v+(C<<4&4294967295|C>>>28),C=R+(E^v^P)+b[0]+3936430074&4294967295,R=E+(C<<11&4294967295|C>>>21),C=P+(R^E^v)+b[3]+3572445317&4294967295,P=R+(C<<16&4294967295|C>>>16),C=v+(P^R^E)+b[6]+76029189&4294967295,v=P+(C<<23&4294967295|C>>>9),C=E+(v^P^R)+b[9]+3654602809&4294967295,E=v+(C<<4&4294967295|C>>>28),C=R+(E^v^P)+b[12]+3873151461&4294967295,R=E+(C<<11&4294967295|C>>>21),C=P+(R^E^v)+b[15]+530742520&4294967295,P=R+(C<<16&4294967295|C>>>16),C=v+(P^R^E)+b[2]+3299628645&4294967295,v=P+(C<<23&4294967295|C>>>9),C=E+(P^(v|~R))+b[0]+4096336452&4294967295,E=v+(C<<6&4294967295|C>>>26),C=R+(v^(E|~P))+b[7]+1126891415&4294967295,R=E+(C<<10&4294967295|C>>>22),C=P+(E^(R|~v))+b[14]+2878612391&4294967295,P=R+(C<<15&4294967295|C>>>17),C=v+(R^(P|~E))+b[5]+4237533241&4294967295,v=P+(C<<21&4294967295|C>>>11),C=E+(P^(v|~R))+b[12]+1700485571&4294967295,E=v+(C<<6&4294967295|C>>>26),C=R+(v^(E|~P))+b[3]+2399980690&4294967295,R=E+(C<<10&4294967295|C>>>22),C=P+(E^(R|~v))+b[10]+4293915773&4294967295,P=R+(C<<15&4294967295|C>>>17),C=v+(R^(P|~E))+b[1]+2240044497&4294967295,v=P+(C<<21&4294967295|C>>>11),C=E+(P^(v|~R))+b[8]+1873313359&4294967295,E=v+(C<<6&4294967295|C>>>26),C=R+(v^(E|~P))+b[15]+4264355552&4294967295,R=E+(C<<10&4294967295|C>>>22),C=P+(E^(R|~v))+b[6]+2734768916&4294967295,P=R+(C<<15&4294967295|C>>>17),C=v+(R^(P|~E))+b[13]+1309151649&4294967295,v=P+(C<<21&4294967295|C>>>11),C=E+(P^(v|~R))+b[4]+4149444226&4294967295,E=v+(C<<6&4294967295|C>>>26),C=R+(v^(E|~P))+b[11]+3174756917&4294967295,R=E+(C<<10&4294967295|C>>>22),C=P+(E^(R|~v))+b[2]+718787259&4294967295,P=R+(C<<15&4294967295|C>>>17),C=v+(R^(P|~E))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+R&4294967295}s.prototype.u=function(I,E){E===void 0&&(E=I.length);for(var v=E-this.blockSize,b=this.B,P=this.h,R=0;R<E;){if(P==0)for(;R<=v;)r(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<E;)if(b[P++]=I.charCodeAt(R++),P==this.blockSize){r(this,b),P=0;break}}else for(;R<E;)if(b[P++]=I[R++],P==this.blockSize){r(this,b),P=0;break}}this.h=P,this.o+=E},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;var v=8*this.o;for(E=I.length-8;E<I.length;++E)I[E]=v&255,v/=256;for(this.u(I),I=Array(16),E=v=0;4>E;++E)for(var b=0;32>b;b+=8)I[v++]=this.g[E]>>>b&255;return I};function i(I,E){var v=a;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=E(I)}function o(I,E){this.h=E;for(var v=[],b=!0,P=I.length-1;0<=P;P--){var R=I[P]|0;b&&R==E||(v[P]=R,b=!1)}this.g=v}var a={};function c(I){return-128<=I&&128>I?i(I,function(E){return new o([E|0],0>E?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return k(u(-I));for(var E=[],v=1,b=0;I>=v;b++)E[b]=I/v|0,v*=4294967296;return new o(E,0)}function h(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return k(h(I.substring(1),E));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),b=f,P=0;P<I.length;P+=8){var R=Math.min(8,I.length-P),C=parseInt(I.substring(P,P+R),E);8>R?(R=u(Math.pow(E,R)),b=b.j(R).add(u(C))):(b=b.j(v),b=b.add(u(C)))}return b}var f=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(T(this))return-k(this).m();for(var I=0,E=1,v=0;v<this.g.length;v++){var b=this.i(v);I+=(0<=b?b:4294967296+b)*E,E*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(T(this))return"-"+k(this).toString(I);for(var E=u(Math.pow(I,6)),v=this,b="";;){var P=N(v,E).g;v=D(v,P.j(E));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=P,_(v))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function T(I){return I.h==-1}t.l=function(I){return I=D(this,I),T(I)?-1:_(I)?0:1};function k(I){for(var E=I.g.length,v=[],b=0;b<E;b++)v[b]=~I.g[b];return new o(v,~I.h).add(p)}t.abs=function(){return T(this)?k(this):this},t.add=function(I){for(var E=Math.max(this.g.length,I.g.length),v=[],b=0,P=0;P<=E;P++){var R=b+(this.i(P)&65535)+(I.i(P)&65535),C=(R>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);b=C>>>16,R&=65535,C&=65535,v[P]=C<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function D(I,E){return I.add(k(E))}t.j=function(I){if(_(this)||_(I))return f;if(T(this))return T(I)?k(this).j(k(I)):k(k(this).j(I));if(T(I))return k(this.j(k(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var E=this.g.length+I.g.length,v=[],b=0;b<2*E;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var P=0;P<I.g.length;P++){var R=this.i(b)>>>16,C=this.i(b)&65535,me=I.i(P)>>>16,Ee=I.i(P)&65535;v[2*b+2*P]+=C*Ee,O(v,2*b+2*P),v[2*b+2*P+1]+=R*Ee,O(v,2*b+2*P+1),v[2*b+2*P+1]+=C*me,O(v,2*b+2*P+1),v[2*b+2*P+2]+=R*me,O(v,2*b+2*P+2)}for(b=0;b<E;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=E;b<2*E;b++)v[b]=0;return new o(v,0)};function O(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function w(I,E){this.g=I,this.h=E}function N(I,E){if(_(E))throw Error("division by zero");if(_(I))return new w(f,f);if(T(I))return E=N(k(I),E),new w(k(E.g),k(E.h));if(T(E))return E=N(I,k(E)),new w(k(E.g),E.h);if(30<I.g.length){if(T(I)||T(E))throw Error("slowDivide_ only works with positive integers.");for(var v=p,b=E;0>=b.l(I);)v=M(v),b=M(b);var P=F(v,1),R=F(b,1);for(b=F(b,2),v=F(v,2);!_(b);){var C=R.add(b);0>=C.l(I)&&(P=P.add(v),R=C),b=F(b,1),v=F(v,1)}return E=D(I,P.j(E)),new w(P,E)}for(P=f;0<=I.l(E);){for(v=Math.max(1,Math.floor(I.m()/E.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=u(v),C=R.j(E);T(C)||0<C.l(I);)v-=b,R=u(v),C=R.j(E);_(R)&&(R=p),P=P.add(R),I=D(I,C)}return new w(P,I)}t.A=function(I){return N(this,I).h},t.and=function(I){for(var E=Math.max(this.g.length,I.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)&I.i(b);return new o(v,this.h&I.h)},t.or=function(I){for(var E=Math.max(this.g.length,I.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)|I.i(b);return new o(v,this.h|I.h)},t.xor=function(I){for(var E=Math.max(this.g.length,I.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)^I.i(b);return new o(v,this.h^I.h)};function M(I){for(var E=I.g.length+1,v=[],b=0;b<E;b++)v[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(v,I.h)}function F(I,E){var v=E>>5;E%=32;for(var b=I.g.length-v,P=[],R=0;R<b;R++)P[R]=0<E?I.i(R+v)>>>E|I.i(R+v+1)<<32-E:I.i(R+v);return new o(P,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,dT=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Bs=o}).apply(typeof Vm<"u"?Vm:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,Eo,gT,gl,$h,mT,_T,yT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function r(l,d){if(d)e:{var g=s;l=l.split(".");for(var y=0;y<l.length-1;y++){var x=l[y];if(!(x in g))break e;g=g[x]}l=l[l.length-1],y=g[l],d=d(y),d!=y&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,y=!1,x={next:function(){if(!y&&g<l.length){var V=g++;return{value:d(V,l[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),l.apply(d,x)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function _(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,x,V){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return d.prototype[x].apply(y,G)}}function T(l){const d=l.length;if(0<d){const g=Array(d);for(let y=0;y<d;y++)g[y]=l[y];return g}return[]}function k(l,d){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const x=l.length||0,V=y.length||0;l.length=x+V;for(let G=0;G<V;G++)l[x+G]=y[G]}else l.push(y)}}class D{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var M=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(l,d,g){for(const y in l)d.call(g,l[y],y,l)}function I(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function E(l){const d={};for(const g in l)d[g]=l[g];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,d){let g,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(g in y)l[g]=y[g];for(let V=0;V<v.length;V++)g=v[V],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function P(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function R(l){a.setTimeout(()=>{throw l},0)}function C(){var l=Ge;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,g){const y=Ee.get();y.set(d,g),this.h?this.h.next=y:this.g=y,this.h=y}}var Ee=new D(()=>new ne,l=>l.reset());class ne{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let he,te=!1,Ge=new me,pn=()=>{const l=a.Promise.resolve(void 0);he=()=>{l.then(tn)}};var tn=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(g){R(g)}var d=Ee;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}te=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var ms=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Rn(l,d){if(Ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{N(d.nodeName);var x=!0;break e}catch{}x=!1}x||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$t[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Rn.aa.h.call(this)}}_(Rn,Ye);var $t={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(l,d,g,y,x){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!y,this.ha=x,this.key=++Z,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,d,g,y,x){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var G=A(l,d,y,x);return-1<G?(d=l[G],g||(d.fa=!1)):(d=new X(d,this.src,V,!!y,x),d.fa=g,l.push(d)),d};function xe(l,d){var g=d.type;if(g in l.g){var y=l.g[g],x=Array.prototype.indexOf.call(y,d,void 0),V;(V=0<=x)&&Array.prototype.splice.call(y,x,1),V&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function A(l,d,g,y){for(var x=0;x<l.length;++x){var V=l[x];if(!V.da&&V.listener==d&&V.capture==!!g&&V.ha==y)return x}return-1}var S="closure_lm_"+(1e6*Math.random()|0),L={};function j(l,d,g,y,x){if(Array.isArray(d)){for(var V=0;V<d.length;V++)j(l,d[V],g,y,x);return null}return g=ie(g),l&&l[B]?l.K(d,g,u(y)?!!y.capture:!1,x):U(l,d,g,!1,y,x)}function U(l,d,g,y,x,V){if(!d)throw Error("Invalid event type");var G=u(x)?!!x.capture:!!x,Ve=oe(l);if(Ve||(l[S]=Ve=new we(l)),g=Ve.add(d,g,y,G,V),g.proxy)return g;if(y=W(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)ms||(x=G),x===void 0&&(x=!1),l.addEventListener(d.toString(),y,x);else if(l.attachEvent)l.attachEvent(K(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function W(){function l(g){return d.call(l.src,l.listener,g)}const d=q;return l}function Q(l,d,g,y,x){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],g,y,x);else y=u(y)?!!y.capture:!!y,g=ie(g),l&&l[B]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],g=A(V,g,y,x),-1<g&&(se(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=oe(l))&&(d=l.g[d.toString()],l=-1,d&&(l=A(d,g,y,x)),(g=-1<l?d[l]:null)&&z(g))}function z(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[B])xe(d.i,l);else{var g=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(g,y,l.capture):d.detachEvent?d.detachEvent(K(g),y):d.addListener&&d.removeListener&&d.removeListener(y),(g=oe(d))?(xe(g,l),g.h==0&&(g.src=null,d[S]=null)):se(l)}}}function K(l){return l in L?L[l]:L[l]="on"+l}function q(l,d){if(l.da)l=!0;else{d=new Rn(d,this);var g=l.listener,y=l.ha||l.src;l.fa&&z(l),l=g.call(y,d)}return l}function oe(l){return l=l[S],l instanceof we?l:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(l){return typeof l=="function"?l:(l[Y]||(l[Y]=function(d){return l.handleEvent(d)}),l[Y])}function re(){Qe.call(this),this.i=new we(this),this.M=this,this.F=null}_(re,Qe),re.prototype[B]=!0,re.prototype.removeEventListener=function(l,d,g,y){Q(this,l,d,g,y)};function ce(l,d){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Ye(d,l);else if(d instanceof Ye)d.target=d.target||l;else{var x=d;d=new Ye(y,l),b(d,x)}if(x=!0,g)for(var V=g.length-1;0<=V;V--){var G=d.g=g[V];x=ke(G,y,!0,d)&&x}if(G=d.g=l,x=ke(G,y,!0,d)&&x,x=ke(G,y,!1,d)&&x,g)for(V=0;V<g.length;V++)G=d.g=g[V],x=ke(G,y,!1,d)&&x}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],y=0;y<g.length;y++)se(g[y]);delete l.g[d],l.h--}}this.F=null},re.prototype.K=function(l,d,g,y){return this.i.add(String(l),d,!1,g,y)},re.prototype.L=function(l,d,g,y){return this.i.add(String(l),d,!0,g,y)};function ke(l,d,g,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,V=0;V<d.length;++V){var G=d[V];if(G&&!G.da&&G.capture==g){var Ve=G.listener,_t=G.ha||G.src;G.fa&&xe(l.i,G),x=Ve.call(_t,y)!==!1&&x}}return x&&!y.defaultPrevented}function Re(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function It(l){l.g=Re(()=>{l.g=null,l.i&&(l.i=!1,It(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ut extends Qe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:It(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(l){Qe.call(this),this.h=l,this.g={}}_(mt,Qe);var bt=[];function _s(l){F(l.g,function(d,g){this.g.hasOwnProperty(g)&&z(d)},l),l.g={}}mt.prototype.N=function(){mt.aa.N.call(this),_s(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=a.JSON.stringify,Ft=a.JSON.parse,nn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Wr(){}Wr.prototype.h=null;function _p(l){return l.h||(l.h=l.i())}function yp(){}var Yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cu(){Ye.call(this,"d")}_(cu,Ye);function uu(){Ye.call(this,"c")}_(uu,Ye);var rr={},vp=null;function Na(){return vp=vp||new re}rr.La="serverreachability";function Ep(l){Ye.call(this,rr.La,l)}_(Ep,Ye);function Ji(l){const d=Na();ce(d,new Ep(d))}rr.STAT_EVENT="statevent";function Tp(l,d){Ye.call(this,rr.STAT_EVENT,l),this.stat=d}_(Tp,Ye);function Ut(l){const d=Na();ce(d,new Tp(d,l))}rr.Ma="timingevent";function wp(l,d){Ye.call(this,rr.Ma,l),this.size=d}_(wp,Ye);function Xi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function Nb(l,d,g,y,x,V){l.info(function(){if(l.g)if(V)for(var G="",Ve=V.split("&"),_t=0;_t<Ve.length;_t++){var Se=Ve[_t].split("=");if(1<Se.length){var Ct=Se[0];Se=Se[1];var At=Ct.split("_");G=2<=At.length&&At[1]=="type"?G+(Ct+"="+Se+"&"):G+(Ct+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+d+`
`+g+`
`+G})}function Ob(l,d,g,y,x,V,G){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+d+`
`+g+`
`+V+" "+G})}function qr(l,d,g,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Mb(l,g)+(y?" "+y:"")})}function Db(l,d){l.info(function(){return"TIMEOUT: "+d})}Zi.prototype.info=function(){};function Mb(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<x.length;G++)x[G]=""}}}}return $r(g)}catch{return d}}var Oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ip={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hu;function Da(){}_(Da,Wr),Da.prototype.g=function(){return new XMLHttpRequest},Da.prototype.i=function(){return{}},hu=new Da;function ys(l,d,g,y){this.j=l,this.i=d,this.l=g,this.R=y||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var Cp={},fu={};function du(l,d,g){l.L=1,l.v=Va(jn(d)),l.m=g,l.P=!0,Ap(l,null)}function Ap(l,d){l.F=Date.now(),Ma(l),l.A=jn(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Bp(g.i,"t",y),l.C=0,g=l.j.J,l.h=new bp,l.g=rg(l.j,g?d:null,!l.m),0<l.O&&(l.M=new ut(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,y=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(bt[0]=x.toString()),x=bt);for(var V=0;V<x.length;V++){var G=j(g,x[V],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ji(),Nb(l.i,l.u,l.A,l.l,l.R,l.m)}ys.prototype.ca=function(l){l=l.target;const d=this.M;d&&$n(l)==3?d.j():this.Y(l)},ys.prototype.Y=function(l){try{if(l==this.g)e:{const At=$n(this.g);var d=this.g.Ba();const Gr=this.g.Z();if(!(3>At)&&(At!=3||this.g&&(this.h.h||this.g.oa()||zp(this.g)))){this.J||At!=4||d==7||(d==8||0>=Gr?Ji(3):Ji(2)),pu(this);var g=this.g.Z();this.X=g;t:if(Rp(this)){var y=zp(this.g);l="";var x=y.length,V=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),eo(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(V&&d==x-1)});y.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,Ob(this.i,this.u,this.A,this.l,this.R,At,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,_t=this.g;if((Ve=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ve)){var Se=Ve;break t}}Se=null}if(g=Se)qr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gu(this,g);else{this.o=!1,this.s=3,Ut(12),ir(this),eo(this);break e}}if(this.P){g=!0;let gn;for(;!this.J&&this.C<G.length;)if(gn=xb(this,G),gn==fu){At==4&&(this.s=4,Ut(14),g=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==Cp){this.s=4,Ut(15),qr(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else qr(this.i,this.l,gn,null),gu(this,gn);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||G.length!=0||this.h.h||(this.s=1,Ut(16),g=!1),this.o=this.o&&g,!g)qr(this.i,this.l,G,"[Invalid Chunked Response]"),ir(this),eo(this);else if(0<G.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Tu(Ct),Ct.M=!0,Ut(11))}}else qr(this.i,this.l,G,null),gu(this,G);At==4&&ir(this),this.o&&!this.J&&(At==4?eg(this.j,this):(this.o=!1,Ma(this)))}else Xb(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ir(this),eo(this)}}}catch{}finally{}};function Rp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function xb(l,d){var g=l.C,y=d.indexOf(`
`,g);return y==-1?fu:(g=Number(d.substring(g,y)),isNaN(g)?Cp:(y+=1,y+g>d.length?fu:(d=d.slice(y,y+g),l.C=y+g,d)))}ys.prototype.cancel=function(){this.J=!0,ir(this)};function Ma(l){l.S=Date.now()+l.I,Sp(l,l.I)}function Sp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Xi(p(l.ba,l),d)}function pu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ys.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Db(this.i,this.A),this.L!=2&&(Ji(),Ut(17)),ir(this),this.s=2,eo(this)):Sp(this,this.S-l)};function eo(l){l.j.G==0||l.J||eg(l.j,l)}function ir(l){pu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,_s(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function gu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||mu(g.h,l))){if(!l.K&&mu(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)$a(g),Ha(g);else break e;Eu(g),Ut(18)}}else g.za=x[1],0<g.za-g.T&&37500>x[2]&&g.F&&g.v==0&&!g.C&&(g.C=Xi(p(g.Za,g),6e3));if(1>=Np(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ar(g,11)}else if((l.K||g.g==l)&&$a(g),!O(d))for(x=g.Da.g.parse(d),d=0;d<x.length;d++){let Se=x[d];if(g.T=Se[0],Se=Se[1],g.G==2)if(Se[0]=="c"){g.K=Se[1],g.ia=Se[2];const Ct=Se[3];Ct!=null&&(g.la=Ct,g.j.info("VER="+g.la));const At=Se[4];At!=null&&(g.Aa=At,g.j.info("SVER="+g.Aa));const Gr=Se[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(y=1.5*Gr,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const gn=l.g;if(gn){const qa=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qa){var V=y.h;V.g||qa.indexOf("spdy")==-1&&qa.indexOf("quic")==-1&&qa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(_u(V,V.h),V.h=null))}if(y.D){const wu=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(y.ya=wu,He(y.I,y.D,wu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var G=l;if(y.qa=sg(y,y.J?y.ia:null,y.W),G.K){Op(y.h,G);var Ve=G,_t=y.L;_t&&(Ve.I=_t),Ve.B&&(pu(Ve),Ma(Ve)),y.g=G}else Xp(y);0<g.i.length&&ja(g)}else Se[0]!="stop"&&Se[0]!="close"||ar(g,7);else g.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?ar(g,7):vu(g):Se[0]!="noop"&&g.l&&g.l.ta(Se),g.v=0)}}Ji(4)}catch{}}var Lb=class{constructor(l,d){this.g=l,this.map=d}};function Pp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Np(l){return l.h?1:l.g?l.g.size:0}function mu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function _u(l,d){l.g?l.g.add(d):l.h=d}function Op(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Pp.prototype.cancel=function(){if(this.i=Dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Dp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return T(l.i)}function Vb(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,y=0;y<g;y++)d.push(l[y]);return d}d=[],g=0;for(y in l)d[g++]=l[y];return d}function Fb(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const y in l)d[g++]=y;return d}}}function Mp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=Fb(l),y=Vb(l),x=y.length,V=0;V<x;V++)d.call(void 0,y[V],g&&g[V],l)}var xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ub(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),x=null;if(0<=y){var V=l[g].substring(0,y);x=l[g].substring(y+1)}else V=l[g];d(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function or(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof or){this.h=l.h,xa(this,l.j),this.o=l.o,this.g=l.g,La(this,l.s),this.l=l.l;var d=l.i,g=new so;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Lp(this,g),this.m=l.m}else l&&(d=String(l).match(xp))?(this.h=!1,xa(this,d[1]||"",!0),this.o=to(d[2]||""),this.g=to(d[3]||"",!0),La(this,d[4]),this.l=to(d[5]||"",!0),Lp(this,d[6]||"",!0),this.m=to(d[7]||"")):(this.h=!1,this.i=new so(null,this.h))}or.prototype.toString=function(){var l=[],d=this.j;d&&l.push(no(d,Vp,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(no(d,Vp,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(no(g,g.charAt(0)=="/"?jb:Hb,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",no(g,Wb)),l.join("")};function jn(l){return new or(l)}function xa(l,d,g){l.j=g?to(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function La(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Lp(l,d,g){d instanceof so?(l.i=d,qb(l.i,l.h)):(g||(d=no(d,$b)),l.i=new so(d,l.h))}function He(l,d,g){l.i.set(d,g)}function Va(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function to(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function no(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,Bb),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bb(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Vp=/[#\/\?@]/g,Hb=/[#\?:]/g,jb=/[#\?]/g,$b=/[#\?@]/g,Wb=/#/g;function so(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vs(l){l.g||(l.g=new Map,l.h=0,l.i&&Ub(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=so.prototype,t.add=function(l,d){vs(this),this.i=null,l=Kr(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function Fp(l,d){vs(l),d=Kr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Up(l,d){return vs(l),d=Kr(l,d),l.g.has(d)}t.forEach=function(l,d){vs(this),this.g.forEach(function(g,y){g.forEach(function(x){l.call(d,x,y,this)},this)},this)},t.na=function(){vs(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let y=0;y<d.length;y++){const x=l[y];for(let V=0;V<x.length;V++)g.push(d[y])}return g},t.V=function(l){vs(this);let d=[];if(typeof l=="string")Up(this,l)&&(d=d.concat(this.g.get(Kr(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return vs(this),this.i=null,l=Kr(this,l),Up(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Bp(l,d,g){Fp(l,d),0<g.length&&(l.i=null,l.g.set(Kr(l,d),T(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var y=d[g];const V=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var x=V;G[y]!==""&&(x+="="+encodeURIComponent(String(G[y]))),l.push(x)}}return this.i=l.join("&")};function Kr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function qb(l,d){d&&!l.j&&(vs(l),l.i=null,l.g.forEach(function(g,y){var x=y.toLowerCase();y!=x&&(Fp(this,y),Bp(this,x,g))},l)),l.j=d}function Kb(l,d){const g=new Zi;if(a.Image){const y=new Image;y.onload=m(Es,g,"TestLoadImage: loaded",!0,d,y),y.onerror=m(Es,g,"TestLoadImage: error",!1,d,y),y.onabort=m(Es,g,"TestLoadImage: abort",!1,d,y),y.ontimeout=m(Es,g,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function zb(l,d){const g=new Zi,y=new AbortController,x=setTimeout(()=>{y.abort(),Es(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(V=>{clearTimeout(x),V.ok?Es(g,"TestPingServer: ok",!0,d):Es(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),Es(g,"TestPingServer: error",!1,d)})}function Es(l,d,g,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(g)}catch{}}function Gb(){this.g=new nn}function Qb(l,d,g){const y=g||"";try{Mp(l,function(x,V){let G=x;u(x)&&(G=$r(x)),d.push(y+V+"="+encodeURIComponent(G))})}catch(x){throw d.push(y+"type="+encodeURIComponent("_badmap")),x}}function Fa(l){this.l=l.Ub||null,this.j=l.eb||!1}_(Fa,Wr),Fa.prototype.g=function(){return new Ua(this.l,this.j)},Fa.prototype.i=function(l){return function(){return l}}({});function Ua(l,d){re.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Ua,re),t=Ua.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,io(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ro(this):io(this),this.readyState==3&&Hp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ro(this))},t.Qa=function(l){this.g&&(this.response=l,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,io(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function io(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jp(l){let d="";return F(l,function(g,y){d+=y,d+=":",d+=g,d+=`\r
`}),d}function yu(l,d,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=jp(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):He(l,d,g))}function Xe(l){re.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Xe,re);var Yb=/^https?$/i,Jb=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hu.g(),this.v=this.o?_p(this.o):_p(hu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){$p(this,V);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)g.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())g.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Jb,d,void 0))||y||x||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of g)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kp(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){$p(this,V)}};function $p(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Wp(l),Ba(l)}function Wp(l){l.A||(l.A=!0,ce(l,"complete"),ce(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ce(this,"complete"),ce(this,"abort"),Ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ba(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qp(this):this.bb())},t.bb=function(){qp(this)};function qp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||$n(l)!=4||l.Z()!=2)){if(l.u&&$n(l)==4)Re(l.Ea,0,l);else if(ce(l,"readystatechange"),$n(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var y;if(y=G===0){var x=String(l.D).match(xp)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),y=!Yb.test(x?x.toLowerCase():"")}g=y}if(g)ce(l,"complete"),ce(l,"success");else{l.m=6;try{var V=2<$n(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",Wp(l)}}finally{Ba(l)}}}}function Ba(l,d){if(l.g){Kp(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ce(l,"ready");try{g.onreadystatechange=y}catch{}}}function Kp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ft(d)}};function zp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Xb(l){const d={};l=(l.g&&2<=$n(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(O(l[y]))continue;var g=P(l[y]);const x=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=d[x]||[];d[x]=V,V.push(g)}I(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oo(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Gp(l){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oo("baseRetryDelayMs",5e3,l),this.cb=oo("retryDelaySeedMs",1e4,l),this.Wa=oo("forwardChannelMaxRetries",2,l),this.wa=oo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pp(l&&l.concurrentRequestLimit),this.Da=new Gb,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gp.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,y){Ut(0),this.W=l,this.H=d||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=sg(this,null,this.W),ja(this)};function vu(l){if(Qp(l),l.G==3){var d=l.U++,g=jn(l.I);if(He(g,"SID",l.K),He(g,"RID",d),He(g,"TYPE","terminate"),ao(l,g),d=new ys(l,l.j,d),d.L=2,d.v=Va(jn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=rg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ma(d)}ng(l)}function Ha(l){l.g&&(Tu(l),l.g.cancel(),l.g=null)}function Qp(l){Ha(l),l.u&&(a.clearTimeout(l.u),l.u=null),$a(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ja(l){if(!kp(l.h)&&!l.s){l.s=!0;var d=l.Ga;he||pn(),te||(he(),te=!0),Ge.add(d,l),l.B=0}}function Zb(l,d){return Np(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Xi(p(l.Ga,l,d),tg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new ys(this,this.j,l);let V=this.o;if(this.S&&(V?(V=E(V),b(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Jp(this,x,d),g=jn(this.I),He(g,"RID",l),He(g,"CVER",22),this.D&&He(g,"X-HTTP-Session-Id",this.D),ao(this,g),V&&(this.O?d="headers="+encodeURIComponent(String(jp(V)))+"&"+d:this.m&&yu(g,this.m,V)),_u(this.h,x),this.Ua&&He(g,"TYPE","init"),this.P?(He(g,"$req",d),He(g,"SID","null"),x.T=!0,du(x,g,null)):du(x,g,d),this.G=2}}else this.G==3&&(l?Yp(this,l):this.i.length==0||kp(this.h)||Yp(this))};function Yp(l,d){var g;d?g=d.l:g=l.U++;const y=jn(l.I);He(y,"SID",l.K),He(y,"RID",g),He(y,"AID",l.T),ao(l,y),l.m&&l.o&&yu(y,l.m,l.o),g=new ys(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Jp(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),_u(l.h,g),du(g,y,d)}function ao(l,d){l.H&&F(l.H,function(g,y){He(d,y,g)}),l.l&&Mp({},function(g,y){He(d,y,g)})}function Jp(l,d,g){g=Math.min(l.i.length,g);var y=l.l?p(l.l.Na,l.l,l):null;e:{var x=l.i;let V=-1;for(;;){const G=["count="+g];V==-1?0<g?(V=x[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ve=!0;for(let _t=0;_t<g;_t++){let Se=x[_t].g;const Ct=x[_t].map;if(Se-=V,0>Se)V=Math.max(0,x[_t].g-100),Ve=!1;else try{Qb(Ct,G,"req"+Se+"_")}catch{y&&y(Ct)}}if(Ve){y=G.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,y}function Xp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;he||pn(),te||(he(),te=!0),Ge.add(d,l),l.v=0}}function Eu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Xi(p(l.Fa,l),tg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Xi(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Ha(this),Zp(this))};function Tu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Zp(l){l.g=new ys(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=jn(l.qa);He(d,"RID","rpc"),He(d,"SID",l.K),He(d,"AID",l.T),He(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(d,"TO",l.ja),He(d,"TYPE","xmlhttp"),ao(l,d),l.m&&l.o&&yu(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Va(jn(d)),g.m=null,g.P=!0,Ap(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Ha(this),Eu(this),Ut(19))};function $a(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function eg(l,d){var g=null;if(l.g==d){$a(l),Tu(l),l.g=null;var y=2}else if(mu(l.h,d))g=d.D,Op(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var x=l.B;y=Na(),ce(y,new wp(y,g)),ja(l)}else Xp(l);else if(x=d.s,x==3||x==0&&0<d.X||!(y==1&&Zb(l,d)||y==2&&Eu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),x){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function tg(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function ar(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),y=l.Xa;const x=!y;y=new or(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xa(y,"https"),Va(y),x?Kb(y.toString(),g):zb(y.toString(),g)}else Ut(2);l.G=0,l.l&&l.l.sa(d),ng(l),Qp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function ng(l){if(l.G=0,l.ka=[],l.l){const d=Dp(l.h);(d.length!=0||l.i.length!=0)&&(k(l.ka,d),k(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function sg(l,d,g){var y=g instanceof or?jn(g):new or(g);if(y.g!="")d&&(y.g=d+"."+y.g),La(y,y.s);else{var x=a.location;y=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var V=new or(null);y&&xa(V,y),d&&(V.g=d),x&&La(V,x),g&&(V.l=g),y=V}return g=l.D,d=l.ya,g&&d&&He(y,g,d),He(y,"VER",l.la),ao(l,y),y}function rg(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Xe(new Fa({eb:g})):new Xe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ig(){}t=ig.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wa(){}Wa.prototype.g=function(l,d){return new Yt(l,d)};function Yt(l,d){re.call(this),this.g=new Gp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!O(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new zr(this)}_(Yt,re),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){vu(this.g)},Yt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=$r(l),l=g);d.i.push(new Lb(d.Ya++,l)),d.G==3&&ja(d)},Yt.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,Yt.aa.N.call(this)};function og(l){cu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}_(og,cu);function ag(){uu.call(this),this.status=1}_(ag,uu);function zr(l){this.g=l}_(zr,ig),zr.prototype.ua=function(){ce(this.g,"a")},zr.prototype.ta=function(l){ce(this.g,new og(l))},zr.prototype.sa=function(l){ce(this.g,new ag)},zr.prototype.ra=function(){ce(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,yT=function(){return new Wa},_T=function(){return Na()},mT=rr,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,gl=Oa,Ip.COMPLETE="complete",gT=Ip,yp.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",re.prototype.listen=re.prototype.K,Eo=yp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,pT=Xe}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});const Fm="@firebase/firestore",Um="4.7.14";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let ji="11.7.3";/**
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
 */const Sr=new Lc("@firebase/firestore");function ei(){return Sr.logLevel}function ee(t,...e){if(Sr.logLevel<=ve.DEBUG){const n=e.map(ld);Sr.debug(`Firestore (${ji}): ${t}`,...n)}}function as(t,...e){if(Sr.logLevel<=ve.ERROR){const n=e.map(ld);Sr.error(`Firestore (${ji}): ${t}`,...n)}}function Si(t,...e){if(Sr.logLevel<=ve.WARN){const n=e.map(ld);Sr.warn(`Firestore (${ji}): ${t}`,...n)}}function ld(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,vT(t,s,n)}function vT(t,e,n){let s=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw as(s),new Error(s)}function Me(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||vT(e,r,s)}function _e(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends ps{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class IN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bN{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Hs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Hs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Hs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string",31837,{l:s}),new ET(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class CN{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AN{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new CN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0,3512);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function SN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function TT(){return new TextEncoder}/**
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
 */class wT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=SN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function Wh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return ye(s,r);{const i=TT(),o=PN(i.encode(Hm(t,n)),i.encode(Hm(e,n)));return o!==0?o:ye(s,r)}}n+=s>65535?2:1}return ye(t.length,e.length)}function Hm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function PN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Pi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */const jm=-62135596800,$m=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*$m);return new at(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jm)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-jm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new at(0,0))}static max(){return new ge(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wm="__name__";class Nn{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&de(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Nn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const s=Nn.isNumericId(e),r=Nn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Nn.extractNumericId(e).compare(Nn.extractNumericId(n)):Wh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bs.fromString(e.substring(4,e.length-2))}}class Ke extends Nn{construct(e,n,s){return new Ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const kN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Nn{construct(e,n,s){return new Tt(e,n,s)}static isValidIdentifier(e){return kN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wm}static keyField(){return new Tt([Wm])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ke.fromString(e))}static fromName(e){return new le(Ke.fromString(e).popFirst(5))}static empty(){return new le(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ke(e.slice()))}}/**
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
 */const ta=-1;function NN(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ge.fromTimestamp(s===1e9?new at(n+1,0):new at(n,s));return new zs(r,le.empty(),e)}function ON(t){return new zs(t.readTime,t.key,ta)}class zs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new zs(ge.min(),le.empty(),ta)}static max(){return new zs(ge.max(),le.empty(),ta)}}function DN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const MN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $i(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==MN)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,s)=>{n(e)})}static reject(e){return new H((n,s)=>{s(e)})}static waitFor(e){return new H((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=H.resolve(!1);for(const s of e)n=n.next(r=>r?H.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new H((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new H((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function LN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Fc.le=-1;/**
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
 */const cd=-1;function Uc(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const IT="";function FN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qm(e)),e=UN(t.get(n),e);return qm(e)}function UN(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case IT:n+="";break;default:n+=i}}return n}function qm(t){return t+IT+""}/**
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
 */function Km(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let nt=class qh{constructor(e,n){this.comparator=e,this.root=n||js.EMPTY}insert(e,n){return new qh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,js.BLACK,null,null))}remove(e){return new qh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,js.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}},sl=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},js=class zn{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??zn.RED,this.left=r??zn.EMPTY,this.right=i??zn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new zn(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return zn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return zn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}};js.EMPTY=null,js.RED=!0,js.BLACK=!1;js.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new js(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zm(this.data.getIterator())}getIteratorFrom(e){return new zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new lt(Tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class CT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CT("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const BN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gs(t){if(Me(!!t,39018),typeof t=="string"){let e=0;const n=BN.exec(t);if(Me(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */const AT="server_timestamp",RT="__type__",ST="__previous_value__",PT="__local_write_time__";function ud(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[RT])===null||n===void 0?void 0:n.stringValue)===AT}function Bc(t){const e=t.mapValue.fields[ST];return ud(e)?Bc(e):e}function na(t){const e=Gs(t.mapValue.fields[PT].timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class HN{constructor(e,n,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Ql="(default)";class sa{constructor(e,n){this.projectId=e,this.database=n||Ql}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database===Ql}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kT="__type__",jN="__max__",rl={mapValue:{}},NT="__vector__",Yl="value";function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ud(t)?4:WN(t)?9007199254740991:$N(t)?10:11:de(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Gs(r.timestampValue),a=Gs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),a=Ze(i.doubleValue);return o===a?Gl(o)===Gl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Km(o)!==Km(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Bn(o[c],a[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function ra(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Gm(t.timestampValue,e.timestampValue);case 4:return Gm(na(t),na(e));case 5:return Wh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qs(i),c=Qs(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ye(a[u],c[u]);if(h!==0)return h}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(Ze(i.latitude),Ze(o.latitude));return a!==0?a:ye(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f[Yl])===null||a===void 0?void 0:a.arrayValue,_=(c=p[Yl])===null||c===void 0?void 0:c.arrayValue,T=ye(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:Qm(m,_)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rl.mapValue&&o===rl.mapValue)return 0;if(i===rl.mapValue)return 1;if(o===rl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=Wh(c[f],h[f]);if(p!==0)return p;const m=ki(a[c[f]],u[h[f]]);if(m!==0)return m}return ye(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de(23264,{Pe:n})}}function Gm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Gs(t),s=Gs(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Qm(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=ki(n[r],s[r]);if(i)return i}return ye(n.length,s.length)}function Ni(t){return Kh(t)}function Kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Gs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Kh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Kh(n.fields[o])}`;return r+"}"}(t.mapValue):de(61005,{value:t})}function ml(t){switch(Ys(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(t);return e?16+ml(e):16;case 5:return 2*t.stringValue.length;case 6:return Qs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+ml(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return nr(s.fields,(i,o)=>{r+=i.length+ml(o)}),r}(t.mapValue);default:throw de(13486,{value:t})}}function zh(t){return!!t&&"integerValue"in t}function hd(t){return!!t&&"arrayValue"in t}function Ym(t){return!!t&&"nullValue"in t}function Jm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _l(t){return!!t&&"mapValue"in t}function $N(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[kT])===null||n===void 0?void 0:n.stringValue)===NT}function Mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Mo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jN}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!_l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=Tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Mo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());_l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];_l(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){nr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new zt(Mo(this.value))}}function OT(t){const e=[];return nr(t.fields,(n,s)=>{const r=new Tt([n]);if(_l(s)){const i=OT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xt(e)}/**
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
 */class Nt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,ge.min(),ge.min(),ge.min(),zt.empty(),0)}static newFoundDocument(e,n,s,r){return new Nt(e,1,n,ge.min(),s,r,0)}static newNoDocument(e,n){return new Nt(e,2,n,ge.min(),ge.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,ge.min(),ge.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Xm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=le.comparator(le.fromName(o.referenceValue),n.key):s=ki(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xl{constructor(e,n="asc"){this.field=e,this.dir=n}}function qN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class DT{}class rt extends DT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new zN(e,n,s):n==="array-contains"?new YN(e,s):n==="in"?new JN(e,s):n==="not-in"?new XN(e,s):n==="array-contains-any"?new ZN(e,s):new rt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new GN(e,s):new QN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ki(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends DT{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Hn(e,n)}matches(e){return MT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function MT(t){return t.op==="and"}function xT(t){return KN(t)&&MT(t)}function KN(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Gh(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Ni(t.value);if(xT(t))return t.filters.map(e=>Gh(e)).join(",");{const e=t.filters.map(n=>Gh(n)).join(",");return`${t.op}(${e})`}}function LT(t,e){return t instanceof rt?function(s,r){return r instanceof rt&&s.op===r.op&&s.field.isEqual(r.field)&&Bn(s.value,r.value)}(t,e):t instanceof Hn?function(s,r){return r instanceof Hn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&LT(o,r.filters[a]),!0):!1}(t,e):void de(19439)}function VT(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ni(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(VT).join(" ,")+"}"}(t):"Filter"}class zN extends rt{constructor(e,n,s){super(e,n,s),this.key=le.fromName(s.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class GN extends rt{constructor(e,n){super(e,"in",n),this.keys=FT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QN extends rt{constructor(e,n){super(e,"not-in",n),this.keys=FT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>le.fromName(s.referenceValue))}class YN extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hd(n)&&ra(n.arrayValue,this.value)}}class JN extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class XN extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ra(this.value.arrayValue,n)}}class ZN extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ra(this.value.arrayValue,s))}}/**
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
 */class eO{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function e_(t,e=null,n=[],s=[],r=null,i=null,o=null){return new eO(t,e,n,s,r,i,o)}function fd(t){const e=_e(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Gh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ni(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ni(s)).join(",")),e.Ie=n}return e.Ie}function dd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zm(t.startAt,e.startAt)&&Zm(t.endAt,e.endAt)}function Qh(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function tO(t,e,n,s,r,i,o,a){return new Hc(t,e,n,s,r,i,o,a)}function UT(t){return new Hc(t)}function t_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nO(t){return t.collectionGroup!==null}function xo(t){const e=_e(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(Tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Xl(i,s))}),n.has(Tt.keyField().canonicalString())||e.Ee.push(new Xl(Tt.keyField(),s))}return e.Ee}function Ln(t){const e=_e(t);return e.de||(e.de=sO(e,xo(t))),e.de}function sO(t,e){if(t.limitType==="F")return e_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Xl(r.field,i)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return e_(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Yh(t,e,n){return new Hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jc(t,e){return dd(Ln(t),Ln(e))&&t.limitType===e.limitType}function BT(t){return`${fd(Ln(t))}|lt:${t.limitType}`}function ti(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>VT(r)).join(", ")}]`),Uc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Ni(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Ni(r)).join(",")),`Target(${s})`}(Ln(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):le.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of xo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=Xm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,xo(s),r)||s.endAt&&!function(o,a,c){const u=Xm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,xo(s),r))}(t,e)}function rO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HT(t){return(e,n)=>{let s=!1;for(const r of xo(t)){const i=iO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function iO(t,e,n){const s=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?ki(c,u):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de(19790,{direction:t.dir})}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){nr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return bT(this.inner)}size(){return this.innerSize}}/**
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
 */const oO=new nt(le.comparator);function ls(){return oO}const jT=new nt(le.comparator);function To(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function $T(t){let e=jT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function mr(){return Lo()}function WT(){return Lo()}function Lo(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const aO=new nt(le.comparator),lO=new lt(le.comparator);function Te(...t){let e=lO;for(const n of t)e=e.add(n);return e}const cO=new lt(ye);function uO(){return cO}/**
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
 */function pd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function qT(t){return{integerValue:""+t}}function hO(t,e){return VN(e)?qT(e):pd(t,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function fO(t,e,n){return t instanceof Zl?function(r,i){const o={fields:{[RT]:{stringValue:AT},[PT]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ud(i)&&(i=Bc(i)),i&&(o.fields[ST]=i),{mapValue:o}}(n,e):t instanceof ia?zT(t,e):t instanceof oa?GT(t,e):function(r,i){const o=KT(r,i),a=n_(o)+n_(r.Re);return zh(o)&&zh(r.Re)?qT(a):pd(r.serializer,a)}(t,e)}function dO(t,e,n){return t instanceof ia?zT(t,e):t instanceof oa?GT(t,e):n}function KT(t,e){return t instanceof ec?function(s){return zh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Zl extends Wc{}class ia extends Wc{constructor(e){super(),this.elements=e}}function zT(t,e){const n=QT(e);for(const s of t.elements)n.some(r=>Bn(r,s))||n.push(s);return{arrayValue:{values:n}}}class oa extends Wc{constructor(e){super(),this.elements=e}}function GT(t,e){let n=QT(e);for(const s of t.elements)n=n.filter(r=>!Bn(r,s));return{arrayValue:{values:n}}}class ec extends Wc{constructor(e,n){super(),this.serializer=e,this.Re=n}}function n_(t){return Ze(t.integerValue||t.doubleValue)}function QT(t){return hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pO(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof ia&&r instanceof ia||s instanceof oa&&r instanceof oa?Pi(s.elements,r.elements,Bn):s instanceof ec&&r instanceof ec?Bn(s.Re,r.Re):s instanceof Zl&&r instanceof Zl}(t.transform,e.transform)}class gO{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gd(t.key,In.none()):new ya(t.key,t.data,In.none());{const n=t.data,s=zt.empty();let r=new lt(Tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new sr(t.key,s,new Xt(r.toArray()),In.none())}}function mO(t,e,n){t instanceof ya?function(r,i,o){const a=r.value.clone(),c=r_(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(r,i,o){if(!yl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=r_(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(JT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vo(t,e,n,s){return t instanceof ya?function(i,o,a,c){if(!yl(i.precondition,o))return a;const u=i.value.clone(),h=i_(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof sr?function(i,o,a,c){if(!yl(i.precondition,o))return a;const u=i_(i.fieldTransforms,c,o),h=o.data;return h.setAll(JT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,o,a){return yl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _O(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=KT(s.transform,r||null);i!=null&&(n===null&&(n=zt.empty()),n.set(s.field,i))}return n||null}function s_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Pi(s,r,(i,o)=>pO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends qc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class sr extends qc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function JT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function r_(t,e,n){const s=new Map;Me(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,dO(o,a,n[r]))}return s}function i_(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,fO(i,o,e))}return s}class gd extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yO extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vO{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&mO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=WT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=YT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,s)=>s_(n,s))&&Pi(this.baseMutations,e.baseMutations,(n,s)=>s_(n,s))}}class md{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Me(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let r=function(){return aO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new md(e,n,s,r)}}/**
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
 */class EO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,be;function wO(t){switch(t){case $.OK:return de(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function XT(t){if(t===void 0)return as("GRPC error has no .code"),$.UNKNOWN;switch(t){case et.OK:return $.OK;case et.CANCELLED:return $.CANCELLED;case et.UNKNOWN:return $.UNKNOWN;case et.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case et.INTERNAL:return $.INTERNAL;case et.UNAVAILABLE:return $.UNAVAILABLE;case et.UNAUTHENTICATED:return $.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case et.NOT_FOUND:return $.NOT_FOUND;case et.ALREADY_EXISTS:return $.ALREADY_EXISTS;case et.PERMISSION_DENIED:return $.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case et.ABORTED:return $.ABORTED;case et.OUT_OF_RANGE:return $.OUT_OF_RANGE;case et.UNIMPLEMENTED:return $.UNIMPLEMENTED;case et.DATA_LOSS:return $.DATA_LOSS;default:return de(39323,{code:t})}}(be=et||(et={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const IO=new Bs([4294967295,4294967295],0);function o_(t){const e=TT().encode(t),n=new dT;return n.update(e),new Uint8Array(n.digest())}function a_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bs([n,s],0),new Bs([r,i],0)]}class _d{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wo(`Invalid padding: ${n}`);if(s<0)throw new wo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new wo(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Bs.fromNumber(this.pe)}we(e,n,s){let r=e.add(n.multiply(Bs.fromNumber(s)));return r.compare(IO)===1&&(r=new Bs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=o_(e),[s,r]=a_(n);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);if(!this.be(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _d(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=o_(e),[s,r]=a_(n);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class wo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,va.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Kc(ge.min(),r,new nt(ye),ls(),Te())}}class va{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new va(s,n,Te(),Te(),Te())}}/**
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
 */class vl{constructor(e,n,s,r){this.De=e,this.removedTargetIds=n,this.key=s,this.ve=r}}class ZT{constructor(e,n){this.targetId=e,this.Ce=n}}class ew{constructor(e,n,s=wt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class l_{constructor(){this.Fe=0,this.Me=c_(),this.xe=wt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),s=Te();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:de(38017,{changeType:i})}}),new va(this.xe,this.Oe,e,n,s)}Qe(){this.Ne=!1,this.Me=c_()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Me(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class bO{constructor(e){this.ze=e,this.je=new Map,this.He=ls(),this.Je=il(),this.Ye=il(),this.Ze=new nt(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const s=this.rt(n);switch(e.state){case 0:this.it(n)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((s,r)=>{this.it(r)&&n(r)})}ot(e){const n=e.targetId,s=e.Ce.count,r=this._t(n);if(r){const i=r.target;if(Qh(i))if(s===0){const o=new le(i.path);this.tt(n,o,Nt.newNoDocument(o,ge.min()))}else Me(s===1,20013,{expectedCount:s});else{const o=this.ut(n);if(o!==s){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof CT)return Si("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new _d(o,r,i)}catch(c){return Si(c instanceof wo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,n,s){return n.Ce.count===s-this.Tt(e,n.targetId)?0:2}Tt(e,n){const s=this.ze.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,i,null),r++)}),r}It(e){const n=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&Qh(a.target)){const c=new le(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,Nt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let s=Te();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const r=new Kc(e,n,this.Ze,this.He,s);return this.He=ls(),this.Je=il(),this.Ye=il(),this.Ze=new nt(ye),r}et(e,n){if(!this.it(e))return;const s=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,s){if(!this.it(e))return;const r=this.rt(e);this.dt(e,n)?r.$e(n,1):r.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),s&&(this.He=this.He.insert(n,s))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new l_,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new lt(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new lt(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new l_),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function il(){return new nt(le.comparator)}function c_(){return new nt(le.comparator)}const CO={asc:"ASCENDING",desc:"DESCENDING"},AO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RO={and:"AND",or:"OR"};class SO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jh(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PO(t,e){return tc(t,e.toTimestamp())}function Vn(t){return Me(!!t,49232),ge.fromTimestamp(function(n){const s=Gs(n);return new at(s.seconds,s.nanos)}(t))}function yd(t,e){return Xh(t,e).canonicalString()}function Xh(t,e){const n=function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nw(t){const e=Ke.fromString(t);return Me(aw(e),10190,{key:e.toString()}),e}function Zh(t,e){return yd(t.databaseId,e.path)}function Qu(t,e){const n=nw(e);if(n.get(1)!==t.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(rw(n))}function sw(t,e){return yd(t.databaseId,e)}function kO(t){const e=nw(t);return e.length===4?Ke.emptyPath():rw(e)}function ef(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rw(t){return Me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function u_(t,e,n){return{name:Zh(t,e),fields:n.value.mapValue.fields}}function NO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string",58123),wt.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:XT(u.code);return new ae(h,u.message||"")}(o);n=new ew(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qu(t,s.document.name),i=Vn(s.document.updateTime),o=s.document.createTime?Vn(s.document.createTime):ge.min(),a=new zt({mapValue:{fields:s.document.fields}}),c=Nt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new vl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qu(t,s.document),i=s.readTime?Vn(s.readTime):ge.min(),o=Nt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qu(t,s.document),i=s.removedTargetIds||[];n=new vl([],i,r,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new TO(r,i),a=s.targetId;n=new ZT(a,o)}}return n}function OO(t,e){let n;if(e instanceof ya)n={update:u_(t,e.key,e.value)};else if(e instanceof gd)n={delete:Zh(t,e.key)};else if(e instanceof sr)n={update:u_(t,e.key,e.data),updateMask:HO(e.fieldMask)};else{if(!(e instanceof yO))return de(16599,{ft:e.type});n={verify:Zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ec)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw de(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:PO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function DO(t,e){return t&&t.length>0?(Me(e!==void 0,14353),t.map(n=>function(r,i){let o=r.updateTime?Vn(r.updateTime):Vn(i);return o.isEqual(ge.min())&&(o=Vn(i)),new gO(o,r.transformResults||[])}(n,e))):[]}function MO(t,e){return{documents:[sw(t,e.path)]}}function xO(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=sw(t,r);const i=function(u){if(u.length!==0)return ow(Hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:ni(p.field),direction:FO(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Jh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:r}}function LO(t){let e=kO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Me(s===1,65062);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=iw(f);return p instanceof Hn&&xT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(_){return new Xl(si(_.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Uc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,m=f.values||[];return new Jl(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,m=f.values||[];return new Jl(m,p)}(n.endAt)),tO(e,r,o,i,a,"F",c,u)}function VO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=si(n.unaryFilter.field);return rt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=si(n.unaryFilter.field);return rt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=si(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(si(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(s=>iw(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function FO(t){return CO[t]}function UO(t){return AO[t]}function BO(t){return RO[t]}function ni(t){return{fieldPath:t.canonicalString()}}function si(t){return Tt.fromServerFormat(t.fieldPath)}function ow(t){return t instanceof rt?function(n){if(n.op==="=="){if(Jm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NAN"}};if(Ym(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jm(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NAN"}};if(Ym(n.value))return{unaryFilter:{field:ni(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(n.field),op:UO(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const s=n.getFilters().map(r=>ow(r));return s.length===1?s[0]:{compositeFilter:{op:BO(n.op),filters:s}}}(t):de(54877,{filter:t})}function HO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xs{constructor(e,n,s,r,i=ge.min(),o=ge.min(),a=wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new xs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jO{constructor(e){this.wt=e}}function $O(t){const e=LO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
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
 */class WO{constructor(){this.yn=new qO}addToCollectionParentIndex(e,n){return this.yn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(zs.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(zs.min())}updateCollectionGroup(e,n,s){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class qO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new lt(Ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new lt(Ke.comparator)).toArray()}}/**
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
 */const h_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lw=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(lw,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class Oi{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Oi(0)}static ir(){return new Oi(-1)}}/**
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
 */const f_="LruGarbageCollector",KO=1048576;function d_([t,e],[n,s]){const r=ye(t,n);return r===0?ye(e,s):r}class zO{constructor(e){this.cr=e,this.buffer=new lt(d_),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();d_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ee(f_,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wi(n)?ee(f_,"Ignoring IndexedDB error during garbage collection: ",n):await $i(n)}await this.Ir(3e5)})}}class QO{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return H.resolve(Fc.le);const s=new zO(n);return this.Er.forEachTarget(e,r=>s.Pr(r.sequenceNumber)).next(()=>this.Er.Ar(e,r=>s.Pr(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Er.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(h_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),h_):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),ei()<=ve.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function YO(t,e){return new QO(t,e)}/**
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
 */class JO{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?H.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ZO{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Vo(s.mutation,r,Xt.empty(),at.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=To();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=ls();const o=Lo(),a=function(){return Lo()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof sr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Vo(h.mutation,u,h.mutation.getFieldMask(),at.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new XO(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Lo();let r=new nt((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||Xt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||Te()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=WT();h.forEach(p=>{if(!i.has(p)){const m=YT(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):H.resolve(mr());let a=ta,c=i;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(h=>({batchId:a,changes:$T(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(s=>{let r=To();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=To();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,c=>{const u=function(f,p){return new Hc(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Nt.newInvalidDocument(h)))});let a=To();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Vo(h.mutation,u,Xt.empty(),at.now()),$c(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class eD{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return H.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Vn(r.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(r){return{name:r.name,query:$O(r.bundledQuery),readTime:Vn(r.readTime)}}(n)),H.resolve()}}/**
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
 */class tD{constructor(){this.overlays=new nt(le.comparator),this.Or=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const s=mr();return H.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.St(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Or.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(s)),H.resolve()}getOverlaysForCollection(e,n,s){const r=mr(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return H.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new nt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=mr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return H.resolve(a)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Or.get(r.largestBatchId).delete(s.key);this.Or.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new EO(n,s));let i=this.Or.get(n);i===void 0&&(i=Te(),this.Or.set(n,i)),this.Or.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nD{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class vd{constructor(){this.Nr=new lt(ft.Br),this.Lr=new lt(ft.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const s=new ft(e,n);this.Nr=this.Nr.add(s),this.Lr=this.Lr.add(s)}qr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Qr(new ft(e,n))}$r(e,n){e.forEach(s=>this.removeReference(s,n))}Ur(e){const n=new le(new Ke([])),s=new ft(n,e),r=new ft(n,e+1),i=[];return this.Lr.forEachInRange([s,r],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new le(new Ke([])),s=new ft(n,e),r=new ft(n,e+1);let i=Te();return this.Lr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),s=this.Nr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ft{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return le.comparator(e.key,n.key)||ye(e.Gr,n.Gr)}static kr(e,n){return ye(e.Gr,n.Gr)||le.comparator(e.key,n.key)}}/**
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
 */class sD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new lt(ft.Br)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vO(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.zr=this.zr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Hr(s),i=r<0?0:r;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?cd:this.Jn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ft(n,0),r=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([s,r],o=>{const a=this.jr(o.Gr);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new lt(ye);return n.forEach(r=>{const i=new ft(r,0),o=new ft(r,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],a=>{s=s.add(a.Gr)})}),H.resolve(this.Jr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;le.isDocumentKey(i)||(i=i.child(""));const o=new ft(new le(i),0);let a=new lt(ye);return this.zr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Gr)),!0)},o),H.resolve(this.Jr(a))}Jr(e){const n=[];return e.forEach(s=>{const r=this.jr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.zr;return H.forEach(n.mutations,r=>{const i=new ft(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.zr=s})}Xn(e){}containsKey(e,n){const s=new ft(n,0),r=this.zr.firstAfterOrEqual(s);return H.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rD{constructor(e){this.Zr=e,this.docs=function(){return new nt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Zr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return H.resolve(s?s.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let s=ls();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Nt.newInvalidDocument(r))}),H.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ls();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||DN(ON(h),s)<=0||(r.has(h.key)||$c(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,s,r){de(9500)}Xr(e,n){return H.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new iD(this)}getSize(e){return H.resolve(this.size)}}class iD extends JO{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.vr.addEntry(e,r)):this.vr.removeEntry(s)}),H.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class oD{constructor(e){this.persistence=e,this.ei=new Ur(n=>fd(n),dd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.ti=0,this.ni=new vd,this.targetCount=0,this.ri=Oi.rr()}forEachTarget(e,n){return this.ei.forEach((s,r)=>n(r)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ti&&(this.ti=n),H.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.ar(n),H.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ei.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),H.waitFor(i).next(()=>r)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const s=this.ei.get(n)||null;return H.resolve(s)}addMatchingKeys(e,n,s){return this.ni.qr(n,s),H.resolve()}removeMatchingKeys(e,n,s){this.ni.$r(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),H.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ni.Wr(n);return H.resolve(s)}containsKey(e,n){return H.resolve(this.ni.containsKey(n))}}/**
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
 */class cw{constructor(e,n){this.ii={},this.overlays={},this.si=new Fc(0),this.oi=!1,this.oi=!0,this._i=new nD,this.referenceDelegate=e(this),this.ai=new oD(this),this.indexManager=new WO,this.remoteDocumentCache=function(r){return new rD(r)}(s=>this.referenceDelegate.ui(s)),this.serializer=new jO(n),this.ci=new eD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ii[e.toKey()];return s||(s=new sD(n,this.referenceDelegate),this.ii[e.toKey()]=s),s}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new aD(this.si.next());return this.referenceDelegate.li(),s(r).next(i=>this.referenceDelegate.hi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Pi(e,n){return H.or(Object.values(this.ii).map(s=>()=>s.containsKey(e,n)))}}class aD extends xN{constructor(e){super(),this.currentSequenceNumber=e}}class Ed{constructor(e){this.persistence=e,this.Ti=new vd,this.Ii=null}static Ei(e){return new Ed(e)}get di(){if(this.Ii)return this.Ii;throw de(60996)}addReference(e,n,s){return this.Ti.addReference(s,n),this.di.delete(s.toString()),H.resolve()}removeReference(e,n,s){return this.Ti.removeReference(s,n),this.di.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),H.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,s=>{const r=le.fromPath(s);return this.Ai(e,r).next(i=>{i||n.removeEntry(r,ge.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return H.or([()=>H.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class nc{constructor(e,n){this.persistence=e,this.Ri=new Ur(s=>FN(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=YO(this,n)}static Ei(e,n){return new nc(e,n)}li(){}hi(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}Vr(e){let n=0;return this.Ar(e,s=>{n++}).next(()=>n)}Ar(e,n){return H.forEach(this.Ri,(s,r)=>this.gr(e,s,r).next(i=>i?H.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Xr(e,o=>this.gr(e,o,n).next(a=>{a||(s++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.Ri.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,n,s){return this.Ri.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),H.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ml(e.data.value)),n}gr(e,n,s){return H.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.Ri.get(n);return H.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Td{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ls=s,this.hs=r}static Ps(e,n){let s=Te(),r=Te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Td(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class lD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Xk()?8:LN(Lt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new lD;return this.fs(e,n,o).next(a=>{if(i.result=a,this.Is)return this.gs(e,n,o,a.size)})}).next(()=>i.result)}gs(e,n,s,r){return s.documentReadCount<this.Es?(ei()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),H.resolve()):(ei()<=ve.DEBUG&&ee("QueryEngine","Query:",ti(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(ei()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):H.resolve())}Rs(e,n){if(t_(n))return H.resolve(null);let s=Ln(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Yh(n,null,"F"),s=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Te(...i);return this.As.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ps(n,a);return this.ys(n,u,o,c.readTime)?this.Rs(e,Yh(n,null,"F")):this.ws(e,u,n,c)}))})))}Vs(e,n,s,r){return t_(n)||r.isEqual(ge.min())?H.resolve(null):this.As.getDocuments(e,s).next(i=>{const o=this.ps(n,i);return this.ys(n,o,s,r)?H.resolve(null):(ei()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ti(n)),this.ws(e,o,n,NN(r,ta)).next(a=>a))})}ps(e,n){let s=new lt(HT(e));return n.forEach((r,i)=>{$c(e,i)&&(s=s.add(i))}),s}ys(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}fs(e,n,s){return ei()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ti(n)),this.As.getDocumentsMatchingQuery(e,n,zs.min(),s)}ws(e,n,s,r){return this.As.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const wd="LocalStore",uD=3e8;class hD{constructor(e,n,s,r){this.persistence=e,this.bs=n,this.serializer=r,this.Ss=new nt(ye),this.Ds=new Ur(i=>fd(i),dd),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(s)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZO(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function fD(t,e,n,s){return new hD(t,e,n,s)}async function uw(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Te();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ms:u,removedBatchIds:o,addedBatchIds:a}))})})}function dD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let m=H.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(c,_)).next(T=>{const k=u.docVersions.get(_);Me(k!==null,48541),T.version.compareTo(k)<0&&(f.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),h.addEntry(T)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function hw(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function pD(t,e){const n=_e(t),s=e.snapshotVersion;let r=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});r=n.Ss;const a=[];e.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;a.push(n.ai.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.ai.addMatchingKeys(i,h.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(wt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(T,k,D){return T.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=uD?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(p,m,h)&&a.push(n.ai.updateTargetData(i,m))});let c=ls(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(gD(i,o,e.documentUpdates).next(h=>{c=h.xs,u=h.Os})),!s.isEqual(ge.min())){const h=n.ai.getLastRemoteSnapshotVersion(i).next(f=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ss=r,i))}function gD(t,e,n){let s=Te(),r=Te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ls();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee(wd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{xs:o,Os:r}})}function mD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=cd),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _D(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ai.getTargetData(s,e).next(i=>i?(r=i,H.resolve(r)):n.ai.allocateTargetId(s).next(o=>(r=new xs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.ai.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ss.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(s.targetId,s),n.Ds.set(e,s.targetId)),s})}async function tf(t,e,n){const s=_e(t),r=s.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wi(o))throw o;ee(wd,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ss=s.Ss.remove(e),s.Ds.delete(r.target)}function p_(t,e,n){const s=_e(t);let r=ge.min(),i=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=_e(c),p=f.Ds.get(h);return p!==void 0?H.resolve(f.Ss.get(p)):f.ai.getTargetData(u,h)}(s,o,Ln(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ai.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.bs.getDocumentsMatchingQuery(o,e,n?r:ge.min(),n?i:Te())).next(a=>(yD(s,rO(e),a),{documents:a,Ns:i})))}function yD(t,e,n){let s=t.vs.get(e)||ge.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.vs.set(e,s)}class g_{constructor(){this.activeTargetIds=uO()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vD{constructor(){this.So=new g_,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,s){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new g_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ED{vo(e){}shutdown(){}}/**
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
 */const m_="ConnectivityMonitor";class __{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ee(m_,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ee(m_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ol=null;function nf(){return ol===null?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)}/**
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
 */const Yu="RestConnection",TD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wD{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${s}/databases/${r}`,this.qo=this.databaseId.database===Ql?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Qo(e,n,s,r,i){const o=nf(),a=this.$o(e,n.toUriEncodedString());ee(Yu,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(c,r,i);const{host:u}=new URL(a),h=Vr(u);return this.Ko(e,a,c,s,h).then(f=>(ee(Yu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Si(Yu,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",s),f})}Wo(e,n,s,r,i,o){return this.Qo(e,n,s,r,i)}Uo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$o(e,n){const s=TD[e];return`${this.Lo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class ID{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Rt="WebChannelConnection";class bD extends wD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,s,r,i){const o=nf();return new Promise((a,c)=>{const u=new pT;u.setWithCredentials(!0),u.listenOnce(gT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case gl.NO_ERROR:const f=u.getResponseJson();ee(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case gl.TIMEOUT:ee(Rt,`RPC '${e}' ${o} timed out`),c(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case gl.HTTP_ERROR:const p=u.getStatus();if(ee(Rt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const T=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(_.status);c(new ae(T,_.message))}else c(new ae($.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ae($.UNAVAILABLE,"Connection failed."));break;default:de(9055,{s_:e,streamId:o,o_:u.getLastErrorCode(),__:u.getLastError()})}}finally{ee(Rt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(r);ee(Rt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",h,s,15)})}a_(e,n,s){const r=nf(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),a=_T(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,m=!1;const _=new ID({Go:k=>{m?ee(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,k):(p||(ee(Rt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),ee(Rt,`RPC '${e}' stream ${r} sending:`,k),f.send(k))},zo:()=>f.close()}),T=(k,D,O)=>{k.listen(D,w=>{try{O(w)}catch(N){setTimeout(()=>{throw N},0)}})};return T(f,Eo.EventType.OPEN,()=>{m||(ee(Rt,`RPC '${e}' stream ${r} transport opened.`),_.t_())}),T(f,Eo.EventType.CLOSE,()=>{m||(m=!0,ee(Rt,`RPC '${e}' stream ${r} transport closed`),_.r_())}),T(f,Eo.EventType.ERROR,k=>{m||(m=!0,Si(Rt,`RPC '${e}' stream ${r} transport errored. Name:`,k.name,"Message:",k.message),_.r_(new ae($.UNAVAILABLE,"The operation could not be completed")))}),T(f,Eo.EventType.MESSAGE,k=>{var D;if(!m){const O=k.data[0];Me(!!O,16349);const w=O,N=(w==null?void 0:w.error)||((D=w[0])===null||D===void 0?void 0:D.error);if(N){ee(Rt,`RPC '${e}' stream ${r} received error:`,N);const M=N.status;let F=function(v){const b=et[v];if(b!==void 0)return XT(b)}(M),I=N.message;F===void 0&&(F=$.INTERNAL,I="Unknown error status: "+M+" with message "+N.message),m=!0,_.r_(new ae(F,I)),f.close()}else ee(Rt,`RPC '${e}' stream ${r} received:`,O),_.i_(O)}}),T(a,mT.STAT_EVENT,k=>{k.stat===$h.PROXY?ee(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):k.stat===$h.NOPROXY&&ee(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{_.n_()},0),_}}function Ju(){return typeof document<"u"?document:null}/**
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
 */function zc(t){return new SO(t,!0)}/**
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
 */class fw{constructor(e,n,s=1e3,r=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=s,this.c_=r,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,r,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const y_="PersistentStream";class dw{constructor(e,n,s,r,i,o,a,c){this.bi=e,this.R_=s,this.V_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new fw(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(as(n.toString()),as("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.m_===n&&this.B_(s,r)},s=>{e(()=>{const r=new ae($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.L_(r)})})}B_(e,n){const s=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{s(()=>this.listener.jo())}),this.stream.Jo(()=>{s(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(r=>{s(()=>this.L_(r))}),this.stream.onMessage(r=>{s(()=>++this.p_==1?this.q_(r):this.onNext(r))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ee(y_,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(ee(y_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CD extends dw{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=NO(this.serializer,e),s=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Vn(o.readTime):ge.min()}(e);return this.listener.Q_(n,s)}U_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Qh(c)?{documents:MO(i,c)}:{query:xO(i,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tw(i,o.resumeToken);const u=Jh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=tc(i,o.snapshotVersion.toTimestamp());const u=Jh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=VO(this.serializer,e);s&&(n.labels=s),this.F_(n)}K_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.F_(n)}}class AD extends dw{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=DO(e.writeResults,e.commitTime),s=Vn(e.commitTime);return this.listener.j_(s,n)}H_(){const e={};e.database=ef(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>OO(this.serializer,s))};this.F_(n)}}/**
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
 */class RD{}class SD extends RD{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.J_=!1}Y_(){if(this.J_)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,s,r){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,Xh(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae($.UNKNOWN,i.toString())})}Wo(e,n,s,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(e,Xh(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae($.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class PD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(as(n),this.ea=!1):ee("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Pr="RemoteStore";class kD{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{s.enqueueAndForget(async()=>{Br(this)&&(ee(Pr,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.aa.add(4),await Ea(u),u.la.set("Unknown"),u.aa.delete(4),await Gc(u)}(this))})}),this.la=new PD(s,r)}}async function Gc(t){if(Br(t))for(const e of t.ua)await e(!0)}async function Ea(t){for(const e of t.ua)await e(!1)}function pw(t,e){const n=_e(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),Ad(n)?Cd(n):qi(n).b_()&&bd(n,e))}function Id(t,e){const n=_e(t),s=qi(n);n._a.delete(e),s.b_()&&gw(n,e),n._a.size===0&&(s.b_()?s.v_():Br(n)&&n.la.set("Unknown"))}function bd(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qi(t).U_(e)}function gw(t,e){t.ha.Ke(e),qi(t).K_(e)}function Cd(t){t.ha=new bO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),qi(t).start(),t.la.ta()}function Ad(t){return Br(t)&&!qi(t).w_()&&t._a.size>0}function Br(t){return _e(t).aa.size===0}function mw(t){t.ha=void 0}async function ND(t){t.la.set("Online")}async function OD(t){t._a.forEach((e,n)=>{bd(t,e)})}async function DD(t,e){mw(t),Ad(t)?(t.la.ia(e),Cd(t)):t.la.set("Unknown")}async function MD(t,e,n){if(t.la.set("Online"),e instanceof ew&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r._a.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r._a.delete(a),r.ha.removeTarget(a))}(t,e)}catch(s){ee(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sc(t,s)}else if(e instanceof vl?t.ha.Xe(e):e instanceof ZT?t.ha.ot(e):t.ha.nt(e),!n.isEqual(ge.min()))try{const s=await hw(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.ha.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i._a.get(u);h&&i._a.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i._a.get(c);if(!h)return;i._a.set(c,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),gw(i,c);const f=new xs(h.target,c,u,h.sequenceNumber);bd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){ee(Pr,"Failed to raise snapshot:",s),await sc(t,s)}}async function sc(t,e,n){if(!Wi(e))throw e;t.aa.add(1),await Ea(t),t.la.set("Offline"),n||(n=()=>hw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Pr,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await Gc(t)})}function _w(t,e){return e().catch(n=>sc(t,n,e))}async function Qc(t){const e=_e(t),n=Js(e);let s=e.oa.length>0?e.oa[e.oa.length-1].batchId:cd;for(;xD(e);)try{const r=await mD(e.localStore,s);if(r===null){e.oa.length===0&&n.v_();break}s=r.batchId,LD(e,r)}catch(r){await sc(e,r)}yw(e)&&vw(e)}function xD(t){return Br(t)&&t.oa.length<10}function LD(t,e){t.oa.push(e);const n=Js(t);n.b_()&&n.W_&&n.G_(e.mutations)}function yw(t){return Br(t)&&!Js(t).w_()&&t.oa.length>0}function vw(t){Js(t).start()}async function VD(t){Js(t).H_()}async function FD(t){const e=Js(t);for(const n of t.oa)e.G_(n.mutations)}async function UD(t,e,n){const s=t.oa.shift(),r=md.from(s,e,n);await _w(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Qc(t)}async function BD(t,e){e&&Js(t).W_&&await async function(s,r){if(function(o){return wO(o)&&o!==$.ABORTED}(r.code)){const i=s.oa.shift();Js(s).D_(),await _w(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Qc(s)}}(t,e),yw(t)&&vw(t)}async function v_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee(Pr,"RemoteStore received new credentials");const s=Br(n);n.aa.add(3),await Ea(n),s&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await Gc(n)}async function HD(t,e){const n=_e(t);e?(n.aa.delete(2),await Gc(n)):e||(n.aa.add(2),await Ea(n),n.la.set("Unknown"))}function qi(t){return t.Pa||(t.Pa=function(n,s,r){const i=_e(n);return i.Y_(),new CD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{jo:ND.bind(null,t),Jo:OD.bind(null,t),Zo:DD.bind(null,t),Q_:MD.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),Ad(t)?Cd(t):t.la.set("Unknown")):(await t.Pa.stop(),mw(t))})),t.Pa}function Js(t){return t.Ta||(t.Ta=function(n,s,r){const i=_e(n);return i.Y_(),new AD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:VD.bind(null,t),Zo:BD.bind(null,t),z_:FD.bind(null,t),j_:UD.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await Qc(t)):(await t.Ta.stop(),t.oa.length>0&&(ee(Pr,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class Rd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Hs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Rd(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sd(t,e){if(as("AsyncQueue",`${e}: ${t}`),Wi(t))return new ae($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gi{static emptySet(e){return new gi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||le.comparator(n.key,s.key):(n,s)=>le.comparator(n.key,s.key),this.keyedMap=To(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new gi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class E_{constructor(){this.Ia=new nt(le.comparator)}track(e){const n=e.doc.key,s=this.Ia.get(n);s?e.type!==0&&s.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&s.type!==1?this.Ia=this.Ia.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Ia=this.Ia.remove(n):e.type===1&&s.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):de(63341,{Vt:e,Ea:s}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,s)=>{e.push(s)}),e}}class Di{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Di(e,n,gi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class jD{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class $D{constructor(){this.queries=T_(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,s){const r=_e(n),i=r.queries;r.queries=T_(),i.forEach((o,a)=>{for(const c of a.Ra)c.onError(s)})})(this,new ae($.ABORTED,"Firestore shutting down"))}}function T_(){return new Ur(t=>BT(t),jc)}async function WD(t,e){const n=_e(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Va()&&e.ma()&&(s=2):(i=new jD,s=e.ma()?0:1);try{switch(s){case 0:i.Aa=await n.onListen(r,!0);break;case 1:i.Aa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Sd(o,`Initialization of query '${ti(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&Pd(n)}async function qD(t,e){const n=_e(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?r=e.ma()?0:1:!i.Va()&&e.ma()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function KD(t,e){const n=_e(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.Ra)a.pa(r)&&(s=!0);o.Aa=r}}s&&Pd(n)}function zD(t,e,n){const s=_e(t),r=s.queries.get(e);if(r)for(const i of r.Ra)i.onError(n);s.queries.delete(e)}function Pd(t){t.fa.forEach(e=>{e.next()})}var sf,w_;(w_=sf||(sf={})).ya="default",w_.Cache="cache";class GD{constructor(e,n,s){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=s||{}}pa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const s=n!=="Offline";return(!this.options.Fa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==sf.Cache}}/**
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
 */class Ew{constructor(e){this.key=e}}class Tw{constructor(e){this.key=e}}class QD{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Te(),this.mutatedKeys=Te(),this.Ua=HT(e),this.Ka=new gi(this.Ua)}get Wa(){return this.qa}Ga(e,n){const s=n?n.za:new E_,r=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const p=r.get(h),m=$c(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;p&&m?p.data.isEqual(m.data)?_!==T&&(s.track({type:3,doc:m}),k=!0):this.ja(p,m)||(s.track({type:2,doc:m}),k=!0,(c&&this.Ua(m,c)>0||u&&this.Ua(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),k=!0):p&&!m&&(s.track({type:1,doc:p}),k=!0,(c||u)&&(a=!0)),k&&(m?(o=o.add(m),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ka:o,za:s,ys:a,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((h,f)=>function(m,_){const T=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:k})}};return T(m)-T(_)}(h.type,f.type)||this.Ua(h.doc,f.doc)),this.Ha(s),r=r!=null&&r;const a=n&&!r?this.Ja():[],c=this.$a.size===0&&this.current&&!r?1:0,u=c!==this.Qa;return this.Qa=c,o.length!==0||u?{snapshot:new Di(this.query,e.Ka,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ya:a}:{Ya:a}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new E_,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Te(),this.Ka.forEach(s=>{this.Za(s.key)&&(this.$a=this.$a.add(s.key))});const n=[];return e.forEach(s=>{this.$a.has(s)||n.push(new Tw(s))}),this.$a.forEach(s=>{e.has(s)||n.push(new Ew(s))}),n}Xa(e){this.qa=e.Ns,this.$a=Te();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return Di.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const kd="SyncEngine";class YD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class JD{constructor(e){this.key=e,this.tu=!1}}class XD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Ur(a=>BT(a),jc),this.iu=new Map,this.su=new Set,this.ou=new nt(le.comparator),this._u=new Map,this.au=new vd,this.uu={},this.cu=new Map,this.lu=Oi.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function ZD(t,e,n=!0){const s=Rw(t);let r;const i=s.ru.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.eu()):r=await ww(s,e,n,!0),r}async function eM(t,e){const n=Rw(t);await ww(n,e,!0,!1)}async function ww(t,e,n,s){const r=await _D(t.localStore,Ln(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await tM(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&pw(t.remoteStore,r),a}async function tM(t,e,n,s,r){t.Pu=(f,p,m)=>async function(T,k,D,O){let w=k.view.Ga(D);w.ys&&(w=await p_(T.localStore,k.query,!1).then(({documents:I})=>k.view.Ga(I,w)));const N=O&&O.targetChanges.get(k.targetId),M=O&&O.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(w,T.isPrimaryClient,N,M);return b_(T,k.targetId,F.Ya),F.snapshot}(t,f,p,m);const i=await p_(t.localStore,e,!0),o=new QD(e,i.Ns),a=o.Ga(i.documents),c=va.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);b_(t,n,u.Ya);const h=new YD(e,n,o);return t.ru.set(e,h),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),u.snapshot}async function nM(t,e,n){const s=_e(t),r=s.ru.get(e),i=s.iu.get(r.targetId);if(i.length>1)return s.iu.set(r.targetId,i.filter(o=>!jc(o,e))),void s.ru.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await tf(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Id(s.remoteStore,r.targetId),rf(s,r.targetId)}).catch($i)):(rf(s,r.targetId),await tf(s.localStore,r.targetId,!0))}async function sM(t,e){const n=_e(t),s=n.ru.get(e),r=n.iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Id(n.remoteStore,s.targetId))}async function rM(t,e,n){const s=hM(t);try{const r=await function(o,a){const c=_e(o),u=at.now(),h=a.reduce((m,_)=>m.add(_.key),Te());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=ls(),T=Te();return c.Cs.getEntries(m,h).next(k=>{_=k,_.forEach((D,O)=>{O.isValidDocument()||(T=T.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(k=>{f=k;const D=[];for(const O of a){const w=_O(O,f.get(O.key).overlayedDocument);w!=null&&D.push(new sr(O.key,w,OT(w.value.mapValue),In.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,D,a)}).next(k=>{p=k;const D=k.applyToLocalDocumentSet(f,T);return c.documentOverlayCache.saveOverlays(m,k.batchId,D)})}).then(()=>({batchId:p.batchId,changes:$T(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.uu[o.currentUser.toKey()];u||(u=new nt(ye)),u=u.insert(a,c),o.uu[o.currentUser.toKey()]=u}(s,r.batchId,n),await Ta(s,r.changes),await Qc(s.remoteStore)}catch(r){const i=Sd(r,"Failed to persist write");n.reject(i)}}async function Iw(t,e){const n=_e(t);try{const s=await pD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n._u.get(i);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.tu=!0:r.modifiedDocuments.size>0?Me(o.tu,14607):r.removedDocuments.size>0&&(Me(o.tu,42227),o.tu=!1))}),await Ta(n,s,e)}catch(s){await $i(s)}}function I_(t,e,n){const s=_e(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ru.forEach((i,o)=>{const a=o.view.ga(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.Ra)p.ga(a)&&(u=!0)}),u&&Pd(c)}(s.eventManager,e),r.length&&s.nu.Q_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function iM(t,e,n){const s=_e(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s._u.get(e),i=r&&r.key;if(i){let o=new nt(le.comparator);o=o.insert(i,Nt.newNoDocument(i,ge.min()));const a=Te().add(i),c=new Kc(ge.min(),new Map,new nt(ye),o,a);await Iw(s,c),s.ou=s.ou.remove(i),s._u.delete(e),Nd(s)}else await tf(s.localStore,e,!1).then(()=>rf(s,e,n)).catch($i)}async function oM(t,e){const n=_e(t),s=e.batch.batchId;try{const r=await dD(n.localStore,e);Cw(n,s,null),bw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ta(n,r)}catch(r){await $i(r)}}async function aM(t,e,n){const s=_e(t);try{const r=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Me(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Cw(s,e,n),bw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ta(s,r)}catch(r){await $i(r)}}function bw(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function Cw(t,e,n){const s=_e(t);let r=s.uu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.uu[s.currentUser.toKey()]=r}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.iu.get(e))t.ru.delete(s),n&&t.nu.Tu(s,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(s=>{t.au.containsKey(s)||Aw(t,s)})}function Aw(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(Id(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),Nd(t))}function b_(t,e,n){for(const s of n)s instanceof Ew?(t.au.addReference(s.key,e),lM(t,s)):s instanceof Tw?(ee(kd,"Document no longer in limbo: "+s.key),t.au.removeReference(s.key,e),t.au.containsKey(s.key)||Aw(t,s.key)):de(19791,{Iu:s})}function lM(t,e){const n=e.key,s=n.path.canonicalString();t.ou.get(n)||t.su.has(s)||(ee(kd,"New document in limbo: "+n),t.su.add(s),Nd(t))}function Nd(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new le(Ke.fromString(e)),s=t.lu.next();t._u.set(s,new JD(n)),t.ou=t.ou.insert(n,s),pw(t.remoteStore,new xs(Ln(UT(n.path)),s,"TargetPurposeLimboResolution",Fc.le))}}async function Ta(t,e,n){const s=_e(t),r=[],i=[],o=[];s.ru.isEmpty()||(s.ru.forEach((a,c)=>{o.push(s.Pu(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Td.Ps(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.nu.Q_(r),await async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.ls,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>H.forEach(p.hs,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!Wi(f))throw f;ee(wd,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.Ss.get(p),_=m.snapshotVersion,T=m.withLastLimboFreeSnapshotVersion(_);h.Ss=h.Ss.insert(p,T)}}}(s.localStore,i))}async function cM(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee(kd,"User change. New user:",e.toKey());const s=await uw(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(a=>{a.forEach(c=>{c.reject(new ae($.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ta(n,s.Ms)}}function uM(t,e){const n=_e(t),s=n._u.get(e);if(s&&s.tu)return Te().add(s.key);{let r=Te();const i=n.iu.get(e);if(!i)return r;for(const o of i){const a=n.ru.get(o);r=r.unionWith(a.view.Wa)}return r}}function Rw(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iM.bind(null,e),e.nu.Q_=KD.bind(null,e.eventManager),e.nu.Tu=zD.bind(null,e.eventManager),e}function hM(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aM.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return fD(this.persistence,new cD,e.initialUser,this.serializer)}Ru(e){return new cw(Ed.Ei,this.serializer)}Au(e){return new vD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class fM extends rc{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Me(this.persistence.referenceDelegate instanceof nc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new GO(s,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new cw(s=>nc.Ei(s,n),this.serializer)}}class of{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>I_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cM.bind(null,this.syncEngine),await HD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $D}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),s=function(i){return new bD(i)}(e.databaseInfo);return function(i,o,a,c){return new SD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new kD(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>I_(this.syncEngine,n,0),function(){return __.C()?new __:new ED}())}createSyncEngine(e,n){return function(r,i,o,a,c,u,h){const f=new XD(r,i,o,a,c,u);return h&&(f.hu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=_e(r);ee(Pr,"RemoteStore shutting down."),i.aa.add(5),await Ea(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}of.provider={build:()=>new of};/**
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
 */class dM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):as("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Xs="FirestoreClient";class pM{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=St.UNAUTHENTICATED,this.clientId=wT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ee(Xs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ee(Xs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Xu(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Xs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await uw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function C_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gM(t);ee(Xs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>v_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>v_(e.remoteStore,r)),t._onlineComponents=e}async function gM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Xs,"Using user provided OfflineComponentProvider");try{await Xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Si("Error using user provided cache. Falling back to memory cache: "+n),await Xu(t,new rc)}}else ee(Xs,"Using default OfflineComponentProvider"),await Xu(t,new fM(void 0));return t._offlineComponents}async function Sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Xs,"Using user provided OnlineComponentProvider"),await C_(t,t._uninitializedComponentsProvider._online)):(ee(Xs,"Using default OnlineComponentProvider"),await C_(t,new of))),t._onlineComponents}function mM(t){return Sw(t).then(e=>e.syncEngine)}async function _M(t){const e=await Sw(t),n=e.eventManager;return n.onListen=ZD.bind(null,e.syncEngine),n.onUnlisten=nM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=eM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sM.bind(null,e.syncEngine),n}function yM(t,e,n={}){const s=new Hs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new dM({next:p=>{h.yu(),o.enqueueAndForget(()=>qD(i,f)),p.fromCache&&c.source==="server"?u.reject(new ae($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new GD(a,h,{includeMetadataChanges:!0,Fa:!0});return WD(i,f)}(await _M(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Pw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const A_=new Map;/**
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
 */function kw(t,e,n){if(!n)throw new ae($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vM(t,e,n,s){if(e===!0&&s===!0)throw new ae($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R_(t){if(!le.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function S_(t){if(le.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Od(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Od(t);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Nw="firestore.googleapis.com",P_=!0;class k_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nw,this.ssl=P_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:P_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<KO)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new wN;switch(s.type){case"firstParty":return new AN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Bi("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=A_.get(n);s&&(ee("ComponentProvider","Removing Datastore"),A_.delete(n),s.terminate())}(this),Promise.resolve()}}function EM(t,e,n,s={}){var r;t=kr(t,Yc);const i=Vr(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;o.host!==Nw&&o.host!==c&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:s});if(!qs(u,a)&&(t._setSettings(u),i&&(rd(`https://${c}`),Bi("Firestore",!0)),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=St.MOCK_USER;else{h=iT(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new St(p)}t._authCredentials=new IN(new ET(h,f))}}/**
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
 */class Jc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jc(this.firestore,e,this._query)}}class un{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class $s extends Jc{constructor(e,n,s){super(e,n,UT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new le(e))}withConverter(e){return new $s(this.firestore,e,this._path)}}function lU(t,e,...n){if(t=Vt(t),kw("collection","path",e),t instanceof Yc){const s=Ke.fromString(e,...n);return S_(s),new $s(t,null,s)}{if(!(t instanceof un||t instanceof $s))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return S_(s),new $s(t.firestore,null,s)}}function TM(t,e,...n){if(t=Vt(t),arguments.length===1&&(e=wT.newId()),kw("doc","path",e),t instanceof Yc){const s=Ke.fromString(e,...n);return R_(s),new un(t,null,new le(s))}{if(!(t instanceof un||t instanceof $s))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return R_(s),new un(t.firestore,t instanceof $s?t.converter:null,new le(s))}}/**
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
 */const N_="AsyncQueue";class O_{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new fw(this,"async_queue_retry"),this.ju=()=>{const s=Ju();s&&ee(N_,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=e;const n=Ju();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Hs;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Wi(e))throw e;ee(N_,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(s=>{throw this.Ku=s,this.Wu=!1,as("INTERNAL UNHANDLED ERROR: ",D_(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=n,n}enqueueAfterDelay(e,n,s){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const r=Rd.createAndSchedule(this,e,n,s,i=>this.Xu(i));return this.Uu.push(r),r}Ju(){this.Ku&&de(47125,{ec:D_(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function D_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class wa extends Yc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new O_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new O_(e),this._firestoreClient=void 0,await e}}}function wM(t,e){const n=typeof t=="object"?t:ad(),s=typeof t=="string"?t:Ql,r=Vc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=nT("firestore");i&&EM(r,...i)}return r}function Ow(t){if(t._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||IM(t),t._firestoreClient}function IM(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,u,h){return new HN(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Pw(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new pM(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi(wt.fromBase64String(e))}catch(n){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mi(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dd{constructor(e){this._methodName=e}}/**
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
 */class Md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const bM=/^__.*__$/;class CM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}class Dw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{oc:t})}}class Ld{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ac({path:s,cc:!1});return r.lc(e),r}hc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ac({path:s,cc:!1});return r._c(),r}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return ic(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Mw(this.oc)&&bM.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class AM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||zc(e)}dc(e,n,s,r=!1){return new Ld({oc:e,methodName:n,Ec:s,path:Tt.emptyPath(),cc:!1,Ic:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xw(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new AM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RM(t,e,n,s,r,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,r);Vd("Data must be an object, but it was:",o,s);const a=Lw(s,o);let c,u;if(i.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=af(e,f,n);if(!o.contains(p))throw new ae($.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Fw(h,p)||h.push(p)}c=new Xt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new CM(new zt(a),c,u)}class Zc extends Dd{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zc}}function SM(t,e,n,s){const r=t.dc(1,e,n);Vd("Data must be an object, but it was:",r,s);const i=[],o=zt.empty();nr(s,(c,u)=>{const h=Fd(e,c,n);u=Vt(u);const f=r.hc(h);if(u instanceof Zc)i.push(h);else{const p=eu(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new Xt(i);return new Dw(o,a,r.fieldTransforms)}function PM(t,e,n,s,r,i){const o=t.dc(1,e,n),a=[af(e,s,n)],c=[r];if(i.length%2!=0)throw new ae($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(af(e,i[p])),c.push(i[p+1]);const u=[],h=zt.empty();for(let p=a.length-1;p>=0;--p)if(!Fw(u,a[p])){const m=a[p];let _=c[p];_=Vt(_);const T=o.hc(m);if(_ instanceof Zc)u.push(m);else{const k=eu(_,T);k!=null&&(u.push(m),h.set(m,k))}}const f=new Xt(u);return new Dw(h,f,o.fieldTransforms)}function eu(t,e){if(Vw(t=Vt(t)))return Vd("Unsupported field value:",e,t),Lw(t,e);if(t instanceof Dd)return function(s,r){if(!Mw(r.oc))throw r.Tc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Tc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=eu(a,r.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Vt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hO(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=at.fromDate(s);return{timestampValue:tc(r.serializer,i)}}if(s instanceof at){const i=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tc(r.serializer,i)}}if(s instanceof Md)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mi)return{bytesValue:tw(r.serializer,s._byteString)};if(s instanceof un){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof xd)return function(o,a){return{mapValue:{fields:{[kT]:{stringValue:NT},[Yl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Tc("VectorValues must only contain numeric values.");return pd(a.serializer,u)})}}}}}}(s,r);throw r.Tc(`Unsupported field value: ${Od(s)}`)}(t,e)}function Lw(t,e){const n={};return bT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nr(t,(s,r)=>{const i=eu(r,e.uc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Vw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Md||t instanceof Mi||t instanceof un||t instanceof Dd||t instanceof xd)}function Vd(t,e,n){if(!Vw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Od(n);throw s==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+s)}}function af(t,e,n){if((e=Vt(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return Fd(t,e);throw ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const kM=new RegExp("[~\\*/\\[\\]]");function Fd(t,e,n){if(e.search(kM)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ic(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new ae($.INVALID_ARGUMENT,a+t+c)}function Fw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Uw{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NM extends Uw{data(){return super.data()}}function Bw(t,e){return typeof e=="string"?Fd(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
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
 */function OM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DM{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return nr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[Yl].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ze(o.doubleValue));return new xd(i)}convertGeoPoint(e){return new Md(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Bc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Gs(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ke.fromString(e);Me(aw(s),9688,{name:e});const r=new sa(s.get(1),s.get(3)),i=new le(s.popFirst(5));return r.isEqual(n)||as(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function MM(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class al{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xM extends Uw{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new El(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Bw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class El extends xM{data(e={}){return super.data(e)}}class LM{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new al(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new El(this._firestore,this._userDataWriter,s.key,s,new al(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new El(r._firestore,r._userDataWriter,a.doc.key,a.doc,new al(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new El(r._firestore,r._userDataWriter,a.doc.key,a.doc,new al(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:VM(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}class FM extends DM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,n)}}function cU(t){t=kr(t,Jc);const e=kr(t.firestore,wa),n=Ow(e),s=new FM(e);return OM(t._query),yM(n,t._query).then(r=>new LM(e,s,t,r))}function uU(t,e,n,...s){t=kr(t,un);const r=kr(t.firestore,wa),i=xw(r);let o;return o=typeof(e=Vt(e))=="string"||e instanceof Xc?PM(i,"updateDoc",t._key,e,n,s):SM(i,"updateDoc",t._key,e),Ud(r,[o.toMutation(t._key,In.exists(!0))])}function hU(t){return Ud(kr(t.firestore,wa),[new gd(t._key,In.none())])}function fU(t,e){const n=kr(t.firestore,wa),s=TM(t),r=MM(t.converter,e);return Ud(n,[RM(xw(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,In.exists(!1))]).then(()=>s)}function Ud(t,e){return function(s,r){const i=new Hs;return s.asyncQueue.enqueueAndForget(async()=>rM(await mM(s),r,i)),i.promise}(Ow(t),e)}(function(e,n=!0){(function(r){ji=r})(Fr),Rr(new Ks("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new wa(new bN(s.getProvider("auth-internal")),new RN(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xn(Fm,Um,e),xn(Fm,Um,"esm2017")})();function Bd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Hw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UM=Hw,jw=new _a("auth","Firebase",Hw());/**
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
 */const oc=new Lc("@firebase/auth");function BM(t,...e){oc.logLevel<=ve.WARN&&oc.warn(`Auth (${Fr}): ${t}`,...e)}function Tl(t,...e){oc.logLevel<=ve.ERROR&&oc.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function cs(t,...e){throw Hd(t,...e)}function Fn(t,...e){return Hd(t,...e)}function $w(t,e,n){const s=Object.assign(Object.assign({},UM()),{[e]:n});return new _a("auth","Firebase",s).create(e,{appName:t.name})}function br(t){return $w(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jw.create(t,...e)}function pe(t,e,...n){if(!t)throw Hd(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tl(e),new Error(e)}function us(t,e){t||Xn(e)}/**
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
 */function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HM(){return M_()==="http:"||M_()==="https:"}function M_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HM()||Qk()||"connection"in navigator)?navigator.onLine:!0}function $M(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,us(n>e,"Short delay should be less than long delay!"),this.isMobile=id()||oT()}get(){return jM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jd(t,e){us(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ww{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KM=new Ia(3e4,6e4);function $d(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ki(t,e,n,s,r={}){return qw(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Gk()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Vr(t.emulatorConfig.host)&&(u.credentials="include"),Ww.fetch()(await Kw(t,t.config.apiHost,n,a),u)})}async function qw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},WM),e);try{const r=new GM(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ll(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $w(t,h,u);cs(t,h)}}catch(r){if(r instanceof ps)throw r;cs(t,"network-request-failed",{message:String(r)})}}async function zM(t,e,n,s,r={}){const i=await Ki(t,e,n,s,r);return"mfaPendingCredential"in i&&cs(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kw(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?jd(t.config,r):`${t.config.apiScheme}://${r}`;return qM.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class GM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),KM.get())})}}function ll(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Fn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function QM(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function ac(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YM(t,e=!1){const n=Vt(t),s=await n.getIdToken(e),r=Wd(s);pe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Fo(Zu(r.auth_time)),issuedAtTime:Fo(Zu(r.iat)),expirationTime:Fo(Zu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zu(t){return Number(t)*1e3}function Wd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Tl("JWT malformed, contained fewer than 3 sections"),null;try{const r=ql(n);return r?JSON.parse(r):(Tl("Failed to decode base64 JWT payload"),null)}catch(r){return Tl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function x_(t){const e=Wd(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ps&&JM(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function JM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await aa(t,ac(n,{idToken:s}));pe(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zw(i.providerUserInfo):[],a=ex(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function ZM(t){const e=Vt(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ex(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zw(t){return t.map(e=>{var{providerId:n}=e,s=Bd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function tx(t,e){const n=await qw(t,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Kw(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ww.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nx(t,e){return Ki(t,"POST","/v2/accounts:revokeToken",$d(t,e))}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):x_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=x_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await tx(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mi;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Is(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YM(this,e)}reload(){return ZM(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await aa(this,QM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:N,isAnonymous:M,providerData:F,stsTokenManager:I}=n;pe(w&&I,e,"internal-error");const E=mi.fromJSON(this.name,I);pe(typeof w=="string",e,"internal-error"),Is(f,e.name),Is(p,e.name),pe(typeof N=="boolean",e,"internal-error"),pe(typeof M=="boolean",e,"internal-error"),Is(m,e.name),Is(_,e.name),Is(T,e.name),Is(k,e.name),Is(D,e.name),Is(O,e.name);const v=new vn({uid:w,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:M,photoURL:_,phoneNumber:m,tenantId:T,stsTokenManager:E,createdAt:D,lastLoginAt:O});return F&&Array.isArray(F)&&(v.providerData=F.map(b=>Object.assign({},b))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,n,s=!1){const r=new mi;r.updateFromServerResponse(n);const i=new vn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lc(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];pe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?zw(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new mi;a.updateFromIdToken(s);const c=new vn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new cf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const L_=new Map;function Zn(t){us(t instanceof Function,"Expected a class definition");let e=L_.get(t);return e?(us(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L_.set(t,e),e)}/**
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
 */class Gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gw.type="NONE";const V_=Gw;/**
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
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=wl(this.userKey,r.apiKey,i),this.fullPersistenceKey=wl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ac(this.auth,{idToken:e}).catch(()=>{});return n?vn._fromGetAccountInfoResponse(this.auth,n,e):null}return vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _i(Zn(V_),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Zn(V_);const o=wl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await ac(e,{idToken:h}).catch(()=>{});if(!p)break;f=await vn._fromGetAccountInfoResponse(e,p,h)}else f=vn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _i(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _i(i,e,s))}}/**
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
 */function F_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eI(e))return"Blackberry";if(tI(e))return"Webos";if(Yw(e))return"Safari";if((e.includes("chrome/")||Jw(e))&&!e.includes("edge/"))return"Chrome";if(Zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qw(t=Lt()){return/firefox\//i.test(t)}function Yw(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jw(t=Lt()){return/crios\//i.test(t)}function Xw(t=Lt()){return/iemobile/i.test(t)}function Zw(t=Lt()){return/android/i.test(t)}function eI(t=Lt()){return/blackberry/i.test(t)}function tI(t=Lt()){return/webos/i.test(t)}function qd(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sx(t=Lt()){var e;return qd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rx(){return Yk()&&document.documentMode===10}function nI(t=Lt()){return qd(t)||Zw(t)||tI(t)||eI(t)||/windows phone/i.test(t)||Xw(t)}/**
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
 */function sI(t,e=[]){let n;switch(t){case"Browser":n=F_(Lt());break;case"Worker":n=`${F_(Lt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${s}`}/**
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
 */class ix{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ox(t,e={}){return Ki(t,"GET","/v2/passwordPolicy",$d(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const ax=6;class lx{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ax,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class cx{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U_(this),this.idTokenSubscription=new U_(this),this.beforeStateQueue=new ix(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ac(this,{idToken:e}),s=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$M()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(br(this));const n=e?Vt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ox(this),n=new lx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await nx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kd(t){return Vt(t)}class U_{constructor(e){this.auth=e,this.observer=null,this.addObserver=a1(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ux(t){zd=t}function hx(t){return zd.loadJS(t)}function fx(){return zd.gapiScript}function dx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function px(t,e){const n=Vc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(qs(i,e??{}))return r;cs(r,"already-initialized")}return n.initialize({options:e})}function gx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function mx(t,e,n){const s=Kd(t);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=rI(e),{host:o,port:a}=_x(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(qs(u,s.config.emulator)&&qs(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Vr(o)?(Bi("Auth",!0),rd(`${i}//${o}${c}`)):yx()}function rI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _x(t){const e=rI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:B_(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:B_(o)}}}function B_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class iI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function yi(t,e){return zM(t,"POST","/v1/accounts:signInWithIdp",$d(t,e))}/**
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
 */const vx="http://localhost";class Nr extends iI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cs("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Bd(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Nr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,yi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:vx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
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
 */class oI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends oI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ps extends ba{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ps.PROVIDER_ID="facebook.com";/**
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
 */class ks extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ks.credential(n,s)}catch{return null}}}ks.GOOGLE_SIGN_IN_METHOD="google.com";ks.PROVIDER_ID="google.com";/**
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
 */class Ns extends ba{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.GITHUB_SIGN_IN_METHOD="github.com";Ns.PROVIDER_ID="github.com";/**
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
 */class Os extends ba{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Os.credential(n,s)}catch{return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com";Os.PROVIDER_ID="twitter.com";/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await vn._fromIdTokenResponse(e,s,r),o=H_(s);return new xi({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=H_(s);return new xi({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function H_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cc extends ps{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new cc(e,n,s,r)}}function aI(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,s):i})}async function Ex(t,e,n=!1){const s=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",s)}/**
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
 */async function Tx(t,e,n=!1){const{auth:s}=t;if(_n(s.app))return Promise.reject(br(s));const r="reauthenticate";try{const i=await aa(t,aI(s,r,e,t),n);pe(i.idToken,s,"internal-error");const o=Wd(i.idToken);pe(o,s,"internal-error");const{sub:a}=o;return pe(t.uid===a,s,"user-mismatch"),xi._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cs(s,"user-mismatch"),i}}/**
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
 */async function wx(t,e,n=!1){if(_n(t.app))return Promise.reject(br(t));const s="signIn",r=await aI(t,s,e),i=await xi._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Ix(t,e,n,s){return Vt(t).onIdTokenChanged(e,n,s)}function bx(t,e,n){return Vt(t).beforeAuthStateChanged(e,n)}const uc="__sak";/**
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
 */class lI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cx=1e3,Ax=10;class cI extends lI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);rx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ax):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cI.type="LOCAL";const Rx=cI;/**
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
 */class uI extends lI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uI.type="SESSION";const hI=uI;/**
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
 */function Sx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new tu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Sx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
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
 */function Gd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Px{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Gd("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Un(){return window}function kx(t){Un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function fI(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function Nx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ox(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dx(){return fI()?self:null}/**
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
 */const dI="firebaseLocalStorageDb",Mx=1,hc="firebaseLocalStorage",pI="fbase_key";class Ca{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function xx(){const t=indexedDB.deleteDatabase(dI);return new Ca(t).toPromise()}function uf(){const t=indexedDB.open(dI,Mx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(hc,{keyPath:pI})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(hc)?e(s):(s.close(),await xx(),e(await uf()))})})}async function j_(t,e,n){const s=nu(t,!0).put({[pI]:e,value:n});return new Ca(s).toPromise()}async function Lx(t,e){const n=nu(t,!1).get(e),s=await new Ca(n).toPromise();return s===void 0?null:s.value}function $_(t,e){const n=nu(t,!0).delete(e);return new Ca(n).toPromise()}const Vx=800,Fx=3;class gI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(Dx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nx(),!this.activeServiceWorker)return;this.sender=new Px(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ox()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uf();return await j_(e,uc,"1"),await $_(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>j_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Lx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=nu(r,!1).getAll();return new Ca(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gI.type="LOCAL";const Ux=gI;new Ia(3e4,6e4);/**
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
 */function Bx(t,e){return e?Zn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qd extends iI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hx(t){return wx(t.auth,new Qd(t),t.bypassAuthState)}function jx(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),Tx(n,new Qd(t),t.bypassAuthState)}async function $x(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),Ex(n,new Qd(t),t.bypassAuthState)}/**
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
 */class mI{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hx;case"linkViaPopup":case"linkViaRedirect":return $x;case"reauthViaPopup":case"reauthViaRedirect":return jx;default:cs(this.auth,"internal-error")}}resolve(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Wx=new Ia(2e3,1e4);class ii extends mI{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){us(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wx.get())};e()}}ii.currentPopupAction=null;/**
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
 */const qx="pendingRedirect",Il=new Map;class Kx extends mI{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Il.get(this.auth._key());if(!e){try{const s=await zx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Il.set(this.auth._key(),e)}return this.bypassAuthState||Il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zx(t,e){const n=Yx(e),s=Qx(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Gx(t,e){Il.set(t._key(),e)}function Qx(t){return Zn(t._redirectPersistence)}function Yx(t){return wl(qx,t.config.apiKey,t.name)}async function Jx(t,e,n=!1){if(_n(t.app))return Promise.reject(br(t));const s=Kd(t),r=Bx(s,e),o=await new Kx(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Xx=10*60*1e3;class Zx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_I(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xx&&this.cachedEventUids.clear(),this.cachedEventUids.has(W_(e))}saveEventToCache(e){this.cachedEventUids.add(W_(e)),this.lastProcessedEventTime=Date.now()}}function W_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(t);default:return!1}}/**
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
 */async function tL(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
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
 */const nL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sL=/^https?/;async function rL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tL(t);for(const n of e)try{if(iL(n))return}catch{}cs(t,"unauthorized-domain")}function iL(t){const e=lf(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sL.test(n))return!1;if(nL.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const oL=new Ia(3e4,6e4);function q_(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aL(t){return new Promise((e,n)=>{var s,r,i;function o(){q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{q_(),n(Fn(t,"network-request-failed"))},timeout:oL.get()})}if(!((r=(s=Un().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Un().gapi)===null||i===void 0)&&i.load)o();else{const a=dx("iframefcb");return Un()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},hx(`${fx()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bl=null,e})}let bl=null;function lL(t){return bl=bl||aL(t),bl}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cL=new Ia(5e3,15e3),uL="__/auth/iframe",hL="emulator/auth/iframe",fL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pL(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jd(e,hL):`https://${t.config.authDomain}/${uL}`,s={apiKey:e.apiKey,appName:t.name,v:Fr},r=dL.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Hi(s).slice(1)}`}async function gL(t){const e=await lL(t),n=Un().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:pL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fL,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=Un().setTimeout(()=>{i(o)},cL.get());function c(){Un().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_L=500,yL=600,vL="_blank",EL="http://localhost";class K_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TL(t,e,n,s=_L,r=yL){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mL),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Lt().toLowerCase();n&&(a=Jw(u)?vL:n),Qw(u)&&(e=e||EL,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(sx(u)&&a!=="_self")return wL(e||"",a),new K_(null);const f=window.open(e||"",a,h);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new K_(f)}function wL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const IL="__/auth/handler",bL="emulator/auth/handler",CL=encodeURIComponent("fac");async function z_(t,e,n,s,r,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Fr,eventId:r};if(e instanceof oI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ba){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${CL}=${encodeURIComponent(c)}`:"";return`${AL(t)}?${Hi(a).slice(1)}${u}`}function AL({config:t}){return t.emulator?jd(t,bL):`https://${t.authDomain}/${IL}`}/**
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
 */const eh="webStorageSupport";class RL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hI,this._completeRedirectFn=Jx,this._overrideRedirectResult=Gx}async _openPopup(e,n,s,r){var i;us((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await z_(e,n,s,lf(),r);return TL(e,o,Gd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await z_(e,n,s,lf(),r);return kx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(us(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gL(e),s=new Zx(e);return n.register("authEvent",r=>(pe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[eh];o!==void 0&&n(!!o),cs(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nI()||Yw()||qd()}}const SL=RL;var G_="@firebase/auth",Q_="1.10.4";/**
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
 */class PL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NL(t){Rr(new Ks("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sI(t)},u=new cx(s,r,i,c);return gx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rr(new Ks("auth-internal",e=>{const n=Kd(e.getProvider("auth").getImmediate());return(s=>new PL(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(G_,Q_,kL(t)),xn(G_,Q_,"esm2017")}/**
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
 */const OL=5*60,DL=rT("authIdTokenMaxAge")||OL;let Y_=null;const ML=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>DL)return;const r=n==null?void 0:n.token;Y_!==r&&(Y_=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xL(t=ad()){const e=Vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=px(t,{popupRedirectResolver:SL,persistence:[Ux,Rx,hI]}),s=rT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=ML(i.toString());bx(n,o,()=>o(n.currentUser)),Ix(n,a=>o(a))}}const r=tT("auth");return r?mx(n,`http://${r}`):Bi("Auth",!1),n}function LL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ux({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Fn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",LL().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NL("Browser");var J_={};const X_="@firebase/database",Z_="1.0.17";/**
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
 */let yI="";function VL(t){yI=t}/**
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
 */class FL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class UL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FL(e)}}catch{}return new UL},_r=vI("localStorage"),BL=vI("sessionStorage");/**
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
 */const vi=new Lc("@firebase/database"),HL=function(){let t=1;return function(){return t++}}(),EI=function(t){const e=h1(t),n=new o1;n.update(e);const s=n.digest();return nd.encodeByteArray(s)},Aa=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Aa.apply(null,s):typeof s=="object"?e+=Et(s):e+=s,e+=" "}return e};let Uo=null,ey=!0;const jL=function(t,e){J(!0,"Can't turn on custom loggers persistently."),vi.logLevel=ve.VERBOSE,Uo=vi.log.bind(vi)},Ot=function(...t){if(ey===!0&&(ey=!1,Uo===null&&BL.get("logging_enabled")===!0&&jL()),Uo){const e=Aa.apply(null,t);Uo(e)}},Ra=function(t){return function(...e){Ot(t,...e)}},hf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Aa(...t);vi.error(e)},hs=function(...t){const e=`FIREBASE FATAL ERROR: ${Aa(...t)}`;throw vi.error(e),new Error(e)},Zt=function(...t){const e="FIREBASE WARNING: "+Aa(...t);vi.warn(e)},$L=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},TI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Or="[MAX_NAME]",zi=function(t,e){if(t===e)return 0;if(t===Li||e===Or)return-1;if(e===Li||t===Or)return 1;{const n=ty(t),s=ty(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},qL=function(t,e){return t===e?0:t<e?-1:1},po=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Et(e))},Yd=function(t){if(typeof t!="object"||t===null)return Et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Et(e[s]),n+=":",n+=Yd(t[e[s]]);return n+="}",n},wI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const II=function(t){J(!TI(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},KL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},GL=new RegExp("^-?(0*)\\d{1,10}$"),QL=-2147483648,YL=2147483647,ty=function(t){if(GL.test(t)){const e=Number(t);if(e>=QL&&e<=YL)return e}return null},Sa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},JL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class XL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_n(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Zt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ZL{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Zt(e)}}class Cl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cl.OWNER="owner";/**
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
 */const Jd="5",bI="v",CI="s",AI="r",RI="f",SI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PI="ls",kI="p",ff="ac",NI="websocket",OI="long_polling";/**
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
 */class DI{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function MI(t,e,n){J(typeof e=="string","typeof type must == string"),J(typeof n=="object","typeof params must == object");let s;if(e===NI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===OI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eV(t)&&(n.ns=t.namespace);const r=[];return fn(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class tV{constructor(){this.counters_={}}incrementCounter(e,n=1){gs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Uk(this.counters_)}}/**
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
 */const th={},nh={};function Xd(t){const e=t.toString();return th[e]||(th[e]=new tV),th[e]}function nV(t,e){const n=t.toString();return nh[n]||(nh[n]=e()),nh[n]}/**
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
 */class sV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Sa(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ny="start",rV="close",iV="pLPCommand",oV="pRTLPCB",xI="id",LI="pw",VI="ser",aV="cb",lV="seg",cV="ts",uV="d",hV="dframe",FI=1870,UI=30,fV=FI-UI,dV=25e3,pV=3e4;class oi{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ra(e),this.stats_=Xd(n),this.urlFn=c=>(this.appCheckToken&&(c[ff]=this.appCheckToken),MI(n,OI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pV)),WL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ny)this.id=a,this.password=c;else if(o===rV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ny]="t",s[VI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[aV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bI]=Jd,this.transportSessionId&&(s[CI]=this.transportSessionId),this.lastSessionId&&(s[PI]=this.lastSessionId),this.applicationId&&(s[kI]=this.applicationId),this.appCheckToken&&(s[ff]=this.appCheckToken),typeof location<"u"&&location.hostname&&SI.test(location.hostname)&&(s[AI]=RI);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KL()&&!zL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ZE(n),r=wI(s,fV);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[hV]="t",s[xI]=e,s[LI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zd{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HL(),window[iV+this.uniqueCallbackIdentifier]=e,window[oV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ot("frame writing exception"),a.stack&&Ot(a.stack),Ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xI]=this.myID,e[LI]=this.myPW,e[VI]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UI+s.length<=FI;){const o=this.pendingSegs.shift();s=s+"&"+lV+r+"="+o.seg+"&"+cV+r+"="+o.ts+"&"+uV+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(dV)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const gV=16384,mV=45e3;let fc=null;typeof MozWebSocket<"u"?fc=MozWebSocket:typeof WebSocket<"u"&&(fc=WebSocket);class yn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ra(this.connId),this.stats_=Xd(n),this.connURL=yn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[bI]=Jd,typeof location<"u"&&location.hostname&&SI.test(location.hostname)&&(o[AI]=RI),n&&(o[CI]=n),s&&(o[PI]=s),r&&(o[ff]=r),i&&(o[kI]=i),MI(e,NI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let s;Jk(),this.mySock=new fc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fc!==null&&!yn.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Zo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wI(n,gV);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(mV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
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
 */class la{static get ALL_TRANSPORTS(){return[oi,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=yn&&yn.isAvailable();let s=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||Zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[yn];else{const r=this.transports_=[];for(const i of la.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);la.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}la.globalTransportInitialized_=!1;/**
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
 */const _V=6e4,yV=5e3,vV=10*1024,EV=100*1024,sh="t",sy="d",TV="s",ry="r",wV="e",iy="o",oy="a",ay="n",ly="p",IV="h";class bV{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ra("c:"+this.id+":"),this.transportManager_=new la(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>EV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sh in e){const n=e[sh];n===oy?this.upgradeIfSecondaryHealthy_():n===ry?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===iy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=po("t",e),s=po("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ly,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ay,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=po("t",e),s=po("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=po(sh,e);if(sy in e){const s=e[sy];if(n===IV){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===ay){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TV?this.onConnectionShutdown_(s):n===ry?this.onReset_(s):n===wV?hf("Server Error: "+s):n===iy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jd!==s&&Zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_V))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ly,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class BI{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class HI{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class dc extends HI{static getInstance(){return new dc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const cy=32,uy=768;class qe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new qe("")}function Ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zs(t){return t.pieces_.length-t.pieceNum_}function We(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new qe(t.pieces_,e)}function jI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $I(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new qe(e,0)}function pt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new qe(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function ln(t,e){const n=Ce(t),s=Ce(e);if(n===null)return e;if(n===s)return ln(We(t),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qI(t,e){if(Zs(t)!==Zs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function En(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zs(t)>Zs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class AV{constructor(e,n){this.errorPrefix_=n,this.parts_=$I(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=xc(this.parts_[s]);KI(this)}}function RV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xc(e),KI(t)}function SV(t){const e=t.parts_.pop();t.byteLength_-=xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function KI(t){if(t.byteLength_>uy)throw new Error(t.errorPrefix_+"has a key path longer than "+uy+" bytes ("+t.byteLength_+").");if(t.parts_.length>cy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cy+") or object contains a cycle "+gr(t))}function gr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ep extends HI{static getInstance(){return new ep}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const go=1e3,PV=60*5*1e3,hy=30*1e3,kV=1.3,NV=3e4,OV="server_kill",fy=3;class ts extends BI{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ts.nextPersistentConnectionId_++,this.log_=Ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=go,this.maxReconnectDelay_=PV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ep.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Et(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new sd,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ts.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gs(e,"w")){const s=Ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||i1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=r1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hf("Unrecognized action received from server: "+Et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>NV&&(this.reconnectDelay_=go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ts.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ot("getToken() completed but was canceled"):(Ot("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new bV(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Zt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(OV)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Zt(f),c())}}}interrupt(e){Ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vh(this.interruptReasons_)&&(this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Yd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new qe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fy&&(this.reconnectDelay_=hy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yI.replace(/\./g,"-")]=1,id()?e["framework.cordova"]=1:oT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dc.getInstance().currentlyOnline();return Vh(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
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
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
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
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ae(Li,e),r=new Ae(Li,n);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
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
 */let cl;class zI extends su{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,n){return zi(e.name,n.name)}isDefinedOn(e){throw Ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Or,cl)}makePost(e,n){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,cl)}toString(){return".key"}}const Ei=new zI;/**
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
 */class ul{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??dt.RED,this.left=r??Qt.EMPTY_NODE,this.right=i??Qt.EMPTY_NODE}copy(e,n,s,r,i){return new dt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Qt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class DV{copy(e,n,s,r,i){return this}insert(e,n,s){return new dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qt{constructor(e,n=Qt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new Qt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ul(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}}Qt.EMPTY_NODE=new DV;/**
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
 */function MV(t,e){return zi(t.name,e.name)}function tp(t,e){return zi(t,e)}/**
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
 */let df;function xV(t){df=t}const GI=function(t){return typeof t=="number"?"number:"+II(t):"string:"+t},QI=function(t){if(t.isLeafNode()){const e=t.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gs(e,".sv"),"Priority must be a string or number.")}else J(t===df||t.isEmpty(),"priority of unexpected type.");J(t===df||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let dy;class ht{static set __childrenNodeConstructor(e){dy=e}static get __childrenNodeConstructor(){return dy}constructor(e,n=ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),QI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Ce(e)===".priority"?this.priorityNode_:ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ce(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(J(s!==".priority"||Zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+GI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=II(this.value_):e+=this.value_,this.lazyHash_=EI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ht.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=ht.VALUE_TYPE_ORDER.indexOf(n),i=ht.VALUE_TYPE_ORDER.indexOf(s);return J(r>=0,"Unknown leaf type: "+n),J(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let YI,JI;function LV(t){YI=t}function VV(t){JI=t}class FV extends su{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?zi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Or,new ht("[PRIORITY-POST]",JI))}makePost(e,n){const s=YI(e);return new Ae(n,new ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const xt=new FV;/**
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
 */const UV=Math.log(2);class BV{constructor(e){const n=i=>parseInt(Math.log(i)/UV,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let f,p;if(h===0)return null;if(h===1)return f=t[c],p=n?n(f):f,new dt(p,f.node,dt.BLACK,null,null);{const m=parseInt(h/2,10)+c,_=r(c,m),T=r(m+1,u);return f=t[m],p=n?n(f):f,new dt(p,f.node,dt.BLACK,_,T)}},i=function(c){let u=null,h=null,f=t.length;const p=function(_,T){const k=f-_,D=f;f-=_;const O=r(k+1,D),w=t[k],N=n?n(w):w;m(new dt(N,w.node,T,null,O))},m=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<c.count;++_){const T=c.nextBitIsOne(),k=Math.pow(2,c.count-(_+1));T?p(k,dt.BLACK):(p(k,dt.BLACK),p(k,dt.RED))}return h},o=new BV(t.length),a=i(o);return new Qt(s||e,a)};/**
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
 */let rh;const Jr={};class es{static get Default(){return J(Jr&&xt,"ChildrenNode.ts has not been loaded"),rh=rh||new es({".priority":Jr},{".priority":xt}),rh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qt?n:null}hasIndex(e){return gs(this.indexSet_,e.toString())}addIndex(e,n){J(e!==Ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=pc(s,e.getCompare()):a=Jr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new es(h,u)}addToIndexes(e,n){const s=Kl(this.indexes_,(r,i)=>{const o=Ri(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),r===Jr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),pc(a,o.getCompare())}else return Jr;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new es(s,this.indexSet_)}removeFromIndexes(e,n){const s=Kl(this.indexes_,r=>{if(r===Jr)return r;{const i=n.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new es(s,this.indexSet_)}}/**
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
 */let mo;class De{static get EMPTY_NODE(){return mo||(mo=new De(new Qt(tp),null,es.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&QI(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mo}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mo:n}}getChild(e){const n=Ce(e);return n===null?this:this.getImmediateChild(n).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(J(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ae(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?mo:this.priorityNode_;return new De(r,o,i)}}updateChild(e,n){const s=Ce(e);if(s===null)return n;{J(Ce(e)!==".priority"||Zs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(We(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(xt,(o,a)=>{n[o]=a.val(e),s++,i&&De.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+GI(this.getPriority().val())+":"),this.forEachChild(xt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":EI(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pa?-1:0}withIndex(e){if(e===Ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(xt),r=n.getIterator(xt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ei?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HV extends De{constructor(){super(new Qt(tp),De.EMPTY_NODE,es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const Pa=new HV;Object.defineProperties(Ae,{MIN:{value:new Ae(Li,De.EMPTY_NODE)},MAX:{value:new Ae(Or,Pa)}});zI.__EMPTY_NODE=De.EMPTY_NODE;ht.__childrenNodeConstructor=De;xV(Pa);VV(Pa);/**
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
 */const jV=!0;function Dt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ht(n,Dt(e))}if(!(t instanceof Array)&&jV){const n=[];let s=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Dt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return De.EMPTY_NODE;const i=pc(n,MV,o=>o.name,tp);if(s){const o=pc(n,xt.getCompare());return new De(i,Dt(e),new es({".priority":o},{".priority":xt}))}else return new De(i,Dt(e),es.Default)}else{let n=De.EMPTY_NODE;return fn(t,(s,r)=>{if(gs(t,s)&&s.substring(0,1)!=="."){const i=Dt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Dt(e))}}LV(Dt);/**
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
 */class $V extends su{constructor(e){super(),this.indexPath_=e,J(!Ie(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?zi(e.name,n.name):i}makePost(e,n){const s=Dt(e),r=De.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(n,r)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,Pa);return new Ae(Or,e)}toString(){return $I(this.indexPath_,0).join("/")}}/**
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
 */class WV extends su{compare(e,n){const s=e.node.compareTo(n.node);return s===0?zi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const s=Dt(e);return new Ae(n,s)}toString(){return".value"}}const qV=new WV;/**
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
 */function KV(t){return{type:"value",snapshotNode:t}}function zV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function GV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function py(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class np{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xt}copy(){const e=new np;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xt?n="$priority":t.index_===qV?n="$value":t.index_===Ei?n="$key":(J(t.index_ instanceof $V,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function my(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xt&&(e.i=t.index_.toString()),e}/**
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
 */class gc extends BI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ra("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=gc.getListenId_(e,s),a={};this.listens_[o]=a;const c=gy(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Ri(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=gc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=gy(e._queryParams),s=e._path.toString(),r=new sd;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Zo(a.responseText)}catch{Zt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Zt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class YV{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function mc(){return{value:null,children:new Map}}function XI(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ce(e);t.children.has(s)||t.children.set(s,mc());const r=t.children.get(s);e=We(e),XI(r,e,n)}}function pf(t,e,n){t.value!==null?n(e,t.value):JV(t,(s,r)=>{const i=new qe(e.toString()+"/"+s);pf(r,i,n)})}function JV(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class XV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const _y=10*1e3,ZV=30*1e3,eF=5*60*1e3;class tF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XV(e);const s=_y+(ZV-_y)*Math.random();Bo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;fn(e,(r,i)=>{i>0&&gs(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*eF))}}/**
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
 */var Dn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function ZI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class _c{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Dn.ACK_USER_WRITE,this.source=ZI()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(e));return new _c(Le(),n,this.revert)}}else return J(Ce(this.path)===e,"operationForChild called for unrelated child."),new _c(We(this.path),this.affectedTree,this.revert)}}/**
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
 */class Dr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Dn.OVERWRITE}operationForChild(e){return Ie(this.path)?new Dr(this.source,Le(),this.snap.getImmediateChild(e)):new Dr(this.source,We(this.path),this.snap)}}/**
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
 */class ca{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Dn.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new qe(e));return n.isEmpty()?null:n.value?new Dr(this.source,Le(),n.value):new ca(this.source,Le(),n)}else return J(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ca(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class sp{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function nF(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(QV(o.childName,o.snapshotNode))}),_o(t,r,"child_removed",e,s,n),_o(t,r,"child_added",e,s,n),_o(t,r,"child_moved",i,s,n),_o(t,r,"child_changed",e,s,n),_o(t,r,"value",e,s,n),r}function _o(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>rF(t,a,c)),o.forEach(a=>{const c=sF(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function sF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rF(t,e,n){if(e.childName==null||n.childName==null)throw Ui("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function nb(t,e){return{eventCache:t,serverCache:e}}function Ho(t,e,n,s){return nb(new sp(e,n,s),t.serverCache)}function sb(t,e,n,s){return nb(t.eventCache,new sp(e,n,s))}function gf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Mr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ih;const iF=()=>(ih||(ih=new Qt(qL)),ih);class je{static fromObject(e){let n=new je(null);return fn(e,(s,r)=>{n=n.set(new qe(s),r)}),n}constructor(e,n=iF()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(Ie(e))return null;{const s=Ce(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(We(e),n);return i!=null?{path:pt(new qe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Ce(e),s=this.children.get(n);return s!==null?s.subtree(We(e)):new je(null)}}set(e,n){if(Ie(e))return new je(n,this.children);{const s=Ce(e),i=(this.children.get(s)||new je(null)).set(We(e),n),o=this.children.insert(s,i);return new je(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Ce(e),s=this.children.get(n);if(s){const r=s.remove(We(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new je(null):new je(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Ce(e),s=this.children.get(n);return s?s.get(We(e)):null}}setTree(e,n){if(Ie(e))return n;{const s=Ce(e),i=(this.children.get(s)||new je(null)).setTree(We(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new je(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(pt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ie(e))return null;{const i=Ce(e),o=this.children.get(i);return o?o.findOnPath_(We(e),pt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,s){if(Ie(e))return this;{this.value&&s(n,this.value);const r=Ce(e),i=this.children.get(r);return i?i.foreachOnPath_(We(e),pt(n,r),s):new je(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(pt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class bn{constructor(e){this.writeTree_=e}static empty(){return new bn(new je(null))}}function jo(t,e,n){if(Ie(e))return new bn(new je(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=ln(r,e);return i=i.updateChild(o,n),new bn(t.writeTree_.set(r,i))}else{const r=new je(n),i=t.writeTree_.setTree(e,r);return new bn(i)}}}function yy(t,e,n){let s=t;return fn(n,(r,i)=>{s=jo(s,pt(e,r),i)}),s}function vy(t,e){if(Ie(e))return bn.empty();{const n=t.writeTree_.setTree(e,new je(null));return new bn(n)}}function mf(t,e){return Hr(t,e)!=null}function Hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ln(n.path,e)):null}function Ey(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xt,(s,r)=>{e.push(new Ae(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Ws(t,e){if(Ie(e))return t;{const n=Hr(t,e);return n!=null?new bn(new je(n)):new bn(t.writeTree_.subtree(e))}}function _f(t){return t.writeTree_.isEmpty()}function Vi(t,e){return rb(Le(),t.writeTree_,e)}function rb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=rb(pt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pt(t,".priority"),s)),n}}/**
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
 */function ib(t,e){return ub(e,t)}function oF(t,e,n,s,r){J(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=jo(t.visibleWrites,e,n)),t.lastWriteId=s}function aF(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function lF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);J(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cF(a,s.path)?r=!1:En(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return uF(t),!0;if(s.snap)t.visibleWrites=vy(t.visibleWrites,s.path);else{const a=s.children;fn(a,c=>{t.visibleWrites=vy(t.visibleWrites,pt(s.path,c))})}return!0}else return!1}function cF(t,e){if(t.snap)return En(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&En(pt(t.path,n),e))return!0;return!1}function uF(t){t.visibleWrites=ob(t.allWrites,hF,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hF(t){return t.visible}function ob(t,e,n){let s=bn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)En(n,o)?(a=ln(n,o),s=jo(s,a,i.snap)):En(o,n)&&(a=ln(o,n),s=jo(s,Le(),i.snap.getChild(a)));else if(i.children){if(En(n,o))a=ln(n,o),s=yy(s,a,i.children);else if(En(o,n))if(a=ln(o,n),Ie(a))s=yy(s,Le(),i.children);else{const c=Ri(i.children,Ce(a));if(c){const u=c.getChild(We(a));s=jo(s,Le(),u)}}}else throw Ui("WriteRecord should have .snap or .children")}}return s}function ab(t,e,n,s,r){if(!s&&!r){const i=Hr(t.visibleWrites,e);if(i!=null)return i;{const o=Ws(t.visibleWrites,e);if(_f(o))return n;if(n==null&&!mf(o,Le()))return null;{const a=n||De.EMPTY_NODE;return Vi(o,a)}}}else{const i=Ws(t.visibleWrites,e);if(!r&&_f(i))return n;if(!r&&n==null&&!mf(i,Le()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(En(u.path,e)||En(e,u.path))},a=ob(t.allWrites,o,e),c=n||De.EMPTY_NODE;return Vi(a,c)}}}function fF(t,e,n){let s=De.EMPTY_NODE;const r=Hr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(xt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Ws(t.visibleWrites,e);return n.forEachChild(xt,(o,a)=>{const c=Vi(Ws(i,new qe(o)),a);s=s.updateImmediateChild(o,c)}),Ey(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ws(t.visibleWrites,e);return Ey(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dF(t,e,n,s,r){J(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=pt(e,n);if(mf(t.visibleWrites,i))return null;{const o=Ws(t.visibleWrites,i);return _f(o)?r.getChild(n):Vi(o,r.getChild(n))}}function pF(t,e,n,s){const r=pt(e,n),i=Hr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Ws(t.visibleWrites,r);return Vi(o,s.getNode().getImmediateChild(n))}else return null}function gF(t,e){return Hr(t.visibleWrites,e)}function mF(t,e,n,s,r,i,o){let a;const c=Ws(t.visibleWrites,e),u=Hr(c,Le());if(u!=null)a=u;else if(n!=null)a=Vi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=p.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=p.getNext();return h}else return[]}function _F(){return{visibleWrites:bn.empty(),allWrites:[],lastWriteId:-1}}function yf(t,e,n,s){return ab(t.writeTree,t.treePath,e,n,s)}function lb(t,e){return fF(t.writeTree,t.treePath,e)}function Ty(t,e,n,s){return dF(t.writeTree,t.treePath,e,n,s)}function yc(t,e){return gF(t.writeTree,pt(t.treePath,e))}function yF(t,e,n,s,r,i){return mF(t.writeTree,t.treePath,e,n,s,r,i)}function rp(t,e,n){return pF(t.writeTree,t.treePath,e,n)}function cb(t,e){return ub(pt(t.treePath,e),t.writeTree)}function ub(t,e){return{treePath:t,writeTree:e}}/**
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
 */class vF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;J(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),J(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,py(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,GV(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,zV(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,py(s,e.snapshotNode,r.oldSnap));else throw Ui("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class EF{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const hb=new EF;class ip{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new sp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mr(this.viewCache_),i=yF(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function TF(t,e){J(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wF(t,e,n,s,r){const i=new vF;let o,a;if(n.type===Dn.OVERWRITE){const u=n;u.source.fromUser?o=vf(t,e,u.path,u.snap,s,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=vc(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===Dn.MERGE){const u=n;u.source.fromUser?o=bF(t,e,u.path,u.children,s,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ef(t,e,u.path,u.children,s,r,a,i))}else if(n.type===Dn.ACK_USER_WRITE){const u=n;u.revert?o=RF(t,e,u.path,s,r,i):o=CF(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Dn.LISTEN_COMPLETE)o=AF(t,e,n.path,s,i);else throw Ui("Unknown operation type: "+n.type);const c=i.getChanges();return IF(e,o,c),{viewCache:o,changes:c}}function IF(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=gf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(KV(gf(e)))}}function fb(t,e,n,s,r,i){const o=e.eventCache;if(yc(s,n)!=null)return e;{let a,c;if(Ie(n))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Mr(e),h=u instanceof De?u:De.EMPTY_NODE,f=lb(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=yf(s,Mr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ce(n);if(u===".priority"){J(Zs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=Ty(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=We(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=Ty(s,n,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=rp(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return Ho(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function vc(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Ce(n);if(!c.isCompleteForPath(n)&&Zs(n)>1)return e;const _=We(n),k=c.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?u=h.updatePriority(c.getNode(),k):u=h.updateChild(c.getNode(),m,k,_,hb,null)}const f=sb(e,u,c.isFullyInitialized()||Ie(n),h.filtersNodes()),p=new ip(r,f,i);return fb(t,f,n,r,p,a)}function vf(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new ip(r,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ho(e,u,!0,t.filter.filtersNodes());else{const f=Ce(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Ho(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=We(n),m=a.getNode().getImmediateChild(f);let _;if(Ie(p))_=s;else{const T=h.getCompleteChild(f);T!=null?jI(p)===".priority"&&T.getChild(WI(p)).isEmpty()?_=T:_=T.updateChild(p,s):_=De.EMPTY_NODE}if(m.equals(_))c=e;else{const T=t.filter.updateChild(a.getNode(),f,_,p,h,o);c=Ho(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function wy(t,e){return t.eventCache.isCompleteForChild(e)}function bF(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=pt(n,c);wy(e,Ce(h))&&(a=vf(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=pt(n,c);wy(e,Ce(h))||(a=vf(t,a,h,u,r,i,o))}),a}function Iy(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Ef(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(n)?u=s:u=new je(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=Iy(t,m,p);c=vc(t,c,new qe(f),_,r,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),T=Iy(t,_,p);c=vc(t,c,new qe(f),T,r,i,o,a)}}),c}function CF(t,e,n,s,r,i,o){if(yc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ie(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return vc(t,e,n,c.getNode().getChild(n),r,i,a,o);if(Ie(n)){let u=new je(null);return c.getNode().forEachChild(Ei,(h,f)=>{u=u.set(new qe(h),f)}),Ef(t,e,n,u,r,i,a,o)}else return e}else{let u=new je(null);return s.foreach((h,f)=>{const p=pt(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),Ef(t,e,n,u,r,i,a,o)}}function AF(t,e,n,s,r){const i=e.serverCache,o=sb(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return fb(t,o,n,s,hb,r)}function RF(t,e,n,s,r,i){let o;if(yc(s,n)!=null)return e;{const a=new ip(s,e,r),c=e.eventCache.getNode();let u;if(Ie(n)||Ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=yf(s,Mr(e));else{const f=e.serverCache.getNode();J(f instanceof De,"serverChildren would be complete if leaf node"),h=lb(s,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Ce(n);let f=rp(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,We(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,De.EMPTY_NODE,We(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yf(s,Mr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||yc(s,Le())!=null,Ho(e,u,o,t.filter.filtersNodes())}}function SF(t,e){const n=Mr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Ce(e)).isEmpty())?n.getChild(e):null}function by(t,e,n,s){e.type===Dn.MERGE&&e.source.queryId!==null&&(J(Mr(t.viewCache_),"We should always have a full cache before handling merges"),J(gf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=wF(t.processor_,r,e,n,s);return TF(t.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,PF(t,i.changes,i.viewCache.eventCache.getNode())}function PF(t,e,n,s){const r=t.eventRegistrations_;return nF(t.eventGenerator_,e,n,r)}/**
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
 */let Cy;function kF(t){J(!Cy,"__referenceConstructor has already been defined"),Cy=t}function op(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return J(i!=null,"SyncTree gave us an op for an invalid query."),by(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(by(o,e,n,s));return i}}function ap(t,e){let n=null;for(const s of t.views.values())n=n||SF(s,e);return n}/**
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
 */let Ay;function NF(t){J(!Ay,"__referenceConstructor has already been defined"),Ay=t}class Ry{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=_F(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OF(t,e,n,s,r){return oF(t.pendingWriteTree_,e,n,s,r),r?iu(t,new Dr(ZI(),e,n)):[]}function ai(t,e,n=!1){const s=aF(t.pendingWriteTree_,e);if(lF(t.pendingWriteTree_,e)){let i=new je(null);return s.snap!=null?i=i.set(Le(),!0):fn(s.children,o=>{i=i.set(new qe(o),!0)}),iu(t,new _c(s.path,i,n))}else return[]}function ru(t,e,n){return iu(t,new Dr(eb(),e,n))}function DF(t,e,n){const s=je.fromObject(n);return iu(t,new ca(eb(),e,s))}function MF(t,e,n,s){const r=mb(t,s);if(r!=null){const i=_b(r),o=i.path,a=i.queryId,c=ln(o,e),u=new Dr(tb(a),c,n);return yb(t,o,u)}else return[]}function xF(t,e,n,s){const r=mb(t,s);if(r){const i=_b(r),o=i.path,a=i.queryId,c=ln(o,e),u=je.fromObject(n),h=new ca(tb(a),c,u);return yb(t,o,h)}else return[]}function db(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ln(o,e),u=ap(a,c);if(u)return u});return ab(r,e,i,n,!0)}function iu(t,e){return pb(e,t.syncPointTree_,null,ib(t.pendingWriteTree_,Le()))}function pb(t,e,n,s){if(Ie(t.path))return gb(t,e,n,s);{const r=e.get(Le());n==null&&r!=null&&(n=ap(r,Le()));let i=[];const o=Ce(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=cb(s,o);i=i.concat(pb(a,c,u,h))}return r&&(i=i.concat(op(r,t,s,n))),i}}function gb(t,e,n,s){const r=e.get(Le());n==null&&r!=null&&(n=ap(r,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=cb(s,o),h=t.operationForChild(o);h&&(i=i.concat(gb(h,a,c,u)))}),r&&(i=i.concat(op(r,t,s,n))),i}function mb(t,e){return t.tagToQueryMap.get(e)}function _b(t){const e=t.indexOf("$");return J(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new qe(t.substr(0,e))}}function yb(t,e,n){const s=t.syncPointTree_.get(e);J(s,"Missing sync point for query tag that we're tracking");const r=ib(t.pendingWriteTree_,e);return op(s,n,r,null)}/**
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
 */class lp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lp(n)}node(){return this.node_}}class cp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pt(this.path_,e);return new cp(this.syncTree_,n)}node(){return db(this.syncTree_,this.path_)}}const LF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sy=function(t,e,n){if(!t||typeof t!="object")return t;if(J(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FF(t[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:J(!1,"Unexpected server value: "+t)}},FF=function(t,e,n){t.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&J(!1,"Unexpected increment value: "+s);const r=e.node();if(J(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},UF=function(t,e,n,s){return up(e,new cp(n,t),s)},BF=function(t,e,n){return up(t,new lp(e),n)};function up(t,e,n){const s=t.getPriority().val(),r=Sy(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Sy(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ht(a,Dt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ht(r))),o.forEachChild(xt,(a,c)=>{const u=up(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class hp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fp(t,e){let n=e instanceof qe?e:new qe(e),s=t,r=Ce(n);for(;r!==null;){const i=Ri(s.node.children,r)||{children:{},childCount:0};s=new hp(r,s,i),n=We(n),r=Ce(n)}return s}function Gi(t){return t.node.value}function vb(t,e){t.node.value=e,Tf(t)}function Eb(t){return t.node.childCount>0}function HF(t){return Gi(t)===void 0&&!Eb(t)}function ou(t,e){fn(t.node.children,(n,s)=>{e(new hp(n,t,s))})}function Tb(t,e,n,s){n&&e(t),ou(t,r=>{Tb(r,e,!0)})}function jF(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ka(t){return new qe(t.parent===null?t.name:ka(t.parent)+"/"+t.name)}function Tf(t){t.parent!==null&&$F(t.parent,t.name,t)}function $F(t,e,n){const s=HF(n),r=gs(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Tf(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Tf(t))}/**
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
 */const WF=/[\[\].#$\/\u0000-\u001F\u007F]/,qF=/[\[\].#$\u0000-\u001F\u007F]/,oh=10*1024*1024,wb=function(t){return typeof t=="string"&&t.length!==0&&!WF.test(t)},KF=function(t){return typeof t=="string"&&t.length!==0&&!qF.test(t)},zF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),KF(t)},Ib=function(t,e,n){const s=n instanceof qe?new AV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gr(s));if(typeof e=="function")throw new Error(t+"contains a function "+gr(s)+" with contents = "+e.toString());if(TI(e))throw new Error(t+"contains "+e.toString()+" "+gr(s));if(typeof e=="string"&&e.length>oh/3&&xc(e)>oh)throw new Error(t+"contains a string greater than "+oh+" utf8 bytes "+gr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!wb(o)))throw new Error(t+" contains an invalid key ("+o+") "+gr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RV(s,o),Ib(t,a,s),SV(s)}),r&&i)throw new Error(t+' contains ".value" child '+gr(s)+" in addition to actual children.")}},GF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zF(n))throw new Error(u1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class QF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function YF(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!qI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function jr(t,e,n){YF(t,n),JF(t,s=>En(s,e)||En(e,s))}function JF(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(XF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function XF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Uo&&Ot("event: "+n.toString()),Sa(s)}}}/**
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
 */const ZF="repo_interrupt",e2=25;class t2{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mc(),this.transactionQueueTree_=new hp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function n2(t,e,n){if(t.stats_=Xd(t.repoInfo_),t.forceRestClient_||JL())t.server_=new gc(t.repoInfo_,(s,r,i,o)=>{Py(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ky(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,r,i,o)=>{Py(t,s,r,i,o)},s=>{ky(t,s)},s=>{r2(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=nV(t.repoInfo_,()=>new tF(t.stats_,t.server_)),t.infoData_=new YV,t.infoSyncTree_=new Ry({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=ru(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dp(t,"connected",!1),t.serverSyncTree_=new Ry({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);jr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function s2(t){const n=t.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bb(t){return LF({timestamp:s2(t)})}function Py(t,e,n,s,r){t.dataUpdateCount++;const i=new qe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Kl(n,u=>Dt(u));o=xF(t.serverSyncTree_,i,c,r)}else{const c=Dt(n);o=MF(t.serverSyncTree_,i,c,r)}else if(s){const c=Kl(n,u=>Dt(u));o=DF(t.serverSyncTree_,i,c)}else{const c=Dt(n);o=ru(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=gp(t,i)),jr(t.eventQueue_,a,o)}function ky(t,e){dp(t,"connected",e),e===!1&&o2(t)}function r2(t,e){fn(e,(n,s)=>{dp(t,n,s)})}function dp(t,e,n){const s=new qe("/.info/"+e),r=Dt(n);t.infoData_.updateSnapshot(s,r);const i=ru(t.infoSyncTree_,s,r);jr(t.eventQueue_,s,i)}function i2(t){return t.nextWriteId_++}function o2(t){Cb(t,"onDisconnectEvents");const e=bb(t),n=mc();pf(t.onDisconnect_,Le(),(r,i)=>{const o=UF(r,i,t.serverSyncTree_,e);XI(n,r,o)});let s=[];pf(n,Le(),(r,i)=>{s=s.concat(ru(t.serverSyncTree_,r,i));const o=u2(t,r);gp(t,o)}),t.onDisconnect_=mc(),jr(t.eventQueue_,Le(),s)}function a2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ZF)}function Cb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ot(n,...e)}function Ab(t,e,n){return db(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function pp(t,e=t.transactionQueueTree_){if(e||au(t,e),Gi(e)){const n=Sb(t,e);J(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&l2(t,ka(e),n)}else Eb(e)&&ou(e,n=>{pp(t,n)})}function l2(t,e,n){const s=n.map(u=>u.currentWriteId),r=Ab(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=ln(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{Cb(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ai(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();au(t,fp(t.transactionQueueTree_,e)),pp(t,t.transactionQueueTree_),jr(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Sa(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Zt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}gp(t,e)}},o)}function gp(t,e){const n=Rb(t,e),s=ka(n),r=Sb(t,n);return c2(t,r,s),s}function c2(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=ln(n,c.path);let h=!1,f;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(ai(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=e2)h=!0,f="maxretry",r=r.concat(ai(t.serverSyncTree_,c.currentWriteId,!0));else{const p=Ab(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){Ib("transaction failed: Data returned ",m,c.path);let _=Dt(m);typeof m=="object"&&m!=null&&gs(m,".priority")||(_=_.updatePriority(p.getPriority()));const k=c.currentWriteId,D=bb(t),O=BF(_,p,D);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=O,c.currentWriteId=i2(t),o.splice(o.indexOf(k),1),r=r.concat(OF(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),r=r.concat(ai(t.serverSyncTree_,k,!0))}else h=!0,f="nodata",r=r.concat(ai(t.serverSyncTree_,c.currentWriteId,!0))}jr(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}au(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Sa(s[a]);pp(t,t.transactionQueueTree_)}function Rb(t,e){let n,s=t.transactionQueueTree_;for(n=Ce(e);n!==null&&Gi(s)===void 0;)s=fp(s,n),e=We(e),n=Ce(e);return s}function Sb(t,e){const n=[];return Pb(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Pb(t,e,n){const s=Gi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);ou(e,r=>{Pb(t,r,n)})}function au(t,e){const n=Gi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,vb(e,n.length>0?n:void 0)}ou(e,s=>{au(t,s)})}function u2(t,e){const n=ka(Rb(t,e)),s=fp(t.transactionQueueTree_,e);return jF(s,r=>{ah(t,r)}),ah(t,s),Tb(s,r=>{ah(t,r)}),n}function ah(t,e){const n=Gi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(J(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ai(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?vb(e,void 0):n.length=i+1,jr(t.eventQueue_,ka(e),r);for(let o=0;o<s.length;o++)Sa(s[o])}}/**
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
 */function h2(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function f2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ny=function(t,e){const n=d2(t),s=n.namespace;n.domain==="firebase.com"&&hs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&hs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$L();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new DI(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new qe(n.pathString)}},d2=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=h2(t.substring(h,f)));const p=f2(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class mp{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ie(this._path)?null:jI(this._path)}get ref(){return new Qi(this._repo,this._path)}get _queryIdentifier(){const e=my(this._queryParams),n=Yd(e);return n==="{}"?"default":n}get _queryObject(){return my(this._queryParams)}isEqual(e){if(e=Vt(e),!(e instanceof mp))return!1;const n=this._repo===e._repo,s=qI(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+CV(this._path)}}class Qi extends mp{constructor(e,n){super(e,n,new np,!1)}get parent(){const e=WI(this._path);return e===null?null:new Qi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}kF(Qi);NF(Qi);/**
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
 */const p2="FIREBASE_DATABASE_EMULATOR_HOST",wf={};let g2=!1;function m2(t,e,n,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=Vr(i);t.repoInfo_=new DI(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function _2(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||hs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ot("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ny(i,r),a=o.repoInfo,c;typeof process<"u"&&J_&&(c=J_[p2]),c?(i=`http://${c}?ns=${a.namespace}`,o=Ny(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new ZL(t.name,t.options,e);GF("Invalid Firebase Database URL",o),Ie(o.path)||hs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=v2(a,t,u,new XL(t,n));return new E2(h,t)}function y2(t,e){const n=wf[e];(!n||n[t.key]!==t)&&hs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),a2(t),delete n[t.key]}function v2(t,e,n,s){let r=wf[e.name];r||(r={},wf[e.name]=r);let i=r[t.toURLString()];return i&&hs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new t2(t,g2,n,s),r[t.toURLString()]=i,i}class E2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(n2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0,Bi("Database",this._repo.repoInfo_.emulatorOptions!==null)),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qi(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hs("Cannot call "+e+" on a deleted database.")}}function T2(t=ad(),e){const n=Vc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=nT("database");s&&w2(n,...s)}return n}function w2(t,e,n,s={}){t=Vt(t),t._checkNotDeleted("useEmulator");const r=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(r===t._repoInternal.repoInfo_.host&&qs(s,i.repoInfo_.emulatorOptions))return;hs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&hs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Cl(Cl.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:iT(s.mockUserToken,t.app.options.projectId);o=new Cl(a)}Vr(e)&&(rd(e),Bi("Database",!0)),m2(i,r,s,o)}/**
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
 */function I2(t){VL(Fr),Rr(new Ks("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return _2(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),xn(X_,Z_,t),xn(X_,Z_,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};I2();const b2={apiKey:"AIzaSyCOKqAbu4AITTiEwsPya8cH_P0o3HQ9xL0",authDomain:"fibertextile-e96f5.firebaseapp.com",databaseURL:"https://fibertextile-e96f5-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fibertextile-e96f5",storageBucket:"fibertextile-e96f5.firebasestorage.app",messagingSenderId:"14801803496",appId:"1:14801803496:web:fcf5074d781e1eefadd15d"},lu=uT(b2),C2=wM(lu),A2=xL(lu),R2=T2(lu),S2=dn(t=>{t.provide("fireApp",lu),t.provide("db",C2),t.provide("auth",A2),t.provide("realbase",R2)}),P2=[JS,ZS,rP,Ik,bk,Ck,Ak,Sk,Nk,Mk,xk,S2],kb=(t="RouteProvider")=>tr({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,r={};for(const i in e.route)Object.defineProperty(r,i,{get:()=>n===e.renderKey?e.route[i]:s[i],enumerable:!0});return Tr(ma,Jn(r)),()=>Mt(e.vnode,{ref:e.vnodeRef})}}),k2=kb(),Oy=new WeakMap,N2=tr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=ct(),i=wn(),o=jt(ma,null);let a;s({pageRef:i});const c=jt(AE,null);let u;const h=r.deferHydration();if(r.isHydrating){const p=r.hooks.hookOnce("app:error",h);en().beforeEach(p)}t.pageKey&&fi(()=>t.pageKey,(p,m)=>{p!==m&&r.callHook("page:loading:start")});let f=!1;{const p=en().beforeResolve(()=>{f=!1});pa(()=>{p()})}return()=>Mt(GE,{name:t.name,route:t.route,...e},{default:p=>{const m=D2(o,p.route,p.Component),_=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!_)return u;h();return}if(u&&c&&!c.isCurrent(p.route))return u;if(m&&o&&(!c||c!=null&&c.isCurrent(o)))return _?u:null;const T=Lh(p,t.pageKey),k=M2(o,p.route,p.Component);!r.isHydrating&&a===T&&!k&&Ti(()=>{f=!0,r.callHook("page:loading:end")}),a=T;const D=!!(t.transition??p.route.meta.pageTransition??Kg),O=D&&O2([t.transition,p.route.meta.pageTransition,Kg,{onBeforeLeave(){r._runningTransition=!0},onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",p.Component)}}]),w=t.keepalive??p.route.meta.keepalive??UR;return u=QE(D&&O,fk(w,Mt($f,{suspensible:!0,onPending:()=>r.callHook("page:start",p.Component),onResolve:()=>{Ti(()=>r.callHook("page:finish",p.Component).then(()=>{if(!f&&!k)return f=!0,r.callHook("page:loading:end")}).finally(h))}},{default:()=>{const N={key:T||void 0,vnode:n.default?x2(n.default,p):p.Component,route:p.route,renderKey:T||void 0,trackRootNodes:D,vnodeRef:i};if(!w)return Mt(k2,N);const M=p.Component.type,F=M;let I=Oy.get(F);return I||(I=kb(M.name||M.__name),Oy.set(F,I)),Mt(I,N)}}))).default(),u}})}});function O2(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?ed(n.onAfterLeave):void 0}));return bE(...e)}function D2(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>{var o,a,c;return((o=r.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Lh({route:e,Component:n})!==Lh({route:t,Component:n})}function M2(t,e,n){return t?e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function x2(t,e){const n=t(e);return n.length===1?Mt(n[0]):Mt(kt,void 0,n)}const L2=tr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,e){return()=>Mt(Ms[t.name],t.layoutProps,e.slots)}}),V2={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},F2=tr({name:"NuxtLayout",inheritAttrs:!1,props:V2,setup(t,e){const n=ct(),s=jt(ma),r=s===Gf()?ak():s,i=an(()=>{let c=$e(t.name)??r.meta.layout??"default";return c&&!(c in Ms)&&t.fallback&&(c=$e(t.fallback)),c}),o=wn();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",a);en().beforeEach(c)}return()=>{const c=i.value&&i.value in Ms,u=r.meta.layoutTransition??FR;return QE(c&&u,{default:()=>Mt($f,{suspensible:!0,onResolve:()=>{Ti(a)}},{default:()=>Mt(U2,{layoutProps:tE(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),U2=tr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&Tr(AE,{isCurrent:s=>n===(s.meta.layout??"default")}),()=>{var s,r;return!n||typeof n=="string"&&!(n in Ms)?(r=(s=e.slots).default)==null?void 0:r.call(s):Mt(L2,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),B2=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},H2={};function j2(t,e){const n=N2,s=F2;return on(),On(s,null,{default:Lf(()=>[Je(n)]),_:1})}const $2=B2(H2,[["render",j2]]),W2={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const s=Number(n.statusCode||500),r=s===404,i=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=r?Ol(()=>Ds(()=>import("./CmKSuU79.js"),__vite__mapDeps([6,7,8]),import.meta.url)):Ol(()=>Ds(()=>import("./D_n6ivnH.js"),__vite__mapDeps([9,7,10]),import.meta.url));return(f,p)=>(on(),On($e(h),d0(Zv({statusCode:$e(s),statusMessage:$e(i),description:$e(o),stack:$e(a)})),null,16))}},q2={key:0},Dy={__name:"nuxt-root",setup(t){const e=()=>null,n=ct(),s=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",s);en().beforeEach(c)}const r=!1;Tr(ma,Gf()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const i=Nc(),o=!1;Cv((c,u,h)=>{if(n.hooks.callHook("vue:error",c,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),SE(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>dr(c)),!1});const a=!1;return(c,u)=>(on(),On($f,{onResolve:$e(s)},{default:Lf(()=>[$e(o)?(on(),KC("div",q2)):$e(i)?(on(),On($e(W2),{key:1,error:$e(i)},null,8,["error"])):$e(a)?(on(),On($e(e),{key:2,context:$e(a)},null,8,["context"])):$e(r)?(on(),On(fC($e(r)),{key:3})):(on(),On($e($2),{key:4}))]),_:1},8,["onResolve"]))}};let My;{let t;My=async function(){var o,a;if(t)return t;const s=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?DA(Dy):OA(Dy),r=WR({vueApp:s});async function i(c){var u;await r.callHook("app:error",c),(u=r.payload).error||(u.error=Ir(c))}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)});try{await zR(r,P2)}catch(c){i(c)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(HR),await r.hooks.callHook("app:mounted",s),await Ti()}catch(c){i(c)}return s},t=My().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{fU as $,Je as A,Lf as B,eE as C,rU as D,QR as E,Uf as F,jt as G,NE as H,kt as I,Q2 as J,Gf as K,Z2 as L,Y2 as M,bc as N,bv as O,tU as P,z2 as Q,eU as R,$e as S,lA as T,er as U,lU as V,cU as W,TM as X,hU as Y,uU as Z,B2 as _,ct as a,J2 as a0,OC as a1,X2 as a2,td as b,Cm as c,tr as d,pa as e,iU as f,G2 as g,Mt as h,rS as i,kk as j,an as k,Lr as l,Kf as m,kc as n,Ff as o,uE as p,sU as q,wn as r,Yo as s,nU as t,en as u,KC as v,iR as w,on as x,Xv as y,m0 as z};
