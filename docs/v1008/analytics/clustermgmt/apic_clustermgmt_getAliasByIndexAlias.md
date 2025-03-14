---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getAliasByIndexAlias

Retrieves information for one or more aliases

## Synopsis

Retrieves information for one or more aliases.

```
apic clustermgmt:getAliasByIndexAlias --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getAliasByIndexAlias --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --alias string               Analytics service name or ID. (required)
      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can't be returned) will be ignored. Defaults to false.

      --local string               Whether to get information from the local node.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
      --target string              Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)
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
