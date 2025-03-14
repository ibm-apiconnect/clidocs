"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[23189],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},31566:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"v1009/analytics/clustermgmt/apic_clustermgmt_getSnapshot","title":"apic clustermgmt:getSnapshot","description":"Get snapshot","source":"@site/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getSnapshot.md","sourceDirName":"v1009/analytics/clustermgmt","slug":"/v1009/analytics/clustermgmt/apic_clustermgmt_getSnapshot","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getSnapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getSnapshot.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getSettings","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getSettings"},"next":{"title":"apic clustermgmt:getState","permalink":"/clidocs/docs/v1009/analytics/clustermgmt/apic_clustermgmt_getState"}}');var i=s(74848),r=s(28453);const o={tags:["group: clustermgmt"]},a="apic clustermgmt",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getSnapshot"]})}),"\n",(0,i.jsx)(t.p,{children:"Get snapshot"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves information about one or more snapshots."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getSnapshot --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getSnapshot --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --analytics-service string   Analytics service name or ID. (required)\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can\'t be returned) will be ignored. Defaults to false.\n                                   \n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n      --repository string          Comma-separated list of snapshot repository names. (required)\n  -s, --server string              management server endpoint (required)\n      --snapshot string            Comma-separated list of snapshot names to retrieve. (required)\n      --verbose                    Whether to show all, or just basic snapshot information. If true, returns all information. If false, omits information like start/end times, failures, and shards. Optional, defaults to true.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);