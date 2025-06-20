---
tags:
- "group: integrations"
---
# apic integrations:list

Integrations list operations

## Synopsis

Integrations list operations

```
apic integrations:list [flags]
```

## Possible Usages

```
apic integrations:list [flags] --subcollection user-registry
apic integrations:list [flags] --subcollection payment-method
apic integrations:list [flags] --subcollection governance
apic integrations:list [flags] --subcollection gateway-service
apic integrations:list [flags] --subcollection billing
```

## Options

```
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:list
      --limit int32            Maximum number of items to return
      --offset int32           Offset item number from list to begin return
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string          management server endpoint (required)
      --subcollection string   subcollection
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
