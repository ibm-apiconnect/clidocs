"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[96391],{35279:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"v1009/apim/oauth-providers/apic_oauth-providers_create","title":"apic oauth-providers:create","description":"Create a Oauth Provider object","source":"@site/docs/v1009/apim/oauth-providers/apic_oauth-providers_create.md","sourceDirName":"v1009/apim/oauth-providers","slug":"/v1009/apim/oauth-providers/apic_oauth-providers_create","permalink":"/clidocs/docs/v1009/apim/oauth-providers/apic_oauth-providers_create","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/oauth-providers/apic_oauth-providers_create.md","tags":[{"inline":true,"label":"group: oauth-providers","permalink":"/clidocs/docs/tags/group-oauth-providers"}],"version":"current","frontMatter":{"tags":["group: oauth-providers"]},"sidebar":"tutorialSidebar","previous":{"title":"apic oauth-providers:clear","permalink":"/clidocs/docs/v1009/apim/oauth-providers/apic_oauth-providers_clear"},"next":{"title":"apic oauth-providers:delete","permalink":"/clidocs/docs/v1009/apim/oauth-providers/apic_oauth-providers_delete"}}');var n=i(74848),o=i(28453);const a={tags:["group: oauth-providers"]},s="apic oauth-providers",p={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of native oauth provider creation.",id:"example-of-native-oauth-provider-creation",level:4},{value:"Example of third party oauth provider creation.",id:"example-of-third-party-oauth-provider-creation",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsxs)(t.h1,{id:"apic-oauth-providers",children:["apic oauth-providers",":create"]})}),"\n",(0,n.jsx)(t.p,{children:"Create a Oauth Provider object"}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.p,{children:"Create a Oauth Provider object"}),"\n",(0,n.jsx)(t.p,{children:"Fields allowed but ignored:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"id"}),"\n",(0,n.jsx)(t.li,{children:"type"}),"\n",(0,n.jsx)(t.li,{children:"api_version"}),"\n",(0,n.jsx)(t.li,{children:"scope"}),"\n",(0,n.jsx)(t.li,{children:"created_at"}),"\n",(0,n.jsx)(t.li,{children:"updated_at"}),"\n",(0,n.jsx)(t.li,{children:"url"}),"\n",(0,n.jsx)(t.li,{children:"org_url"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic oauth-providers:create [flags]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"apic oauth-providers:create [flags] OAUTH_PROVIDER_FILE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h4,{id:"example-of-native-oauth-provider-creation",children:"Example of native oauth provider creation."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'gateway_version: "6000"\ngrants:\n- access_code\n- implicit\n- application\n- password\nname: acme-oauth-provider\nnative_provider:\n  api:\n    basePath: /sample\n    info:\n      description: sample decsription\n    x-ibm-configuration:\n      gateway: datapower-api-gateway\n  authorize_path: /oauth2/authorize\n  clients:\n  - confidential\n  - public\n  native_provider_5000: {}\n  pkce:\n    allow_plain: false\n    enabled: true\n    required: false\n  token_path: /oauth2/token\nprovider_type: native\nscopes:\n  sample_scope_1: Sample scope description\ntitle: Acme native oauth provider creation\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h4,{id:"example-of-third-party-oauth-provider-creation",children:"Example of third party oauth provider creation."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'gateway_version: "6000"\ngrants:\n- access_code\n- implicit\n- application\n- password\n- jwt\nname: acme-oauth-provider\nprovider_type: third_party\nscopes:\n  sample_scope_1: Sample scope description\nthird_party_config:\n  auth_header_pass_thru: true\n  authorize_endpoint: https://example.com/oauth2/authorize\n  basic_auth:\n    password: acme@123\n    request_headername: x-introspect-basic-authorization-header\n    username: acme\n  introspect_cache_type: protocol\n  introspection_endpoint:\n    endpoint: https://example.com/oauth2/introspect\n    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\n  security:\n  - basic-auth\n  token_endpoint: https://example.com/oauth2/token\n  token_validation_requirement: connected\ntitle: Acme third party oauth provider creation\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string      Organization name or id (required)\n      --output string   Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string   management server endpoint (required)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var r=i(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);