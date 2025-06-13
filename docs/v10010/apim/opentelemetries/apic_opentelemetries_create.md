---
tags:
- "group: opentelemetries"
---
# apic opentelemetries:create

Create a Opentelemetry object

## Synopsis

Create a Opentelemetry object
          
          Fields not allowed:
          - gateway_service_urls
          
          Required fields:
          - endpoints
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic opentelemetries:create [flags]
```

## Possible Usages

```
apic opentelemetries:create [flags] OPENTELEMETRY_FILE
```

## Request examples

---------------------------------------
#### Example of opentelemetry creation.
---------------------------------------

```
attributes:
- name: env
  value: production
batching:
  batch-size: 500
  export-interval: 3000
  export-timeout: 50000
  max-queue-size: 1000
  max-threads: 3
endpoints:
- endpoint: https://open_telemetry.com
  protocol: grpc
  signals:
  - logs
  tls_client_profile_url: https://acme-apim.example.com/api/orgs/org1/tls-client-profiles/tls-client-profile1
headers:
- name: Authorization
  value: Bearer
name: opentelemetry
sampling:
  parent-based: true
  sampler-ratio: 50
  sampler-type: always_on
title: Opentelemetry
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
