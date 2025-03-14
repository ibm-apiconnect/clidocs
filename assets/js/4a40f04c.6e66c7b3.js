"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[37467],{28453:(e,o,l)=>{l.d(o,{R:()=>s,x:()=>c});var a=l(96540);const p={},i=a.createContext(p);function s(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:s(e.components),a.createElement(i.Provider,{value:o},e.children)}},67299:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_update","title":"apic global-policy-prehooks:update","description":"Global Policy Prehooks update operations","source":"@site/docs/v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_update.md","sourceDirName":"v1008/apim/global-policy-prehooks","slug":"/v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_update","permalink":"/clidocs/docs/v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_update.md","tags":[{"inline":true,"label":"group: global-policy-prehooks","permalink":"/clidocs/docs/tags/group-global-policy-prehooks"},{"inline":true,"label":"scope: catalog","permalink":"/clidocs/docs/tags/scope-catalog"},{"inline":true,"label":"scope: space","permalink":"/clidocs/docs/tags/scope-space"}],"version":"current","frontMatter":{"tags":["group: global-policy-prehooks","scope: catalog","scope: space"]},"sidebar":"tutorialSidebar","previous":{"title":"apic global-policy-prehooks:get","permalink":"/clidocs/docs/v1008/apim/global-policy-prehooks/apic_global-policy-prehooks_get"},"next":{"title":"apic groups","permalink":"/clidocs/docs/v1008/apim/groups/apic_groups"}}');var p=l(74848),i=l(28453);const s={tags:["group: global-policy-prehooks","scope: catalog","scope: space"]},c="apic global-policy-prehooks",r={},t=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of global policy prehooks update at catalog scope.",id:"example-of-global-policy-prehooks-update-at-catalog-scope",level:4},{value:"Example of global policy error update at space scope.",id:"example-of-global-policy-error-update-at-space-scope",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function n(e){const o={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.header,{children:(0,p.jsxs)(o.h1,{id:"apic-global-policy-prehooks",children:["apic global-policy-prehooks",":update"]})}),"\n",(0,p.jsx)(o.p,{children:"Global Policy Prehooks update operations"}),"\n",(0,p.jsx)(o.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,p.jsx)(o.p,{children:"Global Policy Prehooks update operations"}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:"apic global-policy-prehooks:update [flags]\n"})}),"\n",(0,p.jsx)(o.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:"apic global-policy-prehooks:update [flags] --scope space GLOBAL_POLICY_PREHOOK_FILE\napic global-policy-prehooks:update [flags] --scope catalog GLOBAL_POLICY_PREHOOK_FILE\n"})}),"\n",(0,p.jsx)(o.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,p.jsx)(o.hr,{}),"\n",(0,p.jsx)(o.h4,{id:"example-of-global-policy-prehooks-update-at-catalog-scope",children:"Example of global policy prehooks update at catalog scope."}),"\n",(0,p.jsx)(o.hr,{}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:"global_policy_url: https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id\nsummary: An example global policy prehooks update\ntitle: Acme Global policy prehooks update\n"})}),"\n",(0,p.jsx)(o.hr,{}),"\n",(0,p.jsx)(o.h4,{id:"example-of-global-policy-error-update-at-space-scope",children:"Example of global policy error update at space scope."}),"\n",(0,p.jsx)(o.hr,{}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:"global_policy_url: https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id\nsummary: An example global policy prehooks update\ntitle: Acme Global policy prehooks update\n"})}),"\n",(0,p.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:'  -c, --catalog string                      Catalog name or id (required)\n      --configured-gateway-service string   Configured Gateway Service name or id (required)\n      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                                Help for global-policy-prehooks:update\n  -o, --org string                          Organization name or id (required)\n      --output string                       Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string                        scope\n  -s, --server string                       management server endpoint (required)\n      --space string                        Space name or id (required)\n'})}),"\n",(0,p.jsx)(o.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,p.jsx)(o.pre,{children:(0,p.jsx)(o.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,p.jsx)(o,{...e,children:(0,p.jsx)(n,{...e})}):n(e)}}}]);