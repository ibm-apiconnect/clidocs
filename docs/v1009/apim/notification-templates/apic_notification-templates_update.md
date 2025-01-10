---
tags:
- "group: notification-templates"
- "scope: catalog"
---
# apic notification-templates:update

Notification Templates update operations

## Synopsis

Notification Templates update operations

```
apic notification-templates:update [flags]
```

## Possible Usages

```
apic notification-templates:update [flags] --scope space --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope space --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection provider NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope org --subcollection admin NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection provider NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection cloud NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope cloud --subcollection admin NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection space NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection consumer NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
apic notification-templates:update [flags] --scope catalog --subcollection catalog NOTIFICATION_TEMPLATE NOTIFICATION_TEMPLATE_FILE
```

## Options

```
  -c, --catalog string         Catalog name or id (required)
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for notification-templates:update
  -o, --org string             Organization name or id (required)
      --output string          Write file(s) to directory, instead of STDOUT (default "-")
      --scope string           scope
  -s, --server string          management server endpoint (required)
      --space string           Space name or id (required)
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
