"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[17112],{87131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(74848),r=n(28453);const o={},c="apic products",s={id:"v1008/apim/apic_products_replace",title:"apic products:replace",description:"Products replace operations",source:"@site/docs/v1008/apim/apic_products_replace.md",sourceDirName:"v1008/apim",slug:"/v1008/apim/apic_products_replace",permalink:"/clidocs/docs/v1008/apim/apic_products_replace",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/apic_products_replace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"apic products:publish",permalink:"/clidocs/docs/v1008/apim/apic_products_publish"},next:{title:"apic products:set-migration-target",permalink:"/clidocs/docs/v1008/apim/apic_products_set-migration-target"}},a={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Create a mapping file",id:"create-a-mapping-file",level:4},{value:"<code>Hot-replace</code> version 1.0.0 with 1.0.1",id:"hot-replace-version-100-with-101",level:4},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsxs)(t.h1,{id:"apic-products",children:["apic products",":replace"]})}),"\n",(0,i.jsx)(t.p,{children:"Products replace operations"}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Products replace operations"}),"\n",(0,i.jsx)(t.h4,{id:"create-a-mapping-file",children:"Create a mapping file"}),"\n",(0,i.jsx)(t.p,{children:"if you are replacing a Product, the mapping file specifies the Product that you want to replace, and the mapping of the Plans from the source Product to the target Product."}),"\n",(0,i.jsx)(t.p,{children:"The PRODUCT_PLAN_MAPPING_FILE takes the following form:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\nproduct_url: https:/server/api/catalogs/{id}/products/{id}\nplans:\n- source: {source_plan_name_1}\n  target: {target_plan_name_1}\n- source: {source_plan_name_2}\n  target: {target_plan_name_2}\n\t\t\t.\n\t\t\t.\n\t\t\t.\n"})}),"\n",(0,i.jsxs)(t.h4,{id:"hot-replace-version-100-with-101",children:[(0,i.jsx)(t.code,{children:"Hot-replace"})," version 1.0.0 with 1.0.1"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic products:replace climbon:1.0.1 PRODUCT_PLAN_MAPPING_FILE\n"})}),"\n",(0,i.jsx)(t.p,{children:"The Product specified on the command line is the replacement Product. For example, if you are replacing climbon:1.0.0 with climbon:1.0.1 then the Product specified on the command line is climbon:1.0.1, and the product_url property inside the plan mapping file specifies the URL of climbon:1.0.0."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"apic products:replace [flags]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"      apic products:replace [flags] --id --scope space ID PRODUCT_PLAN_MAPPING_FILE\n      apic products:replace [flags] --id --scope catalog ID PRODUCT_PLAN_MAPPING_FILE\n      apic products:replace [flags] --scope space NAME:VERSION PRODUCT_PLAN_MAPPING_FILE\n      apic products:replace [flags] --scope catalog NAME:VERSION PRODUCT_PLAN_MAPPING_FILE\n"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  -c, --catalog string   Catalog name or id (required)\n      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -h, --help             Help for products:replace\n      --id               id\n  -o, --org string       Organization name or id (required)\n      --output string    Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string     scope\n  -s, --server string    management server endpoint (required)\n      --space string     Space name or id (required)\n'})}),"\n",(0,i.jsx)(t.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);