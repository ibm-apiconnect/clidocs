"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[14419],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(96540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},82997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric","title":"apic clustermgmt:getNodesByIdOrMetric","description":"Returns cluster nodes information","source":"@site/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric.md","sourceDirName":"v1008/analytics/clustermgmt","slug":"/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesByIdOrMetric.md","tags":[{"inline":true,"label":"group: clustermgmt","permalink":"/clidocs/docs/tags/group-clustermgmt"}],"version":"current","frontMatter":{"tags":["group: clustermgmt"]},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getNodes","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodes"},"next":{"title":"apic clustermgmt:getNodesHotThreads","permalink":"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_getNodesHotThreads"}}');var n=r(74848),i=r(28453);const o={tags:["group: clustermgmt"]},c="apic clustermgmt",a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getNodesByIdOrMetric"]})}),"\n",(0,n.jsx)(t.p,{children:"Returns cluster nodes information"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"The cluster nodes info API allows to retrieve one or more (or all) of the cluster nodes information. By default, it returns all attributes and core settings for a node."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic clustermgmt:getNodesByIdOrMetric --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n      apic clustermgmt:getNodesByIdOrMetric --mode analytics [flags]\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n      --flat_settings              If true, returns settings in flat format.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --node-id-or-metric string   Node ID or metric (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                     Prettify response\n  -s, --server string              management server endpoint (required)\n      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);