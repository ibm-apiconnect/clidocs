"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[44452],{4728:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const a={tags:["group: queries","scope: catalog"]},t="apic queries",o={id:"v1008/analytics/queries/apic_queries_catalogTransferOwner",title:"apic queries:catalogTransferOwner",description:"Transfer ownership of a saved query to a different user",source:"@site/docs/v1008/analytics/queries/apic_queries_catalogTransferOwner.md",sourceDirName:"v1008/analytics/queries",slug:"/v1008/analytics/queries/apic_queries_catalogTransferOwner",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_catalogTransferOwner",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/queries/apic_queries_catalogTransferOwner.md",tags:[{inline:!0,label:"group: queries",permalink:"/clidocs/docs/tags/group-queries"},{inline:!0,label:"scope: catalog",permalink:"/clidocs/docs/tags/scope-catalog"}],version:"current",frontMatter:{tags:["group: queries","scope: catalog"]},sidebar:"tutorialSidebar",previous:{title:"apic queries:catalogShare",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_catalogShare"},next:{title:"apic queries:catalogUnshare",permalink:"/clidocs/docs/v1008/analytics/queries/apic_queries_catalogUnshare"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsxs)(r.h1,{id:"apic-queries",children:["apic queries",":catalogTransferOwner"]})}),"\n",(0,s.jsx)(r.p,{children:"Transfer ownership of a saved query to a different user"}),"\n",(0,s.jsx)(r.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsxs)(r.p,{children:["Provide a body with new_owner_user_url: ",(0,s.jsx)(r.code,{children:"/api/user-registries/{org}/{user-registry}/users/{user}"})," to transfer this query to a new owner."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"apic queries:catalogTransferOwner --mode analytics [flags]\n"})}),"\n",(0,s.jsx)(r.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\n      apic queries:catalogTransferOwner --mode analytics [flags] ID NEW_OWNER_USER_URL\n\n"})}),"\n",(0,s.jsx)(r.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n  -c, --catalog string             Catalog name or ID. (required)\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string                 Provider organization name or ID. (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,s.jsx)(r.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);