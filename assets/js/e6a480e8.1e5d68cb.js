"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[92078],{37563:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=o(74848),t=o(28453);const r={},s="apic login",a={id:"v1008/apim/apic_login",title:"apic login",description:"Log in to an IBM API Connect cloud",source:"@site/docs/v1008/apim/apic_login.md",sourceDirName:"v1008/apim",slug:"/v1008/apim/apic_login",permalink:"/clidocs/docs/v1008/apim/apic_login",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/apic_login.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic log-spec:update",permalink:"/clidocs/docs/v1008/apim/apic_log-spec_update"},next:{title:"apic logout",permalink:"/clidocs/docs/v1008/apim/apic_logout"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"apic-login",children:"apic login"}),"\n",(0,i.jsx)(n.p,{children:"Log in to an IBM API Connect cloud"}),"\n",(0,i.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Log in to an IBM API Connect cloud"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apic login [flags]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Interactive login\n$ apic login\nEnter your API Connect credentials\n? Server: mgmnthost.com\n? Realm: realm\n? Username: tommy\n? Password: password\nLogged into mgmnthost.com successfully\n\nNon-interactive login\n$ apic login --username tommy --password password --server mgmnthost.com --realm realm \nLogged into mgmnthost.com successfully\n\nRealm for Platform API is of the form: (admin|provider)/<identity-provider>\nUse 'admin' for logging in to the toolkit if you are part of a Cloud administrative organization. Use 'provider' for logging in to the toolkit if you are part of a Provider organization.\nThe following command can be used to identify the identity-providers available:\n./apic identity-providers:list --server mgmnthost.com --fields realm --scope (admin|provider)\n\nRealm for Consumer API is of the form: consumer:<provider-org-name-or-id>:<catalog-name-or-id>/<catalog-identity-provider-name>\nThe catalog identity provider name is typically <catalog-name>-idp. If multiple User Registries are configured for a catalog, please choose the one where the User's account resides.\nExample of realm for Consumer API: consumer:alpha:sandbox/sandbox-idp\nThe following command can be used to identify the identity-providers available:\n./apic identity-providers:list --server consumerhost.com --org <provider-org-name-or-id> --catalog <catalog-name-or-id> --fields realm --mode consumer\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --apiKey string     apiKey\n      --context string    context\n  -h, --help              Help for login\n  -p, --password string   password\n  -r, --realm string      realm\n  -s, --server string     management server endpoint\n      --sso               sso\n  -u, --username string   user name\n"})}),"\n",(0,i.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);