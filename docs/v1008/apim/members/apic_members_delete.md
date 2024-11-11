---
tags:
- "group: members"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic members:delete

Members delete operations

## Synopsis

Members delete operations

```
apic members:delete [flags]
```

## Possible Usages

```

      apic members:delete [flags] --scope consumer-org --space-initiated MEMBER
      apic members:delete [flags] --scope space MEMBER
      apic members:delete [flags] --scope org MEMBER
      apic members:delete [flags] --scope consumer-org MEMBER
      apic members:delete [flags] --scope catalog MEMBER

```

## Options

```
      --cascade               Cascade the behavior
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for members:delete
  -o, --org string            Organization name or id (required)
      --output string         Write file(s) to directory, instead of STDOUT (default "-")
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
