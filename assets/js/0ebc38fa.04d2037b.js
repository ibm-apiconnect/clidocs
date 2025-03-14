"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[77697],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},39883:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"v1009/analytics/clustermgmt/apic_clustermgmt_getFlush","title":"apic clustermgmt:getFlush","description":"Flushes one or more data streams or indices","source":"@site/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getFlush.md","sourceDirName":"v1009/analytics/clustermgmt","slug":"/v1009/analytics/clustermgmt/apic_clustermgmt_getFlush","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getFlush","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getFlush.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getAllocationExplain","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getAllocationExplain"},"next":{"title":"apic clustermgmt:getFlushByIndex","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getFlushByIndex"}}');var i=s(74848),r=s(28453);const a={tags:["group: clustermgmt"]},o="apic clustermgmt",l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getFlush"]})}),"\n",(0,i.jsx)(t.p,{children:"Flushes one or more data streams or indices"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Flushing a data stream or index is the process of making sure that any data that is currently only stored in the transaction log is also permanently stored in the Lucene index."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getFlush --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getFlush --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.\n      --analytics-service string   Analytics service name or ID. (required)\n      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.\n                                   \n      --force                      If true, the request forces a flush even if there are no changes to commit to the index. Defaults to true.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can\'t be returned) will be ignored. Defaults to false.\n                                   \n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n      --wait_if_ongoing            If true, the flush operation blocks until execution when another flush operation is running\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);