"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[96683],{95685:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>r});var o=i(74848),a=i(28453);const t={tags:["group: compliance"]},c="apic compliance",s={id:"v1008/governance/compliance/apic_compliance_validate",title:"apic compliance:validate",description:"Validate an OpenAPI or Product",source:"@site/docs/v1008/governance/compliance/apic_compliance_validate.md",sourceDirName:"v1008/governance/compliance",slug:"/v1008/governance/compliance/apic_compliance_validate",permalink:"/clidocs/docs/v1008/governance/compliance/apic_compliance_validate",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/governance/compliance/apic_compliance_validate.md",tags:[{inline:!0,label:"group: compliance",permalink:"/clidocs/docs/tags/group-compliance"}],version:"current",frontMatter:{tags:["group: compliance"]},sidebar:"tutorialSidebar",previous:{title:"apic compliance:scan",permalink:"/clidocs/docs/v1008/governance/compliance/apic_compliance_scan"},next:{title:"apic compliance:validate_all",permalink:"/clidocs/docs/v1008/governance/compliance/apic_compliance_validate_all"}},l={},r=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsxs)(n.h1,{id:"apic-compliance",children:["apic compliance",":validate"]})}),"\n",(0,o.jsx)(n.p,{children:"Validate an OpenAPI or Product"}),"\n",(0,o.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(n.p,{children:"Validate a Single OpenAPI or a Single Product with a specified list of Rulesets.\nIf no Rulesets are provided, spectral-oas and spectral-owasp Global Rulesets will be used for an OpenAPI document, whereas for an AsyncAPI document, the spectral-async Global Ruleset will be used.\nIf validating a Product, a list of one or more Rulesets to be used must be provided."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"apic compliance:validate --mode governance [flags]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\n      apic compliance:validate --mode governance [flags] COMPLIANCE_REQUEST_FILE\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string        Organization name or id (required)\n      --output string     Write file(s) to directory, instead of STDOUT (default "-")\n      --rulesets string   Define one or more rulesets to be used by providing the name in the format rulesetName1,rulesetName2 with no spaces when separating names by comma. If one ruleset name is mentioned no comma should be used.\n  -s, --server string     management server endpoint (required)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var o=i(96540);const a={},t=o.createContext(a);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);