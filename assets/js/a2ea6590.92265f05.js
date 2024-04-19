"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[5696],{56650:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(74848),a=o(28453);const i={},c="apic config",s={id:"v1008/consumer/apic_config_get",title:"apic config:get",description:"Get a configuration variable",source:"@site/docs/v1008/consumer/apic_config_get.md",sourceDirName:"v1008/consumer",slug:"/v1008/consumer/apic_config_get",permalink:"/ibm-apiconnect/clidocs/docs/v1008/consumer/apic_config_get",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/consumer/apic_config_get.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic config:delete",permalink:"/ibm-apiconnect/clidocs/docs/v1008/consumer/apic_config_delete"},next:{title:"apic config:list",permalink:"/ibm-apiconnect/clidocs/docs/v1008/consumer/apic_config_list"}},r={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"apic-config",children:["apic config",":get"]}),"\n",(0,t.jsx)(n.p,{children:"Get a configuration variable"}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"Configuration variables:"}),"\n",(0,t.jsx)(n.p,{children:"catalog\nThe catalog configuration variable should be set to the URI of an\nAPI Connect catalog.  The value of the catalog provides the default\nidentity of a catalog for all the commands that are used to manage\naspects of a catalog.  The default values defined by the catalog's\nURI can be overridden using the --server, --organization, and\n--catalog command line options.  The catalog URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/catalogs/CONSUMER_ORG_NAME/CATALOG_NAME"}),"\n",(0,t.jsx)(n.p,{children:"org\nThe default value of org defined by the app's or catalog's URI can be\nset using the org URI.  The org URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/orgs/CONSUMER_ORG_NAME"}),"\n",(0,t.jsx)(n.p,{children:"space\nThe space configuration variable should be set to the URI of an\nAPI Connect space.  The value of the space provides the default\nidentity of a space for all the commands that are used to manage\naspects of a space.  The default values defined by the spaces's\nURI can be overridden using the --server, --organization,\n--catalog, and --space command line options.  The space URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/spaces/CONSUMER_ORG_NAME/CATALOG_NAME/SPACE_NAME"}),"\n",(0,t.jsx)(n.p,{children:"cloud\nThe cloud configuration variable should be set to the management\nserver URI. The value of the cloud variable provides default\nserver URI for cloud admin commands. It can be overridden using\nthe --server and --mode command line options. The cloud URI has the form:\nhttps://MANAGEMENT_SERVER/consumer-api/"}),"\n",(0,t.jsx)(n.p,{children:"mode\nThe value of mode configruation variable defines the toolkit operation\nmode. It can be overridden using the --mode command line option.\nThe value can be set to apim or consumer"}),"\n",(0,t.jsx)(n.p,{children:"template-path\nList of places to look for handlebar templates"}),"\n",(0,t.jsx)(n.p,{children:"template-default-api\nDefines the default api template"}),"\n",(0,t.jsx)(n.p,{children:"template-default-product\nDefines the default product template"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"apic config:get NAME --mode consumer [flags]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ apic config:get catalog --mode consumer\ncatalog: https://mgmnthost.com/consumer-api/catalogs/climbon/sb\n\n$ apic config:get org --mode consumer\norg: https://mgmnthost.com/consumer-api/orgs/climbon\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  -g, --global   list the global configuration variables\n  -h, --help     Help for config:get\n  -l, --local    list the local application configuration variables\n"})}),"\n",(0,t.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var t=o(96540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);