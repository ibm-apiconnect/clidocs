---
tags:
- "group: scan-reports"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic scan-reports:list

Scan Reports list operations

## Synopsis

Scan Reports list operations

```
apic scan-reports:list --mode governance [flags]
```

## Possible Usages

```

      apic scan-reports:list --mode governance [flags] --scope space
      apic scan-reports:list --mode governance [flags] --scope org
      apic scan-reports:list --mode governance [flags] --scope catalog

```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for scan-reports:list
      --limit int32      Maximum number of items to return
      --offset int32     Offset item number from list to begin return
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
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
