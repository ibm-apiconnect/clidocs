"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[87677],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(r.Provider,{value:t},e.children)}},29117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"v1008/apim/create/apic_create_product","title":"apic create:product","description":"Create a product definition","source":"@site/docs/v1008/apim/create/apic_create_product.md","sourceDirName":"v1008/apim/create","slug":"/v1008/apim/create/apic_create_product","permalink":"/clidocs/docs/v1008/apim/create/apic_create_product","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/create/apic_create_product.md","tags":[{"inline":true,"label":"group: create","permalink":"/clidocs/docs/tags/group-create"}],"version":"current","frontMatter":{"tags":["group: create"]},"sidebar":"tutorialSidebar","previous":{"title":"apic create:api","permalink":"/clidocs/docs/v1008/apim/create/apic_create_api"},"next":{"title":"apic credentials","permalink":"/clidocs/docs/v1008/apim/credentials/apic_credentials"}}');var i=n(74848),r=n(28453);const c={tags:["group: create"]},o="apic create",p={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-create",children:["apic create",":product"]})}),"\n",(0,i.jsx)(t.p,{children:"Create a product definition"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Create a product definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic create:product [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Create a product\n  $ apic create:product --title "Climb On"\n  Created climb-on.yaml product definition [climb-on:1.0.0]\nCreate a product interactively\n  $ apic create:product\n  ? Title: Climb On\n  ? Name: climb-on\n  ? File: climb-on.yaml\n  ? Template:\n  ? API Files:\n  Created climb-on.yaml product definition [climb-on:1.0.0]\nCreate a product referencing existing APIs\n  $ apic create:product --title "Climb On" --apis "routes.yaml ascents.yaml"\n  Created climb-on.yaml product definition [climb-on:1.0.0]\nCreate an product using one of your templates\n  $ apic config:set --global template-path="/etc/templates"\n  $ ls /etc/templates\n  proxy-product.hbs staging-product.hbs\n  $ apic create:product --title "Proxy Product" --template proxy\n  Created proxy-product.yaml product definition [proxy-product:1.0.0]\nCreate a product using your default template\n  $ apic config:set --global template-path="/etc/templates"\n  $ ls /etc/templates\n  proxy-product.hbs staging-product.hbs\n  $ apic config:set --global template-default-product=staging\n  $ apic create:product --title "Staging Product"\n  Created staging-product.yaml product definition [staging-product:1.0.0]\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --apis string           api file names separated by a space\n      --filename string       filename (default derived from name)\n      --gateway-type string   The type of the gateway (datapower-gateway, datapower-api-gateway, event-gateway) (default "datapower-api-gateway")\n  -h, --help                  Help for create:product\n  -i, --interactive           use interactive mode\n      --name string           x-ibm-name value (default derived from title)\n      --template string       use a provider template (if empty defaults to apic template)\n      --title string          title value (required)\n  -v, --version string        version value (default "1.0.0")\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);