# apic clustermgmt:closeIndex

Closes an index.

## Synopsis

You use the close index API to close open indices.

```
apic clustermgmt:closeIndex --mode analytics [flags]
```

## Options

```
      --accept-language string          Natural language and locale that the client prefers.
      --allow_no_indices                If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string        Analytics service name or ID. (required)
      --expand_wildcards string         Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                            Help for clustermgmt:closeIndex
      --ignore_unavailable              For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can’t be returned) will be ignored. Defaults to false.

      --index string                    Comma-separated list or wildcard expression of index names used to limit the request. (required)
      --master_timeout string           Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string                   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                   management server endpoint (required)
      --timeout string                  Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
      --wait_for_active_shards string   A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait. Defaults to 0.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
