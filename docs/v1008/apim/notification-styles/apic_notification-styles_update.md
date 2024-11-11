---
tags:
- "group: notification-styles"
- "scope: catalog"
- "scope: cloud"
- "scope: consumer"
- "scope: org"
---
# apic notification-styles:update

Notification Styles update operations

## Synopsis

Notification Styles update operations

```
apic notification-styles:update [flags]
```

## Possible Usages

```

      apic notification-styles:update [flags] --scope org NOTIFICATION_STYLE_FILE
      apic notification-styles:update [flags] --scope consumer NOTIFICATION_STYLE_FILE
      apic notification-styles:update [flags] --scope cloud NOTIFICATION_STYLE_FILE
      apic notification-styles:update [flags] --scope catalog NOTIFICATION_STYLE_FILE

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for notification-styles:update
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --scope string     scope
  -s, --server string    management server endpoint (required)
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
