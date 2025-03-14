"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[86629],{28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>d});var i=n(96540);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}},79186:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"v1008/apim/users/apic_users_update","title":"apic users:update","description":"Update the User object by name or id","source":"@site/docs/v1008/apim/users/apic_users_update.md","sourceDirName":"v1008/apim/users","slug":"/v1008/apim/users/apic_users_update","permalink":"/clidocs/docs/v1008/apim/users/apic_users_update","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/users/apic_users_update.md","tags":[{"inline":true,"label":"group: users","permalink":"/clidocs/docs/tags/group-users"}],"version":"current","frontMatter":{"tags":["group: users"]},"sidebar":"tutorialSidebar","previous":{"title":"apic users:search-provider","permalink":"/clidocs/docs/v1008/apim/users/apic_users_search-provider"},"next":{"title":"apic validate","permalink":"/clidocs/docs/v1008/apim/validate/apic_validate"}}');var r=n(74848),t=n(28453);const a={tags:["group: users"]},d="apic users",l={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of user Update.",id:"example-of-user-update",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsxs)(s.h1,{id:"apic-users",children:["apic users",":update"]})}),"\n",(0,r.jsx)(s.p,{children:"Update the User object by name or id"}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.p,{children:"Update the User object by name or id"}),"\n",(0,r.jsx)(s.p,{children:"Fields not allowed:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"identity_provider"}),"\n",(0,r.jsx)(s.li,{children:"username"}),"\n",(0,r.jsx)(s.li,{children:"salt"}),"\n",(0,r.jsx)(s.li,{children:"correlation_data"}),"\n",(0,r.jsx)(s.li,{children:"force_password_change"}),"\n",(0,r.jsx)(s.li,{children:"last_login_at"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Fields allowed but ignored:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"id"}),"\n",(0,r.jsx)(s.li,{children:"type"}),"\n",(0,r.jsx)(s.li,{children:"api_version"}),"\n",(0,r.jsx)(s.li,{children:"scope"}),"\n",(0,r.jsx)(s.li,{children:"created_at"}),"\n",(0,r.jsx)(s.li,{children:"updated_at"}),"\n",(0,r.jsx)(s.li,{children:"url"}),"\n",(0,r.jsx)(s.li,{children:"org_url"}),"\n",(0,r.jsx)(s.li,{children:"user_registry_url"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apic users:update [flags]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apic users:update [flags] USER USER_FILE\n"})}),"\n",(0,r.jsx)(s.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h4,{id:"example-of-user-update",children:"Example of user Update."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"email: acme-updated@example.com\nfirst_name: ACMEUpdated\nlast_name: LastnameUpdated\npassword: acme-updated@123\nsummary: An example user update\ntitle: ACME User Updated\n"})}),"\n",(0,r.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string             Organization name or id (required)\n      --output string          Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string          management server endpoint (required)\n      --user-registry string   User Registry name or id (required)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);