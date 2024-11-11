---
tags:
- "group: gateway-services"
---
# apic gateway-services:create

Create a Gateway Service object

## Synopsis

Create a Gateway Service object
          
          Required fields:
          - endpoint
          - api_endpoint_base
          - sni
          
          Fields not allowed:
          - owned
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
apic gateway-services:create [flags]
```

## Possible Usages

```

      apic gateway-services:create [flags] GATEWAY_SERVICE_FILE

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
