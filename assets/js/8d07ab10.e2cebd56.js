"use strict";(self.webpackChunkclidocs=self.webpackChunkclidocs||[]).push([[87554],{81305:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"v1009/apim/user-registries/apic_user-registries_create","title":"apic user-registries:create","description":"Create a User Registry object","source":"@site/docs/v1009/apim/user-registries/apic_user-registries_create.md","sourceDirName":"v1009/apim/user-registries","slug":"/v1009/apim/user-registries/apic_user-registries_create","permalink":"/clidocs/docs/v1009/apim/user-registries/apic_user-registries_create","draft":false,"unlisted":false,"editUrl":"https://github.com/ibm-apiconnect/clidocs/tree/main/docs/v1009/apim/user-registries/apic_user-registries_create.md","tags":[{"inline":true,"label":"group: user-registries","permalink":"/clidocs/docs/tags/group-user-registries"}],"version":"current","frontMatter":{"tags":["group: user-registries"]},"sidebar":"tutorialSidebar","previous":{"title":"apic user-registries:clear","permalink":"/clidocs/docs/v1009/apim/user-registries/apic_user-registries_clear"},"next":{"title":"apic user-registries:delete","permalink":"/clidocs/docs/v1009/apim/user-registries/apic_user-registries_delete"}}');var s=n(74848),t=n(28453);const a={tags:["group: user-registries"]},l="apic user-registries",o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Possible Usages",id:"possible-usages",level:2},{value:"Request examples",id:"request-examples",level:2},{value:"Example Authentication URL User Registry with case sensitive usernames and requiring unique emails.",id:"example-authentication-url-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",level:4},{value:"Example LDAP user registry using the search_dn authentication method and authenticated bind.",id:"example-ldap-user-registry-using-the-search_dn-authentication-method-and-authenticated-bind",level:4},{value:"Example Local User Registry with case sensitive usernames and requiring unique emails.",id:"example-local-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",level:4},{value:"Example OIDC User Registry with case sensitive usernames and requiring unique emails.",id:"example-oidc-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",level:4},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2}];function p(e){const i={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsxs)(i.h1,{id:"apic-user-registries",children:["apic user-registries",":create"]})}),"\n",(0,s.jsx)(i.p,{children:"Create a User Registry object"}),"\n",(0,s.jsx)(i.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(i.p,{children:"Create a User Registry object"}),"\n",(0,s.jsx)(i.p,{children:"Required fields:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"integration_url"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Fields not allowed:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"owned"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Fields allowed but ignored:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"id"}),"\n",(0,s.jsx)(i.li,{children:"type"}),"\n",(0,s.jsx)(i.li,{children:"api_version"}),"\n",(0,s.jsx)(i.li,{children:"scope"}),"\n",(0,s.jsx)(i.li,{children:"created_at"}),"\n",(0,s.jsx)(i.li,{children:"updated_at"}),"\n",(0,s.jsx)(i.li,{children:"url"}),"\n",(0,s.jsx)(i.li,{children:"org_url"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"apic user-registries:create [flags]\n"})}),"\n",(0,s.jsx)(i.h2,{id:"possible-usages",children:"Possible Usages"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"apic user-registries:create [flags] USER_REGISTRY_FILE\n"})}),"\n",(0,s.jsx)(i.h2,{id:"request-examples",children:"Request examples"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h4,{id:"example-authentication-url-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",children:"Example Authentication URL User Registry with case sensitive usernames and requiring unique emails."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"case_sensitive: true\nemail_required: true\nemail_unique_if_exist: true\nendpoint:\n  endpoint: http://acme-authurl.example.com\n  tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\nintegration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/authurl\nname: acme-authurl\nregistry_type: authurl\nsummary: An example Authentication URL User Registry\ntitle: Acme Authentication URL User Registry\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h4,{id:"example-ldap-user-registry-using-the-search_dn-authentication-method-and-authenticated-bind",children:"Example LDAP user registry using the search_dn authentication method and authenticated bind."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'case_sensitive: true\nconfiguration:\n  admin_dn: cn=admin,dc=acme,dc=devops,dc=cloud\n  admin_password: password123\n  attribute_mapping: {}\n  authenticated_bind: "true"\n  authentication_method: search_dn\n  directory_type: standard\n  group_authentication_method: none\n  protocol_version: "3"\n  search_dn_base: dc=acme,dc=devops,dc=cloud\n  search_dn_filter_prefix: (&(uid=\n  search_dn_filter_suffix: ))\n  search_dn_scope: sub\nemail_required: true\nemail_unique_if_exist: true\nendpoint:\n  endpoint: ldap://acme-openldap.example.com:389\n  tls_client_profile_url: null\nintegration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/ldap\nname: acme-ldap\nregistry_type: ldap\nsummary: An example LDAP user registry.\ntitle: Acme LDAP User Registry\nuser_managed: false\n'})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h4,{id:"example-local-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",children:"Example Local User Registry with case sensitive usernames and requiring unique emails."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"case_sensitive: true\nemail_required: true\nemail_unique_if_exist: true\nintegration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/lur\nname: acme-lur\nregistry_type: lur\nsummary: An example Local User Registry.\ntitle: Acme Local User Registry\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h4,{id:"example-oidc-user-registry-with-case-sensitive-usernames-and-requiring-unique-emails",children:"Example OIDC User Registry with case sensitive usernames and requiring unique emails."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"case_sensitive: true\nconfiguration:\n  authorization_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/auth\n  client_id: 540714234576-6o1u4an2oj2vc6nmvntc3gimn3kpp36v.apps.acme.com\n  client_secret: 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\n  credential_location: auth_header\n  features:\n  - auto_onboard\n  - nonce\n  - pkce\n  - userinfo\n  - proxy_redirect\n  - proxy_id_token\n  - proxy_access_token\n  - proxied_token_as_separate_claim\n  - post_userinfo\n  - override_provider_ttl\n  field_mapping:\n    email: email\n    first_name: given_name\n    last_name: family_name\n    username: preferred_username\n  jwks_uri:\n    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/certs\n    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\n  logout_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/logout\n  oidc_rp_logout:\n    endpoint:\n      endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/acme-rplogout\n      tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\n    include_refresh_token: true\n    redirect_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/acme-rplogoutredirect\n  provider_type: standard\n  response_type: code\n  scope: openid profile email\n  token_endpoint:\n    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/token\n    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\n  userinfo_endpoint:\n    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/userinfo\n    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1\nemail_required: true\nemail_unique_if_exist: true\nintegration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/oidc\nname: acme-oidc\nsummary: An example OIDC User Registry\ntitle: Acme OIDC User Registry\nvisibility:\n  type: private\n"})}),"\n",(0,s.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.\n  -o, --org string      Organization name or id (required)\n      --output string   Write file(s) to directory, instead of STDOUT (default "-")\n  -s, --server string   management server endpoint (required)\n'})}),"\n",(0,s.jsx)(i.h2,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'      --accept-license        Accept the license for API Connect\n      --debug                 Enable debug output\n      --debug-output string   Write debug output to file\n      --lang string           Toolkit operation language\n      --live-help             Enable or disable tracking of limited usage information\n  -m, --mode string           Toolkit operation mode (default "apim")\n'})})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var r=n(96540);const s={},t=r.createContext(s);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);