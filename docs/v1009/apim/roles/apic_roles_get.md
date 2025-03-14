---
tags:
- "group: roles"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic roles:get

Roles get operations

## Synopsis

Roles get operations

```
apic roles:get [flags]
```

## Possible Usages

```
apic roles:get [flags] --scope consumer-org --space-initiated ROLE
apic roles:get [flags] --scope space ROLE
apic roles:get [flags] --scope org ROLE
apic roles:get [flags] --scope consumer-org ROLE
apic roles:get [flags] --scope catalog ROLE
```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --fields string         List of field names to return
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for roles:get
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, use - for STDOUT. (default: cwd)
      --scope string          scope
  -s, --server string         management server endpoint (required)
      --space string          Space name or id (required)
      --space-initiated       space-initiated
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
