---
tags:
- "group: service"
---
# apic service:content-refresh

Triggers a cloud level content refresh of the Developer Portal Service configuration from API Manager.

## Synopsis

Triggers a cloud level content refresh of the Developer Portal Service configuration from API Manager.

```
apic service:content-refresh --mode portaladmin [flags]
```

## Possible Usages

```
apic service:content-refresh --mode portaladmin [flags]
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --portal_service_name string   The name of the Portal Service (required)
  -s, --server string                management server endpoint (required)
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
