---
tags:
- "group: tls-server-profiles"
---
# apic tls-server-profiles:get

Get the TLS Server Profile object by name and version

## Synopsis

Get the TLS Server Profile object by name and version

```
apic tls-server-profiles:get [flags]
```

## Possible Usages

```
apic tls-server-profiles:get [flags] --id ID
apic tls-server-profiles:get [flags] NAME:VERSION
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
