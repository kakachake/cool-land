import{R as W,u as ye,r as m,j,g as je,a as we,c as M,b as se,d as Te,i as Oe,e as xe}from"./index-133b59ef.js";function ce(e=W){const t=e===W?ye:()=>m.useContext(e);return function(){const{store:r}=t();return r}}const Pe=ce();function Re(e=W){const t=e===W?Pe:ce(e);return function(){return t().dispatch}}const $e=Re(),Se=e=>j.jsx("h4",{children:e.title}),ee=Se;function Ee(e){return typeof e=="number"}var A=(e=>(e.DEVELOPMENT="DEVELOPMENT",e.PRODUCTION="PRODUCTION",e))(A||{}),J={exports:{}};const Ce={},_e=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),X=je(_e),De="dotenv",Ae="16.0.3",Ne="Loads environment variables from .env file",Fe="lib/main.js",Me="lib/main.d.ts",Le={".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},Be={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},We={type:"git",url:"git://github.com/motdotla/dotenv.git"},He=["dotenv","env",".env","environment","variables","config","settings"],ke="README.md",Ue="BSD-2-Clause",Ie={"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},Ge={node:">=12"},ze={name:De,version:Ae,description:Ne,main:Fe,types:Me,exports:Le,scripts:Be,repository:We,keywords:He,readmeFilename:ke,license:Ue,devDependencies:Ie,engines:Ge},Ve=X,le=X,qe=X,Je=ze,Xe=Je.version,Qe=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Ke(e){const t={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=Qe.exec(n))!=null;){const o=r[1];let i=r[2]||"";i=i.trim();const u=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),u==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),t[o]=i}return t}function G(e){console.log(`[dotenv@${Xe}][DEBUG] ${e}`)}function Ye(e){return e[0]==="~"?le.join(qe.homedir(),e.slice(1)):e}function Ze(e){let t=le.resolve(process.cwd(),".env"),n="utf8";const r=!!(e&&e.debug),o=!!(e&&e.override);e&&(e.path!=null&&(t=Ye(e.path)),e.encoding!=null&&(n=e.encoding));try{const i=H.parse(Ve.readFileSync(t,{encoding:n}));return Object.keys(i).forEach(function(u){Object.prototype.hasOwnProperty.call(process.env,u)?(o===!0&&(process.env[u]=i[u]),r&&G(o===!0?`"${u}" is already defined in \`process.env\` and WAS overwritten`:`"${u}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[u]=i[u]}),{parsed:i}}catch(i){return r&&G(`Failed to load ${t} ${i.message}`),{error:i}}}const H={config:Ze,parse:Ke};J.exports.config=H.config;J.exports.parse=H.parse;J.exports=H;const en=()=>{var n;if(typeof process>"u")return;const e=(n=process==null?void 0:process.env)==null?void 0:n.NODE_ENV;return typeof e>"u"&&console.warn(`
> ENV is not set, fallback to ${A.DEVELOPMENT}.`),`${e}`.toUpperCase()===A.PRODUCTION?A.PRODUCTION:A.DEVELOPMENT};en();const nn="_container_mb3w2_1",tn={container:nn},rn=$e,on=we;var an=function(e){return function(t,n){var r=m.useRef(!1);e(function(){return function(){r.current=!1}},[]),e(function(){if(!r.current)r.current=!0;else return t()},n)}},x=function(){return x=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},x.apply(this,arguments)};function fe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function un(e,t,n,r){function o(i){return i instanceof n?i:new n(function(u){u(i)})}return new(n||(n=Promise))(function(i,u){function s(l){try{a(r.next(l))}catch(f){u(f)}}function c(l){try{a(r.throw(l))}catch(f){u(f)}}function a(l){l.done?i(l.value):o(l.value).then(s,c)}a((r=r.apply(e,t||[])).next())})}function sn(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(a){return function(l){return c([a,l])}}function c(a){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(n=0)),n;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=t.call(e,n)}catch(l){a=[6,l],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function b(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){u={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return i}function y(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var k=function(e){return typeof e=="function"},cn=!1;const U=cn;function E(e){U&&(k(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=m.useRef(e);t.current=m.useMemo(function(){return e},[e]);var n=m.useRef();return n.current||(n.current=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return t.current.apply(this,r)}),n.current}const q=an(m.useEffect);var de=function(e,t){var n=t.manual,r=t.ready,o=r===void 0?!0:r,i=t.defaultParams,u=i===void 0?[]:i,s=t.refreshDeps,c=s===void 0?[]:s,a=t.refreshDepsAction,l=m.useRef(!1);return l.current=!1,q(function(){!n&&o&&(l.current=!0,e.run.apply(e,y([],b(u),!1)))},[o]),q(function(){l.current||n||(l.current=!0,a?a():e.refresh())},y([],b(c),!1)),{onBefore:function(){if(!o)return{stopNow:!0}}}};de.onInit=function(e){var t=e.ready,n=t===void 0?!0:t,r=e.manual;return{loading:!r&&n}};const ln=de;function fn(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}function ve(e,t){var n=m.useRef({deps:t,obj:void 0,initialized:!1}).current;return(n.initialized===!1||!fn(n.deps,t))&&(n.deps=t,n.obj=e(),n.initialized=!0),n.obj}function me(e){var t=m.useRef(e);return t.current=e,t}var dn=function(e){U&&(k(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=me(e);m.useEffect(function(){return function(){t.current()}},[])};const Q=dn;var L=new Map,vn=function(e,t,n){var r=L.get(e);r!=null&&r.timer&&clearTimeout(r.timer);var o=void 0;t>-1&&(o=setTimeout(function(){L.delete(e)},t)),L.set(e,x(x({},n),{timer:o}))},mn=function(e){return L.get(e)},B=new Map,pn=function(e){return B.get(e)},gn=function(e,t){B.set(e,t),t.then(function(n){return B.delete(e),n}).catch(function(){B.delete(e)})},$={},hn=function(e,t){$[e]&&$[e].forEach(function(n){return n(t)})},z=function(e,t){return $[e]||($[e]=[]),$[e].push(t),function(){var r=$[e].indexOf(t);$[e].splice(r,1)}},bn=function(e,t){var n=t.cacheKey,r=t.cacheTime,o=r===void 0?5*60*1e3:r,i=t.staleTime,u=i===void 0?0:i,s=t.setCache,c=t.getCache,a=m.useRef(),l=m.useRef(),f=function(d,v){s?s(v):vn(d,o,v),hn(d,v.data)},g=function(d,v){return v===void 0&&(v=[]),c?c(v):mn(d)};return ve(function(){if(n){var d=g(n);d&&Object.hasOwnProperty.call(d,"data")&&(e.state.data=d.data,e.state.params=d.params,(u===-1||new Date().getTime()-d.time<=u)&&(e.state.loading=!1)),a.current=z(n,function(v){e.setState({data:v})})}},[]),Q(function(){var d;(d=a.current)===null||d===void 0||d.call(a)}),n?{onBefore:function(d){var v=g(n,d);return!v||!Object.hasOwnProperty.call(v,"data")?{}:u===-1||new Date().getTime()-v.time<=u?{loading:!1,data:v==null?void 0:v.data,error:void 0,returnNow:!0}:{data:v==null?void 0:v.data,error:void 0}},onRequest:function(d,v){var h=pn(n);return h&&h!==l.current?{servicePromise:h}:(h=d.apply(void 0,y([],b(v),!1)),l.current=h,gn(n,h),{servicePromise:h})},onSuccess:function(d,v){var h;n&&((h=a.current)===null||h===void 0||h.call(a),f(n,{data:d,params:v,time:new Date().getTime()}),a.current=z(n,function(R){e.setState({data:R})}))},onMutate:function(d){var v;n&&((v=a.current)===null||v===void 0||v.call(a),f(n,{data:d,params:e.state.params,time:new Date().getTime()}),a.current=z(n,function(h){e.setState({data:h})}))}}:{}};const yn=bn;function jn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var K=jn,wn=typeof M=="object"&&M&&M.Object===Object&&M,Tn=wn,On=Tn,xn=typeof self=="object"&&self&&self.Object===Object&&self,Pn=On||xn||Function("return this")(),pe=Pn,Rn=pe,$n=function(){return Rn.Date.now()},Sn=$n,En=/\s/;function Cn(e){for(var t=e.length;t--&&En.test(e.charAt(t)););return t}var _n=Cn,Dn=_n,An=/^\s+/;function Nn(e){return e&&e.slice(0,Dn(e)+1).replace(An,"")}var Fn=Nn,Mn=pe,Ln=Mn.Symbol,ge=Ln,ne=ge,he=Object.prototype,Bn=he.hasOwnProperty,Wn=he.toString,D=ne?ne.toStringTag:void 0;function Hn(e){var t=Bn.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch{}var o=Wn.call(e);return r&&(t?e[D]=n:delete e[D]),o}var kn=Hn,Un=Object.prototype,In=Un.toString;function Gn(e){return In.call(e)}var zn=Gn,te=ge,Vn=kn,qn=zn,Jn="[object Null]",Xn="[object Undefined]",re=te?te.toStringTag:void 0;function Qn(e){return e==null?e===void 0?Xn:Jn:re&&re in Object(e)?Vn(e):qn(e)}var Kn=Qn;function Yn(e){return e!=null&&typeof e=="object"}var Zn=Yn,et=Kn,nt=Zn,tt="[object Symbol]";function rt(e){return typeof e=="symbol"||nt(e)&&et(e)==tt}var it=rt,ot=Fn,ie=K,at=it,oe=0/0,ut=/^[-+]0x[0-9a-f]+$/i,st=/^0b[01]+$/i,ct=/^0o[0-7]+$/i,lt=parseInt;function ft(e){if(typeof e=="number")return e;if(at(e))return oe;if(ie(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ie(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ot(e);var n=st.test(e);return n||ct.test(e)?lt(e.slice(2),n?2:8):ut.test(e)?oe:+e}var dt=ft,vt=K,V=Sn,ae=dt,mt="Expected a function",pt=Math.max,gt=Math.min;function ht(e,t,n){var r,o,i,u,s,c,a=0,l=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(mt);t=ae(t)||0,vt(n)&&(l=!!n.leading,f="maxWait"in n,i=f?pt(ae(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g);function d(p){var T=r,O=o;return r=o=void 0,a=p,u=e.apply(O,T),u}function v(p){return a=p,s=setTimeout(P,t),l?d(p):u}function h(p){var T=p-c,O=p-a,Z=t-T;return f?gt(Z,i-O):Z}function R(p){var T=p-c,O=p-a;return c===void 0||T>=t||T<0||f&&O>=i}function P(){var p=V();if(R(p))return C(p);s=setTimeout(P,h(p))}function C(p){return s=void 0,g&&r?d(p):(r=o=void 0,u)}function _(){s!==void 0&&clearTimeout(s),a=0,r=c=o=s=void 0}function S(){return s===void 0?u:C(V())}function w(){var p=V(),T=R(p);if(r=arguments,o=this,c=p,T){if(s===void 0)return v(c);if(f)return clearTimeout(s),s=setTimeout(P,t),d(c)}return s===void 0&&(s=setTimeout(P,t)),u}return w.cancel=_,w.flush=S,w}var be=ht;const bt=se(be);var yt=function(e,t){var n=t.debounceWait,r=t.debounceLeading,o=t.debounceTrailing,i=t.debounceMaxWait,u=m.useRef(),s=m.useMemo(function(){var c={};return r!==void 0&&(c.leading=r),o!==void 0&&(c.trailing=o),i!==void 0&&(c.maxWait=i),c},[r,o,i]);return m.useEffect(function(){if(n){var c=e.runAsync.bind(e);return u.current=bt(function(a){a()},n,s),e.runAsync=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return new Promise(function(f,g){var d;(d=u.current)===null||d===void 0||d.call(u,function(){c.apply(void 0,y([],b(a),!1)).then(f).catch(g)})})},function(){var a;(a=u.current)===null||a===void 0||a.cancel(),e.runAsync=c}}},[n,s]),n?{onCancel:function(){var c;(c=u.current)===null||c===void 0||c.cancel()}}:{}};const jt=yt;var wt=function(e,t){var n=t.loadingDelay,r=t.ready,o=m.useRef();if(!n)return{};var i=function(){o.current&&clearTimeout(o.current)};return{onBefore:function(){return i(),r!==!1&&(o.current=setTimeout(function(){e.setState({loading:!0})},n)),{loading:!1}},onFinally:function(){i()},onCancel:function(){i()}}};const Tt=wt;var Ot=!!(typeof window<"u"&&window.document&&window.document.createElement);const I=Ot;function Y(){return I?document.visibilityState!=="hidden":!0}var N=[];function xt(e){return N.push(e),function(){var n=N.indexOf(e);N.splice(n,1)}}if(I){var Pt=function(){if(Y())for(var e=0;e<N.length;e++){var t=N[e];t()}};window.addEventListener("visibilitychange",Pt,!1)}var Rt=function(e,t){var n=t.pollingInterval,r=t.pollingWhenHidden,o=r===void 0?!0:r,i=t.pollingErrorRetryCount,u=i===void 0?-1:i,s=m.useRef(),c=m.useRef(),a=m.useRef(0),l=function(){var f;s.current&&clearTimeout(s.current),(f=c.current)===null||f===void 0||f.call(c)};return q(function(){n||l()},[n]),n?{onBefore:function(){l()},onError:function(){a.current+=1},onSuccess:function(){a.current=0},onFinally:function(){u===-1||u!==-1&&a.current<=u?s.current=setTimeout(function(){!o&&!Y()?c.current=xt(function(){e.refresh()}):e.refresh()},n):a.current=0},onCancel:function(){l()}}:{}};const $t=Rt;function St(e,t){var n=!1;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n||(n=!0,e.apply(void 0,y([],b(r),!1)),setTimeout(function(){n=!1},t))}}function Et(){return I&&typeof navigator.onLine<"u"?navigator.onLine:!0}var F=[];function Ct(e){return F.push(e),function(){var n=F.indexOf(e);n>-1&&F.splice(n,1)}}if(I){var ue=function(){if(!(!Y()||!Et()))for(var e=0;e<F.length;e++){var t=F[e];t()}};window.addEventListener("visibilitychange",ue,!1),window.addEventListener("focus",ue,!1)}var _t=function(e,t){var n=t.refreshOnWindowFocus,r=t.focusTimespan,o=r===void 0?5e3:r,i=m.useRef(),u=function(){var s;(s=i.current)===null||s===void 0||s.call(i)};return m.useEffect(function(){if(n){var s=St(e.refresh.bind(e),o);i.current=Ct(function(){s()})}return function(){u()}},[n,o]),Q(function(){u()}),{}};const Dt=_t;var At=function(e,t){var n=t.retryInterval,r=t.retryCount,o=m.useRef(),i=m.useRef(0),u=m.useRef(!1);return r?{onBefore:function(){u.current||(i.current=0),u.current=!1,o.current&&clearTimeout(o.current)},onSuccess:function(){i.current=0},onError:function(){if(i.current+=1,r===-1||i.current<=r){var s=n??Math.min(1e3*Math.pow(2,i.current),3e4);o.current=setTimeout(function(){u.current=!0,e.refresh()},s)}else i.current=0},onCancel:function(){i.current=0,o.current&&clearTimeout(o.current)}}:{}};const Nt=At;var Ft=be,Mt=K,Lt="Expected a function";function Bt(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Lt);return Mt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ft(e,t,{leading:r,maxWait:t,trailing:o})}var Wt=Bt;const Ht=se(Wt);var kt=function(e,t){var n=t.throttleWait,r=t.throttleLeading,o=t.throttleTrailing,i=m.useRef(),u={};return r!==void 0&&(u.leading=r),o!==void 0&&(u.trailing=o),m.useEffect(function(){if(n){var s=e.runAsync.bind(e);return i.current=Ht(function(c){c()},n,u),e.runAsync=function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];return new Promise(function(l,f){var g;(g=i.current)===null||g===void 0||g.call(i,function(){s.apply(void 0,y([],b(c),!1)).then(l).catch(f)})})},function(){var c;e.runAsync=s,(c=i.current)===null||c===void 0||c.cancel()}}},[n,r,o]),n?{onCancel:function(){var s;(s=i.current)===null||s===void 0||s.cancel()}}:{}};const Ut=kt;var It=function(e){U&&(k(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),m.useEffect(function(){e==null||e()},[])};const Gt=It;var zt=function(){var e=b(m.useState({}),2),t=e[1];return m.useCallback(function(){return t({})},[])};const Vt=zt;var qt=function(){function e(t,n,r,o){o===void 0&&(o={}),this.serviceRef=t,this.options=n,this.subscribe=r,this.initState=o,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=x(x(x({},this.state),{loading:!n.manual}),o)}return e.prototype.setState=function(t){t===void 0&&(t={}),this.state=x(x({},this.state),t),this.subscribe()},e.prototype.runPluginHandler=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this.pluginImpls.map(function(i){var u;return(u=i[t])===null||u===void 0?void 0:u.call.apply(u,y([i],b(n),!1))}).filter(Boolean);return Object.assign.apply(Object,y([{}],b(o),!1))},e.prototype.runAsync=function(){for(var t,n,r,o,i,u,s,c,a,l,f=[],g=0;g<arguments.length;g++)f[g]=arguments[g];return un(this,void 0,void 0,function(){var d,v,h,R,P,C,_,S,w,p,T;return sn(this,function(O){switch(O.label){case 0:if(this.count+=1,d=this.count,v=this.runPluginHandler("onBefore",f),h=v.stopNow,R=h===void 0?!1:h,P=v.returnNow,C=P===void 0?!1:P,_=fe(v,["stopNow","returnNow"]),R)return[2,new Promise(function(){})];if(this.setState(x({loading:!0,params:f},_)),C)return[2,Promise.resolve(_.data)];(n=(t=this.options).onBefore)===null||n===void 0||n.call(t,f),O.label=1;case 1:return O.trys.push([1,3,,4]),S=this.runPluginHandler("onRequest",this.serviceRef.current,f).servicePromise,S||(S=(T=this.serviceRef).current.apply(T,y([],b(f),!1))),[4,S];case 2:return w=O.sent(),d!==this.count?[2,new Promise(function(){})]:(this.setState({data:w,error:void 0,loading:!1}),(o=(r=this.options).onSuccess)===null||o===void 0||o.call(r,w,f),this.runPluginHandler("onSuccess",w,f),(u=(i=this.options).onFinally)===null||u===void 0||u.call(i,f,w,void 0),d===this.count&&this.runPluginHandler("onFinally",f,w,void 0),[2,w]);case 3:if(p=O.sent(),d!==this.count)return[2,new Promise(function(){})];throw this.setState({error:p,loading:!1}),(c=(s=this.options).onError)===null||c===void 0||c.call(s,p,f),this.runPluginHandler("onError",p,f),(l=(a=this.options).onFinally)===null||l===void 0||l.call(a,f,void 0,p),d===this.count&&this.runPluginHandler("onFinally",f,void 0,p),p;case 4:return[2]}})})},e.prototype.run=function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];this.runAsync.apply(this,y([],b(n),!1)).catch(function(o){t.options.onError||console.error(o)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,y([],b(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,y([],b(this.state.params||[]),!1))},e.prototype.mutate=function(t){var n=k(t)?t(this.state.data):t;this.runPluginHandler("onMutate",n),this.setState({data:n})},e}();const Jt=qt;function Xt(e,t,n){t===void 0&&(t={}),n===void 0&&(n=[]);var r=t.manual,o=r===void 0?!1:r,i=fe(t,["manual"]);U&&t.defaultParams&&!Array.isArray(t.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof t.defaultParams));var u=x({manual:o},i),s=me(e),c=Vt(),a=ve(function(){var l=n.map(function(f){var g;return(g=f==null?void 0:f.onInit)===null||g===void 0?void 0:g.call(f,u)}).filter(Boolean);return new Jt(s,u,c,Object.assign.apply(Object,y([{}],b(l),!1)))},[]);return a.options=u,a.pluginImpls=n.map(function(l){return l(a,u)}),Gt(function(){if(!o){var l=a.state.params||t.defaultParams||[];a.run.apply(a,y([],b(l),!1))}}),Q(function(){a.cancel()}),{loading:a.state.loading,data:a.state.data,error:a.state.error,params:a.state.params||[],cancel:E(a.cancel.bind(a)),refresh:E(a.refresh.bind(a)),refreshAsync:E(a.refreshAsync.bind(a)),run:E(a.run.bind(a)),runAsync:E(a.runAsync.bind(a)),mutate:E(a.mutate.bind(a))}}function Qt(e,t,n){return Xt(e,t,y(y([],b(n||[]),!1),[jt,Tt,$t,Dt,Ut,ln,yn,Nt],!1))}function Kt(){return Te({url:"/",method:"get"})}function Zt(){const e=on(o=>o.basic.value),t=rn(),{data:n,loading:r}=Qt(Kt,{});return j.jsxs("div",{className:tn.container,children:[j.jsx("h1",{children:"Home"}),j.jsxs("h2",{children:["欢迎来到",j.jsx("span",{children:"cool-land"})]}),j.jsx(ee,{title:"这是@cool-land/components组件库中渲染的组件"}),j.jsx(ee,{title:`这是从@cool-land/utils计算的结果（isNumber(1)）：${Ee(1)}`}),j.jsxs("div",{children:[j.jsx("button",{onClick:()=>t(Oe()),children:"count+"}),j.jsx("button",{onClick:()=>t(xe()),children:"count-"}),j.jsx("span",{children:e})]}),j.jsx("div",{children:r?j.jsx("div",{children:"loading..."}):j.jsx("div",{children:JSON.stringify(n)})})]})}export{Zt as default};
