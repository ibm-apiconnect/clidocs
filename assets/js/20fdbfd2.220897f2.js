"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[24293],{43404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"v1008/portaladmin/content/apic_content_create-export","title":"apic content:create-export","description":"Export a tgz containing the site content","source":"@site/docs/v1008/portaladmin/content/apic_content_create-export.md","sourceDirName":"v1008/portaladmin/content","slug":"/v1008/portaladmin/content/apic_content_create-export","permalink":"/clidocs/docs/v1008/portaladmin/content/apic_content_create-export","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/portaladmin/content/apic_content_create-export.md","tags":[{"inline":true,"label":"group: content","permalink":"/clidocs/docs/tags/group-content"}],"version":"current","frontMatter":{"tags":["group: content"]},"sidebar":"tutorialSidebar","previous":{"title":"apic content","permalink":"/clidocs/docs/v1008/portaladmin/content/apic_content"},"next":{"title":"apic content:create-import","permalink":"/clidocs/docs/v1008/portaladmin/content/apic_content_create-import"}}');var i=n(74848),a=n(28453);const r={tags:["group: content"]},c="apic content",s={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-content",children:["apic content",":create-export"]})}),"\n",(0,i.jsx)(t.p,{children:"Export a tgz containing the site content"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Export a tgz containing the site content. You can export specific entity types and specific ids or you can generate a tar containing all content. Depending on your site's content please be advised that an export all can take a long time to complete. If called via the toolkit CLI, it will automatically poll the response every 30 seconds up to 25 minutes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic content:create-export --mode portaladmin [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\n      apic content:create-export --mode portaladmin [flags]\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  -c, --catalog string       Name or ID of the Catalog that the site belongs to. (required)\n      --entity_ids string    A comma-separated list of Content IDs.\n      --entity_type string   Type of entity you want to perform this operation on. To find out entity/content types see the content list-types route. (required)\n      --format string        Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --no-poll              Do not poll the created task and just return the task ID\n  -o, --org string           Name or ID of the organization that the catalog belongs to. (required)\n  -s, --server string        management server endpoint (required)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);