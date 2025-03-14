---
tags:
- "group: tls-client-profiles"
---
# apic tls-client-profiles:update

Update the TLS Client Profile object by name and version

## Synopsis

Update the TLS Client Profile object by name and version
          
          Fields not allowed:
          - owned
          
          Fields not allowed to be null:
          - ciphers
          - protocols
          
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
apic tls-client-profiles:update [flags]
```

## Possible Usages

```
apic tls-client-profiles:update [flags] --id ID TLS_CLIENT_PROFILE_FILE
apic tls-client-profiles:update [flags] NAME:VERSION TLS_CLIENT_PROFILE_FILE
```

## Request examples

--------------------------------------------------------------
#### Example of tls client profile update by name and version.
--------------------------------------------------------------

```
ciphers:
- TLS_CHACHA20_POLY1305_SHA256
- TLS_AES_128_GCM_SHA256
- ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
- ECDHE_RSA_WITH_AES_128_CBC_SHA
- DHE_RSA_WITH_AES_256_GCM_SHA384
- DHE_RSA_WITH_AES_256_CBC_SHA256
insecure_server_connections: true
keystore_url: https://acme-apim.example.com/api/orgs/acme-org/keystores/acme-keystore
protocols:
- tls_v1.2
- tls_v1.3
server_name_indication: false
summary: An example TLS client profile update
title: acme TLS Client profile update
truststore_url: https://acme-apim.example.com/api/orgs/acme-org/truststores/acme-truststore
version: 1.0.0
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
