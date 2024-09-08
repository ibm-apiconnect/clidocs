"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[18708],{26437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(74848),i=n(28453);const r={},a="apic clustermgmt",o={id:"v1008/analytics/apic_clustermgmt_getIndex",title:"apic clustermgmt:getIndex",description:"Returns indices information",source:"@site/docs/v1008/analytics/apic_clustermgmt_getIndex.md",sourceDirName:"v1008/analytics",slug:"/v1008/analytics/apic_clustermgmt_getIndex",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getIndex",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/apic_clustermgmt_getIndex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:getHealth",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getHealth"},next:{title:"apic clustermgmt:getIngestionEventsNodeStats",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getIngestionEventsNodeStats"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getIndex"]})}),"\n",(0,s.jsx)(t.p,{children:"Returns indices information"}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"Returns information about one or more indices. For data streams, the API returns information about the stream's backing indices."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"apic clustermgmt:getIndex --mode analytics [flags]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"      apic clustermgmt:getIndex --mode analytics [flags]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.\n      --analytics-service string   Analytics service name or ID. (required)\n      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.\n\n      --features string            Return information about specific index features. Supports comma- separated values.\n      --flat_settings              If true, returns settings in flat format.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can\'t be returned) will be ignored. Defaults to false.\n\n      --include_defaults           If true, returns all default cluster settings. Defaults to false.\n      --index string               Comma-separated list or wildcard expression of index names used to limit the request. (required)\n      --local string               Whether to get information from the local node.\n      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,s.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);