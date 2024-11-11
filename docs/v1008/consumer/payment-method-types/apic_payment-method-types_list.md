---
tags:
- "group: payment-method-types"
---
# apic payment-method-types:list

List the Payment Method Type objects

## Synopsis

List the Payment Method Type objects

```
apic payment-method-types:list --mode consumer [flags]
```

## Possible Usages

```

      apic payment-method-types:list --mode consumer [flags]

```

## Options

```
      --fields string   field name
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32     Maximum number of items to return
      --offset int32    Offset item number from list to begin return
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
