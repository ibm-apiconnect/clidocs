---
tags:
- "group: permissions"
---
# apic permissions:list

Permissions list operations

## Synopsis

Permissions list operations

```
apic permissions:list [flags]
```

## Possible Usages

```
apic permissions:list [flags] --subcollection provider
apic permissions:list [flags] --subcollection org
apic permissions:list [flags] --subcollection deployment
apic permissions:list [flags] --subcollection consumer
apic permissions:list [flags] --subcollection cloud
apic permissions:list [flags] --my
```

## Options

```
      --fields string          List of field names to return
      --format string          Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                   Help for permissions:list
      --limit int32            Maximum number of items to return
      --my                     my
      --offset int32           Offset item number from list to begin return
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
