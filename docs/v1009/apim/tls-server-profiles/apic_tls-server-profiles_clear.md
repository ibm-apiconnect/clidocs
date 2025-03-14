---
tags:
- "group: tls-server-profiles"
---
# apic tls-server-profiles:clear

Clear the TLS Server Profile objects

## Synopsis

Clear the TLS Server Profile objects

```
apic tls-server-profiles:clear [flags]
```

## Possible Usages

```
apic tls-server-profiles:clear [flags] TLS_SERVER_PROFILE_NAME
```

## Options

```
      --cascade          Cascade the behavior
      --confirm string   Confirmation for critical updates (required)
      --format string    Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string       Organization name or id (required)
      --output string    Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string    management server endpoint (required)
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
