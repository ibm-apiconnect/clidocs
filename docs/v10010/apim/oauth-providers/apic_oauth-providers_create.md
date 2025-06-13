---
tags:
- "group: oauth-providers"
---
# apic oauth-providers:create

Create a Oauth Provider object

## Synopsis

Create a Oauth Provider object
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - created_at
          - updated_at
          - url
          - org_url

```
apic oauth-providers:create [flags]
```

## Possible Usages

```
apic oauth-providers:create [flags] OAUTH_PROVIDER_FILE
```

## Request examples

-----------------------------------------------
#### Example of native oauth provider creation.
-----------------------------------------------

```
gateway_version: "6000"
grants:
- access_code
- implicit
- application
- password
name: acme-oauth-provider
native_provider:
  api:
    basePath: /sample
    info:
      description: sample decsription
    x-ibm-configuration:
      gateway: datapower-api-gateway
  authorize_path: /oauth2/authorize
  clients:
  - confidential
  - public
  native_provider_5000: {}
  pkce:
    allow_plain: false
    enabled: true
    required: false
  token_path: /oauth2/token
provider_type: native
scopes:
  sample_scope_1: Sample scope description
title: Acme native oauth provider creation
```

----------------------------------------------------
#### Example of third party oauth provider creation.
----------------------------------------------------

```
gateway_version: "6000"
grants:
- access_code
- implicit
- application
- password
- jwt
name: acme-oauth-provider
provider_type: third_party
scopes:
  sample_scope_1: Sample scope description
third_party_config:
  auth_header_pass_thru: true
  authorize_endpoint: https://example.com/oauth2/authorize
  basic_auth:
    password: acme@123
    request_headername: x-introspect-basic-authorization-header
    username: acme
  introspect_cache_type: protocol
  introspection_endpoint:
    endpoint: https://example.com/oauth2/introspect
    tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
  security:
  - basic-auth
  token_endpoint: https://example.com/oauth2/token
  token_validation_requirement: connected
title: Acme third party oauth provider creation
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
