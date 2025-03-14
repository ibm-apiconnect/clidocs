"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[50924],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}},80129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"v1005/portaladmin/apic_export-entity_launch","title":"apic export-entity:launch","description":"Launch a export entity","source":"@site/docs/v1005/portaladmin/apic_export-entity_launch.md","sourceDirName":"v1005/portaladmin","slug":"/v1005/portaladmin/apic_export-entity_launch","permalink":"/clidocs/docs/v1005/portaladmin/apic_export-entity_launch","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1005/portaladmin/apic_export-entity_launch.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"apic export-entity:get","permalink":"/clidocs/docs/v1005/portaladmin/apic_export-entity_get"},"next":{"title":"apic export-entity:list","permalink":"/clidocs/docs/v1005/portaladmin/apic_export-entity_list"}}');var i=n(74848),r=n(28453);const a={},c="apic export-entity",s={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-export-entity",children:["apic export-entity",":launch"]})}),"\n",(0,i.jsx)(t.p,{children:"Launch a export entity"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Launch an export entity which will create an export tgz of all the entities contained in the export. If called via the toolkit CLI, it will automatically poll the response every 30 seconds up to 25 minutes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic export-entity:launch --mode portaladmin [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  -c, --catalog string            Name or ID of the Catalog that the site belongs to. (required)\n      --export_entity_id string   ID of the export entity (required)\n      --format string             Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help                      Help for export-entity:launch\n      --no-poll                   Do not poll the created task and just return the task ID\n  -o, --org string                Name or ID of the organization that the catalog belongs to. (required)\n  -s, --server string             management server endpoint (required)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);