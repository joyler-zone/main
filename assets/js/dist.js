!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let o;function i(t,e){return o||(o=document.createElement("a")),o.href=e,t===o.href}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function d(t,e,n){t.$$.on_destroy.push(c(e,n))}function l(t,e,n){return t.set(n),e}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&p(g)}function y(t,e){t.appendChild(e)}function b(t,e,n){const r=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;if(e&&e.host)return e;return t.ownerDocument}(t);if(!r.getElementById(e)){const t=_("style");t.id=e,t.textContent=n,function(t,e){y(t.head||t,e)}(r,t)}}function v(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function x(){return t=" ",document.createTextNode(t);var t}function q(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){t.classList[n?"add":"remove"](e)}let k;function E(t){k=t}function z(t){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(t)}const j=[],M=[],T=[],S=[],L=Promise.resolve();let O=!1;function A(t){T.push(t)}const B=new Set;let C=0;function I(){const t=k;do{for(;C<j.length;){const t=j[C];C++,E(t),R(t.$$)}for(E(null),j.length=0,C=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];B.has(e)||(B.add(e),e())}T.length=0}while(j.length);for(;S.length;)S.pop()();O=!1,B.clear(),E(t)}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const D=new Set;function H(t,e){t&&t.i&&(D.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),undefined.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}const X="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Y(t){t&&t.c()}function P(t,n,a,o){const{fragment:i,on_mount:c,on_destroy:d,after_update:l}=t.$$;i&&i.m(n,a),o||A((()=>{const n=c.map(e).filter(s);d?d.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(A)}function U(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(j.push(t),O||(O=!0,L.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,s,a,o,i,c,d,l=[-1]){const u=k;E(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(u?u.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:s.target||u.$$.root};d&&d(f.root);let p=!1;if(f.ctx=a?a(e,s.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&F(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();s.intro&&H(e.$$.fragment),P(e,s.target,s.anchor,s.customElement),I()}E(u)}class Z{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function V(e,n=t){let r;const s=new Set;function o(t){if(a(e,t)&&(e=t,r)){const t=!Q.length;for(const t of s)t[1](),Q.push(t,e);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.add(c),1===s.size&&(r=n(o)||t),a(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}function G(t){return"[object Date]"===Object.prototype.toString.call(t)}function J(t,e,n,r){if("number"==typeof n||G(n)){const s=r-n,a=(n-e)/(t.dt||1/60),o=(a+(t.opts.stiffness*s-t.opts.damping*a)*t.inv_mass)*t.dt;return Math.abs(o)<t.opts.precision&&Math.abs(s)<t.opts.precision?r:(t.settled=!1,G(n)?new Date(n.getTime()+o):n+o)}if(Array.isArray(n))return n.map(((s,a)=>J(t,e[a],n[a],r[a])));if("object"==typeof n){const s={};for(const a in n)s[a]=J(t,e[a],n[a],r[a]);return s}throw new Error(`Cannot spring ${typeof n} values`)}function K(t,e={}){const n=V(t),{stiffness:r=.15,damping:s=.8,precision:a=.01}=e;let o,i,c,d=t,l=t,u=1,y=0,b=!1;function v(e,r={}){l=e;const s=c={};if(null==t||r.hard||h.stiffness>=1&&h.damping>=1)return b=!0,o=f(),d=e,n.set(t=l),Promise.resolve();if(r.soft){const t=!0===r.soft?.5:+r.soft;y=1/(60*t),u=0}return i||(o=f(),b=!1,i=function(t){let e;return 0===m.size&&p(g),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}((e=>{if(b)return b=!1,i=null,!1;u=Math.min(u+y,1);const r={inv_mass:u,opts:h,settled:!0,dt:60*(e-o)/1e3},s=J(r,d,t,l);return o=e,d=t,n.set(t=s),r.settled&&(i=null),!r.settled}))),new Promise((t=>{i.promise.then((()=>{s===c&&t()}))}))}const h={set:v,update:(e,n)=>v(e(l,t),n),subscribe:n.subscribe,stiffness:r,damping:s,precision:a};return h}const tt=V(void 0),et=(t,e=3)=>parseFloat(t.toFixed(e)),nt=(t,e=-20,n=20)=>Math.min(Math.max(t,e),n);function rt(t){b(t,"svelte-1mb41y3",'.card__glare.svelte-1mb41y3{transform:translateZ(1px);z-index:4;background:radial-gradient(\n\t\t\tfarthest-corner circle at var(--mx) var(--my),\n\t\t\trgba(255, 255, 255, 0.8) 10%,\n\t\t\trgba(255, 255, 255, 0.65) 20%,\n\t\t\trgba(0, 0, 0, 0.5) 90%\n\t\t);mix-blend-mode:overlay;opacity:var(--o)}.card__glare.holo.svelte-1mb41y3:not(.v):not(.vmax):not(.vstar){opacity:calc(var(--o)*.8);filter:brightness(0.8) contrast(1.5)}.card__glare.v.svelte-1mb41y3,.card__glare.vfull.svelte-1mb41y3,.card__glare.vmax.svelte-1mb41y3,.card__glare.vstar.svelte-1mb41y3{filter:brightness(.9) contrast(1.75);background:radial-gradient( \n\t\t\t\tfarthest-corner circle at \n\t\t\t\t\tvar(--mx) var(--my), \n\t\t\t\t\trgb(255, 255, 255) 0%, \n\t\t\t\t\trgba(133, 137, 141, .33) 45%, \n\t\t\t\t\trgba(100, 100, 100, .65) 120% \n\t\t\t\t);opacity:calc(var(--o)*.66)}.card__glare.vmax.svelte-1mb41y3{background:radial-gradient( \n\t\t\t\tfarthest-corner circle at \n\t\t\t\tvar(--mx) var(--my), \n\t\t\t\trgba(255, 255, 255, 0.75) 0%, \n\t\t\t\trgba(99, 99, 99, 0.35) 45%, \n\t\t\t\trgba(0, 0, 0, 1) 120% \n\t\t\t)}.card__nft[data-rarity="rare holo"][data-gallery="true"] .card__glare.svelte-1mb41y3{background:radial-gradient(\n\t\t\tfarthest-corner circle at var(--mx) var(--my),\n\t\t\trgba(255, 255, 255, 0.8) 10%,\n\t\t\trgba(255, 255, 255, 0.65) 20%,\n\t\t\trgba(0, 0, 0, 1) 90%\n\t\t)}')}function st(e){let n,r;return{c(){n=_("div"),$(n,"class",r="card__glare "+e[0]+" svelte-1mb41y3")},m(t,e){v(t,n,e)},p(t,[e]){1&e&&r!==(r="card__glare "+t[0]+" svelte-1mb41y3")&&$(n,"class",r)},i:t,o:t,d(t){t&&h(n)}}}function at(t,e,n){let{subtypes:r="basic"}=e;return t.$$set=t=>{"subtypes"in t&&n(0,r=t.subtypes)},[r]}class ot extends Z{constructor(t){super(),W(this,t,at,st,a,{subtypes:0},rt)}}function it(t){b(t,"svelte-1lqgu32",".card__shine.svelte-1lqgu32{display:grid;overflow:hidden;transform:translateZ(1px);background:transparent;z-index:3;mix-blend-mode:color-dodge;filter:brightness(.85) contrast(2.75) saturate(.65);background-size:cover;background-position:center;opacity:var(--o)}.card__shine.svelte-1lqgu32:after{grid-area:1/1}")}function ct(e){let n,r;return{c(){n=_("div"),$(n,"class",r=e[2]+" card__shine "+e[0]+" "+e[1]+" svelte-1lqgu32")},m(t,e){v(t,n,e)},p(t,[e]){3&e&&r!==(r=t[2]+" card__shine "+t[0]+" "+t[1]+" svelte-1lqgu32")&&$(n,"class",r)},i:t,o:t,d(t){t&&h(n)}}}function dt(t,e,n){let{subtypes:r="basic"}=e,{supertype:s="pokémon"}=e,a=navigator.vendor.match(/apple/i)?"apple ":"";return t.$$set=t=>{"subtypes"in t&&n(0,r=t.subtypes),"supertype"in t&&n(1,s=t.supertype)},[r,s,a]}class lt extends Z{constructor(t){super(),W(this,t,dt,ct,a,{subtypes:0,supertype:1},it)}}const{window:ut}=X;function ft(t){b(t,"svelte-dqqq6i",":root{--mx:50%;--my:50%;--s:1;--o:0;--tx:0px;--ty:0px;--rx:0deg;--ry:0deg;--pos:50% 50%;--posx:50%;--posy:50%;--hyp:0}.card__nft.svelte-dqqq6i.svelte-dqqq6i{--radius:0;transform:translate3d(0,0,0.1px);will-change:transform, visibility;transform-style:preserve-3d}.active.svelte-dqqq6i.svelte-dqqq6i{z-index:200}.card__nft.active.svelte-dqqq6i .card__translater.svelte-dqqq6i,.card__nft.active.svelte-dqqq6i .card__rotator.svelte-dqqq6i{touch-action:none}.card__translater.svelte-dqqq6i.svelte-dqqq6i,.card__rotator.svelte-dqqq6i.svelte-dqqq6i{display:grid;perspective:600px;transform-origin:center;will-change:transform}.card__translater.svelte-dqqq6i.svelte-dqqq6i{width:auto;position:relative;transform:translate3d(var(--tx), var(--ty), 0) scale(var(--s))}.card__rotator.svelte-dqqq6i.svelte-dqqq6i{--glow:#69d1e9;transform:rotateY(var(--rx)) rotateX(var(--ry));transform-style:preserve-3d;box-shadow:0px 10px 20px -5px black;border-radius:var(--radius);outline:none;transition:box-shadow 0.4s ease, outline 0.2s ease}.card__nft.active.svelte-dqqq6i .card__rotator.svelte-dqqq6i{box-shadow:0 0 10px 0px var(--glow), 0 0 10px 0px var(--glow), 0 0 30px 0px var(--glow)}.card__rotator.svelte-dqqq6i.svelte-dqqq6i:focus{box-shadow:0 0 10px 0px var(--glow), 0 0 10px 0px var(--glow), 0 0 30px 0px var(--glow)}.card__nft.active.svelte-dqqq6i .card__rotator.svelte-dqqq6i:focus{box-shadow:0px 10px 30px 3px black}.card__rotator.svelte-dqqq6i *{width:100%;display:grid;grid-area:1/1;border-radius:var(--radius);image-rendering:optimizeQuality;transform-style:preserve-3d}.card__front.svelte-dqqq6i.svelte-dqqq6i{opacity:1;transition:opacity .2s ease-out}.loading.svelte-dqqq6i .card__front.svelte-dqqq6i{opacity:0}")}function pt(e){let n,a,o,c,d,l,u,f,p,m,g,b,k,E;return f=new lt({props:{subtypes:e[1],supertype:e[2]}}),m=new ot({props:{subtypes:e[1]}}),{c(){n=_("div"),a=_("div"),o=_("div"),c=_("div"),d=_("img"),u=x(),Y(f.$$.fragment),p=x(),Y(m.$$.fragment),i(d.src,l=e[5])||$(d,"src",l),$(d,"alt",""),$(d,"class","svelte-dqqq6i"),$(c,"class","card__front svelte-dqqq6i"),$(o,"class","card__rotator svelte-dqqq6i"),$(o,"tabindex","0"),$(a,"class","card__translater svelte-dqqq6i"),$(n,"id",g="main__card__nft"+e[4]),$(n,"class","card__nft svelte-dqqq6i"),$(n,"data-number",e[0]),$(n,"data-subtypes",e[1]),$(n,"data-supertype",e[2]),$(n,"data-rarity",e[3]),$(n,"data-gallery",e[6]),$(n,"style",e[15]),w(n,"active",e[10]),w(n,"interacting",e[11]),w(n,"loading",mt)},m(r,i){var l;v(r,n,i),y(n,a),y(a,o),y(o,c),y(c,d),y(c,u),P(f,c,null),y(c,p),P(m,c,null),e[34](o),e[35](n),b=!0,k||(E=[q(ut,"scroll",e[23]),(l=e[24].call(null,d),l&&s(l.destroy)?l.destroy:t),q(o,"click",e[21]),q(o,"pointermove",e[19]),q(o,"mouseleave",e[20]),q(o,"touchend",e[20]),q(o,"touchcancel",e[20]),q(o,"blur",e[22])],k=!0)},p(t,e){(!b||32&e[0]&&!i(d.src,l=t[5]))&&$(d,"src",l);const r={};2&e[0]&&(r.subtypes=t[1]),4&e[0]&&(r.supertype=t[2]),f.$set(r);const s={};2&e[0]&&(s.subtypes=t[1]),m.$set(s),(!b||16&e[0]&&g!==(g="main__card__nft"+t[4]))&&$(n,"id",g),(!b||1&e[0])&&$(n,"data-number",t[0]),(!b||2&e[0])&&$(n,"data-subtypes",t[1]),(!b||4&e[0])&&$(n,"data-supertype",t[2]),(!b||8&e[0])&&$(n,"data-rarity",t[3]),(!b||64&e[0])&&$(n,"data-gallery",t[6]),(!b||32768&e[0])&&$(n,"style",t[15]),1024&e[0]&&w(n,"active",t[10]),2048&e[0]&&w(n,"interacting",t[11])},i(t){b||(H(f.$$.fragment,t),H(m.$$.fragment,t),b=!0)},o(t){N(f.$$.fragment,t),N(m.$$.fragment,t),b=!1},d(t){t&&h(n),U(f),U(m),e[34](null),e[35](null),k=!1,r(E)}}}let mt=!1;function gt(e,n,r){let s,a,o,i,u,f,p,m,g,y,b,v=t;d(e,tt,(t=>r(27,o=t))),e.$$.on_destroy.push((()=>v())),z((async()=>{const{orientation2:t,resetBaseOrientation2:e}=await Promise.resolve().then((function(){return jt}));r(7,y=t),v(),v=c(y,(t=>r(26,a=t))),b=e}));let h,_,x,q={back:!1,front:!1},$={back:!1,front:!1},w=-11,k=-11,{cardState:E}=n,{img:j}=n,{number:T}=n,{subtypes:S="basic"}=n,{supertype:L="pokémon"}=n,{rarity:O="common"}=n,{gallery:A=!1}=n,{showcase:B=!1}=n,C=!1,I=!1;const R={stiffness:.066,damping:.25,precision:.5},D={stiffness:.033,damping:.45,precision:.5};let H=K({x:0,y:0},R);d(e,H,(t=>r(31,p=t)));let N=K({x:50,y:50,o:0},R);d(e,N,(t=>r(28,i=t)));let X=K({x:50,y:50},R);d(e,X,(t=>r(29,u=t)));let Y=K({x:0,y:0},D);d(e,Y,(t=>r(30,f=t)));let P=K({x:0,y:0},D);d(e,P,(t=>r(33,g=t)));let U=K(1,D);d(e,U,(t=>r(32,m=t)));const F=(t,e=500)=>{if($[E])return;-11!==k&&(clearInterval(k),k=-11),-11!==w&&(q[E]=!0,$[E]=!1,clearTimeout(w),w=-11);let n=function(){r(11,I=!1),"pageOUT"===t?.data?(r(12,H.stiffness=1,H),r(12,H.damping=1,H)):(r(12,H.stiffness=.01,H),r(12,H.damping=.06,H)),H.set({x:0,y:0}),"pageOUT"===t?.data?(r(13,N.stiffness=1,N),r(13,N.damping=1,N)):(r(13,N.stiffness=.01,N),r(13,N.damping=.06,N)),N.set({x:50,y:50,o:0}),X.set({x:50,y:50})};e<=0?n():setTimeout(n,e)},W=()=>{const t=h.getBoundingClientRect(),e=document.documentElement,n={x:et(e.clientWidth/2-t.x-t.width/2),y:et(e.clientHeight/2-t.y-t.height/2)};P.set({x:n.x,y:n.y})},Z=t=>{const e=t.relative.gamma,n=t.relative.beta,s=16,a=18,o={x:nt(e,-s,s),y:nt(n,-a,a)},i={x:50+o.x/(2*s)*100,y:50+o.y/(2*a)*100};X.set({x:et(2*s*((50- -i.x)/100)-2*s+50),y:et(2*a*((50+i.y)/100)-2*a+50)}),r(12,H.stiffness=R.stiffness,H),r(12,H.damping=R.damping,H),H.set({x:et(-1*o.x),y:et(o.y)}),r(13,N.stiffness=R.stiffness,N),r(13,N.damping=R.damping,N),N.set({x:et(i.x),y:et(i.y),o:1})};let Q=0;return z((()=>{q[E]=!1,$[E]=!1,function(t){let e,n;void 0!==document.hidden?(e="hidden",n="visibilitychange"):void 0!==document.msHidden?(e="msHidden",n="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",n="webkitvisibilitychange"),void 0!==document.addEventListener&&void 0!==e&&document.addEventListener(n,(()=>{t(document[e],n)}),!1)}(((t,e)=>{t&&document.querySelectorAll(".card__rotator").forEach((t=>{let e=new MouseEvent("mouseleave",{bubbles:!0,cancelable:!0,view:window});e.data="pageOUT",t.dispatchEvent(e)}))}))})),e.$$set=t=>{"cardState"in t&&r(4,E=t.cardState),"img"in t&&r(5,j=t.img),"number"in t&&r(0,T=t.number),"subtypes"in t&&r(1,S=t.subtypes),"supertype"in t&&r(2,L=t.supertype),"rarity"in t&&r(3,O=t.rarity),"gallery"in t&&r(6,A=t.gallery),"showcase"in t&&r(25,B=t.showcase)},e.$$.update=()=>{134217984&e.$$.dirty[0]&&(o&&o===h?((()=>{const t=h.getBoundingClientRect();let e=window.innerWidth/t.width*.9,n=window.innerHeight/t.height*.9;W(),U.set(Math.min(e,n,1.75)),F(null,100)})(),r(10,C=!0)):(P.set({x:0,y:0}),Y.set({x:0,y:0}),U.set(1),F(null,100),r(10,C=!1))),1879048192&e.$$.dirty[0]|7&e.$$.dirty[1]&&r(15,s=`\n\t\t--mx: ${i.x}%;\n\t\t--my: ${i.y}%;\n\t\t--tx: ${g.x}px;\n\t\t--ty: ${g.y}px;\n\t\t--s: ${m};\n\t\t--o: ${i.o};\n\t\t--rx: ${p.x+f.x}deg;\n\t\t--ry: ${p.y+f.y}deg;\n\t\t--pos: ${u.x}% ${u.y}%;\n\t\t--posx: ${u.x}%;\n\t\t--posy: ${u.y}%;\n\t\t--hyp: ${Math.sqrt((i.y-50)*(i.y-50)+(i.x-50)*(i.x-50))/50};\n\t`),15&e.$$.dirty[0]&&(r(3,O=O.toLowerCase()),r(2,L=L.toLowerCase()),r(0,T=T.toLowerCase()),Array.isArray(S)&&r(1,S=S.join(" ").toLowerCase())),201326976&e.$$.dirty[0]&&o&&o===h&&(r(11,I=!0),void 0!==y?Z(a):z((()=>{Z(a)})))},[T,S,L,O,E,j,A,y,h,_,C,I,H,N,X,s,Y,P,U,t=>{if($[E]||B&&!q[E]||o&&o!==h)return;r(11,I=!0),"touchmove"===t.type&&(t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY);const e=t.target.getBoundingClientRect();if(t.clientX<e.left||t.clientY<e.top||t.clientX>e.right||t.clientY>e.bottom)return;const n=t.clientX-e.left,s=t.clientY-e.top,a={x:et(100/e.width*n),y:et(100/e.height*s)},i=a.x-50,c=a.y-50;X.set({x:et(50+a.x/4-12.5),y:et(50+a.y/3-16.67)}),r(12,H.stiffness=R.stiffness,H),r(12,H.damping=R.damping,H),H.set({x:et(-i/3.5),y:et(c/2)}),r(13,N.stiffness=R.stiffness,N),r(13,N.damping=R.damping,N),N.set({x:a.x,y:a.y,o:1})},F,()=>{"back"===E||navigator.vendor.match(/apple/i)||(o&&o===h?l(tt,o=void 0,o):(l(tt,o=h,o),void 0!==b&&b()))},t=>{F(),l(tt,o=void 0,o)},t=>{clearTimeout(x),x=setTimeout((()=>{o&&o===h&&W()}),300)},t=>{Q++,t.addEventListener("load",(()=>{Q--,0===Q&&B&&function(t,e){new IntersectionObserver(((t,n)=>{t.forEach((t=>{e(t.intersectionRatio,n)}))}),{root:null,threshold:[0,.1,.4,.7,.95]}).observe(t)}(document.getElementById("main__card__nft"+E),((t,e)=>{if(t>=.95){if(q[E])return;const t=.02,e=.5;let n=0;q[E]=!0,$[E]=!0,r(11,I=!0),w=setTimeout((()=>{r(12,H.stiffness=t,H),r(12,H.damping=e,H),r(13,N.stiffness=t,N),r(13,N.damping=e,N),r(14,X.stiffness=t,X),r(14,X.damping=e,X),k=setInterval((function(){n+=.05,H.set({x:25*Math.sin(n),y:25*Math.cos(n)}),N.set({x:55+55*Math.sin(n),y:55+55*Math.cos(n),o:.8}),X.set({x:20+20*Math.sin(n),y:20+20*Math.cos(n)})}),20),w=setTimeout((()=>{clearInterval(k),k=-11,r(11,I=!1),$[E]=!1,w=-11,F(null,0)}),4e3)}),"back"===E?1e3:10)}else $[E]&&t<=.1&&($[E]=!1,F({data:"pageOUT"},0))}))}))},B,a,o,i,u,f,p,m,g,function(t){M[t?"unshift":"push"]((()=>{_=t,r(9,_)}))},function(t){M[t?"unshift":"push"]((()=>{h=t,r(8,h)}))}]}class yt extends Z{constructor(t){super(),W(this,t,gt,pt,a,{cardState:4,img:5,number:0,subtypes:1,supertype:2,rarity:3,gallery:6,showcase:25},ft,[-1,-1])}}function bt(t){b(t,"svelte-189l7ag","@media screen and (min-width: 900px){}.card__container.svelte-189l7ag{display:flex;align-items:center;justify-content:center}*{box-sizing:border-box}")}function vt(t){let e,n,r,s;return r=new yt({props:{cardState:t[0],img:"back"===t[0]?"assets/embed-assets/back_side.jpg":"assets/embed-assets/gen_zero.jpg",cardBack:"back"===t[0]?"assets/embed-assets/gen_zero.jpg":"assets/embed-assets/back_side.jpg",number:"gen_zero_"+t[0],supertype:"Trainer",subtypes:["Supporter"],rarity:"Rare Ultra",gallery:!0,showcase:!0}}),{c(){e=_("main"),n=_("div"),Y(r.$$.fragment),$(n,"class","card__container svelte-189l7ag")},m(t,a){v(t,e,a),y(e,n),P(r,n,null),s=!0},p(t,[e]){const n={};1&e&&(n.cardState=t[0]),1&e&&(n.img="back"===t[0]?"assets/embed-assets/back_side.jpg":"assets/embed-assets/gen_zero.jpg"),1&e&&(n.cardBack="back"===t[0]?"assets/embed-assets/gen_zero.jpg":"assets/embed-assets/back_side.jpg"),1&e&&(n.number="gen_zero_"+t[0]),r.$set(n)},i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){N(r.$$.fragment,t),s=!1},d(t){t&&h(e),U(r)}}}function ht(t,e,n){let{card:r}=e;return t.$$set=t=>{"card"in t&&n(0,r=t.card)},[r]}var _t=document.createElement("DIV"),xt=document.currentScript;const qt=xt.getAttribute("card");xt.parentNode.insertBefore(_t,xt),new class extends Z{constructor(t){super(),W(this,t,ht,vt,a,{card:0},bt)}}({target:_t,props:{card:qt}});const $t=function(t){return t?{alpha:t.alpha,beta:t.beta,gamma:t.gamma}:{alpha:0,beta:0,gamma:0}},wt=t=>{const e=$t(t);return{absolute:e,relative:{alpha:e.alpha-Et.alpha,beta:e.beta-Et.beta,gamma:e.gamma-Et.gamma}}};let kt=!0,Et=$t();const zt={subscribe:V(wt(),(function(t){const e=function(e){kt&&(kt=!1,Et=$t(e));const n=wt(e);t(n)};return window.addEventListener("deviceorientation",e,!0),function(){window.removeEventListener("deviceorientation",e,!0)}})).subscribe};var jt=Object.freeze({__proto__:null,resetBaseOrientation:()=>{kt=!0,Et=$t()},orientation:zt})}();