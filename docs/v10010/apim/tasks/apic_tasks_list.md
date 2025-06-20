---
tags:
- "group: tasks"
- "scope: catalog"
- "scope: space"
---
# apic tasks:list

Tasks list operations

## Synopsis

Tasks list operations

```
apic tasks:list [flags]
```

## Possible Usages

```
apic tasks:list [flags] --scope space
apic tasks:list [flags] --scope catalog
apic tasks:list [flags] --originated
apic tasks:list [flags] --my
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for tasks:list
      --limit int32      Maximum number of items to return
      --my               my
      --offset int32     Offset item number from list to begin return
  -o, --org string       Organization name or id (required)
      --originated       originated
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
      --query string     Add query to request
      --scope string     scope
  -s, --server string    management server endpoint (required)
      --space string     Space name or id (required)
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
