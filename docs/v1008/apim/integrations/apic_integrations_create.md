---
tags:
- "group: integrations"
---
# apic integrations:create

Integrations create operations

## Synopsis

Integrations create operations

```
apic integrations:create [flags]
```

## Possible Usages

```

      apic integrations:create [flags] --subcollection user-registry INTEGRATION_FILE
      apic integrations:create [flags] --subcollection payment-method INTEGRATION_FILE
      apic integrations:create [flags] --subcollection gateway-service INTEGRATION_FILE
      apic integrations:create [flags] --subcollection billing INTEGRATION_FILE

```

## Options

```
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for integrations:create
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
