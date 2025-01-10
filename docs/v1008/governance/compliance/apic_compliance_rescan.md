---
tags:
- "group: compliance"
- "scope: org"
---
# apic compliance:rescan

Compliance rescan operations

## Synopsis

Compliance rescan operations

```
apic compliance:rescan --mode governance [flags]
```

## Possible Usages

```

      apic compliance:rescan --mode governance [flags] --scope org

```

## Options

```
      --format string      Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help               Help for compliance:rescan
  -o, --org string         Organization name or id (required)
      --output string      Write file(s) to directory, instead of STDOUT (default "-")
      --scan string        Scan name or id (required)
      --scantitle string   Optional title for Scan
      --scope string       scope
  -s, --server string      management server endpoint (required)
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