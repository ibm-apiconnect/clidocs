---
tags:
- "group: gateway-extensions"
- "scope: org"
---
# apic gateway-extensions:delete

Gateway Extensions delete operations

## Synopsis

Gateway Extensions delete operations

```
apic gateway-extensions:delete [flags]
```

## Possible Usages

```
apic gateway-extensions:delete [flags] --scope org
```

## Options

```
      --availability-zone string   Availability Zone name or id (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --gateway-service string     Gateway Service name or id (required)
  -h, --help                       Help for gateway-extensions:delete
  -o, --org string                 Organization name or id (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --scope string               scope
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
