"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[55138],{28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var t=o(96540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}},42717:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"v1005/consumer/apic_config_get","title":"apic config:get","description":"Get a configuration variable","source":"@site/docs/v1005/consumer/apic_config_get.md","sourceDirName":"v1005/consumer","slug":"/v1005/consumer/apic_config_get","permalink":"/clidocs/docs/v1005/consumer/apic_config_get","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/consumer/apic_config_get.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic config:delete","permalink":"/clidocs/docs/v1005/consumer/apic_config_delete"},"next":{"title":"apic config:list","permalink":"/clidocs/docs/v1005/consumer/apic_config_list"}}');var a=o(74848),i=o(28453);const c={},s="apic config",r={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"apic-config",children:["apic config",":get"]})}),"\n",(0,a.jsx)(n.p,{children:"Get a configuration variable"}),"\n",(0,a.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(n.p,{children:"Configuration variables:"}),"\n",(0,a.jsx)(n.p,{children:"catalog\nThe catalog configuration variable should be set to the URI of an\nAPI Connect catalog.  The value of the catalog provides the default\nidentity of a catalog for all the commands that are used to manage\naspects of a catalog.  The default values defined by the catalog's\nURI can be overridden using the --server, --organization, and\n--catalog command line options.  The catalog URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/catalogs/CONSUMER_ORG_NAME/CATALOG_NAME"}),"\n",(0,a.jsx)(n.p,{children:"org\nThe default value of org defined by the app's or catalog's URI can be\nset using the org URI.  The org URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/orgs/CONSUMER_ORG_NAME"}),"\n",(0,a.jsx)(n.p,{children:"space\nThe space configuration variable should be set to the URI of an\nAPI Connect space.  The value of the space provides the default\nidentity of a space for all the commands that are used to manage\naspects of a space.  The default values defined by the spaces's\nURI can be overridden using the --server, --organization,\n--catalog, and --space command line options.  The space URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/spaces/CONSUMER_ORG_NAME/CATALOG_NAME/SPACE_NAME"}),"\n",(0,a.jsx)(n.p,{children:"cloud\nThe cloud configuration variable should be set to the management\nserver URI. The value of the cloud variable provides default\nserver URI for cloud admin commands. It can be overridden using\nthe --server and --mode command line options. The cloud URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/"}),"\n",(0,a.jsx)(n.p,{children:"mode\nThe value of mode configruation variable defines the toolkit operation\nmode. It can be overridden using the --mode command line option.\nThe value can be set to apim or consumer"}),"\n",(0,a.jsx)(n.p,{children:"template-path\nList of places to look for handlebar templates"}),"\n",(0,a.jsx)(n.p,{children:"template-default-api\nDefines the default api template"}),"\n",(0,a.jsx)(n.p,{children:"template-default-product\nDefines the default product template"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"apic config:get NAME --mode consumer [flags]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ apic config:get catalog --mode consumer\ncatalog: https://mgmnthost.com/consumer-api/catalogs/climbon/sb\n\n$ apic config:get org --mode consumer\norg: https://mgmnthost.com/consumer-api/orgs/climbon\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  -g, --global   list the global configuration variables\n  -h, --help     Help for config:get\n  -l, --local    list the local application configuration variables\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);