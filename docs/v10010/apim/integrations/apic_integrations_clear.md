---
tags:
- "group: integrations"
---
# apic integrations:clear

Integrations clear operations

## Synopsis

Integrations clear operations

```
apic integrations:clear [flags]
```

## Possible Usages

```
apic integrations:clear [flags] --subcollection user-registry
apic integrations:clear [flags] --subcollection payment-method
apic integrations:clear [flags] --subcollection governance
apic integrations:clear [flags] --subcollection gateway-service
apic integrations:clear [flags] --subcollection billing
```

## Options

```
      --confirm string         Confirmation for critical updates (required)
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:clear
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
