---
tags:
- "group: scan-reports"
- "scope: catalog"
- "scope: org"
- "scope: space"
---
# apic scan-reports:get

Scan Reports get operations

## Synopsis

Scan Reports get operations

```
apic scan-reports:get --mode governance [flags]
```

## Possible Usages

```
apic scan-reports:get --mode governance [flags] --scope space SCAN_REPORT
apic scan-reports:get --mode governance [flags] --scope org SCAN_REPORT
apic scan-reports:get --mode governance [flags] --scope catalog SCAN_REPORT
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --fields string    List of field names to return
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for scan-reports:get
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, use - for STDOUT. (default: cwd)
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
