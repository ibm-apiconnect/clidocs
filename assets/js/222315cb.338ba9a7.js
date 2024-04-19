"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[48047],{61944:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),n=s(28453);const r={},o="apic clustermgmt",a={id:"v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric",title:"apic clustermgmt:getNodesStatsByIdMetric",description:"Returns cluster nodes statistics.",source:"@site/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric.md",sourceDirName:"v1005/analytics",slug:"/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetric.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:getNodesStatsById",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesStatsById"},next:{title:"apic clustermgmt:getNodesStatsByIdMetricIndex",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getNodesStatsByIdMetricIndex"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getNodesStatsByIdMetric"]}),"\n",(0,i.jsx)(t.p,{children:"Returns cluster nodes statistics."}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"You can use the cluster nodes stats API to retrieve statistics for nodes in a cluster. All the nodes selective options are explained here. By default, all stats are returned. You can limit the returned information by using metrics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic clustermgmt:getNodesStatsByIdMetric --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string       Natural language and locale that the client prefers.\n      --analytics-service string     Analytics service name or ID. (required)\n      --completion_fields string     Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.\n      --fielddata_fields string      Comma-separated list or wildcard expressions of fields to include in fielddata statistics.\n      --fields string                Comma-separated list or wildcard expressions of fields to include in the statistics.\n      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --groups string                Comma-separated list of search groups to include in the search statistics.\n  -h, --help                         Help for clustermgmt:getNodesStatsByIdMetric\n      --include_segment_file_sizes   If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested). Defaults to false.\n      --include_unloaded_segments    If true, the response includes information from segments that are not loaded into memory.\n      --level string                 Indicates whether statistics are aggregated at the cluster, index, or shard level.\n      --master_timeout string        Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --metric string                Limits the information returned to the specific metrics. Supports a comma-separated list, such as http,ingest. (required)\n      --output string                Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                       Prettify response\n  -s, --server string                management server endpoint (required)\n      --timeout string               Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n      --types string                 A comma-separated list of document types for the indexing index metric.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);