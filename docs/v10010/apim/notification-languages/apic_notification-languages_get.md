---
tags:
- "group: notification-languages"
- "scope: catalog"
- "scope: cloud"
- "scope: org"
- "scope: space"
---
# apic notification-languages:get

Notification Languages get operations

## Synopsis

Notification Languages get operations

```
apic notification-languages:get [flags]
```

## Possible Usages

```
apic notification-languages:get [flags] --scope space --subcollection space NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope space --subcollection consumer NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope org --subcollection space NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope org --subcollection provider NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope org --subcollection consumer NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope org --subcollection catalog NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope org --subcollection admin NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection space NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection provider NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection consumer NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection cloud NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection catalog NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope cloud --subcollection admin NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope catalog --subcollection space NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope catalog --subcollection consumer NOTIFICATION_LANGUAGE
apic notification-languages:get [flags] --scope catalog --subcollection catalog NOTIFICATION_LANGUAGE
```

## Options

```
  -c, --catalog string                 Catalog name or id (required)
      --format string                  Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                           Help for notification-languages:get
      --notification-template string   Notification Template name or id (required)
  -o, --org string                     Organization name or id (required)
      --output string                  Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string                   scope
  -s, --server string                  management server endpoint (required)
      --space string                   Space name or id (required)
      --subcollection string           subcollection
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
