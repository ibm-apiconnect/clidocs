"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[79118],{34406:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads","title":"apic clustermgmt:getNodesHotThreads","description":"Returns the hot threads on each selected node in the cluster","source":"@site/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads.md","sourceDirName":"v1008/analytics/clustermgmt","slug":"/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getNodesByIdOrMetric","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric"},"next":{"title":"apic clustermgmt:getNodesHotThreadsById","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreadsById"}}');var r=s(74848),o=s(28453);const i={tags:["group: clustermgmt"]},a="apic clustermgmt",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getNodesHotThreads"]})}),"\n",(0,r.jsx)(t.p,{children:"Returns the hot threads on each selected node in the cluster"}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"This API yields a breakdown of the hot threads on each selected node in the cluster. The output is plain text with a breakdown of each node's top hot threads."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"apic clustermgmt:getNodesHotThreads --mode analytics [flags]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\n      apic clustermgmt:getNodesHotThreads --mode analytics [flags]\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --ignore_idle_threads        If true, known idle threads (e.g. waiting in a socket select, or to get a task from an empty queue) are filtered out. Defaults to true.\n      --interval string            The interval to do the second sampling of threads. Defaults to 500ms.\n      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                     Prettify response\n  -s, --server string              management server endpoint (required)\n      --snapshots int32            Number of samples of thread stacktrace. Defaults to 10.\n      --threads int32              Specifies the number of hot threads to provide information for. Defaults to 3.\n      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n      --type string                The type to sample. Defaults to cpu.\n'})}),"\n",(0,r.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);