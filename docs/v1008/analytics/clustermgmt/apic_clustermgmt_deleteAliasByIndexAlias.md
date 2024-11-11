---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:deleteAliasByIndexAlias

Removes a data stream or index from an alias

## Synopsis

Removes a data stream or index from an alias.

```
apic clustermgmt:deleteAliasByIndexAlias --mode analytics [flags]
```

## Possible Usages

```

      apic clustermgmt:deleteAliasByIndexAlias --mode analytics [flags]

```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --alias string               Analytics service name or ID. (required)
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --target string              Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)
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
