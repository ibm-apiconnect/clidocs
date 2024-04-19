# apic clustermgmt:deleteIndex

Deletes one or more indices.

## Synopsis

Deleting an index deletes its documents, shards, and metadata.

```
apic clustermgmt:deleteIndex --mode analytics [flags]
```

## Options

```
      --accept-language string     Natural language and locale that the client prefers.
      --allow_no_indices           If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string   Analytics service name or ID. (required)
      --expand_wildcards string    Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --force                      If true, this request forces a delete even if it is the current write alias target and will prevent the ingestion of new analytics data. Defaults to false.
      --format string              Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                       Help for clustermgmt:deleteIndex
      --ignore_unavailable         For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can’t be returned) will be ignored. Defaults to false.

      --index string               Comma-separated list or wildcard expression of index names used to limit the request. (required)
      --output string              Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string              management server endpoint (required)
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
