---
tags:
- "group: analytics-services"
---
# apic analytics-services:list

List the Analytics Service objects

## Synopsis

List the Analytics Service objects

```
apic analytics-services:list [flags]
```

## Possible Usages

```

      apic analytics-services:list [flags] --scope space
      apic analytics-services:list [flags] --scope org
      apic analytics-services:list [flags] --scope catalog
      apic analytics-services:list [flags]

```

## Options

```
      --availability-zone string   Availability Zone name or id (required)
      --fields string              List of field names to return
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32                Maximum number of items to return
      --offset int32               Offset item number from list to begin return
  -o, --org string                 Organization name or id (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
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