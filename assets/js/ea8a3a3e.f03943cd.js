"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[34132],{91362:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});const p=JSON.parse('{"id":"v1009/apim/groups/apic_groups_update","title":"apic groups:update","description":"Groups update operations","source":"@site/docs/v1009/apim/groups/apic_groups_update.md","sourceDirName":"v1009/apim/groups","slug":"/v1009/apim/groups/apic_groups_update","permalink":"/clidocs/docs/v1009/apim/groups/apic_groups_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/groups/apic_groups_update.md","tags":[{"inline":true,"label":"group: groups","permalink":"/clidocs/docs/tags/group-groups"},{"inline":true,"label":"scope: catalog","permalink":"/clidocs/docs/tags/scope-catalog"},{"inline":true,"label":"scope: cloud","permalink":"/clidocs/docs/tags/scope-cloud"}],"version":"current","frontMatter":{"tags":["group: groups","scope: catalog","scope: cloud"]},"sidebar":"tutorialSidebar","previous":{"title":"apic groups:list","permalink":"/clidocs/docs/v1009/apim/groups/apic_groups_list"},"next":{"title":"apic iam-apikey","permalink":"/clidocs/docs/v1009/apim/iam-apikey/apic_iam-apikey"}}');var s=a(74848),t=a(28453);const r={tags:["group: groups","scope: catalog","scope: cloud"]},n="apic groups",i={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of group update at space scope.",id:"example-of-group-update-at-space-scope",level:4},{value:"Example of group update at catalog scope.",id:"example-of-group-update-at-catalog-scope",level:4},{value:"Example of group update at cloud scope.",id:"example-of-group-update-at-cloud-scope",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsxs)(o.h1,{id:"apic-groups",children:["apic groups",":update"]})}),"\n",(0,s.jsx)(o.p,{children:"Groups update operations"}),"\n",(0,s.jsx)(o.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(o.p,{children:"Groups update operations"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"apic groups:update [flags]\n"})}),"\n",(0,s.jsx)(o.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"apic groups:update [flags] --space-initiated GROUP GROUP_FILE\napic groups:update [flags] --scope cloud GROUP GROUP_FILE\napic groups:update [flags] --scope catalog GROUP GROUP_FILE\n"})}),"\n",(0,s.jsx)(o.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h4,{id:"example-of-group-update-at-space-scope",children:"Example of group update at space scope."}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"org_urls:\n- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org1\n- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/space1/consumer-org2\nsummary: An example group update\ntitle: Acme group update\n"})}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h4,{id:"example-of-group-update-at-catalog-scope",children:"Example of group update at catalog scope."}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"org_urls:\n- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org1\n- https://api.acme-apim.example.com/api/consumer-orgs/org1/catalog1/consumer-org2\nsummary: An example group update\ntitle: Acme group update\n"})}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.h4,{id:"example-of-group-update-at-cloud-scope",children:"Example of group update at cloud scope."}),"\n",(0,s.jsx)(o.hr,{}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"org_urls:\n- https://api.acme-apim.example.com/api/orgs/org1\n- https://api.acme-apim.example.com/api/orgs/org2\nsummary: An example group update\ntitle: Acme group update\n"})}),"\n",(0,s.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'  -c, --catalog string    Catalog name or id (required)\n      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help              Help for groups:update\n  -o, --org string        Organization name or id (required)\n      --output string     Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string      scope\n  -s, --server string     management server endpoint (required)\n      --space string      Space name or id (required)\n      --space-initiated   space-initiated\n'})}),"\n",(0,s.jsx)(o.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>n});var p=a(96540);const s={},t=p.createContext(s);function r(e){const o=p.useContext(t);return p.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),p.createElement(t.Provider,{value:o},e.children)}}}]);