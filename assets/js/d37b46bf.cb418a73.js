"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[23033],{87376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"v1005/apim/apic_create_api","title":"apic create:api","description":"Create an OpenAPI (Swagger) definition","source":"@site/docs/v1005/apim/apic_create_api.md","sourceDirName":"v1005/apim","slug":"/v1005/apim/apic_create_api","permalink":"/clidocs/docs/v1005/apim/apic_create_api","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/apim/apic_create_api.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic create","permalink":"/clidocs/docs/v1005/apim/apic_create"},"next":{"title":"apic create:product","permalink":"/clidocs/docs/v1005/apim/apic_create_product"}}');var i=n(74848),r=n(28453);const o={},s="apic create",c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-create",children:["apic create",":api"]})}),"\n",(0,i.jsx)(t.p,{children:"Create an OpenAPI (Swagger) definition"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Create an OpenAPI (Swagger) definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic create:api [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Create an API\n  $ apic create:api --title Routes\n  Created routes.yaml API definition [routes:1.0.0]\n\nCreate an API and generate a product referencing the API\n  $ apic create:api --title Routes --product "Climb On"\n  Created routes.yaml API definition [routes:1.0.0]\n  Created climb-on.yaml product definition [climb-on:1.0.0]\n\nCreate an API interactively\n  $ apic create:api\n  Title: Routes\n  Name (routes): routes\n  File (routes.yaml): routes.yaml\n  Template: ()\n  Basepath (/routes): /routes\n  Hostname ($(catalog.host)): $(catalog.host)\n  Schemes:\n  Target url: ()\n  Create product [true]: true\n  Product title (Routes Product): Climb On\n  Product name (climb-on): climb-on\n  Product file (climb-on.yaml): climb-on.yaml\n  Created routes.yaml API definition [routes:1.0.0]\n  Created climb-on.yaml product definition [climb-on:1.0.0]\n\nCreate an API from a WSDL document\n  $ apic create:api --wsdl globalweather.wsdl\n  Created globalweather.yaml API definition [globalweather.yaml:1.0.0]\n\nCreate an API using APIC\'s default OAuth 2 provider template\n  $ apic create:api --title "OAuth2 Provider" --template oauth2\n  Created oauth2-provider.yaml API definition [oauth2-provider:1.0.0]\n\nCreate an API using one of your templates\n  $ apic config:set --global template-path="/etc/templates"\n  $ ls /etc/templates\n  proxy.hbs staging.hbs\n  $ apic create:api --title "Proxy Provider" --template proxy\n  Created proxy-provider.yaml API definition [proxy-provider:1.0.0]\n\nCreate an API using your default template\n  $ apic config:set --global template-path="/etc/templates"\n  $ ls /etc/templates\n  proxy.hbs staging.hbs\n  $ apic config:set --global template-default-api=staging\n  $ apic create:api --title "Staging Provider"\n  Created staging-provider.yaml API definition [staging-provider:1.0.0]\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --api_type string       The type of api (rest, wsdl-to-rest, or wsdl) (default "wsdl")\n      --basepath string       basepath value (default derived from name)\n      --disable_ws_security   Disable generation of WS-Security definitions in api\n      --filename string       filename (default derived from name)\n      --gateway-type string   The type of the gateway (datapower-gateway, datapower-api-gateway, event-gateway) (default "datapower-gateway")\n  -h, --help                  Help for create:api\n      --hostname string       host value (default $(catalog.host)\n  -i, --interactive           use interactive mode\n      --name string           x-ibm-name value (default derived from title)\n      --product string        generate a product definition referencing the API\n      --schemes string        list of schemes (valid options are http, https, ws and wss)\n      --services string       service names separated by space\n      --target-url string     target url\n      --template string       use a provider template (if empty defaults to apic template)\n      --title string          title value (required)\n  -v, --version string        version value (default "1.0.0")\n      --wsdl string           wsdl file to use as the source (required authentication via apic login)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);