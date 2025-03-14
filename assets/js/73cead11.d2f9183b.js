"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[83636],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},94444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"v1009/analytics/reports/apic_reports_catalogInactiveCorgReportTable","title":"apic reports:catalogInactiveCorgReportTable","description":"Inactive consumer orgs report table","source":"@site/docs/v1009/analytics/reports/apic_reports_catalogInactiveCorgReportTable.md","sourceDirName":"v1009/analytics/reports","slug":"/v1009/analytics/reports/apic_reports_catalogInactiveCorgReportTable","permalink":"/clidocs/docs/v1009/analytics/reports/apic_reports_catalogInactiveCorgReportTable","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/analytics/reports/apic_reports_catalogInactiveCorgReportTable.md","tags":[{"inline":true,"label":"group: reports","permalink":"/clidocs/docs/tags/group-reports"},{"inline":true,"label":"scope: catalog","permalink":"/clidocs/docs/tags/scope-catalog"}],"version":"current","frontMatter":{"tags":["group: reports","scope: catalog"]},"sidebar":"tutorialSidebar","previous":{"title":"apic reports:catalogInactiveCorgReportFunnel","permalink":"/clidocs/docs/v1009/analytics/reports/apic_reports_catalogInactiveCorgReportFunnel"},"next":{"title":"apic reports:catalogInactiveProductReport","permalink":"/clidocs/docs/v1009/analytics/reports/apic_reports_catalogInactiveProductReport"}}');var o=r(74848),a=r(28453);const i={tags:["group: reports","scope: catalog"]},s="apic reports",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsxs)(t.h1,{id:"apic-reports",children:["apic reports",":catalogInactiveCorgReportTable"]})}),"\n",(0,o.jsx)(t.p,{children:"Inactive consumer orgs report table"}),"\n",(0,o.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(t.p,{children:"Return the data needed to populate the Inactive consumer organizations report table at catalog scope"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"apic reports:catalogInactiveCorgReportTable --mode analytics [flags]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"apic reports:catalogInactiveCorgReportTable --mode analytics [flags]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"      --accept-language string                 Natural language and locale that the client prefers.\n      --analytics-service string               Analytics service name or ID. (required)\n  -c, --catalog string                         Catalog name or ID. (required)\n      --end string                             If set, only return events with a datetime equal or older than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.\n                                               \n      --format string                          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --inactive-consumer-report-type string   Type of inactive consumer report to query (required)\n      --limit string                           If set, the number of items to return when requesting a list. Maximum: 500\n      --offset string                          If set, the offset to be applied when requesting a list. e.g. return events starting from the 100th result\n  -o, --org string                             Provider organization name or ID. (required)\n      --output string                          Write file(s) to directory, instead of STDOUT (default \"-\")\n      --provider_org_name string               Filter results by provider organization name.\n      --regenerate                             If true, then forces the regeneration of an analytics report.\n      --search string                          Filter results by search string\n  -s, --server string                          management server endpoint (required)\n      --start string                           If set, only return events with a date equal to or newer than this. The date-time value must be such that the time component represents midnight. for example, 2021-07-21T00:00:000Z.\n                                               \n      --timeframe string                       If set, only return events within the indicated timeframe. Timeframe values are in the format of 'last<value><unit>' where <value> is a positive integer greater than one, and <unit> can be one of day, month, quarter or year.\n                                               \n"})}),"\n",(0,o.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);