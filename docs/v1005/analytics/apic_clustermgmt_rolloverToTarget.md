# apic clustermgmt:rolloverToTarget

Creates a new index for a data stream or index alias.

## Synopsis

The rollover API creates a new index for a data stream or index alias.

```
apic clustermgmt:rolloverToTarget --mode analytics [flags]
```

## Options

```
      --accept-language string          Natural language and locale that the client prefers.
      --analytics-service string        Analytics service name or ID. (required)
      --dry_run                         If true, then the request simulates the operation only and returns the resulting state.
      --format string                   Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                            Help for clustermgmt:rolloverToTarget
      --index string                    Comma-separated list or wildcard expression of index names used to limit the request. (required)
      --master_timeout string           Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --output string                   Write file(s) to directory, instead of STDOUT (default "-")
  -s, --server string                   management server endpoint (required)
      --target string                   Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)
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
