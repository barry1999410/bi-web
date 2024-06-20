"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[134],{7134:function(Se,k,s){s.d(k,{C:function(){return ve}});var r=s(67294),q=s(13144),B=s.n(q),_=s(6278),ee=s(17799),M=s(74443),F=s(53124),H=s(35792),D=s(98675),te=s(25378),L=r.createContext({}),ne=s(49703),X=s(14747),oe=s(91945),re=s(45503);const ae=e=>{const{antCls:n,componentCls:o,iconCls:t,avatarBg:a,avatarColor:i,containerSize:v,containerSizeLG:m,containerSizeSM:g,textFontSize:f,textFontSizeLG:h,textFontSizeSM:$,borderRadius:p,borderRadiusLG:u,borderRadiusSM:O,lineWidth:S,lineType:I}=e,l=(P,x,T)=>({width:P,height:P,borderRadius:"50%",[`&${o}-square`]:{borderRadius:T},[`&${o}-icon`]:{fontSize:x,[`> ${t}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,X.Wf)(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${(0,ne.bf)(S)} ${I} transparent`,"&-image":{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),l(v,f,p)),{"&-lg":Object.assign({},l(m,h,u)),"&-sm":Object.assign({},l(g,$,O)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},se=e=>{const{componentCls:n,groupBorderColor:o,groupOverlapping:t,groupSpace:a}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:o},"> *:not(:first-child)":{marginInlineStart:t}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:a}}}},le=e=>{const{controlHeight:n,controlHeightLG:o,controlHeightSM:t,fontSize:a,fontSizeLG:i,fontSizeXL:v,fontSizeHeading3:m,marginXS:g,marginXXS:f,colorBorderBg:h}=e;return{containerSize:n,containerSizeLG:o,containerSizeSM:t,textFontSize:Math.round((i+v)/2),textFontSizeLG:m,textFontSizeSM:a,groupSpace:f,groupOverlapping:-g,groupBorderColor:h}};var K=(0,oe.I$)("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:o}=e,t=(0,re.TS)(e,{avatarBg:o,avatarColor:n});return[ae(t),se(t)]},le),ie=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const Q=(e,n)=>{const[o,t]=r.useState(1),[a,i]=r.useState(!1),[v,m]=r.useState(!0),g=r.useRef(null),f=r.useRef(null),h=(0,ee.sQ)(n,g),{getPrefixCls:$,avatar:p}=r.useContext(F.E_),u=r.useContext(L),O=()=>{if(!f.current||!g.current)return;const y=f.current.offsetWidth,C=g.current.offsetWidth;if(y!==0&&C!==0){const{gap:N=4}=e;N*2<C&&t(C-N*2<y?(C-N*2)/y:1)}};r.useEffect(()=>{i(!0)},[]),r.useEffect(()=>{m(!0),t(1)},[e.src]),r.useEffect(O,[e.gap]);const S=()=>{const{onError:y}=e;(y==null?void 0:y())!==!1&&m(!1)},{prefixCls:I,shape:l,size:P,src:x,srcSet:T,icon:E,className:V,rootClassName:Z,alt:w,draggable:j,children:z,crossOrigin:R}=e,c=ie(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),d=(0,D.Z)(y=>{var C,N;return(N=(C=P!=null?P:u==null?void 0:u.size)!==null&&C!==void 0?C:y)!==null&&N!==void 0?N:"default"}),W=Object.keys(typeof d=="object"?d||{}:{}).some(y=>["xs","sm","md","lg","xl","xxl"].includes(y)),J=(0,te.Z)(W),ge=r.useMemo(()=>{if(typeof d!="object")return{};const y=M.c4.find(N=>J[N]),C=d[y];return C?{width:C,height:C,fontSize:C&&(E||z)?C/2:18}:{}},[J,d]),b=$("avatar",I),ye=(0,H.Z)(b),[xe,Oe,Pe]=K(b,ye),be=B()({[`${b}-lg`]:d==="large",[`${b}-sm`]:d==="small"}),Ce=r.isValidElement(x),$e=l||(u==null?void 0:u.shape)||"circle",ze=B()(b,be,p==null?void 0:p.className,`${b}-${$e}`,{[`${b}-image`]:Ce||x&&v,[`${b}-icon`]:!!E},Pe,ye,V,Z,Oe),Ee=typeof d=="number"?{width:d,height:d,fontSize:E?d/2:18}:{};let A;if(typeof x=="string"&&v)A=r.createElement("img",{src:x,draggable:j,srcSet:T,onError:S,alt:w,crossOrigin:R});else if(Ce)A=x;else if(E)A=E;else if(a||o!==1){const y=`scale(${o})`,C={msTransform:y,WebkitTransform:y,transform:y};A=r.createElement(_.Z,{onResize:O},r.createElement("span",{className:`${b}-string`,ref:f,style:Object.assign({},C)},z))}else A=r.createElement("span",{className:`${b}-string`,style:{opacity:0},ref:f},z);return delete c.onError,delete c.gap,xe(r.createElement("span",Object.assign({},c,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Ee),ge),p==null?void 0:p.style),c.style),className:ze,ref:h}),A))};var U=r.forwardRef(Q),ce=s(37419),pe=s(96159),de=s(74627);const Y=e=>{const{size:n,shape:o}=r.useContext(L),t=r.useMemo(()=>({size:e.size||n,shape:e.shape||o}),[e.size,e.shape,n,o]);return r.createElement(L.Provider,{value:t},e.children)};var he=e=>{var n,o,t;const{getPrefixCls:a,direction:i}=r.useContext(F.E_),{prefixCls:v,className:m,rootClassName:g,style:f,maxCount:h,maxStyle:$,size:p,shape:u,maxPopoverPlacement:O,maxPopoverTrigger:S,children:I,max:l}=e,P=a("avatar",v),x=`${P}-group`,T=(0,H.Z)(P),[E,V,Z]=K(P,T),w=B()(x,{[`${x}-rtl`]:i==="rtl"},Z,T,m,g,V),j=(0,ce.Z)(I).map((c,d)=>(0,pe.Tm)(c,{key:`avatar-key-${d}`})),z=(l==null?void 0:l.count)||h,R=j.length;if(z&&z<R){const c=j.slice(0,z),d=j.slice(z,R),W=(l==null?void 0:l.style)||$,J=((n=l==null?void 0:l.popover)===null||n===void 0?void 0:n.trigger)||S||"hover",ge=((o=l==null?void 0:l.popover)===null||o===void 0?void 0:o.placement)||O||"top",b=Object.assign(Object.assign({content:d},l==null?void 0:l.popover),{overlayClassName:B()(`${x}-popover`,(t=l==null?void 0:l.popover)===null||t===void 0?void 0:t.overlayClassName),placement:ge,trigger:J});return c.push(r.createElement(de.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},b),r.createElement(U,{style:W},`+${R-z}`))),E(r.createElement(Y,{shape:u,size:p},r.createElement("div",{className:w,style:f},c)))}return E(r.createElement(Y,{shape:u,size:p},r.createElement("div",{className:w,style:f},j)))};const G=U;G.Group=he;var ve=G},74627:function(Se,k,s){s.d(k,{Z:function(){return ve}});var r=s(67294),q=s(13144),B=s.n(q),_=s(5663),ee=s(92389);const M=e=>e?typeof e=="function"?e():e:null;var F=s(33603),H=s(96159),D=s(53124),te=s(83062),ue=s(92419),L=s(14747),ne=s(50438),X=s(97414),oe=s(79511),re=s(8796),ae=s(91945),se=s(45503);const le=e=>{const{componentCls:n,popoverColor:o,titleMinWidth:t,fontWeightStrong:a,innerPadding:i,boxShadowSecondary:v,colorTextHeading:m,borderRadiusLG:g,zIndexPopup:f,titleMarginBottom:h,colorBgElevated:$,popoverBg:p,titleBorderBottom:u,innerContentPadding:O,titlePadding:S}=e;return[{[n]:Object.assign(Object.assign({},(0,L.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":$,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:p,backgroundClip:"padding-box",borderRadius:g,boxShadow:v,padding:i},[`${n}-title`]:{minWidth:t,marginBottom:h,color:m,fontWeight:a,borderBottom:u,padding:S},[`${n}-inner-content`]:{color:o,padding:O}})},(0,X.ZP)(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},K=e=>{const{componentCls:n}=e;return{[n]:re.i.map(o=>{const t=e[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},ie=e=>{const{lineWidth:n,controlHeight:o,fontHeight:t,padding:a,wireframe:i,zIndexPopupBase:v,borderRadiusLG:m,marginXS:g,lineType:f,colorSplit:h,paddingSM:$}=e,p=o-t,u=p/2,O=p/2-n,S=a;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:v+30},(0,oe.w)(e)),(0,X.wZ)({contentRadius:m,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:g,titlePadding:i?`${u}px ${S}px ${O}px`:0,titleBorderBottom:i?`${n}px ${f} ${h}`:"none",innerContentPadding:i?`${$}px ${S}px`:0})};var Q=(0,ae.I$)("Popover",e=>{const{colorBgElevated:n,colorText:o}=e,t=(0,se.TS)(e,{popoverBg:n,popoverColor:o});return[le(t),K(t),(0,ne._y)(t,"zoom-big")]},ie,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),me=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const U=(e,n,o)=>!n&&!o?null:r.createElement(r.Fragment,null,n&&r.createElement("div",{className:`${e}-title`},M(n)),r.createElement("div",{className:`${e}-inner-content`},M(o))),ce=e=>{const{hashId:n,prefixCls:o,className:t,style:a,placement:i="top",title:v,content:m,children:g}=e;return r.createElement("div",{className:B()(n,o,`${o}-pure`,`${o}-placement-${i}`,t),style:a},r.createElement("div",{className:`${o}-arrow`}),r.createElement(ue.G,Object.assign({},e,{className:n,prefixCls:o}),g||U(o,v,m)))};var de=e=>{const{prefixCls:n,className:o}=e,t=me(e,["prefixCls","className"]),{getPrefixCls:a}=r.useContext(D.E_),i=a("popover",n),[v,m,g]=Q(i);return v(r.createElement(ce,Object.assign({},t,{prefixCls:i,hashId:m,className:B()(o,g)})))},Y=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const fe=e=>{let{title:n,content:o,prefixCls:t}=e;return r.createElement(r.Fragment,null,n&&r.createElement("div",{className:`${t}-title`},M(n)),r.createElement("div",{className:`${t}-inner-content`},M(o)))},G=r.forwardRef((e,n)=>{var o,t;const{prefixCls:a,title:i,content:v,overlayClassName:m,placement:g="top",trigger:f="hover",children:h,mouseEnterDelay:$=.1,mouseLeaveDelay:p=.1,onOpenChange:u,overlayStyle:O={}}=e,S=Y(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:I}=r.useContext(D.E_),l=I("popover",a),[P,x,T]=Q(l),E=I(),V=B()(m,x,T),[Z,w]=(0,_.Z)(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),j=(c,d)=>{w(c,!0),u==null||u(c,d)},z=c=>{c.keyCode===ee.Z.ESC&&j(!1,c)},R=c=>{j(c)};return P(r.createElement(te.Z,Object.assign({placement:g,trigger:f,mouseEnterDelay:$,mouseLeaveDelay:p,overlayStyle:O},S,{prefixCls:l,overlayClassName:V,ref:n,open:Z,onOpenChange:R,overlay:i||v?r.createElement(fe,{prefixCls:l,title:i,content:v}):null,transitionName:(0,F.m)(E,"zoom-big",S.transitionName),"data-popover-inject":!0}),(0,H.Tm)(h,{onKeyDown:c=>{var d,W;r.isValidElement(h)&&((W=h==null?void 0:(d=h.props).onKeyDown)===null||W===void 0||W.call(d,c)),z(c)}})))});G._InternalPanelDoNotUseOrYouWillBeFired=de;var ve=G}}]);