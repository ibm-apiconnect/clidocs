---
tags:
- "group: groups"
- "scope: catalog"
- "scope: cloud"
---
# apic groups:update

Groups update operations

## Synopsis

Groups update operations

```
apic groups:update [flags]
```

## Possible Usages

```

      apic groups:update [flags] --space-initiated GROUP GROUP_FILE
      apic groups:update [flags] --scope cloud GROUP GROUP_FILE
      apic groups:update [flags] --scope catalog GROUP GROUP_FILE

```

## Options

```
  -c, --catalog string    Catalog name or id (required)
      --format string     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help              Help for groups:update
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
