"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[18542],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},86832:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex","title":"apic clustermgmt:getNodesStatsByIdMetricIndex","description":"Result of _nodes/:nodeId","source":"@site/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex.md","sourceDirName":"v1005/analytics","slug":"/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex","permalink":"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic clustermgmt:getNodesStatsByIdMetric","permalink":"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric"},"next":{"title":"apic clustermgmt:getNodesUsage","permalink":"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesUsage"}}');var i=s(74848),r=s(28453);const o={},a="apic clustermgmt",d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getNodesStatsByIdMetricIndex"]})}),"\n",(0,i.jsxs)(t.p,{children:["Result of _nodes/",":nodeId"]}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsxs)(t.p,{children:["Returns the result of nodes/",":nodeId"," on OpenSearch"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getNodesStatsByIdMetricIndex --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string       Natural language and locale that the client prefers.\n      --analytics-service string     Analytics service name or ID. (required)\n      --completion_fields string     Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.\n      --fielddata_fields string      Comma-separated list or wildcard expressions of fields to include in fielddata statistics.\n      --fields string                Comma-separated list or wildcard expressions of fields to include in the statistics.\n      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --groups string                Comma-separated list of search groups to include in the search statistics.\n  -h, --help                         Help for clustermgmt:getNodesStatsByIdMetricIndex\n      --include_segment_file_sizes   If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested). Defaults to false.\n      --include_unloaded_segments    If true, the response includes information from segments that are not loaded into memory.\n      --index-metric string          Limit the information returned for indices metric to the specific index metrics. (required)\n      --level string                 Indicates whether statistics are aggregated at the cluster, index, or shard level.\n      --master_timeout string        Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --metric string                Limits the information returned to the specific metrics. Supports a comma-separated list, such as http,ingest. (required)\n      --output string                Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                       Prettify response\n  -s, --server string                management server endpoint (required)\n      --timeout string               Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n      --types string                 A comma-separated list of document types for the indexing index metric.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);