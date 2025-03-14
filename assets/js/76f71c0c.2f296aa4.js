"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[16674],{28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>a});var n=r(96540);const s={},t=n.createContext(s);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:i},e.children)}},29428:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"v1008/apim/portal-services/apic_portal-services_update","title":"apic portal-services:update","description":"Update the Portal Service object by name or id","source":"@site/docs/v1008/apim/portal-services/apic_portal-services_update.md","sourceDirName":"v1008/apim/portal-services","slug":"/v1008/apim/portal-services/apic_portal-services_update","permalink":"/clidocs/docs/v1008/apim/portal-services/apic_portal-services_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/portal-services/apic_portal-services_update.md","tags":[{"inline":true,"label":"group: portal-services","permalink":"/clidocs/docs/tags/group-portal-services"}],"version":"current","frontMatter":{"tags":["group: portal-services"]},"sidebar":"tutorialSidebar","previous":{"title":"apic portal-services:update-credentials","permalink":"/clidocs/docs/v1008/apim/portal-services/apic_portal-services_update-credentials"},"next":{"title":"apic primary-events","permalink":"/clidocs/docs/v1008/apim/primary-events/apic_primary-events"}}');var s=r(74848),t=r(28453);const l={tags:["group: portal-services"]},a="apic portal-services",o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example portal service update.",id:"example-portal-service-update",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsxs)(i.h1,{id:"apic-portal-services",children:["apic portal-services",":update"]})}),"\n",(0,s.jsx)(i.p,{children:"Update the Portal Service object by name or id"}),"\n",(0,s.jsx)(i.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(i.p,{children:"Update the Portal Service object by name or id"}),"\n",(0,s.jsx)(i.p,{children:"Fields not allowed to be null:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"endpoint_tls_client_profile_url"}),"\n",(0,s.jsx)(i.li,{children:"web_endpoint_base"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Fields not allowed:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"owned"}),"\n",(0,s.jsx)(i.li,{children:"endpoint"}),"\n",(0,s.jsx)(i.li,{children:"service_supported_features"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Fields allowed but ignored:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"id"}),"\n",(0,s.jsx)(i.li,{children:"type"}),"\n",(0,s.jsx)(i.li,{children:"api_version"}),"\n",(0,s.jsx)(i.li,{children:"scope"}),"\n",(0,s.jsx)(i.li,{children:"created_at"}),"\n",(0,s.jsx)(i.li,{children:"updated_at"}),"\n",(0,s.jsx)(i.li,{children:"url"}),"\n",(0,s.jsx)(i.li,{children:"org_url"}),"\n",(0,s.jsx)(i.li,{children:"availability_zone_url"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"apic portal-services:update [flags]\n"})}),"\n",(0,s.jsx)(i.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"apic portal-services:update [flags] PORTAL_SERVICE PORTAL_SERVICE_FILE\n"})}),"\n",(0,s.jsx)(i.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h4,{id:"example-portal-service-update",children:"Example portal service update."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"summary: An example portal service update\ntitle: acme portal service\nweb_endpoint_base: https://portal.acme-apim.example.com\n"})}),"\n",(0,s.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'      --availability-zone string   Availability Zone name or id (required)\n      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string                 Organization name or id (required)\n      --output string              Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string              management server endpoint (required)\n'})}),"\n",(0,s.jsx)(i.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);