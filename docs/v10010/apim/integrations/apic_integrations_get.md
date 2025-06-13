---
tags:
- "group: integrations"
---
# apic integrations:get

Integrations get operations

## Synopsis

Integrations get operations

```
apic integrations:get [flags]
```

## Possible Usages

```
apic integrations:get [flags] --subcollection user-registry INTEGRATION
apic integrations:get [flags] --subcollection payment-method INTEGRATION
apic integrations:get [flags] --subcollection governance INTEGRATION
apic integrations:get [flags] --subcollection gateway-service INTEGRATION
apic integrations:get [flags] --subcollection billing INTEGRATION
```

## Options

```
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:get
      --output string          Write file(s) to directory, use - for STDOUT. (default: cwd)
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
