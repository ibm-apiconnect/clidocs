"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[72079],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},30780:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"v1008/apim/apis/apic_apis_validate","title":"apic apis:validate","description":"Validate the API object","source":"@site/docs/v1008/apim/apis/apic_apis_validate.md","sourceDirName":"v1008/apim/apis","slug":"/v1008/apim/apis/apic_apis_validate","permalink":"/clidocs/docs/v1008/apim/apis/apic_apis_validate","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1008/apim/apis/apic_apis_validate.md","tags":[{"inline":true,"label":"group: apis","permalink":"/clidocs/docs/tags/group-apis"}],"version":"current","frontMatter":{"tags":["group: apis"]},"sidebar":"tutorialSidebar","previous":{"title":"apic apis:update","permalink":"/clidocs/docs/v1008/apim/apis/apic_apis_update"},"next":{"title":"apic apis:wsdl","permalink":"/clidocs/docs/v1008/apim/apis/apic_apis_wsdl"}}');var a=i(74848),s=i(28453);const r={tags:["group: apis"]},o="apic apis",p={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Examples",id:"examples",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example of validating api.",id:"example-of-validating-api",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"apic-apis",children:["apic apis",":validate"]})}),"\n",(0,a.jsx)(n.p,{children:"Validate the API object"}),"\n",(0,a.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(n.p,{children:"Validate the API object"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"apic apis:validate [flags]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"apic apis:validate [flags] DRAFT_API_FILE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Online API definition validation\n  $ apic apis:validate --org <provider-org-name-or-id> --server mgmnthost.com myapi.yaml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h4,{id:"example-of-validating-api",children:"Example of validating api."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'basePath: /products-api\nconsumes:\n- application/json\ngateway: datapower-api-gateway\ninfo:\n  description: An API for managing product details.\n  title: Product Management API\n  version: 1.0.0\n  x-ibm-name: product-management-api\npaths:\n  /products:\n    post:\n      operationId: product.create\n      parameters:\n      - description: Product details.\n        in: body\n        name: productData\n        required: true\n        schema:\n          properties:\n            description:\n              type: string\n            name:\n              type: string\n            product_id:\n              type: string\n          required:\n          - product_id\n          - name\n          type: object\n      responses:\n        "200":\n          description: Product created successfully.\n          schema:\n            properties:\n              message:\n                type: string\n              product_id:\n                type: string\n            type: object\n      summary: Create a new product.\n      tags:\n      - product\nproduces:\n- application/json\nschemes:\n- https\nsecurity:\n- api-key-1: []\nsecurityDefinitions:\n  api-key-1:\n    in: header\n    name: X-IBM-Client-Id\n    type: apiKey\n    x-key-type: client_id\nswagger: "2.0"\ntags:\n- description: Operations related to products.\n  name: product\ntype: rest\nx-ibm-configuration:\n  assembly:\n    execute:\n    - operation-switch:\n        case:\n        - execute:\n          - invoke:\n              target-url: https://acme.com/products\n              timeout: 60\n              title: invoke\n              verb: POST\n          operations:\n          - product.create\n        title: operation-switch\n  cors:\n    enabled: true\n  enforced: true\n  phase: realized\n  testable: true\n'})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'      --catalog_name string            Name of a catalog\n      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n      --gateway_service_names string   Names of Gateway Services\n  -o, --org string                     Organization name or id (required)\n      --output string                  Write file(s) to directory, instead of STDOUT (default "-")\n      --scope string                   scope\n  -s, --server string                  management server endpoint (required)\n      --space_name string              Name of a space\n'})}),"\n",(0,a.jsx)(n.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);