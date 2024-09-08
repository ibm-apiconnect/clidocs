"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[63394],{23819:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(74848),i=s(28453);const a={},r="apic clustermgmt",o={id:"v1008/analytics/apic_clustermgmt_getHealth",title:"apic clustermgmt:getHealth",description:"Returns the health status of a cluster",source:"@site/docs/v1008/analytics/apic_clustermgmt_getHealth.md",sourceDirName:"v1008/analytics",slug:"/v1008/analytics/apic_clustermgmt_getHealth",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getHealth",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/apic_clustermgmt_getHealth.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:getFlushByIndex",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getFlushByIndex"},next:{title:"apic clustermgmt:getIndex",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_getIndex"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":getHealth"]})}),"\n",(0,n.jsx)(t.p,{children:"Returns the health status of a cluster"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"The cluster health API returns a simple status on the health of the cluster. You can also use the API to get the health status of only specified data streams and indices. For data streams, the API retrieves the health status of the stream's backing indices."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic clustermgmt:getHealth --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"      apic clustermgmt:getHealth --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string            Natural language and locale that the client prefers.\n      --analytics-service string          Analytics service name or ID. (required)\n      --format string                     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --level string                      Indicates whether statistics are aggregated at the cluster, index, or shard level.\n      --local string                      Whether to get information from the local node.\n      --master_timeout string             Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --output string                     Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                            Prettify response\n  -s, --server string                     management server endpoint (required)\n      --timeout string                    Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n      --wait_for_active_shards string     A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait. Defaults to 0.\n      --wait_for_events string            Wait until all currently queued events with the given priority are processed.\n      --wait_for_no_initializing_shards   boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard initializations. Defaults to false, which means it will not wait for initializing shards.\n      --wait_for_no_relocating_shards     A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard relocations. Defaults to false, which means it will not wait for relocating shards.\n      --wait_for_nodes string             The request waits until the specified number N of nodes is available. It also accepts >=N, <=N, >N and <N. Alternatively, it is possible to use ge(N), le(N), gt(N) and lt(N) notation.\n      --wait_for_status string            Will wait (until the timeout provided) until the status of the cluster changes to the one provided or better, i.e. green > yellow > red. By default, will not wait for any status.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);