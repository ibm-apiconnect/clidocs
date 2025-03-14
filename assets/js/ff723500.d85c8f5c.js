"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[92864],{28453:(o,e,l)=>{l.d(e,{R:()=>i,x:()=>t});var a=l(96540);const s={},c=a.createContext(s);function i(o){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function t(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:i(o.components),a.createElement(c.Provider,{value:e},o.children)}},76924:(o,e,l)=>{l.r(e),l.d(e,{assets:()=>p,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>n});const a=JSON.parse('{"id":"v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_create","title":"apic global-policy-posthooks:create","description":"Global Policy Posthooks create operations","source":"@site/docs/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_create.md","sourceDirName":"v1008/apim/global-policy-posthooks","slug":"/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_create","permalink":"/clidocs/docs/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_create","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_create.md","tags":[{"inline":true,"label":"group: global-policy-posthooks","permalink":"/clidocs/docs/tags/group-global-policy-posthooks"},{"inline":true,"label":"scope: catalog","permalink":"/clidocs/docs/tags/scope-catalog"},{"inline":true,"label":"scope: space","permalink":"/clidocs/docs/tags/scope-space"}],"version":"current","frontMatter":{"tags":["group: global-policy-posthooks","scope: catalog","scope: space"]},"sidebar":"tutorialSidebar","previous":{"title":"apic global-policy-posthooks","permalink":"/clidocs/docs/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks"},"next":{"title":"apic global-policy-posthooks:delete","permalink":"/clidocs/docs/v1008/apim/global-policy-posthooks/apic_global-policy-posthooks_delete"}}');var s=l(74848),c=l(28453);const i={tags:["group: global-policy-posthooks","scope: catalog","scope: space"]},t="apic global-policy-posthooks",p={},n=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of global policy posthooks creation at catalog scope.",id:"example-of-global-policy-posthooks-creation-at-catalog-scope",level:4},{value:"Example of global policy posthooks creation at space scope.",id:"example-of-global-policy-posthooks-creation-at-space-scope",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function r(o){const e={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,c.R)(),...o.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsxs)(e.h1,{id:"apic-global-policy-posthooks",children:["apic global-policy-posthooks",":create"]})}),"\n",(0,s.jsx)(e.p,{children:"Global Policy Posthooks create operations"}),"\n",(0,s.jsx)(e.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(e.p,{children:"Global Policy Posthooks create operations"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"apic global-policy-posthooks:create [flags]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"apic global-policy-posthooks:create [flags] --scope space GLOBAL_POLICY_POSTHOOK_FILE\napic global-policy-posthooks:create [flags] --scope catalog GLOBAL_POLICY_POSTHOOK_FILE\n"})}),"\n",(0,s.jsx)(e.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h4,{id:"example-of-global-policy-posthooks-creation-at-catalog-scope",children:"Example of global policy posthooks creation at catalog scope."}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"global_policy_url: https://acme-apim.example.com/api/catalogs/acme-org/acme-catalog/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id\nname: acme\nscope: catalog\nsummary: An example global policy posthooks creation\ntitle: Acme Global policy posthooks creation\n"})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h4,{id:"example-of-global-policy-posthooks-creation-at-space-scope",children:"Example of global policy posthooks creation at space scope."}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"global_policy_url: https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/configured-gateway-services/acme-configured-gateway-service/global-policies/global-policy-id\nname: acme\nscope: space\nsummary: An example global policy error creation\ntitle: Acme Global policy error creation\n"})}),"\n",(0,s.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'  -c, --catalog string                      Catalog name or id (required)\n      --configured-gateway-service string   Configured Gateway Service name or id (required)\n      --format string                       Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                                Help for global-policy-posthooks:create\n  -o, --org string                          Organization name or id (required)\n      --output string                       Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string                        scope\n  -s, --server string                       management server endpoint (required)\n      --space string                        Space name or id (required)\n'})}),"\n",(0,s.jsx)(e.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(o={}){const{wrapper:e}={...(0,c.R)(),...o.components};return e?(0,s.jsx)(e,{...o,children:(0,s.jsx)(r,{...o})}):r(o)}}}]);