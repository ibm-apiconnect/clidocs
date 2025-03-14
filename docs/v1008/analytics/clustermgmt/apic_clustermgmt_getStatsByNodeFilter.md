---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getStatsByNodeFilter

Returns cluster statistics

## Synopsis

The Cluster Stats API allows to retrieve statistics from a cluster wide perspective. The API returns basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).

```
apic clustermgmt:getStatsByNodeFilter --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getStatsByNodeFilter --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --analytics-service string   Analytics service name or ID. (required)
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --node-filter string         Comma-separated list of node filters used to limit returned information. Defaults to all nodes in the cluster. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                     Prettify response
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
