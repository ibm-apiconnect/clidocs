"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[65927],{47695:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453);const a={tags:["group: queries","scope: space"]},t="apic queries",o={id:"v1008/analytics/queries/apic_queries_spaceTransferOwner",title:"apic queries:spaceTransferOwner",description:"Transfer ownership of a saved query to a different user",source:"@site/docs/v1008/analytics/queries/apic_queries_spaceTransferOwner.md",sourceDirName:"v1008/analytics/queries",slug:"/v1008/analytics/queries/apic_queries_spaceTransferOwner",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_spaceTransferOwner",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/queries/apic_queries_spaceTransferOwner.md",tags:[{inline:!0,label:"group: queries",permalink:"/clidocs/docs/tags/group-queries"},{inline:!0,label:"scope: space",permalink:"/clidocs/docs/tags/scope-space"}],version:"current",frontMatter:{tags:["group: queries","scope: space"]},sidebar:"tutorialSidebar",previous:{title:"apic queries:spaceShare",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_spaceShare"},next:{title:"apic queries:spaceUnshare",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_spaceUnshare"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsxs)(s.h1,{id:"apic-queries",children:["apic queries",":spaceTransferOwner"]})}),"\n",(0,n.jsx)(s.p,{children:"Transfer ownership of a saved query to a different user"}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsxs)(s.p,{children:["Provide a body with new_owner_user_url: ",(0,n.jsx)(s.code,{children:"/api/user-registries/{org}/{user-registry}/users/{user}"})," to transfer this query to a new owner."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"apic queries:spaceTransferOwner --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"\n      apic queries:spaceTransferOwner --mode analytics [flags] ID NEW_OWNER_USER_URL\n\n"})}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n  -c, --catalog string             Catalog name or ID. (required)\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string                 Provider organization name or ID. (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n      --space string               Space name or ID. (required)\n'})}),"\n",(0,n.jsx)(s.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function t(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);