---
tags:
- "group: integrations"
---
# apic integrations:update

Integrations update operations

## Synopsis

Integrations update operations

```
apic integrations:update [flags]
```

## Possible Usages

```
apic integrations:update [flags] --subcollection user-registry INTEGRATION INTEGRATION_FILE
apic integrations:update [flags] --subcollection payment-method INTEGRATION INTEGRATION_FILE
apic integrations:update [flags] --subcollection gateway-service INTEGRATION INTEGRATION_FILE
apic integrations:update [flags] --subcollection billing INTEGRATION INTEGRATION_FILE
```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:update
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
