/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=window,L=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),F=new WeakMap;class Z{constructor(t,e,i){if(this._$cssResult$=!0,i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}}const dt=r=>new Z(typeof r=="string"?r:r+"",void 0,D),_=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Z(e,r,D)},ct=(r,t)=>{L?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},G=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const O=window,J=O.trustedTypes,pt=J?J.emptyScript:"",K=O.reactiveElementPolyfillSupport,j={toAttribute(r,t){switch(t){case Boolean:r=r?pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch(i){e=null}}return e}},Y=(r,t)=>t!==r&&(t==t||r==r),I={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Y};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||I}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ct(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=I){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:j;this._$El=o,this[o]=d.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},K==null||K({ReactiveElement:y}),((z=O.reactiveElementVersions)!==null&&z!==void 0?z:O.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;const k=window,A=k.trustedTypes,Q=A?A.createPolicy("lit-html",{createHTML:r=>r}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,X="?"+g,ut=`<${X}>`,b=document,w=(r="")=>b.createComment(r),C=r=>r===null||typeof r!="object"&&typeof r!="function",tt=Array.isArray,vt=r=>tt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,it=/>/g,m=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,rt=/"/g,nt=/^(?:script|style|textarea|title)$/i,$t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=$t(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ot=new WeakMap,E=b.createTreeWalker(b,129,null,!1),gt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=U;for(let l=0;l<e;l++){const a=r[l];let $,h,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,h=n.exec(a),h!==null);)u=n.lastIndex,n===U?h[1]==="!--"?n=et:h[1]!==void 0?n=it:h[2]!==void 0?(nt.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=m):h[3]!==void 0&&(n=m):n===m?h[0]===">"?(n=s!=null?s:U,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,$=h[1],n=h[3]===void 0?m:h[3]==='"'?rt:st):n===rt||n===st?n=m:n===et||n===it?n=U:(n=m,s=void 0);const T=n===m&&r[l+1].startsWith("/>")?" ":"";o+=n===U?a+ut:c>=0?(i.push($),a.slice(0,c)+"$lit$"+a.slice(c)+g+T):a+g+(c===-2?(i.push(void 0),l):T)}const d=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Q!==void 0?Q.createHTML(d):d,i]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[a,$]=gt(t,e);if(this.el=R.createElement(a,i),E.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=E.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(g)){const u=$[n++];if(h.push(c),u!==void 0){const T=s.getAttribute(u.toLowerCase()+"$lit$").split(g),H=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:H[2],strings:T,ctor:H[1]==="."?mt:H[1]==="?"?yt:H[1]==="@"?At:N})}else l.push({type:6,index:o})}for(const c of h)s.removeAttribute(c)}if(nt.test(s.tagName)){const h=s.textContent.split(g),c=h.length-1;if(c>0){s.textContent=A?A.emptyScript:"";for(let u=0;u<c;u++)s.append(h[u],w()),E.nextNode(),l.push({type:2,index:++o});s.append(h[c],w())}}}else if(s.nodeType===8)if(s.data===X)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)l.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function S(r,t,e=r,i){var s,o,n,d;if(t===x)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(r),l._$AT(r,e,i)),i!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=S(r,l._$AS(r,t.values),l,i)),t}class ft{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:b).importNode(i,!0);E.currentNode=o;let n=E.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let $;a.type===2?$=new P(n,n.nextSibling,this,t):a.type===1?$=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&($=new bt(n,this,t)),this.u.push($),a=s[++l]}d!==(a==null?void 0:a.index)&&(n=E.nextNode(),d++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const n=new ft(o,this),d=n.v(this.options);n.p(i),this.T(d),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new R(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new P(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class N{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=S(this,d[i+l],e,l),a===x&&(a=this._$AH[l]),n||(n=!C(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class mt extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const _t=A?A.emptyScript:"";class yt extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,_t):this.element.removeAttribute(this.name)}}class At extends N{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:p)===x)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const lt=k.litHtmlPolyfillSupport;lt==null||lt(R,P),((B=k.litHtmlVersions)!==null&&B!==void 0?B:k.litHtmlVersions=[]).push("2.6.1");const xt=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new P(t.insertBefore(w(),d),d,void 0,e!=null?e:{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,W;class v extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}}v.finalized=!0,v._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:v});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:v}),((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.2.2");class Et extends v{static get properties(){return{inputValue:{type:String},logoURL:{type:String},logoAlt:{type:String},headline:{type:String}}}constructor(){super(),this.inputValue="",this.logoURL="",this.logoAlt="",this.headline=""}static get styles(){return _`.header{display:flex;padding:15px;font-family:Righteous,cursive;font-size:20px}img{height:80px;margin-right:10px}`}render(){return f` <div class="header"> <img src="${this.logoURL}" alt="${this.logoAlt}"> <h1>${this.headline}</h1> </div> `}}customElements.define("header-list",Et);class St extends v{static get properties(){return{text:{type:String},title:{type:String}}}constructor(){super()}static get styles(){return _`.box{font-family:Righteous,cursive;background-color:#f9dc01;height:40px;width:60px;border-radius:5px;text-align:center}.text{margin:0;font-size:20px}.title{margin:0;font-size:12px}`}render(){return f` <div class="box"> <p class="text">${this.text}</p> <p class="title">${this.title}</p> </div> `}}customElements.define("light-box",St);class wt extends v{static get properties(){return{movies:{type:Array}}}static get styles(){return _`.card{font-family:Righteous,cursive;font-family:Roboto,sans-serif;display:flex;width:500px;height:250px;margin-bottom:5px;padding:10px;background-color:#04293a}.card-info{padding:10px;display:flex;flex-direction:column;justify-content:space-between;width:60%;font-size:20px}.card-title{font-family:Righteous,cursive}.box-container{display:flex;justify-content:space-evenly}.card-crew{font-family:Roboto,sans-serif}img{height:100%}p{color:#fff}`}render(){return f` ${this.movies?this.movies.map(t=>f` <div class="card"> <img src="${t.image}" alt="official movie poster"> <div class="card-info"> <p class="card-title">#${t.rank} ${t.title}</p> <p class="card-crew">Crew: ${t.crew}</p> <div class="box-container"> <light-box title="Year" text="${t.year}"></light-box> <light-box title="Rating" text=" ${t.imDbRating}"></light-box> </div> </div> </div> `):f`<h1>Sorry, the movie you choose isn´t here!</h1>`} `}}customElements.define("movie-card",wt);class Ct extends v{static get properties(){return{movies:{type:Array}}}static get styles(){return _`.container{display:flex;flex-direction:column;padding:20px}`}render(){return f` <movie-card class="container" .movies="${this.movies}"></movie-card> `}}customElements.define("movie-list",Ct);class Ut extends v{static get properties(){return{url:{type:String}}}constructor(){super()}firstUpdated(){this.getData()}_sendData(t){this.dispatchEvent(new CustomEvent("ApiData",{detail:{data:t},bubbles:!0,composed:!0}))}getData(){fetch(this.url,{method:"GET"}).then(t=>t.ok?t.json():Promise.reject(t)).then(t=>{this._sendData(t)}).catch(t=>{console.log("Something went wrong",t)})}}customElements.define("get-data",Ut);class Rt extends v{static get properties(){return{value:{type:String},labelTitle:{type:String},placeholder:{type:String}}}static get styles(){return _`:host{font-family:Roboto,sans-serif;padding:15px}`}_filterItem(t){this.value=t.currentTarget.value,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}render(){return f` <label>${this.labelTitle} <input @input="${this._filterItem}" type="text" .value="${this.value}" placeholder="${this.placeholder}"> </label> `}}customElements.define("input-filter",Rt);var Pt=Object.defineProperty,Tt=(r,t,e)=>t in r?Pt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ht=(r,t,e)=>(Tt(r,typeof t!="symbol"?t+"":t,e),e);class q extends v{constructor(){super(),this.movies=[],this.filteredMovies=[],this.inputValue="",this.addEventListener("ApiData",t=>{this.dataFormat(t.detail.data)})}dataFormat(t){const e=[];t.items.map(i=>{e.push({rank:i.rank,title:i.title,year:i.year,image:i.image,crew:i.crew,imDbRating:i.imDbRating})}),this.movies=this.filteredMovies=e}filterArray(t){this.inputValue=t.detail.toLocaleLowerCase(),this.filteredMovies=this.movies.filter(e=>e.title.toLocaleLowerCase().includes(this.inputValue))}render(){return f` <get-data url="https://imdb-api.com/en/API/Top250Movies/k_2f0gbnvc/"></get-data> <header-list logoURL="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" logoAlt="imDb Logo" headline="Top 250 movies"></header-list> <input-filter .value="${this.inputValue}" @change="${this.filterArray}" labelTitle="Is your favourite movie here?" placeholder="Seven samurai"></input-filter> <movie-list .movies="${this.filteredMovies}"></movie-list> `}}ht(q,"properties",{movies:{type:Array},filteredMovies:{type:Array},inputValue:{type:String}}),ht(q,"styles",_`:host{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;font-size:calc(10px + 2vmin);color:#1a2b42;max-width:960px;margin:0 auto;text-align:center;background-color:var(--top-movies-background-color)}main{flex-grow:1}.logo{margin-top:36px;animation:app-logo-spin infinite 20s linear}@keyframes app-logo-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.app-footer{font-size:calc(12px + .5vmin);align-items:center}.app-footer a{margin-left:5px}`),customElements.define("top-movies",q);