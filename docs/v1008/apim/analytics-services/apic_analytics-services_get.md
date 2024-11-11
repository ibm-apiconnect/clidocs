---
tags:
- "group: analytics-services"
---
# apic analytics-services:get

Get the Analytics Service object by name or id

## Synopsis

Get the Analytics Service object by name or id

```
apic analytics-services:get [flags]
```

## Possible Usages

```

      apic analytics-services:get [flags] --scope space ANALYTICS_SERVICE
      apic analytics-services:get [flags] --scope org ANALYTICS_SERVICE
      apic analytics-services:get [flags] --scope catalog ANALYTICS_SERVICE
      apic analytics-services:get [flags] ANALYTICS_SERVICE

```

## Options

```
      --availability-zone string   Availability Zone name or id (required)
      --fields string              List of field names to return
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Organization name or id (required)
      --output string              Write file(s) to directory, use - for STDOUT. (default: cwd)
  -s, --server string              management server endpoint (required)
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
