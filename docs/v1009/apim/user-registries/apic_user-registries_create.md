---
tags:
- "group: user-registries"
---
# apic user-registries:create

Create a User Registry object

## Synopsis

Create a User Registry object
          
          Required fields:
          - integration_url
          
          Fields not allowed:
          - owned
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url

```
apic user-registries:create [flags]
```

## Possible Usages

```
apic user-registries:create [flags] USER_REGISTRY_FILE
```

## Request examples

--------------------------------------------------------------------------------------------------------
#### Example Authentication URL User Registry with case sensitive usernames and requiring unique emails.
--------------------------------------------------------------------------------------------------------

```
case_sensitive: true
email_required: true
email_unique_if_exist: true
endpoint:
  endpoint: http://acme-authurl.example.com
  tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
integration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/authurl
name: acme-authurl
registry_type: authurl
summary: An example Authentication URL User Registry
title: Acme Authentication URL User Registry
```

-------------------------------------------------------------------------------------------------
#### Example LDAP user registry using the search_dn authentication method and authenticated bind.
-------------------------------------------------------------------------------------------------

```
case_sensitive: true
configuration:
  admin_dn: cn=admin,dc=acme,dc=devops,dc=cloud
  admin_password: password123
  attribute_mapping: {}
  authenticated_bind: "true"
  authentication_method: search_dn
  directory_type: standard
  group_authentication_method: none
  protocol_version: "3"
  search_dn_base: dc=acme,dc=devops,dc=cloud
  search_dn_filter_prefix: (&(uid=
  search_dn_filter_suffix: ))
  search_dn_scope: sub
email_required: true
email_unique_if_exist: true
endpoint:
  endpoint: ldap://acme-openldap.example.com:389
  tls_client_profile_url: null
integration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/ldap
name: acme-ldap
registry_type: ldap
summary: An example LDAP user registry.
title: Acme LDAP User Registry
user_managed: false
```

-------------------------------------------------------------------------------------------
#### Example Local User Registry with case sensitive usernames and requiring unique emails.
-------------------------------------------------------------------------------------------

```
case_sensitive: true
email_required: true
email_unique_if_exist: true
integration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/lur
name: acme-lur
registry_type: lur
summary: An example Local User Registry.
title: Acme Local User Registry
```

------------------------------------------------------------------------------------------
#### Example OIDC User Registry with case sensitive usernames and requiring unique emails.
------------------------------------------------------------------------------------------

```
case_sensitive: true
configuration:
  authorization_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/auth
  client_id: 540714234576-6o1u4an2oj2vc6nmvntc3gimn3kpp36v.apps.acme.com
  client_secret: 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
  credential_location: auth_header
  features:
  - auto_onboard
  - nonce
  - pkce
  - userinfo
  - proxy_redirect
  - proxy_id_token
  - proxy_access_token
  - proxied_token_as_separate_claim
  - post_userinfo
  - override_provider_ttl
  field_mapping:
    email: email
    first_name: given_name
    last_name: family_name
    username: preferred_username
  jwks_uri:
    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/certs
    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
  logout_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/logout
  oidc_rp_logout:
    endpoint:
      endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/acme-rplogout
      tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
    include_refresh_token: true
    redirect_endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/acme-rplogoutredirect
  provider_type: standard
  response_type: code
  scope: openid profile email
  token_endpoint:
    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/token
    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
  userinfo_endpoint:
    endpoint: https://keycloak.acme-apim.example.com/realms/master/protocol/openid-connect/userinfo
    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
email_required: true
email_unique_if_exist: true
integration_url: https://acme-apim.example.com/api/cloud/integrations/user-registry/oidc
name: acme-oidc
summary: An example OIDC User Registry
title: Acme OIDC User Registry
visibility:
  type: private
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --lang string           Toolkit operation language
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
