var Xh={};/**
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
 */const Yf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xy=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,A=h&63;u||(A=64,o||(_=64)),n.push(t[f],t[p],t[_],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Yf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||p==null)throw new Ly;const _=s<<2|c>>4;if(n.push(_),h!==64){const A=c<<4&240|h>>2;if(n.push(A),p!==64){const k=h<<6&192|p;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ly extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(r){const e=Yf(r);return Xf.encodeByteArray(e,!0)},No=function(r){return My(r).replace(/\./g,"")},Iu=function(r){try{return Xf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vo(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Fy(t)||(r[t]=Vo(r[t],e[t]));return r}function Fy(r){return r!=="__proto__"}/**
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
 */function Uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const By=()=>Uy().__FIREBASE_DEFAULTS__,qy=()=>{if(typeof process>"u"||typeof Xh>"u")return;const r=Xh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$y=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Iu(r[1]);return e&&JSON.parse(e)},vu=()=>{try{return By()||qy()||$y()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Zf=()=>{var r;return(r=vu())===null||r===void 0?void 0:r.config},ep=r=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class jy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Gy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[No(JSON.stringify(t)),No(JSON.stringify(o)),""].join(".")}/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function wu(){var r;const e=(r=vu())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function np(){return typeof window<"u"||rp()}function rp(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Tu(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ia(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ip(){const r=ee();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function sp(){return!wu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zi(){try{return typeof indexedDB=="object"}catch{return!1}}function zy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ky="FirebaseError";class Le extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Ky,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wy(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Le(i,c,n)}}function Wy(r,e){return r.replace(Hy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Hy=/\{\$([^}]+)}/g;/**
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
 */function Zh(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Qy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function es(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(ed(s)&&ed(o)){if(!es(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function ed(r){return r!==null&&typeof r=="object"}/**
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
 */function Ot(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Rr(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Eu(r,e){const t=new Jy(r,e);return t.subscribe.bind(t)}class Jy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Yy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yy(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function fc(){}/**
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
 */function $(r){return r&&r._delegate?r._delegate:r}class ct{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class Xy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new jy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eI(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zy(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zy(r){return r===Rn?void 0:r}function eI(r){return r.instantiationMode==="EAGER"}/**
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
 */class op{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Au=[];var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const ap={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},tI=H.INFO,nI={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},rI=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=nI[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ws{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null,Au.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ap[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function iI(r){Au.forEach(e=>{e.setLogLevel(r)})}function sI(r,e){for(const t of Au){let n=null;e&&e.level&&(n=ap[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(n??i.logLevel)&&r({level:H[s].toLowerCase(),message:c,args:o,type:i.name})}}}const oI=(r,e)=>e.some(t=>r instanceof t);let td,nd;function aI(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cI(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,Nc=new WeakMap,up=new WeakMap,pc=new WeakMap,bu=new WeakMap;function uI(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(rn(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cp.set(t,r)}).catch(()=>{}),bu.set(e,r),e}function lI(r){if(Nc.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});Nc.set(r,e)}let Vc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Nc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||up.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function hI(r){Vc=r(Vc)}function dI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(mc(this),e,...t);return up.set(n,e.sort?e.sort():[e]),rn(n)}:cI().includes(r)?function(...e){return r.apply(mc(this),e),rn(cp.get(this))}:function(...e){return rn(r.apply(mc(this),e))}}function fI(r){return typeof r=="function"?dI(r):(r instanceof IDBTransaction&&lI(r),oI(r,aI())?new Proxy(r,Vc):r)}function rn(r){if(r instanceof IDBRequest)return uI(r);if(pc.has(r))return pc.get(r);const e=fI(r);return e!==r&&(pc.set(r,e),bu.set(e,r)),e}const mc=r=>bu.get(r);function pI(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=rn(o);return n&&o.addEventListener("upgradeneeded",u=>{n(rn(o.result),u.oldVersion,u.newVersion,rn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const mI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],gc=new Map;function rd(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=gI.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||mI.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return gc.set(e,s),s}hI(r=>({...r,get:(e,t,n)=>rd(e,t)||r.get(e,t,n),has:(e,t)=>!!rd(e,t)||r.has(e,t)}));/**
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
 */class _I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yI(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function yI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oo="@firebase/app",Oc="0.10.7";/**
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
 */const Bn=new ws("@firebase/app"),II="@firebase/app-compat",vI="@firebase/analytics-compat",wI="@firebase/analytics",TI="@firebase/app-check-compat",EI="@firebase/app-check",AI="@firebase/auth",bI="@firebase/auth-compat",RI="@firebase/database",PI="@firebase/database-compat",SI="@firebase/functions",CI="@firebase/functions-compat",kI="@firebase/installations",DI="@firebase/installations-compat",NI="@firebase/messaging",VI="@firebase/messaging-compat",OI="@firebase/performance",xI="@firebase/performance-compat",LI="@firebase/remote-config",MI="@firebase/remote-config-compat",FI="@firebase/storage",UI="@firebase/storage-compat",BI="@firebase/firestore",qI="@firebase/vertexai-preview",$I="@firebase/firestore-compat",jI="firebase",GI="10.12.4";/**
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
 */const on="[DEFAULT]",zI={[Oo]:"fire-core",[II]:"fire-core-compat",[wI]:"fire-analytics",[vI]:"fire-analytics-compat",[EI]:"fire-app-check",[TI]:"fire-app-check-compat",[AI]:"fire-auth",[bI]:"fire-auth-compat",[RI]:"fire-rtdb",[PI]:"fire-rtdb-compat",[SI]:"fire-fn",[CI]:"fire-fn-compat",[kI]:"fire-iid",[DI]:"fire-iid-compat",[NI]:"fire-fcm",[VI]:"fire-fcm-compat",[OI]:"fire-perf",[xI]:"fire-perf-compat",[LI]:"fire-rc",[MI]:"fire-rc-compat",[FI]:"fire-gcs",[UI]:"fire-gcs-compat",[BI]:"fire-fst",[$I]:"fire-fst-compat",[qI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const an=new Map,Vr=new Map,Or=new Map;function ts(r,e){try{r.container.addComponent(e)}catch(t){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function lp(r,e){r.container.addOrOverwriteComponent(e)}function It(r){const e=r.name;if(Or.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,r);for(const t of an.values())ts(t,r);for(const t of Vr.values())ts(t,r);return!0}function hp(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function KI(r,e,t=on){hp(r,e).clearInstance(t)}function dp(r){return r.options!==void 0}function ae(r){return r.settings!==void 0}function WI(){Or.clear()}/**
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
 */const HI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new Tt("app","Firebase",HI);/**
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
 */let fp=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}};/**
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
 */class QI extends fp{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,it(Oo,Oc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Pu(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw at.create("server-app-deleted")}}/**
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
 */const ft=GI;function Ru(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:on,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw at.create("bad-app-name",{appName:String(i)});if(t||(t=Zf()),!t)throw at.create("no-options");const s=an.get(i);if(s){if(es(t,s.options)&&es(n,s.config))return s;throw at.create("duplicate-app",{appName:i})}const o=new op(i);for(const u of Or.values())o.addComponent(u);const c=new fp(t,n,o);return an.set(i,c),c}function JI(r,e){if(np()&&!rp())throw at.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;dp(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const i=h=>[...h].reduce((f,p)=>Math.imul(31,f)+p.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw at.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(n)),o=Vr.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const c=new op(s);for(const h of Or.values())c.addComponent(h);const u=new QI(t,e,s,c);return Vr.set(s,u),u}function YI(r=on){const e=an.get(r);if(!e&&r===on&&Zf())return Ru();if(!e)throw at.create("no-app",{appName:r});return e}function XI(){return Array.from(an.values())}async function Pu(r){let e=!1;const t=r.name;an.has(t)?(e=!0,an.delete(t)):Vr.has(t)&&r.decRefCount()<=0&&(Vr.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function it(r,e,t){var n;let i=(n=zI[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(c.join(" "));return}It(new ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function pp(r,e){if(r!==null&&typeof r!="function")throw at.create("invalid-log-argument");sI(r,e)}function mp(r){iI(r)}/**
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
 */const ZI="firebase-heartbeat-database",ev=1,ns="firebase-heartbeat-store";let _c=null;function gp(){return _c||(_c=pI(ZI,ev,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ns)}catch(t){console.warn(t)}}}}).catch(r=>{throw at.create("idb-open",{originalErrorMessage:r.message})})),_c}async function tv(r){try{const t=(await gp()).transaction(ns),n=await t.objectStore(ns).get(_p(r));return await t.done,n}catch(e){if(e instanceof Le)Bn.warn(e.message);else{const t=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(t.message)}}}async function id(r,e){try{const n=(await gp()).transaction(ns,"readwrite");await n.objectStore(ns).put(e,_p(r)),await n.done}catch(t){if(t instanceof Le)Bn.warn(t.message);else{const n=at.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(n.message)}}}function _p(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nv=1024,rv=30*24*60*60*1e3;class iv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ov(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=rv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sd(),{heartbeatsToSend:n,unsentEntries:i}=sv(this._heartbeatsCache.heartbeats),s=No(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sd(){return new Date().toISOString().substring(0,10)}function sv(r,e=nv){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),od(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),od(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zi()?zy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return id(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function od(r){return No(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function av(r){It(new ct("platform-logger",e=>new _I(e),"PRIVATE")),It(new ct("heartbeat",e=>new iv(e),"PRIVATE")),it(Oo,Oc,r),it(Oo,Oc,"esm2017"),it("fire-js","")}av("");const cv=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Le,SDK_VERSION:ft,_DEFAULT_ENTRY_NAME:on,_addComponent:ts,_addOrOverwriteComponent:lp,_apps:an,_clearComponents:WI,_components:Or,_getProvider:hp,_isFirebaseApp:dp,_isFirebaseServerApp:ae,_registerComponent:It,_removeServiceInstance:KI,_serverApps:Vr,deleteApp:Pu,getApp:YI,getApps:XI,initializeApp:Ru,initializeServerApp:JI,onLog:pp,registerVersion:it,setLogLevel:mp},Symbol.toStringTag,{value:"Module"}));/**
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
 */class uv{constructor(e,t){this._delegate=e,this.firebase=t,ts(e,new ct("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Pu(this._delegate)))}_getService(e,t=on){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=on){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ts(this._delegate,e)}_addOrOverwriteComponent(e){lp(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const lv={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},ad=new Tt("app-compat","Firebase",lv);/**
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
 */function hv(r){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:it,setLogLevel:mp,onLog:pp,apps:null,SDK_VERSION:ft,INTERNAL:{registerComponent:c,removeApp:n,useAsService:u,modularAPIs:cv}};t.default=t,Object.defineProperty(t,"apps",{get:o});function n(h){delete e[h]}function i(h){if(h=h||on,!Zh(e,h))throw ad.create("no-app",{appName:h});return e[h]}i.App=r;function s(h,f={}){const p=Ru(h,f);if(Zh(e,p.name))return e[p.name];const _=new r(p,t);return e[p.name]=_,_}function o(){return Object.keys(e).map(h=>e[h])}function c(h){const f=h.name,p=f.replace("-compat","");if(It(h)&&h.type==="PUBLIC"){const _=(A=i())=>{if(typeof A[p]!="function")throw ad.create("invalid-app-argument",{appName:f});return A[p]()};h.serviceProps!==void 0&&Vo(_,h.serviceProps),t[p]=_,r.prototype[p]=function(...A){return this._getService.bind(this,f).apply(this,h.multipleInstances?A:[])}}return h.type==="PUBLIC"?t[p]:null}function u(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function yp(){const r=hv(uv);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:yp,extendNamespace:e,createSubscribe:Eu,ErrorFactory:Tt,deepExtend:Vo});function e(t){Vo(r,t)}return r}const dv=yp();/**
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
 */const cd=new ws("@firebase/app-compat"),fv="@firebase/app-compat",pv="0.2.37";/**
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
 */function mv(r){it(fv,pv,r)}/**
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
 */if(np()&&self.firebase!==void 0){cd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const r=self.firebase.SDK_VERSION;r&&r.indexOf("LITE")>=0&&cd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const tr=dv;mv();var gv="firebase",_v="10.12.4";/**
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
 */tr.registerVersion(gv,_v,"app-compat");var ud=function(){return ud=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ud.apply(this,arguments)};function Jr(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function y0(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}const Pi={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},dr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function yv(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Iv=yv,vv=Ip,vp=new Tt("auth","Firebase",Ip());/**
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
 */const xo=new ws("@firebase/auth");function wv(r,...e){xo.logLevel<=H.WARN&&xo.warn(`Auth (${ft}): ${r}`,...e)}function go(r,...e){xo.logLevel<=H.ERROR&&xo.error(`Auth (${ft}): ${r}`,...e)}/**
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
 */function Me(r,...e){throw Cu(r,...e)}function be(r,...e){return Cu(r,...e)}function Su(r,e,t){const n=Object.assign(Object.assign({},vv()),{[e]:t});return new Tt("auth","Firebase",n).create(e,{appName:r.name})}function Ce(r){return Su(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yr(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Me(r,"argument-error"),Su(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cu(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return vp.create(r,...e)}function O(r,e,...t){if(!r)throw Cu(e,...t)}function pt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw go(e),new Error(e)}function ht(r,e){r||pt(e)}/**
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
 */function rs(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function ku(){return ld()==="http:"||ld()==="https:"}function ld(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Tv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ku()||Tu()||"connection"in navigator)?navigator.onLine:!0}function Ev(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */let Ts=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,ht(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||ia()}get(){return Tv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Du(r,e){ht(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */let wp=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const Av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bv=new Ts(3e4,6e4);function Ie(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ve(r,e,t,n,i={}){return Tp(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=Ot(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode),wp.fetch()(Ep(r,r.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Tp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Av),e);try{const i=new Pv(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Li(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Li(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Li(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Su(r,f,h);Me(r,f)}}catch(i){if(i instanceof Le)throw i;Me(r,"network-request-failed",{message:String(i)})}}async function xt(r,e,t,n,i={}){const s=await ve(r,e,t,n,i);return"mfaPendingCredential"in s&&Me(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Ep(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Du(r.config,i):`${r.config.apiScheme}://${i}`}function Rv(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let Pv=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(be(this.auth,"network-request-failed")),bv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function Li(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=be(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */function hd(r){return r!==void 0&&r.getResponse!==void 0}function dd(r){return r!==void 0&&r.enterprise!==void 0}class Sv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Rv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function Cv(r){return(await ve(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function kv(r,e){return ve(r,"GET","/v2/recaptchaConfig",Ie(r,e))}/**
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
 */async function Dv(r,e){return ve(r,"POST","/v1/accounts:delete",e)}async function Nv(r,e){return ve(r,"POST","/v1/accounts:update",e)}async function Ap(r,e){return ve(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ji(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vv(r,e=!1){const t=$(r),n=await t.getIdToken(e),i=sa(n);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ji(yc(i.auth_time)),issuedAtTime:ji(yc(i.iat)),expirationTime:ji(yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(r){return Number(r)*1e3}function sa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iu(t);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fd(r){const e=sa(r);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dt(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Le&&Ov(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Ov({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */let xv=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let xc=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function is(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Dt(r,Ap(t,{idToken:n}));O(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bp(s.providerUserInfo):[],c=Mv(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function Lv(r){const e=$(r);await is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mv(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function bp(r){return r.map(e=>{var{providerId:t}=e,n=Jr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Fv(r,e){const t=await Tp(r,{},async()=>{const n=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Ep(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wp.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Uv(r,e){return ve(r,"POST","/v2/accounts:revokeToken",Ie(r,e))}/**
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
 */let Ic=class Lc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=fd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Fv(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Lc;return n&&(O(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lc,this.toJSON())}_performRefresh(){return pt("not implemented")}};/**
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
 */function Gt(r,e){O(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}let Lo=class Mi{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Jr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vv(this,e)}reload(){return Lv(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await is(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ae(this.auth.app))return Promise.reject(Ce(this.auth));const e=await this.getIdToken();return await Dt(this,Dv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,G=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:Q,isAnonymous:te,providerData:W,stsTokenManager:v}=t;O(q&&v,e,"internal-error");const g=Ic.fromJSON(this.name,v);O(typeof q=="string",e,"internal-error"),Gt(p,e.name),Gt(_,e.name),O(typeof Q=="boolean",e,"internal-error"),O(typeof te=="boolean",e,"internal-error"),Gt(A,e.name),Gt(k,e.name),Gt(V,e.name),Gt(D,e.name),Gt(j,e.name),Gt(G,e.name);const y=new Mi({uid:q,auth:e,email:_,emailVerified:Q,displayName:p,isAnonymous:te,photoURL:k,phoneNumber:A,tenantId:V,stsTokenManager:g,createdAt:j,lastLoginAt:G});return W&&Array.isArray(W)&&(y.providerData=W.map(w=>Object.assign({},w))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ic;i.updateFromServerResponse(t);const s=new Mi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await is(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Ic;c.updateFromIdToken(n);const u=new Mi({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}};/**
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
 */const pd=new Map;function rt(r){ht(r instanceof Function,"Expected a class definition");let e=pd.get(r);return e?(ht(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,pd.set(r,e),e)}/**
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
 */let Rp=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Rp.type="NONE";const xr=Rp;/**
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
 */function Mn(r,e,t){return`firebase:${r}:${e}:${t}`}let md=class _o{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Mn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _o(rt(xr),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||rt(xr);const o=Mn(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=Lo._fromJSON(e,f);h!==s&&(c=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _o(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new _o(s,e,n))}};/**
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
 */function gd(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kp(e))return"Blackberry";if(Dp(e))return"Webos";if(Nu(e))return"Safari";if((e.includes("chrome/")||Sp(e))&&!e.includes("edge/"))return"Chrome";if(Es(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Pp(r=ee()){return/firefox\//i.test(r)}function Nu(r=ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sp(r=ee()){return/crios\//i.test(r)}function Cp(r=ee()){return/iemobile/i.test(r)}function Es(r=ee()){return/android/i.test(r)}function kp(r=ee()){return/blackberry/i.test(r)}function Dp(r=ee()){return/webos/i.test(r)}function Xr(r=ee()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Bv(r=ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function qv(r=ee()){var e;return Xr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $v(){return ip()&&document.documentMode===10}function Np(r=ee()){return Xr(r)||Es(r)||Dp(r)||kp(r)||/windows phone/i.test(r)||Cp(r)}function jv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vp(r,e=[]){let t;switch(r){case"Browser":t=gd(ee());break;case"Worker":t=`${gd(ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ft}/${n}`}/**
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
 */let Gv=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}};/**
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
 */async function zv(r,e={}){return ve(r,"GET","/v2/passwordPolicy",Ie(r,e))}/**
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
 */const Kv=6;let Wv=class{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Kv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let Hv=class{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.beforeStateQueue=new Gv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await md.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ap(this,{idToken:e}),n=await Lo._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await is(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ae(this.app))return Promise.reject(Ce(this));const t=e?$(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ae(this.app)?Promise.reject(Ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ae(this.app)?Promise.reject(Ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zv(this),t=new Wv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Uv(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await md.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function _e(r){return $(r)}let _d=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let As={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qv(r){As=r}function Vu(r){return As.loadJS(r)}function Jv(){return As.recaptchaV2Script}function Yv(){return As.recaptchaEnterpriseScript}function Xv(){return As.gapiScript}function Op(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Zv="recaptcha-enterprise",ew="NO_RECAPTCHA";class tw{constructor(e){this.type=Zv,this.auth=_e(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{kv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Sv(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;dd(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(ew)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&dd(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Yv();u.length!==0&&(u+=c),Vu(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function yd(r,e,t,n=!1){const i=new tw(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ss(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yd(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yd(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)})}function nw(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function rw(r,e,t){const n=_e(r);O(n._canInitEmulator,n,"emulator-config-failed"),O(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=xp(e),{host:o,port:c}=iw(e),u=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${o}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sw()}function xp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function iw(r){const e=xp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Id(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Id(o)}}}function Id(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function sw(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */let Zr=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}};/**
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
 */async function Lp(r,e){return ve(r,"POST","/v1/accounts:resetPassword",Ie(r,e))}async function ow(r,e){return ve(r,"POST","/v1/accounts:update",e)}async function aw(r,e){return ve(r,"POST","/v1/accounts:signUp",e)}async function cw(r,e){return ve(r,"POST","/v1/accounts:update",Ie(r,e))}/**
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
 */async function uw(r,e){return xt(r,"POST","/v1/accounts:signInWithPassword",Ie(r,e))}async function oa(r,e){return ve(r,"POST","/v1/accounts:sendOobCode",Ie(r,e))}async function lw(r,e){return oa(r,e)}async function hw(r,e){return oa(r,e)}async function dw(r,e){return oa(r,e)}async function fw(r,e){return oa(r,e)}/**
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
 */async function pw(r,e){return xt(r,"POST","/v1/accounts:signInWithEmailLink",Ie(r,e))}async function mw(r,e){return xt(r,"POST","/v1/accounts:signInWithEmailLink",Ie(r,e))}/**
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
 */class os extends Zr{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new os(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new os(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ss(e,t,"signInWithPassword",uw);case"emailLink":return pw(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ss(e,n,"signUpPassword",aw);case"emailLink":return mw(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function kt(r,e){return xt(r,"POST","/v1/accounts:signInWithIdp",Ie(r,e))}/**
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
 */const gw="http://localhost";let qn=class Mc extends Zr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Jr(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Mc(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return kt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}buildRequest(){const e={requestUri:gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}};/**
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
 */async function _w(r,e){return ve(r,"POST","/v1/accounts:sendVerificationCode",Ie(r,e))}async function yw(r,e){return xt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ie(r,e))}async function Iw(r,e){const t=await xt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ie(r,e));if(t.temporaryProof)throw Li(r,"account-exists-with-different-credential",t);return t}const vw={USER_NOT_FOUND:"user-not-found"};async function ww(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return xt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ie(r,t),vw)}/**
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
 */class Fn extends Zr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return yw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Iw(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ww(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new Fn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Tw(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ew(r){const e=Rr(xi(r)).link,t=e?Rr(xi(e)).deep_link_id:null,n=Rr(xi(r)).deep_link_id;return(n?Rr(xi(n)).link:null)||n||t||e||r}class aa{constructor(e){var t,n,i,s,o,c;const u=Rr(xi(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(n=u.oobCode)!==null&&n!==void 0?n:null,p=Tw((i=u.mode)!==null&&i!==void 0?i:null);O(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Ew(e);try{return new aa(t)}catch{return null}}}/**
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
 */class gn{constructor(){this.providerId=gn.PROVIDER_ID}static credential(e,t){return os._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=aa.parseLink(t);return O(n,"argument-error"),os._fromEmailAndCode(e,n.code,n.tenantId)}}gn.PROVIDER_ID="password";gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */let Lt=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
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
 */let ei=class extends Lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};class Pr extends ei{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return O("providerId"in t&&"signInMethod"in t,"argument-error"),qn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Pr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Pr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!s||!c)return null;try{return new Pr(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */let ca=class _r extends ei{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}};ca.FACEBOOK_SIGN_IN_METHOD="facebook.com";ca.PROVIDER_ID="facebook.com";/**
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
 */let ua=class yr extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qn._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return yr.credential(t,n)}catch{return null}}};ua.GOOGLE_SIGN_IN_METHOD="google.com";ua.PROVIDER_ID="google.com";/**
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
 */let la=class Ir extends ei{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}};la.GITHUB_SIGN_IN_METHOD="github.com";la.PROVIDER_ID="github.com";/**
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
 */const Aw="http://localhost";class Lr extends Zr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return kt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return!n||!i||!s||n!==i?null:new Lr(n,s)}static _create(e,t){return new Lr(e,t)}buildRequest(){return{requestUri:Aw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const bw="saml.";class Mo extends Lt{constructor(e){O(e.startsWith(bw),"argument-error"),super(e)}static credentialFromResult(e){return Mo.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Mo.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Lr.fromJSON(e);return O(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Lr._create(n,t)}catch{return null}}}/**
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
 */let ha=class vr extends ei{constructor(){super("twitter.com")}static credential(e,t){return qn._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vr.credential(t,n)}catch{return null}}};ha.TWITTER_SIGN_IN_METHOD="twitter.com";ha.PROVIDER_ID="twitter.com";/**
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
 */async function Mp(r,e){return xt(r,"POST","/v1/accounts:signUp",Ie(r,e))}/**
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
 */class ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Lo._fromIdTokenResponse(e,n,i),o=vd(n);return new ut({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=vd(n);return new ut({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function vd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function Rw(r){var e;if(ae(r.app))return Promise.reject(Ce(r));const t=_e(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ut({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await Mp(t,{returnSecureToken:!0}),i=await ut._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Fo extends Le{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Fo(e,t,n,i)}}function Fp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(r,s,e,n):s})}/**
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
 */function Up(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Pw(r,e){const t=$(r);await da(!0,t,e);const{providerUserInfo:n}=await Nv(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Up(n||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ou(r,e,t=!1){const n=await Dt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ut._forOperation(r,"link",n)}async function da(r,e,t){await is(e);const n=Up(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";O(n.has(t)===r,e.auth,i)}/**
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
 */async function Bp(r,e,t=!1){const{auth:n}=r;if(ae(n.app))return Promise.reject(Ce(n));const i="reauthenticate";try{const s=await Dt(r,Fp(n,i,e,r),t);O(s.idToken,n,"internal-error");const o=sa(s.idToken);O(o,n,"internal-error");const{sub:c}=o;return O(r.uid===c,n,"user-mismatch"),ut._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Me(n,"user-mismatch"),s}}/**
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
 */async function qp(r,e,t=!1){if(ae(r.app))return Promise.reject(Ce(r));const n="signIn",i=await Fp(r,n,e),s=await ut._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function fa(r,e){return qp(_e(r),e)}async function $p(r,e){const t=$(r);return await da(!1,t,e.providerId),Ou(t,e)}async function jp(r,e){return Bp($(r),e)}/**
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
 */async function Sw(r,e){return xt(r,"POST","/v1/accounts:signInWithCustomToken",Ie(r,e))}/**
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
 */async function Cw(r,e){if(ae(r.app))return Promise.reject(Ce(r));const t=_e(r),n=await Sw(t,{token:e,returnSecureToken:!0}),i=await ut._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
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
 */class bs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?xu._fromServerResponse(e,t):"totpInfo"in t?Lu._fromServerResponse(e,t):Me(e,"internal-error")}}class xu extends bs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new xu(t)}}class Lu extends bs{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Lu(t)}}/**
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
 */function pa(r,e,t){var n;O(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),O(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(O(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(O(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Mu(r){const e=_e(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kw(r,e,t){const n=_e(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&pa(n,i,t),await ss(n,i,"getOobCode",hw)}async function Dw(r,e,t){await Lp($(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Mu(r),n})}async function Nw(r,e){await cw($(r),{oobCode:e})}async function Gp(r,e){const t=$(r),n=await Lp(t,{oobCode:e}),i=n.requestType;switch(O(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(n.mfaInfo,t,"internal-error");default:O(n.email,t,"internal-error")}let s=null;return n.mfaInfo&&(s=bs._fromServerResponse(_e(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function Vw(r,e){const{data:t}=await Gp($(r),e);return t.email}async function Ow(r,e,t){if(ae(r.app))return Promise.reject(Ce(r));const n=_e(r),o=await ss(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Mp).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Mu(r),u}),c=await ut._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function xw(r,e,t){return ae(r.app)?Promise.reject(Ce(r)):fa($(r),gn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Mu(r),n})}/**
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
 */async function Lw(r,e,t){const n=_e(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){O(c.handleCodeInApp,n,"argument-error"),c&&pa(n,o,c)}s(i,t),await ss(n,i,"getOobCode",dw)}function Mw(r,e){const t=aa.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Fw(r,e,t){if(ae(r.app))return Promise.reject(Ce(r));const n=$(r),i=gn.credentialWithLink(e,t||rs());return O(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),fa(n,i)}/**
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
 */async function Uw(r,e){return ve(r,"POST","/v1/accounts:createAuthUri",Ie(r,e))}/**
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
 */async function Bw(r,e){const t=ku()?rs():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await Uw($(r),n);return i||[]}async function qw(r,e){const t=$(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&pa(t.auth,i,e);const{email:s}=await lw(t.auth,i);s!==r.email&&await r.reload()}async function $w(r,e,t){const n=$(r),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&pa(n.auth,s,t);const{email:o}=await fw(n.auth,s);o!==r.email&&await r.reload()}/**
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
 */async function jw(r,e){return ve(r,"POST","/v1/accounts:update",e)}/**
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
 */async function Gw(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=$(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Dt(n,jw(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function zw(r,e){const t=$(r);return ae(t.auth.app)?Promise.reject(Ce(t.auth)):zp(t,e,null)}function Kw(r,e){return zp($(r),null,e)}async function zp(r,e,t){const{auth:n}=r,s={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Dt(r,ow(n,s));await r._updateTokensIfNecessary(o,!0)}/**
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
 */function Ww(r){var e,t;if(!r)return null;const{providerId:n}=r,i=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},s=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const o=(t=(e=sa(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Sr(s,c)}}if(!n)return null;switch(n){case"facebook.com":return new Hw(s,i);case"github.com":return new Qw(s,i);case"google.com":return new Jw(s,i);case"twitter.com":return new Yw(s,i,r.screenName||null);case"custom":case"anonymous":return new Sr(s,null);default:return new Sr(s,n,i)}}class Sr{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Kp extends Sr{constructor(e,t,n,i){super(e,t,n),this.username=i}}class Hw extends Sr{constructor(e,t){super(e,"facebook.com",t)}}class Qw extends Kp{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Jw extends Sr{constructor(e,t){super(e,"google.com",t)}}class Yw extends Kp{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Xw(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Ww(t)}/**
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
 */class Vn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Vn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Vn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return Vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Fu{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=_e(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>bs._fromServerResponse(n,c));O(i.mfaPendingCredential,n,"internal-error");const o=Vn._fromMfaPendingCredential(i.mfaPendingCredential);return new Fu(o,s,async c=>{const u=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const h=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(t.operationType){case"signIn":const f=await ut._fromIdTokenResponse(n,t.operationType,h);return await n._updateCurrentUser(f.user),f;case"reauthenticate":return O(t.user,n,"internal-error"),ut._forOperation(t.user,t.operationType,h);default:Me(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Zw(r,e){var t;const n=$(r),i=e;return O(e.customData.operationType,n,"argument-error"),O((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),Fu._fromError(n,i)}/**
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
 */function eT(r,e){return ve(r,"POST","/v2/accounts/mfaEnrollment:start",Ie(r,e))}function tT(r,e){return ve(r,"POST","/v2/accounts/mfaEnrollment:finalize",Ie(r,e))}function nT(r,e){return ve(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Ie(r,e))}class Uu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>bs._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new Uu(e)}async getSession(){return Vn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),s=await Dt(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await Dt(this.user,nT(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const vc=new WeakMap;function rT(r){const e=$(r);return vc.has(e)||vc.set(e,Uu._fromUser(e)),vc.get(e)}const Uo="__sak";/**
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
 */class Wp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iT(){const r=ee();return Nu(r)||Xr(r)}const sT=1e3,oT=10;class Hp extends Wp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iT()&&jv(),this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);$v()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oT):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hp.type="LOCAL";const Bu=Hp;/**
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
 */class Qp extends Wp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qp.type="SESSION";const $n=Qp;/**
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
 */function aT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ma(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await aT(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
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
 */function Rs(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class cT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Rs("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ae(){return window}function uT(r){Ae().location.href=r}/**
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
 */function qu(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function lT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hT(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function dT(){return qu()?self:null}/**
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
 */const Jp="firebaseLocalStorageDb",fT=1,Bo="firebaseLocalStorage",Yp="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ga(r,e){return r.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function pT(){const r=indexedDB.deleteDatabase(Jp);return new Ps(r).toPromise()}function Fc(){const r=indexedDB.open(Jp,fT);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Bo,{keyPath:Yp})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Bo)?e(n):(n.close(),await pT(),e(await Fc()))})})}async function wd(r,e,t){const n=ga(r,!0).put({[Yp]:e,value:t});return new Ps(n).toPromise()}async function mT(r,e){const t=ga(r,!1).get(e),n=await new Ps(t).toPromise();return n===void 0?null:n.value}function Td(r,e){const t=ga(r,!0).delete(e);return new Ps(t).toPromise()}const gT=800,_T=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>_T)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(dT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lT(),!this.activeServiceWorker)return;this.sender=new cT(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await wd(e,Uo,"1"),await Td(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>mT(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const as=Xp;/**
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
 */function yT(r,e){return ve(r,"POST","/v2/accounts/mfaSignIn:start",Ie(r,e))}function IT(r,e){return ve(r,"POST","/v2/accounts/mfaSignIn:finalize",Ie(r,e))}/**
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
 */const vT=500,wT=6e4,ao=1e12;class TT{constructor(e){this.auth=e,this.counter=ao,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new ET(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||ao;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||ao;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||ao;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class ET{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},wT)},vT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AT(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const wc=Op("rcb"),bT=new Ts(3e4,6e4);class RT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ae().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return O(PT(t),e,"argument-error"),this.shouldResolveImmediately(t)&&hd(Ae().grecaptcha)?Promise.resolve(Ae().grecaptcha):new Promise((n,i)=>{const s=Ae().setTimeout(()=>{i(be(e,"network-request-failed"))},bT.get());Ae()[wc]=()=>{Ae().clearTimeout(s),delete Ae()[wc];const c=Ae().grecaptcha;if(!c||!hd(c)){i(be(e,"internal-error"));return}const u=c.render;c.render=(h,f)=>{const p=u(h,f);return this.counter++,p},this.hostLanguage=t,n(c)};const o=`${Jv()}?${Ot({onload:wc,render:"explicit",hl:t})}`;Vu(o).catch(()=>{clearTimeout(s),i(be(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ae().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function PT(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class ST{async load(e){return new TT(e)}clearedOneInstance(){}}/**
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
 */const Zp="recaptcha",CT={theme:"light",type:"image"};let kT=class{constructor(e,t,n=Object.assign({},CT)){this.parameters=n,this.type=Zp,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_e(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ST:new RT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Ae()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(ku()&&!qu(),this.auth,"internal-error"),await DT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Cv(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function DT(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class $u{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Fn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function NT(r,e,t){if(ae(r.app))return Promise.reject(Ce(r));const n=_e(r),i=await _a(n,e,$(t));return new $u(i,s=>fa(n,s))}async function VT(r,e,t){const n=$(r);await da(!1,n,"phone");const i=await _a(n.auth,e,$(t));return new $u(i,s=>$p(n,s))}async function OT(r,e,t){const n=$(r);if(ae(n.auth.app))return Promise.reject(Ce(n.auth));const i=await _a(n.auth,e,$(t));return new $u(i,s=>jp(n,s))}async function _a(r,e,t){var n;const i=await t.verify();try{O(typeof i=="string",r,"argument-error"),O(t.type===Zp,r,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",r,"internal-error"),(await eT(r,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",r,"internal-error");const c=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return O(c,r,"missing-multi-factor-info"),(await yT(r,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await _w(r,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function xT(r,e){const t=$(r);if(ae(t.auth.app))return Promise.reject(Ce(t.auth));await Ou(t,e)}/**
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
 */let jn=class yo{constructor(e){this.providerId=yo.PROVIDER_ID,this.auth=_e(e)}verifyPhoneNumber(e,t){return _a(this.auth,e,$(t))}static credential(e,t){return Fn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yo.credentialFromTaggedObject(t)}static credentialFromError(e){return yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fn._fromTokenResponse(t,n):null}};jn.PROVIDER_ID="phone";jn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function nr(r,e){return e?rt(e):(O(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ju extends Zr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LT(r){return qp(r.auth,new ju(r),r.bypassAuthState)}function MT(r){const{auth:e,user:t}=r;return O(t,e,"internal-error"),Bp(t,new ju(r),r.bypassAuthState)}async function FT(r){const{auth:e,user:t}=r;return O(t,e,"internal-error"),Ou(t,new ju(r),r.bypassAuthState)}/**
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
 */class em{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LT;case"linkViaPopup":case"linkViaRedirect":return FT;case"reauthViaPopup":case"reauthViaRedirect":return MT;default:Me(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const UT=new Ts(2e3,1e4);async function BT(r,e,t){if(ae(r.app))return Promise.reject(be(r,"operation-not-supported-in-this-environment"));const n=_e(r);Yr(r,e,Lt);const i=nr(n,t);return new Pt(n,"signInViaPopup",e,i).executeNotNull()}async function qT(r,e,t){const n=$(r);if(ae(n.auth.app))return Promise.reject(be(n.auth,"operation-not-supported-in-this-environment"));Yr(n.auth,e,Lt);const i=nr(n.auth,t);return new Pt(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function $T(r,e,t){const n=$(r);Yr(n.auth,e,Lt);const i=nr(n.auth,t);return new Pt(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class Pt extends em{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UT.get())};e()}}Pt.currentPopupAction=null;/**
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
 */const jT="pendingRedirect",Gi=new Map;class GT extends em{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const n=await zT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zT(r,e){const t=nm(e),n=tm(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function Gu(r,e){return tm(r)._set(nm(e),"true")}function KT(){Gi.clear()}function zu(r,e){Gi.set(r._key(),e)}function tm(r){return rt(r._redirectPersistence)}function nm(r){return Mn(jT,r.config.apiKey,r.name)}/**
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
 */function WT(r,e,t){return HT(r,e,t)}async function HT(r,e,t){if(ae(r.app))return Promise.reject(Ce(r));const n=_e(r);Yr(r,e,Lt),await n._initializationPromise;const i=nr(n,t);return await Gu(i,n),i._openRedirect(n,e,"signInViaRedirect")}function QT(r,e,t){return JT(r,e,t)}async function JT(r,e,t){const n=$(r);if(Yr(n.auth,e,Lt),ae(n.auth.app))return Promise.reject(Ce(n.auth));await n.auth._initializationPromise;const i=nr(n.auth,t);await Gu(i,n.auth);const s=await rm(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function YT(r,e,t){return XT(r,e,t)}async function XT(r,e,t){const n=$(r);Yr(n.auth,e,Lt),await n.auth._initializationPromise;const i=nr(n.auth,t);await da(!1,n,e.providerId),await Gu(i,n.auth);const s=await rm(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function ZT(r,e){return await _e(r)._initializationPromise,ya(r,e,!1)}async function ya(r,e,t=!1){if(ae(r.app))return Promise.reject(Ce(r));const n=_e(r),i=nr(n,e),o=await new GT(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function rm(r){const e=Rs(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const eE=10*60*1e3;class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ed(e))}saveEventToCache(e){this.cachedEventUids.add(Ed(e)),this.lastProcessedEventTime=Date.now()}}function Ed(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function sm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(r);default:return!1}}/**
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
 */async function om(r,e={}){return ve(r,"GET","/v1/projects",e)}/**
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
 */const nE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rE=/^https?/;async function iE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await om(r);for(const t of e)try{if(sE(t))return}catch{}Me(r,"unauthorized-domain")}function sE(r){const e=rs(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!rE.test(t))return!1;if(nE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const oE=new Ts(3e4,6e4);function Ad(){const r=Ae().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function aE(r){return new Promise((e,t)=>{var n,i,s;function o(){Ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ad(),t(be(r,"network-request-failed"))},timeout:oE.get()})}if(!((i=(n=Ae().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ae().gapi)===null||s===void 0)&&s.load)o();else{const c=Op("iframefcb");return Ae()[c]=()=>{gapi.load?o():t(be(r,"network-request-failed"))},Vu(`${Xv()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Io=null,e})}let Io=null;function cE(r){return Io=Io||aE(r),Io}/**
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
 */const uE=new Ts(5e3,15e3),lE="__/auth/iframe",hE="emulator/auth/iframe",dE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pE(r){const e=r.config;O(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Du(e,hE):`https://${r.config.authDomain}/${lE}`,n={apiKey:e.apiKey,appName:r.name,v:ft},i=fE.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Ot(n).slice(1)}`}async function mE(r){const e=await cE(r),t=Ae().gapi;return O(t,r,"internal-error"),e.open({where:document.body,url:pE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=be(r,"network-request-failed"),c=Ae().setTimeout(()=>{s(o)},uE.get());function u(){Ae().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const gE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_E=500,yE=600,IE="_blank",vE="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wE(r,e,t,n=_E,i=yE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},gE),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ee().toLowerCase();t&&(c=Sp(h)?IE:t),Pp(h)&&(e=e||vE,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[A,k])=>`${_}${A}=${k},`,"");if(qv(h)&&c!=="_self")return TE(e||"",c),new bd(null);const p=window.open(e||"",c,f);O(p,r,"popup-blocked");try{p.focus()}catch{}return new bd(p)}function TE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const EE="__/auth/handler",AE="emulator/auth/handler",bE=encodeURIComponent("fac");async function Uc(r,e,t,n,i,s){O(r.config.authDomain,r,"auth-domain-config-required"),O(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ft,eventId:i};if(e instanceof Lt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Qy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof ei){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${bE}=${encodeURIComponent(u)}`:"";return`${RE(r)}?${Ot(c).slice(1)}${h}`}function RE({config:r}){return r.emulator?Du(r,AE):`https://${r.authDomain}/${EE}`}/**
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
 */const Tc="webStorageSupport";class PE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=ya,this._overrideRedirectResult=zu}async _openPopup(e,t,n,i){var s;ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uc(e,t,n,rs(),i);return wE(e,o,Rs())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Uc(e,t,n,rs(),i);return uT(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ht(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await mE(e),n=new im(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tc,{type:Tc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Tc];o!==void 0&&t(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Np()||Nu()||Xr()}}const SE=PE;class CE{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return pt("unexpected MultiFactorSessionType")}}}class Ku extends CE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ku(e)}_finalizeEnroll(e,t,n){return tT(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return IT(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class am{constructor(){}static assertion(e){return Ku._fromCredential(e)}}am.FACTOR_ID="phone";var Rd="@firebase/auth",Pd="1.7.5";/**
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
 */let kE=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function DE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NE(r){It(new ct("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(r)},h=new Hv(n,i,s,u);return nw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),It(new ct("auth-internal",e=>{const t=_e(e.getProvider("auth").getImmediate());return(n=>new kE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Rd,Pd,DE(r)),it(Rd,Pd,"esm2017")}/**
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
 */const VE=5*60;ep("authIdTokenMaxAge");function OE(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Qv({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=be("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",OE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NE("Browser");/**
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
 */function Gn(){return window}/**
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
 */const xE=2e3;async function LE(r,e,t){var n;const{BuildInfo:i}=Gn();ht(e.sessionId,"AuthEvent did not contain a session ID");const s=await qE(e.sessionId),o={};return Xr()?o.ibi=i.packageName:Es()?o.apn=i.packageName:Me(r,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Uc(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function ME(r){const{BuildInfo:e}=Gn(),t={};Xr()?t.iosBundleId=e.packageName:Es()?t.androidPackageName=e.packageName:Me(r,"operation-not-supported-in-this-environment"),await om(r,t)}function FE(r){const{cordova:e}=Gn();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(r):i=e.InAppBrowser.open(r,Bv()?"_blank":"_system","location=yes"),t(i)})})}async function UE(r,e,t){const{cordova:n}=Gn();let i=()=>{};try{await new Promise((s,o)=>{let c=null;function u(){var p;s();const _=(p=n.plugins.browsertab)===null||p===void 0?void 0:p.close;typeof _=="function"&&_(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function h(){c||(c=window.setTimeout(()=>{o(be(r,"redirect-cancelled-by-user"))},xE))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&h()}e.addPassiveListener(u),document.addEventListener("resume",h,!1),Es()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",f,!1),c&&window.clearTimeout(c)}})}finally{i()}}function BE(r){var e,t,n,i,s,o,c,u,h,f;const p=Gn();O(typeof((e=p==null?void 0:p.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((t=p==null?void 0:p.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(n=p==null?void 0:p.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((u=(c=(o=p==null?void 0:p.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((f=(h=p==null?void 0:p.cordova)===null||h===void 0?void 0:h.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qE(r){const e=$E(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function $E(r){if(ht(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
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
 */const jE=20;class GE extends im{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function zE(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:HE(),postBody:null,tenantId:r.tenantId,error:be(r,"no-auth-event")}}function KE(r,e){return Bc()._set(qc(r),e)}async function Sd(r){const e=await Bc()._get(qc(r));return e&&await Bc()._remove(qc(r)),e}function WE(r,e){var t,n;const i=JE(e);if(i.includes("/__/auth/callback")){const s=vo(i),o=s.firebaseError?QE(decodeURIComponent(s.firebaseError)):null,c=(n=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],u=c?be(c):null;return u?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:i,postBody:null}}return null}function HE(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<jE;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function Bc(){return rt(Bu)}function qc(r){return Mn("authEvent",r.config.apiKey,r.name)}function QE(r){try{return JSON.parse(r)}catch{return null}}function JE(r){const e=vo(r),t=e.link?decodeURIComponent(e.link):void 0,n=vo(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vo(i).link||i||n||t||r}function vo(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return Rr(t.join("?"))}/**
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
 */const YE=500;class XE{constructor(){this._redirectPersistence=$n,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ya,this._overrideRedirectResult=zu}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new GE(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Me(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){BE(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),KT(),await this._originValidation(e);const o=zE(e,n,i);await KE(e,o);const c=await LE(e,o,t),u=await FE(c);return UE(e,s,u)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ME(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=Gn(),o=setTimeout(async()=>{await Sd(e),t.onEvent(Cd())},YE),c=async f=>{clearTimeout(o);const p=await Sd(e);let _=null;p&&(f!=null&&f.url)&&(_=WE(p,f.url)),t.onEvent(_||Cd())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,c);const u=i,h=`${s.packageName.toLowerCase()}://`;Gn().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(h)&&c({url:f}),typeof u=="function")try{u(f)}catch(p){console.error(p)}}}}const ZE=XE;function Cd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:be("no-auth-event")}}/**
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
 */function eA(r,e){_e(r)._logFramework(e)}var tA="@firebase/auth-compat",nA="0.5.10";/**
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
 */const rA=1e3;function zi(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function iA(){return zi()==="http:"||zi()==="https:"}function cm(r=ee()){return!!((zi()==="file:"||zi()==="ionic:"||zi()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function sA(){return ia()||wu()}function oA(){return ip()&&(document==null?void 0:document.documentMode)===11}function aA(r=ee()){return/Edge\/\d+/.test(r)}function cA(r=ee()){return oA()||aA(r)}function um(){try{const r=self.localStorage,e=Rs();if(r)return r.setItem(e,"1"),r.removeItem(e),cA()?Zi():!0}catch{return Wu()&&Zi()}return!1}function Wu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ec(){return(iA()||Tu()||cm())&&!sA()&&um()&&!Wu()}function lm(){return cm()&&typeof document<"u"}async function uA(){return lm()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},rA);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function lA(){return typeof window<"u"?window:null}/**
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
 */const nt={LOCAL:"local",NONE:"none",SESSION:"session"},Si=O,hm="persistence";function hA(r,e){if(Si(Object.values(nt).includes(e),r,"invalid-persistence-type"),ia()){Si(e!==nt.SESSION,r,"unsupported-persistence-type");return}if(wu()){Si(e===nt.NONE,r,"unsupported-persistence-type");return}if(Wu()){Si(e===nt.NONE||e===nt.LOCAL&&Zi(),r,"unsupported-persistence-type");return}Si(e===nt.NONE||um(),r,"unsupported-persistence-type")}async function $c(r){await r._initializationPromise;const e=dm(),t=Mn(hm,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function dA(r,e){const t=dm();if(!t)return[];const n=Mn(hm,r,e);switch(t.getItem(n)){case nt.NONE:return[xr];case nt.LOCAL:return[as,$n];case nt.SESSION:return[$n];default:return[]}}function dm(){var r;try{return((r=lA())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const fA=O;class en{constructor(){this.browserResolver=rt(SE),this.cordovaResolver=rt(ZE),this.underlyingResolver=null,this._redirectPersistence=$n,this._completeRedirectFn=ya,this._overrideRedirectResult=zu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return fA(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await uA();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function fm(r){return r.unwrap()}function pA(r){return r.wrapped()}/**
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
 */function mA(r){return pm(r)}function gA(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new _A(r,Zw(r,e))}else if(n){const i=pm(e),s=e;i&&(s.credential=i,s.tenantId=n.tenantId||void 0,s.email=n.email||void 0,s.phoneNumber=n.phoneNumber||void 0)}}function pm(r){const{_tokenResponse:e}=r instanceof Le?r.customData:r;if(!e)return null;if(!(r instanceof Le)&&"temporaryProof"in e&&"phoneNumber"in e)return jn.credentialFromResult(r);const t=e.providerId;if(!t||t===Pi.PASSWORD)return null;let n;switch(t){case Pi.GOOGLE:n=ua;break;case Pi.FACEBOOK:n=ca;break;case Pi.GITHUB:n=la;break;case Pi.TWITTER:n=ha;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:c,nonce:u}=e;return!s&&!o&&!i&&!c?null:c?t.startsWith("saml.")?Lr._create(t,c):qn._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:s}):new Pr(t).credential({idToken:i,accessToken:s,rawNonce:u})}return r instanceof Le?n.credentialFromError(r):n.credentialFromResult(r)}function Je(r,e){return e.catch(t=>{throw t instanceof Le&&gA(r,t),t}).then(t=>{const n=t.operationType,i=t.user;return{operationType:n,credential:mA(t),additionalUserInfo:Xw(t),user:Ia.getOrCreate(i)}})}async function jc(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>Je(r,t.confirm(n))}}class _A{constructor(e,t){this.resolver=t,this.auth=pA(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Je(fm(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Ia=class Fi{constructor(e){this._delegate=e,this.multiFactor=rT(e)}static getOrCreate(e){return Fi.USER_MAP.has(e)||Fi.USER_MAP.set(e,new Fi(e)),Fi.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Je(this.auth,$p(this._delegate,e))}async linkWithPhoneNumber(e,t){return jc(this.auth,VT(this._delegate,e,t))}async linkWithPopup(e){return Je(this.auth,$T(this._delegate,e,en))}async linkWithRedirect(e){return await $c(_e(this.auth)),YT(this._delegate,e,en)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Je(this.auth,jp(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return jc(this.auth,OT(this._delegate,e,t))}reauthenticateWithPopup(e){return Je(this.auth,qT(this._delegate,e,en))}async reauthenticateWithRedirect(e){return await $c(_e(this.auth)),QT(this._delegate,e,en)}sendEmailVerification(e){return qw(this._delegate,e)}async unlink(e){return await Pw(this._delegate,e),this}updateEmail(e){return zw(this._delegate,e)}updatePassword(e){return Kw(this._delegate,e)}updatePhoneNumber(e){return xT(this._delegate,e)}updateProfile(e){return Gw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return $w(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Ia.USER_MAP=new WeakMap;/**
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
 */const Ci=O;class Gc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Ci(n,"invalid-api-key",{appName:e.name}),Ci(n,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?en:void 0;this._delegate=t.initialize({options:{persistence:yA(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Iv),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ia.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rw(this._delegate,e,t)}applyActionCode(e){return Nw(this._delegate,e)}checkActionCode(e){return Gp(this._delegate,e)}confirmPasswordReset(e,t){return Dw(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Je(this._delegate,Ow(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Bw(this._delegate,e)}isSignInWithEmailLink(e){return Mw(this._delegate,e)}async getRedirectResult(){Ci(Ec(),this._delegate,"operation-not-supported-in-this-environment");const e=await ZT(this._delegate,en);return e?Je(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){eA(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:s,complete:o}=kd(e,t,n);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,n){const{next:i,error:s,complete:o}=kd(e,t,n);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return Lw(this._delegate,e,t)}sendPasswordResetEmail(e,t){return kw(this._delegate,e,t||void 0)}async setPersistence(e){hA(this._delegate,e);let t;switch(e){case nt.SESSION:t=$n;break;case nt.LOCAL:t=await rt(as)._isAvailable()?as:Bu;break;case nt.NONE:t=xr;break;default:return Me("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Je(this._delegate,Rw(this._delegate))}signInWithCredential(e){return Je(this._delegate,fa(this._delegate,e))}signInWithCustomToken(e){return Je(this._delegate,Cw(this._delegate,e))}signInWithEmailAndPassword(e,t){return Je(this._delegate,xw(this._delegate,e,t))}signInWithEmailLink(e,t){return Je(this._delegate,Fw(this._delegate,e,t))}signInWithPhoneNumber(e,t){return jc(this._delegate,NT(this._delegate,e,t))}async signInWithPopup(e){return Ci(Ec(),this._delegate,"operation-not-supported-in-this-environment"),Je(this._delegate,BT(this._delegate,e,en))}async signInWithRedirect(e){return Ci(Ec(),this._delegate,"operation-not-supported-in-this-environment"),await $c(this._delegate),WT(this._delegate,e,en)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Vw(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Gc.Persistence=nt;function kd(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const i=n;return{next:o=>i(o&&Ia.getOrCreate(o)),error:e,complete:t}}function yA(r,e){const t=dA(r,e);if(typeof self<"u"&&!t.includes(as)&&t.push(as),typeof window<"u")for(const n of[Bu,$n])t.includes(n)||t.push(n);return t.includes(xr)||t.push(xr),t}/**
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
 */class Hu{constructor(){this.providerId="phone",this._delegate=new jn(fm(tr.auth()))}static credential(e,t){return jn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Hu.PHONE_SIGN_IN_METHOD=jn.PHONE_SIGN_IN_METHOD;Hu.PROVIDER_ID=jn.PROVIDER_ID;/**
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
 */const IA=O;class vA{constructor(e,t,n=tr.app()){var i;IA((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kT(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const wA="auth-compat";function TA(r){r.INTERNAL.registerComponent(new ct(wA,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Gc(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:dr.EMAIL_SIGNIN,PASSWORD_RESET:dr.PASSWORD_RESET,RECOVER_EMAIL:dr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:dr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:dr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:dr.VERIFY_EMAIL}},EmailAuthProvider:gn,FacebookAuthProvider:ca,GithubAuthProvider:la,GoogleAuthProvider:ua,OAuthProvider:Pr,SAMLAuthProvider:Mo,PhoneAuthProvider:Hu,PhoneMultiFactorGenerator:am,RecaptchaVerifier:vA,TwitterAuthProvider:ha,Auth:Gc,AuthCredential:Zr,Error:Le}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(tA,nA)}TA(tr);var Dd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,mm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function y(){}y.prototype=g.prototype,v.D=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(w,T,b){for(var I=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)I[Et-2]=arguments[Et];return g.prototype[T].apply(w,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)w[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)w[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],T=v.g[2];var b=v.g[3],I=g+(b^y&(T^b))+w[0]+3614090360&4294967295;g=y+(I<<7&4294967295|I>>>25),I=b+(T^g&(y^T))+w[1]+3905402710&4294967295,b=g+(I<<12&4294967295|I>>>20),I=T+(y^b&(g^y))+w[2]+606105819&4294967295,T=b+(I<<17&4294967295|I>>>15),I=y+(g^T&(b^g))+w[3]+3250441966&4294967295,y=T+(I<<22&4294967295|I>>>10),I=g+(b^y&(T^b))+w[4]+4118548399&4294967295,g=y+(I<<7&4294967295|I>>>25),I=b+(T^g&(y^T))+w[5]+1200080426&4294967295,b=g+(I<<12&4294967295|I>>>20),I=T+(y^b&(g^y))+w[6]+2821735955&4294967295,T=b+(I<<17&4294967295|I>>>15),I=y+(g^T&(b^g))+w[7]+4249261313&4294967295,y=T+(I<<22&4294967295|I>>>10),I=g+(b^y&(T^b))+w[8]+1770035416&4294967295,g=y+(I<<7&4294967295|I>>>25),I=b+(T^g&(y^T))+w[9]+2336552879&4294967295,b=g+(I<<12&4294967295|I>>>20),I=T+(y^b&(g^y))+w[10]+4294925233&4294967295,T=b+(I<<17&4294967295|I>>>15),I=y+(g^T&(b^g))+w[11]+2304563134&4294967295,y=T+(I<<22&4294967295|I>>>10),I=g+(b^y&(T^b))+w[12]+1804603682&4294967295,g=y+(I<<7&4294967295|I>>>25),I=b+(T^g&(y^T))+w[13]+4254626195&4294967295,b=g+(I<<12&4294967295|I>>>20),I=T+(y^b&(g^y))+w[14]+2792965006&4294967295,T=b+(I<<17&4294967295|I>>>15),I=y+(g^T&(b^g))+w[15]+1236535329&4294967295,y=T+(I<<22&4294967295|I>>>10),I=g+(T^b&(y^T))+w[1]+4129170786&4294967295,g=y+(I<<5&4294967295|I>>>27),I=b+(y^T&(g^y))+w[6]+3225465664&4294967295,b=g+(I<<9&4294967295|I>>>23),I=T+(g^y&(b^g))+w[11]+643717713&4294967295,T=b+(I<<14&4294967295|I>>>18),I=y+(b^g&(T^b))+w[0]+3921069994&4294967295,y=T+(I<<20&4294967295|I>>>12),I=g+(T^b&(y^T))+w[5]+3593408605&4294967295,g=y+(I<<5&4294967295|I>>>27),I=b+(y^T&(g^y))+w[10]+38016083&4294967295,b=g+(I<<9&4294967295|I>>>23),I=T+(g^y&(b^g))+w[15]+3634488961&4294967295,T=b+(I<<14&4294967295|I>>>18),I=y+(b^g&(T^b))+w[4]+3889429448&4294967295,y=T+(I<<20&4294967295|I>>>12),I=g+(T^b&(y^T))+w[9]+568446438&4294967295,g=y+(I<<5&4294967295|I>>>27),I=b+(y^T&(g^y))+w[14]+3275163606&4294967295,b=g+(I<<9&4294967295|I>>>23),I=T+(g^y&(b^g))+w[3]+4107603335&4294967295,T=b+(I<<14&4294967295|I>>>18),I=y+(b^g&(T^b))+w[8]+1163531501&4294967295,y=T+(I<<20&4294967295|I>>>12),I=g+(T^b&(y^T))+w[13]+2850285829&4294967295,g=y+(I<<5&4294967295|I>>>27),I=b+(y^T&(g^y))+w[2]+4243563512&4294967295,b=g+(I<<9&4294967295|I>>>23),I=T+(g^y&(b^g))+w[7]+1735328473&4294967295,T=b+(I<<14&4294967295|I>>>18),I=y+(b^g&(T^b))+w[12]+2368359562&4294967295,y=T+(I<<20&4294967295|I>>>12),I=g+(y^T^b)+w[5]+4294588738&4294967295,g=y+(I<<4&4294967295|I>>>28),I=b+(g^y^T)+w[8]+2272392833&4294967295,b=g+(I<<11&4294967295|I>>>21),I=T+(b^g^y)+w[11]+1839030562&4294967295,T=b+(I<<16&4294967295|I>>>16),I=y+(T^b^g)+w[14]+4259657740&4294967295,y=T+(I<<23&4294967295|I>>>9),I=g+(y^T^b)+w[1]+2763975236&4294967295,g=y+(I<<4&4294967295|I>>>28),I=b+(g^y^T)+w[4]+1272893353&4294967295,b=g+(I<<11&4294967295|I>>>21),I=T+(b^g^y)+w[7]+4139469664&4294967295,T=b+(I<<16&4294967295|I>>>16),I=y+(T^b^g)+w[10]+3200236656&4294967295,y=T+(I<<23&4294967295|I>>>9),I=g+(y^T^b)+w[13]+681279174&4294967295,g=y+(I<<4&4294967295|I>>>28),I=b+(g^y^T)+w[0]+3936430074&4294967295,b=g+(I<<11&4294967295|I>>>21),I=T+(b^g^y)+w[3]+3572445317&4294967295,T=b+(I<<16&4294967295|I>>>16),I=y+(T^b^g)+w[6]+76029189&4294967295,y=T+(I<<23&4294967295|I>>>9),I=g+(y^T^b)+w[9]+3654602809&4294967295,g=y+(I<<4&4294967295|I>>>28),I=b+(g^y^T)+w[12]+3873151461&4294967295,b=g+(I<<11&4294967295|I>>>21),I=T+(b^g^y)+w[15]+530742520&4294967295,T=b+(I<<16&4294967295|I>>>16),I=y+(T^b^g)+w[2]+3299628645&4294967295,y=T+(I<<23&4294967295|I>>>9),I=g+(T^(y|~b))+w[0]+4096336452&4294967295,g=y+(I<<6&4294967295|I>>>26),I=b+(y^(g|~T))+w[7]+1126891415&4294967295,b=g+(I<<10&4294967295|I>>>22),I=T+(g^(b|~y))+w[14]+2878612391&4294967295,T=b+(I<<15&4294967295|I>>>17),I=y+(b^(T|~g))+w[5]+4237533241&4294967295,y=T+(I<<21&4294967295|I>>>11),I=g+(T^(y|~b))+w[12]+1700485571&4294967295,g=y+(I<<6&4294967295|I>>>26),I=b+(y^(g|~T))+w[3]+2399980690&4294967295,b=g+(I<<10&4294967295|I>>>22),I=T+(g^(b|~y))+w[10]+4293915773&4294967295,T=b+(I<<15&4294967295|I>>>17),I=y+(b^(T|~g))+w[1]+2240044497&4294967295,y=T+(I<<21&4294967295|I>>>11),I=g+(T^(y|~b))+w[8]+1873313359&4294967295,g=y+(I<<6&4294967295|I>>>26),I=b+(y^(g|~T))+w[15]+4264355552&4294967295,b=g+(I<<10&4294967295|I>>>22),I=T+(g^(b|~y))+w[6]+2734768916&4294967295,T=b+(I<<15&4294967295|I>>>17),I=y+(b^(T|~g))+w[13]+1309151649&4294967295,y=T+(I<<21&4294967295|I>>>11),I=g+(T^(y|~b))+w[4]+4149444226&4294967295,g=y+(I<<6&4294967295|I>>>26),I=b+(y^(g|~T))+w[11]+3174756917&4294967295,b=g+(I<<10&4294967295|I>>>22),I=T+(g^(b|~y))+w[2]+718787259&4294967295,T=b+(I<<15&4294967295|I>>>17),I=y+(b^(T|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+b&4294967295}n.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var y=g-this.blockSize,w=this.B,T=this.h,b=0;b<g;){if(T==0)for(;b<=y;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(w[T++]=v.charCodeAt(b++),T==this.blockSize){i(this,w),T=0;break}}else for(;b<g;)if(w[T++]=v[b++],T==this.blockSize){i(this,w),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var y=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=y&255,y/=256;for(this.u(v),v=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)v[y++]=this.g[g]>>>w&255;return v};function s(v,g){var y=c;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function o(v,g){this.h=g;for(var y=[],w=!0,T=v.length-1;0<=T;T--){var b=v[T]|0;w&&b==g||(y[T]=b,w=!1)}this.g=y}var c={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return D(h(-v));for(var g=[],y=1,w=0;v>=y;w++)g[w]=v/y|0,y*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),w=p,T=0;T<v.length;T+=8){var b=Math.min(8,v.length-T),I=parseInt(v.substring(T,T+b),g);8>b?(b=h(Math.pow(g,b)),w=w.j(b).add(h(I))):(w=w.j(y),w=w.add(h(I)))}return w}var p=u(0),_=u(1),A=u(16777216);r=o.prototype,r.m=function(){if(V(this))return-D(this).m();for(var v=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(V(this))return"-"+D(this).toString(v);for(var g=h(Math.pow(v,6)),y=this,w="";;){var T=Q(y,g).g;y=j(y,T.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=T,k(y))return b+w;for(;6>b.length;)b="0"+b;w=b+w}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function V(v){return v.h==-1}r.l=function(v){return v=j(this,v),V(v)?-1:k(v)?0:1};function D(v){for(var g=v.g.length,y=[],w=0;w<g;w++)y[w]=~v.g[w];return new o(y,~v.h).add(_)}r.abs=function(){return V(this)?D(this):this},r.add=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0,T=0;T<=g;T++){var b=w+(this.i(T)&65535)+(v.i(T)&65535),I=(b>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);w=I>>>16,b&=65535,I&=65535,y[T]=I<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(v,g){return v.add(D(g))}r.j=function(v){if(k(this)||k(v))return p;if(V(this))return V(v)?D(this).j(D(v)):D(D(this).j(v));if(V(v))return D(this.j(D(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<v.g.length;T++){var b=this.i(w)>>>16,I=this.i(w)&65535,Et=v.i(T)>>>16,ui=v.i(T)&65535;y[2*w+2*T]+=I*ui,G(y,2*w+2*T),y[2*w+2*T+1]+=b*ui,G(y,2*w+2*T+1),y[2*w+2*T+1]+=I*Et,G(y,2*w+2*T+1),y[2*w+2*T+2]+=b*Et,G(y,2*w+2*T+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new o(y,0)};function G(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function q(v,g){this.g=v,this.h=g}function Q(v,g){if(k(g))throw Error("division by zero");if(k(v))return new q(p,p);if(V(v))return g=Q(D(v),g),new q(D(g.g),D(g.h));if(V(g))return g=Q(v,D(g)),new q(D(g.g),g.h);if(30<v.g.length){if(V(v)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=g;0>=w.l(v);)y=te(y),w=te(w);var T=W(y,1),b=W(w,1);for(w=W(w,2),y=W(y,2);!k(w);){var I=b.add(w);0>=I.l(v)&&(T=T.add(y),b=I),w=W(w,1),y=W(y,1)}return g=j(v,T.j(g)),new q(T,g)}for(T=p;0<=v.l(g);){for(y=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),b=h(y),I=b.j(g);V(I)||0<I.l(v);)y-=w,b=h(y),I=b.j(g);k(b)&&(b=_),T=T.add(b),v=j(v,I)}return new q(T,v)}r.A=function(v){return Q(this,v).h},r.and=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&v.i(w);return new o(y,this.h&v.h)},r.or=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|v.i(w);return new o(y,this.h|v.h)},r.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^v.i(w);return new o(y,this.h^v.h)};function te(v){for(var g=v.g.length+1,y=[],w=0;w<g;w++)y[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(y,v.h)}function W(v,g){var y=g>>5;g%=32;for(var w=v.g.length-y,T=[],b=0;b<w;b++)T[b]=0<g?v.i(b+y)>>>g|v.i(b+y+1)<<32-g:v.i(b+y);return new o(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,mm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Un=o}).apply(typeof Dd<"u"?Dd:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gm,_m,Ui,ym,wo,zc,Im,vm,wm;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var E=a[m];if(!(E in d))break e;d=d[E]}a=a[a.length-1],m=d[a],l=l(m),l!=m&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,m=!1,E={next:function(){if(!m&&d<a.length){var S=d++;return{value:l(S,a[S]),done:!1}}return m=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function p(a,l,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,m),a.apply(l,E)}}return function(){return a.apply(l,arguments)}}function _(a,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,_.apply(null,arguments)}function A(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,E,S){for(var x=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)x[oe-2]=arguments[oe];return l.prototype[E].apply(m,x)}}function V(a){const l=a.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=a[m];return d}return[]}function D(a,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const E=a.length||0,S=m.length||0;a.length=E+S;for(let x=0;x<S;x++)a[E+x]=m[x]}else a.push(m)}}class j{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function G(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var te=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function W(a,l,d){for(const m in a)l.call(d,a[m],m,a)}function v(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function g(a){const l={};for(const d in a)l[d]=a[d];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,l){let d,m;for(let E=1;E<arguments.length;E++){m=arguments[E];for(d in m)a[d]=m[d];for(let S=0;S<y.length;S++)d=y[S],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function T(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function I(){var a=ja;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class Et{constructor(){this.h=this.g=null}add(l,d){const m=ui.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ui=new j(()=>new ey,a=>a.reset());class ey{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let li,hi=!1,ja=new Et,Xl=()=>{const a=c.Promise.resolve(void 0);li=()=>{a.then(ty)}};var ty=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){b(d)}var l=ui;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}hi=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var ny=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function di(a,l){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(te){e:{try{Q(l.nodeName);var E=!0;break e}catch{}E=!1}E||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ry[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&di.aa.h.call(this)}}k(di,Fe);var ry={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),iy=0;function sy(a,l,d,m,E){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=E,this.key=++iy,this.da=this.fa=!1}function Gs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zs(a){this.src=a,this.g={},this.h=0}zs.prototype.add=function(a,l,d,m,E){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var x=za(a,l,m,E);return-1<x?(l=a[x],d||(l.fa=!1)):(l=new sy(l,this.src,S,!!m,E),l.fa=d,a.push(l)),l};function Ga(a,l){var d=l.type;if(d in a.g){var m=a.g[d],E=Array.prototype.indexOf.call(m,l,void 0),S;(S=0<=E)&&Array.prototype.splice.call(m,E,1),S&&(Gs(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function za(a,l,d,m){for(var E=0;E<a.length;++E){var S=a[E];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==m)return E}return-1}var Ka="closure_lm_"+(1e6*Math.random()|0),Wa={};function Zl(a,l,d,m,E){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Zl(a,l[S],d,m,E);return null}return d=nh(d),a&&a[js]?a.K(l,d,h(m)?!!m.capture:!!m,E):oy(a,l,d,!1,m,E)}function oy(a,l,d,m,E,S){if(!l)throw Error("Invalid event type");var x=h(E)?!!E.capture:!!E,oe=Qa(a);if(oe||(a[Ka]=oe=new zs(a)),d=oe.add(l,d,m,x,S),d.proxy)return d;if(m=ay(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)ny||(E=x),E===void 0&&(E=!1),a.addEventListener(l.toString(),m,E);else if(a.attachEvent)a.attachEvent(th(l.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ay(){function a(d){return l.call(a.src,a.listener,d)}const l=cy;return a}function eh(a,l,d,m,E){if(Array.isArray(l))for(var S=0;S<l.length;S++)eh(a,l[S],d,m,E);else m=h(m)?!!m.capture:!!m,d=nh(d),a&&a[js]?(a=a.i,l=String(l).toString(),l in a.g&&(S=a.g[l],d=za(S,d,m,E),-1<d&&(Gs(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete a.g[l],a.h--)))):a&&(a=Qa(a))&&(l=a.g[l.toString()],a=-1,l&&(a=za(l,d,m,E)),(d=-1<a?l[a]:null)&&Ha(d))}function Ha(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[js])Ga(l.i,a);else{var d=a.type,m=a.proxy;l.removeEventListener?l.removeEventListener(d,m,a.capture):l.detachEvent?l.detachEvent(th(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Qa(l))?(Ga(d,a),d.h==0&&(d.src=null,l[Ka]=null)):Gs(a)}}}function th(a){return a in Wa?Wa[a]:Wa[a]="on"+a}function cy(a,l){if(a.da)a=!0;else{l=new di(l,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ha(a),a=d.call(m,l)}return a}function Qa(a){return a=a[Ka],a instanceof zs?a:null}var Ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function nh(a){return typeof a=="function"?a:(a[Ja]||(a[Ja]=function(l){return a.handleEvent(l)}),a[Ja])}function Ue(){Bt.call(this),this.i=new zs(this),this.M=this,this.F=null}k(Ue,Bt),Ue.prototype[js]=!0,Ue.prototype.removeEventListener=function(a,l,d,m){eh(this,a,l,d,m)};function je(a,l){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=l.type||l,typeof l=="string")l=new Fe(l,a);else if(l instanceof Fe)l.target=l.target||a;else{var E=l;l=new Fe(m,a),w(l,E)}if(E=!0,d)for(var S=d.length-1;0<=S;S--){var x=l.g=d[S];E=Ks(x,m,!0,l)&&E}if(x=l.g=a,E=Ks(x,m,!0,l)&&E,E=Ks(x,m,!1,l)&&E,d)for(S=0;S<d.length;S++)x=l.g=d[S],E=Ks(x,m,!1,l)&&E}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],m=0;m<d.length;m++)Gs(d[m]);delete a.g[l],a.h--}}this.F=null},Ue.prototype.K=function(a,l,d,m){return this.i.add(String(a),l,!1,d,m)},Ue.prototype.L=function(a,l,d,m){return this.i.add(String(a),l,!0,d,m)};function Ks(a,l,d,m){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var E=!0,S=0;S<l.length;++S){var x=l[S];if(x&&!x.da&&x.capture==d){var oe=x.listener,Ve=x.ha||x.src;x.fa&&Ga(a.i,x),E=oe.call(Ve,m)!==!1&&E}}return E&&!m.defaultPrevented}function rh(a,l,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function ih(a){a.g=rh(()=>{a.g=null,a.i&&(a.i=!1,ih(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class uy extends Bt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ih(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(a){Bt.call(this),this.h=a,this.g={}}k(fi,Bt);var sh=[];function oh(a){W(a.g,function(l,d){this.g.hasOwnProperty(d)&&Ha(l)},a),a.g={}}fi.prototype.N=function(){fi.aa.N.call(this),oh(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ya=c.JSON.stringify,ly=c.JSON.parse,hy=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Xa(){}Xa.prototype.h=null;function ah(a){return a.h||(a.h=a.i())}function ch(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Za(){Fe.call(this,"d")}k(Za,Fe);function ec(){Fe.call(this,"c")}k(ec,Fe);var wn={},uh=null;function Ws(){return uh=uh||new Ue}wn.La="serverreachability";function lh(a){Fe.call(this,wn.La,a)}k(lh,Fe);function mi(a){const l=Ws();je(l,new lh(l))}wn.STAT_EVENT="statevent";function hh(a,l){Fe.call(this,wn.STAT_EVENT,a),this.stat=l}k(hh,Fe);function Ge(a){const l=Ws();je(l,new hh(l,a))}wn.Ma="timingevent";function dh(a,l){Fe.call(this,wn.Ma,a),this.size=l}k(dh,Fe);function gi(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function dy(a,l,d,m,E,S){a.info(function(){if(a.g)if(S)for(var x="",oe=S.split("&"),Ve=0;Ve<oe.length;Ve++){var ne=oe[Ve].split("=");if(1<ne.length){var Be=ne[0];ne=ne[1];var qe=Be.split("_");x=2<=qe.length&&qe[1]=="type"?x+(Be+"="+ne+"&"):x+(Be+"=redacted&")}}else x=null;else x=S;return"XMLHTTP REQ ("+m+") [attempt "+E+"]: "+l+`
`+d+`
`+x})}function fy(a,l,d,m,E,S,x){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+E+"]: "+l+`
`+d+`
`+S+" "+x})}function cr(a,l,d,m){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+my(a,d)+(m?" "+m:"")})}function py(a,l){a.info(function(){return"TIMEOUT: "+l})}_i.prototype.info=function(){};function my(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var E=m[1];if(Array.isArray(E)&&!(1>E.length)){var S=E[0];if(S!="noop"&&S!="stop"&&S!="close")for(var x=1;x<E.length;x++)E[x]=""}}}}return Ya(d)}catch{return l}}var Hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function Qs(){}k(Qs,Xa),Qs.prototype.g=function(){return new XMLHttpRequest},Qs.prototype.i=function(){return{}},tc=new Qs;function qt(a,l,d,m){this.j=a,this.i=l,this.l=d,this.R=m||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ph}function ph(){this.i=null,this.g="",this.h=!1}var mh={},nc={};function rc(a,l,d){a.L=1,a.v=Zs(At(l)),a.m=d,a.P=!0,gh(a,null)}function gh(a,l){a.F=Date.now(),Js(a),a.A=At(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),kh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new ph,a.g=Hh(a.j,d?l:null,!a.m),0<a.O&&(a.M=new uy(_(a.Y,a,a.g),a.O)),l=a.U,d=a.g,m=a.ca;var E="readystatechange";Array.isArray(E)||(E&&(sh[0]=E.toString()),E=sh);for(var S=0;S<E.length;S++){var x=Zl(d,E[S],m||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),mi(),dy(a.i,a.u,a.A,a.l,a.R,a.m)}qt.prototype.ca=function(a){a=a.target;const l=this.M;l&&bt(a)==3?l.j():this.Y(a)},qt.prototype.Y=function(a){try{if(a==this.g)e:{const qe=bt(this.g);var l=this.g.Ba();const hr=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||Mh(this.g)))){this.J||qe!=4||l==7||(l==8||0>=hr?mi(3):mi(2)),ic(this);var d=this.g.Z();this.X=d;t:if(_h(this)){var m=Mh(this.g);a="";var E=m.length,S=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),yi(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<E;l++)this.h.h=!0,a+=this.h.i.decode(m[l],{stream:!(S&&l==E-1)});m.length=0,this.h.g+=a,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,fy(this.i,this.u,this.A,this.l,this.R,qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ve=this.g;if((oe=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(oe)){var ne=oe;break t}}ne=null}if(d=ne)cr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,d);else{this.o=!1,this.s=3,Ge(12),Tn(this),yi(this);break e}}if(this.P){d=!0;let lt;for(;!this.J&&this.C<x.length;)if(lt=gy(this,x),lt==nc){qe==4&&(this.s=4,Ge(14),d=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==mh){this.s=4,Ge(15),cr(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else cr(this.i,this.l,lt,null),sc(this,lt);if(_h(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||x.length!=0||this.h.h||(this.s=1,Ge(16),d=!1),this.o=this.o&&d,!d)cr(this.i,this.l,x,"[Invalid Chunked Response]"),Tn(this),yi(this);else if(0<x.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),hc(Be),Be.M=!0,Ge(11))}}else cr(this.i,this.l,x,null),sc(this,x);qe==4&&Tn(this),this.o&&!this.J&&(qe==4?Gh(this.j,this):(this.o=!1,Js(this)))}else Vy(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ge(12)):(this.s=0,Ge(13)),Tn(this),yi(this)}}}catch{}finally{}};function _h(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function gy(a,l){var d=a.C,m=l.indexOf(`
`,d);return m==-1?nc:(d=Number(l.substring(d,m)),isNaN(d)?mh:(m+=1,m+d>l.length?nc:(l=l.slice(m,m+d),a.C=m+d,l)))}qt.prototype.cancel=function(){this.J=!0,Tn(this)};function Js(a){a.S=Date.now()+a.I,yh(a,a.I)}function yh(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gi(_(a.ba,a),l)}function ic(a){a.B&&(c.clearTimeout(a.B),a.B=null)}qt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(py(this.i,this.A),this.L!=2&&(mi(),Ge(17)),Tn(this),this.s=2,yi(this)):yh(this,this.S-a)};function yi(a){a.j.G==0||a.J||Gh(a.j,a)}function Tn(a){ic(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,oh(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function sc(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||oc(d.h,a))){if(!a.K&&oc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var E=m;if(E[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)io(d),no(d);else break e;lc(d),Ge(18)}}else d.za=E[1],0<d.za-d.T&&37500>E[2]&&d.F&&d.v==0&&!d.C&&(d.C=gi(_(d.Za,d),6e3));if(1>=wh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else An(d,11)}else if((a.K||d.g==a)&&io(d),!G(l))for(E=d.Da.g.parse(l),l=0;l<E.length;l++){let ne=E[l];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const Be=ne[3];Be!=null&&(d.la=Be,d.j.info("VER="+d.la));const qe=ne[4];qe!=null&&(d.Aa=qe,d.j.info("SVER="+d.Aa));const hr=ne[5];hr!=null&&typeof hr=="number"&&0<hr&&(m=1.5*hr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const lt=a.g;if(lt){const oo=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var S=m.h;S.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ac(S,S.h),S.h=null))}if(m.D){const dc=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(m.ya=dc,ue(m.I,m.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var x=a;if(m.qa=Wh(m,m.J?m.ia:null,m.W),x.K){Th(m.h,x);var oe=x,Ve=m.L;Ve&&(oe.I=Ve),oe.B&&(ic(oe),Js(oe)),m.g=x}else $h(m);0<d.i.length&&ro(d)}else ne[0]!="stop"&&ne[0]!="close"||An(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?An(d,7):uc(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}mi(4)}catch{}}var _y=class{constructor(a,l){this.g=a,this.map=l}};function Ih(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wh(a){return a.h?1:a.g?a.g.size:0}function oc(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function ac(a,l){a.g?a.g.add(l):a.h=l}function Th(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Ih.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return V(a.i)}function yy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,m=0;m<d;m++)l.push(a[m]);return l}l=[],d=0;for(m in a)l[d++]=a[m];return l}function Iy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const m in a)l[d++]=m;return l}}}function Ah(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Iy(a),m=yy(a),E=m.length,S=0;S<E;S++)l.call(void 0,m[S],d&&d[S],a)}var bh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vy(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),E=null;if(0<=m){var S=a[d].substring(0,m);E=a[d].substring(m+1)}else S=a[d];l(S,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function En(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof En){this.h=a.h,Ys(this,a.j),this.o=a.o,this.g=a.g,Xs(this,a.s),this.l=a.l;var l=a.i,d=new wi;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Rh(this,d),this.m=a.m}else a&&(l=String(a).match(bh))?(this.h=!1,Ys(this,l[1]||"",!0),this.o=Ii(l[2]||""),this.g=Ii(l[3]||"",!0),Xs(this,l[4]),this.l=Ii(l[5]||"",!0),Rh(this,l[6]||"",!0),this.m=Ii(l[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}En.prototype.toString=function(){var a=[],l=this.j;l&&a.push(vi(l,Ph,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(vi(l,Ph,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(vi(d,d.charAt(0)=="/"?Ey:Ty,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",vi(d,by)),a.join("")};function At(a){return new En(a)}function Ys(a,l,d){a.j=d?Ii(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Xs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Rh(a,l,d){l instanceof wi?(a.i=l,Ry(a.i,a.h)):(d||(l=vi(l,Ay)),a.i=new wi(l,a.h))}function ue(a,l,d){a.i.set(l,d)}function Zs(a){return ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ii(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vi(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,wy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ph=/[#\/\?@]/g,Ty=/[#\?:]/g,Ey=/[#\?]/g,Ay=/[#\?@]/g,by=/#/g;function wi(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function $t(a){a.g||(a.g=new Map,a.h=0,a.i&&vy(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=wi.prototype,r.add=function(a,l){$t(this),this.i=null,a=ur(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Sh(a,l){$t(a),l=ur(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ch(a,l){return $t(a),l=ur(a,l),a.g.has(l)}r.forEach=function(a,l){$t(this),this.g.forEach(function(d,m){d.forEach(function(E){a.call(l,E,m,this)},this)},this)},r.na=function(){$t(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const E=a[m];for(let S=0;S<E.length;S++)d.push(l[m])}return d},r.V=function(a){$t(this);let l=[];if(typeof a=="string")Ch(this,a)&&(l=l.concat(this.g.get(ur(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return $t(this),this.i=null,a=ur(this,a),Ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function kh(a,l,d){Sh(a,l),0<d.length&&(a.i=null,a.g.set(ur(a,l),V(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const S=encodeURIComponent(String(m)),x=this.V(m);for(m=0;m<x.length;m++){var E=S;x[m]!==""&&(E+="="+encodeURIComponent(String(x[m]))),a.push(E)}}return this.i=a.join("&")};function ur(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Ry(a,l){l&&!a.j&&($t(a),a.i=null,a.g.forEach(function(d,m){var E=m.toLowerCase();m!=E&&(Sh(this,m),kh(this,E,d))},a)),a.j=l}function Py(a,l){const d=new _i;if(c.Image){const m=new Image;m.onload=A(jt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=A(jt,d,"TestLoadImage: error",!1,l,m),m.onabort=A(jt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=A(jt,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else l(!1)}function Sy(a,l){const d=new _i,m=new AbortController,E=setTimeout(()=>{m.abort(),jt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:m.signal}).then(S=>{clearTimeout(E),S.ok?jt(d,"TestPingServer: ok",!0,l):jt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(E),jt(d,"TestPingServer: error",!1,l)})}function jt(a,l,d,m,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),m(d)}catch{}}function Cy(){this.g=new hy}function ky(a,l,d){const m=d||"";try{Ah(a,function(E,S){let x=E;h(E)&&(x=Ya(E)),l.push(m+S+"="+encodeURIComponent(x))})}catch(E){throw l.push(m+"type="+encodeURIComponent("_badmap")),E}}function Ti(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Ti,Xa),Ti.prototype.g=function(){return new eo(this.l,this.j)},Ti.prototype.i=function(a){return function(){return a}}({});function eo(a,l){Ue.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(eo,Ue),r=eo.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,Ai(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Ei(this):Ai(this),this.readyState==3&&Dh(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},r.Qa=function(a){this.g&&(this.response=a,Ei(this))},r.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ai(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function Ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Nh(a){let l="";return W(a,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function cc(a,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Nh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ue(a,l,d))}function me(a){Ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(me,Ue);var Dy=/^https?$/i,Ny=["POST","PUT"];r=me.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?ah(this.o):ah(tc),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){Vh(this,S);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var E in m)d.set(E,m[E]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),E=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ny,l,void 0))||m||E||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,x]of d)this.g.setRequestHeader(S,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lh(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){Vh(this,S)}};function Vh(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,Oh(a),to(a)}function Oh(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,je(this,"complete"),je(this,"abort"),to(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),to(this,!0)),me.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?xh(this):this.bb())},r.bb=function(){xh(this)};function xh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bt(a)!=4||a.Z()!=2)){if(a.u&&bt(a)==4)rh(a.Ea,0,a);else if(je(a,"readystatechange"),bt(a)==4){a.h=!1;try{const x=a.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=x===0){var E=String(a.D).match(bh)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),m=!Dy.test(E?E.toLowerCase():"")}d=m}if(d)je(a,"complete"),je(a,"success");else{a.m=6;try{var S=2<bt(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",Oh(a)}}finally{to(a)}}}}function to(a,l){if(a.g){Lh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||je(a,"ready");try{d.onreadystatechange=m}catch{}}}function Lh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),ly(l)}};function Mh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Vy(a){const l={};a=(a.g&&2<=bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(G(a[m]))continue;var d=T(a[m]);const E=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[E]||[];l[E]=S,S.push(d)}v(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bi(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Fh(a){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bi("baseRetryDelayMs",5e3,a),this.cb=bi("retryDelaySeedMs",1e4,a),this.Wa=bi("forwardChannelMaxRetries",2,a),this.wa=bi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ih(a&&a.concurrentRequestLimit),this.Da=new Cy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fh.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,m){Ge(0),this.W=a,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Wh(this,null,this.W),ro(this)};function uc(a){if(Uh(a),a.G==3){var l=a.U++,d=At(a.I);if(ue(d,"SID",a.K),ue(d,"RID",l),ue(d,"TYPE","terminate"),Ri(a,d),l=new qt(a,a.j,l),l.L=2,l.v=Zs(At(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Hh(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Js(l)}Kh(a)}function no(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function Uh(a){no(a),a.u&&(c.clearTimeout(a.u),a.u=null),io(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ro(a){if(!vh(a.h)&&!a.s){a.s=!0;var l=a.Ga;li||Xl(),hi||(li(),hi=!0),ja.add(l,a),a.B=0}}function Oy(a,l){return wh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gi(_(a.Ga,a,l),zh(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const E=new qt(this,this.j,a);let S=this.o;if(this.S&&(S?(S=g(S),w(S,this.S)):S=this.S),this.m!==null||this.O||(E.H=S,S=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=qh(this,E,l),d=At(this.I),ue(d,"RID",a),ue(d,"CVER",22),this.D&&ue(d,"X-HTTP-Session-Id",this.D),Ri(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(Nh(S)))+"&"+l:this.m&&cc(d,this.m,S)),ac(this.h,E),this.Ua&&ue(d,"TYPE","init"),this.P?(ue(d,"$req",l),ue(d,"SID","null"),E.T=!0,rc(E,d,null)):rc(E,d,l),this.G=2}}else this.G==3&&(a?Bh(this,a):this.i.length==0||vh(this.h)||Bh(this))};function Bh(a,l){var d;l?d=l.l:d=a.U++;const m=At(a.I);ue(m,"SID",a.K),ue(m,"RID",d),ue(m,"AID",a.T),Ri(a,m),a.m&&a.o&&cc(m,a.m,a.o),d=new qt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=qh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,d),rc(d,m,l)}function Ri(a,l){a.H&&W(a.H,function(d,m){ue(l,m,d)}),a.l&&Ah({},function(d,m){ue(l,m,d)})}function qh(a,l,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var E=a.i;let S=-1;for(;;){const x=["count="+d];S==-1?0<d?(S=E[0].g,x.push("ofs="+S)):S=0:x.push("ofs="+S);let oe=!0;for(let Ve=0;Ve<d;Ve++){let ne=E[Ve].g;const Be=E[Ve].map;if(ne-=S,0>ne)S=Math.max(0,E[Ve].g-100),oe=!1;else try{ky(Be,x,"req"+ne+"_")}catch{m&&m(Be)}}if(oe){m=x.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,m}function $h(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;li||Xl(),hi||(li(),hi=!0),ja.add(l,a),a.v=0}}function lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gi(_(a.Fa,a),zh(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,jh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gi(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ge(10),no(this),jh(this))};function hc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function jh(a){a.g=new qt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=At(a.qa);ue(l,"RID","rpc"),ue(l,"SID",a.K),ue(l,"AID",a.T),ue(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ue(l,"TO",a.ja),ue(l,"TYPE","xmlhttp"),Ri(a,l),a.m&&a.o&&cc(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Zs(At(l)),d.m=null,d.P=!0,gh(d,a)}r.Za=function(){this.C!=null&&(this.C=null,no(this),lc(this),Ge(19))};function io(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Gh(a,l){var d=null;if(a.g==l){io(a),hc(a),a.g=null;var m=2}else if(oc(a.h,l))d=l.D,Th(a.h,l),m=1;else return;if(a.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var E=a.B;m=Ws(),je(m,new dh(m,d)),ro(a)}else $h(a);else if(E=l.s,E==3||E==0&&0<l.X||!(m==1&&Oy(a,l)||m==2&&lc(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),E){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function zh(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function An(a,l){if(a.j.info("Error code "+l),l==2){var d=_(a.fb,a),m=a.Xa;const E=!m;m=new En(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ys(m,"https"),Zs(m),E?Py(m.toString(),d):Sy(m.toString(),d)}else Ge(2);a.G=0,a.l&&a.l.sa(l),Kh(a),Uh(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Kh(a){if(a.G=0,a.ka=[],a.l){const l=Eh(a.h);(l.length!=0||a.i.length!=0)&&(D(a.ka,l),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function Wh(a,l,d){var m=d instanceof En?At(d):new En(d);if(m.g!="")l&&(m.g=l+"."+m.g),Xs(m,m.s);else{var E=c.location;m=E.protocol,l=l?l+"."+E.hostname:E.hostname,E=+E.port;var S=new En(null);m&&Ys(S,m),l&&(S.g=l),E&&Xs(S,E),d&&(S.l=d),m=S}return d=a.D,l=a.ya,d&&l&&ue(m,d,l),ue(m,"VER",a.la),Ri(a,m),m}function Hh(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new me(new Ti({eb:d})):new me(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qh(){}r=Qh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function so(){}so.prototype.g=function(a,l){return new tt(a,l)};function tt(a,l){Ue.call(this),this.g=new Fh(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!G(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!G(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new lr(this)}k(tt,Ue),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){uc(this.g)},tt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ya(a),a=d);l.i.push(new _y(l.Ya++,a)),l.G==3&&ro(l)},tt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,tt.aa.N.call(this)};function Jh(a){Za.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}k(Jh,Za);function Yh(){ec.call(this),this.status=1}k(Yh,ec);function lr(a){this.g=a}k(lr,Qh),lr.prototype.ua=function(){je(this.g,"a")},lr.prototype.ta=function(a){je(this.g,new Jh(a))},lr.prototype.sa=function(a){je(this.g,new Yh)},lr.prototype.ra=function(){je(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,wm=function(){return new so},vm=function(){return Ws()},Im=wn,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,wo=Hs,fh.COMPLETE="complete",ym=fh,ch.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,Ui=ch,_m=Ti,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,gm=me}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const Nd="@firebase/firestore";/**
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
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
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
 */let ti="10.12.3";/**
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
 */const cn=new ws("@firebase/firestore");function wr(){return cn.logLevel}function EA(r){cn.setLogLevel(r)}function N(r,...e){if(cn.logLevel<=H.DEBUG){const t=e.map(Qu);cn.debug(`Firestore (${ti}): ${r}`,...t)}}function we(r,...e){if(cn.logLevel<=H.ERROR){const t=e.map(Qu);cn.error(`Firestore (${ti}): ${r}`,...t)}}function dt(r,...e){if(cn.logLevel<=H.WARN){const t=e.map(Qu);cn.warn(`Firestore (${ti}): ${r}`,...t)}}function Qu(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function F(r="Unexpected state"){const e=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+r;throw we(e),new Error(e)}function U(r,e){r||F()}function AA(r,e){r||F()}function M(r,e){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Le{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ke{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Tm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class RA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PA{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new ke;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ke,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ke)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(U(typeof n.accessToken=="string"),new Tm(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new Se(e)}}class SA{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CA{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new SA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string"),this.R=t.token,new kA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function NA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Em{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=NA(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function Mr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Am(r){return r+"\0"}/**
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
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new fe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new fe(0,0))}static max(){return new B(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cs{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return cs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cs?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends cs{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new J(t)}static emptyPath(){return new J([])}}const VA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends cs{construct(e,t,n){return new he(e,t,n)}static isValidIdentifier(e){return VA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new C(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new C(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}/**
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
 */class qo{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Kc(r){return r.fields.find(e=>e.kind===2)}function Pn(r){return r.fields.filter(e=>e.kind!==2)}qo.UNKNOWN_ID=-1;class To{constructor(e,t){this.fieldPath=e,this.kind=t}}class us{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new us(0,st.min())}}function bm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new fe(t+1,0):new fe(t,n));return new st(i,L.empty(),e)}function Rm(r){return new st(r.readTime,r.key,-1)}class st{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new st(B.min(),L.empty(),-1)}static max(){return new st(B.max(),L.empty(),-1)}}function Ju(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
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
 */const Pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _n(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Pm)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>n(u))}),o=!0,s===i&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(i=>i?R.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new R((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new R((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class va{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ke,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ki(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Yu(n.target.error);this.V.reject(new Ki(e,i))}}static open(e,t,n,i){try{return new va(t,e.transaction(i,n))}catch(s){throw new Ki(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new xA(t)}}class _t{constructor(e,t,n){this.name=e,this.version=t,this.p=n,_t.S(ee())===12.2&&we("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Sn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Zi())return!1;if(_t.C())return!0;const e=ee(),t=_t.S(e),n=0<t&&t<10,i=Cm(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Ki(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new C(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new C(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Ki(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=va.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Cm(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class OA{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Sn(this.B.delete())}}class Ki extends C{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function yn(r){return r.name==="IndexedDbTransactionError"}class xA{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Sn(n)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Sn(this.store.add(e))}get(e){return Sn(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Sn(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Sn(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new R((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(c,u)=>{o.push(u)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){N("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new R((n,i)=>{t.onerror=s=>{const o=Yu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new OA(c),h=t(c.primaryKey,c.value,u);if(h instanceof R){const f=h.catch(p=>(u.done(),R.reject(p)));n.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Sn(r){return new R((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Yu(n.target.error);t(i)}})}let Vd=!1;function Yu(r){const e=_t.S(ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Vd||(Vd=!0,setTimeout(()=>{throw n},0)),n}}return r}class LA{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){N("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){yn(t)?N("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await _n(t)}await this.X(6e4)})}}class MA{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return R.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return N("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(N("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=Rm(s);Ju(o,n)>0&&(n=o)}),new st(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xe.oe=-1;function Ss(r){return r==null}function ls(r){return r===0&&1/r==-1/0}function km(r){return typeof r=="number"&&Number.isInteger(r)&&!ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function We(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Od(e)),e=FA(r.get(t),e);return Od(e)}function FA(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Od(r){return r+""}function mt(r){const e=r.length;if(U(e>=2),e===2)return U(r.charAt(0)===""&&r.charAt(1)===""),J.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&F(),r.charAt(o+1)){case"":const c=r.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:F()}s=o+2}return new J(n)}/**
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
 */const xd=["userId","batchId"];/**
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
 */function Eo(r,e){return[r,We(e)]}function Dm(r,e,t){return[r,We(e),t]}const UA={},BA=["prefixPath","collectionGroup","readTime","documentId"],qA=["prefixPath","collectionGroup","documentId"],$A=["collectionGroup","readTime","prefixPath","documentId"],jA=["canonicalId","targetId"],GA=["targetId","path"],zA=["path","targetId"],KA=["collectionId","parent"],WA=["indexId","uid"],HA=["uid","sequenceNumber"],QA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],JA=["indexId","uid","orderedDocumentKey"],YA=["userId","collectionPath","documentId"],XA=["userId","collectionPath","largestBatchId"],ZA=["userId","collectionGroup","largestBatchId"],Nm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eb=[...Nm,"documentOverlays"],Vm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Om=Vm,xm=[...Om,"indexConfiguration","indexState","indexEntries"],tb=xm;/**
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
 */class Wc extends Sm{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function De(r,e){const t=M(r);return _t.F(t._e,e)}/**
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
 */function Ld(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function rr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Lm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uo(this.root,e,this.comparator,!0)}}class uo{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Oe(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Md(this.data.getIterator())}getIteratorFrom(e){return new Md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class Md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fr(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new se(he.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function nb(){return typeof atob<"u"}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Mm("Invalid base64 string: "+s):s}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const rb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(r){if(U(!!r),typeof r=="string"){let e=0;const t=rb.exec(r);if(U(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ge(r.seconds),nanos:ge(r.nanos)}}function ge(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function un(r){return typeof r=="string"?Re.fromBase64String(r):Re.fromUint8Array(r)}/**
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
 */function wa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xu(r){const e=r.mapValue.fields.__previous_value__;return wa(e)?Xu(e):e}function hs(r){const e=Nt(r.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class ib{constructor(e,t,n,i,s,o,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class ln{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ln&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ao={nullValue:"NULL_VALUE"};function zn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wa(r)?4:Fm(r)?9007199254740991:10:F()}function vt(r,e){if(r===e)return!0;const t=zn(r);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return hs(r).isEqual(hs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nt(i.timestampValue),c=Nt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return un(i.bytesValue).isEqual(un(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ge(i.doubleValue),c=ge(s.doubleValue);return o===c?ls(o)===ls(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Mr(r.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Ld(o)!==Ld(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!vt(o[u],c[u])))return!1;return!0}(r,e);default:return F()}}function ds(r,e){return(r.values||[]).find(t=>vt(t,e))!==void 0}function hn(r,e){if(r===e)return 0;const t=zn(r),n=zn(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ge(s.integerValue||s.doubleValue),u=ge(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Fd(r.timestampValue,e.timestampValue);case 4:return Fd(hs(r),hs(e));case 5:return z(r.stringValue,e.stringValue);case 6:return function(s,o){const c=un(s),u=un(o);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=z(ge(s.latitude),ge(o.latitude));return c!==0?c:z(ge(s.longitude),ge(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return function(s,o){const c=s.values||[],u=o.values||[];for(let h=0;h<c.length&&h<u.length;++h){const f=hn(c[h],u[h]);if(f)return f}return z(c.length,u.length)}(r.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tn.mapValue&&o===tn.mapValue)return 0;if(s===tn.mapValue)return 1;if(o===tn.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const _=z(u[p],f[p]);if(_!==0)return _;const A=hn(c[u[p]],h[f[p]]);if(A!==0)return A}return z(u.length,f.length)}(r.mapValue,e.mapValue);default:throw F()}}function Fd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=Nt(r),n=Nt(e),i=z(t.seconds,n.seconds);return i!==0?i:z(t.nanos,n.nanos)}function Fr(r){return Hc(r)}function Hc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Nt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return un(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return L.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Hc(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Hc(t.fields[o])}`;return i+"}"}(r.mapValue):F()}function Kn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qc(r){return!!r&&"integerValue"in r}function fs(r){return!!r&&"arrayValue"in r}function Ud(r){return!!r&&"nullValue"in r}function Bd(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bo(r){return!!r&&"mapValue"in r}function Wi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return rr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Wi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Fm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function sb(r){return"nullValue"in r?Ao:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Kn(ln.empty(),L.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:F()}function ob(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Kn(ln.empty(),L.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?tn:F()}function qd(r,e){const t=hn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function $d(r,e){const t=hn(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wi(t)}setAll(e){let t=he.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Wi(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());bo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];bo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){rr(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new xe(Wi(this.value))}}function Um(r){const e=[];return rr(r.fields,(t,n)=>{const i=new he([t]);if(bo(n)){const s=Um(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ze(e)}/**
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
 */class le{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new le(e,0,B.min(),B.min(),B.min(),xe.empty(),0)}static newFoundDocument(e,t,n,i){return new le(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new le(e,2,t,B.min(),B.min(),xe.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,B.min(),B.min(),xe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dn{constructor(e,t){this.position=e,this.inclusive=t}}function jd(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=L.comparator(L.fromName(o.referenceValue),t.key):n=hn(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Gd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!vt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function ab(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Bm{}class Y extends Bm{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new cb(e,t,n):t==="array-contains"?new hb(e,n):t==="in"?new Km(e,n):t==="not-in"?new db(e,n):t==="array-contains-any"?new fb(e,n):new Y(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new ub(e,n):new lb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(hn(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends Bm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ie(e,t)}matches(e){return Ur(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ur(r){return r.op==="and"}function Jc(r){return r.op==="or"}function Zu(r){return qm(r)&&Ur(r)}function qm(r){for(const e of r.filters)if(e instanceof ie)return!1;return!0}function Yc(r){if(r instanceof Y)return r.field.canonicalString()+r.op.toString()+Fr(r.value);if(Zu(r))return r.filters.map(e=>Yc(e)).join(",");{const e=r.filters.map(t=>Yc(t)).join(",");return`${r.op}(${e})`}}function $m(r,e){return r instanceof Y?function(n,i){return i instanceof Y&&n.op===i.op&&n.field.isEqual(i.field)&&vt(n.value,i.value)}(r,e):r instanceof ie?function(n,i){return i instanceof ie&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&$m(o,i.filters[c]),!0):!1}(r,e):void F()}function jm(r,e){const t=r.filters.concat(e);return ie.create(t,r.op)}function Gm(r){return r instanceof Y?function(t){return`${t.field.canonicalString()} ${t.op} ${Fr(t.value)}`}(r):r instanceof ie?function(t){return t.op.toString()+" {"+t.getFilters().map(Gm).join(" ,")+"}"}(r):"Filter"}class cb extends Y{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class ub extends Y{constructor(e,t){super(e,"in",t),this.keys=zm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lb extends Y{constructor(e,t){super(e,"not-in",t),this.keys=zm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zm(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>L.fromName(n.referenceValue))}class hb extends Y{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fs(t)&&ds(t.arrayValue,this.value)}}class Km extends Y{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class db extends Y{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ds(this.value.arrayValue,t)}}class fb extends Y{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ds(this.value.arrayValue,n))}}/**
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
 */class pb{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function Xc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new pb(r,e,t,n,i,s,o)}function Wn(r){const e=M(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Yc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Fr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Fr(n)).join(",")),e.ue=t}return e.ue}function Cs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!ab(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!$m(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Gd(r.startAt,e.startAt)&&Gd(r.endAt,e.endAt)}function $o(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function jo(r,e){return r.filters.filter(t=>t instanceof Y&&t.field.isEqual(e))}function zd(r,e,t){let n=Ao,i=!0;for(const s of jo(r,e)){let o=Ao,c=!0;switch(s.op){case"<":case"<=":o=sb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Ao}qd({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];qd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Kd(r,e,t){let n=tn,i=!0;for(const s of jo(r,e)){let o=tn,c=!0;switch(s.op){case">=":case">":o=ob(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=tn}$d({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];$d({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class Mt{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wm(r,e,t,n,i,s,o,c){return new Mt(r,e,t,n,i,s,o,c)}function ni(r){return new Mt(r)}function Wd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function el(r){return r.collectionGroup!==null}function Cr(r){const e=M(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(he.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ps(s,n))}),t.has(he.keyField().canonicalString())||e.ce.push(new ps(he.keyField(),n))}return e.ce}function He(r){const e=M(r);return e.le||(e.le=mb(e,Cr(r))),e.le}function mb(r,e){if(r.limitType==="F")return Xc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ps(i.field,s)});const t=r.endAt?new dn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dn(r.startAt.position,r.startAt.inclusive):null;return Xc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Zc(r,e){const t=r.filters.concat([e]);return new Mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Go(r,e,t){return new Mt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ks(r,e){return Cs(He(r),He(e))&&r.limitType===e.limitType}function Hm(r){return`${Wn(He(r))}|lt:${r.limitType}`}function Tr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Gm(i)).join(", ")}]`),Ss(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Fr(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Fr(i)).join(",")),`Target(${n})`}(He(r))}; limitType=${r.limitType})`}function Ds(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):L.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Cr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,u){const h=jd(o,c,u);return o.inclusive?h<=0:h<0}(n.startAt,Cr(n),i)||n.endAt&&!function(o,c,u){const h=jd(o,c,u);return o.inclusive?h>=0:h>0}(n.endAt,Cr(n),i))}(r,e)}function Qm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Jm(r){return(e,t)=>{let n=!1;for(const i of Cr(r)){const s=gb(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function gb(r,e,t){const n=r.field.isKeyField()?L.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?hn(u,h):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
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
 */class In{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return Lm(this.inner)}size(){return this.innerSize}}/**
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
 */const _b=new ce(L.comparator);function et(){return _b}const Ym=new ce(L.comparator);function Bi(...r){let e=Ym;for(const t of r)e=e.insert(t.key,t);return e}function Xm(r){let e=Ym;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function gt(){return Hi()}function Zm(){return Hi()}function Hi(){return new In(r=>r.toString(),(r,e)=>r.isEqual(e))}const yb=new ce(L.comparator),Ib=new se(L.comparator);function K(...r){let e=Ib;for(const t of r)e=e.add(t);return e}const vb=new se(z);function tl(){return vb}/**
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
 */function eg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(e)?"-0":e}}function tg(r){return{integerValue:""+r}}function ng(r,e){return km(e)?tg(e):eg(r,e)}/**
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
 */class Ta{constructor(){this._=void 0}}function wb(r,e,t){return r instanceof Br?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wa(s)&&(s=Xu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof Hn?ig(r,e):r instanceof Qn?sg(r,e):function(i,s){const o=rg(i,s),c=Hd(o)+Hd(i.Pe);return Qc(o)&&Qc(i.Pe)?tg(c):eg(i.serializer,c)}(r,e)}function Tb(r,e,t){return r instanceof Hn?ig(r,e):r instanceof Qn?sg(r,e):t}function rg(r,e){return r instanceof qr?function(n){return Qc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Br extends Ta{}class Hn extends Ta{constructor(e){super(),this.elements=e}}function ig(r,e){const t=og(e);for(const n of r.elements)t.some(i=>vt(i,n))||t.push(n);return{arrayValue:{values:t}}}class Qn extends Ta{constructor(e){super(),this.elements=e}}function sg(r,e){let t=og(e);for(const n of r.elements)t=t.filter(i=>!vt(i,n));return{arrayValue:{values:t}}}class qr extends Ta{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hd(r){return ge(r.integerValue||r.doubleValue)}function og(r){return fs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ns{constructor(e,t){this.field=e,this.transform=t}}function Eb(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Hn&&i instanceof Hn||n instanceof Qn&&i instanceof Qn?Mr(n.elements,i.elements,vt):n instanceof qr&&i instanceof qr?vt(n.Pe,i.Pe):n instanceof Br&&i instanceof Br}(r.transform,e.transform)}class Ab{constructor(e,t){this.version=e,this.transformResults=t}}class de{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new de}static exists(e){return new de(void 0,e)}static updateTime(e){return new de(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ea{}function ag(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ii(r.key,de.none()):new ri(r.key,r.data,de.none());{const t=r.data,n=xe.empty();let i=new se(he.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Ft(r.key,n,new Ze(i.toArray()),de.none())}}function bb(r,e,t){r instanceof ri?function(i,s,o){const c=i.value.clone(),u=Jd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Ft?function(i,s,o){if(!Ro(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Jd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(cg(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Qi(r,e,t,n){return r instanceof ri?function(s,o,c,u){if(!Ro(s.precondition,o))return c;const h=s.value.clone(),f=Yd(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ft?function(s,o,c,u){if(!Ro(s.precondition,o))return c;const h=Yd(s.fieldTransforms,u,o),f=o.data;return f.setAll(cg(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,o,c){return Ro(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function Rb(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=rg(n.transform,i||null);s!=null&&(t===null&&(t=xe.empty()),t.set(n.field,s))}return t||null}function Qd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Mr(n,i,(s,o)=>Eb(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ri extends Ea{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends Ea{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cg(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Jd(r,e,t){const n=new Map;U(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Tb(o,c,t[i]))}return n}function Yd(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,wb(s,o,e))}return n}class ii extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nl extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rl{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bb(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Zm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=ag(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&Mr(this.mutations,e.mutations,(t,n)=>Qd(t,n))&&Mr(this.baseMutations,e.baseMutations,(t,n)=>Qd(t,n))}}class il{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){U(e.mutations.length===n.length);let i=function(){return yb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new il(e,t,n,i)}}/**
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
 */class sl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Pb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,X;function ug(r){switch(r){default:return F();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function lg(r){if(r===void 0)return we("GRPC error has no .code"),P.UNKNOWN;switch(r){case Ee.OK:return P.OK;case Ee.CANCELLED:return P.CANCELLED;case Ee.UNKNOWN:return P.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return P.INTERNAL;case Ee.UNAVAILABLE:return P.UNAVAILABLE;case Ee.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ee.NOT_FOUND:return P.NOT_FOUND;case Ee.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ee.ABORTED:return P.ABORTED;case Ee.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ee.DATA_LOSS:return P.DATA_LOSS;default:return F()}}(X=Ee||(Ee={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hg(){return new TextEncoder}/**
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
 */const Sb=new Un([4294967295,4294967295],0);function Xd(r){const e=hg().encode(r),t=new mm;return t.update(e),new Uint8Array(t.digest())}function Zd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Un([t,n],0),new Un([i,s],0)]}class ol{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new qi(`Invalid padding: ${t}`);if(n<0)throw new qi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new qi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Un.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Un.fromNumber(n)));return i.compare(Sb)===1&&(i=new Un([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Xd(e),[n,i]=Zd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ol(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Xd(e),[n,i]=Zd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vs{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vs(B.min(),i,new ce(z),et(),K())}}class Os{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Os(n,t,K(),K(),K())}}/**
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
 */class Po{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class dg{constructor(e,t){this.targetId=e,this.me=t}}class fg{constructor(e,t,n=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ef{constructor(){this.fe=0,this.ge=nf(),this.pe=Re.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=K(),t=K(),n=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F()}}),new Os(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=nf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,U(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Cb{constructor(e){this.Le=e,this.Be=new Map,this.ke=et(),this.qe=tf(),this.Qe=new ce(z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if($o(s))if(n===0){const o=new L(s.path);this.Ue(t,o,le.newNoDocument(o,B.min()))}else U(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=un(n).toUint8Array()}catch(u){if(u instanceof Mm)return dt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ol(o,i,s)}catch(u){return dt(u instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&$o(c.target)){const u=new L(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,le.newNoDocument(u,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let n=K();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vs(e,t,this.Qe,this.ke,n);return this.ke=et(),this.qe=tf(),this.Qe=new ce(z),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ef,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new se(z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ef),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tf(){return new ce(L.comparator)}function nf(){return new ce(L.comparator)}const kb={asc:"ASCENDING",desc:"DESCENDING"},Db={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nb={and:"AND",or:"OR"};class Vb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eu(r,e){return r.useProto3Json||Ss(e)?e:{value:e}}function $r(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pg(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Ob(r,e){return $r(r,e.toTimestamp())}function Te(r){return U(!!r),B.fromTimestamp(function(t){const n=Nt(t);return new fe(n.seconds,n.nanos)}(r))}function al(r,e){return tu(r,e).canonicalString()}function tu(r,e){const t=function(i){return new J(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function mg(r){const e=J.fromString(r);return U(bg(e)),e}function ms(r,e){return al(r.databaseId,e.path)}function yt(r,e){const t=mg(e);if(t.get(1)!==r.databaseId.projectId)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new L(yg(t))}function gg(r,e){return al(r.databaseId,e)}function _g(r){const e=mg(r);return e.length===4?J.emptyPath():yg(e)}function nu(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function yg(r){return U(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function rf(r,e,t){return{name:ms(r,e),fields:t.value.mapValue.fields}}function Ig(r,e,t){const n=yt(r,e.name),i=Te(e.updateTime),s=e.createTime?Te(e.createTime):B.min(),o=new xe({mapValue:{fields:e.fields}}),c=le.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function xb(r,e){return"found"in e?function(n,i){U(!!i.found),i.found.name,i.found.updateTime;const s=yt(n,i.found.name),o=Te(i.found.updateTime),c=i.found.createTime?Te(i.found.createTime):B.min(),u=new xe({mapValue:{fields:i.found.fields}});return le.newFoundDocument(s,o,c,u)}(r,e):"missing"in e?function(n,i){U(!!i.missing),U(!!i.readTime);const s=yt(n,i.missing),o=Te(i.readTime);return le.newNoDocument(s,o)}(r,e):F()}function Lb(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string"),Re.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Re.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?P.UNKNOWN:lg(h.code);return new C(f,h.message||"")}(o);t=new fg(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=yt(r,n.document.name),s=Te(n.document.updateTime),o=n.document.createTime?Te(n.document.createTime):B.min(),c=new xe({mapValue:{fields:n.document.fields}}),u=le.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new Po(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=yt(r,n.document),s=n.readTime?Te(n.readTime):B.min(),o=le.newNoDocument(i,s),c=n.removedTargetIds||[];t=new Po([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=yt(r,n.document),s=n.removedTargetIds||[];t=new Po([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Pb(i,s),c=n.targetId;t=new dg(c,o)}}return t}function gs(r,e){let t;if(e instanceof ri)t={update:rf(r,e.key,e.value)};else if(e instanceof ii)t={delete:ms(r,e.key)};else if(e instanceof Ft)t={update:rf(r,e.key,e.data),updateMask:$b(e.fieldMask)};else{if(!(e instanceof nl))return F();t={verify:ms(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof Br)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qr)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ob(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(r,e.precondition)),t}function ru(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?de.updateTime(Te(s.updateTime)):s.exists!==void 0?de.exists(s.exists):de.none()}(e.currentDocument):de.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME"),u=new Br;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Hn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Qn(f)}else"increment"in c?u=new qr(o,c.increment):F();const h=he.fromServerFormat(c.fieldPath);return new Ns(h,u)}(r,i)):[];if(e.update){e.update.name;const i=yt(r,e.update.name),s=new xe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new Ze(h.map(f=>he.fromServerFormat(f)))}(e.updateMask);return new Ft(i,s,o,t,n)}return new ri(i,s,t,n)}if(e.delete){const i=yt(r,e.delete);return new ii(i,t)}if(e.verify){const i=yt(r,e.verify);return new nl(i,t)}return F()}function Mb(r,e){return r&&r.length>0?(U(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Te(i.updateTime):Te(s);return o.isEqual(B.min())&&(o=Te(s)),new Ab(o,i.transformResults||[])}(t,e))):[]}function vg(r,e){return{documents:[gg(r,e.path)]}}function wg(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=gg(r,i);const s=function(h){if(h.length!==0)return Ag(ie.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Er(_.field),direction:Ub(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=eu(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Tg(r){let e=_g(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){U(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const _=Eg(p);return _ instanceof ie&&Zu(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(k){return new ps(Ar(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Ss(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(p){const _=!!p.before,A=p.values||[];return new dn(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,A=p.values||[];return new dn(A,_)}(t.endAt)),Wm(e,i,o,s,c,"F",u,h)}function Fb(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Eg(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ar(t.unaryFilter.field);return Y.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ar(t.unaryFilter.field);return Y.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ar(t.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(t.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return Y.create(Ar(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ie.create(t.compositeFilter.filters.map(n=>Eg(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function Ub(r){return kb[r]}function Bb(r){return Db[r]}function qb(r){return Nb[r]}function Er(r){return{fieldPath:r.canonicalString()}}function Ar(r){return he.fromServerFormat(r.fieldPath)}function Ag(r){return r instanceof Y?function(t){if(t.op==="=="){if(Bd(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(Ud(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bd(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(Ud(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:Bb(t.op),value:t.value}}}(r):r instanceof ie?function(t){const n=t.getFilters().map(i=>Ag(i));return n.length===1?n[0]:{compositeFilter:{op:qb(t.op),filters:n}}}(r):F()}function $b(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bg(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class St{constructor(e,t,n,i,s=B.min(),o=B.min(),c=Re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Rg{constructor(e){this.ct=e}}function jb(r,e){let t;if(e.document)t=Ig(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=L.fromSegments(e.noDocument.path),i=Yn(e.noDocument.readTime);t=le.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const n=L.fromSegments(e.unknownDocument.path),i=Yn(e.unknownDocument.version);t=le.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new fe(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function sf(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:ms(s,o.key),fields:o.data.value.mapValue.fields,updateTime:$r(s,o.version.toTimestamp()),createTime:$r(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Jn(e.version)};else{if(!e.isUnknownDocument())return F();n.unknownDocument={path:t.path.toArray(),version:Jn(e.version)}}return n}function zo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Jn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Yn(r){const e=new fe(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function Cn(r,e){const t=(e.baseMutations||[]).map(s=>ru(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>ru(r.ct,s)),i=fe.fromMillis(e.localWriteTimeMs);return new rl(e.batchId,i,t,n)}function $i(r){const e=Yn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Yn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return U(s.documents.length===1),He(ni(_g(s.documents[0])))}(r.query):function(s){return He(Tg(s))}(r.query),new St(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Re.fromBase64String(r.resumeToken))}function Pg(r,e){const t=Jn(e.snapshotVersion),n=Jn(e.lastLimboFreeSnapshotVersion);let i;i=$o(e.target)?vg(r.ct,e.target):wg(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Wn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function cl(r){const e=Tg({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Go(e,e.limit,"L"):e}function Ac(r,e){return new sl(e.largestBatchId,ru(r.ct,e.overlayMutation))}function of(r,e){const t=e.path.lastSegment();return[r,We(e.path.popLast()),t]}function af(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Jn(n.readTime),documentKey:We(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Gb{getBundleMetadata(e,t){return cf(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Yn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return cf(e).put(function(i){return{bundleId:i.id,createTime:Jn(Te(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return uf(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:cl(s.bundledQuery),readTime:Yn(s.readTime)}}(n)})}saveNamedQuery(e,t){return uf(e).put(function(i){return{name:i.name,readTime:Jn(Te(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function cf(r){return De(r,"bundles")}function uf(r){return De(r,"namedQueries")}/**
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
 */class Aa{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Aa(e,n)}getOverlay(e,t){return ki(e).get(of(this.userId,t)).next(n=>n?Ac(this.serializer,n):null)}getOverlays(e,t){const n=gt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new sl(t,o);i.push(this.ht(e,c))}),R.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(We(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(ki(e).j("collectionPathOverlayIndex",c))}),R.waitFor(s)}getOverlaysForCollection(e,t,n){const i=gt(),s=We(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ki(e).U("collectionPathOverlayIndex",o).next(c=>{for(const u of c){const h=Ac(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=gt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ki(e).J({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{const p=Ac(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return ki(e).put(function(i,s,o){const[c,u,h]=of(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:gs(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ki(r){return De(r,"documentOverlays")}/**
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
 */class kn{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ge(e.integerValue));else if("doubleValue"in e){const n=ge(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),ls(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),typeof n=="string"&&(n=Nt(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(un(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?Fm(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):F()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const i of Object.keys(n))this.Rt(i,t),this.It(n[i],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const i of n)this.It(i,t)}gt(e,t){this.Et(t,37),L.fromName(e).path.forEach(n=>{this.Et(t,60),this.St(n,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}kn.bt=new kn;function zb(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function lf(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=zb(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class Kb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ct(n.value),n=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Mt(n.value),n=t.next();this.xt()}Ot(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ct(n);else if(n<2048)this.Ct(960|n>>>6),this.Ct(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|n>>>12),this.Ct(128|63&n>>>6),this.Ct(128|63&n);else{const i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Mt(n);else if(n<2048)this.Mt(960|n>>>6),this.Mt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|n>>>12),this.Mt(128|63&n>>>6),this.Mt(128|63&n);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const t=this.Bt(e),n=lf(t);this.kt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Bt(e),n=lf(t);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ct(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class Wb{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class Hb{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Di{constructor(){this.Gt=new Kb,this.zt=new Wb(this.Gt),this.jt=new Hb(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Dn{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Dn(this.indexId,this.documentKey,this.arrayValue,n)}}function zt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=hf(r.arrayValue,e.arrayValue),t!==0?t:(t=hf(r.directionalValue,e.directionalValue),t!==0?t:L.comparator(r.documentKey,e.documentKey)))}function hf(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class df{constructor(e){this.Yt=new se((t,n)=>he.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const n=t;n.isInequality()?this.Yt=this.Yt.add(n):this.Xt.push(n)}}get en(){return this.Yt.size>1}tn(e){if(U(e.collectionGroup===this.collectionId),this.en)return!1;const t=Kc(e);if(t!==void 0&&!this.nn(t))return!1;const n=Pn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.nn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Yt.size>0){const c=this.Yt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.rn(c,u)||!this.sn(this.Zt[o++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],c))return!1}return!0}on(){if(this.en)return null;let e=new se(he.comparator);const t=[];for(const n of this.Xt)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new To(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new To(n.field,0))}for(const n of this.Zt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new To(n.field,n.dir==="asc"?0:1)));return new qo(qo.UNKNOWN_ID,this.collectionId,t,us.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Sg(r){var e,t;if(U(r instanceof Y||r instanceof ie),r instanceof Y){if(r instanceof Km){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Y.create(r.field,"==",s)))||[];return ie.create(i,"or")}return r}const n=r.filters.map(i=>Sg(i));return ie.create(n,r.op)}function Qb(r){if(r.getFilters().length===0)return[];const e=ou(Sg(r));return U(Cg(e)),iu(e)||su(e)?[e]:e.getFilters()}function iu(r){return r instanceof Y}function su(r){return r instanceof ie&&Zu(r)}function Cg(r){return iu(r)||su(r)||function(t){if(t instanceof ie&&Jc(t)){for(const n of t.getFilters())if(!iu(n)&&!su(n))return!1;return!0}return!1}(r)}function ou(r){if(U(r instanceof Y||r instanceof ie),r instanceof Y)return r;if(r.filters.length===1)return ou(r.filters[0]);const e=r.filters.map(n=>ou(n));let t=ie.create(e,r.op);return t=Ko(t),Cg(t)?t:(U(t instanceof ie),U(Ur(t)),U(t.filters.length>1),t.filters.reduce((n,i)=>ul(n,i)))}function ul(r,e){let t;return U(r instanceof Y||r instanceof ie),U(e instanceof Y||e instanceof ie),t=r instanceof Y?e instanceof Y?function(i,s){return ie.create([i,s],"and")}(r,e):ff(r,e):e instanceof Y?ff(e,r):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),Ur(i)&&Ur(s))return jm(i,s.getFilters());const o=Jc(i)?i:s,c=Jc(i)?s:i,u=o.filters.map(h=>ul(h,c));return ie.create(u,"or")}(r,e),Ko(t)}function ff(r,e){if(Ur(e))return jm(e,r.getFilters());{const t=e.filters.map(n=>ul(r,n));return ie.create(t,"or")}}function Ko(r){if(U(r instanceof Y||r instanceof ie),r instanceof Y)return r;const e=r.getFilters();if(e.length===1)return Ko(e[0]);if(qm(r))return r;const t=e.map(i=>Ko(i)),n=[];return t.forEach(i=>{i instanceof Y?n.push(i):i instanceof ie&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:ie.create(n,r.op)}/**
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
 */class Jb{constructor(){this._n=new ll}addToCollectionParentIndex(e,t){return this._n.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(st.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(st.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class ll{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new se(J.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new se(J.comparator)).toArray()}}/**
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
 */const lo=new Uint8Array(0);class Yb{constructor(e,t){this.databaseId=t,this.an=new ll,this.un=new In(n=>Wn(n),(n,i)=>Cs(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});const s={collectionId:n,parent:We(i)};return pf(e).put(s)}return R.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Am(t),""],!1,!0);return pf(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(mt(o.parent))}return n})}addFieldIndex(e,t){const n=Ni(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=mr(e);return s.next(c=>{o.put(af(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Ni(e),i=mr(e),s=pr(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ni(e),n=pr(e),i=mr(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return R.forEach(this.cn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new df(n).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=pr(e);let i=!0;const s=new Map;return R.forEach(this.cn(t),o=>this.ln(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=K();const c=[];return R.forEach(s,(u,h)=>{N("IndexedDbIndexManager",`Using index ${function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${Wn(t)}`);const f=function(q,Q){const te=Kc(Q);if(te===void 0)return null;for(const W of jo(q,te.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(h,u),p=function(q,Q){const te=new Map;for(const W of Pn(Q))for(const v of jo(q,W.fieldPath))switch(v.op){case"==":case"in":te.set(W.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return te.set(W.fieldPath.canonicalString(),v.value),Array.from(te.values())}return null}(h,u),_=function(q,Q){const te=[];let W=!0;for(const v of Pn(Q)){const g=v.kind===0?zd(q,v.fieldPath,q.startAt):Kd(q,v.fieldPath,q.startAt);te.push(g.value),W&&(W=g.inclusive)}return new dn(te,W)}(h,u),A=function(q,Q){const te=[];let W=!0;for(const v of Pn(Q)){const g=v.kind===0?Kd(q,v.fieldPath,q.endAt):zd(q,v.fieldPath,q.endAt);te.push(g.value),W&&(W=g.inclusive)}return new dn(te,W)}(h,u),k=this.hn(u,h,_),V=this.hn(u,h,A),D=this.Pn(u,h,p),j=this.In(u.indexId,f,k,_.inclusive,V,A.inclusive,D);return R.forEach(j,G=>n.G(G,t.limit).next(q=>{q.forEach(Q=>{const te=L.fromSegments(Q.documentKey);o.has(te)||(o=o.add(te),c.push(te))})}))}).next(()=>c)}return R.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=Qb(ie.create(e.filters,"and")).map(n=>Xc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}In(e,t,n,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const _=t?this.Tn(t[p/h]):lo,A=this.En(e,_,n[p%h],i),k=this.dn(e,_,s[p%h],o),V=c.map(D=>this.En(e,_,D,!0));f.push(...this.createRange(A,k,V))}return f}En(e,t,n,i){const s=new Dn(e,L.empty(),t,n);return i?s:s.Jt()}dn(e,t,n,i){const s=new Dn(e,L.empty(),t,n);return i?s.Jt():s}ln(e,t){const n=new df(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.tn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.cn(t);return R.forEach(i,s=>this.ln(e,s).next(o=>{o?n!==0&&o.fields.length<function(u){let h=new se(he.comparator),f=!1;for(const p of u.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}An(e,t){const n=new Di;for(const i of Pn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Ht(i.kind);kn.bt.Pt(s,o)}return n.Wt()}Tn(e){const t=new Di;return kn.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const n=new Di;return kn.bt.Pt(Kn(this.databaseId,t),n.Ht(function(s){const o=Pn(s);return o.length===0?0:o[o.length-1].kind}(e))),n.Wt()}Pn(e,t,n){if(n===null)return[];let i=[];i.push(new Di);let s=0;for(const o of Pn(e)){const c=n[s++];for(const u of i)if(this.Vn(t,o.fieldPath)&&fs(c))i=this.mn(i,o,c);else{const h=u.Ht(o.kind);kn.bt.Pt(c,h)}}return this.fn(i)}hn(e,t,n){return this.Pn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Wt();return t}mn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const u=new Di;u.seed(c.Wt()),kn.bt.Pt(o,u.Ht(t.kind)),s.push(u)}return s}Vn(e,t){return!!e.filters.find(n=>n instanceof Y&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ni(e),i=mr(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return R.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,p){const _=p?new us(p.sequenceNumber,new st(Yn(p.readTime),new L(mt(p.documentKey)),p.largestBatchId)):us.empty(),A=f.fields.map(([k,V])=>new To(he.fromServerFormat(k),V));return new qo(f.indexId,f.collectionGroup,A,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Ni(e),s=mr(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,u=>s.put(af(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),R.forEach(c,u=>this.pn(e,i,u).next(h=>{const f=this.yn(s,u);return h.isEqual(f)?R.resolve():this.wn(e,s,u,h,f)}))))})}Sn(e,t,n,i){return pr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(n,t.key),documentKey:t.key.path.toArray()})}bn(e,t,n,i){return pr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(n,t.key),t.key.path.toArray()])}pn(e,t,n){const i=pr(e);let s=new se(zt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,t)])},(o,c)=>{s=s.add(new Dn(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}yn(e,t){let n=new se(zt);const i=this.An(t,e);if(i==null)return n;const s=Kc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(fs(o))for(const c of o.arrayValue.values||[])n=n.add(new Dn(t.indexId,e.key,this.Tn(c),i))}else n=n.add(new Dn(t.indexId,e.key,lo,i));return n}wn(e,t,n,i,s){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,p,_){const A=u.getIterator(),k=h.getIterator();let V=fr(A),D=fr(k);for(;V||D;){let j=!1,G=!1;if(V&&D){const q=f(V,D);q<0?G=!0:q>0&&(j=!0)}else V!=null?G=!0:j=!0;j?(p(D),D=fr(k)):G?(_(V),V=fr(A)):(V=fr(A),D=fr(k))}}(i,s,zt,c=>{o.push(this.Sn(e,t,n,c))},c=>{o.push(this.bn(e,t,n,c))}),R.waitFor(o)}gn(e){let t=1;return mr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>zt(o,c)).filter((o,c,u)=>!c||zt(o,u[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=zt(o,e),u=zt(o,t);if(c===0)i[0]=e.Jt();else if(c>0&&u<0)i.push(o),i.push(o.Jt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,lo,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,lo,[]];s.push(IDBKeyRange.bound(c,u))}return s}Dn(e,t){return zt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(mf)}getMinOffset(e,t){return R.mapArray(this.cn(t),n=>this.ln(e,n).next(i=>i||F())).next(mf)}}function pf(r){return De(r,"collectionParents")}function pr(r){return De(r,"indexEntries")}function Ni(r){return De(r,"indexConfiguration")}function mr(r){return De(r,"indexState")}function mf(r){U(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Ju(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new st(e.readTime,e.documentKey,t)}/**
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
 */const gf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ye{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function kg(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=n.J({range:o},(f,p,_)=>(c++,_.delete()));s.push(u.next(()=>{U(c===1)}));const h=[];for(const f of t.mutations){const p=Dm(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return R.waitFor(s).next(()=>h)}function Wo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw F();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(41943040,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);class ba{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Cn={}}static lt(e,t,n,i){U(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ba(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=br(e),o=Kt(e);return o.add({}).next(c=>{U(typeof c=="number");const u=new rl(c,t,n,i),h=function(A,k,V){const D=V.baseMutations.map(G=>gs(A.ct,G)),j=V.mutations.map(G=>gs(A.ct,G));return{userId:k,batchId:V.batchId,localWriteTimeMs:V.localWriteTime.toMillis(),baseMutations:D,mutations:j}}(this.serializer,this.userId,u),f=[];let p=new se((_,A)=>z(_.canonicalString(),A.canonicalString()));for(const _ of i){const A=Dm(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(A,UA))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Cn[c]=u.keys()}),R.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Kt(e).get(t).next(n=>n?(U(n.userId===this.userId),Cn(this.serializer,n)):null)}vn(e,t){return this.Cn[t]?R.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Cn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Kt(e).J({index:"userMutationsIndex",range:i},(o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=n),s=Cn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Kt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kt(e).U("userMutationsIndex",t).next(n=>n.map(i=>Cn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Eo(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return br(e).J({range:i},(o,c,u)=>{const[h,f,p]=o,_=mt(f);if(h===this.userId&&t.path.isEqual(_))return Kt(e).get(p).next(A=>{if(!A)throw F();U(A.userId===this.userId),s.push(Cn(this.serializer,A))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(z);const i=[];return t.forEach(s=>{const o=Eo(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=br(e).J({range:c},(h,f,p)=>{const[_,A,k]=h,V=mt(A);_===this.userId&&s.path.isEqual(V)?n=n.add(k):p.done()});i.push(u)}),R.waitFor(i).next(()=>this.Fn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Eo(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new se(z);return br(e).J({range:o},(u,h,f)=>{const[p,_,A]=u,k=mt(_);p===this.userId&&n.isPrefixOf(k)?k.length===i&&(c=c.add(A)):f.done()}).next(()=>this.Fn(e,c))}Fn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(Kt(e).get(s).next(o=>{if(o===null)throw F();U(o.userId===this.userId),n.push(Cn(this.serializer,o))}))}),R.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return kg(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),R.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return br(e).J({range:n},(s,o,c)=>{if(s[0]===this.userId){const u=mt(s[1]);i.push(u)}else c.done()}).next(()=>{U(i.length===0)})})}containsKey(e,t){return Dg(e,this.userId,t)}xn(e){return Ng(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Dg(r,e,t){const n=Eo(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return br(r).J({range:s,H:!0},(c,u,h)=>{const[f,p,_]=c;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function Kt(r){return De(r,"mutations")}function br(r){return De(r,"documentMutations")}function Ng(r){return De(r,"mutationQueues")}/**
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
 */class Xn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Xn(0)}static Ln(){return new Xn(-1)}}/**
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
 */class Xb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const n=new Xn(t.highestTargetId);return t.highestTargetId=n.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>B.fromTimestamp(new fe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.kn(e,i)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Bn(e).next(n=>(n.targetCount+=1,this.Qn(t,n),this.kn(e,n))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>gr(e).delete(t.targetId)).next(()=>this.Bn(e)).next(n=>(U(n.targetCount>0),n.targetCount-=1,this.kn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return gr(e).J((o,c)=>{const u=$i(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>R.waitFor(s)).next(()=>i)}forEachTarget(e,t){return gr(e).J((n,i)=>{const s=$i(i);t(s)})}Bn(e){return _f(e).get("targetGlobalKey").next(t=>(U(t!==null),t))}kn(e,t){return _f(e).put("targetGlobalKey",t)}qn(e,t){return gr(e).put(Pg(this.serializer,t))}Qn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Wn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return gr(e).J({range:i,index:"queryTargetsIndex"},(o,c,u)=>{const h=$i(c);Cs(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Qt(e);return t.forEach(o=>{const c=We(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(i)}removeMatchingKeys(e,t,n){const i=Qt(e);return R.forEach(t,s=>{const o=We(s.path);return R.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Qt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Qt(e);let s=K();return i.J({range:n,H:!0},(o,c,u)=>{const h=mt(o[1]),f=new L(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=We(t.path),i=IDBKeyRange.bound([n],[Am(n)],!1,!0);let s=0;return Qt(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return gr(e).get(t).next(n=>n?$i(n):null)}}function gr(r){return De(r,"targets")}function _f(r){return De(r,"targetGlobal")}function Qt(r){return De(r,"targetDocuments")}/**
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
 */function yf([r,e],[t,n]){const i=z(r,t);return i===0?z(e,n):i}class Zb{constructor(e){this.Kn=e,this.buffer=new se(yf),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();yf(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yn(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _n(t)}await this.zn(3e5)})}}class tR{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Xe.oe);const n=new Zb(t);return this.jn.forEachTarget(e,i=>n.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>n.Wn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(gf)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gf):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let n,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),wr()<=H.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function nR(r,e){return new tR(r,e)}/**
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
 */class rR{constructor(e,t){this.db=e,this.garbageCollector=nR(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}Zn(e){let t=0;return this.Jn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(n,i)=>t(i))}addReference(e,t,n){return ho(e,n)}removeReference(e,t,n){return ho(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ho(e,t)}er(e,t){return function(i,s){let o=!1;return Ng(i).Y(c=>Dg(i,c,s).next(u=>(u&&(o=!0),R.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,c)=>{if(c<=t){const u=this.er(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,B.min()),Qt(e).delete(function(p){return[0,We(p.path)]}(o))))});i.push(u)}}).next(()=>R.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ho(e,t)}Xn(e,t){const n=Qt(e);let i,s=Xe.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Xe.oe&&t(new L(mt(i)),s),s=h,i=u):s=Xe.oe}).next(()=>{s!==Xe.oe&&t(new L(mt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ho(r,e){return Qt(r).put(function(n,i){return{targetId:0,path:We(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class Vg{constructor(){this.changes=new In(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iR{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return bn(e).put(n)}removeEntry(e,t,n){return bn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],zo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.tr(e,n)))}getEntry(e,t){let n=le.newInvalidDocument(t);return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Vi(t))},(i,s)=>{n=this.nr(t,s)}).next(()=>n)}rr(e,t){let n={size:0,document:le.newInvalidDocument(t)};return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Vi(t))},(i,s)=>{n={document:this.nr(t,s),size:Wo(s)}}).next(()=>n)}getEntries(e,t){let n=et();return this.ir(e,t,(i,s)=>{const o=this.nr(i,s);n=n.insert(i,o)}).next(()=>n)}sr(e,t){let n=et(),i=new ce(L.comparator);return this.ir(e,t,(s,o)=>{const c=this.nr(s,o);n=n.insert(s,c),i=i.insert(s,Wo(o))}).next(()=>({documents:n,_r:i}))}ir(e,t,n){if(t.isEmpty())return R.resolve();let i=new se(wf);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Vi(i.first()),Vi(i.last())),o=i.getIterator();let c=o.getNext();return bn(e).J({index:"documentKeyIndex",range:s},(u,h,f)=>{const p=L.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&wf(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Vi(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),zo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bn(e).U(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=et();for(const p of h){const _=this.nr(L.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Ds(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=et();const o=vf(t,n),c=vf(t,st.max());return bn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const p=this.nr(L.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new sR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return If(e).get("remoteDocumentGlobalKey").next(t=>(U(!!t),t))}tr(e,t){return If(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const n=jb(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return le.newInvalidDocument(e)}}function Og(r){return new iR(r)}class sR extends Vg{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new In(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new se((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.ur.get(s);if(t.push(this.ar.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=sf(this.ar.serializer,o);i=i.add(s.path.popLast());const h=Wo(u);n+=h-c.size,t.push(this.ar.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=sf(this.ar.serializer,o.convertToNoDocument(B.min()));t.push(this.ar.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.ar.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(n=>(this.ur.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:n,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function If(r){return De(r,"remoteDocumentGlobal")}function bn(r){return De(r,"remoteDocumentsV14")}function Vi(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vf(r,e){const t=e.documentKey.path.toArray();return[r,zo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function wf(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=z(t[s],n[s]),i)return i;return i=z(t.length,n.length),i||(i=z(t[t.length-2],n[n.length-2]),i||z(t[t.length-1],n[n.length-1]))}/**
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
 */class oR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class xg{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Qi(n.mutation,i,Ze.empty(),fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){const i=gt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Bi();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=gt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=et();const o=Hi(),c=function(){return Hi()}();return t.forEach((u,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ft)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qi(f.mutation,h,f.mutation.getFieldMask(),fe.now())):o.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new oR(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Hi();let i=new ce((o,c)=>o-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||Ze.empty();f=c.applyToLocalView(h,f),n.set(u,f);const p=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=Zm();f.forEach(_=>{if(!s.has(_)){const A=ag(t.get(_),n.get(_));A!==null&&p.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):el(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):R.resolve(gt());let c=-1,u=s;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:c,changes:Xm(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(n=>{let i=Bi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,s).next(c=>R.forEach(c,u=>{const h=function(p,_){return new Mt(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,le.newInvalidDocument(f)))});let c=Bi();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Qi(f.mutation,h,Ze.empty(),fe.now()),Ds(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class aR{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return R.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Te(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:cl(i.bundledQuery),readTime:Te(i.readTime)}}(t)),R.resolve()}}/**
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
 */class cR{constructor(){this.overlays=new ce(L.comparator),this.hr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=gt();return R.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.hr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const i=gt(),s=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=gt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=gt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return R.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new sl(t,n));let s=this.hr.get(t);s===void 0&&(s=K(),this.hr.set(t,s)),this.hr.set(t,s.add(n.key))}}/**
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
 */class hl{constructor(){this.Pr=new se(Pe.Ir),this.Tr=new se(Pe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Pe(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Ar(new Pe(e,t))}Rr(e,t){e.forEach(n=>this.removeReference(n,t))}Vr(e){const t=new L(new J([])),n=new Pe(t,e),i=new Pe(t,e+1),s=[];return this.Tr.forEachInRange([n,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new L(new J([])),n=new Pe(t,e),i=new Pe(t,e+1);let s=K();return this.Tr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Pe(e,0),n=this.Pr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Pe{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return L.comparator(e.key,t.key)||z(e.pr,t.pr)}static Er(e,t){return z(e.pr,t.pr)||L.comparator(e.key,t.key)}}/**
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
 */class uR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new se(Pe.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rl(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.wr=this.wr.add(new Pe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.br(n),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Pe(t,0),i=new Pe(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([n,i],o=>{const c=this.Sr(o.pr);s.push(c)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(z);return t.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],c=>{n=n.add(c.pr)})}),R.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;L.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new L(s),0);let c=new se(z);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.pr)),!0)},o),R.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(n=>{const i=this.Sr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){U(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return R.forEach(t.mutations,i=>{const s=new Pe(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){const n=new Pe(t,0),i=this.wr.firstAfterOrEqual(n);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lR{constructor(e){this.vr=e,this.docs=function(){return new ce(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let n=et();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():le.newInvalidDocument(i))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=et();const o=t.path,c=new L(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ju(Rm(f),n)<=0||(i.has(f.key)||Ds(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,t,n,i){F()}Fr(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new hR(this)}getSize(e){return R.resolve(this.size)}}class hR extends Vg{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class dR{constructor(e){this.persistence=e,this.Mr=new In(t=>Wn(t),Cs),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new hl,this.targetCount=0,this.Lr=Xn.Nn()}forEachTarget(e,t){return this.Mr.forEach((n,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),R.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Xn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.qn(t),R.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Nr.containsKey(t))}}/**
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
 */class Lg{constructor(e,t){this.Br={},this.overlays={},this.kr=new Xe(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new dR(this),this.indexManager=new Jb,this.remoteDocumentCache=function(i){return new lR(i)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new Rg(t),this.$r=new aR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new uR(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){N("MemoryPersistence","Starting transaction:",e);const i=new fR(this.kr.next());return this.referenceDelegate.Ur(),n(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return R.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class fR extends Sm{constructor(e){super(),this.currentSequenceNumber=e}}class Ra{constructor(e){this.persistence=e,this.zr=new hl,this.jr=null}static Hr(e){return new Ra(e)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),R.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,n=>{const i=L.fromPath(n);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(n=>{n?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return R.or([()=>R.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class pR{constructor(e){this.serializer=e}O(e,t,n,i){const s=new va("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xd,{unique:!0}),u.createObjectStore("documentMutations")}(e),Tf(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Tf(e)),o=o.next(()=>function(u){const h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(u,h){return h.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",xd,{unique:!0});const p=h.store("mutations"),_=f.map(A=>p.put(A));return R.waitFor(_)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.Xr(s))),n<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),n<7&&i>=7&&(o=o.next(()=>this.ti(s))),n<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.ri(s))),n<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore("documentOverlays",{keyPath:YA});h.createIndex("collectionPathOverlayIndex",XA,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",ZA,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore("remoteDocumentsV14",{keyPath:BA});h.createIndex("documentKeyIndex",qA),h.createIndex("collectionGroupIndex",$A)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.si(e,s))),n<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:WA}).createIndex("sequenceNumberIndex",HA,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:QA}).createIndex("documentKeyIndex",JA,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),o}ei(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Wo(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Xr(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>R.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>R.forEach(c,u=>{U(u.userId===s.userId);const h=Cn(this.serializer,u);return kg(e,s.userId,h).next(()=>{})}))}))}ti(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,c)=>{const u=new J(o),h=function(p){return[0,We(p)]}(u);s.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:We(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>R.waitFor(s))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:KA});const n=t.store("collectionParents"),i=new ll,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:We(u)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const u=new J(o);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,u],h)=>{const f=mt(c);return s(f.popLast())}))}ri(e){const t=e.store("targets");return t.J((n,i)=>{const s=$i(i),o=Pg(this.serializer,s);return t.put(o)})}ii(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const c=t.store("remoteDocumentsV14"),u=function(p){return p.document?new L(J.fromString(p.document.name).popFirst(5)):p.noDocument?L.fromSegments(p.noDocument.path):p.unknownDocument?L.fromSegments(p.unknownDocument.path):F()}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>R.waitFor(i))}si(e,t){const n=t.store("mutations"),i=Og(this.serializer),s=new Lg(Ra.Hr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:K();Cn(this.serializer,u).keys().forEach(p=>f=f.add(p)),c.set(u.userId,f)}),R.forEach(c,(u,h)=>{const f=new Se(h),p=Aa.lt(this.serializer,f),_=s.getIndexManager(f),A=ba.lt(f,this.serializer,_,s.referenceDelegate);return new xg(i,A,p,_).recalculateAndSaveOverlaysForDocumentKeys(new Wc(t,Xe.oe),u).next()})})}}function Tf(r){r.createObjectStore("targetDocuments",{keyPath:GA}).createIndex("documentTargetsIndex",zA,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jA,{unique:!0}),r.createObjectStore("targetGlobal")}const bc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class dl{constructor(e,t,n,i,s,o,c,u,h,f,p=16){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.oi=s,this.window=o,this.document=c,this._i=h,this.ai=f,this.ui=p,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=_=>Promise.resolve(),!dl.D())throw new C(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rR(this,i),this.Ti=t+"main",this.serializer=new Rg(u),this.Ei=new _t(this.Ti,this.ui,new pR(this.serializer)),this.Qr=new Xb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Og(this.serializer),this.$r=new Gb,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,f===!1&&we("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(P.FAILED_PRECONDITION,bc);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Xe(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>fo(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(yn(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Oi(e).get("owner").next(t=>R.resolve(this.Si(t)))}bi(e){return fo(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=De(t,"clientMetadata");return n.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return R.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?R.resolve(!0):Oi(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new C(P.FAILED_PRECONDITION,bc);return!1}}return!(!this.networkEnabled||!this.inForeground)||fo(e).U().next(n=>this.vi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Wc(e,Xe.oe);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Li()}vi(e,t){return e.filter(n=>this.Ci(n.updateTimeMs,t)&&!this.Mi(n.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>fo(e).U().next(t=>this.vi(t,18e5).map(n=>n.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return ba.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Yb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Aa.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,n){N("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===16?tb:u===15?xm:u===14?Om:u===13?Vm:u===12?eb:u===11?Nm:void F()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,c=>(o=new Wc(c,this.kr?this.kr.next():Xe.oe),t==="readwrite-primary"?this.gi(o).next(u=>!!u||this.pi(o)).next(u=>{if(!u)throw we(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new C(P.FAILED_PRECONDITION,Pm);return n(o)}).next(u=>this.wi(o).next(()=>u)):this.ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}ki(e){return Oi(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(P.FAILED_PRECONDITION,bc)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Oi(e).put("owner",t)}static D(){return _t.D()}yi(e){const t=Oi(e);return t.get("owner").next(n=>this.Si(n)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Ci(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(we(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;sp()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const n=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return we("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){we("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Oi(r){return De(r,"owner")}function fo(r){return De(r,"clientMetadata")}function fl(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class pl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pl(e,t.fromCache,n,i)}}/**
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
 */class mR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Mg{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return sp()?8:Cm(ee())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new mR;return this.Ji(e,t,o).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,t,o,c.size)})}).next(()=>s.result)}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(wr()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(wr()<=H.DEBUG&&N("QueryEngine","Query:",Tr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(wr()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):R.resolve())}ji(e,t){if(Wd(t))return R.resolve(null);let n=He(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Go(t,null,"F"),n=He(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=K(...s);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const h=this.Zi(t,c);return this.Xi(t,h,o,u.readTime)?this.ji(e,Go(t,null,"F")):this.es(e,h,t,u)}))})))}Hi(e,t,n,i){return Wd(t)||i.isEqual(B.min())?R.resolve(null):this.zi.getDocuments(e,n).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,n,i)?R.resolve(null):(wr()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tr(t)),this.es(e,o,t,bm(i,-1)).next(c=>c))})}Zi(e,t){let n=new se(Jm(e));return t.forEach((i,s)=>{Ds(e,s)&&(n=n.add(s))}),n}Xi(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,n){return wr()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Tr(t)),this.zi.getDocumentsMatchingQuery(e,t,st.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class gR{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new ce(z),this.rs=new In(s=>Wn(s),Cs),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xg(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Fg(r,e,t,n){return new gR(r,e,t,n)}async function Ug(r,e){const t=M(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let u=K();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:c}))})})}function _R(r,e){const t=M(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const p=h.batch,_=p.keys();let A=R.resolve();return _.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(V=>{const D=h.docVersions.get(k);U(D!==null),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Bg(r){const e=M(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function yR(r,e){const t=M(r),n=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const c=[];e.targetChanges.forEach((f,p)=>{const _=i.get(p);if(!_)return;c.push(t.Qr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Qr.addMatchingKeys(s,f.addedDocuments,p)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Re.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),i=i.insert(p,A),function(V,D,j){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,A,f)&&c.push(t.Qr.updateTargetData(s,A))});let u=et(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(qg(s,o,e.documentUpdates).next(f=>{u=f.cs,h=f.ls})),!n.isEqual(B.min())){const f=t.Qr.getLastRemoteSnapshotVersion(s).next(p=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return R.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.ns=i,s))}function qg(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=et();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:i}})}function IR(r,e){const t=M(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function jr(r,e){const t=M(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Qr.getTargetData(n,e).next(s=>s?(i=s,R.resolve(i)):t.Qr.allocateTargetId(n).next(o=>(i=new St(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Qr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.ns.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(n.targetId,n),t.rs.set(e,n.targetId)),n})}async function Gr(r,e,t){const n=M(r),i=n.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yn(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.ns=n.ns.remove(e),n.rs.delete(i.target)}function Ho(r,e,t){const n=M(r);let i=B.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=M(u),_=p.rs.get(f);return _!==void 0?R.resolve(p.ns.get(_)):p.Qr.getTargetData(h,f)}(n,o,He(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>n.ts.getDocumentsMatchingQuery(o,e,t?i:B.min(),t?s:K())).next(c=>(Gg(n,Qm(e),c),{documents:c,hs:s})))}function $g(r,e){const t=M(r),n=M(t.Qr),i=t.ns.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function jg(r,e){const t=M(r),n=t.ss.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.os.getAllFromCollectionGroup(i,e,bm(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Gg(t,e,i),i))}function Gg(r,e,t){let n=r.ss.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.ss.set(e,n)}async function vR(r,e,t,n){const i=M(r);let s=K(),o=et();for(const h of t){const f=e.Ps(h.metadata.name);h.document&&(s=s.add(f));const p=e.Is(h);p.setReadTime(e.Ts(h.metadata.readTime)),o=o.insert(f,p)}const c=i.os.newChangeBuffer({trackRemovals:!0}),u=await jr(i,function(f){return He(ni(J.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>qg(h,c,o).next(f=>(c.apply(h),f)).next(f=>i.Qr.removeMatchingKeysForTargetId(h,u.targetId).next(()=>i.Qr.addMatchingKeys(h,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.cs,f.ls)).next(()=>f.cs)))}async function wR(r,e,t=K()){const n=await jr(r,He(cl(e.bundledQuery))),i=M(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Te(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const c=n.withResumeToken(Re.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(c.targetId,c),i.Qr.updateTargetData(s,c).next(()=>i.Qr.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.Qr.addMatchingKeys(s,t,n.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function Ef(r,e){return`firestore_clients_${r}_${e}`}function Af(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Rc(r,e){return`firestore_targets_${r}_${e}`}class Qo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Es(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Qo(e,t,i.state,s):(we("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ji{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Es(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new C(n.error.code,n.error.message))),s?new Ji(e,n.state,i):(we("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=tl();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=km(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new Jo(e,s):(we("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ml{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new ml(t.clientId,t.onlineState):(we("SharedClientState",`Failed to parse online state: ${e}`),null)}}class au{constructor(){this.activeTargetIds=tl()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pc{constructor(e,t,n,i,s){this.window=e,this.oi=t,this.persistenceKey=n,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ce(z),this.started=!1,this.ys=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=Ef(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new au),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const n of e){if(n===this.Vs)continue;const i=this.getItem(Ef(this.persistenceKey,n));if(i){const s=Jo.Es(n,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const n=this.xs(t);n&&this.Os(n)}for(const n of this.ys)this.gs(n);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,n){this.Ls(e,t,n),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Rc(this.persistenceKey,e));if(n){const i=Ji.Es(e,n);i&&(t=i.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Rc(this.persistenceKey,e))}updateQueryState(e,t,n){this.qs(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Bs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N("SharedClientState","READ",e,t),t}setItem(e,t){N("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(N("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void we("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.bs.test(t.key)){if(t.newValue==null){const n=this.$s(t.key);return this.Us(n,null)}{const n=this.Ws(t.key,t.newValue);if(n)return this.Us(n.clientId,n)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const n=this.Gs(t.key,t.newValue);if(n)return this.zs(n)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const n=this.js(t.key,t.newValue);if(n)return this.Hs(n)}}else if(t.key===this.vs){if(t.newValue!==null){const n=this.xs(t.newValue);if(n)return this.Os(n)}}else if(t.key===this.Ss){const n=function(s){let o=Xe.oe;if(s!=null)try{const c=JSON.parse(s);U(typeof c=="number"),o=c}catch(c){we("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Xe.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Fs){const n=this.Js(t.newValue);await Promise.all(n.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(t)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,t,n){const i=new Qo(this.currentUser,e,t,n),s=Af(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const t=Af(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,n){const i=Rc(this.persistenceKey,e),s=new Ji(e,t,n);this.setItem(i,s.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const n=this.$s(e);return Jo.Es(n,t)}Gs(e,t){const n=this.Ds.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Qo.Es(new Se(s),i,t)}js(e,t){const n=this.Cs.exec(e),i=Number(n[1]);return Ji.Es(i,t)}xs(e){return ml.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const n=t?this.ps.insert(e,t):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(n),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.eo(o,c).then(()=>{this.ps=n})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=tl();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class zg{constructor(){this.no=new au,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new au,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class TR{io(e){}shutdown(){}}/**
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
 */class bf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let po=null;function Sc(){return po===null?po=function(){return 268435456+Math.round(2147483648*Math.random())}():po++,"0x"+po.toString(16)}/**
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
 */const ER={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AR{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const $e="WebChannelConnection";class bR extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,n,i,s,o){const c=Sc(),u=this.vo(t,n.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,o),this.Mo(t,u,h,i).then(f=>(N("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw dt("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}xo(t,n,i,s,o,c){return this.Co(t,n,i,s,o)}Fo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}vo(t,n){const i=ER[t];return`${this.wo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,i){const s=Sc();return new Promise((o,c)=>{const u=new gm;u.setWithCredentials(!0),u.listenOnce(ym.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wo.NO_ERROR:const f=u.getResponseJson();N($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case wo.TIMEOUT:N($e,`RPC '${e}' ${s} timed out`),c(new C(P.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const p=u.getStatus();if(N($e,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const k=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(A.status);c(new C(k,A.message))}else c(new C(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new C(P.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{N($e,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);N($e,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,n,15)})}Oo(e,t,n){const i=Sc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wm(),c=vm(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new _m({})),this.Fo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");N($e,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let _=!1,A=!1;const k=new AR({lo:D=>{A?N($e,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(_||(N($e,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),N($e,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},ho:()=>p.close()}),V=(D,j,G)=>{D.listen(j,q=>{try{G(q)}catch(Q){setTimeout(()=>{throw Q},0)}})};return V(p,Ui.EventType.OPEN,()=>{A||(N($e,`RPC '${e}' stream ${i} transport opened.`),k.mo())}),V(p,Ui.EventType.CLOSE,()=>{A||(A=!0,N($e,`RPC '${e}' stream ${i} transport closed`),k.po())}),V(p,Ui.EventType.ERROR,D=>{A||(A=!0,dt($e,`RPC '${e}' stream ${i} transport errored:`,D),k.po(new C(P.UNAVAILABLE,"The operation could not be completed")))}),V(p,Ui.EventType.MESSAGE,D=>{var j;if(!A){const G=D.data[0];U(!!G);const q=G,Q=q.error||((j=q[0])===null||j===void 0?void 0:j.error);if(Q){N($e,`RPC '${e}' stream ${i} received error:`,Q);const te=Q.status;let W=function(y){const w=Ee[y];if(w!==void 0)return lg(w)}(te),v=Q.message;W===void 0&&(W=P.INTERNAL,v="Unknown error status: "+te+" with message "+Q.message),A=!0,k.po(new C(W,v)),p.close()}else N($e,`RPC '${e}' stream ${i} received:`,G),k.yo(G)}}),V(c,Im.STAT_EVENT,D=>{D.stat===zc.PROXY?N($e,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===zc.NOPROXY&&N($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}/**
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
 */function Kg(){return typeof window<"u"?window:null}function So(){return typeof document<"u"?document:null}/**
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
 */function xs(r){return new Vb(r,!0)}/**
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
 */class gl{constructor(e,t,n=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Wg{constructor(e,t,n,i,s,o,c,u){this.oi=e,this.Go=n,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new gl(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(we(t.toString()),we("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.jo===t&&this.u_(n,i)},n=>{e(()=>{const i=new C(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(i)})})}u_(e,t){const n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{n(()=>this.c_(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RR extends Wg{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=Lb(this.serializer,e),n=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Te(o.readTime):B.min()}(e);return this.listener.h_(t,n)}P_(e){const t={};t.database=nu(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=$o(u)?{documents:vg(s,u)}:{query:wg(s,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=pg(s,o.resumeToken);const h=eu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=$r(s,o.snapshotVersion.toTimestamp());const h=eu(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=Fb(this.serializer,e);n&&(t.labels=n),this.i_(t)}I_(e){const t={};t.database=nu(this.serializer),t.removeTarget=e,this.i_(t)}}class PR extends Wg{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Mb(e.writeResults,e.commitTime),n=Te(e.commitTime);return this.listener.A_(n,t)}return U(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=nu(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>gs(this.serializer,n))};this.i_(t)}}/**
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
 */class SR extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,tu(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(P.UNKNOWN,s.toString())})}xo(e,t,n,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,tu(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(P.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class CR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(we(t),this.y_=!1):N("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class kR{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{n.enqueueAndForget(async()=>{vn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=M(u);h.M_.add(4),await si(h),h.N_.set("Unknown"),h.M_.delete(4),await Ls(h)}(this))})}),this.N_=new CR(n,i)}}async function Ls(r){if(vn(r))for(const e of r.x_)await e(!0)}async function si(r){for(const e of r.x_)await e(!1)}function Pa(r,e){const t=M(r);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Il(t)?yl(t):ai(t).Xo()&&_l(t,e))}function zr(r,e){const t=M(r),n=ai(t);t.F_.delete(e),n.Xo()&&Hg(t,e),t.F_.size===0&&(n.Xo()?n.n_():vn(t)&&t.N_.set("Unknown"))}function _l(r,e){if(r.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ai(r).P_(e)}function Hg(r,e){r.L_.xe(e),ai(r).I_(e)}function yl(r){r.L_=new Cb({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.F_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),ai(r).start(),r.N_.w_()}function Il(r){return vn(r)&&!ai(r).Zo()&&r.F_.size>0}function vn(r){return M(r).M_.size===0}function Qg(r){r.L_=void 0}async function DR(r){r.N_.set("Online")}async function NR(r){r.F_.forEach((e,t)=>{_l(r,e)})}async function VR(r,e){Qg(r),Il(r)?(r.N_.D_(e),yl(r)):r.N_.set("Unknown")}async function OR(r,e,t){if(r.N_.set("Online"),e instanceof fg&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.F_.delete(c),i.L_.removeTarget(c))}(r,e)}catch(n){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Yo(r,n)}else if(e instanceof Po?r.L_.Ke(e):e instanceof dg?r.L_.He(e):r.L_.We(e),!t.isEqual(B.min()))try{const n=await Bg(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.L_.rt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.F_.get(u);if(!f)return;s.F_.set(u,f.withResumeToken(Re.EMPTY_BYTE_STRING,f.snapshotVersion)),Hg(s,u);const p=new St(f.target,u,h,f.sequenceNumber);_l(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){N("RemoteStore","Failed to raise snapshot:",n),await Yo(r,n)}}async function Yo(r,e,t){if(!yn(e))throw e;r.M_.add(1),await si(r),r.N_.set("Offline"),t||(t=()=>Bg(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),r.M_.delete(1),await Ls(r)})}function Jg(r,e){return e().catch(t=>Yo(r,t,e))}async function oi(r){const e=M(r),t=fn(e);let n=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;xR(e);)try{const i=await IR(e.localStore,n);if(i===null){e.v_.length===0&&t.n_();break}n=i.batchId,LR(e,i)}catch(i){await Yo(e,i)}Yg(e)&&Xg(e)}function xR(r){return vn(r)&&r.v_.length<10}function LR(r,e){r.v_.push(e);const t=fn(r);t.Xo()&&t.E_&&t.d_(e.mutations)}function Yg(r){return vn(r)&&!fn(r).Zo()&&r.v_.length>0}function Xg(r){fn(r).start()}async function MR(r){fn(r).V_()}async function FR(r){const e=fn(r);for(const t of r.v_)e.d_(t.mutations)}async function UR(r,e,t){const n=r.v_.shift(),i=il.from(n,e,t);await Jg(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await oi(r)}async function BR(r,e){e&&fn(r).E_&&await async function(n,i){if(function(o){return ug(o)&&o!==P.ABORTED}(i.code)){const s=n.v_.shift();fn(n).t_(),await Jg(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oi(n)}}(r,e),Yg(r)&&Xg(r)}async function Rf(r,e){const t=M(r);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const n=vn(t);t.M_.add(3),await si(t),n&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await Ls(t)}async function cu(r,e){const t=M(r);e?(t.M_.delete(2),await Ls(t)):e||(t.M_.add(2),await si(t),t.N_.set("Unknown"))}function ai(r){return r.B_||(r.B_=function(t,n,i){const s=M(t);return s.f_(),new RR(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Po:DR.bind(null,r),To:NR.bind(null,r),Ao:VR.bind(null,r),h_:OR.bind(null,r)}),r.x_.push(async e=>{e?(r.B_.t_(),Il(r)?yl(r):r.N_.set("Unknown")):(await r.B_.stop(),Qg(r))})),r.B_}function fn(r){return r.k_||(r.k_=function(t,n,i){const s=M(t);return s.f_(),new PR(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:MR.bind(null,r),Ao:BR.bind(null,r),R_:FR.bind(null,r),A_:UR.bind(null,r)}),r.x_.push(async e=>{e?(r.k_.t_(),await oi(r)):(await r.k_.stop(),r.v_.length>0&&(N("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
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
 */class vl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new vl(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ci(r,e){if(we("AsyncQueue",`${e}: ${r}`),yn(r))return new C(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class kr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(t,n)=>L.comparator(t.key,n.key),this.keyedMap=Bi(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new kr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Pf{constructor(){this.q_=new ce(L.comparator)}track(e){const t=e.doc.key,n=this.q_.get(t);n?e.type!==0&&n.type===3?this.q_=this.q_.insert(t,e):e.type===3&&n.type!==1?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.q_=this.q_.remove(t):e.type===1&&n.type===2?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):F():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Kr{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Kr(e,t,kr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class qR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class $R{constructor(){this.queries=new In(e=>Hm(e),ks),this.onlineState="Unknown",this.z_=new Set}}async function wl(r,e){const t=M(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(n=2):(s=new qR,n=e.G_()?0:1);try{switch(n){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=ci(o,`Initialization of query '${Tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&El(t)}async function Tl(r,e){const t=M(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function jR(r,e){const t=M(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.U_)c.H_(i)&&(n=!0);o.K_=i}}n&&El(t)}function GR(r,e,t){const n=M(r),i=n.queries.get(e);if(i)for(const s of i.U_)s.onError(t);n.queries.delete(e)}function El(r){r.z_.forEach(e=>{e.next()})}var uu,Sf;(Sf=uu||(uu={})).J_="default",Sf.Cache="cache";class Al{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const n=t!=="Offline";return(!this.options.ra||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==uu.Cache}}/**
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
 */class zR{constructor(e,t){this.ia=e,this.byteLength=t}sa(){return"metadata"in this.ia}}/**
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
 */class Cf{constructor(e){this.serializer=e}Ps(e){return yt(this.serializer,e)}Is(e){return e.metadata.exists?Ig(this.serializer,e.document,!1):le.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Te(e)}}class KR{constructor(e,t,n){this.oa=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zg(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++t;const n=J.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}aa(e){const t=new Map,n=new Cf(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.Ps(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||K()).add(s);t.set(o,c)}}return t}async complete(){const e=await vR(this.localStore,new Cf(this.serializer),this.documents,this.oa.id),t=this.aa(this.documents);for(const n of this.queries)await wR(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function Zg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class n_{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=K(),this.mutatedKeys=K(),this.Ia=Jm(e),this.Ta=new kr(this.Ia)}get Ea(){return this.la}da(e,t){const n=t?t.Aa:new Pf,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const _=i.get(f),A=Ds(this.query,p)?p:null,k=!!_&&this.mutatedKeys.has(_.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;_&&A?_.data.isEqual(A.data)?k!==V&&(n.track({type:3,doc:A}),D=!0):this.Ra(_,A)||(n.track({type:2,doc:A}),D=!0,(u&&this.Ia(A,u)>0||h&&this.Ia(A,h)<0)&&(c=!0)):!_&&A?(n.track({type:0,doc:A}),D=!0):_&&!A&&(n.track({type:1,doc:_}),D=!0,(u||h)&&(c=!0)),D&&(A?(o=o.add(A),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ta:o,Aa:n,Xi:c,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(A,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return V(A)-V(k)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(n),i=i!=null&&i;const c=t&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,h=u!==this.ha;return this.ha=u,o.length!==0||h?{snapshot:new Kr(this.query,e.Ta,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Pf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=K(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const t=[];return e.forEach(n=>{this.Pa.has(n)||t.push(new t_(n))}),this.Pa.forEach(n=>{e.has(n)||t.push(new e_(n))}),t}pa(e){this.la=e.hs,this.Pa=K();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return Kr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class WR{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class HR{constructor(e){this.key=e,this.wa=!1}}class QR{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new In(c=>Hm(c),ks),this.Da=new Map,this.Ca=new Set,this.va=new ce(L.comparator),this.Fa=new Map,this.Ma=new hl,this.xa={},this.Oa=new Map,this.Na=Xn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function JR(r,e,t=!0){const n=Sa(r);let i;const s=n.ba.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await r_(n,e,t,!0),i}async function YR(r,e){const t=Sa(r);await r_(t,e,!0,!1)}async function r_(r,e,t,n){const i=await jr(r.localStore,He(e)),s=i.targetId,o=t?r.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return n&&(c=await bl(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&Pa(r.remoteStore,i),c}async function bl(r,e,t,n,i){r.Ba=(p,_,A)=>async function(V,D,j,G){let q=D.view.da(j);q.Xi&&(q=await Ho(V.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,q)));const Q=G&&G.targetChanges.get(D.targetId),te=G&&G.targetMismatches.get(D.targetId)!=null,W=D.view.applyChanges(q,V.isPrimaryClient,Q,te);return lu(V,D.targetId,W.fa),W.snapshot}(r,p,_,A);const s=await Ho(r.localStore,e,!0),o=new n_(e,s.hs),c=o.da(s.documents),u=Os.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);lu(r,t,h.fa);const f=new WR(e,t,o);return r.ba.set(e,f),r.Da.has(t)?r.Da.get(t).push(e):r.Da.set(t,[e]),h.snapshot}async function XR(r,e,t){const n=M(r),i=n.ba.get(e),s=n.Da.get(i.targetId);if(s.length>1)return n.Da.set(i.targetId,s.filter(o=>!ks(o,e))),void n.ba.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Gr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&zr(n.remoteStore,i.targetId),Wr(n,i.targetId)}).catch(_n)):(Wr(n,i.targetId),await Gr(n.localStore,i.targetId,!0))}async function ZR(r,e){const t=M(r),n=t.ba.get(e),i=t.Da.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),zr(t.remoteStore,n.targetId))}async function eP(r,e,t){const n=Cl(r);try{const i=await function(o,c){const u=M(o),h=fe.now(),f=c.reduce((A,k)=>A.add(k.key),K());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=et(),V=K();return u.os.getEntries(A,f).next(D=>{k=D,k.forEach((j,G)=>{G.isValidDocument()||(V=V.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(D=>{p=D;const j=[];for(const G of c){const q=Rb(G,p.get(G.key).overlayedDocument);q!=null&&j.push(new Ft(G.key,q,Um(q.value.mapValue),de.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,j,c)}).next(D=>{_=D;const j=D.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(A,D.batchId,j)})}).then(()=>({batchId:_.batchId,changes:Xm(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.xa[o.currentUser.toKey()];h||(h=new ce(z)),h=h.insert(c,u),o.xa[o.currentUser.toKey()]=h}(n,i.batchId,t),await Ut(n,i.changes),await oi(n.remoteStore)}catch(i){const s=ci(i,"Failed to persist write");t.reject(s)}}async function i_(r,e){const t=M(r);try{const n=await yR(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Fa.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?U(o.wa):i.removedDocuments.size>0&&(U(o.wa),o.wa=!1))}),await Ut(t,n,e)}catch(n){await _n(n)}}function kf(r,e,t){const n=M(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.ba.forEach((s,o)=>{const c=o.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=M(o);u.onlineState=c;let h=!1;u.queries.forEach((f,p)=>{for(const _ of p.U_)_.j_(c)&&(h=!0)}),h&&El(u)}(n.eventManager,e),i.length&&n.Sa.h_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function tP(r,e,t){const n=M(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Fa.get(e),s=i&&i.key;if(s){let o=new ce(L.comparator);o=o.insert(s,le.newNoDocument(s,B.min()));const c=K().add(s),u=new Vs(B.min(),new Map,new ce(z),o,c);await i_(n,u),n.va=n.va.remove(s),n.Fa.delete(e),Sl(n)}else await Gr(n.localStore,e,!1).then(()=>Wr(n,e,t)).catch(_n)}async function nP(r,e){const t=M(r),n=e.batch.batchId;try{const i=await _R(t.localStore,e);Pl(t,n,null),Rl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Ut(t,i)}catch(i){await _n(i)}}async function rP(r,e,t){const n=M(r);try{const i=await function(o,c){const u=M(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(U(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(n.localStore,e);Pl(n,e,t),Rl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Ut(n,i)}catch(i){await _n(i)}}async function iP(r,e){const t=M(r);vn(t.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const c=M(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(n===-1)return void e.resolve();const i=t.Oa.get(n)||[];i.push(e),t.Oa.set(n,i)}catch(n){const i=ci(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Rl(r,e){(r.Oa.get(e)||[]).forEach(t=>{t.resolve()}),r.Oa.delete(e)}function Pl(r,e,t){const n=M(r);let i=n.xa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.xa[n.currentUser.toKey()]=i}}function Wr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Da.get(e))r.ba.delete(n),t&&r.Sa.ka(n,t);r.Da.delete(e),r.isPrimaryClient&&r.Ma.Vr(e).forEach(n=>{r.Ma.containsKey(n)||s_(r,n)})}function s_(r,e){r.Ca.delete(e.path.canonicalString());const t=r.va.get(e);t!==null&&(zr(r.remoteStore,t),r.va=r.va.remove(e),r.Fa.delete(t),Sl(r))}function lu(r,e,t){for(const n of t)n instanceof e_?(r.Ma.addReference(n.key,e),sP(r,n)):n instanceof t_?(N("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,e),r.Ma.containsKey(n.key)||s_(r,n.key)):F()}function sP(r,e){const t=e.key,n=t.path.canonicalString();r.va.get(t)||r.Ca.has(n)||(N("SyncEngine","New document in limbo: "+t),r.Ca.add(n),Sl(r))}function Sl(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const e=r.Ca.values().next().value;r.Ca.delete(e);const t=new L(J.fromString(e)),n=r.Na.next();r.Fa.set(n,new HR(t)),r.va=r.va.insert(t,n),Pa(r.remoteStore,new St(He(ni(t.path)),n,"TargetPurposeLimboResolution",Xe.oe))}}async function Ut(r,e,t){const n=M(r),i=[],s=[],o=[];n.ba.isEmpty()||(n.ba.forEach((c,u)=>{o.push(n.Ba(u,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=pl.Ki(u.targetId,h);s.push(p)}}))}),await Promise.all(o),n.Sa.h_(i),await async function(u,h){const f=M(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,_=>R.forEach(_.qi,A=>f.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>R.forEach(_.Qi,A=>f.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!yn(p))throw p;N("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=f.ns.get(_),k=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(k);f.ns=f.ns.insert(_,V)}}}(n.localStore,s))}async function oP(r,e){const t=M(r);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const n=await Ug(t.localStore,e);t.currentUser=e,function(s,o){s.Oa.forEach(c=>{c.forEach(u=>{u.reject(new C(P.CANCELLED,o))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Ut(t,n.us)}}function aP(r,e){const t=M(r),n=t.Fa.get(e);if(n&&n.wa)return K().add(n.key);{let i=K();const s=t.Da.get(e);if(!s)return i;for(const o of s){const c=t.ba.get(o);i=i.unionWith(c.view.Ea)}return i}}async function cP(r,e){const t=M(r),n=await Ho(t.localStore,e.query,!0),i=e.view.pa(n);return t.isPrimaryClient&&lu(t,e.targetId,i.fa),i}async function uP(r,e){const t=M(r);return jg(t.localStore,e).then(n=>Ut(t,n))}async function lP(r,e,t,n){const i=M(r),s=await function(c,u){const h=M(c),f=M(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.vn(p,u).next(_=>_?h.localDocuments.getDocuments(p,_):R.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await oi(i.remoteStore):t==="acknowledged"||t==="rejected"?(Pl(i,e,n||null),Rl(i,e),function(c,u){M(M(c).mutationQueue).Mn(u)}(i.localStore,e)):F(),await Ut(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function hP(r,e){const t=M(r);if(Sa(t),Cl(t),e===!0&&t.La!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await Df(t,n.toArray());t.La=!0,await cu(t.remoteStore,!0);for(const s of i)Pa(t.remoteStore,s)}else if(e===!1&&t.La!==!1){const n=[];let i=Promise.resolve();t.Da.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(Wr(t,o),Gr(t.localStore,o,!0))),zr(t.remoteStore,o)}),await i,await Df(t,n),function(o){const c=M(o);c.Fa.forEach((u,h)=>{zr(c.remoteStore,h)}),c.Ma.mr(),c.Fa=new Map,c.va=new ce(L.comparator)}(t),t.La=!1,await cu(t.remoteStore,!1)}}async function Df(r,e,t){const n=M(r),i=[],s=[];for(const o of e){let c;const u=n.Da.get(o);if(u&&u.length!==0){c=await jr(n.localStore,He(u[0]));for(const h of u){const f=n.ba.get(h),p=await cP(n,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await $g(n.localStore,o);c=await jr(n.localStore,h),await bl(n,o_(h),o,!1,c.resumeToken)}i.push(c)}return n.Sa.h_(s),i}function o_(r){return Wm(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function dP(r){return function(t){return M(M(t).persistence).Bi()}(M(r).localStore)}async function fP(r,e,t,n){const i=M(r);if(i.La)return void N("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await jg(i.localStore,Qm(s[0])),c=Vs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Re.EMPTY_BYTE_STRING);await Ut(i,o,c);break}case"rejected":await Gr(i.localStore,e,!0),Wr(i,e,n);break;default:F()}}async function pP(r,e,t){const n=Sa(r);if(n.La){for(const i of e){if(n.Da.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await $g(n.localStore,i),o=await jr(n.localStore,s);await bl(n,o_(s),o.targetId,!1,o.resumeToken),Pa(n.remoteStore,o)}for(const i of t)n.Da.has(i)&&await Gr(n.localStore,i,!1).then(()=>{zr(n.remoteStore,i),Wr(n,i)}).catch(_n)}}function Sa(r){const e=M(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=i_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tP.bind(null,e),e.Sa.h_=jR.bind(null,e.eventManager),e.Sa.ka=GR.bind(null,e.eventManager),e}function Cl(r){const e=M(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rP.bind(null,e),e}function mP(r,e,t){const n=M(r);(async function(s,o,c){try{const u=await o.getMetadata();if(await function(A,k){const V=M(A),D=Te(k.createTime);return V.persistence.runTransaction("hasNewerBundle","readonly",j=>V.$r.getBundleMetadata(j,k.id)).then(j=>!!j&&j.createTime.compareTo(D)>=0)}(s.localStore,u))return await o.close(),c._completeWith(function(A){return{taskState:"Success",documentsLoaded:A.totalDocuments,bytesLoaded:A.totalBytes,totalDocuments:A.totalDocuments,totalBytes:A.totalBytes}}(u)),Promise.resolve(new Set);c._updateProgress(Zg(u));const h=new KR(u,s.localStore,o.serializer);let f=await o.qa();for(;f;){const _=await h._a(f);_&&c._updateProgress(_),f=await o.qa()}const p=await h.complete();return await Ut(s,p.ca,void 0),await function(A,k){const V=M(A);return V.persistence.runTransaction("Save bundle","readwrite",D=>V.$r.saveBundleMetadata(D,k))}(s.localStore,u),c._completeWith(p.progress),Promise.resolve(p.ua)}catch(u){return dt("SyncEngine",`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(n,e,t).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class hu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Fg(this.persistence,new Mg,e.initialUser,this.serializer)}createPersistence(e){return new Lg(Ra.Hr,this.serializer)}createSharedClientState(e){return new zg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class a_ extends hu{constructor(e,t,n){super(),this.Qa=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await Cl(this.Qa.syncEngine),await oi(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Fg(this.persistence,new Mg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new eR(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new MA(t,this.persistence);return new LA(e.asyncQueue,n)}createPersistence(e){const t=fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new dl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Kg(),So(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new zg}}class gP extends a_{constructor(e,t){super(e,t,!1),this.Qa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Qa.syncEngine;this.sharedClientState instanceof Pc&&(this.sharedClientState.syncEngine={Zs:lP.bind(null,t),Xs:fP.bind(null,t),eo:pP.bind(null,t),Bi:dP.bind(null,t),Ys:uP.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async n=>{await hP(this.Qa.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Kg();if(!Pc.D(t))throw new C(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Pc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class kl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>kf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=oP.bind(null,this.syncEngine),await cu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $R}()}createDatastore(e){const t=xs(e.databaseInfo.databaseId),n=function(s){return new bR(s)}(e.databaseInfo);return function(s,o,c,u){return new SR(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new kR(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>kf(this.syncEngine,t,0),function(){return bf.D()?new bf:new TR}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const p=new QR(i,s,o,c,u,h);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(n){const i=M(n);N("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await si(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function Nf(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):we("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class _P{constructor(e,t){this.Ua=e,this.serializer=t,this.metadata=new ke,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(n=>{n&&n.sa()?this.metadata.resolve(n.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.ia)}`))},n=>this.metadata.reject(n))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const t=this.Wa.decode(e),n=Number(t);isNaN(n)&&this.ja(`length string (${t}) is not valid number`);const i=await this.Ha(n);return new zR(JSON.parse(i),e.length+n)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const t=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class yP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=M(i),c={documents:s.map(p=>ms(o.serializer,p))},u=await o.xo("BatchGetDocuments",o.serializer.databaseId,J.emptyPath(),c,s.length),h=new Map;u.forEach(p=>{const _=xb(o.serializer,p);h.set(_.key.toString(),_)});const f=[];return s.forEach(p=>{const _=h.get(p.toString());U(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new ii(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const i=L.fromPath(n);this.mutations.push(new nl(i,this.precondition(i)))}),await async function(n,i){const s=M(n),o={writes:i.map(c=>gs(s.serializer,c))};await s.Co("Commit",s.serializer.databaseId,J.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw F();t=B.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new C(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?de.exists(!1):de.updateTime(t):de.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new C(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return de.updateTime(t)}return de.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class IP{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this.Za=n.maxAttempts,this.Yo=new gl(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new yP(this.datastore),t=this.tu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.nu(i)}))}).catch(n=>{this.nu(n)})})}tu(e){try{const t=this.updateFunction(e);return!Ss(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ug(t)}return!1}}/**
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
 */class vP{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=Em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ci(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Co(r,e){r.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Ug(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function du(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Dl(r);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Rf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Rf(e.remoteStore,i)),r._onlineComponents=e}function c_(r){return r.name==="FirebaseError"?r.code===P.FAILED_PRECONDITION||r.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Dl(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Co(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!c_(t))throw t;dt("Error using user provided cache. Falling back to memory cache: "+t),await Co(r,new hu)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Co(r,new hu);return r._offlineComponents}async function ka(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await du(r,r._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await du(r,new kl))),r._onlineComponents}function u_(r){return Dl(r).then(e=>e.persistence)}function Nl(r){return Dl(r).then(e=>e.localStore)}function l_(r){return ka(r).then(e=>e.remoteStore)}function Vl(r){return ka(r).then(e=>e.syncEngine)}function wP(r){return ka(r).then(e=>e.datastore)}async function Hr(r){const e=await ka(r),t=e.eventManager;return t.onListen=JR.bind(null,e.syncEngine),t.onUnlisten=XR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZR.bind(null,e.syncEngine),t}function TP(r){return r.asyncQueue.enqueue(async()=>{const e=await u_(r),t=await l_(r);return e.setNetworkEnabled(!0),function(i){const s=M(i);return s.M_.delete(0),Ls(s)}(t)})}function EP(r){return r.asyncQueue.enqueue(async()=>{const e=await u_(r),t=await l_(r);return e.setNetworkEnabled(!1),async function(i){const s=M(i);s.M_.add(0),await si(s),s.N_.set("Offline")}(t)})}function AP(r,e){const t=new ke;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await function(h,f){const p=M(h);return p.persistence.runTransaction("read document","readonly",_=>p.localDocuments.getDocument(_,f))}(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new C(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=ci(c,`Failed to get document '${s} from cache`);o.reject(u)}}(await Nl(r),e,t)),t.promise}function h_(r,e,t={}){const n=new ke;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new Ca({next:_=>{o.enqueueAndForget(()=>Tl(s,p));const A=_.docs.has(c);!A&&_.fromCache?h.reject(new C(P.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?h.reject(new C(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Al(ni(c.path),f,{includeMetadataChanges:!0,ra:!0});return wl(s,p)}(await Hr(r),r.asyncQueue,e,t,n)),n.promise}function bP(r,e){const t=new ke;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await Ho(i,s,!0),u=new n_(s,c.hs),h=u.da(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const u=ci(c,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Nl(r),e,t)),t.promise}function d_(r,e,t={}){const n=new ke;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new Ca({next:_=>{o.enqueueAndForget(()=>Tl(s,p)),_.fromCache&&u.source==="server"?h.reject(new C(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Al(c,f,{includeMetadataChanges:!0,ra:!0});return wl(s,p)}(await Hr(r),r.asyncQueue,e,t,n)),n.promise}function RP(r,e){const t=new Ca(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).z_.add(s),s.next()}(await Hr(r),t)),()=>{t.$a(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){M(i).z_.delete(s)}(await Hr(r),t))}}function PP(r,e,t,n){const i=function(o,c){let u;return u=typeof o=="string"?hg().encode(o):o,function(f,p){return new _P(f,p)}(function(f,p){if(f instanceof Uint8Array)return Nf(f,p);if(f instanceof ArrayBuffer)return Nf(new Uint8Array(f),p);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),c)}(t,xs(e));r.asyncQueue.enqueueAndForget(async()=>{mP(await Vl(r),i,n)})}function SP(r,e){return r.asyncQueue.enqueue(async()=>function(n,i){const s=M(n);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await Nl(r),e))}/**
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
 */function f_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Vf=new Map;/**
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
 */function Ol(r,e,t){if(!t)throw new C(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function p_(r,e,t,n){if(e===!0&&n===!0)throw new C(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Of(r){if(!L.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xf(r){if(L.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Da(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function Z(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new C(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Da(r);throw new C(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function m_(r,e){if(e<=0)throw new C(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Lf{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ms{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bA;switch(n.type){case"firstParty":return new CA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Vf.get(t);n&&(N("ComponentProvider","Removing Datastore"),Vf.delete(t),n.terminate())}(this),Promise.resolve()}}function CP(r,e,t,n={}){var i;const s=(r=Z(r,Ms))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let c,u;if(typeof n.mockUserToken=="string")c=n.mockUserToken,u=Se.MOCK_USER;else{c=Gy(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new C(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Se(h)}r._authCredentials=new RA(new Tm(c,u))}}/**
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
 */let Qe=class g_{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new g_(this.firestore,e,this._query)}},pe=class __{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new __(this.firestore,e,this._key)}},sn=class y_ extends Qe{constructor(e,t,n){super(e,t,ni(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new L(e))}withConverter(e){return new y_(this.firestore,e,this._path)}};function I_(r,e,...t){if(r=$(r),Ol("collection","path",e),r instanceof Ms){const n=J.fromString(e,...t);return xf(n),new sn(r,null,n)}{if(!(r instanceof pe||r instanceof sn))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return xf(n),new sn(r.firestore,null,n)}}function kP(r,e){if(r=Z(r,Ms),Ol("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Qe(r,null,function(n){return new Mt(J.emptyPath(),n)}(e))}function Xo(r,e,...t){if(r=$(r),arguments.length===1&&(e=Em.newId()),Ol("doc","path",e),r instanceof Ms){const n=J.fromString(e,...t);return Of(n),new pe(r,null,new L(n))}{if(!(r instanceof pe||r instanceof sn))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Of(n),new pe(r.firestore,r instanceof sn?r.converter:null,new L(n))}}function v_(r,e){return r=$(r),e=$(e),(r instanceof pe||r instanceof sn)&&(e instanceof pe||e instanceof sn)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function w_(r,e){return r=$(r),e=$(e),r instanceof Qe&&e instanceof Qe&&r.firestore===e.firestore&&ks(r._query,e._query)&&r.converter===e.converter}/**
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
 */class DP{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new gl(this,"async_queue_retry"),this.hu=()=>{const t=So();t&&N("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=So();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=So();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new ke;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!yn(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(n=>{this.au=n,this.uu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw we("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.uu=!1,n))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=vl.createAndSchedule(this,e,t,n,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function fu(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class NP{constructor(){this._progressObserver={},this._taskCompletionResolver=new ke,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const VP=-1;let ye=class extends Ms{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new DP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||T_(this),this._firestoreClient.terminate()}};function Ne(r){return r._firestoreClient||T_(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function T_(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,h,f){return new ib(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f_(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new vP(r._authCredentials,r._appCheckCredentials,r._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function OP(r,e){A_(r=Z(r,ye));const t=Ne(r);if(t._uninitializedComponentsProvider)throw new C(P.FAILED_PRECONDITION,"SDK cache is already specified.");dt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=r._freezeSettings(),i=new kl;return E_(t,i,new a_(i,n.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function xP(r){A_(r=Z(r,ye));const e=Ne(r);if(e._uninitializedComponentsProvider)throw new C(P.FAILED_PRECONDITION,"SDK cache is already specified.");dt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings(),n=new kl;return E_(e,n,new gP(n,t.cacheSizeBytes))}function E_(r,e,t){const n=new ke;return r.asyncQueue.enqueue(async()=>{try{await Co(r,t),await du(r,e),n.resolve()}catch(i){const s=i;if(!c_(s))throw s;dt("Error enabling indexeddb cache. Falling back to memory cache: "+s),n.reject(s)}}).then(()=>n.promise)}function LP(r){if(r._initialized&&!r._terminated)throw new C(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ke;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!_t.D())return Promise.resolve();const i=n+"main";await _t.delete(i)}(fl(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function MP(r){return function(t){const n=new ke;return t.asyncQueue.enqueueAndForget(async()=>iP(await Vl(t),n)),n.promise}(Ne(r=Z(r,ye)))}function FP(r){return TP(Ne(r=Z(r,ye)))}function UP(r){return EP(Ne(r=Z(r,ye)))}function BP(r,e){const t=Ne(r=Z(r,ye)),n=new NP;return PP(t,r._databaseId,e,n),n}function qP(r,e){return SP(Ne(r=Z(r,ye)),e).then(t=>t?new Qe(r,null,t.query):null)}function A_(r){if(r._initialized||r._terminated)throw new C(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wt(Re.fromBase64String(e))}catch(t){throw new C(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wt(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let pn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let ir=class{constructor(e){this._methodName=e}};/**
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
 */class Na{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
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
 */const $P=/^__.*__$/;class jP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new ri(e,this.data,t,this.fieldTransforms)}}class b_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function R_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Va{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Va(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.wu(e),i}Su(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Zo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(R_(this.fu)&&$P.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class GP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||xs(e)}Fu(e,t,n,i=!1){return new Va({fu:e,methodName:t,vu:n,path:he.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sr(r){const e=r._freezeSettings(),t=xs(r._databaseId);return new GP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Oa(r,e,t,n,i,s={}){const o=r.Fu(s.merge||s.mergeFields?2:0,e,t,i);ql("Data must be an object, but it was:",o,n);const c=C_(n,o);let u,h;if(s.merge)u=new Ze(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const _=pu(e,p,t);if(!o.contains(_))throw new C(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);D_(f,_)||f.push(_)}u=new Ze(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new jP(new xe(c),u,h)}class Fs extends ir{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fs}}function P_(r,e,t){return new Va({fu:3,vu:e.settings.vu,methodName:r._methodName,yu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class xl extends ir{_toFieldTransform(e){return new Ns(e.path,new Br)}isEqual(e){return e instanceof xl}}class Ll extends ir{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=P_(this,e,!0),n=this.Mu.map(s=>or(s,t)),i=new Hn(n);return new Ns(e.path,i)}isEqual(e){return e instanceof Ll&&es(this.Mu,e.Mu)}}class Ml extends ir{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=P_(this,e,!0),n=this.Mu.map(s=>or(s,t)),i=new Qn(n);return new Ns(e.path,i)}isEqual(e){return e instanceof Ml&&es(this.Mu,e.Mu)}}class Fl extends ir{constructor(e,t){super(e),this.xu=t}_toFieldTransform(e){const t=new qr(e.serializer,ng(e.serializer,this.xu));return new Ns(e.path,t)}isEqual(e){return e instanceof Fl&&this.xu===e.xu}}function Ul(r,e,t,n){const i=r.Fu(1,e,t);ql("Data must be an object, but it was:",i,n);const s=[],o=xe.empty();rr(n,(u,h)=>{const f=$l(e,u,t);h=$(h);const p=i.Su(f);if(h instanceof Fs)s.push(f);else{const _=or(h,p);_!=null&&(s.push(f),o.set(f,_))}});const c=new Ze(s);return new b_(o,c,i.fieldTransforms)}function Bl(r,e,t,n,i,s){const o=r.Fu(1,e,t),c=[pu(e,n,t)],u=[i];if(s.length%2!=0)throw new C(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(pu(e,s[_])),u.push(s[_+1]);const h=[],f=xe.empty();for(let _=c.length-1;_>=0;--_)if(!D_(h,c[_])){const A=c[_];let k=u[_];k=$(k);const V=o.Su(A);if(k instanceof Fs)h.push(A);else{const D=or(k,V);D!=null&&(h.push(A),f.set(A,D))}}const p=new Ze(h);return new b_(f,p,o.fieldTransforms)}function S_(r,e,t,n=!1){return or(t,r.Fu(n?4:3,e))}function or(r,e){if(k_(r=$(r)))return ql("Unsupported field value:",e,r),C_(r,e);if(r instanceof ir)return function(n,i){if(!R_(i.fu))throw i.Du(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let u=or(c,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=$(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ng(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=fe.fromDate(n);return{timestampValue:$r(i.serializer,s)}}if(n instanceof fe){const s=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$r(i.serializer,s)}}if(n instanceof Na)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wt)return{bytesValue:pg(i.serializer,n._byteString)};if(n instanceof pe){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:al(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Du(`Unsupported field value: ${Da(n)}`)}(r,e)}function C_(r,e){const t={};return Lm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(r,(n,i)=>{const s=or(i,e.pu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function k_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof fe||r instanceof Na||r instanceof wt||r instanceof pe||r instanceof ir)}function ql(r,e,t){if(!k_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=Da(t);throw n==="an object"?e.Du(r+" a custom object"):e.Du(r+" "+n)}}function pu(r,e,t){if((e=$(e))instanceof pn)return e._internalPath;if(typeof e=="string")return $l(r,e);throw Zo("Field path arguments must be of type string or ",r,!1,void 0,t)}const zP=new RegExp("[~\\*/\\[\\]]");function $l(r,e,t){if(e.search(zP)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new pn(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Zo(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new C(P.INVALID_ARGUMENT,c+r+u)}function D_(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class _s{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KP extends _s{data(){return super.data()}}function xa(r,e){return typeof e=="string"?$l(r,e):e instanceof pn?e._internalPath:e._delegate._internalPath}/**
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
 */function N_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jl{}class Us extends jl{}function Wt(r,e,...t){let n=[];e instanceof jl&&n.push(e),n=n.concat(t),function(s){const o=s.filter(u=>u instanceof Gl).length,c=s.filter(u=>u instanceof La).length;if(o>1||o>0&&c>0)throw new C(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class La extends Us{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new La(e,t,n)}_apply(e){const t=this._parse(e);return O_(e._query,t),new Qe(e.firestore,e.converter,Zc(e._query,t))}_parse(e){const t=sr(e.firestore);return function(s,o,c,u,h,f,p){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ff(p,f);const A=[];for(const k of p)A.push(Mf(u,s,k));_={arrayValue:{values:A}}}else _=Mf(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ff(p,f),_=S_(c,o,p,f==="in"||f==="not-in");return Y.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function WP(r,e,t){const n=e,i=xa("where",r);return La._create(i,n,t)}class Gl extends jl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gl(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)O_(o,u),o=Zc(o,u)}(e._query,t),new Qe(e.firestore,e.converter,Zc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zl extends Us{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ps(s,o)}(e._query,this._field,this._direction);return new Qe(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Mt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function HP(r,e="asc"){const t=e,n=xa("orderBy",r);return zl._create(n,t)}class Ma extends Us{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ma(e,t,n)}_apply(e){return new Qe(e.firestore,e.converter,Go(e._query,this._limit,this._limitType))}}function QP(r){return m_("limit",r),Ma._create("limit",r,"F")}function JP(r){return m_("limitToLast",r),Ma._create("limitToLast",r,"L")}class Fa extends Us{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Fa(e,t,n)}_apply(e){const t=V_(e,this.type,this._docOrFields,this._inclusive);return new Qe(e.firestore,e.converter,function(i,s){return new Mt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function YP(...r){return Fa._create("startAt",r,!0)}function XP(...r){return Fa._create("startAfter",r,!1)}class Ua extends Us{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ua(e,t,n)}_apply(e){const t=V_(e,this.type,this._docOrFields,this._inclusive);return new Qe(e.firestore,e.converter,function(i,s){return new Mt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function ZP(...r){return Ua._create("endBefore",r,!1)}function eS(...r){return Ua._create("endAt",r,!0)}function V_(r,e,t,n){if(t[0]=$(t[0]),t[0]instanceof _s)return function(s,o,c,u,h){if(!u)throw new C(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const p of Cr(s))if(p.field.isKeyField())f.push(Kn(o,u.key));else{const _=u.data.field(p.field);if(wa(_))throw new C(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const A=p.field.canonicalString();throw new C(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}f.push(_)}return new dn(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=sr(r.firestore);return function(o,c,u,h,f,p){const _=o.explicitOrderBy;if(f.length>_.length)throw new C(P.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let k=0;k<f.length;k++){const V=f[k];if(_[k].field.isKeyField()){if(typeof V!="string")throw new C(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof V}`);if(!el(o)&&V.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${V}' contains a slash.`);const D=o.path.child(J.fromString(V));if(!L.isDocumentKey(D))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const j=new L(D);A.push(Kn(c,j))}else{const D=S_(u,h,V);A.push(D)}}return new dn(A,p)}(r._query,r.firestore._databaseId,i,e,t,n)}}function Mf(r,e,t){if(typeof(t=$(t))=="string"){if(t==="")throw new C(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!el(e)&&t.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(J.fromString(t));if(!L.isDocumentKey(n))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Kn(r,new L(n))}if(t instanceof pe)return Kn(r,t._key);throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Da(t)}.`)}function Ff(r,e){if(!Array.isArray(r)||r.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function O_(r,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Kl{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return rr(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertGeoPoint(e){return new Na(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Xu(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const t=Nt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);U(bg(n));const i=new ln(n.get(1),n.get(3)),s=new L(n.popFirst(5));return i.isEqual(t)||we(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Ba(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class tS extends Kl{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}/**
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
 */class On{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Vt=class extends _s{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Yi=class extends Vt{data(e={}){return super.data(e)}},mn=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Yi(this._firestore,this._userDataWriter,n.key,n,new On(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new On(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new On(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:nS(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function nS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function x_(r,e){return r instanceof Vt&&e instanceof Vt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof mn&&e instanceof mn&&r._firestore===e._firestore&&w_(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function rS(r){r=Z(r,pe);const e=Z(r.firestore,ye);return h_(Ne(e),r._key).then(t=>Wl(e,r,t))}class ar extends Kl{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function iS(r){r=Z(r,pe);const e=Z(r.firestore,ye),t=Ne(e),n=new ar(e);return AP(t,r._key).then(i=>new Vt(e,n,r._key,i,new On(i!==null&&i.hasLocalMutations,!0),r.converter))}function sS(r){r=Z(r,pe);const e=Z(r.firestore,ye);return h_(Ne(e),r._key,{source:"server"}).then(t=>Wl(e,r,t))}function oS(r){r=Z(r,Qe);const e=Z(r.firestore,ye),t=Ne(e),n=new ar(e);return N_(r._query),d_(t,r._query).then(i=>new mn(e,n,r,i))}function aS(r){r=Z(r,Qe);const e=Z(r.firestore,ye),t=Ne(e),n=new ar(e);return bP(t,r._query).then(i=>new mn(e,n,r,i))}function cS(r){r=Z(r,Qe);const e=Z(r.firestore,ye),t=Ne(e),n=new ar(e);return d_(t,r._query,{source:"server"}).then(i=>new mn(e,n,r,i))}function Uf(r,e,t){r=Z(r,pe);const n=Z(r.firestore,ye),i=Ba(r.converter,e,t);return Bs(n,[Oa(sr(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,de.none())])}function Bf(r,e,t,...n){r=Z(r,pe);const i=Z(r.firestore,ye),s=sr(i);let o;return o=typeof(e=$(e))=="string"||e instanceof pn?Bl(s,"updateDoc",r._key,e,t,n):Ul(s,"updateDoc",r._key,e),Bs(i,[o.toMutation(r._key,de.exists(!0))])}function uS(r){return Bs(Z(r.firestore,ye),[new ii(r._key,de.none())])}function lS(r,e){const t=Z(r.firestore,ye),n=Xo(r),i=Ba(r.converter,e);return Bs(t,[Oa(sr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,de.exists(!1))]).then(()=>n)}function L_(r,...e){var t,n,i;r=$(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||fu(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fu(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(r instanceof pe)h=Z(r.firestore,ye),f=ni(r._key.path),u={next:p=>{e[o]&&e[o](Wl(h,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Z(r,Qe);h=Z(p.firestore,ye),f=p._query;const _=new ar(h);u={next:A=>{e[o]&&e[o](new mn(h,_,p,A))},error:e[o+1],complete:e[o+2]},N_(r._query)}return function(_,A,k,V){const D=new Ca(V),j=new Al(A,D,k);return _.asyncQueue.enqueueAndForget(async()=>wl(await Hr(_),j)),()=>{D.$a(),_.asyncQueue.enqueueAndForget(async()=>Tl(await Hr(_),j))}}(Ne(h),f,c,u)}function hS(r,e){return RP(Ne(r=Z(r,ye)),fu(e)?e:{next:e})}function Bs(r,e){return function(n,i){const s=new ke;return n.asyncQueue.enqueueAndForget(async()=>eP(await Vl(n),i,s)),s.promise}(Ne(r),e)}function Wl(r,e,t){const n=t.docs.get(e._key),i=new ar(r);return new Vt(r,i,e._key,n,new On(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const dS={maxAttempts:5};/**
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
 */let fS=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=sr(e)}set(e,t,n){this._verifyNotCommitted();const i=Jt(e,this._firestore),s=Ba(i.converter,t,n),o=Oa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,de.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Jt(e,this._firestore);let o;return o=typeof(t=$(t))=="string"||t instanceof pn?Bl(this._dataReader,"WriteBatch.update",s._key,t,n,i):Ul(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,de.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Jt(e,this._firestore);return this._mutations=this._mutations.concat(new ii(t._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Jt(r,e){if((r=$(r)).firestore!==e)throw new C(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */let pS=class extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=sr(t)}get(t){const n=Jt(t,this._firestore),i=new tS(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return F();const o=s[0];if(o.isFoundDocument())return new _s(this._firestore,i,o.key,o,n.converter);if(o.isNoDocument())return new _s(this._firestore,i,n._key,null,n.converter);throw F()})}set(t,n,i){const s=Jt(t,this._firestore),o=Ba(s.converter,n,i),c=Oa(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,n,i,...s){const o=Jt(t,this._firestore);let c;return c=typeof(n=$(n))=="string"||n instanceof pn?Bl(this._dataReader,"Transaction.update",o._key,n,i,s):Ul(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,c),this}delete(t){const n=Jt(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Jt(e,this._firestore),n=new ar(this._firestore);return super.get(e).then(i=>new Vt(this._firestore,n,t._key,i._document,new On(!1,!1),t.converter))}};function mS(r,e,t){r=Z(r,ye);const n=Object.assign(Object.assign({},dS),t);return function(s){if(s.maxAttempts<1)throw new C(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,o,c){const u=new ke;return s.asyncQueue.enqueueAndForget(async()=>{const h=await wP(s);new IP(s.asyncQueue,h,c,o,u).Xa()}),u.promise}(Ne(r),i=>e(new pS(r,i)),n)}/**
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
 */function gS(){return new Fs("deleteField")}function _S(){return new xl("serverTimestamp")}function yS(...r){return new Ll("arrayUnion",r)}function IS(...r){return new Ml("arrayRemove",r)}function vS(r){return new Fl("increment",r)}(function(e,t=!0){(function(i){ti=i})(ft),It(new ct("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new ye(new PA(n.getProvider("auth-internal")),new DA(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),it(Nd,"4.6.4",e),it(Nd,"4.6.4","esm2017")})();const wS="@firebase/firestore-compat",TS="0.3.33";/**
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
 */function Hl(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function qf(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function $f(){if(!nb())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ys{constructor(e){this._delegate=e}static fromBase64String(e){return $f(),new ys(wt.fromBase64String(e))}static fromUint8Array(e){return qf(),new ys(wt.fromUint8Array(e))}toBase64(){return $f(),this._delegate.toBase64()}toUint8Array(){return qf(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function mu(r){return ES(r,["next","error","complete"])}function ES(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class AS{enableIndexedDbPersistence(e,t){return OP(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return xP(e._delegate)}clearIndexedDbPersistence(e){return LP(e._delegate)}}class M_{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof ln||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&dt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){CP(this._delegate,e,t,n)}enableNetwork(){return FP(this._delegate)}disableNetwork(){return UP(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,p_("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return MP(this._delegate)}onSnapshotsInSync(e){return hS(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qr(this,I_(this._delegate,e))}catch(t){throw Ke(t,"collection()","Firestore.collection()")}}doc(e){try{return new ot(this,Xo(this._delegate,e))}catch(t){throw Ke(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ze(this,kP(this._delegate,e))}catch(t){throw Ke(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return mS(this._delegate,t=>e(new F_(this,t)))}batch(){return Ne(this._delegate),new U_(new fS(this._delegate,e=>Bs(this._delegate,e)))}loadBundle(e){return BP(this._delegate,e)}namedQuery(e){return qP(this._delegate,e).then(t=>t?new ze(this,t):null)}}class qa extends Kl{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(new wt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return ot.forKey(t,this.firestore,null)}}function bS(r){EA(r)}class F_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}get(e){const t=xn(e);return this._delegate.get(t).then(n=>new Is(this._firestore,new Vt(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=xn(e);return n?(Hl("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}}class U_{constructor(e){this._delegate=e}set(e,t,n){const i=xn(e);return n?(Hl("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=xn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=xn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Zn{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Yi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new vs(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Zn.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new Zn(e,new qa(e),t),i.set(t,s)),s}}Zn.INSTANCES=new WeakMap;class ot{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}static forPath(e,t,n){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new ot(t,new pe(t._delegate,n,new L(e)))}static forKey(e,t,n){return new ot(t,new pe(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Qr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qr(this.firestore,I_(this._delegate,e))}catch(t){throw Ke(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=$(e),e instanceof pe?v_(this._delegate,e):!1}set(e,t){t=Hl("DocumentReference.set",t);try{return t?Uf(this._delegate,e,t):Uf(this._delegate,e)}catch(n){throw Ke(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Bf(this._delegate,e):Bf(this._delegate,e,t,...n)}catch(i){throw Ke(i,"updateDoc()","DocumentReference.update()")}}delete(){return uS(this._delegate)}onSnapshot(...e){const t=B_(e),n=q_(e,i=>new Is(this.firestore,new Vt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return L_(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=iS(this._delegate):(e==null?void 0:e.source)==="server"?t=sS(this._delegate):t=rS(this._delegate),t.then(n=>new Is(this.firestore,new Vt(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new ot(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ke(r,e,t){return r.message=r.message.replace(e,t),r}function B_(r){for(const e of r)if(typeof e=="object"&&!mu(e))return e;return{}}function q_(r,e){var t,n;let i;return mu(r[0])?i=r[0]:mu(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class Is{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new ot(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return x_(this._delegate,e._delegate)}}class vs extends Is{data(e){const t=this._delegate.data(e);return this._delegate._converter||AA(t!==void 0),t}}class ze{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new qa(e)}where(e,t,n){try{return new ze(this.firestore,Wt(this._delegate,WP(e,t,n)))}catch(i){throw Ke(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new ze(this.firestore,Wt(this._delegate,HP(e,t)))}catch(n){throw Ke(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ze(this.firestore,Wt(this._delegate,QP(e)))}catch(t){throw Ke(t,"limit()","Query.limit()")}}limitToLast(e){try{return new ze(this.firestore,Wt(this._delegate,JP(e)))}catch(t){throw Ke(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ze(this.firestore,Wt(this._delegate,YP(...e)))}catch(t){throw Ke(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ze(this.firestore,Wt(this._delegate,XP(...e)))}catch(t){throw Ke(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ze(this.firestore,Wt(this._delegate,ZP(...e)))}catch(t){throw Ke(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ze(this.firestore,Wt(this._delegate,eS(...e)))}catch(t){throw Ke(t,"endAt()","Query.endAt()")}}isEqual(e){return w_(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=aS(this._delegate):(e==null?void 0:e.source)==="server"?t=cS(this._delegate):t=oS(this._delegate),t.then(n=>new gu(this.firestore,new mn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=B_(e),n=q_(e,i=>new gu(this.firestore,new mn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return L_(this._delegate,t,n)}withConverter(e){return new ze(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class RS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new vs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class gu{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new ze(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new vs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new RS(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new vs(this._firestore,n))})}isEqual(e){return x_(this._delegate,e._delegate)}}class Qr extends ze{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new ot(this.firestore,e):null}doc(e){try{return e===void 0?new ot(this.firestore,Xo(this._delegate)):new ot(this.firestore,Xo(this._delegate,e))}catch(t){throw Ke(t,"doc()","CollectionReference.doc()")}}add(e){return lS(this._delegate,e).then(t=>new ot(this.firestore,t))}isEqual(e){return v_(this._delegate,e._delegate)}withConverter(e){return new Qr(this.firestore,e?this._delegate.withConverter(Zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xn(r){return Z(r,pe)}/**
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
 */class Ql{constructor(...e){this._delegate=new pn(...e)}static documentId(){return new Ql(he.keyField().canonicalString())}isEqual(e){return e=$(e),e instanceof pn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Nn{constructor(e){this._delegate=e}static serverTimestamp(){const e=_S();return e._methodName="FieldValue.serverTimestamp",new Nn(e)}static delete(){const e=gS();return e._methodName="FieldValue.delete",new Nn(e)}static arrayUnion(...e){const t=yS(...e);return t._methodName="FieldValue.arrayUnion",new Nn(t)}static arrayRemove(...e){const t=IS(...e);return t._methodName="FieldValue.arrayRemove",new Nn(t)}static increment(e){const t=vS(e);return t._methodName="FieldValue.increment",new Nn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const PS={Firestore:M_,GeoPoint:Na,Timestamp:fe,Blob:ys,Transaction:F_,WriteBatch:U_,DocumentReference:ot,DocumentSnapshot:Is,Query:ze,QueryDocumentSnapshot:vs,QuerySnapshot:gu,CollectionReference:Qr,FieldPath:Ql,FieldValue:Nn,setLogLevel:bS,CACHE_SIZE_UNLIMITED:VP};function SS(r,e){r.INTERNAL.registerComponent(new ct("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},PS)))}/**
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
 */function CS(r){SS(r,(e,t)=>new M_(e,t,new AS)),r.registerVersion(wS,TS)}CS(tr);function $_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=$_,j_=new Tt("auth","Firebase",$_());/**
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
 */const ea=new ws("@firebase/auth");function DS(r,...e){ea.logLevel<=H.WARN&&ea.warn(`Auth (${ft}): ${r}`,...e)}function ko(r,...e){ea.logLevel<=H.ERROR&&ea.error(`Auth (${ft}): ${r}`,...e)}/**
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
 */function ta(r,...e){throw Jl(r,...e)}function G_(r,...e){return Jl(r,...e)}function z_(r,e,t){const n=Object.assign(Object.assign({},kS()),{[e]:t});return new Tt("auth","Firebase",n).create(e,{appName:r.name})}function Do(r){return z_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return j_.create(r,...e)}function re(r,e,...t){if(!r)throw Jl(e,...t)}function Ct(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ko(e),new Error(e)}function na(r,e){r||Ct(e)}function NS(){return jf()==="http:"||jf()==="https:"}function jf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function VS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NS()||Tu()||"connection"in navigator)?navigator.onLine:!0}function OS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,na(t>e,"Short delay should be less than long delay!"),this.isMobile=tp()||ia()}get(){return VS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xS(r,e){na(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class K_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MS=new qs(3e4,6e4);function Yl(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function $s(r,e,t,n,i={}){return W_(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=Ot(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode),K_.fetch()(H_(r,r.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function W_(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},LS),e);try{const i=new US(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mo(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw mo(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw mo(r,"user-disabled",o);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw z_(r,f,h);ta(r,f)}}catch(i){if(i instanceof Le)throw i;ta(r,"network-request-failed",{message:String(i)})}}async function FS(r,e,t,n,i={}){const s=await $s(r,e,t,n,i);return"mfaPendingCredential"in s&&ta(r,"multi-factor-auth-required",{_serverResponse:s}),s}function H_(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?xS(r.config,i):`${r.config.apiScheme}://${i}`}class US{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(G_(this.auth,"network-request-failed")),MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=G_(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function BS(r,e){return $s(r,"POST","/v1/accounts:delete",e)}async function Q_(r,e){return $s(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qS(r,e=!1){const t=$(r),n=await t.getIdToken(e),i=J_(n);re(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Xi(Cc(i.auth_time)),issuedAtTime:Xi(Cc(i.iat)),expirationTime:Xi(Cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cc(r){return Number(r)*1e3}function J_(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iu(t);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gf(r){const e=J_(r);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _u(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Le&&$S(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function $S({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ra(r){var e;const t=r.auth,n=await r.getIdToken(),i=await _u(r,Q_(t,{idToken:n}));re(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Y_(s.providerUserInfo):[],c=zS(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function GS(r){const e=$(r);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Y_(r){return r.map(e=>{var{providerId:t}=e,n=Jr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function KS(r,e){const t=await W_(r,{},async()=>{const n=Ot({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=H_(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",K_.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function WS(r,e){return $s(r,"POST","/v2/accounts:revokeToken",Yl(r,e))}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Gf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await KS(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Dr;return n&&(re(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
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
 */function Ht(r,e){re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Jr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _u(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qS(this,e)}reload(){return GS(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ra(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ae(this.auth.app))return Promise.reject(Do(this.auth));const e=await this.getIdToken();return await _u(this,BS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,G=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:Q,isAnonymous:te,providerData:W,stsTokenManager:v}=t;re(q&&v,e,"internal-error");const g=Dr.fromJSON(this.name,v);re(typeof q=="string",e,"internal-error"),Ht(p,e.name),Ht(_,e.name),re(typeof Q=="boolean",e,"internal-error"),re(typeof te=="boolean",e,"internal-error"),Ht(A,e.name),Ht(k,e.name),Ht(V,e.name),Ht(D,e.name),Ht(j,e.name),Ht(G,e.name);const y=new nn({uid:q,auth:e,email:_,emailVerified:Q,displayName:p,isAnonymous:te,photoURL:k,phoneNumber:A,tenantId:V,stsTokenManager:g,createdAt:j,lastLoginAt:G});return W&&Array.isArray(W)&&(y.providerData=W.map(w=>Object.assign({},w))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new Dr;i.updateFromServerResponse(t);const s=new nn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ra(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Y_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Dr;c.updateFromIdToken(n);const u=new nn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const zf=new Map;function Ln(r){na(r instanceof Function,"Expected a class definition");let e=zf.get(r);return e?(na(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zf.set(r,e),e)}/**
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
 */class X_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}X_.type="NONE";const Kf=X_;/**
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
 */function kc(r,e,t){return`firebase:${r}:${e}:${t}`}class Nr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=kc(this.userKey,i.apiKey,s),this.fullPersistenceKey=kc("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Nr(Ln(Kf),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Ln(Kf);const o=kc(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=nn._fromJSON(e,f);h!==s&&(c=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Nr(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Nr(s,e,n))}}/**
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
 */function Wf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZS(e))return"Blackberry";if(e0(e))return"Webos";if(QS(e))return"Safari";if((e.includes("chrome/")||JS(e))&&!e.includes("edge/"))return"Chrome";if(XS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function HS(r=ee()){return/firefox\//i.test(r)}function QS(r=ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JS(r=ee()){return/crios\//i.test(r)}function YS(r=ee()){return/iemobile/i.test(r)}function XS(r=ee()){return/android/i.test(r)}function ZS(r=ee()){return/blackberry/i.test(r)}function e0(r=ee()){return/webos/i.test(r)}/**
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
 */function Z_(r,e=[]){let t;switch(r){case"Browser":t=Wf(ee());break;case"Worker":t=`${Wf(ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ft}/${n}`}/**
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
 */class t0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function n0(r,e={}){return $s(r,"GET","/v2/passwordPolicy",Yl(r,e))}/**
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
 */const r0=6;class i0{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:r0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class s0{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new t0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ln(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Q_(this,{idToken:e}),n=await nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ae(this.app))return Promise.reject(Do(this));const t=e?$(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ae(this.app)?Promise.reject(Do(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ae(this.app)?Promise.reject(Do(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n0(this),t=new i0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await WS(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ln(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[Ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&DS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function o0(r){return $(r)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function a0(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Ln);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class c0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}/**
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
 */async function Dc(r,e){return FS(r,"POST","/v1/accounts:signInWithIdp",Yl(r,e))}/**
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
 */const u0="http://localhost";class er extends c0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ta("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Jr(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new er(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Dc(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Dc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dc(e,t)}buildRequest(){const e={requestUri:u0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ot(t)}return e}}/**
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
 */class l0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $a extends l0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yt extends $a{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends $a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return er._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rt.credential(t,n)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class Xt extends $a{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Zt extends $a{constructor(){super("twitter.com")}static credential(e,t){return er._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Zt.credential(t,n)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";function K0(r,e,t,n){return $(r).onAuthStateChanged(e,t,n)}new qs(3e4,6e4);/**
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
 */new qs(2e3,1e4);/**
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
 */new qs(3e4,6e4);/**
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
 */new qs(5e3,15e3);var Qf="@firebase/auth",Jf="1.7.5";/**
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
 */class h0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function d0(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f0(r){It(new ct("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(r)},h=new s0(n,i,s,u);return a0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),It(new ct("auth-internal",e=>{const t=o0(e.getProvider("auth").getImmediate());return(n=>new h0(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Qf,Jf,d0(r)),it(Qf,Jf,"esm2017")}/**
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
 */const p0=5*60;ep("authIdTokenMaxAge");f0("Browser");const m0={apiKey:"AIzaSyBUYh9RQQLzc2PD1wLNP9N0Q9h4k59kYsY",authDomain:"typerightr-240bb.firebaseapp.com",projectId:"typerightr-240bb",storageBucket:"typerightr-240bb.appspot.com",messagingSenderId:"895649925548",appId:"1:895649925548:web:202cff11bc7121ef315209",measurementId:"G-ZN48WD3EJ2"},g0=tr.initializeApp(m0),W0=tr.auth(),H0=g0.firestore();new Rt;export{ud as _,W0 as a,y0 as b,H0 as d,K0 as o};
