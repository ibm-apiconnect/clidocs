# apic scan-reports:update

Scan Reports update operations

## Synopsis

Scan Reports update operations

```
apic scan-reports:update --mode governance [flags]
```

## Possible Usages

```
      apic scan-reports:update --mode governance [flags] --scope space SCAN_REPORT SCAN_REPORT_FILE
      apic scan-reports:update --mode governance [flags] --scope org SCAN_REPORT SCAN_REPORT_FILE
      apic scan-reports:update --mode governance [flags] --scope catalog SCAN_REPORT SCAN_REPORT_FILE
```

## Options

```
  -c, --catalog string   Catalog name or id (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help             Help for scan-reports:update
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
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
