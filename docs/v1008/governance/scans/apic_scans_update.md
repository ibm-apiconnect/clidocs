---
tags:
- "group: scans"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic scans:update

Scans update operations

## Synopsis

Scans update operations

```
apic scans:update --mode governance [flags]
```

## Possible Usages

```
apic scans:update --mode governance [flags] --scope space SCAN SCAN_FILE
apic scans:update --mode governance [flags] --scope org SCAN SCAN_FILE
apic scans:update --mode governance [flags] --scope catalog SCAN SCAN_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for scans:update
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
