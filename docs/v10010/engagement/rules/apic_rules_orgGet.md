---
tags:
- "group: rules"
- "scope: org"
---
# apic rules:orgGet

Get an engagement rule

## Synopsis

Returns a single engagement rule.

```
apic rules:orgGet --mode engagement [flags]
```

## Possible Usages

```
apic rules:orgGet --mode engagement [flags] ID
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --end string                 If set, only return items with a datetime equal or older than this. The date-time value should be in ISO format. For example, 2021-07-21T00:00:000Z.
                                   
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -o, --org string                 Provider organization name or ID. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --start string               If set, only return items with a datetime equal or newer than this. The date-time value should be in ISO format. For example, 2021-07-21T00:00:000Z.
                                   
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
