---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:postAliases

Performs one or more alias actions in a single atomic operation

## Synopsis

Performs one or more alias actions in a single atomic operation.

```
apic clustermgmt:postAliases --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:postAliases --mode analytics [flags] ALIASES_BODY_FILE
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --timeout string             Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
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
