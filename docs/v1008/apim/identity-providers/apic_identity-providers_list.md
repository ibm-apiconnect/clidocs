---
tags:
- "group: identity-providers"
- "scope: admin"
- "scope: provider"
---
# apic identity-providers:list

Identity Providers list operations

## Synopsis

Identity Providers list operations

```
apic identity-providers:list [flags]
```

## Possible Usages

```
apic identity-providers:list [flags] --scope provider
apic identity-providers:list [flags] --scope admin
```

## Options

```
      --fields string   List of field names to return
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help            Help for identity-providers:list
      --limit int32     Maximum number of items to return
      --offset int32    Offset item number from list to begin return
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
      --scope string    scope
  -s, --server string   management server endpoint (required)
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
