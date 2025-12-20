function ox(i,d){for(var o=0;o<d.length;o++){const u=d[o];if(typeof u!="string"&&!Array.isArray(u)){for(const m in u)if(m!=="default"&&!(m in i)){const x=Object.getOwnPropertyDescriptor(u,m);x&&Object.defineProperty(i,m,x.get?x:{enumerable:!0,get:()=>u[m]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const x of m)if(x.type==="childList")for(const f of x.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function o(m){const x={};return m.integrity&&(x.integrity=m.integrity),m.referrerPolicy&&(x.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?x.credentials="include":m.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function u(m){if(m.ep)return;m.ep=!0;const x=o(m);fetch(m.href,x)}})();function cx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qa={exports:{}},Ir={},Za={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc;function mx(){if(cc)return ee;cc=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),S=Symbol.iterator;function A(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,D={};function T(b,F,Z){this.props=b,this.context=F,this.refs=D,this.updater=Z||K}T.prototype.isReactComponent={},T.prototype.setState=function(b,F){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,F,"setState")},T.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function $(){}$.prototype=T.prototype;function Q(b,F,Z){this.props=b,this.context=F,this.refs=D,this.updater=Z||K}var se=Q.prototype=new $;se.constructor=Q,J(se,T.prototype),se.isPureReactComponent=!0;var ne=Array.isArray,ge=Object.prototype.hasOwnProperty,Te={current:null},Ae={key:!0,ref:!0,__self:!0,__source:!0};function We(b,F,Z){var te,ae={},le=null,me=null;if(F!=null)for(te in F.ref!==void 0&&(me=F.ref),F.key!==void 0&&(le=""+F.key),F)ge.call(F,te)&&!Ae.hasOwnProperty(te)&&(ae[te]=F[te]);var oe=arguments.length-2;if(oe===1)ae.children=Z;else if(1<oe){for(var ve=Array(oe),et=0;et<oe;et++)ve[et]=arguments[et+2];ae.children=ve}if(b&&b.defaultProps)for(te in oe=b.defaultProps,oe)ae[te]===void 0&&(ae[te]=oe[te]);return{$$typeof:i,type:b,key:le,ref:me,props:ae,_owner:Te.current}}function it(b,F){return{$$typeof:i,type:b.type,key:F,ref:b.ref,props:b.props,_owner:b._owner}}function Qe(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function ut(b){var F={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Z){return F[Z]})}var re=/\/+/g;function De(b,F){return typeof b=="object"&&b!==null&&b.key!=null?ut(""+b.key):F.toString(36)}function _e(b,F,Z,te,ae){var le=typeof b;(le==="undefined"||le==="boolean")&&(b=null);var me=!1;if(b===null)me=!0;else switch(le){case"string":case"number":me=!0;break;case"object":switch(b.$$typeof){case i:case d:me=!0}}if(me)return me=b,ae=ae(me),b=te===""?"."+De(me,0):te,ne(ae)?(Z="",b!=null&&(Z=b.replace(re,"$&/")+"/"),_e(ae,F,Z,"",function(et){return et})):ae!=null&&(Qe(ae)&&(ae=it(ae,Z+(!ae.key||me&&me.key===ae.key?"":(""+ae.key).replace(re,"$&/")+"/")+b)),F.push(ae)),1;if(me=0,te=te===""?".":te+":",ne(b))for(var oe=0;oe<b.length;oe++){le=b[oe];var ve=te+De(le,oe);me+=_e(le,F,Z,ve,ae)}else if(ve=A(b),typeof ve=="function")for(b=ve.call(b),oe=0;!(le=b.next()).done;)le=le.value,ve=te+De(le,oe++),me+=_e(le,F,Z,ve,ae);else if(le==="object")throw F=String(b),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return me}function Ze(b,F,Z){if(b==null)return b;var te=[],ae=0;return _e(b,te,"","",function(le){return F.call(Z,le,ae++)}),te}function Ee(b){if(b._status===-1){var F=b._result;F=F(),F.then(function(Z){(b._status===0||b._status===-1)&&(b._status=1,b._result=Z)},function(Z){(b._status===0||b._status===-1)&&(b._status=2,b._result=Z)}),b._status===-1&&(b._status=0,b._result=F)}if(b._status===1)return b._result.default;throw b._result}var xe={current:null},I={transition:null},q={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:I,ReactCurrentOwner:Te};function L(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Ze,forEach:function(b,F,Z){Ze(b,function(){F.apply(this,arguments)},Z)},count:function(b){var F=0;return Ze(b,function(){F++}),F},toArray:function(b){return Ze(b,function(F){return F})||[]},only:function(b){if(!Qe(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ee.Component=T,ee.Fragment=o,ee.Profiler=m,ee.PureComponent=Q,ee.StrictMode=u,ee.Suspense=j,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ee.act=L,ee.cloneElement=function(b,F,Z){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var te=J({},b.props),ae=b.key,le=b.ref,me=b._owner;if(F!=null){if(F.ref!==void 0&&(le=F.ref,me=Te.current),F.key!==void 0&&(ae=""+F.key),b.type&&b.type.defaultProps)var oe=b.type.defaultProps;for(ve in F)ge.call(F,ve)&&!Ae.hasOwnProperty(ve)&&(te[ve]=F[ve]===void 0&&oe!==void 0?oe[ve]:F[ve])}var ve=arguments.length-2;if(ve===1)te.children=Z;else if(1<ve){oe=Array(ve);for(var et=0;et<ve;et++)oe[et]=arguments[et+2];te.children=oe}return{$$typeof:i,type:b.type,key:ae,ref:le,props:te,_owner:me}},ee.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:x,_context:b},b.Consumer=b},ee.createElement=We,ee.createFactory=function(b){var F=We.bind(null,b);return F.type=b,F},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:g,render:b}},ee.isValidElement=Qe,ee.lazy=function(b){return{$$typeof:k,_payload:{_status:-1,_result:b},_init:Ee}},ee.memo=function(b,F){return{$$typeof:C,type:b,compare:F===void 0?null:F}},ee.startTransition=function(b){var F=I.transition;I.transition={};try{b()}finally{I.transition=F}},ee.unstable_act=L,ee.useCallback=function(b,F){return xe.current.useCallback(b,F)},ee.useContext=function(b){return xe.current.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b){return xe.current.useDeferredValue(b)},ee.useEffect=function(b,F){return xe.current.useEffect(b,F)},ee.useId=function(){return xe.current.useId()},ee.useImperativeHandle=function(b,F,Z){return xe.current.useImperativeHandle(b,F,Z)},ee.useInsertionEffect=function(b,F){return xe.current.useInsertionEffect(b,F)},ee.useLayoutEffect=function(b,F){return xe.current.useLayoutEffect(b,F)},ee.useMemo=function(b,F){return xe.current.useMemo(b,F)},ee.useReducer=function(b,F,Z){return xe.current.useReducer(b,F,Z)},ee.useRef=function(b){return xe.current.useRef(b)},ee.useState=function(b){return xe.current.useState(b)},ee.useSyncExternalStore=function(b,F,Z){return xe.current.useSyncExternalStore(b,F,Z)},ee.useTransition=function(){return xe.current.useTransition()},ee.version="18.3.1",ee}var mc;function ol(){return mc||(mc=1,Za.exports=mx()),Za.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function ux(){if(uc)return Ir;uc=1;var i=ol(),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function f(g,j,C){var k,S={},A=null,K=null;C!==void 0&&(A=""+C),j.key!==void 0&&(A=""+j.key),j.ref!==void 0&&(K=j.ref);for(k in j)u.call(j,k)&&!x.hasOwnProperty(k)&&(S[k]=j[k]);if(g&&g.defaultProps)for(k in j=g.defaultProps,j)S[k]===void 0&&(S[k]=j[k]);return{$$typeof:d,type:g,key:A,ref:K,props:S,_owner:m.current}}return Ir.Fragment=o,Ir.jsx=f,Ir.jsxs=f,Ir}var xc;function xx(){return xc||(xc=1,Qa.exports=ux()),Qa.exports}var e=xx(),R=ol();const ns=cx(R),Ic=ox({__proto__:null,default:ns},[R]);var ti={},el={exports:{}},Xe={},tl={exports:{}},sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function hx(){return hc||(hc=1,function(i){function d(I,q){var L=I.length;I.push(q);e:for(;0<L;){var b=L-1>>>1,F=I[b];if(0<m(F,q))I[b]=q,I[L]=F,L=b;else break e}}function o(I){return I.length===0?null:I[0]}function u(I){if(I.length===0)return null;var q=I[0],L=I.pop();if(L!==q){I[0]=L;e:for(var b=0,F=I.length,Z=F>>>1;b<Z;){var te=2*(b+1)-1,ae=I[te],le=te+1,me=I[le];if(0>m(ae,L))le<F&&0>m(me,ae)?(I[b]=me,I[le]=L,b=le):(I[b]=ae,I[te]=L,b=te);else if(le<F&&0>m(me,L))I[b]=me,I[le]=L,b=le;else break e}}return q}function m(I,q){var L=I.sortIndex-q.sortIndex;return L!==0?L:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;i.unstable_now=function(){return x.now()}}else{var f=Date,g=f.now();i.unstable_now=function(){return f.now()-g}}var j=[],C=[],k=1,S=null,A=3,K=!1,J=!1,D=!1,T=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function se(I){for(var q=o(C);q!==null;){if(q.callback===null)u(C);else if(q.startTime<=I)u(C),q.sortIndex=q.expirationTime,d(j,q);else break;q=o(C)}}function ne(I){if(D=!1,se(I),!J)if(o(j)!==null)J=!0,Ee(ge);else{var q=o(C);q!==null&&xe(ne,q.startTime-I)}}function ge(I,q){J=!1,D&&(D=!1,$(We),We=-1),K=!0;var L=A;try{for(se(q),S=o(j);S!==null&&(!(S.expirationTime>q)||I&&!ut());){var b=S.callback;if(typeof b=="function"){S.callback=null,A=S.priorityLevel;var F=b(S.expirationTime<=q);q=i.unstable_now(),typeof F=="function"?S.callback=F:S===o(j)&&u(j),se(q)}else u(j);S=o(j)}if(S!==null)var Z=!0;else{var te=o(C);te!==null&&xe(ne,te.startTime-q),Z=!1}return Z}finally{S=null,A=L,K=!1}}var Te=!1,Ae=null,We=-1,it=5,Qe=-1;function ut(){return!(i.unstable_now()-Qe<it)}function re(){if(Ae!==null){var I=i.unstable_now();Qe=I;var q=!0;try{q=Ae(!0,I)}finally{q?De():(Te=!1,Ae=null)}}else Te=!1}var De;if(typeof Q=="function")De=function(){Q(re)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ze=_e.port2;_e.port1.onmessage=re,De=function(){Ze.postMessage(null)}}else De=function(){T(re,0)};function Ee(I){Ae=I,Te||(Te=!0,De())}function xe(I,q){We=T(function(){I(i.unstable_now())},q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(I){I.callback=null},i.unstable_continueExecution=function(){J||K||(J=!0,Ee(ge))},i.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<I?Math.floor(1e3/I):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_getFirstCallbackNode=function(){return o(j)},i.unstable_next=function(I){switch(A){case 1:case 2:case 3:var q=3;break;default:q=A}var L=A;A=q;try{return I()}finally{A=L}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=A;A=I;try{return q()}finally{A=L}},i.unstable_scheduleCallback=function(I,q,L){var b=i.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?b+L:b):L=b,I){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,I={id:k++,callback:q,priorityLevel:I,startTime:L,expirationTime:F,sortIndex:-1},L>b?(I.sortIndex=L,d(C,I),o(j)===null&&I===o(C)&&(D?($(We),We=-1):D=!0,xe(ne,L-b))):(I.sortIndex=F,d(j,I),J||K||(J=!0,Ee(ge))),I},i.unstable_shouldYield=ut,i.unstable_wrapCallback=function(I){var q=A;return function(){var L=A;A=q;try{return I.apply(this,arguments)}finally{A=L}}}}(sl)),sl}var pc;function px(){return pc||(pc=1,tl.exports=hx()),tl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function fx(){if(fc)return Xe;fc=1;var i=ol(),d=px();function o(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)s+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function x(t,s){f(t,s),f(t+"Capture",s)}function f(t,s){for(m[t]=s,t=0;t<s.length;t++)u.add(s[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},S={};function A(t){return j.call(S,t)?!0:j.call(k,t)?!1:C.test(t)?S[t]=!0:(k[t]=!0,!1)}function K(t,s,r,n){if(r!==null&&r.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J(t,s,r,n){if(s===null||typeof s>"u"||K(t,s,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function D(t,s,r,n,a,l,c){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=t,this.type=s,this.sanitizeURL=l,this.removeEmptyString=c}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new D(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];T[s]=new D(s,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new D(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new D(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new D(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new D(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new D(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new D(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new D(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function Q(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace($,Q);T[s]=new D(s,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace($,Q);T[s]=new D(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace($,Q);T[s]=new D(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new D(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new D(t,1,!1,t.toLowerCase(),null,!0,!0)});function se(t,s,r,n){var a=T.hasOwnProperty(s)?T[s]:null;(a!==null?a.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(J(s,r,a,n)&&(r=null),n||a===null?A(s)&&(r===null?t.removeAttribute(s):t.setAttribute(s,""+r)):a.mustUseProperty?t[a.propertyName]=r===null?a.type===3?!1:"":r:(s=a.attributeName,n=a.attributeNamespace,r===null?t.removeAttribute(s):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?t.setAttributeNS(n,s,r):t.setAttribute(s,r))))}var ne=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),Te=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),We=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),Qe=Symbol.for("react.provider"),ut=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),De=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),I=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,b;function F(t){if(b===void 0)try{throw Error()}catch(r){var s=r.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+t}var Z=!1;function te(t,s){if(!t||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(w){var n=w}Reflect.construct(t,[],s)}else{try{s.call()}catch(w){n=w}t.call(s.prototype)}else{try{throw Error()}catch(w){n=w}t()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),l=n.stack.split(`
`),c=a.length-1,h=l.length-1;1<=c&&0<=h&&a[c]!==l[h];)h--;for(;1<=c&&0<=h;c--,h--)if(a[c]!==l[h]){if(c!==1||h!==1)do if(c--,h--,0>h||a[c]!==l[h]){var p=`
`+a[c].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=c&&0<=h);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?F(t):""}function ae(t){switch(t.tag){case 5:return F(t.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ae:return"Fragment";case Te:return"Portal";case it:return"Profiler";case We:return"StrictMode";case De:return"Suspense";case _e:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ut:return(t.displayName||"Context")+".Consumer";case Qe:return(t._context.displayName||"Context")+".Provider";case re:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ze:return s=t.displayName||null,s!==null?s:le(t.type)||"Memo";case Ee:s=t._payload,t=t._init;try{return le(t(s))}catch{}}return null}function me(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(s);case 8:return s===We?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(t){var s=ve(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),n=""+t[s];if(!t.hasOwnProperty(s)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return a.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(t,s,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function qr(t){t._valueTracker||(t._valueTracker=et(t))}function pl(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var r=s.getValue(),n="";return t&&(n=ve(t)?t.checked?"true":"false":t.value),t=n,t!==r?(s.setValue(t),!0):!1}function Vr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ii(t,s){var r=s.checked;return L({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function fl(t,s){var r=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;r=oe(s.value!=null?s.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vl(t,s){s=s.checked,s!=null&&se(t,"checked",s,!1)}function ai(t,s){vl(t,s);var r=oe(s.value),n=s.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?li(t,s.type,r):s.hasOwnProperty("defaultValue")&&li(t,s.type,oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function bl(t,s,r){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,r||s===t.value||(t.value=s),t.defaultValue=s}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function li(t,s,r){(s!=="number"||Vr(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Xs=Array.isArray;function Ns(t,s,r,n){if(t=t.options,s){s={};for(var a=0;a<r.length;a++)s["$"+r[a]]=!0;for(r=0;r<t.length;r++)a=s.hasOwnProperty("$"+t[r].value),t[r].selected!==a&&(t[r].selected=a),a&&n&&(t[r].defaultSelected=!0)}else{for(r=""+oe(r),s=null,a=0;a<t.length;a++){if(t[a].value===r){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}s!==null||t[a].disabled||(s=t[a])}s!==null&&(s.selected=!0)}}function di(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(o(91));return L({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gl(t,s){var r=s.value;if(r==null){if(r=s.children,s=s.defaultValue,r!=null){if(s!=null)throw Error(o(92));if(Xs(r)){if(1<r.length)throw Error(o(93));r=r[0]}s=r}s==null&&(s=""),r=s}t._wrapperState={initialValue:oe(r)}}function jl(t,s){var r=oe(s.value),n=oe(s.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),s.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function yl(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function Nl(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?Nl(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gr,wl=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,r,n,a){MSApp.execUnsafeLocalFunction(function(){return t(s,r,n,a)})}:t}(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Gr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function Qs(t,s){if(s){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=s;return}}t.textContent=s}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xm=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){xm.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),Zs[s]=Zs[t]})});function Cl(t,s,r){return s==null||typeof s=="boolean"||s===""?"":r||typeof s!="number"||s===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+s).trim():s+"px"}function Sl(t,s){t=t.style;for(var r in s)if(s.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Cl(r,s[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,a):t[r]=a}}var hm=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ci(t,s){if(s){if(hm[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(o(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(o(61))}if(s.style!=null&&typeof s.style!="object")throw Error(o(62))}}function mi(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function xi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hi=null,ws=null,Cs=null;function kl(t){if(t=yr(t)){if(typeof hi!="function")throw Error(o(280));var s=t.stateNode;s&&(s=fn(s),hi(t.stateNode,t.type,s))}}function El(t){ws?Cs?Cs.push(t):Cs=[t]:ws=t}function Fl(){if(ws){var t=ws,s=Cs;if(Cs=ws=null,kl(t),s)for(t=0;t<s.length;t++)kl(s[t])}}function Pl(t,s){return t(s)}function Tl(){}var pi=!1;function Ol(t,s,r){if(pi)return t(s,r);pi=!0;try{return Pl(t,s,r)}finally{pi=!1,(ws!==null||Cs!==null)&&(Tl(),Fl())}}function er(t,s){var r=t.stateNode;if(r===null)return null;var n=fn(r);if(n===null)return null;r=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(o(231,s,typeof r));return r}var fi=!1;if(g)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){fi=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{fi=!1}function pm(t,s,r,n,a,l,c,h,p){var w=Array.prototype.slice.call(arguments,3);try{s.apply(r,w)}catch(P){this.onError(P)}}var sr=!1,Kr=null,Yr=!1,vi=null,fm={onError:function(t){sr=!0,Kr=t}};function vm(t,s,r,n,a,l,c,h,p){sr=!1,Kr=null,pm.apply(fm,arguments)}function bm(t,s,r,n,a,l,c,h,p){if(vm.apply(this,arguments),sr){if(sr){var w=Kr;sr=!1,Kr=null}else throw Error(o(198));Yr||(Yr=!0,vi=w)}}function is(t){var s=t,r=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,s.flags&4098&&(r=s.return),t=s.return;while(t)}return s.tag===3?r:null}function Rl(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function Hl(t){if(is(t)!==t)throw Error(o(188))}function gm(t){var s=t.alternate;if(!s){if(s=is(t),s===null)throw Error(o(188));return s!==t?null:t}for(var r=t,n=s;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Hl(a),t;if(l===n)return Hl(a),s;l=l.sibling}throw Error(o(188))}if(r.return!==n.return)r=a,n=l;else{for(var c=!1,h=a.child;h;){if(h===r){c=!0,r=a,n=l;break}if(h===n){c=!0,n=a,r=l;break}h=h.sibling}if(!c){for(h=l.child;h;){if(h===r){c=!0,r=l,n=a;break}if(h===n){c=!0,n=l,r=a;break}h=h.sibling}if(!c)throw Error(o(189))}}if(r.alternate!==n)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?t:s}function Al(t){return t=gm(t),t!==null?Ml(t):null}function Ml(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=Ml(t);if(s!==null)return s;t=t.sibling}return null}var Il=d.unstable_scheduleCallback,Dl=d.unstable_cancelCallback,jm=d.unstable_shouldYield,ym=d.unstable_requestPaint,we=d.unstable_now,Nm=d.unstable_getCurrentPriorityLevel,bi=d.unstable_ImmediatePriority,_l=d.unstable_UserBlockingPriority,Jr=d.unstable_NormalPriority,wm=d.unstable_LowPriority,Ll=d.unstable_IdlePriority,$r=null,jt=null;function Cm(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot($r,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Em,Sm=Math.log,km=Math.LN2;function Em(t){return t>>>=0,t===0?32:31-(Sm(t)/km|0)|0}var Xr=64,Qr=4194304;function rr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zr(t,s){var r=t.pendingLanes;if(r===0)return 0;var n=0,a=t.suspendedLanes,l=t.pingedLanes,c=r&268435455;if(c!==0){var h=c&~a;h!==0?n=rr(h):(l&=c,l!==0&&(n=rr(l)))}else c=r&~a,c!==0?n=rr(c):l!==0&&(n=rr(l));if(n===0)return 0;if(s!==0&&s!==n&&!(s&a)&&(a=n&-n,l=s&-s,a>=l||a===16&&(l&4194240)!==0))return s;if(n&4&&(n|=r&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=n;0<s;)r=31-xt(s),a=1<<r,n|=t[r],s&=~a;return n}function Fm(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pm(t,s){for(var r=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,l=t.pendingLanes;0<l;){var c=31-xt(l),h=1<<c,p=a[c];p===-1?(!(h&r)||h&n)&&(a[c]=Fm(h,s)):p<=s&&(t.expiredLanes|=h),l&=~h}}function gi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ul(){var t=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),t}function ji(t){for(var s=[],r=0;31>r;r++)s.push(t);return s}function nr(t,s,r){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-xt(s),t[s]=r}function Tm(t,s){var r=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var a=31-xt(r),l=1<<a;s[a]=0,n[a]=-1,t[a]=-1,r&=~l}}function yi(t,s){var r=t.entangledLanes|=s;for(t=t.entanglements;r;){var n=31-xt(r),a=1<<n;a&s|t[n]&s&&(t[n]|=s),r&=~a}}var ce=0;function zl(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bl,Ni,Wl,ql,Vl,wi=!1,en=[],At=null,Mt=null,It=null,ir=new Map,ar=new Map,Dt=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(t,s){switch(t){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":ir.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(s.pointerId)}}function lr(t,s,r,n,a,l){return t===null||t.nativeEvent!==l?(t={blockedOn:s,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},s!==null&&(s=yr(s),s!==null&&Ni(s)),t):(t.eventSystemFlags|=n,s=t.targetContainers,a!==null&&s.indexOf(a)===-1&&s.push(a),t)}function Rm(t,s,r,n,a){switch(s){case"focusin":return At=lr(At,t,s,r,n,a),!0;case"dragenter":return Mt=lr(Mt,t,s,r,n,a),!0;case"mouseover":return It=lr(It,t,s,r,n,a),!0;case"pointerover":var l=a.pointerId;return ir.set(l,lr(ir.get(l)||null,t,s,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,ar.set(l,lr(ar.get(l)||null,t,s,r,n,a)),!0}return!1}function Kl(t){var s=as(t.target);if(s!==null){var r=is(s);if(r!==null){if(s=r.tag,s===13){if(s=Rl(r),s!==null){t.blockedOn=s,Vl(t.priority,function(){Wl(r)});return}}else if(s===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tn(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var r=Si(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);ui=n,r.target.dispatchEvent(n),ui=null}else return s=yr(r),s!==null&&Ni(s),t.blockedOn=r,!1;s.shift()}return!0}function Yl(t,s,r){tn(t)&&r.delete(s)}function Hm(){wi=!1,At!==null&&tn(At)&&(At=null),Mt!==null&&tn(Mt)&&(Mt=null),It!==null&&tn(It)&&(It=null),ir.forEach(Yl),ar.forEach(Yl)}function dr(t,s){t.blockedOn===s&&(t.blockedOn=null,wi||(wi=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Hm)))}function or(t){function s(a){return dr(a,t)}if(0<en.length){dr(en[0],t);for(var r=1;r<en.length;r++){var n=en[r];n.blockedOn===t&&(n.blockedOn=null)}}for(At!==null&&dr(At,t),Mt!==null&&dr(Mt,t),It!==null&&dr(It,t),ir.forEach(s),ar.forEach(s),r=0;r<Dt.length;r++)n=Dt[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Dt.length&&(r=Dt[0],r.blockedOn===null);)Kl(r),r.blockedOn===null&&Dt.shift()}var Ss=ne.ReactCurrentBatchConfig,sn=!0;function Am(t,s,r,n){var a=ce,l=Ss.transition;Ss.transition=null;try{ce=1,Ci(t,s,r,n)}finally{ce=a,Ss.transition=l}}function Mm(t,s,r,n){var a=ce,l=Ss.transition;Ss.transition=null;try{ce=4,Ci(t,s,r,n)}finally{ce=a,Ss.transition=l}}function Ci(t,s,r,n){if(sn){var a=Si(t,s,r,n);if(a===null)Bi(t,s,n,rn,r),Gl(t,n);else if(Rm(a,t,s,r,n))n.stopPropagation();else if(Gl(t,n),s&4&&-1<Om.indexOf(t)){for(;a!==null;){var l=yr(a);if(l!==null&&Bl(l),l=Si(t,s,r,n),l===null&&Bi(t,s,n,rn,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else Bi(t,s,n,null,r)}}var rn=null;function Si(t,s,r,n){if(rn=null,t=xi(n),t=as(t),t!==null)if(s=is(t),s===null)t=null;else if(r=s.tag,r===13){if(t=Rl(s),t!==null)return t;t=null}else if(r===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return rn=t,null}function Jl(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nm()){case bi:return 1;case _l:return 4;case Jr:case wm:return 16;case Ll:return 536870912;default:return 16}default:return 16}}var _t=null,ki=null,nn=null;function $l(){if(nn)return nn;var t,s=ki,r=s.length,n,a="value"in _t?_t.value:_t.textContent,l=a.length;for(t=0;t<r&&s[t]===a[t];t++);var c=r-t;for(n=1;n<=c&&s[r-n]===a[l-n];n++);return nn=a.slice(t,1<n?1-n:void 0)}function an(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function ln(){return!0}function Xl(){return!1}function tt(t){function s(r,n,a,l,c){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(r=t[h],this[h]=r?r(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ln:Xl,this.isPropagationStopped=Xl,this}return L(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ln)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ln)},persist:function(){},isPersistent:ln}),s}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=tt(ks),cr=L({},ks,{view:0,detail:0}),Im=tt(cr),Fi,Pi,mr,dn=L({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mr&&(mr&&t.type==="mousemove"?(Fi=t.screenX-mr.screenX,Pi=t.screenY-mr.screenY):Pi=Fi=0,mr=t),Fi)},movementY:function(t){return"movementY"in t?t.movementY:Pi}}),Ql=tt(dn),Dm=L({},dn,{dataTransfer:0}),_m=tt(Dm),Lm=L({},cr,{relatedTarget:0}),Ti=tt(Lm),Um=L({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),zm=tt(Um),Bm=L({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wm=tt(Bm),qm=L({},ks,{data:0}),Zl=tt(qm),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Km[t])?!!s[t]:!1}function Oi(){return Ym}var Jm=L({},cr,{key:function(t){if(t.key){var s=Vm[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=an(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(t){return t.type==="keypress"?an(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?an(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$m=tt(Jm),Xm=L({},dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=tt(Xm),Qm=L({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),Zm=tt(Qm),eu=L({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),tu=tt(eu),su=L({},dn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ru=tt(su),nu=[9,13,27,32],Ri=g&&"CompositionEvent"in window,ur=null;g&&"documentMode"in document&&(ur=document.documentMode);var iu=g&&"TextEvent"in window&&!ur,td=g&&(!Ri||ur&&8<ur&&11>=ur),sd=" ",rd=!1;function nd(t,s){switch(t){case"keyup":return nu.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function au(t,s){switch(t){case"compositionend":return id(s);case"keypress":return s.which!==32?null:(rd=!0,sd);case"textInput":return t=s.data,t===sd&&rd?null:t;default:return null}}function lu(t,s){if(Es)return t==="compositionend"||!Ri&&nd(t,s)?(t=$l(),nn=ki=_t=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return td&&s.locale!=="ko"?null:s.data;default:return null}}var du={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!du[t.type]:s==="textarea"}function ld(t,s,r,n){El(n),s=xn(s,"onChange"),0<s.length&&(r=new Ei("onChange","change",null,r,n),t.push({event:r,listeners:s}))}var xr=null,hr=null;function ou(t){Sd(t,0)}function on(t){var s=Rs(t);if(pl(s))return t}function cu(t,s){if(t==="change")return s}var dd=!1;if(g){var Hi;if(g){var Ai="oninput"in document;if(!Ai){var od=document.createElement("div");od.setAttribute("oninput","return;"),Ai=typeof od.oninput=="function"}Hi=Ai}else Hi=!1;dd=Hi&&(!document.documentMode||9<document.documentMode)}function cd(){xr&&(xr.detachEvent("onpropertychange",md),hr=xr=null)}function md(t){if(t.propertyName==="value"&&on(hr)){var s=[];ld(s,hr,t,xi(t)),Ol(ou,s)}}function mu(t,s,r){t==="focusin"?(cd(),xr=s,hr=r,xr.attachEvent("onpropertychange",md)):t==="focusout"&&cd()}function uu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return on(hr)}function xu(t,s){if(t==="click")return on(s)}function hu(t,s){if(t==="input"||t==="change")return on(s)}function pu(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var ht=typeof Object.is=="function"?Object.is:pu;function pr(t,s){if(ht(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var r=Object.keys(t),n=Object.keys(s);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!j.call(s,a)||!ht(t[a],s[a]))return!1}return!0}function ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,s){var r=ud(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=s&&n>=s)return{node:r,offset:s-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ud(r)}}function hd(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?hd(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function pd(){for(var t=window,s=Vr();s instanceof t.HTMLIFrameElement;){try{var r=typeof s.contentWindow.location.href=="string"}catch{r=!1}if(r)t=s.contentWindow;else break;s=Vr(t.document)}return s}function Mi(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function fu(t){var s=pd(),r=t.focusedElem,n=t.selectionRange;if(s!==r&&r&&r.ownerDocument&&hd(r.ownerDocument.documentElement,r)){if(n!==null&&Mi(r)){if(s=n.start,t=n.end,t===void 0&&(t=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(t,r.value.length);else if(t=(s=r.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!t.extend&&l>n&&(a=n,n=l,l=a),a=xd(r,l);var c=xd(r,n);a&&c&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==c.node||t.focusOffset!==c.offset)&&(s=s.createRange(),s.setStart(a.node,a.offset),t.removeAllRanges(),l>n?(t.addRange(s),t.extend(c.node,c.offset)):(s.setEnd(c.node,c.offset),t.addRange(s)))}}for(s=[],t=r;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)t=s[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vu=g&&"documentMode"in document&&11>=document.documentMode,Fs=null,Ii=null,fr=null,Di=!1;function fd(t,s,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Di||Fs==null||Fs!==Vr(n)||(n=Fs,"selectionStart"in n&&Mi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fr&&pr(fr,n)||(fr=n,n=xn(Ii,"onSelect"),0<n.length&&(s=new Ei("onSelect","select",null,s,r),t.push({event:s,listeners:n}),s.target=Fs)))}function cn(t,s){var r={};return r[t.toLowerCase()]=s.toLowerCase(),r["Webkit"+t]="webkit"+s,r["Moz"+t]="moz"+s,r}var Ps={animationend:cn("Animation","AnimationEnd"),animationiteration:cn("Animation","AnimationIteration"),animationstart:cn("Animation","AnimationStart"),transitionend:cn("Transition","TransitionEnd")},_i={},vd={};g&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function mn(t){if(_i[t])return _i[t];if(!Ps[t])return t;var s=Ps[t],r;for(r in s)if(s.hasOwnProperty(r)&&r in vd)return _i[t]=s[r];return t}var bd=mn("animationend"),gd=mn("animationiteration"),jd=mn("animationstart"),yd=mn("transitionend"),Nd=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(t,s){Nd.set(t,s),x(s,[t])}for(var Li=0;Li<wd.length;Li++){var Ui=wd[Li],bu=Ui.toLowerCase(),gu=Ui[0].toUpperCase()+Ui.slice(1);Lt(bu,"on"+gu)}Lt(bd,"onAnimationEnd"),Lt(gd,"onAnimationIteration"),Lt(jd,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(yd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ju=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Cd(t,s,r){var n=t.type||"unknown-event";t.currentTarget=r,bm(n,s,void 0,t),t.currentTarget=null}function Sd(t,s){s=(s&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],a=n.event;n=n.listeners;e:{var l=void 0;if(s)for(var c=n.length-1;0<=c;c--){var h=n[c],p=h.instance,w=h.currentTarget;if(h=h.listener,p!==l&&a.isPropagationStopped())break e;Cd(a,h,w),l=p}else for(c=0;c<n.length;c++){if(h=n[c],p=h.instance,w=h.currentTarget,h=h.listener,p!==l&&a.isPropagationStopped())break e;Cd(a,h,w),l=p}}}if(Yr)throw t=vi,Yr=!1,vi=null,t}function he(t,s){var r=s[Yi];r===void 0&&(r=s[Yi]=new Set);var n=t+"__bubble";r.has(n)||(kd(s,t,2,!1),r.add(n))}function zi(t,s,r){var n=0;s&&(n|=4),kd(r,t,n,s)}var un="_reactListening"+Math.random().toString(36).slice(2);function br(t){if(!t[un]){t[un]=!0,u.forEach(function(r){r!=="selectionchange"&&(ju.has(r)||zi(r,!1,t),zi(r,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[un]||(s[un]=!0,zi("selectionchange",!1,s))}}function kd(t,s,r,n){switch(Jl(s)){case 1:var a=Am;break;case 4:a=Mm;break;default:a=Ci}r=a.bind(null,s,r,t),a=void 0,!fi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(s,r,{capture:!0,passive:a}):t.addEventListener(s,r,!0):a!==void 0?t.addEventListener(s,r,{passive:a}):t.addEventListener(s,r,!1)}function Bi(t,s,r,n,a){var l=n;if(!(s&1)&&!(s&2)&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var h=n.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(c===4)for(c=n.return;c!==null;){var p=c.tag;if((p===3||p===4)&&(p=c.stateNode.containerInfo,p===a||p.nodeType===8&&p.parentNode===a))return;c=c.return}for(;h!==null;){if(c=as(h),c===null)return;if(p=c.tag,p===5||p===6){n=l=c;continue e}h=h.parentNode}}n=n.return}Ol(function(){var w=l,P=xi(r),O=[];e:{var E=Nd.get(t);if(E!==void 0){var _=Ei,z=t;switch(t){case"keypress":if(an(r)===0)break e;case"keydown":case"keyup":_=$m;break;case"focusin":z="focus",_=Ti;break;case"focusout":z="blur",_=Ti;break;case"beforeblur":case"afterblur":_=Ti;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ql;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=_m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Zm;break;case bd:case gd:case jd:_=zm;break;case yd:_=tu;break;case"scroll":_=Im;break;case"wheel":_=ru;break;case"copy":case"cut":case"paste":_=Wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ed}var B=(s&4)!==0,Ce=!B&&t==="scroll",y=B?E!==null?E+"Capture":null:E;B=[];for(var v=w,N;v!==null;){N=v;var H=N.stateNode;if(N.tag===5&&H!==null&&(N=H,y!==null&&(H=er(v,y),H!=null&&B.push(gr(v,H,N)))),Ce)break;v=v.return}0<B.length&&(E=new _(E,z,null,r,P),O.push({event:E,listeners:B}))}}if(!(s&7)){e:{if(E=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",E&&r!==ui&&(z=r.relatedTarget||r.fromElement)&&(as(z)||z[St]))break e;if((_||E)&&(E=P.window===P?P:(E=P.ownerDocument)?E.defaultView||E.parentWindow:window,_?(z=r.relatedTarget||r.toElement,_=w,z=z?as(z):null,z!==null&&(Ce=is(z),z!==Ce||z.tag!==5&&z.tag!==6)&&(z=null)):(_=null,z=w),_!==z)){if(B=Ql,H="onMouseLeave",y="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(B=ed,H="onPointerLeave",y="onPointerEnter",v="pointer"),Ce=_==null?E:Rs(_),N=z==null?E:Rs(z),E=new B(H,v+"leave",_,r,P),E.target=Ce,E.relatedTarget=N,H=null,as(P)===w&&(B=new B(y,v+"enter",z,r,P),B.target=N,B.relatedTarget=Ce,H=B),Ce=H,_&&z)t:{for(B=_,y=z,v=0,N=B;N;N=Ts(N))v++;for(N=0,H=y;H;H=Ts(H))N++;for(;0<v-N;)B=Ts(B),v--;for(;0<N-v;)y=Ts(y),N--;for(;v--;){if(B===y||y!==null&&B===y.alternate)break t;B=Ts(B),y=Ts(y)}B=null}else B=null;_!==null&&Ed(O,E,_,B,!1),z!==null&&Ce!==null&&Ed(O,Ce,z,B,!0)}}e:{if(E=w?Rs(w):window,_=E.nodeName&&E.nodeName.toLowerCase(),_==="select"||_==="input"&&E.type==="file")var W=cu;else if(ad(E))if(dd)W=hu;else{W=uu;var V=mu}else(_=E.nodeName)&&_.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(W=xu);if(W&&(W=W(t,w))){ld(O,W,r,P);break e}V&&V(t,E,w),t==="focusout"&&(V=E._wrapperState)&&V.controlled&&E.type==="number"&&li(E,"number",E.value)}switch(V=w?Rs(w):window,t){case"focusin":(ad(V)||V.contentEditable==="true")&&(Fs=V,Ii=w,fr=null);break;case"focusout":fr=Ii=Fs=null;break;case"mousedown":Di=!0;break;case"contextmenu":case"mouseup":case"dragend":Di=!1,fd(O,r,P);break;case"selectionchange":if(vu)break;case"keydown":case"keyup":fd(O,r,P)}var G;if(Ri)e:{switch(t){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Es?nd(t,r)&&(Y="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Y="onCompositionStart");Y&&(td&&r.locale!=="ko"&&(Es||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Es&&(G=$l()):(_t=P,ki="value"in _t?_t.value:_t.textContent,Es=!0)),V=xn(w,Y),0<V.length&&(Y=new Zl(Y,t,null,r,P),O.push({event:Y,listeners:V}),G?Y.data=G:(G=id(r),G!==null&&(Y.data=G)))),(G=iu?au(t,r):lu(t,r))&&(w=xn(w,"onBeforeInput"),0<w.length&&(P=new Zl("onBeforeInput","beforeinput",null,r,P),O.push({event:P,listeners:w}),P.data=G))}Sd(O,s)})}function gr(t,s,r){return{instance:t,listener:s,currentTarget:r}}function xn(t,s){for(var r=s+"Capture",n=[];t!==null;){var a=t,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=er(t,r),l!=null&&n.unshift(gr(t,l,a)),l=er(t,s),l!=null&&n.push(gr(t,l,a))),t=t.return}return n}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ed(t,s,r,n,a){for(var l=s._reactName,c=[];r!==null&&r!==n;){var h=r,p=h.alternate,w=h.stateNode;if(p!==null&&p===n)break;h.tag===5&&w!==null&&(h=w,a?(p=er(r,l),p!=null&&c.unshift(gr(r,p,h))):a||(p=er(r,l),p!=null&&c.push(gr(r,p,h)))),r=r.return}c.length!==0&&t.push({event:s,listeners:c})}var yu=/\r\n?/g,Nu=/\u0000|\uFFFD/g;function Fd(t){return(typeof t=="string"?t:""+t).replace(yu,`
`).replace(Nu,"")}function hn(t,s,r){if(s=Fd(s),Fd(t)!==s&&r)throw Error(o(425))}function pn(){}var Wi=null,qi=null;function Vi(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,wu=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Cu=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(Su)}:Gi;function Su(t){setTimeout(function(){throw t})}function Ki(t,s){var r=s,n=0;do{var a=r.nextSibling;if(t.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){t.removeChild(a),or(s);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);or(s)}function Ut(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function Td(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(s===0)return t;s--}else r==="/$"&&s++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),yt="__reactFiber$"+Os,jr="__reactProps$"+Os,St="__reactContainer$"+Os,Yi="__reactEvents$"+Os,ku="__reactListeners$"+Os,Eu="__reactHandles$"+Os;function as(t){var s=t[yt];if(s)return s;for(var r=t.parentNode;r;){if(s=r[St]||r[yt]){if(r=s.alternate,s.child!==null||r!==null&&r.child!==null)for(t=Td(t);t!==null;){if(r=t[yt])return r;t=Td(t)}return s}t=r,r=t.parentNode}return null}function yr(t){return t=t[yt]||t[St],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function fn(t){return t[jr]||null}var Ji=[],Hs=-1;function zt(t){return{current:t}}function pe(t){0>Hs||(t.current=Ji[Hs],Ji[Hs]=null,Hs--)}function ue(t,s){Hs++,Ji[Hs]=t.current,t.current=s}var Bt={},Le=zt(Bt),Ge=zt(!1),ls=Bt;function As(t,s){var r=t.type.contextTypes;if(!r)return Bt;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=s[l];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=a),a}function Ke(t){return t=t.childContextTypes,t!=null}function vn(){pe(Ge),pe(Le)}function Od(t,s,r){if(Le.current!==Bt)throw Error(o(168));ue(Le,s),ue(Ge,r)}function Rd(t,s,r){var n=t.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in s))throw Error(o(108,me(t)||"Unknown",a));return L({},r,n)}function bn(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bt,ls=Le.current,ue(Le,t),ue(Ge,Ge.current),!0}function Hd(t,s,r){var n=t.stateNode;if(!n)throw Error(o(169));r?(t=Rd(t,s,ls),n.__reactInternalMemoizedMergedChildContext=t,pe(Ge),pe(Le),ue(Le,t)):pe(Ge),ue(Ge,r)}var kt=null,gn=!1,$i=!1;function Ad(t){kt===null?kt=[t]:kt.push(t)}function Fu(t){gn=!0,Ad(t)}function Wt(){if(!$i&&kt!==null){$i=!0;var t=0,s=ce;try{var r=kt;for(ce=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}kt=null,gn=!1}catch(a){throw kt!==null&&(kt=kt.slice(t+1)),Il(bi,Wt),a}finally{ce=s,$i=!1}}return null}var Ms=[],Is=0,jn=null,yn=0,at=[],lt=0,ds=null,Et=1,Ft="";function os(t,s){Ms[Is++]=yn,Ms[Is++]=jn,jn=t,yn=s}function Md(t,s,r){at[lt++]=Et,at[lt++]=Ft,at[lt++]=ds,ds=t;var n=Et;t=Ft;var a=32-xt(n)-1;n&=~(1<<a),r+=1;var l=32-xt(s)+a;if(30<l){var c=a-a%5;l=(n&(1<<c)-1).toString(32),n>>=c,a-=c,Et=1<<32-xt(s)+a|r<<a|n,Ft=l+t}else Et=1<<l|r<<a|n,Ft=t}function Xi(t){t.return!==null&&(os(t,1),Md(t,1,0))}function Qi(t){for(;t===jn;)jn=Ms[--Is],Ms[Is]=null,yn=Ms[--Is],Ms[Is]=null;for(;t===ds;)ds=at[--lt],at[lt]=null,Ft=at[--lt],at[lt]=null,Et=at[--lt],at[lt]=null}var st=null,rt=null,be=!1,pt=null;function Id(t,s){var r=mt(5,null,null,0);r.elementType="DELETED",r.stateNode=s,r.return=t,s=t.deletions,s===null?(t.deletions=[r],t.flags|=16):s.push(r)}function Dd(t,s){switch(t.tag){case 5:var r=t.type;return s=s.nodeType!==1||r.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,st=t,rt=Ut(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,st=t,rt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(r=ds!==null?{id:Et,overflow:Ft}:null,t.memoizedState={dehydrated:s,treeContext:r,retryLane:1073741824},r=mt(18,null,null,0),r.stateNode=s,r.return=t,t.child=r,st=t,rt=null,!0):!1;default:return!1}}function Zi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ea(t){if(be){var s=rt;if(s){var r=s;if(!Dd(t,s)){if(Zi(t))throw Error(o(418));s=Ut(r.nextSibling);var n=st;s&&Dd(t,s)?Id(n,r):(t.flags=t.flags&-4097|2,be=!1,st=t)}}else{if(Zi(t))throw Error(o(418));t.flags=t.flags&-4097|2,be=!1,st=t}}}function _d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Nn(t){if(t!==st)return!1;if(!be)return _d(t),be=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!Vi(t.type,t.memoizedProps)),s&&(s=rt)){if(Zi(t))throw Ld(),Error(o(418));for(;s;)Id(t,s),s=Ut(s.nextSibling)}if(_d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(s===0){rt=Ut(t.nextSibling);break e}s--}else r!=="$"&&r!=="$!"&&r!=="$?"||s++}t=t.nextSibling}rt=null}}else rt=st?Ut(t.stateNode.nextSibling):null;return!0}function Ld(){for(var t=rt;t;)t=Ut(t.nextSibling)}function Ds(){rt=st=null,be=!1}function ta(t){pt===null?pt=[t]:pt.push(t)}var Pu=ne.ReactCurrentBatchConfig;function Nr(t,s,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var n=r.stateNode}if(!n)throw Error(o(147,t));var a=n,l=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(c){var h=a.refs;c===null?delete h[l]:h[l]=c},s._stringRef=l,s)}if(typeof t!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,t))}return t}function wn(t,s){throw t=Object.prototype.toString.call(s),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function Ud(t){var s=t._init;return s(t._payload)}function zd(t){function s(y,v){if(t){var N=y.deletions;N===null?(y.deletions=[v],y.flags|=16):N.push(v)}}function r(y,v){if(!t)return null;for(;v!==null;)s(y,v),v=v.sibling;return null}function n(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function a(y,v){return y=Xt(y,v),y.index=0,y.sibling=null,y}function l(y,v,N){return y.index=N,t?(N=y.alternate,N!==null?(N=N.index,N<v?(y.flags|=2,v):N):(y.flags|=2,v)):(y.flags|=1048576,v)}function c(y){return t&&y.alternate===null&&(y.flags|=2),y}function h(y,v,N,H){return v===null||v.tag!==6?(v=Ga(N,y.mode,H),v.return=y,v):(v=a(v,N),v.return=y,v)}function p(y,v,N,H){var W=N.type;return W===Ae?P(y,v,N.props.children,H,N.key):v!==null&&(v.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ee&&Ud(W)===v.type)?(H=a(v,N.props),H.ref=Nr(y,v,N),H.return=y,H):(H=Kn(N.type,N.key,N.props,null,y.mode,H),H.ref=Nr(y,v,N),H.return=y,H)}function w(y,v,N,H){return v===null||v.tag!==4||v.stateNode.containerInfo!==N.containerInfo||v.stateNode.implementation!==N.implementation?(v=Ka(N,y.mode,H),v.return=y,v):(v=a(v,N.children||[]),v.return=y,v)}function P(y,v,N,H,W){return v===null||v.tag!==7?(v=vs(N,y.mode,H,W),v.return=y,v):(v=a(v,N),v.return=y,v)}function O(y,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ga(""+v,y.mode,N),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ge:return N=Kn(v.type,v.key,v.props,null,y.mode,N),N.ref=Nr(y,null,v),N.return=y,N;case Te:return v=Ka(v,y.mode,N),v.return=y,v;case Ee:var H=v._init;return O(y,H(v._payload),N)}if(Xs(v)||q(v))return v=vs(v,y.mode,N,null),v.return=y,v;wn(y,v)}return null}function E(y,v,N,H){var W=v!==null?v.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return W!==null?null:h(y,v,""+N,H);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ge:return N.key===W?p(y,v,N,H):null;case Te:return N.key===W?w(y,v,N,H):null;case Ee:return W=N._init,E(y,v,W(N._payload),H)}if(Xs(N)||q(N))return W!==null?null:P(y,v,N,H,null);wn(y,N)}return null}function _(y,v,N,H,W){if(typeof H=="string"&&H!==""||typeof H=="number")return y=y.get(N)||null,h(v,y,""+H,W);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case ge:return y=y.get(H.key===null?N:H.key)||null,p(v,y,H,W);case Te:return y=y.get(H.key===null?N:H.key)||null,w(v,y,H,W);case Ee:var V=H._init;return _(y,v,N,V(H._payload),W)}if(Xs(H)||q(H))return y=y.get(N)||null,P(v,y,H,W,null);wn(v,H)}return null}function z(y,v,N,H){for(var W=null,V=null,G=v,Y=v=0,He=null;G!==null&&Y<N.length;Y++){G.index>Y?(He=G,G=null):He=G.sibling;var de=E(y,G,N[Y],H);if(de===null){G===null&&(G=He);break}t&&G&&de.alternate===null&&s(y,G),v=l(de,v,Y),V===null?W=de:V.sibling=de,V=de,G=He}if(Y===N.length)return r(y,G),be&&os(y,Y),W;if(G===null){for(;Y<N.length;Y++)G=O(y,N[Y],H),G!==null&&(v=l(G,v,Y),V===null?W=G:V.sibling=G,V=G);return be&&os(y,Y),W}for(G=n(y,G);Y<N.length;Y++)He=_(G,y,Y,N[Y],H),He!==null&&(t&&He.alternate!==null&&G.delete(He.key===null?Y:He.key),v=l(He,v,Y),V===null?W=He:V.sibling=He,V=He);return t&&G.forEach(function(Qt){return s(y,Qt)}),be&&os(y,Y),W}function B(y,v,N,H){var W=q(N);if(typeof W!="function")throw Error(o(150));if(N=W.call(N),N==null)throw Error(o(151));for(var V=W=null,G=v,Y=v=0,He=null,de=N.next();G!==null&&!de.done;Y++,de=N.next()){G.index>Y?(He=G,G=null):He=G.sibling;var Qt=E(y,G,de.value,H);if(Qt===null){G===null&&(G=He);break}t&&G&&Qt.alternate===null&&s(y,G),v=l(Qt,v,Y),V===null?W=Qt:V.sibling=Qt,V=Qt,G=He}if(de.done)return r(y,G),be&&os(y,Y),W;if(G===null){for(;!de.done;Y++,de=N.next())de=O(y,de.value,H),de!==null&&(v=l(de,v,Y),V===null?W=de:V.sibling=de,V=de);return be&&os(y,Y),W}for(G=n(y,G);!de.done;Y++,de=N.next())de=_(G,y,Y,de.value,H),de!==null&&(t&&de.alternate!==null&&G.delete(de.key===null?Y:de.key),v=l(de,v,Y),V===null?W=de:V.sibling=de,V=de);return t&&G.forEach(function(dx){return s(y,dx)}),be&&os(y,Y),W}function Ce(y,v,N,H){if(typeof N=="object"&&N!==null&&N.type===Ae&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case ge:e:{for(var W=N.key,V=v;V!==null;){if(V.key===W){if(W=N.type,W===Ae){if(V.tag===7){r(y,V.sibling),v=a(V,N.props.children),v.return=y,y=v;break e}}else if(V.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===Ee&&Ud(W)===V.type){r(y,V.sibling),v=a(V,N.props),v.ref=Nr(y,V,N),v.return=y,y=v;break e}r(y,V);break}else s(y,V);V=V.sibling}N.type===Ae?(v=vs(N.props.children,y.mode,H,N.key),v.return=y,y=v):(H=Kn(N.type,N.key,N.props,null,y.mode,H),H.ref=Nr(y,v,N),H.return=y,y=H)}return c(y);case Te:e:{for(V=N.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===N.containerInfo&&v.stateNode.implementation===N.implementation){r(y,v.sibling),v=a(v,N.children||[]),v.return=y,y=v;break e}else{r(y,v);break}else s(y,v);v=v.sibling}v=Ka(N,y.mode,H),v.return=y,y=v}return c(y);case Ee:return V=N._init,Ce(y,v,V(N._payload),H)}if(Xs(N))return z(y,v,N,H);if(q(N))return B(y,v,N,H);wn(y,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,v!==null&&v.tag===6?(r(y,v.sibling),v=a(v,N),v.return=y,y=v):(r(y,v),v=Ga(N,y.mode,H),v.return=y,y=v),c(y)):r(y,v)}return Ce}var _s=zd(!0),Bd=zd(!1),Cn=zt(null),Sn=null,Ls=null,sa=null;function ra(){sa=Ls=Sn=null}function na(t){var s=Cn.current;pe(Cn),t._currentValue=s}function ia(t,s,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),t===r)break;t=t.return}}function Us(t,s){Sn=t,sa=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&s&&(Ye=!0),t.firstContext=null)}function dt(t){var s=t._currentValue;if(sa!==t)if(t={context:t,memoizedValue:s,next:null},Ls===null){if(Sn===null)throw Error(o(308));Ls=t,Sn.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return s}var cs=null;function aa(t){cs===null?cs=[t]:cs.push(t)}function Wd(t,s,r,n){var a=s.interleaved;return a===null?(r.next=r,aa(s)):(r.next=a.next,a.next=r),s.interleaved=r,Pt(t,n)}function Pt(t,s){t.lanes|=s;var r=t.alternate;for(r!==null&&(r.lanes|=s),r=t,t=t.return;t!==null;)t.childLanes|=s,r=t.alternate,r!==null&&(r.childLanes|=s),r=t,t=t.return;return r.tag===3?r.stateNode:null}var qt=!1;function la(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tt(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function Vt(t,s,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ie&2){var a=n.pending;return a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s,Pt(t,r)}return a=n.interleaved,a===null?(s.next=s,aa(n)):(s.next=a.next,a.next=s),n.interleaved=s,Pt(t,r)}function kn(t,s,r){if(s=s.updateQueue,s!==null&&(s=s.shared,(r&4194240)!==0)){var n=s.lanes;n&=t.pendingLanes,r|=n,s.lanes=r,yi(t,r)}}function Vd(t,s){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=c:l=l.next=c,r=r.next}while(r!==null);l===null?a=l=s:l=l.next=s}else a=l=s;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=s:t.next=s,r.lastBaseUpdate=s}function En(t,s,r,n){var a=t.updateQueue;qt=!1;var l=a.firstBaseUpdate,c=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var p=h,w=p.next;p.next=null,c===null?l=w:c.next=w,c=p;var P=t.alternate;P!==null&&(P=P.updateQueue,h=P.lastBaseUpdate,h!==c&&(h===null?P.firstBaseUpdate=w:h.next=w,P.lastBaseUpdate=p))}if(l!==null){var O=a.baseState;c=0,P=w=p=null,h=l;do{var E=h.lane,_=h.eventTime;if((n&E)===E){P!==null&&(P=P.next={eventTime:_,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var z=t,B=h;switch(E=s,_=r,B.tag){case 1:if(z=B.payload,typeof z=="function"){O=z.call(_,O,E);break e}O=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=B.payload,E=typeof z=="function"?z.call(_,O,E):z,E==null)break e;O=L({},O,E);break e;case 2:qt=!0}}h.callback!==null&&h.lane!==0&&(t.flags|=64,E=a.effects,E===null?a.effects=[h]:E.push(h))}else _={eventTime:_,lane:E,tag:h.tag,payload:h.payload,callback:h.callback,next:null},P===null?(w=P=_,p=O):P=P.next=_,c|=E;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;E=h,h=E.next,E.next=null,a.lastBaseUpdate=E,a.shared.pending=null}}while(!0);if(P===null&&(p=O),a.baseState=p,a.firstBaseUpdate=w,a.lastBaseUpdate=P,s=a.shared.interleaved,s!==null){a=s;do c|=a.lane,a=a.next;while(a!==s)}else l===null&&(a.shared.lanes=0);xs|=c,t.lanes=c,t.memoizedState=O}}function Gd(t,s,r){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var n=t[s],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(o(191,a));a.call(n)}}}var wr={},Nt=zt(wr),Cr=zt(wr),Sr=zt(wr);function ms(t){if(t===wr)throw Error(o(174));return t}function da(t,s){switch(ue(Sr,s),ue(Cr,t),ue(Nt,wr),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:oi(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=oi(s,t)}pe(Nt),ue(Nt,s)}function zs(){pe(Nt),pe(Cr),pe(Sr)}function Kd(t){ms(Sr.current);var s=ms(Nt.current),r=oi(s,t.type);s!==r&&(ue(Cr,t),ue(Nt,r))}function oa(t){Cr.current===t&&(pe(Nt),pe(Cr))}var je=zt(0);function Fn(t){for(var s=t;s!==null;){if(s.tag===13){var r=s.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ca=[];function ma(){for(var t=0;t<ca.length;t++)ca[t]._workInProgressVersionPrimary=null;ca.length=0}var Pn=ne.ReactCurrentDispatcher,ua=ne.ReactCurrentBatchConfig,us=0,ye=null,Fe=null,Oe=null,Tn=!1,kr=!1,Er=0,Tu=0;function Ue(){throw Error(o(321))}function xa(t,s){if(s===null)return!1;for(var r=0;r<s.length&&r<t.length;r++)if(!ht(t[r],s[r]))return!1;return!0}function ha(t,s,r,n,a,l){if(us=l,ye=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Pn.current=t===null||t.memoizedState===null?Au:Mu,t=r(n,a),kr){l=0;do{if(kr=!1,Er=0,25<=l)throw Error(o(301));l+=1,Oe=Fe=null,s.updateQueue=null,Pn.current=Iu,t=r(n,a)}while(kr)}if(Pn.current=Hn,s=Fe!==null&&Fe.next!==null,us=0,Oe=Fe=ye=null,Tn=!1,s)throw Error(o(300));return t}function pa(){var t=Er!==0;return Er=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function ot(){if(Fe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var s=Oe===null?ye.memoizedState:Oe.next;if(s!==null)Oe=s,Fe=t;else{if(t===null)throw Error(o(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Fr(t,s){return typeof s=="function"?s(t):s}function fa(t){var s=ot(),r=s.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var n=Fe,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var c=a.next;a.next=l.next,l.next=c}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var h=c=null,p=null,w=l;do{var P=w.lane;if((us&P)===P)p!==null&&(p=p.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:t(n,w.action);else{var O={lane:P,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};p===null?(h=p=O,c=n):p=p.next=O,ye.lanes|=P,xs|=P}w=w.next}while(w!==null&&w!==l);p===null?c=n:p.next=h,ht(n,s.memoizedState)||(Ye=!0),s.memoizedState=n,s.baseState=c,s.baseQueue=p,r.lastRenderedState=n}if(t=r.interleaved,t!==null){a=t;do l=a.lane,ye.lanes|=l,xs|=l,a=a.next;while(a!==t)}else a===null&&(r.lanes=0);return[s.memoizedState,r.dispatch]}function va(t){var s=ot(),r=s.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=t;var n=r.dispatch,a=r.pending,l=s.memoizedState;if(a!==null){r.pending=null;var c=a=a.next;do l=t(l,c.action),c=c.next;while(c!==a);ht(l,s.memoizedState)||(Ye=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),r.lastRenderedState=l}return[l,n]}function Yd(){}function Jd(t,s){var r=ye,n=ot(),a=s(),l=!ht(n.memoizedState,a);if(l&&(n.memoizedState=a,Ye=!0),n=n.queue,ba(Qd.bind(null,r,n,t),[t]),n.getSnapshot!==s||l||Oe!==null&&Oe.memoizedState.tag&1){if(r.flags|=2048,Pr(9,Xd.bind(null,r,n,a,s),void 0,null),Re===null)throw Error(o(349));us&30||$d(r,s,a)}return a}function $d(t,s,r){t.flags|=16384,t={getSnapshot:s,value:r},s=ye.updateQueue,s===null?(s={lastEffect:null,stores:null},ye.updateQueue=s,s.stores=[t]):(r=s.stores,r===null?s.stores=[t]:r.push(t))}function Xd(t,s,r,n){s.value=r,s.getSnapshot=n,Zd(s)&&eo(t)}function Qd(t,s,r){return r(function(){Zd(s)&&eo(t)})}function Zd(t){var s=t.getSnapshot;t=t.value;try{var r=s();return!ht(t,r)}catch{return!0}}function eo(t){var s=Pt(t,1);s!==null&&gt(s,t,1,-1)}function to(t){var s=wt();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},s.queue=t,t=t.dispatch=Hu.bind(null,ye,t),[s.memoizedState,t]}function Pr(t,s,r,n){return t={tag:t,create:s,destroy:r,deps:n,next:null},s=ye.updateQueue,s===null?(s={lastEffect:null,stores:null},ye.updateQueue=s,s.lastEffect=t.next=t):(r=s.lastEffect,r===null?s.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,s.lastEffect=t)),t}function so(){return ot().memoizedState}function On(t,s,r,n){var a=wt();ye.flags|=t,a.memoizedState=Pr(1|s,r,void 0,n===void 0?null:n)}function Rn(t,s,r,n){var a=ot();n=n===void 0?null:n;var l=void 0;if(Fe!==null){var c=Fe.memoizedState;if(l=c.destroy,n!==null&&xa(n,c.deps)){a.memoizedState=Pr(s,r,l,n);return}}ye.flags|=t,a.memoizedState=Pr(1|s,r,l,n)}function ro(t,s){return On(8390656,8,t,s)}function ba(t,s){return Rn(2048,8,t,s)}function no(t,s){return Rn(4,2,t,s)}function io(t,s){return Rn(4,4,t,s)}function ao(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function lo(t,s,r){return r=r!=null?r.concat([t]):null,Rn(4,4,ao.bind(null,s,t),r)}function ga(){}function oo(t,s){var r=ot();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&xa(s,n[1])?n[0]:(r.memoizedState=[t,s],t)}function co(t,s){var r=ot();s=s===void 0?null:s;var n=r.memoizedState;return n!==null&&s!==null&&xa(s,n[1])?n[0]:(t=t(),r.memoizedState=[t,s],t)}function mo(t,s,r){return us&21?(ht(r,s)||(r=Ul(),ye.lanes|=r,xs|=r,t.baseState=!0),s):(t.baseState&&(t.baseState=!1,Ye=!0),t.memoizedState=r)}function Ou(t,s){var r=ce;ce=r!==0&&4>r?r:4,t(!0);var n=ua.transition;ua.transition={};try{t(!1),s()}finally{ce=r,ua.transition=n}}function uo(){return ot().memoizedState}function Ru(t,s,r){var n=Jt(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},xo(t))ho(s,r);else if(r=Wd(t,s,r,n),r!==null){var a=Ve();gt(r,t,n,a),po(r,s,n)}}function Hu(t,s,r){var n=Jt(t),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(xo(t))ho(s,a);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var c=s.lastRenderedState,h=l(c,r);if(a.hasEagerState=!0,a.eagerState=h,ht(h,c)){var p=s.interleaved;p===null?(a.next=a,aa(s)):(a.next=p.next,p.next=a),s.interleaved=a;return}}catch{}finally{}r=Wd(t,s,a,n),r!==null&&(a=Ve(),gt(r,t,n,a),po(r,s,n))}}function xo(t){var s=t.alternate;return t===ye||s!==null&&s===ye}function ho(t,s){kr=Tn=!0;var r=t.pending;r===null?s.next=s:(s.next=r.next,r.next=s),t.pending=s}function po(t,s,r){if(r&4194240){var n=s.lanes;n&=t.pendingLanes,r|=n,s.lanes=r,yi(t,r)}}var Hn={readContext:dt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Au={readContext:dt,useCallback:function(t,s){return wt().memoizedState=[t,s===void 0?null:s],t},useContext:dt,useEffect:ro,useImperativeHandle:function(t,s,r){return r=r!=null?r.concat([t]):null,On(4194308,4,ao.bind(null,s,t),r)},useLayoutEffect:function(t,s){return On(4194308,4,t,s)},useInsertionEffect:function(t,s){return On(4,2,t,s)},useMemo:function(t,s){var r=wt();return s=s===void 0?null:s,t=t(),r.memoizedState=[t,s],t},useReducer:function(t,s,r){var n=wt();return s=r!==void 0?r(s):s,n.memoizedState=n.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},n.queue=t,t=t.dispatch=Ru.bind(null,ye,t),[n.memoizedState,t]},useRef:function(t){var s=wt();return t={current:t},s.memoizedState=t},useState:to,useDebugValue:ga,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=to(!1),s=t[0];return t=Ou.bind(null,t[1]),wt().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,r){var n=ye,a=wt();if(be){if(r===void 0)throw Error(o(407));r=r()}else{if(r=s(),Re===null)throw Error(o(349));us&30||$d(n,s,r)}a.memoizedState=r;var l={value:r,getSnapshot:s};return a.queue=l,ro(Qd.bind(null,n,l,t),[t]),n.flags|=2048,Pr(9,Xd.bind(null,n,l,r,s),void 0,null),r},useId:function(){var t=wt(),s=Re.identifierPrefix;if(be){var r=Ft,n=Et;r=(n&~(1<<32-xt(n)-1)).toString(32)+r,s=":"+s+"R"+r,r=Er++,0<r&&(s+="H"+r.toString(32)),s+=":"}else r=Tu++,s=":"+s+"r"+r.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},Mu={readContext:dt,useCallback:oo,useContext:dt,useEffect:ba,useImperativeHandle:lo,useInsertionEffect:no,useLayoutEffect:io,useMemo:co,useReducer:fa,useRef:so,useState:function(){return fa(Fr)},useDebugValue:ga,useDeferredValue:function(t){var s=ot();return mo(s,Fe.memoizedState,t)},useTransition:function(){var t=fa(Fr)[0],s=ot().memoizedState;return[t,s]},useMutableSource:Yd,useSyncExternalStore:Jd,useId:uo,unstable_isNewReconciler:!1},Iu={readContext:dt,useCallback:oo,useContext:dt,useEffect:ba,useImperativeHandle:lo,useInsertionEffect:no,useLayoutEffect:io,useMemo:co,useReducer:va,useRef:so,useState:function(){return va(Fr)},useDebugValue:ga,useDeferredValue:function(t){var s=ot();return Fe===null?s.memoizedState=t:mo(s,Fe.memoizedState,t)},useTransition:function(){var t=va(Fr)[0],s=ot().memoizedState;return[t,s]},useMutableSource:Yd,useSyncExternalStore:Jd,useId:uo,unstable_isNewReconciler:!1};function ft(t,s){if(t&&t.defaultProps){s=L({},s),t=t.defaultProps;for(var r in t)s[r]===void 0&&(s[r]=t[r]);return s}return s}function ja(t,s,r,n){s=t.memoizedState,r=r(n,s),r=r==null?s:L({},s,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var An={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,s,r){t=t._reactInternals;var n=Ve(),a=Jt(t),l=Tt(n,a);l.payload=s,r!=null&&(l.callback=r),s=Vt(t,l,a),s!==null&&(gt(s,t,a,n),kn(s,t,a))},enqueueReplaceState:function(t,s,r){t=t._reactInternals;var n=Ve(),a=Jt(t),l=Tt(n,a);l.tag=1,l.payload=s,r!=null&&(l.callback=r),s=Vt(t,l,a),s!==null&&(gt(s,t,a,n),kn(s,t,a))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var r=Ve(),n=Jt(t),a=Tt(r,n);a.tag=2,s!=null&&(a.callback=s),s=Vt(t,a,n),s!==null&&(gt(s,t,n,r),kn(s,t,n))}};function fo(t,s,r,n,a,l,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,l,c):s.prototype&&s.prototype.isPureReactComponent?!pr(r,n)||!pr(a,l):!0}function vo(t,s,r){var n=!1,a=Bt,l=s.contextType;return typeof l=="object"&&l!==null?l=dt(l):(a=Ke(s)?ls:Le.current,n=s.contextTypes,l=(n=n!=null)?As(t,a):Bt),s=new s(r,l),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=An,t.stateNode=s,s._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=l),s}function bo(t,s,r,n){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(r,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(r,n),s.state!==t&&An.enqueueReplaceState(s,s.state,null)}function ya(t,s,r,n){var a=t.stateNode;a.props=r,a.state=t.memoizedState,a.refs={},la(t);var l=s.contextType;typeof l=="object"&&l!==null?a.context=dt(l):(l=Ke(s)?ls:Le.current,a.context=As(t,l)),a.state=t.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(ja(t,s,l,r),a.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&An.enqueueReplaceState(a,a.state,null),En(t,r,a,n),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,s){try{var r="",n=s;do r+=ae(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:t,source:s,stack:a,digest:null}}function Na(t,s,r){return{value:t,source:null,stack:r??null,digest:s??null}}function wa(t,s){try{console.error(s.value)}catch(r){setTimeout(function(){throw r})}}var Du=typeof WeakMap=="function"?WeakMap:Map;function go(t,s,r){r=Tt(-1,r),r.tag=3,r.payload={element:null};var n=s.value;return r.callback=function(){zn||(zn=!0,_a=n),wa(t,s)},r}function jo(t,s,r){r=Tt(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var a=s.value;r.payload=function(){return n(a)},r.callback=function(){wa(t,s)}}var l=t.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){wa(t,s),typeof n!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var c=s.stack;this.componentDidCatch(s.value,{componentStack:c!==null?c:""})}),r}function yo(t,s,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Du;var a=new Set;n.set(s,a)}else a=n.get(s),a===void 0&&(a=new Set,n.set(s,a));a.has(r)||(a.add(r),t=Xu.bind(null,t,s,r),s.then(t,t))}function No(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function wo(t,s,r,n,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===s?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(s=Tt(-1,1),s.tag=2,Vt(r,s,1))),r.lanes|=1),t)}var _u=ne.ReactCurrentOwner,Ye=!1;function qe(t,s,r,n){s.child=t===null?Bd(s,null,r,n):_s(s,t.child,r,n)}function Co(t,s,r,n,a){r=r.render;var l=s.ref;return Us(s,a),n=ha(t,s,r,n,l,a),r=pa(),t!==null&&!Ye?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a,Ot(t,s,a)):(be&&r&&Xi(s),s.flags|=1,qe(t,s,n,a),s.child)}function So(t,s,r,n,a){if(t===null){var l=r.type;return typeof l=="function"&&!Va(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(s.tag=15,s.type=l,ko(t,s,l,n,a)):(t=Kn(r.type,null,n,s,s.mode,a),t.ref=s.ref,t.return=s,s.child=t)}if(l=t.child,!(t.lanes&a)){var c=l.memoizedProps;if(r=r.compare,r=r!==null?r:pr,r(c,n)&&t.ref===s.ref)return Ot(t,s,a)}return s.flags|=1,t=Xt(l,n),t.ref=s.ref,t.return=s,s.child=t}function ko(t,s,r,n,a){if(t!==null){var l=t.memoizedProps;if(pr(l,n)&&t.ref===s.ref)if(Ye=!1,s.pendingProps=n=l,(t.lanes&a)!==0)t.flags&131072&&(Ye=!0);else return s.lanes=t.lanes,Ot(t,s,a)}return Ca(t,s,r,n,a)}function Eo(t,s,r){var n=s.pendingProps,a=n.children,l=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(qs,nt),nt|=r;else{if(!(r&1073741824))return t=l!==null?l.baseLanes|r:r,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,ue(qs,nt),nt|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,ue(qs,nt),nt|=n}else l!==null?(n=l.baseLanes|r,s.memoizedState=null):n=r,ue(qs,nt),nt|=n;return qe(t,s,a,r),s.child}function Fo(t,s){var r=s.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(s.flags|=512,s.flags|=2097152)}function Ca(t,s,r,n,a){var l=Ke(r)?ls:Le.current;return l=As(s,l),Us(s,a),r=ha(t,s,r,n,l,a),n=pa(),t!==null&&!Ye?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~a,Ot(t,s,a)):(be&&n&&Xi(s),s.flags|=1,qe(t,s,r,a),s.child)}function Po(t,s,r,n,a){if(Ke(r)){var l=!0;bn(s)}else l=!1;if(Us(s,a),s.stateNode===null)In(t,s),vo(s,r,n),ya(s,r,n,a),n=!0;else if(t===null){var c=s.stateNode,h=s.memoizedProps;c.props=h;var p=c.context,w=r.contextType;typeof w=="object"&&w!==null?w=dt(w):(w=Ke(r)?ls:Le.current,w=As(s,w));var P=r.getDerivedStateFromProps,O=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function";O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==n||p!==w)&&bo(s,c,n,w),qt=!1;var E=s.memoizedState;c.state=E,En(s,n,c,a),p=s.memoizedState,h!==n||E!==p||Ge.current||qt?(typeof P=="function"&&(ja(s,r,P,n),p=s.memoizedState),(h=qt||fo(s,r,h,n,E,p,w))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(s.flags|=4194308)):(typeof c.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=p),c.props=n,c.state=p,c.context=w,n=h):(typeof c.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{c=s.stateNode,qd(t,s),h=s.memoizedProps,w=s.type===s.elementType?h:ft(s.type,h),c.props=w,O=s.pendingProps,E=c.context,p=r.contextType,typeof p=="object"&&p!==null?p=dt(p):(p=Ke(r)?ls:Le.current,p=As(s,p));var _=r.getDerivedStateFromProps;(P=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==O||E!==p)&&bo(s,c,n,p),qt=!1,E=s.memoizedState,c.state=E,En(s,n,c,a);var z=s.memoizedState;h!==O||E!==z||Ge.current||qt?(typeof _=="function"&&(ja(s,r,_,n),z=s.memoizedState),(w=qt||fo(s,r,w,n,E,z,p)||!1)?(P||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,z,p),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,z,p)),typeof c.componentDidUpdate=="function"&&(s.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=z),c.props=n,c.state=z,c.context=p,n=w):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),n=!1)}return Sa(t,s,r,n,l,a)}function Sa(t,s,r,n,a,l){Fo(t,s);var c=(s.flags&128)!==0;if(!n&&!c)return a&&Hd(s,r,!1),Ot(t,s,l);n=s.stateNode,_u.current=s;var h=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,t!==null&&c?(s.child=_s(s,t.child,null,l),s.child=_s(s,null,h,l)):qe(t,s,h,l),s.memoizedState=n.state,a&&Hd(s,r,!0),s.child}function To(t){var s=t.stateNode;s.pendingContext?Od(t,s.pendingContext,s.pendingContext!==s.context):s.context&&Od(t,s.context,!1),da(t,s.containerInfo)}function Oo(t,s,r,n,a){return Ds(),ta(a),s.flags|=256,qe(t,s,r,n),s.child}var ka={dehydrated:null,treeContext:null,retryLane:0};function Ea(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ro(t,s,r){var n=s.pendingProps,a=je.current,l=!1,c=(s.flags&128)!==0,h;if((h=c)||(h=t!==null&&t.memoizedState===null?!1:(a&2)!==0),h?(l=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),ue(je,a&1),t===null)return ea(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(s.mode&1?t.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(c=n.children,t=n.fallback,l?(n=s.mode,l=s.child,c={mode:"hidden",children:c},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Yn(c,n,0,null),t=vs(t,n,r,null),l.return=s,t.return=s,l.sibling=t,s.child=l,s.child.memoizedState=Ea(r),s.memoizedState=ka,t):Fa(s,c));if(a=t.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return Lu(t,s,c,n,h,a,r);if(l){l=n.fallback,c=s.mode,a=t.child,h=a.sibling;var p={mode:"hidden",children:n.children};return!(c&1)&&s.child!==a?(n=s.child,n.childLanes=0,n.pendingProps=p,s.deletions=null):(n=Xt(a,p),n.subtreeFlags=a.subtreeFlags&14680064),h!==null?l=Xt(h,l):(l=vs(l,c,r,null),l.flags|=2),l.return=s,n.return=s,n.sibling=l,s.child=n,n=l,l=s.child,c=t.child.memoizedState,c=c===null?Ea(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=t.childLanes&~r,s.memoizedState=ka,n}return l=t.child,t=l.sibling,n=Xt(l,{mode:"visible",children:n.children}),!(s.mode&1)&&(n.lanes=r),n.return=s,n.sibling=null,t!==null&&(r=s.deletions,r===null?(s.deletions=[t],s.flags|=16):r.push(t)),s.child=n,s.memoizedState=null,n}function Fa(t,s){return s=Yn({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function Mn(t,s,r,n){return n!==null&&ta(n),_s(s,t.child,null,r),t=Fa(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Lu(t,s,r,n,a,l,c){if(r)return s.flags&256?(s.flags&=-257,n=Na(Error(o(422))),Mn(t,s,c,n)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(l=n.fallback,a=s.mode,n=Yn({mode:"visible",children:n.children},a,0,null),l=vs(l,a,c,null),l.flags|=2,n.return=s,l.return=s,n.sibling=l,s.child=n,s.mode&1&&_s(s,t.child,null,c),s.child.memoizedState=Ea(c),s.memoizedState=ka,l);if(!(s.mode&1))return Mn(t,s,c,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var h=n.dgst;return n=h,l=Error(o(419)),n=Na(l,n,void 0),Mn(t,s,c,n)}if(h=(c&t.childLanes)!==0,Ye||h){if(n=Re,n!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|c)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Pt(t,a),gt(n,t,a,-1))}return qa(),n=Na(Error(o(421))),Mn(t,s,c,n)}return a.data==="$?"?(s.flags|=128,s.child=t.child,s=Qu.bind(null,t),a._reactRetry=s,null):(t=l.treeContext,rt=Ut(a.nextSibling),st=s,be=!0,pt=null,t!==null&&(at[lt++]=Et,at[lt++]=Ft,at[lt++]=ds,Et=t.id,Ft=t.overflow,ds=s),s=Fa(s,n.children),s.flags|=4096,s)}function Ho(t,s,r){t.lanes|=s;var n=t.alternate;n!==null&&(n.lanes|=s),ia(t.return,s,r)}function Pa(t,s,r,n,a){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function Ao(t,s,r){var n=s.pendingProps,a=n.revealOrder,l=n.tail;if(qe(t,s,n.children,r),n=je.current,n&2)n=n&1|2,s.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ho(t,r,s);else if(t.tag===19)Ho(t,r,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(ue(je,n),!(s.mode&1))s.memoizedState=null;else switch(a){case"forwards":for(r=s.child,a=null;r!==null;)t=r.alternate,t!==null&&Fn(t)===null&&(a=r),r=r.sibling;r=a,r===null?(a=s.child,s.child=null):(a=r.sibling,r.sibling=null),Pa(s,!1,a,r,l);break;case"backwards":for(r=null,a=s.child,s.child=null;a!==null;){if(t=a.alternate,t!==null&&Fn(t)===null){s.child=a;break}t=a.sibling,a.sibling=r,r=a,a=t}Pa(s,!0,r,null,l);break;case"together":Pa(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function In(t,s){!(s.mode&1)&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function Ot(t,s,r){if(t!==null&&(s.dependencies=t.dependencies),xs|=s.lanes,!(r&s.childLanes))return null;if(t!==null&&s.child!==t.child)throw Error(o(153));if(s.child!==null){for(t=s.child,r=Xt(t,t.pendingProps),s.child=r,r.return=s;t.sibling!==null;)t=t.sibling,r=r.sibling=Xt(t,t.pendingProps),r.return=s;r.sibling=null}return s.child}function Uu(t,s,r){switch(s.tag){case 3:To(s),Ds();break;case 5:Kd(s);break;case 1:Ke(s.type)&&bn(s);break;case 4:da(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,a=s.memoizedProps.value;ue(Cn,n._currentValue),n._currentValue=a;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(ue(je,je.current&1),s.flags|=128,null):r&s.child.childLanes?Ro(t,s,r):(ue(je,je.current&1),t=Ot(t,s,r),t!==null?t.sibling:null);ue(je,je.current&1);break;case 19:if(n=(r&s.childLanes)!==0,t.flags&128){if(n)return Ao(t,s,r);s.flags|=128}if(a=s.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(je,je.current),n)break;return null;case 22:case 23:return s.lanes=0,Eo(t,s,r)}return Ot(t,s,r)}var Mo,Ta,Io,Do;Mo=function(t,s){for(var r=s.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ta=function(){},Io=function(t,s,r,n){var a=t.memoizedProps;if(a!==n){t=s.stateNode,ms(Nt.current);var l=null;switch(r){case"input":a=ii(t,a),n=ii(t,n),l=[];break;case"select":a=L({},a,{value:void 0}),n=L({},n,{value:void 0}),l=[];break;case"textarea":a=di(t,a),n=di(t,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=pn)}ci(r,n);var c;r=null;for(w in a)if(!n.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var h=a[w];for(c in h)h.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(m.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in n){var p=n[w];if(h=a!=null?a[w]:void 0,n.hasOwnProperty(w)&&p!==h&&(p!=null||h!=null))if(w==="style")if(h){for(c in h)!h.hasOwnProperty(c)||p&&p.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in p)p.hasOwnProperty(c)&&h[c]!==p[c]&&(r||(r={}),r[c]=p[c])}else r||(l||(l=[]),l.push(w,r)),r=p;else w==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,h=h?h.__html:void 0,p!=null&&h!==p&&(l=l||[]).push(w,p)):w==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(w,""+p):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(m.hasOwnProperty(w)?(p!=null&&w==="onScroll"&&he("scroll",t),l||h===p||(l=[])):(l=l||[]).push(w,p))}r&&(l=l||[]).push("style",r);var w=l;(s.updateQueue=w)&&(s.flags|=4)}},Do=function(t,s,r,n){r!==n&&(s.flags|=4)};function Tr(t,s){if(!be)switch(t.tailMode){case"hidden":s=t.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function ze(t){var s=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(s)for(var a=t.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=r,s}function zu(t,s,r){var n=s.pendingProps;switch(Qi(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(s),null;case 1:return Ke(s.type)&&vn(),ze(s),null;case 3:return n=s.stateNode,zs(),pe(Ge),pe(Le),ma(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Nn(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,pt!==null&&(za(pt),pt=null))),Ta(t,s),ze(s),null;case 5:oa(s);var a=ms(Sr.current);if(r=s.type,t!==null&&s.stateNode!=null)Io(t,s,r,n,a),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(o(166));return ze(s),null}if(t=ms(Nt.current),Nn(s)){n=s.stateNode,r=s.type;var l=s.memoizedProps;switch(n[yt]=s,n[jr]=l,t=(s.mode&1)!==0,r){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<vr.length;a++)he(vr[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":fl(n,l),he("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},he("invalid",n);break;case"textarea":gl(n,l),he("invalid",n)}ci(r,l),a=null;for(var c in l)if(l.hasOwnProperty(c)){var h=l[c];c==="children"?typeof h=="string"?n.textContent!==h&&(l.suppressHydrationWarning!==!0&&hn(n.textContent,h,t),a=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&hn(n.textContent,h,t),a=["children",""+h]):m.hasOwnProperty(c)&&h!=null&&c==="onScroll"&&he("scroll",n)}switch(r){case"input":qr(n),bl(n,l,!0);break;case"textarea":qr(n),yl(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=pn)}n=a,s.updateQueue=n,n!==null&&(s.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nl(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=c.createElement(r,{is:n.is}):(t=c.createElement(r),r==="select"&&(c=t,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):t=c.createElementNS(t,r),t[yt]=s,t[jr]=n,Mo(t,s,!1,!1),s.stateNode=t;e:{switch(c=mi(r,n),r){case"dialog":he("cancel",t),he("close",t),a=n;break;case"iframe":case"object":case"embed":he("load",t),a=n;break;case"video":case"audio":for(a=0;a<vr.length;a++)he(vr[a],t);a=n;break;case"source":he("error",t),a=n;break;case"img":case"image":case"link":he("error",t),he("load",t),a=n;break;case"details":he("toggle",t),a=n;break;case"input":fl(t,n),a=ii(t,n),he("invalid",t);break;case"option":a=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},a=L({},n,{value:void 0}),he("invalid",t);break;case"textarea":gl(t,n),a=di(t,n),he("invalid",t);break;default:a=n}ci(r,a),h=a;for(l in h)if(h.hasOwnProperty(l)){var p=h[l];l==="style"?Sl(t,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&wl(t,p)):l==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&Qs(t,p):typeof p=="number"&&Qs(t,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?p!=null&&l==="onScroll"&&he("scroll",t):p!=null&&se(t,l,p,c))}switch(r){case"input":qr(t),bl(t,n,!1);break;case"textarea":qr(t),yl(t);break;case"option":n.value!=null&&t.setAttribute("value",""+oe(n.value));break;case"select":t.multiple=!!n.multiple,l=n.value,l!=null?Ns(t,!!n.multiple,l,!1):n.defaultValue!=null&&Ns(t,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=pn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ze(s),null;case 6:if(t&&s.stateNode!=null)Do(t,s,t.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(o(166));if(r=ms(Sr.current),ms(Nt.current),Nn(s)){if(n=s.stateNode,r=s.memoizedProps,n[yt]=s,(l=n.nodeValue!==r)&&(t=st,t!==null))switch(t.tag){case 3:hn(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hn(n.nodeValue,r,(t.mode&1)!==0)}l&&(s.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[yt]=s,s.stateNode=n}return ze(s),null;case 13:if(pe(je),n=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&rt!==null&&s.mode&1&&!(s.flags&128))Ld(),Ds(),s.flags|=98560,l=!1;else if(l=Nn(s),n!==null&&n.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[yt]=s}else Ds(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;ze(s),l=!1}else pt!==null&&(za(pt),pt=null),l=!0;if(!l)return s.flags&65536?s:null}return s.flags&128?(s.lanes=r,s):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(s.child.flags|=8192,s.mode&1&&(t===null||je.current&1?Pe===0&&(Pe=3):qa())),s.updateQueue!==null&&(s.flags|=4),ze(s),null);case 4:return zs(),Ta(t,s),t===null&&br(s.stateNode.containerInfo),ze(s),null;case 10:return na(s.type._context),ze(s),null;case 17:return Ke(s.type)&&vn(),ze(s),null;case 19:if(pe(je),l=s.memoizedState,l===null)return ze(s),null;if(n=(s.flags&128)!==0,c=l.rendering,c===null)if(n)Tr(l,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=s.child;t!==null;){if(c=Fn(t),c!==null){for(s.flags|=128,Tr(l,!1),n=c.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=r,r=s.child;r!==null;)l=r,t=n,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,t=c.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return ue(je,je.current&1|2),s.child}t=t.sibling}l.tail!==null&&we()>Vs&&(s.flags|=128,n=!0,Tr(l,!1),s.lanes=4194304)}else{if(!n)if(t=Fn(c),t!==null){if(s.flags|=128,n=!0,r=t.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),Tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!be)return ze(s),null}else 2*we()-l.renderingStartTime>Vs&&r!==1073741824&&(s.flags|=128,n=!0,Tr(l,!1),s.lanes=4194304);l.isBackwards?(c.sibling=s.child,s.child=c):(r=l.last,r!==null?r.sibling=c:s.child=c,l.last=c)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=we(),s.sibling=null,r=je.current,ue(je,n?r&1|2:r&1),s):(ze(s),null);case 22:case 23:return Wa(),n=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(s.flags|=8192),n&&s.mode&1?nt&1073741824&&(ze(s),s.subtreeFlags&6&&(s.flags|=8192)):ze(s),null;case 24:return null;case 25:return null}throw Error(o(156,s.tag))}function Bu(t,s){switch(Qi(s),s.tag){case 1:return Ke(s.type)&&vn(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return zs(),pe(Ge),pe(Le),ma(),t=s.flags,t&65536&&!(t&128)?(s.flags=t&-65537|128,s):null;case 5:return oa(s),null;case 13:if(pe(je),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(o(340));Ds()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return pe(je),null;case 4:return zs(),null;case 10:return na(s.type._context),null;case 22:case 23:return Wa(),null;case 24:return null;default:return null}}var Dn=!1,Be=!1,Wu=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ws(t,s){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ne(t,s,n)}else r.current=null}function Oa(t,s,r){try{r()}catch(n){Ne(t,s,n)}}var _o=!1;function qu(t,s){if(Wi=sn,t=pd(),Mi(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var c=0,h=-1,p=-1,w=0,P=0,O=t,E=null;t:for(;;){for(var _;O!==r||a!==0&&O.nodeType!==3||(h=c+a),O!==l||n!==0&&O.nodeType!==3||(p=c+n),O.nodeType===3&&(c+=O.nodeValue.length),(_=O.firstChild)!==null;)E=O,O=_;for(;;){if(O===t)break t;if(E===r&&++w===a&&(h=c),E===l&&++P===n&&(p=c),(_=O.nextSibling)!==null)break;O=E,E=O.parentNode}O=_}r=h===-1||p===-1?null:{start:h,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(qi={focusedElem:t,selectionRange:r},sn=!1,U=s;U!==null;)if(s=U,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,U=t;else for(;U!==null;){s=U;try{var z=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var B=z.memoizedProps,Ce=z.memoizedState,y=s.stateNode,v=y.getSnapshotBeforeUpdate(s.elementType===s.type?B:ft(s.type,B),Ce);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var N=s.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(H){Ne(s,s.return,H)}if(t=s.sibling,t!==null){t.return=s.return,U=t;break}U=s.return}return z=_o,_o=!1,z}function Or(t,s,r){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.destroy;a.destroy=void 0,l!==void 0&&Oa(s,r,l)}a=a.next}while(a!==n)}}function _n(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==s)}}function Ra(t){var s=t.ref;if(s!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof s=="function"?s(t):s.current=t}}function Lo(t){var s=t.alternate;s!==null&&(t.alternate=null,Lo(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[yt],delete s[jr],delete s[Yi],delete s[ku],delete s[Eu])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uo(t){return t.tag===5||t.tag===3||t.tag===4}function zo(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ha(t,s,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,s?r.nodeType===8?r.parentNode.insertBefore(t,s):r.insertBefore(t,s):(r.nodeType===8?(s=r.parentNode,s.insertBefore(t,r)):(s=r,s.appendChild(t)),r=r._reactRootContainer,r!=null||s.onclick!==null||(s.onclick=pn));else if(n!==4&&(t=t.child,t!==null))for(Ha(t,s,r),t=t.sibling;t!==null;)Ha(t,s,r),t=t.sibling}function Aa(t,s,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,s?r.insertBefore(t,s):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Aa(t,s,r),t=t.sibling;t!==null;)Aa(t,s,r),t=t.sibling}var Me=null,vt=!1;function Gt(t,s,r){for(r=r.child;r!==null;)Bo(t,s,r),r=r.sibling}function Bo(t,s,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount($r,r)}catch{}switch(r.tag){case 5:Be||Ws(r,s);case 6:var n=Me,a=vt;Me=null,Gt(t,s,r),Me=n,vt=a,Me!==null&&(vt?(t=Me,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Me.removeChild(r.stateNode));break;case 18:Me!==null&&(vt?(t=Me,r=r.stateNode,t.nodeType===8?Ki(t.parentNode,r):t.nodeType===1&&Ki(t,r),or(t)):Ki(Me,r.stateNode));break;case 4:n=Me,a=vt,Me=r.stateNode.containerInfo,vt=!0,Gt(t,s,r),Me=n,vt=a;break;case 0:case 11:case 14:case 15:if(!Be&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&Oa(r,s,c),a=a.next}while(a!==n)}Gt(t,s,r);break;case 1:if(!Be&&(Ws(r,s),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(h){Ne(r,s,h)}Gt(t,s,r);break;case 21:Gt(t,s,r);break;case 22:r.mode&1?(Be=(n=Be)||r.memoizedState!==null,Gt(t,s,r),Be=n):Gt(t,s,r);break;default:Gt(t,s,r)}}function Wo(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Wu),s.forEach(function(n){var a=Zu.bind(null,t,n);r.has(n)||(r.add(n),n.then(a,a))})}}function bt(t,s){var r=s.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=t,c=s,h=c;e:for(;h!==null;){switch(h.tag){case 5:Me=h.stateNode,vt=!1;break e;case 3:Me=h.stateNode.containerInfo,vt=!0;break e;case 4:Me=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(Me===null)throw Error(o(160));Bo(l,c,a),Me=null,vt=!1;var p=a.alternate;p!==null&&(p.return=null),a.return=null}catch(w){Ne(a,s,w)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qo(s,t),s=s.sibling}function qo(t,s){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(s,t),Ct(t),n&4){try{Or(3,t,t.return),_n(3,t)}catch(B){Ne(t,t.return,B)}try{Or(5,t,t.return)}catch(B){Ne(t,t.return,B)}}break;case 1:bt(s,t),Ct(t),n&512&&r!==null&&Ws(r,r.return);break;case 5:if(bt(s,t),Ct(t),n&512&&r!==null&&Ws(r,r.return),t.flags&32){var a=t.stateNode;try{Qs(a,"")}catch(B){Ne(t,t.return,B)}}if(n&4&&(a=t.stateNode,a!=null)){var l=t.memoizedProps,c=r!==null?r.memoizedProps:l,h=t.type,p=t.updateQueue;if(t.updateQueue=null,p!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&vl(a,l),mi(h,c);var w=mi(h,l);for(c=0;c<p.length;c+=2){var P=p[c],O=p[c+1];P==="style"?Sl(a,O):P==="dangerouslySetInnerHTML"?wl(a,O):P==="children"?Qs(a,O):se(a,P,O,w)}switch(h){case"input":ai(a,l);break;case"textarea":jl(a,l);break;case"select":var E=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var _=l.value;_!=null?Ns(a,!!l.multiple,_,!1):E!==!!l.multiple&&(l.defaultValue!=null?Ns(a,!!l.multiple,l.defaultValue,!0):Ns(a,!!l.multiple,l.multiple?[]:"",!1))}a[jr]=l}catch(B){Ne(t,t.return,B)}}break;case 6:if(bt(s,t),Ct(t),n&4){if(t.stateNode===null)throw Error(o(162));a=t.stateNode,l=t.memoizedProps;try{a.nodeValue=l}catch(B){Ne(t,t.return,B)}}break;case 3:if(bt(s,t),Ct(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{or(s.containerInfo)}catch(B){Ne(t,t.return,B)}break;case 4:bt(s,t),Ct(t);break;case 13:bt(s,t),Ct(t),a=t.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Da=we())),n&4&&Wo(t);break;case 22:if(P=r!==null&&r.memoizedState!==null,t.mode&1?(Be=(w=Be)||P,bt(s,t),Be=w):bt(s,t),Ct(t),n&8192){if(w=t.memoizedState!==null,(t.stateNode.isHidden=w)&&!P&&t.mode&1)for(U=t,P=t.child;P!==null;){for(O=U=P;U!==null;){switch(E=U,_=E.child,E.tag){case 0:case 11:case 14:case 15:Or(4,E,E.return);break;case 1:Ws(E,E.return);var z=E.stateNode;if(typeof z.componentWillUnmount=="function"){n=E,r=E.return;try{s=n,z.props=s.memoizedProps,z.state=s.memoizedState,z.componentWillUnmount()}catch(B){Ne(n,r,B)}}break;case 5:Ws(E,E.return);break;case 22:if(E.memoizedState!==null){Ko(O);continue}}_!==null?(_.return=E,U=_):Ko(O)}P=P.sibling}e:for(P=null,O=t;;){if(O.tag===5){if(P===null){P=O;try{a=O.stateNode,w?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=O.stateNode,p=O.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null,h.style.display=Cl("display",c))}catch(B){Ne(t,t.return,B)}}}else if(O.tag===6){if(P===null)try{O.stateNode.nodeValue=w?"":O.memoizedProps}catch(B){Ne(t,t.return,B)}}else if((O.tag!==22&&O.tag!==23||O.memoizedState===null||O===t)&&O.child!==null){O.child.return=O,O=O.child;continue}if(O===t)break e;for(;O.sibling===null;){if(O.return===null||O.return===t)break e;P===O&&(P=null),O=O.return}P===O&&(P=null),O.sibling.return=O.return,O=O.sibling}}break;case 19:bt(s,t),Ct(t),n&4&&Wo(t);break;case 21:break;default:bt(s,t),Ct(t)}}function Ct(t){var s=t.flags;if(s&2){try{e:{for(var r=t.return;r!==null;){if(Uo(r)){var n=r;break e}r=r.return}throw Error(o(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Qs(a,""),n.flags&=-33);var l=zo(t);Aa(t,l,a);break;case 3:case 4:var c=n.stateNode.containerInfo,h=zo(t);Ha(t,h,c);break;default:throw Error(o(161))}}catch(p){Ne(t,t.return,p)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Vu(t,s,r){U=t,Vo(t)}function Vo(t,s,r){for(var n=(t.mode&1)!==0;U!==null;){var a=U,l=a.child;if(a.tag===22&&n){var c=a.memoizedState!==null||Dn;if(!c){var h=a.alternate,p=h!==null&&h.memoizedState!==null||Be;h=Dn;var w=Be;if(Dn=c,(Be=p)&&!w)for(U=a;U!==null;)c=U,p=c.child,c.tag===22&&c.memoizedState!==null?Yo(a):p!==null?(p.return=c,U=p):Yo(a);for(;l!==null;)U=l,Vo(l),l=l.sibling;U=a,Dn=h,Be=w}Go(t)}else a.subtreeFlags&8772&&l!==null?(l.return=a,U=l):Go(t)}}function Go(t){for(;U!==null;){var s=U;if(s.flags&8772){var r=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Be||_n(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!Be)if(r===null)n.componentDidMount();else{var a=s.elementType===s.type?r.memoizedProps:ft(s.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Gd(s,l,n);break;case 3:var c=s.updateQueue;if(c!==null){if(r=null,s.child!==null)switch(s.child.tag){case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}Gd(s,c,r)}break;case 5:var h=s.stateNode;if(r===null&&s.flags&4){r=h;var p=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var w=s.alternate;if(w!==null){var P=w.memoizedState;if(P!==null){var O=P.dehydrated;O!==null&&or(O)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Be||s.flags&512&&Ra(s)}catch(E){Ne(s,s.return,E)}}if(s===t){U=null;break}if(r=s.sibling,r!==null){r.return=s.return,U=r;break}U=s.return}}function Ko(t){for(;U!==null;){var s=U;if(s===t){U=null;break}var r=s.sibling;if(r!==null){r.return=s.return,U=r;break}U=s.return}}function Yo(t){for(;U!==null;){var s=U;try{switch(s.tag){case 0:case 11:case 15:var r=s.return;try{_n(4,s)}catch(p){Ne(s,r,p)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var a=s.return;try{n.componentDidMount()}catch(p){Ne(s,a,p)}}var l=s.return;try{Ra(s)}catch(p){Ne(s,l,p)}break;case 5:var c=s.return;try{Ra(s)}catch(p){Ne(s,c,p)}}}catch(p){Ne(s,s.return,p)}if(s===t){U=null;break}var h=s.sibling;if(h!==null){h.return=s.return,U=h;break}U=s.return}}var Gu=Math.ceil,Ln=ne.ReactCurrentDispatcher,Ma=ne.ReactCurrentOwner,ct=ne.ReactCurrentBatchConfig,ie=0,Re=null,Se=null,Ie=0,nt=0,qs=zt(0),Pe=0,Rr=null,xs=0,Un=0,Ia=0,Hr=null,Je=null,Da=0,Vs=1/0,Rt=null,zn=!1,_a=null,Kt=null,Bn=!1,Yt=null,Wn=0,Ar=0,La=null,qn=-1,Vn=0;function Ve(){return ie&6?we():qn!==-1?qn:qn=we()}function Jt(t){return t.mode&1?ie&2&&Ie!==0?Ie&-Ie:Pu.transition!==null?(Vn===0&&(Vn=Ul()),Vn):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Jl(t.type)),t):1}function gt(t,s,r,n){if(50<Ar)throw Ar=0,La=null,Error(o(185));nr(t,r,n),(!(ie&2)||t!==Re)&&(t===Re&&(!(ie&2)&&(Un|=r),Pe===4&&$t(t,Ie)),$e(t,n),r===1&&ie===0&&!(s.mode&1)&&(Vs=we()+500,gn&&Wt()))}function $e(t,s){var r=t.callbackNode;Pm(t,s);var n=Zr(t,t===Re?Ie:0);if(n===0)r!==null&&Dl(r),t.callbackNode=null,t.callbackPriority=0;else if(s=n&-n,t.callbackPriority!==s){if(r!=null&&Dl(r),s===1)t.tag===0?Fu($o.bind(null,t)):Ad($o.bind(null,t)),Cu(function(){!(ie&6)&&Wt()}),r=null;else{switch(zl(n)){case 1:r=bi;break;case 4:r=_l;break;case 16:r=Jr;break;case 536870912:r=Ll;break;default:r=Jr}r=nc(r,Jo.bind(null,t))}t.callbackPriority=s,t.callbackNode=r}}function Jo(t,s){if(qn=-1,Vn=0,ie&6)throw Error(o(327));var r=t.callbackNode;if(Gs()&&t.callbackNode!==r)return null;var n=Zr(t,t===Re?Ie:0);if(n===0)return null;if(n&30||n&t.expiredLanes||s)s=Gn(t,n);else{s=n;var a=ie;ie|=2;var l=Qo();(Re!==t||Ie!==s)&&(Rt=null,Vs=we()+500,ps(t,s));do try{Ju();break}catch(h){Xo(t,h)}while(!0);ra(),Ln.current=l,ie=a,Se!==null?s=0:(Re=null,Ie=0,s=Pe)}if(s!==0){if(s===2&&(a=gi(t),a!==0&&(n=a,s=Ua(t,a))),s===1)throw r=Rr,ps(t,0),$t(t,n),$e(t,we()),r;if(s===6)$t(t,n);else{if(a=t.current.alternate,!(n&30)&&!Ku(a)&&(s=Gn(t,n),s===2&&(l=gi(t),l!==0&&(n=l,s=Ua(t,l))),s===1))throw r=Rr,ps(t,0),$t(t,n),$e(t,we()),r;switch(t.finishedWork=a,t.finishedLanes=n,s){case 0:case 1:throw Error(o(345));case 2:fs(t,Je,Rt);break;case 3:if($t(t,n),(n&130023424)===n&&(s=Da+500-we(),10<s)){if(Zr(t,0)!==0)break;if(a=t.suspendedLanes,(a&n)!==n){Ve(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=Gi(fs.bind(null,t,Je,Rt),s);break}fs(t,Je,Rt);break;case 4:if($t(t,n),(n&4194240)===n)break;for(s=t.eventTimes,a=-1;0<n;){var c=31-xt(n);l=1<<c,c=s[c],c>a&&(a=c),n&=~l}if(n=a,n=we()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gu(n/1960))-n,10<n){t.timeoutHandle=Gi(fs.bind(null,t,Je,Rt),n);break}fs(t,Je,Rt);break;case 5:fs(t,Je,Rt);break;default:throw Error(o(329))}}}return $e(t,we()),t.callbackNode===r?Jo.bind(null,t):null}function Ua(t,s){var r=Hr;return t.current.memoizedState.isDehydrated&&(ps(t,s).flags|=256),t=Gn(t,s),t!==2&&(s=Je,Je=r,s!==null&&za(s)),t}function za(t){Je===null?Je=t:Je.push.apply(Je,t)}function Ku(t){for(var s=t;;){if(s.flags&16384){var r=s.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!ht(l(),a))return!1}catch{return!1}}}if(r=s.child,s.subtreeFlags&16384&&r!==null)r.return=s,s=r;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $t(t,s){for(s&=~Ia,s&=~Un,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var r=31-xt(s),n=1<<r;t[r]=-1,s&=~n}}function $o(t){if(ie&6)throw Error(o(327));Gs();var s=Zr(t,0);if(!(s&1))return $e(t,we()),null;var r=Gn(t,s);if(t.tag!==0&&r===2){var n=gi(t);n!==0&&(s=n,r=Ua(t,n))}if(r===1)throw r=Rr,ps(t,0),$t(t,s),$e(t,we()),r;if(r===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,fs(t,Je,Rt),$e(t,we()),null}function Ba(t,s){var r=ie;ie|=1;try{return t(s)}finally{ie=r,ie===0&&(Vs=we()+500,gn&&Wt())}}function hs(t){Yt!==null&&Yt.tag===0&&!(ie&6)&&Gs();var s=ie;ie|=1;var r=ct.transition,n=ce;try{if(ct.transition=null,ce=1,t)return t()}finally{ce=n,ct.transition=r,ie=s,!(ie&6)&&Wt()}}function Wa(){nt=qs.current,pe(qs)}function ps(t,s){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,wu(r)),Se!==null)for(r=Se.return;r!==null;){var n=r;switch(Qi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&vn();break;case 3:zs(),pe(Ge),pe(Le),ma();break;case 5:oa(n);break;case 4:zs();break;case 13:pe(je);break;case 19:pe(je);break;case 10:na(n.type._context);break;case 22:case 23:Wa()}r=r.return}if(Re=t,Se=t=Xt(t.current,null),Ie=nt=s,Pe=0,Rr=null,Ia=Un=xs=0,Je=Hr=null,cs!==null){for(s=0;s<cs.length;s++)if(r=cs[s],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var c=l.next;l.next=a,n.next=c}r.pending=n}cs=null}return t}function Xo(t,s){do{var r=Se;try{if(ra(),Pn.current=Hn,Tn){for(var n=ye.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Tn=!1}if(us=0,Oe=Fe=ye=null,kr=!1,Er=0,Ma.current=null,r===null||r.return===null){Pe=1,Rr=s,Se=null;break}e:{var l=t,c=r.return,h=r,p=s;if(s=Ie,h.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var w=p,P=h,O=P.tag;if(!(P.mode&1)&&(O===0||O===11||O===15)){var E=P.alternate;E?(P.updateQueue=E.updateQueue,P.memoizedState=E.memoizedState,P.lanes=E.lanes):(P.updateQueue=null,P.memoizedState=null)}var _=No(c);if(_!==null){_.flags&=-257,wo(_,c,h,l,s),_.mode&1&&yo(l,w,s),s=_,p=w;var z=s.updateQueue;if(z===null){var B=new Set;B.add(p),s.updateQueue=B}else z.add(p);break e}else{if(!(s&1)){yo(l,w,s),qa();break e}p=Error(o(426))}}else if(be&&h.mode&1){var Ce=No(c);if(Ce!==null){!(Ce.flags&65536)&&(Ce.flags|=256),wo(Ce,c,h,l,s),ta(Bs(p,h));break e}}l=p=Bs(p,h),Pe!==4&&(Pe=2),Hr===null?Hr=[l]:Hr.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var y=go(l,p,s);Vd(l,y);break e;case 1:h=p;var v=l.type,N=l.stateNode;if(!(l.flags&128)&&(typeof v.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Kt===null||!Kt.has(N)))){l.flags|=65536,s&=-s,l.lanes|=s;var H=jo(l,h,s);Vd(l,H);break e}}l=l.return}while(l!==null)}ec(r)}catch(W){s=W,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function Qo(){var t=Ln.current;return Ln.current=Hn,t===null?Hn:t}function qa(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||!(xs&268435455)&&!(Un&268435455)||$t(Re,Ie)}function Gn(t,s){var r=ie;ie|=2;var n=Qo();(Re!==t||Ie!==s)&&(Rt=null,ps(t,s));do try{Yu();break}catch(a){Xo(t,a)}while(!0);if(ra(),ie=r,Ln.current=n,Se!==null)throw Error(o(261));return Re=null,Ie=0,Pe}function Yu(){for(;Se!==null;)Zo(Se)}function Ju(){for(;Se!==null&&!jm();)Zo(Se)}function Zo(t){var s=rc(t.alternate,t,nt);t.memoizedProps=t.pendingProps,s===null?ec(t):Se=s,Ma.current=null}function ec(t){var s=t;do{var r=s.alternate;if(t=s.return,s.flags&32768){if(r=Bu(r,s),r!==null){r.flags&=32767,Se=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Se=null;return}}else if(r=zu(r,s,nt),r!==null){Se=r;return}if(s=s.sibling,s!==null){Se=s;return}Se=s=t}while(s!==null);Pe===0&&(Pe=5)}function fs(t,s,r){var n=ce,a=ct.transition;try{ct.transition=null,ce=1,$u(t,s,r,n)}finally{ct.transition=a,ce=n}return null}function $u(t,s,r,n){do Gs();while(Yt!==null);if(ie&6)throw Error(o(327));r=t.finishedWork;var a=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var l=r.lanes|r.childLanes;if(Tm(t,l),t===Re&&(Se=Re=null,Ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Bn||(Bn=!0,nc(Jr,function(){return Gs(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=ct.transition,ct.transition=null;var c=ce;ce=1;var h=ie;ie|=4,Ma.current=null,qu(t,r),qo(r,t),fu(qi),sn=!!Wi,qi=Wi=null,t.current=r,Vu(r),ym(),ie=h,ce=c,ct.transition=l}else t.current=r;if(Bn&&(Bn=!1,Yt=t,Wn=a),l=t.pendingLanes,l===0&&(Kt=null),Cm(r.stateNode),$e(t,we()),s!==null)for(n=t.onRecoverableError,r=0;r<s.length;r++)a=s[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(zn)throw zn=!1,t=_a,_a=null,t;return Wn&1&&t.tag!==0&&Gs(),l=t.pendingLanes,l&1?t===La?Ar++:(Ar=0,La=t):Ar=0,Wt(),null}function Gs(){if(Yt!==null){var t=zl(Wn),s=ct.transition,r=ce;try{if(ct.transition=null,ce=16>t?16:t,Yt===null)var n=!1;else{if(t=Yt,Yt=null,Wn=0,ie&6)throw Error(o(331));var a=ie;for(ie|=4,U=t.current;U!==null;){var l=U,c=l.child;if(U.flags&16){var h=l.deletions;if(h!==null){for(var p=0;p<h.length;p++){var w=h[p];for(U=w;U!==null;){var P=U;switch(P.tag){case 0:case 11:case 15:Or(8,P,l)}var O=P.child;if(O!==null)O.return=P,U=O;else for(;U!==null;){P=U;var E=P.sibling,_=P.return;if(Lo(P),P===w){U=null;break}if(E!==null){E.return=_,U=E;break}U=_}}}var z=l.alternate;if(z!==null){var B=z.child;if(B!==null){z.child=null;do{var Ce=B.sibling;B.sibling=null,B=Ce}while(B!==null)}}U=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,U=c;else e:for(;U!==null;){if(l=U,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Or(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,U=y;break e}U=l.return}}var v=t.current;for(U=v;U!==null;){c=U;var N=c.child;if(c.subtreeFlags&2064&&N!==null)N.return=c,U=N;else e:for(c=v;U!==null;){if(h=U,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:_n(9,h)}}catch(W){Ne(h,h.return,W)}if(h===c){U=null;break e}var H=h.sibling;if(H!==null){H.return=h.return,U=H;break e}U=h.return}}if(ie=a,Wt(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot($r,t)}catch{}n=!0}return n}finally{ce=r,ct.transition=s}}return!1}function tc(t,s,r){s=Bs(r,s),s=go(t,s,1),t=Vt(t,s,1),s=Ve(),t!==null&&(nr(t,1,s),$e(t,s))}function Ne(t,s,r){if(t.tag===3)tc(t,t,r);else for(;s!==null;){if(s.tag===3){tc(s,t,r);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Kt===null||!Kt.has(n))){t=Bs(r,t),t=jo(s,t,1),s=Vt(s,t,1),t=Ve(),s!==null&&(nr(s,1,t),$e(s,t));break}}s=s.return}}function Xu(t,s,r){var n=t.pingCache;n!==null&&n.delete(s),s=Ve(),t.pingedLanes|=t.suspendedLanes&r,Re===t&&(Ie&r)===r&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>we()-Da?ps(t,0):Ia|=r),$e(t,s)}function sc(t,s){s===0&&(t.mode&1?(s=Qr,Qr<<=1,!(Qr&130023424)&&(Qr=4194304)):s=1);var r=Ve();t=Pt(t,s),t!==null&&(nr(t,s,r),$e(t,r))}function Qu(t){var s=t.memoizedState,r=0;s!==null&&(r=s.retryLane),sc(t,r)}function Zu(t,s){var r=0;switch(t.tag){case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(o(314))}n!==null&&n.delete(s),sc(t,r)}var rc;rc=function(t,s,r){if(t!==null)if(t.memoizedProps!==s.pendingProps||Ge.current)Ye=!0;else{if(!(t.lanes&r)&&!(s.flags&128))return Ye=!1,Uu(t,s,r);Ye=!!(t.flags&131072)}else Ye=!1,be&&s.flags&1048576&&Md(s,yn,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;In(t,s),t=s.pendingProps;var a=As(s,Le.current);Us(s,r),a=ha(null,s,n,t,a,r);var l=pa();return s.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ke(n)?(l=!0,bn(s)):l=!1,s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,la(s),a.updater=An,s.stateNode=a,a._reactInternals=s,ya(s,n,t,r),s=Sa(null,s,n,!0,l,r)):(s.tag=0,be&&l&&Xi(s),qe(null,s,a,r),s=s.child),s;case 16:n=s.elementType;e:{switch(In(t,s),t=s.pendingProps,a=n._init,n=a(n._payload),s.type=n,a=s.tag=tx(n),t=ft(n,t),a){case 0:s=Ca(null,s,n,t,r);break e;case 1:s=Po(null,s,n,t,r);break e;case 11:s=Co(null,s,n,t,r);break e;case 14:s=So(null,s,n,ft(n.type,t),r);break e}throw Error(o(306,n,""))}return s;case 0:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),Ca(t,s,n,a,r);case 1:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),Po(t,s,n,a,r);case 3:e:{if(To(s),t===null)throw Error(o(387));n=s.pendingProps,l=s.memoizedState,a=l.element,qd(t,s),En(s,n,null,r);var c=s.memoizedState;if(n=c.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){a=Bs(Error(o(423)),s),s=Oo(t,s,n,r,a);break e}else if(n!==a){a=Bs(Error(o(424)),s),s=Oo(t,s,n,r,a);break e}else for(rt=Ut(s.stateNode.containerInfo.firstChild),st=s,be=!0,pt=null,r=Bd(s,null,n,r),s.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ds(),n===a){s=Ot(t,s,r);break e}qe(t,s,n,r)}s=s.child}return s;case 5:return Kd(s),t===null&&ea(s),n=s.type,a=s.pendingProps,l=t!==null?t.memoizedProps:null,c=a.children,Vi(n,a)?c=null:l!==null&&Vi(n,l)&&(s.flags|=32),Fo(t,s),qe(t,s,c,r),s.child;case 6:return t===null&&ea(s),null;case 13:return Ro(t,s,r);case 4:return da(s,s.stateNode.containerInfo),n=s.pendingProps,t===null?s.child=_s(s,null,n,r):qe(t,s,n,r),s.child;case 11:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),Co(t,s,n,a,r);case 7:return qe(t,s,s.pendingProps,r),s.child;case 8:return qe(t,s,s.pendingProps.children,r),s.child;case 12:return qe(t,s,s.pendingProps.children,r),s.child;case 10:e:{if(n=s.type._context,a=s.pendingProps,l=s.memoizedProps,c=a.value,ue(Cn,n._currentValue),n._currentValue=c,l!==null)if(ht(l.value,c)){if(l.children===a.children&&!Ge.current){s=Ot(t,s,r);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var h=l.dependencies;if(h!==null){c=l.child;for(var p=h.firstContext;p!==null;){if(p.context===n){if(l.tag===1){p=Tt(-1,r&-r),p.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var P=w.pending;P===null?p.next=p:(p.next=P.next,P.next=p),w.pending=p}}l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),ia(l.return,r,s),h.lanes|=r;break}p=p.next}}else if(l.tag===10)c=l.type===s.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(o(341));c.lanes|=r,h=c.alternate,h!==null&&(h.lanes|=r),ia(c,r,s),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===s){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}qe(t,s,a.children,r),s=s.child}return s;case 9:return a=s.type,n=s.pendingProps.children,Us(s,r),a=dt(a),n=n(a),s.flags|=1,qe(t,s,n,r),s.child;case 14:return n=s.type,a=ft(n,s.pendingProps),a=ft(n.type,a),So(t,s,n,a,r);case 15:return ko(t,s,s.type,s.pendingProps,r);case 17:return n=s.type,a=s.pendingProps,a=s.elementType===n?a:ft(n,a),In(t,s),s.tag=1,Ke(n)?(t=!0,bn(s)):t=!1,Us(s,r),vo(s,n,a),ya(s,n,a,r),Sa(null,s,n,!0,t,r);case 19:return Ao(t,s,r);case 22:return Eo(t,s,r)}throw Error(o(156,s.tag))};function nc(t,s){return Il(t,s)}function ex(t,s,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,s,r,n){return new ex(t,s,r,n)}function Va(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tx(t){if(typeof t=="function")return Va(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===Ze)return 14}return 2}function Xt(t,s){var r=t.alternate;return r===null?(r=mt(t.tag,s,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=s,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,s=t.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Kn(t,s,r,n,a,l){var c=2;if(n=t,typeof t=="function")Va(t)&&(c=1);else if(typeof t=="string")c=5;else e:switch(t){case Ae:return vs(r.children,a,l,s);case We:c=8,a|=8;break;case it:return t=mt(12,r,s,a|2),t.elementType=it,t.lanes=l,t;case De:return t=mt(13,r,s,a),t.elementType=De,t.lanes=l,t;case _e:return t=mt(19,r,s,a),t.elementType=_e,t.lanes=l,t;case xe:return Yn(r,a,l,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qe:c=10;break e;case ut:c=9;break e;case re:c=11;break e;case Ze:c=14;break e;case Ee:c=16,n=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return s=mt(c,r,s,a),s.elementType=t,s.type=n,s.lanes=l,s}function vs(t,s,r,n){return t=mt(7,t,n,s),t.lanes=r,t}function Yn(t,s,r,n){return t=mt(22,t,n,s),t.elementType=xe,t.lanes=r,t.stateNode={isHidden:!1},t}function Ga(t,s,r){return t=mt(6,t,null,s),t.lanes=r,t}function Ka(t,s,r){return s=mt(4,t.children!==null?t.children:[],t.key,s),s.lanes=r,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function sx(t,s,r,n,a){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ya(t,s,r,n,a,l,c,h,p){return t=new sx(t,s,r,h,p),s===1?(s=1,l===!0&&(s|=8)):s=0,l=mt(3,null,null,s),t.current=l,l.stateNode=t,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(l),t}function rx(t,s,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:n==null?null:""+n,children:t,containerInfo:s,implementation:r}}function ic(t){if(!t)return Bt;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(o(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ke(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(o(171))}if(t.tag===1){var r=t.type;if(Ke(r))return Rd(t,r,s)}return s}function ac(t,s,r,n,a,l,c,h,p){return t=Ya(r,n,!0,t,a,l,c,h,p),t.context=ic(null),r=t.current,n=Ve(),a=Jt(r),l=Tt(n,a),l.callback=s??null,Vt(r,l,a),t.current.lanes=a,nr(t,a,n),$e(t,n),t}function Jn(t,s,r,n){var a=s.current,l=Ve(),c=Jt(a);return r=ic(r),s.context===null?s.context=r:s.pendingContext=r,s=Tt(l,c),s.payload={element:t},n=n===void 0?null:n,n!==null&&(s.callback=n),t=Vt(a,s,c),t!==null&&(gt(t,a,c,l),kn(t,a,c)),c}function $n(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lc(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<s?r:s}}function Ja(t,s){lc(t,s),(t=t.alternate)&&lc(t,s)}function nx(){return null}var dc=typeof reportError=="function"?reportError:function(t){console.error(t)};function $a(t){this._internalRoot=t}Xn.prototype.render=$a.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(o(409));Jn(t,s,null,null)},Xn.prototype.unmount=$a.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;hs(function(){Jn(null,t,null,null)}),s[St]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var s=ql();t={blockedOn:null,target:t,priority:s};for(var r=0;r<Dt.length&&s!==0&&s<Dt[r].priority;r++);Dt.splice(r,0,t),r===0&&Kl(t)}};function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qn(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oc(){}function ix(t,s,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var w=$n(c);l.call(w)}}var c=ac(s,n,t,0,null,!1,!1,"",oc);return t._reactRootContainer=c,t[St]=c.current,br(t.nodeType===8?t.parentNode:t),hs(),c}for(;a=t.lastChild;)t.removeChild(a);if(typeof n=="function"){var h=n;n=function(){var w=$n(p);h.call(w)}}var p=Ya(t,0,!1,null,null,!1,!1,"",oc);return t._reactRootContainer=p,t[St]=p.current,br(t.nodeType===8?t.parentNode:t),hs(function(){Jn(s,p,r,n)}),p}function Zn(t,s,r,n,a){var l=r._reactRootContainer;if(l){var c=l;if(typeof a=="function"){var h=a;a=function(){var p=$n(c);h.call(p)}}Jn(s,c,t,a)}else c=ix(r,s,t,a,n);return $n(c)}Bl=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var r=rr(s.pendingLanes);r!==0&&(yi(s,r|1),$e(s,we()),!(ie&6)&&(Vs=we()+500,Wt()))}break;case 13:hs(function(){var n=Pt(t,1);if(n!==null){var a=Ve();gt(n,t,1,a)}}),Ja(t,1)}},Ni=function(t){if(t.tag===13){var s=Pt(t,134217728);if(s!==null){var r=Ve();gt(s,t,134217728,r)}Ja(t,134217728)}},Wl=function(t){if(t.tag===13){var s=Jt(t),r=Pt(t,s);if(r!==null){var n=Ve();gt(r,t,s,n)}Ja(t,s)}},ql=function(){return ce},Vl=function(t,s){var r=ce;try{return ce=t,s()}finally{ce=r}},hi=function(t,s,r){switch(s){case"input":if(ai(t,r),s=r.name,r.type==="radio"&&s!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<r.length;s++){var n=r[s];if(n!==t&&n.form===t.form){var a=fn(n);if(!a)throw Error(o(90));pl(n),ai(n,a)}}}break;case"textarea":jl(t,r);break;case"select":s=r.value,s!=null&&Ns(t,!!r.multiple,s,!1)}},Pl=Ba,Tl=hs;var ax={usingClientEntryPoint:!1,Events:[yr,Rs,fn,El,Fl,Ba]},Mr={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Al(t),t===null?null:t.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{$r=ei.inject(lx),jt=ei}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax,Xe.createPortal=function(t,s){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(s))throw Error(o(200));return rx(t,s,null,r)},Xe.createRoot=function(t,s){if(!Xa(t))throw Error(o(299));var r=!1,n="",a=dc;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(a=s.onRecoverableError)),s=Ya(t,1,!1,null,null,r,!1,n,a),t[St]=s.current,br(t.nodeType===8?t.parentNode:t),new $a(s)},Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=Al(s),t=t===null?null:t.stateNode,t},Xe.flushSync=function(t){return hs(t)},Xe.hydrate=function(t,s,r){if(!Qn(s))throw Error(o(200));return Zn(null,t,s,!0,r)},Xe.hydrateRoot=function(t,s,r){if(!Xa(t))throw Error(o(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",c=dc;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),s=ac(s,null,t,1,r??null,a,!1,l,c),t[St]=s.current,br(t),n)for(t=0;t<n.length;t++)r=n[t],a=r._getVersion,a=a(r._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[r,a]:s.mutableSourceEagerHydrationData.push(r,a);return new Xn(s)},Xe.render=function(t,s,r){if(!Qn(s))throw Error(o(200));return Zn(null,t,s,!1,r)},Xe.unmountComponentAtNode=function(t){if(!Qn(t))throw Error(o(40));return t._reactRootContainer?(hs(function(){Zn(null,null,t,!1,function(){t._reactRootContainer=null,t[St]=null})}),!0):!1},Xe.unstable_batchedUpdates=Ba,Xe.unstable_renderSubtreeIntoContainer=function(t,s,r,n){if(!Qn(r))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Zn(t,s,r,!1,n)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var vc;function Dc(){if(vc)return el.exports;vc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),el.exports=fx(),el.exports}var bc;function vx(){if(bc)return ti;bc=1;var i=Dc();return ti.createRoot=i.createRoot,ti.hydrateRoot=i.hydrateRoot,ti}var bx=vx();Dc();/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},Ur.apply(this,arguments)}var ss;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(ss||(ss={}));const gc="popstate";function gx(i){i===void 0&&(i={});function d(u,m){let{pathname:x,search:f,hash:g}=u.location;return il("",{pathname:x,search:f,hash:g},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){return typeof m=="string"?m:si(m)}return yx(d,o,null,i)}function ke(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}function cl(i,d){if(!i){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function jx(){return Math.random().toString(36).substr(2,8)}function jc(i,d){return{usr:i.state,key:i.key,idx:d}}function il(i,d,o,u){return o===void 0&&(o=null),Ur({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof d=="string"?Js(d):d,{state:o,key:d&&d.key||u||jx()})}function si(i){let{pathname:d="/",search:o="",hash:u=""}=i;return o&&o!=="?"&&(d+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(d+=u.charAt(0)==="#"?u:"#"+u),d}function Js(i){let d={};if(i){let o=i.indexOf("#");o>=0&&(d.hash=i.substr(o),i=i.substr(0,o));let u=i.indexOf("?");u>=0&&(d.search=i.substr(u),i=i.substr(0,u)),i&&(d.pathname=i)}return d}function yx(i,d,o,u){u===void 0&&(u={});let{window:m=document.defaultView,v5Compat:x=!1}=u,f=m.history,g=ss.Pop,j=null,C=k();C==null&&(C=0,f.replaceState(Ur({},f.state,{idx:C}),""));function k(){return(f.state||{idx:null}).idx}function S(){g=ss.Pop;let T=k(),$=T==null?null:T-C;C=T,j&&j({action:g,location:D.location,delta:$})}function A(T,$){g=ss.Push;let Q=il(D.location,T,$);C=k()+1;let se=jc(Q,C),ne=D.createHref(Q);try{f.pushState(se,"",ne)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;m.location.assign(ne)}x&&j&&j({action:g,location:D.location,delta:1})}function K(T,$){g=ss.Replace;let Q=il(D.location,T,$);C=k();let se=jc(Q,C),ne=D.createHref(Q);f.replaceState(se,"",ne),x&&j&&j({action:g,location:D.location,delta:0})}function J(T){let $=m.location.origin!=="null"?m.location.origin:m.location.href,Q=typeof T=="string"?T:si(T);return Q=Q.replace(/ $/,"%20"),ke($,"No window.location.(origin|href) available to create URL for href: "+Q),new URL(Q,$)}let D={get action(){return g},get location(){return i(m,f)},listen(T){if(j)throw new Error("A history only accepts one active listener");return m.addEventListener(gc,S),j=T,()=>{m.removeEventListener(gc,S),j=null}},createHref(T){return d(m,T)},createURL:J,encodeLocation(T){let $=J(T);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:A,replace:K,go(T){return f.go(T)}};return D}var yc;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(yc||(yc={}));function Nx(i,d,o){return o===void 0&&(o="/"),wx(i,d,o)}function wx(i,d,o,u){let m=typeof d=="string"?Js(d):d,x=ml(m.pathname||"/",o);if(x==null)return null;let f=_c(i);Cx(f);let g=null;for(let j=0;g==null&&j<f.length;++j){let C=Ix(x);g=Hx(f[j],C)}return g}function _c(i,d,o,u){d===void 0&&(d=[]),o===void 0&&(o=[]),u===void 0&&(u="");let m=(x,f,g)=>{let j={relativePath:g===void 0?x.path||"":g,caseSensitive:x.caseSensitive===!0,childrenIndex:f,route:x};j.relativePath.startsWith("/")&&(ke(j.relativePath.startsWith(u),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(u.length));let C=rs([u,j.relativePath]),k=o.concat(j);x.children&&x.children.length>0&&(ke(x.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+C+'".')),_c(x.children,d,k,C)),!(x.path==null&&!x.index)&&d.push({path:C,score:Ox(C,x.index),routesMeta:k})};return i.forEach((x,f)=>{var g;if(x.path===""||!((g=x.path)!=null&&g.includes("?")))m(x,f);else for(let j of Lc(x.path))m(x,f,j)}),d}function Lc(i){let d=i.split("/");if(d.length===0)return[];let[o,...u]=d,m=o.endsWith("?"),x=o.replace(/\?$/,"");if(u.length===0)return m?[x,""]:[x];let f=Lc(u.join("/")),g=[];return g.push(...f.map(j=>j===""?x:[x,j].join("/"))),m&&g.push(...f),g.map(j=>i.startsWith("/")&&j===""?"/":j)}function Cx(i){i.sort((d,o)=>d.score!==o.score?o.score-d.score:Rx(d.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}const Sx=/^:[\w-]+$/,kx=3,Ex=2,Fx=1,Px=10,Tx=-2,Nc=i=>i==="*";function Ox(i,d){let o=i.split("/"),u=o.length;return o.some(Nc)&&(u+=Tx),d&&(u+=Ex),o.filter(m=>!Nc(m)).reduce((m,x)=>m+(Sx.test(x)?kx:x===""?Fx:Px),u)}function Rx(i,d){return i.length===d.length&&i.slice(0,-1).every((u,m)=>u===d[m])?i[i.length-1]-d[d.length-1]:0}function Hx(i,d,o){let{routesMeta:u}=i,m={},x="/",f=[];for(let g=0;g<u.length;++g){let j=u[g],C=g===u.length-1,k=x==="/"?d:d.slice(x.length)||"/",S=Ax({path:j.relativePath,caseSensitive:j.caseSensitive,end:C},k),A=j.route;if(!S)return null;Object.assign(m,S.params),f.push({params:m,pathname:rs([x,S.pathname]),pathnameBase:zx(rs([x,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(x=rs([x,S.pathnameBase]))}return f}function Ax(i,d){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,u]=Mx(i.path,i.caseSensitive,i.end),m=d.match(o);if(!m)return null;let x=m[0],f=x.replace(/(.)\/+$/,"$1"),g=m.slice(1);return{params:u.reduce((C,k,S)=>{let{paramName:A,isOptional:K}=k;if(A==="*"){let D=g[S]||"";f=x.slice(0,x.length-D.length).replace(/(.)\/+$/,"$1")}const J=g[S];return K&&!J?C[A]=void 0:C[A]=(J||"").replace(/%2F/g,"/"),C},{}),pathname:x,pathnameBase:f,pattern:i}}function Mx(i,d,o){d===void 0&&(d=!1),o===void 0&&(o=!0),cl(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let u=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,j)=>(u.push({paramName:g,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,d?void 0:"i"),u]}function Ix(i){try{return i.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return cl(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),i}}function ml(i,d){if(d==="/")return i;if(!i.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,u=i.charAt(o);return u&&u!=="/"?null:i.slice(o)||"/"}const Dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_x=i=>Dx.test(i);function Lx(i,d){d===void 0&&(d="/");let{pathname:o,search:u="",hash:m=""}=typeof i=="string"?Js(i):i,x;if(o)if(_x(o))x=o;else{if(o.includes("//")){let f=o;o=o.replace(/\/\/+/g,"/"),cl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+o))}o.startsWith("/")?x=wc(o.substring(1),"/"):x=wc(o,d)}else x=d;return{pathname:x,search:Bx(u),hash:Wx(m)}}function wc(i,d){let o=d.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?o.length>1&&o.pop():m!=="."&&o.push(m)}),o.length>1?o.join("/"):"/"}function rl(i,d,o,u){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ux(i){return i.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function Uc(i,d){let o=Ux(i);return d?o.map((u,m)=>m===o.length-1?u.pathname:u.pathnameBase):o.map(u=>u.pathnameBase)}function zc(i,d,o,u){u===void 0&&(u=!1);let m;typeof i=="string"?m=Js(i):(m=Ur({},i),ke(!m.pathname||!m.pathname.includes("?"),rl("?","pathname","search",m)),ke(!m.pathname||!m.pathname.includes("#"),rl("#","pathname","hash",m)),ke(!m.search||!m.search.includes("#"),rl("#","search","hash",m)));let x=i===""||m.pathname==="",f=x?"/":m.pathname,g;if(f==null)g=o;else{let S=d.length-1;if(!u&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),S-=1;m.pathname=A.join("/")}g=S>=0?d[S]:"/"}let j=Lx(m,g),C=f&&f!=="/"&&f.endsWith("/"),k=(x||f===".")&&o.endsWith("/");return!j.pathname.endsWith("/")&&(C||k)&&(j.pathname+="/"),j}const rs=i=>i.join("/").replace(/\/\/+/g,"/"),zx=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Wx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function qx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Bc=["post","put","patch","delete"];new Set(Bc);const Vx=["get",...Bc];new Set(Vx);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},zr.apply(this,arguments)}const ul=R.createContext(null),Gx=R.createContext(null),js=R.createContext(null),ni=R.createContext(null),ys=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Wc=R.createContext(null);function Kx(i,d){let{relative:o}=d===void 0?{}:d;Br()||ke(!1);let{basename:u,navigator:m}=R.useContext(js),{hash:x,pathname:f,search:g}=Vc(i,{relative:o}),j=f;return u!=="/"&&(j=f==="/"?u:rs([u,f])),m.createHref({pathname:j,search:g,hash:x})}function Br(){return R.useContext(ni)!=null}function Wr(){return Br()||ke(!1),R.useContext(ni).location}function qc(i){R.useContext(js).static||R.useLayoutEffect(i)}function Yx(){let{isDataRoute:i}=R.useContext(ys);return i?lh():Jx()}function Jx(){Br()||ke(!1);let i=R.useContext(ul),{basename:d,future:o,navigator:u}=R.useContext(js),{matches:m}=R.useContext(ys),{pathname:x}=Wr(),f=JSON.stringify(Uc(m,o.v7_relativeSplatPath)),g=R.useRef(!1);return qc(()=>{g.current=!0}),R.useCallback(function(C,k){if(k===void 0&&(k={}),!g.current)return;if(typeof C=="number"){u.go(C);return}let S=zc(C,JSON.parse(f),x,k.relative==="path");i==null&&d!=="/"&&(S.pathname=S.pathname==="/"?d:rs([d,S.pathname])),(k.replace?u.replace:u.push)(S,k.state,k)},[d,u,f,x,i])}function Vc(i,d){let{relative:o}=d===void 0?{}:d,{future:u}=R.useContext(js),{matches:m}=R.useContext(ys),{pathname:x}=Wr(),f=JSON.stringify(Uc(m,u.v7_relativeSplatPath));return R.useMemo(()=>zc(i,JSON.parse(f),x,o==="path"),[i,f,x,o])}function $x(i,d){return Xx(i,d)}function Xx(i,d,o,u){Br()||ke(!1);let{navigator:m}=R.useContext(js),{matches:x}=R.useContext(ys),f=x[x.length-1],g=f?f.params:{};f&&f.pathname;let j=f?f.pathnameBase:"/";f&&f.route;let C=Wr(),k;if(d){var S;let T=typeof d=="string"?Js(d):d;j==="/"||(S=T.pathname)!=null&&S.startsWith(j)||ke(!1),k=T}else k=C;let A=k.pathname||"/",K=A;if(j!=="/"){let T=j.replace(/^\//,"").split("/");K="/"+A.replace(/^\//,"").split("/").slice(T.length).join("/")}let J=Nx(i,{pathname:K}),D=sh(J&&J.map(T=>Object.assign({},T,{params:Object.assign({},g,T.params),pathname:rs([j,m.encodeLocation?m.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?j:rs([j,m.encodeLocation?m.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),x,o,u);return d&&D?R.createElement(ni.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:ss.Pop}},D):D}function Qx(){let i=ah(),d=qx(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),o?R.createElement("pre",{style:m},o):null,null)}const Zx=R.createElement(Qx,null);class eh extends R.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,o){return o.location!==d.location||o.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:o.error,location:o.location,revalidation:d.revalidation||o.revalidation}}componentDidCatch(d,o){console.error("React Router caught the following error during render",d,o)}render(){return this.state.error!==void 0?R.createElement(ys.Provider,{value:this.props.routeContext},R.createElement(Wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function th(i){let{routeContext:d,match:o,children:u}=i,m=R.useContext(ul);return m&&m.static&&m.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(ys.Provider,{value:d},u)}function sh(i,d,o,u){var m;if(d===void 0&&(d=[]),o===void 0&&(o=null),u===void 0&&(u=null),i==null){var x;if(!o)return null;if(o.errors)i=o.matches;else if((x=u)!=null&&x.v7_partialHydration&&d.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let f=i,g=(m=o)==null?void 0:m.errors;if(g!=null){let k=f.findIndex(S=>S.route.id&&(g==null?void 0:g[S.route.id])!==void 0);k>=0||ke(!1),f=f.slice(0,Math.min(f.length,k+1))}let j=!1,C=-1;if(o&&u&&u.v7_partialHydration)for(let k=0;k<f.length;k++){let S=f[k];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(C=k),S.route.id){let{loaderData:A,errors:K}=o,J=S.route.loader&&A[S.route.id]===void 0&&(!K||K[S.route.id]===void 0);if(S.route.lazy||J){j=!0,C>=0?f=f.slice(0,C+1):f=[f[0]];break}}}return f.reduceRight((k,S,A)=>{let K,J=!1,D=null,T=null;o&&(K=g&&S.route.id?g[S.route.id]:void 0,D=S.route.errorElement||Zx,j&&(C<0&&A===0?(dh("route-fallback"),J=!0,T=null):C===A&&(J=!0,T=S.route.hydrateFallbackElement||null)));let $=d.concat(f.slice(0,A+1)),Q=()=>{let se;return K?se=D:J?se=T:S.route.Component?se=R.createElement(S.route.Component,null):S.route.element?se=S.route.element:se=k,R.createElement(th,{match:S,routeContext:{outlet:k,matches:$,isDataRoute:o!=null},children:se})};return o&&(S.route.ErrorBoundary||S.route.errorElement||A===0)?R.createElement(eh,{location:o.location,revalidation:o.revalidation,component:D,error:K,children:Q(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):Q()},null)}var Gc=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(Gc||{}),Kc=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Kc||{});function rh(i){let d=R.useContext(ul);return d||ke(!1),d}function nh(i){let d=R.useContext(Gx);return d||ke(!1),d}function ih(i){let d=R.useContext(ys);return d||ke(!1),d}function Yc(i){let d=ih(),o=d.matches[d.matches.length-1];return o.route.id||ke(!1),o.route.id}function ah(){var i;let d=R.useContext(Wc),o=nh(),u=Yc();return d!==void 0?d:(i=o.errors)==null?void 0:i[u]}function lh(){let{router:i}=rh(Gc.UseNavigateStable),d=Yc(Kc.UseNavigateStable),o=R.useRef(!1);return qc(()=>{o.current=!0}),R.useCallback(function(m,x){x===void 0&&(x={}),o.current&&(typeof m=="number"?i.navigate(m):i.navigate(m,zr({fromRouteId:d},x)))},[i,d])}const Cc={};function dh(i,d,o){Cc[i]||(Cc[i]=!0)}function oh(i,d){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function Ks(i){ke(!1)}function ch(i){let{basename:d="/",children:o=null,location:u,navigationType:m=ss.Pop,navigator:x,static:f=!1,future:g}=i;Br()&&ke(!1);let j=d.replace(/^\/*/,"/"),C=R.useMemo(()=>({basename:j,navigator:x,static:f,future:zr({v7_relativeSplatPath:!1},g)}),[j,g,x,f]);typeof u=="string"&&(u=Js(u));let{pathname:k="/",search:S="",hash:A="",state:K=null,key:J="default"}=u,D=R.useMemo(()=>{let T=ml(k,j);return T==null?null:{location:{pathname:T,search:S,hash:A,state:K,key:J},navigationType:m}},[j,k,S,A,K,J,m]);return D==null?null:R.createElement(js.Provider,{value:C},R.createElement(ni.Provider,{children:o,value:D}))}function mh(i){let{children:d,location:o}=i;return $x(al(d),o)}new Promise(()=>{});function al(i,d){d===void 0&&(d=[]);let o=[];return R.Children.forEach(i,(u,m)=>{if(!R.isValidElement(u))return;let x=[...d,m];if(u.type===R.Fragment){o.push.apply(o,al(u.props.children,x));return}u.type!==Ks&&ke(!1),!u.props.index||!u.props.children||ke(!1);let f={id:u.props.id||x.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=al(u.props.children,x)),o.push(f)}),o}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var o=arguments[d];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},ll.apply(this,arguments)}function uh(i,d){if(i==null)return{};var o={},u=Object.keys(i),m,x;for(x=0;x<u.length;x++)m=u[x],!(d.indexOf(m)>=0)&&(o[m]=i[m]);return o}function xh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function hh(i,d){return i.button===0&&(!d||d==="_self")&&!xh(i)}const ph=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fh="6";try{window.__reactRouterVersion=fh}catch{}const vh="startTransition",Sc=Ic[vh];function bh(i){let{basename:d,children:o,future:u,window:m}=i,x=R.useRef();x.current==null&&(x.current=gx({window:m,v5Compat:!0}));let f=x.current,[g,j]=R.useState({action:f.action,location:f.location}),{v7_startTransition:C}=u||{},k=R.useCallback(S=>{C&&Sc?Sc(()=>j(S)):j(S)},[j,C]);return R.useLayoutEffect(()=>f.listen(k),[f,k]),R.useEffect(()=>oh(u),[u]),R.createElement(ch,{basename:d,children:o,location:g.location,navigationType:g.action,navigator:f,future:u})}const gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kc=R.forwardRef(function(d,o){let{onClick:u,relative:m,reloadDocument:x,replace:f,state:g,target:j,to:C,preventScrollReset:k,viewTransition:S}=d,A=uh(d,ph),{basename:K}=R.useContext(js),J,D=!1;if(typeof C=="string"&&jh.test(C)&&(J=C,gh))try{let se=new URL(window.location.href),ne=C.startsWith("//")?new URL(se.protocol+C):new URL(C),ge=ml(ne.pathname,K);ne.origin===se.origin&&ge!=null?C=ge+ne.search+ne.hash:D=!0}catch{}let T=Kx(C,{relative:m}),$=yh(C,{replace:f,state:g,target:j,preventScrollReset:k,relative:m,viewTransition:S});function Q(se){u&&u(se),se.defaultPrevented||$(se)}return R.createElement("a",ll({},A,{href:J||T,onClick:D||x?u:Q,ref:o,target:j}))});var Ec;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Ec||(Ec={}));var Fc;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Fc||(Fc={}));function yh(i,d){let{target:o,replace:u,state:m,preventScrollReset:x,relative:f,viewTransition:g}=d===void 0?{}:d,j=Yx(),C=Wr(),k=Vc(i,{relative:f});return R.useCallback(S=>{if(hh(S,o)){S.preventDefault();let A=u!==void 0?u:si(C)===si(k);j(i,{replace:A,state:m,preventScrollReset:x,relative:f,viewTransition:g})}},[C,j,k,u,m,o,i,x,f,g])}function Pc(i,d){if(typeof i=="function")return i(d);i!=null&&(i.current=d)}function Nh(...i){return d=>{let o=!1;const u=i.map(m=>{const x=Pc(m,d);return!o&&typeof x=="function"&&(o=!0),x});if(o)return()=>{for(let m=0;m<u.length;m++){const x=u[m];typeof x=="function"?x():Pc(i[m],null)}}}}var wh=Symbol.for("react.lazy"),ri=Ic[" use ".trim().toString()];function Ch(i){return typeof i=="object"&&i!==null&&"then"in i}function Jc(i){return i!=null&&typeof i=="object"&&"$$typeof"in i&&i.$$typeof===wh&&"_payload"in i&&Ch(i._payload)}function $c(i){const d=kh(i),o=R.forwardRef((u,m)=>{let{children:x,...f}=u;Jc(x)&&typeof ri=="function"&&(x=ri(x._payload));const g=R.Children.toArray(x),j=g.find(Fh);if(j){const C=j.props.children,k=g.map(S=>S===j?R.Children.count(C)>1?R.Children.only(null):R.isValidElement(C)?C.props.children:null:S);return e.jsx(d,{...f,ref:m,children:R.isValidElement(C)?R.cloneElement(C,void 0,k):null})}return e.jsx(d,{...f,ref:m,children:x})});return o.displayName=`${i}.Slot`,o}var Sh=$c("Slot");function kh(i){const d=R.forwardRef((o,u)=>{let{children:m,...x}=o;if(Jc(m)&&typeof ri=="function"&&(m=ri(m._payload)),R.isValidElement(m)){const f=Th(m),g=Ph(x,m.props);return m.type!==R.Fragment&&(g.ref=u?Nh(u,f):f),R.cloneElement(m,g)}return R.Children.count(m)>1?R.Children.only(null):null});return d.displayName=`${i}.SlotClone`,d}var Eh=Symbol("radix.slottable");function Fh(i){return R.isValidElement(i)&&typeof i.type=="function"&&"__radixId"in i.type&&i.type.__radixId===Eh}function Ph(i,d){const o={...d};for(const u in d){const m=i[u],x=d[u];/^on[A-Z]/.test(u)?m&&x?o[u]=(...g)=>{const j=x(...g);return m(...g),j}:m&&(o[u]=m):u==="style"?o[u]={...m,...x}:u==="className"&&(o[u]=[m,x].filter(Boolean).join(" "))}return{...i,...o}}function Th(i){var u,m;let d=(u=Object.getOwnPropertyDescriptor(i.props,"ref"))==null?void 0:u.get,o=d&&"isReactWarning"in d&&d.isReactWarning;return o?i.ref:(d=(m=Object.getOwnPropertyDescriptor(i,"ref"))==null?void 0:m.get,o=d&&"isReactWarning"in d&&d.isReactWarning,o?i.props.ref:i.props.ref||i.ref)}function Xc(i){var d,o,u="";if(typeof i=="string"||typeof i=="number")u+=i;else if(typeof i=="object")if(Array.isArray(i)){var m=i.length;for(d=0;d<m;d++)i[d]&&(o=Xc(i[d]))&&(u&&(u+=" "),u+=o)}else for(o in i)i[o]&&(u&&(u+=" "),u+=o);return u}function Qc(){for(var i,d,o=0,u="",m=arguments.length;o<m;o++)(i=arguments[o])&&(d=Xc(i))&&(u&&(u+=" "),u+=d);return u}const Tc=i=>typeof i=="boolean"?`${i}`:i===0?"0":i,Oc=Qc,Oh=(i,d)=>o=>{var u;if((d==null?void 0:d.variants)==null)return Oc(i,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:m,defaultVariants:x}=d,f=Object.keys(m).map(C=>{const k=o==null?void 0:o[C],S=x==null?void 0:x[C];if(k===null)return null;const A=Tc(k)||Tc(S);return m[C][A]}),g=o&&Object.entries(o).reduce((C,k)=>{let[S,A]=k;return A===void 0||(C[S]=A),C},{}),j=d==null||(u=d.compoundVariants)===null||u===void 0?void 0:u.reduce((C,k)=>{let{class:S,className:A,...K}=k;return Object.entries(K).every(J=>{let[D,T]=J;return Array.isArray(T)?T.includes({...x,...g}[D]):{...x,...g}[D]===T})?[...C,S,A]:C},[]);return Oc(i,f,j,o==null?void 0:o.class,o==null?void 0:o.className)},xl="-",Rh=i=>{const d=Ah(i),{conflictingClassGroups:o,conflictingClassGroupModifiers:u}=i;return{getClassGroupId:f=>{const g=f.split(xl);return g[0]===""&&g.length!==1&&g.shift(),Zc(g,d)||Hh(f)},getConflictingClassGroupIds:(f,g)=>{const j=o[f]||[];return g&&u[f]?[...j,...u[f]]:j}}},Zc=(i,d)=>{var f;if(i.length===0)return d.classGroupId;const o=i[0],u=d.nextPart.get(o),m=u?Zc(i.slice(1),u):void 0;if(m)return m;if(d.validators.length===0)return;const x=i.join(xl);return(f=d.validators.find(({validator:g})=>g(x)))==null?void 0:f.classGroupId},Rc=/^\[(.+)\]$/,Hh=i=>{if(Rc.test(i)){const d=Rc.exec(i)[1],o=d==null?void 0:d.substring(0,d.indexOf(":"));if(o)return"arbitrary.."+o}},Ah=i=>{const{theme:d,prefix:o}=i,u={nextPart:new Map,validators:[]};return Ih(Object.entries(i.classGroups),o).forEach(([x,f])=>{dl(f,u,x,d)}),u},dl=(i,d,o,u)=>{i.forEach(m=>{if(typeof m=="string"){const x=m===""?d:Hc(d,m);x.classGroupId=o;return}if(typeof m=="function"){if(Mh(m)){dl(m(u),d,o,u);return}d.validators.push({validator:m,classGroupId:o});return}Object.entries(m).forEach(([x,f])=>{dl(f,Hc(d,x),o,u)})})},Hc=(i,d)=>{let o=i;return d.split(xl).forEach(u=>{o.nextPart.has(u)||o.nextPart.set(u,{nextPart:new Map,validators:[]}),o=o.nextPart.get(u)}),o},Mh=i=>i.isThemeGetter,Ih=(i,d)=>d?i.map(([o,u])=>{const m=u.map(x=>typeof x=="string"?d+x:typeof x=="object"?Object.fromEntries(Object.entries(x).map(([f,g])=>[d+f,g])):x);return[o,m]}):i,Dh=i=>{if(i<1)return{get:()=>{},set:()=>{}};let d=0,o=new Map,u=new Map;const m=(x,f)=>{o.set(x,f),d++,d>i&&(d=0,u=o,o=new Map)};return{get(x){let f=o.get(x);if(f!==void 0)return f;if((f=u.get(x))!==void 0)return m(x,f),f},set(x,f){o.has(x)?o.set(x,f):m(x,f)}}},em="!",_h=i=>{const{separator:d,experimentalParseClassName:o}=i,u=d.length===1,m=d[0],x=d.length,f=g=>{const j=[];let C=0,k=0,S;for(let T=0;T<g.length;T++){let $=g[T];if(C===0){if($===m&&(u||g.slice(T,T+x)===d)){j.push(g.slice(k,T)),k=T+x;continue}if($==="/"){S=T;continue}}$==="["?C++:$==="]"&&C--}const A=j.length===0?g:g.substring(k),K=A.startsWith(em),J=K?A.substring(1):A,D=S&&S>k?S-k:void 0;return{modifiers:j,hasImportantModifier:K,baseClassName:J,maybePostfixModifierPosition:D}};return o?g=>o({className:g,parseClassName:f}):f},Lh=i=>{if(i.length<=1)return i;const d=[];let o=[];return i.forEach(u=>{u[0]==="["?(d.push(...o.sort(),u),o=[]):o.push(u)}),d.push(...o.sort()),d},Uh=i=>({cache:Dh(i.cacheSize),parseClassName:_h(i),...Rh(i)}),zh=/\s+/,Bh=(i,d)=>{const{parseClassName:o,getClassGroupId:u,getConflictingClassGroupIds:m}=d,x=[],f=i.trim().split(zh);let g="";for(let j=f.length-1;j>=0;j-=1){const C=f[j],{modifiers:k,hasImportantModifier:S,baseClassName:A,maybePostfixModifierPosition:K}=o(C);let J=!!K,D=u(J?A.substring(0,K):A);if(!D){if(!J){g=C+(g.length>0?" "+g:g);continue}if(D=u(A),!D){g=C+(g.length>0?" "+g:g);continue}J=!1}const T=Lh(k).join(":"),$=S?T+em:T,Q=$+D;if(x.includes(Q))continue;x.push(Q);const se=m(D,J);for(let ne=0;ne<se.length;++ne){const ge=se[ne];x.push($+ge)}g=C+(g.length>0?" "+g:g)}return g};function Wh(){let i=0,d,o,u="";for(;i<arguments.length;)(d=arguments[i++])&&(o=tm(d))&&(u&&(u+=" "),u+=o);return u}const tm=i=>{if(typeof i=="string")return i;let d,o="";for(let u=0;u<i.length;u++)i[u]&&(d=tm(i[u]))&&(o&&(o+=" "),o+=d);return o};function qh(i,...d){let o,u,m,x=f;function f(j){const C=d.reduce((k,S)=>S(k),i());return o=Uh(C),u=o.cache.get,m=o.cache.set,x=g,g(j)}function g(j){const C=u(j);if(C)return C;const k=Bh(j,o);return m(j,k),k}return function(){return x(Wh.apply(null,arguments))}}const fe=i=>{const d=o=>o[i]||[];return d.isThemeGetter=!0,d},sm=/^\[(?:([a-z-]+):)?(.+)\]$/i,Vh=/^\d+\/\d+$/,Gh=new Set(["px","full","screen"]),Kh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Jh=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,$h=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ht=i=>Ys(i)||Gh.has(i)||Vh.test(i),Zt=i=>$s(i,"length",ip),Ys=i=>!!i&&!Number.isNaN(Number(i)),nl=i=>$s(i,"number",Ys),Dr=i=>!!i&&Number.isInteger(Number(i)),Qh=i=>i.endsWith("%")&&Ys(i.slice(0,-1)),X=i=>sm.test(i),es=i=>Kh.test(i),Zh=new Set(["length","size","percentage"]),ep=i=>$s(i,Zh,rm),tp=i=>$s(i,"position",rm),sp=new Set(["image","url"]),rp=i=>$s(i,sp,lp),np=i=>$s(i,"",ap),_r=()=>!0,$s=(i,d,o)=>{const u=sm.exec(i);return u?u[1]?typeof d=="string"?u[1]===d:d.has(u[1]):o(u[2]):!1},ip=i=>Yh.test(i)&&!Jh.test(i),rm=()=>!1,ap=i=>$h.test(i),lp=i=>Xh.test(i),dp=()=>{const i=fe("colors"),d=fe("spacing"),o=fe("blur"),u=fe("brightness"),m=fe("borderColor"),x=fe("borderRadius"),f=fe("borderSpacing"),g=fe("borderWidth"),j=fe("contrast"),C=fe("grayscale"),k=fe("hueRotate"),S=fe("invert"),A=fe("gap"),K=fe("gradientColorStops"),J=fe("gradientColorStopPositions"),D=fe("inset"),T=fe("margin"),$=fe("opacity"),Q=fe("padding"),se=fe("saturate"),ne=fe("scale"),ge=fe("sepia"),Te=fe("skew"),Ae=fe("space"),We=fe("translate"),it=()=>["auto","contain","none"],Qe=()=>["auto","hidden","clip","visible","scroll"],ut=()=>["auto",X,d],re=()=>[X,d],De=()=>["",Ht,Zt],_e=()=>["auto",Ys,X],Ze=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Ee=()=>["solid","dashed","dotted","double","none"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",X],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>[Ys,X];return{cacheSize:500,separator:":",theme:{colors:[_r],spacing:[Ht,Zt],blur:["none","",es,X],brightness:b(),borderColor:[i],borderRadius:["none","","full",es,X],borderSpacing:re(),borderWidth:De(),contrast:b(),grayscale:q(),hueRotate:b(),invert:q(),gap:re(),gradientColorStops:[i],gradientColorStopPositions:[Qh,Zt],inset:ut(),margin:ut(),opacity:b(),padding:re(),saturate:b(),scale:b(),sepia:q(),skew:b(),space:re(),translate:re()},classGroups:{aspect:[{aspect:["auto","square","video",X]}],container:["container"],columns:[{columns:[es]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ze(),X]}],overflow:[{overflow:Qe()}],"overflow-x":[{"overflow-x":Qe()}],"overflow-y":[{"overflow-y":Qe()}],overscroll:[{overscroll:it()}],"overscroll-x":[{"overscroll-x":it()}],"overscroll-y":[{"overscroll-y":it()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[D]}],"inset-x":[{"inset-x":[D]}],"inset-y":[{"inset-y":[D]}],start:[{start:[D]}],end:[{end:[D]}],top:[{top:[D]}],right:[{right:[D]}],bottom:[{bottom:[D]}],left:[{left:[D]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Dr,X]}],basis:[{basis:ut()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",X]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Dr,X]}],"grid-cols":[{"grid-cols":[_r]}],"col-start-end":[{col:["auto",{span:["full",Dr,X]},X]}],"col-start":[{"col-start":_e()}],"col-end":[{"col-end":_e()}],"grid-rows":[{"grid-rows":[_r]}],"row-start-end":[{row:["auto",{span:[Dr,X]},X]}],"row-start":[{"row-start":_e()}],"row-end":[{"row-end":_e()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",X]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",X]}],gap:[{gap:[A]}],"gap-x":[{"gap-x":[A]}],"gap-y":[{"gap-y":[A]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[Q]}],px:[{px:[Q]}],py:[{py:[Q]}],ps:[{ps:[Q]}],pe:[{pe:[Q]}],pt:[{pt:[Q]}],pr:[{pr:[Q]}],pb:[{pb:[Q]}],pl:[{pl:[Q]}],m:[{m:[T]}],mx:[{mx:[T]}],my:[{my:[T]}],ms:[{ms:[T]}],me:[{me:[T]}],mt:[{mt:[T]}],mr:[{mr:[T]}],mb:[{mb:[T]}],ml:[{ml:[T]}],"space-x":[{"space-x":[Ae]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Ae]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",X,d]}],"min-w":[{"min-w":[X,d,"min","max","fit"]}],"max-w":[{"max-w":[X,d,"none","full","min","max","fit","prose",{screen:[es]},es]}],h:[{h:[X,d,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[X,d,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[X,d,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[X,d,"auto","min","max","fit"]}],"font-size":[{text:["base",es,Zt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",nl]}],"font-family":[{font:[_r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",X]}],"line-clamp":[{"line-clamp":["none",Ys,nl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ht,X]}],"list-image":[{"list-image":["none",X]}],"list-style-type":[{list:["none","disc","decimal",X]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[$]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[$]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ee(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ht,Zt]}],"underline-offset":[{"underline-offset":["auto",Ht,X]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:re()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[$]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ze(),tp]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ep]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},rp]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[J]}],"gradient-via-pos":[{via:[J]}],"gradient-to-pos":[{to:[J]}],"gradient-from":[{from:[K]}],"gradient-via":[{via:[K]}],"gradient-to":[{to:[K]}],rounded:[{rounded:[x]}],"rounded-s":[{"rounded-s":[x]}],"rounded-e":[{"rounded-e":[x]}],"rounded-t":[{"rounded-t":[x]}],"rounded-r":[{"rounded-r":[x]}],"rounded-b":[{"rounded-b":[x]}],"rounded-l":[{"rounded-l":[x]}],"rounded-ss":[{"rounded-ss":[x]}],"rounded-se":[{"rounded-se":[x]}],"rounded-ee":[{"rounded-ee":[x]}],"rounded-es":[{"rounded-es":[x]}],"rounded-tl":[{"rounded-tl":[x]}],"rounded-tr":[{"rounded-tr":[x]}],"rounded-br":[{"rounded-br":[x]}],"rounded-bl":[{"rounded-bl":[x]}],"border-w":[{border:[g]}],"border-w-x":[{"border-x":[g]}],"border-w-y":[{"border-y":[g]}],"border-w-s":[{"border-s":[g]}],"border-w-e":[{"border-e":[g]}],"border-w-t":[{"border-t":[g]}],"border-w-r":[{"border-r":[g]}],"border-w-b":[{"border-b":[g]}],"border-w-l":[{"border-l":[g]}],"border-opacity":[{"border-opacity":[$]}],"border-style":[{border:[...Ee(),"hidden"]}],"divide-x":[{"divide-x":[g]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[g]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[$]}],"divide-style":[{divide:Ee()}],"border-color":[{border:[m]}],"border-color-x":[{"border-x":[m]}],"border-color-y":[{"border-y":[m]}],"border-color-s":[{"border-s":[m]}],"border-color-e":[{"border-e":[m]}],"border-color-t":[{"border-t":[m]}],"border-color-r":[{"border-r":[m]}],"border-color-b":[{"border-b":[m]}],"border-color-l":[{"border-l":[m]}],"divide-color":[{divide:[m]}],"outline-style":[{outline:["",...Ee()]}],"outline-offset":[{"outline-offset":[Ht,X]}],"outline-w":[{outline:[Ht,Zt]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:De()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[$]}],"ring-offset-w":[{"ring-offset":[Ht,Zt]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",es,np]}],"shadow-color":[{shadow:[_r]}],opacity:[{opacity:[$]}],"mix-blend":[{"mix-blend":[...xe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":xe()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[u]}],contrast:[{contrast:[j]}],"drop-shadow":[{"drop-shadow":["","none",es,X]}],grayscale:[{grayscale:[C]}],"hue-rotate":[{"hue-rotate":[k]}],invert:[{invert:[S]}],saturate:[{saturate:[se]}],sepia:[{sepia:[ge]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[u]}],"backdrop-contrast":[{"backdrop-contrast":[j]}],"backdrop-grayscale":[{"backdrop-grayscale":[C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[k]}],"backdrop-invert":[{"backdrop-invert":[S]}],"backdrop-opacity":[{"backdrop-opacity":[$]}],"backdrop-saturate":[{"backdrop-saturate":[se]}],"backdrop-sepia":[{"backdrop-sepia":[ge]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[f]}],"border-spacing-x":[{"border-spacing-x":[f]}],"border-spacing-y":[{"border-spacing-y":[f]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",X]}],duration:[{duration:b()}],ease:[{ease:["linear","in","out","in-out",X]}],delay:[{delay:b()}],animate:[{animate:["none","spin","ping","pulse","bounce",X]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[ne]}],"scale-x":[{"scale-x":[ne]}],"scale-y":[{"scale-y":[ne]}],rotate:[{rotate:[Dr,X]}],"translate-x":[{"translate-x":[We]}],"translate-y":[{"translate-y":[We]}],"skew-x":[{"skew-x":[Te]}],"skew-y":[{"skew-y":[Te]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",X]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":re()}],"scroll-mx":[{"scroll-mx":re()}],"scroll-my":[{"scroll-my":re()}],"scroll-ms":[{"scroll-ms":re()}],"scroll-me":[{"scroll-me":re()}],"scroll-mt":[{"scroll-mt":re()}],"scroll-mr":[{"scroll-mr":re()}],"scroll-mb":[{"scroll-mb":re()}],"scroll-ml":[{"scroll-ml":re()}],"scroll-p":[{"scroll-p":re()}],"scroll-px":[{"scroll-px":re()}],"scroll-py":[{"scroll-py":re()}],"scroll-ps":[{"scroll-ps":re()}],"scroll-pe":[{"scroll-pe":re()}],"scroll-pt":[{"scroll-pt":re()}],"scroll-pr":[{"scroll-pr":re()}],"scroll-pb":[{"scroll-pb":re()}],"scroll-pl":[{"scroll-pl":re()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Ht,Zt,nl]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},op=qh(dp);function nm(...i){return op(Qc(i))}const cp=Oh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),M=R.forwardRef(({className:i,variant:d,size:o,asChild:u=!1,...m},x)=>{const f=u?Sh:"button";return e.jsx(f,{className:nm(cp({variant:d,size:o,className:i})),ref:x,...m})});M.displayName="Button";var mp=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],up=mp.reduce((i,d)=>{const o=$c(`Primitive.${d}`),u=R.forwardRef((m,x)=>{const{asChild:f,...g}=m,j=f?o:d;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(j,{...g,ref:x})});return u.displayName=`Primitive.${d}`,{...i,[d]:u}},{}),xp="Separator",Ac="horizontal",hp=["horizontal","vertical"],im=R.forwardRef((i,d)=>{const{decorative:o,orientation:u=Ac,...m}=i,x=pp(u)?u:Ac,g=o?{role:"none"}:{"aria-orientation":x==="vertical"?x:void 0,role:"separator"};return e.jsx(up.div,{"data-orientation":x,...g,...m,ref:d})});im.displayName=xp;function pp(i){return hp.includes(i)}var am=im;const ts=R.forwardRef(({className:i,orientation:d="horizontal",decorative:o=!0,...u},m)=>e.jsx(am,{ref:m,decorative:o,orientation:d,className:nm("shrink-0 bg-border",d==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",i),...u}));ts.displayName=am.displayName;const fp=[{label:"_hello",path:"/"},{label:"_about-me",path:"/about"},{label:"_projects",path:"/projects"},{label:"_theory",path:"/theory"}],vp=[{icon:"/outline-brands-instagram.svg",alt:"Instagram",url:"#"}],Lr=({children:i})=>{const d=Wr();return e.jsx("div",{className:"bg-[#010c15] w-full min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-[69px]",children:e.jsx("div",{className:"flex-1 flex flex-col",children:e.jsxs("div",{className:"flex-1 bg-black rounded-lg border border-solid border-[#1e2d3d] flex flex-col",children:[e.jsxs("header",{className:"h-14 bg-transparent flex items-center border-b border-[#1e2d3d] overflow-x-auto",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base px-3 sm:px-6 whitespace-nowrap",children:"Tawanda Kanyangarara            "}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d]"}),e.jsx("nav",{className:"flex items-center flex-1 overflow-x-auto",children:fp.map(o=>e.jsxs(ns.Fragment,{children:[e.jsx(M,{variant:"ghost",className:`h-full rounded-none px-4 sm:px-8 [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base whitespace-nowrap ${d.pathname===o.path?"text-white border-b-2 border-[#fea55f]":"text-[#607b96]"} hover:text-white`,asChild:!0,children:e.jsx(kc,{to:o.path,children:o.label})}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d] hidden sm:block"})]},o.label))}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d]"}),e.jsx(kc,{to:"/contact",className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base px-3 sm:px-6 hover:text-white whitespace-nowrap",children:"_contact-me"})]}),e.jsx("main",{className:"flex-1 relative overflow-hidden",children:i}),e.jsxs("footer",{className:"h-[50px] bg-transparent border-t border-[#1e2d3d] flex items-center overflow-x-auto",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs sm:text-base px-3 sm:px-6 whitespace-nowrap",children:"find me in:"}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d]"}),vp.map((o,u)=>e.jsxs(ns.Fragment,{children:[e.jsx(M,{variant:"ghost",className:"h-full rounded-none px-2 sm:px-3.5 hover:bg-transparent opacity-40 hover:opacity-100",asChild:!0,children:e.jsx("a",{href:o.url,children:e.jsx("img",{className:"w-5 h-5 sm:w-6 sm:h-6",alt:o.alt,src:o.icon})})}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d]"})]},u)),e.jsx(M,{variant:"ghost",className:"h-full rounded-none px-2 sm:px-3.5 hover:bg-transparent opacity-40 hover:opacity-100",asChild:!0,children:e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-5 h-5 sm:w-6 sm:h-6",alt:"Mail",src:"/mail.svg"})})}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d]"}),e.jsx("div",{className:"flex-1"}),e.jsx(ts,{orientation:"vertical",className:"h-full bg-[#1e2d3d] hidden sm:block"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs sm:text-base px-3 sm:px-6 flex items-center gap-2 whitespace-nowrap",children:["@klish3",e.jsx("img",{className:"w-5 h-5 sm:w-6 sm:h-6",alt:"GitHub",src:"/frame.svg"})]})]})]})})})},bp=()=>e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"absolute top-0 right-0 w-full md:w-[800px] lg:w-[1023px] h-full object-cover pointer-events-none opacity-50 md:opacity-100",alt:"Background blurs",src:"/background-blurs.svg"}),e.jsxs("div",{className:"relative px-6 py-12 sm:px-12 sm:py-16 md:pt-32 md:pl-24 lg:pt-24 lg:pl-32 xl:pt-32 xl:pl-40 2xl:pt-40 2xl:pl-48",children:[e.jsx("div",{className:"w-16 sm:w-24 md:w-[122px] h-[2px] md:h-[3px] bg-[#fea55f] mb-12 sm:mb-16 md:mb-[114px]"}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-4 sm:mb-6",children:"Hi guys. I am"}),e.jsx("h1",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-3xl sm:text-4xl md:text-5xl lg:text-[62px] mb-6 sm:mb-8 md:mb-[51px]",children:"Tawand Kanyangarara        "}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#4d5bce] text-xl sm:text-2xl md:text-[32px] mb-8 sm:mb-12 md:mb-[91px]",children:"> Technical Lead"}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base mb-4 sm:mb-[31px]",children:"// Front-end"}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base mb-4 sm:mb-[30px]",children:"// AI"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-medium text-xs sm:text-sm md:text-base break-all",children:[e.jsx("span",{className:"text-[#4d5bce]",children:"const"}),e.jsx("span",{className:"text-white",children:" "}),e.jsx("span",{className:"text-[#43d9ad]",children:"githubLink"}),e.jsx("span",{className:"text-white",children:" = "}),e.jsx("span",{className:"text-[#e99287]",children:'"'}),e.jsx("span",{className:"text-[#e99287] underline",children:"https://github.com/klish3"}),e.jsx("span",{className:"text-[#e99287]",children:'"'})]})]})]}),hl=({code:i,caption:d,className:o,memoryAid:u})=>e.jsxs("div",{className:o,children:[d&&e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-xs mb-4",children:d}),i&&e.jsx("div",{className:"bg-[#011221] rounded-lg p-4 border border-[#1e2d3d] mb-4",children:e.jsx("pre",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-xs text-[#607b96]",children:e.jsx("code",{children:i})})}),u&&u.length>0&&e.jsxs("div",{className:"bg-[#011221] rounded-lg p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] text-xs font-medium mb-3",children:"# Memory Aid"}),e.jsx("ul",{className:"list-disc pl-5 space-y-2",children:u.map((m,x)=>e.jsxs("li",{className:"text-[#9fb0c7] text-xs",children:[e.jsx("span",{className:"text-[#43d9ad]",children:m.key})," → ",m.description]},x))})]})]});/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lm=(...i)=>i.filter((d,o,u)=>!!d&&u.indexOf(d)===o).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=R.forwardRef(({color:i="currentColor",size:d=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:m="",children:x,iconNode:f,...g},j)=>R.createElement("svg",{ref:j,...jp,width:d,height:d,stroke:i,strokeWidth:u?Number(o)*24/Number(d):o,className:lm("lucide",m),...g},[...f.map(([C,k])=>R.createElement(C,k)),...Array.isArray(x)?x:[x]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=(i,d)=>{const o=R.forwardRef(({className:u,...m},x)=>R.createElement(yp,{ref:x,iconNode:d,className:lm(`lucide-${gp(i)}`,u),...m}));return o.displayName=`${i}`,o};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=dm("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=dm("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Np=[{id:"bio",label:"bio",icon:"📄"},{id:"interests",label:"interests",icon:"🎯"},{id:"education",label:"education",icon:"🎓"}],wp=[{id:"experience",label:"experience",icon:"💼"},{id:"skills",label:"skills",icon:"⚡"}],Cp=[{id:"sports",label:"sports",icon:"⚽"},{id:"music",label:"music",icon:"🎵"},{id:"reading",label:"reading",icon:"📚"}],Sp=()=>{const[i,d]=R.useState({personalInfo:!0,professionalInfo:!1,hobbies:!1}),[o,u]=R.useState("bio"),m=f=>{d(g=>({...g,[f]:!g[f]}))},x=()=>{switch(o){case"bio":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:e.jsx("span",{className:"text-[#4d5bce]",children:"/**"})}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base pl-2",children:[e.jsx("span",{className:"text-[#4d5bce]",children:"*"})," About me"]}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base pl-2",children:[e.jsx("span",{className:"text-[#4d5bce]",children:"*"})," I have 5 years of experience in web development."]}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:e.jsx("span",{className:"text-[#4d5bce]",children:"*/"})})]});case"interests":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"My Interests:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Web Development & UI/UX Design"}),e.jsx("div",{children:"• Open Source Contributions"}),e.jsx("div",{children:"• Technology Innovation"}),e.jsx("div",{children:"• Creative Problem Solving"})]})]});case"education":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Education Background:"}),e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Bachelor of Computer Science"}),e.jsx("div",{className:"text-xs sm:text-sm",children:"University Name • 2015-2019"})]})})]});case"experience":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Professional Experience:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Senior Front-end Developer"}),e.jsx("div",{className:"text-xs sm:text-sm",children:"Company Name • 2021-Present"}),e.jsx("div",{className:"mt-2 text-xs sm:text-sm",children:"Building scalable web applications with modern technologies"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Front-end Developer"}),e.jsx("div",{className:"text-xs sm:text-sm",children:"Previous Company • 2019-2021"}),e.jsx("div",{className:"mt-2 text-xs sm:text-sm",children:"Developed responsive user interfaces"})]})]})]});case"skills":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Technical Skills:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Languages:"}),e.jsx("div",{className:"pl-4",children:"JavaScript, TypeScript, HTML, CSS"}),e.jsx("div",{className:"text-[#43d9ad] mt-3",children:"Frameworks:"}),e.jsx("div",{className:"pl-4",children:"React, Next.js, Vue.js, Tailwind CSS"}),e.jsx("div",{className:"text-[#43d9ad] mt-3",children:"Tools:"}),e.jsx("div",{className:"pl-4",children:"Git, Webpack, Vite, Figma"})]})]});case"sports":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Sports & Activities:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Football"}),e.jsx("div",{children:"• Swimming"}),e.jsx("div",{children:"• Cycling"})]})]});case"music":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Music Preferences:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Electronic Music"}),e.jsx("div",{children:"• Rock & Alternative"}),e.jsx("div",{children:"• Lo-fi & Ambient"})]})]});case"reading":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Reading List:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Technical Books & Documentation"}),e.jsx("div",{children:"• Science Fiction"}),e.jsx("div",{children:"• Philosophy"})]})]});default:return null}};return e.jsxs("div",{className:"flex flex-col lg:flex-row h-full",children:[e.jsxs("aside",{className:"w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto",children:[e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>m("personalInfo"),children:[i.personalInfo?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 personal-info"]}),i.personalInfo&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:Np.map(f=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===f.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(f.id),children:[f.icon," ",f.label]},f.id))})]}),e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>m("professionalInfo"),children:[i.professionalInfo?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 professional-info"]}),i.professionalInfo&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:wp.map(f=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===f.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(f.id),children:[f.icon," ",f.label]},f.id))})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>m("hobbies"),children:[i.hobbies?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 hobbies"]}),i.hobbies&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:Cp.map(f=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===f.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(f.id),children:[f.icon," ",f.label]},f.id))})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[e.jsx("div",{className:"flex-1 border-r border-[#1e2d3d] overflow-auto",children:e.jsx("div",{className:"p-4 sm:p-8 lg:p-12",children:x()})}),e.jsx(hl,{className:"hidden xl:block w-80 p-6 overflow-auto",caption:"// Code snippet",code:`const aboutMe = {
  name: "Faez Taghavi",
  role: "Front-end Developer",
  location: "Iran",
  skills: [
    "React",
    "TypeScript",
    "Next.js"
  ]
};`})]})]})},om=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Display Property Differences"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{children:"Property"}),e.jsx("div",{children:"block"}),e.jsx("div",{children:"inline-block"}),e.jsx("div",{children:"inline"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Size"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Fills parent width"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] p-2 w-full",children:"block"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Depends on content"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] p-2 inline-block",children:"inline-block"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Depends on content"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] inline",children:"inline"})})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Positioning"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"New line, no elements beside"}),e.jsxs("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:[e.jsx("div",{className:"bg-[#4d5bce40] p-2 block",children:"First"}),e.jsx("div",{className:"bg-[#43d9ad40] p-2 block",children:"Second"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Flows with content"}),e.jsxs("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:[e.jsx("div",{className:"bg-[#4d5bce40] p-2 inline-block",children:"First"}),e.jsx("div",{className:"bg-[#43d9ad40] p-2 inline-block",children:"Second"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Flows with content"}),e.jsxs("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:[e.jsx("div",{className:"bg-[#4d5bce40] inline",children:"First"}),e.jsx("div",{className:"bg-[#43d9ad40] inline",children:"Second"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Width/Height"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Yes"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] w-32 h-16 block",children:"w-32 h-16"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Yes"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] w-32 h-16 inline-block",children:"w-32 h-16"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"No (ignored)"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] w-32 h-16 inline",children:"w-32 h-16 (ignored)"})})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Margins/Padding"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"All sides"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] m-4 p-4 block",children:"m-4 p-4"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"All sides"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] m-4 p-4 inline-block",children:"m-4 p-4"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{children:"Only horizontal"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] mx-4 px-4 inline",children:"mx-4 px-4"})})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Use Cases"}),e.jsxs("div",{children:[e.jsx("div",{children:"Layout elements:"}),e.jsx("div",{className:"text-[#43d9ad]",children:"<div>, <p>, <section>"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"UI elements:"}),e.jsx("div",{className:"text-[#43d9ad]",children:"<button>, <input>, <img>"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Text elements:"}),e.jsx("div",{className:"text-[#43d9ad]",children:"<span>, <a>, <b>, <i>"})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Property"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"block"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"inline-block"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"inline"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Size"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Fills up the width of its parent container."}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Depends on content."}),e.jsx("td",{className:"py-2 align-top",children:"Depends on content."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Positioning"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Start on a new line and tolerates no HTML elements next to it (except when you add float)"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Flows along with other content and allows other elements beside it."}),e.jsx("td",{className:"py-2 align-top",children:"Flows along with other content and allows other elements beside it."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Can specify width and height"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-2 align-top",children:"No. Will ignore if being set."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Can be aligned with vertical-align"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"No"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-2 align-top",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Margins and paddings"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"All sides respected."}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"All sides respected."}),e.jsx("td",{className:"py-2 align-top",children:"Only horizontal sides respected. Vertical sides, if specified, do not affect layout."})]})]})]})})})})]}),cm=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"== vs ==="}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-3 text-[#43d9ad]",children:"Type coercion examples"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#9fb0c7] mb-2",children:"Loose equality (==)"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`0 == "0" // true
0 == false // true
"
" == 0 // true
null == undefined // true
`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#9fb0c7] mb-2",children:"Strict equality (===)"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`0 === "0" // false
0 === false // false
null === undefined // false
`})]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Guidelines"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsx("li",{children:"Use === unless you intentionally want type coercion."}),e.jsx("li",{children:"Use Object.is for some NaN/-0 edge cases."}),e.jsx("li",{children:"Be explicit about conversions instead of relying on coercion (Number(), String(), Boolean())."})]})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Operator"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Behavior"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"=="}),e.jsx("td",{className:"py-1 align-top",children:"Performs type coercion if operands are of different types and then compares."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"==="}),e.jsx("td",{className:"py-1 align-top",children:"Strict comparison: same type and same value."})]})]})]})})})]}),mm=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"State vs Props"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"grid grid-cols-3 gap-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsx("div",{className:"font-medium",children:"Aspect"}),e.jsx("div",{className:"font-medium",children:"State"}),e.jsx("div",{className:"font-medium",children:"Props"}),e.jsx("div",{children:"Mutability"}),e.jsx("div",{children:"Mutable within the component (use setState / useState)"}),e.jsx("div",{children:"Immutable; read-only data passed from parent"}),e.jsx("div",{children:"Ownership"}),e.jsx("div",{children:"Owned by the component that defines it"}),e.jsx("div",{children:"Owned by the parent component"}),e.jsx("div",{children:"Lifespan"}),e.jsx("div",{children:"Tied to component lifecycle"}),e.jsx("div",{children:"Controlled by parent lifecycle"}),e.jsx("div",{children:"When to use"}),e.jsx("div",{children:"For UI data that changes locally (form inputs, toggles)"}),e.jsx("div",{children:"For configuration or static data from the parent"})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:`// State (inside component)
const [count, setCount] = useState(0);

// Props (coming from parent)
<Counter initialCount={5} />`})})]}),um=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"null vs undefined vs undeclared"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"TL;DR"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"null"}),': an explicit assignment meaning "no value".']}),e.jsxs("li",{children:[e.jsx("strong",{children:"undefined"}),": the default value for uninitialized variables and missing object properties."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"undeclared"}),": variable not declared at all in the current scope; accessing it throws ReferenceError."]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Examples"}),e.jsx("pre",{children:`let a = null;
let b; // undefined
try { console.log(c); } catch(e) { console.log("c is undeclared"); }`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Safe checks"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsxs("li",{children:["Use strict equality: ",e.jsx("span",{className:"text-[#e5e9f0]",children:"value === null"})," or ",e.jsx("span",{className:"text-[#e5e9f0]",children:"typeof value === 'undefined'"}),"."]}),e.jsx("li",{children:"To detect undeclared variables use try/catch or typeof in global contexts."})]})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Term"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Meaning"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"null"}),e.jsx("td",{className:"py-1 align-top",children:"Explicitly assigned no-value."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"undefined"}),e.jsx("td",{className:"py-1 align-top",children:"Variable declared but not assigned; missing properties return undefined."})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"undeclared"}),e.jsx("td",{className:"py-1 align-top",children:"No variable declaration in current scope; accessing throws ReferenceError."})]})]})]})})})]}),kp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:".call vs .apply"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-3 text-[#43d9ad]",children:"Basic difference"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#9fb0c7] mb-2",children:".call()"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`function add(a, b) {
  return a + b;
}

add.call(
  null, 
  1, 
  2
); // 3`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#9fb0c7] mb-2",children:".apply()"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`function add(a, b) {
  return a + b;
}

add.apply(
  null, 
  [1, 2]
); // 3`})]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-3 text-[#43d9ad]",children:"Context management example"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`const person = {
  name: 'John',
  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
};

const other = { name: 'Alice' };

person.greet.call(other);   // Hello, Alice
person.greet.apply(other);  // Hello, Alice`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-3 text-[#43d9ad]",children:"Array method borrowing"}),e.jsx("pre",{className:"bg-[#011221] p-3 rounded text-sm text-[#e5e9f0]",children:`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using apply to borrow push method
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [1, 2, 3, 4, 5, 6]`})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Method"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Arguments"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 align-top",children:".call()"}),e.jsx("td",{className:"py-2 align-top",children:"Comma-separated"}),e.jsx("td",{className:"py-2 align-top",children:"Invoke function with specific `this` context and individual arguments"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 align-top",children:".apply()"}),e.jsx("td",{className:"py-2 align-top",children:"Array"}),e.jsx("td",{className:"py-2 align-top",children:"Invoke function with specific `this` context and array of arguments"})]})]})]})})})]}),Ep=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"Map vs Plain Object"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"TL;DR"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Map"}),": Allows keys of any type, preserves insertion order, has a size property and useful iteration methods."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Plain Object"}),": Keys are strings (or symbols), simple to use and serializable to JSON; often fast for small datasets."]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Examples"}),e.jsx("pre",{children:`// Map
const map = new Map();
map.set({}, 'objKey');
map.set('a', 1);
console.log(map.size); // 2

// Plain object
const obj = { a: 1 };
obj['a'] = 2;
console.log(Object.keys(obj)); // ['a']`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"When to use"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"Map"})," when keys are not strings, you need predictable insertion order, or frequent additions/removals for large datasets."]}),e.jsxs("li",{children:["Use a ",e.jsx("strong",{children:"Plain Object"})," when you need lightweight data structures or JSON-serializable structures."]})]})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Feature"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Map"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Plain Object"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Key type"}),e.jsx("td",{className:"py-1 align-top",children:"Any value"}),e.jsx("td",{className:"py-1 align-top",children:"Strings (or Symbol)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Ordering"}),e.jsx("td",{className:"py-1 align-top",children:"Insertion order preserved"}),e.jsx("td",{className:"py-1 align-top",children:"Not guaranteed across engines"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Size"}),e.jsx("td",{className:"py-1 align-top",children:"Has `size`"}),e.jsx("td",{className:"py-1 align-top",children:"No `size` property"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Iteration"}),e.jsx("td",{className:"py-1 align-top",children:"`map.keys()`, `map.entries()`"}),e.jsx("td",{className:"py-1 align-top",children:"`Object.keys()`, `for...in`"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Serializable"}),e.jsx("td",{className:"py-1 align-top",children:"No"}),e.jsx("td",{className:"py-1 align-top",children:"Yes (JSON)"})]})]})]})})})]}),Fp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"JavaScript Data Types"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"TL;DR"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primitive"}),": number, string, boolean, null, undefined, symbol, bigint — store single values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reference"}),": object, array, function, Map, Set — can contain collections/complex entities."]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Examples"}),e.jsx("pre",{children:`// Primitive
let name = 'Alice';
let age = 30;
let isActive = true;

// Reference
let arr = [1, 2, 3];
let obj = { id: 1 };
let id = Symbol('id');`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Tips & Pitfalls"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsx("li",{children:'`typeof null` returns "object" — historical quirk.'}),e.jsx("li",{children:"Strings and numbers are primitive — they are copied by value; objects are copied by reference."}),e.jsx("li",{children:"Use `typeof` to check primitives; `Array.isArray()` for arrays."})]})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Category"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Examples"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Primitive"}),e.jsx("td",{className:"py-1 align-top",children:"number, string, boolean, null, undefined, symbol, bigint"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Reference"}),e.jsx("td",{className:"py-1 align-top",children:"object, array, function, Map, Set, Date, RegExp"})]})]})]})})})]}),Pp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-lg text-[#e5e9f0]",children:"Styling SVG"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-sm text-[#607b96] hover:text-[#43d9ad]",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-4 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"TL;DR"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsx("li",{children:"Styling SVG can be done via attributes (`fill`, `stroke`), inline styles, embedded or external CSS."}),e.jsx("li",{children:"Presentational attributes (e.g., `fill`) can be overridden by CSS rules; prefer CSS for dynamic theming."}),e.jsx("li",{children:'Use `currentColor` to inherit color from text; `fill="currentColor"` is handy for matching icon color to surrounding text.'})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Examples"}),e.jsx("pre",{children:`<svg width="40" height="40">
  <rect x="5" y="5" width="30" height="30" fill="purple" stroke="blue"/>
</svg>

// CSS override
svg { fill: blue; }`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded text-sm text-[#607b96]",children:[e.jsx("div",{className:"mb-2 text-[#43d9ad]",children:"Tips"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7]",children:[e.jsx("li",{children:"Prefer `fill` and `stroke` for simplicity; use CSS for theming & hover effects."}),e.jsx("li",{children:"Use `mask`/`clipPath` & `currentColor` for scalable theming."})]})]})]}):e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("pre",{children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Method"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Pros"}),e.jsx("th",{className:"text-left text-[#43d9ad] pb-2",children:"Cons"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Presentational Attributes (fill/stroke)"}),e.jsx("td",{className:"py-1 align-top",children:"Simple, inline, immediate"}),e.jsx("td",{className:"py-1 align-top",children:"Hard to theme at scale"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"Inline style/CSS"}),e.jsx("td",{className:"py-1 align-top",children:"Easily overridden and dynamic"}),e.jsx("td",{className:"py-1 align-top",children:"Requires selectors, may be verbose"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1 align-top",children:"External stylesheet"}),e.jsx("td",{className:"py-1 align-top",children:"Great for global theming"}),e.jsx("td",{className:"py-1 align-top",children:"Less portable without proper scoping"})]})]})]})})})]}),Tp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"JavaScript Proxies"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-[#e5e9f0] text-sm space-y-4",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What is a Proxy?"}),e.jsx("div",{className:"text-[#607b96] text-xs space-y-2",children:e.jsx("p",{children:"An object that acts as an intermediary between code and a target object, allowing you to intercept and customize operations."})})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Basic Example"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`const handler = {
  get: function (target, prop) {
    console.log(\`Getting: \${prop}\`);
    return target[prop];
  }
};

const proxy = new Proxy(obj, handler);
proxy.name; // Logs: Getting: name`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"text-[#607b96] text-xs space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Property access interception (logging, validation)"}),e.jsx("li",{children:"Creating reactive systems (Vue.js reactivity)"}),e.jsx("li",{children:"Function invocation interception (caching, memoization)"}),e.jsx("li",{children:"Dynamic property creation (default values)"}),e.jsx("li",{children:"Mocking/stubbing for testing"})]})]})]})}):e.jsx("div",{className:"space-y-4",children:e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Use Case"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Example"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Benefit"})]})}),e.jsxs("tbody",{className:"space-y-4",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Property Access"}),e.jsx("td",{className:"py-3 text-xs",children:e.jsx("code",{className:"bg-[#011221] px-2 py-1 rounded",children:"get trap"})}),e.jsx("td",{className:"py-3",children:"Log/validate property reads"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Property Assignment"}),e.jsx("td",{className:"py-3 text-xs",children:e.jsx("code",{className:"bg-[#011221] px-2 py-1 rounded",children:"set trap"})}),e.jsx("td",{className:"py-3",children:"Validate before assignment"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Function Calls"}),e.jsx("td",{className:"py-3 text-xs",children:e.jsx("code",{className:"bg-[#011221] px-2 py-1 rounded",children:"apply trap"})}),e.jsx("td",{className:"py-3",children:"Cache results, memoization"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"Reactive Systems"}),e.jsx("td",{className:"py-3 text-xs",children:e.jsx("code",{className:"bg-[#011221] px-2 py-1 rounded",children:"set trap"})}),e.jsx("td",{className:"py-3",children:"Trigger UI updates on changes"})]})]})]})})]}),Op=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Callback Functions & Asynchronous Operations"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-[#e5e9f0] text-sm space-y-4",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What is a Callback?"}),e.jsx("div",{className:"text-[#607b96] text-xs space-y-2",children:e.jsx("p",{children:"A function passed as an argument to another function, executed after some operation has been completed."})})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Synchronous Callback"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greet('Alice', () => {
  console.log('Goodbye!');
});
// Output:
// Hello Alice
// Goodbye!`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Asynchronous Callback"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
// Outputs after 1 second: { name: 'John', age: 30 }`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Common Use Cases"}),e.jsxs("ul",{className:"text-[#607b96] text-xs space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Network requests (fetching API data)"}),e.jsx("li",{children:"File I/O operations"}),e.jsx("li",{children:"Timers (setTimeout, setInterval)"}),e.jsx("li",{children:"Event handling (click, keypress)"})]})]})]})}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Type"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Execution"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Blocking"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Use Case"})]})}),e.jsxs("tbody",{className:"space-y-4",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Synchronous"}),e.jsx("td",{className:"py-3 text-xs",children:"Immediate"}),e.jsx("td",{className:"py-3 text-xs",children:"Blocking"}),e.jsx("td",{className:"py-3 text-xs",children:"Array methods, event handlers"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"Asynchronous"}),e.jsx("td",{className:"py-3 text-xs",children:"Later"}),e.jsx("td",{className:"py-3 text-xs",children:"Non-blocking"}),e.jsx("td",{className:"py-3 text-xs",children:"Network, timers, I/O"})]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2 text-xs",children:"Error Handling Pattern"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`// Pass error as first argument
callback((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(data);
  }
});`})]})]})]}),Rp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Microtask Queue & Event Loop"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-[#e5e9f0] text-sm space-y-4",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What is the Microtask Queue?"}),e.jsx("div",{className:"text-[#607b96] text-xs space-y-2",children:e.jsx("p",{children:"A queue of tasks executed after the current script, but before the macrotask queue. Microtasks have higher priority."})})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Execution Order Example"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('Script end');

// Output:
// Script start
// Script end
// Promise 1
// Promise 2
// setTimeout`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Event Loop Phases"}),e.jsxs("ol",{className:"text-[#607b96] text-xs space-y-1 list-decimal list-inside",children:[e.jsx("li",{children:"Execute synchronous code"}),e.jsx("li",{children:"Process ALL microtasks (Promises, MutationObserver)"}),e.jsx("li",{children:"Execute ONE macrotask (setTimeout, setInterval)"}),e.jsx("li",{children:"Back to step 2"})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Microtask Sources"}),e.jsxs("ul",{className:"text-[#607b96] text-xs space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Promise callbacks (.then, .catch, .finally)"}),e.jsx("li",{children:"queueMicrotask()"}),e.jsx("li",{children:"MutationObserver callbacks"})]})]})]})}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Queue Type"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Priority"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Examples"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"When Processed"})]})}),e.jsxs("tbody",{className:"space-y-4",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Microtask"}),e.jsx("td",{className:"py-3 text-xs",children:"High"}),e.jsx("td",{className:"py-3 text-xs",children:"Promises, queueMicrotask()"}),e.jsx("td",{className:"py-3 text-xs",children:"After current script, before macrotask"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"Macrotask"}),e.jsx("td",{className:"py-3 text-xs",children:"Low"}),e.jsx("td",{className:"py-3 text-xs",children:"setTimeout, setInterval, I/O"}),e.jsx("td",{className:"py-3 text-xs",children:"After all microtasks complete"})]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2 text-xs",children:"Key Insight"}),e.jsx("p",{className:"text-[#607b96] text-xs",children:"Microtasks always execute before macrotasks. This is why Promise callbacks run before setTimeout, even with delay 0."})]})]})]}),Hp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Caching & Performance"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-[#e5e9f0] text-sm space-y-4",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What is Caching?"}),e.jsx("div",{className:"text-[#607b96] text-xs space-y-2",children:e.jsx("p",{children:"A technique to store copies of files/data in temporary storage to reduce access time and improve performance."})})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Browser Cache Example"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`<!-- First visit: downloads from server -->
<!-- Subsequent visits: loads from cache -->
<link rel="stylesheet" href="styles.css" />
<script src="app.js"><\/script>`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Service Worker Caching"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

// Serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});`})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"HTTP Caching Header"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`Cache-Control: max-age=3600
<!-- Cache resources for 1 hour -->`})]})]})}):e.jsxs("div",{className:"space-y-4",children:[e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Cache Type"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Location"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"When Used"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Benefit"})]})}),e.jsxs("tbody",{className:"space-y-4",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Browser Cache"}),e.jsx("td",{className:"py-3 text-xs",children:"Local device"}),e.jsx("td",{className:"py-3 text-xs",children:"Page revisits"}),e.jsx("td",{className:"py-3 text-xs",children:"Faster load times"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Service Worker"}),e.jsx("td",{className:"py-3 text-xs",children:"Background script"}),e.jsx("td",{className:"py-3 text-xs",children:"Online/offline"}),e.jsx("td",{className:"py-3 text-xs",children:"Offline access, PWA"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"HTTP Caching"}),e.jsx("td",{className:"py-3 text-xs",children:"HTTP headers"}),e.jsx("td",{className:"py-3 text-xs",children:"Per resource"}),e.jsx("td",{className:"py-3 text-xs",children:"Reduced server load"})]})]})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded mt-4",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2 text-xs",children:"Benefits of Caching"}),e.jsxs("ul",{className:"text-[#607b96] text-xs space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Reduced latency (data closer to user)"}),e.jsx("li",{children:"Reduced server load (fewer requests)"}),e.jsx("li",{children:"Offline access (Service Workers)"}),e.jsx("li",{children:"Improved UX and page performance"})]})]})]})]}),Ap=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Content Security Policy (CSP)"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad]",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline mr-4",children:"greatfrontend: CSP →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"github: CSP (mdx) →"})]}),i?e.jsxs("div",{className:"space-y-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What CSP does"}),e.jsx("p",{children:"Restricts sources for scripts, styles, images and other resources to mitigate XSS and data injection attacks."})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Example header"}),e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:"Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none';"})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Benefits"}),e.jsxs("ul",{className:"list-disc list-inside text-[#607b96] text-xs",children:[e.jsx("li",{children:"Blocks inline scripts (unless allowed)"}),e.jsx("li",{children:"Prevents malicious third-party scripts"}),e.jsx("li",{children:"Mitigates many XSS vectors"})]})]})]}):e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Directive"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"default-src"}),e.jsx("td",{className:"py-3",children:"Fallback policy for fetched resources"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"script-src"}),e.jsx("td",{className:"py-3",children:"Allowed script sources (CDNs, self)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"object-src"}),e.jsx("td",{className:"py-3",children:"Controls plugin/object sources (often set to 'none')"})]})]})]})]}),Mp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Cross-Site Request Forgery (CSRF)"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad]",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline mr-4",children:"greatfrontend: CSRF →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"github: CSRF (mdx) →"})]}),i?e.jsxs("div",{className:"space-y-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"What is CSRF?"}),e.jsx("p",{children:"An attack that forces authenticated users to perform unwanted actions on a web application where they're logged in."})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Mitigation Techniques"}),e.jsxs("ul",{className:"list-disc list-inside text-[#607b96] text-xs",children:[e.jsx("li",{children:"Use same-site cookies (`SameSite` flag)"}),e.jsx("li",{children:"Use CSRF tokens (synchronizer token pattern)"}),e.jsx("li",{children:"Double-submit cookie pattern"}),e.jsx("li",{children:"Verify Origin/Referer headers for sensitive requests"})]})]})]}):e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Attack"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Mitigation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"CSRF"}),e.jsx("td",{className:"py-3",children:"CSRF tokens, SameSite cookies, origin checks"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"Replay"}),e.jsx("td",{className:"py-3",children:"Use nonces / one-time tokens"})]})]})]})]}),Ip=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Debouncing & Throttling"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad]",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-concept-of-debouncing-and-throttling?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline mr-4",children:"greatfrontend: Debounce/Throttle →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-concept-of-debouncing-and-throttling/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"github: Debounce/Throttle (mdx) →"})]}),i?e.jsxs("div",{className:"space-y-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Debounce"}),e.jsx("p",{children:"Delays a function until a pause in events (useful for input/search boxes)."})]}),e.jsxs("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-semibold mb-2",children:"Throttle"}),e.jsx("p",{children:"Limits function execution to at most once per interval (useful for scroll/resize)."})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-4 rounded",children:e.jsx("pre",{className:"text-[#607b96] text-xs overflow-x-auto",children:`// Debounce example
function debounce(fn, wait) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Throttle example
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}`})})]}):e.jsxs("table",{className:"w-full text-[#607b96] text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"Technique"}),e.jsx("th",{className:"text-left py-2 text-[#43d9ad]",children:"When to use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 font-medium",children:"Debounce"}),e.jsx("td",{className:"py-3",children:"After rapid input stops (search boxes)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 font-medium",children:"Throttle"}),e.jsx("td",{className:"py-3",children:"Rate-limit events (scroll, resize)"})]})]})]})]}),Dp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"CSS Box Model"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad]",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline mr-4",children:"greatfrontend: Box Model →"}),e.jsx("a",{href:"https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/explain-your-understanding-of-the-box-model-and-how-you-would-tell-the-browser-in-css-to-render-your-layout-in-different-box-models/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"github: Box Model (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Box Model Parts"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-[#fea55f] border border-[#fea55f]"}),e.jsx("div",{children:"Margin (outer spacing)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-[#43d9ad] border border-[#43d9ad]"}),e.jsx("div",{children:"Border (visible edge)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-[#4d5bce] border border-[#4d5bce]"}),e.jsx("div",{children:"Padding (inner space)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-4 h-4 bg-[#38a169] border border-[#38a169]"}),e.jsx("div",{children:"Content (text/elements)"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Visual Example"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] flex items-center justify-center",children:e.jsx("div",{className:"bg-[#fea55f40] p-4 border-4 border-[#fea55f]",children:e.jsx("div",{className:"bg-[#43d9ad40] p-2 border-4 border-[#43d9ad]",children:e.jsx("div",{className:"bg-[#4d5bce40] p-3 border-4 border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2 border border-[#38a169]",children:"Content"})})})})})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Content"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Width & Height defined here"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-4",children:"w-32 h-16"})})]}),e.jsx("div",{className:"text-[#607b96] text-xs leading-relaxed",children:"The actual content area where text and elements are rendered. The width and height of this area are what CSS width/height properties control (in content-box mode)."})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Padding"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Inside the border"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] p-4 border-2 border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2",children:"Content"})})})]}),e.jsx("div",{className:"text-[#607b96] text-xs leading-relaxed",children:"Space between content and border. Padding respects the background color. All four sides (top, right, bottom, left) can be set independently."})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Border"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Around padding"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#43d9ad] p-4 border-4 border-[#43d9ad]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2",children:"Content"})})})]}),e.jsx("div",{className:"text-[#607b96] text-xs leading-relaxed",children:"Visual boundary around the padding. Can have thickness (width), style (solid, dashed, etc.), and color. Respects element background only up to the border edge."})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Margin"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Outside the border"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#fea55f40] p-4 border-2 border-dashed border-[#fea55f]",children:e.jsx("div",{className:"bg-[#43d9ad] p-2 border-2 border-[#43d9ad]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2",children:"Content"})})})})]}),e.jsx("div",{className:"text-[#607b96] text-xs leading-relaxed",children:"Space outside the border separating this element from others. Margins collapse (adjacent margins merge). Doesn't have a background color; it's transparent."})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"box-sizing Property"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"content-box (default)"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-xs",children:"width = content width only"}),e.jsx("div",{className:"bg-[#4d5bce40] p-2 border-2 border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-1 text-xs",children:"w-32"})}),e.jsx("div",{className:"text-xs",children:"Actual width: 128px + padding + border"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"border-box"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-xs",children:"width = content + padding + border"}),e.jsx("div",{className:"bg-[#4d5bce40] p-2 border-2 border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-1 text-xs",children:"w-32"})}),e.jsx("div",{className:"text-xs",children:"Actual width: exactly 128px"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Layout Implications"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Margin Collapse"}),e.jsx("div",{className:"text-xs",children:"Adjacent vertical margins merge to the larger value"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Padding Affects Size"}),e.jsx("div",{className:"text-xs",children:"In content-box, padding increases total size"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Border Affects Size"}),e.jsx("div",{className:"text-xs",children:"In content-box, border increases total size"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Best Practices"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Use border-box"}),e.jsxs("div",{className:"text-xs",children:["Apply globally: * ","{","box-sizing: border-box;","}"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Understand Collapse"}),e.jsx("div",{className:"text-xs",children:"Horizontal margins don't collapse; only vertical"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Margin vs Padding"}),e.jsx("div",{className:"text-xs",children:"Padding for internal space, margin for external"})]})]})]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`The CSS Box Model is the foundation of web layout. Every element consists of:

┌─────────────────────────────────┐  ← Outer edge (margin outer)
│         MARGIN (m-4)            │
│  ┌─────────────────────────────┐ │  ← Border outer edge
│  │   BORDER (border-2)         │ │
│  │  ┌─────────────────────────┐│ │  ← Padding outer edge (background starts)
│  │  │  PADDING (p-4)          ││ │
│  │  │ ┌───────────────────────┐││ │
│  │  │ │  CONTENT (w-32 h-16)  │││ │
│  │  │ └───────────────────────┘││ │
│  │  └─────────────────────────┘│ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘

KEY PROPERTIES:
• margin: creates space outside the border
• border: creates a visible edge around the element
• padding: creates space inside the border (around content)
• content: where the actual element content is rendered

box-sizing:
• content-box (default): width/height apply only to content
  Total width = width + padding-left + padding-right + border-left + border-right
  
• border-box: width/height include padding and border
  Total width = width (including padding and border)`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Part"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Purpose"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Key Characteristics"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Content"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Holds the actual element content (text, images, etc.)"}),e.jsx("td",{className:"py-3 align-top",children:"Defined by width/height; size depends on content"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Padding"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Adds internal space inside the border"}),e.jsx("td",{className:"py-3 align-top",children:"Respects background color; all four sides can differ"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Border"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Creates a visible boundary around the element"}),e.jsx("td",{className:"py-3 align-top",children:"Has width, style (solid/dashed), and color; adds to total size"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Margin"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Creates external space outside the border"}),e.jsx("td",{className:"py-3 align-top",children:"Transparent; vertical margins collapse; doesn't affect background"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"box-sizing"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Controls how width/height are calculated"}),e.jsx("td",{className:"py-3 align-top",children:"content-box (default) vs border-box; border-box recommended"})]})]})]})]})]}),_p=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"box-sizing Property"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsx("div",{className:"text-xs text-[#43d9ad] space-y-1",children:e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-does-box-sizing-border-box-do-what-are-its-advantages?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: box-sizing →"})}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{children:"Property"}),e.jsx("div",{children:"content-box (default)"}),e.jsx("div",{children:"border-box"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Calculation"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"width excludes padding & border"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] text-xs mb-1",children:"width: 200px"}),e.jsx("div",{className:"bg-[#4d5bce40] p-2 border border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2 text-xs",children:"Content"})}),e.jsx("div",{className:"text-[#fea55f] text-xs mt-1",children:"Total: 200px + padding + border"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"width includes padding & border"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] text-xs mb-1",children:"width: 200px"}),e.jsx("div",{className:"bg-[#4d5bce40] p-2 border border-[#4d5bce]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center p-2 text-xs",children:"Content"})}),e.jsx("div",{className:"text-[#43d9ad] text-xs mt-1",children:"Total: exactly 200px"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Example (w-32 p-4 border-2)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Gets wider with padding/border"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{style:{width:"128px",padding:"16px",border:"2px solid #4d5bce"},className:"bg-[#4d5bce40]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center text-xs",children:"128px + 32px + 4px"})}),e.jsx("div",{className:"text-[#fea55f] text-xs mt-2",children:"Actual width: 164px"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Stays exactly 128px"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{style:{boxSizing:"border-box",width:"128px",padding:"16px",border:"2px solid #4d5bce"},className:"bg-[#4d5bce40]",children:e.jsx("div",{className:"bg-[#38a169] text-white text-center text-xs",children:"Exactly 128px"})}),e.jsx("div",{className:"text-[#43d9ad] text-xs mt-2",children:"Actual width: 128px"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"content-box Challenges"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"❌ Width surprises"}),e.jsx("div",{className:"text-xs",children:"Adding padding/border changes total width"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"❌ Layout shifts"}),e.jsx("div",{className:"text-xs",children:"Elements can unexpectedly grow in size"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"❌ Math overhead"}),e.jsx("div",{className:"text-xs",children:"Must manually calculate total dimensions"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"border-box Advantages"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Predictable sizing"}),e.jsx("div",{className:"text-xs",children:"Width always equals what you set"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Layout stability"}),e.jsx("div",{className:"text-xs",children:"Padding/border doesn't affect total size"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Easier layouts"}),e.jsx("div",{className:"text-xs",children:"Simpler percentage-based calculations"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Recommended Practice"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium",children:"Apply border-box globally:"}),e.jsx("pre",{className:"bg-[#1e2d3d] p-3 rounded text-xs overflow-x-auto",children:`/* Universal selector - apply to all elements */
* {
  box-sizing: border-box;
}

/* Or more explicitly */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`}),e.jsx("div",{className:"text-xs text-[#43d9ad] mt-2",children:"✓ Standard practice across modern web development"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"✓ Makes sizing predictable by default"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"✓ Simplifies responsive design"})]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`box-sizing determines what the width and height properties include.

DEFAULT BEHAVIOR (content-box):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.box {
  width: 200px;           /* Only content area */
  padding: 20px;          /* Added to total */
  border: 5px solid;      /* Added to total */
}

Total width = 200px + 40px (padding) + 10px (border) = 250px

RECOMMENDED (border-box):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
.box {
  box-sizing: border-box;
  width: 200px;           /* Includes padding + border */
  padding: 20px;
  border: 5px solid;
}

Total width = exactly 200px (no surprises!)

WHY border-box IS BETTER:
• Predictable sizing - width equals what you set
• Simpler layouts - no unexpected element growth
• Easier calculations - especially for responsive design
• Better with percentages - 50% actually means 50%
• Modern standard - used in frameworks and best practices`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"content-box"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"border-box"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Width Includes"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Content only"}),e.jsx("td",{className:"py-3 align-top",children:"Content + padding + border"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Predictability"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Low - size changes with padding/border"}),e.jsx("td",{className:"py-3 align-top",children:"High - size stays consistent"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Use Case"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Legacy code; rarely preferred"}),e.jsx("td",{className:"py-3 align-top",children:"Modern layouts; recommended default"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Best Practice"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Not recommended"}),e.jsx("td",{className:"py-3 align-top",children:"Apply globally with * selector"})]})]})]})]})]}),Lp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"CSS Display Property"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-the-css-display-property-and-can-you-give-a-few-examples-of-its-use?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Display Property →"}),e.jsx("a",{href:"https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/what-is-the-css-display-property-and-can-you-give-a-few-examples-of-its-use/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Display Property (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{children:"Display"}),e.jsx("div",{children:"Inline"}),e.jsx("div",{children:"Block"}),e.jsx("div",{children:"Flex"}),e.jsx("div",{children:"Grid"})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Size & Flow"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Flows with text"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsxs("div",{children:["Text ",e.jsx("span",{className:"bg-[#4d5bce40] px-1",children:"inline"})," text"]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Takes full width"}),e.jsxs("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:[e.jsx("div",{className:"bg-[#4d5bce40] p-2",children:"block"}),e.jsx("div",{className:"bg-[#43d9ad40] p-2",children:"block"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Flexible layout"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("div",{className:"bg-[#4d5bce40] p-2 flex-1",children:"item"}),e.jsx("div",{className:"bg-[#43d9ad40] p-2 flex-1",children:"item"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Grid layout"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[e.jsx("div",{className:"bg-[#4d5bce40] p-2",children:"cell"}),e.jsx("div",{className:"bg-[#43d9ad40] p-2",children:"cell"})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Width/Height"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Ignored"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("span",{className:"bg-[#4d5bce40]",children:"w-32 h-16"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Respected"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"bg-[#4d5bce40] w-20 h-12",children:"w-20 h-12"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Respected"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"flex gap-1",children:e.jsx("div",{className:"bg-[#4d5bce40] w-12 h-12",children:"w-12"})})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Respected"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"grid grid-cols-2 gap-1",children:e.jsx("div",{className:"bg-[#4d5bce40] h-10",children:"h-10"})})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Common Uses"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Links, buttons, spans"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"text-xs",children:"<a>, <span>, <button>"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Sections, divs, paragraphs"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"text-xs",children:"<div>, <p>, <section>"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Complex layouts"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"text-xs",children:"Rows, sidebars, navigation"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Component layouts"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("div",{className:"text-xs",children:"Cards, dashboards"})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Margin Collapse"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"No collapse"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"✓ Horizontal only"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Collapses vertically"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"⚠ Adjacent margins merge"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"No collapse"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"✓ Creates flex context"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"No collapse"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"✓ Creates grid context"})]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`The display property defines how an element is rendered in the document flow.

MAIN VALUES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

display: inline
  • Flows with surrounding text
  • Ignores width/height
  • Only horizontal margins/padding respected
  • Examples: <a>, <span>, <button>

display: block
  • Takes full width available
  • Starts on new line
  • Respects all margins/padding
  • All four sides can be sized
  • Examples: <div>, <p>, <section>

display: inline-block
  • Flows inline like <span>
  • But respects width/height like <div>
  • Ignores vertical margins (mostly)
  • Useful for side-by-side layouts

display: flex
  • Creates flexible box layout
  • Children are flex items
  • Enables alignment & distribution
  • Great for rows/columns
  • Examples: navigation, toolbars

display: grid
  • Creates grid layout
  • Explicit rows and columns
  • Powerful for complex layouts
  • Examples: dashboards, galleries

display: none
  • Element not rendered
  • Takes no space in layout
  • Different from visibility: hidden

MODERN USAGE:
• Flexbox (display: flex) for one-dimensional layouts
• Grid (display: grid) for two-dimensional layouts
• Mostly prefer flex/grid over inline/inline-block today`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Value"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Behavior"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Best For"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"inline"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Flows with text, ignores width/height, horizontal margins only"}),e.jsx("td",{className:"py-3 align-top",children:"Text content, links, small elements"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"block"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Takes full width, starts new line, all margins respected"}),e.jsx("td",{className:"py-3 align-top",children:"Sections, containers, structural elements"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"inline-block"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Flows inline but respects sizing properties"}),e.jsx("td",{className:"py-3 align-top",children:"Legacy layouts, side-by-side elements"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"flex"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Flexible one-dimensional layout, powerful alignment"}),e.jsx("td",{className:"py-3 align-top",children:"Navigation, toolbars, responsive layouts"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"grid"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Two-dimensional layout, explicit rows/columns"}),e.jsx("td",{className:"py-3 align-top",children:"Dashboards, galleries, complex grids"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"none"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Element not rendered, no space in layout"}),e.jsx("td",{className:"py-3 align-top",children:"Hidden elements, conditional display"})]})]})]})]})]}),Up=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"CSS Positioning"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-a-relative-fixed-absolute-and-statically-positioned-element?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Positioning →"}),e.jsx("a",{href:"https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/whats-the-difference-between-a-relative-fixed-absolute-and-statically-positioned-element/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Positioning (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{children:"Position"}),e.jsx("div",{children:"static"}),e.jsx("div",{children:"relative"}),e.jsx("div",{children:"absolute"}),e.jsx("div",{children:"fixed"})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Default"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Normal flow"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative",children:e.jsx("div",{className:"bg-[#4d5bce40] p-2 absolute top-2 left-2",children:"In flow"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Still in flow"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative",children:e.jsx("div",{className:"bg-[#4d5bce40] p-2 relative top-2 left-2",children:"Offset"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Removed from flow"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative",children:e.jsx("div",{className:"bg-[#4d5bce40] p-2 absolute top-2 right-2",children:"Out"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Fixed to viewport"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] h-24 relative bg-opacity-50",children:e.jsx("div",{className:"bg-[#43d9ad40] p-2 text-xs",children:"Fixed (sticky)"})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Offset (top, left, etc)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Ignored"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#fea55f] text-xs",children:"Not applicable"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Relative to normal position"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"top/left/right/bottom"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Relative to positioned parent"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"top/left/right/bottom"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Relative to viewport"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"top/left/right/bottom"})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"z-index"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"No effect"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#fea55f] text-xs",children:"Ignored"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Can apply"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"Works"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Recommended"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"Important"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"For layering"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"Common"})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Affects Layout Flow"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✓ Yes"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"In document flow"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✓ Yes"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"Still takes space"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✗ No"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#fea55f] text-xs",children:"Out of flow"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✗ No"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#fea55f] text-xs",children:"Out of flow"})})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Common Uses"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Default layout"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"Most elements"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Fine-tune position"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"Minor adjustments"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Overlays, tooltips, dropdowns"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"Over content"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Headers, footers, modals"}),e.jsx("div",{className:"bg-[#011221] p-2 border border-[#1e2d3d] text-xs",children:"Sticky elements"})]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`The position property defines how an element is positioned in the document.

position: static (DEFAULT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Element flows normally in document
• top, left, right, bottom have NO effect
• Not positioned relative to anything
• Most HTML elements are static

position: relative
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Element positioned relative to its NORMAL position
• Still occupies space in document flow
• Other elements don't move to fill gap
• Useful for fine-tuning element placement
  Example: nudge button slightly down with top: 10px

position: absolute
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Removed from normal document flow
• Positioned relative to NEAREST POSITIONED ANCESTOR
• If no positioned ancestor, relative to <html>
• Other elements flow around it as if not there
• Common uses: overlays, tooltips, dropdowns, modals
  Example: tooltip positioned above a button

position: fixed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Removed from normal document flow
• Positioned relative to VIEWPORT (not ancestor)
• Stays in place even when scrolling
• Common uses: sticky headers, floating nav, modals
  Example: fixed header that stays at top while scrolling

KEY DIFFERENCES:
┌─────────────┬────────┬────────┬────────┬────────┐
│ Property    │ static │relative│absolute│ fixed  │
├─────────────┼────────┼────────┼────────┼────────┤
│ In flow?    │  Yes   │  Yes   │  No    │  No    │
│ Uses offset?│  No    │  Yes   │  Yes   │  Yes   │
│ Relative to?│   —    │ self   │parent  │viewport│
└─────────────┴────────┴────────┴────────┴────────┘

POSITIONING TIPS:
• Use relative to create a positioning context for child absolute elements
• absolute elements usually have overflow: hidden parent
• Don't mix display: flex with positioning
• z-index only works on positioned elements (not static)
• fixed elements can cause scrolling issues on mobile`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Position"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Behavior"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Positioned Relative To"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Common Use"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"static"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Default flow, offset ignored"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"N/A"}),e.jsx("td",{className:"py-3 align-top",children:"Default for all elements"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"relative"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"In flow, offset from normal position, takes space"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Its normal position"}),e.jsx("td",{className:"py-3 align-top",children:"Fine-tuning position, context for absolute children"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"absolute"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Out of flow, no space, absolutely positioned"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Nearest positioned ancestor (or html)"}),e.jsx("td",{className:"py-3 align-top",children:"Overlays, tooltips, modals, dropdowns"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"fixed"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Out of flow, no space, stuck to viewport"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Browser viewport"}),e.jsx("td",{className:"py-3 align-top",children:"Fixed headers, sticky navigation, floating buttons"})]})]})]})]})]}),zp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"React & Its Benefits"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: React & Benefits →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-is-react-describe-the-benefits-of-react/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: React & Benefits (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"What is React?"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"• JavaScript library for building UIs"}),e.jsx("div",{className:"text-xs text-[#607b96] ml-4",children:"Developed by Facebook, now open-source and maintained by community"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"• Component-based architecture"}),e.jsx("div",{className:"text-xs text-[#607b96] ml-4",children:"Build encapsulated components that manage their own state"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"• Declarative programming model"}),e.jsx("div",{className:"text-xs text-[#607b96] ml-4",children:"Describe what UI should look like, React handles the updates"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"• Uses Virtual DOM"}),e.jsx("div",{className:"text-xs text-[#607b96] ml-4",children:"Efficiently updates actual DOM by comparing virtual representations"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Performance Benefits"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Virtual DOM"}),e.jsx("div",{className:"text-xs",children:"Batch updates, minimal real DOM changes"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Reconciliation"}),e.jsx("div",{className:"text-xs",children:"Smart diffing algorithm finds optimal updates"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Efficient rendering"}),e.jsx("div",{className:"text-xs",children:"Only re-renders changed components"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Developer Experience"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ JSX syntax"}),e.jsx("div",{className:"text-xs",children:"Write HTML-like code in JavaScript"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Component reusability"}),e.jsx("div",{className:"text-xs",children:"Build once, use everywhere"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ One-way data flow"}),e.jsx("div",{className:"text-xs",children:"Easier to debug and reason about state"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Scalability Features"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Unidirectional data flow"}),e.jsx("div",{className:"text-xs",children:"Props down, events up structure"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ State management patterns"}),e.jsx("div",{className:"text-xs",children:"Supports Redux, Context, Zustand"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Large ecosystems"}),e.jsx("div",{className:"text-xs",children:"Thousands of libraries and tools"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Community & Tools"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Large community"}),e.jsx("div",{className:"text-xs",children:"Abundant resources, tutorials, answers"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ DevTools"}),e.jsx("div",{className:"text-xs",children:"Excellent React DevTools browser extension"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Framework options"}),e.jsx("div",{className:"text-xs",children:"Next.js, Remix, Gatsby for full-stack"})]})]})]})]}),e.jsxs("div",{className:"space-y-2 mb-8",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"React vs Vanilla JavaScript"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm font-medium mb-2",children:"Vanilla JavaScript"}),e.jsxs("div",{className:"space-y-2 text-xs [font-family:'Fira_Code',Helvetica] text-[#607b96]",children:[e.jsx("div",{children:"❌ Manual DOM manipulation"}),e.jsx("div",{children:"❌ State scattered across HTML"}),e.jsx("div",{children:"❌ No component structure"}),e.jsx("div",{children:"❌ Harder to scale"}),e.jsx("div",{children:"❌ More boilerplate code"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm font-medium mb-2",children:"React"}),e.jsxs("div",{className:"space-y-2 text-xs [font-family:'Fira_Code',Helvetica] text-[#607b96]",children:[e.jsx("div",{children:"✓ Declarative UI updates"}),e.jsx("div",{children:"✓ Centralized state management"}),e.jsx("div",{children:"✓ Reusable components"}),e.jsx("div",{children:"✓ Scales to complex apps"}),e.jsx("div",{children:"✓ Less repetitive code"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Ideal Use Cases"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Single Page Apps (SPAs)"}),e.jsx("div",{className:"text-xs",children:"Gmail, Trello, Figma"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Real-time dashboards"}),e.jsx("div",{className:"text-xs",children:"Analytics, admin panels"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Progressive Web Apps"}),e.jsx("div",{className:"text-xs",children:"Offline functionality"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Mobile apps (React Native)"}),e.jsx("div",{className:"text-xs",children:"iOS & Android development"})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`WHAT IS REACT?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React is a JavaScript library for building user interfaces 
with a component-based, declarative approach.

Key characteristics:
• Developed by Facebook (now Meta)
• Open source and widely adopted
• Focuses on the "V" in MVC
• Built on component composition
• Uses Virtual DOM for performance


MAJOR BENEFITS OF REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. VIRTUAL DOM & PERFORMANCE
   • Doesn't directly manipulate real DOM (slow)
   • Creates virtual representation of DOM
   • Compares old & new virtual DOMs (diffing)
   • Only applies necessary real DOM changes
   • Result: Faster rendering and better performance

2. REUSABLE COMPONENTS
   • Encapsulate UI logic and state
   • Props for configuration
   • Stateless (presentational) or stateful (container)
   • Compose complex UIs from simple pieces
   • Easier maintenance and testing

3. UNIDIRECTIONAL DATA FLOW
   • Data flows from parent to child
   • Child communicates via callbacks
   • Predictable state updates
   • Easier debugging
   • Prevents circular dependencies

4. DECLARATIVE PROGRAMMING
   • Describe what UI should look like
   • React handles the "how"
   • Less imperative boilerplate code
   • More readable and maintainable
   • Closer to how we think about UI

5. RICH ECOSYSTEM
   • Thousands of third-party libraries
   • State management: Redux, Context, Zustand
   • Routing: React Router, Remix
   • Full-stack frameworks: Next.js, Gatsby
   • Testing tools: Vitest, Jest, React Testing Library

6. STRONG COMMUNITY & RESOURCES
   • Massive community for support
   • Abundant tutorials and documentation
   • Easy to find solutions online
   • Regular updates and improvements
   • Lots of hiring demand

7. DEVELOPER EXPERIENCE
   • JSX: Write HTML-like code in JS
   • Hot reload for fast development
   • Excellent DevTools browser extension
   • Strong TypeScript integration
   • Clear error messages

8. SEO & PERFORMANCE
   • Can be rendered on server (Next.js)
   • Better than pure client-side rendering
   • Code splitting capabilities
   • Lazy loading support
   • Progressive enhancement possible

9. LEARN ONCE, WRITE ANYWHERE
   • React Native for mobile apps
   • React for web
   • React VR, React 360
   • Skills transfer across platforms

10. SCALABILITY
    • Handles small to massive apps
    • Supports micro-frontends
    • Works with multiple frameworks
    • Plugin architecture options`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Benefit"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Virtual DOM"}),e.jsx("td",{className:"py-3 align-top",children:"Abstraction layer that optimizes real DOM updates through diffing algorithm"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Components"}),e.jsx("td",{className:"py-3 align-top",children:"Reusable, encapsulated UI building blocks with own logic and state"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Unidirectional Data Flow"}),e.jsx("td",{className:"py-3 align-top",children:"Props flow down, events flow up; prevents circular dependencies"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Declarative UI"}),e.jsx("td",{className:"py-3 align-top",children:"Describe desired state, React updates UI automatically"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"JSX Syntax"}),e.jsx("td",{className:"py-3 align-top",children:"Write HTML-like code in JavaScript for better readability"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Ecosystem & Tools"}),e.jsx("td",{className:"py-3 align-top",children:"Rich library ecosystem, state management, routing, and full-stack frameworks"})]})]})]})]})]}),Bp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"let, var, const Differences"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: let/var/const →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: let/var/const (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-4 text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{children:"Aspect"}),e.jsx("div",{children:"var"}),e.jsx("div",{children:"let"}),e.jsx("div",{children:"const"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Scope"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Function-scoped"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#fea55f] text-xs block mb-1",children:"function scope()"}),e.jsxs("code",{className:"text-[#607b96] text-xs block ml-2",children:["if ","{"," var x = 1; ","}"]}),e.jsx("code",{className:"text-[#607b96] text-xs block ml-2",children:"console.log(x) // 1"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Block-scoped"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsxs("code",{className:"text-[#43d9ad] text-xs block mb-1",children:["if (true) ","{"]}),e.jsx("code",{className:"text-[#607b96] text-xs block ml-2",children:"let x = 1;"}),e.jsx("code",{className:"text-[#607b96] text-xs block ml-2",children:"}"}),e.jsx("code",{className:"text-[#fea55f] text-xs block ml-2",children:"// x is not defined"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Block-scoped"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsxs("code",{className:"text-[#43d9ad] text-xs block mb-1",children:["if (true) ","{"]}),e.jsx("code",{className:"text-[#607b96] text-xs block ml-2",children:"const x = 1;"}),e.jsx("code",{className:"text-[#607b96] text-xs block ml-2",children:"}"}),e.jsx("code",{className:"text-[#fea55f] text-xs block ml-2",children:"// x is not defined"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Hoisting"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Hoisted & initialized to undefined"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#607b96] text-xs block mb-1",children:"console.log(x)"}),e.jsx("code",{className:"text-[#607b96] text-xs block mb-1",children:"// undefined (not error)"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"var x = 1;"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Hoisted but not initialized"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#607b96] text-xs block mb-1",children:"console.log(x)"}),e.jsx("code",{className:"text-[#fea55f] text-xs block mb-1",children:"// ReferenceError (TDZ)"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"let x = 1;"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"Hoisted but not initialized"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#607b96] text-xs block mb-1",children:"console.log(x)"}),e.jsx("code",{className:"text-[#fea55f] text-xs block mb-1",children:"// ReferenceError (TDZ)"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"const x = 1;"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Reassignment"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✓ Allowed"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"var x = 1;"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"x = 2; // OK"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✓ Allowed"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"let x = 1;"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"x = 2; // OK"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✗ Not allowed"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"const x = 1;"}),e.jsx("code",{className:"text-[#fea55f] text-xs block",children:"x = 2; // TypeError"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Re-declaration"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✓ Allowed (same scope)"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"var x = 1;"}),e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"var x = 2; // OK"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✗ Not allowed (same scope)"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"let x = 1;"}),e.jsx("code",{className:"text-[#fea55f] text-xs block",children:"let x = 2; // Error"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"✗ Not allowed (same scope)"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#43d9ad] text-xs block",children:"const x = 1;"}),e.jsx("code",{className:"text-[#fea55f] text-xs block",children:"const x = 2; // Error"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium",children:"Temporal Dead Zone (TDZ)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"None"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:e.jsx("code",{className:"text-[#43d9ad] text-xs",children:"Not applicable"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"From block start to declaration"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#fea55f] text-xs block mb-1",children:"⚠ ReferenceError"}),e.jsx("code",{className:"text-[#607b96] text-xs block",children:"before declaration"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs",children:"From block start to declaration"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d]",children:[e.jsx("code",{className:"text-[#fea55f] text-xs block mb-1",children:"⚠ ReferenceError"}),e.jsx("code",{className:"text-[#607b96] text-xs block",children:"before declaration"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"When to Use"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"var: Avoid"}),e.jsx("div",{className:"text-xs",children:"Old, function-scoped, error-prone"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"let: Mutable values"}),e.jsx("div",{className:"text-xs",children:"Variables that need reassignment"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"const: Default choice"}),e.jsx("div",{className:"text-xs",children:"Prefer const by default, use let if needed"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Modern Standard"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Use const by default"}),e.jsx("div",{className:"text-xs",children:"Prevents accidental reassignment"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Use let when reassigning"}),e.jsx("div",{className:"text-xs",children:"Block-scoped, no hoisting confusion"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Never use var"}),e.jsx("div",{className:"text-xs",children:"Causes bugs, bad practice, unnecessary"})]})]})]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`var
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Function-scoped (not block-scoped)
• Hoisted with "undefined" initialization
• Can be redeclared in same scope
• Can be reassigned
• Initializes to undefined if hoisted but not assigned

Example:
function test() {
  console.log(x);  // undefined (hoisted)
  if (true) {
    var x = 1;
  }
  console.log(x);  // 1 (accessible outside if block!)
}

PROBLEM: Function scope is confusing for developers used to 
         block-scoping from other languages


let
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Block-scoped (inside {}, if, for, while, etc.)
• Hoisted but NOT initialized (Temporal Dead Zone)
• Cannot be redeclared in same scope
• Can be reassigned
• Accessing before declaration causes ReferenceError

Example:
function test() {
  console.log(x);  // ReferenceError (in TDZ)
  if (true) {
    let x = 1;
  }
  console.log(x);  // ReferenceError (x only exists in if block)
}

BETTER: Block scope matches intuition, no hoisting surprises


const
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Block-scoped (same as let)
• Hoisted but NOT initialized (Temporal Dead Zone)
• Cannot be redeclared in same scope
• Cannot be reassigned
• Must be initialized at declaration
• Objects/arrays can be mutated (const prevents reassignment, not mutation)

Example:
const x = 1;
x = 2;  // TypeError

const obj = { name: 'Alice' };
obj.name = 'Bob';  // OK (mutation allowed)
obj = {};  // TypeError (reassignment not allowed)

MODERN STANDARD: Prevents accidental reassignment


KEY DIFFERENCES SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Scope:
• var → function-scoped (confusing)
• let/const → block-scoped (predictable)

Hoisting:
• var → hoisted with undefined (accessible early)
• let/const → hoisted but in TDZ (ReferenceError if accessed)

Reassignment:
• var/let → can be reassigned
• const → cannot be reassigned

Redeclaration:
• var → can be redeclared
• let/const → cannot be redeclared

Temporal Dead Zone:
• var → no TDZ
• let/const → TDZ from block start to declaration


BEST PRACTICE TODAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. DEFAULT TO const
   • Prevents accidental reassignment
   • Clearer intent
   • Makes code safer

2. USE let WHEN REASSIGNING
   • For loop counters
   • Variables that legitimately change
   • Temporary calculations

3. NEVER USE var
   • Old ES5 syntax
   • Function scope causes bugs
   • Hoisting behavior confusing
   • Use let/const instead

This approach makes code:
✓ Safer
✓ More predictable
✓ Easier to understand
✓ Less buggy`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Feature"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"var"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"let"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"const"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Scope"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Function"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Block"}),e.jsx("td",{className:"py-3 align-top",children:"Block"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Hoisting"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Hoisted to undefined"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Hoisted but not initialized"}),e.jsx("td",{className:"py-3 align-top",children:"Hoisted but not initialized"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Reassignable"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-3 align-top",children:"No"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Redeclareble"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"No"}),e.jsx("td",{className:"py-3 align-top",children:"No"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Temporal Dead Zone"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"No"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-3 align-top",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Recommendation"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Avoid"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"When reassigning"}),e.jsx("td",{className:"py-3 align-top",children:"Default choice"})]})]})]})]})]}),Wp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Event Delegation"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-event-delegation?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Event Delegation →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-event-delegation/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Event Delegation (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"How Event Delegation Works"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"1. Parent Listener"}),e.jsx("div",{children:"Attach single event listener to parent element (not children)"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"2. Event Bubbles"}),e.jsx("div",{children:"Event bubbles up from child through DOM tree"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"3. Check Target"}),e.jsx("div",{children:"Use event.target to identify which child was clicked"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"4. Execute Logic"}),e.jsx("div",{children:"Perform action based on the matched target element"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"With Event Delegation"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Single listener"}),e.jsx("div",{className:"text-xs",children:"Only 1 event listener on parent"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Dynamic elements"}),e.jsx("div",{className:"text-xs",children:"Newly added children automatically handled"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Lower memory"}),e.jsx("div",{className:"text-xs",children:"Fewer listener objects in memory"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Better performance"}),e.jsx("div",{className:"text-xs",children:"Less overhead, faster DOM traversal"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Without Event Delegation"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"✗ Multiple listeners"}),e.jsx("div",{className:"text-xs",children:"One listener per child element"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"✗ Manual management"}),e.jsx("div",{className:"text-xs",children:"Must attach listeners to new elements"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"✗ Higher memory"}),e.jsx("div",{className:"text-xs",children:"Many listener objects in memory"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f]",children:"✗ More complex"}),e.jsx("div",{className:"text-xs",children:"Harder to maintain, scale, cleanup"})]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Bubbling Phase (Typical)"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-xs mb-2",children:"Event travels UP from target to root"}),e.jsx("div",{className:"text-[#43d9ad]",children:"Child → Parent → Root"}),e.jsx("div",{className:"text-xs text-[#607b96] mt-2",children:"addEventListener() default: useCapture=false"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Capture Phase (Rare)"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-xs mb-2",children:"Event travels DOWN from root to target"}),e.jsx("div",{className:"text-[#43d9ad]",children:"Root → Parent → Child"}),e.jsx("div",{className:"text-xs text-[#607b96] mt-2",children:"addEventListener(event, handler, true)"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Important Limitations"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] mb-2",children:"Events that don't bubble:"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• focus, blur"}),e.jsx("div",{children:"• scroll, resize"}),e.jsx("div",{children:"• mouseenter, mouseleave"}),e.jsx("div",{children:"• load, unload"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] mb-2",children:"Requires:"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Proper target checking"}),e.jsx("div",{children:"• Event.target identification"}),e.jsx("div",{children:"• Avoid unintended matches"}),e.jsx("div",{children:"• Understand event bubbling"})]})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`EVENT DELEGATION PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Event delegation leverages event bubbling to handle events
for multiple elements with a single listener on a parent.

HOW IT WORKS:
┌─────────────────────────┐
│  Parent Element         │  ← Event listener attached here
│  ┌──────────────────┐   │
│  │ Child 1          │   │
│  └──────────────────┘   │
│  ┌──────────────────┐   │
│  │ Child 2 (clicked)├──→│ Event bubbles up
│  └──────────────────┘   │
│  ┌──────────────────┐   │
│  │ Child 3          │   │
│  └──────────────────┘   │
└─────────────────────────┘

EXAMPLE - WITHOUT delegation (BAD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', handler);  // Multiple listeners
});

Problem: If you add new <li> dynamically, you must attach
         a listener manually. High memory usage.


EXAMPLE - WITH delegation (GOOD):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const parent = document.getElementById('list');
parent.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    // Handle click
  }
});

Benefit: Single listener. New <li> elements automatically
         work without adding more listeners. Better memory.


REACT EVENT DELEGATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
React automatically uses event delegation internally!
Even though you write onClick on each component,
React attaches all listeners to the root DOM node.`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Core Concept"}),e.jsx("td",{className:"py-3 align-top",children:"Single listener on parent handles events for children via bubbling"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Key Method"}),e.jsx("td",{className:"py-3 align-top",children:"Check event.target to determine which child was interacted with"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Main Benefit"}),e.jsx("td",{className:"py-3 align-top",children:"Single listener works for current and future child elements"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Performance"}),e.jsx("td",{className:"py-3 align-top",children:"Better memory usage, fewer listener objects, faster initialization"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Limitation"}),e.jsx("td",{className:"py-3 align-top",children:"Only works with events that bubble (not focus, blur, scroll, etc.)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Use in React"}),e.jsx("td",{className:"py-3 align-top",children:"React handles this automatically at the root DOM container"})]})]})]})]})]}),qp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"React Key Prop"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Key Prop →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Key Prop (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"What Key Does"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"Identification"}),e.jsx("div",{children:"Tells React which items have changed, been added, or removed"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"Reconciliation"}),e.jsx("div",{children:"Helps React match old DOM nodes with new ones during re-renders"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"Preservation"}),e.jsx("div",{children:"Maintains component state and DOM focus when lists are reordered"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"Efficiency"}),e.jsx("div",{children:"Minimizes unnecessary DOM updates and re-renders"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"✓ Good Keys"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Stable ID from Data"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={item.id}"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Database Primary Key"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={user.userId}"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"UUID Generated Once"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={uuid}"})]}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"Never changes between renders"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f]",children:"✗ Bad Keys"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Array Index"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={index}"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Random Numbers"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={Math.random()}"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Current Time"}),e.jsx("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded mt-1",children:"key={Date.now()}"})]}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Changes on every render = bugs"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"Why Array Index Keys Fail"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsx("div",{className:"mb-3",children:e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"Problem: Items get reordered"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 text-xs",children:[e.jsxs("div",{className:"border border-[#43d9ad] p-2 bg-[#4d5bce]40",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-1",children:"Initial Render"}),e.jsx("div",{children:'key=0: "Apple"'}),e.jsx("div",{children:'key=1: "Banana"'}),e.jsx("div",{children:'key=2: "Cherry"'})]}),e.jsxs("div",{className:"border border-[#fea55f] p-2 bg-[#fea55f]20",children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-1",children:"User deletes Apple"}),e.jsx("div",{children:'key=0: "Banana" ← WAS key=1!'}),e.jsx("div",{children:'key=1: "Cherry" ← WAS key=2!'})]}),e.jsxs("div",{className:"border border-[#fea55f] p-2 bg-[#fea55f]20",children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-1",children:"Bug Result"}),e.jsx("div",{children:"React thinks Banana is still Apple"}),e.jsx("div",{children:"State/focus gets confused"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Key Requirements"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Must Be Unique"}),e.jsx("div",{className:"text-xs",children:"Among siblings in the same list"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Must Be Stable"}),e.jsx("div",{className:"text-xs",children:"Same across multiple renders"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Cannot Change"}),e.jsx("div",{className:"text-xs",children:"If it changes, React treats as new item"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Best Practice"}),e.jsx("div",{className:"text-xs",children:"Use data IDs, not positions"})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`REACT KEY PROP PATTERN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The key prop helps React identify which items have changed,
been added, or removed. It's essential for list reconciliation.

WHY KEYS MATTER:
┌─────────────────────────────────────┐
│ Rendering a dynamic list:           │
│                                     │
│ [Apple, Banana, Cherry]  ─render→   │
│ Delete Apple:                       │
│ [Banana, Cherry]         ─re-render │
│                                     │
│ Without unique key (index):         │
│ React thinks item 0 is "Banana"     │
│ (was Apple, key=0 before)           │
│ BUG: State/focus gets confused!     │
│                                     │
│ With unique key (id):               │
│ React knows Banana.id=2 is still    │
│ Banana, just moved positions        │
│ CORRECT: Everything works!          │
└─────────────────────────────────────┘

GOOD EXAMPLE - WITH UNIQUE ID:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

Result: React correctly tracks each item by ID


BAD EXAMPLE - WITH ARRAY INDEX:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{items.map((item, index) => (
  <li key={index}>{item.name}</li>
))}

Problem: Indices change when list is reordered
         State gets attached to wrong items
         Causes bugs and performance issues

ANOTHER BAD EXAMPLE - GENERATED ON RENDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{items.map((item) => (
  <li key={Math.random()}>{item.name}</li>
))}

Problem: Key is different on EVERY render
         React thinks all items are new
         Cannot reuse DOM nodes
         Major performance hit`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Scenario"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Impact"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Using unique stable ID"}),e.jsx("td",{className:"py-3 align-top",children:"React correctly matches nodes, reorders DOM efficiently, preserves component state"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Using array index"}),e.jsx("td",{className:"py-3 align-top",children:"Works for static lists, breaks when items reorder, state gets mismatched to wrong items"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Using Math.random()"}),e.jsx("td",{className:"py-3 align-top",children:"React treats all items as new on every render, destroys and recreates all DOM nodes, severe performance issues"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Omitting key prop"}),e.jsx("td",{className:"py-3 align-top",children:"React uses array index as default key, same issues as explicit index keys, unpredictable behavior"})]})]})]})]})]}),Vp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Client Storage: Cookies vs localStorage vs sessionStorage"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-cookies-local-storage-and-session-storage?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Client Storage →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/explain-the-difference-between-cookies-local-storage-and-session-storage/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Client Storage (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Cookies"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Size"}),e.jsx("div",{className:"text-xs",children:"~4KB per cookie"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Scope"}),e.jsx("div",{className:"text-xs",children:"All tabs/windows"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Lifespan"}),e.jsx("div",{className:"text-xs",children:"Configurable expiry"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"HTTP"}),e.jsx("div",{className:"text-xs",children:"Auto sent with requests"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"localStorage"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Size"}),e.jsx("div",{className:"text-xs",children:"~5-10MB"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Scope"}),e.jsx("div",{className:"text-xs",children:"All tabs/windows"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Lifespan"}),e.jsx("div",{className:"text-xs",children:"Until manual delete"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"HTTP"}),e.jsx("div",{className:"text-xs",children:"Manual only"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"sessionStorage"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Size"}),e.jsx("div",{className:"text-xs",children:"~5-10MB"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Scope"}),e.jsx("div",{className:"text-xs",children:"Same tab only"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Lifespan"}),e.jsx("div",{className:"text-xs",children:"Tab close clears"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"HTTP"}),e.jsx("div",{className:"text-xs",children:"Manual only"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"When to Use Each"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Cookies"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Auth tokens/JWT"}),e.jsx("div",{children:"• Session IDs"}),e.jsx("div",{children:"• GDPR consent"}),e.jsx("div",{children:"• Analytics IDs"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"localStorage"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Theme preferences"}),e.jsx("div",{children:"• User settings"}),e.jsx("div",{children:"• App state"}),e.jsx("div",{children:"• Persistent config"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"sessionStorage"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Form draft data"}),e.jsx("div",{children:"• Temporary UI state"}),e.jsx("div",{children:"• Page reload state"}),e.jsx("div",{children:"• Wizard progress"})]})]})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"HTTP Request Flow"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Cookies"}),e.jsxs("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#43d9ad] mb-1",children:"→ Automatic"}),e.jsx("div",{children:"Sent in Cookie header with every request"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"localStorage"}),e.jsxs("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"✗ Manual"}),e.jsx("div",{children:"Must be included in fetch/AJAX"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"sessionStorage"}),e.jsxs("div",{className:"text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"✗ Manual"}),e.jsx("div",{children:"Must be included in fetch/AJAX"})]})]})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"Security Considerations"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Cookies"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• HttpOnly flag prevents XSS"}),e.jsx("div",{children:"• Secure flag = HTTPS only"}),e.jsx("div",{children:"• SameSite prevents CSRF"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"localStorage"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Vulnerable to XSS"}),e.jsx("div",{children:"• Shared across tabs"}),e.jsx("div",{children:"• Never store secrets"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"sessionStorage"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Vulnerable to XSS"}),e.jsx("div",{children:"• Tab-specific (safer)"}),e.jsx("div",{children:"• Never store secrets"})]})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CLIENT STORAGE COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three mechanisms for storing data on the client side,
each with different purposes and constraints.

STORAGE CAPACITY:
  Cookies:        ~4KB per cookie
  localStorage:   ~5-10MB
  sessionStorage: ~5-10MB

SCOPE & LIFETIME:
  Cookies:        All tabs/windows, configurable expiry
  localStorage:   All tabs/windows, persists until deleted
  sessionStorage: Same tab only, cleared on tab close

HTTP BEHAVIOR:
  Cookies:        AUTOMATIC - sent with every request
  localStorage:   MANUAL - must include in fetch/AJAX
  sessionStorage: MANUAL - must include in fetch/AJAX

EXAMPLE - COOKIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Set cookie with expiry
document.cookie = 'token=abc123; expires=2025-12-31; path=/';

// Read cookies
const cookies = document.cookie;

// Delete cookie
document.cookie = 'token=; expires=1970-01-01';

Use for: Auth tokens, GDPR consent, tracking IDs


EXAMPLE - localStorage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Store (persists)
localStorage.setItem('theme', 'dark');

// Retrieve
const theme = localStorage.getItem('theme');

// Delete
localStorage.removeItem('theme');

Use for: User preferences, settings, app state


EXAMPLE - sessionStorage:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Store (cleared on tab close)
sessionStorage.setItem('formDraft', JSON.stringify(data));

// Retrieve
const draft = JSON.parse(sessionStorage.getItem('formDraft'));

// Delete
sessionStorage.removeItem('formDraft');

Use for: Form data, temporary UI state`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Cookies"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"localStorage"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"sessionStorage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Capacity"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"~4KB each"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"~5-10MB"}),e.jsx("td",{className:"py-3 align-top",children:"~5-10MB"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Scope"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"All tabs/windows"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"All tabs/windows"}),e.jsx("td",{className:"py-3 align-top",children:"Same tab only"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Lifespan"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Until expiry/browser close"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Until manual deletion"}),e.jsx("td",{className:"py-3 align-top",children:"Until tab closes"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Sent with HTTP"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Yes, automatically"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"No, manual only"}),e.jsx("td",{className:"py-3 align-top",children:"No, manual only"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Best for"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Auth tokens, session IDs"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"User preferences, settings"}),e.jsx("td",{className:"py-3 align-top",children:"Form data, temporary state"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Security notes"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"HttpOnly/Secure flags protect"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Vulnerable to XSS attacks"}),e.jsx("td",{className:"py-3 align-top",children:"Vulnerable to XSS attacks"})]})]})]})]})]}),Gp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Script Loading: async vs defer"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-async-and-defer-script-loading?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Script async vs defer →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/what-is-the-difference-between-async-and-defer-script-loading/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Script Loading (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Loading Timeline Comparison"}),e.jsxs("div",{className:"space-y-3 [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"1. Default <script> - BLOCKS PARSING"}),e.jsx("div",{className:"text-[#607b96]",children:"HTML Parse → [SCRIPT DOWNLOAD] → [SCRIPT EXEC] → HTML Parse → Render"}),e.jsx("div",{className:"text-[#fea55f] text-xs mt-2",children:"⚠️ Page rendering delayed until script finishes"})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"2. <script async> - EXECUTE IMMEDIATELY"}),e.jsx("div",{className:"text-[#607b96]",children:"HTML Parse [parallel with SCRIPT DOWNLOAD] → [SCRIPT EXEC] ↓ → Render"}),e.jsx("div",{className:"text-[#fea55f] text-xs mt-2",children:"⚠️ Script execution can interrupt HTML parsing"})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"3. <script defer> - EXECUTE AFTER PARSING"}),e.jsx("div",{className:"text-[#607b96]",children:"HTML Parse [parallel with SCRIPT DOWNLOAD] → HTML Render → [SCRIPT EXEC]"}),e.jsx("div",{className:"text-[#43d9ad] text-xs mt-2",children:"✓ Best for most cases: non-blocking + full DOM"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Default Script"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Parsing"}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Blocks ✗"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Download"}),e.jsx("div",{className:"text-xs",children:"Sequential"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Execution"}),e.jsx("div",{className:"text-xs",children:"Immediate"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Order"}),e.jsx("div",{className:"text-xs",children:"Guaranteed"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"DOM"}),e.jsx("div",{className:"text-xs",children:"Maybe not ready"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"With async"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Parsing"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"Parallel ✓"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Download"}),e.jsx("div",{className:"text-xs",children:"Parallel"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Execution"}),e.jsx("div",{className:"text-xs",children:"ASAP"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Order"}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"NOT guaranteed"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"DOM"}),e.jsx("div",{className:"text-xs",children:"Maybe not ready"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"With defer"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Parsing"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"Parallel ✓"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Download"}),e.jsx("div",{className:"text-xs",children:"Parallel"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Execution"}),e.jsx("div",{className:"text-xs",children:"After parse"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Order"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"Guaranteed ✓"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"DOM"}),e.jsx("div",{className:"text-xs text-[#43d9ad]",children:"Ready ✓"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"When to Use Each"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"Default"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Critical above-fold"}),e.jsx("div",{children:"• First-paint scripts"}),e.jsx("div",{children:"• Rare to needed"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"async"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Analytics"}),e.jsx("div",{children:"• Ads/tracking"}),e.jsx("div",{children:"• Independent scripts"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"defer"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• App initialization"}),e.jsx("div",{children:"• DOM manipulation"}),e.jsx("div",{children:"• Most app scripts"})]})]})]})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm text-[#43d9ad]",children:[e.jsx("div",{className:"font-bold mb-2",children:"💡 General Best Practice"}),e.jsxs("div",{className:"text-[#607b96]",children:["Use ","<script defer>"," for most scripts. Use ","<script async>"," only for independent third-party scripts that don't depend on execution order."]})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`SCRIPT LOADING: async vs defer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Different ways to load script tags affect HTML parsing,
script execution timing, and page performance.

DEFAULT BEHAVIOR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script src="script.js"><\/script>

Timeline: HTML Parse → DOWNLOAD & EXECUTE SCRIPT → HTML Parse → Render
Issue:    Parsing BLOCKS while script downloads and executes
Result:   Slower page load, render delays


ASYNC ATTRIBUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script async src="analytics.js"><\/script>

Timeline: HTML Parse [PARALLEL DOWNLOAD] → EXECUTE ASAP → Render
Benefit:  Doesn't block HTML parsing
Issue:    No guaranteed execution order; DOM may not be ready
Use for:  Independent scripts (analytics, ads, third-party)

Real-world: Google Analytics, ad networks, tracking pixels
            These scripts don't need DOM or other scripts


DEFER ATTRIBUTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<script defer src="app.js"><\/script>

Timeline: HTML Parse [PARALLEL DOWNLOAD] → Parse Complete → EXECUTE → Render
Benefit:  Doesn't block parsing; executes with DOM ready; preserves order
Use for:  App scripts, DOM manipulation, dependent scripts

Real-world: React apps, jQuery plugins, any script needing DOM
            Multiple deferred scripts execute in order


COMMON EXAMPLE - HTML HEAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
<head>
  <!-- Critical CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Third-party tracking (independent) -->
  <script async src="ga.js"><\/script>
</head>

<body>
  <!-- App content -->
  <div id="app"></div>
  
  <!-- Main app (needs full DOM) -->
  <script defer src="app.js"><\/script>
</body>

Result: Page renders faster (CSS blocking is ok, JS doesn't)
        App scripts execute after DOM is ready
        Analytics loads independently`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Default"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"async"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"defer"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"HTML Parsing"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Blocks (waits for script)"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Parallel (doesn't block)"}),e.jsx("td",{className:"py-3 align-top",children:"Parallel (doesn't block)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Execution Timing"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Immediately when found"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"As soon as downloaded"}),e.jsx("td",{className:"py-3 align-top",children:"After HTML parsing completes"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Execution Order"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"In appearance order"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Not guaranteed"}),e.jsx("td",{className:"py-3 align-top",children:"In appearance order"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"DOM Available"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Maybe not ready"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Maybe not ready"}),e.jsx("td",{className:"py-3 align-top",children:"Fully parsed and ready"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Best Use Case"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Critical rendering scripts"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Independent third-party scripts"}),e.jsx("td",{className:"py-3 align-top",children:"App code, DOM manipulation"})]})]})]})]})]}),Kp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Benefits of React Hooks"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-react-hooks?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: React Hooks Benefits →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-are-the-benefits-of-using-react-hooks/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Hooks Benefits (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Code Quality"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Readable"}),e.jsx("div",{className:"text-xs",children:"Functional code is simpler than class logic"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Testable"}),e.jsx("div",{className:"text-xs",children:"Pure functions easier to unit test"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Maintainable"}),e.jsx("div",{className:"text-xs",children:"Logic grouped with related concerns"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Development Speed"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Less Boilerplate"}),e.jsx("div",{className:"text-xs",children:"No constructor, this binding, etc."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Reusable"}),e.jsx("div",{className:"text-xs",children:"Custom hooks extract shared logic"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Less Code"}),e.jsx("div",{className:"text-xs",children:"Fewer lines to accomplish same thing"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Major Hooks & Benefits"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"useState"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Add state without class"}),e.jsx("div",{children:"• Clean, simple syntax"}),e.jsx("div",{children:"• Multiple independent states"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"useEffect"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Replace lifecycle methods"}),e.jsx("div",{children:"• Group related logic"}),e.jsx("div",{children:"• Automatic cleanup"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Custom Hooks"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Extract reusable logic"}),e.jsx("div",{children:"• Share state between components"}),e.jsx("div",{children:"• No render prop complexity"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Other Hooks"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• useContext (avoid prop drilling)"}),e.jsx("div",{children:"• useMemo (performance)"}),e.jsx("div",{children:"• useCallback (memoization)"})]})]})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Class vs Hooks Code Comparison"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2 [font-family:'Fira_Code',Helvetica] text-xs",children:"Class Component (Verbose)"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:`class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>{this.state.count}</div>
    );
  }
}`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2 [font-family:'Fira_Code',Helvetica] text-xs",children:"Hooks (Simple)"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:`function Counter() {
  const [count, setCount] 
    = useState(0);
  return (
    <div>{count}</div>
  );
}`})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Problems Hooks Solve"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"❌ Class Components"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Verbose boilerplate (constructor, super, this)"}),e.jsx("div",{children:"• Lifecycle methods scattered"}),e.jsx("div",{children:"• Hard to reuse stateful logic"}),e.jsx("div",{children:"• Complex HOCs/render props"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"✓ Hooks Solution"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Simple, functional syntax"}),e.jsx("div",{children:"• Related logic grouped in useEffect"}),e.jsx("div",{children:"• Custom hooks for reusability"}),e.jsx("div",{children:"• No nesting needed"})]})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`REACT HOOKS BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hooks enable you to use state and other React features
without writing class components. They provide a simpler,
more powerful way to organize component logic.

KEY BENEFITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SIMPLER CODE
   - No constructor, super(), this binding
   - Functional components are easier to read
   - Less boilerplate overall

2. STATEFUL FUNCTIONAL COMPONENTS
   - useState lets functional components have state
   - Multiple independent state variables
   - No need for class components

3. REUSABLE LOGIC (Custom Hooks)
   - Extract stateful logic into custom hooks
   - Share logic between components
   - Avoid render prop / HOC complexity

4. ORGANIZED SIDE EFFECTS
   - useEffect groups related logic together
   - Replaces multiple lifecycle methods
   - Setup and cleanup in one place

5. BETTER PERFORMANCE
   - useCallback, useMemo for optimization
   - Fine-grained dependency tracking
   - Avoid unnecessary re-renders


BEFORE - CLASS COMPONENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  componentDidMount() {
    console.log('Mounted');
  }
  
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}


AFTER - HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Mounted');
  }, []);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

Result: Same functionality, cleaner code


CUSTOM HOOKS - REUSABLE LOGIC:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  return { count, increment, decrement };
}

// Use in any component
function CounterA() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>{count}</button>;
}

function CounterB() {
  const { count, decrement } = useCounter(10);
  return <button onClick={decrement}>{count}</button>;
}


COMMON HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
useState         - Add state to functional components
useEffect        - Handle side effects (mount/update/unmount)
useContext       - Consume context without nesting
useReducer       - Complex state management
useCallback      - Memoize functions
useMemo          - Memoize expensive values
useRef           - Access DOM directly
useLayoutEffect  - Like useEffect, but before paint`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Benefit"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Simpler Syntax"}),e.jsx("td",{className:"py-3 align-top",children:"Functional components with hooks require less boilerplate than class components (no constructor, super, this binding)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Easier to Read/Maintain"}),e.jsx("td",{className:"py-3 align-top",children:"Code is more declarative and follows JavaScript conventions, making it easier to understand"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Reusable Logic"}),e.jsx("td",{className:"py-3 align-top",children:"Custom hooks extract and share stateful logic across components without render props or HOCs"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Organized Effects"}),e.jsx("td",{className:"py-3 align-top",children:"useEffect groups related side effects together, replacing multiple lifecycle methods scattered across component"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Better Performance"}),e.jsx("td",{className:"py-3 align-top",children:"useCallback, useMemo, and dependency arrays provide fine-grained control over optimizations"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Easier Testing"}),e.jsx("td",{className:"py-3 align-top",children:"Pure functions and hooks are simpler to unit test in isolation"})]})]})]})]})]}),Yp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"CSS in Head, Scripts Before Body"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/why-is-it-generally-a-good-idea-to-position-css-link-tags-in-the-head-and-script-tags-just-before-the-body-close-tag?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: CSS & Script Placement →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-javascript-interview-questions/blob/main/questions/why-is-it-generally-a-good-idea-to-position-css-link-tags-in-the-head-and-script-tags-just-before-the-body-close-tag/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Placement (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:["Why CSS in ","<head>"]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"1. Parsing"}),e.jsx("div",{children:"HTML and CSS load simultaneously for CSSOM creation"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"2. FOUC Prevention"}),e.jsx("div",{children:"Styles applied before render = no unstyled flash"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"3. Performance"}),e.jsx("div",{children:"Progressive rendering starts earlier"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"4. UX"}),e.jsx("div",{children:"Users see styled content, not unstyled then styled"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:["Why Scripts Before ","</body>"]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"1. Non-blocking"}),e.jsx("div",{children:"HTML parses while script downloads = faster initial render"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"2. DOM Ready"}),e.jsx("div",{children:'All elements parsed when script executes = no "not found"'})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"3. UX"}),e.jsx("div",{children:"Page content visible immediately, scripts load after"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"4. Render"}),e.jsx("div",{children:"User sees styled content faster (perceived performance)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"CSS in Head ✓"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{children:"1. Download HTML + CSS"}),e.jsx("div",{children:"2. Parse HTML → DOM"}),e.jsx("div",{children:"3. Parse CSS → CSSOM"}),e.jsx("div",{children:"4. Combine → Render Tree"}),e.jsx("div",{children:"5. Paint (styled content)"}),e.jsx("div",{className:"text-[#43d9ad] font-bold mt-2",children:"Result: Styled content shown"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"CSS in Body ✗ (FOUC)"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{children:"1. Download HTML (no CSS)"}),e.jsx("div",{children:"2. Parse HTML → DOM"}),e.jsx("div",{children:"3. Paint (unstyled content!) ⚠️"}),e.jsx("div",{children:"4. Download CSS"}),e.jsx("div",{children:"5. Parse CSS → CSSOM"}),e.jsx("div",{className:"text-[#fea55f] font-bold mt-2",children:"Result: Flash then reflow"})]})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Script Before Body ✓"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{children:"1. Parse HTML"}),e.jsx("div",{children:"2. Render styled content"}),e.jsx("div",{children:"3. Download script"}),e.jsx("div",{children:"4. Execute (DOM ready)"}),e.jsx("div",{className:"text-[#43d9ad] font-bold mt-2",children:"Result: Content shown first"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"Script in Head ✗"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{children:"1. Download script"}),e.jsx("div",{children:"2. Execute (blocks parsing)"}),e.jsx("div",{children:"3. Parse HTML"}),e.jsx("div",{children:"4. Render content"}),e.jsx("div",{className:"text-[#fea55f] font-bold mt-2",children:"Result: Blank page delay ⚠️"})]})})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"✓ Best Practice Structure"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"<head>"}),e.jsxs("div",{children:["  ","<meta charset='UTF-8' />"]}),e.jsxs("div",{children:["  ","<link rel='stylesheet' href='styles.css' />"," ← CSS here"]}),e.jsx("div",{children:"</head>"}),e.jsx("div",{children:"<body>"}),e.jsxs("div",{children:["  ","<div id='app'>Content</div>"]}),e.jsxs("div",{children:["  ","<script src='app.js'><\/script>"," ← Scripts here"]}),e.jsx("div",{children:"</body>"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"Exceptions & Alternatives"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Inline Scripts"}),e.jsx("div",{className:"text-xs",children:"Critical inline JS can go in head for immediate execution"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"defer Attribute"}),e.jsx("div",{className:"text-xs",children:"Put in head with defer if need early download start"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"async Attribute"}),e.jsx("div",{className:"text-xs",children:"Non-critical scripts can use async anywhere"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Module Scripts"}),e.jsx("div",{className:"text-xs",children:"Modern ES6 modules in head with appropriate attributes"})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CSS IN HEAD, SCRIPTS BEFORE BODY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Proper placement of CSS and script tags significantly
impacts page load time and user experience.

WHY CSS IN HEAD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. HTML and CSS load together
   - Both are high-priority resources
   - CSSOM (CSS Object Model) created in parallel with DOM
   - Rendering can start once both are ready

2. Prevents FOUC (Flash of Unstyled Content)
   - If CSS loads late, page renders unstyled first
   - Then reflows/repaints when CSS applies
   - Bad user experience (flashing/jumping)

3. Progressive rendering
   - Browser can start painting styled content sooner
   - First meaningful paint happens earlier
   - Better perceived performance

4. Rendering depends on CSS
   - Render tree = DOM + CSSOM combined
   - Can't render without CSSOM
   - CSS blocks rendering if not ready


WHY SCRIPTS BEFORE </body>:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Scripts block HTML parsing
   - Browser downloads + executes script immediately
   - HTML parsing paused during execution
   - Page appears blank/frozen

2. Placing at bottom allows HTML to render first
   - All elements parsed before script runs
   - No "element not found" errors
   - Users see content immediately

3. DOM is ready when script executes
   - All HTML elements available
   - Script can manipulate/query DOM safely
   - No need to wait for DOMContentLoaded

4. Better perceived performance
   - Page "looks" faster even if same total time
   - Users see content instead of blank page


BEST PRACTICE - PROPER STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    
    <!-- CSS in head ✓ -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div id="app">Content</div>
    
    <!-- Scripts before </body> ✓ -->
    <script src="app.js"><\/script>
  </body>
</html>

Timing:
1. Head loads (CSS starts)
2. Body HTML parses and renders
3. Content visible to user
4. Scripts load and execute
5. Interactivity added


WHAT NOT TO DO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!-- ✗ CSS at bottom causes FOUC -->
<body>
  <h1>Content</h1>
  <link rel="stylesheet" href="styles.css">
</body>

<!-- ✗ Script in head blocks parsing -->
<head>
  <script src="app.js"><\/script>
  <link rel="stylesheet" href="styles.css">
</head>


ALTERNATIVES & EXCEPTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. defer attribute
   - Script in head but executes after parsing
   - Good for bootstrapping apps
   <script defer src="app.js"><\/script>

2. async attribute
   - Independent scripts that don't block
   - Good for analytics, ads
   <script async src="tracking.js"><\/script>

3. Inline critical CSS
   - Small critical styles in head
   - Rest deferred via link
   
4. Inline scripts
   - Tiny scripts can be inline in head
   - Often used for theme/polyfills`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Placement"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Benefits"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Drawbacks"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"CSS in Head"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"No FOUC, styled rendering, better UX, progressive rendering"}),e.jsx("td",{className:"py-3 align-top",children:"None (always correct)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"CSS in Body"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"None"}),e.jsx("td",{className:"py-3 align-top",children:"FOUC (Flash of Unstyled Content), reflow/repaint, poor UX"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Scripts Before Body"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Content visible first, DOM ready, non-blocking, better perceived performance"}),e.jsx("td",{className:"py-3 align-top",children:"None (best practice)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Scripts in Head"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"None"}),e.jsx("td",{className:"py-3 align-top",children:"Blocks parsing, blank page delay, poor perceived performance"})]})]})]})]})]}),Jp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"CSS Flexbox vs Grid"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-css-flexbox-and-css-grid?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Flexbox vs Grid →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-frontend-interview-questions/blob/main/questions/css-questions/what-is-the-difference-between-css-flexbox-and-css-grid/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Flexbox vs Grid (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Flexbox"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Dimensionality"}),e.jsx("div",{className:"text-xs",children:"1D (row OR column)"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Design"}),e.jsx("div",{className:"text-xs",children:"Content-first"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Axis Control"}),e.jsx("div",{className:"text-xs",children:"Main + cross axes"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Growth"}),e.jsx("div",{className:"text-xs",children:"Items expand/shrink"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"Grid"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Dimensionality"}),e.jsx("div",{className:"text-xs",children:"2D (rows AND columns)"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Design"}),e.jsx("div",{className:"text-xs",children:"Layout-first"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Axis Control"}),e.jsx("div",{className:"text-xs",children:"Full x/y control"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Structure"}),e.jsx("div",{className:"text-xs",children:"Predefined tracks"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Typical Use Cases"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Flexbox"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Navigation bars"}),e.jsx("div",{children:"• Toolbars"}),e.jsx("div",{children:"• Spacing items in a row/column"}),e.jsx("div",{children:"• Component layouts"}),e.jsx("div",{children:"• Centering content"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Grid"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"• Page layouts"}),e.jsx("div",{children:"• Complex designs"}),e.jsx("div",{children:"• Dashboard layouts"}),e.jsx("div",{children:"• Card grids"}),e.jsx("div",{children:"• Magazine layouts"})]})]})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Feature Comparison"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Aspect"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"Line breaking"}),e.jsx("div",{children:"Explicit sizing"}),e.jsx("div",{children:"Auto-sizing"}),e.jsx("div",{children:"Nesting"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Flexbox"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"flex-wrap"}),e.jsx("div",{children:"Limited"}),e.jsx("div",{children:"flex-grow/shrink"}),e.jsx("div",{children:"Yes (limited)"})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Grid"}),e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsx("div",{children:"Auto-flow"}),e.jsx("div",{children:"Full control"}),e.jsx("div",{children:"grid-auto-rows"}),e.jsx("div",{children:"Yes (full control)"})]})]})]})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"💡 Can You Use Both?"}),e.jsx("div",{className:"text-[#607b96]",children:"Yes! Grid for page layout + Flexbox for component layout is a common pattern. Use Grid for the big picture, Flexbox for components."})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CSS FLEXBOX vs GRID
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two powerful CSS layout systems with different strengths.
Flexbox handles 1D layouts, Grid handles 2D layouts.

FLEXBOX - 1 DIMENSIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Content-first approach: Items determine layout

.container {
  display: flex;
  justify-content: center;    /* Main axis alignment */
  align-items: center;        /* Cross axis alignment */
}

Layout types:
  Row:    Items left to right →
  Column: Items top to bottom ↓

Great for:
  • Navigation menus
  • Centering (vertical + horizontal)
  • Spacing items
  • Simple line layouts


GRID - 2 DIMENSIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Layout-first approach: Define structure, place items

.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}

Can place items explicitly:
  grid-column: 1 / 3;
  grid-row: 2;

Great for:
  • Page layouts (header/sidebar/main/footer)
  • Complex multi-row/column designs
  • Dashboard layouts
  • Magazine-style layouts


KEY DIFFERENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dimensionality:
  Flexbox: 1D (one direction at a time)
  Grid:    2D (two directions simultaneously)

Approach:
  Flexbox: Content-driven (items determine space)
  Grid:    Layout-driven (layout defined upfront)

Sizing:
  Flexbox: Items grow/shrink with flex-grow/shrink
  Grid:    Cells have defined size (fr units, etc.)

Child control:
  Flexbox: Limited (flex: 1, etc.)
  Grid:    Full (exact placement: grid-column/row)


COMMON EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Page Layout with Grid + Navigation with Flexbox:

<body>
  <header className="header">
    <nav className="nav">
      <ul className="navItems">
        <!-- Flexbox handles horizontal spacing -->
      </ul>
    </nav>
  </header>
  
  <aside className="sidebar"></aside>
  <main className="content"></main>
  
  <footer className="footer"></footer>
</body>

.body {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  /* Grid positions header/sidebar/main/footer */
}

.nav ul {
  display: flex;
  justify-content: space-between;
  /* Flexbox spaces nav items */
}


BROWSER SUPPORT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Both: Excellent in all modern browsers (ES2015+)`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Flexbox"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Grid"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Dimensionality"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"1-dimensional (row or column)"}),e.jsx("td",{className:"py-3 align-top",children:"2-dimensional (rows and columns)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Design Approach"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Content-first (items determine layout)"}),e.jsx("td",{className:"py-3 align-top",children:"Layout-first (structure defined upfront)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Item Sizing"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"flex-grow, flex-shrink control expansion"}),e.jsx("td",{className:"py-3 align-top",children:"Explicit grid-column/grid-row placement"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Best Use Case"}),e.jsx("td",{className:"py-3 pr-4 align-top",children:"Toolbars, navigation, component layouts"}),e.jsx("td",{className:"py-3 align-top",children:"Page layouts, complex designs, dashboards"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Can Use Together"}),e.jsx("td",{colSpan:2,className:"py-3 align-top",children:"Yes! Grid for page layout, Flexbox for component layout is standard pattern"})]})]})]})]})]}),$p=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Rules of React Hooks"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-rules-of-hooks?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Hooks Rules →"}),e.jsx("a",{href:"https://github.com/greatfrontend/top-react-interview-questions/blob/main/questions/what-are-the-rules-of-hooks/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Hooks Rules (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#fea55f] [font-family:'Fira_Code',Helvetica]",children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"⚠️ Two Essential Rules"}),e.jsxs("div",{className:"space-y-2 text-sm text-[#607b96]",children:[e.jsx("div",{children:"1. Only call hooks at the top level (NOT in conditions/loops)"}),e.jsx("div",{children:"2. Only call hooks from React components or custom hooks"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Rule 1: Top Level Only"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold min-w-fit",children:"Why?"}),e.jsx("div",{className:"text-xs",children:"React matches hooks by call order. Order must be consistent."})]}),e.jsx("div",{className:"text-[#fea55f] font-bold mb-2",children:"❌ Wrong Patterns:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsxs("div",{className:"bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"In Condition"}),"if (x) { useState() }"]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"In Loop"}),"for (...) { useState() }"]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"In Function"}),"function fn() { useState() }"]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{className:"text-[#fea55f] mb-1",children:"In Try/Catch"}),"try { useState() }"]})]}),e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2 mt-3",children:"✓ Correct Pattern:"}),e.jsxs("div",{className:"bg-[#1e2d3d] p-2 rounded text-xs",children:[e.jsxs("div",{children:["function MyComponent() ","{"]}),e.jsx("div",{children:"  const [x, setX] = useState() ← Top level"}),e.jsxs("div",{children:["  if (...) ","{"," ","}"," ← Conditions after"]}),e.jsx("div",{children:"}"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs",children:"Problem: Order Changes"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#fea55f] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:[e.jsx("div",{children:"Render 1: [state1, state2, state3]"}),e.jsxs("div",{children:["Render 2: if x ","{"]}),e.jsx("div",{children:"  state1, state2 (state3 missing!)"}),e.jsx("div",{children:"}"}),e.jsx("div",{className:"text-[#fea55f] mt-2",children:"React can't match hooks!"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs",children:"Solution: Always Same Order"}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:[e.jsx("div",{children:"Always: state1, state2, state3"}),e.jsx("div",{children:"Conditional logic comes AFTER"}),e.jsx("div",{className:"text-[#43d9ad] mt-2",children:"React can reliably map hooks"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Rule 2: React Functions/Custom Hooks Only"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"✓ Allowed:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsx("div",{className:"bg-[#1e2d3d] p-2 rounded",children:"Function Component"}),e.jsx("div",{className:"bg-[#1e2d3d] p-2 rounded",children:"Custom Hooks"})]}),e.jsx("div",{className:"text-[#fea55f] font-bold mb-2 mt-3",children:"❌ Not Allowed:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[e.jsx("div",{className:"bg-[#1e2d3d] p-2 rounded",children:"Regular Functions"}),e.jsx("div",{className:"bg-[#1e2d3d] p-2 rounded",children:"Class Components"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"ESLint Plugin Catches Violations"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96]",children:[e.jsx("div",{children:"npm install eslint-plugin-react-hooks"}),e.jsx("div",{className:"mt-2 text-[#43d9ad]",children:"Rules:"}),e.jsx("div",{className:"mt-1",children:"• react-hooks/rules-of-hooks (error)"}),e.jsx("div",{children:"• react-hooks/exhaustive-deps (warn)"}),e.jsx("div",{className:"text-xs text-[#607b96] mt-2",children:"Catches violations at dev time!"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"Common Mistakes"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"1. Conditional Hooks"}),e.jsxs("div",{className:"text-xs",children:["if (user) { useState() }"," ← WRONG"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"2. Early Returns"}),e.jsx("div",{className:"text-xs",children:"if (!ready) return; useState() ← WRONG"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"3. Loop Hooks"}),e.jsxs("div",{className:"text-xs",children:["items.forEach(item ","=>"," useState()) ← WRONG"]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"4. Callback Hooks"}),e.jsxs("div",{className:"text-xs",children:["onClick={() => useState()}"," ← WRONG"]})]})]})})]})]}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`RULES OF REACT HOOKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React has two essential rules for hooks to work correctly.
Breaking them causes unpredictable behavior and bugs.

WHY THESE RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React tracks hooks by call ORDER, not by name.
- First useState() call = first state variable
- Second useState() call = second state variable
- etc.

If hook order changes between renders, React gets confused
and updates wrong state variables.


RULE 1: ONLY CALL HOOKS AT TOP LEVEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ CORRECT:
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  if (count > 0) {
    // Logic here is fine
  }
  
  return <div>{count}</div>;
}

WHY: Hooks called in same order every render


✗ WRONG - CONDITIONAL:
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // Problem!
  }
}

Problem: If condition is false on re-render,
         useState isn't called and hooks shift


✗ WRONG - LOOP:
function MyComponent() {
  for (let i = 0; i < 5; i++) {
    useEffect(() => {}); // Problem!
  }
}

Problem: Loop may run different times,
         changing hook call count


✗ WRONG - EARLY RETURN:
function MyComponent() {
  if (!loaded) return <Loading />;
  
  const [data, setData] = useState(); // Problem!
}

Problem: Early return skips hooks,
         hooks called inconsistently


RULE 2: ONLY CALL FROM REACT FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ ALLOWED:
- Function components
- Custom hooks

✗ NOT ALLOWED:
- Regular JavaScript functions
- Class components
- Event handlers
- setTimeout/setInterval callbacks


CORRECT WITH CUSTOM HOOKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useCustomHook() {
  const [state, setState] = useState(0);
  useEffect(() => { }, []);
  return state;
}

function MyComponent() {
  const value = useCustomHook(); // ✓ OK
  return <div>{value}</div>;
}

function eventHandler() {
  const [state, setState] = useState(0); // ✗ WRONG
}


ESLINT PLUGIN HELPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

npm install eslint-plugin-react-hooks

Then configure:
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}

Plugin catches violations at dev time!`})}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 align-top",children:"Rule"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 align-top",children:"Details & Impact"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Top Level Only"}),e.jsx("td",{className:"py-3 align-top",children:"Never in conditionals, loops, or nested functions. React tracks hooks by call order and must be consistent every render to match state variables correctly."})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"React Functions Only"}),e.jsx("td",{className:"py-3 align-top",children:"Call only from function components or custom hooks. Hooks are React-specific and don't work in regular JS functions or class components."})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Breaking Rule 1"}),e.jsx("td",{className:"py-3 align-top",children:"State updates get mismatched, setState updates wrong state, useState returns wrong values, undefined behavior, difficult-to-debug bugs"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 font-medium align-top",children:"Breaking Rule 2"}),e.jsx("td",{className:"py-3 align-top",children:`Throws "rules of hooks" error. Hooks won't have access to fiber tree, state won't persist, component won't work as expected`})]})]})]})]})]}),Xp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Function.prototype.bind"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-function-prototype-bind?practice=practice&tab=quiz",children:"greatfrontend: Function.prototype.bind →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-function-prototype-bind/en-US.mdx",children:"github: Function.prototype.bind (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What bind() Does"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Creates new function"}),e.jsxs("div",{children:["Returns new function with ",e.jsx("span",{className:"text-[#fea55f]",children:"this"})," permanently bound"]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Doesn't call immediately"}),e.jsxs("div",{children:["Unlike ",e.jsx("span",{className:"text-[#fea55f]",children:"call"})," and ",e.jsx("span",{className:"text-[#fea55f]",children:"apply"}),", bind returns function for later use"]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Common Use Cases"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Event Handlers"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`button.addEventListener('click',
  this.handleClick
    .bind(this)
)`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Callbacks"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`setTimeout(
  this.updateData
    .bind(this),
  1000
)`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Array Methods"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`users.map(
  this.format
    .bind(this)
)`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Partial Application"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const add5 =
  add.bind(null, 5)
add5(3) // 8`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"bind vs call vs apply"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"bind"}),e.jsx("div",{children:"Returns new bound function"}),e.jsx("div",{className:"text-xs text-[#38a169] mt-2",children:"No immediate execution"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"call"}),e.jsx("div",{children:"Executes immediately"}),e.jsx("div",{className:"text-xs text-[#38a169] mt-2",children:"Individual arguments"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"apply"}),e.jsx("div",{children:"Executes immediately"}),e.jsx("div",{className:"text-xs text-[#38a169] mt-2",children:"Array of arguments"})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"⚠️ Important Points"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsxs("div",{children:["• ",e.jsx("span",{className:"text-[#fea55f]",children:"this"})," cannot be changed once bound"]}),e.jsx("div",{children:"• Bound function can have preset arguments (currying)"}),e.jsx("div",{children:"• Multiple bind calls create separate functions"}),e.jsx("div",{children:"• Cannot unbind; must store reference to bound function"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`FUNCTION.PROTOTYPE.BIND() PATTERN

Purpose: Creates a new function with 'this' permanently bound

Basic Syntax:
  const boundFunc = originalFunc.bind(thisArg, arg1, arg2, ...)
  boundFunc(arg3, arg4, ...) // Call without passing 'this' again


Key Characteristics:
  1. Returns new function (doesn't execute immediately like call/apply)
  2. Permanently binds 'this' context
  3. Can preset arguments (partial application/currying)
  4. Bound function always uses the bound 'this', even if called differently


Use Case 1: Method as Callback
  const obj = {
    name: 'John',
    greet() { console.log(this.name); }
  };
  
  // Without bind (loses 'this'):
  setTimeout(obj.greet, 1000); // undefined
  
  // With bind (preserves 'this'):
  setTimeout(obj.greet.bind(obj), 1000); // 'John'


Use Case 2: Event Handlers (especially in Classes)
  class Button {
    constructor() {
      this.clicks = 0;
      this.element.addEventListener(
        'click',
        this.handleClick.bind(this)
      );
    }
    
    handleClick() {
      this.clicks++;
    }
  }


Use Case 3: Partial Application (Currying)
  function add(a, b, c) {
    return a + b + c;
  }
  
  const add5 = add.bind(null, 5);
  add5(3, 2); // 10 (5 is preset)


Comparison with call() and apply():
  func.call(thisArg, arg1, arg2)     // Executes immediately, args listed
  func.apply(thisArg, [arg1, arg2])  // Executes immediately, args as array
  func.bind(thisArg, arg1, arg2)     // Returns function, not executed`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Return Value"}),e.jsx("td",{className:"py-2 align-top",children:"New function, not execution result"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Immediate Execution"}),e.jsx("td",{className:"py-2 align-top",children:"No - function must be called later"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"this Binding"}),e.jsx("td",{className:"py-2 align-top",children:"Permanent - cannot change even if called with different context"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Argument Preset"}),e.jsx("td",{className:"py-2 align-top",children:"Yes - can preset some arguments for later calls"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Common Use Case"}),e.jsx("td",{className:"py-2 align-top",children:"Event handlers, array methods, setTimeout/setInterval callbacks"})]})]})]})})]})]}),Qp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Arrow Syntax for Constructor Methods"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsx("div",{className:"text-xs text-[#43d9ad] space-y-1",children:e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx",children:"github: Arrow Methods in Constructor (mdx) →"})}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Key Advantages"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Auto Binding"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[#fea55f]",children:"this"})," always refers to instance, no .bind() needed"]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Callback Friendly"}),e.jsx("div",{children:"Safe to pass as callback without losing context"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Event Handlers"}),e.jsx("div",{children:"Perfect for addEventListener without extra binding"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Instance Methods"}),e.jsx("div",{children:"Creates method per instance (like OOP languages)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Regular Function vs Arrow"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Regular Function (Problem)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`class Button {
  constructor() {
    this.count = 0;
  }
  
  click() {
    this.count++;
  }
}

btn.addEventListener(
  'click',
  btn.click  // ✗ loses 'this'
);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Arrow Function (Solution)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`class Button {
  constructor() {
    this.count = 0;
    // ✓ 'this' bound in constructor
    this.click = () => {
      this.count++;
    };
  }
}

btn.addEventListener(
  'click',
  btn.click  // ✓ works!
);`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Common Patterns"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f]",children:"Event Handlers"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`this.handleClick = () => {
  // 'this' always works
};

element.addEventListener(
  'click',
  this.handleClick
);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f]",children:"Async Callbacks"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`this.fetchData = async () => {
  const data = await api.get();
  this.data = data; // safe
};

button.onClick = 
  this.fetchData;`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f]",children:"Array Methods"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`this.filterItems = (arr) => {
  return arr.filter(
    item => this.isValid(item)
  );
};`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f]",children:"Debounced Handlers"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`this.search = debounce(() => {
  // 'this' is preserved
  this.query = this.input.value;
}, 300);`})})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"⚠️ Trade-offs"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsx("div",{className:"text-[#38a169]",children:"✓ Auto-binding eliminates .bind() calls"}),e.jsx("div",{className:"text-[#fea55f]",children:"✗ Method per instance (more memory)"}),e.jsx("div",{className:"text-[#38a169]",children:"✓ Works naturally with callbacks"}),e.jsx("div",{className:"text-[#fea55f]",children:"✗ Cannot easily override in subclasses"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`ARROW METHODS IN CONSTRUCTOR SYNTAX

Advantage: Arrow functions in constructors have 'this' permanently bound

When to Use:
  1. Event handlers where 'this' needs to be the instance
  2. Callbacks passed to async/await operations
  3. Array methods that reference instance properties
  4. Any time method will be passed as callback


Problem with Regular Methods:
  class Component {
    count = 0;
    
    increment() {
      this.count++;
    }
  }
  
  const comp = new Component();
  
  // Without arrow, 'this' is lost when passed as callback:
  setTimeout(comp.increment, 1000);  // ERROR: 'this' is undefined
  
  // Must manually bind:
  setTimeout(comp.increment.bind(comp), 1000);  // Works


Solution with Arrow Methods:
  class Component {
    count = 0;
    
    // Arrow function - 'this' is bound to instance
    increment = () => {
      this.count++;
    };
  }
  
  const comp = new Component();
  
  // No binding needed:
  setTimeout(comp.increment, 1000);  // Works!
  
  // Perfect for event listeners:
  element.addEventListener('click', comp.increment);


React Class Component Example:
  class Counter extends React.Component {
    state = { count: 0 };
    
    // Without arrow - requires .bind(this) in constructor
    handleClick(e) {
      this.setState({ count: this.state.count + 1 });
    }
    
    // With arrow - auto-bound
    handleClickArrow = () => {
      this.setState({ count: this.state.count + 1 });
    };
    
    render() {
      return (
        <div>
          {/* Works without extra binding */}
          <button onClick={this.handleClickArrow}>+</button>
        </div>
      );
    }
  }`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Regular Method"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Arrow Method"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"this Binding"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Dynamic (caller's context)"}),e.jsx("td",{className:"py-2 align-top",children:"Static (instance)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Requires .bind()"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes (for callbacks)"}),e.jsx("td",{className:"py-2 align-top",children:"No"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Memory Usage"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Shared across instances"}),e.jsx("td",{className:"py-2 align-top",children:"One per instance"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Safe for Callbacks"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"No (without extra work)"}),e.jsx("td",{className:"py-2 align-top",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Use Case"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Direct calls, flexibility needed"}),e.jsx("td",{className:"py-2 align-top",children:"Callbacks, event handlers"})]})]})]})})]})]}),Zp=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Prototypal Inheritance"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-how-prototypal-inheritance-works?practice=practice&tab=quiz",children:"greatfrontend: Prototypal Inheritance →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-how-prototypal-inheritance-works/en-US.mdx",children:"github: Prototypal Inheritance (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is Prototypal Inheritance?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Object Delegation"}),e.jsx("div",{children:"Objects delegate to other objects via prototype chain"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Not Class-Based"}),e.jsx("div",{children:"No strict class/instance distinction like Java or C++"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Prototype Chain Visual"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"obj instance"}),e.jsx("div",{className:"text-[#43d9ad]",children:"→"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"obj.[[Prototype]]"}),e.jsx("div",{className:"text-[#43d9ad]",children:"→"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"Object.prototype"}),e.jsx("div",{className:"text-[#43d9ad]",children:"→"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"null"})]}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Property lookup goes up the chain until found or null reached"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Three Common Patterns"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Delegation"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const parent = {
  greet() {
    return 'hi';
  }
};

const child = Object.create(
  parent
);

child.greet();
// → 'hi'`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Constructor"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function Animal(name) {
  this.name = name;
}

Animal.prototype
  .speak = function() {
    return this.name;
  };

const dog = new Animal(
  'Max'
);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Concatenative"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const canEat = {
  eat() { /* ... */ }
};

const canWalk = {
  walk() { /* ... */ }
};

const person = Object.assign(
  {},
  canEat,
  canWalk
);`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Constructor Pattern Example"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Parent"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = 
  function() {
    console.log(
      this.name + ' makes sound'
    );
  };`})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"Child"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(
  Animal.prototype
);

Dog.prototype.bark = 
  function() { 
    return 'woof'; 
  };`})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Key Concepts"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsx("div",{children:"• [[Prototype]] - internal reference to parent object"}),e.jsx("div",{children:"• __proto__ - access to [[Prototype]] (non-standard)"}),e.jsx("div",{children:"• .prototype - property for constructor inheritance"}),e.jsx("div",{children:"• Object.create() - creates object with specified prototype"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`PROTOTYPAL INHERITANCE

Unlike classical inheritance (class-based), prototypal inheritance uses objects
to delegate to other objects. All JavaScript objects have an internal [[Prototype]]
reference.


How It Works:
1. Object has internal [[Prototype]] reference
2. When property accessed, JS looks in object
3. If not found, looks in [[Prototype]]
4. If still not found, looks in [[Prototype]].[[Prototype]]
5. Continues until null is reached (end of chain)


Three Main Patterns:

PATTERN 1: Delegation (Simplest)
  const parent = {
    greet: function() { return 'Hello'; }
  };
  
  const child = Object.create(parent);
  child.name = 'Alice';
  
  child.greet(); // 'Hello' - delegated to parent


PATTERN 2: Concatenation (Mixins)
  const canEat = {
    eat: function() { /* ... */ }
  };
  
  const canWalk = {
    walk: function() { /* ... */ }
  };
  
  const person = Object.assign({}, canEat, canWalk);
  // person has methods from both


PATTERN 3: Constructor Functions (Traditional)
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    return this.name + ' speaks';
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  
  // Set up prototype chain
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    return 'Woof!';
  };
  
  const dog = new Dog('Rex');
  dog.bark(); // 'Woof!'
  dog.speak(); // 'Rex speaks' - inherited


Key Differences from Classical OOP:
- No classes required (though ES6 classes are syntactic sugar)
- Inheritance happens at runtime via objects
- More flexible - can change prototypes dynamically
- Instances share methods via prototype


Prototype Chain Example:
  const obj = { a: 1 };
  
  // obj.[[Prototype]] → Object.prototype → null
  
  obj.toString(); // Works!
  // toString found in Object.prototype`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Pattern"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Delegation"}),e.jsx("td",{className:"py-2 align-top",children:"Object delegates to another via [[Prototype]]; simplest form of inheritance"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Concatenation"}),e.jsx("td",{className:"py-2 align-top",children:"Combine multiple objects' properties using Object.assign(); mixin pattern"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Constructor"}),e.jsx("td",{className:"py-2 align-top",children:"Constructor function with shared methods on .prototype; classical pattern"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"[[Prototype]]"}),e.jsx("td",{className:"py-2 align-top",children:"Internal reference; looked up during property access; accessible via __proto__ or getPrototypeOf()"})]})]})]})})]})]}),ef=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Function Declaration vs Expression"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function?practice=practice&tab=quiz",children:"greatfrontend: Function Declaration vs Expression →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx",children:"github: Function Declaration vs Expression (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Core Differences"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Declaration"}),e.jsx("div",{children:"Hoisted to top of scope"}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Can call before defining"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Expression"}),e.jsx("div",{children:"Not hoisted (var/let/const rules)"}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Variable holds function reference"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Hoisting Behavior"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Declaration Works"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`foo(); // Works!

function foo() {
  console.log('hello');
}

// Hoisted to:
// function foo() { ... }
// foo();`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f]",children:"✗ Expression Fails"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`foo(); // Error!

var foo = function() {
  console.log('hello');
};

// Hoisted to:
// var foo = undefined;
// foo();`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Syntax Patterns"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Named Expression"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const factorial = 
  function fact(n) {
    return n <= 1 ? 1 
           : n * fact(n-1);
  };

// 'factorial' available outside
// 'fact' only inside`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Anonymous Expression"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const add = function(a, b) {
  return a + b;
};

// No name - variable is ref
// Useful for callbacks
setTimeout(function() {
  // anonymous function
}, 1000);`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"When to Use Each"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Declaration"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsx("div",{children:"• Top-level functions"}),e.jsx("div",{children:"• Named functions"}),e.jsx("div",{children:"• Public API functions"}),e.jsx("div",{children:"• When hoisting is helpful"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Expression"}),e.jsxs("div",{className:"space-y-1 text-xs",children:[e.jsx("div",{children:"• Callbacks & handlers"}),e.jsx("div",{children:"• IIFEs & closures"}),e.jsx("div",{children:"• Arrow functions (ES6+)"}),e.jsx("div",{children:"• Functions as values"})]})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"⚠️ const/let are in Temporal Dead Zone"}),e.jsxs("div",{className:"text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{children:["With ",e.jsx("span",{className:"text-[#fea55f]",children:"const"})," or ",e.jsx("span",{className:"text-[#fea55f]",children:"let"}),", expressions are NOT hoisted usably:"]}),e.jsx("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d] text-xs",children:"const foo = () => {}; // Must define before use!"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`FUNCTION DECLARATION vs EXPRESSION

Key Difference: Hoisting behavior


FUNCTION DECLARATION
  function myFunc() {
    return 42;
  }
  
  Characteristics:
  - Hoisted to top of scope (whole function)
  - Can be called before it's defined
  - Always has a name
  - Function statement


FUNCTION EXPRESSION
  var myFunc = function() {
    return 42;
  };
  
  Characteristics:
  - Not hoisted (variable is, not function)
  - Must be defined before calling
  - Can be anonymous or named
  - Part of variable assignment


HOISTING DETAILS

Declarations are hoisted:
  foo(); // Works! Outputs 'hello'
  
  function foo() {
    console.log('hello');
  }


Expressions with var are partially hoisted:
  console.log(foo); // undefined
  foo(); // TypeError
  
  var foo = function() {
    console.log('hello');
  };
  
  // JavaScript reads this as:
  // var foo;
  // foo();
  // foo = function() { ... };


Expressions with const/let NOT hoisted:
  foo(); // ReferenceError: Cannot access 'foo' before initialization
  
  const foo = function() {
    console.log('hello');
  };
  
  // 'foo' in temporal dead zone until assignment


NAMED FUNCTION EXPRESSIONS
  const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
  };
  
  factorial(5); // Works
  fact(5); // ReferenceError - 'fact' not in outer scope
  
  // 'fact' only available inside the function for recursion


PRACTICAL IMPLICATIONS

Use Declarations for:
  - Module-level functions
  - Clear API functions
  - When hoisting is desirable


Use Expressions for:
  - Callbacks and array methods
  - Function composition
  - IIFEs (Immediately Invoked Function Expressions)
  - Arrow functions (ES6+)`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Declaration"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Expression (var)"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Expression (const/let)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Syntax"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"function foo() "}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"var foo = function() "}),e.jsx("td",{className:"py-2 align-top",children:"const foo = function() "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Hoisted"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Fully (whole function)"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Partially (var = undefined)"}),e.jsx("td",{className:"py-2 align-top",children:"Not hoisted (TDZ)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Call Before Define"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"No (TypeError)"}),e.jsx("td",{className:"py-2 align-top",children:"No (ReferenceError)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Must Have Name"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Yes"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"No (anonymous OK)"}),e.jsx("td",{className:"py-2 align-top",children:"No (anonymous OK)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Use Case"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Module API, public functions"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Callbacks, closures"}),e.jsx("td",{className:"py-2 align-top",children:"Modern best practice for all"})]})]})]})})]})]}),tf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Closures"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one?practice=practice&tab=quiz",children:"greatfrontend: Closures →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx",children:"github: Closures (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is a Closure?"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm",children:[e.jsx("div",{children:"A closure is a function that remembers variables from its enclosing scope, even after the outer function has finished executing."}),e.jsx("div",{className:"text-[#43d9ad] mt-2 font-bold",children:"Every function creates a closure!"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Simple Closure Example"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] text-[#607b96] text-sm",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function makeCounter() {
  let count = 0;
  
  return function increment() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 'count' is private - can only access via increment!`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Common Use Cases"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Private Variables"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function createUser(name) {
  let password = 'secret';
  
  return {
    getName: () => name,
    checkPassword: (p) => 
      p === password
  };
}

const user = createUser('Alice');
// password is private!`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Function Factories"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5);  // 10
triple(5);  // 15`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Callbacks & Async"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function setupClickHandler(id) {
  let clicks = 0;
  
  document
    .getElementById(id)
    .addEventListener('click', () => {
      console.log(
        'Clicked ' + (++clicks) + 
        ' times'
      );
    });
}`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Memoization"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function memoize(fn) {
  const cache = {};
  
  return function(arg) {
    if (arg in cache)
      return cache[arg];
    
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Scope Chain Visualization"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"inner function"}),e.jsx("div",{className:"text-[#43d9ad]",children:"→"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"outer function scope"}),e.jsx("div",{className:"text-[#43d9ad]",children:"→"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"global scope"})]}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Inner function can access all parent scopes!"})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"⚠️ Common Pitfall: Loop Variable Closure"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsxs("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#fea55f] font-bold mb-1",children:"❌ Wrong"}),e.jsx("pre",{className:"text-xs",children:`for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3,3,3
  });
}`})]}),e.jsxs("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-1",children:"✓ Fixed"}),e.jsx("pre",{className:"text-xs",children:`for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0,1,2
  });
}`})]})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CLOSURES

Definition: A closure is a function that has access to variables from its
enclosing scope, even after the outer function has returned. The function
"closes over" the variables it needs.


How Closures Work:
1. Inner function is created inside outer function
2. Inner function references variables from outer scope
3. Outer function returns inner function
4. Variables from outer scope are still accessible in inner function
5. Those variables are said to be "closed over"


Simple Example:
  function outer() {
    let count = 0;  // Variable in closure
    
    return function inner() {
      count++;
      return count;
    };
  }
  
  const counter = outer();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  
  // Each call remembers the previous count!
  // count persists between calls!


Why Closures are Useful:

1. DATA ENCAPSULATION (Private Variables)
  function createCounter() {
    let count = 0;  // Private!
    
    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count
    };
  }
  
  const counter = createCounter();
  // count cannot be accessed directly - only through methods


2. FUNCTION FACTORIES
  function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  double(5);  // 10
  triple(5);  // 15


3. CALLBACKS
  function setupButton(buttonId, message) {
    document
      .getElementById(buttonId)
      .addEventListener('click', function() {
        alert(message);  // Closes over 'message'
      });
  }
  
  setupButton('btn1', 'Hello!');
  setupButton('btn2', 'Goodbye!');


SCOPE CHAIN:
  var globalVar = 'global';
  
  function outer() {
    var outerVar = 'outer';
    
    function inner() {
      var innerVar = 'inner';
      
      // Can access all three:
      console.log(globalVar);    // ✓
      console.log(outerVar);     // ✓
      console.log(innerVar);     // ✓
    }
    
    inner();
  }


COMMON MISTAKE - Loop Variable Closure:
  // Problem:
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);  // 3, 3, 3 (all reference same i)
    }, 100);
  }
  
  // Solution 1: Use let (creates new i each iteration)
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);  // 0, 1, 2
    }, 100);
  }
  
  // Solution 2: Create new scope with IIFE
  for (var i = 0; i < 3; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j);  // 0, 1, 2
      }, 100);
    })(i);
  }


Key Points:
- Closures automatically created whenever function is defined
- Inner functions always have access to outer scope
- Closed-over variables persist as long as function exists
- Each function call creates new closure with own variables
- Essential for callbacks, event handlers, and private data`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Concept"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Closure"}),e.jsx("td",{className:"py-2 align-top",children:"Function plus the variables it references from outer scope"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Scope Chain"}),e.jsx("td",{className:"py-2 align-top",children:"Order of scopes searched: local → outer function → global → window"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Closed Variables"}),e.jsx("td",{className:"py-2 align-top",children:"Variables from outer scope that inner function uses; persist in memory"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Private Data"}),e.jsx("td",{className:"py-2 align-top",children:"Variables in closure are inaccessible from outside; only accessible via returned function"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Common Use Case"}),e.jsx("td",{className:"py-2 align-top",children:"Event handlers, callbacks, counters, memoization, factory functions"})]})]})]})})]})]}),sf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Anonymous Functions"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/whats-a-typical-use-case-for-anonymous-functions?practice=practice&tab=quiz",children:"greatfrontend: Anonymous Functions →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx",children:"github: Anonymous Functions (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is Anonymous?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ No Name"}),e.jsx("div",{children:"Function without explicit name"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Usually Expression"}),e.jsx("div",{children:"Assigned to variable or used immediately"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Common Patterns"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Assigned to Variable"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const greet = function() {
  return 'Hello';
};

greet(); // 'Hello'`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Callback Parameter"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`setTimeout(function() {
  console.log('later');
}, 1000);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Array Method"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`[1, 2, 3].map(function(x) {
  return x * 2;
});`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"IIFE (Immediately Invoked)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`(function() {
  const private = 'secret';
  console.log(private);
})();`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Primary Use Cases"}),e.jsxs("div",{className:"space-y-2 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"1. Event Handlers"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`button.addEventListener('click', 
  function(e) {
    alert('Button clicked!');
  }
);`})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"2. Array Methods (map, filter, reduce)"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const doubled = numbers.map(
  function(n) { 
    return n * 2; 
  }
);

const evens = numbers.filter(
  function(n) { 
    return n % 2 === 0; 
  }
);`})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"3. Async Callbacks"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`fetch(url).then(function(res) {
  return res.json();
}).catch(function(err) {
  console.error(err);
});`})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"4. Private Scope (IIFE)"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`(function() {
  const secret = 'private';
  window.api = function() {
    return secret;
  };
})();`})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Modern: Arrow Functions"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Traditional Anonymous"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const nums = [1, 2, 3];
nums.map(function(x) {
  return x * 2;
});`})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Arrow Function (Cleaner)"}),e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const nums = [1, 2, 3];
nums.map(x => x * 2);

// Or longer form:
nums.map((x) => {
  return x * 2;
});`})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Key Benefits"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsx("div",{children:"• No need for named function if used once"}),e.jsx("div",{children:"• Perfect for callbacks and event handlers"}),e.jsx("div",{children:"• Cleaner syntax with arrow functions (ES6+)"}),e.jsx("div",{children:"• IIFE creates private scope (pre-ES6 modules)"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`ANONYMOUS FUNCTIONS

Definition: A function without an explicit name. Often used as function
expressions assigned to variables or passed as arguments.


Syntax:
  // Traditional
  const func = function() {
    // function body
  };
  
  // Arrow (ES6+)
  const func = () => {
    // function body
  };


Main Use Case: CALLBACKS

Anonymous functions are perfect for callbacks because:
1. They're used once (no need to name them)
2. They have access to surrounding scope (closure)
3. They keep code compact and inline


TYPICAL USE CASES:

1. EVENT HANDLERS
  button.addEventListener('click', function(event) {
    console.log('Clicked!');
  });


2. ARRAY METHODS
  const numbers = [1, 2, 3, 4, 5];
  
  // map - transform array
  const doubled = numbers.map(function(x) {
    return x * 2;
  });
  
  // filter - select items
  const evens = numbers.filter(function(x) {
    return x % 2 === 0;
  });
  
  // reduce - combine items
  const sum = numbers.reduce(function(acc, x) {
    return acc + x;
  }, 0);


3. ASYNCHRONOUS OPERATIONS
  // Callback
  setTimeout(function() {
    console.log('After 1 second');
  }, 1000);
  
  // Promise then/catch
  fetch('/api/data')
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.error(error);
    });
  
  // Async/await
  async function load() {
    const data = await fetch('/api/data');
  }


4. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
  // Creates private scope (common before ES6 modules)
  (function() {
    const private = 'This is private';
    window.exposed = function() {
      return private;
    };
  })();
  
  // Called immediately, private variable hidden


5. FUNCTION COMPOSITION
  const compose = (f, g) => x => f(g(x));
  
  const add1 = x => x + 1;
  const double = x => x * 2;
  
  const doubleThenAdd1 = compose(add1, double);
  console.log(doubleThenAdd1(5)); // 11


MODERN APPROACH: ARROW FUNCTIONS (ES6+)

More concise syntax for anonymous functions:
  // Traditional
  numbers.map(function(x) { return x * 2; });
  
  // Arrow
  numbers.map(x => x * 2);
  
  // Multi-line arrow
  numbers.map(x => {
    const result = x * 2;
    return result;
  });


Benefits of Arrow Functions:
- Shorter syntax
- Lexical 'this' binding (no need to .bind())
- Great for callbacks and single-use functions


When NOT to Use Anonymous Functions:
- When function is used multiple times (give it a name for clarity)
- When debugging (named functions appear in stack traces)
- For class methods (use regular methods instead)`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Use Case"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Event Handler"}),e.jsx("td",{className:"py-2 align-top",children:"addEventListener, onclick, setTimeout callbacks"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Array Methods"}),e.jsx("td",{className:"py-2 align-top",children:"map(), filter(), reduce(), forEach() transformations"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Promise Callbacks"}),e.jsx("td",{className:"py-2 align-top",children:".then(), .catch(), async/await functions"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"IIFE (Immediately Invoked)"}),e.jsxs("td",{className:"py-2 align-top",children:["(function() { ... })()"," - create private scope"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Single-Use Functions"}),e.jsx("td",{className:"py-2 align-top",children:"Any function used only once; no need to name"})]})]})]})})]})]}),rf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Various Ways to Create Objects"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-various-ways-to-create-objects-in-javascript?practice=practice&tab=quiz",children:"greatfrontend: Object Creation Patterns →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx",children:"github: Object Creation Patterns (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"6 Common Patterns"}),e.jsx("div",{className:"text-[#607b96] text-sm space-y-2",children:e.jsx("div",{children:"JavaScript provides multiple ways to create objects, each with different use cases and benefits."})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"1. Object Literal"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const obj = {
  name: 'Alice',
  age: 30,
  greet() {
    return 'Hi';
  }
};

// Quick, simple objects`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"2. Constructor Function"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function Person(name) {
  this.name = name;
}

Person.prototype.greet = 
  function() { return 'Hi'; };

const obj = new Person('Alice');`})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"3. Object.create()"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const proto = {
  greet() { return 'Hi'; }
};

const obj = Object.create(proto);
obj.name = 'Alice';

// Explicit prototype chain`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"4. ES6 Classes"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return 'Hi';
  }
}

const obj = new Person('Alice');`})})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"5. Object.assign() (Mixin)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const obj = Object.assign(
  {},
  { name: 'Alice' },
  { age: 30 }
);

// Merge multiple objects`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"6. Singleton Pattern"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const singleton = (function() {
  let instance;
  
  return {
    getInstance() {
      if (!instance)
        instance = {};
      return instance;
    }
  };
})();`})})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Quick Comparison"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 text-[#607b96] text-xs",children:[e.jsxs("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-1",children:"Pattern"}),e.jsx("div",{children:"Literal"}),e.jsx("div",{children:"Constructor"}),e.jsx("div",{children:"create()"}),e.jsx("div",{children:"Class"})]}),e.jsxs("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-1",children:"Use Case"}),e.jsx("div",{children:"Simple objects"}),e.jsx("div",{children:"Reusable blueprints"}),e.jsx("div",{children:"Delegation"}),e.jsx("div",{children:"Modern, clean"})]}),e.jsxs("div",{className:"bg-[#011221] p-2 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-1",children:"Hoisting"}),e.jsx("div",{children:"No"}),e.jsx("div",{children:"Yes (if decl.)"}),e.jsx("div",{children:"No"}),e.jsx("div",{children:"No (TDZ)"})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"When to Use Each"}),e.jsxs("div",{className:"text-sm text-[#607b96] space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[#43d9ad] font-bold",children:"Literal:"})," One-off objects, configuration"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[#43d9ad] font-bold",children:"Class:"})," Multiple instances, modern code (best)"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[#43d9ad] font-bold",children:"Object.create():"})," Complex inheritance, prototypal patterns"]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[#43d9ad] font-bold",children:"Constructor:"})," Legacy code, understanding prototypes"]})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`VARIOUS WAYS TO CREATE OBJECTS IN JAVASCRIPT

Six main patterns, each with different purposes:


1. OBJECT LITERAL (Simplest)
  const obj = {
    name: 'Alice',
    age: 30,
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  
  // Use for: Single simple objects, configuration objects
  // Pros: Simple, readable
  // Cons: Not reusable for multiple instances


2. CONSTRUCTOR FUNCTION (Classical Pattern)
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    return 'Hello, ' + this.name;
  };
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Use for: Creating multiple instances from blueprint
  // Pros: Reusable, sets up prototype chain
  // Cons: Requires 'new', function as object constructor feels weird


3. OBJECT.CREATE() (Prototypal Pattern)
  const personProto = {
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };
  
  const person = Object.create(personProto);
  person.name = 'Alice';
  person.age = 30;
  
  // Use for: Explicit prototype delegation, composition
  // Pros: Explicit prototype control, clean delegation
  // Cons: More verbose, less common


4. ES6 CLASSES (Modern Standard)
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      return 'Hello, ' + this.name;
    }
  }
  
  const person = new Person('Alice', 30);
  
  // Use for: Modern code, most common pattern now
  // Pros: Clean syntax, familiar to other languages
  // Cons: Syntactic sugar over prototypes (still need 'new')


5. OBJECT.ASSIGN() - MIXINS (Composition)
  const canEat = { eat: function() { } };
  const canWalk = { walk: function() { } };
  
  const person = Object.assign({}, canEat, canWalk);
  person.name = 'Alice';
  
  // Use for: Combining multiple objects, mixins
  // Pros: Flexible composition, multiple inheritance-like behavior
  // Cons: Copies properties (not delegation)


6. SINGLETON PATTERN (Ensures Single Instance)
  const db = (function() {
    let instance;
    
    return {
      getInstance: function() {
        if (!instance) {
          instance = { connection: 'database' };
        }
        return instance;
      }
    };
  })();
  
  const db1 = db.getInstance();
  const db2 = db.getInstance();
  console.log(db1 === db2); // true
  
  // Use for: Shared resources, configuration, single instance
  // Pros: Ensures only one instance exists
  // Cons: Global state, testing challenges


COMPARISON:
  - Literal: Quick objects, no reuse
  - Constructor: Prototypal inheritance (legacy)
  - Object.create(): Explicit prototype chain
  - Classes: Modern, familiar syntax (use this)
  - Mixins: Composition, multiple features
  - Singleton: Single shared instance


MODERN BEST PRACTICE:
Use ES6 classes for most purposes. They're:
  - Clean and readable
  - Familiar to developers from other languages
  - Standard in modern JavaScript
  - Support inheritance, static methods, getters/setters`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Pattern"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Syntax"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Best For"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Literal"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"{ key: value }"}),e.jsx("td",{className:"py-2 align-top",children:"Single simple objects"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Constructor"}),e.jsxs("td",{className:"py-2 pr-4 align-top",children:["function Foo() "," + new"]}),e.jsx("td",{className:"py-2 align-top",children:"Multiple instances (legacy)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Object.create()"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Object.create(proto)"}),e.jsx("td",{className:"py-2 align-top",children:"Explicit prototypal inheritance"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"ES6 Class"}),e.jsxs("td",{className:"py-2 pr-4 align-top",children:["class Foo "," + new"]}),e.jsx("td",{className:"py-2 align-top",children:"Multiple instances (modern, recommended)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Object.assign()"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Object.assign(target, ...sources)"}),e.jsx("td",{className:"py-2 align-top",children:"Combining/mixing objects"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Singleton"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"IIFE + getInstance()"}),e.jsx("td",{className:"py-2 align-top",children:"Single shared instance"})]})]})]})})]})]}),nf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Higher-Order Functions"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-the-definition-of-a-higher-order-function?practice=practice&tab=quiz",children:"greatfrontend: Higher-Order Functions →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx",children:"github: Higher-Order Functions (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is a Higher-Order Function?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Takes Functions as Arguments"}),e.jsx("div",{children:"Accepts one or more functions as parameters"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"✓ Returns a Function"}),e.jsx("div",{children:"Produces a function as output (or both)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Common Patterns"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Takes Function Argument"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`// Array methods
[1, 2, 3].map(x => x * 2)
[1, 2, 3].filter(x => x > 1)

// setTimeout
setTimeout(() => {
  console.log('later');
}, 1000);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Returns Function"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
add5(3); // 8`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Real-World Examples"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Decorators/Wrappers"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`function withLogging(fn) {
  return function(...args) {
    console.log('calling', fn.name);
    return fn(...args);
  };
}

const logged = 
  withLogging(Math.max);`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Function Composition"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`const compose = (f, g) => 
  x => f(g(x));

const square = x => x * x;
const double = x => x * 2;

const doubleThenSq = 
  compose(square, double);
doubleThenSq(3); // 36`})})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Benefits of Higher-Order Functions"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsx("div",{children:"• Reusable function factories"}),e.jsx("div",{children:"• Flexible behavior through callbacks"}),e.jsx("div",{children:"• Easier function composition"}),e.jsx("div",{children:"• Abstract common patterns"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`HIGHER-ORDER FUNCTIONS

Definition: A function that takes one or more functions as arguments
and/or returns a function as its result.


Why They Matter:
- Fundamental to functional programming
- Enable code reuse and abstraction
- Used extensively in JavaScript libraries and frameworks
- Found in Array methods: map, filter, reduce, forEach


Examples of Taking Functions:

1. ARRAY METHODS
  const numbers = [1, 2, 3, 4];
  
  // map - transform each element
  numbers.map(x => x * 2);  // [2, 4, 6, 8]
  
  // filter - keep items matching predicate
  numbers.filter(x => x > 2);  // [3, 4]
  
  // reduce - combine to single value
  numbers.reduce((sum, x) => sum + x, 0);  // 10


2. CUSTOM HIGHER-ORDER FUNCTION
  function applyTwice(fn, x) {
    return fn(fn(x));
  }
  
  const square = x => x * x;
  applyTwice(square, 2);  // 16 (square(square(2)))


3. EVENT LISTENERS (Higher-order in nature)
  element.addEventListener('click', function(e) {
    console.log('Clicked!');
  });


Examples of Returning Functions:

1. FUNCTION FACTORY (Currying)
  function makeMultiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  
  double(5);  // 10
  triple(5);  // 15


2. DECORATOR PATTERN
  function memoize(fn) {
    const cache = {};
    
    return function(arg) {
      if (arg in cache) {
        return cache[arg];
      }
      const result = fn(arg);
      cache[arg] = result;
      return result;
    };
  }
  
  const expensiveFn = memoize(slowCalculation);


3. FUNCTION COMPOSITION
  const compose = (f, g) => x => f(g(x));
  
  const addOne = x => x + 1;
  const double = x => x * 2;
  
  const addOneThenDouble = 
    compose(double, addOne);
  
  addOneThenDouble(5);  // 12


Real-World Use Cases:
- API request wrappers with error handling
- Middleware in Express.js
- Reducers in Redux
- Custom Hooks in React
- Lodash functions: debounce, throttle, memoize`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Definition"}),e.jsx("td",{className:"py-2 align-top",children:"Function that takes/returns other functions"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Takes Function"}),e.jsx("td",{className:"py-2 align-top",children:"Array methods (map, filter), event listeners, callbacks"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Returns Function"}),e.jsx("td",{className:"py-2 align-top",children:"Factories, decorators, middleware, composition"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Functional Programming"}),e.jsx("td",{className:"py-2 align-top",children:"Core concept; enables composition and reuse"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Common Pattern"}),e.jsx("td",{className:"py-2 align-top",children:"Currying, memoization, middleware, decorators"})]})]})]})})]})]}),af=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Event Bubbling"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/describe-event-bubbling?practice=practice&tab=quiz",children:"greatfrontend: Event Bubbling →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/describe-event-bubbling/en-US.mdx",children:"github: Event Bubbling (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is Event Bubbling?"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm",children:[e.jsx("div",{children:"Event starts at target element and propagates up through parent elements"}),e.jsx("div",{className:"text-[#43d9ad] mt-2 font-bold",children:"Default behavior for most events (click, input, change, etc.)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Event Bubbling Flow"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"Target Element"}),e.jsx("div",{className:"text-[#43d9ad]",children:"↑"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"Parent"}),e.jsx("div",{className:"text-[#43d9ad]",children:"↑"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"Grandparent"}),e.jsx("div",{className:"text-[#43d9ad]",children:"↑"}),e.jsx("div",{className:"bg-[#4d5bce40] px-3 py-2 rounded",children:"Window"})]}),e.jsx("div",{className:"text-xs text-[#fea55f]",children:"Each element's event listener fires in sequence"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"HTML Structure"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d] text-[#607b96] text-sm",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`<div id="grandparent">
  <div id="parent">
    <button id="button">Click Me</button>
  </div>
</div>`})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Event Handlers"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"With Bubbling"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`button.addEventListener(
  'click',
  () => console.log('button')
);

parent.addEventListener(
  'click',
  () => console.log('parent')
);

// Click button output:
// button
// parent
// (bubbles up!)`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Stop Bubbling"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`button.addEventListener(
  'click',
  (e) => {
    console.log('button');
    e.stopPropagation();
  }
);

parent.addEventListener(
  'click',
  () => console.log('parent')
);

// Click button output:
// button
// (stops here!)`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Important Distinctions"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"stopPropagation()"}),e.jsx("div",{children:"Stops bubbling to parent elements"}),e.jsx("div",{className:"text-xs text-[#fea55f] mt-2",children:"But parent's default action still occurs"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"preventDefault()"}),e.jsx("div",{children:"Prevents default browser action"}),e.jsx("div",{className:"text-xs text-[#fea55f] mt-2",children:"Event still bubbles up!"})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"Event Delegation Benefit"}),e.jsxs("div",{className:"text-sm text-[#607b96]",children:[e.jsx("div",{children:"• Listen on parent for events on many children"}),e.jsx("div",{children:"• Reduces number of event listeners"}),e.jsx("div",{children:"• Handles dynamically added elements"}),e.jsx("div",{children:"• Improves performance"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`EVENT BUBBLING

Definition: Event propagation that starts at the target element and
bubbles up through parent elements in the DOM tree.


How It Works:
1. User interacts with element (click, input, etc.)
2. Event fires on target element
3. Event propagates up to parent element
4. Then to grandparent, and so on
5. Until reaching the window object


Event Order (for click):
  1. Capturing phase (rarely used)
  2. Target phase (event fires on element)
  3. Bubbling phase (propagates up) ← This is "event bubbling"


Example:

  HTML:
  <div id="grandparent">
    <div id="parent">
      <button id="button">Click Me</button>
    </div>
  </div>

  JavaScript:
  button.addEventListener('click', () => {
    console.log('Button clicked');
  });
  
  parent.addEventListener('click', () => {
    console.log('Parent clicked');
  });
  
  grandparent.addEventListener('click', () => {
    console.log('Grandparent clicked');
  });

  Result when clicking button:
  Button clicked
  Parent clicked
  Grandparent clicked
  
  (Event bubbles up from target → parent → grandparent)


Stopping Bubbling:

  button.addEventListener('click', (e) => {
    console.log('Button clicked');
    e.stopPropagation();  // Stop bubbling here!
  });
  
  parent.addEventListener('click', () => {
    console.log('Parent clicked');  // This won't fire
  });

  Result:
  Button clicked
  (Stops here, doesn't reach parent)


Events that Bubble:
- click, dblclick
- mousedown, mouseup, mousemove
- input, change
- keydown, keyup
- focus (doesn't bubble), focusin (bubbles)
- scroll (doesn't bubble)
- resize (doesn't bubble)


Events that DON'T Bubble:
- focus, blur
- scroll
- resize
- load, unload
- mouse events starting with "mouse"


Event Delegation Pattern:
  // Listen on parent for events on children
  parent.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      console.log('Button clicked:', e.target);
    }
  });
  
  // Why?
  // - One listener instead of many
  // - Works for dynamically added buttons
  // - Better performance


Important Methods:
- event.stopPropagation() - Stop bubbling to parent
- event.stopImmediatePropagation() - Stop propagation + other handlers
- event.preventDefault() - Prevent default action (independent of bubbling)
- event.target - Element where event occurred
- event.currentTarget - Element with the listener`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Concept"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Details"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Event Bubbling"}),e.jsx("td",{className:"py-2 align-top",children:"Event starts at target and propagates up through parents to window"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Phase"}),e.jsx("td",{className:"py-2 align-top",children:"Capturing (down) → Target (on element) → Bubbling (up)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"stopPropagation()"}),e.jsx("td",{className:"py-2 align-top",children:"Stops event from bubbling to parent elements"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"preventDefault()"}),e.jsx("td",{className:"py-2 align-top",children:"Prevents default browser action; bubbling still occurs"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Event Delegation"}),e.jsx("td",{className:"py-2 align-top",children:"Listen on parent; relies on bubbling to handle child clicks"})]})]})]})})]})]}),lf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Event Capturing"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/describe-event-capturing?practice=practice&tab=quiz",children:"greatfrontend: Event Capturing →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/describe-event-capturing/en-US.mdx",children:"github: Event Capturing (mdx) →"})]}),i?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"What is Event Capturing?"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] text-[#607b96] text-sm",children:[e.jsx("div",{children:"Event starts at window level and flows down through parent elements to target"}),e.jsx("div",{className:"text-[#43d9ad] mt-2 font-bold",children:"Opposite of event bubbling; rarely used"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Three Event Phases"}),e.jsxs("div",{className:"space-y-2 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"1. Capturing Phase (Down)"}),e.jsx("div",{children:"Window → Document → HTML → Body → Parent → Target"}),e.jsx("div",{className:"text-xs text-[#fea55f] mt-1",children:"Enabled with addEventListener(event, handler, true)"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"2. Target Phase (At)"}),e.jsx("div",{children:"Event fires on the element itself"}),e.jsx("div",{className:"text-xs text-[#fea55f] mt-1",children:"Order depends on listener registration"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold mb-2",children:"3. Bubbling Phase (Up)"}),e.jsx("div",{children:"Target → Parent → Body → HTML → Document → Window"}),e.jsx("div",{className:"text-xs text-[#fea55f] mt-1",children:"Default behavior; most listeners use this"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold [font-family:'Fira_Code',Helvetica]",children:"Using Capturing Phase"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-[#607b96] text-sm",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Default (Bubbling)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`parent.addEventListener(
  'click',
  () => console.log('parent')
);

button.addEventListener(
  'click',
  () => console.log('button')
);

// Output:
// button (target)
// parent (bubbles)`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-bold",children:"Capturing (true)"}),e.jsx("div",{className:"bg-[#011221] p-3 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:`parent.addEventListener(
  'click',
  () => console.log('parent'),
  true  // Capturing
);

button.addEventListener(
  'click',
  () => console.log('button')
);

// Output:
// parent (captures)
// button (target)`})})]})]})]}),e.jsxs("div",{className:"bg-[#1e2d3d] p-4 rounded border border-[#43d9ad] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"When to Use Capturing"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-sm text-[#607b96]",children:[e.jsx("div",{children:"• Rarely used in practice"}),e.jsx("div",{children:"• Performance optimization"}),e.jsx("div",{children:"• Intercept events early"}),e.jsx("div",{children:"• Event filtering before bubbling"})]})]})]})}):e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:[e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`EVENT CAPTURING

Definition: Event propagation that starts at the window level and
flows DOWN through parent elements to the target element.


Event Propagation has THREE Phases:

1. CAPTURING PHASE (down)
   window → document → html → body → parent → target
   
2. TARGET PHASE (at target)
   Event handlers on target element are invoked
   
3. BUBBLING PHASE (up)
   target → parent → body → html → document → window


Default is BUBBLING (third parameter false):

  element.addEventListener('click', handler);
  element.addEventListener('click', handler, false);


To Use CAPTURING (third parameter true):

  element.addEventListener('click', handler, true);
  
  Or with options:
  element.addEventListener('click', handler, { capture: true });


Example: Capturing vs Bubbling

  HTML:
  <div id="parent">
    <button id="button">Click</button>
  </div>

  With Bubbling (default):
  parent.addEventListener('click', () => {
    console.log('Parent');
  });
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Button (target first)
  Parent (bubbles up)


  With Capturing:
  parent.addEventListener('click', () => {
    console.log('Parent');
  }, true);  // ← true for capturing
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Parent (capturing down)
  Button (target)


Mixed Example:

  parent.addEventListener('click', () => {
    console.log('Parent Capturing');
  }, true);  // Capturing
  
  parent.addEventListener('click', () => {
    console.log('Parent Bubbling');
  }, false);  // Bubbling
  
  button.addEventListener('click', () => {
    console.log('Button');
  });

  Output:
  Parent Capturing (capturing phase)
  Button (target)
  Parent Bubbling (bubbling phase)


stopPropagation() Stops Both Phases:

  parent.addEventListener('click', (e) => {
    console.log('Parent');
    e.stopPropagation();  // Stops!
  }, true);  // Capturing
  
  button.addEventListener('click', () => {
    console.log('Button');  // Won't fire
  });


When to Use Capturing:
- Rarely used in typical web development
- Performance: intercept and handle early
- Event validation before target sees it
- Prevent event propagation for security`})}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full border-collapse text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Phase"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Direction"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4",children:"Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Capturing"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Down (Window → Target)"}),e.jsx("td",{className:"py-2 align-top",children:"addEventListener(e, h, true); rarely used"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Target"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"At element"}),e.jsx("td",{className:"py-2 align-top",children:"Event fires on target element"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"Bubbling"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Up (Target → Window)"}),e.jsx("td",{className:"py-2 align-top",children:"Default; addEventListener(e, h) or (e, h, false)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4 align-top",children:"stopPropagation()"}),e.jsx("td",{className:"py-2 pr-4 align-top",children:"Both"}),e.jsx("td",{className:"py-2 align-top",children:"Stops propagation in either direction"})]})]})]})})]})]}),df=({showVisualExamples:i,setShowVisualExamples:d})=>{const[o,u]=ns.useState(""),m=()=>{},x=()=>{u(""),u(`Start
`),setTimeout(()=>{u(f=>f+`Task 1 (non-blocking)
`)},500),setTimeout(()=>{u(f=>f+`Task 2 (non-blocking)
`)},1e3),u(f=>f+`End
`)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Synchronous vs Asynchronous Execution"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Synchronous (Blocking)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`console.log('Start');
for(let i = 0; i < 1000000000; i++) {}
console.log('Task 1');
for(let i = 0; i < 1000000000; i++) {}
console.log('Task 2');
console.log('End');`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:`Start
Task 1 (blocked)
Task 2 (blocked)
End`})]})]}),e.jsx(M,{onClick:m,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Synchronous Example"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Asynchronous (Non-Blocking)"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`console.log('Start');
setTimeout(() => {
  console.log('Task 1');
}, 500);
setTimeout(() => {
  console.log('Task 2');
}, 1000);
console.log('End');`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:o})]})]}),e.jsx(M,{onClick:x,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Asynchronous Example"})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4",children:"Key Differences"}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Synchronous"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]",children:"Asynchronous"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Execution"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Blocking - code waits for task to complete"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Non-blocking - code continues while task runs"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Performance"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Slower for I/O operations"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Faster and more efficient"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Use Cases"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Simple operations, calculations"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"I/O, network requests, timers"})]})]})]})})]}),e.jsx("div",{className:"text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1",children:e.jsxs("div",{children:["References:"," ",e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-synchronous-and-asynchronous-functions",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-[#e5e9f0]",children:"GreatFrontEnd"})]})})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`Synchronous functions execute sequentially, blocking further execution until completion.
Asynchronous functions allow other code to run while waiting for an operation to complete.

SYNCHRONOUS EXAMPLE:
function task1() {
  console.log('Task 1 - blocking');
}
function task2() {
  console.log('Task 2 - blocking');
}
task1();
task2();
// Output: Task 1, Task 2 (sequential)

ASYNCHRONOUS EXAMPLE (Callback):
function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 - non-blocking');
    callback();
  }, 1000);
}
task1(() => {
  console.log('Task 2');
});
// Output: Task 2, Task 1 (non-blocking)

ASYNC/AWAIT EXAMPLE:
async function runTasks() {
  await task1(); // Waits for task1
  await task2(); // Then runs task2
}

KEY DIFFERENCES:
- Synchronous: Code execution is paused until operation completes
- Asynchronous: Code execution continues; results handled via callbacks, promises, or async/await
- Use synchronous for simple, fast operations
- Use asynchronous for I/O, network requests, file operations`})})})]})},of=({showVisualExamples:i,setShowVisualExamples:d})=>{const[o,u]=ns.useState(""),[m,x]=ns.useState(""),f=()=>{u(`Fetching user data...
`),setTimeout(()=>{u(j=>j+`User: John (callback hell starts here)
`),u(j=>j+`Fetching posts...
`),setTimeout(()=>{u(j=>j+`Posts: 5 posts found
`),u(j=>j+`Fetching comments...
`),setTimeout(()=>{u(j=>j+`Comments: 12 comments
`),u(j=>j+"Done!")},500)},500)},500)},g=()=>{x(`Fetching user data...
`),setTimeout(()=>{x(j=>j+`User: John
`),x(j=>j+`Fetching posts...
`),setTimeout(()=>{x(j=>j+`Posts: 5 posts found
`),x(j=>j+`Fetching comments...
`),setTimeout(()=>{x(j=>j+`Comments: 12 comments
`),x(j=>j+"Done!")},500)},500)},500)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Promises vs Callbacks"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Callback Hell (Pyramid of Doom)"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`getUser(1, function(err, user) {
  if (err) console.error(err);
  else {
    getPosts(user.id, function(err, posts) {
      if (err) console.error(err);
      else {
        getComments(posts[0].id, 
          function(err, comments) {
            if (err) console.error(err);
            else console.log(comments);
          }
        );
      }
    });
  }
});`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:o})]}),e.jsx(M,{onClick:f,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Callback Example"}),e.jsxs("div",{className:"bg-[#4d5bce]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Problems:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Hard to read and maintain"}),e.jsx("li",{children:"Difficult error handling"}),e.jsx("li",{children:"Code grows deeper (pyramid)"}),e.jsx("li",{children:"Error propagation is manual"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Promise Chaining (Much Cleaner)"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:m})]}),e.jsx(M,{onClick:g,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Promise Example"}),e.jsxs("div",{className:"bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Benefits:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Linear, readable code flow"}),e.jsx("li",{children:"Centralized error handling (.catch)"}),e.jsx("li",{children:"Better code organization"}),e.jsx("li",{children:"Easier to maintain and debug"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Async/Await (Modern Approach)"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`async function fetchData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (err) {
    console.error(err);
  }
}`})]}),e.jsxs("div",{className:"bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Best Practices:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Looks like synchronous code"}),e.jsx("li",{children:"Cleaner error handling with try/catch"}),e.jsx("li",{children:"Most modern and recommended approach"}),e.jsx("li",{children:"Still uses Promises under the hood"})]})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4",children:"Key Comparison"}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Callbacks"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]",children:"Promises"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Readability"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Hard to follow (nested)"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Linear and clear"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Error Handling"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Manual in each callback"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Centralized with .catch()"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Chaining"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Causes pyramid of doom"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Natural and clean"})]})]})]})})]}),e.jsx("div",{className:"text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1",children:e.jsxs("div",{children:["References:"," ",e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-[#e5e9f0]",children:"GreatFrontEnd"})]})})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`Callbacks are function arguments that execute when an async operation completes.
Promises are objects representing eventual completion of an async operation.

CALLBACK PATTERN (Callback Hell):
function fetchUserData(id, callback) {
  setTimeout(() => {
    callback(null, { id: id, name: 'John' });
  }, 1000);
}

fetchUserData(1, function(err, user) {
  if (err) return console.error(err);
  fetchUserPosts(user.id, function(err, posts) {
    if (err) return console.error(err);
    fetchPostComments(posts[0].id, function(err, comments) {
      if (err) return console.error(err);
      console.log(comments); // Too nested!
    });
  });
});

PROMISE PATTERN:
function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, name: 'John' });
    }, 1000);
  });
}

fetchUserData(1)
  .then(user => fetchUserPosts(user.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));

KEY DIFFERENCES:
- Callbacks: Function passed as argument, hard to chain
- Promises: Object with .then(), .catch(), .finally()
- Error handling: Promises provide centralized .catch()
- Readability: Promises are much more readable
- Chaining: Promises support natural method chaining

ADVANTAGES OF PROMISES:
✓ Better error handling with .catch()
✓ Method chaining (.then() on returned promises)
✓ Better readability and maintainability
✓ Easier to compose and debug
✓ Can return values from .then()`})})})]})},cf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Promises vs Callbacks: Pros and Cons"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Promises vs Callbacks →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Promises vs Callbacks (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-sm",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#fea55f]",children:"❌ Callback Problems"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#fea55f] min-w-fit",children:"✗ Pyramid of Doom"}),e.jsx("div",{className:"text-xs",children:"Deep nesting hard to read"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#fea55f] min-w-fit",children:"✗ Error Handling"}),e.jsx("div",{className:"text-xs",children:"Manual in each callback"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#fea55f] min-w-fit",children:"✗ Maintenance"}),e.jsx("div",{className:"text-xs",children:"Hard to modify and extend"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad]",children:"✓ Promise Benefits"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Linear Flow"}),e.jsx("div",{className:"text-xs",children:"Readable chaining with .then()"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Error Handling"}),e.jsx("div",{className:"text-xs",children:"Centralized .catch() method"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"✓ Composable"}),e.jsx("div",{className:"text-xs",children:"Easy to combine and transform"})]})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Callback Approach (Nested)"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96] overflow-x-auto",children:e.jsx("pre",{children:`fetchUser(id, (err, user) => {
  if (err) console.error(err);
  else {
    fetchPosts(user.id, (err, posts) => {
      if (err) console.error(err);
      else {
        fetchComments(posts[0].id, (err, comments) => {
          if (err) console.error(err);
          else console.log(comments);
        });
      }
    });
  }
});`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Promise Approach (Chained)"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] [font-family:'Fira_Code',Helvetica] text-xs text-[#607b96] overflow-x-auto",children:e.jsx("pre",{children:`fetchUser(id)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));`})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Key Differences"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] overflow-x-auto",children:e.jsxs("table",{className:"w-full [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-3 pr-4",children:"Aspect"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-3 pr-4",children:"Callbacks"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-3",children:"Promises"})]})}),e.jsxs("tbody",{className:"text-[#607b96]",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Readability"}),e.jsx("td",{className:"py-2 pr-4",children:"Hard (deeply nested)"}),e.jsx("td",{className:"py-2",children:"Easy (linear)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Error Handling"}),e.jsx("td",{className:"py-2 pr-4",children:"Manual in each callback"}),e.jsx("td",{className:"py-2",children:"Centralized .catch()"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Chaining"}),e.jsx("td",{className:"py-2 pr-4",children:"Causes nesting"}),e.jsx("td",{className:"py-2",children:"Natural with .then()"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:"Async/Await"}),e.jsx("td",{className:"py-2 pr-4",children:"N/A"}),e.jsx("td",{className:"py-2",children:"Compatible, more readable"})]})]})]})})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`PROMISES VS CALLBACKS: PROS & CONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Callbacks were the original async pattern in JavaScript.
Promises provide a cleaner, more manageable approach.

CALLBACK CONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PYRAMID OF DOOM (Callback Hell)
   function processUser(id) {
     getUser(id, function(err, user) {
       if (err) handle(err);
       else {
         getOrders(user.id, function(err, orders) {
           if (err) handle(err);
           else {
             getTotal(orders, function(err, total) {
               // Too many levels of nesting!
             });
           }
         });
       }
     });
   }

2. ERROR HANDLING NIGHTMARE
   - Must check for errors in every callback
   - Easy to miss error cases
   - Inconsistent error patterns
   - No centralized error handling

3. HARD TO MAINTAIN
   - Difficult to add/remove steps
   - Hard to parallelize operations
   - Code becomes unreadable
   - Testing is complex

PROMISE PROS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CLEANER, LINEAR CODE
   getUser(id)
     .then(user => getOrders(user.id))
     .then(orders => getTotal(orders))
     .then(total => console.log(total))
     .catch(err => handle(err));

2. CENTRALIZED ERROR HANDLING
   - Single .catch() for entire chain
   - Consistent error handling pattern
   - Errors propagate down the chain

3. BETTER COMPOSABILITY
   - Promise.all() for parallel ops
   - Promise.race() for first completion
   - Easy to chain transformations
   - Can return values from .then()

4. ASYNC/AWAIT SUPPORT
   - Promises enable async/await syntax
   - Looks like synchronous code
   - Easier to understand flow

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Callbacks: Simple for single async operations
Promises: Much better for complex async flows
Async/Await: Modern standard, easiest to read`})})})]}),mf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Optimizing React Context to Reduce Rerenders"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Context Optimization →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-would-one-optimize-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Context Optimization (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#fea55f] [font-family:'Fira_Code',Helvetica] text-sm",children:"❌ Context Performance Problem"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-2",children:[e.jsx("div",{children:"• Context update causes ALL consumers to rerender"}),e.jsx("div",{children:"• Even if they use only part of the context value"}),e.jsx("div",{children:"• Creates performance bottleneck in large trees"}),e.jsx("div",{children:"• No fine-grained reactivity like external state managers"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"✓ Optimization Strategies"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"1. Split Contexts"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Separate state and dispatch into different contexts"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`const StateContext = createContext();
const DispatchContext = createContext();

// Consumers that only dispatch won't rerender
// when state updates`})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"2. Memoize Context Value"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Use useMemo to prevent unnecessary object recreation"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`const value = useMemo(() => ({
  state,
  setState
}), [state]);

return <Provider value={value} />;`})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"3. Memoize Consumers"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Wrap components in React.memo to skip rerenders"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`const MyComponent = memo(function({
  // only subscribe to needed values
}) {
  return ...;
});`})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"4. Use Custom Selector Hooks"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Create hooks that only select needed values"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`function useUser() {
  const ctx = useContext(State);
  return ctx.user; // only value needed
}`})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Best Practices"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Split contexts by update frequency"}),e.jsx("div",{children:"✓ Memoize both providers and consumers"}),e.jsx("div",{children:"✓ Use custom hooks to select only needed state"}),e.jsx("div",{children:"✓ Consider Redux/Zustand for complex apps"}),e.jsx("div",{children:"✓ Profile with React DevTools to find bottlenecks"})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`OPTIMIZING REACT CONTEXT PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React Context is great for simple state but can cause
performance issues in large component trees.

THE PROBLEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

When context value changes, ALL consumers rerender,
even if they use only a small part of the context.

Example problem:
const MyContext = createContext({ user, theme, notifications });

// This consumer only needs theme
function Toolbar() {
  const { theme } = useContext(MyContext);
  return <div style={{background: theme.bg}} />;
}

// Updates to user or notifications still rerender Toolbar!

OPTIMIZATION STRATEGIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SPLIT CONTEXTS BY CONCERN
   Separate different types of data:
   
   const ThemeContext = createContext();
   const UserContext = createContext();
   const NotificationContext = createContext();
   
   // Now Toolbar only rerenders when theme changes

2. SEPARATE STATE AND DISPATCH
   const StateContext = createContext();
   const DispatchContext = createContext();
   
   // Components that only dispatch don't rerender
   // when state changes

3. MEMOIZE CONTEXT VALUE
   const value = useMemo(() => ({
     state,
     setState
   }), [state]);
   
   return <Provider value={value}>{children}</Provider>;

4. MEMOIZE CONSUMERS
   const Toolbar = memo(function() {
     const { theme } = useContext(ThemeContext);
     return ...;
   });

5. USE CUSTOM SELECTOR HOOKS
   function useTheme() {
     const { theme } = useContext(MyContext);
     return theme;
   }
   
   // Components only rerender when theme changes

WHEN TO USE CONTEXT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Theme/styling data (changes rarely)
✓ Auth/user info (changes rarely)
✓ Small to medium apps
✓ Shallow component trees

WHEN TO USE EXTERNAL STATE MANAGER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Large apps with frequent updates
✓ Complex state logic
✓ Need fine-grained subscriptions
✓ Deep component trees
Use: Redux, Zustand, MobX, Jotai`})})})]}),uf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Handling Asynchronous Data Loading in React"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Async Data Loading →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Async Data Loading (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Core Patterns for Async Data"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"useEffect Hook"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Most common pattern for data loading"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`useEffect(() => {
  fetchData()
    .then(data => setData(data))
    .catch(err => setError(err));
}, []);`})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"Async/Await"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Cleaner syntax for async operations"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`useEffect(() => {
  (async () => {
    const data = await fetch(url);
    setData(data);
  })();
}, []);`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Managing Async States"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"const [loading, setLoading]"}),e.jsx("div",{children:"= useState(true) - Show spinner"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"const [data, setData]"}),e.jsx("div",{children:"= useState(null) - Store fetched data"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"text-[#43d9ad] min-w-fit",children:"const [error, setError]"}),e.jsx("div",{children:"= useState(null) - Handle errors"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"✓ Cleanup on Unmount"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Prevent memory leaks with cleanup function"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`useEffect(() => {
  let mounted = true;
  fetch(url).then(data => {
    if (mounted) setData(data);
  });
  return () => {
    mounted = false;
  };
}, []);`})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"✓ Dependency Array"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Control when effect runs with dependencies"})]}),e.jsx("div",{className:"bg-[#011221] border border-[#1e2d3d] p-2 text-[#607b96] text-xs",children:e.jsx("pre",{children:`useEffect(() => {
  // Run once on mount
  fetchData();
}, []); // empty array

// Run when userId changes
// }, [userId]);`})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Common UI Patterns"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Loading state → Show spinner"}),e.jsx("div",{children:"✓ Error state → Show error message"}),e.jsx("div",{children:"✓ Data loaded → Display content"}),e.jsx("div",{children:"✓ Retry mechanism → Allow user to retry failed requests"}),e.jsx("div",{children:"✓ Caching → Don't refetch same data"})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`HANDLING ASYNCHRONOUS DATA LOADING IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Most React applications need to fetch data from APIs.
Proper async handling prevents bugs and improves UX.

BASIC PATTERN WITH USEEFFECT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function UserProfile({ userId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [userId]); // Refetch when userId changes

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <div>{data.name}</div>;
}

ASYNC/AWAIT PATTERN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);

PREVENTING MEMORY LEAKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

useEffect(() => {
  let mounted = true;
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (mounted) setData(data); // Only set if still mounted
    });
  
  return () => {
    mounted = false; // Cleanup on unmount
  };
}, []);

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Always handle loading, error, and success states
2. Cleanup requests on component unmount
3. Use dependency array to control when to fetch
4. Refetch when dependencies change
5. Show loading spinner while fetching
6. Handle errors gracefully
7. Implement retry logic for failed requests
8. Cache data when appropriate
9. Use AbortController to cancel requests

ALTERNATIVES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- React Query: Powerful data fetching library
- SWR: Data fetching with caching
- Apollo Client: For GraphQL
- RTK Query: Redux Toolkit's data fetching solution
- TanStack Query: Advanced async state management`})})})]}),xf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Choosing Between State, Context, and External Managers"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: State Management Options →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: State Management (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"State Management Options"}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"useState"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Component-local state"}),e.jsx("div",{children:"✓ Simplest option"}),e.jsx("div",{children:"✓ No boilerplate"}),e.jsx("div",{className:"text-[#fea55f]",children:"✗ Can't share easily"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Context API"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Share across tree"}),e.jsx("div",{children:"✓ Built-in to React"}),e.jsx("div",{children:"✓ Good for themes/auth"}),e.jsx("div",{className:"text-[#fea55f]",children:"✗ All consumers rerender"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Redux/Zustand"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Complex state logic"}),e.jsx("div",{children:"✓ Fine-grained updates"}),e.jsx("div",{children:"✓ DevTools support"}),e.jsx("div",{className:"text-[#fea55f]",children:"✗ More boilerplate"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Decision Matrix"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] overflow-x-auto",children:e.jsxs("table",{className:"w-full [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-3 pr-4",children:"Criteria"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-3 pr-4",children:"Use useState"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-3 pr-4",children:"Use Context"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-3",children:"Use Redux"})]})}),e.jsxs("tbody",{className:"text-[#607b96]",children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Scope"}),e.jsx("td",{className:"py-2 pr-4",children:"Single component"}),e.jsx("td",{className:"py-2 pr-4",children:"Component tree"}),e.jsx("td",{className:"py-2",children:"Application-wide"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Update freq"}),e.jsx("td",{className:"py-2 pr-4",children:"Any"}),e.jsx("td",{className:"py-2 pr-4",children:"Low frequency"}),e.jsx("td",{className:"py-2",children:"Any (optimized)"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-4",children:"Complexity"}),e.jsx("td",{className:"py-2 pr-4",children:"Low"}),e.jsx("td",{className:"py-2 pr-4",children:"Medium"}),e.jsx("td",{className:"py-2",children:"High"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:"DevTools"}),e.jsx("td",{className:"py-2 pr-4",children:"React DevTools"}),e.jsx("td",{className:"py-2 pr-4",children:"React DevTools"}),e.jsx("td",{className:"py-2",children:"Redux DevTools"})]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"useState Examples"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Form input values"}),e.jsx("div",{children:"✓ Toggle visibility"}),e.jsx("div",{children:"✓ Modal open/close"}),e.jsx("div",{children:"✓ Tab selection"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Context Examples"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ User authentication"}),e.jsx("div",{children:"✓ Theme (light/dark)"}),e.jsx("div",{children:"✓ Language/i18n"}),e.jsx("div",{children:"✓ User preferences"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Redux/Zustand"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"✓ Shopping cart"}),e.jsx("div",{children:"✓ Complex app state"}),e.jsx("div",{children:"✓ Time-travel debugging"}),e.jsx("div",{children:"✓ Normalized data"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Decision Tips"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Start with useState"}),e.jsx("div",{children:"• Add Context when needed"}),e.jsx("div",{children:"• Use Redux for large apps"}),e.jsx("div",{children:"• Profile before optimizing"})]})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CHOOSING STATE MANAGEMENT OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

React provides multiple ways to manage state. The best
choice depends on your application's needs.

OPTION 1: USESTATE (Component-Local)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for:
✓ Form inputs and temporary UI state
✓ Component-specific state (modal open, tab)
✓ Simple applications
✓ When sharing isn't needed

Example:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

Pros:
- Simplest, no boilerplate
- Good performance (no unnecessary renders)
- Easy to test

Cons:
- Can't share across components
- Prop drilling for nested components

OPTION 2: REACT CONTEXT (Shared State)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Best for:
✓ Theme (light/dark mode)
✓ Authentication/User info
✓ Localization
✓ Infrequent updates

Example:
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

Pros:
- Share state across tree without prop drilling
- Built-in to React
- Good for static data

Cons:
- All consumers rerender on update
- Performance issues in large trees
- Limited debugging

OPTION 3: EXTERNAL STATE MANAGERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Options: Redux, Zustand, MobX, Recoil

Best for:
✓ Large, complex applications
✓ Frequent state updates
✓ Complex state logic
✓ Time-travel debugging needed

Example with Zustand:
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function App() {
  const count = useStore((state) => state.count);
  return <div>Count: {count}</div>;
}

Pros:
- Fine-grained reactivity (only needed renders)
- Complex state management
- DevTools and middleware
- Scalable for large apps

Cons:
- More boilerplate
- Learning curve
- Overkill for simple apps

DECISION FLOWCHART:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Is state shared?
  NO  → useState
  YES → Does it change frequently?
         NO  → Context API
         YES → External state manager (Redux/Zustand)

RECOMMENDATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Start with useState (Pareto principle)
2. Add Context when needed for shared, static data
3. Switch to Redux/Zustand for large apps
4. Measure performance before optimizing`})})})]}),hf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"font-normal text-[#e5e9f0] text-lg",style:{fontFamily:"'Fira Code', Helvetica"},children:"CSS Selector Specificity"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-css-selector-specificity-and-how-does-it-work?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: CSS Specificity →"}),e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"MDN: CSS Specificity →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",style:{fontFamily:"'Fira Code', Helvetica"},children:"Specificity Levels (Low to High)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#607b96] font-medium",children:"0-0-0-0: Universal Selector"}),e.jsx("div",{className:"text-[#43d9ad]",children:"* { color: red; }"})]})}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#607b96] font-medium",children:"0-0-0-1: Element Selector"}),e.jsx("div",{className:"text-[#43d9ad]",children:"p { color: red; }"})]})}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#607b96] font-medium",children:"0-0-1-0: Class/Attribute Selector"}),e.jsx("div",{className:"text-[#43d9ad]",children:".button { color: blue; }"}),e.jsx("div",{className:"text-[#43d9ad]",children:'[type="text"] { color: green; }'})]})}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#607b96] font-medium",children:"0-1-0-0: ID Selector"}),e.jsx("div",{className:"text-[#43d9ad]",children:"#header { color: navy; }"})]})}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#607b96] font-medium",children:"1-0-0-0: Inline Style"}),e.jsx("div",{className:"text-[#43d9ad]",children:'<div style="color: red;">'})]})}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-[#607b96] text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{children:[e.jsx("div",{className:"text-[#fea55f] font-medium",children:"!important (Override All)"}),e.jsx("div",{className:"text-[#fea55f]",children:"p { color: red !important; }"})]})})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",style:{fontFamily:"'Fira Code', Helvetica"},children:"Specificity Calculation Examples"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:"p"}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 0-0-0-1"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:".button"}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 0-0-1-0"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:"p.button"}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 0-0-1-1"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:"#header .nav"}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 0-1-1-0"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:"div > p.intro"}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 0-0-1-2"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2 text-xs",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad]",children:'style="color: red"'}),e.jsx("div",{className:"text-[#607b96]",children:"Specificity: 1-0-0-0"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",style:{fontFamily:"'Fira Code', Helvetica"},children:"Best Practices"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs space-y-1",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-2",children:"✓ Do This"}),e.jsx("div",{children:"✓ Use classes for styling"}),e.jsx("div",{children:"✓ Keep specificity low"}),e.jsx("div",{children:"✓ Avoid deep nesting"}),e.jsx("div",{children:"✓ Use IDs for JavaScript"})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs space-y-1",style:{fontFamily:"'Fira Code', Helvetica"},children:[e.jsx("div",{className:"text-[#fea55f] font-medium mb-2",children:"✗ Avoid This"}),e.jsx("div",{children:"✗ Don't overuse !important"}),e.jsx("div",{children:"✗ Avoid inline styles"}),e.jsx("div",{children:"✗ Don't use IDs for styling"}),e.jsx("div",{children:"✗ Complex selectors"})]})]})]})]}):e.jsx("div",{className:"text-[#607b96] text-sm space-y-6",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CSS SELECTOR SPECIFICITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Specificity determines which CSS rules apply when
multiple selectors target the same element.

SPECIFICITY HIERARCHY (Low to High):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Four-part scale: (A, B, C, D)

A = Inline styles
B = ID selectors
C = Class selectors, attribute selectors, pseudo-classes
D = Element selectors, pseudo-elements

Examples:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* { } → 0-0-0-0 (Universal)
p { } → 0-0-0-1 (Element)
.button { } → 0-0-1-0 (Class)
#header { } → 0-1-0-0 (ID)
<div style="color: red;"> → 1-0-0-0 (Inline)

Combinations:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

h1 { } → 0-0-0-1
.title { } → 0-0-1-0
h1.title { } → 0-0-1-1 (element + class)
#main h1 { } → 0-1-0-1 (ID + element)
#main .title { } → 0-1-1-0 (ID + class)

RULES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Higher specificity wins
   #header { color: navy; } ← Wins
   .title { color: blue; }

2. Inline styles beat everything except !important
   <div style="color: red;"> ← Wins over any rule

3. !important is last resort (avoid if possible)
   p { color: blue !important; } ← Always wins

4. Combinators (>, +, ~) don't add specificity
   div > p { } → 0-0-0-2 (just elements)
   #main > p { } → 0-1-0-1 (ID + element)

5. :not() pseudo-class doesn't add specificity
   :not(p) { } → 0-0-0-0
   :not(.intro) { } → 0-0-1-0

COMMON MISTAKES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Overusing IDs for styling
   IDs are 0-1-0-0, very high specificity
   Makes overriding styles difficult

❌ Overusing !important
   Creates maintenance nightmare
   Forces future rules to also use !important

❌ Deep nesting in CSS-in-JS
   .container .header .nav .link { }
   High specificity, fragile

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Keep specificity low
✓ Use classes for styling
✓ Use IDs for JavaScript hooks
✓ Avoid !important
✓ Avoid inline styles
✓ Use CSS methodologies (BEM, SMACSS)
✓ Write selectors from right to left (browser read order)
✓ Be specific when needed, but not overly specific`})})})]}),pf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Explaining Hoisting in JavaScript"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-hoisting?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Hoisting →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-hoisting/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"github: Hoisting (mdx) →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"What is Hoisting?"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica] space-y-2",children:[e.jsx("div",{children:"Hoisting is JavaScript's behavior of moving declarations to the top of their scope"}),e.jsx("div",{children:"during the compilation phase, before code execution."}),e.jsx("div",{className:"text-[#43d9ad]",children:"Variable and function declarations are hoisted, not initializations."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Function Hoisting"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Function Declaration (Hoisted)"}),e.jsx("div",{className:"text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:e.jsx("pre",{children:`// Can call BEFORE declaration
sayHi(); // "Hi!" (works)

function sayHi() {
  console.log("Hi!");
}`})})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"Function Expression (Not Hoisted)"}),e.jsx("div",{className:"text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:e.jsx("pre",{children:`// Error: can't call before declaration
sayHi(); // TypeError

const sayHi = function() {
  console.log("Hi!");
};`})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Variable Hoisting Differences"}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm",children:"var (Hoisted)"}),e.jsx("div",{className:"text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:e.jsx("pre",{children:`console.log(x); // undefined
var x = 5;
console.log(x); // 5`})}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Hoisted with undefined"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm",children:"let (TDZ)"}),e.jsx("div",{className:"text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:e.jsx("pre",{children:`console.log(x); // ReferenceError
let x = 5;
console.log(x); // 5`})}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Not accessible until declaration"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm",children:"const (TDZ)"}),e.jsx("div",{className:"text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:e.jsx("pre",{children:`console.log(x); // ReferenceError
const x = 5;
console.log(x); // 5`})}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"Not accessible until declaration"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"How JavaScript Interprets Code"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] space-y-3 text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica]",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-1",children:"Your Code:"}),e.jsx("pre",{children:`console.log(x);
var x = 5;`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] font-medium mb-1",children:"Interpreted As:"}),e.jsx("pre",{children:`var x; // declaration hoisted, initialized to undefined
console.log(x); // undefined
x = 5; // assignment stays in place`})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm",children:"Best Practices"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] text-[#607b96] text-xs [font-family:'Fira_Code',Helvetica] space-y-1",children:[e.jsx("div",{children:"✓ Always declare variables before using"}),e.jsx("div",{children:"✓ Use const/let instead of var"}),e.jsx("div",{children:"✓ Declare functions before calling (even though allowed)"}),e.jsx("div",{children:"✓ Understand Temporal Dead Zone (TDZ)"}),e.jsx("div",{children:"✓ Don't rely on hoisting behavior"})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`HOISTING IN JAVASCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hoisting is the process where variables and functions
are moved to the top of their scope before execution.

KEY CONCEPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

During the creation phase, JavaScript engine:
1. Allocates memory for variables and functions
2. Sets variable initial values
3. Reads the entire code (compilation phase)

Then during execution phase, code runs line by line.

FUNCTION HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Function declarations are hoisted completely
Can call function BEFORE it's declared:

sayHi(); // Works! Output: "Hi"

function sayHi() {
  console.log("Hi");
}

✗ Function expressions are NOT hoisted

sayHi(); // TypeError: sayHi is not a function

const sayHi = function() {
  console.log("Hi");
};

VAR HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var is hoisted with 'undefined' initialization

console.log(x); // undefined (not error!)
var x = 5;
console.log(x); // 5

Interpreted as:
var x;              // declaration
console.log(x);     // undefined
x = 5;              // assignment
console.log(x);     // 5

LET AND CONST HOISTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let and const ARE hoisted, but NOT initialized
Creates "Temporal Dead Zone" (TDZ)

console.log(x); // ReferenceError: Cannot access before init
let x = 5;

console.log(y); // ReferenceError: Cannot access before init
const y = 10;

TDZ:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const a = 1;

{
  // TDZ starts here
  console.log(a); // 1 (global a)
  
  // This line would throw ReferenceError if uncommented:
  // console.log(b); // Cannot access 'b' before initialization
  
  const b = 2; // TDZ ends here
  console.log(b); // 2 (local b)
}

PRACTICAL EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What you write:
console.log(name); // What does this print?
var name = "John";

JavaScript reads it as:
var name;              // Hoisted, undefined
console.log(name);     // undefined
name = "John";
console.log(name);     // "John"

BEST PRACTICES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Don't rely on hoisting - it's confusing
2. Always declare variables at the top
3. Use const by default, let when needed
4. NEVER use var
5. Declare functions before calling them
6. Understand it for reading others' code

SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Functions: Fully hoisted, can call before declaration
- var: Hoisted but undefined until assignment
- let/const: Hoisted but in TDZ until declaration
- Hoisting exists but shouldn't be relied upon in code`})})})]}),ff=({showVisualExamples:i,setShowVisualExamples:d})=>{const[o,u]=ns.useState(""),[m,x]=ns.useState(""),f=()=>{const j=()=>{let S=0;return()=>(S++,S)},C=j();u(""),u(`counter1(): ${C()}
`),u(S=>S+`counter1(): ${C()}
`),u(S=>S+`counter1(): ${C()}
`);const k=j();u(S=>S+`counter2(): ${k()} (separate closure)
`)},g=()=>{const C=(k=>{const S={};return A=>{if(A in S)return`${S[A]} (cached)`;const K=k(A);return S[A]=K,`${K} (computed)`}})(k=>{if(k<=1)return k;let S=0,A=1;for(let K=2;K<=k;K++)[S,A]=[A,S+A];return A});x(""),x(`fib(10): ${C(10)}
`),x(k=>k+`fib(10): ${C(10)}
`),x(k=>k+`fib(5): ${C(5)}
`)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Closures: Functional Patterns"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Closures Maintain Private State"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`function makeCounter() {
  let count = 0; // Private variable
  return function() {
    return ++count; // Closure accesses count
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter1(); // 3
counter2(); // 1 (separate closure)`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:o})]}),e.jsx(M,{onClick:f,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Counter Example"}),e.jsxs("div",{className:"bg-[#4d5bce]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"How it works:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"count is private to each closure"}),e.jsx("li",{children:"No global variables needed"}),e.jsx("li",{children:"Each instance has its own state"}),e.jsx("li",{children:"Data encapsulation pattern"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Function Currying with Closures"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);

double(5); // 10
triple(5); // 15

// Without closure, would need:
// multiply(2, 5) each time`})]}),e.jsxs("div",{className:"bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Benefits:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Partial application of functions"}),e.jsx("li",{children:"Create specialized functions"}),e.jsx("li",{children:"Reduce repeated arguments"}),e.jsx("li",{children:"Functional programming pattern"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Memoization: Cache Results with Closures"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Code:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`function memoize(fn) {
  const cache = {}; // Private cache
  return function(n) {
    if (n in cache) {
      return cache[n]; // Return cached result
    }
    const result = fn(n);
    cache[n] = result; // Store in cache
    return result;
  };
}

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
});`})]}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Output:"}),e.jsx("div",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs min-h-24 whitespace-pre-wrap",children:m})]}),e.jsx(M,{onClick:g,className:"bg-[#43d9ad] text-[#011221] hover:bg-[#43d9ad]/80 [font-family:'Fira_Code',Helvetica] text-xs",children:"Run Memoization Example"}),e.jsxs("div",{className:"bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Benefits:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Avoids redundant calculations"}),e.jsx("li",{children:"Improves performance"}),e.jsx("li",{children:"Cache is private to function"}),e.jsx("li",{children:"Transparent to caller"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium",children:"Closures in Event Handlers"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"text-[#43d9ad] [font-family:'Fira_Code',Helvetica] text-sm mb-3",children:"Pattern:"}),e.jsx("pre",{className:"text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs overflow-x-auto",children:`for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log('Button ' + i); // Closure captures i
  });
}

// Without closure (var would be wrong):
// All buttons would log the last i value

// With closure (let or IIFE):
// Each button logs its own index`})]}),e.jsxs("div",{className:"bg-[#43d9ad]/10 p-3 rounded border border-[#1e2d3d] text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:[e.jsx("div",{className:"font-medium text-[#e5e9f0] mb-2",children:"Real-world use:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Each handler captures its own context"}),e.jsx("li",{children:"Click handlers remember their data"}),e.jsx("li",{children:"Prevents variable shadowing issues"}),e.jsx("li",{children:"Use let/const to avoid closure bugs"})]})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"text-[#e5e9f0] [font-family:'Fira_Code',Helvetica] font-medium mb-4",children:"Common Functional Patterns"}),e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d] overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Pattern"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 pr-4 [font-family:'Fira_Code',Helvetica]",children:"Purpose"}),e.jsx("th",{className:"text-[#43d9ad] text-left pb-4 [font-family:'Fira_Code',Helvetica]",children:"Closure Benefit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Data Encapsulation"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Keep variables private"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Hide internal state"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Currying"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Partial function application"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Remember arguments"})]}),e.jsxs("tr",{className:"border-b border-[#1e2d3d]",children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Memoization"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Cache computation results"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Private cache storage"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Factory Functions"}),e.jsx("td",{className:"py-3 pr-4 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Create multiple instances"}),e.jsx("td",{className:"py-3 text-[#607b96] [font-family:'Fira_Code',Helvetica] text-xs",children:"Each has own context"})]})]})]})})]}),e.jsx("div",{className:"text-xs text-[#43d9ad] [font-family:'Fira_Code',Helvetica] space-y-1",children:e.jsxs("div",{children:["References:"," ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-[#e5e9f0]",children:"MDN Closures"})]})})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`A closure is a function that has access to variables from its outer scope.
The returned function "remembers" and can access its parent function's variables.

CLOSURE DEFINITION:
function outer() {
  const message = "Hello"; // Outer scope
  
  function inner() {
    console.log(message); // Accesses outer scope
  }
  
  return inner; // Returns closure
}

const greet = outer();
greet(); // "Hello" - closure remembers message!

PRACTICAL USE CASES:

1. DATA ENCAPSULATION (Private Variables):
function createBankAccount() {
  let balance = 0; // Private
  
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { balance -= amount; },
    getBalance() { return balance; }
  };
}

const account = createBankAccount();
account.balance = 1000000; // Can't access directly!
account.deposit(100); // Must use method

2. CURRYING (Partial Application):
const multiply = (a) => (b) => a * b;
const double = multiply(2);
double(5); // 10

3. MEMOIZATION (Caching):
const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
});

4. EVENT HANDLERS:
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    console.log('Button ' + i); // i captured by closure
  };
}

KEY BENEFITS:
✓ Data privacy and encapsulation
✓ Avoid global variables
✓ Create specialized functions
✓ Implement callbacks and event handlers
✓ Functional programming support`})})})]})},vf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"Event Loop, Call Stack & Task Queues"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Event Loop →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Event Loop Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Components of the Event Loop"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium",children:"Call Stack"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Tracks synchronous function execution"}),e.jsx("div",{children:"• LIFO data structure"}),e.jsx("div",{children:"• Single-threaded"}),e.jsx("div",{children:"• Blocks async operations"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium",children:"Web/Node APIs"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Handle async operations"}),e.jsx("div",{children:"• setTimeout, fetch, etc."}),e.jsx("div",{children:"• Run in background"}),e.jsx("div",{children:"• Don't block execution"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium",children:"Macrotask Queue"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• setTimeout callbacks"}),e.jsx("div",{children:"• setInterval, I/O events"}),e.jsx("div",{children:"• User interactions"}),e.jsx("div",{children:"• Lower priority than microtasks"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium",children:"Microtask Queue"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Promise callbacks (.then, .catch)"}),e.jsx("div",{children:"• queueMicrotask()"}),e.jsx("div",{children:"• Higher priority"}),e.jsx("div",{children:"• Executed before macrotasks"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Event Loop Order"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{className:"text-[#607b96] text-xs space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"1. Execute synchronous code (call stack)"}),e.jsx("div",{className:"text-[#607b96]",children:"   ↓"}),e.jsx("div",{className:"text-[#43d9ad]",children:"2. Process all microtasks (promises, queueMicrotask)"}),e.jsx("div",{className:"text-[#607b96]",children:"   ↓"}),e.jsx("div",{className:"text-[#43d9ad]",children:"3. Execute one macrotask from queue"}),e.jsx("div",{className:"text-[#607b96]",children:"   ↓"}),e.jsx("div",{className:"text-[#43d9ad]",children:"4. Check microtasks again (if any added)"}),e.jsx("div",{className:"text-[#607b96]",children:"   ↓"}),e.jsx("div",{className:"text-[#43d9ad]",children:"5. Repeat steps 3-4"})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Example Execution Order"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-3",children:"Code:"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-3 rounded mb-3",children:[e.jsx("div",{children:"console.log('Start');"}),e.jsx("div",{children:"setTimeout(() => { console.log('Timeout'); }, 0);"}),e.jsx("div",{children:"Promise.resolve().then(() => { console.log('Promise'); });"}),e.jsx("div",{children:"console.log('End');"})]}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-2",children:"Output:"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#38a169] text-xs",children:[e.jsxs("div",{children:["Start     ","// Sync: call stack"]}),e.jsxs("div",{children:["End       ","// Sync: call stack"]}),e.jsxs("div",{children:["Promise   ","// Microtask"]}),e.jsxs("div",{children:["Timeout   ","// Macrotask"]})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`EVENT LOOP EXPLAINED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The event loop is how JavaScript handles async operations.

KEY COMPONENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CALL STACK
   - Executes synchronous code
   - LIFO structure
   - Blocks further execution

2. WEB/NODE APIs
   - Handle asynchronous operations
   - setTimeout, fetch, file I/O
   - Run in background threads
   - Return callbacks to queues

3. MACROTASK QUEUE (Task Queue)
   - setTimeout, setInterval
   - HTTP requests, I/O events
   - User interactions (clicks, scrolls)
   - Lower priority than microtasks

4. MICROTASK QUEUE
   - Promise callbacks (.then, .catch, .finally)
   - await expressions
   - queueMicrotask()
   - MutationObserver callbacks
   - Higher priority than macrotasks

EVENT LOOP ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Execute all synchronous code (call stack)
2. Call stack empties
3. Process ALL microtasks
4. Execute ONE macrotask
5. Process microtasks again
6. Execute next macrotask
7. Repeat...

EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');

OUTPUT:
Start    // Synchronous
End      // Synchronous
Promise  // Microtask (higher priority)
Timeout  // Macrotask (lower priority)

CRITICAL INSIGHT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Even though setTimeout has 0ms delay, it still goes
into macrotask queue. Promises execute immediately
in the microtask queue because they have higher
priority in the event loop order.`})})})]}),bf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"Understanding 'this' in JavaScript"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-how-this-works-in-javascript?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: This Keyword →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/explain-how-this-works-in-javascript/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: This Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"7 Rules for 'this'"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"1. new Keyword (Constructor)"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:[e.jsx("div",{children:"const obj = new Person('John');"}),e.jsx("div",{className:"text-[#43d9ad] mt-1",children:"// this = new object instance"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"2. Method Call (obj.method())"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:e.jsxs("div",{children:["obj.showThis(); ","// this = obj"]})})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"3. call/apply/bind (Explicit Binding)"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:[e.jsxs("div",{children:["func.call(obj); ","// this = obj"]}),e.jsxs("div",{children:["func.apply(obj); ","// this = obj"]}),e.jsxs("div",{children:["func.bind(obj)(); ","// this = obj"]})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"4. Global/Standalone Call"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:e.jsxs("div",{children:["showThis(); ","// window (non-strict) or undefined (strict)"]})})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"5. Arrow Functions (Lexical Scope)"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:e.jsx("div",{children:"const arrow = () => { this }; // inherits from outer scope"})})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"6. Class Constructor"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:[e.jsxs("div",{children:["class Person ","{"]}),e.jsxs("div",{className:"pl-4",children:["constructor() ","{"," this = new instance ","}"]}),e.jsx("div",{children:"}"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"7. Event Handlers"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded mb-2",children:e.jsxs("div",{children:["element.addEventListener('click', func); ","// this = element"]})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Rule Priority (Highest to Lowest)"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{className:"text-[#43d9ad] text-xs space-y-1",children:[e.jsx("div",{children:"1. new keyword (highest)"}),e.jsx("div",{children:"2. call/apply/bind"}),e.jsx("div",{children:"3. Method call (obj.method())"}),e.jsx("div",{children:"4. Standalone call"}),e.jsx("div",{className:"text-[#fea55f] pt-2",children:"Arrow functions skip all above rules"})]})})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`'THIS' KEYWORD RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

'this' is a dynamic reference to the context in
which a function is executed. Its value depends on
how the function is called, not where it's defined.

RULE 1: new KEYWORD (Constructor)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function Person(name) {
  this.name = name;
}

const person = new Person('John');
// this = newly created person object

RULE 2: METHOD CALL (obj.method())
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // this = obj

RULE 3: EXPLICIT BINDING (call/apply/bind)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function greet() {
  console.log(this.name);
}

const person = { name: 'Bob' };

greet.call(person);      // this = person
greet.apply(person);     // this = person
greet.bind(person)();    // this = person

RULE 4: GLOBAL/STANDALONE CALL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function greet() {
  console.log(this);
}

greet();
// Non-strict mode: this = window
// Strict mode: this = undefined

RULE 5: ARROW FUNCTIONS (Lexical Scope)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Arrow functions don't have their own 'this'.
They inherit from surrounding scope.

const obj = {
  name: 'Charlie',
  greet: function() {
    const arrow = () => {
      console.log(this.name); // 'this' from obj
    };
    arrow();
  }
};

obj.greet(); // Charlie

// Arrow functions CANNOT be rebound with call/apply/bind

RULE 6: CLASS CONSTRUCTOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

class Person {
  constructor(name) {
    this.name = name; // this = new instance
  }
  
  greet() {
    console.log(this);
  }
}

const person = new Person('David');
person.greet(); // this = person

RULE 7: EVENT HANDLERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

element.addEventListener('click', function(e) {
  console.log(this); // this = element
});

// But NOT with arrow function:
element.addEventListener('click', () => {
  console.log(this); // this = parent scope
});

PRIORITY ORDER (Highest to Lowest):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. new keyword (highest priority)
2. call/apply/bind
3. Method call (obj.method())
4. Standalone function call

Arrow functions always use lexical 'this' and
ignore all other rules!`})})})]}),gf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"CSS Selector Matching"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/explain-how-a-browser-determines-what-elements-match-a-css-selector?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: CSS Matching →"}),e.jsx("a",{href:"https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/explain-how-a-browser-determines-what-elements-match-a-css-selector/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: CSS Matching Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Matching Algorithm"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"Browsers Match Right-to-Left"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{children:"Selector: p span"}),e.jsx("div",{className:"text-[#43d9ad] mt-2",children:"Step 1: Find all <span>"}),e.jsx("div",{className:"text-[#43d9ad]",children:"Step 2: Traverse up to <p>"}),e.jsx("div",{className:"text-[#43d9ad]",children:"Step 3: Match found"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm mb-3",children:"Key Selector"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Rightmost selector"}),e.jsx("div",{children:"• Most specific filter"}),e.jsx("div",{children:"• Reduces search scope"}),e.jsx("div",{children:"• Improves performance"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Selector Matching Examples"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-2",children:"p span"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:"Find all span → check if parent is p ✓"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-2",children:".class div p span"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:"Find span → p → div → .class ✓"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-2",children:".active span"}),e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:"Find span → check .active ancestor ✓"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Performance Optimization Tips"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"✓ Do This"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Shorter selectors"}),e.jsx("div",{children:"• Specific key selector"}),e.jsx("div",{children:"• Use classes"}),e.jsx("div",{children:"• Avoid deep nesting"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-xs mb-2",children:"✗ Avoid This"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Long selector chains"}),e.jsx("div",{children:"• Universal selectors (*)"}),e.jsx("div",{children:"• Attribute selectors"}),e.jsx("div",{children:"• Complex hierarchies"})]})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`CSS SELECTOR MATCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW BROWSERS MATCH SELECTORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browsers DON'T match left-to-right.
Instead, they match RIGHT-TO-LEFT.

This is more efficient!

EXAMPLE:
Selector: p span

RIGHT-TO-LEFT MATCHING:
1. Browser finds ALL <span> elements in DOM
2. For each <span>, traverses UP to parent
3. Checks if any ancestor is <p>
4. If found, the <span> matches the selector

TERMINOLOGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Key Selector = Rightmost selector in the chain

Example: .container .content p span
                                  ^^^^
                            KEY SELECTOR

This is the most specific filter that narrows
down the search scope the most.

KEY SELECTOR IMPORTANCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Good key selector:  p span       (finds few spans)
Bad key selector:   * span       (finds all spans)

Shorter selector chain = faster matching
More specific key selector = faster matching

MATCHING PROCESS FOR "p > span.active":
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: Find all span.active (KEY SELECTOR)
Step 2: Check if parent is p
Step 3: Match or no match

OPTIMIZATION PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ DO THIS:
  - Use class selectors (most specific)
  - Keep selectors short
  - Avoid universal selector (*)
  - Use descendent combinator carefully

✗ AVOID THIS:
  - Deep nesting chains
  - Attribute selectors [type="..."]
  - Universal selectors in chains: * p span
  - Overly complex selectors

INEFFICIENT vs EFFICIENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inefficient: html body .container div p span
            (long chain, many elements to check)

Efficient:  .active-span
           (direct class selector, fast lookup)`})})})]}),jf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"translate() vs absolute positioning"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/is-there-any-reason-youd-want-to-use-translate-instead-of-absolute-positioning-or-vice-versa-and-why?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: translate() vs position →"}),e.jsx("a",{href:"https://github.com/yangshun/front-end-interview-handbook/blob/main/packages/quiz/questions/is-there-any-reason-youd-want-to-use-translate-instead-of-absolute-positioning-or-vice-versa-and-why/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Position Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"translate() vs position: absolute"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-[#43d9ad]",children:[e.jsx("th",{className:"border border-[#1e2d3d] bg-[#011221] p-2 text-left",children:"Property"}),e.jsx("th",{className:"border border-[#1e2d3d] bg-[#011221] p-2 text-left",children:"translate()"}),e.jsx("th",{className:"border border-[#1e2d3d] bg-[#011221] p-2 text-left",children:"position: absolute"})]})}),e.jsxs("tbody",{className:"text-[#607b96]",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"Document Flow"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Stays in flow"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Removed from flow"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"Space Occupied"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Original space kept"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"No space reserved"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"Reflow/Repaint"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"No reflow ✓"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Triggers reflow ✗"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"GPU Layer"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Creates GPU layer ✓"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Uses CPU ✗"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"Paint Time"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Faster ✓"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Slower ✗"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-[#1e2d3d] bg-[#011221] p-2",children:"Animations"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Smoother ✓"}),e.jsx("td",{className:"border border-[#1e2d3d] p-2",children:"Jankier ✗"})]})]})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"When to Use Each"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm mb-3",children:"Use translate()"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-2",children:[e.jsx("div",{children:"• Animations & transitions"}),e.jsx("div",{children:"• Moving elements smoothly"}),e.jsx("div",{children:"• Hover effects"}),e.jsx("div",{children:"• Should stay in document flow"}),e.jsx("div",{children:"• Performance-critical"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"Use position: absolute"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-2",children:[e.jsx("div",{children:"• Overlays & modals"}),e.jsx("div",{children:"• Tooltips & popovers"}),e.jsx("div",{children:"• Fixed positioning relative to parent"}),e.jsx("div",{children:"• Static placement (no animation)"}),e.jsx("div",{children:"• Removing from layout"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Browser Rendering Impact"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#43d9ad] text-xs mb-3",children:"transform: translate()"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ No reflow"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ No repaint"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Only composition (GPU)"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Smoother 60fps animations"})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-2",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#fea55f] text-xs mb-3",children:"position: absolute"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Triggers reflow"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Triggers repaint"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Uses CPU rendering"}),e.jsx("div",{className:"text-[#607b96] text-xs ml-4",children:"→ Can cause jank"})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`translate() vs position: absolute
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DOCUMENT FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

translate():
  - Element stays in document flow
  - Like position: relative
  - Original space is reserved
  - Siblings are not affected

position: absolute:
  - Element removed from flow
  - Other elements shift up
  - Space no longer reserved
  - Layout recalculation needed

RENDERING PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browser rendering pipeline:
  Reflow → Repaint → Composite

translate():
  - Does NOT trigger reflow
  - Does NOT trigger repaint
  - ONLY triggers composite (GPU)
  - Faster! ✓

position: absolute:
  - TRIGGERS reflow ✗
  - TRIGGERS repaint ✗
  - Uses CPU rendering ✗
  - Slower, jankier ✗

GPU ACCELERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

transform: translate() creates a new GPU layer.
This allows hardware acceleration of animations.

position: absolute does NOT create a GPU layer.
All rendering happens on CPU.

For animations: translate() is 3-5x faster!

ANIMATIONS COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ AVOID (Janky):
animation: {
  from { left: 0; }
  to { left: 100px; }
}

✓ PREFER (Smooth):
animation: {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

WHEN TO USE EACH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use translate():
  • Moving elements smoothly
  • Animations & transitions
  • Hover effects
  • Performance-critical
  • Need smooth 60fps

Use position: absolute:
  • Tooltips & popups
  • Modals & overlays
  • Static positioning
  • Need to remove from layout
  • One-time placement

MEMORY & PERFORMANCE TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• transform properties use GPU acceleration
• opacity also uses GPU (like transform)
• Avoid animating: left, right, top, bottom, width, height
• These properties trigger layout recalculation
• Use transform and opacity for animations
• Monitor DevTools: Performance > Rendering`})})})]}),yf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"React Re-rendering"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-does-re-rendering-mean-in-react?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Re-rendering →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-does-re-rendering-mean-in-react/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Re-rendering Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"What Triggers Re-rendering?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"State Changes"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{children:"setState(newValue)"}),e.jsx("div",{children:"setCount(prev => prev + 1)"}),e.jsx("div",{className:"text-[#43d9ad] mt-1",children:"→ Re-render"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"Prop Changes"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{children:"<Child count={5} />"}),e.jsx("div",{children:"<Child count={6} />"}),e.jsx("div",{className:"text-[#43d9ad] mt-1",children:"→ Child re-renders"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"Parent Re-render"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{children:"Parent state changes"}),e.jsx("div",{children:"All children re-render"}),e.jsx("div",{className:"text-[#43d9ad] mt-1",children:"→ Even if props unchanged"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-3",children:"Context Changes"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs bg-[#1e2d3d] p-2 rounded",children:[e.jsx("div",{children:"Context.Provider value changes"}),e.jsx("div",{className:"text-[#43d9ad] mt-1",children:"→ All consumers re-render"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Re-rendering Process"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"1."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"State/Props Change"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Component receives new state or props"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"2."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"Render Function Called"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Function body executes → new JSX"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"3."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"Virtual DOM Comparison"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"New vDOM compared to previous (diffing)"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold",children:"4."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"DOM Updates"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Only differences applied to real DOM"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Optimization Techniques"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"React.memo"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:[e.jsx("div",{children:"Prevents re-render if props"}),e.jsx("div",{children:"haven't changed"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"useMemo"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:[e.jsx("div",{children:"Memoize expensive"}),e.jsx("div",{children:"computations"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"useCallback"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:[e.jsx("div",{children:"Memoize function"}),e.jsx("div",{children:"references"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"PureComponent"}),e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs",children:[e.jsx("div",{children:"Shallow comparison"}),e.jsx("div",{children:"of props/state"})]})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`RE-RENDERING IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Re-rendering is when React calls a component's
render function again to update the DOM.

WHAT TRIGGERS RE-RENDERING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Component State Changes
   const [count, setCount] = useState(0);
   setCount(count + 1); // → re-render

2. Props Change
   <Child name="Alice" />  // → re-render Child
   <Child name="Bob" />

3. Parent Re-renders
   Parent state changes → all children re-render
   (even if their props didn't change)

4. Context Value Changes
   <Provider value={newValue}>
   All consumers re-render

RE-RENDERING PROCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: State or props change
Step 2: React calls component function
Step 3: New JSX is generated (new vDOM)
Step 4: vDOM compared to previous (diffing)
Step 5: Only differences applied to real DOM
Step 6: Browser displays updated UI

PERFORMANCE CONSIDERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Re-rendering itself is cheap. The work happens in:
  1. Running component function
  2. Diffing vDOM (usually fast)
  3. Updating actual DOM (slowest part)

But unnecessary re-renders waste CPU:
  - Complex calculations run again
  - Expensive operations repeated
  - Child components unnecessarily re-render

OPTIMIZATION TECHNIQUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. React.memo
   Prevent re-render if props unchanged
   const MyComponent = React.memo(Component);

2. useMemo
   Memoize expensive computations
   const result = useMemo(() => expensiveCalc(), [deps]);

3. useCallback
   Memoize function references
   const handleClick = useCallback(() => {...}, [deps]);

4. PureComponent
   Shallow comparison of props & state
   class Pure extends React.PureComponent

5. Key Prop
   Help React identify which items changed
   <Item key={item.id} />

6. Code Splitting
   Load code lazily with React.lazy()
   const LazyComponent = React.lazy(() => import('./Component'));`})})})]}),Nf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"ES5 Function vs ES6 Classes"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-es6-class-and-es5-function-constructors?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: ES5 vs ES6 →"}),e.jsx("a",{href:"https://github.com/yangshun/top-javascript-interview-questions/blob/main/questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Classes Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Side-by-Side Comparison"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm",children:"ES5 Constructor"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs space-y-1",children:[e.jsxs("div",{className:"text-[#43d9ad]",children:["function Person(name) ","{"]}),e.jsx("div",{className:"pl-4",children:"this.name = name;"}),e.jsx("div",{children:"}"}),e.jsx("div",{className:"text-[#43d9ad] mt-2",children:"Person.prototype.greet ="}),e.jsxs("div",{className:"pl-4",children:["function() ","{"]}),e.jsx("div",{className:"pl-8",children:"console.log(this.name);"}),e.jsx("div",{className:"pl-4",children:"}"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"ES6 Class"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:e.jsxs("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-xs space-y-1",children:[e.jsxs("div",{className:"text-[#43d9ad]",children:["class Person ","{"]}),e.jsxs("div",{className:"pl-4",children:["constructor(name) ","{"]}),e.jsx("div",{className:"pl-8",children:"this.name = name;"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsxs("div",{className:"text-[#43d9ad]",children:["greet() ","{"]}),e.jsx("div",{className:"pl-8",children:"console.log(this.name);"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]})})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Key Differences"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"Syntax"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"ES5: function + prototype | ES6: class keyword (more readable)"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"Methods"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"ES5: Prototype chain | ES6: Inside class body (cleaner)"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"Static Methods"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"ES5: Directly on constructor | ES6: static keyword (clear)"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"Inheritance"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"ES5: Object.create() + manual chain | ES6: extends + super (much simpler)"})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm mb-2",children:"Strict Mode"}),e.jsx("div",{className:"text-[#607b96] text-xs",children:"ES5: Optional | ES6: Always strict (safer)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Inheritance Comparison"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-sm",children:"ES5 (Complex)"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsxs("div",{children:["function Student(name) ","{"]}),e.jsx("div",{className:"pl-4",children:"Person.call(this, name);"}),e.jsx("div",{children:"}"}),e.jsx("div",{className:"text-[#43d9ad]",children:"Student.prototype = "}),e.jsx("div",{className:"pl-4",children:"Object.create"}),e.jsx("div",{className:"pl-4",children:"(Person.prototype);"})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-sm",children:"ES6 (Simple)"}),e.jsx("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",style:{fontFamily:"'Fira Code', Helvetica"},children:e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"class Student extends"}),e.jsxs("div",{className:"pl-4",children:["Person ","{"]}),e.jsxs("div",{className:"pl-4",children:["constructor(name) ","{"]}),e.jsx("div",{className:"pl-8",children:"super(name);"}),e.jsx("div",{className:"pl-4",children:"}"}),e.jsx("div",{children:"}"})]})})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`ES5 FUNCTION CONSTRUCTORS vs ES6 CLASSES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BASIC COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ES5 FUNCTION CONSTRUCTOR:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log('Hello, I am ' + this.name);
};

var person1 = new Person('John', 30);

ES6 CLASS:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, I am \${this.name}\`);
  }
}

const person1 = new Person('John', 30);

KEY DIFFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SYNTAX & READABILITY
   ES5: Confusing, less intuitive
   ES6: Clear, more intuitive ✓

2. CONSTRUCTOR
   ES5: Function named like constructor
   ES6: Explicit constructor() method ✓

3. METHOD DEFINITION
   ES5: Defined on .prototype
   ES6: Defined in class body ✓

4. STATIC METHODS
   ES5: Added directly to function
        Person.staticMethod = function() {}
   ES6: Use static keyword ✓
        static staticMethod() {}

5. INHERITANCE
   ES5: Manual prototype chain setup
        Student.prototype = Object.create(Person.prototype)
        Student.prototype.constructor = Student
   ES6: Use extends & super ✓
        class Student extends Person {
          constructor(name, grade) {
            super(name);
            this.grade = grade;
          }
        }

6. STRICT MODE
   ES5: Optional - must add 'use strict'
   ES6: Automatic in class body ✓

INHERITANCE EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ES5 (VERBOSE):
function Person(name) {
  this.name = name;
}

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

ES6 (CLEAN):
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use ES6 classes for modern JavaScript!
- More readable
- Less verbose
- Easier inheritance
- Standard now (all modern browsers support)
- Future-proof`})})})]}),wf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"What is Virtual DOM?"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/what-is-virtual-dom-in-react?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Virtual DOM →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/what-is-virtual-dom-in-react/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Virtual DOM Guide →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"What is the Virtual DOM?"}),e.jsx("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded",children:e.jsxs("div",{className:"text-[#607b96] text-xs space-y-2",children:[e.jsx("div",{children:"• Lightweight copy of actual DOM kept in memory"}),e.jsx("div",{children:"• JavaScript object representation of real DOM"}),e.jsx("div",{children:"• Synced with real DOM through reconciliation"}),e.jsx("div",{children:"• Main benefit: minimizes slow DOM operations"})]})})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"How Virtual DOM Works"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold text-sm",children:"1."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"Initial Render"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"React creates vDOM tree (lightweight copy)"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold text-sm",children:"2."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"State/Props Change"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"New vDOM tree is created"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold text-sm",children:"3."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"Diffing Algorithm"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"React compares new vDOM with previous (fast)"})]})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"text-[#43d9ad] font-bold text-sm",children:"4."}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] text-sm",children:"Update Real DOM"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Only differences applied to real DOM (slow part minimized)"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Benefits of Virtual DOM"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Performance"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Batch updates together"}),e.jsx("div",{children:"• Minimal DOM operations"}),e.jsx("div",{children:"• Fast diffing in memory"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Abstraction"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Declarative programming"}),e.jsx("div",{children:"• No manual DOM manipulation"}),e.jsx("div",{children:"• Easier to reason about"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Cross-Platform"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• React Native uses same concept"}),e.jsx("div",{children:"• Consistent API"}),e.jsx("div",{children:"• Web + mobile"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Predictability"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Consistent updates"}),e.jsx("div",{children:"• Easier debugging"}),e.jsx("div",{children:"• Testable"})]})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`VIRTUAL DOM IN REACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS THE VIRTUAL DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM = Lightweight copy of actual DOM
             kept in memory
             managed by JavaScript

It's a concept where React maintains a virtual
representation of the UI and syncs it with the
real DOM using reconciliation.

WHY VIRTUAL DOM?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Direct DOM manipulation is SLOW:
  - Each DOM operation triggers reflow/repaint
  - Browser recalculates layout
  - Performance bottleneck

Virtual DOM allows:
  - Fast in-memory comparisons (diffing)
  - Batch updates together
  - Minimal actual DOM changes
  - Better performance overall

HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: INITIAL RENDER
   React creates a vDOM tree
   vDOM is rendered to real DOM

Step 2: STATE CHANGE
   React creates NEW vDOM tree
   Uses updated state/props

Step 3: DIFFING (Reconciliation)
   Compare new vDOM with previous vDOM
   Find differences (fast operation in memory)
   Calculate minimal changes needed

Step 4: PATCH REAL DOM
   Apply only the differences to real DOM
   This is the slow part, but minimized

EXAMPLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial render:
  vDOM: {
    type: 'div',
    children: [
      { type: 'p', text: 'Count: 0' }
    ]
  }
  Real DOM: <div><p>Count: 0</p></div>

User clicks button, count changes to 1:
  New vDOM: {
    type: 'div',
    children: [
      { type: 'p', text: 'Count: 1' }  ← CHANGED
    ]
  }

Diff: Only <p> text content changed
Update: Minimal update to real DOM

BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Performance
  - Minimizes slow DOM operations
  - Batches updates efficiently
  - Fast in-memory diffing

✓ Abstraction
  - Developers don't manipulate DOM directly
  - Declarative approach
  - Easier to understand component logic

✓ Cross-Platform
  - React Native uses same vDOM concept
  - Consistent development experience

✓ Predictability
  - Consistent, predictable updates
  - Easier to test
  - Easier to debug

DOWNSIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Complexity
  - Overhead for very simple apps
  - Learning curve

✗ Not a Silver Bullet
  - Still limited by DOM speed for complex apps
  - Can't guarantee best performance
  - Depends on implementation

BOTTOM LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM is an excellent abstraction that
significantly improves web app performance by
minimizing expensive DOM operations while
providing developers with a cleaner, more
declarative API for building UIs.`})})})]}),Cf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"font-normal text-[#e5e9f0] text-lg",children:"Virtual DOM: How It Works, Benefits & Downsides"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),e.jsxs("div",{className:"text-xs text-[#43d9ad] space-y-1",children:[e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides?practice=practice&tab=quiz",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"greatfrontend: Virtual DOM Advanced →"}),e.jsx("a",{href:"https://github.com/yangshun/top-reactjs-interview-questions/blob/main/questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx",target:"_blank",rel:"noopener noreferrer",className:"hover:underline block",children:"GitHub: Advanced vDOM →"})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Detailed Virtual DOM Process"}),e.jsxs("div",{className:"bg-[#011221] p-4 border border-[#1e2d3d] rounded space-y-3",children:[e.jsxs("div",{className:"border-l-2 border-[#43d9ad] pl-3",children:[e.jsx("div",{className:"text-[#43d9ad] text-sm font-medium",children:"1. Initial Rendering"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"React component → render() → vDOM tree created → real DOM"})]}),e.jsxs("div",{className:"border-l-2 border-[#43d9ad] pl-3",children:[e.jsx("div",{className:"text-[#43d9ad] text-sm font-medium",children:"2. State/Props Update"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"setState() or props change → component re-renders"})]}),e.jsxs("div",{className:"border-l-2 border-[#43d9ad] pl-3",children:[e.jsx("div",{className:"text-[#43d9ad] text-sm font-medium",children:"3. New vDOM Created"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"New vDOM tree with updated JSX"})]}),e.jsxs("div",{className:"border-l-2 border-[#43d9ad] pl-3",children:[e.jsx("div",{className:"text-[#43d9ad] text-sm font-medium",children:"4. Diffing/Reconciliation"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Compare new vDOM with old (fast, in-memory)"})]}),e.jsxs("div",{className:"border-l-2 border-[#43d9ad] pl-3",children:[e.jsx("div",{className:"text-[#43d9ad] text-sm font-medium",children:"5. Patch Real DOM"}),e.jsx("div",{className:"text-[#607b96] text-xs mt-1",children:"Apply only differences to real DOM (minimized slow ops)"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#43d9ad] text-sm",children:"Benefits of Virtual DOM"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Improved Performance"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Efficient updates"}),e.jsx("div",{children:"• Batch updates"}),e.jsx("div",{children:"• Minimize DOM operations"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Declarative UI"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Describe desired state"}),e.jsx("div",{children:"• React handles updates"}),e.jsx("div",{children:"• Simplified development"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Cross-Platform"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• React Native"}),e.jsx("div",{children:"• Consistent API"}),e.jsx("div",{children:"• Code reuse"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#43d9ad] font-medium text-xs mb-2",children:"Abstraction"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• No direct DOM manipulation"}),e.jsx("div",{children:"• Less error-prone"}),e.jsx("div",{children:"• Easier to reason about"})]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"font-medium text-[#fea55f] text-sm",children:"Downsides of Virtual DOM"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-xs mb-2",children:"Complexity"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Learning curve"}),e.jsx("div",{children:"• Overhead for simple apps"}),e.jsx("div",{children:"• Extra abstraction layer"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-xs mb-2",children:"Performance Limits"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Not always optimal"}),e.jsx("div",{children:"• Large apps still slow"}),e.jsx("div",{children:"• Manual optimization needed"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-xs mb-2",children:"Memory Usage"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Maintain two DOM copies"}),e.jsx("div",{children:"• Extra memory consumption"}),e.jsx("div",{children:"• Overhead per component"})]})]}),e.jsxs("div",{className:"bg-[#011221] p-3 border border-[#1e2d3d] rounded",children:[e.jsx("div",{className:"text-[#fea55f] font-medium text-xs mb-2",children:"Diffing Overhead"}),e.jsxs("div",{className:"text-[#607b96] text-xs space-y-1",children:[e.jsx("div",{children:"• Diffing takes time"}),e.jsx("div",{children:"• Very large trees slow"}),e.jsx("div",{children:"• Can't avoid algorithm cost"})]})]})]})]})]}):e.jsx("div",{style:{fontFamily:"'Fira Code', Helvetica"},className:"text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap text-xs",children:`VIRTUAL DOM: DETAILED GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HOW VIRTUAL DOM WORKS (DETAILED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. INITIAL RENDER
   User opens app
   → React renders component
   → Creates vDOM tree (JS object)
   → Renders vDOM to actual DOM
   → Browser displays UI

2. USER INTERACTION / STATE CHANGE
   User clicks button / setState() called
   → Component function executes again
   → New JSX generated

3. NEW VDOM CREATED
   New vDOM tree created with new state
   Completely new object, different from old vDOM

4. DIFFING ALGORITHM (Reconciliation)
   React compares new vDOM with old vDOM
   This is FAST because it's in-memory JavaScript
   Identifies exactly which parts changed
   Creates a "diff" or "patch"

5. PATCH REAL DOM
   Only apply differences to real DOM
   This is SLOW, so React minimizes it
   Browser reflow/repaint only for changed elements
   Other elements untouched

EXAMPLE WALKTHROUGH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Initial State: count = 0
vDOM: { type: 'div', children: [{type: 'p', text: '0'}] }
Real DOM: <div><p>0</p></div>

User clicks button: count becomes 1
New vDOM: { type: 'div', children: [{type: 'p', text: '1'}] }

Diff: Only the text in <p> changed (0 → 1)
Patch: React updates only that <p>'s text
       Everything else stays the same

Real DOM after: <div><p>1</p></div>

BENEFITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. IMPROVED PERFORMANCE ✓
   - Direct DOM manipulation is SLOW
   - vDOM diffing in memory is FAST
   - Batch multiple updates together
   - Minimize total DOM operations
   - Better overall performance

2. DECLARATIVE UI ✓
   - Describe what UI should look like
   - React figures out HOW to update
   - Less error-prone than imperative
   - Easier to understand code
   - Simpler mental model

3. CROSS-PLATFORM ✓
   - React Native uses same vDOM concept
   - Web + Mobile consistent API
   - Code sharing possible
   - Similar development experience

4. ABSTRACTION ✓
   - No direct DOM manipulation needed
   - Developers don't think about DOM
   - Focus on state and logic
   - Less complexity in component code

DOWNSIDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COMPLEXITY ✗
   - Extra abstraction layer
   - More concepts to learn
   - Overhead for very simple apps
   - Not beneficial for static pages

2. NOT A SILVER BULLET ✗
   - Doesn't guarantee best performance
   - Very large apps still slow
   - Diffing algorithm has overhead
   - Can't avoid all slow operations

3. MEMORY OVERHEAD ✗
   - Maintain two DOM trees in memory
   - vDOM + actual DOM
   - Significant memory for large apps
   - Unnecessary for simple apps

4. DIFFING COST ✗
   - Comparing trees takes time
   - Very large vDOM trees slow
   - O(n) algorithm for linear time
   - Can't eliminate this cost

WHEN VIRTUAL DOM SHINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Complex, interactive UIs
✓ Frequent state changes
✓ Multiple data dependencies
✓ Large component trees
✓ Applications needing cross-platform

WHEN VIRTUAL DOM DOESN'T HELP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Static pages
✗ Simple static content
✗ Vanilla JS is better
✗ Memory-constrained devices
✗ Server-side rendering only

BOTTOM LINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Virtual DOM is an intelligent abstraction that
provides significant benefits for complex,
interactive applications by minimizing expensive
DOM operations. However, it comes with overhead
that isn't always justified for simple apps.`})})})]}),Sf=[{id:"block",label:"What's the difference between `block`, `inline`, and `inline-block`?",icon:"📄"},{id:"equals",label:"What is the difference between `==` and `===` in JavaScript?",icon:"🎯"},{id:"stateProps",label:"What is the difference between state and props in React?",icon:"📄"},{id:"nullUndefined",label:"What's the difference between null, undefined, and undeclared?",icon:"❓"},{id:"callApply",label:"What's the difference between .call and .apply?",icon:"🔗"},{id:"mapObject",label:"What's the difference between Map and a plain Object?",icon:"🗺️"},{id:"dataTypes",label:"What are the various data types in JavaScript?",icon:"🔣"},{id:"stylingSVG",label:"Are you familiar with styling SVG?",icon:"🎨"},{id:"proxies",label:"What are proxies in JavaScript used for?",icon:"🔬"},{id:"callbacks",label:"Explain the concept of a callback function",icon:"📞"},{id:"microtask",label:"Explain the concept of a microtask queue",icon:"⏱️"},{id:"caching",label:"Explain the concept of caching",icon:"💾"},{id:"csp",label:"Explain Content Security Policy (CSP)",icon:"🛡️"},{id:"csrf",label:"Explain CSRF and mitigation techniques",icon:"🔐"},{id:"debounceThrottle",label:"Explain debouncing and throttling",icon:"⏳"},{id:"boxModel",label:"Explain the CSS box model",icon:"▢"},{id:"boxSizing",label:"What does box-sizing: border-box do?",icon:"📦"},{id:"cssDisplay",label:"What is the CSS display property?",icon:"🖼️"},{id:"positioning",label:"What's the difference between positioning types?",icon:"📍"},{id:"react",label:"What is React? Describe its benefits",icon:"⚛️"},{id:"letVarConst",label:"What are the differences between let, var, or const?",icon:"🔤"},{id:"eventDelegation",label:"Explain event delegation",icon:"🎯"},{id:"reactKeyProp",label:"What is the purpose of the key prop in React?",icon:"🔑"},{id:"clientStorage",label:"Difference between cookie, sessionStorage, localStorage?",icon:"💾"},{id:"scriptAsyncDefer",label:"Difference between script async and defer?",icon:"📜"},{id:"reactHooksBenefits",label:"What are the benefits of using hooks in React?",icon:"🪝"},{id:"cssHeadScriptBody",label:"Why is CSS in head and JS before body?",icon:"📋"},{id:"cssFlexboxGrid",label:"Have you played with CSS flexbox or grid?",icon:"🎨"},{id:"reactHooksRules",label:"What are the rules of React hooks?",icon:"📏"},{id:"functionBind",label:"Explain Function.prototype.bind",icon:"🔗"},{id:"arrowMethods",label:"Arrow syntax for methods in constructor",icon:"➡️"},{id:"prototypalInheritance",label:"Explain how prototypal inheritance works",icon:"🔗"},{id:"functionDeclaration",label:"Function declaration vs expression",icon:"⚙️"},{id:"closures",label:"What is a closure and how to use one?",icon:"📦"},{id:"anonymousFunctions",label:"Typical use case for anonymous functions",icon:"👤"},{id:"objectCreation",label:"Various ways to create objects in JavaScript",icon:"🏗️"},{id:"higherOrderFunctions",label:"What is a higher-order function?",icon:"🔧"},{id:"eventBubbling",label:"Describe event bubbling",icon:"🫧"},{id:"eventCapturing",label:"Describe event capturing",icon:"📥"},{id:"syncAsync",label:"Synchronous vs asynchronous functions",icon:"⏱️"},{id:"promisesCallbacks",label:"Promises vs callbacks",icon:"🤝"},{id:"closuresFunctional",label:"Closures: Functional patterns and use cases",icon:"🔐"},{id:"promisesCallbacksComp",label:"Promises vs Callbacks: Pros and Cons",icon:"⚖️"},{id:"reactContextPerf",label:"Optimizing React Context to Reduce Rerenders",icon:"⚡"},{id:"asyncDataLoading",label:"Handling Asynchronous Data Loading in React",icon:"📥"},{id:"stateManagement",label:"Choosing State vs Context vs External Managers",icon:"🎛️"},{id:"cssSpecificity",label:"CSS Selector Specificity and How It Works",icon:"🎯"},{id:"hoisting",label:"Explaining Hoisting in JavaScript",icon:"🚀"},{id:"eventLoop",label:"Event Loop, Call Stack & Task Queues",icon:"🔄"},{id:"thisKeyword",label:"Understanding 'this' in JavaScript",icon:"👆"},{id:"cssMatching",label:"CSS Selector Matching Algorithm",icon:"🎯"},{id:"translateVsPositioning",label:"transform: translate() vs position: absolute",icon:"📍"},{id:"reactReRendering",label:"React Re-rendering Explained",icon:"🔄"},{id:"es5VsEs6Classes",label:"ES5 Function Constructors vs ES6 Classes",icon:"🏗️"},{id:"virtualDomBasics",label:"What is Virtual DOM in React?",icon:"🌳"},{id:"virtualDomAdvanced",label:"Virtual DOM: How It Works, Benefits & Downsides",icon:"⚙️"}],kf=[{id:"experience",label:"experience",icon:"💼"},{id:"skills",label:"skills",icon:"⚡"}],Ef=[{id:"sports",label:"sports",icon:"⚽"},{id:"music",label:"music",icon:"🎵"},{id:"reading",label:"reading",icon:"📚"}],Ff=()=>{const[i,d]=R.useState({whatsTheDiff:!0,professionalInfo:!1,hobbies:!1}),[o,u]=R.useState("block"),[m,x]=R.useState(!0),f={block:[{key:"block",description:"Full width → New line, fills parent, respects all margins"},{key:"inline-block",description:"Inline + sized → Flows with content, respects width/height"},{key:"inline",description:"Text-like → Flows with content, ignores width/height & vertical spacing"}],equals:[{key:"==",description:"Loose equality → Performs type coercion"},{key:"===",description:"Strict equality → No type coercion, same type AND value"}],stateProps:[{key:"State",description:"Internal → Mutable, owned by component, tied to lifecycle"},{key:"Props",description:"External → Immutable, from parent, read-only configuration"}],nullUndefined:[{key:"null",description:"Explicit → Intentional assignment of 'no value'"},{key:"undefined",description:"Default → Uninitialized variables & missing properties"},{key:"undeclared",description:"Error → Variable not declared in scope, throws ReferenceError"}],callApply:[{key:"C",description:"Call → Comma-separated arguments"},{key:"A",description:"Apply → Array of arguments"}],mapObject:[{key:"Map",description:"Keys can be any type; has `size` and preserves insertion order."},{key:"Object",description:"Keys are strings/symbols; easy to JSON stringify; lightweight for small sets."}],dataTypes:[{key:"Primitive",description:"number, string, boolean, null, undefined, symbol, bigint"},{key:"Reference",description:"object, array, function, Map, Set — stored by reference"}],stylingSVG:[{key:"fill/stroke",description:"SVG attributes for colors; can be overridden by CSS"},{key:"currentColor",description:'Use `fill="currentColor"` for icon theming'}],proxies:[{key:"Proxy",description:"Intermediary object that intercepts and customizes operations on target objects"},{key:"Traps",description:"Handler methods like get, set, apply to intercept specific operations"},{key:"Use Cases",description:"Validation, logging, reactivity systems (Vue.js), mocking/testing"}],callbacks:[{key:"Synchronous",description:"Executed immediately within the function (blocking)"},{key:"Asynchronous",description:"Executed after an operation completes (non-blocking)"},{key:"Use Cases",description:"Network requests, file I/O, timers, event handling"}],microtask:[{key:"Microtask Queue",description:"Higher priority tasks executed before macrotask queue"},{key:"Microtasks",description:"Promise callbacks, queueMicrotask(), MutationObserver"},{key:"Macrotasks",description:"setTimeout, setInterval, I/O operations"}],caching:[{key:"Browser Cache",description:"Local storage reducing repeated downloads"},{key:"Service Workers",description:"Enable offline access and cache resources"},{key:"HTTP Caching",description:"Use Cache-Control headers to control cache behavior"}],csp:[{key:"CSP",description:"Restricts allowed resource origins to mitigate XSS and injection attacks"},{key:"Directives",description:"script-src, style-src, img-src, default-src — control resource loading"},{key:"Policy Delivery",description:"Via HTTP header or meta tag (Content-Security-Policy)"}],csrf:[{key:"CSRF",description:"Attacker triggers actions on behalf of an authenticated user"},{key:"Mitigations",description:"SameSite cookies, CSRF tokens, Origin/Referer checks"},{key:"Patterns",description:"Synchronizer token pattern, double-submit cookie"}],debounceThrottle:[{key:"Debounce",description:"Wait until events stop before invoking the handler"},{key:"Throttle",description:"Invoke handler at most once per interval"},{key:"When",description:"Debounce for input, Throttle for continuous events (scroll)"}],boxModel:[{key:"Parts",description:"Content, padding, border, margin"},{key:"box-sizing",description:"content-box (default) vs border-box (includes padding+border)"},{key:"Layout",description:"Understanding box model prevents layout surprises"}],boxSizing:[{key:"content-box",description:"Width excludes padding & border (default)"},{key:"border-box",description:"Width includes padding & border (recommended)"},{key:"Best Practice",description:"Apply globally with * selector"}],cssDisplay:[{key:"inline",description:"Flows with text, no width/height"},{key:"block",description:"Takes full width, starts new line"},{key:"flex",description:"Flexible one-dimensional layout"},{key:"grid",description:"Two-dimensional grid layout"}],positioning:[{key:"static",description:"Default, no offset effect"},{key:"relative",description:"Relative to normal position, in flow"},{key:"absolute",description:"Relative to positioned parent, out of flow"},{key:"fixed",description:"Relative to viewport, stays fixed"}],react:[{key:"What",description:"JavaScript library for building UIs with components"},{key:"Virtual DOM",description:"Efficiently updates real DOM through diffing"},{key:"Benefits",description:"Reusable components, declarative, strong ecosystem"}],letVarConst:[{key:"var",description:"Function-scoped, hoisted, avoid using"},{key:"let",description:"Block-scoped, use when reassigning"},{key:"const",description:"Block-scoped, immutable, prefer by default"}],eventDelegation:[{key:"Pattern",description:"Handle events on parent element for child elements"},{key:"Benefits",description:"Fewer listeners, dynamic elements, better performance"},{key:"Event Flow",description:"Relies on bubbling phase"}],reactKeyProp:[{key:"Purpose",description:"Identifies which items have changed, been added, or removed"},{key:"Use Case",description:"Lists, dynamic content, re-ordering"},{key:"Best Practice",description:"Use unique ID, not array index"}],clientStorage:[{key:"Cookie",description:"Server-sent, persists, auto-sent with requests"},{key:"sessionStorage",description:"Client-side, session-only, not sent to server"},{key:"localStorage",description:"Client-side, persistent, survives page reload"}],scriptAsyncDefer:[{key:"Normal",description:"Blocks HTML parsing, executes immediately"},{key:"async",description:"Downloads in parallel, executes when ready"},{key:"defer",description:"Downloads in parallel, executes after parsing"}],reactHooksBenefits:[{key:"Reuse Logic",description:"Extract component logic into reusable functions"},{key:"Simplify Complex",description:"Split complex components into smaller functions"},{key:"No Breaking",description:"Work inside existing classes gradually"}],cssHeadScriptBody:[{key:"CSS in Head",description:"Prevents FOUC (Flash of Unstyled Content)"},{key:"JS at End",description:"Allows HTML to render while JS downloads"},{key:"Load Order",description:"Improves perceived performance"}],cssFlexboxGrid:[{key:"Flexbox",description:"One-dimensional layout, flexible items"},{key:"Grid",description:"Two-dimensional layout, rows and columns"},{key:"Combined",description:"Use together for complex layouts"}],reactHooksRules:[{key:"Only at Top",description:"Hooks only at top level of component, not conditionally"},{key:"Only in React",description:"Only call from React functions or custom hooks"},{key:"Order Matters",description:"Same order every render for dependencies"}],functionBind:[{key:"Purpose",description:"Creates new function with 'this' permanently bound"},{key:"No Execution",description:"Returns function, doesn't execute like call/apply"},{key:"Use Cases",description:"Event handlers, callbacks, partial application"}],arrowMethods:[{key:"Auto Binding",description:"'this' always refers to instance, no .bind() needed"},{key:"Constructor",description:"Define as arrow method inside constructor"},{key:"Trade-off",description:"More memory (per instance) but safer for callbacks"}],prototypalInheritance:[{key:"Delegation",description:"Objects delegate to other objects via prototype chain"},{key:"Prototype Chain",description:"Property lookup goes up chain: instance → prototype → null"},{key:"Patterns",description:"Delegation, Constructor, Concatenation"}],functionDeclaration:[{key:"Declaration",description:"Hoisted, can call before defining"},{key:"Expression",description:"Not hoisted (var/let/const rules apply)"},{key:"Best Practice",description:"Use const for modern code"}],closures:[{key:"Definition",description:"Function plus variables from outer scope"},{key:"Scope Chain",description:"Inner function accesses all parent scopes"},{key:"Use Cases",description:"Private data, factory functions, callbacks"}],anonymousFunctions:[{key:"No Name",description:"Function without explicit name"},{key:"Common Use",description:"Callbacks, event handlers, array methods"},{key:"Modern",description:"Arrow functions cleaner alternative"}],objectCreation:[{key:"Literal",description:"Simple: { key: value }"},{key:"Class",description:"Modern best practice for multiple instances"},{key:"Constructor",description:"Legacy prototypal pattern"}],higherOrderFunctions:[{key:"Definition",description:"Function that takes/returns another function"},{key:"Benefits",description:"Reusable logic, flexible behavior, easier composition"},{key:"Examples",description:"Decorators, factories, array methods (map, filter)"}],eventBubbling:[{key:"Direction",description:"Event travels from target up to ancestors"},{key:"stopPropagation()",description:"Prevents bubbling to parent elements"},{key:"preventDefault()",description:"Cancels default browser action, bubbling continues"}],eventCapturing:[{key:"Direction",description:"Event travels from window down to target (opposite of bubbling)"},{key:"Three Phases",description:"Capturing (down) → Target (at) → Bubbling (up)"},{key:"Use Case",description:"Rarely needed; bubbling is more common"}],syncAsync:[{key:"Synchronous",description:"Blocking - waits for completion before continuing"},{key:"Asynchronous",description:"Non-blocking - continues while operation completes"},{key:"Use Cases",description:"Use sync for quick ops, async for I/O and timers"}],promisesCallbacks:[{key:"Callbacks",description:"Function argument executed later (pyramid of doom)"},{key:"Promises",description:"Objects with .then() for cleaner chaining"},{key:"Winner",description:"Promises: better error handling, readability, composition"}],closuresFunctional:[{key:"Private Data",description:"Closure maintains private variables per instance"},{key:"Currying",description:"Partial application of functions via nested returns"},{key:"Memoization",description:"Cache results in closure for performance"}],promisesCallbacksComp:[{key:"Callbacks",description:"Pyramid of doom, manual error handling, hard to maintain"},{key:"Promises",description:"Linear chaining, centralized .catch(), composable"},{key:"Winner",description:"Promises for modern code; Async/await even better"}],reactContextPerf:[{key:"Problem",description:"All consumers rerender when context updates"},{key:"Solutions",description:"Split contexts, memoize providers, use custom hooks"},{key:"Alternative",description:"Redux/Zustand for complex apps"}],asyncDataLoading:[{key:"Pattern",description:"useEffect + .then/.catch or async/await"},{key:"States",description:"loading, error, data - manage UI accordingly"},{key:"Cleanup",description:"Prevent memory leaks on unmount"}],stateManagement:[{key:"useState",description:"Component-local, simplest, no sharing"},{key:"Context",description:"Share across tree, good for static data (theme, auth)"},{key:"Redux/Zustand",description:"Complex state, frequent updates, fine-grained control"}],cssSpecificity:[{key:"Scale",description:"0-0-0-0 (universal) to 1-0-0-0 (inline) to !important"},{key:"Rules",description:"Higher specificity wins; Avoid IDs and !important"},{key:"Best Practice",description:"Keep specificity low, use classes"}],hoisting:[{key:"Functions",description:"Fully hoisted - can call before declaration"},{key:"var",description:"Hoisted with 'undefined' - confusing behavior"},{key:"let/const",description:"Hoisted but in TDZ until declaration (ReferenceError)"}],eventLoop:[{key:"Call Stack",description:"Executes synchronous code, one function at a time"},{key:"Microtask Queue",description:"Promises, queueMicrotask - higher priority than macrotasks"},{key:"Macrotask Queue",description:"setTimeout, setInterval, I/O - lower priority"}],thisKeyword:[{key:"Default",description:"Global object (window/global) in loose mode, undefined in strict"},{key:"Method",description:"Object that method is called on"},{key:"Binding",description:"call/apply/bind explicitly set 'this', arrow functions inherit parent"}],cssMatching:[{key:"Right-to-Left",description:"Browser matches rightmost selector first (key selector)"},{key:"Key Selector",description:"Rightmost selector determines candidate elements to check"},{key:"Optimization",description:"Reduce specificity of right selector, avoid universal selector"}],translateVsPositioning:[{key:"translate()",description:"GPU-accelerated, doesn't affect document flow, smooth animation"},{key:"position: absolute",description:"CPU-rendered, removes from flow, complex layout recalculation"},{key:"Performance",description:"Use translate for animations, absolute for layout control"}],reactReRendering:[{key:"Triggers",description:"State change, prop change, parent rerender, context update"},{key:"Process",description:"Component function re-executes, React compares vDOM, updates real DOM"},{key:"Optimization",description:"React.memo, useMemo, useCallback prevent unnecessary rerenders"}],es5VsEs6Classes:[{key:"Constructor",description:"ES5: function MyClass(){} vs ES6: class MyClass{}"},{key:"Methods",description:"ES5: prototype chaining vs ES6: defined in class body"},{key:"Inheritance",description:"ES5: complex prototype chain vs ES6: extends keyword"}],virtualDomBasics:[{key:"What",description:"JavaScript representation of DOM structure, not real DOM"},{key:"Benefit",description:"Batches updates, reduces direct DOM manipulation for performance"},{key:"How",description:"Compare old vDOM to new, calculate minimal changes, update real DOM"}],virtualDomAdvanced:[{key:"Reconciliation",description:"Algorithm compares vDOM trees, identifies changed elements"},{key:"Benefits",description:"Performance optimization, abstraction, cross-platform compatibility"},{key:"Downsides",description:"Memory overhead, complexity, not always faster than direct DOM"}]},g=C=>{d(k=>({...k,[C]:!k[C]}))},j=()=>{switch(o){case"block":return e.jsx(om,{showVisualExamples:m,setShowVisualExamples:x});case"equals":return e.jsx(cm,{showVisualExamples:m,setShowVisualExamples:x});case"stateProps":return e.jsx(mm,{showVisualExamples:m,setShowVisualExamples:x});case"nullUndefined":return e.jsx(um,{showVisualExamples:m,setShowVisualExamples:x});case"mapObject":return e.jsx(Ep,{showVisualExamples:m,setShowVisualExamples:x});case"dataTypes":return e.jsx(Fp,{showVisualExamples:m,setShowVisualExamples:x});case"stylingSVG":return e.jsx(Pp,{showVisualExamples:m,setShowVisualExamples:x});case"callApply":return e.jsx(kp,{showVisualExamples:m,setShowVisualExamples:x});case"proxies":return e.jsx(Tp,{showVisualExamples:m,setShowVisualExamples:x});case"callbacks":return e.jsx(Op,{showVisualExamples:m,setShowVisualExamples:x});case"microtask":return e.jsx(Rp,{showVisualExamples:m,setShowVisualExamples:x});case"caching":return e.jsx(Hp,{showVisualExamples:m,setShowVisualExamples:x});case"csp":return e.jsx(Ap,{showVisualExamples:m,setShowVisualExamples:x});case"csrf":return e.jsx(Mp,{showVisualExamples:m,setShowVisualExamples:x});case"debounceThrottle":return e.jsx(Ip,{showVisualExamples:m,setShowVisualExamples:x});case"boxModel":return e.jsx(Dp,{showVisualExamples:m,setShowVisualExamples:x});case"boxSizing":return e.jsx(_p,{showVisualExamples:m,setShowVisualExamples:x});case"cssDisplay":return e.jsx(Lp,{showVisualExamples:m,setShowVisualExamples:x});case"positioning":return e.jsx(Up,{showVisualExamples:m,setShowVisualExamples:x});case"react":return e.jsx(zp,{showVisualExamples:m,setShowVisualExamples:x});case"letVarConst":return e.jsx(Bp,{showVisualExamples:m,setShowVisualExamples:x});case"eventDelegation":return e.jsx(Wp,{showVisualExamples:m,setShowVisualExamples:x});case"reactKeyProp":return e.jsx(qp,{showVisualExamples:m,setShowVisualExamples:x});case"clientStorage":return e.jsx(Vp,{showVisualExamples:m,setShowVisualExamples:x});case"scriptAsyncDefer":return e.jsx(Gp,{showVisualExamples:m,setShowVisualExamples:x});case"reactHooksBenefits":return e.jsx(Kp,{showVisualExamples:m,setShowVisualExamples:x});case"cssHeadScriptBody":return e.jsx(Yp,{showVisualExamples:m,setShowVisualExamples:x});case"cssFlexboxGrid":return e.jsx(Jp,{showVisualExamples:m,setShowVisualExamples:x});case"reactHooksRules":return e.jsx($p,{showVisualExamples:m,setShowVisualExamples:x});case"functionBind":return e.jsx(Xp,{showVisualExamples:m,setShowVisualExamples:x});case"arrowMethods":return e.jsx(Qp,{showVisualExamples:m,setShowVisualExamples:x});case"prototypalInheritance":return e.jsx(Zp,{showVisualExamples:m,setShowVisualExamples:x});case"functionDeclaration":return e.jsx(ef,{showVisualExamples:m,setShowVisualExamples:x});case"closures":return e.jsx(tf,{showVisualExamples:m,setShowVisualExamples:x});case"anonymousFunctions":return e.jsx(sf,{showVisualExamples:m,setShowVisualExamples:x});case"objectCreation":return e.jsx(rf,{showVisualExamples:m,setShowVisualExamples:x});case"higherOrderFunctions":return e.jsx(nf,{showVisualExamples:m,setShowVisualExamples:x});case"eventBubbling":return e.jsx(af,{showVisualExamples:m,setShowVisualExamples:x});case"eventCapturing":return e.jsx(lf,{showVisualExamples:m,setShowVisualExamples:x});case"syncAsync":return e.jsx(df,{showVisualExamples:m,setShowVisualExamples:x});case"promisesCallbacks":return e.jsx(of,{showVisualExamples:m,setShowVisualExamples:x});case"closuresFunctional":return e.jsx(ff,{showVisualExamples:m,setShowVisualExamples:x});case"promisesCallbacksComp":return e.jsx(cf,{showVisualExamples:m,setShowVisualExamples:x});case"reactContextPerf":return e.jsx(mf,{showVisualExamples:m,setShowVisualExamples:x});case"asyncDataLoading":return e.jsx(uf,{showVisualExamples:m,setShowVisualExamples:x});case"stateManagement":return e.jsx(xf,{showVisualExamples:m,setShowVisualExamples:x});case"cssSpecificity":return e.jsx(hf,{showVisualExamples:m,setShowVisualExamples:x});case"hoisting":return e.jsx(pf,{showVisualExamples:m,setShowVisualExamples:x});case"eventLoop":return e.jsx(vf,{showVisualExamples:m,setShowVisualExamples:x});case"thisKeyword":return e.jsx(bf,{showVisualExamples:m,setShowVisualExamples:x});case"cssMatching":return e.jsx(gf,{showVisualExamples:m,setShowVisualExamples:x});case"translateVsPositioning":return e.jsx(jf,{showVisualExamples:m,setShowVisualExamples:x});case"reactReRendering":return e.jsx(yf,{showVisualExamples:m,setShowVisualExamples:x});case"es5VsEs6Classes":return e.jsx(Nf,{showVisualExamples:m,setShowVisualExamples:x});case"virtualDomBasics":return e.jsx(wf,{showVisualExamples:m,setShowVisualExamples:x});case"virtualDomAdvanced":return e.jsx(Cf,{showVisualExamples:m,setShowVisualExamples:x});case"experience":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Professional Experience:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Senior Front-end Developer"}),e.jsx("div",{className:"text-xs sm:text-sm",children:"Company Name • 2021-Present"}),e.jsx("div",{className:"mt-2 text-xs sm:text-sm",children:"Building scalable web applications with modern technologies"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Front-end Developer"}),e.jsx("div",{className:"text-xs sm:text-sm",children:"Previous Company • 2019-2021"}),e.jsx("div",{className:"mt-2 text-xs sm:text-sm",children:"Developed responsive user interfaces"})]})]})]});case"skills":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Technical Skills:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{className:"text-[#43d9ad]",children:"Languages:"}),e.jsx("div",{className:"pl-4",children:"JavaScript, TypeScript, HTML, CSS"}),e.jsx("div",{className:"text-[#43d9ad] mt-3",children:"Frameworks:"}),e.jsx("div",{className:"pl-4",children:"React, Next.js, Vue.js, Tailwind CSS"}),e.jsx("div",{className:"text-[#43d9ad] mt-3",children:"Tools:"}),e.jsx("div",{className:"pl-4",children:"Git, Webpack, Vite, Figma"})]})]});case"sports":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Sports & Activities:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Football"}),e.jsx("div",{children:"• Swimming"}),e.jsx("div",{children:"• Cycling"})]})]});case"music":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Music Preferences:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Electronic Music"}),e.jsx("div",{children:"• Rock & Alternative"}),e.jsx("div",{children:"• Lo-fi & Ambient"})]})]});case"reading":return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg",children:"Reading List:"}),e.jsxs("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base space-y-2",children:[e.jsx("div",{children:"• Technical Books & Documentation"}),e.jsx("div",{children:"• Science Fiction"}),e.jsx("div",{children:"• Philosophy"})]})]});default:return null}};return e.jsxs("div",{className:"flex flex-col lg:flex-row h-full",children:[e.jsxs("aside",{className:"w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto",children:[e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg sm:text-xl",children:"Great Front Ends"})}),e.jsx("div",{className:"mb-3",children:e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Quiz"})}),e.jsx("a",{href:"https://www.greatfrontend.com/questions/quiz",target:"_blank",rel:"noopener noreferrer",className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#43d9ad] text-xs sm:text-sm hover:text-[#fea55f] transition-colors",children:"greatfrontend.com/questions/quiz →"})]}),e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>g("whatsTheDiff"),children:[i.whatsTheDiff?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 Whats the Diff"]}),i.whatsTheDiff&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:Sf.map(C=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===C.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(C.id),children:[C.icon," ",C.label]},C.id))})]}),e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>g("professionalInfo"),children:[i.professionalInfo?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 professional-info"]}),i.professionalInfo&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:kf.map(C=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===C.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(C.id),children:[C.icon," ",C.label]},C.id))})]}),e.jsxs("div",{className:"p-4",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>g("hobbies"),children:[i.hobbies?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 hobbies"]}),i.hobbies&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:Ef.map(C=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===C.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(C.id),children:[C.icon," ",C.label]},C.id))})]})]}),e.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[e.jsx("div",{className:"flex-1 border-r border-[#1e2d3d] overflow-auto",children:e.jsx("div",{className:"p-4 sm:p-8 lg:p-12",children:j()})}),e.jsx(hl,{className:"hidden xl:block w-80 p-6 overflow-auto border-l border-[#1e2d3d]",caption:"// context",memoryAid:f[o]||[]})]})]})},Pf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"Design Patterns — Front-End System Concepts"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"I. Rendering and Architecture"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-2 text-[#9fb0c7]",children:"Web Rendering Strategies"}),e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-[#43d9ad] text-left",children:[e.jsx("th",{className:"pb-2",children:"Strategy"}),e.jsx("th",{className:"pb-2",children:"Description"}),e.jsx("th",{className:"pb-2",children:"Benefit"})]})}),e.jsxs("tbody",{className:"text-[#e5e9f0]",children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Static Site Generation (SSG)"}),e.jsx("td",{children:"Page is pre-built at compile time."}),e.jsx("td",{children:"Fastest load performance."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Incremental Static Regeneration (ISR)"}),e.jsx("td",{children:"Updates static pages on demand without a full rebuild."}),e.jsx("td",{children:"Combines speed with fresh content."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Server Side Rendering (SSR)"}),e.jsx("td",{children:"Page is generated on each request."}),e.jsx("td",{children:"Best for dynamic content."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Client Side Rendering (CSR)"}),e.jsx("td",{children:"Loads blank HTML, then fetches data and compiles JS on the client."}),e.jsx("td",{children:"Common for single-page applications."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Partial Pre-rendering"}),e.jsx("td",{children:"Mixes pre-rendered (static) and dynamic content on the same page."}),e.jsx("td",{children:"Performance optimization for hybrid pages."})]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"2. Micro Frontends"}),e.jsx("div",{className:"text-[#e5e9f0]",children:"Splits a large application into smaller, independent, and deployable pieces."}),e.jsx("div",{className:"text-[#9fb0c7] mt-2",children:"Purpose: To improve scalability, reduce deployment risk, and allow different teams to work independently."}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Tooling: Often implemented using Module Federation (Webpack 5) to dynamically load different micro-applications."})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"II. Performance Optimization"}),e.jsxs("div",{className:"text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 font-medium",children:"3. Measuring Rendering Performance"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Before optimizing, you must identify bottlenecks:"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7] mt-2",children:[e.jsx("li",{children:"Chrome Dev Tools: Track metrics like First Contentful Paint and Time to Interactive."}),e.jsx("li",{children:"React Dev Tools Profiler: Identify components that re-render excessively."}),e.jsx("li",{children:"Lighthouse/WebPageTest: Provide comprehensive performance breakdowns across devices and networks."})]}),e.jsx("div",{className:"mt-3 mb-2 font-medium",children:"4. Preventing Unnecessary Re-renders"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"A major performance killer, often addressed in React using memorization hooks:"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7] mt-2",children:[e.jsx("li",{children:"React.memo: Memorizes a component to only re-render if its props change."}),e.jsx("li",{children:"useCallback: Memorizes functions to prevent unnecessary recreation on re-renders."}),e.jsx("li",{children:"useMemo: Caches expensive calculations to avoid re-computing them."})]}),e.jsx("div",{className:"mt-3 mb-2 font-medium",children:"5. Lazy Loading"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Defers loading of components or resources until they are actually needed by the user. Benefit: Reduces the initial JavaScript bundle size, speeding up the initial page load time."}),e.jsx("div",{className:"mt-3 mb-2 font-medium",children:"6. Extra Performance Improvements"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Reduce bundle size using Tree Shaking (to remove unused code) and Bundle Splitting. Use Skeleton Screens or Spinners to improve perceived responsiveness. Ensure full optimization for mobile devices and accessibility standards."})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"III. API Optimization and Caching"}),e.jsxs("ul",{className:"list-disc pl-5 text-[#9fb0c7] space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"7. Client-Side Caching with State Management"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Reduces repetitive GET requests to the back-end by storing data in the client-side cache (State Management or local storage). When a mutation (like DELETE or UPDATE) occurs, the local cache is modified immediately, avoiding an immediate follow-up GET request."})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"8. Data Expiration and Query Invalidation"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Addresses the issue of stale data in the cache. Libraries like React Query allow you to set a staleTime or expiration time, which automatically triggers a data refresh from the API when the cache expires or is considered stale."})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"9. GraphQL"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"A query language that helps reduce over-fetching. Clients can specify the exact data fields they need (e.g., only name and price), minimizing the payload size returned by the server. GraphQL clients (like Apollo) also often include in-memory caching capabilities."})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"10. Rate Limiting (Debounce/Throttle)"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Limits the number of API calls made by the client. Debounce: Waits until the user finishes triggering an event (e.g., stops typing in a search bar) for a set period before executing the API call, dramatically reducing requests."})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"IV. Data Retrieval Efficiency"}),e.jsxs("div",{className:"text-[#e5e9f0]",children:[e.jsx("div",{className:"mb-2 font-medium",children:"11. Filtering and Pagination"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"Essential for reducing the overall volume of data transferred between the server and the client."}),e.jsx("div",{className:"mt-3 mb-2 font-medium",children:"12. Offset Pagination"}),e.jsx("div",{className:"text-[#9fb0c7]",children:"The most common approach, using the current page number and page size, typically implemented with SQL's OFFSET and LIMIT."}),e.jsxs("div",{className:"text-[#9fb0c7] mt-1",children:[e.jsx("strong",{children:"Pros:"})," Allows users to jump to any specific page."]}),e.jsxs("div",{className:"text-[#9fb0c7]",children:[e.jsx("strong",{children:"Cons:"})," Unstable. If a record is added or deleted on a previous page, the content of subsequent pages will shift, leading to duplicated or missed items."]}),e.jsx("div",{className:"mt-3 mb-2 font-medium",children:"13. Cursor Pagination"}),e.jsx("div",{className:"text-[#9fb0c7]",children:'Uses a sequential, unique identifier (the "cursor," e.g., an ID or timestamp) of the last item viewed to fetch the next set of results.'}),e.jsxs("div",{className:"text-[#9fb0c7] mt-1",children:[e.jsx("strong",{children:"Pros:"})," Highly stable, as additions/deletions don't affect the pagination window. It's more efficient for the database as it jumps directly to the record."]}),e.jsxs("div",{className:"text-[#9fb0c7]",children:[e.jsx("strong",{children:"Cons:"})," Does not allow users to jump to arbitrary page numbers."]})]})]})]}):e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] text-[#607b96] text-sm space-y-6",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsx("pre",{className:"whitespace-pre-wrap",children:`I. Rendering and Architecture 1. Web Rendering Strategies The choice of rendering strategy dictates application performance. | Strategy | Description | Benefit | | Static Site Generation (SSG) | Page is pre-built at compile time. | Fastest load performance. | | Incremental Static Regeneration (ISR) | Updates static pages on demand without a full rebuild. | Combines speed with fresh content. | | Server Side Rendering (SSR) | Page is generated on each request. | Best for dynamic content. | | Client Side Rendering (CSR) | Loads blank HTML, then fetches data and compiles JS on the client. | Common for single-page applications. | | Partial Pre-rendering | Mixes pre-rendered (static) and dynamic content on the same page. | Performance optimization for hybrid pages. | 2. Micro Frontends Splits a large application into smaller, independent, and deployable pieces. Purpose: To improve scalability, reduce deployment risk, and allow different teams to work independently. Tooling: Often implemented using Module Federation (Webpack 5) to dynamically load different micro-applications. II. Performance Optimization 3. Measuring Rendering Performance Before optimizing, you must identify bottlenecks: Chrome Dev Tools: Track metrics like First Contentful Paint and Time to Interactive. React Dev Tools Profiler: Identify components that re-render excessively. Lighthouse/WebPageTest: Provide comprehensive performance breakdowns across devices and networks. 4. Preventing Unnecessary Re-renders A major performance killer, often addressed in React using memorization hooks: React.memo: Memorizes a component to only re-render if its props change. useCallback: Memorizes functions to prevent unnecessary recreation on re-renders. useMemo: Caches expensive calculations to avoid re-computing them. 5. Lazy Loading Defers loading of components or resources until they are actually needed by the user. Benefit: Reduces the initial JavaScript bundle size, speeding up the initial page load time. 6. Extra Performance Improvements Reduce bundle size using Tree Shaking (to remove unused code) and Bundle Splitting. Use Skeleton Screens or Spinners to improve perceived responsiveness. Ensure full optimization for mobile devices and accessibility standards. III. API Optimization and Caching 7. Client-Side Caching with State Management Reduces repetitive GET requests to the back-end by storing data in the client-side cache (State Management or local storage). When a mutation (like DELETE or UPDATE) occurs, the local cache is modified immediately, avoiding an immediate follow-up GET request. 8. Data Expiration and Query Invalidation Addresses the issue of stale data in the cache. Libraries like React Query allow you to set a staleTime or expiration time, which automatically triggers a data refresh from the API when the cache expires or is considered stale. 9. GraphQL A query language that helps reduce over-fetching. Clients can specify the exact data fields they need (e.g., only name and price), minimizing the payload size returned by the server. GraphQL clients (like Apollo) also often include in-memory caching capabilities. 10. Rate Limiting (Debounce/Throttle) Limits the number of API calls made by the client. Debounce: Waits until the user finishes triggering an event (e.g., stops typing in a search bar) for a set period before executing the API call, dramatically reducing requests. IV. Data Retrieval Efficiency 11. Filtering and Pagination Essential for reducing the overall volume of data transferred between the server and the client. 12. Offset Pagination The most common approach, using the current page number and page size, typically implemented with SQL's OFFSET and LIMIT. Pros: Allows users to jump to any specific page. Cons: Unstable. If a record is added or deleted on a previous page, the content of subsequent pages will shift, leading to duplicated or missed items. 13. Cursor Pagination Uses a sequential, unique identifier (the "cursor," e.g., an ID or timestamp) of the last item viewed to fetch the next set of results. Pros: Highly stable, as additions/deletions don't affect the pagination window. It's more efficient for the database as it jumps directly to the record. Cons: Does not allow users to jump to arbitrary page numbers.`})})})]}),Tf=({showVisualExamples:i,setShowVisualExamples:d})=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-lg",children:"JavaScript Design Patterns & Idioms"}),e.jsx(M,{variant:"ghost",onClick:()=>d(!i),className:"text-[#607b96] hover:text-[#43d9ad] text-sm",children:i?"Show Original":"Show Visual Examples"})]}),i?e.jsxs("div",{className:"space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"I. Singleton Pattern"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Single instance of an object throughout the application"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`class Singleton {
  static instance = null;
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // true`})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"II. Factory Pattern"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Create objects without specifying exact classes"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`function createUser(type) {
  if (type === 'admin') {
    return { role: 'admin', permissions: ['all'] };
  } else if (type === 'user') {
    return { role: 'user', permissions: ['read'] };
  }
}

const admin = createUser('admin');
const user = createUser('user');`})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"III. Observer Pattern"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Notify multiple objects about state changes"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(data));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('click', () => console.log('Clicked!'));
emitter.emit('click'); // 'Clicked!'`})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"IV. Module Pattern"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Encapsulation with private & public methods"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`const calculator = (() => {
  // Private
  const add = (a, b) => a + b;
  
  // Public
  return {
    subtract: (a, b) => a - b,
    sum: (...nums) => nums.reduce(add, 0)
  };
})();

console.log(calculator.sum(1, 2, 3)); // 6
console.log(calculator.add(1, 2)); // Error: not accessible`})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"V. Debounce & Throttle"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Control function execution frequency"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`// Debounce: Execute after delay
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

// Throttle: Execute at most once per interval
const throttle = (fn, interval) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      fn(...args);
      lastCall = now;
    }
  };
};`})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#43d9ad] mb-2 font-medium",children:"VI. Memoization Pattern"}),e.jsxs("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:[e.jsx("div",{className:"mb-3 text-[#9fb0c7]",children:"Cache expensive function results"}),e.jsx("pre",{className:"text-[#e5e9f0] text-xs",children:`const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

const fibonacci = memoize((n) => 
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
);

console.log(fibonacci(10)); // Much faster on repeat calls`})]})]})]}):e.jsx("div",{className:"space-y-6 [font-family:'Fira_Code',Helvetica] text-sm text-[#607b96]",children:e.jsx("div",{className:"bg-[#011221] p-4 rounded border border-[#1e2d3d]",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-[#43d9ad]",children:[e.jsx("th",{className:"text-left pb-3",children:"Pattern"}),e.jsx("th",{className:"text-left pb-3",children:"Purpose"}),e.jsx("th",{className:"text-left pb-3",children:"Use Case"})]})}),e.jsxs("tbody",{className:"text-[#e5e9f0]",children:[e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Singleton"}),e.jsx("td",{className:"py-2 pr-2",children:"Single instance"}),e.jsx("td",{className:"py-2",children:"Logger, database connection"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Factory"}),e.jsx("td",{className:"py-2 pr-2",children:"Object creation"}),e.jsx("td",{className:"py-2",children:"User roles, component types"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Observer"}),e.jsx("td",{className:"py-2 pr-2",children:"Publish-subscribe"}),e.jsx("td",{className:"py-2",children:"Event systems, state changes"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Module"}),e.jsx("td",{className:"py-2 pr-2",children:"Encapsulation"}),e.jsx("td",{className:"py-2",children:"Private/public methods"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Debounce"}),e.jsx("td",{className:"py-2 pr-2",children:"Delay execution"}),e.jsx("td",{className:"py-2",children:"Search input, resize handlers"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Throttle"}),e.jsx("td",{className:"py-2 pr-2",children:"Limit frequency"}),e.jsx("td",{className:"py-2",children:"Scroll events, API calls"})]}),e.jsxs("tr",{className:"border-t border-[#1e2d3d]",children:[e.jsx("td",{className:"py-2 pr-2",children:"Memoization"}),e.jsx("td",{className:"py-2 pr-2",children:"Cache results"}),e.jsx("td",{className:"py-2",children:"Expensive computations"})]})]})]})})})]}),Of=[{id:"fe-patterns",label:"Language basics",icon:"📘"},{id:"design-patterns",label:"Design Patterns",icon:"🧩"},{id:"js-patterns",label:"JavaScript Patterns",icon:"⚙️"},{id:"react",label:"React patterns",icon:"⚛️"},{id:"performance",label:"Performance",icon:"🚀"}],Rf=()=>{const[i,d]=R.useState(!0),[o,u]=R.useState("fe-patterns"),[m,x]=R.useState({"fe-patterns":!0,"design-patterns":!0,"js-patterns":!0,react:!0,performance:!0});R.useEffect(()=>{const g=localStorage.getItem("theory-visuals");if(g)try{x(JSON.parse(g))}catch{}},[]);const f=g=>j=>{const C=typeof j=="function"?j(m[g]):j,k={...m,[g]:C};x(k),localStorage.setItem("theory-visuals",JSON.stringify(k))};return e.jsxs("div",{className:"flex flex-col lg:flex-row h-full",children:[e.jsx("aside",{className:"w-full lg:w-80 border-r border-[#1e2d3d] flex flex-col overflow-auto",children:e.jsxs("div",{className:"p-4 border-b border-[#1e2d3d]",children:[e.jsxs(M,{variant:"ghost",className:"w-full justify-start px-2 text-white [font-family:'Fira_Code',Helvetica] font-normal text-sm sm:text-base",onClick:()=>d(!i),children:[i?e.jsx(bs,{className:"w-4 h-4 mr-2"}):e.jsx(gs,{className:"w-4 h-4 mr-2"}),"📁 theory-topics"]}),i&&e.jsx("div",{className:"ml-6 mt-2 space-y-1",children:Of.map(g=>e.jsxs(M,{variant:"ghost",className:`w-full justify-start px-2 [font-family:'Fira_Code',Helvetica] font-normal text-xs sm:text-sm ${o===g.id?"text-white bg-[#1e2d3d]":"text-[#607b96]"}`,onClick:()=>u(g.id),children:[g.icon," ",g.label]},g.id))})]})}),e.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[e.jsx("div",{className:"flex-1 border-r border-[#1e2d3d] overflow-auto",children:e.jsxs("div",{className:"p-4 sm:p-8 lg:p-12",children:[o==="fe-patterns"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2",children:"Language fe-patterns"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Short explanations and examples for core JavaScript concepts."})]}),e.jsx(om,{showVisualExamples:m["fe-patterns"],setShowVisualExamples:f("fe-patterns")})]}),o==="design-patterns"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2",children:"Design Patterns"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Key front-end system design concepts and strategies."})]}),e.jsx(Pf,{showVisualExamples:m["design-patterns"],setShowVisualExamples:f("design-patterns")})]}),o==="js-patterns"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2",children:"JavaScript Patterns"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Common design patterns and idioms in JavaScript."})]}),e.jsx(Tf,{showVisualExamples:m["js-patterns"],setShowVisualExamples:f("js-patterns")})]}),o==="react"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2",children:"React patterns"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Component patterns, state management and best practices."})]}),e.jsx(mm,{showVisualExamples:m.react,setShowVisualExamples:f("react")})]}),o==="performance"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-base sm:text-lg mb-2",children:"Performance"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Guidelines for profiling, optimizing rendering and network usage."})]}),e.jsx(cm,{showVisualExamples:m.performance,setShowVisualExamples:f("performance")}),e.jsx(um,{showVisualExamples:m.performance,setShowVisualExamples:f("performance")})]})]})}),e.jsx(hl,{className:"hidden xl:block w-80 p-6 overflow-auto",caption:"// Example",code:"// small snippet\nconst greeting = (name) => `Hello ${name}`;"})]})]})},Hf=()=>e.jsx("div",{className:"flex items-center justify-center h-full p-6 sm:p-12",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#e5e9f0] text-2xl sm:text-3xl md:text-4xl mb-4",children:"Contact Me"}),e.jsx("p",{className:"[font-family:'Fira_Code',Helvetica] font-normal text-[#607b96] text-sm sm:text-base",children:"Coming soon..."})]})}),Mc=document.getElementById("app");if(Mc){const i=e.jsx(R.StrictMode,{children:e.jsx(bh,{children:e.jsxs(mh,{children:[e.jsx(Ks,{path:"/",element:e.jsx(Lr,{children:e.jsx(bp,{})})}),e.jsx(Ks,{path:"/about",element:e.jsx(Lr,{children:e.jsx(Sp,{})})}),e.jsx(Ks,{path:"/projects",element:e.jsx(Lr,{children:e.jsx(Ff,{})})}),e.jsx(Ks,{path:"/theory",element:e.jsx(Lr,{children:e.jsx(Rf,{})})}),e.jsx(Ks,{path:"/contact",element:e.jsx(Lr,{children:e.jsx(Hf,{})})})]})})});bx.createRoot(Mc).render(i)}
