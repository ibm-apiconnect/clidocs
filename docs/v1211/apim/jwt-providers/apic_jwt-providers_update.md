---
tags:
- "group: jwt-providers"
---
# apic jwt-providers:update

Update the Jwt Provider object by name or id

## Synopsis

Update the Jwt Provider object by name or id
          
          Required fields:
          - jwks_config
          
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
apic jwt-providers:update [flags]
```

## Possible Usages

```
apic jwt-providers:update [flags] JWT_PROVIDER JWT_PROVIDER_FILE
```

## Request examples

------------------------------------
#### Example for JWT provider update
------------------------------------

```
debug: false
gateway_version: "12000"
native_jwt_provider:
  jwks_config: signing
summary: Example for updating JWT Provider
title: JWT Provider
tls_client_profile_urls:
- https://api.acme-apim.example.com/api/orgs/acme-org/tls-client-profiles/acme-tls-client-profile
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
      --accept-license                  Accept the license for API Connect
      --certificate-authority strings   Path to a cert file for the certificate authority
      --debug                           Enable debug output
      --debug-output string             Write debug output to file
      --insecure-skip-pkix-validation   Skip verifying the complete TLS certificate chain (insecure)
      --insecure-skip-tls-verify        If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --lang string                     Toolkit operation language
      --live-help                       Enable or disable tracking of limited usage information
  -m, --mode string                     Toolkit operation mode (default "apim")
      --tls-server-name string          Server name to use for server certificate validation. If it is not provided, the hostname used to contact the server is used
```
