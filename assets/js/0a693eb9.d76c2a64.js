"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[44498],{29376:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(74848),a=n(28453);const o={tags:["group: validate"]},d="apic validate",l={id:"v1008/governance/validate/apic_validate",title:"apic validate",description:"Validate an API or product definition",source:"@site/docs/v1008/governance/validate/apic_validate.md",sourceDirName:"v1008/governance/validate",slug:"/v1008/governance/validate/apic_validate",permalink:"/clidocs/docs/v1008/governance/validate/apic_validate",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/governance/validate/apic_validate.md",tags:[{inline:!0,label:"group: validate",permalink:"/clidocs/docs/tags/group-validate"}],version:"current",frontMatter:{tags:["group: validate"]},sidebar:"tutorialSidebar",previous:{title:"apic test",permalink:"/clidocs/docs/v1008/governance/test/apic_test"},next:{title:"apic version",permalink:"/clidocs/docs/v1008/governance/version/apic_version"}},r={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"apic-validate",children:"apic validate"})}),"\n",(0,t.jsx)(i.p,{children:"Validate an API or product definition"}),"\n",(0,t.jsx)(i.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"apic validate"})," does offline validation. For online validation, use ",(0,t.jsx)(i.code,{children:"draft-apis:validate"}),", which does additional validation as would be done during stage/publish time."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"apic validate [FILE] --mode governance [flags]\n"})}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Validate an API definition\n  $ apic validate routes.yaml\n  Validated routes.yaml API definition [routes:1.0]\nValidate an API definition without IBM extensions\n  $ apic validate --no-extensions routes.yaml\n  Validated routes.yaml API definition [routes:1.0]\nValidate a product definition and its referenced APIs\n  $ apic validate climb-on.yaml\n  Validated climb-on.yaml product definition [climb-on:1.0.0]\n  Validated routes.yaml API definition [valid:1.0]\nValidate a product definition without validating its referenced APIs\n  $ apic validate --product-only climb-on.yaml\n  Validated climb-on.yaml product definition [climb-on:1.0.0]\n\n"})}),"\n",(0,t.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"  -h, --help            Help for validate\n      --no-extensions   for API definitions, do not validate against IBM Swagger extensions\n  -p, --product-only    for products definitions, do not validate referenced APIs\n"})}),"\n",(0,t.jsx)(i.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>l});var t=n(96540);const a={},o=t.createContext(a);function d(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);