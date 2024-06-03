"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[82958],{21013:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const r={sidebar_position:3},s="Logging in to the toolkit",a={id:"login",title:"Logging in to the toolkit",description:"Information on how to login to the toolkit using different user registries and realms.",source:"@site/docs/login.md",sourceDirName:".",slug:"/login",permalink:"/clidocs/docs/login",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/login.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/clidocs/docs/install"},next:{title:"Using configuration variables",permalink:"/clidocs/docs/config"}},l={},d=[{value:"Logging in to a management server",id:"logging-in-to-a-management-server",level:2},{value:"mgmt_endpoint_url",id:"mgmt_endpoint_url",level:3},{value:"user_id",id:"user_id",level:3},{value:"password",id:"password",level:3},{value:"realm",id:"realm",level:3},{value:"Logging in to a management server with an OIDC registry",id:"logging-in-to-a-management-server-with-an-oidc-registry",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"logging-in-to-the-toolkit",children:"Logging in to the toolkit"}),"\n",(0,t.jsx)(n.p,{children:"Information on how to login to the toolkit using different user registries and realms."}),"\n",(0,t.jsx)(n.h2,{id:"logging-in-to-a-management-server",children:"Logging in to a management server"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server",children:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server"})}),"\n",(0,t.jsxs)(n.p,{children:["You log in to a management server from the command line by using the ",(0,t.jsx)(n.code,{children:"apic login"})," command. The parameters that you supply determine the identity provider that is used to authenticated the supplied user ID, and the scope of the tasks that can be performed after successful log in."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If you want to log in with an OIDC user registry or if you are an IBM Cloud Pak for Integration (CP4I) user, see Logging in to a management server with an OIDC registry."})}),"\n",(0,t.jsx)(n.p,{children:"Clear the credentials from any previous login by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:clear\n"})}),"\n",(0,t.jsx)(n.p,{children:"Clearing the credentials ensures that you do not inadvertently log in with the wrong set of credentials (for example, from a different product release or environment)."}),"\n",(0,t.jsx)(n.p,{children:"Set the credentials that you want to use now by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:set path_to_credentials/credential.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"path_to_credentials"})," is the location of the ",(0,t.jsx)(n.code,{children:"credential.json"})," file that you want to use. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:set /Users/local_user/credential.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Log in by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic login --server mgmt_endpoint_url --username user_id --password password --realm realm\n"})}),"\n",(0,t.jsx)(n.p,{children:"The parameters for the apic login command are as follows:"}),"\n",(0,t.jsx)(n.h3,{id:"mgmt_endpoint_url",children:"mgmt_endpoint_url"}),"\n",(0,t.jsx)(n.p,{children:"The URL depends on the type of organization that you are logging in with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud admin organization or Provider organization: Use one of the following URLs:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"platform API endpoint URL"}),"\n",(0,t.jsx)(n.li,{children:"management API manager URL"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Consumer organization: Use the consumer API endpoint URL"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These endpoint URLs are configured during the installation of API Connect. If you have access to the Cloud Manager user interface, you can view the configured endpoint URLs as described in Viewing platform and UI endpoints, ignoring any segments at the end of the displayed URLs. If you are not sure of the endpoint URL, ask your administrator."}),"\n",(0,t.jsx)(n.h3,{id:"user_id",children:"user_id"}),"\n",(0,t.jsx)(n.p,{children:"The user ID you want to log in with. Depending on the tasks that you want to perform, this user ID might be any of the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A user ID that is a member of the cloud administration organization. This is an ID that you could also use to log in to the Cloud Manager user interface."}),"\n",(0,t.jsx)(n.li,{children:"A user ID that is a member of a provider organization. This is an ID that you could also use to log in to the API Manager user interface."}),"\n",(0,t.jsx)(n.li,{children:"A user ID that is a member of a consumer organization. This is an ID that you could also use to log in to the Developer Portal."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"password",children:"password"}),"\n",(0,t.jsx)(n.p,{children:"The password associated with the supplied user ID."}),"\n",(0,t.jsx)(n.h3,{id:"realm",children:"realm"}),"\n",(0,t.jsx)(n.p,{children:"The realm parameter specifies the identity provider that is used to authenticated the supplied user ID, and the scope of the tasks that can be performed after successful log in."}),"\n",(0,t.jsx)(n.p,{children:"The format of the realm depends on the type of user, as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Member of the cloud administration organization:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"admin/identity_provider\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To determine the identity provider, see ",(0,t.jsx)(n.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp",children:"How to determine the identity provider"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Member of a provider organization:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"provider/identity_provider\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To determine the identity provider, see ",(0,t.jsx)(n.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp",children:"How to determine the identity provider"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Member of a consumer organization:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"consumer:provider_org:catalog/identity_provider\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"provider_org"})," is the name of your provider organization, and ",(0,t.jsx)(n.code,{children:"catalog"})," is the name of the Catalog in that provider organization.\nTo determine the identity provider, see ",(0,t.jsx)(n.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server#rapic_cli_login__determine_idp",children:"How to determine the identity provider"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"logging-in-to-a-management-server-with-an-oidc-registry",children:"Logging in to a management server with an OIDC registry"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server-oidc-registry",children:"https://www.ibm.com/docs/en/api-connect/10.0.5.x_lts?topic=tool-logging-in-management-server-oidc-registry"})}),"\n",(0,t.jsx)(n.p,{children:"Logging in with an OIDC registry involves several steps, in which you obtain a temporary token and pass it to the toolkit to ensure it can communicate securely with the management server."}),"\n",(0,t.jsx)(n.div,{children:(0,t.jsx)(n.p,{children:"Logging in with an OIDC registry is supported for the developer toolkit (used with API Manager) and the Developer Portal admin toolkit, but is not supported for members of consumer organizations. If you are using IBM Cloud Pak for Integration (CP4I), review this topic for login instructions. If you want to log in using a non-OIDC registry, see Logging in to a management server above."})}),"\n",(0,t.jsx)(n.p,{children:"To log in, complete the following steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clear the credentials from any previous login by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:clear\n"})}),"\n",(0,t.jsx)(n.p,{children:"Clearing the credentials ensures that you do not inadvertently log in with the wrong set of credentials (for example, from a different product release or environment)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the credentials that you want to use now by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:set path_to_credentials/credential.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"path_to_credentials"})," is the location of the ",(0,t.jsx)(n.code,{children:"credential.json"})," file that you want to use. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic client-creds:set /Users/local_user/credential.json\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Log in by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apic login --server mgmt_endpoint_url --sso\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"mgmt_endpoint_url"})," is the endpoint URL. When you log in with a Cloud admin or Provider organization, specify one of the following URLs:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"platform API endpoint URL"}),"\n",(0,t.jsx)(n.li,{children:"management API manager URL"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These endpoint URLs are configured during the installation of API Connect. If you have access to the Cloud Manager user interface, you can view the configured endpoint URLs as described in Viewing platform and UI endpoints, ignoring any segments at the end of the displayed URLs. If you are not sure of the endpoint URL, ask your administrator."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"CP4I: If you are using API Connect as a component of IBM Cloud Pak for Integration (CP4I), your administrator can provide the correct URL."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When the toolkit prompts for the context, type admin API Connect (administrators) or provider (everyone else):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Context? provider\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The server responds with the following message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Please copy and paste the url https://mgmt_endpoint_url/auth/manager/sign-in/?from=TOOLKIT to a browser to start the authentication process.\nDo you want to open the url in default browser? [y/n]: y\n"})}),"\n",(0,t.jsx)(n.p,{children:"Take one of the following actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you want to use your default browser to log in to API Manager, type ",(0,t.jsx)(n.code,{children:"y"})," and press ",(0,t.jsx)(n.code,{children:"Enter"}),".\nThe API Manager sign-in page opens in a new browser tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you don't use to use your default browser, type ",(0,t.jsx)(n.code,{children:"n"})," and press ",(0,t.jsx)(n.code,{children:"Enter"}),".\nCopy the URL from the command window.\nOpen a browser, paste the URL, and press Enter.\nThe API Manager sign-in page displays."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the API Manager sign-in page, select the OIDC registry and then log in to API Connect."}),"\n",(0,t.jsx)(n.p,{children:":::\nCP4I: Select the Common Services User Registry.\n:::"}),"\n",(0,t.jsx)(n.p,{children:"After you log in, API Connect displays the \u201cYou are authenticated!\u201d message and provides a temporary token. Copy the token."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return to the command window. Paste the token at the ",(0,t.jsx)(n.code,{children:"API Key?"})," prompt and press ",(0,t.jsx)(n.code,{children:"Enter"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When the token is validated and you are successfully logged in to the toolkit, the following message displays:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Warning: Using default toolkit credentials.\nLogged into mgmt_endpoint_url successfully\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: If you see a message stating that credentials cannot be found, download new credentials as explained in ",(0,t.jsx)(n.a,{href:"./install",children:"Installing"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);