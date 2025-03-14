---
tags:
- "group: analytics-services"
---
# apic analytics-services:update

Update the Analytics Service object by name or id

## Synopsis

Update the Analytics Service object by name or id
          
          Fields not allowed to be null:
          - ingestion_endpoint_tls_client_profile_url
          - client_endpoint_tls_client_profile_url
          
          Fields not allowed:
          - endpoint
          - ingestion_endpoint
          - client_endpoint
          
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
apic analytics-services:update [flags]
```

## Possible Usages

```
apic analytics-services:update [flags] ANALYTICS_SERVICE ANALYTICS_SERVICE_FILE
```

## Request examples

--------------------------------------------------------------------
#### Example of fields which can be updated on an analytics service.
--------------------------------------------------------------------

```
summary: An example analytics service
title: ACME Updated Analytics Service
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
