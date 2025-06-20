---
tags:
- "group: integrations"
---
# apic integrations:delete

Integrations delete operations

## Synopsis

Integrations delete operations

```
apic integrations:delete [flags]
```

## Possible Usages

```
apic integrations:delete [flags] --subcollection user-registry INTEGRATION
apic integrations:delete [flags] --subcollection payment-method INTEGRATION
apic integrations:delete [flags] --subcollection governance INTEGRATION
apic integrations:delete [flags] --subcollection gateway-service INTEGRATION
apic integrations:delete [flags] --subcollection billing INTEGRATION
```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:delete
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
