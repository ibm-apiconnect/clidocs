"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[71381],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:t},e.children)}},31695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"v1009/analytics/events/apic_events_spaceGet","title":"apic events:spaceGet","description":"Get specific event at space scope","source":"@site/docs/v1009/analytics/events/apic_events_spaceGet.md","sourceDirName":"v1009/analytics/events","slug":"/v1009/analytics/events/apic_events_spaceGet","permalink":"/clidocs/docs/v1009/analytics/events/apic_events_spaceGet","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/analytics/events/apic_events_spaceGet.md","tags":[{"inline":true,"label":"group: events","permalink":"/clidocs/docs/tags/group-events"},{"inline":true,"label":"scope: space","permalink":"/clidocs/docs/tags/scope-space"}],"version":"current","frontMatter":{"tags":["group: events","scope: space"]},"sidebar":"tutorialSidebar","previous":{"title":"apic events:spaceCount","permalink":"/clidocs/docs/v1009/analytics/events/apic_events_spaceCount"},"next":{"title":"apic events:spaceList","permalink":"/clidocs/docs/v1009/analytics/events/apic_events_spaceList"}}');var i=n(74848),a=n(28453);const c={tags:["group: events","scope: space"]},o="apic events",r={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-events",children:["apic events",":spaceGet"]})}),"\n",(0,i.jsx)(t.p,{children:"Get specific event at space scope"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsxs)(t.p,{children:["Return a single analytics API event by ID scoped to the space. The item in the result set is determined by the passed in request query to this API. In this API, references to 'field' refer to the analytics API event fields documented here: ",(0,i.jsx)(t.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.x?topic=SSMNED_10.0.8/com.ibm.apic.apionprem.doc/rapim_analytics_apieventrecordfields.htm",children:"https://www.ibm.com/docs/en/api-connect/10.0.x?topic=SSMNED_10.0.8/com.ibm.apic.apionprem.doc/rapim_analytics_apieventrecordfields.htm"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic events:spaceGet --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic events:spaceGet --mode analytics [flags] ID\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n  -c, --catalog string             Catalog name or ID. (required)\n      --fields string              A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.\n                                   \n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string                 Provider organization name or ID. (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n      --space string               Space name or ID. (required)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);