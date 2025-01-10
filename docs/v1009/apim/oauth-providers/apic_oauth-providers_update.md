---
tags:
- "group: oauth-providers"
---
# apic oauth-providers:update

Update the Oauth Provider object by name or id

## Synopsis

Update the Oauth Provider object by name or id
          
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
apic oauth-providers:update [flags]
```

## Possible Usages

```
apic oauth-providers:update [flags] OAUTH_PROVIDER OAUTH_PROVIDER_FILE
```

## Request examples

---------------------------------------------
#### Example of native oauth provider update.
---------------------------------------------

```
grants:
- access_code
- implicit
- application
native_provider:
  api:
    basePath: /sample1
    info:
      description: updated description
  authorize_path: /oauth2/authorize1
  clients:
  - confidential
  pkce:
    allow_plain: true
    enabled: false
    required: true
  token_path: /oauth2/token1
scopes:
  sample_scope_1: updated scope description
title: Acme native oauth provider creation
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
