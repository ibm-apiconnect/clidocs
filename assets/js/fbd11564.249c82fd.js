"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[9962],{44463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const a={},o="apic clustermgmt",l={id:"v1005/analytics/apic_clustermgmt_getAllocationExplain",title:"apic clustermgmt:getAllocationExplain",description:"Result of _cluster/allocation/explain",source:"@site/docs/v1005/analytics/apic_clustermgmt_getAllocationExplain.md",sourceDirName:"v1005/analytics",slug:"/v1005/analytics/apic_clustermgmt_getAllocationExplain",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getAllocationExplain",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_clustermgmt_getAllocationExplain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:getAliasByName",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getAliasByName"},next:{title:"apic clustermgmt:getFlush",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getFlush"}},r={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getAllocationExplain"]}),"\n",(0,i.jsx)(t.p,{children:"Result of _cluster/allocation/explain"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of the cluster allocation explain API is to provide explanations for shard allocations in the cluster. For unassigned shards, the explain API provides an explanation for why the shard is unassigned.  For assigned shards, the explain API provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getAllocationExplain --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string       Natural language and locale that the client prefers.\n      --analytics-service string     Analytics service name or ID. (required)\n      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                         Help for clustermgmt:getAllocationExplain\n      --include_disk_info_optional   If true, returns information about disk usage and shard sizes. Defaults to false.\n      --include_yes_decisions        If true, returns YES decisions in explanation. Defaults to false.\n      --output string                Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                       Prettify response\n  -s, --server string                management server endpoint (required)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);