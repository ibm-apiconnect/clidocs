---
tags:
- "group: payment-methods"
---
# apic payment-methods:create

Create a Payment Method object

## Synopsis

Create a Payment Method object
          
          Required fields:
          - payment_method_type_url
          - billing_url
          - configuration
          
          Fields allowed but ignored:
          - id
          - type
          - api_version
          - scope
          - created_at
          - updated_at
          - url
          - consumer_org_url

```
apic payment-methods:create --mode consumer [flags]
```

## Possible Usages

```
apic payment-methods:create --mode consumer [flags] PAYMENT_METHOD_FILE
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
