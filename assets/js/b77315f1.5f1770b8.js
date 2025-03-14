"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[67861],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}},32569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"v1008/analytics/events/apic_events_orgGet","title":"apic events:orgGet","description":"Get specific event at provider organization scope","source":"@site/docs/v1008/analytics/events/apic_events_orgGet.md","sourceDirName":"v1008/analytics/events","slug":"/v1008/analytics/events/apic_events_orgGet","permalink":"/clidocs/docs/v1008/analytics/events/apic_events_orgGet","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/analytics/events/apic_events_orgGet.md","tags":[{"inline":true,"label":"group: events","permalink":"/clidocs/docs/tags/group-events"},{"inline":true,"label":"scope: org","permalink":"/clidocs/docs/tags/scope-org"}],"version":"current","frontMatter":{"tags":["group: events","scope: org"]},"sidebar":"tutorialSidebar","previous":{"title":"apic events:orgCount","permalink":"/clidocs/docs/v1008/analytics/events/apic_events_orgCount"},"next":{"title":"apic events:orgList","permalink":"/clidocs/docs/v1008/analytics/events/apic_events_orgList"}}');var i=n(74848),o=n(28453);const r={tags:["group: events","scope: org"]},a="apic events",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-events",children:["apic events",":orgGet"]})}),"\n",(0,i.jsx)(t.p,{children:"Get specific event at provider organization scope"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsxs)(t.p,{children:["Return a single analytics API event by ID scoped to the provider organization. The item in the result set is determined by the passed in request query to this API. In this API, references to 'field' refer to the analytics API event fields documented here: ",(0,i.jsx)(t.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.x?topic=SSMNED_10.0.8/com.ibm.apic.apionprem.doc/rapim_analytics_apieventrecordfields.htm",children:"https://www.ibm.com/docs/en/api-connect/10.0.x?topic=SSMNED_10.0.8/com.ibm.apic.apionprem.doc/rapim_analytics_apieventrecordfields.htm"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic events:orgGet --mode analytics [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\n      apic events:orgGet --mode analytics [flags] ID\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-language string     Natural language and locale that the client prefers.\n      --analytics-service string   Analytics service name or ID. (required)\n      --fields string              A list of the event fields that you want included in each event. You can use a comma as a separator when specifying the fields. Use this parameter if you require only a subset of the event fields rather than the full set.\n\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string                 Provider organization name or ID. (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);