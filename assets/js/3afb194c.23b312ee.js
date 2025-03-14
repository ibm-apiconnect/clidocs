"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[88682],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},33143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"v1008/analytics/clustermgmt/apic_clustermgmt_getRecovery","title":"apic clustermgmt:getRecovery","description":"Use the index recovery API to get information about ongoing and completed shard recoveries","source":"@site/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getRecovery.md","sourceDirName":"v1008/analytics/clustermgmt","slug":"/v1008/analytics/clustermgmt/apic_clustermgmt_getRecovery","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getRecovery","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getRecovery.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getPendingTasks","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getPendingTasks"},"next":{"title":"apic clustermgmt:getRecoveryByIndex","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getRecoveryByIndex"}}');var r=n(74848),i=n(28453);const o={tags:["group: clustermgmt"]},c="apic clustermgmt",a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getRecovery"]})}),"\n",(0,r.jsx)(t.p,{children:"Use the index recovery API to get information about ongoing and completed shard recoveries"}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"Returns information about ongoing and completed shard recoveries for one or more indices. For data streams, the API returns information for the stream's backing indices."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"apic clustermgmt:getRecovery --mode analytics [flags]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\n      apic clustermgmt:getRecovery --mode analytics [flags]\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --active_only                If true, the response only includes ongoing shard recoveries. Defaults to false.\n      --analytics-service string   Analytics service name or ID. (required)\n      --detailed                   If true, the response includes detailed information about shard recoveries.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);