"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[27156],{28697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const a={},r="apic clustermgmt",o={id:"v1005/analytics/apic_clustermgmt_deleteIndex",title:"apic clustermgmt:deleteIndex",description:"Deletes one or more indices.",source:"@site/docs/v1005/analytics/apic_clustermgmt_deleteIndex.md",sourceDirName:"v1005/analytics",slug:"/v1005/analytics/apic_clustermgmt_deleteIndex",permalink:"/ibm-apiconnect/clidocs/docs/v1005/analytics/apic_clustermgmt_deleteIndex",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_clustermgmt_deleteIndex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:deleteAliasByIndexAlias",permalink:"/ibm-apiconnect/clidocs/docs/v1005/analytics/apic_clustermgmt_deleteAliasByIndexAlias"},next:{title:"apic clustermgmt:deleteSnapshot",permalink:"/ibm-apiconnect/clidocs/docs/v1005/analytics/apic_clustermgmt_deleteSnapshot"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":deleteIndex"]}),"\n",(0,i.jsx)(t.p,{children:"Deletes one or more indices."}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Deleting an index deletes its documents, shards, and metadata."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:deleteIndex --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.\n      --analytics-service string   Analytics service name or ID. (required)\n      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.\n\n      --force                      If true, this request forces a delete even if it is the current write alias target and will prevent the ingestion of new analytics data. Defaults to false.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                       Help for clustermgmt:deleteIndex\n      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can\u2019t be returned) will be ignored. Defaults to false.\n\n      --index string               Comma-separated list or wildcard expression of index names used to limit the request. (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);