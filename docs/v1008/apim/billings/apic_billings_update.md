---
tags:
- "group: billings"
---
# apic billings:update

Update the Billing object by name or id

## Synopsis

Update the Billing object by name or id
          
          Fields not allowed to be null:
          - integration_url
          
          Fields not allowed:
          - job_queue_status
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url

```
apic billings:update [flags]
```

## Possible Usages

```

      apic billings:update [flags] BILLING BILLING_FILE

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
