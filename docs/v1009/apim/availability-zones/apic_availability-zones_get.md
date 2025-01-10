---
tags:
- "group: availability-zones"
---
# apic availability-zones:get

Get the Availability Zone object by name or id

## Synopsis

Get the Availability Zone object by name or id

```
apic availability-zones:get [flags]
```

## Possible Usages

```
apic availability-zones:get [flags] AVAILABILITY_ZONE
```

## Options

```
      --fields string   List of field names to return
      --format string   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string      Organization name or id (required)
      --output string   Write file(s) to directory, use - for STDOUT. (default: cwd)
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
