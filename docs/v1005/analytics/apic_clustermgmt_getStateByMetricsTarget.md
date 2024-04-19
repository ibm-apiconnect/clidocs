# apic clustermgmt:getStateByMetricsTarget

Returns an internal representation of the cluster state for debugging or diagnostic purposes.

## Synopsis

The cluster state is an internal data structure which keeps track of a variety of information needed by every node.

```
apic clustermgmt:getStateByMetricsTarget --mode analytics [flags]
```

## Options

```
      --accept-language string            Natural language and locale that the client prefers.
      --allow_no_indices                  If true, the wildcard indices expression that resolves into no concrete indices will be ignored. (This includes _all string or when no indices have been specified). Defaults to true.
      --analytics-service string          Analytics service name or ID. (required)
      --expand_wildcards string           Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.

      --flat_settings                     If true, returns settings in flat format.
      --format string                     Output format. One of [json yaml octet-stream go-template=... go-template-file=...], defaults to yaml.
  -h, --help                              Help for clustermgmt:getStateByMetricsTarget
      --ignore_unavailable                For operations about indices, if true, unavailable indices (missing or closed) will be ignored. For operations about snapshots, if true, unavailable snapshots (corrupted or otherwise temporarily can’t be returned) will be ignored. Defaults to false.

      --local string                      Whether to get information from the local node.
      --master_timeout string             Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
      --metrics string                    A comma-separated list of metrics (required)
      --output string                     Write file(s) to directory, instead of STDOUT (default "-")
      --pretty                            Prettify response
  -s, --server string                     management server endpoint (required)
      --target string                     Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. (required)
      --wait_for_metadata_version int32   Waits for the metadata version to be equal or greater than the specified metadata version.
      --wait_for_timeout string           Specifies the maximum time to wait for wait_for_metadata_version before timing out.
```

## Options inherited from parent commands

```
      --accept-license        Accept the license for API Connect
      --debug                 Enable debug output
      --debug-output string   Write debug output to file
      --live-help             Enable or disable tracking of limited usage information
  -m, --mode string           Toolkit operation mode (default "apim")
```
