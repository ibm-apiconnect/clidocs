"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[50698],{42488:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(74848),i=s(28453);const r={tags:["group: clustermgmt"]},a="apic clustermgmt",o={id:"v1008/analytics/clustermgmt/apic_clustermgmt_catShards",title:"apic clustermgmt:catShards",description:"Detailed view of what nodes contain which shards",source:"@site/docs/v1008/analytics/clustermgmt/apic_clustermgmt_catShards.md",sourceDirName:"v1008/analytics/clustermgmt",slug:"/v1008/analytics/clustermgmt/apic_clustermgmt_catShards",permalink:"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_catShards",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/clustermgmt/apic_clustermgmt_catShards.md",tags:[{inline:!0,label:"group: clustermgmt",permalink:"/clidocs/docs/tags/group-clustermgmt"}],version:"current",frontMatter:{tags:["group: clustermgmt"]},sidebar:"tutorialSidebar",previous:{title:"apic clustermgmt:catRecovery",permalink:"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_catRecovery"},next:{title:"apic clustermgmt:cloneIndex",permalink:"/clidocs/docs/v1008/analytics/clustermgmt/apic_clustermgmt_cloneIndex"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-clustermgmt",children:["apic clustermgmt",":catShards"]})}),"\n",(0,n.jsx)(t.p,{children:"Detailed view of what nodes contain which shards"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"The shards command is the detailed view of what nodes contain which shards. It will tell you if it's a primary or replica, the number of docs, the bytes it takes on disk, and the node where it's located. For data streams, the API returns information about the stream's backing indices."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic clustermgmt:catShards --mode analytics [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n      apic clustermgmt:catShards --mode analytics [flags]\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n      --bytes string               Unit used to display byte values.\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --h string                   Comma-separated list of column names to display.\n      --help                       If true, the response includes help information.\n      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n      --pretty                     Prettify response\n      --return_format string       Short version of the HTTP accept header. Valid values include JSON, YAML, etc.\n      --s string                   Comma-separated list of column names or column aliases used to sort the response.\n  -s, --server string              management server endpoint (required)\n      --time string                Unit used to display time values.\n      --v_columns                  If true, the response includes column headings.\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);