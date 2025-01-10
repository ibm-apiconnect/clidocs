"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[59868],{56417:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_create","title":"apic configured-oauth-providers:create","description":"Configured Oauth Providers create operations","source":"@site/docs/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_create.md","sourceDirName":"v1009/apim/configured-oauth-providers","slug":"/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_create","permalink":"/clidocs/docs/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_create","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_create.md","tags":[{"inline":true,"label":"group: configured-oauth-providers","permalink":"/clidocs/docs/tags/group-configured-oauth-providers"},{"inline":true,"label":"scope: catalog","permalink":"/clidocs/docs/tags/scope-catalog"},{"inline":true,"label":"scope: space","permalink":"/clidocs/docs/tags/scope-space"}],"version":"current","frontMatter":{"tags":["group: configured-oauth-providers","scope: catalog","scope: space"]},"sidebar":"tutorialSidebar","previous":{"title":"apic configured-oauth-providers:clear","permalink":"/clidocs/docs/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_clear"},"next":{"title":"apic configured-oauth-providers:delete","permalink":"/clidocs/docs/v1009/apim/configured-oauth-providers/apic_configured-oauth-providers_delete"}}');var a=r(74848),t=r(28453);const n={tags:["group: configured-oauth-providers","scope: catalog","scope: space"]},s="apic configured-oauth-providers",c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of configured oauth provider creation at catalog scope.",id:"example-of-configured-oauth-provider-creation-at-catalog-scope",level:4},{value:"Example of configured oauth provider creation at space scope.",id:"example-of-configured-oauth-provider-creation-at-space-scope",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const o={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsxs)(o.h1,{id:"apic-configured-oauth-providers",children:["apic configured-oauth-providers",":create"]})}),"\n",(0,a.jsx)(o.p,{children:"Configured Oauth Providers create operations"}),"\n",(0,a.jsx)(o.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(o.p,{children:"Configured Oauth Providers create operations"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"apic configured-oauth-providers:create [flags]\n"})}),"\n",(0,a.jsx)(o.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"apic configured-oauth-providers:create [flags] --scope space CONFIGURED_OAUTH_PROVIDER_FILE\napic configured-oauth-providers:create [flags] --scope catalog CONFIGURED_OAUTH_PROVIDER_FILE\n"})}),"\n",(0,a.jsx)(o.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.h4,{id:"example-of-configured-oauth-provider-creation-at-catalog-scope",children:"Example of configured oauth provider creation at catalog scope."}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"oauth_provider_url: https://acme-apim.example.com/api/orgs/org1/oauth-providers/acme-oauth-provider\n"})}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.h4,{id:"example-of-configured-oauth-provider-creation-at-space-scope",children:"Example of configured oauth provider creation at space scope."}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"oauth_provider_url: https://acme-apim.example.com/api/orgs/org1/oauth-providers/acme-oauth-provider\n"})}),"\n",(0,a.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:'  -c, --catalog string   Catalog name or id (required)\n      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help             Help for configured-oauth-providers:create\n  -o, --org string       Organization name or id (required)\n      --output string    Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string     scope\n  -s, --server string    management server endpoint (required)\n      --space string     Space name or id (required)\n'})}),"\n",(0,a.jsx)(o.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>s});var i=r(96540);const a={},t=i.createContext(a);function n(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);