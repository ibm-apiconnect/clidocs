---
tags:
- "group: rules"
- "scope: catalog"
---
# apic rules:catalogUpdate

Update an engagement rule

## Synopsis

Updates a single engagement rule.

```
apic rules:catalogUpdate --mode engagement [flags]
```

## Possible Usages

```
apic rules:catalogUpdate --mode engagement [flags] ID RULE_FILE
```

## Request examples

--------------------
#### An example rule
--------------------

```
data_source: apievents
enabled: true
filters:
- not:
    bytes_sent: 0
group_by: api_name
id: 2651b739-6ff9-448d-967c-c15bfdaaf272
metric:
  avg:
    field: time_to_serve_request
schedule:
  period_interval: 1
  period_unit: MINUTES
  schedule_type: interval
timeframe: string
title: Large Payload
triggers:
- actions:
  - bcc: ""
    cc: ""
    destination_id: 858c9f23-af13-4408-845d-4e2eec321959
    id: 9291caef-fdd2-4774-a927-a4f5e75d016a
    message: API average latency greater than 2s
    subject: Slow APIs
    throttle:
      unit: MINUTES
      value: 1
    throttle_enabled: true
    title: string
    to: sre@example.com
  condition:
    operator: gt
    value: 2000
  severity: 1
  title: Greater than 2000
type: per_query
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
  -c, --catalog string             Catalog name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
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
