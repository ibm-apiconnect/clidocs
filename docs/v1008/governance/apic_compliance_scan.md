# apic compliance:scan

Compliance scan operations

## Synopsis

Compliance scan operations

```
apic compliance:scan --mode governance [flags]
```

## Possible Usages

```
      apic compliance:scan --mode governance [flags] --scope org COMPLIANCE_REQUEST_FILE
```

## Options

```
      --format string                Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                         Help for compliance:scan
  -o, --org string                   Organization name or id (required)
      --output string                Write file(s) to directory, instead of STDOUT (default "-")
      --ruleset_format_type string   List out rulesets that have the queried ruleset format type
      --scantitle string             Optional title for Scan
      --scope string                 scope
  -s, --server string                management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
