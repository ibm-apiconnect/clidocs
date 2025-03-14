"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[52331],{28453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>o});var n=s(96540);const r={},t=n.createContext(r);function c(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:i},e.children)}},34215:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"v1009/apim/subscriptions/apic_subscriptions_create","title":"apic subscriptions:create","description":"Create a Subscription object","source":"@site/docs/v1009/apim/subscriptions/apic_subscriptions_create.md","sourceDirName":"v1009/apim/subscriptions","slug":"/v1009/apim/subscriptions/apic_subscriptions_create","permalink":"/clidocs/docs/v1009/apim/subscriptions/apic_subscriptions_create","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/subscriptions/apic_subscriptions_create.md","tags":[{"inline":true,"label":"group: subscriptions","permalink":"/clidocs/docs/tags/group-subscriptions"}],"version":"current","frontMatter":{"tags":["group: subscriptions"]},"sidebar":"tutorialSidebar","previous":{"title":"apic subscriptions:clear","permalink":"/clidocs/docs/v1009/apim/subscriptions/apic_subscriptions_clear"},"next":{"title":"apic subscriptions:delete","permalink":"/clidocs/docs/v1009/apim/subscriptions/apic_subscriptions_delete"}}');var r=s(74848),t=s(28453);const c={tags:["group: subscriptions"]},o="apic subscriptions",a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of subscription create.",id:"example-of-subscription-create",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsxs)(i.h1,{id:"apic-subscriptions",children:["apic subscriptions",":create"]})}),"\n",(0,r.jsx)(i.p,{children:"Create a Subscription object"}),"\n",(0,r.jsx)(i.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(i.p,{children:"Create a Subscription object"}),"\n",(0,r.jsx)(i.p,{children:"Required fields:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"product_url"}),"\n",(0,r.jsx)(i.li,{children:"plan"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Fields allowed but ignored:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"id"}),"\n",(0,r.jsx)(i.li,{children:"type"}),"\n",(0,r.jsx)(i.li,{children:"api_version"}),"\n",(0,r.jsx)(i.li,{children:"scope"}),"\n",(0,r.jsx)(i.li,{children:"created_at"}),"\n",(0,r.jsx)(i.li,{children:"updated_at"}),"\n",(0,r.jsx)(i.li,{children:"url"}),"\n",(0,r.jsx)(i.li,{children:"org_url"}),"\n",(0,r.jsx)(i.li,{children:"catalog_url"}),"\n",(0,r.jsx)(i.li,{children:"consumer_org_url"}),"\n",(0,r.jsx)(i.li,{children:"app_url"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"apic subscriptions:create [flags]\n"})}),"\n",(0,r.jsx)(i.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"apic subscriptions:create [flags] --space-initiated SUBSCRIPTION_FILE\napic subscriptions:create [flags] SUBSCRIPTION_FILE\n"})}),"\n",(0,r.jsx)(i.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h4,{id:"example-of-subscription-create",children:"Example of subscription create."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"name: acme-subscription\nplan: acme-plan\nproduct_url: https://acme-apim.example.com/api/spaces/acme-org/acme-catalog/acme-space/products/acme-product\nsummary: An example subscription create\ntitle: ACME Subscription\n"})}),"\n",(0,r.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'  -a, --app string            Application name or id (required)\n  -c, --catalog string        Catalog name or id (required)\n      --consumer-org string   Consumer Organization name or id (required)\n      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string            Organization name or id (required)\n      --output string         Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string         management server endpoint (required)\n'})}),"\n",(0,r.jsx)(i.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);