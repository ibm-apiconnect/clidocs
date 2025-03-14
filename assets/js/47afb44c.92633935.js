"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[33664],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}},35971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"v1008/analytics/clustermgmt/apic_clustermgmt_rolloverToTarget","title":"apic clustermgmt:rolloverToTarget","description":"Creates a new index for a data stream or index alias","source":"@site/docs/v1008/analytics/clustermgmt/apic_clustermgmt_rolloverToTarget.md","sourceDirName":"v1008/analytics/clustermgmt","slug":"/v1008/analytics/clustermgmt/apic_clustermgmt_rolloverToTarget","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_rolloverToTarget","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/clustermgmt/apic_clustermgmt_rolloverToTarget.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:rolloverIndex","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_rolloverIndex"},"next":{"title":"apic clustermgmt:shrinkIndex","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_shrinkIndex"}}');var n=r(74848),o=r(28453);const i={tags:["group: clustermgmt"]},a="apic clustermgmt",l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":rolloverToTarget"]})}),"\n",(0,n.jsx)(t.p,{children:"Creates a new index for a data stream or index alias"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"The rollover API creates a new index for a data stream or index alias."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic clustermgmt:rolloverToTarget --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n      apic clustermgmt:rolloverToTarget --mode analytics [flags]\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string          Natural language and locale that the client prefers.\n      --analytics-service string        Analytics service name or ID. (required)\n      --dry_run                         If true, then the request simulates the operation only and returns the resulting state.\n      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --index string                    Comma-separated list or wildcard expression of index names used to limit the request. (required)\n      --master_timeout string           Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --output string                   Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string                   management server endpoint (required)\n      --target string                   Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)\n      --timeout string                  Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n      --wait_for_active_shards string   A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait. Defaults to 0.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);