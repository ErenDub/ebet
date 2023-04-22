"use strict";(self.webpackChunkithanku=self.webpackChunkithanku||[]).push([[584],{5584:function(e,t,r){r.r(t);var i=r(1413),n=r(4695),a=r(8365),o=r(4162),l=r(1091),c=r(4565),s=r(5017),d=r(6582),h=r(1872),u=r(9276),f=r(301),p=r(3664),g=r(2077),v=r(3578),m=r(9195),x=r(9230),w=r(1933),b=r(7689),Z=r(2797),j=r(4684),y=r(184);t.default=function(){var e=Z.Ry().shape({email:Z.Z_().required(),password:Z.Z_().required()}),t=(0,p.E)(),r=t.setCheckAuth,k=t.setUserInfo,S=(0,b.s0)(),C=(0,x.$G)(),I=C.t,W=C.i18n,A=function(e){W.changeLanguage(e)},R=(0,m.cI)({defaultValues:{email:"",password:""},resolver:(0,n.X)(e)}),L=R.control,M=R.handleSubmit,O=R.formState.errors,T=(0,w.useMutation)((function(e){var t=e.email,r=e.password;return(0,g.I8)({email:t,password:r})}));return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(o.Z,{justifyContent:"center",alignItems:"center",height:"100vh",width:1,sx:{background:" linear-gradient(45deg, rgba(140,17,193,1) 0%, rgba(68,63,224,1) 47%, rgba(17,171,203,1) 100%)"},children:[(0,y.jsx)(u.Z,{component:"img",src:j,sx:{width:100,mb:5}}),(0,y.jsxs)(o.Z,{justifyContent:"center",width:1,alignItems:"center",spacing:2,sx:{background:"white",width:"100%",maxWidth:"300px",borderRadius:1,p:"20px 20px 50px 20px"},children:[(0,y.jsx)(o.Z,{children:(0,y.jsxs)(d.Z,{size:"small",children:[(0,y.jsx)(l.Z,{variant:"en"===localStorage.getItem("i18nextLng")?"contained":"outlined",onClick:function(e){return A("en")},children:"EN"}),(0,y.jsx)(l.Z,{variant:"ru"===localStorage.getItem("i18nextLng")?"contained":"outlined",onClick:function(e){return A("ru")},children:"RU"})]})}),(0,y.jsx)(c.Z,{variant:"h1",children:I("login.login")}),(0,y.jsx)(u.Z,{sx:{width:"100%"},children:(0,y.jsx)("form",{onSubmit:M((function(e){var t=e.email,i=e.password;T.mutate({email:t,password:i},{onSuccess:function(e){(0,v.zI)(e.refreshToken),(0,f.M)(e.accessToken),r(e.accessToken);var t=e.user;k(t),r(e.refreshToken),"user"===t.role&&S("/main"),"Admin"===t.role&&S("/quizlist"),"Super"===t.role&&S("/adminlist")}})})),children:(0,y.jsxs)(o.Z,{direction:"column",spacing:2,children:[(0,y.jsx)(m.Qr,{control:L,name:"email",render:function(e){var t=e.field;return(0,y.jsx)(s.Z,(0,i.Z)({fullWidth:!0,label:I("login.email"),type:"text",required:!0,focused:!0,error:!!O.email},t))}}),(0,y.jsx)(m.Qr,{control:L,name:"password",render:function(e){var t=e.field;return(0,y.jsx)(s.Z,(0,i.Z)({fullWidth:!0,label:I("login.password"),type:"password",required:!0,focused:!0,error:!!O.password},t))}}),(0,y.jsxs)(o.Z,{direction:"row",gap:1,children:[(0,y.jsx)(l.Z,{fullWidth:!0,type:"submit",disabled:T.isLoading,children:I("login.submit")}),(0,y.jsx)(l.Z,{variant:"text",fullWidth:!0,color:"secondary",onClick:function(){return S("/signup")},children:I("login.register")})]})]})})}),(0,y.jsx)(u.Z,{width:1,children:(0,y.jsx)(h.Z,{sx:{bgcolor:"black"}})}),(0,y.jsx)(u.Z,{width:1,children:(0,y.jsxs)(l.Z,{color:"secondary",onClick:function(){window.location.href="".concat("https://delta-entity-375310.ey.r.appspot.com/","/auth/google")},fullWidth:!0,sx:{display:"flex",alignItems:"center",gap:1,px:3,py:1.5},children:[(0,y.jsx)(a.Z,{}),(0,y.jsx)(c.Z,{fontWeight:600,children:I("login.glogin")})]})})]})]})})}},8365:function(e,t,r){var i=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(i,a,l):i[a]=e[a]}i.default=e,r&&r.set(e,i)}(r(2791));var n=i(r(5649)),a=r(184);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}var l=(0,n.default)((0,a.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");t.Z=l},1872:function(e,t,r){var i=r(3366),n=r(7462),a=r(2791),o=r(8182),l=r(4419),c=r(2065),s=r(277),d=r(5513),h=r(7164),u=r(184),f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiDivider"}),a=r.absolute,c=void 0!==a&&a,s=r.children,v=r.className,m=r.component,x=void 0===m?s?"div":"hr":m,w=r.flexItem,b=void 0!==w&&w,Z=r.light,j=void 0!==Z&&Z,y=r.orientation,k=void 0===y?"horizontal":y,S=r.role,C=void 0===S?"hr"!==x?"separator":void 0:S,I=r.textAlign,W=void 0===I?"center":I,A=r.variant,R=void 0===A?"fullWidth":A,L=(0,i.Z)(r,f),M=(0,n.Z)({},r,{absolute:c,component:x,flexItem:b,light:j,orientation:k,role:C,textAlign:W,variant:R}),O=function(e){var t=e.absolute,r=e.children,i=e.classes,n=e.flexItem,a=e.light,o=e.orientation,c=e.textAlign,s={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,h.V,i)}(M);return(0,u.jsx)(p,(0,n.Z)({as:x,className:(0,o.default)(O.root,v),role:C,ref:t,ownerState:M},L,{children:s?(0,u.jsx)(g,{className:O.wrapper,ownerState:M,children:s}):null}))}));t.Z=v},4684:function(e,t,r){e.exports=r.p+"static/media/logo.e6b0f3e96d6a3819c2e2.png"}}]);
//# sourceMappingURL=584.f825340b.chunk.js.map