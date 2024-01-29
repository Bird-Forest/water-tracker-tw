"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{8420:function(n,e,i){i.r(e),i.d(e,{default:function(){return an}});var t,r,o,a,l,d,s,c,p,x,h,u,f,m,g,b,w,y,j=i(2791),v=i(168),k=i(7924),Z=k.default.section(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 40px;\n\n  padding: 24px 20px 40px;\n  margin: 0 auto;\n\n  width: 320px;\n\n  @media only screen and (min-width: 768px) {\n    width: 746px;\n    padding-top: 40px;\n  }\n\n  @media only screen and (min-width: 1440px) {\n    flex-direction: row;\n    row-gap: 0;\n    column-gap: 32px;\n    padding-top: 20px;\n\n    width: 1256px;\n  }\n"]))),z=i(8384),C=i(9439),N=k.default.div(r||(r=(0,v.Z)(["\n  max-width: 170px;\n  padding: 8px 20px;\n\n  border-radius: 10px;\n  border: 1px solid var(--colorsSecondaryLight, #ecf2ff);\n  background-color: var(--colorsPrimaryAccent, #fff);\n  box-shadow: 0px 4px 8px 0px var(--colorsSecondaryBlue, #9ebbff1e);\n\n  .daily-norma-title {\n    color: var(--Primery-Color-Black, #2f2f2f);\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 133.3%;\n\n    margin: 0 0 12px 0;\n    padding: 0;\n  }\n\n  .daily-norma-body {\n    display: flex;\n    column-gap: 12px;\n  }\n\n  .daily-norma-text {\n    color: var(--Primery-Color-Blue, #407bff);\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 100%;\n\n    margin: 0;\n  }\n\n  .daily-norma-btn {\n    padding: 0;\n\n    color: #8baeff;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 125%;\n\n    background-color: inherit;\n    border: none;\n    cursor: pointer;\n  }\n"]))),L=i(5861),M=i(7757),T=i.n(M),V=k.default.div(o||(o=(0,v.Z)(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 3;\n"]))),F=k.default.div(a||(a=(0,v.Z)(["\n  position: fixed;\n\n  width: 100%;\n  height: 100%;\n\n  z-index: 4;\n"]))),S=k.default.div(l||(l=(0,v.Z)(["\n    position: absolute;\n\n    padding: 24px 12px;\n    margin: 0;\n\n    top: 50%;\n    left: 50%;\n    width: 400px;\n    transform: translate(-50%, -50%);\n\n    background: #fff;\n\n    border-radius: 10px;\n    box-sizing: border-box;\n    min-width: 256px;\n  }\n\n  .modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .title {\n      font-size: 26px;\n      font-weight: 500;\n    }\n\n"]))),A=k.default.div(d||(d=(0,v.Z)(["\n  text-align: right;\n"]))),B=k.default.button(s||(s=(0,v.Z)(["\n  padding: 0;\n  border: 0;\n  margin: 0;\n\n  width: 24px;\n  height: 24px;\n\n  background-color: transparent;\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    svg path {\n      stroke: red;\n      fill: red;\n      transition: stroke 0.5s ease;\n    }\n  }\n"]))),$=i(3329),E=function(n){var e=n.color,i=void 0===e?"#407BFF":e,t=n.size,r=void 0===t?24:t;return(0,$.jsx)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,$.jsx)("path",{d:"M6 18L18 6M6 6L18 18",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:i})})},W=function(n){var e=n.children,i=n.title,t=n.closeModal;(0,j.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()},e=function(n){r.current.contains(n.target)||t()};return window.addEventListener("keydown",n),document.addEventListener("mousedown",e),function(){window.removeEventListener("keydown",n),document.removeEventListener("mousedown",e)}}),[t]);var r=(0,j.useRef)(null);return(0,$.jsx)(V,{children:(0,$.jsx)(F,{children:(0,$.jsxs)(S,{onClick:function(n){return n.stopPropagation()},ref:r,children:[(0,$.jsxs)("div",{className:"modal-header",children:[(0,$.jsx)("h2",{children:i}),(0,$.jsx)(A,{onClick:function(n){return t(n)},children:(0,$.jsx)(B,{onClick:t,children:(0,$.jsx)(E,{size:24})})})]}),e]})})})},P=k.default.div(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),_=k.default.h2(p||(p=(0,v.Z)(["\n  font-size: 26px;\n  text-align: left;\n  margin-bottom: 24px;\n"]))),H=k.default.p(x||(x=(0,v.Z)(["\n  color: #2f2f2f;\n"]))),R=k.default.span(h||(h=(0,v.Z)(["\n  color: #407bff;\n"]))),q=k.default.div(u||(u=(0,v.Z)(["\n  border-radius: 10px;\n  border: 1px solid #d7e3ff;\n\n  color: #8f8f8f;\n"]))),D=k.default.p(f||(f=(0,v.Z)(["\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 16px;\n  height: auto;\n"]))),G=k.default.div(m||(m=(0,v.Z)(["\n  position: relative;\n"]))),K=k.default.div(g||(g=(0,v.Z)(["\n  margin: 0 auto;\n"]))),Y=k.default.label(b||(b=(0,v.Z)(["\n  margin-right: 24px;\n"]))),I=function(n){var e=n.closeModal,i=(0,j.useState)("girl"),t=(0,C.Z)(i,2),r=t[0],o=t[1],a=(0,j.useState)(""),l=(0,C.Z)(a,2),d=l[0],s=l[1],c=(0,j.useState)(""),p=(0,C.Z)(c,2),x=p[0],h=p[1],u=(0,j.useState)("1.8"),f=(0,C.Z)(u,2),m=f[0],g=f[1],b=(0,j.useState)(""),w=(0,C.Z)(b,2),y=w[0],v=w[1],k=function(){var n=(d*("girl"===r?.03:.04)+x*("girl"===r?.4:.6)).toFixed(1);g(n)},Z=function(){var n=(0,L.Z)(T().mark((function n(){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:k(),{gender:r,weight:d,activeTraningHours:x,dailyVol:m};case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,$.jsx)(P,{children:(0,$.jsxs)(W,{closeModal:e,children:[(0,$.jsx)(_,{children:"My daily norma"}),(0,$.jsxs)(H,{children:["For girl:",(0,$.jsx)(R,{children:"V=(M*0,03) + (T*0,4)"})]}),(0,$.jsxs)(H,{children:["For man:",(0,$.jsx)(R,{children:"V=(M*0,04) + (T*0,6)"})]}),(0,$.jsxs)(q,{children:[(0,$.jsx)(R,{children:"*"}),(0,$.jsx)(D,{children:"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),(0,$.jsx)(G,{children:(0,$.jsxs)("form",{children:[(0,$.jsxs)(K,{children:[(0,$.jsx)("h4",{children:"Calculate your rate:"}),(0,$.jsxs)(Y,{children:[(0,$.jsx)("input",{type:"radio",name:"gender",value:"girl",checked:"girl"===r,onChange:function(){return o("girl")}}),"For girl"]}),(0,$.jsxs)(Y,{children:[(0,$.jsx)("input",{type:"radio",name:"gender",value:"man",checked:"man"===r,onChange:function(){return o("man")}}),"For boy"]})]}),(0,$.jsxs)(K,{children:[(0,$.jsx)("p",{children:"Your weight in kilograms:"}),(0,$.jsx)("input",{type:"number",placeholder:"kg",value:d,onChange:function(n){return s(n.target.value)}})]}),(0,$.jsxs)(K,{children:[(0,$.jsx)("p",{children:"Time of active participation in sports or other activities with a high physical load:"}),(0,$.jsx)("input",{type:"number",placeholder:"Time in hours",value:x,onChange:function(n){return h(n.target.value)}})]}),(0,$.jsxs)(K,{children:["The required amount of water in liters per day:"," ",(0,$.jsxs)("strong",{children:[m," L"]})]}),(0,$.jsxs)(K,{children:[(0,$.jsx)("p",{children:"Write down how much water you will drink:"}),(0,$.jsx)("input",{type:"number",placeholder:"L",value:y,onChange:function(n){return v(n.target.value)}})]}),(0,$.jsx)("button",{onClick:Z,children:"Save"})]})})]})})},J=function(){var n=(0,j.useState)(!1),e=(0,C.Z)(n,2),i=e[0],t=e[1];return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(N,{children:[(0,$.jsx)("h3",{className:"daily-norma-title",children:"My daily norma"}),(0,$.jsxs)("div",{className:"daily-norma-body",children:[(0,$.jsx)("p",{className:"daily-norma-text",children:"1.5 L"}),(0,$.jsx)("button",{onClick:function(){t(!0)},className:"daily-norma-btn",type:"button",children:"Edit"})]})]}),i&&(0,$.jsx)(I,{closeModal:function(){t(!1)}})]})},O=i.p+"static/media/WaterMobile.9f1957d1c6f099f9f56f.png",Q=i.p+"static/media/WaterTablet.11be4dc988cd19e9cb4e.png",U=i.p+"static/media/WaterDesktop.8debe03159e0fa7fe8cc.png",X=k.default.div(w||(w=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 434px;\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position-y: 82px;\n  background-position-x: center;\n  background-size: 280px 208px;\n\n  @media only screen and (min-width: 768px) {\n    min-height: 501px;\n    background-image: url(",");\n    background-position-y: top;\n    background-size: 518px 386px;\n  }\n  @media only screen and (min-width: 1440px) {\n    min-height: 678px;\n    padding-top: 30px;\n\t padding-bottom: 16px;\n    background-image: url(",");\n    background-size: 738px 548px;\n\n  }\n"])),O,Q,U),nn=i(6984),en=i(7924).default.div(y||(y=(0,v.Z)(["\n  width: 100%;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    column-gap: 12px;\n  }\n\n  .radio-panel-body {\n    margin-bottom: 16px;\n\n    @media only screen and (min-width: 768px) {\n      min-width: 356px;\n      margin: 0;\n    }\n    @media only screen and (min-width: 1440px) {\n      min-width: 391px;\n    }\n\n    .radio-panel-title {\n      margin-bottom: 11px;\n\n      color: ",";\n\n      font-size: 18px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 133%;\n\n      @media only screen and (min-width: 768px) {\n        margin-bottom: 19px;\n      }\n    }\n\n    .radio-panel-line {\n      display: flex;\n      justify-content: space-between;\n\n      position: relative;\n\n      width: 256px;\n      height: 8px;\n      margin: 0 auto 16px;\n\n      background-color: ",";\n      border-radius: 10px;\n\n      @media only screen and (min-width: 768px) {\n        width: 325px;\n      }\n      @media only screen and (min-width: 1440px) {\n        width: 360px;\n      }\n\n      &::before {\n        content: '';\n        display: block;\n        width: 14px;\n        height: 14px;\n        position: absolute;\n        top: -50%;\n home-page/water-config-section\n        left: calc(","% - (7px));\n\n\n        z-index: 2;\n\n        border-radius: 50%;\n        border: 1px solid ",";\n        background-color: ",";\n\n        animation-name: circle;\n        animation-duration: 2s;\n        animation-timing-function: linear;\n        animation-fill-mode: forwards;\n      }\n\n      @keyframes circle {\n        100% {\n          left: calc(","% - (7px));\n\n        }\n      }\n\n      &::after {\n        content: '';\n        display: block;\n\n        width: calc(","%);\n\n        height: 8px;\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        \n\n        border-radius: 10px;\n        background-color: ",";\n\t\t  background-color: ",";\n\n        animation-name: line;\n        animation-duration: 2s;\n        animation-timing-function: linear;\n        animation-fill-mode: forwards;\n      }\n\n      @keyframes line {\n        100% {\n\n          width: calc(","%);\n\n        }\n      }\n\n      .line-start,\n      .line-center,\n      .line-end {\n        width: 1px;\n        height: 8px;\n\n        position: absolute;\n        top: 15px;\n\n        background-color: ",";\n      }\n\n      .line-start {\n        left: 0px;\n      }\n      .line-center {\n        right: 0px;\n      }\n      .line-end {\n        left: 50%;\n        transform: translate(-50%);\n      }\n    }\n\n    .radio-panel-wrapper-parsent {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 16px;\n\n      .radio-panel-parsent {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        color: ",";\n        font-size: 16px;\n        font-weight: 500;\n        line-height: 125%;\n      }\n\n      .radio-panel-parsent:last-child,\n      .radio-panel-parsent:first-child {\n        color: ",";\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 133.3%;\n      }\n\n      .start {\n        min-width: 22px;\n      }\n      .center {\n        min-width: 50px;\n      }\n      .end {\n        min-width: 30px;\n      }\n    }\n  }\n\n  .radio-panel-btn {\n    display: flex;\n    padding: 6px 12px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    width: 100%;\n\n    border-radius: 10px;\n    background-color: ",";\n    color: ",";\n    box-shadow: 0px 4px 8px 0px #407bff56;\n\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 125%;\n\n    .icon-btn {\n      stroke-width: 1px;\n      width: 24px;\n      height: 24px;\n    }\n\n    @media only screen and (min-width: 768px) {\n      padding: 10px 12px;\n      align-self: center;\n    }\n    @media only screen and (min-width: 1440px) {\n      min-width: 178px;\n    }\n  }\n"])),nn.Z.colors.primaryAccent,nn.Z.colors.secondaryLightBlue,(function(n){return n.$previousValue}),nn.Z.colors.primaryAccent,nn.Z.colors.primaryLight,(function(n){return n.$newValue}),(function(n){return n.$previousValue}),nn.Z.colors.secondaryBlue,(function(n){var e=n.$bgColor;return e}),(function(n){return n.$newValue}),nn.Z.colors.secondaryLightBlue,nn.Z.colors.primaryAccent,nn.Z.colors.primaryAccent,nn.Z.colors.primaryAccent,nn.Z.colors.primaryLight),tn=i(3818),rn=function(){var n,e=60;return e>100&&(e=100,n="".concat(nn.Z.colors.primaryAccent)),(0,$.jsxs)($.Fragment,{children:[" home-page/water-config-section",(0,$.jsxs)(en,{$bgColor:n,$previousValue:30,$newValue:e,children:[(0,$.jsxs)("div",{className:"radio-panel-body",children:[(0,$.jsx)("h3",{className:"radio-panel-title",children:"Today"}),(0,$.jsxs)("div",{className:"radio-panel-line",children:[(0,$.jsx)("span",{className:"line-start"}),(0,$.jsx)("span",{className:"line-center"}),(0,$.jsx)("span",{className:"line-end"})]}),(0,$.jsxs)("div",{className:"radio-panel-wrapper-parsent",children:[(0,$.jsx)("p",{className:"radio-panel-parsent start",children:"0%"}),(0,$.jsx)("p",{className:"radio-panel-parsent center",children:"50%"}),(0,$.jsx)("p",{className:"radio-panel-parsent end",children:"100%"})]})]}),(0,$.jsxs)("button",{className:"radio-panel-btn",children:[(0,$.jsx)(tn.HGK,{className:"icon-btn"}),"Add Water"]})]})]})},on=function(){return(0,$.jsxs)(X,{children:[(0,$.jsx)(J,{}),(0,$.jsx)(rn,{})]})};function an(){return(0,$.jsx)(z.aj,{children:(0,$.jsxs)(Z,{children:[(0,$.jsx)(on,{}),(0,$.jsx)("div",{children:"Today and calendar"})]})})}}}]);
//# sourceMappingURL=740.fc9743eb.chunk.js.map