---
tags:
- "group: payment-method-types"
---
# apic payment-method-types:get

Get the Payment Method Type object by name or id

## Synopsis

Get the Payment Method Type object by name or id

```
apic payment-method-types:get --mode consumer [flags]
```

## Possible Usages

```
apic payment-method-types:get --mode consumer [flags] PAYMENT_METHOD_TYPE
```

## Options

```
      --fields string   field name
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
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
