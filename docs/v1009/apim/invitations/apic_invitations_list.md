---
tags:
- "group: invitations"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic invitations:list

Invitations list operations

## Synopsis

Invitations list operations

```
apic invitations:list [flags]
```

## Possible Usages

```
apic invitations:list [flags] --scope consumer-org --space-initiated
apic invitations:list [flags] --scope space
apic invitations:list [flags] --scope org
apic invitations:list [flags] --scope consumer-org
apic invitations:list [flags] --scope catalog
```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --fields string     List of field names to return
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for invitations:list
      --limit int32       Maximum number of items to return
      --offset int32      Offset item number from list to begin return
  -o, --org string        Organization name or id (required)
      --output string     Write file(s) to directory, instead of STDOUT (default "-")
      --scope string      scope
  -s, --server string     management server endpoint (required)
      --space string      Space name or id (required)
      --space-initiated   space-initiated
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
