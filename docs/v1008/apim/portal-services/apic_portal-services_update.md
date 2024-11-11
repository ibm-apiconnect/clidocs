---
tags:
- "group: portal-services"
---
# apic portal-services:update

Update the Portal Service object by name or id

## Synopsis

Update the Portal Service object by name or id
          
          Fields not allowed to be null:
          - endpoint_tls_client_profile_url
          - web_endpoint_base
          
          Fields not allowed:
          - owned
          - endpoint
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
apic portal-services:update [flags]
```

## Possible Usages

```

      apic portal-services:update [flags] PORTAL_SERVICE PORTAL_SERVICE_FILE

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
