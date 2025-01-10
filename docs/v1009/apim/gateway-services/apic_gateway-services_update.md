---
tags:
- "group: gateway-services"
---
# apic gateway-services:update

Update the Gateway Service object by name or id

## Synopsis

Update the Gateway Service object by name or id
          
          Fields not allowed to be null:
          - endpoint
          - api_endpoint_base
          - sni
          
          Fields not allowed:
          - owned
          - endpoint
          - integration_url
          - gateway_service_type
          - api_endpoint_base
          - service_supported_features
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - org_url
          - availability_zone_url

```
apic gateway-services:update [flags]
```

## Possible Usages

```
apic gateway-services:update [flags] GATEWAY_SERVICE GATEWAY_SERVICE_FILE
```

## Request examples

---------------------------------------------------------------------------------------------------
#### Example of fields which can be updated on a gateway service with LDAP connection pool enabled.
---------------------------------------------------------------------------------------------------

```
api_endpoint_base: https://gw.acme-apim.example.com
communication_to_analytics_with_jwt: true
endpoint: https://gw.acme-apim.example.com
gateway_service_type: datapower-api-gateway
ldap_cxn_pool:
  document_cache_size: 0
  enabled: true
  idle_timeout: 120
  max_pool_size: 35
sni:
- host: '*'
  tls_server_profile_url: https://acme-apim.example.com/api/orgs/tls-server-profiles
summary: An example gateway service
title: ACME Updated Gateway Service
```

## Options

```
      --availability-zone string   Availability Zone name or id (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Organization name or id (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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
