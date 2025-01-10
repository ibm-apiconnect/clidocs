---
tags:
- "group: notification-templates"
- "scope: catalog"
---
# apic notification-templates:list

Notification Templates list operations

## Synopsis

Notification Templates list operations

```
apic notification-templates:list [flags]
```

## Possible Usages

```
apic notification-templates:list [flags] --scope space --subcollection space
apic notification-templates:list [flags] --scope space --subcollection consumer
apic notification-templates:list [flags] --scope org --subcollection space
apic notification-templates:list [flags] --scope org --subcollection provider
apic notification-templates:list [flags] --scope org --subcollection consumer
apic notification-templates:list [flags] --scope org --subcollection catalog
apic notification-templates:list [flags] --scope org --subcollection admin
apic notification-templates:list [flags] --scope cloud --subcollection space
apic notification-templates:list [flags] --scope cloud --subcollection provider
apic notification-templates:list [flags] --scope cloud --subcollection consumer
apic notification-templates:list [flags] --scope cloud --subcollection cloud
apic notification-templates:list [flags] --scope cloud --subcollection catalog
apic notification-templates:list [flags] --scope cloud --subcollection admin
apic notification-templates:list [flags] --scope catalog --subcollection space
apic notification-templates:list [flags] --scope catalog --subcollection consumer
apic notification-templates:list [flags] --scope catalog --subcollection catalog
```

## Options

```
  -c, --catalog string         Catalog name or id (required)
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for notification-templates:list
      --limit int32            Maximum number of items to return
      --offset int32           Offset item number from list to begin return
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
