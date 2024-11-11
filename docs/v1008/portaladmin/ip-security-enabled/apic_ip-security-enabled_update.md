---
tags:
- "group: ip-security-enabled"
---
# apic ip-security-enabled:update

Enable or disable IP security functionality within the Developer Portal

## Synopsis

Enable or disable IP security functionality within the Developer Portal

```
apic ip-security-enabled:update --mode portaladmin [flags]
```

## Possible Usages

```

      apic ip-security-enabled:update --mode portaladmin [flags]

```

## Options

```
      --enabled string               Set to true or false to enable or disable IP security. (required)
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
