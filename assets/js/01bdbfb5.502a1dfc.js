"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[3671],{35697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(74848),o=n(28453);const i={},r="apic clustermgmt",a={id:"v1008/analytics/apic_clustermgmt_postReroute",title:"apic clustermgmt:postReroute",description:"Changes the allocation of shards in a cluster",source:"@site/docs/v1008/analytics/apic_clustermgmt_postReroute.md",sourceDirName:"v1008/analytics",slug:"/v1008/analytics/apic_clustermgmt_postReroute",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_postReroute",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/apic_clustermgmt_postReroute.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:postReloadSecureSettingsById",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_postReloadSecureSettingsById"},next:{title:"apic clustermgmt:postVotingConfigExclusions",permalink:"/clidocs/docs/v1008/analytics/apic_clustermgmt_postVotingConfigExclusions"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":postReroute"]}),"\n",(0,s.jsx)(t.p,{children:"Changes the allocation of shards in a cluster"}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"The reroute command allows for manual changes to the allocation of individual shards in the cluster. For example, a shard can be moved from one node to another explicitly, an allocation can be cancelled, and an unassigned shard can be explicitly allocated to a specific node."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"apic clustermgmt:postReroute --mode analytics [flags]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"      apic clustermgmt:postReroute --mode analytics [flags] REROUTE_BODY_FILE\n"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n      --dry_run                    If true, then the request simulates the operation only and returns the resulting state.\n      --explain                    If true, then the response contains an explanation of why the commands can or cannot be executed.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --metric string              Limits the information returned to the specified metrics. Defaults to all but metadata.\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                     Prettify response\n      --retry_failed               If true, then it retries allocation of shards that are blocked due to too many subsequent allocation failures.\n  -s, --server string              management server endpoint (required)\n      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);