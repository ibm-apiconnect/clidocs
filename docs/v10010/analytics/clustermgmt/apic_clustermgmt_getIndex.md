---
tags:
- "group: clustermgmt"
---
# apic clustermgmt:getIndex

Returns indices information

## Synopsis

Returns information about one or more indices. For data streams, the API returns information about the stream's backing indices.

```
apic clustermgmt:getIndex --mode analytics [flags]
```

## Possible Usages

```
apic clustermgmt:getIndex --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.
                                   
      --features string            Return information about specific index features. Supports comma- separated values.
      --flat_settings              If true, returns settings in flat format.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can't be returned) will be ignored. Defaults to false.
                                   
      --include_defaults           If true, returns all default cluster settings. Defaults to false.
      --index string               Comma-separated list or wildcard expression of index names used to limit the request. (required)
      --local string               Whether to get information from the local node.
      --master_timeout string      Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
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
