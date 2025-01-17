---
tags:
- "group: members"
- "scope: catalog"
- "scope: consumer-org"
- "scope: org"
- "scope: space"
---
# apic members:create

Members create operations

## Synopsis

Members create operations

```
apic members:create [flags]
```

## Possible Usages

```

      apic members:create [flags] --scope consumer-org --space-initiated MEMBER_FILE
      apic members:create [flags] --scope space MEMBER_FILE
      apic members:create [flags] --scope org MEMBER_FILE
      apic members:create [flags] --scope consumer-org MEMBER_FILE
      apic members:create [flags] --scope catalog MEMBER_FILE

```

## Options

```
  -c, --catalog string        Catalog name or id (required)
      --consumer-org string   Consumer Organization name or id (required)
      --format string         Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                  Help for members:create
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
