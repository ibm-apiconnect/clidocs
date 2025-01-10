---
tags:
- "group: webhooks"
- "scope: all"
- "scope: catalog"
- "scope: cloud"
---
# apic webhooks:list

Webhooks list operations

## Synopsis

Webhooks list operations

```
apic webhooks:list [flags]
```

## Possible Usages

```
apic webhooks:list [flags] --scope cloud
apic webhooks:list [flags] --scope catalog
apic webhooks:list [flags] --scope all
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for webhooks:list
      --limit int32      Maximum number of items to return
      --offset int32     Offset item number from list to begin return
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
