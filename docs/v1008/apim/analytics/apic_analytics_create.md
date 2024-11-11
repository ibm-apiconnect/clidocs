---
tags:
- "group: analytics"
- "scope: catalog"
- "scope: space"
---
# apic analytics:create

Analytics create operations

## Synopsis

Analytics create operations

```
apic analytics:create [flags]
```

## Possible Usages

```

      apic analytics:create [flags] --scope space ANALYTICS_FILE
      apic analytics:create [flags] --scope catalog ANALYTICS_FILE

```

## Options

```
      --analytics-service string   Analytics Service name or id (required)
  -c, --catalog string             Catalog name or id (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                       Help for analytics:create
  -o, --org string                 Organization name or id (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --query string               Add query to request
      --scope string               scope
  -s, --server string              management server endpoint (required)
      --space string               Space name or id (required)
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
