"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[76615],{28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var t=r(96540);const i={},n=t.createContext(i);function l(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(n.Provider,{value:s},e.children)}},77991:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"v1009/apim/tls-server-profiles/apic_tls-server-profiles_update","title":"apic tls-server-profiles:update","description":"Update the TLS Server Profile object by name and version","source":"@site/docs/v1009/apim/tls-server-profiles/apic_tls-server-profiles_update.md","sourceDirName":"v1009/apim/tls-server-profiles","slug":"/v1009/apim/tls-server-profiles/apic_tls-server-profiles_update","permalink":"/clidocs/docs/v1009/apim/tls-server-profiles/apic_tls-server-profiles_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/tls-server-profiles/apic_tls-server-profiles_update.md","tags":[{"inline":true,"label":"group: tls-server-profiles","permalink":"/clidocs/docs/tags/group-tls-server-profiles"}],"version":"current","frontMatter":{"tags":["group: tls-server-profiles"]},"sidebar":"tutorialSidebar","previous":{"title":"apic tls-server-profiles:list","permalink":"/clidocs/docs/v1009/apim/tls-server-profiles/apic_tls-server-profiles_list"},"next":{"title":"apic truststores","permalink":"/clidocs/docs/v1009/apim/truststores/apic_truststores"}}');var i=r(74848),n=r(28453);const l={tags:["group: tls-server-profiles"]},o="apic tls-server-profiles",a={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of tls server profile update by name and version.",id:"example-of-tls-server-profile-update-by-name-and-version",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsxs)(s.h1,{id:"apic-tls-server-profiles",children:["apic tls-server-profiles",":update"]})}),"\n",(0,i.jsx)(s.p,{children:"Update the TLS Server Profile object by name and version"}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.p,{children:"Update the TLS Server Profile object by name and version"}),"\n",(0,i.jsx)(s.p,{children:"Fields allowed but ignored:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"id"}),"\n",(0,i.jsx)(s.li,{children:"type"}),"\n",(0,i.jsx)(s.li,{children:"api_version"}),"\n",(0,i.jsx)(s.li,{children:"scope"}),"\n",(0,i.jsx)(s.li,{children:"created_at"}),"\n",(0,i.jsx)(s.li,{children:"updated_at"}),"\n",(0,i.jsx)(s.li,{children:"url"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"apic tls-server-profiles:update [flags]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"apic tls-server-profiles:update [flags] --id ID TLS_SERVER_PROFILE_FILE\napic tls-server-profiles:update [flags] NAME:VERSION TLS_SERVER_PROFILE_FILE\n"})}),"\n",(0,i.jsx)(s.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h4,{id:"example-of-tls-server-profile-update-by-name-and-version",children:"Example of tls server profile update by name and version."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"ciphers:\n- TLS_CHACHA20_POLY1305_SHA256\n- TLS_AES_128_GCM_SHA256\n- ECDHE_ECDSA_WITH_AES_256_CBC_SHA384\n- ECDHE_RSA_WITH_AES_128_CBC_SHA\n- DHE_RSA_WITH_AES_256_GCM_SHA384\n- DHE_RSA_WITH_AES_256_CBC_SHA256\nkeystore_url: https://acme-apim.example.com/api/orgs/acmeorg/keystores/acmekeystore\nlimit_renegotiation: false\nmutual_authentication: require\nprotocols:\n- tls_v1.2\n- tls_v1.3\nsummary: An example TLS server profile update\ntitle: acme TLS Server profile update\ntruststore_url: https://acme-apim.example.com/api/orgs/acmeorg/truststores/acmetruststore\nversion: 1.0.0\n"})}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string      Organization name or id (required)\n      --output string   Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string   management server endpoint (required)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);