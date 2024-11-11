---
tags:
- "group: groups"
- "scope: catalog"
- "scope: cloud"
---
# apic groups:delete

Groups delete operations

## Synopsis

Groups delete operations

```
apic groups:delete [flags]
```

## Possible Usages

```

      apic groups:delete [flags] --space-initiated GROUP
      apic groups:delete [flags] --scope cloud GROUP
      apic groups:delete [flags] --scope catalog GROUP

```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for groups:delete
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
