---
tags:
- "group: apps"
---
# apic apps:list

List the Application objects

## Synopsis

List the Application objects

```
apic apps:list [flags]
```

## Possible Usages

```
apic apps:list [flags] --space-initiated
apic apps:list [flags] --scope space
apic apps:list [flags] --scope catalog
apic apps:list [flags]
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --fields string         List of field names to return
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --limit int32           Maximum number of items to return
      --offset int32          Offset item number from list to begin return
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string         management server endpoint (required)
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
