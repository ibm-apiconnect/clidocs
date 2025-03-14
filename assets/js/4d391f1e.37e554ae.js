"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[1756],{28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>a});var n=s(96540);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}},95403:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"v1008/apim/subscriptions/apic_subscriptions_update","title":"apic subscriptions:update","description":"Update the Subscription object by name or id","source":"@site/docs/v1008/apim/subscriptions/apic_subscriptions_update.md","sourceDirName":"v1008/apim/subscriptions","slug":"/v1008/apim/subscriptions/apic_subscriptions_update","permalink":"/clidocs/docs/v1008/apim/subscriptions/apic_subscriptions_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/subscriptions/apic_subscriptions_update.md","tags":[{"inline":true,"label":"group: subscriptions","permalink":"/clidocs/docs/tags/group-subscriptions"}],"version":"current","frontMatter":{"tags":["group: subscriptions"]},"sidebar":"tutorialSidebar","previous":{"title":"apic subscriptions:list","permalink":"/clidocs/docs/v1008/apim/subscriptions/apic_subscriptions_list"},"next":{"title":"apic task-histories","permalink":"/clidocs/docs/v1008/apim/task-histories/apic_task-histories"}}');var t=s(74848),r=s(28453);const o={tags:["group: subscriptions"]},a="apic subscriptions",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of subscription update with state enabled.",id:"example-of-subscription-update-with-state-enabled",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsxs)(i.h1,{id:"apic-subscriptions",children:["apic subscriptions",":update"]})}),"\n",(0,t.jsx)(i.p,{children:"Update the Subscription object by name or id"}),"\n",(0,t.jsx)(i.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(i.p,{children:"Update the Subscription object by name or id"}),"\n",(0,t.jsx)(i.p,{children:"Fields not allowed:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"billing_identifiers"}),"\n",(0,t.jsx)(i.li,{children:"plan_title"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Fields allowed but ignored:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"id"}),"\n",(0,t.jsx)(i.li,{children:"type"}),"\n",(0,t.jsx)(i.li,{children:"api_version"}),"\n",(0,t.jsx)(i.li,{children:"scope"}),"\n",(0,t.jsx)(i.li,{children:"created_at"}),"\n",(0,t.jsx)(i.li,{children:"updated_at"}),"\n",(0,t.jsx)(i.li,{children:"url"}),"\n",(0,t.jsx)(i.li,{children:"org_url"}),"\n",(0,t.jsx)(i.li,{children:"catalog_url"}),"\n",(0,t.jsx)(i.li,{children:"consumer_org_url"}),"\n",(0,t.jsx)(i.li,{children:"app_url"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"apic subscriptions:update [flags]\n"})}),"\n",(0,t.jsx)(i.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"apic subscriptions:update [flags] --space-initiated SUBSCRIPTION SUBSCRIPTION_FILE\napic subscriptions:update [flags] SUBSCRIPTION SUBSCRIPTION_FILE\n"})}),"\n",(0,t.jsx)(i.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h4,{id:"example-of-subscription-update-with-state-enabled",children:"Example of subscription update with state enabled."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"name: acme-subscription\nstate: enabled\nsummary: An example subscription update\ntitle: ACME Subscription\n"})}),"\n",(0,t.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'  -a, --app string            Application name or id (required)\n  -c, --catalog string        Catalog name or id (required)\n      --consumer-org string   Consumer Organization name or id (required)\n      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string            Organization name or id (required)\n      --output string         Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string         management server endpoint (required)\n'})}),"\n",(0,t.jsx)(i.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);