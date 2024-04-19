"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[26070],{6275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453);const s={},a="apic clustermgmt",o={id:"v1005/analytics/apic_clustermgmt_getStateByMetricsTarget",title:"apic clustermgmt:getStateByMetricsTarget",description:"Returns an internal representation of the cluster state for debugging or diagnostic purposes.",source:"@site/docs/v1005/analytics/apic_clustermgmt_getStateByMetricsTarget.md",sourceDirName:"v1005/analytics",slug:"/v1005/analytics/apic_clustermgmt_getStateByMetricsTarget",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getStateByMetricsTarget",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/analytics/apic_clustermgmt_getStateByMetricsTarget.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:getStateByMetrics",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getStateByMetrics"},next:{title:"apic clustermgmt:getStats",permalink:"/clidocs/docs/v1005/analytics/apic_clustermgmt_getStats"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getStateByMetricsTarget"]}),"\n",(0,n.jsx)(t.p,{children:"Returns an internal representation of the cluster state for debugging or diagnostic purposes."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"The cluster state is an internal data structure which keeps track of a variety of information needed by every node."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic clustermgmt:getStateByMetricsTarget --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string            Natural language and locale that the client prefers.\n      --allow_no_indices                  If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.\n      --analytics-service string          Analytics service name or ID. (required)\n      --expand_wildcards string           Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.\n\n      --flat_settings                     If true, returns settings in flat format.\n      --format string                     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                              Help for clustermgmt:getStateByMetricsTarget\n      --ignore_unavailable                For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can\u2019t be returned) will be ignored. Defaults to false.\n\n      --local string                      Whether to get information from the local node.\n      --master_timeout string             Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --metrics string                    A comma-separated list of metrics (required)\n      --output string                     Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                            Prettify response\n  -s, --server string                     management server endpoint (required)\n      --target string                     Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)\n      --wait_for_metadata_version int32   Waits for the metadata version to be equal or greater than the specified metadata version.\n      --wait_for_timeout string           Specifies the maximum time to wait for wait_for_metadata_version before timing out.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);