"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[95950],{49520:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(74848),t=n(28453);const r={sidebar_position:4},a="Using configuration variables",c={id:"config",title:"Using configuration variables",description:"You can set the values of commonly-used properties in configuration variables. In general, it's easier and more consistent to set configuration variables instead of specifying them using command-line options.",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/clidocs/docs/config",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Logging in to the toolkit",permalink:"/clidocs/docs/login"},next:{title:"Debugging the toolkit",permalink:"/clidocs/docs/debug"}},s={},l=[];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"using-configuration-variables",children:"Using configuration variables"}),"\n",(0,i.jsx)(o.p,{children:"You can set the values of commonly-used properties in configuration variables. In general, it's easier and more consistent to set configuration variables instead of specifying them using command-line options."}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"You can set a configuration variable locally (the default) to affect only the current LoopBack project, or globally (with command-line option -g), to affect all projects. The local value supersedes the global value. You can set local configuration variables only for LoopBack projects. When you set configuration variables for OpenAPI projects, they are always global."})}),"\n",(0,i.jsxs)(o.p,{children:["The values of local configuration variables are stored in the ",(0,i.jsx)(o.code,{children:"project-root/.apiconnect/config"})," file, where ",(0,i.jsx)(o.code,{children:"project-root"})," is the project root directory. The values of global configuration variables are stored in the ",(0,i.jsx)(o.code,{children:"user-home-dir/.apiconnect/config"})," file, where ",(0,i.jsx)(o.code,{children:"user-home-dir"})," is the user's home directory."]}),"\n",(0,i.jsx)(o.p,{children:"Use the following commands to work with configuration variables:"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic config:get varname"})," - Get a configuration variable. Use ",(0,i.jsx)(o.code,{children:"apic config"})," to display the values of all local configuration variables or ",(0,i.jsx)(o.code,{children:"apic config -g"})," to display the values of all global configuration variables."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic config:set varname"})," - Set or update the specified configuration variable."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic config:delete varname"})," - Delete the specified configuration variable."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic config:clear"})," - Delete all configuration variables."]}),"\n",(0,i.jsxs)(o.p,{children:["You set configuration property values by using the ",(0,i.jsx)(o.code,{children:"apic config:set"})," command. By setting configuration properties (for example catalog and app), you do not need to supply values for these options when you enter a command."]}),"\n",(0,i.jsxs)(o.p,{children:["Additionally, you can use ",(0,i.jsx)(o.code,{children:"apic properties"})," commands to work with configuration properties:"]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:clear"})," - Clear the configuration properties."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:create"})," - Augment the configuration properties with additional name/value pairs."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:delete"})," - Delete the configuration property."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:get"})," - Get the configuration property."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:list"})," - List the configuration properties."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"apic properties:update"})," - Update the configuration property."]}),"\n",(0,i.jsxs)(o.admonition,{type:"note",children:[(0,i.jsx)(o.p,{children:"If you have an environment variable of the same name as a CLI configuration property then, by default, its value will override the value of the corresponding CLI configuration property for any CLI command at that scope."}),(0,i.jsxs)(o.p,{children:["For example, if you have defined an environment variable called ",(0,i.jsx)(o.code,{children:"SPACE"})," then, by default, that value will be assumed for the value of the ",(0,i.jsx)(o.code,{children:"--space"})," parameter in the following command, regardless of any space configuration property setting:"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"apic products:publish my_product.yaml --scope space\n"})}),(0,i.jsx)(o.p,{children:"To prevent environment variables overriding CLI configuration properties, define an environment variable called APIC_LOAD_FROM_ENV, set to the value false."})]}),"\n",(0,i.jsx)(o.p,{children:"To set configuration properties, enter the following command:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"apic config:set name=value\n"})}),"\n",(0,i.jsx)(o.p,{children:"where name is the name of the configuration property and value the value to assign to it.\nFor example:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"apic config:set catalog=https://platform-api.myserver.com/api/catalogs/climbon/sandbox\n"})})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>c});var i=n(96540);const t={},r=i.createContext(t);function a(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);