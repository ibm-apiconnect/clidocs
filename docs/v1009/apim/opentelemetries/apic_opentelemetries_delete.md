---
tags:
- "group: opentelemetries"
---
# apic opentelemetries:delete

Delete the Opentelemetry object by name or id

## Synopsis

Delete the Opentelemetry object by name or id

```
apic opentelemetries:delete [flags]
```

## Possible Usages

```
apic opentelemetries:delete [flags] OPENTELEMETRY
```

## Options

```
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string   management server endpoint (required)
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